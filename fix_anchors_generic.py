#!/usr/bin/env python3
"""
Generic script to fix broken anchors for any product documentation.
Usage: python3 fix_anchors_generic.py <product_name>
"""

import os
import re
import sys
import subprocess
from pathlib import Path

def run_build_and_get_errors(product_name):
    """Run the build for a product and extract broken anchor errors."""
    print(f"Running build for {product_name}...")
    
    try:
        # Run the build command and capture output
        result = subprocess.run(
            ['node', 'build-product.js', product_name],
            capture_output=True,
            text=True,
            cwd='/Users/jordan.violet/development/docs'
        )
        
        # The error output contains the broken anchors
        error_output = result.stderr
        
        if "Docusaurus found broken anchors!" not in error_output:
            print("✅ No broken anchors found!")
            return []
        
        # Extract broken anchor information
        broken_anchors = []
        lines = error_output.split('\n')
        
        current_file = None
        for line in lines:
            # Look for source page path lines
            if "- Broken anchor on source page path = " in line:
                # Extract the file path
                path_match = re.search(r'/docs/([^/]+)/.*?:', line)
                if path_match:
                    relative_path = line.split(' = ')[1].split(':')[0]
                    current_file = relative_path
            
            # Look for linking to lines
            elif "-> linking to " in line and current_file:
                # Extract the anchor
                anchor_match = re.search(r'#([^)\s]+)', line)
                if anchor_match:
                    anchor = anchor_match.group(1)
                    broken_anchors.append((current_file, anchor))
        
        return broken_anchors
        
    except Exception as e:
        print(f"Error running build: {e}")
        return []

def get_file_headings(file_path):
    """Get all headings from a file and their levels."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all markdown headings (lines starting with #)
        headings = re.findall(r'^(#+)\s+(.+)$', content, re.MULTILINE)
        
        result = []
        for level_hashes, heading_text in headings:
            level = len(level_hashes)
            # Convert to anchor format
            anchor = heading_text.lower()
            anchor = re.sub(r'[^\w\s-]', '', anchor)  # Remove special chars
            anchor = re.sub(r'\s+', '-', anchor)  # Replace spaces with hyphens
            anchor = re.sub(r'-+', '-', anchor)  # Replace multiple hyphens
            anchor = anchor.strip('-')  # Remove leading/trailing hyphens
            result.append((level, anchor, heading_text))
        
        return result
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return []

def fix_anchor_in_file(file_path, target_anchor):
    """Fix a specific anchor in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Get headings in this file to check if anchor references a root heading
        headings = get_file_headings(file_path)
        
        # Check if target anchor exists and what level it is
        target_heading_level = None
        target_heading_text = None
        for level, anchor, heading_text in headings:
            if anchor == target_anchor:
                target_heading_level = level
                target_heading_text = heading_text
                break
        
        if target_heading_level is None:
            print(f"    Anchor #{target_anchor} does not exist - removing")
            action = "remove_nonexistent"
        elif target_heading_level == 1:
            print(f"    Anchor #{target_anchor} references root heading '{target_heading_text}' - removing")
            action = "remove_root"
        else:
            print(f"    Anchor #{target_anchor} references level {target_heading_level} heading - should be valid")
            return 0
        
        # Pattern to match links with this anchor (self-references)
        pattern1 = rf'\[([^\]]+)\]\(#{re.escape(target_anchor)}\)'
        
        # Pattern for full URL links with this anchor
        pattern2 = rf'\[([^\]]+)\]\(([^)]*?)#{re.escape(target_anchor)}\)'
        
        changes_made = 0
        
        # Fix self-references (just anchor)
        def replace_self_link(match):
            nonlocal changes_made
            link_text = match.group(1)
            changes_made += 1
            return link_text  # Just keep the text, remove the link
        
        # Fix URL links with anchor
        def replace_url_link(match):
            nonlocal changes_made
            link_text = match.group(1)
            url_part = match.group(2)
            changes_made += 1
            if url_part.strip():  # If there's a URL part
                return f'[{link_text}]({url_part})'
            else:  # If it's just an anchor with no URL
                return link_text
        
        # Apply both patterns
        new_content = re.sub(pattern1, replace_self_link, content)
        new_content = re.sub(pattern2, replace_url_link, new_content)
        
        # Write back if changes were made
        if new_content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"    ✓ Fixed {changes_made} anchor reference(s)")
            return changes_made
        else:
            return 0
        
    except Exception as e:
        print(f"    Error processing file: {e}")
        return 0

def convert_doc_path_to_file_path(doc_path, product_name):
    """Convert a documentation path to actual file path."""
    # Remove the /docs/ prefix and add the actual file system path
    if doc_path.startswith('/docs/'):
        relative_path = doc_path[6:]  # Remove '/docs/'
        # Try index.md first
        index_path = f"/Users/jordan.violet/development/docs/docs/{relative_path}/index.md"
        if os.path.exists(index_path):
            return index_path
        # If index.md doesn't exist, try .md file directly
        md_path = f"/Users/jordan.violet/development/docs/docs/{relative_path}.md"
        if os.path.exists(md_path):
            return md_path
    return None

def get_all_products():
    """Automatically detect all product folders in /docs."""
    docs_path = "/Users/jordan.violet/development/docs/docs"
    products = []
    
    try:
        for item in os.listdir(docs_path):
            item_path = os.path.join(docs_path, item)
            if os.path.isdir(item_path) and not item.startswith('.'):
                products.append(item)
        
        products.sort()  # Sort alphabetically
        return products
    except Exception as e:
        print(f"Error scanning docs directory: {e}")
        return []

def process_single_product(product_name):
    """Process a single product and return summary stats."""
    print(f"\n🔧 Processing {product_name}")
    print("=" * 60)
    
    # Get broken anchors from build output
    broken_anchors = run_build_and_get_errors(product_name)
    
    if not broken_anchors:
        print("✅ No broken anchors found! Build is clean.")
        return {"product": product_name, "initial_errors": 0, "fixes": 0, "final_errors": 0, "success": True}
    
    initial_error_count = len(broken_anchors)
    print(f"\n📋 Found {initial_error_count} broken anchor(s)")
    print("-" * 40)
    
    total_fixes = 0
    processed_files = set()
    
    # Group by file for better organization
    files_to_anchors = {}
    for doc_path, anchor in broken_anchors:
        if doc_path not in files_to_anchors:
            files_to_anchors[doc_path] = []
        files_to_anchors[doc_path].append(anchor)
    
    # Process each file
    for doc_path, anchors in files_to_anchors.items():
        file_path = convert_doc_path_to_file_path(doc_path, product_name)
        
        if not file_path or not os.path.exists(file_path):
            print(f"\n❌ File not found: {doc_path}")
            continue
        
        print(f"\n📁 Processing: {os.path.basename(os.path.dirname(file_path))}/")
        print(f"   File: {os.path.basename(file_path)}")
        
        file_fixes = 0
        for anchor in anchors:
            print(f"  🔍 Checking anchor: #{anchor}")
            fixes = fix_anchor_in_file(file_path, anchor)
            file_fixes += fixes
        
        if file_fixes > 0:
            processed_files.add(file_path)
            total_fixes += file_fixes
    
    # Verify fixes
    final_error_count = 0
    if total_fixes > 0:
        print(f"\n🔄 Re-running build for {product_name} to verify fixes...")
        remaining_errors = run_build_and_get_errors(product_name)
        final_error_count = len(remaining_errors)
        
        if final_error_count == 0:
            print("✅ SUCCESS! All broken anchors have been fixed!")
        else:
            print(f"⚠️  {final_error_count} broken anchor(s) still remain.")
    
    print(f"\n📊 Summary for {product_name}:")
    print(f"   Files processed: {len(processed_files)}")
    print(f"   Total fixes applied: {total_fixes}")
    
    return {
        "product": product_name,
        "initial_errors": initial_error_count,
        "fixes": total_fixes,
        "final_errors": final_error_count,
        "success": final_error_count == 0
    }

def main():
    """Main function."""
    if len(sys.argv) == 1:
        # No arguments provided - process all products
        print("🚀 Auto-detecting and processing ALL products...")
        products = get_all_products()
        
        if not products:
            print("❌ No product folders found in /docs")
            return
        
        print(f"📦 Found {len(products)} product(s): {', '.join(products)}")
        
        all_results = []
        
        for product in products:
            try:
                result = process_single_product(product)
                all_results.append(result)
            except Exception as e:
                print(f"❌ Error processing {product}: {e}")
                all_results.append({
                    "product": product,
                    "initial_errors": "Error",
                    "fixes": 0,
                    "final_errors": "Error",
                    "success": False
                })
        
        # Print overall summary
        print("\n" + "=" * 80)
        print("🏆 OVERALL SUMMARY")
        print("=" * 80)
        
        total_initial_errors = 0
        total_fixes = 0
        total_final_errors = 0
        successful_products = 0
        
        print(f"{'Product':<20} {'Initial':<8} {'Fixed':<6} {'Remaining':<10} {'Status':<10}")
        print("-" * 60)
        
        for result in all_results:
            product = result["product"]
            initial = result["initial_errors"]
            fixes = result["fixes"]
            final = result["final_errors"]
            status = "✅ Clean" if result["success"] else "⚠️ Issues" if final != "Error" else "❌ Error"
            
            print(f"{product:<20} {initial:<8} {fixes:<6} {final:<10} {status:<10}")
            
            if isinstance(initial, int):
                total_initial_errors += initial
            if isinstance(fixes, int):
                total_fixes += fixes
            if isinstance(final, int):
                total_final_errors += final
            if result["success"]:
                successful_products += 1
        
        print("-" * 60)
        print(f"{'TOTALS':<20} {total_initial_errors:<8} {total_fixes:<6} {total_final_errors:<10} {successful_products}/{len(products)} Clean")
        
        if total_final_errors == 0:
            print("\n🎉 ALL PRODUCTS ARE NOW CLEAN! No broken anchors remaining.")
        else:
            print(f"\n⚠️  {total_final_errors} broken anchors remain across all products.")
            print("   Consider running the script again or fixing manually.")
    
    elif len(sys.argv) == 2:
        # Single product provided
        product_name = sys.argv[1]
        process_single_product(product_name)
    
    else:
        print("Usage:")
        print("  python3 fix_anchors_generic.py                    # Process ALL products")
        print("  python3 fix_anchors_generic.py <product_name>     # Process single product")
        print("\nExamples:")
        print("  python3 fix_anchors_generic.py                    # Auto-detect and fix all")
        print("  python3 fix_anchors_generic.py usercube           # Fix only usercube")
        sys.exit(1)
    
    print("\n🏁 Script completed!")

if __name__ == "__main__":
    main()
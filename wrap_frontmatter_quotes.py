#!/usr/bin/env python3
"""
Script to wrap front matter values in quotes for all markdown files in the 1secure directory.

This script will:
1. Find all .md files in the /docs/1secure/ directory recursively
2. Parse the front matter in each file
3. Wrap title, pagination_label, sidebar_label, and description values in quotes
4. Preserve all other front matter fields unchanged
5. Keep the markdown content unchanged
"""

import os
import re
import glob
from pathlib import Path

def wrap_frontmatter_quotes(file_path):
    """
    Process a single markdown file to wrap front matter values in quotes.
    
    Args:
        file_path (str): Path to the markdown file
        
    Returns:
        bool: True if file was modified, False otherwise
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has front matter
        if not content.startswith('---'):
            print(f"No front matter found in {file_path}")
            return False
        
        # Split content into front matter and markdown content
        parts = content.split('---', 2)
        if len(parts) < 3:
            print(f"Invalid front matter format in {file_path}")
            return False
        
        front_matter = parts[1]
        markdown_content = parts[2]
        
        # Fields to wrap in quotes
        fields_to_quote = ['title', 'pagination_label', 'sidebar_label', 'description']
        
        modified = False
        lines = front_matter.split('\n')
        new_lines = []
        
        for line in lines:
            original_line = line
            
            # Process each field that needs quotes
            for field in fields_to_quote:
                # Match field: value pattern (handle existing quotes)
                pattern = rf'^(\s*{field}\s*:\s*)(.*)$'
                match = re.match(pattern, line)
                
                if match:
                    prefix = match.group(1)
                    value = match.group(2).strip()
                    
                    # Only add quotes if not already quoted and value is not empty
                    if value and not (value.startswith('"') and value.endswith('"')) and not (value.startswith("'") and value.endswith("'")):
                        # Escape any existing quotes in the value
                        escaped_value = value.replace('"', '\\"')
                        new_line = f'{prefix}"{escaped_value}"'
                        line = new_line
                        modified = True
                        break
            
            new_lines.append(line)
        
        if modified:
            # Reconstruct the file content
            new_front_matter = '\n'.join(new_lines)
            new_content = f"---{new_front_matter}---{markdown_content}"
            
            # Write the updated content back to file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"✅ Updated quotes in: {file_path}")
            return True
        else:
            print(f"ℹ️  No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all markdown files in the 1secure directory."""
    
    # Define the base directory
    base_dir = "/Users/jordan.violet/development/docs/docs/1secure"
    
    if not os.path.exists(base_dir):
        print(f"❌ Directory not found: {base_dir}")
        return
    
    # Find all .md files recursively
    pattern = os.path.join(base_dir, "**", "*.md")
    md_files = glob.glob(pattern, recursive=True)
    
    if not md_files:
        print(f"❌ No markdown files found in {base_dir}")
        return
    
    print(f"🔍 Found {len(md_files)} markdown files to process...")
    print("=" * 60)
    
    # Process each file
    modified_count = 0
    total_count = len(md_files)
    
    for file_path in sorted(md_files):
        relative_path = os.path.relpath(file_path, base_dir)
        print(f"\n📄 Processing: {relative_path}")
        
        if wrap_frontmatter_quotes(file_path):
            modified_count += 1
    
    # Summary
    print("\n" + "=" * 60)
    print(f"📊 SUMMARY:")
    print(f"   Total files processed: {total_count}")
    print(f"   Files modified: {modified_count}")
    print(f"   Files unchanged: {total_count - modified_count}")
    
    if modified_count > 0:
        print(f"\n✅ Successfully wrapped front matter values in quotes for {modified_count} files!")
    else:
        print(f"\nℹ️  All files already had properly quoted front matter values.")

if __name__ == "__main__":
    main()
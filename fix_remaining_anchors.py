#!/usr/bin/env python3
"""
Script to fix remaining broken anchors by checking if they reference root headings and removing them.
"""

import os
import re
from pathlib import Path

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

def fix_anchor_references(file_path, target_anchor):
    """Fix anchor references in a file by removing the anchor part."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Get headings in this file to check if anchor references a root heading
        headings = get_file_headings(file_path)
        
        # Check if target anchor exists and what level it is
        target_heading_level = None
        for level, anchor, heading_text in headings:
            if anchor == target_anchor:
                target_heading_level = level
                print(f"  Found heading '{heading_text}' (level {level}) for anchor #{target_anchor}")
                break
        
        if target_heading_level is None:
            print(f"  Anchor #{target_anchor} does not exist in the file")
        elif target_heading_level == 1:
            print(f"  Anchor #{target_anchor} references a root heading (level 1) - removing anchor")
        else:
            print(f"  Anchor #{target_anchor} references a level {target_heading_level} heading - should be valid")
            return 0
        
        # Pattern to match links with this anchor (self-references)
        pattern = rf'\[([^\]]+)\]\(#{re.escape(target_anchor)}\)'
        
        def replace_self_link(match):
            link_text = match.group(1)
            print(f"    Removing self-reference anchor: [{link_text}](#{target_anchor}) -> {link_text}")
            return link_text  # Just keep the text, remove the link
        
        # Also pattern for full URL links with this anchor
        pattern2 = rf'\[([^\]]+)\]\(([^)]*/)#{re.escape(target_anchor)}\)'
        
        def replace_url_link(match):
            link_text = match.group(1)
            url_part = match.group(2)
            print(f"    Removing anchor from URL link: [{link_text}]({url_part}#{target_anchor}) -> [{link_text}]({url_part})")
            return f'[{link_text}]({url_part})'
        
        # Apply both patterns
        new_content = re.sub(pattern, replace_self_link, content)
        new_content = re.sub(pattern2, replace_url_link, new_content)
        
        changes_made = (new_content != content)
        
        # Write back if changes were made
        if changes_made:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  ✓ Fixed broken anchor references in {os.path.basename(file_path)}")
            return 1
        else:
            print(f"  No changes needed for {os.path.basename(file_path)}")
            return 0
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return 0

def main():
    """Main function to process all broken anchors."""
    
    # Remaining broken anchors from the build output
    broken_anchor_files = [
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/integration-guide/toolkit/xml-configuration/provisioning/recordsection/index.md", "record-section"),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/integration-guide/toolkit/xml-configuration/user-interface/searchbar/index.md", "search-bar"),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/integration-guide/workflows/how-to/configure-homonym-test/index.md", "configure-a-homonym-detection"),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/integration-guide/workflows/how-to/workflow-create-mono/index.md", "for-resource-creation-mono-record"),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/administrate/manual-assignment-request/index.md", "request-entitlement-assignment"),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/index.md", "reconcile-a-property"),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/administrate/non-conforming-assignment-review/unauthorized-account-review/index.md", "review-an-unauthorized-account"),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/deploy/change-management/index.md", "plan-change-management"),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/maintain/troubleshooting/index.md", "troubleshoot"),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/set-up/connect-system/connector-modeling/index.md", "model-the-data"),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/set-up/initial-identities-loading/template-description/index.md", "template-description"),
    ]
    
    total_fixes = 0
    
    print("Analyzing and fixing remaining broken anchors...")
    print("=" * 60)
    
    for file_path, anchor in broken_anchor_files:
        if os.path.exists(file_path):
            print(f"\nProcessing: {os.path.basename(file_path)}")
            print(f"  Target anchor: #{anchor}")
            fixes = fix_anchor_references(file_path, anchor)
            total_fixes += fixes
        else:
            print(f"File not found: {file_path}")
    
    print("=" * 60)
    print(f"Total fixes applied: {total_fixes}")
    print("\nRun the build again to check remaining issues.")

if __name__ == "__main__":
    main()
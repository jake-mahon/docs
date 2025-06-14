#!/usr/bin/env python3
"""
Script to fix broken anchors by removing anchors that point to non-existent headings.
"""

import os
import re
from pathlib import Path

def extract_headings_from_file(file_path):
    """Extract all markdown headings from a file and return their anchor formats."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all markdown headings (lines starting with #)
        headings = re.findall(r'^(#+)\s+(.+)$', content, re.MULTILINE)
        
        # Convert headings to anchor format (lowercase, spaces to hyphens, remove special chars)
        anchors = []
        for level, heading_text in headings:
            # Convert to anchor format: lowercase, spaces to hyphens, remove special chars
            anchor = heading_text.lower()
            anchor = re.sub(r'[^\w\s-]', '', anchor)  # Remove special chars except spaces and hyphens
            anchor = re.sub(r'\s+', '-', anchor)  # Replace spaces with hyphens
            anchor = re.sub(r'-+', '-', anchor)  # Replace multiple hyphens with single
            anchor = anchor.strip('-')  # Remove leading/trailing hyphens
            anchors.append((len(level), anchor))
        
        return anchors
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return []

def fix_broken_anchors_in_file(file_path, broken_anchors):
    """Fix broken anchors in a specific file by removing the anchor part."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        changes_made = 0
        
        # Get existing headings in this file
        existing_anchors = [anchor for level, anchor in extract_headings_from_file(file_path)]
        
        for broken_anchor in broken_anchors:
            # Check if this anchor exists in the file
            if broken_anchor not in existing_anchors:
                # Pattern to match links with this anchor
                pattern = rf'\[([^\]]+)\]\([^)]*#{re.escape(broken_anchor)}\)'
                
                def replace_link(match):
                    link_text = match.group(1)
                    full_match = match.group(0)
                    
                    # Extract the URL part without the anchor
                    url_part = full_match[len(link_text)+2:-1]  # Remove [text]( and )
                    if '#' in url_part:
                        url_without_anchor = url_part.split('#')[0]
                        if url_without_anchor:  # If there's a URL part
                            return f'[{link_text}]({url_without_anchor})'
                        else:  # If it's just an anchor with no URL
                            return link_text  # Remove the link entirely, just keep text
                    return full_match  # Shouldn't happen, but keep original
                
                new_content = re.sub(pattern, replace_link, content)
                if new_content != content:
                    content = new_content
                    changes_made += 1
                    print(f"  Fixed anchor #{broken_anchor}")
        
        # Write back if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed {changes_made} broken anchors in {file_path}")
            return changes_made
        
        return 0
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return 0

def main():
    """Main function to process all broken anchors."""
    
    # List of broken anchors from the build output
    broken_anchor_files = [
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/integration-guide/toolkit/xml-configuration/provisioning/recordsection/index.md", ["record-section"]),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/integration-guide/toolkit/xml-configuration/user-interface/searchbar/index.md", ["search-bar"]),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/integration-guide/toolkit/xml-configuration/workflows/aspects/builduniquevalueaspect/index.md", ["sqlcheckexpression"]),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/integration-guide/workflows/how-to/configure-homonym-test/index.md", ["configure-a-homonym-detection"]),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/integration-guide/workflows/how-to/workflow-create-mono/index.md", ["for-resource-creation-mono-record"]),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/administrate/manual-assignment-request/index.md", ["request-entitlement-assignment"]),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/index.md", ["reconcile-a-property"]),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/administrate/non-conforming-assignment-review/unauthorized-account-review/index.md", ["review-an-unauthorized-account"]),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/deploy/change-management/index.md", ["plan-change-management"]),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/maintain/troubleshooting/index.md", ["troubleshoot"]),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/set-up/connect-system/connector-modeling/index.md", ["model-the-data"]),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/set-up/initial-identities-loading/template-description/index.md", ["template-description"]),
        ("/Users/jordan.violet/development/docs/docs/usercube/usercube/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/index.md", ["our-example"]),
    ]
    
    total_fixes = 0
    
    print("Fixing broken anchors...")
    print("=" * 50)
    
    for file_path, anchors in broken_anchor_files:
        if os.path.exists(file_path):
            print(f"\nProcessing: {file_path}")
            fixes = fix_broken_anchors_in_file(file_path, anchors)
            total_fixes += fixes
        else:
            print(f"File not found: {file_path}")
    
    print("=" * 50)
    print(f"Total fixes applied: {total_fixes}")
    print("\nScript completed. You can now run the build again to check remaining issues.")

if __name__ == "__main__":
    main()
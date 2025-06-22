#!/usr/bin/env python3

import re
import os

def fix_remaining_links():
    # Parse the build log to get remaining broken links
    remaining_links = []
    
    with open('build_final.log', 'r') as f:
        content = f.read()
        
    # Find all broken link entries
    pattern = r'-> linking to ([^\s]+)'
    matches = re.findall(pattern, content)
    
    # Also find source page paths for context
    source_pattern = r'- Broken link on source page path = ([^:]+):'
    source_matches = re.findall(source_pattern, content)
    
    print(f"Found {len(matches)} remaining broken links")
    
    # Create mappings for common patterns that weren't handled
    path_mappings = {
        # Cloud and remote management -> cloud
        '/cloud-and-remote-management/cloud-management/': '/cloud/',
        '/cloud-and-remote-management/mdm-integration/': '/mdm/',
        
        # Policy management
        '/policy-management/administrative-templates/': '/administrativetemplates/',
        
        # Installation and deployment
        '/installation-and-deployment/': '/install/',
        
        # Troubleshooting patterns
        '/troubleshooting/tips/': '/troubleshooting/',
        
        # Preconfigured applications path corrections
        '/applicationsettings/preconfigured-applications/': '/applicationsettings/preconfigured/',
        
        # Special case: resources links that should be removed or replaced
        '/resources/video-tutorials.md': '/video/', # Generic video tutorials page
        '/resources/knowledge-base.md': '', # Remove knowledge base links
    }
    
    fixed_count = 0
    
    # Process each unique broken link
    unique_links = list(set(matches))
    
    for broken_link in unique_links:
        print(f"Processing: {broken_link}")
        
        fixed_link = broken_link
        
        # Apply path mappings
        for old_pattern, new_pattern in path_mappings.items():
            if old_pattern in broken_link:
                if new_pattern == '':  # Remove link entirely
                    print(f"  Link should be removed: {broken_link}")
                    continue
                else:
                    fixed_link = broken_link.replace(old_pattern, new_pattern)
                    break
        
        if fixed_link == broken_link:
            print(f"  No mapping found for: {broken_link}")
            continue
            
        # Search for files containing this broken link and fix them
        result = os.popen(f'grep -r "{broken_link}" /Users/jordan.violet/development/docs/docs/endpointpolicymanager/ --include="*.md"').read()
        
        if result.strip():
            for line in result.strip().split('\n'):
                if ':' in line:
                    file_path = line.split(':')[0]
                    print(f"  Found in: {file_path}")
                    
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            content = f.read()
                        
                        if broken_link in content:
                            new_content = content.replace(broken_link, fixed_link)
                            
                            with open(file_path, 'w', encoding='utf-8') as f:
                                f.write(new_content)
                            
                            print(f"  Fixed: {broken_link} -> {fixed_link}")
                            fixed_count += 1
                            
                    except Exception as e:
                        print(f"  Error processing {file_path}: {e}")
        else:
            print(f"  Link not found in files: {broken_link}")
    
    print(f"\nFixed {fixed_count} additional links")

if __name__ == "__main__":
    fix_remaining_links()
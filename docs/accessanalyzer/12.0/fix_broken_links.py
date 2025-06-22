#!/usr/bin/env python3

import json
import re
import os

def fix_broken_links():
    # Load the complete broken links file
    with open('broken_links_complete.json', 'r') as f:
        broken_links = json.load(f)
    
    fixed_count = 0
    skipped_count = 0
    
    for i, link_info in enumerate(broken_links):
        broken_link = link_info['broken_link']
        source_file = link_info['source_file']
        
        print(f"Processing {i+1}/{len(broken_links)}: {broken_link}")
        
        # Handle different types of broken links
        if '/resources/video-tutorials/' in broken_link:
            # Convert resources/video-tutorials paths to video paths
            fixed_link = broken_link.replace('/resources/video-tutorials/', '/video/')
        elif '/security-and-privilege-management/least-privilege-manager/' in broken_link:
            # Convert old-style paths to new structure
            fixed_link = broken_link.replace('/security-and-privilege-management/least-privilege-manager/', '/leastprivilege/')
        elif '/application-management/application-settings/' in broken_link:
            # Convert application management paths
            fixed_link = broken_link.replace('/application-management/application-settings/', '/applicationsettings/')
        elif '/licensing/' in broken_link:
            # Convert licensing paths
            fixed_link = broken_link.replace('/licensing/', '/license/')
        elif '/cloud-and-remote-management/cloud-management/' in broken_link:
            # Convert cloud management paths
            fixed_link = broken_link.replace('/cloud-and-remote-management/cloud-management/', '/cloud/')
        elif '/getting-started/' in broken_link:
            # Convert getting started paths
            fixed_link = broken_link.replace('/getting-started/', '/gettingstarted/')
        elif '/platform-specific/windows-requirements/' in broken_link:
            # Convert platform specific paths
            fixed_link = broken_link.replace('/platform-specific/windows-requirements/', '/requirements/')
        elif '/integrations/third-party-integrations/' in broken_link:
            # Convert integration paths  
            fixed_link = broken_link.replace('/integrations/third-party-integrations/', '/integration/')
        else:
            print(f"  Skipping: Unknown path pattern")
            skipped_count += 1
            continue
            
        # Read the source file
        try:
            with open(source_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except FileNotFoundError:
            print(f"  Error: Source file not found: {source_file}")
            skipped_count += 1
            continue
        except Exception as e:
            print(f"  Error reading {source_file}: {e}")
            skipped_count += 1
            continue
            
        # Replace the broken link with the fixed one
        if broken_link in content:
            new_content = content.replace(broken_link, fixed_link)
            
            # Write back the fixed content
            try:
                with open(source_file, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"  Fixed: {broken_link} -> {fixed_link}")
                fixed_count += 1
            except Exception as e:
                print(f"  Error writing {source_file}: {e}")
                skipped_count += 1
        else:
            print(f"  Warning: Link not found in source file")
            skipped_count += 1
            
    print(f"\nSummary:")
    print(f"  Fixed: {fixed_count}")
    print(f"  Skipped: {skipped_count}")
    print(f"  Total: {len(broken_links)}")

if __name__ == "__main__":
    fix_broken_links()
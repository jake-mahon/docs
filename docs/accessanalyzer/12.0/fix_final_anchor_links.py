#!/usr/bin/env python3

import os
import re

def fix_final_anchor_links():
    """Apply the final anchor link fixes"""
    
    print("Applying final anchor link fixes...")
    
    # Final mappings for anchor links
    mappings = {
        # Video base path to index
        '/docs/endpointpolicymanager/video/': '/docs/endpointpolicymanager/video/index.md',
        
        # 32B: Design studio how-to
        '/docs/endpointpolicymanager/video/#designstudio-how-to': '/docs/endpointpolicymanager/applicationsettings/designstudio/overview.md',
        
        # 33B: Getting started  
        '/docs/endpointpolicymanager/video/#getting-started': '/docs/endpointpolicymanager/gettingstarted/overview.md',
    }
    
    fixed_count = 0
    error_count = 0
    
    print(f"Applying {len(mappings)} final anchor fixes...")
    
    for broken_link, correct_link in mappings.items():
        print(f"Processing: {broken_link} -> {correct_link}")
        
        # Search for files containing this broken link
        try:
            result = os.popen(f'grep -r "{broken_link}" /Users/jordan.violet/development/docs/docs/endpointpolicymanager/ --include="*.md" 2>/dev/null').read()
            
            if result.strip():
                for line in result.strip().split('\n'):
                    if ':' in line:
                        file_path = line.split(':')[0]
                        print(f"  Found in: {file_path}")
                        
                        try:
                            with open(file_path, 'r', encoding='utf-8') as f:
                                content = f.read()
                            
                            if broken_link in content:
                                new_content = content.replace(broken_link, correct_link)
                                
                                with open(file_path, 'w', encoding='utf-8') as f:
                                    f.write(new_content)
                                
                                print(f"  ✅ Fixed: {broken_link} -> {correct_link}")
                                fixed_count += 1
                            else:
                                print(f"  ⚠️ Link not found in file content")
                                
                        except Exception as e:
                            print(f"  ❌ Error processing {file_path}: {e}")
                            error_count += 1
            else:
                print(f"  ℹ️ Link not found in any files")
                
        except Exception as e:
            print(f"  ❌ Error searching for link: {e}")
            error_count += 1
    
    print(f"\n📊 Summary:")
    print(f"  Final fixes applied: {fixed_count}")
    print(f"  Errors: {error_count}")
    
    return fixed_count, error_count

if __name__ == "__main__":
    fix_final_anchor_links()
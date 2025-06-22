#!/usr/bin/env python3

import os
import re

def fix_malformed_and_apply_final():
    """First fix malformed links, then apply final user-selected fixes"""
    
    print("Step 1: Fixing malformed concatenated links...")
    
    # Fix malformed links that were created by previous script runs
    malformed_patterns = [
        # Pattern: /docs/endpointpolicymanager/video/index.md + other path
        (r'/docs/endpointpolicymanager/video/index\.md([^)\s]+)', r'/docs/endpointpolicymanager/video\1'),
        # Pattern: multiple index.md repetitions
        (r'/docs/endpointpolicymanager/video/(index\.md)+', r'/docs/endpointpolicymanager/video/'),
    ]
    
    malformed_fixed = 0
    
    # Find and fix malformed links
    try:
        result = os.popen('find /Users/jordan.violet/development/docs/docs/endpointpolicymanager/ -name "*.md" -exec grep -l "index.md[a-z]" {} \\; 2>/dev/null').read()
        
        for file_path in result.strip().split('\n'):
            if file_path:
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    original_content = content
                    
                    # Apply malformed link fixes
                    for pattern, replacement in malformed_patterns:
                        content = re.sub(pattern, replacement, content)
                    
                    if content != original_content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(content)
                        print(f"  ✅ Fixed malformed links in: {file_path}")
                        malformed_fixed += 1
                        
                except Exception as e:
                    print(f"  ❌ Error fixing malformed links in {file_path}: {e}")
                    
    except Exception as e:
        print(f"❌ Error searching for malformed links: {e}")
    
    print(f"Fixed {malformed_fixed} files with malformed links\n")
    
    print("Step 2: Applying final user-selected fixes...")
    
    # Define the mappings based on user selections
    mappings = {
        # 1A-5A: Administrative templates fixes (administrativetemplates -> adminstrativetemplates)
        '/docs/endpointpolicymanager/administrativetemplates/itemleveltargeting.md': '/docs/endpointpolicymanager/adminstrativetemplates/itemleveltargeting.md',
        '/docs/endpointpolicymanager/administrativetemplates/overview.md': '/docs/endpointpolicymanager/adminstrativetemplates/overview.md',
        '/docs/endpointpolicymanager/administrativetemplates/settings.md': '/docs/endpointpolicymanager/adminstrativetemplates/settings.md',
        '/docs/endpointpolicymanager/administrativetemplates/disableofficeelements.md': '/docs/endpointpolicymanager/adminstrativetemplates/disableofficeelements.md',
        '/docs/endpointpolicymanager/administrativetemplates/versions.md': '/docs/endpointpolicymanager/adminstrativetemplates/versions.md',
        
        # 6A: Reference -> index.md  
        '/docs/endpointpolicymanager/reference.md': '/docs/endpointpolicymanager/index.md',
        
        # 7A: Double path fix
        '/docs/endpointpolicymanager/endpointpolicymanager/troubleshooting/applicationsettings/export/appset.md': '/docs/endpointpolicymanager/troubleshooting/applicationsettings/export/appset.md',
        
        # 8-29A: Archive links (remove archived-guides subfolder)
        '/docs/endpointpolicymanager/archive/archived-guides/acrobatxpro.md': '/docs/endpointpolicymanager/archive/acrobatxpro.md',
        '/docs/endpointpolicymanager/archive/archived-guides/admxfiles.md': '/docs/endpointpolicymanager/archive/admxfiles.md',
        '/docs/endpointpolicymanager/archive/archived-guides/applock.md': '/docs/endpointpolicymanager/archive/applock.md',
        '/docs/endpointpolicymanager/archive/archived-guides/autoupdater.md': '/docs/endpointpolicymanager/archive/autoupdater.md',
        '/docs/endpointpolicymanager/archive/archived-guides/cloud.md': '/docs/endpointpolicymanager/archive/cloud.md',
        '/docs/endpointpolicymanager/archive/archived-guides/designstudiofirefox.md': '/docs/endpointpolicymanager/archive/designstudiofirefox.md',
        '/docs/endpointpolicymanager/archive/archived-guides/designstudiojava.md': '/docs/endpointpolicymanager/archive/designstudiojava.md',
        '/docs/endpointpolicymanager/archive/archived-guides/differentusers.md': '/docs/endpointpolicymanager/archive/differentusers.md',
        '/docs/endpointpolicymanager/archive/archived-guides/gotomeeting.md': '/docs/endpointpolicymanager/archive/gotomeeting.md',
        '/docs/endpointpolicymanager/archive/archived-guides/ie10.md': '/docs/endpointpolicymanager/archive/ie10.md',
        '/docs/endpointpolicymanager/archive/archived-guides/ie9.md': '/docs/endpointpolicymanager/archive/ie9.md',
        '/docs/endpointpolicymanager/archive/archived-guides/infranview.md': '/docs/endpointpolicymanager/archive/infranview.md',
        '/docs/endpointpolicymanager/archive/archived-guides/itemleveltartgeting.md': '/docs/endpointpolicymanager/archive/itemleveltartgeting.md',
        '/docs/endpointpolicymanager/archive/archived-guides/java.md': '/docs/endpointpolicymanager/archive/java.md',
        '/docs/endpointpolicymanager/archive/archived-guides/massdeploy.md': '/docs/endpointpolicymanager/archive/massdeploy.md',
        '/docs/endpointpolicymanager/archive/archived-guides/modenuke.md': '/docs/endpointpolicymanager/archive/modenuke.md',
        '/docs/endpointpolicymanager/archive/archived-guides/office2013.md': '/docs/endpointpolicymanager/archive/office2013.md',
        '/docs/endpointpolicymanager/archive/archived-guides/operanext.md': '/docs/endpointpolicymanager/archive/operanext.md',
        '/docs/endpointpolicymanager/archive/archived-guides/overview.md': '/docs/endpointpolicymanager/archive/overview.md',
        '/docs/endpointpolicymanager/archive/archived-guides/parcctesting.md': '/docs/endpointpolicymanager/archive/parcctesting.md',
        '/docs/endpointpolicymanager/archive/archived-guides/preferencesexporter.md': '/docs/endpointpolicymanager/archive/preferencesexporter.md',
        '/docs/endpointpolicymanager/archive/archived-guides/symantecworkspace.md': '/docs/endpointpolicymanager/archive/symantecworkspace.md',
        '/docs/endpointpolicymanager/archive/archived-guides/tattooing.md': '/docs/endpointpolicymanager/archive/tattooing.md',
        '/docs/endpointpolicymanager/archive/archived-guides/upgrading.md': '/docs/endpointpolicymanager/archive/upgrading.md',
        '/docs/endpointpolicymanager/archive/archived-guides/vmware.md': '/docs/endpointpolicymanager/archive/vmware.md',
        '/docs/endpointpolicymanager/archive/archived-guides/vmwarefilesettings.md': '/docs/endpointpolicymanager/archive/vmwarefilesettings.md',
        '/docs/endpointpolicymanager/archive/archived-guides/vmwarehorizonmirage.md': '/docs/endpointpolicymanager/archive/vmwarehorizonmirage.md',
        '/docs/endpointpolicymanager/archive/archived-guides/vmwaresupplements.md': '/docs/endpointpolicymanager/archive/vmwaresupplements.md',
        '/docs/endpointpolicymanager/archive/archived-guides/xenapp.md': '/docs/endpointpolicymanager/archive/xenapp.md',
        
        # 30A: Knowledge base
        '/docs/endpointpolicymanager/resources/knowledge-base.md': '/docs/endpointpolicymanager/knowledgebase.md',
        
        # 31: Video index (will create index.md)
        '/docs/endpointpolicymanager/video/': '/docs/endpointpolicymanager/video/index.md',
        
        # 32B: Design studio how-to
        '/docs/endpointpolicymanager/video/#designstudio-how-to': '/docs/endpointpolicymanager/applicationsettings/designstudio/overview.md',
        
        # 33B: Getting started
        '/docs/endpointpolicymanager/video/#getting-started': '/docs/endpointpolicymanager/gettingstarted/overview.md',
    }
    
    fixed_count = 0
    error_count = 0
    
    print(f"Applying {len(mappings)} final fixes...")
    
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
    print(f"  Malformed links fixed: {malformed_fixed}")
    print(f"  Final fixes applied: {fixed_count}")
    print(f"  Errors: {error_count}")
    
    return malformed_fixed, fixed_count, error_count

if __name__ == "__main__":
    fix_malformed_and_apply_final()
#!/usr/bin/env python3

import os
import glob

def fix_final_broken_links():
    """Fix the remaining specific broken links"""
    
    # Remaining specific file mappings
    final_mappings = {
        # Basic concepts file mapping
        '/docs/endpointpolicymanager/gettingstarted/concepts.md': '/docs/endpointpolicymanager/gettingstarted/basicconcepts.md',
        
        # Device manager nested directory
        '/docs/endpointpolicymanager/device/devicemanager/devicemanager/overview.md': '/docs/endpointpolicymanager/device/devicemanager/overview.md',
        
        # Remote desktop protocol
        '/docs/endpointpolicymanager/rdp/overview.md': '/docs/endpointpolicymanager/remotedesktopprotocol/overview.md',
        '/docs/endpointpolicymanager/rdp/itemleveltargeting/overview.md': '/docs/endpointpolicymanager/remotedesktopprotocol/itemleveltargeting/overview.md',
        
        # Device manager files
        '/docs/endpointpolicymanager/device/devicemanager/serialnumber.md': '/docs/endpointpolicymanager/device/serialnumber.md',
        '/docs/endpointpolicymanager/device/devicemanager/usbdrive.md': '/docs/endpointpolicymanager/device/usbdrive.md',
        '/docs/endpointpolicymanager/device/devicemanager/registry.md': '/docs/endpointpolicymanager/device/registry.md',
        
        # Troubleshooting to tips mappings
        '/docs/endpointpolicymanager/troubleshooting/emailoptout.md': '/docs/endpointpolicymanager/tips/emailoptout.md',
        '/docs/endpointpolicymanager/troubleshooting/mmcdisplay.md': '/docs/endpointpolicymanager/tips/mmcdisplay.md',
        '/docs/endpointpolicymanager/troubleshooting/onpremisecloud.md': '/docs/endpointpolicymanager/tips/onpremisecloud.md',
        '/docs/endpointpolicymanager/troubleshooting/folderredirection.md': '/docs/endpointpolicymanager/tips/folderredirection.md',
        '/docs/endpointpolicymanager/troubleshooting/embedclient.md': '/docs/endpointpolicymanager/tips/embedclient.md',
        '/docs/endpointpolicymanager/troubleshooting/thirdpartyadvice.md': '/docs/endpointpolicymanager/tips/thirdpartyadvice.md',
        '/docs/endpointpolicymanager/troubleshooting/services.md': '/docs/endpointpolicymanager/tips/services.md',
        
        # Administrative templates mappings
        '/docs/endpointpolicymanager/administrativetemplates/itemleveltargeting.md': '/docs/endpointpolicymanager/adminstrativetemplates/itemleveltargeting.md',
        '/docs/endpointpolicymanager/administrativetemplates/settings.md': '/docs/endpointpolicymanager/adminstrativetemplates/settings.md',
        '/docs/endpointpolicymanager/administrativetemplates/disableofficeelements.md': '/docs/endpointpolicymanager/adminstrativetemplates/disableofficeelements.md',
        '/docs/endpointpolicymanager/administrativetemplates/versions.md': '/docs/endpointpolicymanager/adminstrativetemplates/versions.md',
        
        # Application settings troubleshooting
        '/docs/endpointpolicymanager/endpointpolicymanager/troubleshooting/applicationsettings/export/appset.md': '/docs/endpointpolicymanager/troubleshooting/applicationsettings/export/appset.md',
        
        # Reference file
        '/docs/endpointpolicymanager/reference/index.md': '/docs/endpointpolicymanager/reference.md',
    }
    
    # Video anchor mappings
    anchor_mappings = {
        '/video/#designstudio-how-to': '/video/index.md#designstudio-how-to',
        '/video/#getting-started': '/video/index.md#getting-started',
    }
    
    files_processed = 0
    replacements_made = 0
    
    # Find all .md files in the endpointpolicymanager directory
    pattern = '/Users/jordan.violet/development/docs/docs/endpointpolicymanager/**/*.md'
    md_files = glob.glob(pattern, recursive=True)
    
    for file_path in md_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Apply final file mappings
            for old_path, new_path in final_mappings.items():
                if old_path in content:
                    content = content.replace(old_path, new_path)
                    replacements_made += 1
                    print(f"Fixed: {old_path} -> {new_path} in {file_path}")
            
            # Apply anchor mappings
            for old_anchor, new_anchor in anchor_mappings.items():
                if old_anchor in content:
                    content = content.replace(old_anchor, new_anchor)
                    replacements_made += 1
                    print(f"Fixed anchor: {old_anchor} -> {new_anchor} in {file_path}")
            
            # Only write if content changed
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                files_processed += 1
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nCompleted final broken link fixes:")
    print(f"Files processed: {files_processed}")
    print(f"Replacements made: {replacements_made}")

if __name__ == "__main__":
    fix_final_broken_links()
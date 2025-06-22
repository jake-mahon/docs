#!/usr/bin/env python3

import os
import glob

def fix_all_broken_links():
    """Systematically fix all broken link patterns"""
    
    # Directory structure mappings (old long names → new short names)
    directory_mappings = {
        '/docs/endpointpolicymanager/application-management/browser-router/': '/docs/endpointpolicymanager/browserrouter/',
        '/docs/endpointpolicymanager/application-management/java-enterprise-rules/': '/docs/endpointpolicymanager/javaenterpriserules/',
        '/docs/endpointpolicymanager/application-management/file-associations/': '/docs/endpointpolicymanager/fileassociations/',
        '/docs/endpointpolicymanager/device-and-desktop-management/device-manager/': '/docs/endpointpolicymanager/device/devicemanager/',
        '/docs/endpointpolicymanager/device-and-desktop-management/start-screen-and-taskbar/': '/docs/endpointpolicymanager/startscreentaskbar/',
        '/docs/endpointpolicymanager/device-and-desktop-management/remote-desktop-protocol/': '/docs/endpointpolicymanager/rdp/',
        '/docs/endpointpolicymanager/security-and-privilege-management/security-settings/': '/docs/endpointpolicymanager/securitysettings/',
        '/docs/endpointpolicymanager/security-and-privilege-management/gpo-export/': '/docs/endpointpolicymanager/gpoexport/',
        '/docs/endpointpolicymanager/policy-management/preferences/': '/docs/endpointpolicymanager/preferences/',
        '/docs/endpointpolicymanager/policy-management/item-level-targeting/': '/docs/endpointpolicymanager/itemleveltargeting/',
        '/docs/endpointpolicymanager/compliance-and-reporting/group-policy-compliance-reporter/': '/docs/endpointpolicymanager/grouppolicycompliancereporter/',
        '/docs/endpointpolicymanager/cloud-and-remote-management/remote-work-delivery/': '/docs/endpointpolicymanager/remoteworkdelivery/',
        '/docs/endpointpolicymanager/deployment-methods/group-policy/': '/docs/endpointpolicymanager/grouppolicy/',
        '/docs/endpointpolicymanager/deployment-methods/software-packages/': '/docs/endpointpolicymanager/softwarepackage/',
        '/docs/endpointpolicymanager/automation-and-scripting/scripts-and-triggers/': '/docs/endpointpolicymanager/scriptstriggers/',
        '/docs/endpointpolicymanager/automation-and-scripting/feature-management/': '/docs/endpointpolicymanager/feature/',
        '/docs/endpointpolicymanager/platform-specific/mac-support/': '/docs/endpointpolicymanager/mac/',
    }
    
    # Archive directory mappings
    archive_mappings = {
        '/docs/endpointpolicymanager/archive/archived-guides/': '/docs/endpointpolicymanager/archive/',
    }
    
    # Specific file mappings
    file_mappings = {
        '/docs/endpointpolicymanager/troubleshooting/eventcategories.md': '/docs/endpointpolicymanager/tips/eventcategories.md',
        '/docs/endpointpolicymanager/resources/knowledge-base.md': '/docs/endpointpolicymanager/knowledgebase.md',
        '/docs/endpointpolicymanager/gettingstarted/basic-concepts.md': '/docs/endpointpolicymanager/gettingstarted/concepts.md',
        '/docs/endpointpolicymanager/troubleshooting/eventlogs.md': '/docs/endpointpolicymanager/tips/eventlogs.md',
    }
    
    # Video link mappings
    video_mappings = {
        '/docs/endpointpolicymanager/video/': '/docs/endpointpolicymanager/video/index.md',
        '/docs/endpointpolicymanager/video/#getting-started': '/docs/endpointpolicymanager/video/index.md#getting-started',
        '/docs/endpointpolicymanager/video/#designstudio-how-to': '/docs/endpointpolicymanager/video/index.md#designstudio-how-to',
    }
    
    # Overview file mappings (these appear to exist but with different names)
    overview_mappings = {
        '/docs/endpointpolicymanager/administrativetemplates/overview.md': '/docs/endpointpolicymanager/adminstrativetemplates/overview.md',
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
            
            # Apply directory structure mappings
            for old_path, new_path in directory_mappings.items():
                if old_path in content:
                    content = content.replace(old_path, new_path)
                    replacements_made += 1
                    print(f"Directory fix: {old_path} -> {new_path} in {file_path}")
            
            # Apply archive mappings
            for old_path, new_path in archive_mappings.items():
                if old_path in content:
                    content = content.replace(old_path, new_path)
                    replacements_made += 1
                    print(f"Archive fix: {old_path} -> {new_path} in {file_path}")
            
            # Apply specific file mappings
            for old_path, new_path in file_mappings.items():
                if old_path in content:
                    content = content.replace(old_path, new_path)
                    replacements_made += 1
                    print(f"File fix: {old_path} -> {new_path} in {file_path}")
            
            # Apply video mappings
            for old_path, new_path in video_mappings.items():
                if old_path in content:
                    content = content.replace(old_path, new_path)
                    replacements_made += 1
                    print(f"Video fix: {old_path} -> {new_path} in {file_path}")
            
            # Apply overview mappings
            for old_path, new_path in overview_mappings.items():
                if old_path in content:
                    content = content.replace(old_path, new_path)
                    replacements_made += 1
                    print(f"Overview fix: {old_path} -> {new_path} in {file_path}")
            
            # Only write if content changed
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                files_processed += 1
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nCompleted systematic broken link fixes:")
    print(f"Files processed: {files_processed}")
    print(f"Replacements made: {replacements_made}")

if __name__ == "__main__":
    fix_all_broken_links()
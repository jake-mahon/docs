#!/usr/bin/env python3

import os
import glob

def apply_video_mappings():
    """Apply specific video path mappings from the original 29 broken links"""
    
    # Only the specific video mappings from the original analysis
    video_mappings = {
        '/docs/endpointpolicymanager/resources/video-tutorials/leastprivilege/elevate/scripts.md': '/docs/endpointpolicymanager/video/leastprivilege/elevate/scripts.md',
        '/docs/endpointpolicymanager/resources/video-tutorials/cloud/install/leastprivilegemanagerrule.md': '/docs/endpointpolicymanager/video/cloud/install/leastprivilegemanagerrule.md',
        '/docs/endpointpolicymanager/resources/video-tutorials/applicationsettings/shares.md': '/docs/endpointpolicymanager/video/applicationsettings/shares.md',
        '/docs/endpointpolicymanager/resources/video-tutorials/leastprivilege/integration/privilegesecure.md': '/docs/endpointpolicymanager/video/leastprivilege/integration/privilegesecure.md',
        '/docs/endpointpolicymanager/resources/video-tutorials/leastprivilege/bestpractices/elevatinguserbasedinstalls.md': '/docs/endpointpolicymanager/video/leastprivilege/bestpractices/elevatinguserbasedinstalls.md',
        '/docs/endpointpolicymanager/resources/video-tutorials/leastprivilege/uacpromptsactivex.md': '/docs/endpointpolicymanager/video/leastprivilege/uacpromptsactivex.md',
        '/docs/endpointpolicymanager/resources/video-tutorials/leastprivilege/mac/mountunmountpart1.md': '/docs/endpointpolicymanager/video/leastprivilege/mac/mountunmountpart1.md',
        '/docs/endpointpolicymanager/resources/video-tutorials/leastprivilege/mac/mountunmounpart2.md': '/docs/endpointpolicymanager/video/leastprivilege/mac/mountunmounpart2.md',
        '/docs/endpointpolicymanager/resources/video-tutorials/leastprivilege/installapplications.md': '/docs/endpointpolicymanager/video/leastprivilege/installapplications.md',
        '/docs/endpointpolicymanager/resources/video-tutorials/leastprivilege/mac/adminapproval.md': '/docs/endpointpolicymanager/video/leastprivilege/mac/adminapproval.md',
        '/docs/endpointpolicymanager/resources/video-tutorials.md': '/docs/endpointpolicymanager/video/index.md',
        '/docs/endpointpolicymanager/resources/video-tutorials/leastprivilege/mac/systemsettings.md': '/docs/endpointpolicymanager/video/leastprivilege/mac/systemsettings.md',
        '/docs/endpointpolicymanager/resources/video-tutorials/leastprivilege/securecopy.md': '/docs/endpointpolicymanager/video/leastprivilege/securecopy.md',
        '/docs/endpointpolicymanager/resources/video-tutorials/leastprivilege/branding.md': '/docs/endpointpolicymanager/video/leastprivilege/branding.md'
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
            
            # Apply each specific mapping
            for old_path, new_path in video_mappings.items():
                if old_path in content:
                    content = content.replace(old_path, new_path)
                    replacements_made += 1
                    print(f"Fixed: {old_path} -> {new_path} in {file_path}")
            
            # Only write if content changed
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                files_processed += 1
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nCompleted video mapping fixes:")
    print(f"Files processed: {files_processed}")
    print(f"Replacements made: {replacements_made}")

if __name__ == "__main__":
    apply_video_mappings()
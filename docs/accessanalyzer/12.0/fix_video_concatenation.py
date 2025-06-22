#!/usr/bin/env python3

import os
import glob
import re

def fix_video_concatenation():
    """Fix the concatenation issue with video links"""
    
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
            
            # Fix concatenated video links like:
            # /docs/endpointpolicymanager/video/index.mdleastprivilege/elevate/scripts.md
            # back to:
            # /docs/endpointpolicymanager/video/leastprivilege/elevate/scripts.md
            
            # Pattern to match concatenated video links
            pattern = r'/docs/endpointpolicymanager/video/index\.md([a-z][^)\s]*\.md)'
            replacement = r'/docs/endpointpolicymanager/video/\1'
            
            if re.search(pattern, content):
                content = re.sub(pattern, replacement, content)
                replacements_made += 1
                print(f"Fixed concatenated video link in {file_path}")
            
            # Fix specific standalone video links that should go to index.md
            # Only replace standalone /docs/endpointpolicymanager/video/ (followed by ) or whitespace)
            pattern2 = r'/docs/endpointpolicymanager/video/(?=[\)\s])'
            replacement2 = r'/docs/endpointpolicymanager/video/index.md'
            
            if re.search(pattern2, content):
                content = re.sub(pattern2, replacement2, content)
                replacements_made += 1
                print(f"Fixed standalone video link in {file_path}")
            
            # Only write if content changed
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                files_processed += 1
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nCompleted video concatenation fixes:")
    print(f"Files processed: {files_processed}")
    print(f"Replacements made: {replacements_made}")

if __name__ == "__main__":
    fix_video_concatenation()
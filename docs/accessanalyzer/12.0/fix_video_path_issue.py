#!/usr/bin/env python3

import os
import re

def fix_video_path_issue():
    """Fix the video path issue caused by overly aggressive regex"""
    
    print("Fixing video path issues caused by incorrect regex...")
    
    # Pattern: /docs/endpointpolicymanager/video + [no slash] + rest of path
    # Should be: /docs/endpointpolicymanager/video/ + rest of path
    pattern = r'/docs/endpointpolicymanager/video([a-z])'
    replacement = r'/docs/endpointpolicymanager/video/\1'
    
    fixed_count = 0
    error_count = 0
    
    try:
        # Find all .md files in endpointpolicymanager
        result = os.popen('find /Users/jordan.violet/development/docs/docs/endpointpolicymanager/ -name "*.md" 2>/dev/null').read()
        
        for file_path in result.strip().split('\n'):
            if file_path:
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    original_content = content
                    
                    # Apply the fix
                    content = re.sub(pattern, replacement, content)
                    
                    if content != original_content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(content)
                        print(f"  ✅ Fixed: {file_path}")
                        fixed_count += 1
                        
                except Exception as e:
                    print(f"  ❌ Error processing {file_path}: {e}")
                    error_count += 1
                    
    except Exception as e:
        print(f"❌ Error searching for files: {e}")
    
    print(f"\n📊 Summary:")
    print(f"  Fixed files: {fixed_count}")
    print(f"  Errors: {error_count}")
    
    return fixed_count, error_count

if __name__ == "__main__":
    fix_video_path_issue()
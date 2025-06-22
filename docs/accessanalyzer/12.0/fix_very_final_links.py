#!/usr/bin/env python3

import os
import glob

def fix_very_final_links():
    """Fix the very last remaining broken links"""
    
    # Final file mappings based on actual files found
    very_final_mappings = {
        # Basic concepts file (found at root level)
        '/docs/endpointpolicymanager/gettingstarted/basicconcepts.md': '/docs/endpointpolicymanager/basicconcepts.md',
        
        # Reference file - need to check what exists
        '/docs/endpointpolicymanager/reference.md': '/docs/endpointpolicymanager/knowledgebase.md',
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
            
            # Apply very final mappings
            for old_path, new_path in very_final_mappings.items():
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
    
    print(f"\nCompleted very final broken link fixes:")
    print(f"Files processed: {files_processed}")
    print(f"Replacements made: {replacements_made}")

if __name__ == "__main__":
    fix_very_final_links()
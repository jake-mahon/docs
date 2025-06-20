#!/usr/bin/env python3
import csv
import os

def generate_complete_mappings():
    """Generate complete AccessAnalyzer 12.0 file mappings with merge strategy"""
    
    # Read the existing mappings
    existing_mappings = []
    with open('/Users/jordan.violet/development/docs/restructure/accessanalyzer/12.0/file-mappings.csv', 'r') as f:
        reader = csv.reader(f)
        for row in reader:
            if len(row) >= 2:
                existing_mappings.append(row)
    
    # Process mappings and apply merge rules
    final_mappings = []
    
    for old_path, new_path in existing_mappings:
        action = "keep"
        notes = ""
        
        # Apply merge rules based on the plan
        
        # AD operations - merge into single file
        if "admin/action/activedirectory/operations/" in old_path and old_path.endswith('.md'):
            new_path = "docs/accessanalyzer/12.0/actions/active-directory-actions/operations.md"
            action = "merge"
            notes = "Merge all AD operations into single file"
        
        # File system parameters - merge into operations file
        elif "admin/action/filesystem/parameters/" in old_path and old_path.endswith('.md'):
            new_path = "docs/accessanalyzer/12.0/actions/file-system-actions/operations.md"
            action = "merge"
            notes = "Merge all FS parameters into operations file"
        
        # Install and requirements - move to getting-started
        elif "/install/" in old_path:
            new_path = new_path.replace("/installation/", "/getting-started/installation/")
            notes = "Consolidate under getting-started"
        
        elif "/requirements/" in old_path:
            new_path = new_path.replace("/requirements/", "/getting-started/system-requirements/")
            notes = "Consolidate under getting-started"
        
        # Fix action directory names to match plan
        elif "/actions/active-directory/" in new_path:
            new_path = new_path.replace("/actions/active-directory/", "/actions/active-directory-actions/")
        
        elif "/actions/filesystem/" in new_path:
            new_path = new_path.replace("/actions/filesystem/", "/actions/file-system-actions/")
        
        # Admin jobs -> administration/job-management
        elif "/job-management/" in new_path:
            new_path = new_path.replace("/job-management/", "/administration/job-management/")
        
        final_mappings.append({
            'old_path': old_path,
            'new_path': new_path,
            'action': action,
            'notes': notes
        })
    
    # Write the complete mappings
    output_file = '/Users/jordan.violet/development/docs/aa_complete_file_mappings.csv'
    with open(output_file, 'w', newline='') as csvfile:
        fieldnames = ['old_path', 'new_path', 'action', 'notes']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(final_mappings)
    
    # Generate summary statistics
    total_files = len(final_mappings)
    merge_files = sum(1 for m in final_mappings if m['action'] == 'merge')
    
    # Count unique merge targets
    merge_targets = {}
    for m in final_mappings:
        if m['action'] == 'merge':
            target = m['new_path']
            if target not in merge_targets:
                merge_targets[target] = []
            merge_targets[target].append(m['old_path'])
    
    print(f"Complete mapping generated: {output_file}")
    print(f"\nStatistics:")
    print(f"- Total files: {total_files}")
    print(f"- Files to keep: {total_files - merge_files}")
    print(f"- Files to merge: {merge_files}")
    print(f"- Merge targets: {len(merge_targets)}")
    
    print(f"\nMerge Summary:")
    for target, sources in sorted(merge_targets.items()):
        print(f"\n{target}")
        print(f"  <- {len(sources)} files")
        for i, source in enumerate(sources[:5]):
            print(f"     {os.path.basename(source)}")
        if len(sources) > 5:
            print(f"     ... and {len(sources) - 5} more")
    
    # Create a merge instruction file
    merge_instructions_file = '/Users/jordan.violet/development/docs/aa_merge_instructions.md'
    with open(merge_instructions_file, 'w') as f:
        f.write("# AccessAnalyzer 12.0 File Merge Instructions\n\n")
        f.write("## Overview\n\n")
        f.write(f"This document outlines the {len(merge_targets)} file merges required for the AccessAnalyzer 12.0 restructure.\n\n")
        
        for target, sources in sorted(merge_targets.items()):
            f.write(f"## {target}\n\n")
            f.write(f"Merge {len(sources)} files:\n\n")
            for source in sources:
                f.write(f"- `{source}`\n")
            f.write("\n")
            f.write("### Merge Strategy\n\n")
            if "operations.md" in target:
                f.write("1. Create a comprehensive operations guide with sections for each operation\n")
                f.write("2. Use clear headings for each operation type\n")
                f.write("3. Preserve all important content from individual files\n")
                f.write("4. Add a table of contents at the beginning\n")
            f.write("\n---\n\n")
    
    print(f"\nMerge instructions saved to: {merge_instructions_file}")

if __name__ == "__main__":
    generate_complete_mappings()
#!/usr/bin/env python3
import os
import csv
import re
from pathlib import Path

# Base paths
OLD_BASE = "docs/accessanalyzer/12.0"
NEW_BASE = "docs/accessanalyzer/12.0"

def get_all_md_files(base_path):
    """Get all .md files recursively"""
    md_files = []
    for root, dirs, files in os.walk(base_path):
        for file in files:
            if file.endswith('.md'):
                full_path = os.path.join(root, file)
                relative_path = os.path.relpath(full_path, base_path)
                md_files.append(relative_path)
    return sorted(md_files)

def map_file(old_path):
    """Map old file path to new structure based on rules"""
    # Remove any leading/trailing slashes
    old_path = old_path.strip('/')
    
    # Special case for index.md
    if old_path == "index.md":
        return old_path, "keep"
    
    # Extract components
    parts = old_path.split('/')
    
    # ADMIN section mappings
    if old_path.startswith('admin/'):
        # Active Directory operations - merge into single file
        if old_path.startswith('admin/action/activedirectory/operations/'):
            return "actions/active-directory-actions/operations.md", "merge"
        
        # Active Directory parameters
        if old_path.startswith('admin/action/activedirectory/parameters/'):
            filename = parts[-1]
            # Map to specific parameter files
            return f"actions/active-directory-actions/parameters/{filename}", "keep"
        
        # Active Directory general
        if old_path.startswith('admin/action/activedirectory/'):
            filename = parts[-1]
            return f"actions/active-directory-actions/{filename}", "keep"
        
        # File System operations - merge into single file
        if old_path.startswith('admin/action/filesystem/operations/'):
            return "actions/file-system-actions/operations.md", "merge"
        
        # File System parameters
        if old_path.startswith('admin/action/filesystem/parameters/'):
            filename = parts[-1]
            return f"actions/file-system-actions/parameters/{filename}", "keep"
        
        # File System general
        if old_path.startswith('admin/action/filesystem/'):
            filename = parts[-1]
            return f"actions/file-system-actions/{filename}", "keep"
        
        # Other actions
        if old_path.startswith('admin/action/'):
            # Keep structure but move to actions/
            remaining = '/'.join(parts[2:])
            return f"actions/{remaining}", "keep"
        
        # Data Collector
        if old_path.startswith('admin/datacollector/'):
            remaining = '/'.join(parts[2:])
            return f"data-collection/{remaining}", "keep"
        
        # Analysis
        if old_path.startswith('admin/analysis/'):
            remaining = '/'.join(parts[2:])
            return f"analysis-tools/{remaining}", "keep"
        
        # Reports
        if old_path.startswith('admin/report/'):
            remaining = '/'.join(parts[2:])
            return f"reporting/{remaining}", "keep"
        
        # Jobs
        if old_path.startswith('admin/jobs/'):
            remaining = '/'.join(parts[2:])
            return f"administration/job-management/{remaining}", "keep"
        
        # Settings
        if old_path.startswith('admin/settings/'):
            remaining = '/'.join(parts[2:])
            return f"administration/settings/{remaining}", "keep"
        
        # Other admin files
        if old_path.startswith('admin/'):
            # Map to administration/
            remaining = '/'.join(parts[1:])
            return f"administration/{remaining}", "keep"
    
    # INSTALL section
    if old_path.startswith('install/'):
        remaining = '/'.join(parts[1:])
        return f"getting-started/installation/{remaining}", "keep"
    
    # REQUIREMENTS section
    if old_path.startswith('requirements/'):
        remaining = '/'.join(parts[1:])
        return f"getting-started/system-requirements/{remaining}", "keep"
    
    # CONFIG section
    if old_path.startswith('config/'):
        remaining = '/'.join(parts[1:])
        return f"configuration/{remaining}", "keep"
    
    # SOLUTIONS section - clean up names
    if old_path.startswith('solutions/'):
        # Map specific solution renames
        solution_mappings = {
            'activedirectory': 'active-directory',
            'filesystem': 'file-system',
            'sharepointonline': 'sharepoint-online',
            'sharepointonpremises': 'sharepoint-on-premises',
            'exchangeonline': 'exchange-online',
            'exchangeonpremises': 'exchange-on-premises',
            'amazonS3': 'amazon-s3',
            'azurestorage': 'azure-storage',
            'googleworkspace': 'google-workspace',
            'microsoftteams': 'microsoft-teams',
            'office365': 'office-365',
            'salesforce': 'salesforce'
        }
        
        if len(parts) > 1:
            solution_name = parts[1]
            if solution_name in solution_mappings:
                parts[1] = solution_mappings[solution_name]
        
        return '/'.join(parts), "keep"
    
    # API section
    if old_path.startswith('api/'):
        return old_path, "keep"
    
    # Default - keep as is
    return old_path, "keep"

def generate_mappings():
    """Generate the complete file mappings"""
    # Get all MD files
    print("Scanning for .md files...")
    base_path = "/Users/jordan.violet/development/docs/docs/accessanalyzer/12.0"
    all_files = get_all_md_files(base_path)
    print(f"Found {len(all_files)} .md files")
    
    # Generate mappings
    mappings = []
    merge_targets = {}  # Track files that will be merged
    
    for old_file in all_files:
        new_file, action = map_file(old_file)
        
        # Track merge targets
        if action == "merge":
            if new_file not in merge_targets:
                merge_targets[new_file] = []
            merge_targets[new_file].append(old_file)
        
        mappings.append({
            'old_path': f"{OLD_BASE}/{old_file}",
            'new_path': f"{NEW_BASE}/{new_file}",
            'action': action,
            'filename': os.path.basename(old_file)
        })
    
    # Save mappings to CSV
    output_file = "/Users/jordan.violet/development/docs/aa_file_mappings.csv"
    with open(output_file, 'w', newline='') as csvfile:
        fieldnames = ['old_path', 'new_path', 'action', 'filename']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(mappings)
    
    print(f"\nMappings saved to: {output_file}")
    print(f"Total mappings: {len(mappings)}")
    print(f"Files to be merged: {sum(1 for m in mappings if m['action'] == 'merge')}")
    print(f"Merge targets: {len(merge_targets)}")
    
    # Print merge summary
    if merge_targets:
        print("\nMerge targets:")
        for target, sources in sorted(merge_targets.items()):
            print(f"\n{target} <- {len(sources)} files")
            for source in sources[:5]:  # Show first 5
                print(f"  - {source}")
            if len(sources) > 5:
                print(f"  ... and {len(sources) - 5} more")

if __name__ == "__main__":
    generate_mappings()
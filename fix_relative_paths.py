#!/usr/bin/env python3
"""
Enhanced script to find and replace relative paths with absolute paths in markdown files.
This script searches for markdown links and image references with relative paths and converts them to absolute paths.
"""

import os
import re
import sys
import argparse
from pathlib import Path
from collections import defaultdict

class RelativePathFixer:
    def __init__(self, root_dir='docs', verbose=False):
        self.root_dir = root_dir
        self.verbose = verbose
        self.stats = defaultdict(int)
        self.errors = []
        
    def find_markdown_files(self):
        """Find all markdown files in the docs directory."""
        markdown_files = []
        for dirpath, dirnames, filenames in os.walk(self.root_dir):
            # Skip hidden directories and node_modules
            dirnames[:] = [d for d in dirnames if not d.startswith('.') and d != 'node_modules']
            
            for filename in filenames:
                if filename.endswith(('.md', '.mdx')):
                    markdown_files.append(os.path.join(dirpath, filename))
        
        return sorted(markdown_files)
    
    def resolve_relative_path(self, base_file, relative_path):
        """
        Resolve a relative path to an absolute path based on the location of the base file.
        
        Args:
            base_file: The file containing the relative path reference
            relative_path: The relative path to resolve
        
        Returns:
            The absolute path (starting with /) or None if the target doesn't exist
        """
        # Remove any fragment identifier (#section) from the path
        fragment = ''
        if '#' in relative_path:
            relative_path, fragment = relative_path.split('#', 1)
            fragment = '#' + fragment
        
        # Remove any query parameters
        query = ''
        if '?' in relative_path:
            relative_path, query = relative_path.split('?', 1)
            query = '?' + query
        
        # Get the directory of the base file
        base_dir = os.path.dirname(base_file)
        
        # Join the base directory with the relative path
        absolute_path = os.path.normpath(os.path.join(base_dir, relative_path))
        
        # Try different file extensions
        extensions_to_try = ['', '.md', '.mdx']
        
        for ext in extensions_to_try:
            test_path = absolute_path if ext == '' else absolute_path + ext
            
            if os.path.exists(test_path):
                # Convert to Path object for easier manipulation
                path_obj = Path(test_path)
                docs_path = Path(self.root_dir).resolve()
                
                try:
                    # Get the relative path from the docs directory
                    rel_from_docs = path_obj.relative_to(docs_path)
                    # Return as absolute path with leading slash
                    result = '/' + str(rel_from_docs).replace('\\', '/')
                    # Add back fragment and query if they existed
                    return result + query + fragment
                except ValueError:
                    # Path is not under docs directory
                    self.errors.append(f"Path {test_path} is outside docs directory")
                    return None
        
        # File not found
        if self.verbose:
            self.errors.append(f"Could not resolve {relative_path} from {base_file}")
        return None
    
    def process_file(self, file_path, dry_run=True):
        """
        Process a single markdown file to replace relative paths with absolute paths.
        
        Args:
            file_path: Path to the markdown file to process
            dry_run: If True, only print what would be changed without modifying files
        
        Returns:
            Tuple of (number of replacements, list of changes)
        """
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            self.errors.append(f"Error reading {file_path}: {str(e)}")
            return 0, []
        
        # Regular expressions for different types of references
        patterns = [
            # Markdown links: [text](path)
            (r'\[([^\]]+)\]\((?!/)(?!https?://)(?!mailto:)(?!tel:)(?!#)([^)]+)\)', 'link'),
            # Markdown images: ![alt](path)
            (r'!\[([^\]]*)\]\((?!/)(?!https?://)(?!data:)([^)]+)\)', 'image'),
            # HTML img tags: <img src="path"
            (r'<img\s+[^>]*src="(?!/)(?!https?://)(?!data:)([^"]+)"', 'html_img'),
            # Reference-style links: [text]: path
            (r'^\[([^\]]+)\]:\s*(?!/)(?!https?://)(?!mailto:)(?!tel:)(?!#)(\S+)', 'reference'),
        ]
        
        replacements = []
        
        for pattern, ref_type in patterns:
            for match in re.finditer(pattern, content, re.MULTILINE):
                if ref_type in ['link', 'image', 'reference']:
                    relative_path = match.group(2)
                else:  # html_img
                    relative_path = match.group(1)
                
                # Skip if it's a placeholder or variable
                if relative_path.startswith(('$', '{', '<', '{{', '<%')):
                    continue
                
                # Resolve the relative path
                absolute_path = self.resolve_relative_path(file_path, relative_path)
                
                if absolute_path:
                    original = match.group(0)
                    
                    # Build replacement based on type
                    if ref_type == 'link':
                        replacement = f'[{match.group(1)}]({absolute_path})'
                    elif ref_type == 'image':
                        replacement = f'![{match.group(1)}]({absolute_path})'
                    elif ref_type == 'html_img':
                        replacement = original.replace(f'src="{relative_path}"', f'src="{absolute_path}"')
                    elif ref_type == 'reference':
                        replacement = f'[{match.group(1)}]: {absolute_path}'
                    
                    replacements.append({
                        'type': ref_type,
                        'original': original,
                        'replacement': replacement,
                        'relative_path': relative_path,
                        'absolute_path': absolute_path
                    })
                    
                    self.stats[ref_type] += 1
        
        if replacements and not dry_run:
            # Apply replacements
            for repl in replacements:
                content = content.replace(repl['original'], repl['replacement'])
            
            # Write the modified content back
            try:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
            except Exception as e:
                self.errors.append(f"Error writing {file_path}: {str(e)}")
        
        return len(replacements), replacements
    
    def run(self, dry_run=True, specific_file=None):
        """Run the path fixing process."""
        # Check if we're in the right directory
        if not os.path.exists(self.root_dir):
            print(f"Error: '{self.root_dir}' directory not found.")
            sys.exit(1)
        
        print(f"{'DRY RUN' if dry_run else 'APPLY'} MODE - {'No files' if dry_run else 'Files'} will be modified")
        print("\nSearching for markdown files...")
        
        # Find all markdown files or use specific file
        if specific_file:
            markdown_files = [specific_file] if os.path.exists(specific_file) else []
            if not markdown_files:
                print(f"Error: File {specific_file} not found")
                return
        else:
            markdown_files = self.find_markdown_files()
        
        print(f"Found {len(markdown_files)} markdown file(s)")
        
        # Process each file
        total_replacements = 0
        files_with_replacements = 0
        all_changes = []
        
        for file_path in markdown_files:
            replacements, changes = self.process_file(file_path, dry_run)
            if replacements > 0:
                total_replacements += replacements
                files_with_replacements += 1
                all_changes.append((file_path, changes))
        
        # Print detailed results
        if all_changes:
            print("\n" + "="*80)
            print("CHANGES FOUND:")
            print("="*80)
            
            for file_path, changes in all_changes:
                print(f"\n{file_path}:")
                for change in changes:
                    print(f"  [{change['type']}] {change['relative_path']} -> {change['absolute_path']}")
                    if self.verbose:
                        print(f"    Original:    {change['original'][:60]}...")
                        print(f"    Replacement: {change['replacement'][:60]}...")
        
        # Print summary
        print("\n" + "="*80)
        print("SUMMARY:")
        print("="*80)
        print(f"  Files scanned: {len(markdown_files)}")
        print(f"  Files with relative paths: {files_with_replacements}")
        print(f"  Total relative paths found: {total_replacements}")
        
        if self.stats:
            print("\n  By type:")
            for ref_type, count in sorted(self.stats.items()):
                print(f"    {ref_type}: {count}")
        
        if self.errors:
            print("\n  Errors encountered:")
            for error in self.errors[:10]:  # Show first 10 errors
                print(f"    - {error}")
            if len(self.errors) > 10:
                print(f"    ... and {len(self.errors) - 10} more errors")
        
        if dry_run and total_replacements > 0:
            print("\nTo apply these changes, run with --apply flag")

def main():
    """Main function with command line argument parsing."""
    parser = argparse.ArgumentParser(
        description='Fix relative paths in markdown files by converting them to absolute paths'
    )
    parser.add_argument(
        '--apply',
        action='store_true',
        help='Apply changes (default is dry run)'
    )
    parser.add_argument(
        '--verbose', '-v',
        action='store_true',
        help='Show verbose output including errors and detailed changes'
    )
    parser.add_argument(
        '--file', '-f',
        help='Process only a specific file'
    )
    parser.add_argument(
        '--root',
        default='docs',
        help='Root directory to process (default: docs)'
    )
    
    args = parser.parse_args()
    
    # Create fixer instance and run
    fixer = RelativePathFixer(root_dir=args.root, verbose=args.verbose)
    fixer.run(dry_run=not args.apply, specific_file=args.file)

if __name__ == "__main__":
    main() 
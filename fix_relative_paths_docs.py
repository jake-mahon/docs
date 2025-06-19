#!/usr/bin/env python3
"""
Script to find and replace relative paths with absolute paths in markdown files.
Converts paths like 'networkdevices.md#syslog-device' to '/docs/auditor/10.7/auditor/admin/monitoringplans/networkdevices.md#syslog-device'
"""

import os
import re
import sys
import argparse
from pathlib import Path
from collections import defaultdict

class RelativePathFixer:
    def __init__(self, root_dir='docs', verbose=False, dry_run=True):
        self.root_dir = root_dir
        self.verbose = verbose
        self.dry_run = dry_run
        self.stats = defaultdict(int)
        self.errors = []
        self.changes_made = []
        
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
            The absolute path (starting with /docs/) or None if the target doesn't exist
        """
        # Remove any fragment identifier (#section) from the path
        fragment = ''
        if '#' in relative_path:
            path_part, fragment = relative_path.split('#', 1)
            fragment = '#' + fragment
        else:
            path_part = relative_path
        
        # Remove any query parameters
        query = ''
        if '?' in path_part:
            path_part, query = path_part.split('?', 1)
            query = '?' + query
        
        # Get the directory of the base file
        base_dir = os.path.dirname(base_file)
        
        # Join the base directory with the relative path
        absolute_path = os.path.normpath(os.path.join(base_dir, path_part))
        
        # Try different file extensions if needed
        extensions_to_try = ['', '.md', '.mdx']
        
        for ext in extensions_to_try:
            test_path = absolute_path if ext == '' or absolute_path.endswith(('.md', '.mdx')) else absolute_path + ext
            
            if os.path.exists(test_path):
                # Get the path relative to the project root (parent of docs)
                try:
                    # Convert to Path object
                    path_obj = Path(test_path).resolve()
                    project_root = Path(self.root_dir).parent.resolve()
                    
                    # Get path relative to project root
                    rel_from_root = path_obj.relative_to(project_root)
                    
                    # Return as absolute path with /docs/ prefix
                    result = '/' + str(rel_from_root).replace('\\', '/')
                    
                    # Add back query and fragment if they existed
                    return result + query + fragment
                except ValueError:
                    # Path is not under project root
                    if self.verbose:
                        self.errors.append(f"Path {test_path} is outside project root")
                    return None
        
        # File not found
        if self.verbose:
            self.errors.append(f"Could not resolve {relative_path} from {base_file}")
        return None
    
    def is_relative_path(self, path):
        """Check if a path is relative (doesn't start with /, http://, https://, mailto:, tel:, or #)"""
        if not path:
            return False
        
        # Skip absolute paths and special protocols
        skip_patterns = [
            '/',           # Absolute paths
            'http://',     # HTTP URLs
            'https://',    # HTTPS URLs
            'mailto:',     # Email links
            'tel:',        # Phone links
            '#',           # Anchor links
            'javascript:', # JavaScript links
            'data:',       # Data URLs
            'ftp://',      # FTP URLs
            'file://',     # File URLs
        ]
        
        for pattern in skip_patterns:
            if path.startswith(pattern):
                return False
        
        # Skip if it's a placeholder or variable
        if path.startswith(('$', '{', '<', '{{', '<%')):
            return False
        
        return True
    
    def process_file(self, file_path):
        """
        Process a single markdown file to replace relative paths with absolute paths.
        
        Args:
            file_path: Path to the markdown file to process
        
        Returns:
            Tuple of (number of replacements, list of changes)
        """
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            original_content = content
        except Exception as e:
            self.errors.append(f"Error reading {file_path}: {str(e)}")
            return 0, []
        
        # Regular expressions for different types of references
        patterns = [
            # Markdown links: [text](path)
            (r'\[([^\]]+)\]\(([^)]+)\)', 'link'),
            # Markdown images: ![alt](path)
            (r'!\[([^\]]*)\]\(([^)]+)\)', 'image'),
            # Reference-style links: [text]: path
            (r'^\[([^\]]+)\]:\s*(\S+)', 'reference'),
            # HTML anchor tags: <a href="path">
            (r'<a\s+[^>]*href="([^"]+)"', 'html_link'),
            # HTML img tags: <img src="path"
            (r'<img\s+[^>]*src="([^"]+)"', 'html_img'),
        ]
        
        replacements = []
        
        for pattern, ref_type in patterns:
            for match in re.finditer(pattern, content, re.MULTILINE):
                # Extract the path based on the pattern type
                if ref_type in ['link', 'image', 'reference']:
                    path = match.group(2)
                else:  # html_link, html_img
                    path = match.group(1)
                
                # Check if it's a relative path
                if not self.is_relative_path(path):
                    continue
                
                # Resolve the relative path
                absolute_path = self.resolve_relative_path(file_path, path)
                
                if absolute_path:
                    original = match.group(0)
                    
                    # Build replacement based on type
                    if ref_type == 'link':
                        replacement = f'[{match.group(1)}]({absolute_path})'
                    elif ref_type == 'image':
                        replacement = f'![{match.group(1)}]({absolute_path})'
                    elif ref_type == 'reference':
                        replacement = f'[{match.group(1)}]: {absolute_path}'
                    elif ref_type == 'html_link':
                        replacement = original.replace(f'href="{path}"', f'href="{absolute_path}"')
                    elif ref_type == 'html_img':
                        replacement = original.replace(f'src="{path}"', f'src="{absolute_path}"')
                    
                    replacements.append({
                        'type': ref_type,
                        'original': original,
                        'replacement': replacement,
                        'relative_path': path,
                        'absolute_path': absolute_path,
                        'line_num': content[:match.start()].count('\n') + 1
                    })
                    
                    self.stats[ref_type] += 1
        
        # Apply replacements if not in dry run mode
        if replacements and not self.dry_run:
            # Sort replacements by position in reverse order to avoid offset issues
            replacements.sort(key=lambda x: content.find(x['original']), reverse=True)
            
            for repl in replacements:
                content = content.replace(repl['original'], repl['replacement'], 1)
            
            # Write the modified content back
            try:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                # Track the change
                self.changes_made.append({
                    'file': file_path,
                    'changes': len(replacements)
                })
            except Exception as e:
                self.errors.append(f"Error writing {file_path}: {str(e)}")
                return 0, []
        
        return len(replacements), replacements
    
    def run(self, specific_file=None):
        """Run the path fixing process."""
        # Check if we're in the right directory
        if not os.path.exists(self.root_dir):
            print(f"Error: '{self.root_dir}' directory not found.")
            sys.exit(1)
        
        print(f"{'DRY RUN' if self.dry_run else 'APPLY'} MODE - {'No files' if self.dry_run else 'Files'} will be modified")
        print("\nSearching for markdown files...")
        
        # Find all markdown files or use specific file
        if specific_file:
            if not os.path.exists(specific_file):
                print(f"Error: File {specific_file} not found")
                return
            markdown_files = [specific_file]
        else:
            markdown_files = self.find_markdown_files()
        
        print(f"Found {len(markdown_files)} markdown file(s)")
        
        # Process each file
        total_replacements = 0
        files_with_replacements = 0
        all_changes = []
        
        for file_path in markdown_files:
            replacements, changes = self.process_file(file_path)
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
                # Get relative path from current directory for cleaner output
                try:
                    rel_path = os.path.relpath(file_path)
                except:
                    rel_path = file_path
                
                print(f"\n{rel_path}:")
                for change in changes:
                    print(f"  Line {change['line_num']}: [{change['type']}] {change['relative_path']} -> {change['absolute_path']}")
                    if self.verbose:
                        print(f"    Original:    {change['original']}")
                        print(f"    Replacement: {change['replacement']}")
        
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
        
        if self.dry_run and total_replacements > 0:
            print("\nTo apply these changes, run with --apply flag")
        elif not self.dry_run and total_replacements > 0:
            print(f"\nSuccessfully updated {files_with_replacements} file(s)")

def main():
    """Main function with command line argument parsing."""
    parser = argparse.ArgumentParser(
        description='Fix relative paths in markdown files by converting them to absolute paths starting with /docs/',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Dry run (default) - show what would be changed
  python fix_relative_paths_docs.py
  
  # Apply changes
  python fix_relative_paths_docs.py --apply
  
  # Process a specific file
  python fix_relative_paths_docs.py --file docs/auditor/10.7/auditor/admin/monitoringplans/index.md
  
  # Verbose output
  python fix_relative_paths_docs.py --verbose
"""
    )
    
    parser.add_argument(
        '--apply',
        action='store_true',
        help='Apply changes (default is dry run)'
    )
    parser.add_argument(
        '--verbose', '-v',
        action='store_true',
        help='Show verbose output including full before/after for each change'
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
    fixer = RelativePathFixer(
        root_dir=args.root,
        verbose=args.verbose,
        dry_run=not args.apply
    )
    fixer.run(specific_file=args.file)

if __name__ == "__main__":
    main() 
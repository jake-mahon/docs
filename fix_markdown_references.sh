#!/bin/bash

# Check if required arguments are provided
if [ $# -ne 2 ]; then
    echo "Usage: $0 <csv_filepath> <search_directory>"
    echo "  csv_filepath: Path to CSV file with source,destination paths"
    echo "  search_directory: Directory to search and replace paths in"
    exit 1
fi

# Get arguments
csv_file="$1"
search_dir="$2"

# Validate inputs
if [ ! -f "$csv_file" ]; then
    echo "Error: CSV file '$csv_file' not found"
    exit 1
fi

if [ ! -d "$search_dir" ]; then
    echo "Error: Directory '$search_dir' not found"
    exit 1
fi

# Process CSV file
while IFS=',' read -r source_path dest_path; do
    # Remove any leading/trailing whitespace
    source_path=$(echo "$source_path" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    dest_path=$(echo "$dest_path" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    
    echo "Processing: $source_path -> $dest_path"
    
    # Escape special characters for sed
    escaped_source=$(printf '%s\n' "$source_path" | sed 's/[[\.*^$()+?{|]/\\&/g')
    escaped_dest=$(printf '%s\n' "$dest_path" | sed 's/[[\.*^$()+?{|]/\\&/g')
    
    # Find all files in the directory and perform replacement
    find "$search_dir" -type f -name "*.md" -o -name "*.txt" -o -name "*.yml" -o -name "*.yaml" -o -name "*.json" | while read -r file; do
        # Check if file contains the source path
        if grep -q "$source_path" "$file" 2>/dev/null; then
            # Create backup
            cp "$file" "$file.bak"
            
            # Perform replacement
            if sed -i '' "s|$escaped_source|$escaped_dest|g" "$file" 2>/dev/null || \
               sed -i "s|$escaped_source|$escaped_dest|g" "$file" 2>/dev/null; then
                echo "  Updated: $file"
                # Remove backup if successful
                rm "$file.bak"
            else
                echo "  Error updating: $file"
                # Restore from backup
                mv "$file.bak" "$file"
            fi
        fi
    done
done < "$csv_file"

echo "Path replacement complete"
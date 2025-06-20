#!/bin/bash

# Check if directory path argument is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <directory_path>"
    exit 1
fi

# Get the directory path from the first argument
dir_path="$1"

# Check if the directory exists
if [ ! -d "$dir_path" ]; then
    echo "Error: Directory '$dir_path' not found"
    exit 1
fi

# Find and delete empty directories
# -type d: only directories
# -empty: only empty ones
# -delete: delete them
# -depth: process directory contents before directory itself (bottom-up)
echo "Searching for empty directories in: $dir_path"
find "$dir_path" -depth -type d -empty -print -delete | while read -r dir; do
    echo "Deleted empty directory: $dir"
done

echo "Finished removing empty directories"
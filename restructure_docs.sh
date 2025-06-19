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

./append_files.sh $csv_file
./delete_empty_directories.sh $search_dir
./fix_markdown_references.sh $csv_file $search_dir

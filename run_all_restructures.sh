#!/bin/bash

# Script to run restructure_docs.sh for all items in finished_versions.txt
# Usage: ./run_all_restructures.sh

# Check if finished_versions.txt exists
if [ ! -f "finished_versions.txt" ]; then
    echo "Error: finished_versions.txt not found!"
    exit 1
fi

# Check if restructure_docs.sh exists
if [ ! -f "restructure_docs.sh" ]; then
    echo "Error: restructure_docs.sh not found!"
    exit 1
fi

# Read each line from finished_versions.txt
while IFS= read -r item || [ -n "$item" ]; do
    # Skip empty lines
    if [ -z "$item" ]; then
        continue
    fi
    
    # Construct the arguments
    arg1="restructure/${item}/file-mappings.csv"
    arg2="docs/${item}"
    
    # Check if the file-mappings.csv exists
    if [ ! -f "$arg1" ]; then
        echo "Warning: $arg1 not found, skipping $item"
        continue
    fi
    
    # Check if the docs directory exists
    if [ ! -d "$arg2" ]; then
        echo "Warning: $arg2 directory not found, skipping $item"
        continue
    fi
    
    echo "Processing: $item"
    echo "  Running: ./restructure_docs.sh \"$arg1\" \"$arg2\""
    
    # Run the restructure_docs.sh script
    ./restructure_docs.sh "$arg1" "$arg2"
    
    # Check if the command was successful
    if [ $? -eq 0 ]; then
        echo "  ✓ Successfully processed $item"
    else
        echo "  ✗ Error processing $item"
    fi
    
    echo ""
done < finished_versions.txt

echo "All items processed."
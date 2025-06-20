#!/bin/bash

# Script to run restructure_docs.sh for all items in finished_versions.txt in parallel
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

# Function to process a single item
process_item() {
    local item="$1"
    local arg1="restructure/${item}/file-mappings.csv"
    local arg2="docs/${item}"
    
    # Check if the file-mappings.csv exists
    if [ ! -f "$arg1" ]; then
        echo "Warning: $arg1 not found, skipping $item"
        return 1
    fi
    
    # Check if the docs directory exists
    if [ ! -d "$arg2" ]; then
        echo "Warning: $arg2 directory not found, skipping $item"
        return 1
    fi
    
    echo "Processing: $item"
    echo "  Running: ./restructure_docs.sh \"$arg1\" \"$arg2\""
    
    # Run the restructure_docs.sh script
    ./restructure_docs.sh "$arg1" "$arg2"
    
    # Check if the command was successful
    if [ $? -eq 0 ]; then
        echo "  ✓ Successfully processed $item"
        return 0
    else
        echo "  ✗ Error processing $item"
        return 1
    fi
}

# Export the function so it's available to parallel
export -f process_item

# Get the number of CPU cores for optimal parallelization
CORES=$(nproc 2>/dev/null || sysctl -n hw.ncpu 2>/dev/null || echo 4)
echo "Running with parallelization (max $CORES jobs)..."
echo ""

# Process items in parallel using xargs directly from the file
grep -v '^$' finished_versions.txt | xargs -P "$CORES" -I {} bash -c 'process_item "$@"' _ {}

echo ""
echo "All items processed."
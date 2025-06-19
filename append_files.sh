#!/bin/bash

# Check if filepath argument is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <csv_filepath>"
    exit 1
fi

# Get the CSV filepath from the first argument
csv_file="$1"

# Check if the CSV file exists
if [ ! -f "$csv_file" ]; then
    echo "Error: CSV file '$csv_file' not found"
    exit 1
fi

# Initialize counters
total_rows=0
skipped_rows=0
processed_rows=0
errors=0

# Process the CSV file
while IFS=',' read -r source dest || [ -n "$source" ]; do
    # Skip empty lines
    if [ -z "$source" ] && [ -z "$dest" ]; then
        continue
    fi
    
    ((total_rows++))
    
    # Trim whitespace from source and destination
    source=$(echo "$source" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    dest=$(echo "$dest" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    
    # Remove quotes if present
    source=$(echo "$source" | sed 's/^"//;s/"$//')
    dest=$(echo "$dest" | sed 's/^"//;s/"$//')
    
    # Skip if source and destination are the same
    if [ "$source" = "$dest" ]; then
        echo "Skipping row $total_rows: source and destination are the same ($source)"
        ((skipped_rows++))
        continue
    fi
    
    if [ -f "$source" ]; then
        mkdir -p "$(dirname "$dest")"
        if cat "$source" >> "$dest"; then
            rm "$source"
            echo "Appended $source to $dest and deleted source"
            ((processed_rows++))
        else
            echo "Error: Failed to append $source to $dest"
            ((errors++))
        fi
    else
        echo "Warning: Source file $source not found"
        ((errors++))
    fi
done < "$csv_file"

# Print summary
echo ""
echo "Summary:"
echo "  Total rows: $total_rows"
echo "  Skipped rows (same source/dest): $skipped_rows"
echo "  Processed rows: $processed_rows"
echo "  Errors: $errors"
#!/usr/bin/env python3

import csv

# Read the original mappings
with open('file-mappings.csv', 'r') as f:
    lines = f.readlines()

# Update the mappings
updated_lines = []
for line in lines:
    line = line.strip()
    if not line:
        continue
    
    # Check if it's a user properties line
    if 'portal/user/properties/activedirectory/' in line:
        # Change to AD-specific file
        line = line.replace('user-guide/user-management/user-properties.md', 
                           'user-guide/user-management/user-properties-active-directory.md')
    elif 'portal/user/properties/azure/' in line:
        # Change to Azure-specific file
        line = line.replace('user-guide/user-management/user-properties.md', 
                           'user-guide/user-management/user-properties-azure.md')
    
    updated_lines.append(line)

# Write the updated mappings
with open('file-mappings-updated.csv', 'w') as f:
    for line in updated_lines:
        f.write(line + '\n')

print("Updated user properties mappings:")
print("- Active Directory properties -> user-properties-active-directory.md")
print("- Azure properties -> user-properties-azure.md")
print("- General properties -> user-properties.md")
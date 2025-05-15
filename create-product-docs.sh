#!/bin/bash

# Array of product information
# Format: [file-name]:[display-name]
PRODUCTS=(
  "access-analyzer:Access Analyzer"
  "activity-monitor:Activity Monitor"
  "auditor:Auditor"
  "change-tracker:Change Tracker"
  "data-classification:Data Classification"
  "directory-manager:Directory Manager"
  "endpoint-policy-manager:Endpoint Policy Manager"
  "endpoint-protector:Endpoint Protector"
  "identity-manager:Identity Manager" 
  "password-policy-enforcer:Password Policy Enforcer"
  "password-reset:Password Reset"
  "password-secure:Password Secure"
  "pingcastle:PingCastle"
  "platform-governance-netsuite:Platform Governance for NetSuite"
  "platform-governance-salesforce:Platform Governance for Salesforce"
  "privilege-secure:Privilege Secure"
  "recovery-active-directory:Recovery for Active Directory"
  "threat-manager:Threat Manager"
  "threat-prevention:Threat Prevention"
)

for product in "${PRODUCTS[@]}"; do
  # Split the product info
  IFS=":" read -r file_name display_name <<< "$product"
  
  # Create the markdown file
  cat > "docs/products/$file_name.md" << EOF
---
id: $file_name
title: $display_name
sidebar_label: $display_name
---

# $display_name

Product description and details will go here.

## Features

- Feature 1
- Feature 2
- Feature 3

## Documentation

More detailed documentation will be added here.
EOF

  echo "Created docs/products/$file_name.md"
done

echo "All product documentation files have been created." 
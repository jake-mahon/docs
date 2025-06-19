# ThreatManager 3.0 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the ThreatManager 3.0 documentation to improve information architecture, reduce redundancy, and enhance user experience.

## Key Changes

### 1. Reduced Directory Depth

- Maximum depth reduced from 5 levels to 3 levels
- Flattened directory structure for easier navigation

### 2. Consolidated Categories

- Combined related topics to reduce the total number of categories
- Eliminated redundant "overview.md" files (reduced from 10 to strategic placements)
- Merged single-item categories into parent categories

### 3. Improved Organization

#### Getting Started Section

- Combined introductory content (overview.md, gettingstarted.md, whatsnew.md)
- Created a clear entry point for new users
- Added quick-start guide for rapid onboarding

#### Installation Section

- Grouped all installation-related content
- Separated requirements, installation steps, security, and upgrades
- Consolidated permission requirements into one location

#### Administration Section

- Reorganized into logical subcategories:
  - System Configuration: Core system settings
  - Integrations: All external connections and sync services
  - Policies: Policy management and honeytokens
  - Threat Management: Detection and response configuration
  - System Health: Monitoring and status information

#### Operations Section

- User-facing operational tasks grouped together:
  - Investigations: All investigation-related tasks
  - Playbooks: Automation and workflow management
  - Threat Details: Viewing and analyzing threats

#### Reference Section

- Technical reference materials:
  - Threat Types: Comprehensive threat documentation
  - Troubleshooting: Common issues and solutions

### 4. File Consolidations

#### Merged Files

1. **Authentication Providers**: Combined individual auth provider files into single comprehensive guide
2. **Requirements**: Merged server.md, client.md, database.md, and actionservice.md into system-requirements.md
3. **Permissions**: Combined adsync.md and entraidsync.md into permissions.md
4. **System Settings**: Merged about.md content into system-settings.md
5. **Integrations**: Consolidated app tokens and folder settings into relevant integration guides
6. **Investigation Options**: Combined individual option files into managing-investigations.md

#### Renamed Files

- Used consistent naming conventions with hyphens instead of mixed styles
- Changed generic "overview.md" files to descriptive names
- Standardized on lowercase with hyphens for all file and directory names

### 5. Content Improvements

#### Added Index Files

- Created index.md files for each major section to provide navigation and context
- These serve as landing pages for each category

#### Improved File Names

- More descriptive file names that indicate content
- Consistent naming patterns across the documentation

#### Logical Grouping

- Related topics are now co-located
- Clear progression from getting started → installation → administration → operations → reference

## Benefits

1. **Improved Navigation**: Users can find information more quickly with fewer directory levels
2. **Reduced Redundancy**: Eliminated duplicate overview files and consolidated related content
3. **Better Organization**: Logical grouping makes the documentation structure more intuitive
4. **Consistent Naming**: Standardized file and directory names improve predictability
5. **Clearer Hierarchy**: Each section has a clear purpose and scope

## Migration Notes

- All existing content will be preserved during migration
- Files being merged will have their content combined intelligently
- Redirects should be set up for moved files to prevent broken links
- The sidebar.js file will be updated to reflect the new structure

# Data Classification 5.7 Documentation Restructuring Plan

## Overview

This plan outlines the restructuring of the Data Classification 5.7 documentation to improve information architecture, user experience, and maintainability following Docusaurus best practices.

## Key Improvements

### 1. Simplified Structure

- Reduced the total number of top-level categories from 8 to 10 more focused areas
- Eliminated excessive nesting (max 3 levels deep vs. current 5 levels)
- Combined related topics into logical groupings

### 2. Consistent Naming Conventions

- All directory and file names use kebab-case (e.g., `getting-started` instead of `gettingstarted`)
- Removed inconsistent naming patterns (camelCase, all lowercase)
- Used clear, descriptive names that match navigation labels

### 3. Logical Information Flow

The new structure follows a natural progression:

1. **Getting Started** - Introduction and prerequisites
2. **Installation** - Setup and deployment
3. **Configuration** - System and infrastructure settings
4. **Content Sources** - Managing data sources
5. **Taxonomies** - Classification system setup
6. **Workflows** - Automation and actions
7. **Reporting** - Analytics and insights
8. **Data Subject Requests** - DSAR functionality
9. **Utilities** - Maintenance tools
10. **Administration** - Administrative reference

### 4. Major Consolidations

#### Content Sources

- Consolidated all source types under a single `content-sources` directory
- Grouped cloud storage providers together
- Simplified source groups structure

#### Configuration

- Separated into logical groups: core settings, infrastructure, system settings, and security
- Moved infrastructure-specific configs to a dedicated section
- Consolidated security settings

#### Reporting

- Simplified reporting structure with clear categories
- Combined related report types
- Separated dashboards from reports

#### Workflows

- Streamlined workflow creation steps
- Grouped advanced configurations
- Consolidated MIP labels documentation

### 5. Improved User Experience

- Each major section has an index.md for overview/introduction
- Related topics are grouped together
- Clear hierarchy makes navigation intuitive
- Reduced cognitive load with fewer categories

### 6. File Mappings

- All existing files are mapped to new locations
- Some files are merged where content overlaps
- No content is lost in the restructuring

## Implementation Notes

1. All index.md files serve as section overviews
2. Deep nesting is avoided for better sidebar navigation
3. Categories use title case in the sidebar configuration
4. File names remain lowercase with hyphens for consistency
5. The structure supports future expansion without major reorganization

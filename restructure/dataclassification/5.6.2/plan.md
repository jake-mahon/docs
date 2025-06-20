# DataClassification 5.6.2 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the DataClassification 5.6.2 documentation to improve information architecture, reduce redundancy, and create a more intuitive navigation experience for users.

## Goals

1. Reduce the total number of categories by consolidating related topics
2. Create a logical flow from getting started to advanced features
3. Use consistent naming conventions (title case for display, snake-case-with-hyphens for files)
4. Group similar functionality together
5. Eliminate deeply nested structures where possible

## Major Changes

### 1. Consolidated Top-Level Categories (from 27 to 10)

- **Getting Started**: Combines overview, requirements, and what's new
- **Deployment**: Combines deployment planning, installation, and upgrade
- **Configuration**: Combines system, core, and infrastructure configuration
- **Data Sources**: Consolidates all source types under one section
- **Taxonomies & Classification**: Merges taxonomies with classification features
- **Workflows & Automation**: Includes all workflow and automation features
- **Reporting & Analytics**: Combines dashboards and reports
- **Security & Administration**: Merges security, user management, and admin tasks
- **DSAR**: Keeps Data Subject Access Requests as a focused section
- **Reference**: Contains revision history and related documentation

### 2. Simplified Source Management

Instead of having separate top-level sections for each source type, all sources are now under "Data Sources" with subsections for:

- File Systems
- Email Systems
- SharePoint
- Cloud Storage
- Databases

### 3. Merged Related Features

- Combined all configuration topics under logical subsections
- Merged workflow actions into the workflows section
- Consolidated all reporting features under one section
- Combined user management with security settings

### 4. Reduced Nesting Levels

- Maximum nesting reduced to 3 levels (was 4-5 in some areas)
- Flattened structure where appropriate
- Combined small related files into comprehensive guides

### 5. File Consolidations

Several small files will be merged into more comprehensive guides:

- Multiple appliance deployment files → unified deployment guides
- Separate configuration files → combined configuration guides
- Individual action files → grouped by action type
- Multiple report types → organized by report category

## Benefits

1. **Easier Navigation**: Users can find related information more quickly
2. **Reduced Redundancy**: Similar topics are grouped together
3. **Better Learning Path**: Clear progression from basics to advanced topics
4. **Consistent Structure**: Similar depth and organization across all sections
5. **Improved Discoverability**: Related features are located together

## Implementation Notes

- All existing content will be preserved and reorganized
- URLs will change due to new file paths
- Redirects should be implemented for old URLs
- Sidebar will be significantly simplified
- Search functionality will benefit from clearer categorization

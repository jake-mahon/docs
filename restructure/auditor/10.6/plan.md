# Auditor 10.6 Documentation Restructuring Plan

## Overview

This plan outlines the restructuring of the Auditor 10.6 documentation to improve information architecture, reduce complexity, and enhance user experience.

## Current Issues

1. **Fragmented Structure**: The documentation is split between "access" and "auditor" directories at the top level, causing confusion
2. **Deep Nesting**: Some sections are nested 6-7 levels deep, making navigation difficult
3. **Scattered Topics**: Related topics are spread across different sections
4. **Inconsistent Naming**: Mix of camelCase, lowercase, and inconsistent terminology
5. **Over-Granularity**: Many topics are split into individual files when they could be combined

## Restructuring Goals

1. **Flatten the hierarchy** to maximum 3-4 levels deep
2. **Consolidate related topics** into comprehensive guides
3. **Use consistent title case** for all categories and documents
4. **Follow logical user journey**: Overview → Getting Started → Installation → Configuration → Features → Reference
5. **Reduce total file count** from 509 to approximately 147 files

## Major Changes

### 1. Top-Level Consolidation

- Merge "access" directory content into main "auditor" structure as "Access Reviews" feature
- Create clear top-level categories that represent major user tasks

### 2. Data Sources Reorganization

- Group all data source configurations under a single "data-sources" directory
- Organize by technology type: Active Directory, Microsoft 365, File Servers, Databases, etc.
- Consolidate configuration, permissions, and troubleshooting for each data source

### 3. Features Consolidation

- Create a unified "features" directory for all Auditor capabilities
- Group related functionality (alerts, risk assessment, reporting, etc.)
- Merge small, related topics into comprehensive guides

### 4. Integrations Simplification

- Organize integrations by type: SIEM, Ticketing, Cloud, Security
- Provide index pages for each integration category
- Standardize integration documentation structure

### 5. Add-ons Separation

- Move all add-on modules to a dedicated "add-ons" directory
- Simplify add-on documentation to focus on unique capabilities
- Remove redundant configuration information

### 6. Administration Streamlining

- Consolidate all administrative tasks under "administration"
- Group settings into logical categories
- Merge related configuration topics

### 7. Tools Consolidation

- Combine all utility tools into a single "tools" directory
- Provide consistent documentation for each tool
- Remove redundant overview pages

### 8. API Documentation Enhancement

- Create a dedicated API section with clear structure
- Consolidate API-related content into logical topics
- Improve API reference organization

### 9. Reference Section

- Create a unified reference section for technical details
- Consolidate ports, permissions, and troubleshooting information
- Remove scattered technical details from feature documentation

## File Reduction Strategy

1. **Merge Overview Pages**: Combine multiple overview.md files into parent index.md files
2. **Consolidate Configuration**: Merge separate configuration topics into comprehensive guides
3. **Combine Related Features**: Group small, related features into single documents
4. **Eliminate Redundancy**: Remove duplicate information across sections

## Benefits

1. **Improved Navigation**: Users can find information more quickly with fewer levels
2. **Better Context**: Related information is grouped together
3. **Reduced Maintenance**: Fewer files to maintain and update
4. **Clearer Structure**: Logical organization follows user workflow
5. **Enhanced Searchability**: Better document titles and organization

## Implementation Notes

- All file and directory names will use lowercase with hyphens (kebab-case)
- Index files will serve as overview/introduction pages for each section
- Sidebar will use title case for all display names
- Content will be merged thoughtfully to preserve all important information

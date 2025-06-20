# AccessAnalyzer 11.6 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the AccessAnalyzer 11.6 documentation from its current complex structure with 1,430 files to a more streamlined, user-friendly organization.

## Key Restructuring Principles

1. **Consolidation**: Merge related topics that are currently spread across multiple small files
2. **Task-Based Organization**: Group content by user tasks rather than technical components
3. **Simplified Navigation**: Reduce the depth of nested folders from 6+ levels to maximum 3 levels
4. **Consistent Naming**: Use snake-case naming convention throughout
5. **Logical Grouping**: Organize by user journey: Getting Started → Installation → Administration → Usage → Reference

## Major Changes

### 1. Getting Started Section

- Combines overview.md, gettingstarted.md, and whatsnew.md into a cohesive introduction
- Consolidates all requirements documentation into a single subsection
- Creates a new quick-start.md guide for new users

### 2. Installation Section

- Groups all installation guides by component type
- Merges related installation topics (e.g., all report configuration topics)
- Consolidates upgrade procedures with their respective installation guides

### 3. Administration Section

- Consolidates admin tasks into logical groups:
  - Settings (all configuration options)
  - Access Control (RBAC, API, authentication)
  - Jobs and Scheduling (job management, scheduling, instant jobs)
  - Host Management (discovery, inventory, management)
  - Reporting (creating and managing reports)
  - Maintenance (best practices, troubleshooting)

### 4. Data Collection Section

- Groups all data collectors by platform/technology
- Merges numerous small collector configuration files into comprehensive guides
- Consolidates similar collectors (e.g., all database collectors share common patterns)

### 5. Analysis and Actions Section

- Separates analysis tools from action tools for clarity
- Consolidates multiple small action files into comprehensive guides by action type

### 6. Solutions Section

- Reorganizes from deeply nested structure to platform-based organization
- Merges numerous small report files into comprehensive solution guides
- Adds "recommended-reports.md" for each platform to guide users

### 7. Configuration Guides Section

- Consolidates all platform-specific configuration guides
- Groups by technology type (directory services, storage systems, collaboration)
- Merges small configuration files into comprehensive guides

### 8. Security and Compliance Section

- Elevates sensitive data discovery to top-level importance
- Consolidates CDSA (Change-Driven Security Assessment) documentation

### 9. Reference Section

- Creates consolidated reference documents for quick lookup
- Includes permission matrix, API reference, and troubleshooting guide

## File Reduction Strategy

1. **Merge Small Files**: Files with less than 2-3 pages of content will be merged into related comprehensive guides
2. **Eliminate Redundancy**: Remove duplicate content and create single source of truth
3. **Combine Overview Files**: Most "overview.md" files will be merged into their parent section's main file
4. **Consolidate Collections**: Multiple collection scan files will be combined into platform-specific guides

## Benefits

1. **Improved Navigation**: Users can find information faster with fewer clicks
2. **Better Context**: Related information is kept together
3. **Reduced Maintenance**: Fewer files to maintain and update
4. **Enhanced User Experience**: Logical flow from installation to usage to reference
5. **Scalability**: Structure can accommodate new features without creating sprawl

## Implementation Notes

- Each major section will have an overview.md that serves as a landing page
- Cross-references will be updated to reflect new structure
- Existing URLs will need redirects to maintain backwards compatibility
- Search functionality should be updated to reflect new organization## Summary

- Total files in current structure: 1,430
- Estimated files in new structure: ~150-200 (after consolidation)
- Reduction in directory depth: From 6+ levels to maximum 3 levels
- Main sections reduced from 3 top-level products to 1 consolidated structure
- Improved organization by user journey and task-based navigation

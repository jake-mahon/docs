# Access Analyzer 12.0 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Access Analyzer 12.0 documentation to improve information architecture, reduce excessive nesting, and create a more intuitive navigation experience for users.

## Current Issues

1. **Excessive Nesting**: The current `admin/` section has 4-5 levels of nesting, making navigation difficult
2. **Poor Categorization**: Related functionality is scattered across different sections
3. **Inconsistent Naming**: Mix of camelCase, snake_case, and spaces in file/folder names
4. **Non-Intuitive Flow**: Users struggle to find related information due to poor organization

## Restructuring Strategy

### 1. Flatten Hierarchy

- Reduce maximum nesting from 5 levels to 3 levels
- Move heavily nested content into logical top-level categories
- Combine related small sections into cohesive groups

### 2. Logical Grouping

- **Getting Started**: Entry point and overview content
- **Installation**: All installation-related content (application, agents, proxies)
- **Configuration**: Platform-specific configurations (AD, cloud platforms, databases)
- **Data Collection**: Data collector configurations (formerly admin/datacollector)
- **Actions**: Automated actions and workflows (formerly admin/action)
- **Analysis**: Analytics, business rules, scripting (formerly admin/analysis)
- **Reporting**: Report creation and management (formerly admin/report)
- **Job Management**: Jobs, scheduling, execution (formerly admin/jobs, schedule, runninginstances)
- **Host Management**: Host discovery and management (formerly admin/hostdiscovery, hostmanagement)
- **Administration**: Settings, maintenance, navigation (formerly admin/settings, maintenance, navigate)
- **Sensitive Data Discovery**: SDD-specific content
- **Solutions**: Use case solutions and scenarios
- **Requirements**: System and target requirements
- **CDSA**: Change Detection and Security Analytics

### 3. Naming Conventions

- Use **Title Case** for all category and section names
- Use **kebab-case** (hyphens) for all file and directory names
- Convert camelCase to kebab-case (e.g., `activedirectory` → `active-directory`)
- Convert underscores to hyphens (e.g., `ad_scan` → `ad-scan`)
- Expand abbreviations where helpful (e.g., `ewsmailbox` → `ews-mailbox`)

### 4. Content Consolidation

- Merge small related files into comprehensive guides (max 10 files per merged document)
- Create index files for major sections
- Maintain granular topics for complex subjects

## Key Changes

### Major Restructuring

1. **Break up `admin/` section**: Distribute into 6 logical categories
2. **Elevate platform configurations**: Move from config/ to top-level Configuration section
3. **Create clear Getting Started flow**: Separate from scattered overview content
4. **Streamline job management**: Combine jobs, scheduling, and monitoring

### File Organization

- **Root level**: Core navigation files (index, overview, getting-started)
- **Feature sections**: Logical groupings with clear purposes
- **Deep content**: Maximum 3 levels deep with clear parent-child relationships

### Navigation Improvements

- Each major section gets an index.md with overview and links
- Related content is co-located
- Clear progression from basic to advanced topics
- Consistent structure across all sections

## Implementation Approach

1. **File Mapping**: Create comprehensive mapping from old to new locations
2. **Content Merging**: Identify files that should be merged (≤10 files per target)
3. **Sidebar Creation**: Generate new sidebar reflecting the improved structure
4. **Link Updates**: Update all internal links to reflect new structure
5. **Testing**: Verify all links work and content is accessible

## Benefits

1. **Improved Discoverability**: Related content is grouped logically
2. **Reduced Cognitive Load**: Fewer navigation levels to traverse
3. **Better User Flow**: Clear progression from setup to advanced features
4. **Consistent Experience**: Standardized naming and organization
5. **Maintainable Structure**: Easier to add new content in appropriate locations

## Validation Criteria

- All existing files are mapped to new locations
- No orphaned content
- Maximum 3 levels of nesting
- Consistent naming throughout
- Logical grouping passes user journey testing
- Sidebar reflects new structure accurately

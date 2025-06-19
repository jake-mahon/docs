# DirectoryManager 11.0 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the DirectoryManager 11.0 documentation to improve information architecture, reduce complexity, and enhance user experience.

## Current State Analysis

The current documentation structure has several issues:

- Deep nesting (up to 6 levels) makes navigation difficult
- Scattered related topics across different sections
- Inconsistent naming conventions (mix of camelCase, lowercase)
- Too many small files that could be consolidated
- Authentication topics spread across multiple sections
- API documentation lacks clear organization

## Restructure Goals

1. **Simplify Navigation**: Reduce nesting to maximum 3 levels
2. **Logical Grouping**: Organize content by user journey and task-based workflows
3. **Consistent Naming**: Use kebab-case for all directories and files
4. **Content Consolidation**: Merge related small files into comprehensive guides
5. **Clear Categories**: Create intuitive top-level categories that users expect

## New Structure Benefits

### 1. Getting Started (4 files)

- Provides clear entry point for new users
- Consolidates introduction, concepts, and what's new
- Quick orientation to the product

### 2. Installation and Configuration (15 files)

- Groups all setup-related content
- Clear progression from requirements → installation → configuration → upgrade
- Includes backup/restore guidance

### 3. Core Features (36 files)

- Central location for primary functionality
- Organized by major feature areas:
  - Identity Store Management
  - User Management
  - Group Management
  - Data Sources
  - Entitlements

### 4. Administration (31 files)

- Consolidates all admin-specific features
- Includes services, security roles, notifications
- Clear separation from end-user features

### 5. API Reference (19 files)

- Well-organized API documentation
- Grouped by resource type
- Consistent structure for each API category

### 6. User Portal (28 files)

- All end-user facing features in one place
- Includes both usage and administration
- Mobile service appropriately grouped here

### 7. Management Shell (9 files)

- Dedicated section for CLI users
- Commands organized by resource type
- Consistent with API organization

### 8. Authentication and Security (18 files)

- Consolidates all auth-related content previously scattered
- Clear organization of authentication methods
- Both identity provider and service provider configurations

### 9. Integrations (13 files)

- Groups Azure configuration, synchronization, and workflow
- Clear separation from core features
- Focus on external system integration

### 10. Reference (3 files)

- Minimal reference section for troubleshooting and uninstall
- Most reference content integrated into relevant sections

## Major Consolidations

1. **Admin Center**: Reduced from 30+ deeply nested files to logical groupings
2. **Authentication**: Consolidated from 3 separate sections into one comprehensive section
3. **API Documentation**: Reorganized from flat structure to resource-based hierarchy
4. **Portal Features**: Combined portal usage and administration
5. **Services**: Grouped all services under Administration

## File Naming Conventions

- All directories use kebab-case (e.g., `getting-started`, `user-management`)
- All files use kebab-case (e.g., `creating-users.md`, `api-reference.md`)
- Index files provide overview and navigation for each section
- Consistent, descriptive names that indicate content

## Implementation Notes

1. Many small files will be combined into comprehensive guides
2. Deep nesting eliminated in favor of broader categories
3. Related content grouped together for better discoverability
4. Clear progression from basic to advanced topics
5. Task-oriented organization to support user workflows

## Expected Outcomes

- Improved user navigation and content discovery
- Reduced time to find information
- Better support for different user personas (admins, developers, end-users)
- Easier maintenance and updates
- Consistent user experience across all sections

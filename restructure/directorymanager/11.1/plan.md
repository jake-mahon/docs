# DirectoryManager 11.1 Documentation Restructuring Plan

## Overview

This plan outlines the restructuring of the DirectoryManager 11.1 documentation to improve usability, findability, and maintainability. The new structure follows information architecture best practices and Docusaurus conventions.

## Current Issues

1. **Deep Nesting**: Files are buried up to 7 levels deep (e.g., `/directorymanager/admincenter/identitystore/configure/directoryservice/ppe/rules/`)
2. **Redundant Files**: Multiple "overview.md" files scattered throughout (118 instances)
3. **Inconsistent Organization**: Mix of feature-based, role-based, and task-based organization
4. **Poor Discoverability**: Related content is scattered across different sections
5. **Single-File Directories**: Many directories contain only one file

## Restructuring Principles

1. **Task-Oriented Organization**: Group content by what users need to accomplish
2. **Role-Based Sections**: Separate admin tasks from end-user tasks
3. **Flatter Hierarchy**: Maximum 3-4 levels deep for better navigation
4. **Logical Grouping**: Combine related topics and eliminate single-file directories
5. **Clear Naming**: Use descriptive, action-oriented file names
6. **Progressive Disclosure**: Start with overview content, then dive into details

## New Structure Overview

### Top-Level Categories (7 main sections)

1. **Getting Started** - Introduction and concepts for new users
2. **Installation** - Setup, configuration, and maintenance
3. **Admin Guide** - Administrator tasks and configuration
4. **User Guide** - End-user features and tasks
5. **Authentication** - SSO, SAML, and authentication configuration
6. **API Reference** - Developer documentation for APIs
7. **PowerShell Reference** - Management Shell cmdlets and scripts
8. **Reference** - Additional tools and troubleshooting

### Key Improvements

#### 1. Consolidated Admin Content

- Combined all admin center features under "Admin Guide"
- Grouped related features (e.g., all password policy rules in one section)
- Reduced nesting from 7 levels to maximum 3 levels

#### 2. Unified User Experience

- Created dedicated "User Guide" for portal users
- Organized by common tasks (groups, users, reports)
- Simplified navigation with clear task-based sections

#### 3. Developer-Friendly API Section

- Consolidated all API endpoints by resource type
- Removed redundant individual operation files
- Added clear examples and error handling

#### 4. Streamlined PowerShell Documentation

- Grouped cmdlets by resource type
- Added practical examples section
- Simplified parameter documentation

#### 5. Better Authentication Documentation

- Separated identity provider and service provider configurations
- Created step-by-step integration guides for each provider
- Consolidated Entra ID configuration

## File Consolidation Strategy

### Merged Files

1. **Password Policy Rules**: 13 separate rule files → 1 comprehensive "password-rules.md"
2. **SMS Gateway Properties**: 15 individual property files → integrated into main SMS gateway docs
3. **API Operations**: Individual operation files → consolidated by resource type
4. **Service Configurations**: Multiple overview files → single file per service

### Renamed for Clarity

- "gettingstarted.md" → "quick-start.md"
- "whatsnew.md" → "whats-new.md"
- "concepts.md" → moved to getting-started section
- Various "overview.md" files → descriptive names based on content

## Navigation Improvements

1. **Breadcrumb-Friendly**: Shorter paths make breadcrumbs more useful
2. **Sidebar Organization**: Logical grouping with collapsible sections
3. **Cross-References**: Related content linked within sections
4. **Search Optimization**: Better file names improve search results

## Migration Benefits

1. **Reduced File Count**: From 690 files to approximately 150-200 files
2. **Improved Load Time**: Fewer HTTP requests for navigation
3. **Better SEO**: Clearer URL structure and descriptive file names
4. **Easier Maintenance**: Less duplication and clearer organization
5. **Enhanced User Experience**: Faster content discovery and task completion

## Implementation Notes

- All content will be preserved during migration
- Redirects will be set up for old URLs
- Search index will be rebuilt after migration
- Sidebar.js will be generated to match new structure
- Version 11.1 will maintain its own structure separate from other versions

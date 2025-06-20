# PrivilegeSecure 4.2 Documentation Restructuring Plan

## Overview

This plan outlines the restructuring of the PrivilegeSecure 4.2 documentation to improve information architecture, reduce complexity, and enhance user experience.

## Current Issues

1. **Deep nesting**: The current structure has up to 6 levels of nesting, making navigation difficult
2. **User role fragmentation**: Admin, end user, and reviewer user sections contain significant duplication
3. **Unclear categorization**: Some content is scattered across multiple sections
4. **Inconsistent naming**: Mix of camelCase, snake_case, and inconsistent capitalization
5. **Poor grouping**: Related content is often separated into different sections

## Restructuring Approach

### 1. Consolidate User Documentation

- Merged admin, enduser, and revieweruser sections into a unified "User Guide"
- Common features are now accessible to all users
- Role-specific content is clearly indicated within topics

### 2. Reduce Nesting Levels

- Maximum depth reduced from 6 to 4 levels
- Flattened structure where appropriate
- Combined related topics into single documents

### 3. Improve Information Architecture

- **Getting Started**: Product overview, what's new, and product tour
- **Installation**: All installation and requirements in one place
- **User Guide**: Common features for all users
- **Administration**: Admin-specific configuration and management
- **Discovery**: Separate product section
- **Remote Access Gateway**: Separate product section

### 4. Standardize Naming Conventions

- All file and directory names use snake-case-with-hyphens
- Consistent title case for display names
- Descriptive names that clearly indicate content

### 5. Content Reorganization

#### Resources Section

- Consolidated all resource-related content
- Grouped by management tasks, platforms, and account types
- Clear separation of resource tabs for different attributes

#### Credentials Section

- Combined credential management and password policies
- Clearer organization of credential-related features

#### Users and Groups

- Unified user management approach
- Clear separation of roles/permissions from user management
- Consolidated user-related tabs

#### Activities

- Simplified activity management structure
- Clear separation between activity configuration and actions

#### Policies

- Reorganized into access, protection, schedule, and connection policies
- Each policy type has its own subsection with related operations

#### Configuration

- Grouped by authentication, integrations, system settings, and services
- Clearer separation of concerns

#### Reporting

- Consolidated all reporting features
- Clear categories for audit logs, reports, and access certification

### 6. Major Changes

1. **Merged Sections**:

   - admin/enduser/revieweruser → user-guide (common features)
   - Multiple "add" subdirectories → consolidated under parent sections
   - Duplicate dashboard sections → single dashboard section

2. **Relocated Content**:

   - Browser extension moved to user-guide/common-features
   - Session management consolidated under common-features
   - All platform-specific content moved to resources/platforms

3. **New Organization**:
   - Created dedicated sections for each major feature area
   - Introduced index.md files for each section to provide overview
   - Better grouping of related functionality

## Benefits

1. **Improved Navigation**: Users can find content more easily with reduced nesting
2. **Reduced Duplication**: Common content is maintained in one place
3. **Clearer Structure**: Logical grouping makes the documentation more intuitive
4. **Better Scalability**: New content can be added without increasing complexity
5. **Consistent Experience**: All users access common features from the same location

## Implementation Notes

- All existing content will be preserved and mapped to new locations
- URLs will need to be redirected to maintain external links
- The sidebar.js file will be significantly simplified
- Search functionality will benefit from the clearer structure

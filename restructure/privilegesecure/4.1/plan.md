# PrivilegeSecure 4.1 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the PrivilegeSecure 4.1 documentation to improve information architecture, reduce complexity, and enhance user experience.

## Current Issues

1. **Deep Nesting**: The current structure has unnecessary nesting (privilegesecure/accessmanagement) that adds complexity without value
2. **Poor Organization**: Related content is scattered across different sections
3. **Non-Intuitive Categories**: Categories like "add", "edit", "page", "tab", "window" are implementation-focused rather than task-focused
4. **Redundancy**: Similar content exists for different user roles with significant overlap
5. **Mixed Concerns**: Admin, end-user, and reviewer documentation are intermingled

## Restructure Principles

1. **Task-Oriented Structure**: Organize by what users need to do, not by UI elements
2. **Clear Separation**: Separate guides for different user roles
3. **Progressive Disclosure**: Start with overview/getting started, then dive into details
4. **Logical Grouping**: Keep related topics together
5. **Consistent Naming**: Use title case and descriptive names

## Major Changes

### 1. Top-Level Organization

- Remove the redundant `privilegesecure/accessmanagement` nesting
- Create clear top-level categories that represent major documentation areas
- Separate user guides by role

### 2. New Structure Highlights

#### Getting Started Section

- Combined overview, getting started, and what's new at the top level
- Added quick-start guide for immediate value
- Moved product tour to getting started

#### Installation Section

- Consolidated all installation-related content
- Created clear subsections for requirements, setup, components, and virtual appliance
- Grouped all virtual appliance content together

#### Administration Section

- Reorganized by administrative tasks rather than UI elements
- Created logical groupings:
  - Dashboard (monitoring and overview)
  - Resources (what you manage)
  - Users and Groups (who can access)
  - Credentials (authentication management)
  - Access Policies (permissions and rules)
  - Activities (what users can do)
  - Connection Profiles
  - Applications
  - Session Management

#### Configuration Section

- Separated from administration for clarity
- Focused on system-wide configuration
- Grouped authentication, integrations, and services

#### Monitoring and Reporting Section

- Consolidated all audit, reporting, and certification features
- Clear separation between audit logs and reporting

#### User and Reviewer Guides

- Simplified structure focused on their specific needs
- Removed redundant content
- Maintained only role-specific features

### 3. File Consolidation

Many files will be merged to reduce redundancy:

- Multiple "add" files consolidated into management guides
- Tab and window-specific files merged into their parent features
- Similar platform files consolidated where appropriate

### 4. Naming Conventions

- All directories use kebab-case (e.g., `getting-started`)
- All categories and documents use title case in sidebars
- Descriptive names that indicate content purpose

## Benefits

1. **Easier Navigation**: Users can find content based on their goals
2. **Reduced Complexity**: Fewer nested levels and clearer organization
3. **Better Maintenance**: Related content is grouped together
4. **Improved User Experience**: Role-based guides provide focused information
5. **Scalability**: Structure can accommodate future growth

## Implementation Notes

- All existing files will be mapped to new locations
- Content will be merged where appropriate to reduce duplication
- URLs will change, so redirects may be needed
- Search functionality will benefit from clearer structure

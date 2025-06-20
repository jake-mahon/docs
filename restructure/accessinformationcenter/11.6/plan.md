# Access Information Center 11.6 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Access Information Center 11.6 documentation to improve information architecture, reduce complexity, and enhance user experience.

## Goals

1. Reduce directory depth from 6 levels to maximum 3 levels
2. Consolidate related content to minimize duplication
3. Implement consistent naming conventions (snake-case with hyphens)
4. Create logical groupings that align with user tasks and workflows
5. Simplify navigation while maintaining comprehensive coverage

## Major Changes

### 1. Top-Level Reorganization

- **Previous**: Mixed structure with `access/`, `home.md`, and `index.md` at root
- **New**: Clear categorical organization with 6 main sections:
  - Getting Started
  - Installation
  - Administration
  - Access Management
  - Resource Audit
  - Reference

### 2. Access Management Consolidation

- **Previous**: Scattered across `access/informationcenter/` with deep nesting
- **New**: Unified under `access-management/` with three clear subsections:
  - Access Requests: All request-related functionality
  - Resource Owners: Owner portal and management
  - Resource Reviews: Review processes and history

### 3. Resource Audit Simplification

- **Previous**: Deeply nested structure with repetitive patterns for each resource type
- **New**: Flattened structure with resource types grouped by category:
  - Principals (users, groups, computers)
  - Active Directory
  - File Systems (Windows shares, NFS)
  - SharePoint (including OneDrive and Teams)
  - Databases (all database types in one section)
  - Messaging (Exchange)
  - Cloud Storage (AWS S3, Dropbox)
  - Custom Imports

### 4. File Consolidation Strategy

- Merge related email notification files into single `email-notifications.md` per section
- Combine window/wizard operations into main workflow files
- Consolidate permissions, activity, and sensitive content views per resource type
- Merge quick reference content from individual resource types

### 5. Naming Convention Changes

- All directory and file names use snake-case with hyphens (e.g., `access-management`)
- Remove underscores in favor of hyphens
- Use descriptive, action-oriented names where appropriate

### 6. Content Merging Approach

For each resource type in the Resource Audit section:

- Combine overview + permissions + sensitive content into main resource file
- Merge activity details and statistics into single activity section
- Consolidate exceptions and exception types
- Create unified quick reference at category level

### 7. Simplified Navigation

- Maximum 3 levels of nesting
- Clear parent-child relationships
- Logical grouping by user task rather than technical structure
- Consistent patterns across similar content types

## Benefits

1. **Improved Discoverability**: Users can find content more easily with logical groupings
2. **Reduced Complexity**: Fewer levels of nesting make navigation simpler
3. **Better Maintenance**: Consolidated files are easier to update and maintain
4. **Consistent Experience**: Similar content follows the same organizational patterns
5. **Task-Oriented Structure**: Organization aligns with user workflows and tasks

## Implementation Notes

- All existing content will be preserved and mapped to new locations
- Redirects should be implemented for old URLs
- Search functionality should be updated to reflect new structure
- Table of contents and navigation should be regenerated

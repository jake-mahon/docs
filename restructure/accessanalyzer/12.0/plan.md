# AccessAnalyzer 12.0 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the AccessAnalyzer 12.0 documentation to improve information architecture, reduce complexity, and enhance user navigation.

## Key Objectives

1. **Reduce nesting depth** - Maximum 3 levels deep (currently goes 5-6 levels)
2. **Consolidate related content** - Group similar topics together
3. **Improve naming conventions** - Use clear, descriptive names in title case
4. **Eliminate redundancy** - Merge overlapping content
5. **Create logical flow** - Organize content by user journey

## Major Changes

### 1. Simplified Top-Level Structure

**From:** 11 top-level directories with deep nesting
**To:** 10 focused top-level directories with clearer purpose:

- `installation` - Setup and deployment
- `requirements` - Prerequisites and system requirements
- `data-collection` - All data collectors organized by platform
- `analysis-tools` - Analysis and detection capabilities
- `actions` - Automated actions and remediation
- `administration` - Day-to-day management tasks
- `platform-configuration` - Platform-specific setup guides
- `solutions` - Use case-based solution guides
- `sensitive-data-discovery` - SDD feature documentation
- `maintenance` - Ongoing maintenance and troubleshooting

### 2. Data Collectors Reorganization

**Old Structure:** Scattered across `admin/datacollector` with deep nesting
**New Structure:** Organized by platform type under `data-collection/`:

- `active-directory/` - All AD-related collectors
- `file-systems/` - File system and disk collectors
- `cloud-platforms/` - AWS, Azure, Box, Dropbox, etc.
- `databases/` - SQL, Oracle, NoSQL, LDAP
- `messaging/` - Exchange and email-related
- `security-tools/` - Password, event log, certificates
- `custom-collectors/` - PowerShell, scripts, WMI

### 3. Actions Consolidation

**Old Structure:** Nested under `admin/action/[platform]/operations/`
**New Structure:** Flat structure under `actions/` with descriptive names

### 4. Solutions-Based Organization

**Old Structure:** Technical feature documentation scattered throughout
**New Structure:** Organized by use case and platform under `solutions/`:

- Active Directory solutions (assessment, management, monitoring)
- File System solutions (access, permissions, analytics)
- Exchange solutions (mailbox, public folders, mail flow)
- Cloud solutions (Azure AD, SharePoint, cloud storage)

### 5. Administration Simplification

**Old Structure:** Complex nesting with unclear categorization
**New Structure:** Task-based organization:

- `job-management/` - Creating and managing jobs
- `host-management/` - Discovery and host operations
- `reporting/` - Report creation and management
- `security/` - Access control and authentication
- `system-settings/` - Global configuration

### 6. Platform Configuration

**New Section:** Dedicated area for platform-specific setup guides, consolidating content from various `config/` subdirectories

## File Naming Conventions

- Use kebab-case (hyphens) for all file and directory names
- Remove underscores in favor of hyphens
- Use descriptive names that clearly indicate content
- Maintain `.md` extension for all documentation files

## Content Consolidation Strategy

1. **Merge related files** - Combine multiple small files covering related topics
2. **Create index files** - Add `index.md` to each directory for navigation
3. **Reduce operation files** - Consolidate individual operation files into logical groups
4. **Combine overview files** - Merge scattered overview content into section indexes

## Benefits

1. **Improved Navigation** - Users can find content more easily
2. **Reduced Complexity** - Fewer levels to navigate
3. **Better Organization** - Content grouped by user intent
4. **Clearer Structure** - Logical flow from setup to advanced usage
5. **Easier Maintenance** - Simpler structure to update and expand

## Migration Approach

1. Create new directory structure
2. Map all existing files to new locations
3. Merge related content where appropriate
4. Update cross-references and links
5. Generate new sidebar configuration
6. Test navigation and search functionality

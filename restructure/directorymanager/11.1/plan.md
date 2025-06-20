# Directory Manager 11.1 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Directory Manager 11.1 documentation from its current complex, component-based structure to a more user-friendly, task-oriented organization.

## Current State Analysis

### Issues with Current Structure:

1. **Deep Nesting**: Up to 8 levels deep in some areas (e.g., `/portal/user/create/activedirectory/mailbox`)
2. **Component-Based Organization**: Documentation is organized by system components rather than user tasks
3. **Redundancy**: Similar content spread across multiple sections (e.g., user management in portal, API, and shell)
4. **690 Files**: Overwhelming number of individual files makes navigation difficult
5. **Unclear Entry Points**: Main index.md contains only "# Group ID"

### Current Top-Level Categories:

- admincenter (213 files)
- api (115 files)
- portal (192 files)
- managementshell (99 files)
- authenticate (31 files)
- install (16 files)
- configureentraid (7 files)
- requirements (10 files)
- ssprportal (3 files)

## Restructure Strategy

### Design Principles:

1. **Task-Oriented Organization**: Group content by what users need to do
2. **Progressive Disclosure**: Start with overview, then dive into details
3. **Reduced Depth**: Maximum 3-4 levels instead of 8
4. **Consolidated Content**: Merge related topics into comprehensive guides
5. **Clear User Journeys**: Logical flow from getting started to advanced topics

### New Structure Benefits:

1. **Reduced from 690 files to ~150 files** through intelligent consolidation
2. **Maximum depth of 3 levels** for easier navigation
3. **Clear categories** that match user mental models
4. **Separate reference sections** for API and PowerShell
5. **Dedicated troubleshooting section** for common issues

## Major Changes

### 1. Consolidated Getting Started

- Combines introduction, what's new, and getting started
- Adds concepts overview and quick start guide
- Clear entry point for new users

### 2. Task-Based Main Sections

- **User Management**: All user-related tasks in one place
- **Group Management**: Comprehensive group operations
- **Configuration**: Initial setup and ongoing configuration
- **Workflows**: Complete workflow documentation

### 3. Interface-Specific Guides

- **Portal Guide**: Everything about using the web portal
- **Admin Center Guide**: Administrative tasks and configuration
- **API Reference**: Complete API documentation
- **PowerShell Reference**: All cmdlet documentation

### 4. Merged Content Areas

- Authentication methods consolidated under Configuration
- All identity store content unified
- SMS gateway configurations merged into integrations
- Data source management consolidated

### 5. New Sections

- **Integrations**: All external system integrations
- **Troubleshooting**: Common issues and solutions
- **Reference**: Permissions, glossary, version history

## File Consolidation Strategy

### Examples of Consolidation:

1. **User Creation** (Portal):

   - FROM: Multiple files in `/portal/user/create/` subdirectories
   - TO: Single `user-management/creating-users.md` covering all scenarios

2. **Group Types**:

   - FROM: Scattered across `/portal/group/create/` and `/portal/group/dynasty/`
   - TO: Organized under `group-management/group-types/`

3. **API Endpoints**:

   - FROM: 115 individual endpoint files
   - TO: ~10 consolidated files by resource type

4. **PowerShell Cmdlets**:
   - FROM: 99 individual cmdlet files
   - TO: ~5 consolidated command reference files

## Implementation Benefits

1. **Improved User Experience**: Easier to find information
2. **Reduced Maintenance**: Fewer files to maintain
3. **Better SEO**: Clearer URL structure and content organization
4. **Faster Onboarding**: New users can quickly understand the system
5. **Consistent Navigation**: Predictable structure throughout

## Next Steps

1. Generate file mappings from old to new structure
2. Create sidebar configuration for new structure
3. Merge content from multiple files where appropriate
4. Update cross-references and links
5. Review and validate all content migrations

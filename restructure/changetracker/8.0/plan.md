# ChangeTracker 8.0 Documentation Restructuring Plan

## Overview

This plan outlines the restructuring of the ChangeTracker 8.0 documentation to improve information architecture, reduce complexity, and enhance user experience.

## Key Improvements

### 1. Simplified Directory Structure

- **Removed redundant nesting**: Eliminated the `changetracker/changetracker` double nesting
- **Flattened hierarchy**: Reduced directory depth from 5-6 levels to maximum 3 levels
- **Clear naming**: Used descriptive, action-oriented names for directories

### 2. Logical Content Organization

The new structure follows a user journey approach:

1. **Getting Started** - What users need to know first

   - Overview and what's new
   - Quick start guide (new)
   - System requirements (consolidated)

2. **Installation** - How to set up the system

   - Hub and agent installation procedures
   - Database configuration options
   - Platform-specific guides

3. **Administration** - Day-to-day management

   - Dashboard and device management
   - Policy configuration
   - Alerts and reporting
   - System settings

4. **Features** - Core functionality deep dives

   - File integrity monitoring
   - Compliance management
   - Change control
   - Baseline management
   - Cloud tracking
   - Agentless monitoring
   - Event management

5. **Integrations** - External system connections

   - APIs
   - ITSM solutions
   - Third-party products

6. **Reference** - Supporting information
   - Component releases
   - Credentials management

### 3. Content Consolidation

#### Merged Files

- Combined multiple overview files into section-level overviews
- Merged related agent files (performance metrics + live tracking)
- Consolidated policy template files into unified sections
- Combined credential-related content

#### New Additions

- Added `quick-start.md` for new users
- Created unified `dashboard.md` for all dashboard-related content
- Added section overviews for better navigation

#### Removed Redundancies

- Eliminated duplicate overview files
- Removed unnecessary intermediate directories
- Consolidated similar functionality guides

### 4. Naming Conventions

- **Snake-case with hyphens**: All directories and files use lowercase with hyphens (e.g., `file-integrity-monitoring`)
- **No underscores**: Replaced all underscores with hyphens
- **Descriptive names**: Clear, action-oriented naming that indicates content purpose

### 5. Benefits of Restructuring

1. **Improved Navigation**: Users can find content more easily with logical grouping
2. **Reduced Complexity**: Fewer directories and clearer hierarchy
3. **Better Scalability**: Structure can accommodate future content additions
4. **Enhanced User Experience**: Content organized by user tasks and goals
5. **Consistent Naming**: Predictable file and directory names

### 6. Migration Considerations

- All existing content will be preserved and mapped to new locations
- Redirects should be implemented for old URLs
- Search index will need to be rebuilt
- Internal links within documents will need updating

## Implementation Notes

1. Start with creating the new directory structure
2. Move files according to the mapping document
3. Update internal links and references
4. Create new overview and quick-start content
5. Test navigation and search functionality
6. Implement URL redirects for backward compatibility

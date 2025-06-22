# Recovery for Active Directory 2.6 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Recovery for Active Directory 2.6 documentation to improve information architecture, user navigation, and content organization.

## Key Changes

### 1. Simplified Top-Level Structure

- Reduced from a nested `recoveryforactivedirectory` subdirectory to a flatter structure
- All content now directly under `/docs/recoveryforactivedirectory/2.6/`
- Clear categorical organization with descriptive folder names

### 2. Consolidated Overview Pages

- Combined multiple overview pages into category index pages
- Main `index.md` serves as the product overview
- Each category has its own `index.md` for section-specific overviews

### 3. Requirements Section

- Merged all requirement-related content into a single section
- Combined server and target server requirements into `system-requirements.md`
- Kept specialized requirements (firewall, SQL, domain) as separate files
- Removed redundant RSAT extension requirements (now in RSAT section)

### 4. Getting Started Flow

- Created a logical progression for new users
- Combined application installation and configuration utility into single `installation.md`
- Separated initial configuration from first login for clarity
- Moved upgrade procedures to this section for better discoverability

### 5. Core Functionality Organization

- Separated domain recovery and forest recovery into distinct sections
- Each section focuses on specific recovery scenarios
- Clear task-based organization for recovery procedures

### 6. Configuration and Administration Split

- Configuration: System-level settings and integrations
- Administration: Day-to-day management tasks
- Moved MFA configuration to administration section where it logically belongs

### 7. RSAT Extension as Reference

- Maintained as a separate section due to its optional nature
- Clear documentation for installation and usage
- Preserved recovery and rollback documentation specific to RSAT

### 8. Enhanced Troubleshooting

- Added comprehensive index page for troubleshooting
- Created `common-issues.md` for frequently encountered problems
- Organized password update procedures under a dedicated subsection
- Maintained use cases for reference

## Benefits

1. **Improved Navigation**: Users can find information more quickly with logical categorization
2. **Reduced Redundancy**: Consolidated multiple overview pages and similar content
3. **Task-Oriented Structure**: Organization follows user workflows
4. **Better Discoverability**: Related content is grouped together
5. **Scalability**: Structure allows for easy addition of new content

## File Naming Conventions

- All files and directories use lowercase with hyphens (kebab-case)
- No underscores or spaces in file names
- Descriptive names that indicate content purpose
- Index files for category overviews

## Implementation Notes

- All existing content will be preserved and mapped to new locations
- URLs will need to be updated in any internal links
- Sidebar navigation will be completely rebuilt to match new structure
- Consider implementing redirects for old URLs to maintain SEO and external links

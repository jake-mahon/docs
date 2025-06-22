# AccessAnalyzer 12.0 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the AccessAnalyzer 12.0 documentation to improve information architecture, reduce complexity, and enhance user experience.

## Key Changes

### 1. **Consolidated Top-Level Categories**

**From**: 11 top-level directories
**To**: 10 top-level directories

- Combined `install` and `requirements` into `getting-started`
- Merged `stealthaudit` content into relevant sections
- Simplified naming conventions

### 2. **Improved Information Flow**

The new structure follows a logical progression:

1. **Getting Started** - Installation and requirements
2. **Configuration** - Initial setup for different platforms
3. **Administration** - Day-to-day management
4. **Data Collection** - How to collect data from various sources
5. **Analysis Tools** - How to analyze collected data
6. **Actions** - What actions can be taken based on analysis
7. **Reporting** - How to create and manage reports
8. **Solutions** - Pre-built solutions for common use cases
9. **Sensitive Data Discovery** - Specialized feature documentation
10. **Credential Security Assessment** - Specialized feature documentation
11. **Reference** - API docs, troubleshooting, and reference materials

### 3. **Simplified Naming Conventions**

- All directory names use kebab-case (lowercase with hyphens)
- Removed redundant prefixes (e.g., `ad-` prefix in Active Directory sections)
- Used more intuitive names (e.g., `email-systems` instead of various Exchange-related names)

### 4. **Reduced Directory Depth**

- Flattened deeply nested structures where possible
- Combined related operations into single files
- Merged similar configuration steps

### 5. **Logical Grouping of Data Collectors**

Reorganized data collectors by target type rather than technical implementation:

- **Active Directory** - All AD-related collectors
- **Cloud Services** - AWS, Entra ID, Box, Dropbox
- **Email Systems** - All Exchange/email collectors
- **File Systems** - Windows, SharePoint, Unix, NIS
- **Databases** - All database collectors
- **Security Assessment** - Password security, DNS, system info
- **Custom Collectors** - PowerShell, scripts, WMI, etc.

### 6. **Consolidated Solutions**

Reorganized solutions by business objective:

- **Active Directory Solutions** - User, group, computer management
- **Cloud Security** - Cloud platform security solutions
- **Data Access Governance** - Permission management across platforms
- **Compliance** - Sensitive data discovery and audit trails
- **Security Operations** - Privileged access, forensics, assessments

### 7. **Merged Similar Content**

Major consolidations:

- Multiple AD operations files → single `operations.md`
- Multiple file system parameter files → single `operations.md`
- Multiple small configuration files → comprehensive guides
- Wizard steps → single configuration guides

## File Consolidation Strategy

### Active Directory Actions

- 11 operation files → `active-directory-actions/operations.md`

### File System Actions

- 9 parameter files → `file-system-actions/operations.md`

### Configuration Guides

- Multiple wizard/setup files → single platform configuration guides

### Data Collectors

- Merge similar collector configurations into comprehensive guides
- Keep unique collectors as separate files

## Benefits

1. **Improved Navigation**: Users can find information more quickly
2. **Reduced Complexity**: Fewer directories and files to navigate
3. **Better Context**: Related information is grouped together
4. **Clearer Purpose**: Directory names clearly indicate content
5. **Scalability**: Structure can accommodate future growth

## Migration Strategy

1. Create new directory structure
2. Map existing files to new locations
3. Merge content where appropriate
4. Update internal links
5. Generate new sidebar configuration
6. Test navigation and search functionality

## Considerations

- Some files will be merged, requiring content consolidation
- Internal links will need updating
- Search indexes may need rebuilding
- User documentation about navigation will need updating

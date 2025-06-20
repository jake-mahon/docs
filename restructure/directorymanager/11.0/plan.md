# DirectoryManager 11.0 Documentation Restructure Plan

## Executive Summary

This plan outlines a comprehensive restructuring of the DirectoryManager 11.0 documentation to improve information architecture, reduce complexity, and enhance user experience. The current structure has 671 markdown files organized in deeply nested directories, making navigation difficult and content discovery challenging.

## Key Problems with Current Structure

1. **Over-segmentation**: Too many small files with minimal content
2. **Deep nesting**: Some paths go 7+ levels deep (e.g., `/directorymanager/admincenter/identitystore/configure/directoryservice/`)
3. **Redundant structure**: Separate paths for AD/Azure that could be combined
4. **Poor discoverability**: Important features buried in nested directories
5. **Inconsistent organization**: Mix of feature-based and technology-based grouping

## Restructuring Strategy

### 1. **Getting Started** (Onboarding Journey)

- Combines installation, upgrade, and requirements into a logical flow
- Reduces from ~30 files to ~10 focused guides
- Clear path: Requirements → Install → Upgrade → Uninstall

### 2. **Configuration** (System Setup)

- Groups all configuration tasks by type
- Identity Stores: Consolidates AD, Entra ID, LDAP, Google into single files
- Authentication: Combines identity/service provider configs
- Data Sources: Groups by type (databases, files, cloud)
- Services: Portal, mobile, SMS gateway configuration

### 3. **User Guide** (Day-to-Day Operations)

- **Portal**: Basic navigation and UI guidance
- **User Management**: All user operations in one place
- **Group Management**: Combines static groups, smart groups, dynasties
- **Synchronization**: Jobs, transformations, schedules
- **Entitlements**: Access management and permissions
- **Workflows**: Approval and automation
- **Reporting**: Built-in and custom reports

### 4. **Administration** (Admin Tasks)

- **Admin Center**: Security roles, policies, notifications
- **Help Desk**: Operations and delegated admin
- **Audit History**: Compliance and tracking

### 5. **Automation** (Programmatic Access)

- **Management Shell**: PowerShell cmdlets and examples
- **APIs**: REST API reference with examples

### 6. **Integrations** (External Systems)

- **Microsoft 365**: Exchange, SharePoint, Teams
- **Identity Providers**: ADFS, Okta, Ping, OneLogin
- **Third-party**: SCIM and other integrations

### 7. **Reference** (Support Resources)

- Troubleshooting, best practices, security guidelines
- Release notes and known issues

## Benefits of New Structure

1. **Improved Navigation**: Maximum 3 levels deep
2. **Better Content Consolidation**: Related topics in single files
3. **Clearer User Journeys**: Task-based organization
4. **Reduced File Count**: From 671 to ~100 files
5. **Enhanced Discoverability**: Logical grouping by user role/task

## Implementation Notes

1. **File Merging Strategy**:

   - Combine provider-specific variations (AD/Azure) into single files with sections
   - Merge small property files into comprehensive property guides
   - Consolidate API endpoints by resource type

2. **Content Preservation**:

   - All existing content will be preserved
   - Merged files will use clear section headers
   - Cross-references updated to new locations

3. **URL Redirects**:

   - Old URLs should redirect to new locations
   - Maintain SEO and existing bookmarks

4. **Search Optimization**:
   - New structure improves search relevance
   - Clearer page titles and descriptions
   - Better keyword distribution

# Directory Manager 11.1 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Directory Manager 11.1 documentation to improve information architecture, reduce nesting complexity, and enhance user navigation experience.

## Current Issues

1. **Excessive Nesting**: The current structure has up to 6 levels of nesting in some areas, making navigation difficult
2. **Inconsistent Naming**: Mix of camelCase, snake_case, and other naming conventions
3. **Scattered Related Content**: Related topics are spread across different sections
4. **Poor Information Architecture**: No clear logical flow for different user personas
5. **Deep Directory Paths**: Makes content hard to find and reference

## Restructuring Principles

### 1. User-Centric Organization

- **Getting Started**: All introductory content, requirements, and installation
- **Administration**: Admin-focused tasks and configuration
- **Portal**: End-user portal functionality
- **Authentication**: All authentication and SSO configuration
- **API Reference**: Complete API documentation
- **Management Shell**: PowerShell commands and automation
- **Workflows**: Workflow and automation features
- **Self-Service Portal**: SSPR functionality

### 2. Consistent Naming Convention

- Use snake-case with hyphens for all directories and files
- Use title case for section headings
- Maintain descriptive but concise naming

### 3. Reduced Nesting

- Limit directory nesting to maximum 4 levels
- Group related content logically
- Use index.md files for section overviews

### 4. Improved Navigation

- Clear hierarchical structure
- Logical progression from basic to advanced topics
- Related content grouped together

## Detailed Changes

### Getting Started Section

**Purpose**: Help new users understand requirements and get the system installed.

- Combines `introduction.md`, `gettingstarted.md`, `whatsnew.md`
- Groups all requirements under single section
- Consolidates installation process including upgrade procedures

### Administration Section

**Purpose**: Centralize all administrative tasks and system configuration.

Key improvements:

- **Admin Center**: Consolidated all admin center functionality
- **Services**: Grouped all service management
- **Portal Management**: Web portal configuration and customization
- **Security Roles**: Access control and permissions
- **Scheduling**: Background job management

### Portal Section

**Purpose**: End-user focused documentation for portal functionality.

Key improvements:

- **Groups**: All group-related user tasks
- **Users**: User management from portal perspective
- **Synchronization**: Data sync operations
- **Search & Reports**: User tools for finding information

### Authentication Section

**Purpose**: Consolidate all authentication and SSO configuration.

Key improvements:

- **Setup Authentication**: Multi-factor and single-factor setup
- **Identity Provider**: SAML IDP configuration
- **Service Provider**: Integration with external IDPs
- **Entra ID Configuration**: Azure AD specific setup

### API Reference Section

**Purpose**: Complete API documentation organized by resource type.

Key improvements:

- Organized by resource (Users, Groups, Contacts, etc.)
- Consistent API endpoint documentation
- Clear examples and error handling

### Management Shell Section

**Purpose**: PowerShell automation and scripting reference.

Key improvements:

- Organized by function area
- Clear command references
- Practical examples and use cases

## Benefits of New Structure

### For Administrators

1. **Faster Task Completion**: Related admin tasks grouped logically
2. **Easier System Setup**: Clear installation and configuration path
3. **Better Security Management**: Consolidated security and roles sections

### For End Users

1. **Intuitive Portal Navigation**: User-focused organization
2. **Self-Service Capabilities**: Clear SSPR and portal documentation
3. **Quick Reference**: Easy to find common tasks

### For Developers

1. **Complete API Reference**: All endpoints organized by resource
2. **PowerShell Automation**: Clear scripting examples
3. **Integration Guides**: Authentication and SSO setup

### For Documentation Maintainers

1. **Logical Organization**: Easier to maintain and update
2. **Reduced Duplication**: Better content organization reduces redundancy
3. **Scalable Structure**: Easy to add new content

## Migration Strategy

### Phase 1: File Mapping

- Create comprehensive mapping of current to new file locations
- Identify files that need to be merged or split
- Plan content updates where needed

### Phase 2: Content Migration

- Move files to new structure
- Update internal links and references
- Merge related content where appropriate

### Phase 3: Sidebar Generation

- Create new sidebar configuration
- Organize sections with proper nesting
- Add appropriate icons and labels

### Phase 4: Validation

- Verify all content is accessible
- Test navigation flows
- Update any broken links

## File Organization Rules

### Merging Guidelines

- Merge related files when they total less than 10 individual files
- Keep distinct functional areas separate
- Maintain logical content flow

### Naming Guidelines

- Use descriptive, action-oriented names
- Keep file names concise but clear
- Use consistent terminology throughout

### Index Files

- Each major section has an index.md overview
- Index files provide navigation guidance
- Include brief descriptions of subsections

## Success Metrics

1. **Reduced Navigation Depth**: Maximum 4 levels of nesting
2. **Improved Discoverability**: Users can find content in 3 clicks or less
3. **Consistent Experience**: Uniform navigation patterns across sections
4. **Better Task Flow**: Related tasks grouped logically
5. **Maintainable Structure**: Easy to add new content without disrupting organization

This restructuring will significantly improve the user experience while maintaining all existing content and functionality.

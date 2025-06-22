# IdentityManager 6.2 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the IdentityManager 6.2 documentation to improve information architecture, reduce complexity, and enhance user experience.

## Key Principles

1. **Reduced Nesting**: Maximum 3 levels of nesting (was up to 7 levels)
2. **Task-Oriented Structure**: Organized by user tasks and workflows
3. **Clear Naming**: Use descriptive, action-oriented names
4. **Logical Grouping**: Related content grouped together
5. **Progressive Disclosure**: Start with basics, progress to advanced topics

## Major Changes

### 1. Top-Level Reorganization

- **Old**: Single "identitymanager" folder containing everything
- **New**: Clear top-level categories based on user roles and tasks

### 2. Getting Started Section (NEW)

- Combines overview, quick start, and requirements
- Provides clear entry point for new users
- Includes architecture overview for context

### 3. Installation Section

- **Old**: Buried under installation-guide with complex nesting
- **New**: Streamlined with clear pre-installation and installation steps
- Consolidates all installation-related content

### 4. Identity Management Section

- **Old**: Scattered across multiple sections (identity-management, synchronization, provisioning)
- **New**: Unified section covering complete identity lifecycle
- Clear subsections for repository, lifecycle, sync, and provisioning

### 5. Access Governance Section

- **Old**: Separate sections for governance, role-assignment, role-mining, etc.
- **New**: Consolidated governance section with logical subsections
- Includes role management, access certification, risk, and reporting

### 6. Integration Section

- **Old**: integration-guide with deeply nested connectors
- **New**: Simplified structure with connector basics, catalog, and packages
- API and workflows clearly organized

### 7. Administration Section

- **Old**: network-configuration, profiles-permissions scattered
- **New**: Unified administration section covering all admin tasks
- Includes server/agent config, security, jobs, notifications, monitoring

### 8. Development Section (NEW)

- Consolidates toolkit, scripting, and customization resources
- Clear separation of configuration vs. development tasks

### 9. Reference Section

- **Old**: executables, xml-configuration deeply nested
- **New**: Clean reference section with command-line tools, configuration reference
- Easy to find technical specifications

### 10. Troubleshooting Section (NEW)

- Dedicated section for problem-solving
- Includes common issues, connector troubleshooting, performance

## Benefits

1. **Improved Discoverability**: Users can find content faster
2. **Reduced Cognitive Load**: Simpler structure is easier to navigate
3. **Better Learning Path**: Progressive from basics to advanced
4. **Role-Based Organization**: Content organized by user roles
5. **Consistent Naming**: Snake-case with hyphens throughout

## Implementation Notes

1. Many small index.md files will be consolidated into parent documents
2. Deeply nested how-tos will be integrated into relevant sections
3. Redundant content will be merged
4. File names will use snake-case with hyphens (no underscores)
5. All categories and document titles will use Title Case

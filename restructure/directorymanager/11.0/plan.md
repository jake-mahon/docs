# Directory Manager 11.0 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Directory Manager 11.0 documentation from 671 files across 116 directories to a more logical, user-friendly structure that follows information architecture best practices.

## Key Problems with Current Structure

1. **Excessive Nesting**: Deep folder hierarchies (up to 6-7 levels) make navigation difficult
2. **Inconsistent Naming**: Mix of camelCase, PascalCase, and inconsistent naming conventions
3. **Poor Information Architecture**: Content scattered without clear user journey flow
4. **Admin-Heavy Focus**: Most content buried under "directorymanager/admincenter" making it hard to find user-facing content
5. **Duplicate Categories**: Similar functionality spread across multiple sections

## Restructuring Principles

### 1. User Journey-Based Organization

- **Getting Started**: Quick entry point for new users
- **Installation**: Complete installation workflow
- **Configuration**: Admin setup and configuration tasks
- **User Guide**: End-user portal functionality
- **Integrations**: External system connections
- **API Reference**: Developer documentation
- **Management Shell**: PowerShell scripting

### 2. Reduced Nesting

- Maximum 3-4 levels of hierarchy
- Related content grouped logically
- Clear parent-child relationships

### 3. Consistent Naming Convention

- **Directories**: `kebab-case` (hyphens, no underscores)
- **Files**: `kebab-case.md`
- **Titles**: Title Case in frontmatter
- **Navigation**: Clear, descriptive labels

### 4. Content Consolidation

- Merge related small files (max 10 files per merge)
- Create index pages for major sections
- Eliminate single-file directories where appropriate

## Major Structural Changes

### Before → After

| Current Structure               | New Structure                            | Rationale                 |
| ------------------------------- | ---------------------------------------- | ------------------------- |
| `directorymanager/admincenter/` | `configuration/admin-center/`            | More intuitive grouping   |
| `api/`                          | `api-reference/`                         | Clearer purpose           |
| `authenticate/`                 | `integrations/authentication-providers/` | Better categorization     |
| `configureentraid/`             | `integrations/entra-id/`                 | Logical grouping          |
| `portal/`                       | `user-guide/`                            | User-focused organization |
| `managementshell/`              | `management-shell/`                      | Consistent naming         |

### Content Grouping Strategy

#### 1. Getting Started (4 files)

- Combines introduction, overview, getting started, and what's new
- Single entry point for new users

#### 2. Installation (Reorganized from 20+ files)

- **Requirements**: Hardware, software, database, Exchange
- **Preparation**: Tools and pre-installation steps
- **Installation Process**: Main installation workflow
- **Configuration**: Post-install setup
- **Upgrade**: Version upgrade procedures

#### 3. Configuration (Major reorganization)

- **Admin Center**: All administrative configuration
- **Authentication Setup**: User authentication configuration
- **Entra ID Configuration**: Moved from separate section

#### 4. User Guide (Portal → User Guide)

- **Portal Overview**: Getting started with the portal
- **Groups**: Complete group management workflow
- **Users**: User management and properties
- **Entitlements**: Access management
- **Search**: Search functionality
- **Synchronization**: Data sync operations
- **Reports**: Reporting features
- **Requests**: Workflow requests
- **History**: Audit and history
- **Settings**: User and portal settings

#### 5. Integrations

- **Authentication Providers**: SAML/SSO integrations
- **Entra ID**: Microsoft Entra ID specific integration

#### 6. API Reference

- Organized by resource type (Users, Groups, Contacts, etc.)
- Consistent structure for each API section

#### 7. Management Shell

- Organized by PowerShell module functionality
- Clear command reference structure

## File Consolidation Strategy

### Files Being Merged (Examples)

1. **Getting Started Section**:

   - `introduction.md` + `gettingstarted.md` + overview content → `getting-started/index.md`

2. **SMS Gateway Custom Settings**:

   - Multiple small configuration files → consolidated into logical groupings

3. **API Error Handling**:

   - Similar error documentation → `api-reference/getting-started/common-errors.md`

4. **PowerShell Parameter Documentation**:
   - Parameter files consolidated with their respective command documentation

## Navigation Improvements

### Sidebar Structure Benefits

1. **Logical Grouping**: Related content appears together
2. **Progressive Disclosure**: Start broad, drill down to specifics
3. **Task-Oriented**: Organized around what users want to accomplish
4. **Reduced Cognitive Load**: Fewer top-level categories to choose from

### Search and Discoverability

1. **Clear Hierarchy**: Breadcrumb navigation will be more meaningful
2. **Predictable Locations**: Users can guess where content should be
3. **Reduced Duplication**: Less confusion about which document to read

## Implementation Considerations

### Content Migration

- All existing content will be preserved
- Links will need updating (handled by file mapping)
- Frontmatter standardization (title case, descriptions)

### Backward Compatibility

- Old URLs will need redirects
- Internal links updated via mapping file
- Search indexing will need refresh

### Quality Assurance

- All 671 files accounted for in mapping
- No content loss during restructuring
- Link validation post-migration

## Expected Benefits

1. **Improved User Experience**: Easier to find relevant content
2. **Reduced Time to Value**: Faster onboarding for new users
3. **Better Maintenance**: Logical structure easier to update
4. **Enhanced SEO**: Better URL structure and content organization
5. **Improved Analytics**: Clearer user journey tracking

## Success Metrics

1. **Navigation Efficiency**: Reduced clicks to find information
2. **User Feedback**: Improved satisfaction scores
3. **Content Utilization**: More even distribution of page views
4. **Maintenance Overhead**: Reduced time for content updates
5. **Search Performance**: Better search result relevance

This restructuring transforms the documentation from a feature-driven hierarchy to a user-journey-driven information architecture that better serves both administrators and end users of Directory Manager 11.0.

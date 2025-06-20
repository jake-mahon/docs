# Auditor 10.7 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Auditor 10.7 documentation to improve information architecture, reduce complexity, and enhance user experience.

## Key Problems Addressed

### 1. Deep Nesting (4-5 levels)

**Current Issue**: Users must navigate through multiple levels to find information

- Example: `access/reviews/entitlementreviews/window/deletereview.md`
  **Solution**: Flatten to maximum 3 levels and consolidate related content

### 2. Fragmented Content

**Current Issue**: Related topics spread across multiple sections

- Configuration scattered between main config section and individual addon sections
- Admin features split between multiple top-level categories
  **Solution**: Group by user tasks and logical workflows

### 3. Unclear Organization

**Current Issue**: No clear hierarchy or user journey
**Solution**: Organize by:

1. Getting Started → Installation → Configuration → Daily Use → Advanced Topics

### 4. Too Many Small Files

**Current Issue**: 515 files, many containing minimal content
**Solution**: Combine related small topics into comprehensive guides

## New Structure Principles

### 1. Task-Based Organization

- Group content by what users want to accomplish
- Follow natural workflow progression
- Reduce cognitive load

### 2. Maximum 3-Level Nesting

- Top level: Major feature areas
- Second level: Specific features or tasks
- Third level: Detailed procedures or options

### 3. Consolidated Categories (from ~15 to 10)

1. **Getting Started** - Overview and quick orientation
2. **Installation and Setup** - Complete setup workflow
3. **Data Sources** - All supported systems configuration
4. **Monitoring Plans** - Core monitoring configuration
5. **Administration** - Day-to-day admin tasks
6. **Access Governance** - Access reviews and entitlements
7. **Reporting** - All reporting capabilities
8. **Integrations** - Third-party connections
9. **Tools and Utilities** - Additional tools
10. **API Reference** - Developer documentation

### 4. Content Consolidation Examples

#### Access Reviews (Before)

- Scattered across `access/reviews/` with 30+ files in deep hierarchy
- Separate sections for admin, entitlement reviews, resource owners

#### Access Reviews (After)

- Single `access-governance/` section
- Logical flow: Overview → Configuration → Creating → Managing → History
- Related features grouped together

#### Add-ons/Integrations (Before)

- 40+ separate addon folders, each with 5-8 files
- Repetitive content structure

#### Integrations (After)

- Organized by integration type (SIEM, Ticketing, Security, etc.)
- Common procedures consolidated
- Product-specific details in focused sections

## Benefits

### For Users

- **Faster Information Discovery**: Reduced clicks to find content
- **Better Context**: Related information grouped together
- **Clearer Learning Path**: Logical progression through topics
- **Improved Search**: Better category names and organization

### For Maintainers

- **Reduced Duplication**: Common procedures in single location
- **Easier Updates**: Fewer files to maintain
- **Better Structure**: Clear ownership of content areas
- **Scalability**: Room to grow without adding complexity

## Migration Strategy

### File Mapping Approach

1. **Direct Moves**: Files that simply relocate
2. **Consolidations**: Multiple files combined into single comprehensive guide
3. **Splits**: Large files divided into logical sections
4. **Deprecations**: Outdated or redundant content removed

### Content Preservation

- All meaningful content preserved
- Redirects for major moved pages
- Search index updated
- Navigation improved through better sidebar

## Sidebar Design

- Clear visual hierarchy with icons
- Collapsible sections for easy navigation
- Logical ordering following user workflow
- Consistent naming conventions (Title Case)

## Success Metrics

- Reduced average clicks to find information (from 4-5 to 2-3)
- Decreased page count without losing content (from 515 to ~250-300)
- Improved search success rate
- Better user feedback on navigation

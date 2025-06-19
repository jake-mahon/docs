# PlatGov NetSuite Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the PlatGov NetSuite (Strongpoint) documentation to improve navigation, reduce redundancy, and follow information architecture best practices.

## Key Principles

1. **User-Centric Organization**: Structure follows the user journey from installation to advanced features
2. **Task-Based Grouping**: Related tasks and concepts are grouped together
3. **Reduced Fragmentation**: Combined small, related files into comprehensive guides
4. **Consistent Naming**: All directories use snake-case with hyphens, all labels use title case
5. **Logical Hierarchy**: Maximum 3-4 levels deep to prevent navigation fatigue

## Major Changes

### 1. Consolidated Getting Started Section

- Combined welcome.md, index.md, and basic concept files into a unified getting started experience
- Created a clear entry point for new users
- Moved "what's new" to this section for better visibility

### 2. Streamlined Installation and Setup

- Reorganized installation content into a logical flow
- Combined related setup tasks (permissions, menus, navigation)
- Added a go-live checklist combining FAQ and best practices

### 3. Unified Change Management

- Organized into clear subsections: concepts, working with changes, policies, examples
- Grouped all policy-related content together
- Created dedicated examples section for common scenarios

### 4. Consolidated Customization Management

- Moved bundle removal under customization management as a subsection
- Combined tools content with customization features
- Created clearer relationship between customizations and their management

### 5. New Security and Compliance Hub

- Grouped SOD, UAR, Financial Controls, and User Management
- Created logical hierarchy for UAR roles (administrators, owners, reviewers, auditors)
- Consolidated user provisioning with user management

### 6. Operations Section

- Combined script management, maintenance (cleanup), and process management
- Reorganized cleanup tasks under maintenance subsection
- Created clearer operational workflows

### 7. Simplified API Reference

- Grouped all API endpoints by functional area
- Combined related operations (add/update into create-update)
- Clearer naming for API operations

### 8. Improved Integrations Structure

- Organized by integration platform with dedicated subsections
- Each integration has its own index, configuration, and walkthrough
- Consolidated troubleshooting within each integration

### 9. Consolidated Reference Section

- Moved release notes into reference section
- Combined FAQ with reference materials
- Created single source for version information

## Benefits

1. **Reduced Categories**: From 21 top-level directories to 10
2. **Clearer Navigation**: Logical grouping reduces hunting for information
3. **Better Discoverability**: Related content is co-located
4. **Improved User Journey**: Progressive disclosure from basic to advanced
5. **Consistent Experience**: Uniform structure across all sections

## Migration Notes

- All existing content will be preserved
- URLs will need to be updated
- Search index will need to be rebuilt
- Internal links will require updating

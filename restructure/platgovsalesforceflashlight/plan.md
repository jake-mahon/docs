# Strongpoint Salesforce Flashlight Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Strongpoint Salesforce Flashlight documentation to improve information architecture, navigation, and user experience.

## Current Structure Issues

1. **Redundant content**: Multiple overview files (index.md, welcome.md, getting_started_overview.md)
2. **Unclear categorization**: "tools" and "customizations" have overlapping content
3. **Scattered related content**: Installation, configuration, and cleanup are in different sections
4. **Inconsistent depth**: Some categories have only 2 files while others have 11
5. **Poor naming conventions**: Mix of underscores and descriptive names

## Restructure Principles

1. **Progressive disclosure**: Start with basics, move to advanced topics
2. **Task-oriented organization**: Group by what users want to accomplish
3. **Consistent naming**: Use snake-case with hyphens throughout
4. **Logical grouping**: Related features stay together
5. **Reduced categories**: From 5 top-level to 5 more focused categories

## New Structure Benefits

### 1. Getting Started (5 files)

- Consolidated introduction and installation process
- Clear workflow: Install → Setup → First Scan → Dashboard → Schedule
- Removed redundancy between welcome.md and getting_started_overview.md

### 2. Core Features (5 files)

- Groups the main value propositions of Flashlight
- Focuses on what the product does (document, track, analyze, report)
- Merges customization content with broader metadata documentation

### 3. Tools and Utilities (5 files)

- Clear separation of interactive tools from core features
- Organized by function rather than implementation
- Combines related export functionality

### 4. Administration (4 files)

- System management tasks grouped together
- Includes configuration, monitoring, and removal
- Separates admin tasks from user tasks

### 5. Reference (3 files)

- Static reference material
- Includes comprehensive metadata type list
- Adds troubleshooting section for common issues

## Key Changes

### Content Consolidation

- **index.md + welcome.md + getting_started_overview.md** → **index.md** (main landing) + **getting-started/index.md** (section overview)
- **installing_flashlight.md + using_getting_started_wizard.md** → **installation-and-setup.md**
- **export_objects.md + export_profiles.md + export_users.md + export_object_attachment_records.md** → **export-tools.md**

### Content Reorganization

- **Clean up** section merged into **Tools and Utilities** as maintenance features
- **Customizations** section content distributed between **Core Features** (documentation aspects) and **Reference** (technical details)
- **Dashboard** moved from getting started to its own focused topic

### New Content Areas

- **dependency-analysis.md**: Elevated DRD content to core feature
- **troubleshooting.md**: New reference doc for common issues
- **release-notes.md**: Centralized location for updates

## File Naming Convention

All files now use consistent snake-case with hyphens:

- No underscores
- Descriptive names that match navigation labels
- Shorter, cleaner URLs

## Expected Outcomes

1. **Improved navigation**: Users can find content faster
2. **Better learning path**: Clear progression from beginner to advanced
3. **Reduced duplication**: Consolidated similar content
4. **Enhanced discoverability**: Related features are grouped together
5. **Consistent experience**: Uniform naming and structure throughout

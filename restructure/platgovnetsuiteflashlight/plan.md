# Platgov NetSuite Flashlight Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Platgov NetSuite Flashlight documentation to improve information architecture, user experience, and maintainability.

## Current Structure Analysis

The current documentation structure has 25 files across 4 directories:

- **getting_started** (8 files): Mix of installation, configuration, and usage topics
- **troubleshooting** (7 files): Various issue-specific troubleshooting guides
- **using_flashlight** (8 files): Feature documentation and reports
- **Root level** (2 files): index.md and welcome.md

### Issues with Current Structure

1. Unclear hierarchy between "getting_started" and "using_flashlight"
2. Scattered content (e.g., tutorial videos in getting_started instead of resources)
3. Missing logical groupings for related features
4. Inconsistent naming conventions (underscores vs hyphens)

## Proposed Structure Benefits

The new structure provides:

1. **Clearer Information Hierarchy**: From overview → getting started → daily usage → administration
2. **Better Content Grouping**: Related features are grouped under descriptive categories
3. **Reduced Cognitive Load**: Fewer top-level categories with logical subcategories
4. **Improved Discoverability**: Users can find content based on their role and task

## Key Changes

### 1. Content Consolidation

- Merge related topics to reduce file count
- Group customization-related content under "customization-management"
- Combine visualization tools (ERD and Spider) under "data-visualization"

### 2. Logical Flow

- **Overview**: Introduction and feature overview
- **Getting Started**: Installation and initial setup
- **User Guide**: Daily usage and features
- **Administration**: Configuration and maintenance
- **Troubleshooting**: Problem resolution
- **Resources**: Supporting materials

### 3. File Merging Strategy

- Combine installation-related files into streamlined guides
- Merge troubleshooting topics by category (common issues, performance)
- Consolidate customization reports into comprehensive guides

### 4. Naming Conventions

- Use kebab-case (hyphens) consistently
- Use descriptive, action-oriented names
- Follow title case for display names in sidebar

## Implementation Notes

- All existing content will be preserved and reorganized
- URLs will change, requiring redirects for existing links
- Content will be edited for consistency and clarity during migration
- New overview sections will be created to introduce each major category

## New Files to be Created

The following new files will be synthesized from existing content:

- **getting-started/quick-start.md**: A condensed guide combining key steps from installation, setup, and initial usage
- **administration/configuration.md**: Administrative configuration overview synthesized from various setup documents

# IdentityManager 6.1 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of IdentityManager 6.1 documentation to improve information architecture, reduce complexity, and enhance user experience.

## Goals

1. Reduce the number of top-level categories from 11 to 11 more focused ones
2. Flatten deep nesting (some paths are 8+ levels deep)
3. Consolidate related content
4. Use consistent naming with title case and kebab-case file paths
5. Merge redundant connector documentation

## Major Changes

### 1. Simplified Top-Level Structure

- **Getting Started** - Combines overview, quick start, and requirements
- **Installation & Setup** - Consolidates all installation and initial configuration
- **Core Concepts** - Groups fundamental concepts (entity model, architecture, roles)
- **Connectors & Integration** - Merges connector references and packages
- **Identity Management** - Focuses on identity lifecycle management
- **Access Control & Security** - Groups all security-related features
- **Governance** - Combines compliance and governance features
- **Automation** - Groups jobs, tasks, workflows, and synchronization
- **API Reference** - Consolidates all API documentation
- **Tools & Utilities** - Groups CLI tools and utilities
- **Configuration Reference** - Technical configuration documentation
- **Troubleshooting & Support** - Help and monitoring content

### 2. Content Consolidation

#### Connectors

- Merged `references-connectors` and `references-packages` into unified connector documentation
- Grouped by connector type rather than having separate reference sections
- Combined duplicate connector documentation (e.g., Azure AD appears in both sections)

#### Installation

- Flattened installation guide structure
- Combined related setup topics at the same level
- Removed unnecessary nesting levels

#### API Documentation

- Kept API structure but flattened categories
- Grouped related endpoints together
- Simplified navigation

#### Configuration

- Consolidated XML configuration into logical groups
- Reduced scaffolding complexity
- Merged technical files documentation

### 3. Improved Organization

#### By User Journey

- Getting Started → Installation → Core Concepts → Implementation
- Clear progression from beginner to advanced topics

#### By Task

- Grouped content by what users want to accomplish
- Combined how-tos with their related features
- Integrated tutorials with their respective technologies

#### By Technology

- Connectors grouped by type (directory services, cloud platforms, databases)
- Configuration grouped by component
- APIs grouped by service

### 4. Naming Conventions

- All categories use title case
- All file paths use kebab-case (no underscores)
- Consistent naming patterns across sections
- Descriptive names that indicate content

### 5. Reduced Complexity

- Maximum nesting depth reduced from 8+ to 4 levels
- Combined small, related files into comprehensive guides
- Eliminated single-file directories
- Merged overlapping content

## Benefits

1. **Easier Navigation** - Users can find content more quickly
2. **Better Context** - Related information is grouped together
3. **Reduced Duplication** - Consolidated overlapping content
4. **Clearer Learning Path** - Progressive disclosure from basic to advanced
5. **Improved Maintenance** - Simpler structure is easier to update

## Migration Notes

- All existing content will be preserved
- URLs will need redirects from old to new locations
- Some files will be merged, requiring content combination
- Index files will be updated to reflect new structure

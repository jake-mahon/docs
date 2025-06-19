# Access Information Center 12.0 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Access Information Center 12.0 documentation to improve navigation, reduce complexity, and create a more intuitive information architecture.

## Key Changes

### 1. Simplified Top-Level Structure

- Reduced from a deeply nested structure to 5 main sections
- Each section follows a logical workflow from installation to usage
- Consistent naming conventions using kebab-case

### 2. Consolidated Similar Content

- **Merged multiple "overview.md" files** into section-level index.md files
- **Combined related features** (e.g., all database auditing in one section)
- **Unified navigation documentation** into centralized guides

### 3. Logical Grouping by User Journey

#### Getting Started

- Combined introduction and navigation basics
- Created a quick-start guide for new users

#### Installation

- Consolidated all installation-related content
- Added clear progression: requirements → install → upgrade → secure

#### Administration

- Separated basic configuration from advanced settings
- Grouped troubleshooting topics together
- Maintained clear hierarchy for different configuration types

#### Access Management

- Reorganized by workflow rather than technical components
- Combined access requests, portal, and related features
- Integrated resource owners and reviews into unified access management

#### Resource Auditing

- Restructured by resource type (AD, File Systems, Databases, Cloud)
- Consolidated similar audit patterns
- Separated sensitive content detection as a cross-cutting concern

### 4. Reduced Directory Depth

- Maximum depth reduced from 6 levels to 3 levels
- Easier navigation and clearer mental model
- Better sidebar presentation in Docusaurus

### 5. Naming Improvements

- Used descriptive, action-oriented names
- Consistent use of index.md for category landing pages
- Clear differentiation between similar concepts

## Benefits

1. **Improved Discoverability**: Users can find content more easily with logical grouping
2. **Reduced Cognitive Load**: Fewer nested levels and clearer categories
3. **Better Scalability**: Structure can accommodate new features without deep nesting
4. **Enhanced User Experience**: Follows common documentation patterns
5. **Simplified Maintenance**: Fewer files and clearer organization

## Migration Approach

1. All existing content will be preserved
2. Files will be moved or merged according to the mapping
3. Redirects will be set up for old URLs
4. Internal links will be updated
5. The sidebar will be regenerated to match the new structure

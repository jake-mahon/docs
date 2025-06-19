# AccessAnalyzer 11.6 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the AccessAnalyzer 11.6 documentation to improve information architecture, reduce complexity, and enhance user experience.

## Current Issues

1. **Excessive Nesting**: The current structure has up to 7 levels of nesting, making navigation difficult
2. **Redundant Files**: Over 100 "overview.md" files create confusion and duplicate content
3. **Poor Organization**: Related content is scattered across different sections
4. **Unclear Naming**: Many directories use inconsistent naming conventions
5. **Missing Context**: Lack of clear progression from beginner to advanced topics

## Restructure Approach

### 1. Simplified Category Structure

The new structure uses 8 main categories that follow a logical user journey:

- **Getting Started**: Entry point for new users
- **Installation**: Setup and deployment guides
- **Configuration**: System configuration and settings
- **Data Collection**: How to collect data from various sources
- **Analysis and Reporting**: Analyzing collected data and creating reports
- **Remediation Actions**: Taking action based on findings
- **Job Management**: Managing and scheduling jobs
- **Solutions**: Specific use cases and integrations
- **Administration**: Maintenance and troubleshooting
- **Reference**: Technical reference documentation

### 2. Reduced Nesting Depth

- Maximum depth reduced from 7 to 4 levels
- Most content accessible within 2-3 clicks
- Logical grouping of related content

### 3. Consolidated Content

- Multiple "overview.md" files consolidated into topic-specific guides
- Related features grouped together
- Redundant content eliminated

### 4. Improved Naming Conventions

- All file and directory names use kebab-case (lowercase with hyphens)
- Descriptive names that clearly indicate content
- Consistent terminology throughout

### 5. Progressive Disclosure

- Content organized from basic to advanced
- Clear prerequisites and next steps
- Logical flow through the documentation

## Content Mapping Strategy

### Consolidation Rules

1. **Overview Files**: Merged into section-specific overview documents
2. **Similar Features**: Combined into comprehensive guides
3. **Nested Operations**: Flattened into feature-based sections
4. **Wizard Steps**: Consolidated into single workflow documents

### New Content Organization

1. **By Feature**: Primary organization by feature/capability
2. **By Task**: Secondary organization by user tasks
3. **By Complexity**: Progressive from simple to advanced

## Benefits

1. **Improved Navigation**: Users can find content faster
2. **Better Context**: Clear relationships between topics
3. **Reduced Maintenance**: Fewer files to maintain
4. **Enhanced Learning**: Logical progression through topics
5. **Consistent Experience**: Uniform structure and naming

## Implementation Notes

- All existing content will be preserved and mapped to new locations
- URLs will be redirected to maintain external links
- Search functionality will be updated to reflect new structure
- Table of contents will be regenerated for clarity

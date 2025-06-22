# Activity Monitor 7.1 Documentation Restructure Plan

## Overview

This document outlines the restructuring plan for the Activity Monitor 7.1 documentation to improve information architecture, reduce complexity, and enhance user experience.

## Key Improvements

### 1. Simplified Directory Structure

- **Reduced Nesting**: Moved from 4-5 levels of nesting to a maximum of 3 levels
- **Consolidated Categories**: Reduced from 47 directories to 19 directories
- **Logical Grouping**: Organized content by user journey and task-based workflows

### 2. Content Consolidation

- **Combined Similar Topics**: Merged related content that was previously scattered across multiple files
- **Platform-Specific Grouping**: Organized configuration content by platform type (storage, cloud, databases)
- **Unified Properties**: Consolidated all property configurations into single reference documents

### 3. Improved Information Architecture

#### Getting Started

- Combined overview and getting started content
- Consolidated all requirements into a single comprehensive document
- Kept what's new as a separate document for easy access

#### Installation

- Simplified installation flow with clear sections for application, agents, and upgrades
- Combined all agent installation methods into a single comprehensive guide
- Merged removal procedures into one document

#### Configuration

- Organized by platform type for easier navigation
- Grouped storage platforms together
- Separated cloud platforms into their own section
- Created dedicated database configuration section

#### Administration

- Consolidated agent management into fewer, more comprehensive documents
- Combined monitored domains and hosts into "monitored resources"
- Unified output configuration and logging options
- Simplified search and query documentation

#### Integrations

- Elevated SIEM integrations to top-level for better visibility
- Consolidated REST API documentation
- Removed redundant dashboard documentation

#### Troubleshooting

- Combined related troubleshooting topics
- Created a single backup and restore guide
- Added common issues section for quick problem resolution

## File Mapping Strategy

### Consolidation Rules

1. **Agent Installation**: All agent installation methods (manual, AD, Linux) combined into `installation/agents.md`
2. **Properties**: All property configurations merged into relevant section documents
3. **Storage Platforms**: Individual storage platform configurations maintained but grouped together
4. **Output Formats**: All log file format documentation moved to `reference/file-output-formats.md`
5. **Search Queries**: Platform-specific query documentation combined into `administration/search-and-query/query-reference.md`

### Naming Conventions

- All file and directory names use lowercase with hyphens (snake-case)
- No underscores in file or directory names
- Descriptive names that clearly indicate content
- Consistent use of `.md` extension

## Benefits

1. **Improved Navigation**: Users can find information faster with fewer clicks
2. **Reduced Redundancy**: Similar content is consolidated, reducing maintenance overhead
3. **Better Organization**: Content is organized by task and platform, matching user mental models
4. **Clearer Hierarchy**: The structure follows a logical progression from setup to advanced usage
5. **Enhanced Discoverability**: Related content is grouped together, making it easier to find all relevant information

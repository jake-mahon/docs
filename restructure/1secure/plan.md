# 1Secure Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the 1Secure product documentation to improve information architecture, reduce complexity, and enhance user experience.

## Goals

1. Reduce the number of top-level categories from 5 to 8 more focused areas
2. Flatten the directory structure to reduce deep nesting
3. Group related content logically following a user's journey
4. Use consistent naming conventions (snake-case with hyphens)
5. Consolidate duplicate or highly related content

## New Structure Rationale

### 1. Getting Started (NEW)

**Purpose**: Provide new users with essential information to begin using 1Secure

- Consolidated basic information previously scattered across root level and install directory
- Added first-login guide (from admin/login.md)
- Clear progression: overview → requirements → installation → first login

### 2. Setup and Configuration (REORGANIZED)

**Purpose**: Centralize all configuration guides in one location

- Merged content from /configuration and /admin/datacollection directories
- Organized by data source type for easier navigation
- Reduced nesting by consolidating related configuration topics
- Combined similar Active Directory configuration files into fewer, more comprehensive guides

### 3. Data Sources (NEW)

**Purpose**: Provide overview and connection information for each data source

- Extracted from /admin/organizations/sourcesandconnectors
- Simplified structure with one file per data source
- Added GMSA information from datacollection directory

### 4. Administration (SIMPLIFIED)

**Purpose**: Focus on day-to-day administrative tasks

- Reorganized from /admin directory
- Split into three clear subcategories: organizations, user management, and credentials
- Consolidated organization-related files
- Separated user management from organization management for clarity

### 5. Monitoring and Analytics (REORGANIZED)

**Purpose**: Group all monitoring, alerting, and analysis features

- Combined dashboard, alerts, and risk profiles from /admin
- Created logical hierarchy: dashboard → alerts → risk assessment
- Maintained existing alert and risk profile structure

### 6. Reporting (ENHANCED)

**Purpose**: Centralize all reporting functionality

- Moved from /admin/searchandreports
- Created report-types subdirectory to organize different report categories
- Separated filtering/search functionality into its own section
- Elevated custom reports and subscriptions for better visibility

### 7. Integrations (MAINTAINED)

**Purpose**: Third-party integration guides

- Kept existing structure but renamed SharePoint file for clarity
- Minimal changes as structure was already well-organized

### 8. Reference (NEW)

**Purpose**: Reference materials and additional information

- Moved security.md to reference section
- Space for future reference documentation

## Key Changes Summary

### Files to be Merged

1. Multiple Active Directory configuration files → Consolidated guides
2. Computer configuration files → Consolidated guides
3. Organization management files → Fewer, more comprehensive files

### Files to be Moved

1. admin/login.md → getting-started/first-login.md
2. install/installagent.md → getting-started/installation.md
3. All sourcesandconnectors content → data-sources directory
4. All searchandreports content → reporting directory

### Files to be Renamed

- All files renamed to use snake-case with hyphens
- More descriptive names for clarity (e.g., "index.md" files given contextual names when moved)

### Removed Redundancy

- Duplicate information between configuration and admin directories consolidated
- Similar configuration topics combined into comprehensive guides

## Benefits

1. **Improved Navigation**: Users can find information following their workflow
2. **Reduced Complexity**: Fewer nested directories and clearer categorization
3. **Better Scalability**: Structure can accommodate future content growth
4. **Consistent Experience**: Uniform naming and organization patterns
5. **User-Centric**: Organized by user tasks rather than technical architecture

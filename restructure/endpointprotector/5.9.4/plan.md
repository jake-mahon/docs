# Endpoint Protector 5.9.4 Documentation Restructuring Plan

## Overview

This document outlines the restructuring plan for the Endpoint Protector 5.9.4 documentation to improve information architecture, user experience, and navigation.

## Key Changes

### 1. Removed Redundant Nesting

- Eliminated the extra `endpointprotector` directory level
- Content now starts directly at `/docs/endpointprotector/5.9.4/`

### 2. Consolidated Single-File Directories

- Merged single-file directories into their parent categories
- Examples: `alerts/overview.md` → `administration/alerts.md`

### 3. Improved Information Architecture

#### Getting Started Section

- Combined overview and getting started content
- Grouped requirements, components, and initial setup
- Made server-client communication part of getting started

#### Installation Section

- Separated cloud deployments into a clear subcategory
- Grouped virtualization platforms together
- Kept Active Directory deployment separate as it's a distinct workflow

#### Agent Deployment Section

- Created a dedicated section for agent deployment
- Separated from general installation for clarity
- Organized by deployment method (Intune, Jamf)

#### Features Section

- Consolidated all product features in one section
- Renamed modules to more descriptive names
- Combined related functionality (e.g., denylists and allowlists)

#### Administration Section

- Grouped day-to-day administrative tasks
- Included dashboard, alerts, reports, and user management
- Made navigation more task-oriented

#### System Configuration & Management

- Separated configuration (initial setup) from management (ongoing maintenance)
- Grouped SSO options together
- Created logical subcategories for maintenance tasks

### 4. Improved Naming Conventions

- Used consistent title case for all sections
- Adopted kebab-case for file and directory names
- Used more descriptive names (e.g., "content-aware-protection" instead of "contentawareprotection")

### 5. Reduced Category Count

- Decreased from 29 directories to approximately 15 main directories
- Created more logical groupings to reduce navigation complexity
- Maintained depth where it adds value (e.g., cloud deployments)

## Benefits

1. **Improved Navigation**: Users can find information more quickly with logical groupings
2. **Better Progressive Disclosure**: Information is revealed in a logical order
3. **Reduced Cognitive Load**: Fewer top-level categories to choose from
4. **Task-Oriented Structure**: Organization follows user workflows
5. **Consistent Naming**: Easier to understand and remember paths

## Implementation Notes

- All existing content will be preserved
- Files will be merged where appropriate to reduce redundancy
- Redirects should be set up for old URLs to maintain SEO and existing links
- The sidebar will be reorganized to match the new structure

## New Files to Create

The following index files should be created as part of the restructuring to provide better navigation:

1. `docs/endpointprotector/5.9.4/installation/virtualization-platforms/index.md` - Overview of virtualization platform options
2. `docs/endpointprotector/5.9.4/system-management/index.md` - Overview of system management tasks
3. `docs/endpointprotector/5.9.4/features/device-control/use-cases.md` - Common use cases for device control (currently missing)

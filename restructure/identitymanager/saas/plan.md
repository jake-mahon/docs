# IdentityManager SaaS Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the IdentityManager SaaS documentation to improve information architecture, reduce unnecessary nesting, and create a more logical navigation structure.

## Key Changes

### 1. Remove Redundant Nesting

- Eliminate the redundant `identitymanager` subdirectory under `docs/identitymanager/saas/`
- Move all content directly under `docs/identitymanager/saas/`

### 2. Consolidate Related Topics

- **Installation & Getting Started**: Merge "installation-guide" and separate into "getting-started" and "installation" sections
- **Configuration**: Consolidate all configuration topics (network, XML, toolkit) under a unified "configuration" section
- **Role Management**: Group all role-related features (model, mining, assignment) together
- **Automation**: Combine tasks, jobs, and executables under one section

### 3. Flatten Deep Hierarchies

- Reduce directory depth by consolidating single-file directories
- Convert deep nested structures to flatter organization with meaningful categories
- Merge related how-to guides directly under their parent topics

### 4. Improve Naming Conventions

- Use consistent hyphenated lowercase naming (e.g., `getting-started` not `Getting Started`)
- Standardize on "how-to" (not "how-tos") for consistency
- Use descriptive names instead of generic ones (e.g., `secure-agent-communication.md` instead of nested `protect-agent-server-communication/index.md`)

### 5. Logical Topic Organization

The new structure follows a natural progression:

1. **Getting Started** - Initial setup and requirements
2. **Installation** - Detailed installation procedures
3. **Architecture** - System design and deployment models
4. **Configuration** - All system configuration topics
5. **Core Features**:
   - Connectors
   - Identity Management
   - Role Management
   - Governance
   - Provisioning & Synchronization
6. **Operations**:
   - Automation (Tasks, Jobs, Executables)
   - Access Control
   - Monitoring
   - Notifications
7. **Reference**:
   - API Reference
   - Toolkit
   - Modules

### 6. File Consolidation Strategy

- Single `index.md` files in directories are merged with their parent or renamed to be more descriptive
- Related how-to guides are consolidated under their feature area
- Reference materials are grouped by type (connector reference, packages, executables)

### 7. Sidebar Improvements

- Clear hierarchical structure with logical groupings
- Reduced number of top-level categories from ~15 to ~12
- Better use of subcategories to organize related content
- Consistent use of title case for all categories and documents

## Benefits

1. **Improved Navigation**: Users can find information more intuitively
2. **Reduced Complexity**: Fewer nested directories and clearer organization
3. **Better Maintenance**: Simpler structure is easier to maintain and extend
4. **Enhanced User Experience**: Logical flow from getting started to advanced topics
5. **Consistent Naming**: Predictable file and directory names throughout

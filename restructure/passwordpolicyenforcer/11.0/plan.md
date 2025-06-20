# Password Policy Enforcer 11.0 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Password Policy Enforcer 11.0 documentation to improve information architecture, reduce complexity, and enhance user experience.

## Key Changes

### 1. Simplified Top-Level Structure

- Reduced from 2 separate product folders (passwordpolicyenforcer and passwordreset) to a unified structure
- Created 8 main categories (down from numerous scattered subcategories)
- Each category follows a logical user journey from installation to troubleshooting

### 2. Consolidated Categories

#### Getting Started (NEW)

- Combines overview, what's new, requirements, and getting started content
- Provides a clear entry point for new users
- Removes redundancy between separate overview and getting started files

#### Installation (CONSOLIDATED)

- Merges all installation topics into one coherent section
- Groups server, client, GPM, web, and mailer installations together
- Includes upgrade and uninstall procedures in the same section

#### Configuration (CONSOLIDATED)

- Combines configuration console overview with all configuration-related topics
- Groups policy management, user/group settings, and client configuration
- Creates a one-stop section for all configuration needs

#### Password Rules (NEW)

- Extracts all rule-related content from the administration folder
- Groups similar rules together (e.g., length and age, character requirements)
- Makes it easier to find and understand different rule types

#### Administration (REORGANIZED)

- Focuses on operational tasks and tools
- Subsections for:
  - Command-line tools (grouped by function)
  - PowerShell cmdlets (grouped by function)
  - Compromised password management
  - Testing and validation
  - System integration

#### Web Interface (CONSOLIDATED)

- Brings all web-related content into one section
- Includes configuration, usage, security, and customization
- Previously scattered across multiple locations

#### Password Reset (REORGANIZED)

- Maintains as a separate feature section
- Better organized with clear configuration and administration subsections
- Simplified from 19 files to 11 files

#### Evaluation Guide (NEW)

- Transforms scattered evaluation content into a coherent guide
- Follows a logical evaluation workflow
- Helps prospective users test the product effectively

#### Troubleshooting (SIMPLIFIED)

- Consolidated into a focused section
- Combines all troubleshooting content into common issues

### 3. File Naming Conventions

- All file and directory names use kebab-case (hyphens, no underscores)
- Descriptive names that clearly indicate content
- Consistent naming patterns across sections

### 4. Content Consolidation

#### Command-Line Content

- 19 individual cmdlet files consolidated into 5 logical groups:
  - Connection commands
  - Policy management commands
  - Testing commands
  - Export/import commands
  - System commands

#### PowerShell Cmdlets

- Similar consolidation approach for better organization
- Groups related cmdlets by function rather than individual files

#### Rule Documentation

- Character rules, complexity, dictionary, etc. grouped logically
- Length and age rules combined as they're closely related
- History and similarity rules combined

### 5. Improved Information Architecture

#### Progressive Disclosure

- Start with high-level overviews
- Drill down into specific features
- Group related content together

#### Task-Oriented Structure

- Categories aligned with user tasks
- Clear paths for common workflows
- Reduced cognitive load

#### Reduced Depth

- Maximum 3 levels deep (was 4)
- Easier navigation
- Better discoverability

## Benefits

1. **Improved User Experience**

   - Clearer navigation paths
   - Reduced time to find information
   - Logical content grouping

2. **Reduced Maintenance**

   - Fewer files to maintain (109 → ~70)
   - Consolidated related content
   - Eliminated redundancy

3. **Better Scalability**

   - Clear structure for adding new content
   - Consistent patterns across sections
   - Room for growth without complexity

4. **Enhanced Discoverability**
   - Intuitive category names
   - Related content grouped together
   - Clear hierarchy

## Migration Approach

1. Create new directory structure
2. Move/merge content according to mappings
3. Update all internal links
4. Generate new sidebar configuration
5. Test navigation and links
6. Remove old structure

## Next Steps

1. Review and approve the proposed structure
2. Execute file migrations according to mappings
3. Update sidebar.js configuration
4. Test the new structure
5. Update any external references

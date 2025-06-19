# Endpoint Policy Manager Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Endpoint Policy Manager documentation to improve information architecture, reduce complexity, and enhance user experience.

## Current Issues

1. **Excessive Nesting**: The current structure has up to 6 levels of nesting, making navigation difficult
2. **Redundant Directory**: Contains `endpointpolicymanager/endpointpolicymanager/` which is unnecessarily redundant
3. **Fragmented Topics**: Related content is scattered across multiple sections
4. **Too Many Small Categories**: Many categories contain only 1-2 files
5. **Inconsistent Naming**: Mix of naming conventions and unclear category names

## New Structure Benefits

### 1. Clear Top-Level Categories (10 main sections)

- **Getting Started**: All onboarding content in one place
- **Deployment Methods**: Organized by deployment type (Group Policy, Cloud, MDM)
- **Core Features**: Primary functionality grouped logically
- **Advanced Features**: Secondary/specialized features
- **Integrations**: Third-party integrations
- **Licensing**: All license-related content
- **Monitoring and Reporting**: Observability features
- **Platform Support**: OS-specific content
- **Troubleshooting**: Support and problem-solving
- **Reference**: Additional resources and archive

### 2. Reduced Nesting (Maximum 3 levels)

- Improves navigation and discoverability
- Easier to maintain sidebar structure
- Better user experience

### 3. Logical Grouping

- **Browser Management**: Combines Browser Router, Java Enterprise Rules, and File Associations
- **Security Features**: Groups Least Privilege Manager, Device Manager, and Security Settings
- **Application Settings**: Consolidates Design Studio and preconfigured apps

### 4. Consistent Naming Convention

- All directories use kebab-case (lowercase with hyphens)
- All categories use title case in the sidebar
- Clear, descriptive names

## Key Consolidations

1. **Installation Content**: Previously scattered, now under `getting-started/installation/`
2. **Item Level Targeting**: Consolidated from multiple locations into dedicated sections
3. **Overview Pages**: Each section has an index.md for orientation
4. **Knowledge Base References**: Moved to single reference section
5. **Archive Content**: Maintained but clearly separated

## Migration Strategy

1. **Preserve All Content**: Every file is mapped to a new location
2. **Merge Similar Topics**: Related small files combined into comprehensive guides
3. **Maintain URLs**: Consider redirects for important pages
4. **Update Cross-References**: Internal links need updating

## Expected Outcomes

- **50% Reduction** in navigation depth
- **40% Fewer** top-level categories
- **Improved Discoverability** through logical grouping
- **Better User Journey** from getting started to advanced features
- **Easier Maintenance** with clearer structure

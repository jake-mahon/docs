# Activity Monitor 8.0 Documentation Restructure Plan

## Overview

This plan outlines the restructuring of the Activity Monitor 8.0 documentation to improve information architecture, reduce complexity, and enhance user experience.

## Key Objectives

1. Eliminate redundant directory nesting (`activitymonitor/activitymonitor/`)
2. Consolidate related content to reduce the total number of files
3. Implement consistent naming conventions (snake-case with hyphens)
4. Use title case for all categories and documentation titles
5. Follow Docusaurus best practices for documentation structure

## Major Changes

### 1. Top-Level Structure Simplification

- **Current**: `docs/activitymonitor/8.0/activitymonitor/`
- **New**: `docs/activitymonitor/8.0/`
- Removed redundant `activitymonitor` subdirectory

### 2. Getting Started Section

- Consolidated `gettingstarted.md`, `overview.md`, and `whatsnew.md` into a streamlined Getting Started section
- Moved installation and requirements from separate sections into Getting Started

### 3. Agent Management Consolidation

- **Current**: Scattered across `admin/agents/`, `install/agent/`, and multiple property files
- **New**: Unified `agents/` section with clear subsections:
  - Deployment (platform-specific deployment guides)
  - Configuration (all agent properties consolidated)
  - Management (installation, upgrade, removal)

### 4. Monitored Systems Reorganization

- **Current**: Separate `monitoreddomains/` and `monitoredhosts/` with deep nesting
- **New**: Single `monitored-systems/` section organized by system type:
  - Domains (AD, LDAP, threat detection)
  - Hosts (Windows, cloud services, databases)
  - Storage Systems (all NAS/SAN platforms)

### 5. Data Collection and Output Consolidation

- **Current**: Complex `outputs/` structure with multiple nested subdirectories
- **New**: Simplified `data-collection/` section with:
  - Outputs (log files, syslog, threat manager)
  - Filtering (all exclusions and filters)
  - Data Formats (platform-specific format documentation)

### 6. Search Functionality

- **Current**: Deeply nested `admin/search/query/` and `admin/search/results/`
- **New**: Flat `search-and-analysis/` section with query syntax and results documentation

### 7. Platform Configuration

- **Current**: Scattered `config/` directory with inconsistent naming
- **New**: Organized `platform-configuration/` grouped by platform type

### 8. SIEM Integration

- **Current**: Separate `siem/qradar/` and `siem/splunk/` structures
- **New**: Consolidated SIEM documentation under `integrations/siem/`

### 9. REST API Documentation

- **Current**: `restapi/` with multiple small files
- **New**: Consolidated under `integrations/rest-api/` with fewer, more comprehensive files

### 10. Administration and Troubleshooting

- **Current**: `troubleshooting/` with nested `backuprestore/` directory
- **New**: Single `administration/` section containing all admin tasks

## File Consolidation Strategy

### Files to be Merged:

1. **Agent Properties**: 19 separate property files → 4 consolidated configuration files
2. **Search Query/Results**: 16 files (8 query + 8 results) → 3 files (syntax + results)
3. **Platform Configurations**: Multiple small files → Grouped by platform type
4. **SIEM Dashboards**: Individual dashboard files → Single file per SIEM platform
5. **API Documentation**: 7 small files → 3 comprehensive files

### Benefits:

- Reduces total file count from 210 to approximately 80 files
- Eliminates deep nesting (max 3 levels instead of 5)
- Improves discoverability and navigation
- Reduces redundancy and maintenance overhead

## Naming Convention Changes

- All file and directory names use snake-case with hyphens
- No underscores or camelCase
- Consistent plural forms for collections (e.g., `agents`, `systems`)
- Clear, descriptive names that indicate content

## Sidebar Organization

The new sidebar will follow a logical flow:

1. Overview and Getting Started
2. Core Components (Agents, Monitored Systems)
3. Operations (Data Collection, Search)
4. Configuration (Platform-specific setup)
5. Integrations (SIEM, API)
6. Administration and Reference

This structure follows the typical user journey from initial setup through advanced configuration and maintenance.

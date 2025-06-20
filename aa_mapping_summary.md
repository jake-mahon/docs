# AccessAnalyzer 12.0 File Mapping Summary

## Overview

- **Total Files**: 1,446
- **Files to Keep**: 1,426 (98.6%)
- **Files to Merge**: 20 (1.4%)
- **Merge Targets**: 2

## Major Directory Mappings

### 1. Admin → Multiple Top-Level Directories

- `admin/action/*` → `actions/*` (96 files)
- `admin/datacollector/*` → `data-collection/*` (321 files)
- `admin/analysis/*` → `analysis/*` (42 files)
- `admin/report/*` → `reporting/*` (21 files)
- `admin/jobs/*` → `administration/job-management/*` (46 files)
- `admin/settings/*` → `administration/settings/*` (69 files)

### 2. Installation & Requirements → Getting Started

- `install/*` → `getting-started/installation/*` (30 files)
- `requirements/*` → `getting-started/system-requirements/*` (60 files)

### 3. Configuration

- `config/*` → `configuration/*` (60 files)

### 4. Solutions (with cleaner names)

- `solutions/activedirectory/*` → `solutions/active-directory/*`
- `solutions/filesystem/*` → `solutions/file-system/*`
- `solutions/sharepointonline/*` → `solutions/sharepoint-online/*`
- `solutions/exchangeonline/*` → `solutions/exchange-online/*`
- etc.

## File Merges

### Active Directory Operations (11 files → 1 file)

**Target**: `actions/active-directory-actions/operations.md`

Merging:

- computerdetails.md
- creategroups.md
- createusers.md
- disableenablecomputers.md
- disableenableusers.md
- groupdetails.md
- groupmembership.md
- moveobjects.md
- setresetpassword.md
- sidhistory.md
- usersdetails.md

### File System Parameters (9 files → 1 file)

**Target**: `actions/file-system-actions/operations.md`

Merging:

- addtags.md
- changeattributes.md
- changeowner.md
- changepermissioninheritance.md
- changepermissionsauditing.md
- changesharepermissions.md
- removefilepermissions.md
- removesharepermissions.md
- removetags.md

## Key Benefits of This Restructure

1. **Clearer Organization**: Admin functions split into logical categories
2. **Better User Journey**: Getting Started section combines installation and requirements
3. **Reduced File Count**: Merging similar operations reduces navigation complexity
4. **Consistent Naming**: Kebab-case throughout, cleaner solution names
5. **Logical Grouping**: Related functionality grouped together

## Implementation Notes

1. The CSV file `aa_complete_file_mappings.csv` contains all 1,446 mappings
2. The `action` column indicates whether to "keep" or "merge" each file
3. The `notes` column provides additional context for special cases
4. Merge instructions are detailed in `aa_merge_instructions.md`

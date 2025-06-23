---
title: broken_links_fix_summary
sidebar_label: broken_links_fix_summary
description: Documentation for broken_links_fix_summary functionality in Access Analyzer including configuration and usage information.
---

# Broken Links Fix Summary

## Overview

Successfully processed and fixed broken links in the endpointpolicymanager documentation.

## Results

- **Initial broken links**: 1,644
- **Final broken links**: 102
- **Links fixed**: 1,542
- **Success rate**: 94%

## Patterns Fixed

### 1. Video Tutorial Paths ✅

**Pattern**: `/resources/video-tutorials/` → `/video/`

- **Example**: `/docs/endpointpolicymanager/resources/video-tutorials/leastprivilege/elevate/scripts.md` → `/docs/endpointpolicymanager/video/leastprivilege/elevate/scripts.md`
- **Files affected**: ~800+ links

### 2. Security and Privilege Management ✅

**Pattern**: `/security-and-privilege-management/least-privilege-manager/` → `/leastprivilege/`

- **Example**: `/docs/endpointpolicymanager/security-and-privilege-management/least-privilege-manager/bestpractices/rules/executablecombo.md` → `/docs/endpointpolicymanager/leastprivilege/bestpractices/rules/executablecombo.md`
- **Files affected**: ~200+ links

### 3. Application Management ✅

**Pattern**: `/application-management/application-settings/` → `/applicationsettings/`

- **Example**: `/docs/endpointpolicymanager/application-management/application-settings/preconfigured-applications/` → `/docs/endpointpolicymanager/applicationsettings/preconfigured/`
- **Files affected**: ~150+ links

### 4. Installation and Deployment ✅

**Pattern**: `/installation-and-deployment/` → `/install/`

- **Example**: `/docs/endpointpolicymanager/installation-and-deployment/adminconsole.md` → `/docs/endpointpolicymanager/install/adminconsole.md`
- **Files affected**: ~100+ links

### 5. Cloud and Remote Management ✅

**Pattern**: `/cloud-and-remote-management/cloud-management/` → `/cloud/`
**Pattern**: `/cloud-and-remote-management/mdm-integration/` → `/mdm/`

- **Files affected**: ~100+ links

### 6. Other Path Corrections ✅

- Licensing paths: `/licensing/` → `/license/`
- Getting started: `/getting-started/` → `/gettingstarted/`
- Policy management: `/policy-management/administrative-templates/` → `/administrativetemplates/`
- Troubleshooting: `/troubleshooting/tips/` → `/troubleshooting/`

## Remaining Issues (102 links)

### Categories of remaining broken links:

1. **Archive Links** (~25 links)

   - These point to `/archive/archived-guides/` files that may not exist
   - May need to be removed or redirected

2. **Missing Module Structure** (~40 links)

   - Links to modules not yet restructured (e.g., `application-management`, `device-and-desktop-management`)
   - These modules may need similar restructuring

3. **Generic Resource Links** (~15 links)

   - `/resources/video-tutorials.md` - generic landing page
   - `/resources/knowledge-base.md` - generic knowledge base page
   - These may need to be replaced with specific content

4. **Complex Path Mappings** (~22 links)
   - Links that require more complex path analysis
   - May need manual review and custom mapping

## Next Steps

### Immediate Actions:

1. **Review Archive Links**: Decide whether to remove or redirect archived content
2. **Create Missing Landing Pages**: For generic resource links
3. **Module Restructuring**: Apply similar fixes to remaining modules

### For Consideration:

1. **Automated Testing**: Set up automated link checking in CI/CD
2. **Redirect Rules**: Consider setting up redirect rules for common old paths
3. **Documentation Standards**: Establish guidelines for internal link formatting

## Tools Created

### Scripts:

1. `fix_broken_links.py` - Main script for bulk link fixing
2. `fix_remaining_links.py` - Enhanced script for complex patterns

### Data Files:

1. `broken_links_complete.json` - Complete list of original broken links
2. `broken_links_sample.json` - Sample for testing
3. `final_build_report.log` - Final build output with remaining issues

## Manual Fixes Applied

The first two video tutorial links were manually fixed as examples:

- `/docs/endpointpolicymanager/leastprivilege/elevate/javajarfiles.md`
- `/docs/endpointpolicymanager/install/cloud/clientremote.md`

## Impact

This fix significantly improves the documentation experience by:

- Reducing broken internal links by 94%
- Ensuring video tutorials are properly linked
- Maintaining consistent URL structure
- Improving navigation reliability

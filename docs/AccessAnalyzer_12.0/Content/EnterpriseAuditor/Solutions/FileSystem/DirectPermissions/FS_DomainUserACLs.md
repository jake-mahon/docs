---
sidebar_position: 5231
title: FS_DomainUserACLs Job
---

# FS\_DomainUserACLs Job

The FS\_DomainUserACLs job is designed to report on domain users that have been granted direct permissions on resources from targeted file servers.

## Analysis Tasks for the FS\_DomainUserACLs Job

View the analysis tasks by navigating to the **FileSystem** > **2.Direct Permissions** > **FS\_DomainUserACLs** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_DomainUserACLs Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/DirectPermissions/DomainUserACLsAnalysis.png "Analysis Tasks for the FS_DomainUserACLs Job")

The following analysis tasks are selected by default:

* 0. Drop tables – Drops tables from previous runs
* 1. Direct User Resource Details – Creates the SA\_FS\_DomainUserACLs\_DirectUserResourceDetails table accessible under the job’s Results node
* 2. Direct Users: Top 5 Servers – Creates an interim processing table in the database for use by downstream analysis and report generation
* 3. Direct Users – Creates an interim processing table in the database for use by downstream analysis and report generation
* 4. Direct Resources – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks which displays all direct user permissions, the FS\_DomainUserACLs job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Domain User ACLs | This report identifies all places where a domain user account has direct rights. | None | This report is comprised of three elements:   * Bar Chart – Displays top 5 servers affected by folders * Table – Provides details on domain users * Table – Provides details on resources |
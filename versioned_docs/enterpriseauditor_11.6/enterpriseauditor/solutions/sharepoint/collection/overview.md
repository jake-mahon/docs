# 0.Collection Job Group

The __SharePoint__ > __0.Collection__ Job Group is designed to collect information from SharePoint farms using the SPAA Data Collector. The collected data is then available to other SharePoint Solution sub-job groups and the Access Information Center for analysis.

![0.Collection Job Group](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/jobstree.png)

The jobs in the 0.Collection Job Group are:

- [1-SPSEEK\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/1-spseek_systemscans.md) – Responsible for building the Tier2 SPDLP database repositories, which contain information regarding sensitive content that exists within SharePoint
- [2-SPAA\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/2-spaa_systemscans.md) – Collects information on permissions, users, and groups to determine who has access to each structural level in the SharePoint farm
- [3-SPAC\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/3-spac_systemscans.md) – Collects information on activity, users, and groups to determine who has performed activity in each structural level in the SharePoint farm
- [4-SPSEEK\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/4-spseek_bulkimport.md) – Responsible for retrieving the Tier 2 SPDLP database information and importing it to the SQL Server where Enterprise Auditor stores data
- [5-SPAA\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/5-spaa_bulkimport.md) – Responsible for retrieving the SPAA Tier 2 Database information and importing it to the Enterprise Auditor SQL database
- [6-SPAC\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/6-spac_bulkimport.md) – Responsible for retrieving the SPAC Tier 2 Database information and importing it to the Enterprise Auditor SQL database
- [7-SPAA\_Exceptions Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/7-spaa_exceptions.md) – Searches scanned data for resources that match high risk conditions, retrieving a summary of SharePoint exceptions per host

Additionally, the jobs in the 0.Collection Job Group are organized into the following collection components:

- SharePoint Access Auditing (SPAA) – The SharePoint Access Auditing (SPAA) component is the primary component of this group and collects SharePoint information with the SPAA Data Collector, such as permissions and content metadata. It employs the 2-SPAA\_SystemScans Job, the 5-SPAA\_BulkImport Job, and the 7-SPAA\_Exceptions Job. See the [SharePoint Access Auditing](#SharePoint-Access-Auditing) topic for additional information. If using agent-based scanning, this component requires an additional installer package before data collection will occur.
- SharePoint Activity Auditing (SPAC) – The SharePoint Activity Auditing (SPAC) component collects event information from the Enterprise Auditor Activity Monitor log files with the SPAA Data Collector. It employs the 3-SPAC\_SystemScans Job and the 6-SPAC\_BulkImport Job. See the [SharePoint Activity Auditing](#SharePoint-Activity-Auditing) topic for additional information.
- SharePoint Sensitive Data Discovery Auditing (SEEK) – The SharePoint Sensitive Data Discovery Auditing (SEEK) component searches file content for sensitive data. It also collects permission information; therefore, it does not need to be run with the SPAA component. This component employs the 1-SPSEEK\_SystemScans Job, the 5-SPAA\_BulkImport Job, the 4-SPSEEK\_BulkImport Job, and the 7-SPAA\_Exceptions Job. This component requires an additional installer package before data collection will occur. See the [SharePoint Sensitive Data Discovery Auditing (SEEK)](#SharePoint-Sensitive-Data-Discovery-Auditing-SEEK) topic for additional information.

These jobs are numbered to keep them in the necessary run order. Not all jobs need be run. See the appropriate auditing section for specific job relationships and recommended workflows.

The relationship between system scans and bulk import jobs requires the following considerations:

- A system scans job executed from a Enterprise Auditor Console must be followed by the corresponding bulk import job from the same Enterprise Auditor Console with the same version of Enterprise Auditor
- Two system scans processing the same information, for example two __2-SPAA\_SystemScans__ jobs, cannot be executed consecutively against the same target host. The corresponding bulk import job, for example. __5-SPAA\_BulkImport__, must be executed in between.

The system scans job collects the data and creates a Tier-2 database, or SQLite database, on the local host or the host where the SharePoint Agent was installed (according to the scan method configured). The corresponding bulk import job gathers the information from the Tier-2 database, and pulls it into the Enterprise Auditor SQL backend database, thus completing the collection process.

## SharePoint Access Auditing

Access Auditing (SPAA) is the primary component of the 0.Collection Job Group. It collects information on permissions, users, and groups to determine who has access to each structural level in the SharePoint farm, on-premises and online, using the SPAA Data Collector. The jobs, tables, and views specifically incorporated into this component are prefaced with ```SPAA```. See the SharePointAccess Data Collector [Standard Reference Tables & Views for the SPAA Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/standardtables.md) topic for additional information on the data collected.

The 0.Collection jobs that comprise this auditing component are:

- [2-SPAA\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/2-spaa_systemscans.md) – Collects information on permissions, users, and groups to determine who has access to each structural level in the SharePoint farm
- [5-SPAA\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/5-spaa_bulkimport.md) – Responsible for retrieving the SPAA tier 2 database information and import it to the Enterprise Auditor SQL database
- [7-SPAA\_Exceptions Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/7-spaa_exceptions.md) – Searches scanned data for resources that match high risk conditions, retrieving a summary of SharePoint exceptions per host

The following job groups and[SP\_Overview Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/sp_overview.md) jobs in the SharePoint Solution depend on data collected by these jobs to generate reports:

- [1.Direct Permissions Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/directpermissions/overview.md)
- [2.High Risk Sites > SP\_OpenAccess Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/sp_openaccess.md)
- [3.Broken Inheritance > SP\_BrokenInheritance Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/sp_brokeninheritance.md)
- [4.Content Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/content/overview.md)
- [Effective Access Audits Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/effectiveaccessaudits/overview.md)
- [5.Probable Owner > SP\_ProbableOwner Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/sp_probableowner.md)
- [SP\_Overview Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/sp_overview.md)

The SharePoint Sensitive Data Discovery Reports in the Access Information Center are also populated by this data. See the SharePoint Reports topics in the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter) for additional information.

See the [Recommended Configuration for the SharePoint Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/recommended.md) topic for other Runtime Details.

Workflow

__Step 1 –__ Run [2-SPAA\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/2-spaa_systemscans.md).

__Step 2 –__ Run [5-SPAA\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/5-spaa_bulkimport.md).

__Step 3 –__ Run [7-SPAA\_Exceptions Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/7-spaa_exceptions.md).

__Step 4 –__ Run desired corresponding analysis and reporting sub-job groups.

Please see the [Recommended Configuration for the SharePoint Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/recommended.md) topic before continuing with this workflow.

___RECOMMENDED:___ Scope the 0.Collection Job Group to only include the collection components desired by disabling the undesired collection jobs. Disabling them allows the solution to run more efficiently. It is not recommended to delete any jobs. See the [Disable or Enable a Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/disableenable.md) topic for additional information.

## SharePoint Activity Auditing

Activity Auditing (SPAC) is the component of the 0.Collection Job Group that collects information on activity, users, and groups to determine who has performed activity in each structural level in the SharePoint on-premises farm, or SharePoint online tenant, using the SPAA Data Collector. The jobs and tables specifically incorporated into this component are prefaced with SPAC. See the [Standard Reference Tables & Views for the SPAA Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/standardtables.md) topic for additional information on the data collected.

The Access Auditing components must be run in order to create the tables in the database for the SPAC component to use. Either the SPAA or SEEK Scan job, run to at least a 0-level scan depth (and the corresponding Bulk Import job) can be used to create these tables. Once an initial 0-level SPAA or SPSEEK scan job and corresponding Bulk Import have been run against a particular SharePoint On Prem farm or SharePoint Online tenant, SPAA or SPSEEK Scan jobs can be run concurrently with SPAC Scan and Bulk Import jobs as needed.

The 0.Collection jobs that comprise this auditing component are:

- [3-SPAC\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/3-spac_systemscans.md) – Collects information on activity, users, and groups to determine who has perform activity in each structural level in the SharePoint farm
- [6-SPAC\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/6-spac_bulkimport.md) – Responsible for retrieving the SPAC tier 2 database information and import it to the Enterprise Auditor SQL data base

The [SP\_Overview Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/sp_overview.md) and [7.Activity Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/activity/overview.md) in the SharePoint Solution uses the data collected by these jobs to generate reports.

The SharePoint Activity Reports in the Access Information Center are also populated by this data. See the SharePoint Reports topics in the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter) for additional information.

Recommended Workflow 1 (for Access & Activity Auditing)

__Step 1 –__ Run [2-SPAA\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/2-spaa_systemscans.md).

__Step 2 –__ Run [3-SPAC\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/3-spac_systemscans.md).

__Step 3 –__ Run [5-SPAA\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/5-spaa_bulkimport.md).

__Step 4 –__ Run [6-SPAC\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/6-spac_bulkimport.md).

__Step 5 –__ Run [7-SPAA\_Exceptions Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/7-spaa_exceptions.md).

__Step 6 –__ Run desired corresponding analysis and reporting sub-job groups.

__NOTE:__ Once an initial 2-SPAA SystemScans job (scoped to at least 0-level depth) and the corresponding 5-SPAA Bulk Import job have been run, then the SPAA Scans can be run concurrently with SPAC Scans and Bulk Import jobs as desired.

Recommended Workflow 2 (for Access, Sensitive Data Discovery & Activity Auditing)

__CAUTION:__ The jobs must be run in the order shown. It is not possible to disable the 1-SPAA\_SystemScan and 2-SPAA\_BulkImport jobs and run the 0.Collection Job Group because the remaining jobs are in the wrong order. Renaming the jobs is not an option.

__Step 1 –__ Install the Sensitive Data Discovery Add-on on the Enterprise Auditor Console (once only).

__Step 2 –__ Run [1-SPSEEK\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/1-spseek_systemscans.md).

__Step 3 –__ Run [3-SPAC\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/3-spac_systemscans.md).

__Step 4 –__ Run [4-SPSEEK\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/4-spseek_bulkimport.md).

__Step 5 –__ Run [6-SPAC\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/6-spac_bulkimport.md).

__Step 6 –__ Run [7-SPAA\_Exceptions Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/7-spaa_exceptions.md).

__Step 7 –__ Run desired corresponding analysis and reporting sub-job groups.

__NOTE:__ Once an initial 1-SPSEEK SystemScans job (scoped to at least 0-level depth) and the corresponding 4-SPSEEK Bulk Import job have been run, then the SPSEEK Scans jobs can be run concurrently with the SPAC Scans and the Bulk Import jobs as desired.

Optional Workflow (for Activity Auditing Only)

__Step 1 –__ Run [3-SPAC\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/3-spac_systemscans.md).

__Step 2 –__ Run [6-SPAC\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/6-spac_bulkimport.md).

__Step 3 –__ Run desired corresponding analysis and reporting sub-job groups.

__NOTE:__ Please see the [Recommended Configuration for the SharePoint Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/recommended.md) topic before continuing with this workflow.

___RECOMMENDED:___ Scope the 0.Collection Job Group to only include the collection components desired by disabling the undesired collection jobs. Disabling them allows the solution to run more efficiently. It is not recommended to delete any jobs. See the [Disable or Enable a Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/disableenable.md) topic for additional information.

## SharePoint Sensitive Data Discovery Auditing (SEEK)

Sensitive Data Discovery Auditing (SEEK) is the component of the 0.Collection Job Group that searches file content for sensitive data. It also collects information on permissions, users, and groups to determine who has access to each structural level in the SharePoint farm, on-premises and online, using the SPAA Data Collector. The jobs for this component are prefaced with ```SPSEEK```. The tables and views are prefaced with ```SPDLP```. See the [SharePoint Sensitive Data Discovery Auditing Tables & Views](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/standardtables.md#SharePoint-Sensitive-Data-Discovery-Auditing-Tables-Views) topic for additional information on the data collected.

__NOTE:__ The Sensitive Data Discovery Auditing (SEEK) component is an add-on to the SharePoint Solution. Though the jobs are visible within the console, it requires an additional installer package before data collection will occur. See the [Sensitive Data Discovery Add-On Installation](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sensitivedatadiscovery/overview.md) topic for additional information.

Customized search criteria can be created with the Criteria Editor accessible through the [SPAA: Select DLP Criteria](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/selectdlpcriteria.md) page of the SharePoint Access Auditor Data Collector Wizard. See the [Sensitive Data](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/sensitivedata/overview.md) topic for additional information.

The 0.Collection jobs that comprise this auditing component are:

- [1-SPSEEK\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/1-spseek_systemscans.md) – Responsible for building the Tier2 SPDLP database repositories, which contain information regarding sensitive content that exists within SharePoint
- [4-SPSEEK\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/4-spseek_bulkimport.md) – Responsible for retrieving the Tier 2 SPDLP database information and importing it to the SQL Server where Enterprise Auditor stores data
- [7-SPAA\_Exceptions Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/7-spaa_exceptions.md) – Searches scanned data for resources that match high risk conditions, retrieving a summary of SharePoint exceptions per host

The following job groups and[SP\_Overview Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/sp_overview.md) jobs in the SharePoint Solution depend on data collected by these jobs to generate reports:

- [1.Direct Permissions Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/directpermissions/overview.md)
- [2.High Risk Sites > SP\_OpenAccess Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/sp_openaccess.md)
- [3.Broken Inheritance > SP\_BrokenInheritance Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/sp_brokeninheritance.md)
- [4.Content Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/content/overview.md)
- [Effective Access Audits Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/effectiveaccessaudits/overview.md)
- [5.Probable Owner > SP\_ProbableOwner Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/sp_probableowner.md)
- [6.Sensitive Data > SP\_SensitiveData Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/sp_sensitivedata.md)
- [SP\_Overview Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/sp_overview.md)

The SharePoint Sensitive Data Discovery Reports in the Access Information Center are also populated by this data. See the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter) for additional information.

Recommended Workflow 1 (for Access & Sensitive Data Discovery Auditing)

__Step 1 –__ Install the Sensitive Data Discovery Add-on on the Enterprise Auditor Console, and on the SharePoint application server when applicable (once only).

__Step 2 –__ Run [1-SPSEEK\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/1-spseek_systemscans.md).

__Step 3 –__ Run [4-SPSEEK\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/4-spseek_bulkimport.md).

__Step 4 –__ Run [7-SPAA\_Exceptions Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/7-spaa_exceptions.md).

__Step 5 –__ Run desired corresponding analysis and reporting sub-job groups.

Recommended Workflow 2 (for Access, Sensitive Data Discovery & Activity Auditing)

__CAUTION:__ The jobs must be run in the order shown. It is not possible to disable the 2-SPAA\_SystemScan and 5-SPAA\_BulkImport jobs and run the 0.Collection Job Group because the remaining jobs are in the wrong order. Renaming the jobs is not an option.

__Step 1 –__ Install the Sensitive Data Discovery Add-on the Enterprise Auditor Console (once only).

__Step 2 –__ Run [1-SPSEEK\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/1-spseek_systemscans.md).

__Step 3 –__ Run [3-SPAC\_SystemScans Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/3-spac_systemscans.md).

__Step 4 –__ Run [4-SPSEEK\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/4-spseek_bulkimport.md).

__Step 5 –__ Run [6-SPAC\_BulkImport Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/6-spac_bulkimport.md).

__Step 6 –__ Run [7-SPAA\_Exceptions Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/7-spaa_exceptions.md).

__Step 7 –__ Run desired corresponding analysis and reporting sub-job groups.

__NOTE:__ Once an initial 1-SPSEEK SystemScans job (scoped to at least 0-level depth) and the corresponding 4-SPSEEK Bulk Import job have been run, then the SPSEEK Scans can be run concurrently with the SPAC Scans and the Bulk Import jobs as desired.

__NOTE:__ Please see the [Recommended Configuration for the SharePoint Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/recommended.md) topic before continuing with this workflow.

___RECOMMENDED:___ Scope the 0.Collection Job Group to only include the collection components desired by disabling the undesired collection jobs. Disabling them allows the solution to run more efficiently. It is not recommended to delete any jobs. See the [Disable or Enable a Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/disableenable.md) topic for additional information.

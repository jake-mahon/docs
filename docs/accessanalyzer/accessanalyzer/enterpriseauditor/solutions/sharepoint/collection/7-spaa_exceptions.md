# 7-SPAA\_Exceptions Job

This job searches scanned data for resources that match high risk conditions and retrieving a summary of SharePoint exceptions per host.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/overview.md#Parameter-Configuration) topic for instructions on how to edit parameters on a job overview page.

The 7-SPAA\_Exceptions page has the following configurable parameters:

- #opengroups – High-risk groups such as those known to be sensitive or open can be added

  __NOTE:__ Groups must be entered exactly as they are listed in SA\_SPAA\_Trustees. Copy and paste the Group name as it appears in the Name Column.

See the [Customizable Analysis Tasks for the 7-SPAA\_Exceptions Job](#Customizable-Analysis-Tasks-for-the-7-SPAA_Exceptions-Job) for additional information.

## Analysis Tasks 7-SPAA\_Exceptions Job

The 3-SPAA\_Exceptions Job does not use the SPAA Data Collector. Instead it runs analysis on the data returned by the 2-SPAA\_BulkImport Job. View the analysis tasks by navigating to the __Jobs__ > __SharePoint__ > __0.Collection__ > __3-SPAA\_Exceptions__ > __Configure__ node and select __Analysis__.

__CAUTION:__ The analysis tasks are preconfigured for this job. Never modify or deselect the selected analysis tasks.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/collection/spaaexceptionsanalysis.png)

The default analysis tasks are:

- Open resources – Any site collections, sites, libraries, lists, or folders that are openly accessible. Can be deselected if open resource information is not desired.

  - This analysis task contains a configurable parameter: ```#opengroups```
- Disabled users – Any site collections, sites, libraries, lists, or folders where disabled users have been granted access. Can be deselected if disabled user information is not desired.
- Stale users – Any site collections, sites, libraries, lists, or folders where stale users have been granted access. Stale users are user who have not logged in for more than 120 days. Can be deselected if stale user information is not desired.
- Unresolved SID – Matches SIDs to .Active Directory Inventory Job Group data to resolve for those users using legacy SIDS or deleted users.
- Show view – Displays views within the Results node of the Access Analyzer Console.

### Customizable Analysis Tasks for the 7-SPAA\_Exceptions Job

The default values for customizable parameters are:

| Analysis Task | Customizable Parameter Name | Default Value | Instruction |
| --- | --- | --- | --- |
| Open resources | #opengroups | Empty | Groups must be entered exactly as they are listed in SA\_SPAA\_Trustees. Copy and paste the Group name as it appears in the Name Column. |

See the [Configure the Customizable Parameters in an Analysis Task](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md#Configure-the-Customizable-Parameters-in-an-Analysis-Task) for additional information.

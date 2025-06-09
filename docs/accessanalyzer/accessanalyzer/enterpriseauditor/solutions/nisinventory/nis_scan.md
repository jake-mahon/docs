# NIS Scan Job

The NIS Scan job collects data from the targeted NIS server and then analyzes that data to inventory users, groups, and group membership. This data can then be used by other built-in Access Analyzer solutions.

## Query for the NIS Scan Job

The NIS Scan Job uses the NIS Data Collector for the following query:

__CAUTION:__ This query must be modified. See the [Configure the NIS Scan Query](#Configure-the-NIS-Scan-Query) topic for additional information.

![Query for the NIS Scan Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/nisinventory/nisscanquery.png)

- Inventory Scan – Targets a NIS server to collect inventory data for user and group objects

### Configure the NIS Scan Query

The NIS Scan job has been preconfigured to run with the default settings with the category of __Scan NIS Users and Groups__. However, it is necessary to configure the targeted NIS domain. Follow the steps to set the target NIS domain and any desired customizations.

__Step 1 –__ Navigate to the __.NIS Inventory__ > __NIS Scan__ > __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, click __Query Properties__. The Query Properties window opens.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__. The NIS Data Collector Wizard opens.

__CAUTION:__ Do not make changes to other wizard pages as they have been pre-configured for the purpose of this job.

![NIS Settings page](/img/product_docs/activitymonitor/config/dellpowerscale/settings.png)

__Step 4 –__ On the NIS Settings page, enter the __NIS Domain Name__ for the targeted NIS domain. This step is required prior to running this query. See the [NIS: NIS Settings](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/nis/settings.md) topic for additional information.

- Optional: Test the connection to the domain using the Sample NIS Server section of the page

![SID Mappings page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/nis/sidmappings.png)

__Step 5 –__ On the SID Mappings page, you can add multiple SID mapping entries. See the [NIS: SID Mappings](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/nis/sidmappings.md) topic for additional information.

__Step 6 –__ Navigate to the Summary page. Click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Query Properties window.

The NIS Scan Job is now ready to run.

## Analysis Tasks for the NIS Scan Job

View the analysis tasks by navigating to the __.NIS Inventory__ > __NIS Scan__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Most of these analysis tasks are preconfigured and should not be modified or deselected. There is one that is deselected by default, as it is for troubleshooting purposes.

![Analysis Tasks for the NIS Scan Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/nisinventory/nisscananalysis.png)

The following analysis tasks are selected by default:

- Users – Enables the SA\_NIS\_Users table to be accessible under the job’s Results node
- Groups – Enables the SA\_NIS\_Groups table to be accessible under the job’s Results node
- Members – Enables the SA\_NIS\_GroupMembersView to be accessible under the job’s Results node

The following analysis task only needs to be selected when there is a need to remove the tables from the database:

__CAUTION:__ This analysis task is for troubleshooting and cleanup only. Data will be deleted from the database. Do not execute this task with the other analysis tasks, as that results in the deletion of data that was just collected.

- Drop NIS Tables – Removes all tables and views created by this job from SQL Server database

  - See the [Remove NIS Tables](#Remove-NIS-Tables) topic for additional information

### Remove NIS Tables

Sometimes when troubleshooting a NIS Data Collector issue, it becomes necessary to clear the standard reference tables. Follow these steps.

__Step 1 –__ Navigate to the __.NIS Inventory__ > __NIS Scan__ > __Configure__ node and select __Analysis__.

__Step 2 –__ Clear all of the other analysis tasks and select only the __Drop NIS Tables__ analysis task.

__Step 3 –__ Use the right-click menu on the analysis data grid to __Execute Analyses__.

__Step 4 –__ After the analysis task has completed execution, the tables have been cleared from the SQL database.

__CAUTION:__ Do not forget to clear the Drop NIS Tables analysis task and reselect all of the other analysis tasks.

The next time the job is run, the standard reference tables are recreated in the database.

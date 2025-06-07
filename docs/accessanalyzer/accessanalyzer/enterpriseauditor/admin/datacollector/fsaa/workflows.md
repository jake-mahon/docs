# Additional FSAA Workflows

The following FSAA Data Collector query categories that provide additional functionality:

- Remove scan executables and data – Removes file system access audit scan applet and data from remote server
- Update proxy service – Update FSAA binaries for hosts running the File System Proxy Service

  __NOTE:__ Requires the existing File System Proxy Service to be v8.0 or later.
- Remove host data – Removes host from all SQL tables created by the FSAA Data Collector and deletes StrucMap (removes host assigned to job where query exists)

Additional workflows include:

- Remove Host and Criteria SDD Data – Removes SDD data for a host or a criteria from the SQL tables
- Drop Tables & Views – Drops the standard reference tables and views

_Remember,_  the FSAA Data Collector always records data in Standard Reference Tables, no matter what job it is applied to.

## Remove File System Access Scan Category

The FSAA Data Collector can be used to clean-up or troubleshoot the applet and proxy scanning servers. This would need to be done through a new job’s query. Set the host list and Connection Profile to target the desired applet and proxy servers.

Follow these steps to build a new query using the FSAA Data Collector with the Remove scan executables and data category.

__Step 1 –__ Navigate to the __Configure__ node of a new or chosen job and select the __Queries__ node.

__Step 2 –__ In the Query Selection view, click the __Create Query__ link. The Query Properties window displays.

__Step 3 –__ Select the __Data Source__ tab. From the __Data Collector__ drop-down menu, select __FILESYSTEMACCESS__ and then click the __Configure__ button. The File System Access Auditor Data Collector Wizard opens.

![FSAA Data Collector Wizard Query Selection page with Remove scan executables and data option selected](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/queryselectionremovescanexecutablesdata.png)

__Step 4 –__ On the Query Selection page, select the __Remove scan executables and data__ category.

__Step 5 –__ Click __Finish__ to save the selection and close the wizard. Then click __OK__ to close the Query Properties window.

This job has now been configured to run the FSAA Data Collector to remove the file system access audit scan applet and data from the target server. Run the job to clean-up the targeted hosts.

## Update Proxy Service Category

The FSAA Data Collector can be used to upgrade the File System Proxy Service already installed on proxy servers. The FS\_UpdateProxy Job is preconfigured to run with the default settings with the category of Update proxy service. It is available through the Instant Job Library under the File System library.

The Update Proxy Service category option enables users with the ability to update v8.0+ File System Proxy Service installations to newer versions. When this query is employed, the job compresses the updated binaries and deploy them to the proxy server. Once the proxy server has no active sessions, the Netwrix Access Analyzer (formerly Enterprise Auditor) FSAA Proxy Scanner service shuts down and the components are updated. Finally, the service restarts itself.

__NOTE:__ This option is not for updating v7.x File System Proxy installations. Those must be manually updated to at least v8.0 on the proxy server before this query can be used to automate the process.

Follow the [Upgrade Proxy Service Procedure](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/filesystemproxy/upgrade.md) and use the FS\_UpdateProxy Job.

## Remove Host Category

The FSAA Data Collector can be used to clean-up the Standard Reference Tables by removing data for particular hosts. This would need to be done through a new job’s query. The host to be removed is set as the host list for the new job. The Connection Profile applied should be the same as the one used for the associated __FileSystem__ > __0.Collection__ > … __Bulk Import__ Job.

__CAUTION:__ Be careful when applying this query task, as it results in the deletion of collected data. Ensure proper configuration prior to job execution.

___RECOMMENDED:___ Manually enter individual hosts into the host list executing this query.

Follow the steps to build a new query using the FSAA Data Collector with the Remove host data category.

__Step 1 –__ Navigate to the __Configure__ node of a new or chosen job and select the __Queries__ node.

__Step 2 –__ In the Query Selection view, click the __Create Query__ link. The Query Properties window displays.

__Step 3 –__ Select the __Data Source__ tab. From the __Data Collector__ drop-down menu, select __FILESYSTEMACCESS__ and then click __Configure__. The File System Access Auditor Data Collector Wizard opens.

![FSAA Data Collector Wizard Query Selection page with Remove host data option selected](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/queryselectionremovehostdata.png)

__Step 4 –__ On the Query Selection page, select the __Remove host data__ category.

__Step 5 –__ Click __Finish__ to save the selection and close the wizard. Then click __OK__ to close the Query Properties window.

This job has now been configured to run the FSAA Data Collector to remove the host identified in the job’s  __Configure__ > __Hosts__ node. Run the job to clean-up the targeted hosts.

_Remember,_ this job deletes data from the Access Analyzer database. Use caution and ensure proper configuration prior to job execution.

## Remove Host and Criteria SDD Data

The FS\_SDD\_DELETE job removes host and criteria sensitive data matches from the Tier 1 database. It is preconfigured to run analysis tasks with temporary tables that requires modification prior to job execution. It is available through the Instant Job Library under the File System library. See the [Instant Job Wizard](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/overview.md) topic for additional information.

![FS_SDD_DELETE Job in Job's Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/sdddelete.png)

The 0.Collection Job Group must be run before executing the FS\_SDD\_DELETE Job.

### Analysis Tasks for the FS\_SDD\_DELETE Job

The analysis tasks are deselected by default. View the analysis tasks by navigating to the __Jobs__ > __FS\_SDD\_DELETE__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Applying these analysis tasks result in the deletion of collected data.

![FS_SDD_DELETE Job Analysis Selection page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/sdddeleteanalysistasks.png)

- Delete Criteria – Remove all SDD Data for a Specified Criteria
- Delete Host – Remove all SDD Data Related to a Host
- Remove Host & Criteria – Remove all SDD Data for a Specific Host and Criteria Combination

### Configure the FS\_SDD\_DELETE Analysis Tasks

Follow the steps to configure and run the analysis tasks.

__Step 1 –__ Prior to job execution, modify the desired analysis tasks using the [Customizable Analysis Parameters for FS\_SDD\_DELETE Job](#Customizable-Analysis-Parameters-for-FS_SDD_DELETE-Job) instructions.

__Step 2 –__ In the Analysis Selection Pane, check the type of analysis task that will be run.

__Step 3 –__ Right-click the __FS\_SDD\_DELETE__ Job and select __Run Job__. The analysis execution status is visible from the __Running Instances__ node.

__Step 4 –__ When the job has completed, return to the Analysis Selection Pane and deselect all analysis tasks.

__CAUTION:__ Do not leave these analysis tasks checked in order to avoid accidental data loss.

All of these tables have been dropped from the SQL Server database and the data is no longer available.

### Customizable Analysis Parameters for FS\_SDD\_DELETE Job

A customizable parameter enables Access Analyzer users to set the sensitive data values that will be deleted during this job’s analysis.

| Analysis Task | Customizable Parameter Name | Value Indicates |
| --- | --- | --- |
| Delete Host | #hosts | List of Host Names to be removed |
| Delete Criteria | #Criteria | List of Criteria to be removed |
| Remove Host & Criteria | #Criteria  #hosts | List of Criteria and Host Names to be removed |

The parameters that can be customized are listed in a section at the bottom of the SQL Script Editor. Follow the steps to customize analysis task parameters.

__Step 1 –__ Navigate to the __FS\_SDD\_DELETE__ > __Configure__ node and select __Analysis__.

__Step 2 –__ In the Analysis Selection view, select the desired analysis task and click on __Analysis Configuration__. The SQL Script Editor opens.

![ FS_SDD_DELETE Job Analysis Task in SQL Script Editor](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/sdddeletesqlscripteditor.png)

__Step 3 –__ In the Parameters section at the bottom of the editor, select either the __#Criteria__ or __#hosts__ row, depending on the analysis task chosen, and then __Edit Table__. The Edit Table window opens.

__CAUTION:__ Do not change any parameters where the Value states ```Created during execution```.

![SQL Script Editor Edit Table window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/sdddeletesqlscripteditoredittable.png)

__Step 4 –__ Use the __Add New Item__ button to enter host names or criteria to the temporary table list manually, or select the __Browse__ button to upload a list of hosts in CSV format. Click __OK__ to save any changes. Other Edit Table buttons include:

- Edit a Value
- Delete this row/column
- Move up
- Move down

__Step 5 –__ Click Save and Close to finalize the customization and close the SQL Script Editor.

The job is now ready to be executed.

## Drop Tables & Views

If it becomes necessary to clear the FSAA Data Collector tables and views to resolve an issue, the FS\_DropTables Job is preconfigured to run analysis tasks that drop functions and views for the File System Solution as well as the standard tables and views generated by the FSAA Data Collector.

It is available through the Instant Job Library under the File System library. Since this job does not require a host to target, select Local host on the Hosts page of the Instant Job Wizard. See the [Instant Job Wizard](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/overview.md) topic for additional information.

![FS_DropTables Job in Job's Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/droptables.png)

The 0.Collection Job Group must be run before executing the FS\_DropTables Job.

### Analysis Tasks for the FS\_DropTables Job

The analysis tasks are deselected by default. View the analysis tasks by navigating to the __Jobs__ > __FS\_DropTables__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Applying these analysis tasks result in the deletion of collected data.

![FS_DropTables Job Analysis Selection page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/droptablesanalysistasks.png)

- 1. Drop FSAA functions – Removes all functions and views from previous runs of the File System Solution
- 2. Drop FSAC tables – Drops the File System Activity Auditing tables imported from the previous runs
- 3. Drop FSDLP Tables – Drops the File System Sensitive Data Discovery Auditing tables imported from the previous runs
- 4. Drop FSDFS Tables – Drops the File System DFS Auditing tables imported from the previous runs
- 5. Drop FSAA Tables – Drops File System Access Auditing tables imported from the previous runs

Do not try to run these tasks separately, as they are designed to work together. Follow these steps to run the analysis tasks:

__Step 1 –__ In the Analysis Selection Pane, click __Select All__. All tasks will be checked.

__Step 2 –__ Right-click the __FS\_DropTables__ Job and select __Run Job__. The analysis execution status is visible from the __Running Job__ node.

__Step 3 –__ When the job has completed, return to the Analysis Selection Pane and click __Select All__ to deselect these analysis tasks.

__CAUTION:__ Do not leave these analysis tasks checked in order to avoid accidental data loss.

All of these tables have been dropped from the SQL Server database and the data is no longer available.

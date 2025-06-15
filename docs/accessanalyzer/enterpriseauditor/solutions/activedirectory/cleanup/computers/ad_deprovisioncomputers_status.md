# AD_DeprovisionComputers_Status Job

The AD_DeprovisionComputers_Status Job tracks and reports on the progress of the computer deprovisioning workflow.

## Analysis Tasks for the AD_DeprovisionComputers_Status Job

Navigate to the __Active Directory__ > __Cleanup__ > __3.Computers__ > __AD_DeprovisionComputers_Status__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for AD_DeprovisionComputers_Status Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/cleanup/computers/deprovisioncomputersstatusanalysis.webp)

The default analysis tasks are:

- Track Deletion – Creates the AD_DeprovisionComputers_Log table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the AD_DeprovisionComputers_Status Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Computer Deprovisioning | This report tracks actions taken each day of the Stale Computer Deprovisioning campaign. | None | This report is comprised of three elements:   - Line Chart – Displays cleanup progress - Table – Provides details on computer deprovisioning - Table – Provides action details |

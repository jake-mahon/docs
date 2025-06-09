# AD\_DeprovisionUsers\_Status Job

The AD\_DeprovisionUsers\_Status Job tracks all actions taken by the included deprovisioning workflow.

## Analysis Tasks for the AD\_DeprovisionUsers\_Status Job

Navigate to the __Active Directory__ > __Cleanup__ > __2.Users__ > __AD\_DeprovisionUsers\_Status__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the AD_DeprovisionUsers_Status Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/cleanup/users/deprovisionusersstatusanalysis.png)

The default analysis task is:

- Track History – Tracks all actions taken. Creates the SA\_AD\_DeprovisionUsers\_Log accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the AD\_DeprovisionUsers\_Status Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| User Deprovisioning | This report tracks actions taken each day of the Stale User Deprovisioning campaign. | None | This report is comprised of three elements:   - Line Chart – Displays cleanup progress - Table – Provides details on user deprovisioning - Table – Provides action details |

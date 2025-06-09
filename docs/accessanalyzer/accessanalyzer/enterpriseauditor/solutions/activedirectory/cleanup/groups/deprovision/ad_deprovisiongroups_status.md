# AD\_DeprovisionGroups\_Status Job

The AD\_DeprovisionGroups\_Status Job tracks all actions taken by the Deprovisioning workflow.

## Analysis Task for the AD\_DeprovisionGroups\_Status Job

Navigate to the __Active Directory__ > __Cleanup__ > __1.Groups__ > __1. Deprovision Groups__ > __AD\_Deprovision Groups\_Status__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis tasks is preconfigured for this job.

![Analysis Task for the AD_DeprovisionGroups_Status Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/cleanup/groups/deprovision/deprovisiongroupsstatusanalysis.png)

The default analysis task is:

- Track Actions – Creates the AD\_DeprovisionGroups\_Log and AD\_DeprovisionGroups\_Notes tables accessible under the job’s Results node

In addition to the table created by the analysis task, the AD\_DeprovisionGroups\_Status Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Deprovisioning | This report tracks actions taken each day of the Stale Group Deprovisioning campaign. | None | This report is comprised of three elements:   - Line Chart – Displays cleanup progress - Table – Provides details on cleanup progress - Table – Provides action details |

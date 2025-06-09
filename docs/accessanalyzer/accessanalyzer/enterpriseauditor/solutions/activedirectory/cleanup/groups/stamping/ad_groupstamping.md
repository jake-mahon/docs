# AD\_GroupStamping Job

The AD\_GroupStamping Job updates the Notes attribute for all security groups to show where the group is provisioned inside the environment. This overwrites the notes field with data from Access Analyzer.

## Analysis Tasks for the AD\_GroupStamping Job

Navigate to the __Active Directory__ > __Cleanup__ > __1.Groups__ > __2. Group Stamping AD\_GroupStamping__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_GroupStamping Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/cleanup/groups/stamping/groupstampinganalysis.png)

The default analysis tasks are:

- Identify Stale Groups – Creates the AD\_DeprovisionGroups\_Details table accessible under the job’s Results node
- Groups to Delete – Identifies groups in the Stale Groups OU ready to be deleted

In addition to the tables and views created by the analysis tasks, the AD\_GroupStamping Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Stamping | This report tracks all actions taken with the included group stamping workflow. | None | This report is comprised of three elements:   - Line Chart – Displays daily actions - Table – Provides details on daily actions - Table – Provides action details |

## Action Tasks for the AD\_GroupStamping Job

View the action tasks by navigating to the __Active Directory__ > __Cleanup__ >  __1.Groups__ > __2. Group Stamping AD\_GroupStamping__ > __Configure__ node and select __Actions__.

![Action Tasks for the AD_GroupStamping Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/cleanup/groups/stamping/groupstampingaction.png)

- Stamp Groups – Update Notes field with Permissions

Select the checkbox next to The Stamp Groups Action Task and click __Execute Action__ to execute the action task.

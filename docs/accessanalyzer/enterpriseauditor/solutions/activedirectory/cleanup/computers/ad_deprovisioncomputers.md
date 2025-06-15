# AD_DeprovisionComputers Job

The AD_DeprovisionComputers Job provides a simple automated workflow deprovision stale computers.

__Step 1 –__ Move stale computers to a staging OU for deletion.

__Step 2 –__ The assigned manager is alerted by email of the impending deletion.

__Step 3 –__ Disables computer accounts.

__Step 4 –__ After a configurable amount of days in the staging OU, deletes computers from the staging OU. The default is 365 days.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](../../../../admin/jobs/job/overview.md#parameter-configuration) topic for instructions on how to edit parameters on a job overview page.

The AD_DeprovisionComputers page has the following configurable parameters:

- Days in the Staging OU before Deleting Account

See the [Customizable Analysis Parameters for the AD_DeprovisionComputers Job](#customizable-analysis-parameters-for-the-ad_deprovisioncomputers-job) topic for additional information.

## Analysis Tasks for the AD_DeprovisionComputers Job

Navigate to the __Active Directory__ > __Cleanup__ > __3.Computers__ > __AD_Deprovision Computers__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

![Analysis Tasks for the AD_DeprovisionComputers Job](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/cleanup/computers/deprovisioncomputersanalysis.webp)

The default analysis tasks are:

- Identify Stale Computers – Creates the AD_DeprovisionComputers_Details table accessible under the job’s Results node
- Computer Accounts to Delete – Creates the AD_DeprovisionComputers_ToBeDeleted table accessible under the job’s Results node

  - This analysis task contains a configurable parameter: ```@days_before_deleting```. See the [Customizable Analysis Parameters for the AD_DeprovisionComputers Job](#customizable-analysis-parameters-for-the-ad_deprovisioncomputers-job) topic for additional information.

### Customizable Analysis Parameters for the AD_DeprovisionComputers Job

Customizable parameters enable you to set the values used to classify user and group objects during this job’s analysis.

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| Computer Accounts to Delete | @days_before_deleting | 365 | Days in the staging OU before deleting account |

See the [Configure the Customizable Parameters in an Analysis Task](../../../../admin/jobs/job/configure/analysiscustomizableparameters.md) topic for additional information.

## Action Tasks for the AD_DeprovisionComputers Job

Navigate to the __Active Directory__ > __Cleanup__ > __3.Computers__ > __AD_DeprovisionComputers__ > __Configure__ node and select __Actions__ to view the actions.

__CAUTION:__ Do not enable the actions unless it is required. Disable the actions after execution to prevent making unintended and potentially harmful changes to Active Directory.

![Action Tasks for the AD_DeprovisionComputers Job](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/cleanup/computers/deprovisioncomputersaction.webp)

The action tasks are:

__CAUTION:__ The action tasks must be executed together and in order.

- Move Computers – Move computers to staging OU for deletion

  - The target staging OU must be set in the Move Computers Action Task prior to executing the action tasks. See the [Configure the Target OU](../configuretargetou.md) topic for additional information.
- Notify Manager – Notify assigned manager by email of the impending deletion
- Disable Computers – Disable computer accounts
- Delete Computers – Delete computers from staging OU

After the ```@days_before_deleting``` analysis parameter has been configured and the target OU has been set in the Move Computers Action Task, select the checkboxes next to all of the action tasks and click __Execute Action__ to execute the action tasks.

# AD\_DeprovisionUsers Job

The AD\_DeprovisionUsers Job provides an automated workflow deprovision stale and unused user accounts.

__Step 1 –__ Move stale users to a staging OU for deletion.

__Step 2 –__ The assigned manager is alerted by email of the impending deletion.

__Step 3 –__ User accounts are disabled.

__Step 4 –__ Users are flagged as __To Be Deleted__.

__Step 5 –__ Delete users from the staging OU.

__Step 6 –__ Remove stale users from all groups.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/overview.md#Parameter-Configuration) topic for instructions on how to edit parameters on a job overview page.

The AD\_DeprovisionUsers page has the following configurable parameters:

- Days in the Stale Users OU before being deleted

See the [Customizable Analysis Parameters for the AD\_DeprovisionUsers Job](#Customizable-Analysis-Parameters-for-the-AD_DeprovisionUsers-Job) topic for additional information.

## Analysis Tasks for the AD\_DeprovisionUsers Job

Navigate to the __Active Directory__ > __Cleanup__ > __2.Users__ > __AD\_DeprovisionUsers__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

![Analysis Tasks for the AD_DeprovisionUsers Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/cleanup/users/deprovisionusersanalysis.png)

The default analysis tasks are:

- Identify Users to be Deleted – Imports data from stale users
- User Accounts to Delete – Identifies accounts in the Stale Accounts OU that are ready to be deleted

  - This analysis task contains a configurable parameter: ```@days_before_deleting```. See the [Customizable Analysis Parameters for the AD\_DeprovisionUsers Job](#Customizable-Analysis-Parameters-for-the-AD_DeprovisionUsers-Job) topic for additional information.
- Identify Group Membership – Identifies stale user membership to remove

### Customizable Analysis Parameters for the AD\_DeprovisionUsers Job

Customizable parameters enable you to set the values used to classify user and group objects during this job’s analysis.

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| User Accounts to Delete | @days\_before\_deleting | 365 | Days in the Stale Users OU before being deleted |

See the [Configure the Customizable Parameters in an Analysis Task](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md) topic for additional information.

## Action Tasks for the AD\_DeprovisionUsers Job

Navigate to the __Active Directory__ > __Cleanup__ > __2.Users__ > __AD\_DeprovisionUsers__ > __Configure__ node and select __Actions__ to view the actions.

__CAUTION:__ Do not enable the actions unless it is required. Disable the actions after execution to prevent making unintended and potentially harmful changes to Active Directory.

![Action Tasks for the AD_DeprovisionUsers Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/cleanup/users/deprovisionusersaction.png)

The action tasks are:

__CAUTION:__ The action tasks must be executed together and in order.

- Move Users – Move users to staging OU for deletion

  - The target OU must be set in the Move Users Action Task prior to executing the action tasks. See the [Configure the Target OU](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/cleanup/configuretargetou.md) topic for additional information.
- Notify Manager – Notify assigned manager by email of the impending deletion
- Disable Users – Disable user accounts
- Update Description – Flag users as __To Be Deleted__
- Delete Users – Delete users from staging OU
- Remove Membership – Remove stale users from all groups

After the ```@days_before_deleting``` analysis parameter has been configured and the target OU has been set in the Move Users Action Task, select the checkboxes next to all of the action tasks and click __Execute Action__ to execute the action tasks.

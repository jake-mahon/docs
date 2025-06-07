# AWS\_UnusedManagedPolicies Job

The AWS\_UnusedManagedPolicies job provides details on customer managed policies that exist in the AWS Organization. Optionally, AWS managed policies can be included by changing the parameter for the analysis task.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/overview.md#Parameter-Configuration) topic for instructions on how to edit parameters on a job overview page.

The AWS\_UnusedManagedPolicies job has the following configurable parameter:

- True or False value to include policies managed by AWS

See the [Customizable Analysis Tasks for the AWS\_UnusedManagedPolicies Job](#Customizable-Analysis-Tasks-for-the-AWS_UnusedManagedPolicies-Job) topic for additional information.

## Analysis Tasks for the AWS\_UnusedManagedPolicies Job

Navigate to the __AWS__ > __5.Policies__ > __AWS\_UnusedManagedPolicies__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not deselect the selected analysis tasks. The analysis tasks are preconfigured for this job. Only modify the analysis tasks listed in the customizable analysis tasks section.

![Analysis Tasks for the AWS_UnusedManagedPolicies Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/aws/policies/unusedmanagedpoliciesanalysis.png)

The following analysis tasks are selected by default:

- Unused Managed Policies – Policies not assigned to any group or user. Creates the AWS\_UnusedPolicies\_Details table accessible under the job’s Results node.

  - Optionally, AWS managed policies can be included by setting the parameter to True. See the [Customizable Analysis Tasks for the AWS\_UnusedManagedPolicies Job](#Customizable-Analysis-Tasks-for-the-AWS_UnusedManagedPolicies-Job) topic for additional information.
- Unused Managed Policy Summary – Summary by AWS Organization of unused managed policies. Creates the AWS\_UnusedPolicies\_Summary table accessible under the job’s Results node.

### Customizable Analysis Tasks for the AWS\_UnusedManagedPolicies Job

The default values for parameters that can be customized are:

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| Unused Managed Policies | @IncludeAWSManaged | False | True or False value to include policies managed by AWS. |

See the [Configure the Customizable Parameters in an Analysis Task](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md) topic for instructions on how to modify parameters.

## Report for the AWS\_UnusedManagedPolicies Job

In addition to the tables and views created by the analysis task, the AWS\_UnusedManagedPolicies job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Unused Managed Policies | This report identifies policies that are not assigned to any group or user. | None | This report is comprised of the following elements:   - Stacked Bar Chart – Displays unused managed policies by account - Table – Shows unused managed policies by account - Table – Provides details on unused managed policies |

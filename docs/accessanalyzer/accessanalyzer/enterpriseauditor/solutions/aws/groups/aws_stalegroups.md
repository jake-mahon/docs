# AWS\_StaleGroups Job

The AWS\_StaleGroups job highlights groups that have members that are considered stale. The definition for staleness is set by default to 60 days. This can be configured.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/overview.md#Parameter-Configuration) topic for instructions on how to edit parameters on a job overview page.

The AWS\_StaleGroups job has the following configurable parameter:

- Days without login to consider an account stale

See the [Customizable Analysis Tasks for the AWS\_StaleGroups Job](#Customizable-Analysis-Tasks-for-the-AWS_StaleGroups-Job) topic for additional information.

## Analysis Tasks for the AWS\_StaleGroups Job

Navigate to the __AWS__ > __3.Groups__ > __AWS\_StaleGroups__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not deselect the selected analysis tasks. The analysis tasks are preconfigured for this job. Only modify the analysis tasks listed in the customizable analysis tasks section.

![Analysis Tasks for the AWS_StaleGroups Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/distributionlists/membershipanalysis/stalegroupsanalysis.png)

The following analysis tasks are selected by default:

- Stale Group Details – Highlights the staleness of users in AWS groups. Creates the AWS\_StaleGroup\_Details table accessible under the job’s Results node.

  - The number of days without login to consider an account stale can be customized. By default it is set to 60. See the [Customizable Analysis Tasks for the AWS\_StaleGroups Job](#Customizable-Analysis-Tasks-for-the-AWS_StaleGroups-Job) topic for additional information.
- Stale Group Summary – Summarizes statistics for stale groups. Creates the AWS\_StaleGroup\_Summary table accessible under the job’s Results node.
- Stale Groups AWS Summary – Summarizes stale groups by percentile for all of AWS

### Customizable Analysis Tasks for the AWS\_StaleGroups Job

The default values for parameters that can be customized are:

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| Stale Group Details | @StaleThreshold | 60 | Days without login to consider an account stale |

See the [Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md) topic for instructions on how to modify parameters.

## Report for the AWS\_StaleGroups Job

In addition to the tables and views created by the analysis task, the AWS\_StaleGroups job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Stale Groups | This report determines the staleness of group membership. | None | This report is comprised of the following elements:   - Stacked Bar Chart – Displays group membership - Table – Shows group membership - Table – Provides details on group membership |

# AWS\_StaleRoles Job

The AWS\_StaleRoles job provides details on roles that are considered stale. Highlighting roles that have not been used in more than 60 days and those that have never been used. The 60 day parameter is configurable.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/overview.md#Parameter-Configuration) topic for instructions on how to edit parameters on a job overview page.

The AWS\_StaleRoles job has the following configurable parameter:

- Days without login to consider an account stale

See the [Customizable Analysis Tasks for the AWS\_StaleRoles Job](#Customizable-Analysis-Tasks-for-the-AWS_StaleRoles-Job) topic for additional information.

## Analysis Tasks for the AWS\_StaleRoles Job

Navigate to the __AWS__ > __4.Roles__ > __AWS\_StaleRoles__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not deselect the selected analysis tasks. The analysis tasks are preconfigured for this job. Only modify the analysis tasks listed in the customizable analysis tasks section.

![Analysis Tasks for the AWS_StaleRoles Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/aws/roles/stalerolesanalysis.png)

The following analysis tasks are selected by default:

- Stale Role Details – Highlights the roles in AWS that are considered stale. Creates the AWS\_StaleRole\_Details table accessible under the job’s Results node.

  - The number of days without login to consider an account stale can be customized. By default it is set to 60. See the [Customizable Analysis Tasks for the AWS\_StaleRoles Job](#Customizable-Analysis-Tasks-for-the-AWS_StaleRoles-Job) topic for additional information.
- Stale Role Summary – Summarizes stale roles by AWS Account. Creates the AWS\_StaleRole\_Summary table accessible under the job’s Results node.

### Customizable Analysis Tasks for the AWS\_StaleRoles Job

The default values for parameters that can be customized are:

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| Stale Role Details | @StaleThreshold | 60 | Days without login to consider an account stale. |

See the [Configure the Customizable Parameters in an Analysis Task](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md) topic for instructions on how to modify parameters.

## Report for the AWS\_StaleRoles Job

In addition to the tables and views created by the analysis task, the AWS\_StaleRoles job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Stale Roles | This report identifies stale roles in the AWS environment. | None | This report is comprised of the following elements:   - Stacked Bar Chart – Displays top stale roles by account - Table – Shows stales roles by account - Table – Provides details on stale roles |

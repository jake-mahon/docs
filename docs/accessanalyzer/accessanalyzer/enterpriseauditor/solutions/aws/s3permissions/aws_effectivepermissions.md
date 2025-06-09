# AWS\_EffectivePermissions Job

The AWS\_EffectivePermissions job identifies and summarizes effective permissions on AWS S3 buckets and bucket objects.

## Analysis Tasks for the AWS\_Accounts Job

Navigate to the __AWS__ > __6.S3 Permissions__ > __AWS\_EffectivePermissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AWS_Accounts Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/db2/permissions/effectivepermissionsanalysis.png)

The following analysis tasks are selected by default:

- S3 Bucket Effective Permissions – AWS S3 Bucket effective permissions for each identity. Creates the AWS\_EffectiveBucketPermissions\_Details table accessible under the job’s Results node.
- S3 Bucket Effective Permission Summary – Summarizes permission counts across AWS S3 Buckets. Creates the AWS\_EffectiveBucketPermissions\_Summary table accessible under the job’s Results node.

## Report for the AWS\_EffectivePermissions Job

In addition to the tables and views created by the analysis task, the AWS\_EffectivePermissions job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Effective Permissions | This report identifies and summarizes effective permissions on AWS S3 Buckets. | None | This report is comprised of the following elements:   - Stacked Bar Chart – Displays top buckets by effective permissions - Table – Shows buckets by effective permissions - Table – Provides details on effective permissions |

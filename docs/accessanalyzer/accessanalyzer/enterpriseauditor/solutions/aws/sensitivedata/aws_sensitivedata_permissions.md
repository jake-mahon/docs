# AWS\_SensitiveData\_Permissions Job

The AWS\_SensitiveData\_Permissions job provides details on the permissions assigned to AWS S3 buckets and the objects in them which contain sensitive data.

## Analysis Tasks for the AWS\_SensitiveData\_Permissions Job

Navigate to the __AWS__ > __8.S3 Sensitive Data__ > __AWS\_SensitiveData\_Permissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AWS_SensitiveData_Permissions Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/db2/sensitivedata/sensitivedatapermissionsanalysis.png)

The following analysis tasks are selected by default:

- AWS Sensitive Data Permissions – Highlights permissions applied to AWS objects containing sensitive data. Creates the AWS\_SDDPermission\_Details table accessible under the job’s Results node.
- Sensitive Data Permissions Summary – Summarizes permissions on AWS objects containing sensitive data. Creates the AWS\_SDDPermission\_BucketSummary table accessible under the job’s Results node.

## Report for the AWS\_SensitiveData\_Permissions Job

In addition to the tables and views created by the analysis task, the AWS\_SensitiveData\_Permissions job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Sensitive Data Permissions | This report identifies permissions on AWS objects containing sensitive data. | Sensitive Data | This report is comprised of the following elements:   - Stacked Bar Chart – Displays top buckets by permissions on sensitive data - Table – Shows buckets by permissions on sensitive data - Table – Provides details on sensitive data permissions |

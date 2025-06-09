# AWS\_OpenBuckets Job

The AWS\_OpenBuckets job identifies buckets that have permissions assigned to everyone at the top level of the AWS S3 bucket.

## Analysis Task for the AWS\_OpenBuckets Job

Navigate to the __AWS__ > __6.S3 Permissions__ > __AWS\_OpenBuckets__ > __Configure__ node and select __Analysis__ to view the analysis task.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Task for the AWS_OpenBuckets Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/aws/s3permissions/openbucketsanalysis.png)

The following analysis task is selected by default:

- Open Bucket Permissions – Permissions applied to AWS S3 buckets across all users. Creates the AWS\_OpenBucket\_Details table accessible under the job’s Results node.

## Report for the AWS\_OpenBuckets Job

In addition to the tables and views created by the analysis task, the AWS\_OpenBuckets job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Open Buckets | This report identifies AWS S3 Open Buckets. | None | This report is comprised of the following elements:   - Stacked Bar Chart – Displays largest open buckets - Table – Shows largest open buckets - Table – Provides details on open buckets |

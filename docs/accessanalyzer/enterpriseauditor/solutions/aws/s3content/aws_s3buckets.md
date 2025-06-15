# AWS_S3Buckets Job

The AWS_S3Buckets job provides a summary of AWS S3 buckets including total object size and counts.

## Analysis Task for the AWS_S3Buckets Job

Navigate to the __AWS__ > __7.S3 Content__ > __AWS_S3Buckets__ > __Configure__ node and select __Analysis__ to view the analysis task.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Task for the AWS_S3Buckets Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/aws/s3content/s3bucketsanalysis.webp)

The following analysis task is selected by default:

- S3 Buckets – S3 Bucket details. Creates the AWS_Bucket_Details table accessible under the job’s Results node.

## Report for the AWS_S3Buckets Job

In addition to the tables and views created by the analysis task, the AWS_S3Buckets job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| S3 Buckets | This report summarizes AWS S3 Bucket content. | None | This report is comprised of the following elements:   - Stacked Bar Chart – Displays top five buckets by size - Table – Shows buckets by size - Table – Provides details on buckets |

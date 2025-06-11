# AWS\_BrokenInheritance Job

The AWS\_BrokenInheritance job highlights permissions in an AWS S3 bucket that differ from those assigned at the bucket level, those assigned directly on objects within the bucket.

## Analysis Tasks for the AWS\_BrokenInheritance Job

Navigate to the __AWS__ > __6.S3 Permissions__ > __AWS\_BrokenInheritance__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AWS_BrokenInheritance Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/brokeninheritanceanalysis.webp)

The following analysis tasks are selected by default:

- Broken Inheritance – Permissions applied directly to AWS S3 Bucket Objects. Creates the AWS\_BrokenInheritance\_Details table accessible under the job’s Results node.
- Broken Inheritance Summary – Summarizes permissions applied directly to AWS S3 Bucket Objects. Creates the AWS\_BrokenInheritance\_Summary table accessible under the job’s Results node.

## Report for the AWS\_BrokenInheritance Job

In addition to the tables and views created by the analysis task, the AWS\_BrokenInheritance job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Broken Inheritance | This report identifies permissions applied directly on files in AWS S3 Buckets. | None | This report is comprised of the following elements:   - Stacked Bar Chart – Displays top buckets by broken inheritance - Table – Shows buckets by broken inheritance - Table – Provides details on broken inheritance |

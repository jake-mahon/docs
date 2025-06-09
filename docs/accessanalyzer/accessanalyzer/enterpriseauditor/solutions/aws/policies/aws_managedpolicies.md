# AWS\_ManagedPolicies Job

The AWS\_ManagedPolicies job provides details on policies managed by Amazon in the AWS Organization.

## Analysis Tasks for the AWS\_ManagedPolicies Job

Navigate to the __AWS__ > __5.Policies__ > __AWS\_ManagedPolicies__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AWS_ManagedPolicies Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/aws/policies/managedpoliciesanalysis.png)

The following analysis tasks are selected by default:

- Managed Policy Details – Identifies managed policies from AWS and if they are assigned to a user or group. Creates the AWS\_ManagedPolicy\_Details table accessible under the job’s Results node.
- Managed Policy Usage Summary – Summarizes the managed policy usage by AWS Org. Creates the AWS\_ManagedPolicy\_Summary table accessible under the job’s Results node.

## Report for the AWS\_ManagedPolicies Job

In addition to the tables and views created by the analysis task, the AWS\_Accounts job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| AWS Managed Policies | This report analyzes AWS Managed Policies and their usage. | None | This report is comprised of the following elements:   - Stacked Bar Chart – Displays AWS managed policies by account - Table – Shows AWS managed policies by account - Table – Provides details on AWS managed policies |

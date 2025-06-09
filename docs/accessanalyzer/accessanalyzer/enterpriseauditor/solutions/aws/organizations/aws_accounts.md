# AWS\_Accounts Job

The AWS\_Accounts job provides detailed information about the accounts that exist in each AWS Organization. This job also determines the AWS Master Account for each Organization. The AWS Master Account can be set manually by adding a line for each Organization in the temporary table #IdentitySourceAccount in the analysis task parameters for this job.

## Analysis Tasks for the AWS\_Accounts Job

Navigate to the __AWS__ > __1.Organizations__ > __AWS\_Accounts__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AWS_Accounts Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/aws/organizations/accountsanalysis.png)

The following analysis tasks are selected by default:

- AWS Account Details – Provides details for the AWS IAM accounts in the organization. Creates the AWS\_Account\_Details table accessible under the job’s Results node.
- AWS Account Summary – Summarizes AWS Accounts by organization. Creates the AWS\_Account\_Summary table accessible under the job’s Results node.

## Report for the AWS\_Accounts Job

In addition to the tables and views created by the analysis task, the AWS\_Accounts job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Accounts | This report provides details on the IAM Accounts in the AWS Organization. | None | This report is comprised of the following elements:   - Stacked Bar Chart – Displays top accounts by org - Table – Shows accounts by Org - Table – Provides details on accounts |

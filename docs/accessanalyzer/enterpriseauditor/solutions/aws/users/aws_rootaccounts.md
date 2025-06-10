# AWS\_RootAccounts Job

The AWS\_RootAccounts job provides details on AWS root accounts and how they conform to recommended security practices.

## Analysis Tasks for the AWS\_RootAccounts Job

Navigate to the __AWS__ > __2.Users__ > __AWS\_RootAccounts__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AWS_RootAccounts Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/aws/users/rootaccountsanalysis.webp)

The following analysis tasks are selected by default:

- Root Account Security Details – Provides details on the credentials and their usage for the AWS root account in each account. Creates the AWS\_RootAccountSecurity\_Details table accessible under the job’s Results node.
- Root Account Risk Assessment – Highlights security risks on AWS root accounts. Creates the AWS\_RootAccountSecurity\_RiskAssessment table accessible under the job’s Results node.
- Root Account Security Summary – Summarizes risks on the root account. Creates the AWS\_RootAccountSecurity\_Summary table accessible under the job’s Results node.

## Report for the AWS\_RootAccounts Job

In addition to the tables and views created by the analysis task, the AWS\_RootAccounts job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Root Account Security | This report highlights security risks on AWS Root Accounts. | None | This report is comprised of the following elements:   - Stacked Bar Chart – Displays top account security by org - Table – Shows account security by Org - Table – Provides details on risk assessment - Table – Provides details on account security |

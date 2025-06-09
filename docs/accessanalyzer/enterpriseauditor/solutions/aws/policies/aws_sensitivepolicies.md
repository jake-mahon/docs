# AWS\_SensitivePolicies Job

The AWS\_SensitivePolicies job provides details on users, groups, and roles as well as the policies granting them sensitive permissions.

## Analysis Tasks for the AWS\_SensitivePolicies Job

Navigate to the __AWS__ > __5.Policies__ > __AWS\_SensitivePolicies__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AWS_SensitivePolicies Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/aws/policies/sensitivepoliciesanalysis.png)

The following analysis tasks are selected by default:

- Sensitive Managed Policy Details – Provides details on AWS Sensitive Managed Policies. Creates the AWS\_SensitiveManagedPolicies\_Details table accessible under the job’s Results node.
- Sensitive Inline Policy Details – Provides details on AWS Sensitive Inline Policies. Creates the AWS\_SensitiveInlinePolicies\_Details table accessible under the job’s Results node.
- Sensitive Managed Policy Summary – Summarizes AWS Sensitive Managed Policies by organization. Creates the AWS\_SensitiveManagedPolicies\_Summary table accessible under the job’s Results node.
- Sensitive Inline Policy Summary – Summarizes AWS Sensitive Inlin Policies by organization. Creates the AWS\_SensitiveInlinePolicies\_Summary table accessible under the job’s Results node.

## Reports for the AWS\_SensitivePolicies Job

In addition to the tables and views created by the analysis task, the AWS\_SensitivePolicies job produces the following preconfigured report:

| Report | Description | Default Tags | Report Element |
| --- | --- | --- | --- |
| Sensitive Inline Policies | This report highlights users, groups, and roles with a sensitive inline policy assigned. | None | This report is comprised of the following elements:   - Stacked Bar Chart – Displays sensitive policy assignments by org - Table – Shows sensitive policy assignments by org - Table – Provides details on sensitive policy assignments |
| Sensitive Managed Policies | This report highlights users, groups, and roles with a sensitive managed policy assigned. | None | This report is comprised of the following elements:   - Stacked Bar Chart – Displays sensitive managed policy assignments by org - Table – Shows sensitive managed policy assignments by org - Table – Provides details on sensitive managed policy assignments |

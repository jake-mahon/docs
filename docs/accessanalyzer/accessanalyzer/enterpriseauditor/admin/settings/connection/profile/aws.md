# Amazon Web Services for User Credentials

The information in this section applies to __Select Account Type > Amazon Web Services__ account type in the User Credentials window.

![User Credentials Window - AWS](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/connection/profile/connectionaws.png)

The required credentials for Amazon Web Services are:

- Access Key ID — Used to sign programmatic requests made to AWS. If access keys are not available, create them with the IAM console.
- Password Storage: Application – Uses the configured Profile Security setting as selected at the __Settings >__ __Application__ node
- Secret Key — Used to sign programmatic requests made to AWS. If secret keys are not available, create them with the IAM console.
- Scan Roles — Role used to scan other organization accounts

## Create a Connection Profile for AWS

A new connection profile will need to be created to be leveraged in the AWS Solution.

__Step 1 –__ Under Settings > Connection, click Add Connection profile.

__Step 2 –__ Click Add User credential and select the Amazon Web Services account type.

__Step 3 –__ Input the Access Key ID into the Username section, and the Secret Access Key into the Access Token section.

_Remember,_ these are obtained from AWS when the permissions are configured. See the [Configure AWS for Scans](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/config/aws.md) topic for additional information.

__Step 4 –__ Click OK in the User Credentials modal, name the Connection Profile, and click Save.

This connection profile can now be assigned to the AWS Solution.

# Configure AWS for Scans

In order to scan multiple AWS accounts using one account you need to create a role in each target account, so that It can provide the designated scanning account permissions to scan resources it controls. This is achieved through the following steps which will need to be completed leveraging a user with administrative access to each target account:

__Step 1 –__ Create a Managed Policy in each target account that will be used to allow access to account (S3, Org and IAM).

__Step 2 –__ Create a Role in each target account that will be used to allow access to listing IAM users.

__Step 3 –__ Create a Managed Policy in the designated scanning account that will be used to allow the service account to assume the configured role in each target account.

__Step 4 –__ Add Role to Access Analyzer. The Role created in the scanning account will need to be added to the __1-AWS_OrgScan__, __2-AWS_S3Scan__, and __3-AWS_IAMScan__ job query configurations. See the [AWS: Login Roles](../../../admin/datacollector/aws/loginroles.md) topic for additional information.

Once these steps are completed, the role must be added to the AWS queries within Access Analyzer.

## Create a Managed Policy in Each Target Account

The following steps will need to be completed in each target account.

__Step 1 –__ Sign into the Identity and Access Management Console (IAM) as an administrator of the Trusting account.

![Create policy in Identity and Access Management (IAM) Console](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/requirements/target/config/policies.webp)

__Step 2 –__ Browse to the Identity and Access Management (IAM) Console. Navigate to __Policies__ and click __Create policy__.

![JSON tab in the Policy editor](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/requirements/target/config/jsontabpolicies.webp)

__Step 3 –__ Select the __JSON__ tab.

__Step 4 –__ Paste the following:

```
{  
    "Version": "2012-10-17",  
    "Statement": [  
        {  
            "Sid": "CapabilityIamScan",  
            "Effect": "Allow",  
            "Action": [  
                "iam:GenerateCredentialReport",  
                "iam:GenerateServiceLastAccessedDetails",  
                "iam:Get*",  
                "iam:List*",  
                "iam:Simulate*",  
        "sts:GetAccessKeyInfo"  
            ],  
            "Resource": "*"  
        },  
        {  
            "Sid": "CapabilityS3Scan",  
            "Effect": "Allow",  
            "Action": [  
                "s3:Describe*",  
                "s3:Get*",  
                "s3:HeadBucket",  
                "s3:List*"  
            ],  
            "Resource": "*"  
        }  
    ]  
}
```

__Step 5 –__ Click __Review Policy__.

__Step 6 –__ Enter a name for the policy in the __Name__ box.

![Review policy page](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/requirements/target/config/reviewpolicy.webp)

__Step 7 –__ Click __Create Policy__.

__NOTE:__ If the designated scanning account is not in Root (Master Account), create a second policy in the Master Account with the following JSON definition:

[Copy](javascript:void(0);)

```
{  
    "Version": "2012-10-17",  
    "Statement": [  
        {  
            "Sid": "RequiredCapabilityOrgScan",  
            "Effect": "Allow",  
            "Action": [  
                "iam:GenerateOrganizationsAccessReport",  
                "organizations:Describe*",  
                "organizations:List*"  
            ],  
            "Resource": "*"  
        }  
    ]  
}
```

The next step is to create a role in each target account that will be used to allow access to listing IAM users.

## Create a Role in Each Target Account

The following steps will need to be completed in each target account. For this, you will need the Account ID of the designating scanning account.

__NOTE:__ If the scanning account is also a target account, be sure to complete these steps for the scanning account as well.

__Step 1 –__ Sign into the Identity and Access Management Console (IAM) as an administrator of the target account.

![Create role in Identity and Access Management (IAM) Console](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/requirements/target/config/roles.webp)

__Step 2 –__ Navigate to __Access management__ > __Roles__ and click __Create role__.

![Create role page Another AWS account option](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/requirements/target/config/createrole.webp)

__Step 3 –__ Select the __Another AWS Account__ option and add the Account ID of the scanning account that will be leveraged within Access Analyzer.

__Step 4 –__ Click __Next: Permissions__.

![Add policies to role](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/requirements/target/config/policiesadd.webp)

__Step 5 –__ Add the policy or policies created earlier in this topic to this role.

__Step 6 –__ Click __Next: Tags__.

__Step 7 –__ Click __Next: Review__.

![Create role Review page](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/requirements/target/config/reviewrole.webp)

__Step 8 –__ Enter a __Role name__.

__Step 9 –__ Click __Create Role__.

The next step is to create a Managed Policy in the designated scanning account that will be used to allow the service account to assume the configured role in each target account.

## Configure the Scanning Account

Create a Managed Policy in the scanning account that will be used to allow the user to assume the roles configured in each target account.

__Step 1 –__ Sign into the Identity and Access Management Console (IAM) as an administrator of the scanning account.

![Create policy in Identity and Access Management (IAM) Console](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/requirements/target/config/policies.webp)

__Step 2 –__ Navigate to __Access Management__ > __Policies__ and click __Create policy__.

![JSON tab in the Policy editor](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/requirements/target/config/jsontabaccount.webp)

__Step 3 –__ Select the __JSON__ tab.

__Step 4 –__ Paste the following:

```
{  
    "Version": "2012-10-17",  
    "Statement": [  
        {  
            "Sid": "RequiredCapabilityOrgScan",  
            "Effect": "Allow",  
            "Action": [  
                "iam:GenerateOrganizationsAccessReport",  
                "organizations:Describe*",  
                "organizations:List*"  
            ],  
            "Resource": "*"  
        },  
        {  
            "Sid": "RequiredCapabilityMemberAccountAccess",  
            "Effect": "Allow",  
            "Action": "sts:AssumeRole",  
            "Resource": "arn:aws:iam::*:role/ROLENAME"  
        }  
    ]  
}
```

__NOTE:__ Replace ```ROLENAME``` with the name of the role that was created. If the ```ROLENAME``` is different in each account, then a policy will need to be created for each distinct role name.

__Step 5 –__ Click __Review Policy__.

![Review policy page Name field](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/requirements/target/config/reviewpolicyaccount.webp)

__Step 6 –__ Enter a __Policy Name__.

__Step 7 –__ Click __Create Policy__.

__Step 8 –__ Create a group with the service account user and assign both policies to this group.

__Step 9 –__ Under __Access Management__ > __Users__, select the service account user.

![Security credentials tab](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/requirements/target/config/securitycredentials.webp)

__Step 10 –__ In the Security credentials tab, click __Create access key__. Make sure to note the Access key ID and Secret access key which need to be input into Access Analyzer.

You can now create the Connection Profile for the AWS Solution. See the [Amazon Web Services for User Credentials](../../../admin/settings/connection/profile/aws.md) topic for additional information.

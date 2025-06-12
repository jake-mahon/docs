# Permissions for SharePoint Auditing

Before you start creating a monitoring plan to audit your SharePoint farm, plan for the account that will be used for data collection – it should meet the requirements listed below. Then you will provide this account in the monitoring plan wizard.

Starting with version 9.96, you can use group Managed Service Accounts (gMSA) as data collecting accounts.

For more information on gMSA, refer to [Use Group Managed Service Account (gMSA)](/versioned_docs/auditor_10.6/auditor/requirements/gmsa.md)[Microsoft documentation](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview).

These group Managed Service Accounts should meet the related requirements.

__On the target SharePoint farm:__

1. On the SharePoint server where the Netwrix Auditor Core Service will be deployed: the account must be a member of the local Administrators group.   
   To learn more about Netwrix Auditor Core Services, refer to [Installation](/versioned_docs/auditor_10.6/auditor/install/overview.md) topic.
2. On the SQL Server hosting SharePoint database: the SharePoint\_Shell\_Access role.   
   See the [Assigning 'SharePoint\_Shell\_Access' Role](#Assigning-SharePoint_Shell_Access-Role) topic for additional information.
3. If you plan to collect state-in-time data from a SharePoint farm, the account should also meet the requirements below:
   - For site collection processing — lock status for this account must differ from _No access_
   - For web application processing — the following permissions must be assigned to this account:
     - Open items
     - View items
     - Browse directories
     - View pages
     - Browse user information
     - Open
     - Enumerate permissions

## Assigning 'SharePoint\_Shell\_Access' Role

The account that runs Netwrix Auditor for SharePoint Core Service installation must be granted the SharePoint\_Shell\_Access role on SharePoint SQL Server configuration database. If you select to deploy the Netwrix Auditor for SharePoint Core Service automatically when configuring auditing in Netwrix Auditor, the installation will be performed under the account specified for data collection.

1. In your SharePoint server, click Start → Microsoft SharePoint Products <version> SharePoint Management Shell.
2. Execute the following command:

    ```Add-SPShellAdmin –UserName <domain\user>```

## Define Log On As a Service Policy

On the SharePoint monitoring plan creation, the Log on as a service policy is automatically defined for the Data Processing Account as a local security policy. However, if you have the Deny log on as a service policy defined locally or on the domain level, the local Log on as a service policy will be reset. In this case, redefine the Deny log on as a service policy through the Local Security Policy console on your computer or on the domain level through the Group Policy Management console.

Follow the steps to define log on as a service policy:

__Step 1 –__ On the computer where Auditor Server is installed, open the __Local Security Policy__ snap-in: navigate to Start > Windows Administrative Tools and select Local Security Policy.

__Step 2 –__ Navigate to __Security Settings > Local Policies > User Rights Assignment__ and locate the __Log on as a service__ policy.

__Step 3 –__ Double-click the __Log on as a service__ policy, and click __Add User or Group__. Specify the account that you want to define this policy for.

The Log On is now defined as a policy.

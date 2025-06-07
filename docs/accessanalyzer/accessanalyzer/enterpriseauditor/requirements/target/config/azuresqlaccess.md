# Azure SQL Auditing Configuration

Access Analyzer for Azure SQL relies on the native Azure SQL auditing capabilities to collect and report on user activity, as well as successful or unsuccessful server or database logon activity. Azure SQL Auditing supports three different audit log destinations. At present Access Analyzer only supports storage as the audit log destination. This document describes the necessary permissions required to configure the Access Analyzer Azure SQL Job Group.

Access Analyzerfor Azure SQL enables users to create custom roles which allow for differential access to Access Analyzer.

Within Access Analyzer for Azure SQL, roles are created specifically to target Azure SQL Databases:

- Stand-Alone Databases
- Managed Instances
- Elastic Pools

Role can be largely defined by the scope that particular role possesses. A scope-defined role has access to, or is limited to all resources in a Management Group, Subscription, Resource Group or Resource. For example, if all SQL databases reside within a resource group, then the scope can be restricted to that resource group. If databases reside in different resource groups, then the scope for the custom role should be at the subscription level.

This will enable Access Analyzer to discover all the SQL databases present in the subscription.

## Create a StealthAUDIT Custom Role

Follow the steps below to create an Azure SQL custom role at the subscription level.

![Azure Portal - Azure Services](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/config/azuresqlperm_customrolecreation_1.png)

__Step 1 –__ Sign in to Azure. Navigate to the Azure Services section and click __Subscriptions__. This will navigate you to the Pay-As-You-Go page of the Azure Portal.

__Step 2 –__ Locate and click the __Access Control (IAM)__ view option blade from the available subscriptions in the left-hand menu.

![Azure Portal - Pay as you Go - Access Control (IAM)](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/config/azuresqlperm_customrolecreation_2.png)

__Step 3 –__ Click __Add__ > Add __Custom Role__.

__Step 4 –__ Create a JSON file using the subscription ID provided by Microsoft Azure (see the example below) and save it to a local directory.

{

"properties": {

"roleName": "StealthAUDIT Azure SQL Role",

"description": "This is a custom role created for use by StealthAUDIT Azure SQL Job Group for Azure SQL Database discovery and auditing",

"assignableScopes": ["/subscriptions/<Your Subscription ID goes here>"],

"permissions": [

{

"actions": [

"Microsoft.Authorization/\*/read",

"Microsoft.Network/virtualNetworks/subnets/joinViaServiceEndpoint/action",

"Microsoft.Sql/locations/administratorAzureAsyncOperation/read",

"Microsoft.Sql/managedInstances/databases/currentSensitivityLabels/\*",

"Microsoft.Sql/managedInstances/databases/recommendedSensitivityLabels/\*",

"Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels/\*",

"Microsoft.Sql/managedInstances/databases/securityAlertPolicies/\*",

"Microsoft.Sql/managedInstances/databases/sensitivityLabels/\*",

"Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/\*",

"Microsoft.Sql/managedInstances/securityAlertPolicies/\*",

"Microsoft.Sql/managedInstances/databases/transparentDataEncryption/\*",

"Microsoft.Sql/managedInstances/vulnerabilityAssessments/\*",

"Microsoft.Sql/servers/extendedAuditingSettings/read",

"Microsoft.Sql/servers/databases/auditRecords/read",

"Microsoft.Sql/servers/databases/currentSensitivityLabels/\*",

"Microsoft.Sql/servers/databases/dataMaskingPolicies/\*",

"Microsoft.Sql/servers/databases/extendedAuditingSettings/read",

"Microsoft.Sql/servers/databases/read",

"Microsoft.Sql/servers/databases/recommendedSensitivityLabels/\*",

"Microsoft.Sql/servers/databases/schemas/read",

"Microsoft.Sql/servers/databases/schemas/tables/columns/read",

"Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels/\*",

"Microsoft.Sql/servers/databases/schemas/tables/read",

"Microsoft.Sql/servers/databases/securityAlertPolicies/\*",

"Microsoft.Sql/servers/databases/securityMetrics/\*",

"Microsoft.Sql/servers/databases/sensitivityLabels/\*",

"Microsoft.Sql/servers/databases/transparentDataEncryption/\*",

"Microsoft.Sql/servers/databases/vulnerabilityAssessments/\*",

"Microsoft.Sql/servers/databases/vulnerabilityAssessmentScans/\*",

"Microsoft.Sql/servers/databases/vulnerabilityAssessmentSettings/\*",

"Microsoft.Sql/servers/devOpsAuditingSettings/\*",

"Microsoft.Sql/servers/firewallRules/\*",

"Microsoft.Sql/servers/read",

"Microsoft.Sql/servers/securityAlertPolicies/\*",

"Microsoft.Sql/servers/vulnerabilityAssessments/\*",

"Microsoft.Sql/servers/azureADOnlyAuthentications/\*",

"Microsoft.Sql/managedInstances/read",

"Microsoft.Sql/managedInstances/azureADOnlyAuthentications/\*",

"Microsoft.Security/sqlVulnerabilityAssessments/\*",

"Microsoft.Sql/managedInstances/administrators/read",

"Microsoft.Sql/servers/administrators/read",

"Microsoft.Storage/storageAccounts/blobServices/containers/read",

"Microsoft.Sql/servers/auditingSettings/read",

"Microsoft.Sql/servers/databases/auditingSettings/read"

],

"notActions": [],

"dataActions": [],

"notDataActions": []

}

]

}

}

![Azure SQL Configuration - Create a Custom Role section](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/config/azuresqlperm_customrolecreation_3.png)

__Step 5 –__ Once created, click __Start from JSON__ in the Azure portal and select the JSON file. Once that file is chosen, the Review + Create button should be enabled.

Click __Review + Create__ to create the role or click __Next__ to review and edit the permissions. Once the JSON file is opened, the Custom Role Name and Description boxes will be populated automatically. The name and description of the custom role can be customized if required in this step.

![Azure SQL Configuration - Create a Cusotm Role window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/config/azuresqlperm_customrolecreation_4.png)

__Step 6 –__ Click Create. This action will save and finalize a custom role entitled Access Analyzer Azure SQL Role.

__Step 7 –__ Click OK on the final screen to complete the custom role creation process. The custom role can now be used to register the Access Analyzer application within the Azure portal.

__NOTE:__ Depending upon the number of resources in the Azure tenancy, it might take some time for the role to be made available to the resources.

## Register an Azure SQL Application

Follow the steps below to create an Azure SQL Application Registration in the Azure portal.

__Step 1 –__ In the Azure portal under Azure Services, click the __App Registration__ icon.

![AzureSQL - App Registrations - New Registration](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/config/azuresqlperm_customrolecreation_5.png)

__Step 2 –__ Click __New Registration__ in the Register an application blade.

![Azure SQL - Register an Application](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/config/azuresqlperm_customrolecreation_6.png)

__Step 3 –__ Enter a __Name__ for the application and select an appropriate option from the Supported account types options.

__Step 4 –__ Click __Register__ at the bottom of the page when finished. Once the application has been registered, the App registration overview blade will appear. Take note of the _Application (client) ID_ on this page.

__NOTE:__ The _Application (client) ID_ is required to create a Connection Profile within the Access Analyzer.

![Azure SQL - Register and App - Application ID](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/config/azuresqlperm_customrolecreation_8.png)

__Step 5 –__ Click the __Certificates & secrets__ blade in the left-hand menu. Click __New Client secret__.

__Step 6 –__ Enter a unique identifier in the Description field of the Add a client secret window. Select a Expiration time frame from the drop down. Click __Add__ when finished.

_Remember,_ you will have to update the Access Analyzer Connection Profile once the expiration time frame is reached (within 24 months, for example).

__Step 7 –__ Make note of the key under the Value column.

__NOTE:__ The Value key on this paged will be used to create the Access Analyzer connection profile.

![Azure SQL - Access Control (IAM) page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/config/azuresqlperm_customrolecreation_11z.png)

## Add a Role Assignment

Follow the steps below to add a role assignment to the custom role and newly registered Access Analyzer Azure SQL application.

__Step 1 –__ Navigate to the Subscriptions blade and click the __Access Control (IAM)__ option. Click the __Add__ drop down > Click __Add role assignment__.

![Azure SQL - Add a Role Assignment](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/config/azuresqlperm_customrolecreation_13z.png)

__Step 2 –__ Search for and click the recently created custom role from the Role drop down. See [Create a StealthAUDIT Custom Role](#Create-a-StealthAUDIT-Custom-Role) for steps required to create a custom role in the Azure portal.

__Step 3 –__ Search for and select the recently registered Azure SQL application from the Select drop down. See [Register an Azure SQL Application](#Register-an-Azure-SQLApplication) for steps required to register an Azure SQL application in the Azure portal. The registered application will be visible in the Selected members window. Click __Save__ when finished.

![Azure SQL - Add a role assignment window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/config/azuresqlperm_customrolecreation_14z.png)

__Step 4 –__ Search for and select the SQL Server Contributor role in the Role drop down.

__Step 5 –__ Search for and select the recently registered Azure SQL application from the Select drop down. See [Register an Azure SQL Application](#Register-an-Azure-SQLApplication) for steps required to register an Azure SQL application in the Azure portal. The registered application will be visible in the Selected members window. Click __Save__ when finished.

![Azure SQL - Access Control (IAM) window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/config/azuresqlperm_customrolecreation_16z.png)

__Step 6 –__ Navigate to the __Subscriptions__ blade. Click __Access Control (IAM)__.

__Step 7 –__ Click the __Check access__ menu tab Search for and select the recently registered Azure SQL application from the drop down. See [Register an Azure SQL Application](#Register-an-Azure-SQLApplication) for steps required to register an Azure SQL application in the Azure portal. A preview window will appear on the right-hand side of the window.

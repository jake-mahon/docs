# Microsoft Entra Roles Auditing Configuration

Access Analyzer can scan for Microsoft Entra roles information. It scans:

- Microsoft Entra ID (formerly Azure AD)

__NOTE:__ A user account with the Global Administrator role is required to register an app with Microsoft Entra ID.

Data Collector

- [Entra Data Collector](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/entra/overview.md)

Configuration Settings from the Registered Application

The following settings are needed from your tenant once you have registered the application:

- Client ID – This is the Application (client) ID for the registered application
- Key – This is the Client Secret Value generated when a new secret is created

  __CAUTION:__ It is not possible to retrieve the value after saving the new key. It must be copied first.

__NOTE:__ It is recommended to use the same registered application for the Access and Entra roles auditing configurations. In this case, these values are only needed once for the tenant. See the [Microsoft Entra ID Registered Application](#Microsoft-Entra-ID-Registered-Application) topic for additional information.

## Permissions

The following permissions are required for Microsoft Entra Roles auditing:

- Microsoft Graph API Application permissions:

  - RoleManagement.Read.Directory
- Resource Manager permissions:

  - Microsoft.Authorization/roleAssignments/read
  - Microsoft.Authorization/roleDefinitions/read
  - Microsoft.Resources/resources/read
  - Microsoft.Resources/subscriptions/read
  - Microsoft.Resources/subscriptions/resources/read
  - Microsoft.Resources/subscriptions/resourceGroups/read
  - Microsoft.Authorization/providerOperations/read
  - Microsoft.Management/managementGroups/read

## Microsoft Entra ID Registered Application

You must have a registered application to assign the required permissions to. It is recommended to use the same registered application that is used for access auditing using the AzureADInventory data collector. See the [Register a Microsoft Entra ID Application](/docs/product_docs/accessanalyzer/accessanalyzer/config/entraid/access.md#Register-a-Microsoft-Entra-ID-Application) topic for additional information on registering an application.

The Client ID and Key for the registered application are required for the Access Analyzer connection profile. If, as recommended, you are using a single registered application for the tenant, then you do not need to add an additional user credential in the connection profile. If you create a separate registered application for Entra roles auditing, then the Client ID and Key for this must be added to the connection profile as an additional Azure Active Directory user credential. See the [Microsoft Entra ID Connection Profile & Host List](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/azureadinventory/configurejob.md) topic for additional information.

Once you have the registered application, the next step is to grant it the required permissions for the Entra data collector.

## Grant Permissions to the Registered Application

Follow the steps to grant the required permissions to the registered application.

__Step 1 –__ Log in to [Azure Portal](https://portal.azure.com/).

__Step 2 –__ Navigate to the __App registrations__ > __All applications__ list for your tenant, and select your registered application.

__Step 3 –__ On the registered app blade, click __API permissions__ in the Manage section.

__Step 4 –__ In the top toolbar, click __Add a permission__.

__Step 5 –__ On the Request API permissions blade, select __Microsoft Graph__ on the Microsoft APIs tab. Select the following permissions:

- Under Application Permissions, select:

  - RoleManagement.Read.Directory

__Step 6 –__ At the bottom of the page, click __Add Permissions__.

__Step 7 –__ Click __Grant Admin Consent for [tenant]__. Then click __Yes__ in the confirmation window.

The permissions have been granted to the registered application. Next, you need to create a custom role and assign the necessary resource manager permissions.

## Create Custom Role with Resource Manager Permissions

Follow the steps to create the required custom role and assign the necessary permissions.

__Step 1 –__ In Azure portal, navigate to __Management groups__ within the Microsoft Entra tenant.

- You can either use the search bar or select __All services__ on the navigation menu to find the Management groups dashboard.

__Step 2 –__ Select the __Tenant Root Group__ to navigate to the Overview page of the management group.

___RECOMMENDED:___ It is recommended to create this custom role at the root management group level. This ensures that all of necessary information on the Microsoft Entra environment is collected. Creating the custom role on a lower level management group can result in missing data.

__Step 3 –__ Navigate to __Access Control (IAM)__ on the left side menu.

__Step 4 –__ On the Access Control (IAM) panel, click __Add__ and then select __Add custom role__.

__Step 5 –__ On the Create a custom role page, enter a role name. Optionally, add a description for the custom role.

__Step 6 –__ Select the Permissions tab, then click __Add permissions__ and assign the following permissions:

- Microsoft.Authorization/roleAssignments/read
- Microsoft.Authorization/roleDefinitions/read
- Microsoft.Resources/resources/read
- Microsoft.Resources/subscriptions/read
- Microsoft.Resources/subscriptions/resources/read
- Microsoft.Resources/subscriptions/resourceGroups/read
- Microsoft.Authorization/providerOperations/read
- Microsoft.Management/managementGroups/read

Alternatively, you can edit the JSON to assign the permissions. To do so, go to the JSON tab and edit the permissions section of the JSON to be the following:

```
"permissions": [  
    {  
        "actions": [  
            "Microsoft.Authorization/roleAssignments/read",  
            "Microsoft.Authorization/roleDefinitions/read",  
            "Microsoft.Resources/resources/read",  
            "Microsoft.Resources/subscriptions/read",  
            "Microsoft.Resources/subscriptions/resources/read",  
            "Microsoft.Resources/subscriptions/resourceGroups/read",  
            "Microsoft.Authorization/providerOperations/read",  
            "Microsoft.Management/managementGroups/read"  
        ],  
        "notActions": [],  
        "dataActions": [],  
        "notDataActions": []  
    }
```

___RECOMMENDED:___ After editing the JSON, go back to the Permissions tab and verify the list of permissions.

__Step 7 –__ Once the permissions are configured, click __Create__ on the Review + create tab to finish creating the custom role.

Now that you have created the custom role with the necessary permissions, you must assign this custom role to the registered application.

## Assign the Custom Role to the App Registration

Follow the steps to assign the custom role to your registered application.

__Step 1 –__ Navigate back to Access Control (IAM) in the Tenant Root Group.

__Step 2 –__ On the Access control (IAM) panel, click __Add__ and select __Add role assignment__.

__Step 3 –__ On the Add role assignment page, select the newly created role and click __Next__.

- You can use the search bar to easily find the custom role.

__Step 4 –__ On the Members tab, select the Assign access to option as __User, group, or service principal__. Then, click __Select members__ and search for your registered application. Select the application from the list and click __Select__.

__Step 5 –__ On the Review + assign tab, click __Review + assign__ to complete the role assignment.

The registered application has now been configured with all the necessary permissions for Entra roles scans.

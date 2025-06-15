# EX_RegisterAzureAppAuth Job

EX_RegisterAzureAppAuth will register an Microsoft Entra ID (formerly Azure AD) application for authentication and provision appropriate permissions for Exchange Online scans. It requires:

- A Connection Profile containing a Microsoft Entra ID Global Admin credential with an Account Type of __Task (Local)__
- Exchange Online Management v3.4.0

  - You can install this module with the following command:

    ```
    Install-Module -Name ExchangeOnlineManagement -RequiredVersion 3.4.0
    ```
- Azure AD PowerShell module installed on targeted hosts

  __NOTE:__ If the module is not already installed, the job will attempt to install it.

  - You can install the module with the following command:

    ```
    Install-Module AzureAD
    ```
  - TLS 1.2 is required for the Azure AD PowerShell module. Run the following command to configure it:

    ```
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    ```
- Microsoft Graph PowerShell module installed on targeted hosts

  - You can install the module with the following command:

    ```
    Install-Module Microsoft.Graph
    ```

## Using the EX_RegisterAzureAppAuth Job

Follow the steps to configure and run the EX_RegisterAzureAppAuth Job.

__Step 1 –__ In Enterprise Auditor navigate to the Exchange Job Group (or any other Job Group you wish to place the EX_RegistureAzureApp job into).

__Step 2 –__ Click __Add Instant Job__ to open the Instant Job Wizard.

__Step 3 –__ Install the EX_RegisterAzureAppAuth Job from the Instant Job Library under the Exchange General library. After installation, the job tree automatically refreshes with the new job available within the selected Job Group. See the [Instant Job Wizard](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/overview.md) topic for additional information.

__Step 4 –__ On the job description page, in the Configuration section, select the edit button for __Name of the app as it will appear in the Azure applications list__ and enter the name you want to apply to the registered Microsoft Entra ID application. Click __Save__.

__Step 5 –__ In the same section, select the edit button for __Password used for the Azure application and to encrypt the certificate file in the local file system__ and enter the password to use for the Microsoft Entra ID application. Click __Save__.

__Step 6 –__ (Optional) For non-standard tenant types, edit the __Azure Environment Name...__ option to provide the full environment name. For a standard tenant, leave this option blank.

- For example, if leveraging a government (or GCC) tenant, enter __AzureGovernment__
- Additional options include: AzureChinaCloud, AzureCloud, AzureGermanyCloud, AzurePPE, AzureGovernment2, and AzureGovernment3

__Step 7 –__ On the __Configure__ > __Hosts__ node, select the target hosts. The targeted hosts should be the Microsoft Entra tenant name (for example, ```myorg.onmicrosoft.com```). Click __Save__. The job is now ready to be run.

__Step 8 –__ Run the EX_RegisterAzureAppAuth Job.

__Step 9 –__ After the job successfully runs, it opens a browser window to Microsoft Entra ID. Log-in as a Global Administrator, and grant administrator consent to the Application's configured API Permissions.

- If this login attempt fails or you close the browser, you will need to login to Microsoft Entra ID as a Global Administrator and navigate to the Application's API Permissions to grant Admin Consent before the Application can be used for Exchange scans in Enterprise Auditor.

The Microsoft Entra ID application is now provisioned with the necessary permissions for Exchange Online scans. There will be a new Connection Profile for this Application. Restart the Enterprise Auditor Console and enter a password to use this Connection Profile.

_Remember,_ the required rights and roles for Exchange Online still need to be configured. See the [Target Exchange Online Requirements, Permissions, and Ports](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/requirements/target/exchangeonline.md) topic for additional information.

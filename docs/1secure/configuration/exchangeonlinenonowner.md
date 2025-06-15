# Settings for Non-Owner Mailbox Access Audit: Using Application

To prepare for non-owner mailbox access auditing in the Exchange Online organization, you will need to take several configuration steps, creating a Microsoft Entra ID app with the required permissions and instructing this app to automatically apply the necessary audit settings.

These settings shall provide configuration for the All Exchange Online Non-Owner Mailbox Access Events report. See the Filters topic for additional information.

__NOTE:__ To start auditing the data for the report, you need to select the __Collect non-owner mailbox audit data__ check box when adding the Exchange Online source. See the [Add a Source and Connectors for Exchange Online](../admin/organizations/sourcesandconnectors/exchangeonline.md)topic for additional information.

__NOTE:__ Unified audit log must be enabled for a tenant. See the Microsoft [Turn auditing on or off](https://learn.microsoft.com/en-us/purview/audit-log-enable-disable?view=o365-worldwide&tabs=microsoft-purview-portal) article for additional information.

## Grant Permissions to the Application

Follow the steps to grant permissions to the Microsoft Entra ID application.

__NOTE:__ The steps below are for registering an app through the Microsoft Entra admin center. These steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__Step 1 –__ In the Microsoft Entra admin center, create and register a Microsoft Entra ID app. See the

__Step 2 –__ After you created an app, select the newly-created, registered application. If you left the Overview page, it will be listed in the __Identity__ > __Applications__ > __App registrations__ > __All applications__ list.

__Step 3 –__ On the registered app blade, click __API permissions__ in the Manage section.

__Step 4 –__ In the top toolbar, click __Add a permission__.

__Step 5 –__ On the Request API permissions blade, click the __APIs my organization uses__ tab and search for _Office 365 Exchange Online_.

__Step 6 –__ Click on the _Office 365 Exchange Online_ entry in the list of apps found.

__Step 7 –__ 
Proceed with adding the permissions for this app: select __Application permissions__ and then select __Exchange.ManageAsApp__.

__Step 8 –__ Click __Grant Admin Consent for [tenant]__. Then click __Yes__ in the confirmation window.

The application is granted the required API permissions.

## Grant Required Roles

Follow the steps to grant roles to the registered application.

__NOTE:__ The steps below are for registering an app through the Microsoft Entra admin center. These steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft documentation for additional information.

__Step 1 –__ From the __Identity__ > __Roles & admins__ blade, click > __Roles & admins__.

__Step 2 –__ Search for the Exchange Administrator or the Global Administrator role.

__Step 3 –__ On the Assignments page, click __Add assignments__.

__Step 4 –__ In the Add assignments layout, select the created application and click __Add__.

The application is granted the required roles.

## Set Up an Environment

Follow the steps to set up your environment using PowerShell.

__Step 1 –__ Install the Exchange Online PowerShell V2 module.

Make sure you are using the version specified in the [related Microsoft article](https://docs.microsoft.com/en-us/powershell/exchange/app-only-auth-powershell-v2?view=exchange-ps).

__Step 2 –__ Download the PowerShell script for certificate creation, as provided in the [Microsoft instruction](https://docs.microsoft.com/en-us/powershell/exchange/app-only-auth-powershell-v2?view=exchange-ps#microsoft-instruction).

__Step 3 –__ To create a self-signed certificate to be used by the app, run the following command in Powershell:

```
.\Create-SelfSignedCertificate.ps1 -CommonName "MyCompanyName" -StartDate 2020-04-01 -EndDate 2022-04-01
```

where:

- ```CommonName``` — specify _"Netwrix 1Secure"_
- ```StartDate``` — set to current date
- ```EndDate``` — set to 2 years from now

__Step 4 –__ When prompted to specify a password, click __Enter__.

__Step 5 –__ Go to __Identity__ > __Applications__ > __App registrations__ > "your app" >  __Certificates & secrets__.

__Step 6 –__ Click __Upload certificate__ and upload the_.crt_ file you have just created.

__Step 7 –__ To create Exchange Online connection session, you can provide certificate file path or thumbprint. If you want to use a file path, run the following command in Powershell:

```
Connect-ExchangeOnline -CertificateFilePath "full_path_to_certificate" -AppID "yourAppId" -Organization "Office365_tenant_name"
```

Application (client ID) can be found in the __Overview__ page.

For example:

```
Connect-ExchangeOnline -CertificateFilePath "C:\Path\MyCompanyName1.pfx" -AppId "402b12a2-fb2b-4222-8f54-5596def1" -Organization "myorganization123.onmicrosoft.com"
```

You can use certificate thumbprint instead of file path. For that, import the certificate to the local certificate store, using the following command in Powershell:

```
Import-PfxCertificate -FilePath "path_to_pfx_certificate" -CertStoreLocation Cert:\CurrentUser\My
```

Then run the command in Powershell like following:

```
Connect-ExchangeOnline -CertificateThumbprint 6AEА5A82911ААА3F76FEE149B7B52А70DDFD88 -AppId a14a 822d-f228-412b-9222-281de23 -Organization myorganization123.onmicrosoft.com
```

__Step 8 –__ To set up the audit, run the following command in Powershell:

```
Get-ExoMailbox -PropertySets Minimum -RecipientTypeDetails UserMailbox,SharedMailbox,EquipmentMailbox,LinkedMailbox,RoomMailbox | Set-Mailbox -AuditEnabled $true –AuditAdmin Update,Copy,Move,MoveToDeletedItems,SoftDelete,HardDelete,FolderBind,SendAs,SendOnBehalf,Create –AuditDelegate Update,Move,MoveToDeletedItems,SoftDelete,HardDelete,FolderBind,SendAs,SendOnBehalf,Create
```

__Step 9 –__ Finally, run the following command in Powershell to end the session:

```
Disconnect-ExchangeOnline -Confim:$False
```

__NOTE:__ To automate steps 8-9, you can create a script comprising the corresponding commands and schedule its launch.

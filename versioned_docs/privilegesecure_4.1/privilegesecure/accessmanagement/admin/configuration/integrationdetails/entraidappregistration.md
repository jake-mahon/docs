# Microsoft Entra ID App Registration

To create a Microsoft Entra ID (formerly Azure AD) service account and add an Microsoft Entra ID tenant to Privilege Secure, the following information is required:

- App ID (For service account)
- App Secret (For service account)
- Tenant ID (To add resource)

Log in to Microsoft Entra ID and follow the steps to generate the required information for Privilege Secure.

## Create App Registration

Create an App Registration in Azure (Azure Active Directory > App Registrations) as an admin in Azure.

__Step 1 –__ Click __New Registration__.

__Step 2 –__ Name it, keep all default settings, and click __Register__.

__Step 3 –__ Click __API Permissions__.

__Step 4 –__ Using this menu, grant the following Microsoft Graph API permissions:

- Application Permissions:
  - Directory.ReadWrite.All
  - Group.ReadWrite.All
  - User.ReadWrite.All
  - RoleManagement.ReadWrite.Directory
- Delegated Permissions:
  - User.Read

__Step 5 –__ Click __Grant Admin Consent__.

## Generate Secret

Generate a secret for the App Registration

__Step 1 –__ In the App Registration, click __Certificates & Secrets__.

__Step 2 –__ Click __New Client Secret__.

__Step 3 –__ Set any expiration date (your preference), and click __Add__.

__Step 4 –__ Copy the Secret Value before leaving the page. The Secret Value, which is the App Secret value required for adding an Azure Service Account to Netwrix Privilege Secure, is never displayed again.

__Step 5 –__ Return to the App Registration Overview page to get the following values:

- Application (client) ID, required for the Netwrix Privilege Secure Azure Service Account
- Directory (tenant) ID, required to add an Azure tenant resource to Netwrix Privilege Secure

## Add App Registration to Admin Role

Add the App Registration to the User Administrators role.

__NOTE:__ User Administrator is the least privileged model and cannot manage Global Administrator. To manage the Global Administrator role, assign the Global Administrator role to the App registration instead of User Administrator.

__Step 1 –__ Navigate to __Azure Active Directory__.

__Step 2 –__ Click __Roles and Administrators__.

__Step 3 –__ Locate and click on the __User Administrators__ role.

__Step 4 –__ Click __Add Assignments__.

__Step 5 –__ Search for the name of the previously created App Registration, click on it, and click __Add__.

The service account can now be added to Privilege Secure, using the Application (Client) ID and Client Secret. See the [Service Accounts Page](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/page/serviceaccounts.md) topic for additional information.

Add the Microsoft Entra ID Tenant resource to Privilege Secure using the Tenant ID. See the [Add New Microsoft Entra ID Tenant](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/add/entraidtenant.md) topic for additional information.

## Rotate a Microsoft Entra ID Account Password in a Hybrid Tenant

In order for existing account passwords to be rotated by Privilege Secure in hybrid Microsoft Entra ID tenants, the Password Writeback feature in Microsoft Entra ID must be enabled. Enabling Password Writeback allows hybrid account passwords to be updated either in on-prem AD or in Microsoft Entra ID, and the result will be synced to the other location. Without having this functionality enabled in a hybrid Microsoft Entra ID tenant, all attempts to change an account's password will fail.

Enabling Password Writeback is not specific to Privilege Secure. See the [Open Enable Azure Active Directory password writeback](https://docs.microsoft.com/en-us/azure/active-directory/authentication/tutorial-enable-sspr-writeback) Microsoft article for additional information.

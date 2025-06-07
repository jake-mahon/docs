# Schedule

The Schedule node contains objects referred to as Schedule Service Accounts. A Schedule Service Account is used to run scheduled tasks on the Access Analyzer Console server.

![Schedule node](/static/img/product_docs/threatprevention/threatprevention/admin/configuration/databasemaintenance/schedule.png)

Jobs can be executed manually as desired or scheduled to execute at designated times. For example, you could schedule a job to run during hours when the office is closed and network traffic is low. Windows uses the Schedule Service Account to access the task folders when launching scheduled tasks. Schedule Service Accounts are configured at the global level, and this account can be used to schedule jobs in the Schedule Wizard. See the [Schedules](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/schedule/overview.md) topic for additional information.

__CAUTION:__ On Windows 2016 servers, the Schedule Service Account cannot be signed into an active session when the time comes for a scheduled task to start. Windows blocks the starting or running of scheduled tasks using an account that is logged into the server.

Password Storage Options

The password for the credential provided can be stored in the Access Analyzer application or the Access Analyzer Vault.

Choosing between the Access Analyzer application and Access Analyzer Vault is a global setting configured in the __Settings__ > __Application__ node. See the [Application](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/application/overview.md) topic for additional information.

Permissions

Regardless of the account type, any account used to schedule tasks must have credentials with at least the following to meet Least Privileged specifications:

- Create Files/Write Data rights on the following Task folders:

  - Windows Task folder
  - System 32 Task folder
  - Member of __Log on as a Batch Job__ local policy

  Otherwise, credentials must have local Administrator privileges on the Access Analyzer Console server.
- The following NTFS permissions for __Subfolders and Files Only__ in the Access Analyzer Directory:

  - Create Files/Write Data
  - Create Folders/Append Data
  - Write Attributes
  - Write Extended Attributes
- To configure Least Privilege Model Schedule Service Accounts when Role Based Access is enabled, see the [Role Based Access](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/access/rolebased/overview.md) topic for additional information
- If using Windows authentication for the Storage Profile, the Schedule Service Account must have a sufficient level of rights to connect to and interact with the Access Analyzer database. See the [Storage](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/storage/overview.md) topic for additional information.

The __Cancel__ and __Save__ buttons are in the lower-right corner of the Schedule view. These buttons become enabled when modifications are made to the Schedule global settings. Whenever changes are made at the global level, click __Save__ and then __OK__ to confirm the changes. Otherwise, click __Cancel__ if no changes were intended.

The Access Analyzer vault provides enhanced security through enhanced encryption to various credentials stored by the Access Analyzer application. See the [Vault](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/application/vault.md) topic for additional information.

## Schedule Service Account Types

There are two types of accounts that can be used to configure the Schedule Service Account.

![serviceaccounttypes](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/serviceaccounttypes.png)

Use one of the following options for the Schedule Service Account:

- Use the local system account to schedule tasks – This option applies the credentials logged into the Access Analyzer Console server

  - Credentials must have privileges sufficient for scheduling tasks on the Access Analyzer Console server. If not, scheduled tasks fail to start.
  - This option cannot be edited or deleted
- User-supplied credentials – Provide credentials for a specific account with sufficient rights to schedule tasks on the Access Analyzer Console server

  - The account can be either a domain account or a local Windows account
  - A local Windows account is a specific account and not the default local system account

_Remember,_  the Schedule Service Account cannot be signed into an active session on the Access Analyzer Console server when the time comes for a scheduled task to start when it has a Windows 2016 operating system.

## Create a Schedule Service Account

Follow the steps to create a Schedule Service Account.

_Remember,_  the Schedule Service Account cannot be signed into an active session on the Access Analyzer Console server when the time comes for a scheduled task to start when it has a Windows 2016 operating system.

![Add User credential option in the Schedule view](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/addusercredential.png)

__Step 1 –__ Click __Add User credential__ at the top of the Schedule view. The User Credentials window opens.

![User Credentials window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/usercredentialswindow.png)

__Step 2 –__ The window options change according to the value for the __Selected Account Type__ field. Select the appropriate account type and then provide the required information. The account types are:

- Active Directory Account – Use this option to specify a domain account

  - Domain – Auto-filled with the domain where the Access Analyzer Console server resides, change by typing the domain name in the textbox or select a domain from the menu
  - User name – Provide a domain account user name
  - Password Storage – Choose the option for credential password storage:

    - Application – Uses Access Analyzer’s configured Profile Security setting as selected at the __Settings__ > __Application__ node
    - Managed Service Account – Use previously configured MSA and gMSAs for authentication. The password fields are not applicable when this option is selected. See the [Group Managed Service Accounts (gMSA) Configuration](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/connection/gmsa.md) topic for additional information.
  - Password – Type the password
  - Confirm – Re-type the password
- Local Account – Use this option to specify a local account for the Access Analyzer Console server

  - User name – Provide the local account user name
  - Password Storage – Choose the option for credential password storage:

    - Application – Uses Access Analyzer’s configured Profile Security setting as selected at the __Settings__ > __Application__ node
  - Password – Type the password
  - Confirm – Re-type the password

__Step 3 –__ Click __OK__ and the credentials are verified. If there are no problems with the provided credentials, the User Credentials window closes. Otherwise, one of the following error messages might appear:

- Passwords Do Not Match Error

  ![Passwords Do Not Match Error](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/passwordsdontmatch.png)

  - This error indicates the two password entries do not match. Click __OK__ and reenter the passwords.
- Bad User Name or Password Error

  ![Bad User Name or Password Error](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/incorrectlogondetails.png)

  - This error indicates either the user account does not exist or the username and password do not match. Click __OK__ and reenter the information.
- Insufficient Rights Error

  ![Insufficient Rights Error](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/insufficientrights.png)

  - This error indicates the account supplied does not have sufficient rights to create and run scheduled tasks. Click __OK__ and provide credentials with sufficient rights.
- GPO Network Security Error

  ![GPO Network Security Error](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/gponetworksecurity.png)

  - This error indicates that the GPO Network Security settings are configured to not allow storage of passwords and credentials for network authentication. Click OK. Disable the domain’s GPO Network Security settings or exempt the Access Analyzer Server from GPO.
  - This error will also appear when trying to schedule a task using the domain’s Schedule Service Account where GPO Network Security is set to not allow storage of passwords and credentials for network authentication

__Step 4 –__ The credential information appears in the User Credentials table. Click __Save__ and then __OK__ to confirm the changes. To ensure these credentials take effect, exit and restart the Access Analyzer application before scheduling any tasks.

Access Analyzer can now schedule tasks with this Scheduled Service Account.

## Edit a Schedule Service Account

Follow the steps to edit a Schedule Service Account credentials.

_Remember,_  the Schedule Service Account cannot be signed into an active session on the Access Analyzer Console server when the time comes for a scheduled task to start when it has a Windows 2016 operating system.

![Edit option in the Schedule view](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/edit.png)

__Step 1 –__ Select a credential from the User Credentials list and click on __Edit__. The User Credentials window opens.

__Step 2 –__ Modify the credential information as needed. See Step 2 of the [Create a Schedule Service Account](#Create-a-Schedule-Service-Account) topic for additional information.

__Step 3 –__ Click __OK__ and the credentials will be verified. If there are no problems with the provided credentials, the User Credentials window closes.

Access Analyzer can now schedule tasks with this Scheduled Service Account.

## Delete a Schedule Service Account

Follow the steps to delete a Schedule Service Account.

![Delete option in the Schedule view](/static/img/product_docs/strongpointfornetsuite/integrations/delete.png)

__Step 1 –__ Select the credential from the User Credentials list and click __Delete__. The Delete Credentials confirmation window appears.

![Delete Credentials confirmation window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/deletecredentials.png)

__Step 2 –__ Click __OK__ to confirm the deletion or __Cancel__ to exit the deletion process.

__Step 3 –__ The User Credentials list now reflects the absence of the deleted Schedule Service Account. Click __Save__ and then __OK__ to confirm the changes. To ensure these changes take effect, exit and restart the Access Analyzer application.

If all Schedule Service Accounts are removed and only the local System account remains, Access Analyzer cannot create or run scheduled tasks unless the local system account has adequate permissions.

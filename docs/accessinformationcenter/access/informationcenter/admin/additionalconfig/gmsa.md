# Group Managed Service Account (gMSA) Configuration

You can use a group Managed Service Account (gMSA) account to run the Netwrix Access Information Center service. It can then also be used to connect to the database, email server, and Active Directory.

The following pre-requisites are required before configuring the Access Information Center to use a gMSA:

- The gMSA must be added to the Local Administrator Group on the host where the AIC is installed
- In SQL Server Management Studio, the gMSA needs to be added to the __Security__ > __Logins__ node for the SQL server where the AIC Database resides with the following settings:

  - On the General page, the __Login name__ should be the ```Domain\Name``` of the gMSA
  - On the Server Roles page, the __public__ and __sysadmin__ checkboxes must be selected
- Netwrix Access Information Center has been installed using one of the regular authentication methods, and not using the gMSA. See the [Install the Access Information Center](/docs/accessinformationcenter/access/informationcenter/installation/install.md) topic for additional information.
- If the gMSA is to be used to connect to Active Directory or an email server, the gMSA account must have the necessary rights to Active Directory and Exchange

For more information on group Managed Service Accounts, see the Microsoft [Group Managed Service Accounts](https://learn.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview) article.

## Run Netwrix Access Information Center Service

Follow the steps to configure the Netwrix Access Information Center service to run using the gMSA.

__Step 1 –__ Open the Services Console. Right-click on the Netwrix Access Information Center service and select __Properties__.

![Netwrix Access Information Center service properties window](/img/product_docs/accessinformationcenter/access/informationcenter/admin/additionalconfig/gmsaserviceproperties.png)

__Step 2 –__  On the Log On tab of the properties window, select the __This account__ option. Enter the gMSA account name and leave the password fields blank.

- Click __Browse__ to find and select the gMSA using the Select User window.

__Step 3 –__ Restart the Netwrix Access Information Center service.

The Netwrix Access Information Center service is now running using the provided gMSA account.

## Connect to Database, Email Server, and Active Directory

If the Netwrix Access Information Center service is running with a gMSA, you can use the gMSA to connect to the Access Analyzer database, email server, and Active Directory.

Follow the steps to connect using the gMSA.

__Step 1 –__ Log in to the Access Information Center.

__Step 2 –__ On the Administrator home page, click __Configure Console__and then go to the relevant Configuration page.

- To configure the database connection, select the __Database__ page
- To configure the connection to Active Directory, select the __Active Directory__ page
- To configure the connection to your email server, select the __Notifications__ page

![Use the windows account running this service option on Database Configuration page](/img/product_docs/accessinformationcenter/access/informationcenter/admin/additionalconfig/gmsadatabaseconfiguration.png)

__Step 3 –__ On the Configuration page, select the __Use the account running this service__ option. Click __Save__.

__Step 4 –__ Log out of the Access Information Center.

The Access Information Center now connects using the gMSA account. Repeat the steps for each required connection using the gMSA.

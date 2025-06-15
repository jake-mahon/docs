# StealthAUDIT Integration

Netwrix Enterprise Auditor can be configured to send administrator information to Privilege Secure. For integration, the following Enterprise Auditor job groups must be successfully run before Privilege Secure can import the data:

- .Active Directory Inventory Job Group
- Windows > Privileged Accounts > Local Administrators Job Group

See the [Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/enterpriseauditor) for additional information.

## Configure the Access Role

Follow the steps to configure the access role in StealthAUDIT. See the Access Role section of the Web Service REST API for Applications Access Data Remotely topic of the [Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/enterpriseauditor) for additional information.

__Step 1 –__ In Enterprise Auditor, navigate to the Access Node and click the Add Access link in the upper-right corner of the Access view. The Access Role wizard opens.

__Step 2 –__ Select the An application accessing data remotely through Web Service radio button, then click Next. The Application Access page opens.

__Step 3 –__ The Application Access page displays a list of available objects in the database. Select Tables and click Add to open the Select Database Objects window.

__Step 4 –__ Select the following Objects:

- Tables:

  - SA_ADInventory_Domains
  - SA_SG_LocalAdmins_Details
- Views:

  - SA_ADInventory_ComputersView
  - SA ADInventory_UsersView

  __NOTE:__ Type in the Filter Objects by Name box to filter the list of objects by the characters entered.

__Step 5 –__ Click OK to return to the Application Access page.

__Step 6 –__ Review tables and views and click Next.

__Step 7 –__ On the Application Details page, define the name of the application and generate the app token:

- Application name – Enter "Privilege Secure"
- Access Expiration – Set the desired expiration for the client secret:

  - Access expires within – Select a timeframe from the drop-down list. The default is 72 hours.
  - Access expires on specified date – Select a date from the drop-down list
- Generate – Click this button to generate the Client ID and Client secret
- Client ID – Copy the Client ID for use in Privilege Secure
- Client secret – Copy the Client Secret for use in Privilege Secure

__Step 8 –__ Click Finish to close the wizard and click Save in the Access view accept the changes.

__NOTE:__ Audit must be restarted after a new access role is configured.

The next step is to use the Client ID and Client Secret to obtain an access token. This token is used to get data from the Enterprise Auditor endpoint.

## Add Service Account for StealthAUDIT Connector

Follow the steps to add the service accounts for the Enterprise Auditor integration connector. See the [Add Service Account](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/add/serviceaccount.md) topic for additional information.

__Step 1 –__ In the (Undefined variable: SbPAM.Product Short) Console, navigate to the Configuration > Service Accounts page.

__Step 2 –__ In the Service Account list, click the Add Service Account icon.

__Step 3 –__ Enter the following information:

- Enter Name –Enterprise Auditor API
- Enter Description – (Optional) Brief description to identify the service account
- Domain – This field is not required
- Username – Enter the Client ID from the Access Role wizard in Enterprise Auditor
- Password – Enter the Client Secret from the Access Role wizard in Enterprise Auditor
- Platform – Select Windows from the drop-down list

__Step 4 –__ Click the Save icon to create the new service account.

__Step 5 –__ Follow the steps again to add a service account with administrator credentials for theEnterprise Auditor server. Enter the following information:

- Enter Name – Enterprise Auditor Admin
- Enter Description – (Optional) Brief description to identify the service account
- Domain – The domain the Enterprise Auditor server is on
- Username – A local admin account for the Enterprise Auditor server
- Password – The password for the local admin account
- Platform – Select Windows from the drop-down list

The next step is to configure the integration connector.

## Add a Connector for StealthAUDIT

Follow the steps to add the Enterprise Auditor Connector.

__Step 1 –__ In the (Undefined variable: SbPAM.Product Short) Console, navigate to the Configuration > Integration Connectors page.

__Step 2 –__ In the Integration Connector list, click the Add Integration Connector icon.

![Add Enterprise Auditor Integration Connector](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/add/addenterpriseauditor.png)

__Step 3 –__ Enter the following information:

- Connector Name – Enter a name to uniquely identify the connector
- Connector Description (Optional) – Enter a brief description to identify the service account
- Connector Template – A selection of templates for connector configurations. Select StealthAUDIT from the drop-down list.
- Server Hostname – The hostname of the server that Privilege Secure needs to connect to the server that Enterprise Auditor is installed on
- Port – The port used by the service that Privilege Secure needs to connect to
- REST Credentials – Enter the Client ID from the Access Role wizard in Enterprise Auditor
- PowerShell Credentials – Enter the Client Secret from the Access Role wizard in Enterprise Auditor

__Step 4 –__ Click the Save icon to create the new integration connector.

The next step is to import the data from Enterprise Auditor.

## Import Data from Enterprise Auditor

Follow the steps to import the users, groups, and resources associated with administrator accounts from Enterprise Auditor.

__Step 1 –__ In the Privilege Secure Console, navigate to the Configuration > Integration Connectors page in the menu.

__Step 2 –__ In the Integration Connector list, select the previously created Enterprise Auditor Import connector.

![enterpriseauditorconnector](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/add/enterpriseauditorconnector.png)

__Step 3 –__ Click __Sync__ __StealthAUDIT__ to begin the data collection. This may take some time.

To view the import progress, navigate to __Service Nodes__ > Action Services. See the [Action Service](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/servicetype/action.md) topic for additional information.

__NOTE:__ The Use Secure Tunnel feature is enabled by default on all proxy services when installed and the proxy service is selected by default.

Refer to the [Action Service](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/servicetype/action.md) topic for additional information.

__Step 12 –__ Click Create when the connection tests successfully.

# Enterprise Auditor Integration

Netwrix Access Analyzer (formerly Enterprise Auditor) can be configured to send administrator information to Privilege Secure. For integration, the following Access Analyzer job groups must be successfully run before Privilege Secure can import the data:

- .Active Directory Inventory Job Group
- Windows > Privileged Accounts > Local Administrators Job Group

See the [Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for additional information.

## Configure the Access Role

Follow the steps to configure the access role in Access Analyzer. See the Access Role section of the Web Service REST API for Applications Access Data Remotely topic of the [Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for additional information.

__Step 1 –__ In Access Analyzer, navigate to the Access Node and click the Add Access link in the upper-right corner of the Access view. The Access Role wizard opens.

__Step 2 –__ Select the An application accessing data remotely through Web Service radio button, then click Next. The Application Access page opens.

__Step 3 –__ The Application Access page displays a list of available objects in the database. Select Tables and click Add to open the Select Database Objects window.

__Step 4 –__ Select the following Objects:

- Tables:

  - SA\_ADInventory\_Domains
  - SA\_SG\_LocalAdmins\_Details
- Views:

  - SA\_ADInventory\_ComputersView
  - SA ADInventory\_UsersView

  __NOTE:__ Type in the Filter Objects by Name box to filter the list of objects by the characters entered.

__Step 5 –__ Click OK to return to the Application Access page.

__Step 6 –__ Review tables and views and click Next.

__Step 7 –__ On the Application Details page, define the name of the application and generate the app token:

- Application name – Enter “Privilege Secure”
- Access Expiration – Set the desired expiration for the client secret:

  - Access expires within – Select a timeframe from the drop-down list. The default is 72 hours.
  - Access expires on specified date – Select a date from the drop-down list
- Generate – Click this button to generate the Client ID and Client secret
- Client ID – Copy the Client ID for use in Privilege Secure
- Client secret – Copy the Client Secret for use in Privilege Secure

__Step 8 –__ Click Finish to close the wizard and click Save in the Access view accept the changes.

__NOTE:__ Access Analyzer must be restarted after a new access role is configured.

The next step is to use the Client ID and Client Secret to obtain an access token. This token is used to get data from the Access Analyzer endpoint.

## Add Service Account for Enterprise Auditor Connector

Follow the steps to add the service accounts for the Access Analyzer integration connector. See the [Add Service Account](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/serviceaccount.md) topic for additional information.

__Step 1 –__ In the Privilege Secure Console, navigate to the Configuration > Service Accounts page.

__Step 2 –__ In the Service Account list, click the Add Service Account icon.

__Step 3 –__ Enter the following information:

- Enter Name –Access Analyzer API
- Enter Description – (Optional) Brief description to identify the service account
- Domain – This field is not required
- Username – Enter the Client ID from the Access Role wizard in Access Analyzer
- Password – Enter the Client Secret from the Access Role wizard in Access Analyzer
- Platform – Select Windows from the drop-down list

__Step 4 –__ Click the Save icon to create the new service account.

__Step 5 –__ Follow the steps again to add a service account with administrator credentials for theAccess Analyzer server. Enter the following information:

- Enter Name – Access Analyzer Admin
- Enter Description – (Optional) Brief description to identify the service account
- Domain – The domain the Access Analyzer server is on
- Username – A local admin account for the Access Analyzer server
- Password – The password for the local admin account
- Platform – Select Windows from the drop-down list

The next step is to configure the integration connector.

## Add a Connector for Enterprise Auditor

Follow the steps to add the Access Analyzer Connector.

__Step 1 –__ In the Privilege Secure Console, navigate to the Configuration > Integration Connectors page.

__Step 2 –__ In the Integration Connector list, click the Add Integration Connector icon.

![Add Enterprise Auditor Integration Connector](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/addenterpriseauditor.png)

__Step 3 –__ Enter the following information:

- Connector Name – Enter a name to uniquely identify the connector
- Connector Description (Optional) – Enter a brief description to identify the service account
- Connector Template – A selection of templates for connector configurations. Select StealthAUDIT from the drop-down list.
- Server Hostname – The hostname of the server that Privilege Secure needs to connect to the server that Access Analyzer is installed on
- Port – The port used by the service that Privilege Secure needs to connect to
- REST Credentials – Enter the Client ID from the Access Role wizard in Access Analyzer
- PowerShell Credentials – Enter the Client Secret from the Access Role wizard in Access Analyzer

__Step 4 –__ Click the Save icon to create the new integration connector.

The next step is to import the data from Access Analyzer.

## Import Data from Enterprise Auditor

Follow the steps to import the users, groups, and resources associated with administrator accounts from Access Analyzer.

__Step 1 –__ In the Privilege Secure Console, navigate to the Configuration > Integration Connectors page in the menu.

__Step 2 –__ In the Integration Connector list, select the previously created Enterprise Auditor Import connector.

![enterpriseauditorconnector](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/add/enterpriseauditorconnector.png)

__Step 3 –__ Click __Sync__ __StealthAUDIT__ to begin the data collection. This may take some time.

To view the import progress, navigate to __Service Nodes__ > Action Services. See the [Action Service](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/configuration/servicetype/action.md#Action-Service) topic for additional information.

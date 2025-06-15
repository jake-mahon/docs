# Deployment Procedure

Follow the steps to install Azure Files add-on.

__Step 1 –__ Accept EULA.

![azurefileeula](../../../../../static/img/product_docs/auditor/auditor/addon/azurefiles/azurefileeula.webp)

__Step 2 –__ Select the installation folder and click __Next__.

![azurefileinstfolder](../../../../../static/img/product_docs/auditor/auditor/addon/azurefiles/azurefileinstfolder.webp)

__Step 3 –__ Click __Install__. The wizard will start and ask the additional parameters.

## Configure Azure Files for Monitoring

Follow the steps to configure Azure files for monitoring.

__Step 1 –__ Make sure you have a storage account to store logs. To reduce the volume of the stored logs and the corresponding cost, it is recommended to create a rule in Life Cycle Management for this storage. Netwrix Auditor doesn't need historic logs, after the add-on has written them into the database. Refer to the [corresponding Microsoft article](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview?tabs=azure-portal) for additional information.

__Step 2 –__ Enable audit in the Azure Files settings. Go to the Diagnostic settings, and make sure that the following options are selected:

- "Audit" under the __Logs__
- "Archive to a storage account" under the __Destination details__
- Correct Storage account in the drop-down menu

__Step 3 –__ Go to the storage account that has been created before and copy Connection String. This parameter will be used in the add-on configuration.

__Step 4 –__ If Microsoft Entra Kerberos or Active Directory Domain Services is used as an Identity source, Graph API will be used to resolve the user names. It is necessary to register an Azure App and grant it the following permissions:

- Type - Application
- Microsoft.Graph - User.Read.All

After that, save the Tenant ID, Application ID, and secret.

## Configure the add-on

Follow the steps to configure the add-on.

__Step 1 –__ After the installation, the add-on configuration wizard will start. If it didn't start automatically - open it from the installation folder.

__Step 2 –__ Select __Proceed__.

__Step 3 –__ Provide Auditor Server IP address and port number followed by endpoint for posting Activity Records. See the [API Endpoints](../../api/endpoints.md) topic for more information.

This assumes that the add-on runs on the computer hosting Auditor Server and uses default port 9699.

If you want to run the add-on on another machine, you need to provide a name of the computer where Auditor Server resides (e.g., _172.28.6.15_, EnterpriseNAServer, WKS.enterprise.local). To specify a non-default port, provide a server name followed by the port number (e.g., WKS.ent erprise.local:9999).

__CAUTION:__ Do not modify the endpoint part (_/netwrix/api_).

![generalsettings](../../../../../static/img/product_docs/auditor/auditor/addon/azurefiles/generalsettings.webp)

__Step 4 –__ Specify Active Directory credentials:

- Username – Provide the name of the account under which the service runs. Unless specified, the service runs under the account currently logged on.
- Password – Provide the password for the selected account.

![adcredentials](../../../../../static/img/product_docs/auditor/auditor/addon/copilot/adcredentials.webp)

__Step 5 –__ Paste Azure Connection String in the corresponded field and click __Next__.

![azurefileconnectionstring](../../../../../static/img/product_docs/auditor/auditor/addon/azurefiles/azurefileconnectionstring.webp)

__Step 6 –__ Enter Tenant ID, App ID and App Secret of the Azure App you registered for the add-on. Click __Next__.

![microsoftgraphapi](../../../../../static/img/product_docs/auditor/auditor/addon/azurefiles/microsoftgraphapi.webp)

__Step 7 –__ Click __Run__ and close the window. The service should start the data collection now.

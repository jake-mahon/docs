# Deployment Procedure

Follow the steps to install Microsoft Copilot add-on.

__Step 1 –__ Accept EULA.

__Step 2 –__ Select the installation folder and click __Next__.

__Step 3 –__ Click __Install__. The wizard will start and ask the additional parameters.

## Configure Copilot for Monitoring

Follow the steps to configure Copilot for monitoring.

__Step 1 –__ Make sure you have a storage account to store logs. To reduce the volume of the stored logs and the corresponding cost, it is recommended to create a rule in Life Cycle Management for this storage. Netwrix Auditor doesn't need historic logs, after the add-on has written them into the database. Refer to the [corresponding Microsoft article](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview?tabs=azure-portal) for additional information.

__Step 2 –__ Register an Azure App and grant it the following permissions:

- Microsoft.Graph — Domain.Read.All
- Office 365 Management APIs — ActivityFeed.Read

## Configure the add-on

Follow the steps to configure the add-on.

__Step 1 –__ Specify Active Directory credentials.

- Username – Provide the name of the account under which the service runs. Unless specified, the service runs under the account currently logged on.
- Password – Provide the password for the selected account.

![adcredentials](/static/img/product_docs/auditor/auditor/addon/copilot/adcredentials.png)

__Step 2 –__ Enter Tenant ID, App ID and App Secret of the Azure App you registered for the add-on. Click __Next__.

![tenantapp](/static/img/product_docs/auditor/auditor/addon/copilot/tenantapp.png)

__Step 3 –__ Click __Run__ and close the window. The service should start the data collection now.

# Work with Collected Data

To leverage data collected with the add-on, you can do the following in Auditor:

- Search for required data. For that, start Auditor client and navigate to **Search**. After
  specifying the criteria you need, click **Search**. You will get a list of activity records with
  detailed information on who did what in the reported time period.

You might want to apply a filter to narrow down your search results to the Netwrix API data source
only.

- You can also click **Tools** in the upper-right corner and select the command you need. For
  example:
  - If you want to periodically receive the report on the results of search with the specified
    criteria, click **Subscribe**. Then specify how you want the report to be delivered – as an
    email or as a file stored to the file share.
  - To create an alert on the specific occurrences, click **Create alert**.
  - To export filtered data to PDF or CSV, click **Export data**.
- You can also configure and receive alerts on the events you are interested in.

# Deployment Procedure

Follow the steps to install Microsoft Copilot add-on.

**Step 1 –** Accept EULA.

**Step 2 –** Select the installation folder and click **Next**.

**Step 3 –** Click **Install**. The wizard will start and ask the additional parameters.

## Configure Copilot for Monitoring

Follow the steps to configure Copilot for monitoring.

**Step 1 –** Make sure you have a storage account to store logs. To reduce the volume of the stored
logs and the corresponding cost, it is recommended to create a rule in Life Cycle Management for
this storage. Netwrix Auditor doesn't need historic logs, after the add-on has written them into the
database. Refer to the
[corresponding Microsoft article](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview?tabs=azure-portal)
for additional information.

**Step 2 –** Register an Azure App and grant it the following permissions:

- Microsoft.Graph — Domain.Read.All
- Office 365 Management APIs — ActivityFeed.Read

## Configure the add-on

Follow the steps to configure the add-on.

**Step 1 –** Specify Active Directory credentials.

- Username – Provide the name of the account under which the service runs. Unless specified, the
  service runs under the account currently logged on.
- Password – Provide the password for the selected account.

![adcredentials](/img/product_docs/auditor/auditor/addon/copilot/adcredentials.webp)

**Step 2 –** Enter Tenant ID, App ID and App Secret of the Azure App you registered for the add-on.
Click **Next**.

![tenantapp](/img/product_docs/auditor/auditor/addon/copilot/tenantapp.webp)

**Step 3 –** Click **Run** and close the window. The service should start the data collection now.

# Copilot

Microsoft Copilot is an AI-powered assistant designed to help users in Microsoft 365 apps like Word,
Excel, and Teams. It leverages large language models to assist with tasks such as generating
content, analyzing data, and automating workflows.

To retrieve activity logs on Copilot interactions, the Add-on requires an Azure App registration.
This allows the application to interact with Microsoft services by obtaining necessary logs and data
related to Copilot activity.

The Netwrix Auditor Add-On for Microsoft Copilot works in collaboration with Netwrix Auditor. To get
the add-on up and running, refer the following topics:

- [Deployment Procedure](/docs/auditor/10.7/integrations/file-storage/copilot.md)
- [Work with Collected Data](/docs/auditor/10.7/integrations/file-storage/copilot.md)

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

- The Audit Database settings are configured in Auditor Server. See the
  [Prerequisites](/docs/auditor/10.7/api-reference/getting-started.md) and
  [Audit Database](/docs/auditor/10.7/administration/system-settings/audit-database.md) topics for additional information.
- The TCP 9699 port (default Integration API port) is open for inbound connections.
- The user writing data to the Audit Database is granted the Contributor role in Auditor. See the
  [Role-Based Access and Delegation](/docs/auditor/10.7/monitoring-plans/delegation-and-permissions.md) topic for additional
  information.
- Alternatively, you can grant the Global administrator role or add the user to the Netwrix Auditor
  Administrators group. In this case, this user will have the most extended permissions in the
  product.
- Active Directory Domain Services or Microsoft Entra Kerberos is used as an Identity source. See
  the [Deployment Procedure](/docs/auditor/10.7/integrations/cloud-platforms/azure-files.md) topic for additional information.

## How the Copilot Add-on Works

On a high level, the add-on works as follows:

- The add-on collects integration logs from the specified Azure storage account. This includes the
  information about the documents that have been used.
- The add-on reworking the collected logs into the Netwrix Auditor compatible format, which is
  Activity Records. Each Activity Record contains the user information, such as an account, action,
  time, and other details.
- Using the Integration API, the add-on sends the activity records to the Netwrix Auditor Server,
  which writes them to the Long-Term Archive and the Audit Database.

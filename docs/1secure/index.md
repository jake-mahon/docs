# 1Secure

Netwrix 1Secure is a Microsoft Azure-hosted, multi-tenant SaaS application that provides a single
location to manage both on-premises and cloud environments. The application collects data within the IT infrastructure and notifies you on any
actions made to the organization. These actions may include account creation or deletion, changes to
group memberships, changes to the organization, etc.

Netwrix 1Secure allows Managed Service Providers to generate a variety of reports to investigate
incidents and suspicious activities across the IT environment.

## Major Benefits

- Detect system alerts — on premises and in the cloud
- Increase productivity of IT Managed Service Provider team
- Provide comprehensive reports based on search parameters

## How It Works

Netwrix 1Secure is a Microsoft Azure hosted, multi-tenant SaaS application that provides a single
location to manage both on-premises and cloud environments. Solution architecture and components
interactions are shown in the figure below.

![overview_table](/img/product_docs/1secure/admin/overview_table.webp)

Netwrix 1Secure On-Prem Agent is a lightweight Windows service which you deploy in your network. The
agent collects aggregated data from your on-premises Netwrix 1SecureAPI and/or uploads the data to
your Netwrix 1Secure tenant via REST API calls over HTTPS every 15 minutes.

Netwrix 1SecureAPI or Azure Function App receives the data from Netwrix 1Secure On-Prem Agent.
Token-based authentication is used for verification between the Netwrix 1Secure API and the agent.
The service behind the Netwrix stores the data in the Azure SQL Database. The data is segregated by
tenant (organization).

All the activity records are stored in the Cosmos Database. The configuration settings, source
management, alerts are stored in the Main Database.

Netwrix 1Secure Website is the presentation layer of the product that retrieves data from the Azure
SQL database and presents it to users. Users can access this web portal with their corporate
credentials using Azure AD Authentication (OAuth 2.0). Data is retrieved via API calls made on the
user's behalf.

## Data Collection Workflow

The Netwrix 1Secure data collection workflow is as follows:

**Step 1 –** Add organizations. See the [Add Organizations](/docs/1secure/administration/organizations/managing-organizations.md)
topic for additional information.

**Step 2 –** Install the agent. See the [Install Agent](/docs/1secure/getting-started/installation.md) topic for
additional information.

Once you have added the organization and selected the domain for collecting the data, Netwrix
1Secure starts collecting audit data from the managed Active Directory, Azure AD domain, a computer,
an Exchange Online, or a SharePoint Online collection.

## System Management

### Notifications

Netwrix 1Secure provides real-time notifications to the users, which report on various issues for
the user. This includes an agent update, issues with organizations, status of the organizations,
expired credentials, and others.

| Icon                                                                     | Description                                             |
| ------------------------------------------------------------------------ | ------------------------------------------------------- |
| ![selfupdate_icon](/img/product_docs/1secure/admin/selfupdate_icon.webp) | Bell icon. Click the Bell icon to look for the updates. |

Follow the steps to review notifications.

**Step 1 –** Click the **Bell** icon in the upper right corner of your screen.

**Step 2 –** You can select and fix any of the issues on the displayed panel.

![notifications](/img/product_docs/1secure/admin/notifications.webp)

**Step 3 –** Select **Fix**.

### System Statuses

Statuses in Netwrix 1Secure allow you check up the state of the system, specifically - sources,
agent, and connectors. As you add your sources, connectors, install the agent, Netwrix 1Secure
provides several statuses for these:

![statuses_chart](/img/product_docs/1secure/admin/statuses_chart.webp)

**NOTE:** The New status changes to Healthy status when the agent finishes collection from the
environment. The time frame for a change may be within a minute up to several hours depending on the
environment size.

You can also review the agent status while adding the organization. See the
[Manage Organizations](/docs/1secure/administration/organizations) topic for more information.

### Updating Netwrix Cloud Agent

With Netwrix 1Secure, you can both update the version of the agent by installing new agent or using
Self-update function. The Self-update saves your time from installing the new version repeatedly,
while providing real-time notifications, managing agent schedule, and bulk update option.

During the update process, your activity monitoring will not be disrupted.

| Icon                                                                     | Description                                                                                     |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| ![selfupdate_icon](/img/product_docs/1secure/admin/selfupdate_icon.webp) | Bell Icon. Click the Bell Icon to look up for the available updates of the Netwrix Cloud Agent. |

#### Update Agents in Bulk

Follow the steps to update agents in bulk.

**Step 1 –** To update selected agents, on the Managed Organizations page, select **Bulk Update
Agent**.

![updateagents](/img/product_docs/1secure/admin/updateagents.webp)

**Step 2 –** On the Update Agents page, check the boxes next to agents you wish to update and click
**Confirm**.

The agents are now updated.

#### Edit Agent Update Schedule

Follow the steps to update agent schedule.

**Step 1 –** To edit the agent update schedule, on the Managed Organizations page, select **Agent
Update Settings**. The Edit Agent Update Schedule page displays.

![editagentupdatesschedule2](/img/product_docs/1secure/admin/editagentupdatesschedule2.webp)

**Step 2 –** In the Update Schedule section, select Enabled.

**Step 3 –** In the Update Window section, configure the options to specify when you want the update
to occur.

**Step 4 –** Select Confirm.

The agent update schedule is now configured.

#### Enable Self-Update Function

Follow the steps to enable the self-update function .

**Step 1 –** To look up the available updates, click the **Bell** icon. The panel with available
updates displays.

![selfupdate_panel](/img/product_docs/1secure/admin/selfupdate_panel.webp)

**Step 2 –** Click **Fix** for the agents to be updated. Now you can see the list of organizations
and which agents may be updated to the new version.

**Step 3 –** Click **Update available** to update the agent to the current version. The Edit Agent
Update Schedule page displays, offering you the proposed version.

![editagentupdatesschedule](/img/product_docs/1secure/admin/editagentupdatesschedule.webp)

**Step 4 –** Select **Confirm**. The agent shall update and upload a new .msi file of your agent.

**Step 5 –** Alternately, update the version for an organization from the Managed organizations
page. Select the **organization** and then the **Sites** tab.

![updateagents2](/img/product_docs/1secure/admin/updateagents2.webp)

**Step 6 –** Click Update.

**Step 7 –** Toggle on Override Tenancy Defaults if you want to change the update defaults for that
organization.

**Step 8 –** Click Edit.

**Step 9 –** On the Edit Agent Update Schedule window, select Enabled and apply the required
parameters to specify when you want the update occur.

![editagentupdatesschedule2](/img/product_docs/1secure/admin/editagentupdatesschedule2.webp)

**Step 10 –** Click **Confirm**.

The self-update function is now configured.

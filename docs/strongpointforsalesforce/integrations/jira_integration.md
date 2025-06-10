# Set Up the Jira Integration

Platform Governance for Salesforce's Change Enablement capabilities are integrated with Jira, one of the most popular issue ticketing and development project management systems. Customers are able to look for and include Salesforce Customizations, assess impacts for requested changes, and push Jira change tickets into a Change Request. This enables easy management of changes, seamless tracking of compliant changes and automating the reconciliation of change logs during an audit.

User benefits include:

- Avoid duplicate effort of creating tickets in two different systems.
- Perform impact analysis assessment.
- Navigate to DRD views.
- Enable automatic synchronization of Jira and Platform Governance for Salesforce change tickets.

Change Requests are not automatically created, as not all tickets result in a Change Request. Tickets must be pushed to Platform Governance for Salesforce to begin the process. If Automatic Synchronization is turned on, then changes to the Status and Customizations are synchronized between Jira and Platform Governance for Salesforce without the need to keep manually pushing the changes.

To set up the Jira integration:

1. [Review Your Jira Statuses](#Review-Your-Jira-Statuses)
2. [Install the App](#Install-the-App)
3. [Set Up Jira Cloud Integration Credentials](#Set-Up-Jira-Cloud-Integration-Credentials)
4. [Set Up Status Mapping](#Set-Up-Status-Mapping)

You can map custom fields between Change Requests and Jira. Refer to [Jira Field Mapping](/docs/strongpointforsalesforce/integrations/jira_field_map.md) for details.

## Review Your Jira Statuses

To take advantage of the automatic synchronization feature, we recommend reviewing your Jira statuses to be mapped to the Change Request statuses. When a ticket status is updated to a mapped status, Platform Governance for Salesforce handles the synchronization between Jira and Salesforce.

The mapping allows multiple Jira statuses to map to each Change Request status.   
The mapping is part of the [Set Up Status Mapping](#Set-Up-Status-Mapping) procedure.

Refer to the Atlassian documentation for instructions on [Defining status field values](https://confluence.atlassian.com/adminjiraserver070/defining-status-field-values-749382903.html?_ga=2.262596428.1900070949.1572132057-2138500458.1540834491).

## Install the App

Use the [Jira Cloud Installation](#Jira-Cloud-Installation), then complete the [Access Data with API Integration](#Access-Data-with-APIIntegration) or [Set Up Jira Cloud Integration Credentials](#Set-Up-Jira-Cloud-Integration-Credentials) after installing the app.

### Jira Cloud Installation

You must be a Jira system administrator to install the __Strongpoint for Salesforce__ app. Contact your Jira system administrator if you do not have administrative permissions.

1. Open your __Jira Software Dashboard__.
2. Select __Apps__ > __Explore more Apps >__
3. Search for __Strongpoint__.

   ![Strongpoint apps in the Jira Marketplace](/img/product_docs/strongpointforsalesforce/integrations/jira_marketplace.webp)
4. Click __Strongpoint for Salesforce__ to install the app.

#### Access Data with API Integration

You can use a connected app to request access to Salesforce data. These steps connect your Jira Cloud app to your Salesforce instance.

For a connected app to request access, it must be integrated with the Salesforce API using the OAuth 2.0 protocol. OAuth 2.0 is an open protocol that authorizes secure data sharing between applications through the exchange of tokens.

Configure the connected app:

1. Log in to your Salesforce org.
2. Open the Connected App:  
   __Setup__ > __Apps__ > __App Manager__ > __Strongpoint__ (where __App Type__ = __Connected__)

   ![Open the Strongpoint Connected App](/img/product_docs/strongpointforsalesforce/integrations/connected_app.webp)
3. Click the drop down arrow on the right side and select __Edit__.
4. Set the __Callback URL__ to __https://spjira.my.salesforce-sites.com/SpHandleJiraAuth__
5. These __Oauth Scopes__ must be selected:  
   __Full access (full)__  
   __Perform requests at any time (refresh\_token, offline\_access)__
6. Click __Save__.

   Your connected app requires 2-10 minutes after you save before it is available.
7. Click __Manage Consumer Details__.

   ![Click Manage Consumer Details](/img/product_docs/strongpointforsalesforce/integrations/manage_consumer_details.webp)
8. Copy the Consumer Key and the Consumer Secret codes to a clipboard. You are prompted for this information when you use the app.

If you do not use a connected app, you can set up Jira Cloud Integration Credentials as an alternative.

#### Set Up Jira Cloud Integration Credentials

1. From the Netwrix Dashboard: click __Configuration and Stats__ in the __Resources__ section, or open __Settings__ > __Configuration and Stats__.
2. Open the __Jira Configuration__ tab.

   ![Open the credentials](/img/product_docs/strongpointforsalesforce/integrations/jira_sp_credentials.webp)
3. Enter your credentials:

   - __Jira Username__ is your Jira login email associated with your Jira API token.
   - __Jira Token__ is your Jira API token. If you do not have your token, follow the steps in the [Atlassian](https://confluence.atlassian.com/cloud/api-tokens-938839638.html) documentation.
   - __Jira Account Name__ is the _company specific part_ of the Jira site URL (__https://___JiraAccountName___.atlassian.net__). Only enter the _JiraAccountName_, not the entire URL.
   - __Site URL__ is __https://site.force.secure.com__
4. Click __Save__.

#### Restricting Access to a Project

By default, all projects are visible for the Jira Platform Governance for Salesforce integration. You can restrict this by project or profile.

Users opening a restricted project receive a information message, instructions for enabling access, and a link to this topic. Follow the instructions for Restricting Access to a Project or Setting Groups/Profiles Visibility to grant the user appropriate access.

> _The Strongpoint Salesforce Integration is not supported for this project._

1. Open a Jira project.

   ![Open a project](/img/product_docs/strongpointforsalesforce/integrations/jira_restrict_access1.webp)
2. Select __Strongpoint Sf Settings__.
3. Select the __Project Visability Settings__ tab.
4. Enter the name of the project in the __Visibility Settings__. The specified project is the only one that is available to the Platform Governance for Salesforce integration. Leave __Visibility Settings__ blank to allow all projects access.
5. Click __Save__.

Only the specified project has access to the Platform Governance for Salesforce Jira installation. If __Visibility Settings__ is blank, all projects have access.

#### Setting Groups/Profiles Visibility

Access to the Jira Platform Governance for Salesforce integration can also be performed with Profile groups.

Users opening a restricted project receive a information message, instructions for enabling access, and a link to this topic. Follow the instructions for Restricting Access to a Project or Setting Groups/Profiles Visibility to grant the user appropriate access.

> _The Strongpoint Salesforce Integration is not supported for this project._

1. Open a Jira project.
2. Select __Strongpoint Sf Settings__.
3. Select the __Profile Visability Settings__ tab. There are two lists:   
   __Existing Groups__ are all of the current groups in Jira  
   __Selected Groups__ are groups that can see the Platform Governance for Salesforce Jira integration. If __Selected Groups__ is blank, all groups have access to the integration.

   ![Profile Visibility Settings](/img/product_docs/strongpointforsalesforce/integrations/profile_visability1.webp)
4. Select an existing group and click __Add__ to include it as a __Selected Group__. To remove a group from the selected list, select it and click __Remove__. If __Selected Groups__ is blank, all groups have access to the integration. If there are one or more groups, then access is restricted to the specified group.

## Set Up Status Mapping

1. From the Netwrix Dashboard: click __Configuration and Stats__ in the __Resources__ section, or open __Settings__ > __Configuration and Stats__.
2. Open the __Jira Configuration__ tab.
3. Open the __Status Mapping__ tab.

   ![Set up the Jira status mappings for Change Request status](/img/product_docs/strongpointforsalesforce/integrations/jira_status_settings.webp)
4. Enter the mappings between your Jira statuses and the Change Request statuses. You must define your [Jira statuses](#Jira-statuses) prior to this step. You can enter multiple Jira statuses for each Change Request status, separated by commas. For example, __In Progress, Backlog__. Assign your mapping for each of the Change Request statuses:

   - __Approved Values__
   - __Complete Values__
   - __In Progress Values__
   - __Pending Approval Values__
   - __Rejected Values__
5. Check __Is Automatic Sync__ to enable Platform Governance for Salesforce to handle the synchronization between Jira and Salesforce when a Ticket status is updated to a mapped status. without having to click __Push__. If you are using an org where you do not want to create a Change Request, leave this unchecked so you can do your research or testing without generating Change Requests.
6. Change Requests are not automatically created, as not all tickets result in a Change Request. Tickets must be pushed to Platform Governance for Salesforce to begin the process. If Automatic Synchronization is turned on, then changes to the Status and Customizations are synchronized between Jira and Platform Governance for Salesforce without the need to keep manually pushing the changes.
7. Click __Save__.

__Next Step:__ [Jira Walkthrough Example](/docs/strongpointforsalesforce/integrations/jira_walkthrough_example.md)

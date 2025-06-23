---
title: okta
sidebar_label: okta
description: Auditor 10.7 documentation for okta with configuration details, usage instructions, and implementation guidance.
---

# Work with Collected Data

To leverage data collected with the add-on, you can do the following in Auditor:

- Search for required data. For that, start Auditor client and navigate to **Search**. After
  specifying the criteria you need, click **Search**. You will get a list of activity records with
  detailed information on who did what in the reported time period.

You can apply a filter to narrow down your search results to the Netwrix **API** data source only.

![AR from CyberArk in NA](/img/product_docs/auditor/auditor/addon/cyberark/cyberark_thumb_0_0.webp)

- Also, you can click **Tools** in the upper-right corner and select the command you need. For
  example:
  - If you want to periodically receive the report on the results of search with the specified
    criteria, click **Subscribe**. Then specify how you want the report to be delivered – as an
    email or as a file stored to the file share.
  - To create an alert on the specific occurrences, click **Create alert**.
  - To export filtered data to PDF or CSV, click **Export data**.
- You can also configure and receive alerts on the events you are interested in.

See the following topics for additional information:

- [Alerts](/docs/auditor/10.7/administration/alerts-and-notifications/index.md)
- [View and Search Collected Data](/docs/auditor/10.7/administration/navigation-and-ui/favorites-and-search.md)
- [Subscriptions](/docs/auditor/10.7/reporting/report-management/report-subscriptions.md)

# Deploy the Add-On

Follow the steps to deploy the Add-On.

**Step 1 –** Download the distribution package **Netwrix_Auditor_Add-on_for_Okta.zip**.

**Step 2 –** Unpack it to a folder on the computer where you plan to deploy the add-on.

_Remember,_ deploying the add-on on the same machine with the Auditor Server.

**Step 3 –** Run the **NetwrixOktaAddon.exe** and follow the installation steps:

| Option                      | Description                                                                                                                                                                                                                         |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Okta Connection Settings    | Specify server address in the '_https://example.okta.com/_' format and SSWS token.                                                                                                                                                  |
| Netwrix Connection Settings | Specify settings to connect to Auditor: - Server address – provide the address of the Auditor Server host. - Username – Provide the name of the account used to connect to Auditor. - Password – Provide password for this account. |
| Summary                     | Review the Add-On settings.                                                                                                                                                                                                         |

# Okta

The add-on works in collaboration with Netwrix Auditor, supplying data about activity on your
Okta-based devices. Aggregating data into a single audit trail simplifies analysis, makes activity
monitoring more cost effective, and helps you keep tabs on your IT infrastructure.

Implemented as a service, this add-on facilitates the data transition from Okta-based systems to
Netwrix Auditor. All you have to do is provide connect ion details and specify parsing rules.

On a high level, the add-on works as follows:

1. The add-on listens to the specified UDP ports and captures designated Syslog messages.
2. The add-on processes these events into Netwrix Auditor-compatible format (Activity Records). Each
   Activity Record contains the user account, action, time, and other details.
3. Using the Integration API, the add-on sends the activity records to the Netwrix Auditor Server,
   which writes them to the Long-Term Archive and the Audit Database.

See the [Integration API](/docs/auditor/10.7/api-reference/index.md) topic for additional information on the structure
of the Activity Record and the capabilities of the NIntegration API.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| On...                   | Ensure that...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Auditor Server side | - .NET Framework [4.5](https://www.microsoft.com/en-us/download/details.aspx?id=30653) or later is installed. - The Audit Database settings are configured in Auditor Server. See the [Prerequisites](/docs/auditor/10.7/api-reference/getting-started.md) and [Audit Database](/docs/auditor/10.7/administration/system-settings/audit-database.md) topics for additional information. - The TCP **9699** port (default Integration API port) is open for inbound connections. - The user writing data to the Audit Database is granted the **Contributor** role in Auditor. See the [Role-Based Access and Delegation](/docs/auditor/10.7/monitoring-plans/delegation-and-permissions.md) topic for additional information. Alternatively, you can grant the **Global administrator** role or add the user to the **Netwrix Auditor Administrators** group. In this case, this user will have the most extended permissions in the product. |

### Accounts and Rights

By default, the add-on will run under the _Local System_ account. So, if the add-on and Auditor will
be running on different machines, the corresponding computer account will require at least the
**Contributor** role in Auditor. See the
[Role-Based Access and Delegation](/docs/auditor/10.7/monitoring-plans/delegation-and-permissions.md) topic for additional
information.

In case the add-on and Auditor are installed on the same server, no special settings are needed.

### Considerations and Limitations

- The Add-On must be deployed in the same subnet as Okta and Auditor.
- If the monitoring plan name in the _`<NetwrixAuditorPlan>`_ add-on configuration parameter is
  specified incorrectly, this may lead to temp files generation and, therefore, to inefficient disk
  space usage.

## Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts
leveraging Netwrix Auditor Integration API. Download the latest add-on version in the Add-on Store.

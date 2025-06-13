# Nasuni

The add-on works in collaboration with Netwrix Auditor, supplying data about activity on your Nasuni-based devices. Aggregating data into a single audit trail simplifies analysis, makes activity monitoring more cost effective, and helps you keep tabs on your IT infrastructure.

Implemented as a service, this add-on facilitates the data transition from Nasuni-based systems to Netwrix Auditor. All you have to do is provide connect ion details and specify parsing rules.

On a high level, the add-on works as follows:

1. The add-on listens to the specified UDP ports and captures designated Syslog messages.
2. The add-on processes these events into Netwrix Auditor-compatible format (Activity Records). Each Activity Record contains the user account, action, time, and other details.
3. Using the Integration API, the add-on sends the activity records to the Netwrix Auditor Server, which writes them to the Long-Term Archive and the Audit Database.

See the [Integration API](/versioned_docs/auditor_10.6/auditor/api/overview.md) topic for additional information on the structure of the Activity Record and the capabilities of the NIntegration API.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as follows:

| On... | Ensure that... |
| --- | --- |
| The Auditor Server side | - The Audit Database settings are configured in Auditor Server. See the [Prerequisites](/versioned_docs/auditor_10.6/auditor/api/prerequisites.md) and [Audit Database](/versioned_docs/auditor_10.6/auditor/admin/settings/auditdatabase.md) topics for additional information.  - The TCP __9699__ port (default Integration API port) is open for inbound connections.  - The user writing data to the Audit Database is granted the __Contributor__ role in Auditor. See the [Role-Based Access and Delegation](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/delegation.md) topic for additional information.  Alternatively, you can grant the __Global administrator__ role or add the user to the __Netwrix Auditor Administrators__ group. In this case, this user will have the most extended permissions in the product. |
| The computer where the add-on will be installed | - The UDP 514 port is open for inbound connections.  - .Net Framework 4.7.2 and above is installed. Review the following Microsoft technical article for additional information on how to install .Net Framework 4.7.2: [Microsoft .NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2). |

### Configure Logging for

Follow the steps to configure the syslog integration.

__Step 1 –__ Log in to the Nasuni Management Console and go to the __Console Settings__ > __Syslog Exports__.

__Step 2 –__ In the Network section, specify the __IP Address__ and __Port__ and save the configuration.

__Step 3 –__ Configure log settings:

- Set __Send Auditing Messages__ to "_ON_";
- Set __Logging Facility__ to default "_Local0 (16)_";
- Set __Log Level for Audit Message__ to "_Info_".

__Step 4 –__ Enable auditing:

1. On the Volumes tab, open __Auditing__.
2. Choose the volume you wish to be audited and click __Edit Volumes__.
3. Select the __Auditing Enabled__ option and choose which Event Types you wish to be reported.
4. Hit the __Save Auditing Settings__ button.

### Accounts and Rights

By default, the add-on will run under the _Local System_ account. The add-on and Auditor must be installed on the same server. If a specific account is designated to run the add-on, it needs local admin privileges.

### Considerations and Limitations

- The Add-On must be deployed in the same subnet as Nasuni NAS & File Server Silo Consolidation and Auditor.
- If the monitoring plan name in the _<NetwrixAuditorPlan>_ add-on configuration parameter is specified incorrectly, this may lead to temp files generation and, therefore, to inefficient disk space usage.
- If you are using Netwrix Auditor for Network Devices, the 514 UDP port may be already in use, and you should specify another port when configuring the add-on settings (see the [Install Add-On](/versioned_docs/auditor_10.6/auditor/addon/nasuni/install.md) and [Define Parameters](/versioned_docs/auditor_10.6/auditor/addon/nasuni/parameters.md) topics for additional information). Another option is to install the add-on and Auditor Server on different machines.

## Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts leveraging Netwrix Auditor Integration API. Download the latest add-on version in the Add-on Store.

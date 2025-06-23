---
title: nutanix ahv
sidebar_label: nutanix-ahv
description: Auditor 10.7 documentation for nutanix ahv with configuration details, usage instructions, and implementation guidance.
---

# Work with Collected Data

To leverage data collected with the add-on, you can do the following in Auditor:

- Search for required data. For that, start Auditor client and navigate to **Search**. After
  specifying the criteria you need, click **Search**. You will get a list of activity records with
  detailed information on who did what in the reported time period.

You might want to apply a filter to narrow down your search results to the Netwrix**API** data
source only.

![screen_results](/img/product_docs/auditor/auditor/addon/nutanixahv/nutanixahv_thumb_0_0.webp)

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

# Deployment Scenarios

The Add-On can run on any computer in your environment, except for the machine where your Nutanix
Prism Central/Element runs. Depending on the deployment scenario you choose, you will need to define
a different set of parameters

Possible deployment options are as follows:

1. Add-on running on the same machine as Auditor Server.
2. Add-on running on the remote machine.

## Example 1

- The add-on runs on the Auditor Server.
- Configuration parameters to specify in **settings.xml** (sample values):

````<NetwrixAuditorEndpoint>
https://172.28.6.19:9699/netwrix/api/v1/activity_records</NetwrixAuditorEndpoint>```

```<NetwrixAuditorUserName/>```

```<NetrixAuditorPassword/>```

Configuration parameters __NetwrixAuditorUserName__ and __NetwrixAuditorPassword__ are not required.

You will be prompted for the corresponding set of credentials (user name and password) when you run the __install.ps1__ script. For that, use the Netwrix Auditor __Add-on for Nutanix AHV Configurator__ tool (see steps 4 and 5 of the [Deploy the Add-On](/docs/auditor/10.7/integrations/specialized-integrations/nutanix-ahv.md)). Credentials for connection to Nutanix Prism server will be then encrypted and stored in the solution configuration. Consider that user account should have the __User Admin__ role in Nutanix Prism.

## Example 2

- The add-on runs on the Auditor Server with the explicitly specified user credentials, or on the remote machine.
- Configuration parameters to specify in __settings.xml__ (sample values):

  ```<NetwrixAuditorEndpoint>
  https://172.28.6.19:9699/netwrix/api/v1/activity_records</NetwrixAuditorEndpoint>```

  ```<NetwrixAuditorUserName>SecurityOfficer```
  ```</NetwrixAuditorUserName>```

  ```<NetwrixAuditorPassword>NetwrixUser```
  ```</NetwrixAuditorPassword>```

Netwrix recommends to create a special user account with permissions to access Auditor and Nutanix server.
````

# Deploy the Add-On

Follow the steps to deploy the Add-On:

**Step 1 –** Prepare Auditorfor data processing.

**Step 2 –** Configure message forwarding for Nutanix Prism.

**Step 3 –** Download the Add-On.

**Step 4 –** Configure Add-On parameters.

**Step 5 –** Connect to Prism Central Server.

**Step 6 –** Register the Add-On

## Prepare Auditor for Data Processing

In Auditor client, go to the Integrations section and verify Integration API settings:

1. Make sure the **Leverage Integration API** is switched to **ON**.
2. Check the TCP communication port number – default is **9699**.

See the [Prerequisites](/docs/auditor/10.7/api-reference/getting-started.md) topic for additional information.

By default, activity records are written to _Netwrix_Auditor_API_ database which is not associated
with a specific monitoring plan.

Optionally, you can create a dedicated monitoring plan in Auditor. In this case, data will be
written to a database linked to this plan. Target it at Netwrix API data source and enable for
monitoring. Add a dedicated item of _Integration_ type to the plan for data to be filtered by item
name. See the [Integration API](/docs/auditor/10.7/api-reference/index.md) topic for additional information.

In such scenario, you will need to specify this monitoring plan in the _MonitoringPlan_ and
_MonitoringPlanItem_ attributes in the add-on configuration parameters. See **Step 4** below for
details.

## Configure Message Forwarding for Nutanix Prism

To provide for interaction and data flow between Nutanix Prism and the Add-On, you should set up the
add-on installation server as a remote Syslog listener for Nutanix Prism. For that remote Syslog
server, you will need to specify the IP address and port for inbound messages. Depending on Nutanix
Prism server you are using (Element/Central), follow the related procedure below.

### Procedure for Nutanix Prism Element

Follow the steps If you are using Nutanix Prism Element.

**Step 1 –** Connect to a Controller VM (or Nutanix Prism) by SSH or via web console and execute the
`ncli` command.

**Step 2 –** Find the IP address of the Controller VM in Nutanix web console under **Settings** >
**General** > **Configure CVM**.

### Procedure for Nutanix Command-Line Interface

Alternatively, you can download and install the _ncli_ (Nutanix command-line interface) on any
server in your infrastructure, as described in the
[Nutanix Command-Line Interface (nCLI)](https://portal.nutanix.com/page/documents/details?targetId=Command-Ref-AOS-v55:man-ncli-c.html)
article, and connect to a Controller VM in your cluster.

Follow the steps if you are using Nutanix command-line interface.

**Step 1 –** Disable it temporarily until you configure a new remote Syslog listener. By default,
the remote Syslog listening server is enabled. For that, run the following command in ncli:

`ncli> rsyslog-config set-status enable=false`

**Step 2 –** Create a remote Syslog server — a remote server that will operate as a Syslog listener,
receiving the Syslog messages from Nutanix server. In the integration solution deployment, it will
be the add-on installation server. Run the following command in _nlci_:

`ncli> rsyslog-config add-server name=<CustomServerName> ip-address=<RemoteIP> port=<Port> network-protocol=udp`

here:

- `CustomServerName` — remote server that will receive the syslog messages (i.e., server on which
  the add-on will be deployed)
- `RemoteIP` — remote server IP address
- `Port` — Destination port number on the remote server

**Step 3 –** To ensure the server was created successfully, review the list of servers. For that,
run the following command:

`ncli> rsyslog-config ls-servers`

The server will be added to the cluster automatically.

**Step 4 –** Instruct the AUDIT module of Nutanix solution to forward its log information to the new
remote syslog listener, and specify the logging level. For that, run the following command:

`ncli> rsyslog-config add-module server-name=<CustomServerName> module-name=AUDIT include-monitor-logs=false level=notice`

**Step 5 –** Finally, enable syslog forwarding to remote server:  
` ncli> rsyslog-config set-status enable=true`

This syslog server will be added to the cluster automatically.

### Procedure for Nutanix Prism Central

First, provide the new remote Syslog server settings to Nutanix Prism server that will forward
Syslog messages. For that, follow the steps below:

**Step 1 –** Log in to Nutanix Prism Central.

**Step 2 –** Select **Settings** > **Email and Alerts** > **Syslog Server**.

**Step 3 –** Click **Configure Syslog Server**.

**Step 4 –** Enter remote Syslog server settings you specified at Step 2:

- **Server Name** — name of the remote server.
- **IP Address** — server IP address.
- **Port**— port for incoming messages

**Step 5 –** Select **UDP** as communication protocol.

**Step 6 –** Click **Configure**.

Next, for the most detailed logs to be sent to remote Syslog server, set the logging level in Prism
to _5_ (_Notice_). For that, follow the steps below:

**Step 1 –** Select **Data Source** and click **Edit**.

**Step 2 –** Select **Audit** module and select **5 - Notice** level.

**Step 3 –** Finally, click **Save**.

## Download the Add-On

Download the distribution package from the Netwrix website and unpack it to a folder on the computer
where you plan to deploy the add-on.

Customers who are logged in to the Netwrix Customer Portal can download the latest version of their
software products from the My Products page:
[https://www.netwrix.com/my_products.html](https://www.netwrix.com/my_products.html). See the
[Customer Portal Access](https://helpcenter.netwrix.com/bundle/NetwrixCustomerPortalAccess/page/Customer_Portal_Access.html)
topic for information on how to register for a Customer Portal account.

Partners and MSPs who are logged into the Netwrix Partner Portal can download the latest version of
their software products from the My Product page:
[https://www.netwrix.com/par/site/products](https://www.netwrix.com/my_products.html). To receive an
invitation to the Partner Portal, please contact
[netwrix.msp@netwrix.com](http://netwrix.msp@netwrix.com/).

## Configure Add-On Parameters

Open the add-on folder and edit the **settings.xml** file to configure the add-on parameters:

| Parameter                 | Default value                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NetwrixAuditorIntegration |                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| NetwrixAuditorEndpoint    | https://localhost: 9699/netwrix/api/ v1/activity_records | Auditor server IP address and port number followed by endpoint for posting Activity Records. Assumes that the add-on runs on the computer hosting Auditor Server and uses default port **9699**. If you want to run the add-on on another machine, provide a name of the computer where Auditor Server resides (e.g., _172.28.6.15, EnterpriseNAServer, WKS.enterprise.local_). To specify a non-default port, provide a server name followed by the port number (e.g., _WKS.enterprise.local:9999_). Do not modify the endpoint part (/netwrix/api . . . . ) |
| CertificateThumbprint     | NOCHECK                                                  | Auditor Certificate Thumbprint Property. Possible values: - `Empty`—Check Netwrix Auditor certificate via Windows Certificate Store. - `AB:BB:CC.`—Check Netwrix Auditor Server certificate thumbprint identifier. - `NOCHECK`—Do not check Netwrix Auditor certificate. Make sure to select this parameter if you plan to specify servers by their IP.                                                                                                                                                                                                       |
| DateTimeFormat            | yyyy-MM-ddTHH:mm:ssZ                                     | Auditor time format. By default, set to zero offset.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| MonitoringPlan            | —                                                        | Unless specified, data is written to Netwrix_Auditor_API database and is not associated with a specific monitoring plan. Specify a name of associated monitoring plan in Auditor. In this case, data will be written to a database linked to this plan. If you select a plan name in the add-on, make sure a dedicated plan is created in Auditor, the Netwrix API data source is added to the plan and enabled for monitoring. Otherwise, the add-on will not be able to write data to the Audit Database.                                                   |
| MonitoringPlanItem        | —                                                        | Unless specified, data is not associated with a specific plan and, thus, cannot be filtered by item name. Specify an item name. Make sure to create a dedicated item in Auditor in advance.                                                                                                                                                                                                                                                                                                                                                                   |
| UserName                  | Current user credentials                                 | Credentials to access Auditor server. Unless specified, the add-on runs with the current user credentials. If you want the add-on to use another account to connect to Auditor server, specify the account name in the _DOMAIN\username_ format.                                                                                                                                                                                                                                                                                                              |
| Password                  | Current user credentials                                 | Unless specified, the service runs with the current user credentials. Provide a different password if necessary.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ARsNumberAtTime           |                                                          | Maximum number of Audit Records that can be sent to Auditor at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ARsSendingPeriodicity     |                                                          | Periodic time interval for sending Activity Records (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| PauseWhenSendingFailed    |                                                          | Pause after a failed attempt to send Activity Records (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **DataCollection**        |                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ListenUDPPort             | 514                                                      | UDP port for receiving incoming Syslog messages. Make sure that this port is not used by any other add-ons or applications (for example, Netwrix Auditor for Network Devices); otherwise specify another port here.                                                                                                                                                                                                                                                                                                                                           |
| StateUpdatingPeriodicity  |                                                          | Periodic time interval for updating state of clusters (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| EventsReadingPeriodicity  |                                                          | Periodic time interval for reading events (in seconds). Target endpoint: _/api/nutanix/v2.0/events_                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| PageLength                |                                                          | The number of objects loaded with one request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ShortTermFolder           |                                                          | Short term folder for collected data (full or local path).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

If you modify parameters in the **settings.xml** file, remember to save the changes and then restart
the **Netwrix Auditor Add-on for Nutanix AHV** service for them to take effect.

If you need to change user name or password for accessing Prism Central, you should run
Netwrix.IntegrationConfiguration.exe file that will prompt you for the new credentials (see step 5
below). Then restart the Netwrix Auditor Add-on for Nutanix AHV service for the changes to take
effect.

## Connect to Prism Central Server

Run the Netwrix.IntegrationConfiguration.exe file and specify the following:

- Prism IP address – IP address of Prism Cental server.
- User name – Specify a user name to connect to Prism Central server.
- Password – Specify password fof the account used to connect to Prism Central server.

These parameters will be configured automatically by **install.ps1** script. If you need to modify
it later, use this configurator from the add-on package.

Credentials for connection to Nutanix Prism server will be then encrypted and stored in the solution
configuration. Consider that user account should have the **User Admin** role in Nutanix Prism.

## Register the Add-On

Run the **install.ps1** PowerShell script to register the add-on service. You will be also prompted
to specify credentials for accessing Nutanix Prism Central. These credentials will be encrypted and
used for secure communication. If you need to modify them later, run the
Netwrix.IntegrationConfiguration.exe file from the add-on package.

# Monitoring Scope

Review a full list of object types and activities monitored on Nutanix Prism with the add-on.

| Object                        | Action                                                                                                                         | Property                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Virtual Machine1              | Create/Delete Clone Migrate Rename State change (Power off/on, Pause etc.) Restore from snapshot Hardware Configuration change | Name MAC Address VLAN Name Connection State Number Of Processors Cores Per Processor Memory Size (MiB) Disk Size (Bytes) Host IP |
| Host (Node) 2                 | Add3/Remove4                                                                                                                   | IP5                                                                                                                              |
| Host Cluster                  | -                                                                                                                              | -                                                                                                                                |
| VM Network (Subnet)           | -                                                                                                                              | -                                                                                                                                |
| Local User2                   | • Create/Delete • Properties change6 • Roles change6 • Log in/out • Password Change                                            | • Username • First Name6 • Last Name6 • Email6 • Language6 • Roles6                                                              |
| Authentication Configuration2 | • Authentication type change                                                                                                   | • Authentication Types                                                                                                           |

1 — Syslog

2 — Events (API v2.0)

3 — User not applicable

4 — Host remove event consist of 2 events (see Appendix B):

- Host marked for removal: this event has a “Who”
- Host deleted: this event occurs when the host deletion task completes.

5 — The host add event contains the IP address of the host Controller VM, and not the host IP
address.

6 — UI API.

# Nutanix AHV

Netwrix Auditor is a visibility platform for user behavior analysis and risk mitigation that enables
control over changes, configurations and access in hybrid IT environments to protect data regardless
of its location. The platform provides security analytics to detect anomalies in user behavior and
investigate threat patterns before a data breach occurs.

Nutanix AHV is a virtualization platform within the Nutanix Enterprise Cloud architecture. It
provides facilities for VM deployment, operation and centralized management. Nutanix AHV is a fully
integrated component of the Nutanix Enterprise Cloud.

Virtualization teams, Managed Service Providers and other IT professionals need to detect who does
what in the Nutanix Hyperconverged infrastructure. For that, a unified audit trail is required,
supporting detailed Nutanix monitoring and effective response to changes.

For that purpose, you can use a specially designed add-on that supports audit for Nutanix AHV and
Nutanix Prism/Element. The add-on works in collaboration with Auditor, supplying data about
operations on your Nutanix AHV to Netwrix database. Aggregating data into a single audit trail
simplifies analysis, makes activity monitoring more cost-effective, and helps you keep tabs on your
IT infrastructure.

Major benefits:

- Gain a high-level view of the data you store
- Detect unauthorized activity that might threaten your data

## How it works

The add-on is implemented as a Syslog service that collects activity data from Nutanix
infrastructure and sends it to Netwrix Auditor using the Integration API.

![HIW_diagram_new](/img/product_docs/auditor/auditor/addon/cyberark/diagram_thumb_0_0.webp)

On a high level, the solution works as follows:

1. An IT administrator configures the Integration API settings to enable data collection and storage
   to Netwrix database for further reporting, search, etc.

   It is recommended to create a dedicated monitoring plan in Netwrix Auditor and add a dedicated
   item of **Integration** type to it — then you will be able to filter data in reports and search
   results by monitoring plan/item name.

2. On Nutanix side, the IT administrator prepares a dedicated user account for accessing Nutanix
   Prism Central/Element and configures Syslog server (IP, port, etc.).
3. The administrator opens the Settings.xml configuration file and specifies the necessary
   parameters for add-on operation, Netwrix Auditor settings, etc. The add-on will operate as a
   Syslog listener for Nutanix server.
4. The administrator runs the Netwrix.IntegrationConfiguration.exe file and provides credentials to
   connect to Prism Central server.
5. The administrator selects the deployment scenario and runs the **install.ps1** PowerShell script
   file to deploy and configure the add-on components on the target server.
6. In particular, the script deploys and starts **Netwrix Auditor Add-on for Nutanix AHV** Windows
   Service— this is the main add-on component, responsible for audit data collection and forwarding.
7. The add-on starts collecting and forwarding activity data from Nutanix Prism server: it listens
   to the specified UDP port and captures designated Syslog event messages and also collects
   activity data using Nutanix REST API.

Syslog event data communication is performed using UDP version of Syslog protocol. See the
[Monitoring Scope](/docs/auditor/10.7/integrations/specialized-integrations/nutanix-ahv.md) topic for additional information on the default list of
events supported out-of-the box.

8. The add-on processes the incoming Syslog messages and activity data collected using Nutanix REST
   API into NAuditor -compatible format (Activity Records). Each Activity Record contains the
   Who-What-When-Where-Action information (that is, initiator's account, time, action, and other
   details).
9. Using the Integration API, the add-on sends the activity records to Auditor Server that writes
   them to the Audit Database and Long-Term Archive. Data is sent periodically, by default every
   second.

See the [Integration API](/docs/auditor/10.7/api-reference/index.md) topic for additional information on the Activity
Record structure and capabilities of the Integration API.

10. Users open Auditor Client to work with collected data:
    - Search for file changes using certain criteria
    - Export data to PDF or CSV files
    - Save search results as reports
    - Subscribe to search results
    - Configure and receive alerts

## Add-on Delivery Package

The add-on delivery package is a ZIP archive that includes the following files:

| File name                              | Description                                                                    |
| -------------------------------------- | ------------------------------------------------------------------------------ |
| Install.ps1                            | PowerShell script that creates windows service to execute add-on.              |
| Settings.xml                           | Contains parameters for the add-on service operation.                          |
| Netwrix.IntegrationConfiguration.exe   | Add-on component responsible for accessing Prism Central server.               |
| Netwrix.Nutanix.IntegrationService.exe | Main add-on component, responsible for audit data collection from Nutanix AHV. |

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| Where                                          | Prerequisite to check                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auditor Server side                            | - Auditor version 9.9 or later. - Netwrix Integration API and Audit Database settings are configured properly in Netwrix Auditor. See the [Prerequisites](/docs/auditor/10.7/api-reference/getting-started.md) and [Audit Database](/docs/auditor/10.7/administration/system-settings/audit-database.md) topics for additional information. - The **TCP 9699** port must be open on Windows firewall for inbound connections. - User account under which data will be written to the Audit Database requires the **Contributor** role in Auditor. See the [Role-Based Access and Delegation](/docs/auditor/10.7/monitoring-plans/delegation-and-permissions.md) topic for additional information. Alternatively, you can grant it the **Global administrator** role, or add that account to the **Netwrix Auditor Administrators** group. |
| The machine where the add-on will be installed | - Any of the following Windows OS versions: - Windows Server 2012 R2 (or later) - Windows 8.1 (or later) - The **UDP** port must be open on Windows firewall for inbound connections. - .NET Framework versions 4.5 or later                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Nutanix Prism server                           | Nutanix AOS 5.11, 5.15, or 5.20                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Accounts and rights

It is recommended to create a dedicated account for running **install.ps1** and **Netwrix Auditor
Add-on for Nutanix AHV** (main service of the solution). The service will connect to Auditor Server
using this account, so at least the **Contributor** role in Auditor is required for it. See the
[Role-Based Access and Delegation](/docs/auditor/10.7/monitoring-plans/delegation-and-permissions.md) topic for additional
information.

This service account requires the **User Admin** role in Nutanix Prism. You will be prompted for the
corresponding set of credentials when you run the **install.ps1** script (see Steps 4 and 5 of the
[Deploy the Add-On](/docs/auditor/10.7/integrations/specialized-integrations/nutanix-ahv.md)). User name and password for connection to Nutanix Prism server will
be then encrypted and stored in the solution configuration.

### Considerations and limitations

- By default, the add-on is targeted at a single Nutanix Prism Central/Element server.
- Netwrix add-on must be deployed in the same subnet as Nutanix Prism Central/Element server.
- Please be aware that monitoring of actions performed on the add-on installation server is not
  supported.

### Upgrade Path

To upgrade from versions released earlier than August 2020, do the following:

1. Stop and remove the **Netwrix Auditor Add-on for Nutanix AHV** service.
2. Download and unpack the new add-on package to the same location as the earlier version.
3. Run the **install.ps1** PowerShell script file from the new add-on version on the target server.

## Compatibility notice

The add-on is compatible with Nutanix AOS 5.15 and Nutanix AOS 5.20, and with Auditor 10.0 and
later.

# Maintenance and Troubleshooting

If you cannot see collected data in Auditor, check the following:

- Service account has sufficient rights to access Auditor.
- In Auditor settings, go to the **Integrations** section and make sure the **Leverage Integration
  API** is switched to **ON**. Check the communication port number – default is **9699**.
- If you configured a dedicated monitoring plan, make sure data source monitoring is enabled.
- Verify the parameters you provided in **settings.xml**.

Also, remember that events from the remote Syslog server (add-on installation server) are not
collected.

Currently, the add-on supports only one Prism installation (Central or Element). To monitor more
than one Prism Central/Element, you can copy the add-on to another folder, configure
**settings.xml** as described in this document and modify **install.ps1** to rename the service:

**Step 1 –** Deploy one more add-on instance to the server where the first add-on instance is
already installed. Be sure to use a different installation folder.

**Step 2 –** Open **settings.xml** and configure the new add-on instance to work with the second
Prism server.

**Step 3 –** Open **install.ps1** for the new add-on for edit.

**Step 4 –** Modify the default service name:

`$name = "enter_new_name"`

**Step 5 –** Save and then launch the updated **install.ps1** file.

# Deploy the Add-On

Follow the steps to deploy the Add-On:

__Step 1 –__ Prepare Auditorfor data processing.

__Step 2 –__ Configure message forwarding for Nutanix Prism.

__Step 3 –__ Download the Add-On.

__Step 4 –__ Configure Add-On parameters.

__Step 5 –__ Connect to Prism Central Server.

__Step 6 –__ Register the Add-On

## Prepare Auditor for Data Processing

In Auditor client, go to the Integrations section and verify Integration API settings:

1. Make sure the __Leverage Integration API__ is switched to __ON__.
2. Check the TCP communication port number – default is __9699__.

See the [Prerequisites](/docs/product_docs/auditor/auditor/api/prerequisites.md) topic for additional information.

By default, activity records are written to _Netwrix\_Auditor\_API_ database which is not associated with a specific monitoring plan.

Optionally, you can create a dedicated monitoring plan in Auditor. In this case, data will be written to a database linked to this plan. Target it at Netwrix API data source and enable for monitoring. Add a dedicated item of _Integration_ type to the plan for data to be filtered by item name. See the [Integration API](/docs/product_docs/auditor/auditor/api/overview.md) topic for additional information.

In such scenario, you will need to specify this monitoring plan in the _MonitoringPlan_ and _MonitoringPlanItem_ attributes in the add-on configuration parameters. See __Step 4__ below for details.

## Configure Message Forwarding for Nutanix Prism

To provide for interaction and data flow between Nutanix Prism and the Add-On, you should set up the add-on installation server as a remote Syslog listener for Nutanix Prism. For that remote Syslog server, you will need to specify the IP address and port for inbound messages. Depending on Nutanix Prism server you are using (Element/Central), follow the related procedure below.

### Procedure for Nutanix Prism Element

Follow the steps If you are using Nutanix Prism Element.

__Step 1 –__  Connect to a Controller VM (or Nutanix Prism) by SSH or via web console and execute the ```ncli``` command.

__Step 2 –__ Find the IP address of the Controller VM in Nutanix web console under __Settings__ > __General__ > __Configure CVM__.

### Procedure for Nutanix Command-Line Interface

Alternatively, you can download and install the _ncli_ (Nutanix command-line interface) on any server in your infrastructure, as described in the [Nutanix Command-Line Interface (nCLI)](https://portal.nutanix.com/page/documents/details?targetId=Command-Ref-AOS-v55:man-ncli-c.html) article, and connect to a Controller VM in your cluster.

Follow the steps if you are using Nutanix command-line interface.

__Step 1 –__ Disable it temporarily until you configure a new remote Syslog listener. By default, the remote Syslog listening server is enabled. For that, run the following command in ncli:

```ncli> rsyslog-config set-status enable=false```

__Step 2 –__ Create a remote Syslog server — a remote server that will operate as a Syslog listener, receiving the Syslog messages from Nutanix server. In the integration solution deployment, it will be the add-on installation server. Run the following command in _nlci_:

```ncli> rsyslog-config add-server name=<CustomServerName> ip-address=<RemoteIP> port=<Port> network-protocol=udp```

here:

- ```CustomServerName``` — remote server that will receive the syslog messages (i.e., server on which the add-on will be deployed)
- ```RemoteIP``` — remote server IP address
- ```Port``` — Destination port number on the remote server

__Step 3 –__ To ensure the server was created successfully, review the list of servers. For that, run the following command:

```ncli> rsyslog-config ls-servers```

The server will be added to the cluster automatically.

__Step 4 –__ Instruct the AUDIT module of Nutanix solution to forward its log information to the new remote syslog listener, and specify the logging level. For that, run the following command:
  
 ```ncli> rsyslog-config add-module server-name=<CustomServerName> module-name=AUDIT include-monitor-logs=false level=notice```

__Step 5 –__ Finally, enable syslog forwarding to remote server:   
``` ncli> rsyslog-config set-status enable=true```

This syslog server will be added to the cluster automatically.

### Procedure for Nutanix Prism Central

First, provide the new remote Syslog server settings to Nutanix Prism server that will forward Syslog messages. For that, follow the steps below:

__Step 1 –__ Log in to Nutanix Prism Central.

__Step 2 –__ Select __Settings__ > __Email and Alerts__ > __Syslog Server__.

__Step 3 –__ Click __Configure Syslog Server__.

__Step 4 –__ Enter remote Syslog server settings you specified at Step 2:

- __Server Name__ — name of the remote server.
- __IP Address__ — server IP address.
- __Port__— port for incoming messages

__Step 5 –__ Select __UDP__ as communication protocol.

__Step 6 –__ Click __Configure__.

Next, for the most detailed logs to be sent to remote Syslog server, set the logging level in Prism to _5_ (_Notice_). For that, follow the steps below:

__Step 1 –__ Select __Data Source__ and click __Edit__.

__Step 2 –__ Select __Audit__ module and select __5 - Notice__ level.

__Step 3 –__ Finally, click __Save__.

## Download the Add-On

Download the distribution package from the Netwrix website and unpack it to a folder on the computer where you plan to deploy the add-on.

Customers who are logged in to the Netwrix Customer Portal can download the latest version of their software products from the My Products page: [https://www.netwrix.com/my\_products.html](https://www.netwrix.com/my_products.html). See the [Customer Portal Access](https://helpcenter.netwrix.com/bundle/NetwrixCustomerPortalAccess/page/Customer_Portal_Access.html) topic for information on how to register for a Customer Portal account.

Partners and MSPs who are logged into the Netwrix Partner Portal can download the latest version of their software products from the My Product page: [https://www.netwrix.com/par/site/products](https://www.netwrix.com/my_products.html). To receive an invitation to the Partner Portal, please contact [netwrix.msp@netwrix.com](http://netwrix.msp@netwrix.com/).

## Configure Add-On Parameters

Open the add-on folder and edit the __settings.xml__ file to configure the add-on parameters:

| Parameter | Default value | Description |
| --- | --- | --- |
| NetwrixAuditorIntegration |  |  |
| NetwrixAuditorEndpoint | https://localhost:   9699/netwrix/api/   v1/activity\_records | Auditor server IP address and port number followed by endpoint for posting Activity Records.  Assumes that the add-on runs on the computer hosting Auditor Server and uses default port __9699__.  If you want to run the add-on on another machine, provide a name of the computer where Auditor Server resides (e.g., _172.28.6.15, EnterpriseNAServer, WKS.enterprise.local_).  To specify a non-default port, provide a server name followed by the port number (e.g., _WKS.enterprise.local:9999_).  Do not modify the endpoint part (/netwrix/api . . . . ) |
| CertificateThumbprint | NOCHECK | Auditor Certificate Thumbprint Property. Possible values:   - ```Empty```—Check Netwrix Auditor certificate via Windows Certificate Store. - ```AB:BB:CC.```—Check Netwrix Auditor Server certificate thumbprint identifier. - ```NOCHECK```—Do not check Netwrix Auditor certificate. Make sure to select this parameter if you plan to specify servers by their IP. |
| DateTimeFormat | yyyy-MM-ddTHH:mm:ssZ | Auditor time format. By default, set to zero offset. |
| MonitoringPlan | — | Unless specified, data is written to Netwrix\_Auditor\_API database and is not associated with a specific monitoring plan.  Specify a name of associated monitoring plan in Auditor. In this case, data will be written to a database linked to this plan.  If you select a plan name in the add-on, make sure a dedicated plan is created in Auditor, the Netwrix API data source is added to the plan and enabled for monitoring. Otherwise, the add-on will not be able to write data to the Audit Database. |
| MonitoringPlanItem | — | Unless specified, data is not associated with a specific plan and, thus, cannot be filtered by item name.  Specify an item name.  Make sure to create a dedicated item in Auditor in advance. |
| UserName | Current user credentials | Credentials to access Auditor server.  Unless specified, the add-on runs with the current user credentials.  If you want the add-on to use another account to connect to Auditor server, specify the account name in the _DOMAIN\username_ format. |
| Password | Current user credentials | Unless specified, the service runs with the current user credentials. Provide a different password if necessary. |
| ARsNumberAtTime |  | Maximum number of Audit Records that can be sent to Auditor at a time. |
| ARsSendingPeriodicity |  | Periodic time interval for sending Activity Records (in seconds). |
| PauseWhenSendingFailed |  | Pause after a failed attempt to send Activity Records (in seconds). |
| __DataCollection__ |  |  |
| ListenUDPPort | 514 | UDP port for receiving incoming Syslog messages.  Make sure that this port is not used by any other add-ons or applications (for example, Netwrix Auditor for Network Devices); otherwise specify another port here. |
| StateUpdatingPeriodicity |  | Periodic time interval for updating state of clusters (in seconds). |
| EventsReadingPeriodicity |  | Periodic time interval for reading events (in seconds). Target endpoint: _/api/nutanix/v2.0/events_ |
| PageLength |  | The number of objects loaded with one request. |
| ShortTermFolder |  | Short term folder for collected data (full or local path). |

If you modify parameters in the __settings.xml__ file, remember to save the changes and then restart the __Netwrix Auditor Add-on for Nutanix AHV__ service for them to take effect.

If you need to change user name or password for accessing Prism Central, you should run Netwrix.IntegrationConfiguration.exe file that will prompt you for the new credentials (see step 5 below). Then restart the Netwrix Auditor Add-on for Nutanix AHV service for the changes to take effect.

## Connect to Prism Central Server

Run the Netwrix.IntegrationConfiguration.exe file and specify the following:

- Prism IP address – IP address of Prism Cental server.
- User name – Specify a user name to connect to Prism Central server.
- Password – Specify password fof the account used to connect to Prism Central server.

These parameters will be configured automatically by __install.ps1__ script. If you need to modify it later, use this configurator from the add-on package.

Credentials for connection to Nutanix Prism server will be then encrypted and stored in the solution configuration. Consider that user account should have the __User Admin__ role in Nutanix Prism.

## Register the Add-On

Run the __install.ps1__ PowerShell script to register the add-on service. You will be also prompted to specify credentials for accessing Nutanix Prism Central. These credentials will be encrypted and used for secure communication. If you need to modify them later, run the Netwrix.IntegrationConfiguration.exe file from the add-on package.

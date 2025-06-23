---
title: linux systems
sidebar_label: linux-systems
description: Auditor 10.7 documentation for linux systems with configuration details, usage instructions, and implementation guidance.
---

# Work with Collected Data

Follow the steps to search for collected data:

**Step 1 –** Start the Auditor client and navigate to **Search**.

**Step 2 –** Click **Search**.

**NOTE:** You might want to apply a filter to narrow down your search results to the Netwrix API
data source only.

## Expand List of Gathered Events

Based on the activity you get, you may want to adjust the processing rules, add other relevant
events, etc. To do that, copy and edit the file with processing rules, and then restart the service.

# Install Add-On

Follow the steps to install the Add-On:

**Step 1 –** Navigate to your add-on package.

**Step 2 –** Unzip the Add-On to a desired folder.

**Step 3 –** Run the installation package.

**Step 4 –** Accept the license agreement and follow the instructions of the setup wizard.

**Step 5 –** On the **Destination Folder** step, specify the installation folder (_C:\Program Files
(x86)\Netwrix Add-ons\<Add-on name>_ by default).

**Step 6 –** Click **Install**.

**Step 7 –** When done, click **Finish**.

# Linux Generic Syslog

The add-on works in collaboration with Netwrix Auditor, supplying data about activity on your
Linux-based devices. Aggregating data into a single audit trail simplifies analysis, makes activity
monitoring more cost effective, and helps you keep tabs on your IT infrastructure.

Implemented as a service, this add-on facilitates the data transition from Linux-based systems to
Netwrix Auditor. All you have to do is provide connection details and specify parsing rules.

On a high level, the add-on works as follows:

**Step 1 –** The add-on listens to the specified UDP ports and captures designated Syslog messages.

**Step 2 –** Out of the box, messages from Red Hat Enterprise Linux 7 and 6, SUSE Linux Enterprise
Server 12, openSUSE42, and Ubuntu 16 are supported. For other distributions, deployment of the
rsyslog package may be required. You can edit the add-on configuration to extend the captured
message list.

**Step 3 –** The add-on processes these events into Netwrix Auditor-compatible format (Activity
Records). Each Activity Record contains the user account, action, time, and other details.

**Step 4 –** Using the Integration API, the add-on sends the activity records to the Netwrix Auditor
Server, which writes them to the Long-Term Archive and the Audit Database.

See the [Integration API](/docs/auditor/10.7/api-reference/index.md) topic for additional information on the structure
of the Activity Record and the capabilities of the NIntegration API.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| On...                                           | Ensure that...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Netwrix Auditor Server side                 | - The Audit Database settings are configured in Auditor Server. - The TCP **9699** port (default Auditor Integration API port) is open for inbound connections. - The user retrieving data from the Audit Database is granted the Contributor role in Auditor. Alternatively, you can grant the Global administrator role or add the user to the Netwrix Auditor Administrators group. In this case, this user will have the most extended permissions in the product.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| The computer where the add-on will be installed | - The UDP 514 port is open for inbound connections. **CAUTION:** UPD 514 port can only be used by one service, otherwise the following error will occur: [ERROR] Error occurred when starting the syslog udp listener. Only one usage of each socket address (protocol/network address/port) is normally permitted - .Net Framework [3.5 SP1](http://www.microsoft.com/en-us/download/details.aspx?id=22), [4.0](https://www.microsoft.com/en-us/download/details.aspx?id=17851), [4.5](https://www.microsoft.com/en-us/download/details.aspx?id=30653), or [4.6](https://www.microsoft.com/en-us/download/details.aspx?id=48130) is installed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| On the target syslog-based platform             | Outbound UDP 514 port must be enabled. The **Syslog daemon** must be configured to redirect events. The procedure below explains how to configure redirection. **NOTE:** Red Hat Enterprise Linux 7 and 6, SUSE Linux Enterprise Server 12, openSUSE 42, and Ubuntu 16 are supported out of the box. For other distributions, deployment of the rsyslog package may be required. - On Red Hat Enterprise Linux 7, perform the following steps: **Step 5 –** Open the **/ etc/ rsyslog.conf** file. **Step 6 –** Add the following line: `auth.*;authpriv.* @name:514;RSYSLOG_SyslogProtocol23Format` where **name** is a FQDN, Net BIOSname or IP address of the computer where Netwrix Auditor Server is installed. For example: `auth.*;authpriv.* @172.28.18.25:514;RSYSLOG_SyslogProtocol23Format` **Step 7 –** Launch the **RHEL console** and execute the following command: `service rsyslog restart` - On Ubuntu 16, perform the following steps: **Step 1 –** Navigate to the **/ etc/ rsyslog.d/ 50-default.conf** file. **Step 2 –** Add the following line: `auth.*;authpriv.* @name:514;RSYSLOG_SyslogProtocol23Format` where **name** is a FQDN, Net BIOSname or IP address of the computer where Netwrix Auditor Server is installed. For example: `auth.*;authpriv.* @172.28.18.25:514;RSYSLOG_SyslogProtocol23Format` **Step 3 –** Launch the **UBUNTU console** and execute the following command: `service rsyslog restart` |

# Define Parameters

The configuration wizard opens in the default web browser:

![GenericLinuxConfigWizard](/img/product_docs/auditor/auditor/addon/privilegeduserlinux/configwizard.webp)

Click **Proceed** and complete the following fields:

| Option                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Specify General Settings             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Listed UDP port                      | Specify UDP port for listening incoming events. (**514** by default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Auditor Endpoint                     | Auditor Server IP address and port number followed by endpoint for posting Activity Records. Assumes that the add-on runs on the computer hostingAuditor Server and uses default port _9699_. If you want to run the add-on on another machine, provide a name of the computer where Auditor Server resides (e.g., _172.28.6.15_, _EnterpriseNAServer_, _WKS.enterprise.local_). To specify a non-default port, provide a server name followed by the port number (e.g., _WKS.ent erprise.local:9999_). Do not modify the endpoint part (_/ netwrix/ api_ ) |
| Certificate Thumbprint               | Netwrix Auditor Certificate Thumbprint Property. Possible values: - `Empty`—Check Auditor certificate via Windows Certificate Store. - `AB:BB:CC`—Check Auditor Server certificate thumbprint identifier. - `NOCHECK`—Do not check Auditor certificate. Make sure to select this parameter if you plan to specify servers by their IP.                                                                                                                                                                                                                      |
| Specify Active Directory credentials |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Username                             | Provide the name of the account under which the service runs. Unless specified, the service runs under the account currently logged on.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Password                             | Provide the password for the selected account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Auditor Monitoring Plan settings     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Auditor Plan                         | Unless specified, data is written to **Netwrix_Auditor_API** database and is not associated with a specific monitoring plan. Specify a name of associated monitoring plan in Auditor. In this case, data will be written to a database linked to this plan. If you select a plan name in the add- on, make sure a dedicated plan is created in Auditor, the Netwrix **API** data source is added to the plan and enabled for monitoring. Otherwise, the add- on will not be able to write data to the Audit Database.                                       |
| Auditor Plan Item                    | Unless specified, data is not associated with a specific plan and, thus, cannot be filtered by item name. Specify an item name. Make sure to create a dedicated item inAuditor in advance.                                                                                                                                                                                                                                                                                                                                                                  |
| Accept List                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Address                              | Specify a list of IP addresses of syslog events sources. The service will collect and process events from these sources only. Events collected from any other source will be ignored.                                                                                                                                                                                                                                                                                                                                                                       |

Click **Run** to start collecting data with the Add-On.

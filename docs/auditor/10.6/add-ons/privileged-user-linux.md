# Work with Collected Data

Follow the steps to work with collected data:

**Step 1 –** Start the Auditor client and navigate to **Search**.

**Step 2 –** Click **Search**.

**NOTE:** You might want to apply a filter to narrow down your search results to the NetwrixAPI data
source only.

# Install the Add-On

To install the Add-On, perform the following steps:

**Step 1 –** Navigate to your add-on package.

**Step 2 –** Unzip the Add-On to a desired folder.

**Step 3 –** Run the installation package.

**Step 4 –** Accept the license agreement and follow the instructions of the setup wizard.

**Step 5 –** On the **Destination Folder** step, specify the installation folder (_C:\Program Files
(x86)\Netwrix Add-ons\<Add-on name>_ by default).

**Step 6 –** Click **Install**.

**Step 7 –** When done, click **Finish**.

# Privileged User Monitoring on Linux and Unix Systems

The add-on works in collaboration with Auditor, supplying data about privileged user activity on
Linux and Unix. Aggregating data into a single audit trail simplifies analysis, makes activity
monitoring more cost effective, and helps you keep tabs on privilege elevation on your Linux and
Unix-based devices. For example, it helps monitor the usage of SUDO as well as remote access with
openSSH.

On a high level, the add-on works as follows:

1. The add-on listens to the specified UDP ports and captures designated Syslog messages.

   Out of the box, messages from Red Hat Enterprise Linux 7 and 6, SUSE Linux Enterprise Server 12,
   openSUSE 42, and Ubuntu 16 are supported. For other distributions, deployment of the rsyslog
   package may be required. You can edit the add-on configuration to extend the captured message
   list.

2. The add-on processes these events into Auditor-compatible format (Activity Records). Each
   Activity Record contains the user account, action, time, and other details.
3. Using the Integration API, the add-on sends the activity records Auditor Server, which writes
   them to the Long-Term Archive and the Audit Database.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| On...                                            | Ensure that...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Auditor Server side                          | - The Audit Database settings are configured in Auditor Server. See the [Prerequisites](/docs/auditor/10.6/api/getting-started.md) and [Audit Database](/docs/auditor/10.6/administration/settings/database-settings.md) topics for additional information. - The TCP **9699** port (default Integration API port) is open for inbound connections. - The user writing data to the Audit Database is granted the **Contributor** role in Auditor. See the [Role-Based Access and Delegation](/docs/auditor/10.6/monitoring-plans/delegation.md) topic for additional information. Alternatively, you can grant the **Global administrator** role or add the user to the **Netwrix Auditor Administrators** group. In this case, this user will have the most extended permissions in the product.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| The computer where the service will be installed | - The UDP 514 port is open for inbound connections. - .Net Framework 4.7.2 and above is installed. Review the following Microsoft technical article for additional information on how to install .Net Framework 4.7.2: [Microsoft .NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| The target syslog-based platform                 | The **Syslog daemon** is configured to redirect events. The procedure below explains how to configure redirection: **NOTE:** Red Hat Enterprise Linux 7 and 6, SUSE Linux Enterprise Server 12, openSUSE 42, and Ubuntu 16 are supported out of the box. For other distributions, deployment of rsyslog package may be required. - On Red Hat Enterprise Linux 7: 1. Open the **/etc/rsyslog.conf** file. 2. Add the following line: `auth.*;authpriv.* @name:514;RSYSLOG_SyslogProtocol23Format` where `name `is a FQDN, NetBIOS name or IP address of the computer where Netwrix Auditor Server is installed. For example: `auth.*;authpriv.* @172.28.18.25:514;RSYSLOG_ SyslogProtocol23Format` 3. Launch the **RHEL console** and execute the following command: `service rsyslog restart`. - On Ubuntu 16: 1. Navigate to the **/etc/rsyslog.d/50-default.conf** file. 2. Add the following line: `auth.*;authpriv.* @name:514;RSYSLOG_SyslogProtocol23Format` where `name `is a FQDN, NetBIOS name or IP address of the computer where Netwrix Auditor Server is installed. For example: `auth.*;authpriv.* @172.28.18.25:514;RSYSLOG_ SyslogProtocol23Format` 3. Launch the **UBUNTU console** and execute the following command: `service rsyslog restart`. |

See the the [Integration API](/docs/auditor/10.6/api/index.md) topic for
additional information on the structure of the Activity Record and the capabilities of the
Integration API

# Define Parameters

The configuration wizard opens in the default web browser:

![PrivilegedUsersConfigWizard](/img/versioned_docs/auditor_10.6/auditor/addon/privilegeduserlinux/configwizard.webp)

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

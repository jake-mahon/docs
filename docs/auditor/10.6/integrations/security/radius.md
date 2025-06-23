---
title: RADIUS Server Integration
sidebar_label: RADIUS
description: Integrate Netwrix Auditor with RADIUS servers for centralized authentication monitoring and security event tracking.
---

# Automate Add-On Execution

To ensure you feed the most recent data to your SIEM solution, Netwrix recommends scheduling a daily
task for running the add-on.

**To create a scheduled task:**

**Step 1 –** On the computer where you want to execute the add-on, navigate to **Task
Scheduler**.Select **Create Task**.

**Step 2 –** On the **General** tab, specify a task name. Make sure the account that runs the task
has all necessary rights and permissions.

**Step 3 –** On the **Triggers** tab, click **New** and define the schedule. This option controls
how often audit data is exported from Auditor and saved to event log. Netwrix recommends scheduling
a daily task.

**Step 4 –** On the **Actions** tab, click **New** and specify action details. Review the following
for additional information:

| Option                   | Value                                                                                                                                                                                                          |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Action                   | Set to "_Start a program_".                                                                                                                                                                                    |
| Program/script           | Input "_Powershell.exe_".                                                                                                                                                                                      |
| Add arguments (optional) | Add a path to the add-on in double quotes and specify add-on parameters. For example: -file "C:\Add-ons\Netwrix*Auditor_Add-on_for_RADIUS* Server.ps1" -NetwrixAuditorHost 172.28.6.15 -RADIUSHost 172.28.6.16 |

Save the task.

After creating a task, wait for the next scheduled run or navigate to **Task Scheduler** and run the
task manually. To do this, right-click a task and click **Run**.

# Work with Collected Data

Auditor provides a convenient interface for reviewing RADIUS server logons. Once the script
execution completed, you can start analyzing user activity data with Netwrix search.

Follow the steps to see results.

**Step 1 –** Start the Auditor client and navigate to Search.

**Step 2 –** Click **Search**.

![radius](/img/versioned_docs/auditor_10.6/auditor/addon/radius/radius.webp)

**NOTE:** You might want to apply a filter to narrow down your search results to the RADIUS Logon
object type only.

# Create Custom Report

To speed up data review process and help you find the latest logons faster, Netwrix created an
additional script, **Netwrix_Auditor_Saved_Search_for_RADIUS_Server_Logons.ps1**. It is shipped with
the add-on and creates the RADIUS server logons since yesterday custom search-based report in the
Auditor client.

Follow the steps to create a custom report with the script.

**Step 1 –** Copy the **Netwrix_Auditor_Saved_Search_for_RADIUS_Server_Logons.ps1** script to the
Auditor Server.

**Step 2 –** Start **Windows PowerShell** and specify a path to the script.

**Step 3 –** Run the script.

**NOTE:** The user running the script must be a member of the **Netwrix Auditor Administrators**
group.

After running the script, the RADIUS server logons since yesterday custom report appears in
**Reports** > **Custom**. You can access the search instantly to receive it on a regular basis.

![radiusfilters](/img/versioned_docs/auditor_10.6/auditor/addon/radius/radiusfilters.webp)

Clicking the saved search tile opens the search with preset filters, which shows RADIUS logon
activity data for 2 days (yesterday and today).

# Choose Appropriate Execution Scenario

Auditor Add-on for RADIUS Server runs on any computer in your environment. For example, you can run
the add-on on the computer where Auditor is installed or on your RADIUS server.

Depending on the execution scenario you choose, you have to define a different set of script
parameters. See the
[Define Parameters](/docs/auditor/10.6/integrations/security/radius.md) topic for
additional information.

Netwrixsuggests the following execution scenarios:

| Scenario                                                                                                                                                                                   | Example                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The add-on runs on theAuditor Server with the current user credentials. Data is collected from a remote RADIUS server and written to a local repository.                                   | C:\Add-ons\Netwrix_Auditor_Add-on_for_RADIUS_Server.ps1 -RADIUSHost 172.28.6.16                                                                                                                                                                                         |
| The add-on runs on the Auditor Server with explicitly defined credentials. Collected data is written to a remote Auditor Server.                                                           | C:\Add-ons\Netwrix*Auditor_Add-on_for* RADIUS_Server.ps1 -NetwrixAuditorHost 172.28.6.15                                                                                                                                                                                |
| The add-on runs on the Auditor Server with the current user credentials. Data is collected from a remote RADIUS server with explicitly defined credentials.                                | C:\Add-ons\Netwrix*Auditor_Add-on_for* RADIUS_Server.ps1 -RADIUSHost 172.28.6.16 -RADIUSUserName enterprise\NSPuser -RADIUSPassword SuperStrictPassword                                                                                                                 |
| The add-on runs on a remote computer with the current user credentials. Data is collected from a remote RADIUS server and written to a remote Auditor repository.                          | C:\Add-ons\Netwrix*Auditor_Add-on_for* RADIUS_Server.ps1 -NetwrixAuditorHost 172.28.6.15 -RADIUSHost 172.28.6.16                                                                                                                                                        |
| The add-on runs on a remote computer. Data is collected from a remote RADIUS server with RADIUS server credentials and is written to a remote Auditor repository with Auditor credentials. | C:\Add-ons\Netwrix*Auditor_Add-on_for* RADIUS_Server.ps1 -NetwrixAuditorHost 172.28.6.15 -NetwrixAuditorUserName enterprise\NAuser -NetwrixAuditorPassword NetwrixIsCool -RADIUSHost 172.28.6.16 -RADIUSUserName enterprise\NSPuser -RADIUSPassword SuperStrictPassword |

For security reasons, Netwrix recommends running the script with current user credentials (skipping
user credentials). Create a special user account with permissions to both Auditor data and event log
and use it for running the script.

# RADIUS Server

Netwrix Auditor Add-on for RADIUS Server tracks user and device logon activity on a Windows Server
where the Remote Authentication Dial-In User Service (RADIUS) is running.

## RADIUS Protocol

RADIUS is a client-server network protocol that enables secure authentication, authorization, and
account management through special network access servers called gateways. The protocol works as
follows: When a user tries to access network resources through a gateway that has the RADIUS client
component enabled, the gateway sends a request to the RADIUS server. The RADIUS server identifies
the user or device and either accepts or rejects the connection request, and then logs the attempt
for future reference.

Because it enhances security and scalability, the RADIUS protocol is widely used in enterprise
network environments to provide authentication and authorization for a variety of network access
servers, such as VPN or dial-in servers and wireless access points. It helps organize and centralize
sign-in procedures and improve overall security. In a Windows Server environment, the RADIUS server
is provided by the Network Policy Server (NPS).

In addition to providing user authentication and authorization, a RADIUS server can grant or deny
access to a connecting device based on network policies. Companies leverage these policies to
empower users to connect to the corporate infrastructure using their personal devices, while
disallowing potentially vulnerable and unsafe devices to minimize risk.

## Netwrix Auditor Add-on

Regular review of logon activity is essential for gaining complete visibility into your account
management

procedures and ensuring that all activity is traceable and compliant with your policies. For
example, logons from unusual locations or devices can be a sign of user account compromise or
identity theft, and an unexpectedly high number of logon failures can indicate an intrusion attempt.
Careful review of successful and failed logons from both Active Directory and RADIUS servers helps
security operations teams detect these signs and react promptly to security threats.

Netwrix Auditor Add-on for RADIUS Server works in collaboration with Netwrix Auditor for Active
Directory, collecting additional data that augments the data collected by Netwrix Auditor.
Aggregating data into a single audit trail simplifies logon activity analysis and helps you keep
tabs on your IT infrastructure.

Implemented as a PowerShell script, this add-on automates the acquisition of RADIUS logon events and
their transition to Netwrix Auditor. All you have to do is provide connection details and schedule
the script for execution. Netwrix recommends running this add-on in addition to the Active Directory
auditing provided by Netwrix Auditor.

On a high level, the add-on works as follows:

1. The add-on connects to the Security event log on the RADIUS server and collects logon-related
   events.
2. The add-on processes these events into Netwrix Auditor-compatible format (Activity Records). Each
   Activity Record contains the user account, logon status, time, and other details. Where
   applicable, the cause for logon failure and the name of network policy are included in the
   Activity Record.
3. Using the Netwrix Auditor Integration API, the add-on sends the successful and failed logon
   events to the Netwrix Auditor server, which writes them to the Long-Term Archive and the Audit
   Database.

See the [Integration API](/docs/auditor/10.6/api/index.md) topic for additional
information on the structure of the Activity Record and the capabilities of the Netwrix Auditor
Integration API.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| On...                                          | Ensure that...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Auditor Server side                        | - Auditor version is **9.8** or later. - The Audit Database settings are configured in Auditor Server. See the [Prerequisites](/docs/auditor/10.6/api/getting-started.md) and [Audit Database](/docs/auditor/10.6/administration/settings/database-settings.md) topics for additional information. - The TCP 9699 port (default Auditor Integration API port) is open for inbound connections. - The user retrieving data from the Audit Database is granted the Global reviewer role in Auditor or is a member of the Netwrix Auditor Client Users group. See the [Role-Based Access and Delegation](/docs/auditor/10.6/monitoring-plans/delegation.md) topic for additional information. Alternatively, you can grant the Global administrator role or add the user to the Netwrix Auditor Administrators group. In this case, this user will have the most extended permissions in the product. |
| The RADIUS server                              | - The **Remote Event Log Management (RPC)** inbound firewall rule is enabled. - The account collecting RADIUS logon events is member of the **Domain Users** group and have the **Manage auditing and security log** right.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| The computer where the script will be executed | - PowerShell **3.0** or later must be installed. - .NET **4.5** or later must be installed. - Execution policy for powershell scripts is set to _"Unrestricted"_. Run Windows PowerShell as administrator and execute the following command: Set-ExecutionPolicy Unrestricted - The user running the script is granted the write permission on the script folder—the add-on creates a special .bin file with the last exported event. - The user running the script must be a member of the Domain Users group. - At least the first script run should be performed under the account with elevated privileges, as it will be necessary to create event log file and perform other required operations.                                                                                                                                                                                            |

## Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts
leveraging Netwrix Auditor Integration API. Download the latest add-on version in the Add-on Store.

# Define Parameters

Before running or scheduling the add-on, you must define connection details: Auditor Server host,
user credentials, etc. Most parameters are optional, the script uses the default values unless
parameters are explicitly defined. You can skip or define parameters depending on your execution
scenario and security policies. See the
[Choose Appropriate Execution Scenario](/docs/auditor/10.6/integrations/siem/logrhythm.md)
topic for additional information.

| Parameter                 | Default value            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Connection to Auditor** |                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| NetwrixAuditorHost        | localhost:9699           | Assumes that the add-on runs on the computer hosting Auditor Server and uses default port 9699. If you want to run the add-on on another machine, provide a name of the computer where Auditor Server resides (e.g., 172.28.6.15, EnterpriseNAServer, WKS.enterprise.local). To specify a non-default port, provide a server name followed by the port number (e.g., WKS.enterprise.local:9999).                                                                                                                            |
| NetwrixAuditorUserName    | Current user credentials | Unless specified, the add-on runs with the current user credentials. If you want the add-on to use another account to connect to Auditor Server, specify the account name in the DOMAIN\username format. The account must be assigned the Global reviewer role in Auditor or be a member of the Netwrix Auditor Client Users group on the computer hosting Auditor Server.                                                                                                                                                  |
| NetwrixAuditorPassword    | Current user credentials | Unless specified, the script runs with the current user credentials. Provide a different password if necessary.                                                                                                                                                                                                                                                                                                                                                                                                             |
| NetwrixAuditorPlan        | –                        | Unless specified, data is written to **Netwrix\_ Auditor_API** database and is not associated with a specific monitoring plan. Specify a name of associated monitoring plan in Auditor. In this case, data will be written to a database linked to this plan. **NOTE:** If you select a plan name in the add-on, make sure a dedicated plan is created in Auditor, the Netwrix API data source is added to the plan and enabled for monitoring. Otherwise, the add-on will not be able to write data to the Audit Database. |
| RADIUSHost                | localhost                | Assumes that the script runs on the RADIUS server. If you want to run a script on another machine, provide a name of the computer where RADIUS server resides (e.g., 172.28.6.16, EnterpriseNPS, NPS.enterprise.local).                                                                                                                                                                                                                                                                                                     |
| RADIUSUserName            | Current user credentials | Unless specified, the script runs with the current user credentials. If you want the script to use another account to access the RADIUS server, specify the account name in the DOMAIN\username format. **NOTE:** The account must be a member of the **Domain Users** group and have the **Manage auditing and security log** right.                                                                                                                                                                                       |
| RADIUSPassword            | Current user credentials | Unless specified, the script runs with the current user credentials. Provide a different password if necessary.                                                                                                                                                                                                                                                                                                                                                                                                             |

# Run the Add-On with PowerShell

First, provide a path to your add-on followed by script parameters with their values. Each parameter
is preceded with a dash; a space separates a parameter name from its value. You can skip some
parameters— the script uses a default value unless a parameter is explicitly defined. If necessary,
modify the parameters as required.

Follow the steps to run the script with PowerShell.

**Step 1 –** On computer where you want to execute the add-on, start **Windows PowerShell**.

**Step 2 –** Type a path to the add-on. Or simply drag and drop the add-on file in the console
window.

**Step 3 –** Add script parameters. The console will look similar to the following:

Windows PowerShell

Copyright (C) 2014 Microsoft Corporation. All rights reserved.

PS C:\Users\AddOnUser> C:\Add-ons\Netwrix_Auditor_Add-on_for_for_RADIUS_Server.ps1 -
NetwrixAuditorHost 172.28.6.15 -RADIUSHost 172.28.6.16

**NOTE:** If the script path contains spaces (e.g., _C:\Netwrix Add-ons_), embrace it in double
quotes and insert the ampersand (**&**) symbol in front (e.g., & "_C:\Netwrix Add-ons_").

**Step 4 –** Hit **Enter**.

Depending on the number of Activity Records stored in Auditor Audit Database execution may take a
while. Ensure the script execution completed successfully.

Every time you run the script, Auditor makes a timestamp. The next time you run the script, it will
start retrieving new events.

# Troubleshoot Issues

| Error in PowerShell                                                                                            | Resolution                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| New-Object : Exception calling ".ctor" with "1" argument(s): "Attempted to perform an unauthorized operation." | The account specified for collecting events on the RADIUS server does not have sufficient rights and permissions or the password is incorrect. - Check the password for this account. - Select the account that belongs to the **Domain Users** group and has the **Manage auditing and security log** right in domain where the RADIUS server resides. |
| New-Object : Exception calling ".ctor" with "1" argument(s): "The RPC server is unavailable"                   | The firewall on the RADIUS server blocks the script execution. On the server, navigate to the **Help Protect your computer with Windows Firewall** page, select **Advanced Settings** and enable the **Remote Event Log Management (RPC)** inbound rule.                                                                                                |

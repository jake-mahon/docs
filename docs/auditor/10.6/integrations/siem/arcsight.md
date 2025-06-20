# Automate Add-On Execution

To ensure you feed the most recent data to ArcSight, Netwrix recommends scheduling a daily task for
running the add-on.

**To create a scheduled task**

**Step 1 –** On the computer where you want to execute the add-on, navigate to **Task Scheduler**.

**Step 2 –** Select **Create Task**.

**Step 3 –** On the **General** tab, specify a task name, e.g., Netwrix Auditor Add-on for ArcSight.
Make sure the account that runs the task has all necessary rights and permissions.

**Step 4 –** On the **Triggers** tab, **click** New and define the schedule. This option controls
how often audit data is exported from Auditor and transferred to ArcSight Logger. Netwrix recommends
scheduling a daily task.

**Step 5 –** On the **Actions** tab, click **New** and specify action details. Review the following
for additional information.

| Option                   | Value                                                                                                                                                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Action                   | Set to "_Start a program_".                                                                                                                                                                                      |
| Program/script           | Input "_Powershell.exe_".                                                                                                                                                                                        |
| Add arguments (optional) | Add a path to the add-on in double quotes and specify add-on parameters. For example: -file "C:\Add-ons\Netwrix*Auditor_Add-on_for_HPE* ArcSight.ps1" -ArcSightHost 172.28.6.24 - NetwrixAuditorHost 172.28.6.15 |

**Step 6 –** Save the task.

After creating a task, wait for the next scheduled run or navigate to **Task Scheduler** and run the
task manually. To do this, right-click a task and click **Run**.

# Work with Collected Data

Follow the steps to see collected data.

**Step 1 –** Log on to your ArcSight Logger web interface.

**Step 2 –** On the **Summary** page, select the **Event Summary by Receiver** diagram and click the
**UDP Receiver** segment (Activity Records are imported through UDP Receiver). Select **TCP
Receiver** if you specified TCP protocol for transferring data.

**Step 3 –** On the **Analyze** page that opens, review the search field. Ensure your computer is
listed as Receiver (e.g., "_172.28.156.131 [UDP Receiver]_"). If you imported Activity Records from
more than one Netwrix Auditor Server, add all of them in the search field.

**NOTE:** You might want to modify time range and the fields shown.

![activityrecords](/img/versioned_docs/auditor_10.6/auditor/addon/arcsight/activityrecords.webp)

**Step 4 –** Review imported Activity Records.

# Choose Appropriate Execution Scenario

The Add-on runs on any computer in your environment. For example, you can run the add-on on the
computer where Auditor is installed or on a remote server. Depending on the execution scenario you
choose, you have to define a different set of parameters.

Netwrix suggests the following execution scenarios:

| Scenario                                                                                                                                                                  | Example                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The add-on runs on the Auditor Server with the current user credentials. Data is written a remote ArcSight through UDP protocol.                                          | C:\Add-ons\Netwrix*Auditor_Add-on_for_HPE* ArcSight.ps1 -ArcSightHost 172.28.6.18                                                                                                                  |
| The add-on runs on the Auditor Server with the current user credentials. Data is written a remote ArcSight through TCP protocol.                                          | C:\Add-ons\Netwrix*Auditor_Add-on_for_HPE* ArcSight.ps1 -TCP -ArcSightHost 172.28.6.18                                                                                                             |
| The add-on runs on the Auditor Server with the explicitly specified user credentials. Data is written a remote ArcSight with a non-default UDP port.                      | C:\Add-ons\Netwrix*Auditor_Add-on_for_HPE* ArcSight.ps1 -ArcSightHost 172.28.6.18:9999 -NetwrixAuditorUserName enterprise\NAuser - NetwrixAuditorPassword NetwrixIsCool                            |
| The add-on runs on a remote computer with the current user credentials. Data is retrieved from a remote Auditor repository and written to a remote ArcSight.              | C:\Add-ons\Netwrix*Auditor_Add-on_for_HPE* ArcSight.ps1 -ArcSightHost 172.28.6.24 - NetwrixAuditorHost 172.28.6.15                                                                                 |
| The add-on runs on a remote computer. Data is retrieved from a remote Auditor repository with the explicitly specified user credentials and written to a remote ArcSight. | C:\Add-ons\Netwrix*Auditor_Add-on_for_HPE* ArcSight.ps1 -ArcSightHost 172.28.6.24 - NetwrixAuditorHost 172.28.6.15 -NetwrixAuditorUserName enterprise\NAuser -NetwrixAuditorPassword NetwrixIsCool |

For security reasons, Netwrix recommends running the script with current user credentials (skipping
user credentials). Create a special user account with permissions to both Auditor data and event log
and use it for running the script.

# ArcSight

Netwrix Auditor helps you extend auditing possibilities and get most from your ArcSight investment.
The Netwrix Auditor Add-on for ArcSight works in collaboration with Auditor, supplying additional
data that augments the data collected by ArcSight.

The add-on enriches your SIEM data with actionable context in human-readable format, including the
before and after values for every change and data access attempt, both failed and successful.
Aggregating data into a single audit trail simplifies analysis, makes your SIEM more cost effective,
and helps you keep tabs on your IT infrastructure.

Implemented as a PowerShell script, this add-on facilitates the audit data transition from Netwrix
Auditor to ArcSight. All you have to do is provide connection details and schedule the script for
execution.

On a high level, the add-on works as follows:

1. The add-on connects to the Netwrix Auditor Server and retrieves audit data using the Integration
   API.
2. The add-on processes Auditor-compatible data (Activity Records) into native ArcSight CEF format.
   Each exported event contains the user account, action, time, and other details.
3. The add-on uploads audit trails to ArcSight Logger making it immediately ready for review and
   analysis. ArcSight SmartConnector configured as Syslog Daemon is supported as well.

See the [Integration API](/docs/auditor/10.6/api/index.md) topic for additional
information on the structure of the Activity Record and the capabilities of the Integration API.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| on...                                          | Ensure that...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Auditor Server side                        | - The Audit Database settings are configured in the Auditor. See the [Audit Database](/docs/auditor/10.6/administration/settings/database-settings.md) topic for additional information. - The TCP 9699 port (default Integration API port) is open for inbound connections. - The user retrieving data from the Audit Database is granted the **Global reviewer** role in Auditor or is a member of the **Netwrix Auditor Client Users** group. Alternatively, you can grant the **Global administrator** role or add the user to the **Netwrix Auditor Administrators** group. In this case, this user will have the most extended permissions in the product. |
| On the ArcSight side                           | - The UDP Receiver is enabled and is configured to receive CEF as source and use the default port **514**. - To check receiver settings or add a new receiver, start the ArcSight Logger web interface and navigate to **Configuration** > **Receivers**. ![configuration](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/enduser/configuration.webp) **NOTE:** You can configure TCP Receiver and switch to TCP protocol and port **515**. - The user running the script must have sufficient permissions to supply data to ArcSight.                                                                                                 |
| The computer where the script will be executed | - Execution policy for powershell scripts is set to "_Unrestricted_". Run **Windows PowerShell** as administrator and execute the following command: Set-ExecutionPolicy Unrestricted - The user running the script is granted the **write** permission on the script folder—the add-on creates a special .bin file with the last exported event.                                                                                                                                                                                                                                                                                                                |

## Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts
leveraging the Integration API. Download the latest add-on version in the Add-on Store. See the
[Integration API](/docs/auditor/10.6/api/index.md)topic for additional
information.

The add-on was renamed due to HPE acquisition by Micro Focus. The former add-on name was Netwrix
Auditor Add-on for HPE ArcSight. This name may still be present in the add-on files and
documentation. ArcSight trademarks and registered trademarks are property of their respective
owners.

# Define Parameters

Before running or scheduling the add-on, you must define connection details: Auditor Server host,
user credentials, etc. Most parameters are optional, the script uses the default values unless
parameters are explicitly defined. You can skip or define parameters depending on your execution
scenario and security policies. See
the[Choose Appropriate Execution Scenario](/docs/auditor/10.6/integrations/siem/arcsight.md)
topic for additional information.

First, provide a path to your add-on followed by script parameters with their values. Each parameter
is preceded with a dash; a space separates a parameter name from its value. You can skip some
parameters— the script uses a default value unless a parameter is explicitly defined. If necessary,
modify the parameters as required.

| Parameter or switch    | Default value            | Description                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| TCP                    | –                        | By default, UDP protocol is used. Specify the switch during the add-on execution if you want to use TCP protocol for transferring data. Via UDP, events will be sent one by one, via TCP— in a batch.                                                                                                                                                                                                  |
| ArcSightHost           | –                        | Provide a name of the computer where ArcSight resides (e.g., 172.28.6.18, ArcSightSRV, ArcSightSRV.enterprise.local). **NOTE:** This is a mandatory parameter. Unless specified, the add- on assumes that the default port 514 is used for UDP and 515 for TCP. To specify a non-default port, provide a server name followed by the port number (e.g., _ArcSightSRV.enterprise.local:9998_).          |
| NetwrixAuditorHost     | localhost:9699           | Assumes that the add-on runs on the computer hosting Auditor Server and uses default port 9699. If you want to run the add- on on another machine, provide a name of the computer where Auditor Server resides (e.g., 172.28.6.15, EnterpriseNAServer, WKS.enterprise.local). To specify a non-default port, provide a server name followed by the port number (e.g., _WKS.enterprise.local:9999_).    |
| NetwrixAuditorUserName | Current user credentials | Unless specified, the add-on runs with the current user credentials. If you want the add-on to use another account to connect to Auditor Server, specify the account name in the _DOMAIN\username_ format. **NOTE:** The account must be assigned the **Global reviewer** role in Netwrix Auditor or be a member of the **Netwrix Auditor Client Users** group on the computer hosting Auditor Server. |
| NetwrixAuditorPassword | Current user credentials | Unless specified, the script runs with the current user credentials. Provide a different password if necessary.                                                                                                                                                                                                                                                                                        |

# Run the Add-On with PowerShell

Follow the steps to run add-on with PowerShell:

**Step 1 –** On computer where you want to execute the add-on, start Windows PowerShell.

**Step 2 –** Type a path to the add-on. Or simply drag and drop the add-on file in the console
window.

**Step 3 –** Add script parameters. The console will look similar to the following:

Windows PowerShell PS C:\Users\AddOnUser> C:\Add-ons\Netwrix_Auditor_Add-on_for_HPE_ArcSight.ps1 -
ArcSightHost 172.28.6.24 -NetwrixAuditorHost 172.28.6.15

**NOTE:** If the script path contains spaces (e.g., _C:\Netwrix Add-ons_), embrace it in double
quotes and insert the ampersand (**&**) symbol in front (e.g., & "_C:\Netwrix Add-ons_").

**Step 4 –** Hit **Enter**.

Depending on the number of Activity Records stored in the Audit Database execution may take a while.
Ensure the script execution completed successfully. As a result, data will be exported to ArcSight.
Note that events exceeding 4000 symbols are trimmed.

Every time you run the script, Auditor makes a timestamp. The next time you run the script, it will
start retrieving new Activity Records.

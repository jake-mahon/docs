# Automate Add-On Execution

To ensure you feed the most recent data to your SIEM solution, Netwrix recommends scheduling a daily
task for running the add-on.

**Perform the following steps to create a scheduled task:**

**Step 1 –** On the computer where you want to execute the add-on, navigate to **Task Scheduler**.

**Step 2 –** On the **General** tab, specify a task name. Make sure the account that runs the task
has all necessary rights and permissions.

**Step 3 –** On the **Triggers** tab, click **New** and define the schedule. This option controls
how often audit data is exported from Auditor and saved to event log. Netwrixrecommends scheduling a
daily task.

**Step 4 –** On the **Actions** tab, click **New** and specify action details. Review the following
for additional information:

| Option                   | Value                                                                                                                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Action                   | Set to "_Start a program_".                                                                                                                                                                  |
| Program/script           | Input "_Powershell.exe_".                                                                                                                                                                    |
| Add arguments (optional) | Add a path to the add-on in double quotes and specify add-on parameters. For example: -file "C:\Add-ons\Netwrix*Auditor_Add-on_for_Amazon_Web* Services.ps1" -NetwrixAuditorHost 172.28.6.15 |

**Step 5 –** Save the task.

After creating a task, wait for the next scheduled run or navigate to **Task Scheduler** and run the
task manually. To do this, right-click a task and click **Run**.

# Work with Collected Data

Follow the steps to work with collected data.

**Step 1 –** Start the Auditor client and navigate to **Search**.

**Step 2 –** Click **Search**.

![activityrecords](/img/product_docs/auditor/auditor/addon/arcsight/activityrecords.webp)

You might want to apply a filter to narrow down your search results to the NetwrixAPI data source
only.

# Choose Appropriate Execution Scenario

The Add-on runs on any computer in your environment. For example, you can run the add-on on the
computer where Auditor is installed or on a remote server. Depending on the execution scenario you
choose, you have to define a different set of parameters. See the [Amazon Web Services](/docs/auditor/10.7/integrations/cloud-platforms/aws.md)
topic for additional information.

Netwrix suggests the following execution scenarios:

| Scenario                                                                                                                                                      | Example                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The add-on runs on the Auditor Server with the current user credentials.                                                                                      | C:\Add-ons\Netwrix*Auditor_Add-on_for* Amazon_Web_Services.ps1                                                                                                                                                  |
| The add-on runs on the Auditor Server with the explicitly specified user credentials.                                                                         | C:\Add-ons\Netwrix*Auditor_Add-on_for* Amazon_Web_Services.ps1 -NetwrixAuditorUserName enterprise\NAuser -NetwrixAuditorPassword NetwrixIsCool                                                                  |
| The add-on runs on a remote computer. Data is written to a remote Auditor repository with the current user credentials.                                       | C:\Add-ons\Netwrix*Auditor_Add-on_for* Amazon_Web_Services.ps1 -NetwrixAuditorHost 172.28.6.15                                                                                                                  |
| The add-on runs on a remote computer. Data is written to a remote Auditor repository with the explicitly specified user credentials and monitoring plan name. | C:\Add-ons\Netwrix*Auditor_Add-on_for* Amazon_Web_Services.ps1 -NetwrixAuditorHost 172.28.6.15 -NetwrixAuditorUserName enterprise\NAuser -NetwrixAuditorPassword NetwrixIsCool -NetwrixAuditorPlan Integrations |

For security reasons, Netwrix recommends running the script with current user credentials (skipping
user credentials). Create a special user account with permissions to both Auditor data and event log
and use it for running the script.

# Amazon Web Services

Amazon Web Services (AWS) provides a wide range of cloud-based services, including solutions and
management tools for virtualization, data storage and hosting, private networking, relational and
NoSQL databases, and many more. AWS CloudTrail is an internal tracking service that records AWS API
calls. Companies leverage this information for analyzing user activity patterns and detecting
potential threats. Unfortunately, collected audit data cannot be used for future reference: AWS
CloudTrail stores events for 7 days allowing administrators and security analysts to review data for
only short time periods.

Netwrix Auditor helps you gain complete visibility into Amazon Web Services user and service
activity. The Add-on for Amazon Web Services extends native AWS CloudTrail auditing and reporting
possibilities. Aggregating data into a single audit trail simplifies activity analysis and helps you
keep tabs on your hybrid cloud IT infrastructure. With Netwrix Auditor, AWS audit data is kept for
much longer periods of time and always ready for review in easy-to-use search interface.

Implemented as a PowerShell script, this add-on automates the acquisition of Amazon Web Services
CloudTrail logs and their transition to Netwrix Auditor. All you have to do is provide connection
details and schedule the script for execution.

On a high level, the add-on works as follows:

- The add-on makes an AWS API call and collects activity events from AWS CloudTrail.
- The add-on processes these events into Netwrix Auditor-compatible format (Activity Records). Each
  Activity Record contains the user account, action, time, and other details.

  Currently, Netwrix Auditor processes details for the following AWS events (other events can be
  imported without details):

  |                |                     |                    |                 |
  | -------------- | ------------------- | ------------------ | --------------- |
  | CreateGroup    | CreateUser          | CreateLoginProfile | CreateAccessKey |
  | DeleteGroup    | DeleteUser          | DeleteLoginProfile | DeleteAccessKey |
  | AddUserToGroup | RemoveUserFromGroup | UpdateLoginProfile | UpdateAccessKey |

- Using the Integration API, the add-on sends the activity events to the Auditor Server, which
  writes them to the **Long-Term Archive** and the **Audit Database**.

See the [Integration API](/docs/auditor/10.7/api-reference/index.md) topic for additional information.

## Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts
leveraging the Integration API. Download the latest add-on version in the Add-on Store.

See the [Integration API](/docs/auditor/10.7/api-reference/index.md) topic for additional information about schema
updates.

# Define Parameters

Before running or scheduling the add-on, you must define connection details: Auditor Server host,
user credentials, etc. Most parameters are optional, the script uses the default values unless
parameters are explicitly defined. You can skip or define parameters depending on your execution
scenario and security policies. See the [Choose Appropriate Execution Scenario](/docs/auditor/10.7/integrations/cloud-platforms/aws.md) 
topic for additional information.

First, provide a path to your add-on followed by script parameters with their values. Each parameter
is preceded with a dash; a space separates a parameter name from its value. You can skip some
parameters— the script uses a default value unless a parameter is explicitly defined. If necessary,
modify the parameters as required.

| Parameter or switch    | Default value                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWSSDKInstallPath      | 'C:\Program Files (x86)\AWS SDK for .NET' | Assumes that AWS SDK for .NET is installed by its default path. To specify another location, provide a path in single quotes (e.g., '_C:\Program Files (x86)\My SDKs\AWS SDK for .NET_').                                                                                                                                                                                                                                                                                                                                               |
| ImportAllEvents        | —                                         | By deafult, only events with processed details will be imported. To import all events, set the switch during the add-on execution. **NOTE:** Importing all events makes audit data less human-readable.                                                                                                                                                                                                                                                                                                                                 |
| NetwrixAuditorHost     | localhost:9699                            | Assumes that the add-on runs on the computer hosting Auditor Server and uses default port **9699**. If you want to run the add- on on another machine, provide a name of the computer where Auditor Server resides (e.g., _172.28.6.15, EnterpriseNAServer,WKS.enterprise.local_). To specify a non-default port, provide a server name followed by the port number (e.g., _WKS.enterprise.local:9999_).                                                                                                                                |
| NetwrixAuditorUserName | Current user credentials                  | Unless specified, the add-on runs with the current user credentials. If you want the add-on to use another account to connect to Auditor Server, specify the account name in the _DOMAIN\username_ format. **NOTE:** The account must be assigned the **Contributor** role in Auditor.                                                                                                                                                                                                                                                  |
| NetwrixAuditorPassword | Current user credentials                  | Unless specified, the script runs with the current user credentials. Provide a different password if necessary.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| NetwrixAuditorPlan     | —                                         | Unless specified, data is written to the **Netwrix\_ Auditor_API** database and is not associated with a specific monitoring plan. Specify a name of associated monitoring plan in Auditor. In this case, data will be written to a database linked to this plan. **NOTE:** If you select a plan name in the add-on, make sure a dedicated plan is created in Auditor, the **Netwrix API** data source is added to the plan and enabled for monitoring. Otherwise, the add-on will not be able to write data to the **Audit Database**. |

## Update In-Script Parameters

**Step 1 –** Right-click a script and select **Edit**. **Windows PowerShell ISE** will start.

**Step 2 –** Navigate to the following lines:

$RegionEndpoint = "your AWS region endpoint"

$AccessKeyID = "your AWS access key ID"

$SecretAccessKey = "your AWS secret access key"

**Step 3 –** Update the following parameters:

| Parameter       | Description                                                                                                                                                                                                                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RegionEndpoint  | Provide an endpoint for your region, e.g., us-east-1 (N. Virginia). **NOTE:** If you use more than one region in your environment, run the script several times with different region endpoints. See the [AWS service endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html) article for additional information. |
| AccessKeyID     | Provide an AWS access key ID for your account. Access key is used to run requests to AWS SDK, CLIs, and API.                                                                                                                                                                                                                   |
| SecretAccessKey | Provide an AWS secret access key that works with your access key ID.                                                                                                                                                                                                                                                           |

**Step 4 –** Save the script.

# Run the Add-On with PowerShell

Follow the steps to run add-on with PowerShell:

**Step 1 –** On computer where you want to execute the add-on, start Windows PowerShell.

**Step 2 –** Type a path to the add-on. Or simply drag and drop the add-on file in the console
window.

**Step 3 –** Add script parameters. The console will look similar to the following:

Windows PowerShell

Copyright (C) 2014 Microsoft Corporation. All rights reserved.

PS C:\Users\AddOnUser> C:\Add-ons\Netwrix_Auditor_Add-on_for_Amazon_Web_Services.ps1 -
NetwrixAuditorHost 172.28.6.15

**NOTE:** If the script path contains spaces (e.g., `C:\Netwrix Add-ons\`), embrace it in double
quotes and insert the ampersand (&) symbol in front (e.g., & "`C:\Netwrix Add-ons\`").

**Step 4 –** Hit **Enter**.

Depending on the number of events logged by CloudTrail it may take a while. Ensure the script
execution completed successfully. Every time you run a script, Auditor makes a checkpoint with the
last imported event. The next time you run the script, it will start retrieving new events.

**NOTE:** By default, CloudTrail keeps events for **7** days.

# Active Directory Activity Auditing Configuration

There are two methods to configure Activity Monitor to provide Active Directory domain activity to Access Analyzer:

- API Server
- File Archive Repository

See the [File Archive Repository Option](/docs/accessanalyzer/accessanalyzer/config/activedirectory/filearchive.md) topic for additional information on that option.

## API Server Option

In this method, you will be deploying two agents:

- First, deploy an Activity Agent to a Windows server that will act as the API server. This is a non-domain controller server.

  ___RECOMMENDED:___ Deploy the API Server to the same server where the Activity Monitor Console resides.
- Next, deploy the AD Agent to all domain controllers in the target domain.

Follow the steps to setup integration between Activity Monitor and Access Analyzer through an API server.

__Step 1 –__ Deploy the Activity Agent to the API server.

__Step 2 –__ Deploy the AD Agent to each domain controller in the target domain.

The next step is to configure the agent deployed to the API server.

## Configure API Server Agent

Follow the steps to configure the agent deployed to the API server.

__Step 1 –__ On the Agents tab of the Activity Monitor Console, select the agent deployed to the API server.

__Step 2 –__ Click __Edit__. The Agent properties window opens.

__Step 3 –__ Select the __API Server__ tab and configure the following:

- Select the __Enable API access on this agent__ checkbox.
- The default __API server port (TCP)__ is 4494, but it can be modified if desired. Ensure the modified port is also used by Access Analyzer.
- Click __Add Application__. The Add or edit API client window opens.
- Configure the following:

  - Provide a descriptive and unique __Application name__, for example ```Access Analyzer```.
  - Select the __Read__ checkbox to grant this permission to this application.
  - Click __Generate__ to generate the Client ID and Client Secret.
  - Copy the Client ID value to a text file.
  - Click __Copy__ and save the Client Secret value to a text file.

    __CAUTION:__ It is not possible to retrieve the value after closing the Add or edit API client window. It must be copied first.
  - By default, the __Secret Expires__ in 3 days. That means it must be used in the Access Analyzer Connection Profile within 72 hours or a new secret will need to be generated. Modify if desired.
  - Click __OK__ to save the configuration and close the Add or edit API client window.
- If the Activity Monitor Console server is not the API Server, then click __Use this console__ to grant the Activity Monitor the ability to manage the API server.
- The IPv4 or IPv6 allowlist allows you to limit access to the API server data to specific hosts.

__Step 4 –__ Click __OK__ to save the configuration and close the Agent properties window.

The next step is to configure the agents deployed to the domain controllers.

## Configure Domain Controller Agent

Follow the steps to configure the agent deployed to the domain controller.

__Step 1 –__ On the Agents tab of the Activity Monitor Console, select an agent deployed to domain controller.

__Step 2 –__ Click __Edit__. The Agent properties window opens.

__Step 3 –__ Select the __Archiving__ tab and configure the following:

- Select the __Enable Archiving for this agent__ checkbox.
- Select the __Archive log files on a UNC path__ option. Click the __...__ button and navigate to the desired network share on the API server.
- The __User name__ and __User password__ fields only need to be filled in if the account used to install the agent does not have access to this share.

  _Remember,_ The account used to install the agent on a domain controller is a Domain Administrator account.
- Click __Test__ to ensure a successful connection to the network share.

__Step 4 –__ Click __OK__ to save the configuration and close the Agent properties window.

__Step 5 –__ Repeat Steps 1-4 for each agent deployed to domain controller.

These agent are configured to save the Archive logs to the selected share.

## Configure Monitored Domain Output

Follow the steps configure the monitored domain output for Netwrix Access Analyzer (formerly Enterprise Auditor).

__Step 1 –__ Select the __Monitored Domains__ tab.

__Step 2 –__  Select the desired domain and click __Add Output__. The Add New Ouptut window opens.

__Step 3 –__ Configure the following:

- Configure the desired number of days for the __Period to keep Log files__. This is the number of days the log files are kept on the API server configured in the sections above. This needs to be set to a greater value than the days between Access Analyzer scans.

  - For example, if Access Analyzer runs the __AD\_ActivityCollection__ Job once a week (every 7 days), then the Activity Monitor output should be configured to retain at least 10 days of log files.
- Check the __This log file is for StealthAUDIT__ box.
- Optionally select the __Enable periodic AD Status Check event reporting__ checkbox. When enabled, the agent will send out status messages every five minutes to verify whether the connection is still active.

__Step 4 –__ Click __Add Output__ to save and close the Add New Output window.

Access Analyzer now has access to the agent log files for this domain.

## Configure Connection Profile

Follow the steps to configure the Connection Profile in Access Analyzer.

_Remember,_ the Client ID and Client Secret were generated by the API server and copied to a text file. If the secret expired before the Connection Profile is configured, it will need to be re-generated.

__Step 1 –__ On the __Settings__ > __Connection__ node of the Access Analyzer Console, select the Connection Profile for the Active Directory solution. If you haven't yet created a Connection Profile or desire a specific one for AD Activity, create a new one and provide a unique descriptive name.

__Step 2 –__ Click __Add User credential__. The User Credentials window opens.

__Step 3 –__ Configure the following:

- Select Account Type – Select __Web Services (JWT)__
- User name – Enter the Client ID generated by the Activity Monitor API Server
- Access Token – Enter the Client Secret generated by the Activity Monitor API Server

__Step 4 –__ Click __OK__ to save and close the User Credentials window.

__Step 5 –__ Click __Save__ and then __OK__ to confirm the changes to the Connection Profile.

__Step 6 –__ Navigate to the __Jobs__ > __Active Directory__ > __6.Activity__ > __0.Collection__ Job Group. Select the __Settings > Connection__ node.

__Step 7 –__ Select the __Select one of the following user defined profiles__ option. Expand the drop-down menu and select the Connection Profile with this credential.

__Step 8 –__ Click __Save__ and then __OK__ to confirm the changes to the job group settings.

The Connection Profile will now be used for AD Activity collection.

## Configure the AD\_ActivityCollection Job

The Access Analyzer requires additional configurations in order to collect domain activity data. Follow the steps to configure the __AD\_ActivityCollection__ Job.

__NOTE:__ Ensure that the __.Active Directory Inventory__ Job Group has been successfully run against the target domain.

__Step 1 –__ Navigate to the __Jobs__ > __Active Directory__ > __6.Activity__ > __0.Collection__ > __AD\_ActivityCollection__ Job. Select the __Configure__ > __Queries__ node.

__Step 2 –__ Click __Query Properties__. The Query Properties window displays.

__Step 3 –__ On the Data Source tab, select __Configure__. The Active Directory Activity DC wizard opens.

![Active Directory Activity DC wizard Category page](/img/product_docs/activitymonitor/config/activedirectory/categoryimportfromnam.png)

__Step 4 –__ On the Category page, choose __Import from SAM__ option and click __Next__.

![Active Directory Activity DC wizard SAM connection settings page](/img/product_docs/activitymonitor/config/activedirectory/namconnection.png)

__Step 5 –__ On the SAM connection page, the __Port__ is set to the default 4494. This needs to match the port configured for the Activity Monitor API Server agent.

__Step 6 –__ In the __Test SAM host__ textbox, enter the Activity Monitor API Server name using fully qualified domain format. For example, ```NEWYORKSRV30.NWXTech.com```. Click __Connect__.

__Step 7 –__ If connection is successful, the archive location displays along with a Refresh token. Copy the __Refresh token__. This will replace the Client Secret in the Connection Profile in the last step.

__Step 8 –__ Click __Next__.

![Active Directory Activity DC wizard Scoping and Retention page](/img/product_docs/activitymonitor/config/activedirectory/scope.png)

__Step 9 –__ On the Scope page, set the Timespan as desired. There are two options:

- Relative Timespan – Set the number of days of activity logs to collect when the scan is run
- Absolute Timespan – Set the date range for activity logs to collect when the scan is run

___RECOMMENDED:___ The threshold should be set to ensure the logs are collected before the Activity Monitor domain output log retention expires. For example, if Access Analyzer runs the __AD\_ActivityCollection__ Job once a week (every 7 days), then the Activity Monitor output should be configured to retain at least 10 days of log files.

__Step 10 –__ Set the Retention period as desired. This is the number of days Access Analyzer keeps the collected data in the SQL Server database.

__Step 11 –__ Click __Next__ and then __Finish__ to save the changes and close the wizard.

__Step 12 –__ Click __OK__ to save the changes and close the Query Properties page.

__Step 13 –__ Navigate to the global __Settings__ > __Connection__ node to update the User Credential with the Refresh token:

- Select the Connection Profile assigned to the __6.Activity__ > __0.Collection__ Job Group.
- Select the Web Services (JWT) User Credential and click __Edit__.
- Replace the Access Token with the Refresh token generated by the data collector in Step 7.
- Click __OK__ to save and close the User Credentials window.
- Click __Save__ and then __OK__ to confirm the changes to the Connection Profile.

The query is now configured to target the Activity Monitor API Server to collect domain activity logs.

### (Optional) Configure Import of AD Activity into Netwrix Access Information Center

AD Activity data can be imported into Netwrix Access Information Center by the __AD\_ActivityCollection__ Job. However, this is disabled by default. Follow the steps to enable the importing of AD activity data into the Access Information Center.

__Step 1 –__ Navigate to the __Jobs__ > __Active Directory__ > __6.Activity__ > __0.Collection__ > __AD\_ActivityCollection__ Job.

__Step 2 –__ On the job's Overview page, enable the import of AD Events.

- Click on the __Enable to import AD events into the AIC__ parameter.
- On the Parameter Configuration window, select the __Enabled__ checkbox and click __Save__.

__Step 3 –__ On the job's Overview page, enable the import of authentication Events.

- Click on the __Enable to import authentication events into the AIC__ parameter.
- On the Parameter Configuration window, select the __Enabled__ checkbox and click __Save__.

__Step 4 –__ Optionally, modify the __List of attributes to track for Object Modified changes__ and __Number of days to retain activity data in the AIC__ parameters.

The __AD\_ActivityCollection__ Job is now configured to import both AD events and authentication events into the Netwrix Access Information Center.

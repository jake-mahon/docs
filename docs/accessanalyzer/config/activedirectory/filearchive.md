# File Archive Repository Option

As an alternative to using an API Server, Netwrix Activity Monitor can be configured to store all archived logs to a network share. This option requires all of the domain logs to be stored in the same share location in order for Access Analyzer to collect the AD Activity data.

Prerequisite

Deploy the AD Agent to each domain controller in the target domain.

## Configure Domain Controller Agent

Follow the steps to configure the agent deployed to the domain controller.

__NOTE:__ These steps assume the network share where the activity log files will be archived already exists.

__Step 1 –__ On the Agents tab of the Activity Monitor Console, select an agent deployed to domain controller.

__Step 2 –__ Click Edit. The Agent properties window opens.

__Step 3 –__ Select the Archiving tab and configure the following:

- Check the Enable Archiving for this agent box.
- Select the __Archive log files on a UNC path__ option. Click the ... button and navigate to the desired network share.
- The __User name__ and __User password__ fields only need to be filled in if the account used to install the agent does not have access to this share.

  _Remember,_ The account used to install the agent on a domain controller is a Domain Administrator account. This is typically the credential that will be used in the Netwrix Access Analyzer (formerly Enterprise Auditor) Connection Profile. However, a least privilege option is a domain user account with Read access to this share.
- Click __Test__ to ensure a successful connection to the network share.

__Step 4 –__ Click OK to save the configuration and close the Agent properties window.

__Step 5 –__ Repeat Steps 1-4 for each agent deployed to domain controller pointing to the same network share in Step 3 for each agent.

These agent are configured to save the Archive logs to the selected share.

## Configure Monitored Domain Output

Follow the steps configure the monitored domain output for Netwrix Access Analyzer (formerly Enterprise Auditor).

__Step 1 –__ Select the __Monitored Domains__ tab.

__Step 2 –__  Select the desired domain and click __Add Output__. The Add New Ouptut window opens.

__Step 3 –__ Configure the following:

- Configure the desired number of days for the __Period to keep Log files__. This is the number of days the log files are kept on the API server configured in the sections above. This needs to be set to a greater value than the days between Access Analyzer scans.

  - For example, if Access Analyzer runs the __AD_ActivityCollection__ Job once a week (every 7 days), then the Activity Monitor output should be configured to retain at least 10 days of log files.
- Check the __This log file is for StealthAUDIT__ box.
- Optionally select the __Enable periodic AD Status Check event reporting__ checkbox. When enabled, the agent will send out status messages every five minutes to verify whether the connection is still active.

__Step 4 –__ Click __Add Output__ to save and close the Add New Output window.

Access Analyzer now has access to the agent log files for this domain.

## Configure Connection Profile

Follow the steps to configure the Connection Profile in Access Analyzer.

__Step 1 –__ On the Settings > Connection node of the Access Analyzer Console, select the Connection Profile for the Active Directory solution. If you haven't yet created a Connection Profile or desire a specific one for AD Activity, create a new one and provide a unique descriptive name.

__Step 2 –__ Click Add User credential. The User Credentials window opens.

__Step 3 –__ Configure the following:

- Select Account Type – Select __Active Directory Account__
- Domain – Select the domain where the network share resides
- User name – Enter the account with Read access to the network share
- Provide the account password:

  - Password Storage – Select the password storage location, if it is being stored in a vault, like CyberArk
  - Password / Confirm – Enter the account password in both fields

__Step 4 –__ Click OK to save and close the User Credentials window.

__Step 5 –__ Click __Save__ and then __OK__ to confirm the changes to the Connection Profile.

__Step 6 –__ Navigate to the Jobs > Active Directory > 6.Activity > 0.Collection Job Group. Select the __Settings > Connection__ node.

__Step 7 –__ Select the __Select one of the following user defined profiles__ option. Expand the drop-down menu and select the Connection Profile with this credential.

__Step 8 –__ Click __Save__ and then __OK__ to confirm the changes to the job group settings.

The Connection Profile will now be used for AD Activity collection.

## Configure the AD_ActivityCollection Job

Access Analyzer requires additional configurations in order to collect domain activity data. Follow the steps to configure the __AD_ActivityCollection__ Job.

__NOTE:__ Ensure that the .Active Directory Inventory Job Group has been successfully run against the target domain.

__Step 1 –__ Navigate to the __Jobs__ > __Active Directory__ > __6.Activity__ > __0.Collection__ > __AD_ActivityCollection__ Job. Select the __Configure__ > __Queries__ node.

__Step 2 –__ Click __Query Properties__. The Query Properties window displays.

__Step 3 –__ On the Data Source tab, select __Configure__. The Active Directory Activity DC wizard opens.

![Active Directory Activity DC wizard Category page](../../../../static/img/product_docs/activitymonitor/config/activedirectory/categoryimportfromshare.webp)

__Step 4 –__ On the Category page, choose __Import from Share__ option and click __Next__.

![Active Directory Activity DC wizard Share settings page](../../../../static/img/product_docs/activitymonitor/config/activedirectory/share.webp)

__Step 5 –__ On the Share page, provide the UNC path to the AD Activity share archive location. If there are multiple archives in the same network share, check the __Include Sub-Directories__ box. Click __Next__.

![Active Directory Activity DC wizard Scoping and Retention page](../../../../static/img/product_docs/activitymonitor/config/activedirectory/scope.webp)

__Step 6 –__ On the Scope page, set the Timespan as desired. There are two options:

- Relative Timespan – Set the number of days of activity logs to collect when the scan is run
- Absolute Timespan – Set the date range for activity logs to collect when the scan is run

___RECOMMENDED:___ The threshold should be set to ensure the logs are collected before the Activity Monitor domain output log retention expires. For example, if Access Analyzer runs the __AD_ActivityCollection__ Job once a week (every 7 days), then the Activity Monitor output should be configured to retain at least 10 days of log files.

__Step 7 –__ Set the Retention period as desired. This is the number of days Access Analyzer keeps the collected data in the SQL Server database.

__Step 8 –__ Click __Next__ and then __Finish__ to save the changes and close the wizard.

__Step 9 –__ Click __OK__ to save the changes and close the Query Properties page.

The query is now configured to target the network share where the Activity Monitor domain activity logs are archived.

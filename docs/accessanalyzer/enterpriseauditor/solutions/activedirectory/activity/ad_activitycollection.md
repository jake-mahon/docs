# 0.Collection > AD\_ActivityCollection Job

The AD\_ActivityCollection Job located in the 0.Collection Job Group, imports data from the Netwrix Activity Monitor logs into the Access Analyzer Database. Retention can be modified in the query (120 days default).

![AD_ActivityCollection Job in the Jobs Tree](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.png)

There are two ways AD Activity data can be retrieved by Access Analyzer:

- Network share containing the archive logs
- API Server connected to the archive logs

This is configured in the query. See the [Queries for the AD\_ActivityCollection Job](#queries-for-the-ad_activitycollection-job) topic for additional information.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](/docs/accessanalyzer/enterpriseauditor/admin/jobs/job/overview.md#parameter-configuration) topic for instructions on how to edit parameters on a job overview page.

![Configuration section on the AD_ActivityCollection job Overview page](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/overviewconfiguration.png)

The AD\_ActivityCollection page has the following configurable parameters:

- Enable to import AD events into the AIC
- Enable to import authentication events into the AIC

  __NOTE:__ The import of AD events and authentication events is disabled by default. You must enable these parameters for the activity data to be imported into the Netwrix Access Information Center. See the [(Optional) Configure Import of AD Activity into Netwrix Access Information Center](/docs/accessanalyzer/config/activedirectory/activity.md#optional-configure-import-of-ad-activity-into-netwrix-access-information-center) topic for instructions.
- List of attributes to track for Object Modified changes
- Number of days to retain activity data in the AIC

See the [Customize Analysis Parameters for the AD\_ActivityCollection Job](#customize-analysis-parameters-for-the-ad_activitycollection-job) topic for additional information.

## Queries for the AD\_ActivityCollection Job

The AD Activity Collection query uses the ADActivity Data Collector to target the Activity Monitor archive logs for AD Activity.

__NOTE:__ The query can be configured to connect directly to the network share where the archive logs are stored or the API Server.

![Queries for the AD_ActivityCollection Job](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/queries.png)

The AD\_ActivityCollection Job uses the ADActivity Data Collector for the following query:

- AD Activity Collection – Targets Netwrix Activity Monitor archives to collect AD Activity

### Configure the Query to Import from the Activity Monitor

The AD\_ActivityCollection Job requires configuration to collect data. Follow the steps to modify the query configuration when Netwrix Activity Monitor is configured to host domain activity logs on an API server.

__NOTE:__ Ensure the Activity Monitor API Server and the required Connection Profile are successfully set up. See the [Active Directory Activity Auditing Configuration](/docs/accessanalyzer/config/activedirectory/activity.md) topic for additional information.

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

### Configure the Query to Import from a Share

The AD\_ActivityCollection Job requires configuration to collect data. Follow the steps to modify the query configuration when Netwrix Activity Monitor is configured to store activity logs on a network share.

__NOTE:__ Ensure the Activity Monitor domain output and the required Connection Profile are successfully set up. See the [File Archive Repository Option](/docs/accessanalyzer/config/activedirectory/filearchive.md) topic for additional information.

__Step 1 –__ Navigate to the __Jobs__ > __Active Directory__ > __6.Activity__ > __0.Collection__ > __AD\_ActivityCollection__ Job. Select the __Configure__ > __Queries__ node.

__Step 2 –__ Click __Query Properties__. The Query Properties window displays.

__Step 3 –__ On the Data Source tab, select __Configure__. The Active Directory Activity DC wizard opens.

![Active Directory Activity DC wizard Category page](/img/product_docs/activitymonitor/config/activedirectory/categoryimportfromshare.png)

__Step 4 –__ On the Category page, choose __Import from Share__ option and click __Next__.

![Active Directory Activity DC wizard Share settings page](/img/product_docs/activitymonitor/config/activedirectory/share.png)

__Step 5 –__ On the Share page, provide the UNC path to the AD Activity share archive location. If there are multiple archives in the same network share, check the __Include Sub-Directories__ box. Click __Next__.

![Active Directory Activity DC wizard Scoping and Retention page](/img/product_docs/activitymonitor/config/activedirectory/scope.png)

__Step 6 –__ On the Scope page, set the Timespan as desired. There are two options:

- Relative Timespan – Set the number of days of activity logs to collect when the scan is run
- Absolute Timespan – Set the date range for activity logs to collect when the scan is run

___RECOMMENDED:___ The threshold should be set to ensure the logs are collected before the Activity Monitor domain output log retention expires. For example, if Access Analyzer runs the __AD\_ActivityCollection__ Job once a week (every 7 days), then the Activity Monitor output should be configured to retain at least 10 days of log files.

__Step 7 –__ Set the Retention period as desired. This is the number of days Access Analyzer keeps the collected data in the SQL Server database.

__Step 8 –__ Click __Next__ and then __Finish__ to save the changes and close the wizard.

__Step 9 –__ Click __OK__ to save the changes and close the Query Properties page.

The query is now configured to target the network share where the Activity Monitor domain activity logs are archived.

## Analysis Tasks for the AD\_ActivityCollection Job

Navigate to the __Jobs__ > __Active Directory__ > __6.Activity__ > __0.Collection__ > __AD\_ActivityCollection__ Job. Select the __Configure__ > __Analysis__ node.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_ActivityCollection Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/analysis.png)

The following analysis tasks are selected by default:

- UAC Formatting Function – Splits column on commas and assigns opposing values to attributes
- AIC Import - AD Activity Events – Imports AD events to the Access Information Center for domain objects

  - The ```@ADEvents``` and ```@AuthEvents``` parameters must be enabled for AD events and authentication events to be imported into the Access Information Center
  - The list of attributes to track for Object Modified changes can be customized by the ```#modifiedAttributeList``` parameter
- AIC Import - Activity Retention – Deletes older activity data from the Access Information Center

  - By default, data is retained for 120 days. This is customizable by the ```@Days``` parameter.

### Customize Analysis Parameters for the AD\_ActivityCollection Job

The customizable parameters for this job allow you to configure importing of AD activity data into the Netwrix Access Information Center.

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| AIC Import - AD Activity Events | #modifiedAttributeList | Default attributes:   - givenName - sn - displayName - description - userPrincipalName - sAMAccountName - initials - title - department - company - manager - location - streetAddress - currentLocation - st - postalCode - c - otherTelephone - homePhone - ipPhone - mobile - facsimileTelephoneNumber - otherFacsimileTelephoneNumber - mail - wWWHomePage - employeeID - employeeType - employeeNumber - extensionAttribute1 - extensionAttribute2 - extensionAttribute3 - extensionAttribute4 - extensionAttribute5 - extensionAttribute6 - extensionAttribute7 - extensionAttribute8 - extensionAttribute9 - extensionAttribute10 - extensionAttribute11 - extensionAttribute12 - extensionAttribute13 - extensionAttribute14 - extensionAttribute15 | List of attributes to track for Object Modified changes |
| AIC Import - AD Activity Events | @ADEvents | False | Enable to import AD events into the AIC |
| AIC Import - AD Activity Events | @AuthEvents | False | Enable to import authentication events into the AIC |
| AIC Import - Activity Retention | @Days | 120 | Number of days to retain activity data in the AIC |

See the [Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md) topic for additional information.

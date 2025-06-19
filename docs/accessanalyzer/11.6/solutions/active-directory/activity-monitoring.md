# 0.Collection > AD_ActivityCollection Job

The AD_ActivityCollection Job located in the 0.Collection Job Group, imports data from the Netwrix
Activity Monitor logs into the Enterprise Auditor Database. Retention can be modified in the query
(120 days default).

![AD_ActivityCollection Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

There are two ways AD Activity data can be retrieved by Enterprise Auditor:

- Network share containing the archive logs
- API Server connected to the archive logs

This is configured in the query. See the
[Queries for the AD_ActivityCollection Job](#queries-for-the-ad_activitycollection-job) topic for
additional information.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

![Configuration section on the AD_ActivityCollection job Overview page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/overviewconfiguration.webp)

The AD_ActivityCollection page has the following configurable parameters:

- Enable to import AD events into the AIC
- Enable to import authentication events into the AIC

  **NOTE:** The import of AD events and authentication events is disabled by default. You must
  enable these parameters for the activity data to be imported into the Netwrix Access Information
  Center. See the
  [(Optional) Configure Import of AD Activity into Netwrix Access Information Center](/docs/accessanalyzer/11.6/configuration-guides/directory-services/active-directory.md#optional-configure-import-of-ad-activity-into-netwrix-access-information-center)
  topic for instructions.

- List of attributes to track for Object Modified changes
- Number of days to retain activity data in the AIC

See the
[Customize Analysis Parameters for the AD_ActivityCollection Job](#customize-analysis-parameters-for-the-ad_activitycollection-job)
topic for additional information.

## Queries for the AD_ActivityCollection Job

The AD Activity Collection query uses the ADActivity Data Collector to target the Activity Monitor
archive logs for AD Activity.

**NOTE:** The query can be configured to connect directly to the network share where the archive
logs are stored or the API Server.

![Queries for the AD_ActivityCollection Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostdiscovery/queries.webp)

The AD_ActivityCollection Job uses the ADActivity Data Collector for the following query:

- AD Activity Collection – Targets Netwrix Activity Monitor archives to collect AD Activity

### Configure the Query to Import from the Activity Monitor

The AD_ActivityCollection Job requires configuration to collect data. Follow the steps to modify the
query configuration when Netwrix Activity Monitor is configured to host domain activity logs on an
API server.

**NOTE:** Ensure the Activity Monitor API Server and the required Connection Profile are
successfully set up. See the
[Active Directory Activity Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/directory-services/active-directory.md)
topic for additional information.

**Step 1 –** Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **0.Collection** >
**AD_ActivityCollection** Job. Select the **Configure** > **Queries** node.

**Step 2 –** Click **Query Properties**. The Query Properties window displays.

**Step 3 –** On the Data Source tab, select **Configure**. The Active Directory Activity DC wizard
opens.

![Active Directory Activity DC wizard Category page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/categoryimportfromnam.webp)

**Step 4 –** On the Category page, choose **Import from SAM** option and click **Next**.

![Active Directory Activity DC wizard SAM connection settings page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/namconnection.webp)

**Step 5 –** On the SAM connection page, the **Port** is set to the default 4494. This needs to
match the port configured for the Activity Monitor API Server agent.

**Step 6 –** In the **Test SAM host** textbox, enter the Activity Monitor API Server name using
fully qualified domain format. For example, `NEWYORKSRV30.NWXTech.com`. Click **Connect**.

**Step 7 –** If connection is successful, the archive location displays along with a Refresh token.
Copy the **Refresh token**. This will replace the Client Secret in the Connection Profile in the
last step.

**Step 8 –** Click **Next**.

![Active Directory Activity DC wizard Scoping and Retention page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/scope.webp)

**Step 9 –** On the Scope page, set the Timespan as desired. There are two options:

- Relative Timespan – Set the number of days of activity logs to collect when the scan is run
- Absolute Timespan – Set the date range for activity logs to collect when the scan is run

**_RECOMMENDED:_** The threshold should be set to ensure the logs are collected before the Activity
Monitor domain output log retention expires. For example, if Enterprise Auditor runs the
**AD_ActivityCollection** Job once a week (every 7 days), then the Activity Monitor output should be
configured to retain at least 10 days of log files.

**Step 10 –** Set the Retention period as desired. This is the number of days Enterprise Auditor
keeps the collected data in the SQL Server database.

**Step 11 –** Click **Next** and then **Finish** to save the changes and close the wizard.

**Step 12 –** Click **OK** to save the changes and close the Query Properties page.

**Step 13 –** Navigate to the global **Settings** > **Connection** node to update the User
Credential with the Refresh token:

- Select the Connection Profile assigned to the **6.Activity** > **0.Collection** Job Group.
- Select the Web Services (JWT) User Credential and click **Edit**.
- Replace the Access Token with the Refresh token generated by the data collector in Step 7.
- Click **OK** to save and close the User Credentials window.
- Click **Save** and then **OK** to confirm the changes to the Connection Profile.

The query is now configured to target the Activity Monitor API Server to collect domain activity
logs.

### Configure the Query to Import from a Share

The AD_ActivityCollection Job requires configuration to collect data. Follow the steps to modify the
query configuration when Netwrix Activity Monitor is configured to store activity logs on a network
share.

**NOTE:** Ensure the Activity Monitor domain output and the required Connection Profile are
successfully set up. See the
[File Archive Repository Option](/docs/accessanalyzer/11.6/configuration-guides/directory-services/active-directory.md)
topic for additional information.

**Step 1 –** Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **0.Collection** >
**AD_ActivityCollection** Job. Select the **Configure** > **Queries** node.

**Step 2 –** Click **Query Properties**. The Query Properties window displays.

**Step 3 –** On the Data Source tab, select **Configure**. The Active Directory Activity DC wizard
opens.

![Active Directory Activity DC wizard Category page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/categoryimportfromshare.webp)

**Step 4 –** On the Category page, choose **Import from Share** option and click **Next**.

![Active Directory Activity DC wizard Share settings page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/share.webp)

**Step 5 –** On the Share page, provide the UNC path to the AD Activity share archive location. If
there are multiple archives in the same network share, check the **Include Sub-Directories** box.
Click **Next**.

![Active Directory Activity DC wizard Scoping and Retention page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/scope.webp)

**Step 6 –** On the Scope page, set the Timespan as desired. There are two options:

- Relative Timespan – Set the number of days of activity logs to collect when the scan is run
- Absolute Timespan – Set the date range for activity logs to collect when the scan is run

**_RECOMMENDED:_** The threshold should be set to ensure the logs are collected before the Activity
Monitor domain output log retention expires. For example, if Enterprise Auditor runs the
**AD_ActivityCollection** Job once a week (every 7 days), then the Activity Monitor output should be
configured to retain at least 10 days of log files.

**Step 7 –** Set the Retention period as desired. This is the number of days Enterprise Auditor
keeps the collected data in the SQL Server database.

**Step 8 –** Click **Next** and then **Finish** to save the changes and close the wizard.

**Step 9 –** Click **OK** to save the changes and close the Query Properties page.

The query is now configured to target the network share where the Activity Monitor domain activity
logs are archived.

## Analysis Tasks for the AD_ActivityCollection Job

Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **0.Collection** >
**AD_ActivityCollection** Job. Select the **Configure** > **Analysis** node.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_ActivityCollection Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/analysis.webp)

The following analysis tasks are selected by default:

- UAC Formatting Function – Splits column on commas and assigns opposing values to attributes
- AIC Import - AD Activity Events – Imports AD events to the Access Information Center for domain
  objects

  - The `@ADEvents` and `@AuthEvents` parameters must be enabled for AD events and authentication
    events to be imported into the Access Information Center
  - The list of attributes to track for Object Modified changes can be customized by the
    `#modifiedAttributeList` parameter

- AIC Import - Activity Retention – Deletes older activity data from the Access Information Center

  - By default, data is retained for 120 days. This is customizable by the `@Days` parameter.

### Customize Analysis Parameters for the AD_ActivityCollection Job

The customizable parameters for this job allow you to configure importing of AD activity data into
the Netwrix Access Information Center.

| Analysis Task                   | Customizable Parameter Name | Default Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Value Indicates                                         |
| ------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| AIC Import - AD Activity Events | #modifiedAttributeList      | Default attributes: - givenName - sn - displayName - description - userPrincipalName - sAMAccountName - initials - title - department - company - manager - location - streetAddress - currentLocation - st - postalCode - c - otherTelephone - homePhone - ipPhone - mobile - facsimileTelephoneNumber - otherFacsimileTelephoneNumber - mail - wWWHomePage - employeeID - employeeType - employeeNumber - extensionAttribute1 - extensionAttribute2 - extensionAttribute3 - extensionAttribute4 - extensionAttribute5 - extensionAttribute6 - extensionAttribute7 - extensionAttribute8 - extensionAttribute9 - extensionAttribute10 - extensionAttribute11 - extensionAttribute12 - extensionAttribute13 - extensionAttribute14 - extensionAttribute15 | List of attributes to track for Object Modified changes |
| AIC Import - AD Activity Events | @ADEvents                   | False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Enable to import AD events into the AIC                 |
| AIC Import - AD Activity Events | @AuthEvents                 | False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Enable to import authentication events into the AIC     |
| AIC Import - Activity Retention | @Days                       | 120                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Number of days to retain activity data in the AIC       |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for additional information.

# LDAP > AD_LDAPQueries Job

The **LDAP** > **AD_LDAPQueries** Job analyzes LDAP traffic to determine trends such as most
expensive queries, most active servers and users, successful/failed and signing status. This data
can be used to troubleshoot performance issues, load balancing, and poorly configured services.

![AD_LDAPQueries Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/ldapjobstree.webp)

**_RECOMMENDED:_** Schedule this job to run with the 0.Collection job group.

## Analysis Tasks for the AD_LDAPQueries Job

Navigate to the **Active Directory** > **6.Activity** > **LDAP** > **AD_LDAPQueries** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Except for the **Largest Queries** task, do not modify or deselect the remaining
selected analysis tasks. The remaining analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_LDAPQueries Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/ldapqueriesanalysis.webp)

The following non-configurable analysis tasks are selected by default:

- SSL – Creates the SA_AD_LDAPQueries_SSLStatus table accessible under the job’s Results node
- Host Summary – Creates the SA_AD_LDAPQueries_HostSummary table accessible under the job’s Results
  node
- User Summary – Creates the SA_AD_LDAPQueries_UserSummary table accessible under the job’s Results
  node

The following configurable analysis task can be optionally enabled:

- Largest Queries – Creates the SA_AD_LDAPQueries_ExpensiveQueries table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks, the AD_LDAPQueries Job produces the follow
pre-configured reports:

| Report               | Description                                                         | Default Tags                                               | Report Elements                                                                                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Largest LDAP Queries | Shows LDAP queries returning the most objects, and their source.    | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: - Bar – Displays top users by LDAP traffic - Table – Displays top users by LDAP traffic - Table – Displays Expensive LDAP Queries                                         |
| LDAP Overview        | Overview of hosts and users performing queries, and query security. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of four elements: - Pie – Displays SSL query events view results - Pie – Displays query security flags - Table – Displays users performing LDAP queries - Table – Displays originating hosts |

### Configure the Largest Queries Analysis Task

Customizable parameters enable you to set the values used to control the minimum objects returned
and the days of traffic to analyze during this job’s analysis. The parameters can be customized and
are listed in a section at the bottom of the SQL Script Editor. Follow the steps to customize an
analysis task’s parameters.

**Step 1 –** Navigate to the **Active Directory** > **6.Activity** > **LDAP** > **AD_LDAPQueries** >
**Configure** node and select **Analysis**.

![Largest Queries analysis task configuration](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/ldapqueriesanalysisconfiguration.webp)

**Step 2 –** In the Analysis Selection view, select the **Largest Queries** analysis task and click
**Analysis Configuration**. The SQL Script Editor opens.

**CAUTION:** Do not change any parameters where the Value states `Created during execution`.

![Largest Queries analysis task in the SQL Script Editor](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/ldapsqlscripteditor.webp)

**Step 3 –** In the parameters section at the bottom of the editor, find the Value column. There are
two integer variables that can be modified. Double-click on the current **value** and change as
desired:

- @objects_returned – Controls the minimum number of objects returned for the queries to be
  considered large. This value is set to 100 by default.
- @timeframe – Controls the number of days to analyze traffic for. This value is set to 30 days by
  default.

**Step 4 –** Click **Save and Close** to finalize the customization and close the SQL Script Editor
window.

The analysis task now includes custom parameters for the updated values.

# Lockouts > AD_Lockouts Job

The **Lockouts** > **AD_Lockouts** Job provides a listing of all account lockouts. For any lockout
occurring in the past 30 days, failed authentications and host information is provided to aid
troubleshooting.

![AD_Lockouts Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/lockoutsjobstree.webp)

**_RECOMMENDED:_** Schedule this job to run with the 0.Collection job group.

## Analysis Tasks for the AD_Lockouts Job

Navigate to the **Active Directory** > **6.Activity** > **Lockouts** > **AD_Lockouts** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_Lockouts Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/lockoutsanalysis.webp)

The default analysis tasks are:

- Account Lockouts – Creates the SA_AD_AccountLockouts_Details view accessible under the job’s
  Results node
- Failed Authentications – Creates the SA_AD_AccountLockouts_FailedAutnentications table accessible
  under the job’s Results node

In addition to the tables created by the analysis tasks, the AD_Lockouts Job produces the follow
pre-configured reports:

| Report   | Description                                                                                                                                                                        | Default Tags                                               | Report Elements                                                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lockouts | This report tracks all lockouts for user accounts. For any lockout occurring in the past 30 days, failed authentications and host information are provided to aid troubleshooting. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: - Table – Displays account lockouts details - Table –  Displays failed authentications in the past 30 days |

# AD_ComputerModifications Job

The AD_ComputerModifications Job provides a report of all changes to computer objects.

## Analysis Tasks for the AD_ComputerModifications Job

Navigate to the **Active Directory** > **6.Activity** > **Changes** > **AD_ComputerModifications** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_ComputerModifications Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/changes/computermodificationsanalysis.webp)

The following non-configurable analysis tasks are selected by default:

- All Computer Object Changes – Creates the SA_AD_ComputerChanges_ComputerSummary table accessible
  under the job’s Results node
- Summarize by Computer – Creates the SA_AD_ComputerChanges_ComputerSummary table accessible under
  the job’s Results node

In addition to the tables created by the analysis tasks, the AD_ComputerModifications Job produces
the following pre-configured report:

| Report                   | Description                        | Default Tags                                               | Report Elements                                                                                                                                                      |
| ------------------------ | ---------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Computer Account Changes | Track changes to computer objects. | CPAA GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: - Pie Chart – Displays Changes by Type - Table – Displays Changes by Computer - Table – Displays Computer Change Details |

# AD_GroupModifications Job

The AD_GroupModifications Job provides a report of all changes to group objects. A separate report
is provided to highlight group membership changes. The list of top perpetrators can be used to
identify out of band changes.

## Analysis Tasks for the AD_GroupModifications Job

Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **Changes** >
**AD_GroupModifications** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_GroupModifications Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/changes/groupmodificationsanalysis.webp)

The following non-configurable analysis tasks are selected by default:

- Group Changes – Creates the SA_AD_GroupModifications_Details view accessible under the job’s
  Results node
- Summarize by Group – Creates the SA_AD_GroupModifications_GroupSummary table accessible under the
  job’s Results node
- Summarize by Perpetrator – Creates the SA_AD_GroupModifications_UserSummary table accessible under
  the job’s Results node
- Membership Changes – Creates the SA_AD_GroupMembershipChanges_Details view accessible under the
  job’s Results node
- Summarize by Group – Creates the SA_AD_GroupMembershipChanges_Summary table accessible under the
  job’s Results node
- Top Groups by Changes – Creates the SA_AD_GroupMembershipChanges_Last30Days table accessible under
  the job’s Results node.

In addition to the tables created by the analysis tasks, the AD_GroupModifications Job produces the
following pre-configured reports:

| Report                   | Description                         | Default Tags                                               | Report Elements                                                                                                                                                                                                  |
| ------------------------ | ----------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Changes            | Tracks changes to group attributes. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: - Pie Chart – Displays changes by type - Table – Displays changes by group - Table – Displays changes by group change details                                        |
| Group Membership Changes | Tracks changes to group membership. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: - Stacked Chart – Displays the most active groups in the past 30 days - Table – Displays group membership summary - Table – Displays group membership change details |

# AD_UserModifications Job

The AD_UserModifications Job provides a report of all changes to user objects.

## Analysis Tasks for the AD_UserModifications Job

Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **Changes** >
**AD_UserModifications** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_UserModifications Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/changes/usermodificationsanalysis.webp)

The following non-configurable analysis tasks are selected by default:

- All User Account Changes – Creates the SA_AD_UserModifications_Details view accessible under the
  job’s Results node
- Summary of Changes – Creates the SA_AD_userModifications_userSummary table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the AD_UserModifications Job produces the
following pre-configured reports:

| Report               | Description                    | Default Tags                                               | Report Elements                                                                                                                                                                 |
| -------------------- | ------------------------------ | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Account Changes | Track changes to user objects. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: - Pie Chart – Displays changes by type - Table – Displays changes by user account - Table – Displays changes by user change details |

# Changes Job Group

The Changes Job Group provides an audit trail for changes made to Computer, Group and User objects
within the environment.

![Changes Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following Jobs make up the Changes Job Group:

**_RECOMMENDED:_** Schedule these jobs to run with the 0.Collection job group.

- [AD_ComputerModifications Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Reports on activity relating to changes made on computer objects
- [AD_GroupModifications Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Reports on activity relating to changes made on a group objects and changes made to group
  membership
- [AD_UserModifications Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Reports on activity relating to changes made on user objects

# AD_AccessChanges Job

The AD_AccessChanges Job highlights the type and number of resources across the environment where
access has been affected. Groups which have historically been the cause of most access changes are
highlighted, to show potential issues in access sprawl and provisioning.

## Analysis Tasks for the AD_AccessChanges Job

Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **Group Usage** >
**AD_AccessChanges** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_AccessChanges Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/groupusage/accesschangesanalysis.webp)

The following non-configurable analysis tasks are selected by default:

- Find Access Changes – Creates the SA_AD_AccessChanges_Details table accessible under the job’s
  Results node
- Group Summary – Creates the SA_AD_AccessChanges_GroupSummary table accessible under the job’s
  Results node
- Access Type Summary – Creates the SA_AD_AccessChanges_TypeSummary table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks, the AD_AccessChanges Job produces the
following pre-configured reports:

| Report         | Description                                                                                             | Default Tags                                               | Report Elements                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Access Changes | Highlights group membership additions that have created large changes in access within the environment. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: - Bar Chart – Displays largest changes last week - Table – Displays groups by modified access - Table – Displays all group membership changes |

# AD_GroupHosts Job

The AD_GroupHosts Job attempts to identify where groups may be used to provide access.

## Analysis Tasks for the AD_GroupHosts Job

Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **GroupUsage** >
**AD_GroupHosts** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_GroupHosts Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/groupusage/grouphostsanalysis.webp)

The default analysis tasks are:

- Group Authentication Details – Creates the SA_AD_GroupHosts_Details table accessible under the
  job’s Results node
- Summarize Authentication Events by Group – Creates the SA_AD_GroupHosts_GroupSummary table
  accessible under the job’s Results node
- Summarize Authentication Events by Host – Creates the SA_AD_GroupHosts_HostSummary table
  accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD_GroupHosts Job produces the
following pre-configured reports:

| Report           | Description                                                         | Default Tags                                               | Report Elements                                                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Host Usage | Understand what groups are utilizing what hosts in the environment. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: - Table – Displays security groups by target hosts - Table – Displays hosts by associated groups - Table – Displays authentication details |

# AD_GroupMemberActivity Job

The AD_GroupMemberActivity Job analyzes the AD actions taken by the effective members of a group.
Monitoring authentication can provide a more accurate method of determining staleness than last
logons.

## Analysis Tasks for the AD_GroupMemberActivity Job

Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **Group Usage** >
**AD_GroupMemberActivity** > **Configure** node and select **Analysis** to view the analysis tasks.

![Analysis Tasks for the AD_GroupMemberActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/groupusage/groupmemberactivityanalysis.webp)

The default analysis task is:

- Group Member Activity – Creates the SA_AD_GroupMemberActivity_GroupSummary table accessible under
  the job’s Results node

In addition to the tables created by the analysis tasks, the AD_GroupMemberActivity Job produces the
follow pre-configured report:

| Report                | Description                                                                                | Default Tags                                               | Report Elements                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Group Member Activity | This report identifies actions taken by the members of each group within your environment. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of one element: - Table – Displays group member activity |

### Configure the Group Member Activity Analysis Task

Customizable parameters enable you to set the values used to include the SIDs for admin groups
during this job’s analysis. The parameters can be customized and are listed in a section at the
bottom of the SQL Script Editor. Follow the steps to customize an analysis task’s parameters.

**Step 1 –** Navigate to the **Active Directory** > **6.Activity** > **Group Usage** >
**AD_GroupMemberActivity** > **Configure** node and select **Analysis**.

![Group Member Activity analysis task configuration](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/groupusage/groupmemberactivityanalysisconfiguration.webp)

**Step 2 –** In the Analysis Selection view, select the Group Member Activity analysis task and
click on **Analysis Configuration**. The SQL Script Editor opens.

**CAUTION:** Do not change any parameters where the Value states `Created during execution`.

![Group Member Activity Analysis Task in the SQL Script Editor](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/groupusage/groupmemberactivitysqlscripteditor.webp)

**Step 3 –** In the parameters section at the bottom of the editor, find the Value column. Select
the cell for the temporary table called #admingroups, and click **Edit Table** to modify the value.

- The new value should include SIDs for admin groups to be considered administrative groups beyond
  the default admin groups.

**Step 4 –** Click **Save and Close** to finalize the customization and close the SQL Script Editor
window.

The analysis task now includes custom parameters for the updated values.

# Group Usage Job Group

The Group Usage Job Group reports shows how group membership changes have affected access across the
entire environment, the actions taken by the members of a group, and identifies where groups may be
used for authorization in applications.

![Group Usage Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following Jobs make up the Group Usage Job Group:

**_RECOMMENDED:_** Schedule these jobs to run with the 0.Collection job group.

- [AD_AccessChanges Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Reports on activity relating to access changes for Active Directory groups, highlighting
  membership changes that have created large access change within the environment
- [AD_GroupHosts Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Reports on what hosts groups are being used on within the environment
- [AD_GroupMemberActivity Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Reports on the activity that group members are taking within the Active Directory environment

# AD_AuthenticationProtocol Job

The AD_Authentication Job shows what protocols are being used to authenticate across the environment
and will help to identify what services and computers may be affected when disabling NTLM.

## Analysis Tasks for the AD_AuthenticationProtocol Job

Navigate to the **Active Directory** > **6.Activity** > **Operations** >
**AD_AuthenticationProtocol** > **Configure** node and select **Analysis** to view the analysis
tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_AuthenticationProtocol Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/operations/authenticationprotocolanalysis.webp)

The default analysis tasks are:

- Summarize Protocol Usage – Creates the SA_AD_AuthenticationProtocol_Summary table accessible under
  the job’s Results node
- Summarize Host Protocol Usage – Creates the SA_AD_AuthenticationProtocol_Hosts table accessible
  under the job’s Results node

In addition to the tables created by the analysis tasks, the AD_AuthenticationProtocol Job produces
the follow pre-configured reports:

| Report                   | Description                                                          | Default Tags                                               | Report Elements                                                                                                                          |
| ------------------------ | -------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Authentication Protocols | Track the prevalence of NTLM versus Kerberos within the environment. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: - Pie – Displays authentication protocols - Table –  Displays authentication protocols summary |

# AD_DomainControllerTraffic Job

The AD_DomainControllerTraffic Job provides a summary of the amount of traffic for Changes,
Authentication, Replication, and LDAP Queries for each domain controller which can be used to
identify issues with load balancing. If the AD_DCSummary job has been run, the roles for each domain
controller will be provided.

## Analysis Tasks for the AD_DomainControllerTraffic Job

Navigate to the **Active Directory** > **6.Activity** > **Operations** >
**AD_DomainControllerTraffic** > **Configure** node and select **Analysis** to view the analysis
tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_DomainControllerTraffic Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/operations/dctrafficanalysis.webp)

The default analysis task is:

- Summarize Protocol Usage – Creates the SA_AD_DomainControllerTraffic_Details table accessible
  under the job’s Results node

In addition to the tables created by the analysis tasks, the AD_DomainControllerTraffic Job produces
the follow pre-configured report:

| Report                    | Description                                                                            | Default Tags                                               | Report Elements                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Domain Controller Traffic | Identifies the amount of active directory events that occur on each domain controller. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of one element: - Table –  Displays a Domain Controller summary |

# AD_HardcodedDCs Job

The AD_HardcodedDCs Job highlights machines that have communicated with only one domain controller.

## Analysis Tasks for the AD_HardcodedDCs Job

Navigate to the **Active Directory** > **6.Activity** > **Operations** > **AD_HardcodedDCs** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_HardcodedDCs Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/operations/hardcodeddcsanalysis.webp)

The default analysis tasks are:

- Hardcoded DCs – Creates the SA_AD_Hardcoded_DCs table accessible under the job’s Results node
- Summarizes Hardcoded DC Information – Creates the SA_AD_Hardcoded_Summary table accessible under
  the job’s Results node

In addition to the tables created by the analysis tasks, the AD_Hardcoded DCs Job produces the
follow pre-configured reports:

| Report        | Description                                                                                                                                                                                          | Default Tags                                               | Report Elements                                                                                                                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hardcoded DCs | This report identifies hosts which may have hardcoded domain controller information in server or application settings. Each host identified in this report has only contacted one domain controller. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: - Pie –  Displays top domain controllers - Table – Displays hardcoded domain controller summary - Table – Displays host details |

# AD_LoadBalancing Job

The AD_LoadBalancing Job analyzes each domain controller's traffic to show what percent of all LDAP,
Replication, Authentication and Changes are being handled by that particular machine. This helps to
highlight domain controllers which are over utilized relative to others within the domain, or unused
domain controllers which may be decommissioned.

## Analysis Task for the AD_LoadBalancing Job

Navigate to the **Active Directory** > **6.Activity** > **Operations** > **AD_LoadBalancing** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Task for the AD_LoadBalancing Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/operations/loadbalancinganalysis.webp)

The default analysis task is:

- Domain Controller Traffic – Creates the SA_AD_LoadBalancing_DomainControllers table accessible
  under the job’s Results node

In addition to the tables created by the analysis tasks, the AD_LoadBalancing Job produces the
follow pre-configured reports:

| Report             | Description                                                                                                                                 | Default Tags                                               | Report Elements                                                                                                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain Controllers | This report identifies the distribution of change events and authentication events between domain controllers in the monitored environment. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: - Bar Chart – Displays top DCs by authentication traffic - Bar Chart – Displays top DCs by change traffic - Table – Displays domain controller traffic details |

# AD_MachineOwners Job

The AD_MachineOwners Job helps to identify the owner of a particular host.

## Analysis Tasks for the AD_MachineOwners Job

Navigate to the **Active Directory** > **6.Activity** > **Operations** > **AD_MachineOwners** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_MachineOwners Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/operations/machineownersanalysis.webp)

The default analysis tasks are:

- Identify Machine Owners – Creates the SA_AD_MachineOwners_Details table accessible under the job’s
  Results node
- User Summary – Creates the SA_AD_MachineOwners_UserSummary table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks, the AD_MachineOwners Job produces the
following pre-configured report:

| Report         | Description                                                   | Default Tags                                               | Report Elements                                                                                                               |
| -------------- | ------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Machine Owners | Identify owners of machines based on authentication patterns. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: - Bar Chart– Displays top users by machines owned - Table – Displays machine owners |

# Operations Job Group

The Operations Job Group reports on Active Directory activity events related to operational
activity. This group can help report on probable machine owners based on authentications, domain
controller traffic and activity, and authentication protocols being used in the environment.

![Operations Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following Jobs make up the Operations Job Group:

**_RECOMMENDED:_** Schedule these jobs to run with the 0.Collection job group.

- [AD_AuthenticationProtocol Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Shows what protocols are being used to authenticate across the environment and will help to
  identify what services and computers may be affected when disabling NTLM
- [AD_DomainControllerTraffic Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Provides a summary of the amount of traffic for Changes, Authentication, Replication, and LDAP
  Queries for each domain controller which can be used to identify issues with load balancing. If
  the AD_DCSummary job has been run, the roles for each DC will be provided.
- [AD_HardcodedDCs Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Highlight machines that have communicated with only one DC
- [AD_LoadBalancing Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Analyzes each domain controller's traffic to show what percent of all LDAP, Replication,
  Authentication and Changes are being handled by that particular machine. This helps to highlight
  domain controllers which are over utilized relative to others within the domain, or unused domain
  controllers which may be decommissioned.
- [AD_MachineOwners Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Helps to identify the owner of a particular host

# 6.Activity Job Group

The 6.Activity Job Group provides insights into access sprawl, privileged account usage, and
operational health of the Active Directory environment. Information collected includes Active
Directory Changes, Authentication, LDAP Traffic, Replication Traffic, and LSASS.EXE process
injection on domain controllers.

The jobs that comprise the 6.Activity Job Group collect data, process analysis tasks, and generate
reports.

_Remember,_ this job group requires the Active Directory Activity license.

![6.Activity Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 6.Activity Job Group is comprised of the following jobs:

- [0.Collection > AD_ActivityCollection Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Imports data from the Netwrix Activity Monitor logs into the Enterprise Auditor Database.
  Retention can be modified in the query (120 days default).
- [Changes Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Provides an audit trail for changes made to Computer, Group and User objects within the
  environment
- [Group Usage Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Shows how group membership changes have affected access across the entire environment, the
  actions taken by the members of a group, and identifies where groups may be used for authorization
  in applications
- [LDAP > AD_LDAPQueries Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Analyzes LDAP traffic to determine trends such as most expensive queries, most active servers
  and users, successful/failed and signing status. This data can be used to troubleshoot performance
  issues, load balancing, and poorly configured services.
- [Lockouts > AD_Lockouts Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)–
  Provides a listing of all account lockouts with relevant details which can be used to aid
  troubleshooting
- [Operations Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Reports on Active Directory activity events related to operational activity. This group can help
  report on probable machine owners based on authentications, domain controller traffic and
  activity, and authentication protocols being used in the environment.
- [Privileged Accounts Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)–
  Highlights the activity performed by this accounts, to identify potential abuses or unused
  accounts that can be deprovisioned

# AD_AdminAccounts Job

The AD_AdminAccounts Job shows all actions taken by domain administrators within the environment.

## Analysis Tasks for the AD_AdminAccounts Job

Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **Privileged Accounts** >
**AD_AdminAccounts** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_AdminAccounts Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/privilegedaccounts/adminaccountsanalysis.webp)

The default analysis tasks are:

- Summarizes Administrative Account Activity – Creates the SA_AD_AdminAccounts_ActivitySummary table
  accessible under the job’s Results node
- Identifies Administrative Accounts Last Activity Event – Creates the
  SA_AD_AdminAccounts_LastActivity table accessible under the job’s Results node
- Identifies Administrative Group List Activity Event – Creates the
  SA_AD_AdminAccounts_LastActivityByGroup table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD_AdminAccounts Job produces the
follow pre-configured reports:

| Report                | Description                                                                                                   | Default Tags                                               | Report Elements                                                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Admin Activity        | Highlights administrative account activity events.                                                            | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: - Bar Chart– Displays least active administrators - Table – Displays administrative user activity details                                           |
| Admin Authentications | Authenticating from many different clients increases the risk of Administrator credentials being compromised. | GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001      | This report is comprised of three elements: - Bar Chart – Displays the top admin accounts by client usage - Table – Displays all client usage - Table – Displays administrator authentication |

### Configure the Summarize Administrative Account Activity Analysis Task

Customizable parameters enable you to set the values used to include the NT Account name for admin
groups during this job’s analysis. The parameters can be customized and are listed in a section at
the bottom of the SQL Script Editor. Follow the steps to customize an analysis task’s parameters.

**Step 1 –** Navigate to the **Active Directory** > **6.Activity** > **Privileged Accounts** >
**AD_AdminAccounts** > **Configure** node and select **Analysis**.

![Summarizes Administrative Account Activity analysis task configuration](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/privilegedaccounts/adminaccountsanalysisconfiguration.webp)

**Step 2 –** In the Analysis Selection view, select the **Summarizes Administrative Account
Activity** analysis task and click **Analysis Configuration**. The SQL Script Editor opens.

**CAUTION:** Do not change any parameters where the Value states `Created during execution`.

![Summarizes Administrative Account Activity analysis task in the SQL Script Editor](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/privilegedaccounts/adminaccountssqlscripteditor.webp)

**Step 3 –** In the parameters section at the bottom of the editor, find the Value column. Select
the cell for the temporary table called #AdminGroups, and click **Edit Table** to modify the value.

- The new value should include the NT Account names for the admin groups that are considered
  administrative groups beyond the default admin groups.

**Step 4 –** Click **Save and Close** to finalize the customization and close the SQL Script Editor
window.

The analysis task now includes custom parameters for the updated values.

# AD_ServiceAccountAuth Job

The AD_ServiceAccountAuth Job shows the last time a service account, identified by the presence of a
servicePrincipalName, was active within the environment.

## Analysis Task for the AD_ServiceAccountAuth Job

Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **Operations** >
**AD_ServiceAccountAuth** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Task for the AD_ServiceAccountAuth Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/privilegedaccounts/serviceaccountauthanalysis.webp)

The following non-configurable analysis task is selected by default:

- Creates the SA_AD_ServiceAccountAuth_Details table accessible under the job’s Results node.

In addition to the tables created by the analysis tasks, the AD_ServiceAccountAuth Job produces the
follow pre-configured report:

| Report           | Description                                                                                                                                 | Default Tags                                               | Report Elements                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Service Accounts | Because many service accounts may not ever perform a logon, tracking authentication can be a better way to identify stale service accounts. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: - Bar Chart– Displays stale service accounts - Table – Displays account details |

# Privileged Accounts Job Group

The Privileged Accounts Job Group highlights the activity performed by this accounts, to identify
potential abuses or unused accounts which can be deprovisioned.

![Privileged Accounts Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following Jobs make up the Privileged Accounts Job Group:

**_RECOMMENDED:_** Schedule these jobs to run with the 0.Collection job group.

- [AD_AdminAccounts Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Shows all actions taken by domain administrators within the environment being compromised
- [AD_ServiceAccountAuth Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Shows the last time a service account, identified by the presence of a servicePrincipalName, was
  active within the environment

# Recommended Configurations for the 6.Activity Job Group

The **Active Directory** > **6.Activity** Job Group has been configured by default to run with the
out-of-the-box settings. It can be run directly or scheduled.

Dependencies

- Successfully execute the **.Active Directory Inventory** Job Group
- Netwrix Activity Monitor 4.1+ is archiving AD Activity Logs
- Successfully execute the **Active Directory** > **5.Domains Job Group** prior to running the
  Operations Job Group
- (Optional) Successfully execute the **Active Directory Permissions Analyzer** > **0.Collection**
  Job Group
- (Optional) Successfully execute the **FileSystem** > **0.Collection** Job Group

Targeted Host(s)

Netwrix Activity Monitor API Server or the host with the network share housing archived log files.

Connection Profile

Connection Profiles must be set directly on the
[0.Collection > AD_ActivityCollection Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
in order to connect to either the SAM API Server or the host with the network share housing the
archived log files.

Access Token

Required for SAM API Server integration for the
[0.Collection > AD_ActivityCollection Job](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md).

Scheduling Frequency

This group can be scheduled to run as desired.

**_RECOMMENDED:_** Run from the 6.Activity Job Group level in order to correlate 0.Collection job
group data with other jobs.

History Retention

History is not supported. Turning on history will cause issues with data analysis and reporting.

Multi-Console Support

Multiple Enterprise Auditor Consoles are not supported. This group should be run from a single
Enterprise Auditor Console.

Workflow

**Step 1 –** Successfully run the **.Active Directory Inventory** Job Group.

**Step 2 –** Setup integration between the Netwrix Activity Monitor and Enterprise Auditor by using
either an API Server or the network share where the archived log files are located.

**Step 3 –** Ensure Activity Monitor logs are archived.

**Step 4 –** Configure the Connection Profiles to connect successfully to the Netwrix Activity
Monitor API Server or the host with the network share housing the archived log files.

**Step 5 –** Configure the **AD_ActivityCollection** Job Query.

**Step 6 –** Run the jobs as desired.

**Step 7 –** Run from the **6.Activity** Job Group level in order to correlate 0.Collection job
group data with other jobs.

**Step 8 –** Review the reports generated by the jobs.

See the
[Active Directory Solution](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for additional information.

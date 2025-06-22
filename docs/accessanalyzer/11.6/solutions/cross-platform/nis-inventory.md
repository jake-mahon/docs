# NIS Scan Job

The NIS Scan job collects data from the targeted NIS server and then analyzes that data to inventory
users, groups, and group membership. This data can then be used by other built-in Enterprise Auditor
solutions.

## Query for the NIS Scan Job

The NIS Scan Job uses the NIS Data Collector for the following query:

**CAUTION:** This query must be modified. See the
[Configure the NIS Scan Query](#configure-the-nis-scan-query) topic for additional information.

![Query for the NIS Scan Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/nisinventory/nisscanquery.webp)

- Inventory Scan – Targets a NIS server to collect inventory data for user and group objects

### Configure the NIS Scan Query

The NIS Scan job has been preconfigured to run with the default settings with the category of **Scan
NIS Users and Groups**. However, it is necessary to configure the targeted NIS domain. Follow the
steps to set the target NIS domain and any desired customizations.

**Step 1 –** Navigate to the **.NIS Inventory** > **NIS Scan** > **Configure** node and select
**Queries**.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window
opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The NIS Data Collector Wizard
opens.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for the
purpose of this job.

![NIS Settings page](/img/versioned_docs/activitymonitor_7.1/config/dellpowerscale/settings.webp)

**Step 4 –** On the NIS Settings page, enter the **NIS Domain Name** for the targeted NIS domain.
This step is required prior to running this query. See the
[NIS: NIS Settings](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/nis/settings.md)
topic for additional information.

- Optional: Test the connection to the domain using the Sample NIS Server section of the page

![SID Mappings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/nis/sidmappings.webp)

**Step 5 –** On the SID Mappings page, you can add multiple SID mapping entries. See the
[NIS: SID Mappings](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/nis/sidmappings.md)
topic for additional information.

**Step 6 –** Navigate to the Summary page. Click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

The NIS Scan Job is now ready to run.

## Analysis Tasks for the NIS Scan Job

View the analysis tasks by navigating to the **.NIS Inventory** > **NIS Scan** > **Configure** node
and select **Analysis**.

**CAUTION:** Most of these analysis tasks are preconfigured and should not be modified or
deselected. There is one that is deselected by default, as it is for troubleshooting purposes.

![Analysis Tasks for the NIS Scan Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/nisinventory/nisscananalysis.webp)

The following analysis tasks are selected by default:

- Users – Enables the SA_NIS_Users table to be accessible under the job’s Results node
- Groups – Enables the SA_NIS_Groups table to be accessible under the job’s Results node
- Members – Enables the SA_NIS_GroupMembersView to be accessible under the job’s Results node

The following analysis task only needs to be selected when there is a need to remove the tables from
the database:

**CAUTION:** This analysis task is for troubleshooting and cleanup only. Data will be deleted from
the database. Do not execute this task with the other analysis tasks, as that results in the
deletion of data that was just collected.

- Drop NIS Tables – Removes all tables and views created by this job from SQL Server database

  - See the [Remove NIS Tables](#remove-nis-tables) topic for additional information

### Remove NIS Tables

Sometimes when troubleshooting a NIS Data Collector issue, it becomes necessary to clear the
standard reference tables. Follow these steps.

**Step 1 –** Navigate to the **.NIS Inventory** > **NIS Scan** > **Configure** node and select
**Analysis**.

**Step 2 –** Clear all of the other analysis tasks and select only the **Drop NIS Tables** analysis
task.

**Step 3 –** Use the right-click menu on the analysis data grid to **Execute Analyses**.

**Step 4 –** After the analysis task has completed execution, the tables have been cleared from the
SQL database.

**CAUTION:** Do not forget to clear the Drop NIS Tables analysis task and reselect all of the other
analysis tasks.

The next time the job is run, the standard reference tables are recreated in the database.

# .NIS Inventory Solution

Network Information Service (NIS) for Unix provides a central repository for user, group, and other
information Unix systems need for authentication and authorization. The .NIS Inventory Solution is
designed to provide essential user and group membership information from a NIS domain, mapping these
principals to Windows-style SIDs. This provides valuable information to the File Systems Solution
when auditing NFS shares. This information can also be used in the Unix Solution Set.

Supported Platforms

- NIS domains

Permissions

- No special permissions are needed aside from access to a NIS server

Ports

- TCP 111 or UDP 111
- Randomly allocated high TCP ports

Location

The .NIS Inventory Solution is a core component of all Enterprise Auditor installations. It can be
installed from the Enterprise Auditor Instant Job Wizard..

![.NIS Inventory Solution in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

Once it has been installed into the Jobs tree, navigate to the solution: **Jobs** > **.NIS
Inventory**. This group has been named in such a way to keep it at the top of the Jobs tree.

## NIS Scan Job

The .NIS Inventory Solution contains a single job. This job is configured to use the NIS Data
Collector and then runs analysis on the collected data.

![.NIS Inventory Solution Overview page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/runninginstances/overviewpage.webp)

The following job comprises the .NIS Inventory job group:

- [NIS Scan Job](/docs/accessanalyzer/11.6/solutions/cross-platform/nis-inventory.md)
  – Provides essential user and group membership details to built-in solution sets

# Recommended Configuration for the .NIS Inventory Solution

The .NIS Inventory Solution requires some configuration for the target environment. It can be run
directly or scheduled.

Dependencies

This job group does not have dependencies.

Targeted Hosts

The host list assignment should be assigned under the **.NIS Inventory** > **NIS Scan** > **Hosts**
node. Select the custom host list containing the NIS servers or manually add the host in the
**Individual hosts** section. See the
[Unix Connection Profile & Host List](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/nis/configurejob.md)
topic for additional information.

Connection Profile

The Connection Profile should be assigned in the **.NIS Inventory** > **NIS Scan** > **Job
Properties** window on the **Connection** tab. It is set to **Use the Default Profile**, as
configured at the global settings level. However, if this is not the Connection Profile with the
necessary permissions for targeting the NIS servers, select the **Select one of the following user
defined profiles** option and select the appropriate Connection Profile. See the
[Unix Connection Profile & Host List](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/nis/configurejob.md)
topic for additional information.

Schedule Frequency

It is recommended to schedule the .NIS Inventory job group to run once a day. If there are frequent
changes within the target environment, then it can be executed more often. It is best to rerun it
anytime changes might have occurred.

Run at the Solution Level

The job in the .NIS Inventory job group can be run at either the job or job group level.

Query Configuration

The solution requires the NIS domain to be configured in the **Inventory Scan** query. Navigate to
the **NIS Settings** page of the NIS Data Collector Wizard. Optionally, modifications can be made
for SID mappings within the **NIS Scan** job. See the
[NIS Scan Job](/docs/accessanalyzer/11.6/solutions/cross-platform/nis-inventory.md) topic
for additional information.

Analysis Configuration

The solution is best run with the default analysis configuration. However, the **Drop NIS Tables**
analysis task is deselected by default, as it is for troubleshooting purposes only.

History Retention

History retention is not supported and should be turned off.

Multi-console Support

Multi-console is not supported.

Workflow

**Step 1 –** Configure and assign the host list and Connection Profile.

**Step 2 –** Configure the Inventory Scan query.

**Step 3 –** Schedule the .NIS Inventory job group to run as desired

# 1-Dropbox_Permissions Scan Job

The 1-Dropbox_Permissions Scan job collects data from the Dropbox environment on access rights,
sharing policies, configurations, and content.

**CAUTION:** This job should not be run if running sensitive data scans against the Dropbox Business
environment.

## Queries for the 1-Dropbox_Permissions Scan Job

The 1-Dropbox_Permissions Scan job has been preconfigured to run with the default settings with the
category of Dropbox Access.

![Queries for the 1-Dropbox_Permissions Scan Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/collection/permissionsscanquery.webp)

The query for the 1-Dropbox_Permissions Scan job is:

- Dropbox Access – Collects the data on access rights, sharing policies, configurations, and content

### Configure the Dropbox Access Query

Follow the steps to either generate the access token needed for the Connection Profile (only done
prior to first execution) or to set any desired customizations.

**Step 1 –** Navigate to the **Jobs** > **Dropbox** > **0.Collection** > **1-Dropbox_Permissions
Scan** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, click **Query Properties** to open the Query Properties
window.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The Dropbox Access Auditor
Data Collector Wizard opens.

![Dropbox Access Auditor Data Collector Wizard Scan Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/dropbox/collection/permissionsscanoptionspage.webp)

**Step 4 –** T Use the Scan Options page ito generate the access token prior to the first execution
of the job group.

- Remember to copy the access token, either from the textbox or using the **Copy to Clipboard**
  button, and use it in the Connection Profile assigned to the Dropbox Solution. Once the access
  token has been generated and copied, if no customizations are to be made, click **Cancel** to
  close the Dropbox Access Auditor Data Collector wizard.
- See the
  [DropboxAccess: Scan Options](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md)
  topic for full instructions on generating the access token

**Step 5 –** If query customizations are desired, click **Next** to continue.

![Dropbox Access Auditor Data Collector Wizard Scoping page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/dropbox/collection/permissionsscopingpage.webp)

**Step 6 –** On the Scoping page, select whether to scan **All Users** or **Limited Users**. If
**Limited Users** is selected, browse to a CSV file with one email address per row for the desired
users. In the File Permissions section, select the **Collect File Level Permissions** checkbox to
collect permissions at the file level. When finished with this page, click **Next**.

**Step 7 –** On the Summary page, click **Finish** to save any setting modifications or click
**Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

If changes were made, the 1-Dropbox_Permissions Scan job has now been customized.

# 1-Dropbox_SDD Scan Job

The 1-Dropbox_SDD Scan job collects data from the Dropbox environment on access rights, sharing
policies, configurations, content and sensitive data.

## Queries for the 1-Dropbox_SDD Scan Job

The 1-Dropbox_SDD Scan job has been preconfigured to run under the default settings within the
category of Scan for Sensitive Content.

![Queries for the 1-Dropbox_SDD Scan Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/dropbox/collection/sddscanquery.webp)

The query for the 1-Dropbox_SDD Scan job is:

- Sensitive Data Scan – Scans Dropbox for sensitive data

### Configure the Sensitive Data Scan Query

Follow the steps to either generate the access token needed for the Connection Profile (only done
prior to first execution) or to set any desired customizations.

**Step 1 –** Navigate to the **Jobs** > **Dropbox** > **0.Collection** > **1-Dropbox_SDD Scan** >
**Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, click **Query Properties** to open the Query Properties
window.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The Dropbox Access Auditor
Data Collector Wizard opens.

![Dropbox Access Auditor Data Collector Wizard Scoping page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/dropbox/collection/sddscopingpage.webp)

**Step 4 –** On the Scoping page, select whether to scan **All Users** or **Limited Users**. If
**Limited Users** is selected, browse to a CSV file with one email address per row for the desired
users. In the File Permissions section, select the **Collect File Level Permissions** checkbox to
collect permissions at the file level. See the
[DropboxAccess: Scoping](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md) topic
for additional information.

![Dropbox Access Auditor Data Collector Wizard DLP Audit Settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/dropbox/collection/sdddlpsettings.webp)

**Step 5 –** On theDLP Audit Settings page:

- Modify the maximum file size to be scanned
- Modify file types to be scanned
- Enable storing of discovered match hits
- Enable differential scanning

See the
[DropboxAccess: DLP Audit Settings](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md)
topic for additional information.

![Dropbox Access Auditor Data Collector Wizard Select DLP criteria page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/dropbox/collection/sddselectdlpcriteria.webp)

**Step 6 –** On the Select DLP Criteria for This Scan page , add or remove criteria as desired.

- (Optional) Create custom criteria with the **Edit** option. See the
  [Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md)
  topic for additional information.

See the
[DropboxAccess: Select DLP Criteria](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md)
topic for additional information.

**Step 7 –** On the Completion Page, click **Finish** to save any setting modifications or click
**Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

If changes were made, the 1-Dropbox_SDD Scan job has now been customized.

# 2-Dropbox_Permissions Bulk Import Job

The 2-Dropbox_Permissions Bulk Import job imports the data collected by the 1-Dropbox \_Permissions
Scan job to the Enterprise Auditor database for use by the analysis tasks.

**CAUTION:** This job should not be run if running sensitive data scans against the Dropbox Business
environment.

## Queries for the 2-Dropbox_Permissions Bulk Import Job

The 2-Dropbox_Permissions Bulk Import job has been preconfigured to run with the default settings
with the category of Bulk Import Access Scan Results.

![Queries for the 2-Dropbox_Permissions Bulk Import Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/dropbox/collection/permissionsbulkimportquery.webp)

The query for the 2-Dropbox_Permissions Bulk Import job is:

- Dropbox Bulk Import – Imports data collected by the 1-Dropbox_Permissions Scan job to the
  Enterprise Auditor database

There are no customization options available for this job. The Summary page of the Dropbox Access
Auditor Data Collector wizard can be viewed at the **Jobs** > **Dropbox** > **0.Collection** >
**2-Dropbox_Permissions Bulk Import** > **Configure** > **Queries** node.

# 2-Dropbox_SDD Bulk Import Job

The 2-Dropbox_SDD Bulk Import job imports the data collected by the 1-Dropbox_SDD Scan job to the
Enterprise Auditor database for use by the analysis tasks.

## Queries for the 2-Dropbox_SDD Bulk Import Job

The 2-Dropbox_SDD Bulk Import Job has been preconfigured to run with the default settings with the
category of Bulk Import Sensitive Content Scan.

![Queries for the 2-Dropbox_SDD Bulk Import Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/dropbox/collection/sddbulkimportquery.webp)

The query for the 2-Dropbox_SDD Bulk Import job is:

- DropboxSDD Bulk Import – Imports data collected by the Dropbox 1-SDD Scan Job into the Enterprise
  Auditor database

There are no customization options available for this job. The Summary page of the Dropbox Access
Auditor Data Collector wizard can be viewed at the **Jobs** > **Dropbox** > **0.Collection** >
**2-Dropbox_SDD Bulk Import** > **Configure** > **Queries** node.

# 0.Collection Job Group

The **Dropbox** > **0.Collection** job group scans the targeted Dropbox site using the DropboxAccess
Data Collector. The collected data is then available to other job groups in the Dropbox solution and
the Access Information Center for analysis.

![0.Collection Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 0.Collection job group is comprised of:

- [1-Dropbox_Permissions Scan Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/dropbox-analysis.md)
  – This job is responsible for scanning the target Dropbox site
- [1-Dropbox_SDD Scan Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/dropbox-analysis.md)
  – This job is responsible for scanning sensitive data in the target Dropbox site. The Sensitive
  Data Discovery Add-On is required to run this job. The Dropbox sensitive data Discovery Reports in
  the Access Information Center are also populated by this data. See the Resource Audits Overview
  topic in the
  [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
  for additional information.
- [2-Dropbox_Permissions Bulk Import Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/dropbox-analysis.md)
  – This job is responsible for importing the collected data into the Enterprise Auditor database
- [2-Dropbox_SDD Bulk Import Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/dropbox-analysis.md)
  – This job is responsible for importing the collected sensitive data into the Enterprise Auditor
  database. The Sensitive Data Discovery Add-On is required to run this job. The Dropbox sensitive
  data Discovery Reports in the Access Information Center are also populated by this data. See the
  Resource Audits Overview topic in the
  [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
  for additional information.

The relationship between the scan and bulk import jobs requires the following considerations:

- A scan job executed from an Enterprise Auditor Console must be followed by the corresponding bulk
  import job from the same Enterprise Auditor Console version
- Two scan jobs processing the same information, for example two 1-Dropbox_Permissions Scan jobs,
  cannot be executed consecutively against the same target host. The corresponding bulk import job,
  for example 2-Dropbox_Permissions Bulk Import job, must be executed in between.
- For the Dropbox Solution, the bulk import jobs require the same connection profile as used in the
  corresponding scan jobs

**_RECOMMENDED:_** When running the sensitive data jobs, disable the permissions jobs, and vice
versa.

_Remember,_ prior to running the Dropbox Solution for the first time, it is necessary to generate an
access token to be used in the Connection Profile. This only needs to be done once. See the
[Configure the Dropbox Access Query](/docs/accessanalyzer/11.6/solutions/cloud-platforms/dropbox-analysis.md#configure-the-dropbox-access-query)
topic for additional information.

# 1.Access > Dropbox_Access Job

The Dropbox_Access job provides insight into effective access to resources within the targeted
Dropbox environment, specifically highlighting inactive access rights that can be revoked. It is
dependent on data collected by the 0.Collection job group. This job processes analysis tasks and
generates reports.

![1.Access > Dropbox_Access Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/dropbox/accessjobstree.webp)

The Dropbox_Access job is located in the 1.Access job group.

## Analysis Tasks for the Dropbox_Access Job

View the analysis tasks by navigating to the **Jobs** > **Dropbox** > **1.Access** > **Dro
pbox_Access** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Dropbox_Access Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/accessanalysis.webp)

- Get access details – Creates the SA_Dropbox_Access_Details table accessible under the job’s
  Results node
- Summarize access details – Creates the SA_Dropbox_Access_Summary table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks which display effective access to resources,
the Dropbox_Access job produces the following pre-configured reports.

| Report           | Description                                                                                                                                                                | Default Tags                                          | Report Elements                                                                                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Effective Access | This report shows effective access for all files in Dropbox.                                                                                                               | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: - Stacked Bar Chart – Displays access by team - Table – Provides summary of database access - Table – Provides details on database access |
| Inactive Access  | This report identifies instances of inactive access in Dropbox. Inactive access to a shared folder occurs when a user has left the shared folder, but can still rejoin it. | None                                                  | This report is comprised of two elements: - Bar Chart – Displays inactive access by team - Table – Provides details on inactive access                                                |

# 4.Content > Dropbox_Content Job

The Dropbox_Content job provides insight into the type, size, and age of the content within the
targeted Dropbox environment. It is dependent on data collected by the 0.Collection job group. This
job processes analysis tasks and generates reports.

![4.Content > Dropbox_Content Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/sharepoint/content/contentjobstree.webp)

The Dropbox_Content job is located in the 4.Content job group.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The Dropbox_Content job has the following customizable parameter:

- Days since File Modification before a file is considered stale

See the
[Customizable Analysis Tasks for the Dropbox_Content Job](#customizable-analysis-tasks-for-the-dropbox_content-job)
topic for additional information.

## Analysis Tasks for the Dropbox_Content Job

View the analysis tasks by navigating to the **Jobs** > **Dropbox** > **4.Content** >
**Dropbox_Content** > **Configure** node and select **Analysis**.

**CAUTION:** Most of the analysis tasks should not be modified or deselected. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Dropbox_Content Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/publicfolders/content/contentanalysis.webp)

- Summarizes content by mimetype, classification – Creates an interim processing table in the
  database for use by downstream analysis and report generation
- Determines stale data by owner:

  - By default, a stale file has not been modified in the past 365 days. You can modify this
    analysis task to edit this number of days. See the
    [Customizable Analysis Tasks for the Dropbox_Content Job](#customizable-analysis-tasks-for-the-dropbox_content-job)
    topic for additional information.
  - Creates an interim processing table in the database for use by downstream analysis and report
    generation
  - Creates the SA_Dropbox_StaleData_OwnerSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display content details, the
Dropbox_Content job produces the following pre-configured reports.

| Report          | Description                                                             | Default Tags | Report Elements                                                                                                                                                      |
| --------------- | ----------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content By Type | This report breaks down Dropbox content by mimetype and classification. | None         | This report is comprised of two elements: - Pie Chart – Displays content types by size - Table – Provides details on all content                                     |
| Stale Content   | This report identifies stale content within Dropbox by owner.           | Stale Data   | This report is comprised of three elements: - Stacked Bar Chart – Displays data ownership - Table – Provides summary of content - Table – Provides details on owners |

### Customizable Analysis Tasks for the Dropbox_Content Job

The time frame used to define stale content is set by default to 365 days. This can be modified
within the **Determines stale data by owner** analysis task. The customizable parameter feature
enables you to easily set this value.

| Customizable Parameter Name | Default Value | Value Indicates                                                                               |
| --------------------------- | ------------- | --------------------------------------------------------------------------------------------- |
| @days_since_modified        | 365           | How many days since the last modified day in order for a file to be considered stale content. |

The parameter can be customized and is listed in a section at the bottom of the SQL Script Editor.
See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for additional information.

# 3.Group Membership > Dropbox_GroupMembership Job

The Dropbox_GroupMembership job provides insight into group membership within the targeted Dropbox
environment, highlighting the largest groups. It is dependent on data collected by the 0.Collection
job group. This job processes analysis tasks and generates a report.

![3.Group Membership > Dropbox_GroupMembership Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/dropbox/groupmembershipjobstree.webp)

The Dropbox_GroupMembership job is located in the 3.Group Membership job group.

## Analysis Tasks for the Dropbox_GroupMembership Job

View the analysis tasks by navigating to the **Jobs** > **Dropbox** > **3.Group Membership** >
**Dropbox_GroupMembership** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Dropbox_GroupMembership Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/groupmembershipanalysis.webp)

- Get group membership details – Creates an interim processing table in the database for use by
  downstream analysis and report generation
- Summarize group membership by team – Creates the SA_Dropbox_GroupMembership_Summary table
  accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display group membership details, the
Dropbox_GroupMembership job produces the following pre-configured report.

| Report           | Description                                                            | Default Tags | Report Elements                                                                                                                                                           |
| ---------------- | ---------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Membership | This report lists membership and owners for all groups within Dropbox. | None         | This report is comprised of three elements: - Bar Chart – Displays largest groups - Table – Provides summary of group membership - Table – Provides details on membership |

# 5.Sensitive Data > Dropbox_SensitiveData Job

The Dropbox_SensitiveData job identifies locations within Dropbox where sensitive data is present.
It analyzes sensitive data collected and imported by the 0.Collection job group, specifically data
discovered by the Dropbox SDD jobs. The generated reports give visibility into the types of
sensitive data found, where it exists, who has access to it, and the sharing policies configured on
it.

![5.Sensitive Data > Dropbox_SensitiveData Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/sensitivedata/sensitivedatajobstree.webp)

The Dropbox_SensitiveData job is located in the 5.Sensitive Data job group.

## Analysis Tasks for the Dropbox_SensitiveData Job

View the analysis tasks by navigating to the **Jobs** > **Dropbox** > **5.Sensitive Data** >
**Dropbox_SensitiveData** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Dropbox_SensitiveData Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/postgresql/collection/sensitivedataanalysis.webp)

- 1. Enterprise Summary – Creates the SA_Dropbox_SensitiveData_EnterpriseSummary table accessible
     under the job’s Results node
- 2. Folder Details – Creates the SA*Dropbox* SensitiveData_FolderDetails table accessible under
     the job’s Results node
- 3. Folder Summary – Creates the SA*Dropbox* SensitiveData_FolderSummary table accessible under
     the job’s Results node
- 4. Permission Details – Creates the SA*Dropbox* SensitiveData_PermissionDetails table accessible
     under the job’s Results node
- 5. Permission Summary – Creates the SA*Dropbox* SensitiveData_PermissionSummary table accessible
     under the job’s Results node

In addition to the tables created by the analysis tasks which display effective access to resources,
the Dropbox_SensitiveData job produces the following pre-configured reports.

| Report                     | Description                                                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Summary         | This report identifies the type and amount of sensitive content found on Dropbox.                                            | None         | This report is comprised of two elements: - Pie Chart – Displays criteria summary by match count - Table – Provides criteria summary by match count                                                                                                |
| Folder Details             | This report identifies the location of sensitive data, and flags whether or not this data is accessible through open access. | None         | This report is comprised of three elements: - Bar Chart – Displays top sensitive folders by file count - Table – Provides top sensitive folders by file count - Table – Provides top sensitive folder details by match count                       |
| Sensitive Data Permissions | This report identifies the sensitive data locations and associated permissions.                                              | None         | This report is comprised of three elements: - Bar Chart – Displays sensitive data permission summary by file count - Table – Provides sensitive data permission summary by file count - Table – Provides sensitive data permissions by match count |

# 2.Sharing > Dropbox_Sharing Job

The Dropbox_Sharing job provides insight into the sharing of resources within the targeted Dropbox
environment. It is dependent on data collected by the 0.Collection job group. This job processes
analysis tasks and generates a report on which resources are being shared and under which policy the
sharing occurs. Best practices often dictate that these resources should be carefully monitored due
to the amount of access to the data. If these resources contain privileged data, the access should
be reevaluated or the sensitive resources relocated.

![2.Sharing > Dropbox_Sharing Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/dropbox/sharingjobstree.webp)

The Dropbox_Sharing job is located in the 2.Sharing job group.

## Analysis Tasks for the Dropbox_Sharing Job

View the analysis tasks by navigating to the **Jobs** > **Dropbox** > **2.Sharing** >
**Dropbox_Sharing** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Dropbox_Sharing Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/forensics/sharinganalysis.webp)

- Get shared folder details – Creates the SA_Dropbox_Sharing_Details table accessible under the
  job’s Results node
- Summarize sharing by team – Creates the SA_Dropbox_Sharing_TeamSummary table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks which display details on shared resources,
the Dropbox_Sharing job produces the following pre-configured report.

| Report                   | Description                                                                              | Default Tags | Report Elements                                                                                                                                                                     |
| ------------------------ | ---------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared Files and Folders | This report lists all shares by team, and provides sharing policy and owner information. | None         | This report is comprised of three elements: - Bar Chart – Displays shared folders by team - Table – Provides details on shared folders by team - Table – Provides details on shares |

# Dropbox Solution

The Dropbox Solution is an auditing, compliance, and governance solution for Dropbox for Business.
Key capabilities include effective access calculation, sensitive data discovery, file content
inspection, inactive access and stale data identification, and entitlement collection for
integration with Identity & Access Management (IAM) processes.

The Dropbox Solution is designed to offer an overview of an organization’s Dropbox environment by
scanning the targeted Dropbox site. Key information includes:

- Effective access to Dropbox resources
- Outline of shared Dropbox resources
- Detailed Dropbox group membership
- Breakdown of Dropbox content by size, type, and owner

Dropbox can scan the contents of over 400 file types to discover which files contain sensitive data
using the Sensitive Data Discovery Add-on.

Supported Platforms

- Dropbox

Requirements, Permissions, and Ports

See the
[Target Dropbox Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for additional information.

Sensitive Data Discovery Considerations

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

**NOTE:** The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.

Location

The Dropbox Solution requires a special Enterprise Auditor license. It can be installed from the
Instant Job Wizard. Once it has been installed into the Jobs tree, navigate to the solution:
**Jobs** > **Dropbox**.

The 0.Collection job group collects the data. The other job groups run analyses on the collected
data and generate reports.

## Job Groups

The Dropbox Solution offers an overview of an organization’s Dropbox environment by scanning the
targeted Dropbox site. It is comprised of jobs which collect, analyze, and report on data. The data
collection is conducted by the DropboxAccess Data Collector. See the
[Standard Reference Tables & Views for the DropboxAccess Data Collector](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md)
topic for database table information.

![Dropbox Solution Overview page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/runninginstances/overviewpage.webp)

The following jobs comprise the Dropbox Solution:

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/dropbox-analysis.md)
  – Scans the targeted Dropbox site and generates the standard reference tables and views
- [1.Access > Dropbox_Access Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/dropbox-analysis.md)
  – Reports on effective access to Dropbox resources in the targeted environment
- [2.Sharing > Dropbox_Sharing Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/dropbox-analysis.md)
  – Reports on the sharing of Dropbox resources in the targeted environment
- [3.Group Membership > Dropbox_GroupMembership Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/dropbox-analysis.md)
  – Reports on Dropbox group membership in the targeted environment
- [4.Content > Dropbox_Content Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/dropbox-analysis.md)
  – Reports on Dropbox content by size, type, and owner in the targeted environment
- [5.Sensitive Data > Dropbox_SensitiveData Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/dropbox-analysis.md)
  – Reports on sensitive data in the targeted Dropbox site

# Recommended Configurations for the Dropbox Solution

The Dropbox Solution requires the host list to be assigned and the Connection Profile configured
before job execution. Once these are assigned to the job group, it can be run directly or scheduled.

Targeted Hosts

The Dropbox solution has been configured to inherit the host list assignment from the collection job
group level.

The host list assignment should be assigned under the **Dropbox** > **0.Collection** >
**Settings** > **Host List Assignment** node. Select the **Local host** option.

Connection Profile

The DropboxAccess Data Collector requires a specific set of permissions to generate an access token
which is used to configure the Connection Profile for Dropbox. The access token is generated in the
Dropbox Access Auditor Data Collector Wizard on the Scan Options page (accessed through the
**1-Dropbox_Permissions Scan** job’s **Queries** node). The access token only needs to be generated
once, prior to running the job group for the first time. Then it is used as the credential in the
Connection Profile. See the
[DropboxAccess: Scan Options](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md)
topic for additional information.

The Dropbox solution has been configured to inherit the Connection Profile from the collection job
group level. The Connection Profile should be assigned under the **Dropbox** > **0.Collection** >
**Settings** > **Connection** node. It is set to **Use the Default Profile**, as configured at the
global settings level. However, since this may not be the Connection Profile with the necessary
permissions for Dropbox, select the **Select one of the following user defined profiles** option and
select the appropriate Connection Profile from the drop-down menu. See the
[Custom Dropbox Connection Profile & Host List](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md)
topic for additional information on configuring the Dropbox credential. The Dropbox bulk import jobs
requires the same connection profile as used in the corresponding Dropbox scan jobs

See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information on creating Connection Profiles.

Schedule Frequency

The Dropbox solution can be scheduled to run as desired.

History Retention

Not supported and should be turned off.

Multi Console Support

Not supported.

Run Order

The 0.Collection jobs must be run first and in order. Run the **1-Dropbox_Permissions Scan** job and
then the **2-Dropbox_Permissions Bulk Import** job. For the sensitive data jobs, run the
**1-Dropbox_SDD Scan** job and then the **2-Dropbox_SDD Bulk Import** job.

**_RECOMMENDED:_** When running the sensitive data jobs, disable the permissions jobs, and vice
versa.

After running the 0.Collection jobs, the other Dropbox solution job groups can be run in any order.
Best practice is to run at the solution level.

Query Configuration

This solution can be run with the default query configurations. The Scoping page of the Dropbox
Access Auditor Data Collector Wizard can be customized to target specific user accounts. See the
[DropboxAccess: Scoping](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md)
topic for additional information.

Analysis Configuration

This solution should be run with the default analysis configuration.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this solution.

Though the analysis tasks should not be deselected the time frame used to define staleness can be
modified:

- Stale content set to default of 365 days

  - Configured within the **4.Content** > **Dropbox_Content** job
  - **Determines stale data by owner** analysis task
  - See the
    [4.Content > Dropbox_Content Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/dropbox-analysis.md)
    topic for additional information

Additional Consideration

The jobs contained in the solution use custom SQL scripts to render views on collected data. SQL
views are used to populate report element tables and graphs. Changing or modifying the group, job,
or table names will result in no data displayed within the Access Information Center.

Workflow

The following is the recommended workflow:

**Step 1 –** Run the **1-Dropbox_Permissions Scan** job (for sensitive data, run the **1-Dropbox_SDD
Scan** job).

**Step 2 –** Run the **2-Dropbox_Permissions Bulk Import** job (for sensitive data, run the
**2-Dropbox_SDD Bulk Import** job).

**Step 3 –** Run the desired corresponding analysis and reporting sub-job groups.

_Remember,_ prior to running the Dropbox solution for the first time, it is necessary to generate an
access token to be used in the Connection Profile. This only needs to be done once. See the
[Configure the Dropbox Access Query](/docs/accessanalyzer/11.6/solutions/cloud-platforms/dropbox-analysis.md#configure-the-dropbox-access-query)
topic for additional information.

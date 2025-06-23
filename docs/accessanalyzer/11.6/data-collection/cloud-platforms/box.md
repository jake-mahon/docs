# Box: Activity Operation Scope

The Activity Operation Scope page (ActivityOperationScope) is where Box Enterprise events can be
selected or unselected for scans. It is a wizard page for the Scan Box Activity category.

![Box DC Wizard Activity Operation Scope page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/box/activityoperation.webp)

Event filters can be selected by group or the group may be expanded and the filters selected
individually. All selected filters are gathered from the Box environment.

Event filters include:

- Collaboration
- File Activity
- Group
- Login
- Metadata
- Misc
- Security
- Sharing
- Task
- Users
- Workflow

# Box: Activity Timeframe Scope

The Activity Timespan Scope page (ActivityTimeframeScope) is where Box activity data collection is
configured. It is a wizard page for the Scan Box Activity category.

![Box DC Wizard Activity Timespan Scope page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/box/activitytimeframe.webp)

Select one of the following options to configure the timeframe for Box data collection:

- Relative Timespan – Collects activity from a set number of days relative to the present

  - Collect activity from the last [number] Days – Enter the number of days for which activity
    data collection is required. The default is 180. The maximum timespan is 365 days.
  - Data retention settings – Select a preferred retention setting

    - Within timespan – Deletes all data outside of the selected timespan
    - Retain all data – Retains all data collected inside or outside of the selected timespan

- Absolute Timespan – Enter the interval of days for which activity data collection is required. The
  default End Date is the current day.

  **NOTE:** Choosing an absolute timespan will not affect activity data during relative timespan
  scans.

# Box: Additional Scoping

The Additional Scoping page is where the scan can be limited by depth of the scan. It is a wizard
page for the Scan Box Permissions category.

![Box DC Wizard Additional Scoping page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/box/additionalscoping.webp)

Configure the scan depth level:

- Limit scanned depth to: [number] level – Select the checkbox and set the scan depth level to the
  desired depth. If this checkbox is not selected, then the entire Box environment will be scanned,
  according to the
  [Box: Exclusions Page](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/box.md)
  settings. If the scoping depth is set to **0** then only root will be scanned. Each increment will
  add another level of depth from root level.

# Box: Authenticate

The Authenticate page is where connection to the Box environment is configured. It is a wizard page
for all categories.

![Box DC Wizard Authentication page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/box/authentication.webp)

Click **Authorize** to launch the BoxLogin window and generate an authorization code. This code will
allow Enterprise Auditor to report on the Box Enterprise.

![BoxLogin window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/box/boxlogin.webp)

Enter an email address and password for an account with Enterprise Admin credentials in the targeted
Box environment. Then click **Authorize** to grant access to Box and generate the code. The **Use
Single Sign On (SSO)** option is an alternative log in method.

# Box: Category

Use the Category page to select the type of scan or import for the Box Enterprise targeted.

![Box DC Wizard Category page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/category.webp)

The Box Data Collector contains the following query categories:

- Box Activity Audit – Scan Box activity

  - Scan Box Activity – Performs an audit of Box activity
  - Bulk Import Box Activity – Performs a bulk import of Box activity

- Box Permission Audit – Scan Box permissions

  - Scan Box Permissions – Performs an audit for Box permissions
  - Import Box Permissions – Performs an import of Box permissions

# Box: Exclusions Page

The Exclude or Include folders page (ExclusionsPage) is where the scan can be limited to include or
to exclude folders within the Box Enterprise. It is a wizard page for of Scan Box Permissions
category.

![Box DC Wizard Exclude or Include folders page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/box/exclusions.webp)

The options on the Exclusions Page are:

- Add as inclusion – Type the path of a folder in the text box to include in the scan. The folder
  path must not include a slash at the end.

  - Example format: `/All Files/Folder/SubFolder`
  - Incorrect format: `/All Files/Folder/SubFolder/`

- Add as exclusion – Type the path of a folder in the text box to exclude from the scan

The **Remove** option will delete a selected folder from the list. The **Clear List** option will
remove all folders from the list.

# Box Data Collector

The Box Data Collector audits access, group membership, and content within a Box enterprise.

**NOTE:** If the Box Data Collector is used in a new job, outside of the Box Solution, it is
necessary to deselect the **Skip Hosts that do not respond to PING** option on the job’s
**Properties** > **Performance** tab.

The Box Data Collector has been preconfigured within the Box Solution. Both this data collector and
the solution are available with a special Enterprise Auditor license. See the
[Box Solution](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
topic for additional information.

Protocols

- HTTP
- HTTPS

Ports

- TCP 80
- TCP 443

Permissions

- Box Enterprise Administrator

## Box Query Configuration

The Box Data Collector is configured through the Box Data Collector Wizard. The wizard contains the
following pages, which change based up on the query category selected:

- Welcome
- [Box: Category](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/box.md)
- [Box: Exclusions Page](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/box.md)
- [Box: Scope by User Page](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/box.md)
- [Box: Additional Scoping](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/box.md)
- [Box: Activity Timeframe Scope](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/box.md)
- [Box: Activity Operation Scope](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/box.md)
- [Box: Authenticate](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/box.md)
- [Box: Results](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/box.md)
- [Box: Summary](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/box.md)

The Welcome page gives an overview of the data collector. To proceed through the pages, click
**Next** or use the Steps navigation pane to open another page in the wizard. Review the
introductory and caution information about the Box Data Collector before proceeding.

![Box DC Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

The Welcome page can be hidden by checking the **Do not display this page the next time** box when
the wizard is open and configuration settings are saved.

# Box: Results

The Results page is where properties that will be gathered are selected. It is a wizard page for all
categories.

![Box DC Wizard Results page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/results.webp)

Properties can be selected individually or the **Select All** or **Clear All** buttons can be used.
All selected properties will be gathered. Available properties vary based on the category selected.

# Box: Scope by User Page

The User Scope Settings page (ScopeByUserPage) is where the scope of the scan can be limited to
specified users and the resulting scan will only scan for the specified users. It is a wizard page
for the Scan Box Permissions category.

![Box DC Wizard User Scope Settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/box/scopebyuser.webp)

Select whether to scan **All Users** or **Limited Users**. If scanning for **Limited Users**, click
**Browse** and navigate to the path of the CSV file that contains the email addresses of users to be
included in the scan. The CSV file should have one email address per row.

**NOTE:** The query will collect information related to User names and Group membership for all
users in a target environment. However, if the query is scoped to specific users, no additional
information is collected for users outside out of the scope. User names and group membership for the
target environment is necessary to generate the Box Solution reports.

# Standard Reference Tables & Views For the Box Data Collector

The Box Data Collector gathers essential user and group inventory information into standard
reference tables. These tables and their associated views are outlined below:

| Table                      | Details                                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SA_Box_Collaborations      | Contains all of the trustees who have access on folders and defines the access type                                     |
| SA_Box_Enterprises         | Contains information on the enterprises within the Box environment                                                      |
| SA_Box_EventNames          | Contains information on the names of events within the Box environment                                                  |
| SA_Box_Events              | Contains information on the type of events within the Box environment                                                   |
| SA_Box_ExternalUsers       | Contains one row per user and displays information on external users over the past 30 days                              |
| SA_Box_FileDetails         | Contains one row per file and displays file-specific details                                                            |
| SA_Box_FolderDetails       | Contains one row per folder and displays folder-specific details                                                        |
| SA_Box_GroupMembers        | Contains unique row for each trustee per group and defines the access type of each member                               |
| SA_Box_Groups              | Contains all of the enterprise-created groups and has a unique row for each group                                       |
| SA_Box_Hosts               | Contains the name and ID of all Box enterprises that have been scanned for permissions                                  |
| SA_Box_Resources           | Contains information about all audited resources, which can be files or folders. It contains a unique row per resource. |
| SA_Box_TaskStatus          | Displays the tasks which have been completed and the corresponding USN value                                            |
| SA_Box_Trustees            | Contains basic information about all of the users and groups                                                            |
| SA_Box_UnusualUserActivity | Contains information about suspicious activity on user accounts                                                         |
| SA_Box_Users               | Contains one row per user and displays information on users of any teams present                                        |

Views are the recommended way for Enterprise Auditor users to obtain the information gathered by the
Box Data Collector. They contain additional information for building queries easily. The following
is an explanation of the corresponding views created for some of the tables generated by the Box
Data Collector:

| Views                     | Details                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| SA_Box_CollaborationsView | Displays the collaborations applied to shared folders and the access type for the trustee                    |
| SA_Box_ExternalUsersView  | Displays external user activity which has occurred over the past 30 days                                     |
| SA_Box_GroupMembersView   | Displays all of the users, which groups they are members of, and the access type on the group                |
| SA_Box_ResourceEventsView | Displays all of the events, which users created it, the source of that event, and the name and type of event |

# Box: Summary

The Summary page is where configuration settings are summarized. It is a wizard page for all of the
categories.

![Box DC Wizard Summary page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

Click **Finish** to save configuration changes. If no changes were made, it is a best practice to
click **Cancel** to close the Box Data Collector Wizard ensuring that no accidental clicks are
saved.

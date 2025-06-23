---
title: dropbox
sidebar_label: dropbox
description: Documentation for dropbox functionality in Access Analyzer including configuration and usage information.
---

# DropboxAccess: Category

Use the Category Selection Page to identify the type of information to retrieve. The DropboxAccess
Data Collector contains the following query categories, sub-divided by auditing focus:

![Dropbox Access Auditor Data Collector Wizard Category page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/category.webp)

- The Dropbox Access Audits scans for Dropbox access information:

  - Scan Dropbox Access – Performs a Dropbox access audit to collection permissions information
  - Bulk Import Access Scan Results – Imports Dropbox access scan results into the Enterprise
    Auditor database and creates SQL views

- The Sensitive Content scans for sensitive data information:

  - Scan for Sensitive Content – Scans for sensitive data content on Dropbox
  - Bulk Import Sensitive Content Scan Results – Imports sensitive content scan results into the
    Enterprise Auditor database and creates SQL views

The selection made on the Category Selection Page determines the wizard pages available.

# DropboxAccess: Summary (Completion)

The Completion page, is where configuration settings are summarized. This page is a wizard page for
all categories.

![Dropbox Access Auditor Data Collector Wizard Completion page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/dropboxaccess/completion.webp)

Click **Finish** to save configuration changes. If no changes were made, it is a best practice to
click **Cancel** to close the Dropbox Access Auditor Data Collector Wizard ensuring that no
accidental clicks are saved.

_Remember,_ if an Access Token was generated, use it as the credential within the Connection
Profile. Then assign it to the job group or job which will be scanning the targeted Dropbox
environment. See the
[Custom Dropbox Connection Profile & Host List](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md) topic
for additional information.

# Custom Dropbox Connection Profile & Host List

The DropboxAccess Data Collector requires a custom Connection Profile to be created and assigned to
the job or job group conducting the data collection.

## Connection Profile

Creating the Connection Profile requires an access token. The access token is generated on the Scan
Options page of the Dropbox Access Auditor Data Collector Wizard.

Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Dropbox
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the
  [Application](/docs/accessanalyzer/11.6/administration/settings/application.md)
  topic for additional information.)
- Access Token – Copy and paste the Access Token after it has been generated from the Scan Options
  page of the Dropbox Access Auditor Data Collector Wizard. See the
  [DropboxAccess: Scan Options](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md) topic
  for additional information.

See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information.

## Host List

The host list should be set to:

- Local host

# DropboxAccess: DLP Audit Settings

Use the DLP Audit Settings page to configure sensitive data discovery settings. This page is a
wizard page for the Scan for Sensitive Content category.

![Dropbox Access Auditor Data Collector Wizard DLP Audit Settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/dlpauditsettings.webp)

Configure the DLP audit settings:

- Scan Performance:

  - Don’t process files larger than – Limits the files to be scanned for sensitive content to
    files smaller than the specified size

- File types to scan:

  - Scan typical documents (recommended, fastest) – Scans most common file types
  - Scan all document types (slower) – Scans all file types except those excluded

- Store Match Hits –  Choose whether to store copies of potentially sensitive data discovered during
  the scan:

  - Store discovered sensitive data – Stores a copy of any potentially sensitive data that matches
    the selected criteria in the Enterprise Auditor database. This copy can be used to check for
    false positives, data that matches the selected criteria but is not actually sensitive.
  - Limit stored matches per criteria to [number] – Identifies the number of potentially sensitive
    data matches that are copied to the database. The default is 5 matches. This option is
    available only if the **Store discovered sensitive data** option is selected.

- Perform differential scan of – Enables users to choose whether to employ incremental scanning:

  - Files modified since last scan – Scans only files modified since the last scan
  - Files modified since [date] – Only scans files modified after the specified date
  - Files modified since the last [number] days – Scans files modified within the specified number
    of days

_Remember,_ the sensitive data discovery options require the Sensitive Data Discovery Add-On to have
been installed on the Enterprise Auditor Console. See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/install.md)
topic for additional information.

# DropboxAccess Data Collector

The DropboxAccess Data Collector audits access, group membership, and content within a Dropbox
environment. Dropbox can scan the contents of over 400 file types to discover which files contain
sensitive data using the Sensitive Data Discovery Add-on. The DropboxAccess Data Collector has been
preconfigured within the Dropbox Solution. Both this data collector and the solution are available
with a special Enterprise Auditor license. See the
[Dropbox Solution](/docs/accessanalyzer/11.6/solutions/cloud-platforms/dropbox-analysis.md)
topic for additional information.

Protocols

- HTTP
- HTTPS

Ports

- TCP 80
- TCP443

Permissions

- Dropbox Team Administrator

Sensitive Data Discovery Considerations

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

## Query Configuration

The DropboxAccess Data Collector is configured through the Dropbox Access Auditor Data Collector
Wizard. The wizard contains the following pages, which change based upon the query category
selected:

- Welcome
- [DropboxAccess: Category](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md)
- [DropboxAccess: Scan Options](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md)
- [DropboxAccess: Scoping](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md)
- [DropboxAccess: DLP Audit Settings](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md)
- [DropboxAccess: Select DLP Criteria](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md)
- [DropboxAccess: Summary (Completion)](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md)

![Dropbox Access Auditor Data Collector Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.

# DropboxAccess: Scan Options

Use the Scan Options page to authorize Enterprise Auditor to generate an Access Token allowing the
DropboxAccess Data Collector to access and scan an organization’s Dropbox environment. The Access
Token is used as the credential in the Connection Profile.

**NOTE:** The Access Token needs to be generated only once, prior to the first execution of any job
in which the DropboxAccess Data Collector is used in a query.

The Scan Options page is a wizard page for the following categories:

- Scan Dropbox Access
- Scan for Sensitive Content

Follow the steps to create the Access Token:

![Dropbox Access Auditor Data Collector Wizard Scan Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/dropboxaccess/scanoptions.webp)

**Step 1 –** Click the **Authorize** button to access the Dropbox Authentication page.

![Dropbox Log in page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/dropboxaccess/scanoptionsdropboxlogin.webp)

**Step 2 –** On the Dropbox Authentication page, log in as the Team Administrator.

![Copy Access Token](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/dropboxaccess/scanoptionsaccesstoken.webp)

**Step 3 –** Once the Access Token has been generated, click **Copy to Clipboard**. Click **Next**
to finish choosing the configuration options or click **Cancel** to close the Dropbox Access Auditor
Data Collector Wizard.

Create a Connection Profile using this access token as the credential. See the
[Custom Dropbox Connection Profile & Host List](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/dropbox.md)
topic for additional information on configuring the Dropbox credential.

_Remember,_ assign this Connection Profile to the job group or job where the host assignment for the
Dropbox environment to be targeted has been assigned.

# DropboxAccess: Scoping

The Scoping page configures the data collector to scan either the entire Dropbox environment or
limit the scan to specific users. The page is a wizard page for the following categories:

- Scan Dropbox Access
- Scan for Sensitive Content

![Dropbox Access Auditor Data Collector Wizard Scoping Settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/dropboxaccess/scoping.webp)

Use the scoping options to select the depth of the scan:

- User Scoping:

  - All Users – Scans all users in the Dropbox environment
  - Limited Users – Click **Browse** and navigate to the path of the CSV file that contains the
    email addresses of users to include in the scan. The CSV file should have one email address
    per row.

- File Permissions:

  - Collect File Level Permissions – Select the checkbox to collect permissions at the file level

# DropboxAccess: Select DLP Criteria

Use the Select DLP criteria for this scan page to configure criteria to use for discovering
sensitive data. This page requires the Sensitive Data Discovery Add-On to be been installed on the
Enterprise Auditor Console to define the criteria and enable the Criteria Editor. See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/install.md)
topic for additional information.

The Select DLP Criteria for this scan page is a wizard page for the Scan for Sensitive Content
category.

![Dropbox Access Auditor Data Collector Wizard Select DLP criteria page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/selectdlpcriteria.webp)

Select the checkbox next to each criteria to be included in the search for sensitive data. You can
also use the **Select All** and **Clear All** buttons.

The table contains the following types of criteria:

- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

**NOTE:** Until the Sensitive Data Discovery Add-On is installed, only the headers for the System
Criteria and User Criteria nodes are visible in the table.

Use the **Edit** button to access the Criteria Editor where user-defined criteria can be created or
customized. See the
[Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md)
topic for additional information.

# Standard Reference Tables & Views for the DropboxAccess Data Collector

The DropboxAccess Data Collector gathers essential user and group inventory information into
standard reference tables. Unlike most of the other Enterprise Auditor data collectors, the
DropboxAccess Data Collector writes data to these tables regardless of the job executing the query.

## Dropbox Access Auditing Tables & Views

These tables and their associated views are outlined below:

| Table                       | Details                                                                                                                       |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| SA_Dropbox_DocumentMetadata | Contains one row per document collected and displays file details such as size and last time modified                         |
| SA_Dropbox_GroupMembers     | Contains a unique row for each trustee per group and defines the access type of each member                                   |
| SA_Dropbox_Groups           | Contains all of the team-created groups and should have a unique row for each group                                           |
| SA_Dropbox_Resources        | Contains information about all audited resources, which can be files or folders. It should contain a unique row per resource. |
| SA_Dropbox_Rights           | Contains all of the trustees who have access on shared folders and defines the access type                                    |
| SA_Dropbox_SharedFolders    | Contains all of the shared folders with corresponding OwnerID and access type along with the shared link policy               |
| SA_Dropbox_TeamMembers      | Contains one row per team member and displays information on members of any teams present                                     |
| SA_Dropbox_Teams            | Contains information on the teams within the Dropbox environment                                                              |
| SA_Dropbox_Trustees         | Contains information about any trustee, group, or team that has been assigned permissions                                     |

Views are the recommended way for you to obtain the information gathered by the DropboxAccess Data
Collector. They contain additional information for building queries easily. The following is an
explanation of the corresponding views created for some of the tables generated by the DropboxAccess
Data Collector:

| Views                           | Details                                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------------------ |
| SA_Dropbox_DocumentMetadataView | Displays the location and file details of all audited files                                      |
| SA_Dropbox_GroupMembersView     | Displays all of the team members, which groups they are members of, and access type on the group |
| SA_Dropbox_RightsView           | Displays the rights applied to shared folders and the access type for the trustee                |
| SA_Dropbox_SharedFoldersView    | Displays shared folders, their owners, and whether the owner is a team member                    |

## Dropbox Sensitive Data Discovery Auditing (SEEK) Tables & Views

These tables and their associated views are outlined below:

| Table                | Details                                                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| SA_Dropbox_Criteria  | Contains the sensitive data criteria which are selected for collection by the scan engine (data collector configuration) |
| SA_Dropbox_Matches   | Contains rolled up aggregate counts of the sensitive data criteria matches found during the scan                         |
| SA_Dropbox_MatchHits | Contains the actual sensitive data discovered within files which matched selected criteria                               |

Views are the recommended way for you to obtain the information gathered by the DropboxAccess Data
Collector. They contain additional information for building queries easily. The following is an
explanation of the corresponding views created for some of the tables generated by the DropboxAccess
Data Collector:

| Views                    | Details                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| SA_Dropbox_MatchesView   | Surfaces all relevant data about the files, its location, and the type of criteria found   |
| SA_Dropbox_MatchHitsView | Surfaces all actual sensitive data discovered within files which matched selected criteria |

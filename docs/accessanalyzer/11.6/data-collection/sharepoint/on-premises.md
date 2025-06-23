# SPAA: Activity Date Scope

The Activity Date Scope page is where the range of dates for which the SharePoint activity scan will
collect data is configured. It is a wizard page for the category of Scan SharePoint Activity.

![Activity Date Scope page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/activitydatescope.webp)

Use the radio buttons to select the **Scan Filters**.

- Relative Timespan
  - Collect Activity from the last 180 days – The number of days to collect activity can be
    configured with the up and down arrows
  - Retain data – The timespan for data retention. Select from the drop-down list:
    - within timespan
    - forever
- Absolute Timespan

  - Start date – Click the down arrow to access the calendar and select the start date for data
    collection
  - End date – Click the down arrow to access the calendar and select the end date for data
    collection

  **NOTE:** Selecting Absolute Timespan will not affect activity data collected during Relative
  Timespan scans.

# SPAA: Activity Log Locations

The Activity Log Locations page is where to manually configure log locations to avoid requiring
remote registry access to locate the activity event log files. It is a wizard page for the category
of Scan SharePoint Activity.

![Activity Log Locations page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/activityloglocations.webp)

The options in the Activity Log Locations page are:

- Add – Opens the Customize Activity Log UNC Paths location window to add a new host
- Add Default – Opens the Customize Activity Log UNC Paths location window for the default host
- Edit – Opens the Customize Activity Log UNC Paths window for the selected host. If edits are made,
  click **OK** to save the changes.
- Remove – Removes the selected host

![Customize Activity Log UNC Paths Window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/customizeactivityloguncpaths.webp)

The options in the Customize Activity Log UNC Paths Window are:

- Host name – Host name of the targeted SharePoint On-Premises server or SharePoint Online tenant
- SBTFileMon.ini UNC path – UNC path to the location of the **SBTFileMon.ini** file (as configured
  in **Activity Monitor** > **Monitored Hosts**)
- Activity log UNC path – UNC path to the location of the **SBTFileMon_Logs** folder containing the
  Activity Logs (as configured in **Activity Monitor** > **Monitored Hosts**)

  **NOTE:** For On-Premises environments you do not need to specify an Activity Log UNC path as
  the Data Collector will default to finding the log locations via the registry.

- Activity archive UNC path – UNC path to the archive location of Activity Logs (as configured in
  **Activity Monitor** > **Agents**). If archiving is not enabled in Activity Monitor this can be
  left blank.

**NOTE:** In any UNC paths, `%HOST%` will be replaced with the host name.

See the Getting Started with SharePoint & SharePoint Online Activity Monitor topic in the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for additional information.

# SPAA: Additional Scoping

The Additional Scoping page is where the scan can be limited by depth of the scan. It is a wizard
page for the categories of:

- Scan SharePoint Access
- Scan For Sensitive Content

**CAUTION:** Users should not change scans in a way that would result in less data being returned on
a subsequent scan (i.e. scanning fewer web applications, scanning fewer site collections, or a
shallower depth scan). Those resources not included in a subsequent scan are marked as deleted in
the Tier 2 database and subsequently removed from the Tier 1 database.

![Additional Scoping page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/box/additionalscoping.webp)

If checked, set the **Limit scanned depth to: [number] level(s)** option to the desired depth. If
this option is not checked then the entire farm is scanned. If the scoping depth is set to **0**
then only root site collections are scanned. Each increment to the depth adds an additional level of
depth from that point.

Check the **Perform differential scan** box to enable the job to run a differential scan.
Differential scanning is enabled by default. When this option is enabled, SPAA scan will only parse
files for content/SDD if it has been modified since the last scan.

**NOTE:** This option only applies to Tag collection and Sensitive data collection. Files will be
still be scanned for permissions regardless of whether this option is checked or not.

# SPAA: Agent Settings

The Agent Settings page is where the SharePoint Agent Service is configured. It is a wizard page for
the category of Scan SharePoint Access.

![Agent Settings page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/windowsagent.webp)

The **Enable Agent Service Scans** checkbox enables collecting SharePoint data through the agent
services instead of directly from SharePoint. This option requires a **Network Port** to be entered.
Agent Service Identity radio buttons are:

- Use Job Credentials when job has same credentials as agent services
- Use Custom Identity for other agent service credential scenarios
  - Specify identity in the format `spn:name` or `upn:name`
  - The token `%HOST%` may be substituted for the host name

This option requires the SharePoint Agent to be installed on the application server. See the
[SharePoint Agent Installation](/docs/accessanalyzer/11.6/installation/sharepoint-agent/install.md)
topic for additional information.

# SPAA: Bulk Import Settings

The Bulk Import Settings page is where the bulk import process settings are configured. It is a
wizard page for the categories of:

- Bulk Import Access Scan Results
- Bulk Import Sensitive Content Scan Results

![Bulk Import Settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/bulkimportsettings.webp)

Subsequent hosts in job lists will get host IDs incremented by 1. The Host Identifier may require an
offset to avoid overlapping IDs in collected data. If the **Set Host ID** checkbox is left
unchecked, then Enterprise Auditor assigns values starting from 1 to every host. This feature is
intended only for SQL Server Replication.

# SPAA: Category

The SPAA Data Collector Category page contains the following query categories, sub-divided by
auditing focus:

![Category page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/category.webp)

The options on the Category page are:

- The **SharePoint Access Audits** category scans hosts for SharePoint access information and has
  two selections to choose from:
  - Scan SharePoint Access – Performs SharePoint access audits
  - Bulk Import Access Scan Results – Imports SharePoint access scan results into the Enterprise
    Auditor database
- The **Sensitive Content** category scans hosts for sensitive data information and has two
  selections to choose from:
  - Scan for Sensitive Content – Scans for sensitive content on SharePoint
  - Bulk Import Sensitive Content Scan Results – Imports sensitive content scan results into the
    Enterprise Auditor database
- The **SharePoint Activity Audits** category scans hosts for SharePoint activity information and
  has two selections to choose from:
  - Scan SharePoint Activity – Scans SharePoint activity log files
  - Bulk Import SharePoint Activity Scan Results – Imports SharePoint activity into the Enterprise
    Auditor database

_Remember,_ the sensitive data discovery options require the Sensitive Data Discovery Add-On to be
installed on the Enterprise Auditor Console. If the SharePoint Agent is used, then it must also be
installed on the application server that hosts the Central Administration component.

# SharePoint Custom Connection Profile & Host List

The SPAA Data Collector requires a custom Connection Profile and a custom host list to be created
and assigned to the job conducting the data collection. The host inventory option during host list
creation makes it necessary to configure the Connection Profile first. While SharePoint on-premises
uses the Active Directory account type for the credential within a Connection Profile, it is
necessary for online credentials to be listed first in the credentials list within a Connection
Profile housing credentials to both environments.

## SharePoint Farm

This section describes the process to configure the Connection Profile and custom host list for
scanning SharePoint On-Premises.

### SharePoint Farm Credential for a Connection Profile

The provisioned credential used should be an Active Directory account.

Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Active Directory Account
- Domain – Drop-down menu with available trusted domains displays. Either type the short domain name
  in the textbox or select a domain from the menu.
- User name – Type the user name
- Password Storage – Choose the for credential password storage:
  - Application – Uses Enterprise Auditor’s configured Profile Security setting as selected at the
    **Settings** > **Application** node
  - CyberArk – Uses the CyberArk Enterprise Password Vault
- Password – Type the password
- Confirm – Re-type the password

Once the Connection Profile is created, it is time to create the custom host list. See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information.

### SharePoint Farm Host in a Custom Host List

The custom host list should include:

- One application server per farm
- Host name without a domain suffix, this means the host name should not contain a period character

See the
[Add Hosts](/docs/accessanalyzer/11.6/administration/host-management/management.md)
section for instruction on creating a custom static host list.

## SharePoint Online

This section describes the process to configure the Connection Profile and custom host list for
scanning SharePoint Online using Modern Authentication.

### SharePoint Online Credential for a Connection Profile using Modern Authentication

The provisioned credential should be an Microsoft Entra ID Application. See the
[SharePoint Online Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/collaboration/sharepoint-online.md)
topic for instructions on registering and provisioning the Microsoft Entra ID Application manually
or via the SP_RegisterAzureAppAuth Instant Job.

Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Azure Active Directory
- Client ID – Application (client) ID of the Enterprise Auditor application registered with
  Microsoft Entra ID
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the
  [Application](/docs/accessanalyzer/11.6/administration/settings/application.md)
  topic for additional information.)
- Key – The comma delimited string containing the path to the certificate PFX file, certificate
  password, and the Microsoft Entra ID environment identifier (
  `CertPath,CertPassword,AzureEnvironment`)

  The `AzureEnvironment` is typically 0 for the default Azure Production Environment. Other
  possible values are:

  - 1 – PPE
  - 2 – China
  - 3 – Germany
  - 4 – US Government
  - 5 – US Government-High
  - 6 – US Government-DoD

  An example string matching the configuration from above is:

  C:\Program Files
  (x86)\STEALTHbits\StealthAUDIT\PrivateAssemblies\spaa_cert_myorg.pfx,PasswordGoesHere,0

  **NOTE:** `PasswordGoesHere` should be replaced with the password used when generating the
  self-signed X.509 certificate if the Microsoft Entra ID Application was Registered and
  Provisioned manually or the $appPassword parameter used in the SP_RegisterAzureAppAuth Instant
  Job if that method was used.

Once the Connection Profile is created, it is time to create the custom host list. See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information.

### SharePoint Online Host in a Custom Host List

The custom host list should include:

- Web or cloud hosts should be specified using the full web DNS part of the site URL, for example an
  Office 365 site with the URL http://TestSite.sharepoint.com should be added as a host with name
  TestSite.sharepoint.com
- Do not use the admin site, for example TestSite-admin.sharepoint.com
- Do not use IP Addresses
- Host name must be in DNS format

See the
[Add Hosts](/docs/accessanalyzer/11.6/administration/host-management/management.md)
topic for instructions on creating a custom static host list.

# SPAA: DLP Audit Settings

The DLP Audit Settings page is where sensitive data discovery settings are configured. It is a
wizard page for the category of Scan For Sensitive Content.

**CAUTION:** Users should not change scans in a way that would result in less data being returned on
a subsequent scan (i.e. scanning fewer web applications, scanning fewer site collections, or a
shallower depth scan). Those resources not included in a subsequent scan are marked as deleted in
the Tier 2 database and subsequently removed from the Tier 1 database.

![DLP Audit Settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/dlpauditsettings.webp)

Configure the **Scan Performance** options:

- Don’t process files larger than: Size Limit [number] MB – Limits the files to be scanned for
  sensitive content to only files smaller than the specified size. The checkbox is selected by
  default. The default size is 2 MB.
- Number of SDD scan processes [number] – Increases the number of SDD scanner processes that spawn
  as part of a scan, increasing parallel scanning. The value should not exceed 2x the number of CPU
  threads available.

Use the radio buttons to select the **File types to scan**:

- Scan typical documents (recommended, fastest) – Scans most common file types
- Scan all document types (slower) – Scans all file types except those excluded
- Scan image files for OCR content – Use optical character recognition to scan image files for
  sensitive data content

  **NOTE:** The OCR option is intended to work for clear scanned physical documents or documents
  directly converted to images, with standard fonts. It will not work for scanning photos of
  documents and may not be able to recognize text on images of credit cards, driver's licenses, or
  other identity cards.

Use the checkboxes to select to **Store Match Hits**:

- Store discovered sensitive data – Stores match hits for sensitive data in the SPAA Tier 2
  database. If this option is not selected, then the match hits for sensitive data are still
  reported but the data columns are masked in the database.
- Limit stored matches per criteria to [number] – Enabled when the Store discovered sensitive data
  checkbox is selected. Limits the number of stored matches per criteria to the specified number.

_Remember,_ the sensitive data discovery options require the Sensitive Data Discovery Add-On to be
installed on the Enterprise Auditor Console. If the SharePoint Agent is used, then it must also be
installed on the application server that hosts the Central Administration component.

# SPAA Drop Tables & Views Workflow

If it becomes necessary to clear the SPAA Data Collector tables and views to resolve an issue, the
SP_DropTables Job is preconfigured to run analysis tasks that drop functions and views for the
SharePoint Solution as well as the standard tables and views generated by the **SPAA** Data
Collector. It is available through the Instant Job Library under the SharePoint library. Since this
job does not require a host to target, select **Local host** on the Hosts page of the Enterprise
Auditor Instant Job Wizard. See the
[Instant Job Wizard](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/instant-jobs.md)
topic for additional information.

## Analysis Tasks for the SP_DropTables Job

Navigate to the **Jobs** > **SP_DropTables** > **Configure** node and select **Analysis** to view
the analysis tasks.

**CAUTION:** Applying these analysis tasks will result in the deletion of collected data.

![SP_DropTables Job Analysis tasks](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/droptablesanalysis.webp)

The default analysis tasks are:

- 1. Drop SPAA functions – Removes all functions and views from previous runs of the SharePoint
     Solution
- 2. Drop SPAC imports – Drops the SharePoint Activity Auditing tables imported from the previous
     runs
- 3. Drop SPDLP Tables – Drops the SharePoint Sensitive Data Discovery Auditing (SEEK) tables
     imported from the previous runs
- 4. Drop SPAA Tables – Drops the SharePoint Access Auditing tables imported from the previous
     runs

Do not try to run these tasks separately, as they are designed to work together. Follow these steps
to run the analysis tasks:

**Step 1 –** In the Analysis Selection Pane, click **Select All**. All tasks will be checked.

**Step 2 –** Right-click the **SP_DropTables** Job and select **Run Job**. The analysis execution
status will be visible from the **Running Jobs** node.

**Step 3 –** When the job has completed, return to the Analysis Selection Pane and click **Select
All** to deselect these analysis tasks.

**_RECOMMENDED:_** Do not leave these analysis tasks checked in order to avoid accidental data loss.

All of these tables have been dropped from the SQL Server database and the data is no longer
available.

# SharePointAccess Data Collector

The SharePointAccess (SPAA) Data Collector audits access, group membership, and content within a
SharePoint on-premises and SharePoint Online environment. The SPAA Data Collector has been
preconfigured within the SharePoint Solution. Both this data collector and the solution are
available with a special Enterprise Auditor license. See the
[SharePoint Solution](/docs/accessanalyzer/11.6/solutions/sharepoint/permissions-analysis.md)
topic for additional information. The SPAA Data Collector has the following requirements:

Protocols

- MS SQL
- Remote Registry
- SP CSOM (Web Services via HTTP & HTTPS)
- SP Server API
- WCF AUTH via TCP (configurable)

Ports

- Ports vary based on the Scan Mode selected and target environment. See the
  [SharePoint Scan Options](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
  topic for additional information.

Permissions

- Permissions vary based on the Scan Mode selected and target environment. See the
  [SharePoint Support](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
  topic for additional information.

Sensitive Data Discovery Considerations

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

_Remember,_ if employing the Enterprise Auditor SharePoint Agent, it is also necessary for the
Sensitive Data Discovery Add-on to be installed on the server where the agent is installed.

## SPAA Query Configuration

The SharePointAccess Data Collector is configured through the SharePoint Access Auditor Data
Collector Wizard. The wizard contains the following pages, which change based up on the query
Category selected:

- Welcome
- [SPAA: Category](/docs/accessanalyzer/11.6/data-collection/sharepoint/on-premises.md)
- [SPAA: SharePoint Data Collection Settings](/docs/accessanalyzer/11.6/data-collection/sharepoint/on-premises.md)
- [SPAA: Scan Scoping Options](/docs/accessanalyzer/11.6/data-collection/sharepoint/on-premises.md)
- [SPAA: Additional Scoping](/docs/accessanalyzer/11.6/data-collection/sharepoint/on-premises.md)
- [SPAA: Agent Settings](/docs/accessanalyzer/11.6/data-collection/sharepoint/on-premises.md)
- [SPAA: Bulk Import Settings](/docs/accessanalyzer/11.6/data-collection/sharepoint/on-premises.md)
- [SPAA: DLP Audit Settings](/docs/accessanalyzer/11.6/data-collection/sharepoint/on-premises.md)
- [SPAA: Select DLP Criteria](/docs/accessanalyzer/11.6/data-collection/sharepoint/on-premises.md)
- [SPAA: Activity Date Scope](/docs/accessanalyzer/11.6/data-collection/sharepoint/on-premises.md)
- [SPAA: Activity Log Locations](/docs/accessanalyzer/11.6/data-collection/sharepoint/on-premises.md)
- [SPAA: Test Access](/docs/accessanalyzer/11.6/data-collection/sharepoint/on-premises.md)
- [SPAA: Results](/docs/accessanalyzer/11.6/data-collection/sharepoint/on-premises.md)
- [SPAA: Summary Page](/docs/accessanalyzer/11.6/data-collection/sharepoint/on-premises.md)

![SPAA Data Collector Wizard Welcome Page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/welcomepage.webp)

The Welcome page can be hidden by checking the **Do not display this page the next time** box when
the wizard is open and configuration settings are saved.

# SPAA: Results

The Results page is where properties that will be gathered are selected. It is a wizard page for all
of the categories.

![Results page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/results.webp)

Properties can be checked individually, or the **Select All**and **Clear All** buttons can be used.
All checked properties are gathered. Available properties vary based on the category selected. This
information is not available within the standard reference tables. Instead, this information can be
viewed in the table created by the query task, for example SA_1-SPAA_SystemScans_Access table.

# SPAA: Scan Scoping Options

The Scan Scoping Options page provides scoping options to specify the list of URLs to be scanned. It
is a wizard page for the categories of:

- Scan SharePoint Access
- Scan For Sensitive Content

![Scan Scoping Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/scanscopingoptions.webp)

The options on the Scan Scoping Options page are:

- Add – When a URL is entered in the text box, adds the URL to the Scope box

  - To scope for a SharePoint Host Named Site Collections, use the text box to enter the URL for
    both the Web App and the HNSC with custom non-existent URL extensions added. See the
    [Scoping to SharePoint Host Named Site Collections](#scoping-to-sharepoint-host-named-site-collections)
    topic for additional information.

  **NOTE:** If sites are included in the Scope box, all other sites are excluded from the scan.

- Import CSV – Opens a file explorer to browse for a CSV file
- Scope box – Lists all added URLs
- Scope drop-down list – Select include to include a URL in the scan. Select exclude to exclude a
  URL from the scan.
- Remove – Removes the selected URL from the Scope box

## Scoping to SharePoint Host Named Site Collections

In order to scope to objects within host named site collections, add a scope line which includes the
URL of the web application containing the host named site collection. To scope the host named site
collection URL `http://sample.com/documents/` for a host named site collection that exists under the
web application URL `http://example.com`, follow the steps:

**Step 1 –** Navigate to the **Scan Scoping Options** page.

![Enter URL on Scan Scoping Options page example](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/scanscopingoptionswebappurl.webp)

**Step 2 –** In the text box, enter an invalid URL prefixed with the **Web App URL** which contains
the HNSCs. Click **Add**.

- In the example the invalid Web App URL is: `http://example.com/hnsc_indicator/`

**Step 3 –** In the text box, enter the HNSC URL to scope for. Click **Add**.

- In the example, the HNSC URL entered to filter for is: `http://sample.com/documents/`

![Scan Scoping Options example](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/scanscopingoptionsexample.webp)

**Step 4 –** The Web App URL must appear above the HNSC URL, as depicted in the example above.

**Step 5 –** The SharePoint Access Auditor Data Collector Wizard is now configured to filter for the
URL inside the SharePoint Host Named Site Collections.

## Virtual Hosts

In order to decrease the scan time in large SharePoint Online environments, it is possible to break
Site Collections for a single host down into subsets, or **Virtual Hosts**, that are treated as
separate hosts by Enterprise Auditor. This allows multiple scans of a single host to be run
concurrently. Follow the steps to configure this.

![CSV file with host and site collection information](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/virtualhostscsv.webp)

**Step 1 –** Create a new CSV file. Add into rows the information for the host and site collection
URLs you want to scan in the format `HOSTNAME#DESIGNATOR;URL`.

- Each unique `DESIGNATOR` is treated as a separate host comprised of the specified URLs.

![Host List for targeting the Virtual Hosts](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/virtualhostshostlist.webp)

**Step 2 –** Configure the Host List for SPAA or SPSEEK scans to target these Virtual Hosts using
the format `HOSTNAME#DESIGNATOR`.

![SPAA Data Collector Wizard Scan Scoping Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/scanscopingoptionsvirtualhosts.webp)

**Step 3 –** On the Scan Scoping Options page of the SharePoint Access Auditor Data Collector
Wizard, use the **Import CSV** button to import the information from the CSV file created in Step 1.

**Step 4 –** Click **Next** to continue through the other pages of the SharePoint Access Auditor
Data Collector Wizard. Then click **Finish** on the Summary Page.

Enterprise Auditor is now configured to scan multiple site collections for the same host
concurrently.

A new host folder is created for each Virtual Host in `Jobs/SA_CommonData/SHAREPOINTACCESS`. You
will also see a separate line on the Running Instances tab for each Virtual Host included in the
scan.

**NOTE:** The Host List for Bulk Import should be configured to contain each Virtual Host included
in the above scan using the `HOSTNAME#DESIGNATOR` format. After Bulk Import, the data contained in
Tier 1 Database tables and views will resemble a scan run against multiple hosts.

# SPAA: Select DLP Criteria

The Select Criteria page is where criteria to be used for discovering sensitive data are configured.
It is a wizard page for the category of Scan For Sensitive Content. This page requires the Sensitive
Data Discovery Add-On to be been installed on the Enterprise Auditor Console to define the criteria
and enable the Criteria Editor. If the SharePoint Agent is used, then it must also be installed on
the application server that hosts the Central Administration component. See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/install.md)
topic for additional information.

**CAUTION:** Users should not change scans in a way that would result in less data being returned on
a subsequent scan (i.e. scanning fewer web applications, scanning fewer site collections, or a
shallower depth scan). Those resources not included in a subsequent scan are marked as deleted in
the Tier 2 database and subsequently removed from the Tier 1 database.

![Select DLP criteria for this scan page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/selectdlpcriteria.webp)

The options on the Select DLP Criteria page are:

- Use Global Criterion Selection – Check this option to inherit sensitive data criteria settings
  from the **Settings** > **Sensitive Data** node. See the
  [Sensitive Data](/docs/accessanalyzer/11.6/administration/settings/sensitive-data-criteria.md)
  topic for additional information.
- Use the following selected criteria – Check this option to use the table to select which sensitive
  data criteria to scan for
- Select All - Click **Select All** to enable all sensitive data criteria for scanning
- Clear All - Click **Clear All** to remove all selections from the table
- Check the boxes next to the sensitive data criteria options to enable it to be scanned for during
  job execution

The table contains the following types of criteria:

**NOTE:** Until the Sensitive Data Discovery Add-On is installed, only the headers for the System
Criteria and User Criteria nodes are visible in the table.

- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

  Use the Sensitive Data Criteria Editor in **Settings** > **Sensitive Data** to create and edit
  user-defined criteria. See the
  [Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/install.md)topic
  for additional information.

# SPAA: SharePoint Data Collection Settings

The SharePoint data collection settings page is where additional scan settings are configured. It is
a wizard page for the categories of:

- Scan SharePoint Access
- Scan For Sensitive Content

**CAUTION:** Users should not change scans in a way that would result in less data being returned on
a subsequent scan (i.e. scanning fewer web applications, scanning fewer site collections, or a
shallower depth scan). Those resources not included in a subsequent scan are marked as deleted in
the Tier 2 database and subsequently removed from the Tier 1 database.

![SharePoint data collection settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/datacollectionsettings.webp)

The Probable Owners section provides options for how probable ownership will be calculated:

- Limit maximum number of Probable Owners per resource: [number] – Return the maximum user supplied
  number of probable owners per resource

The Collect Personal Sites checkbox enables or disables collection during the scan of personal site
collections of individual users. Personal site collections are a SharePoint feature which gives
every user their own site collection, and which are used by Office 365 to store a user’s OneDrive
files. Personal sites are configured by default to only be accessible by the user to whom they
belong, and so it is likely that the Connection Profile that the data collector is assigned may not
have access to some users’ personal sites. There are three radio buttons for identifying how the
query treats personal sites to which it does not have access:

- Skip inaccessible personal sites – Inaccessible personal sites are not scanned
- Force scan account as admin of inaccessible personal sites – Make the Connection Profile
  credentials a Site Collection Administrator of any personal sites to which it does not have
  access:

  - The personal sites will be scanned
  - When the scan is complete, the permissions are restored to what they were prior to the scan,
    referring to those credentials made a Site Collection Administrator of personal sites in order
    to conduct the scan.
  - Requires the account used in the Connection Profile credentials to have the Global
    Administrator role for SharePoint Online or be a Farm Administrator for SharePoint on premise.
    This permission is required to facilitate altering the administrators of site collections.

    **NOTE:** The Microsoft SharePoint API employed to remove personal Site Collection
    Administrator is unreliable, and occasionally the scanning account is left as a Site
    Collection Administrator of personal sites. This may leave the scanning account visible to
    SharePoint users on the permissions of the files in their personal sites.

    **_RECOMMENDED:_** Only use this option if that account is clearly identifiable as an
    administrative account, and users are advised of the possibility that the account could
    appear on the permissions of their personal site collection documents.

- Force Company Administrator as admin of inaccessible personal sites – Make the special Company
  Administrator account an administrator of any personal sites to which it does not have access

  - The personal sites will be scanned
  - When the scan is complete, the Company Administrator account is left as an administrator of
    the users’ personal site collections
  - Requires the account used in the Connection Profile credentials to have the Global
    Administrator role for SharePoint Online or be a Farm Administrator for SharePoint on premise.
    This permission is required to facilitate altering the administrators of site collections.

    **NOTE:** The Company Administrator account is a special SharePoint Online and SharePoint
    2013 group which contains all accounts which have the Global Administrators role.

The **Extract Document Tags** option enables the collection of metadata tags from Microsoft Office
files in SharePoint. Since this option requires the retrieval and scanning of each document, it
results in a noticeable increase in scan time.

- Select a preferred zone – Use the drop-down list to select a preferred zone within the web
  application to target the scan. If a targeted web application does not have the selected preferred
  zone, the scan targets the default zone for that web application. Options include:

  - Default
  - Intranet
  - Internet
  - Custom
  - Extranet

# Standard Reference Tables & Views for the SPAA Data Collector

The SPAA Data Collector gathers essential SharePoint on-premises and SharePoint Online information
into standard reference tables. Unlike most of the other Enterprise Auditor data collectors, the
SPAA Data Collector writes data to these tables regardless of the job executing the query.

## SharePoint Access Auditing Tables & Views

The tables and their associated views are grouped by types.

Structure Tables

| Tables                  | Details                                                                                                                                                                                                                                             |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_SPAA_Hosts           | Contains the names and ID of all SharePoint hosts that have been scanned for permissions.                                                                                                                                                           |
| SA_SPAA_Resources       | Contains information about all audited resources, which can be site collections, sites, libraries, lists, or folders. This provides information on the hierarchy relationship, as well as references to the name and rights applied to that folder. |
| SA_SPAA_Sharing         | Contains the view and edit links for anonymously shared resources, indicates if a resource is shared directly with trustees, and indicates whether a resource has a pending sharing request.                                                        |
| SA_SPAA_SharingUsers    | Contains information about the users to whom resources are shared with such as their email, login name, title, department, and describes whether the sharing grants is view only or edit permissions.                                               |
| SA_SPAA_SiteCollections | Contains a list of site collections that were audited and references the SA_SPAA_Resources and SA_SPAA_Trustees tables for the administrators of each site collection.                                                                              |
| SA_SPAA_WebApplications | Contains a list of web applications audited.                                                                                                                                                                                                        |
| SA_SPAA_WebAppURls      | Contains a list of URLs for each web application audited.                                                                                                                                                                                           |

Trustee Tables

| Tables                      | Details                                                                                                                                                                                                                             |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_SPAA_Trustees            | Contains information about any domain user, group, or security principal that has been assigned permissions. This table does not contain local user and groups, as none of the trustees in this table are specific to any one host. |
| SA_SPAA_TrusteeGroupMembers | Table contains information on SharePoint group membership.                                                                                                                                                                          |

Access Calculation Tables

| Tables                 | Details                                                                                                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_SPAA_Permissions    | Contains information on the actual permissions that have been granted to resources. Each entry summarizes the rights assigned to every trustee that would appear on the permissions of a SharePoint resource. |
| SA_SPAA_Roles          | Contains information about all of the roles on all of the site collections.                                                                                                                                   |
| SA_SPAA_RolesProxy     | Contains a mapping of role sets to individually assigned role definitions. A role set is a distinct set of roles that are applied to one or more resources.                                                   |
| SA_SPAA_WebAppPolicies | Contains summarized rights for every trustee in a web application policy. Each policy refers to a specific URL within that web application.                                                                   |

Calculated Tables

| Tables                 | Details                                                                                                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_SPAA_Exceptions     | Contains information about security issues and concerns. One out-of-the-box exception stored inside this table is the Open Resource exception, which identifies where resources are open to Everyone, Authenticated Users, or Domain Users. |
| SA_SPAA_ExceptionTypes | Contains summary information about exceptions. It details how many exceptions are found on each host scanned and breaks them down by exception type.                                                                                        |

Content Tables

| Tables                   | Details                                                                                                                                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_SPAA_DocumentMetaData | Contains all of the details about all of the files found on the audited SharePoint environment. It will list information like the file size, the number of versions of each file, the author editor of the file, and the editor of the file.  |
| SA_SPAA_ProbableOwners   | Contains information about the probable owners of the files stored within the audited SharePoint folders and lists. This table will tell what trustees own the most files and, therefore, may be the owners of the entire folder or the list. |
| SA_SPAA_TagProxies       | Contains a mapping of tag sets to individual tags. A tag set is a distinct collection of tags appearing together in one or more documents.                                                                                                    |
| SA_SPAA_Tags             | Contains the individual tags which were found in documents.                                                                                                                                                                                   |

 Views are the recommended way for Enterprise Auditor users to obtain the information gathered by
the SPAA Data Collector. They contain additional information for building queries easily. The
following is an explanation of the corresponding views created for some of the tables generated by
the SPAA Data Collector:

Permission Views

| Views                         | Details                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_SPAA_PermissionsView       | Provides any object permission, regardless of whether they have been made directly to folders or are inherited. An object includes site, site collection, list, library, folder, and so on.                                                                                                                                                                   |
| SA_SPAA_DirectPermissionsView | Provides permissions that are directly applied to resources.                                                                                                                                                                                                                                                                                                  |
| SA_SPAA_EffectiveAccessView   | Provides information on every trustee with access to a resource and the trustee’s level of access. This will do complete group expansion, but also take into account security principals such as Authenticated Users. Also, this view will not just expand permissions; it will calculate access by making sure every user has access to the web application. |
| SA_SPAA_WebAppPoliciesView    | Provides details around the web application policies that are applied to the audited SharePoint environment. These policies allow or deny access to the entire web application for the specified trustees.                                                                                                                                                    |

Resources Views

| Views                                | Details                                                                                                                                                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_SPAA_SiteCollectionsView          | Provides information about each site collection.                                                                                                                                                        |
| SA_SPAA_SiteCollectionsTraversalView | Provides information about resources and about navigation of these resources, such as their URL, the site collection they belong to, how deeply nested they are beneath the site collection, and so on. |

Calculated Views

| Views                  | Details                                                                                                                                                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_SPAA_ExceptionsView | Provides information on instances of exceptions that exist on the audited hosts. This view will contain a row for each exception type for each host. Exceptions are specific conditions set forth by Enterprise Auditor that are considered to be issues, such as folders with open access. |

Additional Views

| Views                         | Details                                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------------------- |
| SA_SPAA_LocalGroupMembersView | Provides information on the local groups present on each host and the members of those groups. |

Legacy Views

| Views                            | Details                                                                                                                                                                                                       |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_SPAA_PermissionScopeResources | Provides information on the actual permissions that have been granted to resources. Each entry summarizes the rights assigned to every trustee that would appear on the permissions of a SharePoint resource. |

## SharePoint Activity Auditing Tables & Views

The tables and their associated views are:

Activity Changes Tables (SPAC)

| Tables                  | Details                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------- |
| SA_SPAC_ActivityDates   | Contains a list of all dates of activities collected during scans.                     |
| SA_SPAC_ActivityEvents  | Contains all of the logged activity events.                                            |
| SA_SPAC_ActivitySources | Contains a list of all sources of activity collected during scans.                     |
| SA_SPAC_EventNames      | Contains a list of SharePoint event names, their IDs, and a description of each event. |

Views are the recommended way for Enterprise Auditor users to obtain the information gathered by the
SPAA Data Collector. They contain additional information for building queries easily. The following
is an explanation of the corresponding views created for some of the tables generated by the SPAA
Data Collector:

Activity Changes Views (SPAC)

| Views                      | Details                                       |
| -------------------------- | --------------------------------------------- |
| SA_SPAC_ActivityEventsView | Provides detailed activity event information. |

## SharePoint Sensitive Data Discovery Auditing Tables & Views

The tables and their associated views are:

**NOTE:** Lists and libraries are excluded from Sensitive Data Discovery Auditing.

SPDLP Tables

| Tables             | Details                                                                                                                                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_SPDLP_Criteria  | Contains the sensitive data criteria which are selected for collection by the scan engine (data collector configuration).                                                                                                           |
| SA_SPDLP_Matches   | Contains rolled up aggregate counts of the sensitive data criteria matches found during the scan.                                                                                                                                   |
| SA_SPDLP_MatchHits | Contains the actual sensitive data within files that matched selected criteria. For example, if the credit card criteria is used, this table will contain the potential credit card numbers identified within each files with hits. |

Views are the recommended way for Enterprise Auditor users to obtain the information gathered by the
SPAA Data Collector. They contain additional information for building queries easily. The following
is an explanation of the corresponding views created for some of the tables generated by the SPAA
Data Collector:

SPDLP Views

| Views                  | Details                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------- |
| SA_SPDLP_MatchesView   | Surfaces all relevant data about the files, its location, and the type of criteria found.   |
| SA_SPDLP_MatchHitsView | Surfaces all actual sensitive data discovered within files which matched selected criteria. |

# SPAA: Summary Page

The Summary page is where configuration settings are summarized. It is a wizard page for all of the
categories.

-![Summary Page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/summarypage.webp)

Click **Finish** to save configuration changes. If no changes were made, it is a best practice to
click **Cancel** to close the SharePoint Access Auditor Data Collector Wizard ensuring that no
accidental clicks are saved.

# SPAA: Test Access

Use the Test Access page to check access to SharePoint On-Premises environments. The Test Access
function uses each credential in a job's Connection profile to test access to a SharePoint
environment. The Test Access page tests access to the following:

- Access to the remote registry
- SQL Access (for databases associated with the SharePoint farms)
- All Web Applications in the SharePoint environment

![Test Access page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/testaccess.webp)

The options and sections on the Test Access page are:

- SharePoint App Server – Enter the server name for the SharePoint environment in the SharePoint App
  Server text box. Click **Check Access** to test access to the SharePoint environment.

  - For example – `sbnjqasp30` or `sbnjqasp3.qa.com`
  - Do not include `http[s]://` or use a URL for the server name. The Test Access function cannot
    be scoped to individual Web applications.

- Access Test Results – Displays information on test results. Test criteria are listed in the
  **Description** column. Test results will be returned as either **Pass** or **Fail** in the
  Results column.
- Save Report – Click **Save Report** to export and save a text version of the test results

|                                                                                                                                     |                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ![Successful test example](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/testaccessgoodtest.webp) | ![Unsuccessful test example](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/testaccessbadtest.webp) |
| **Successful Test (Correct Credentials)**                                                                                           | **Unsuccessful Test (Incorrect Credentials)**                                                                                        |

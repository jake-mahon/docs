# ActiveDirectory: Category

The ActiveDirectory Data Collector Category page contains the following query categories,
sub-divided by auditing focus:

![Active Directory Data Collector Wizard Category page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/category.webp)

The categories are:

- Domains

  - Domains – Domains in an organization’s forest
  - Trusted Domains – List of domains and their trust relationships
  - FSMO Role Holders – FSMO Role Holders (Significant Domain Controllers)
  - Domain Object Counts – Number of users and servers with each Domain

- Directory Objects By Domain

  - Containers – Containers under given scope
  - Organizational Units – Organizational units under given scope
  - Computers – List of computer objects under scope
  - Shared Folders – Shared folders under the scope
  - Printers – Printer objects
  - Users – All user objects under the scope
  - Contacts – Contact objects
  - Groups – Domain/global/universal distribution groups

- Sites and Topology

  - Sites – List of AD sites
  - Servers – Servers list
  - Site Object Counts – Number of users and servers within each AD Site

- Inter-site transports

  - Transports – Inter-site transports in AD
  - SiteLinks – Connections between two sites
  - SiteLinkBridges – Object for tracking transitively connected site links

- DNS Services

  - Subnets – Known subnets list
  - DNS Zones – DNS zone objects list

- Directory Security

  - Extended Control Access Rights – Extended rights dump
  - Security Principals – Well-known security principals from external sources

- Directory Schema

  - Schema Attributes – Dumps all defined attributes in Active Directory
  - Schema Classes – Dumps all defined classes in Active Directory

- AD Replication

  - AD Replication Links – Active Directory replication links

# ActiveDirectory: Directory Scope

The Directory Scope page provides configuration settings for the directory connection and the scope
for the query. It is a wizard page for the category of **Directory Objects by Domain**.

![Active Directory Data Collector Wizard Directory Scope page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/activedirectory/directoryscope.webp)

The Directory Scope page has the following options:

- Connect to – Identifies the target domain

  - Default domain – Domain in which the Enterprise Auditor Console server resides
  - This domain – Domain specified in the textbox

- Connect – Connects to the target domain to provide a list of directories
- Add – Add an OU to the query scope
- Remove – Removes an OU from the query scope
- Scope – List of OUs to be scanned
- Sub tree – Sub-OUs included in the scan if checked

# ActiveDirectory: Options

The Options page provides format options for returned data. It is a wizard page for all categories.

![Active Directory Data Collector Wizard Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/options.webp)

- How to format collected results – Select from the following options:

  - Return data as collected
  - Return data in a separate row for each property set in the following group

    - Select the group from the drop-down menu

  - Return each value of the following property in a separate row

    - Select the property from the drop-down menu

- How to return multi-valued properties in one cell – Select from the following options:

  - Concatenated – All values are listed in one cell using the delimiter specified

    - Delimiter – Symbol used to separate values in the cell

  - First value only – Only the first value is listed in the cell

# ActiveDirectory Data Collector

The ActiveDirectory Data Collector audits objects published in Active Directory. It has been
preconfigured within the Active Directory Solution. Both this data collector and the solution are
available with a special Enterprise Auditor license. See the
[Active Directory Solution](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
topic for additional information.

Protocols

- ADSI
- LDAP
- RPC

Ports

- TCP 389/636
- TCP 135-139
- Randomly allocated high TCP ports

Permissions

- Member of the Domain Administrators group

## ActiveDirectory Query Configuration

The ActiveDirectory Data Collector is configured through the Active Directory Data Collector Wizard,
which contains the following wizard pages:

- Welcome
- [ActiveDirectory: Category](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ActiveDirectory: Directory Scope](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ActiveDirectory: Results](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ActiveDirectory: Options](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ActiveDirectory: Summary](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)

![Active Directory Data Collector Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.

# ActiveDirectory: Results

The Results page is where Active Directory object properties to be gathered are selected. It is a
wizard page for all categories.

![Active Directory Data Collector Wizard Results page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/results.webp)

Properties can be selected individually or the **Check all**, **Uncheck all**, and **Reset to
defaults** buttons can be used. All selected properties are gathered. Available properties vary
based on the category selected.

# ActiveDirectory: Summary

The Summary page displays a summary of the configured query. It wizard page for all categories.

![Active Directory Data Collector Wizard Summary page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

Click **Finish** to save configuration changes. If no changes were made, it is a best practice to
click **Cancel** to close the Active Directory Data Collector Wizard to ensure that no accidental
clicks are saved.

# ADActivity: Category

Use the Category page to identify how activity data is retrieved or removed.

![Active Directory Activity DC wizard Category page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/category.webp)

The ADActivity Data Collector Category page contains three query categories:

- Import From SAM – Import activity from a Netwrix Activity Monitor archive
- Import From Share – Import activity from a network share
- Remove Tables – Removes all tables and views from SQL Server database. This option is designed for
  troubleshooting. When this option is selected, the next wizard page is the Summary page. See the
  [Clear ADActivity Tables](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
  topic for more information.

# Clear ADActivity Tables

Sometimes when troubleshooting an ADActivity issue, it becomes necessary to clear the standard
reference tables. Follow the steps.

**Step 1 –** Create a new job and assign a query using the ADActivity Data Collector.

![Active Directory Activity DC wizard Category page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/categoryremovetables.webp)

**Step 2 –** In the Active Directory Activity DC Wizard on the Category page, select the **Remove
Tables** category task.

![Active Directory Activity DC wizard Results page for Remove Tables category](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adactivity/resultsremovetables.webp)

**Step 3 –** Click **Next** to go to the Results page. Optionally, select the **Success** checkbox
to display a confirmation of successful removal in the results after the job is run.

**Step 4 –** Click **Next** and then Click **Finish** to close the Active Directory Activity DC
Wizard. Click **OK** to close the Query Properties window.

**CAUTION:** When the job is run, all of the ADActivity standard reference tables are removed from
the database.

# ADActivity: SAM Connection

The SAM connection page is where the port number is configured to send Active Directory data from
Netwrix Activity Monitor. It is a wizard page for the category of:

- Import from SAM

![Active Directory Activity DC wizard SAM connection settings page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/namconnection.webp)

The following connection setting can be configured to connect to the Netwrix Activity Monitor
archive via an API Server:

- Port – Enter the API server port. The default is 4494.
- Encrypt communication with target server (SSL) – Allows the Active Directory Activity Data
  Collector to communicate with the SAM API Server over a secure channel

  - Ignore certificate errors? – Ignores untrusted certificate authority errors and allows the
    scan to continue

- Test SAM host – Enter the Activity Monitor API server name in a qualified domain name format.
  Click Connect to test the connection. A successful result populates the section underneath with a
  Refresh token.
- Exclude – Select archives to be ignored by the Active Directory Activity DC scan

  **CAUTION:** Save the Refresh token to a Text Editor for later use. The Refresh token resets
  each time the Test SAM host option is connected to. It must be replaced in the Connection
  profile if it is regenerated.

- Refresh token – After generation, it must replace the old Access Token from the SAM API Server
  configuration in the Connection Profiles required to connect to the API Server

# ADActivity Data Collector

The ADActivity Data Collector integrates with the Netwrix Activity Monitor by reading the Active
Directory activity log files. It has been preconfigured within the Active Directory Solution. Both
this data collector and the solution are available with a special Enterprise Auditor license. See
the
[Active Directory Solution](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
topic for additional information.

Protocols

- HTTP
- RPC

Ports

- TCP 4494 (configurable within the Netwrix Activity Monitor)

Permissions

- Netwrix Activity Monitor API Access activity data
- Netwrix Activity Monitor API Read
- Read access to the Netwrix Activity Monitor Log Archive location

## ADActivity Query Configuration

The ADActivity Data Collector is configured through the Active Directory Activity DC wizard, which
contains the following wizard pages, which change based up on the query category selected:

- [ADActivity: Category](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADActivity: SAM Connection](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADActivity: Share](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADActivity: Scope](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADActivity: Results](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADActivity: Summary](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)

# ADActivity: Results

The Results page is where the properties to be gathered are selected. It is a wizard page for all of
the categories.

![Active Directory Activity DC wizard Results page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/results.webp)

Properties can be selected individually or the **Select All** and **Clear All** buttons can be used.
All selected properties are gathered. Available properties vary based on the category selected.

# ADActivity: Scope

Use the Scoping and Retention page to configure additional settings. This page is a wizard page for
the categories of:

- Import From SAM
- Import From Share

![Active Directory Activity DC wizard Scoping and Retention page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/scope.webp)

The Timespan is defined according to the following two elements:

- Relative Timespan – Number of days AD Activity is collected when the scan is run
- Absolute Timespan – Set the date range for the scan to collect AD Activity

  **_RECOMMENDED:_** The threshold should be set for after the Netwrix Activity Monitor collects
  and archives its data but before they are deleted after a set retention period.

The Retention section sets what event type is collected and how many days Enterprise Auditor keeps
the collected data in its SQL database. The table has the following columns:

- Event Type – The event type that may be enabled for the scan. The event types are:

  - AD Change
  - AD Replication
  - Authentication
  - LDAP
  - Process Injection

- Days to Store – Specify the number of days to store the collected data for the event type
- Enable Collection – When selected, the corresponding event type is collected

# ADActivity: Share

The Share page provides options for configuring share settings. It is a wizard page for the category
of:

- Import from Share

![Active Directory Activity DC wizard Share settings page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/share.webp)

The following connection setting can be configured to connect to the AD activity archives that must
be located on a Domain Controller share:

- UNC Path – Enter the path of the share that stores AD Activity from the AD Agent(s). The ellipsis
  (**…**) opens a file explorer where the path can be navigated to and selected.

  - _Remember,_ all AD Agent logs must be archived to this location or the AD Activity data is not
    queried by Enterprise Auditor

- Include Sub-Directories – Select to include sub-directories on the targeted share. Use this option
  if there are multiple archives in the same location.

# Standard Reference Tables & Views for the ADActivity Data Collector

The ADActivity Data Collector gathers essential user and group activity information into standard
reference tables. Unlike other Enterprise Auditor data collectors, the ADActivity Data Collector
writes data to these tables regardless of the job executing the query.

These tables and their associated views are outlined below:

| Table                            | Details                                                               |
| -------------------------------- | --------------------------------------------------------------------- |
| SA_ADActivity_AuthTypes          | Contains Active Directory authentication protocol types               |
| SA_ADActivity_Classes            | Contains Active Directory classes (for example, user, computer)       |
| SA_ADActivity_DesiredAccess      | Contains desired access level of each activity event                  |
| SA_ADActivity_DesiredAccessNames | Contains dictionary of desired access names                           |
| SA_ADActivity_EventErrorCodes    | Contains dictionary of event error codes                              |
| SA_ADActivity_EventNames         | Contains dictionary of event names                                    |
| SA_ADActivity_Events             | Contains Active Directory event details                               |
| SA_ADActivity_FilesImported      | Contains lists of imported audit files                                |
| SA_ADActivity_From               | Contains lists of the sources of activity events                      |
| SA_ADActivity_HostInfo           | Contains lists of scanned hosts                                       |
| SA_ADActivity_LDAPEvents         | Contains lists of Lightweight Directory Access Protocol (LDAP) events |
| SA_ADActivity_LDAPFilters        | Contains lists of LDAP filters provided                               |
| SA_ADActivity_ObjectNames        | Contains dictionary of object  names                                  |
| SA_ADActivity_Objects            | Contains lists of Active Directory objects found in the activity log  |
| SA_ADActivity_PAC                | Contains lists of relative IDs (RIDs) for each collected event        |
| SA_ADActivity_ProcessEvents      | Contains lists of activity events by process                          |
| SA_ADActivity_ProcessNames       | Contains dictionary of process names                                  |
| SA_ADActivity_Protocols          | Enumerates network protocols found                                    |
| SA_ADActivity_Sources            | Contains lists of sources of activity events                          |
| SA_ADActivity_SPNs               | Contains a unique identifier for each logon account                   |

Views are the recommended way for Enterprise Auditor users to obtain the information gathered by the
ADActivity Data Collector. They contain additional information for building queries easily. The
following is an explanation of the corresponding views created for some of the tables generated by
the ADActivity Data Collector:

| Views                                        | Details                                                                  |
| -------------------------------------------- | ------------------------------------------------------------------------ |
| SA_ADActivity_ADEventsAttributesView         | Contains detailed view of attribute events (changes)                     |
| SA_ADActivity_ADEventsView                   | Contains detailed view of activity events                                |
| SA_ADActivity_AuthEventsPACView              | Contains detailed view of authentication events referencing relative IDs |
| SA_ADActivity_AuthEventsView                 | Contains detailed authentication event view                              |
| SA_ADActivity_EventsView                     | Contains detailed activity event view                                    |
| SA_ADActivity_LDAPEventsView                 | Contains LDAP view                                                       |
| SA_ADActivity_ProcessEventsDesiredAccessView | Contains detailed process event view with desired access references      |
| SA_ADActivity_ProcessEventsView              | Contains detailed process event view                                     |

# ADActivity: Summary

The Summary page is where configuration settings are summarized. It is a wizard page for all of the
categories.

![Active Directory Activity DC wizard Summary page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

Click **Finish** to save configuration changes. If no changes were made, it is a best practice to
click **Cancel** to close the Active Directory Activity DC wizard to ensure that no accidental
clicks are saved.

# ADInventory: Category

Use the category page to identify which Active Directory task to perform.

![Active Directory Inventory DC Wizard Category page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/category.webp)

The categories include the following tasks:

- Scan Active Directory – Scans Active Directory objects and imports the information into SQL Server
  database, creating the standard reference tables. This task is also responsible for maintaining
  the schema for tables and views. This is the standard option for this data collector.
- Update SQL Indexes – Reorganizes or rebuilds indexes in the Enterprise Auditor SQL storage
  database. When this option is selected, the next wizard page is the Results page.
- Remove Tables – Removes all tables and views from SQL Server database. This option is designed for
  troubleshooting. When this option is selected, the next wizard page is the Summary page. See the
  [Clear ADInventory Tables](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
  topic for more information.
- Drop Domain – Remove host domain related data from SQL server

**NOTE:** The Scan Active Directory category is the pre-configured setting for the .Active Directory
Inventory Job Group. Therefore, accessing the Active Directory Inventory DC Wizard from the query
within that job group does not display the Category wizard page.

# Clear ADInventory Tables

Sometimes when troubleshooting an ADInventory issue, it becomes necessary to clear the standard
reference tables. Follow the steps.

**CAUTION:** Be careful when using this query task. It will result in the deletion of collected
data.

**Step 1 –** Create a new job and assign a query using the **ADInventory** Data Collector.

![Remove Tables task selected on Active Directory Inventory DC Wizard Category page ](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/categoryremovetables.webp)

**Step 2 –** In the Active Directory Inventory DC Wizard on the Category page, select the **Remove
Tables** category task.

**Step 3 –** Click **Next** and then **Finish** to close the Active Directory Inventory DC Wizard.
Click **OK** to close the Query Properties window.

When the job is run, all of the ADInventory standard reference tables are removed from the database.

**CAUTION:** Never leave the query task selected after job execution. Accidental data loss can
occur.

_Remember,_ this job deletes data from the Enterprise Auditor database. Check the job has been
configured correctly prior to job execution.

# ADInventory: Custom Attributes

The Custom Attributes page provides ability to add Active Directory attributes that are unique to
the environment or not collected by default to be gathered. It is a wizard page for the category of
Scan Active Directory.

The
[Standard Reference Tables & Views for the ADInventory Data Collector](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
topic provides information on what is collected by default. Custom attributes added on this page are
stored in the **SA_ADInventory_ExtendedAttributes** table.

![Active Directory Inventory DC Wizard Custom Attributes page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/customattributes.webp)

The Custom Attribute is defined according to the following three elements:

- Domain Filter – Short or fully qualified name
- Object Class – User, Group, or Computer
- Attribute Name – As listed within Active Directory

Use the **Add**, **Edit**, and **Remove** buttons at the bottom of the window to configure the
custom attributes to be gathered by the scan. See the
[Manually Add Custom Attributes](#manually-add-custom-attributes) topic for additional information.

The **Import** button opens the Custom Attributes Import Wizard. See the
[Custom Attributes Import Wizard](#custom-attributes-import-wizard) topic for additional
information.

Microsoft Active Directory Schema is detailed in the Microsoft
[Active Directory Schema](https://learn.microsoft.com/en-gb/windows/win32/adschema/active-directory-schema)
article.

#### Manually Add Custom Attributes

The **Add** and **Edit** buttons on the Custom Attributes page open the Custom Attribute window.
Follow the steps to manually add custom attributes.

**Step 1 –** On the Custom Attributes page of the Active Directory Inventory DC Wizard, click
**Add**. The Custom Attribute window opens.

![Custom Attribute window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/customattributesadd.webp)

**Step 2 –** Enter the **Domain Filter**. This can be entered either as the short domain name or the
fully qualified domain name.

**Step 3 –** Select the checkbox for the desired **Object Class**.

**Step 4 –** Enter the **Attribute Name** as it appears in Active Directory.

**Step 5 –** Click **OK**. The Custom Attribute window closes and the specified attribute is added
in the Custom Attributes page.

Repeat this process until all desired Custom Attributes have been included.

#### Custom Attributes Import Wizard

The Custom Attributes Import Wizard is used to import a list of custom attributes into the
ADInventory Data Collector configurations. Follow the steps to use the Custom Attributes Import
Wizard.

**Step 1 –** On the Custom Attributes page of the Active Directory Inventory DC Wizard, click
**Import**. The Custom Attribute Import Wizard opens.

![Custom Attributes Import Wizard Credentials page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/customattributesimportcredentials.webp)

**Step 2 –** On the Credentials page, identify a domain either by entering one manually or selecting
one from the **Domain Name** drop-down menu which displays a list of domains trusted by the one in
which the Enterprise Auditor Console server resides. Then set the credentials for reading the
attributes list from the domain:

- Authenticate as the logged in user – Applies the user account running Enterprise Auditor
- Use the following credentials to authenticate – Applies the account supplied in the **User Name**
  and **Password** fields

Click **Next** to continue.

![Custom Attributes Import Wizard Attributes page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/customattributesimportattributes.webp)

**Step 3 –** The wizard populates available attributes from the domain specified on the Attributes
page. Expand the desired object class and select the checkboxes for the custom attributes to be
imported. Then click **Next**.

![Custom Attributes Import Wizard Summary page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/customattributesimportsummary.webp)

**Step 4 –** On the Summary page, click **Finish**.

The selected attributes are added on the Custom Attributes page of the Active Directory Inventory DC
Wizard.

# ADInventory: Domains

The Domains page removes host domain-related data from the SQL server for the selected domains.

![Active Directory Inventory DC Wizard Domains page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/domains.webp)

Select the checkbox next to a domain to remove host-related data from the SQL server for that
domain.

# ADInventory: Index Update Options

Configure options for maintaining SQL Server indexes while running queries using the Index Update
Options page.

![Active Directory Inventory DC Wizard Index Update Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/indexupdateoptions.webp)

The options on the Index Update Options page are:

- SQL Index Update Options:

  - Maximum Degree of Parallelism – Set the maximum limit of the Degree of Parallelism used for
    the query. Default is **1**.
  - Minimum Index Reorganization Threshold – Set the minimum index reorganization threshold that
    is performed while running the query. Default is **5** percent.
  - Minimum Index Rebuilding Threshold – Set the minimum index rebuilding threshold that is
    performed while running the query. Default is **31** percent.

- Select Data Collector Schemas– Select which schemas to maintain when running the query by
  selecting them from the table. Enable a schema for indexing by selecting the checkbox next to it.
  Right-click in the table to show options for **Check All**, **Clear All**, **Check All Selected
  Items**, and **Clear All Selected Items**.

# ADInventory: Options

The Options page provides options for Active Directory data collection. It is a wizard page for the
category of Scan Active Directory.

![Active Directory Inventory DC Wizard Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/options.webp)

The Options page has the following configuration options:

- Encrypt communication with Active Directory (SSL) – Allows the ADInventory Data Collector to
  communicate with Active Directory over a secure channel

  - Ignore certificate errors? (For testing only) – Ignores untrusted certificate authority errors
    and allows the scan to continue. This option is for testing purposes only.

- Collect SID History from domain migrations – During a domain migration, the new infrastructure is
  created alongside the old infrastructure. The old account SID is typically added to the SID
  history attribute for the new account. The option to collect SID history is made available within
  the ADInventory Data Collector to assist resolving SIDs for domain migrations.
- Collect only updates since the last scan (recommended) – Default setting for differential
  scanning. The updates collected are any changes to: group membership, attributes on user objects,
  attributes on group objects, and so on.

  - Track changes into Change tracking tables – Records all changes since the last scan in
    separate tables
  - Limit Last Logon TimeStamp Changes – When selected, changes to the Last Logon TimeStamp
    Attribute are not recorded

    **_RECOMMENDED:_** If tracking changes, use the Limit Last Logon TimeStamp Changes option.

  - Number of days you want to keep changes in the database – Use the arrow buttons or manually
    enter a number to set the number of days to keep changes
  - Target previously scanned domain controller – Collects updated information from the last
    domain controller targeted to reduce the scan time. Below are some considerations:

    - If the last domain controller is unavailable, the targeted domain controller is the
      specified domain controller from the host list. If using the domain name, it attempts to
      find the last scanned domain controller.
    - If that domain controller is determined to be unavailable, then it runs a full scan on the
      next domain controller that responds. Then, it will scan the new domain controller for
      changes going forward.

  Selecting the **Track changes into Change tracking tables** option enables the **Number of days
  you want to keep changes in the database** box. This allows for changes in Active Directory to
  be tracked. When change tracking is enabled, notification analysis tasks can be used to send
  alerts.

# ADInventory Data Collector

The extraction and correlation of user, group, and computer attributes drastically transforms the
meaning of data collected across the many systems and applications that are linked to Active
Directory. The ADInventory Data Collector is designed as a highly scalable and useful data
collection mechanism to catalogue user, group, and computer object information that can be used by
other solutions within Enterprise Auditor.

The ADInventory Data Collector is a core component of Enterprise Auditor and has been preconfigured
to be used within the .Active Directory Inventory Solution. Both this data collector and the
solution are available with all Enterprise Auditor license options. See the
[.Active Directory Inventory Solution](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
topic for additional information.

Protocols

- LDAP

Ports

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

Permissions

- Read access to directory tree
- List Contents & Read Property on the Deleted Objects Container

  **NOTE:** See the Microsoft
  [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx)
  article and the Microsoft
  [Dsacls](<https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx>) article for
  additional information.

## Functional Design of the ADInventory Data Collector

The ADInventory Data Collector has been designed to update incrementally. Once it has run against a
domain controller, additional collections gather changes made since the last scan. This enables the
ADInventory Data Collector to function efficiently within large environments. Each time it is run
against different domain controllers, it restarts the cycle.

## ADInventory Query Configuration

The ADInventory Data Collector is configured through the Active Directory Inventory DC Wizard, which
contains the following wizard pages:

- Welcome
- [ADInventory: Category](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADInventory: Results](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADInventory: Options](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADInventory: Index Update Options](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADInventory: Custom Attributes](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADInventory: Summary](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)

![Active Directory Inventory DC Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.

# ADInventory: Results

The Results page is where properties from Active Directory to be gathered are selected. It is a
wizard page for the category of Scan Active Directory.

![Active Directory Inventory DC Wizard Results page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/results.webp)

Properties can be selected individually or the **Select All** or **Clear All** buttons can be used.
All selected properties are gathered.

This information is not available within the standard reference tables and views. Instead, this
information can be viewed in the SA_ADInventory_DEFAULT table, which is created when any of these
properties are selected.

# Standard Reference Tables & Views for the ADInventory Data Collector

The ADInventory Data Collector gathers essential user and group inventory information into standard
reference tables. Unlike other Enterprise Auditor data collectors, the ADInventory Data Collector
writes data to these tables regardless of the job executing the query.

These tables and their associated views are outlined below:

| Table                                | Details                                                                                                                                                                                                 | AD Object Reference Article                                                                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_ADInventory_AttributeChanges      | Contains a list of principal identifiers and their corresponding attribute changes for each differential scan that is performed against a domain.                                                       | [Active Directory Schema](https://learn.microsoft.com/en-gb/windows/win32/adschema/active-directory-schema)                                    |
| SA_ADInventory_Computers             | Contains extended information about computers, operating systems, service packs, etc.                                                                                                                   | [Computer class](https://learn.microsoft.com/en-gb/windows/win32/adschema/c-computer)                                                          |
| SA_ADInventory_DistinguishedNames    | Contains every distinguished name collected from principals and group membership.                                                                                                                       | [Attribute distinguishedName](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-ada1/56da5a9b-485d-4d7c-a226-1a54a43d9013)      |
| SA_ADInventory_Domains               | Contains information about the domain such as its naming context and when it was last scanned.                                                                                                          | [Domain class](https://learn.microsoft.com/en-gb/windows/win32/adschema/c-domain)                                                              |
| SA_ADInventory_EffectiveGroupMembers | Contains expanded group membership which includes a flattened representation of members.                                                                                                                |                                                                                                                                                |
| SA_ADInventory_Exceptions            | Contains information about security issues and concerns. **NOTE:** See the [AD Exception Types Translated](#ad-exception-types-translated) topic for an explanation of Exception Types.                 |                                                                                                                                                |
| SA_ADInventory_ExceptionTypes        | Identifies how many instances of exceptions exist on the audited domain. **NOTE:** See the [AD Exception Types Translated](#ad-exception-types-translated) topic for an explanation of Exception Types. |                                                                                                                                                |
| SA_ADInventory_Exchange              | Contains information about the Exchange Server, each database and storage group, and the HomeMDB property.                                                                                              | [ms-Exch-Home-MDB Attribute](<https://learn.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2003/ms980583(v=exchg.65)>) |
| SA_ADInventory_ExtendedAttributes    | Contains information gathered by the custom attributes component of the query configuration.                                                                                                            | [Active Directory Schema](https://learn.microsoft.com/en-gb/windows/win32/adschema/active-directory-schema)                                    |
| SA_ADInventory_GroupMemberChanges    | Contains a list of group principal identifiers and their corresponding membership changes for each differential scan that is performed against a domain.                                                | [Member attribute](https://learn.microsoft.com/en-gb/windows/win32/adschema/a-member)                                                          |
| SA_ADInventory_GroupMembers          | Contains a map of groups to member distinguished names.                                                                                                                                                 | [Member attribute](https://learn.microsoft.com/en-gb/windows/win32/adschema/a-member)                                                          |
| SA_ADInventory_Groups                | Contains extended information about groups, group type, managed by, etc.                                                                                                                                | [Group class](https://learn.microsoft.com/en-gb/windows/win32/adschema/c-group)                                                                |
| SA_ADInventory_ImportHistory         | Contains a list of all imports performed against a particular domain along with when the import happened and the GUID of the domain controller that was scanned.                                        |                                                                                                                                                |
| SA_ADInventory_Principals            | Contains common attributes for users, groups, and computers as well as references to their primary distinguished name and security identifiers.                                                         | [Security-Principal class](https://learn.microsoft.com/en-gb/windows/win32/adschema/c-securityprincipal)                                       |
| SA_ADInventory_SecurityIdentifiers   | Contains every SID collected from the principals, including historical identifiers.                                                                                                                     | [Security-Identifier attribute](https://learn.microsoft.com/en-gb/windows/win32/adschema/a-securityidentifier)                                 |
| SA_ADInventory_Users                 | Contains extended information about users, department, title, etc.                                                                                                                                      | [User class](https://learn.microsoft.com/en-gb/windows/win32/adschema/c-user)                                                                  |

Views are the recommended way for you to obtain the information gathered by the ADInventory Data
Collector. They contain additional information for building queries easily.

The following is an explanation of the corresponding views created for some of the tables generated
by the ADInventory Data Collector:

| Views                                    | Details                                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| SA_ADInventory_AttributeChangesView      | Contains attribute change information                                                    |
| SA_ADInventory_ComputersView             | Contains computer information                                                            |
| SA_ADInventory_EffectiveGroupMembersView | Contains effective group membership information                                          |
| SA_ADInventory_ExceptionsView            | Contains principals that are identified to have security concerns                        |
| SA_ADInventory_GroupMemberChangesView    | Contains group membership change information                                             |
| SA_ADInventory_GroupMembersView          | Contains group membership information                                                    |
| SA_ADInventory_GroupsView                | Contains group level information                                                         |
| SA_ADInventory_PrincipalsView            | Contains common attributes from the principals table including additional domain details |
| SA_ADInventory_UsersView                 | Contains user information                                                                |

### AD Exception Types Translated

The following table translates the Type of Exceptions that can found.

| Type | Exception            | Description                                                               |
| ---- | -------------------- | ------------------------------------------------------------------------- |
| 1    | Large Groups         | Groups with a large amount of effective members                           |
| 2    | Deeply Nested        | Groups with deep levels of membership nesting                             |
| 3    | Circular Nesting     | Groups with circular references in their effective membership             |
| 4    | Empty Groups         | Groups with no membership                                                 |
| 5    | Single Member Groups | Groups with a single direct member                                        |
| 6    | Stale Users          | Users that have not logged onto the domain for an extended period of time |
| 7    | Stale Membership     | Groups with a high percentage of effective members that are stale users   |
| 8    | Large Token          | Users with a large amount of authorization groups in their token          |

# ADInventory: Summary

The Summary page is where configuration settings are summarized. It is a wizard page for all of the
categories.

![Active Directory Inventory DC Wizard Summary page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

Click **Finish** to save configuration changes. If no changes were made, it is a best practice to
click **Cancel** to close the Active Directory Inventory DC Wizard to ensure that no accidental
clicks are saved.

# ADPermissions: Category

The ADPermissions Data Collector Category page identifies what kind of information to retrieve using
the Category wizard page.

![ADPermissions Data Collector wizard Category page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/category.webp)

The categories on the ADPermissions Category page are:

- Scan Active Directory Permissions – Scan permissions applied to objects
- Scan Active Directory Audits – Scan audits applied to objects
- Remove Tables – Remove all tables and views from SQL server. See the
  [Remove ADPermissions Tables](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
  topic for additional information.

# ADPermissions: Custom Filter

The Custom Filter page provides options to configure settings for object permission collection. It
is only available if the Custom Filter option is checked on the Scope page. It is a wizard page for
the categories of:

- Scan Active Directory Permissions
- Scan Active Directory Audits

![ADPermissions Data Collector wizard Custom Filter page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/customfilter.webp)

The configurable options are:

- Root Path – Enter the AD root path

  - Select the distinguished name from the drop-down menu to the right of the Root Path
  - Click **Preview** to show an example of the complete path

- LDAP Filter – Enter a custom filter string
- Scope – Select an option from the drop-down menu:

  - Base – Limits the scope to the base object. The maximum number of objects returned is always
    one.
  - One Level – Restricted to the immediate children of a base object, but excludes the base
    object itself
  - Sub tree – (or a deep scope) includes all child objects as well as the base object

- Click **Add** to add the filter criteria to the list. Multiple filters can be used.

# ADPermissions: Options

The Options page is provides additional options for collecting the Active Directory information. It
is a wizard page for the categories of:

- Scan Active Directory Permissions
- Scan Active Directory Audits

![ADPermissions Data Collector wizard Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/options.webp)

The configurable options are:

- Encrypt communication with Active Directory (SSL) – Enables SSL encryption

  - Ignore Certificate errors – Select to ignore errors for testing only

- Collect only updates since the last scan – Enables differential scanning

  - Target previously scanned domain controller – Select to use the same domain controller as the
    previous scan
  - Track changes into change tracking tables – Enable to track changes
  - Number of days you want to keep changes in the database – Set the number of days to keep
    changes in the database

# ADPermissions Data Collector

The ADPermissions Data Collector collects the advanced security permissions of objects in AD. It is
preconfigured within the Active Directory Permissions Analyzer Solution. Both this data collector
and the solution are available with a special Enterprise Auditor license. See the
[Active Directory Permissions Analyzer Solution](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
topic for additional information.

Protocols

- ADSI
- LDAP
- RPC

Ports

- TCP 389
- TCP 135 – 139
- Randomly allocated high TCP ports

Permissions

- LDAP Read permissions
- Read on all AD objects
- Read permissions on all AD Objects

## ADPermissions Query Configuration

The ADPermissions Data Collector is configured through the Active Directory Permissions Data
Collector Wizard. The wizard contains the following pages, which change based upon the query
category selected:

- [ADPermissions: Category](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADPermissions: Scope](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADPermissions: Custom Filter](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADPermissions: Options](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADPermissions: Results](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
- [ADPermissions: Summary](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)

# Remove ADPermissions Tables

If it becomes necessary to clear the ADPermissions Data Collector tables and views to resolve an
issue, create a new job using it as the query source and select the Remove Tables category. The
Connection Profile applied should be the same as the one used for the associated **Active Directory
Permissions Analyzer** > **0.Collection** Job. Follow the steps.

**CAUTION:** Using this query task results in the deletion of collected data.

**Step 1 –** Create a new job and assign a query using the **ADPermissions** Data Collector.

**Step 2 –** In the Active Directory Permissions Data Collector Wizard, on the Category page select
the **Remove Tables** category and click **Next**.

**Step 3 –** On the Results page, make sure all the Available Properties are selected and click
**Next**.

**Step 4 –** Click **Finish** to close the Active Directory Permissions Data Collector Wizard. Click
**OK** to close the Query Properties window.

When the job is run, all of the ADPermissions standard reference tables are removed from the
database.

_Remember,_ this job deletes data from the Enterprise Auditor database. Ensure the job has been
configured correctly prior to executing the job.

**CAUTION:** Never leave the query task selected after the job has been executed. Accidental data
loss can occur.

# ADPermissions: Results

The Results page is where properties that will be gathered are selected. It is a wizard page for all
of the categories.

![ADPermissions Data Collector wizard Results page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/results.webp)

Available properties vary based on the category selected. Properties can be selected individually or
the **Select All** and **Clear All** buttons can be used. All selected properties are gathered.

# ADPermissions: Scope

The Scope page is where the scope for the Active Directory permissions scan is configured. It is a
wizard page for the categories of:

- Scan Active Directory Permissions
- Scan Active Directory Audits

![ADPermissions Data Collector wizard Scope page](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/scope.webp)

The configurable options are:

- Built-in:

  - Computers – Computer objects under scope
  - Contacts – Contact objects
  - Containers – Containers under given scope
  - DNS Zones – DNS zone object list
  - Domains – Domains in an organizations forest
  - Extended Control Access Rights – Access control rights list
  - Foreign Security Principals – Well known security principles from external sources
  - Group – Domain, global, universal distribution groups
  - Organizational Units – Organizational units under given scope
  - Printer – Printer objects
  - Schema Attributes – All defined attributes in Active Directory
  - Schema Classes – All defined classes in Active Directory
  - Servers – Server objects
  - Shared Folders – Shared folders under the scope
  - Site Link Bridges – Object for tracking transitively connected site links
  - Site links – Connections between sites
  - Site Transports – Inter-site transports in Active Directory
  - Sites – List of Active Directory sites
  - Subnets – Known subnet objects
  - Users – All user objects under the scope

- Custom:

  - Custom Filter – Custom filter for collecting objects

# Standard Reference Tables & Views

The ADPermissions Data Collector gathers essential user and group inventory information into
standard reference tables. Unlike other Enterprise Auditor data collectors, the ADPermissions Data
Collector writes data to these tables regardless of the job executing the query.

These tables and their associated views are outlined below:

| Table                                  | Details                                           |
| -------------------------------------- | ------------------------------------------------- |
| SA_ADPerms_ACLs                        | Access Control List entries                       |
| SA_ADPerms_ACLTypes                    | Types of Access Control List entries              |
| SA_ADPerms_Domains                     | Targeted domains                                  |
| SA_ADPerms_EffectiveChildren           | Linked lists of inheritance in Active Directory   |
| SA_ADPerms_EffectivePermissionChildren | Linked lists of inheritance for permissions       |
| SA_ADPerms_ImportHistory               | History of all ADPermissions scans                |
| SA_ADPerms_Inheritance                 | Permission inheritance                            |
| SA_ADPerms_ObjectChanges               | Changes to Active Directory object permissions    |
| SA_ADPerms_Objects                     | Active Directory objects                          |
| SA_ADPerms_Permissions                 | Active Directory permissions                      |
| SA_ADPerms_Sets                        | Junction table to associate permissions with ACLs |

Views are the recommended way for Enterprise Auditor users to obtain the information gathered by the
ADPermissions Data Collector. They contain additional information for building queries easily. The
following is an explanation of the corresponding views created for some of the tables generated by
the ADPermissions Data Collector:

| Views                             | Details                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| SA_ADPerms_AuditChangesView       | The view of changes to audits that were applied to the objects |
| SA_ADPerms_AuditsExtView          | The extended view of audits applied to the objects             |
| SA_ADPerms_AuditsView             | The view of object audits                                      |
| SA_ADPerms_OwnershipChangesView   | The view of object ownership changes                           |
| SA_ADPerms_PermissionsChangesView | The view of changes to permissions applied to the objects      |
| SA_ADPerms_PermissionsExtView     | The extended view of permissions applied to the objects        |
| SA_ADPerms_PermissionsView        | The view of object permissions                                 |

# ADPermissions: Summary

The Summary page is where configuration settings are summarized. It is a wizard page for all of the
categories.

![ADPermissions Data Collector wizard Summary page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

Click **Finish** to save configuration changes. If no changes were made, it is a best practice to
click **Cancel** to close the Active Directory Permissions Data Collector Wizard ensuring that no
accidental clicks are saved.

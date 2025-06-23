# NoSQL: Category

The Category page in the NoSQL Data Collector Wizard lists the following query categories,
sub-divided by auditing focus:

![NoSQL Data Collector Wizard Category Page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/category.webp)

The query categories are:

- Sensitive Data

  - Sensitive Data Collection – Scan databases for sensitive data

    - The Sensitive Data category options require the Sensitive Data Discovery Add-on to be
      installed on the Enterprise Auditor Console before the NoSQL Data Collector can collect
      sensitive data. See the
      [Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/install.md)
      topic for additional information.

- MongoDB

  - Utilities

    - Remove Storage Tables — Removes the tables created for the MongoDB Data Collector

  - Database Sizing

    - Database Sizing — Determines MongoDB database size

- NoSQL

  - NoSQL Utilities

    - Remove NoSQL Storage Tables — All connection related and filter data will be removed for
      NoSQL databases

# NoSQL Custom Connection Profile & Host List

The NoSQL Data Collector requires a custom connection profile and host list.

## Connection Profile

The credential used for MongoDB Server auditing can be either an Active Directory account or a SQL
account. Create a Connection Profile and set the following information on the User Credentials
window.

Active Directory

For an Active Directory account, set the following on the User Credentials window:

- Select Account Type – Active Directory Account
- Domain – Drop-down menu with available trusted domains will appear. Either type the short domain
  name in the textbox or select a domain from the menu.
- User name – Type the user name
- Password Storage – Choose the option for credential password storage:

  - Application – Uses the configured Profile Security setting as selected at the **Settings** >
    **Application** node. See the
    [Application](/docs/accessanalyzer/11.6/administration/settings/application.md)
    topic for additional information.
  - CyberArk – Uses the CyberArk Enterprise Password Vault. See the
    [CyberArk Integration](/docs/accessanalyzer/11.6/administration/settings/connections.md)
    topic for additional information. The password fields do not apply for CyberArk password
    storage.

- Password – Type the password
- Confirm – Re-type the password

SQL

For a SQL account, set the following on the User Credentials window:

- Select Account Type – SQL Authentication
- User name – Enter user name
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the
  [Application](/docs/accessanalyzer/11.6/administration/settings/application.md)
  topic for additional information.)
- Password – Type the password
- Confirm – Re-type the password

See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
and
[Application](/docs/accessanalyzer/11.6/administration/settings/application.md)
topics for additional information.

## Host List

Jobs using the NoSQL Data Collector must create a host list with the servers containing the target
databases. Setup the list of MongoDB hosts that needs to be monitored. Be sure to use a specific
host name (if forcing the connection to a secondary host) or just the cluster name if connecting to
the cluster. See the
[Host Management](/docs/accessanalyzer/11.6/administration/host-management/management.md)
topic for additional information.

Additionally, the database clusters / instances must be added to the Filter page in the query
configuration. See the
[NoSQL: Filter](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md)
topic for additional information.

# NoSQL: Criteria

The Criteria page is where the criteria to be used for discovering sensitive data is configured. It
is a wizard page for the category of Sensitive Data Collection.

This page requires the Sensitive Data Discovery Add-On to be installed on the Enterprise Auditor
Console to define the criteria and enable the Criteria Editor. See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/install.md)
topic for additional information.

![NoSQL Data Collector Wizard Criteria page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/ewsmailbox/criteria.webp)

The options on the Criteria page are:

- Use Global Criteria Selection – Select this option to inherit sensitive data criteria settings
  from the **Settings** > **Sensitive Data** node. See the
  [Sensitive Data](/docs/accessanalyzer/11.6/administration/settings/sensitive-data-criteria.md)
  topic for additional information.
- Use the following selected criteria – Select this option to use the table to select which
  sensitive data criteria to scan for

  - Select All – Click **Select All** to enable all sensitive data criteria for scanning
  - Clear All – Click **Clear All** to remove all selections from the table
  - Select the checkboxes next to the sensitive data criteria options to enable it to be scanned
    for during job execution

The table contains the following types of criteria:

**NOTE:** Until the Sensitive Data Discovery Add-On is installed, only the headers for the System
Criteria and User Criteria nodes are visible in the table.

- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

  Use the Sensitive Data Criteria Editor in **Settings** > **Sensitive Data** to create and edit
  user-defined criteria. See the
  [Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md)
  topic for additional information.

**NOTE:** Adding unnecessary criteria can adversely impact the scanner performance and can cause the
scanning job to take a long time. If performance is adversely affected, revisit the sensitive data
scanning criteria and remove criteria that is not required.

# NoSQL: Filter

The Filter page is where the query can be scoped to target specific databases or instances. It is a
wizard page for the Sensitive Data Collection category.

It is necessary to populate the available Mongo databases/instances before the query can be scoped.
See the [Manage Connections Window](#manage-connections-window) topic for additional information.

![NoSQL Data Collector Wizard Filter page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/ewsmailbox/filter.webp)

The Filter page has the following buttons:

- Connections — Opens the Manage Connections window to add or modify database instances. See the
  [Manage Connections Window](#manage-connections-window) topic for additional information.
- Retrieve — Click to populate the Server pane with the database instances added in the Manage
  Connections window
- Validate Selections — Validate the include /exclude filters shown in the Selections pane
- Find — Select an item in the Servers list and click find to search for any objects that match the
  search string
- Save — Click to save the selected filters
- Orientation — Alternate between a vertical and horizontal split

The configurable filter options are:

- Servers — Displays known databases and instances for query scoping. Click **Retrieve** to
  populate. Right click to open context menu:

  - Exclude — Excludes selected databases/instances and displays them in red
  - Include — Reverts an exclusion. By default, all sub tables are included.
  - Build Pattern — Opens the Build Pattern dialogue to build a custom filter to be applied to the
    selected database objects. See the [Build or Edit Pattern](#build-or-edit-pattern) topic for
    additional information.

- Selections — Displays selected database objects for which the query has been scoped. Right click
  to open context menu:

  - Remove Pattern — Selected database/instance will be removed from the query
  - Edit Pattern — Opens the Edit Pattern dialogue with the following options (See the
    [Build or Edit Pattern](#build-or-edit-pattern) topic for additional information):

    - Exclude — Excludes selected databases/instances and displays them in red
    - Include — Reverts an exclusion. By default, all sub tables are included.
    - Pattern — Build a custom filter to be applied to the selected database objects

## Manage Connections Window

The Manage Connections window enables users to add MongoDB database instances to search for
sensitive data. Click **Connections** to open the window.

![Manage Connections window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/nosql/manageconnections.webp)

The Manage Connections table lists the previously added database instances and their attributes.

Select a row in the table to edit that instance, or create a new instance to add to the table. For
additional information on how to connect to a MongoDB database, see the MongoDB
[Get Connection String](https://docs.mongodb.com/guides/server/drivers/) article.

- Is Active — Select the checkbox to include the database on the Servers Pane on the Filter page
- Server Label — The name of the server
- Host — Name or IP address of the host where the database is located
- Port Number — Port number for the database. The default port is 27017. If a non-default port is
  being used, it should be specified in the Port Number section.
- Auth Database — The database used for authorization. Typically it is the **admin** database.
- Read Preference — Read preference describes how MongoDB clients route read operations to the
  members of a replica set by default, an application directs its read operations to the primary
  member in a replica set (that is, read preference mode **primary**). Howevert, clients can specify
  a read preference to send read operations to secondaries. Click the link for additional
  information.
- Mongo SRV — Specifies that the information entered is for clusters or shards

In the Manage Connections table, the following information is also listed:

- Was Inspected — Indicates whether information for a connection was validated. **Y** indicates the
  information has been validated. **N** indicates the information has not been validated.
- Last Inspected — Indicates the date and time of when the connection information was last
  inspected. If blank, the connection information has not yet been validated.
- Enable Impersonation – Impersonation does not apply to MongoDB and this column will be blank.

The Manage Connections window has the following buttons:

- Test Connection — Click to verify the connection to the database with the connection profile
  applied to the job group
- Edit Connection — Click to edit information for the selected connection
- Delete Connection — Click to delete the selected connection
- Create New — Click to create a new connection

#### Build or Edit Pattern

The Build / Edit Pattern window enables users to apply a custom scoping filter to the query.

![Edit Existing Pattern window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/nosql/editpattern.webp)

The Build / Edit Pattern window has the following features:

- Selected Location — The location within the database / collection
- Exclude — Excludes selected database / instances and displays them in red
- Include — Reverts an exclusion. By default, all sub tables are included.
- Pattern — Build a custom filter to be applied to the selected database objects

  **NOTE:** Color-coding indicating Excluded and Included objects does not display until after a
  selection is validated using the **Validate Selections** button on the Filter page.

# NoSQL: Options

Use the Sensitive Data Scan Settings (Options) page to configure additional settings for the
sensitive data scan. It is a wizard page for the Sensitive Data Collection category.

![NoSQL Data Collector Wizard Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/options.webp)

The sensitive data scan settings are:

Scan Options

- Data Settings:

  - Scan all documents for sensitive data — Scan all the documents in a collection in the targeted
    database or cluster
  - Limit of documents to scan — Scan limited number of documents in each database or cluster.
    This option is ideal when discovering sensitive data and has minimal impact on the MongoDB
    cluster performance. However, if the Subject Profile Request feature is being leveraged, then
    all the documents in all the database or cluster need to be scanned.
  - Scan documents randomly — Enterprise Auditor requests a set of documents from each database
    when scanning for sensitive data. The database engine does not return random data from a
    collection. Instead, Enterprise Auditor returns sequential documents in a collection. In order
    to ensure a statistical discrete uniform distribution of data being scanned, this option can
    be selected. When selected, the Enterprise Auditor sensitive data scanner requests randomized
    documents from each collection in all the targeted databases.

- Scan database names for sensitive data – Scans database names for sensitive data if the database
  names are included as part of the keyword list in the scanning criteria
- Scan collection names for sensitive data – Scans collection names within the database for
  sensitive data if the collection names are included as part of the keyword list in the scanning
  criteria

DLP Options

- Store discovered sensitive data – Stores potentially sensitive data in the Enterprise Auditor
  database. Any sampled sensitive data discovered based on the matched criteria is stored in the
  Enterprise Auditor database. This functionality can be disabled by clearing this checkbox.

  **NOTE:** The **Store discovered sensitive data** option is required to view Content Audit
  reports in the Access Information Center for MongoDB data.

  **CAUTION:** Changing scan options, criteria, or filters when resuming a scan may prevent the
  scan from resuming properly.

- Resume scan from last point on error — Resumes scan from where the previous scan left off when the
  scan was stopped as a result of an error

_Remember,_ the Sensitive Data Discovery Add-on is required to use the sensitive data collection
option.

# NoSQL Data Collector

The NoSQL Data Collector for MongoDB provides information on MongoDB Cluster configuration, limited
user permissions, scans collections for sensitive data, and identifies who has access to sensitive
data. It also supports the execution of custom queries against all targeted MongoDB cluster nodes.

The NoSQL Data Collector has been preconfigured within the MongoDB Solution. Both this data
collector and the solution are available with a special Enterprise Auditor license. See the
[MongoDB Solution](/docs/accessanalyzer/11.6/solutions/databases/mongodb-analysis.md)
topic for additional information.

Protocols

- TCP/IP

Ports

- MongoDB Cluster
- Default port is 27017 (A custom port can be configured)

Permissions

- Read Only access to ALL databases in the MongoDB Cluster including:

  - Admin databases
  - Config databases
  - Local databases

- Read Only access to any user databases is required for sensitive data discovery
- Read access to NOSQL instance
- Read access to MongoDB instance
- Requires NOSQL Full-Text and Semantic Extractions for Search feature to be installed on the target
  NOSQL instances when using the Scans full rows for sensitive data option on the Options wizard
  page

Sensitive Data Discovery Considerations

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

## NoSQL Query Configuration

The NoSQL Data Collector is configured through the NoSQL Data Collector Wizard. The wizard contains
the following pages, which change based upon the query category selected:

- [NoSQL: Category](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md)
- [NoSQL: Options](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md)
- [NoSQL: Criteria](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md)
- [NoSQL: Filter](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md)
- [NoSQL: Results](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md)
- [NoSQL: Summary](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md)

# NoSQL: Results

The Results page is where the properties that will be gathered are selected. It is a wizard page for
all of the categories.

![NoSQL Data Collector Wizard Results page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/results.webp)

Properties can be selected individually, or the **Select All**, **Clear All**, and **Reset to
Defaults** buttons can be used. All selected properties are gathered. Available properties vary
based on the category selected.

# NoSQL: Summary

The Summary page is where the configuration settings are summarized. It is a wizard page for all of
the categories.

![NoSQL Data Collector Wizard Summary page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

Click **Finish** to save configuration changes. If no changes were made, it is a best practice to
click **Cancel** to close the NoSQL Data Collector Wizard ensuring that no accidental clicks are
saved.

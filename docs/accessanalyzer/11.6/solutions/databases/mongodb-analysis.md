# MongoDB_Configuration Job

The MongoDB_Configuration job is designed to collect MongoDB server instance and database
configuration settings for use in the following analysis jobs and respective reports.

## Queries for the MongoDB_Configuration Job

The MongoDB_Configuration Job uses the NoSQL Data Collector for queries.

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query Selection - Mongo DB](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mongodb/collection/configurationjob.webp)

The query is:

- Database Sizing — Returns size details for the selected MongoDB databases

# MongoDB_SensitiveDataScan Job

The MongoDB_SensitiveDataScan Job is designed to discover sensitive data in MongoDB databases based
on pre-defined or user-defined search criteria.

## Queries for the MongoDB_SensitiveDataScan Job

The MongoDB_SensitiveDataScan Job uses the NOSQL Data Collector for queries.

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mongodb/collection/sensitivedatascan_job.webp)

The query is:

- MongoDB SDD - Collects sensitive data from MongoDB

  - (Optional) This query can be modified to target specific databases/instances. See the
    [Configure the MongoDB SDD Query](#configure-the-mongodb-sdd-query) topic for additional
    information.

## Configure the MongoDB SDD Query

The MongoDB SDD Query is preconfigured to run using the default settings for the Sensitive Data
Collection category. Follow the steps to customize configurations.

**Step 1 –** Navigate to the **Databases** > **0.Collection** > **MongoDB** >
**MongoDB_SensitiveDataScan** > **Configure** node and select Queries.

**Step 2 –** In the Query Selection view, select the MongoDB SDD query and click Query Properties.
The Query Properties window opens.

**Step 3 –** Select the Data Source tab, and click Configure. The NoSQL Data Collector Wizard opens.

**CAUTION:** Do not make changes to wizard pages not listed in these steps. They have been
pre-configured for this job.

**Step 4 –** Navigate to the
[NoSQL: Options](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md).

![Sensitive Data Scan Settings](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/options.webp)

**Step 5 –** Select the desired scan options.

**Step 6 –** Navigate to the
[NoSQL: Criteria](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md)
page.

![Criteria Page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/ewsmailbox/criteria.webp)

**Step 7 –** To modify criteria, navigate to the
[NoSQL: Criteria](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md)
page. By default, the Sensitive Data Scan job is configured to scan for criteria configured in the
Global Criteria settings. See the
[Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md)
topic for additional information.

**NOTE:** The Sensitive Data Scan Settings are pre-configured for optimal performance for a
high-level table scan. Configuring these settings to increase the scope of the sensitive data scan
may significantly increase scan time.

**Step 8 –** Navigate to the
[NoSQL: Filter](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md)
page.

![Database Selection Settings](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/ewsmailbox/filter.webp)

**Step 9 –** MongoDB databases must be added to the query before they can be scanned. Click
**Connections** to open the Manage Connections window.

![Manage Connections window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/nosql/manageconnections.webp)

**Step 10 –** In the Manage Connections window, click **Create New** and add the following
information:

- Is Active Checkbox — Check to include the database on the Servers Pane on the Filter page.
- Server Label — The name of the server
- Host — Name or IP address of the host where the database is located
- Port Number — Port number for the database. The default port is 27017.
- Auth Database — Account used to access the database. Admin is recommended.
- Read Preference — Read preference describes how MongoDB clients route read operations to the
  members of a replica set. By default, an application directs its read operations to the primary
  member in a replica set (i.e. read preference mode "primary"). But, clients can specify a read
  preference to send read operations to secondaries. Click the link for additional informatoin.
- Mongo SRV Checkbox — Specifies that the information entered is for clusters or shards

**Step 11 –** Click to **Test Connection** to verify the connection to the database with the
connection profile applied to the job

**Step 12 –** Click **Save New Connection** to add the connection to the list, then close the Manage
Connections window.

**Step 13 –** On the Filter page, click Retrieveto populate the Servers pane with the databases and
collections.

**Step 14 –** (Optional) Right click on an object in the list to include or exclude it from the
sensitive data scan, or build /edit a pattern to create a custom filter. See the
[NoSQL: Filter](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md)
topic for additional information.

**Step 15 –** Click **Validate** and then **Save** to apply the scoping. Navigating away from this
page without saving will undo any changes made.

**Step 16 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The MongoDB SDD Query is now ready to run with the customized settings.

## Analysis Tasks for the MongoDB_SensitiveDataScan Job

Navigate to the Databases > > 0.Collection > MongoDB > MongoDB_SensitiveDataScan > Configure node
and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mongodb/collection/analysissensitivedatascan.webp)

The default analysis tasks are:

- NoSQL Instances — Brings the SA_NoSQL_Instances to view in SA
- Matches View — Brings the MongoDB matches view to the Enterprise Auditor console
- Match Hits View — Brings the MongoDB match hits view to the Enterprise Auditor console
- MongoDB SDD AIC Import — Imports MongoDB SDD into the AIC

# 0.Collection Job Group

The MongoDB Solution Collection group is designed to collect high level summary information from
targeted MongoDB Servers.  This information is used by other jobs in the MongoDB Solution Set for
further analysis and producing respective reports.

![0](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mongodb/collection/0.collecitonjobgroup.webp)

The jobs in the 0.Collection Job Group are:

- [MongoDB_Configuration Job](/docs/accessanalyzer/11.6/solutions/databases/mongodb-analysis.md)
  — Collects MongoDB server instance and database configuration settings for use in the following
  analysis jobs and respective reports.
- [MongoDB_SensitiveDataScan Job](/docs/accessanalyzer/11.6/solutions/databases/mongodb-analysis.md)
  — Discovers sensitive data in MongoDB databases based on pre-defined or user-defined search
  criteria

### Analysis Tasks for the MongoDB_Database_Sizing Job

Navigate to the **Jobs > Databases > MongoDB > Configuration > MongoDB_DatabaseSizing > Configure**
node and select Analysis to view the Analysis Tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mongodb/databasesizingjobanalysis.webp)

The default analysis tasks are:

- MongoDB Database Sizing Details — Provides details about MongoDB databases and sizing
- MongoDB Database Sizing Summary — Summarizes MongoDB database sizing by node or cluster

### Report for the MongoDB_Database_Sizing Job

In addition to the tables and views created the analysis task, the MongoDB_DatabaseSizing Job
produces the following pre-configured reports.

| Report          | Description                                              | Default Tags | Report Elements                                                                                                                                                                               |
| --------------- | -------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database Sizing | This report highlights the size of databases in MongoDB. | None.        | This report is comprised of three elements: - Bar Chart - Displays top databases by size (MB) - Bar Chart - Displays database size by host (GB) - Table - Displays details on database sizing |

# Sensitive Data > MongoDB_SensitiveData Job

The Sensitive Data Job Group is designed to provide insight into where sensitive data exists and who
has access to it across all the targeted MongoDB databases.

![Sensitive Data Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/postgresql/sensitivedata/sensitivedatajobgroup.webp)

The job in the Sensitive Data Job Group is:

- MongoDB_SensitiveData Job - Provides details on all the sensitive data that was discovered in the
  targeted MongoDB databases based on the selected scan criteria

### Analysis Tasks for the MongoDB_SensitiveData Job

Navigate to the MongoDB > **Databases** > **Sensitive Data**> MongoDB_SensitiveData > Configure node
and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mongodb/analysismongodbsensitivedatajob.webp)

The default analysis tasks are:

- Sensitive Data Details — Returns details around sensitive data in MongoDB
- Database Summary — Summarizes MongoDB sensitive data by database
- Enterprise Summary — Summarizes MongoDB sensitive data across the enterprise

### Reports for the for the MongoDB_SensitiveData Job

In addition to the tables and views created the analysis task, the MongoDB_SensitiveData Job
produces the following preconfigured reports.

| Report                  | Description                                                                  | Default Tags   | Report Elements                                                                                                                                                                                       |
| ----------------------- | ---------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Summary      | This report shows a summary of the criteria matches found in the Enterprise. | None           | This report is comprised of two elements: - Bar Chart - Displays exceptions by Match Count - Table - Displays exception details                                                                       |
| Sensitive Data Overview | This report highlights objects which contain sensitive data criteria.        | Sensitive Data | This report is comprised of three elements: - Bar Chart - Displays top databases by Sensitive Data Hits - Table - Provides details on top databases by Sensitive Data Hits - Table - Provides details |

# MongoDB Solution

Data privacy and security is quickly evolving to be on equal footing with traditional security
measures focused on the network, hardware, or software the data is contained within. Organizations
aligning to concepts like Data-Centric Audit and Protection (DCAP) as defined by Gartner, or the
requirements of strict compliance regulations like EU GDPR, are looking to implement processes that
help them understand where sensitive data is stored, who or what is leveraging their privileges to
access the data, and how each database has been configured.

As part of Stealthbits comprehensive Data Access Governance suite for structured and unstructured
data, Enterprise Auditor for MongoDB automates the process of understanding where MongoDB databases
exist and provides an overview of the MongoDB environment in order to answer questions around data
access:

- Who has access to your data?
- Where is sensitive data being stored?

With visibility into every corner of MongoDB, organizations can proactively highlight and prioritize
risks to sensitive data. Additionally, organizations can automate manual, time-consuming, and
expensive processes associated with compliance, security, and operations to easily adhere to best
practices that keep MongoDB Server safe and operational.

Supported Platforms

- MongoDB 5.0
- MongoDB 6.0
- MongoDB 7.0
- Windows and Linux distributions supported by MongoDB

Requirements, Permissions, and Ports

See the
[Target MongoDB Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for additional information.

Sensitive Data Discovery Considerations

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

By default, the job is configured to use 10 threads, which can be adjusted based on available
resources on the Enterprise Auditor server.

**NOTE:** The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.

Location

The Structured Sensitive Data Discovery License is required to run the MongoDB Solution. The MongoDB
Solution can be installed from the Enterprise Auditor Instant Job Wizard. Once it has been installed
into the Jobs tree, navigate to the solution: Jobs > **Databases** > MongoDB.

The 0.Collection Job Group scans MongoDB instances on the target hosts, and collects
configuration and sensitive data. The other job groups analyze the collected data and generate
reports.

The Database Solution license includes all supported database platforms supported by Enterprise
Auditor. Additionally, the Sensitive Data Discovery Add-On enables the solution to search database
content for sensitive data.

## Job Groups

The Enterprise Auditor MongoDB Solution Set is a set of pre-configured jobs and reports that
provides visibility into MongoDB Sensitive Data.

![MongoDB Overview](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/mongodb/mongdbjobgroupoverview.webp)

The following job groups comprise the MongoDB Solution:

- [ 0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/databases/mongodb-analysis.md)
  — Collects high level summary information from targeted MongoDB Servers. This information is used
  by other jobs in the MongoDB Solution Set for further analysis and producing respective reports.
- [Analysis Tasks for the MongoDB_Database_Sizing Job](/docs/accessanalyzer/11.6/solutions/databases/mongodb-analysis.md)
  — Provides insight into MongoDB server configuration settings
- [Sensitive Data > MongoDB_SensitiveData Job](/docs/accessanalyzer/11.6/solutions/databases/mongodb-analysis.md)
  — Provides insight into where sensitive data exists and who has access to it across all the
  targeted MongoDB databases

# Recommended Configuration for the MongoDB Solution

The MongoDB Solution has been configured to inherit down from the MongoDB > Settings node. However,
it is best practice to assign the host list and the Connection Profile at the data collection level,
the 0.Collection Job Group. Once these are assigned to the job group, it can be run directly or
scheduled.

Dependencies

- Query must be configured with list of target database clusters / instances
- For Sensitive Data Discovery Auditing – Sensitive Data Discovery Add-On installed on the
  StealthAUDIT Console server

Some of the 0.Collection Job Group queries can be scoped to target specific databases/instances.
However, it is necessary to add the databases to the query first.

Targeted Host(s)

The 0.Collection Job Group must be set to run against a custom host list containing the MongoDB
database instances / clusters.

Connection Profile

The NoSQL Data Collector requires a specific set of permission. See the Permissions section for
necessary permissions. The account used can be either an Active Directory account or a SQL account.
Once the account has been provisioned, create a custom Connection Profile containing the credentials
for the targeted environment. See the
[NoSQL Custom Connection Profile & Host List](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md)
topic for additional information.

The Connection Profile should be assigned under the MongoDB > 0.Collection > Settings > Connection
node. It is set to Use the Default Profile, as configured at the global settings level. However,
since this may not be the Connection Profile with the necessary permissions for the assigned hosts,
click the radio button for the Select one of the following user defined profiles option and select
the appropriate Connection Profile drop-down menu.

See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information.

Schedule Frequency

One of the most important decisions to make is how frequently to collect this data. The MongoDB Job
Group can be scheduled to run as desired depending on the types of auditing being conducted and the
scope of the target environment. The general recommendation is to schedule the solution to run
daily.

Run Order

The 0.Collection Jobs must be run first and in order. The other MongoDB Solution sub-job groups can
be run in any order, together or individually, after running the 0.Collection Job Group.

**_RECOMMENDED:_** Run the solution at the top level.

Workflow

1. Set a Connection Profile for the 0.Collection Job Group with the permissions listed in the
   Recommended Configurations section. See the
   [NoSQL Custom Connection Profile & Host List](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md)
   topic for additional information.
2. Set the Host list for the 0.Collection Job Group with the servers containing the target
   databases. Additionally, the database clusters / instances must be added to the Filter page in
   the query configuration. See the
   [NoSQL Custom Connection Profile & Host List](/docs/accessanalyzer/11.6/data-collection/databases/mongodb.md)
   topic for additional information.
3. (Optional) Configure the queries for the jobs in the 0.Collection Job Group
4. Schedule the 0.Collection Job Group to run daily or as desired

   **NOTE:** Running the 0.Collection Job Group is a prerequisite for the other job groups in the
   SQL solution

5. Review the reports generated by the 0.Collection Job Group’s jobs

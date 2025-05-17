---
sidebar_position: 5689
title: Queries Node
---

# Queries Node

The Queries node uses a Access Analyzer data collector to run scans against the targeted hosts. Different data collectors are designed for different types of collection. It is necessary for the Connection Profile associated with the target hosts to have a sufficient level of rights for the selected data collector. See the [Permissions by Data Collector (Matrix)](../../../DataCollector/PermissionMatrix)") topic for a chart with recommended permissions per data collector.

![Query Selection page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Jobs/ConfigureJob/QuerySelection.png "Query Selection page")

The Query Selection view lists all queries for the selected job. Though it is possible to have multiple queries in a single job, it is not usually recommended. The listed information includes:

* Name – Name of the query (as provided by the creator of the query)
* Source – Name of the Access Analyzer data collector
* Table – Name of the Native Data table
* Enumerates – Whether or not the data collector will return enumerated data, or multiple lines of data per target host
  * If **Yes**, only one query can write to a single table
  * If **No**, then multiple related queries can write to a single table
* Properties – Number of the properties to be returned
* Filters – Number of in-line filters applied to the data being returned by the query
* Script – Whether or not a VB Script was added to the query
  * If **Yes**, a VB Script was added to query execution
  * If **No**, a VB Script was not added to query execution
* Description – Description of the query (as provided by the creator of the query)

## Tables

Add and configure native data tables through the Tables section in the Query Selection view.

![Tables section of Query Selection page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Jobs/ConfigureJob/QuerySelectionTables.png "Tables section of Query Selection page")

The Tables section at the top has three options:

* Add Table – Adds an additional native data table and associated query to the selected job
* Rename Table – Opens the Rename Table window for changing the native data table name
* Delete Table – Deletes the selected table from the list, all associated query tasks, and the database table if it has already been created. This action does require confirmation.

  **CAUTION:** Do not delete the last table in a job’s Query Selection view. Doing so will also delete the Messages table. In order to delete the last table, it is necessary to delete the job.

## Queries

The Queries section is where the job’s preconfigured queries can be edited and where new queries can be added.

![Queries section of Query Selection page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Jobs/ConfigureJob/QuerySelectionQueries.png "Queries section of Query Selection page")

The Queries section has four options and includes the list of queries for the selected job:

* Add from Library – Opens the Libraries window to select preconfigured data collection queries. See the [Add Query from Library](../../../DataCollector/Overview#_Add_Query_from "Add Query from Library") topic for additional information.
* Create Query – Opens the Query Properties window for creating and configuring queries
* Delete Query – Deletes the selected query from the list. This action does require confirmation.
* Query Properties – Opens the Query Properties window for the selected query
  * This option is used for query modifications
  * See the [Create or Modify a Query](../../../DataCollector/Overview#_Create_or_Modify "Create or Modify a Query") topic for additional information
  * See the topics for the individual [Data Collectors](../../../DataCollector/Overview "Data Collectors") for additional information

## Right-click Menu

The Query Selection view also has its own right-click menu for taking action on the queries, tables, or the job.

![Right-click menu on the Query Selection page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Jobs/ConfigureJob/QueryRightClickMenu.png "Right-click menu on the Query Selection page")

The options in the Queries node right-click menu are:

* Add from Library – Opens the Libraries window
* Quick Add – Quickly add a new query from a list of non-configured data collector queries
* Create Query – Creates a new query to be configured
* Cut Query – Cuts selected query
* Copy Query – Copies selected query
* Paste Query – Pastes a cut or copied query to the selected location
* Delete Query – Deletes a selected query
* Properties – Opens the Query Properties window
* Add Table – Adds a Native Data table to the selected query
* Delete Table – Deletes the selected table
* Rename Table – Opens the Rename Table window
* Run Job – Starts job execution for the selected job
* Add Instant Job – Opens the [Instant Job Wizard](../../InstantJobs/Overview "Instant Job Wizard")
* Create Job (**Ctrl + Alt + A**) – Creates a new job at the same location as the selected job

## Host List

Jobs with configured queries require a host list to be assigned. This can be done at either the Job Group or Job level. Whichever location is used to set the host list for query execution should also be the location where the Connection Profile is assigned. See the [Job Properties](../Properties/Overview "Job Properties") topic for additional information.

* Job Groups
  * Host List Assigned – **[Job Group]** > **Settings** > **Host Lists Assignment**. See the [Host Lists Assignment](../../Group/HostListsAssignment "Host Lists Assignment") topic for additional information.
  * Connection Profile Selected –  **[Job Group]** > **Settings** > **Connection**. See the [Connection Node](../../Group/Connection "Connection Node") topic for additional information.
* Job Level
  * Host List Assigned – **[Job]** > **Configure** > **Hosts**. See the [Hosts Node](Hosts "Hosts Node") topic for additional information.
  * Connection Profile Selected – Connection tab of the Job’s Properties Window. See the [Connection Tab](../Properties/Connection "Connection Tab") topic for additional information.
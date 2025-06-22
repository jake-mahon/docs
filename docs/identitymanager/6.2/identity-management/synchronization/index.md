# Set Up Incremental Synchronization

How to implement an incremental synchronization
[ Job ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) for a given
[ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) via XML, to upload
the related system's resources to Identity Manager.

See an example on [ For Microsoft Entra ID ](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md) (formerly Microsoft Azure AD).

Netwrix Identity Manager (formerly Usercube) strongly recommends configuring as much as possible via
the UI instead of XML files. See how to
[ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md)via the UI.

## Prerequisites

First read how to [Create a Connector](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md).

## Build the Incremental Synchronization Job

Identity Manager provides a fully-written standardized job to perform incremental synchronization
through the UI. See here:

See how to launch incremental
[ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md)via the UI.

Any IGA action is configured through [ Job ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

Synchronization jobs contain tasks that are to be executed on agent side.

### Components

Any synchronization job should include:

1. export;
2. synchronization preparation;
3. synchronization.

The export is configured and performed by the
[ Export Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), the
synchronization preparation by the
[ Prepare Synchronization Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
and the synchronization by the
[ Synchronize Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

See the [ Upward Data Synchronization ](/docs/identitymanager/6.2/identity-management/synchronization/sync-configuration.md) topic
for additional information.

Identity Manager provides a scaffolding that generates the configuration for these steps, named
[Create Connector Synchro Incremental](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md).

This guide is about incremental synchronization, but complete synchronization can be configured with
the
[Create Connector Synchro Complete](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)
scaffolding.

### Permissions for the agent

In order to launch a job via the
[ Usercube-Invoke-Job ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) tool, the agent must
use a profile with the right permissions for each task.

Permissions within Identity Manager are configured through
[Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

> For example:
>
> ```
>
> Conf/Profile AgentJob.xml
>
> <Profile Identifier="AgentSynchro" DisplayName_L1="Agent Synchro" />
>
> ```
>
> ```
>
> ```

Netwrix Identity Manager (formerly Usercube) recommends the creation of a profile for
synchronization jobs, and another for provisioning jobs, in order to comply with the principle of
least privilege.

In order to run a synchronization job, the agent requires the permissions to:

- view the tasks via `/Jobs/Task/Query`;
- access progress reports via `/Jobs/JobInstance/Query`, `/Jobs/JobInstance/Update`,
  `/Jobs/TaskInstance/Query` and `/Jobs/TaskInstance/Update`;
- prepare the synchronization and synchronize via `/Connectors/Connector/Query` and
  `/Connectors/SynchronizeSession`.

Identity Manager provides scaffoldings that generate the configuration for granting these
permissions:
[ Synchronization Access Control Rules ](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)
and
[ Job View Access Control Rules ](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md).

> The following example permits the `AgentSynchro` profile to run any synchronization job:
>
> ```
>
> Conf/Profile AgentSynchro.xml
>
> <SynchronizationAccessControlRules Profile="AgentSynchro"><JobViewAccessControlRules Profile="AgentSynchro">
>
> ```
>
> ```
>
> ```

### Agent's authentication to the server

Every request from agent to server within the execution of a job needs to be authenticated with an
[ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect
ClientId/Secret pair.

So first, the configuration must contain a `ClientId/Secret` pair.

Usable `ClientId/Secret` pairs are configured through an
[ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

> The following example uses a secret hashed
> by[ Usercube-New-OpenIDSecret ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md):
>
> ```
>
> Conf/OpenIdClients.xml
>
> <OpenIdClient Identifier="Job" HashedSecret="K7gNU3sdo+Op8wNhqoVWhr5v6s1xYv72ol/pe/Unols=" DisplayName_L1="ClientId for Jobs" Profile="Administrator" />
>
> ```
>
> ```
>
> ```

Then, the agent's profile must be linked to one of the `ClientId/Secret` pairs.

Agents' settings are configured in their
[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md).json
file.

> The following example sets the `Job/secret` pair to be used by tasks and jobs:
>
> ```
>
> appsettings.agent.json
>
> { ... "OpenId":{ "OpenIdClients": { "Job": "secret" }, "DefaultOpenIdClient": "Job" } }
>
> ```
>
> ```
>
> ```

### Permissions for users

In order to launch the job, a user must have the right permissions.

Permissions within Identity Manager are configured through
[Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

In order to launch a synchronization job, a user requires the appropriate permission:
`/Jobs/RunJob/Launch`.

Identity Manager provides a
[ Job Execution Access Control Rules ](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)that
generates the configuration for granting this permission.

> For example:
>
> ```
>
> Conf/Profile AgentSynchro.xml
>
> <JobExecutionAccessControlRules Profile="AgentSynchro">
>
> ```
>
> ```
>
> ```

## Schedule the Job

Scheduling the job execution can rely either on Identity Manager's scheduler or on an external
scheduler.

### Using scheduler

Identity Manager's scheduler is configured through the
[ Job ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)'s `CronTabExpression` property.

[See Crontab documentationfor more details ](https://crontab.guru/every-15-minutes).

### Using an external scheduler

An external scheduler relies on using an external mechanism to schedule
the[ Usercube-Invoke-Job ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md).exe.

## Validate the Job

Validate the job's execution by proceeding as follows:

1. Deploy the XML configuration to the database, by using
   the[ Deploy Configuration Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).
2. In the UI, access the **Job Execution** page from the dashboard's **Administration** section.
3. Find the job named with the string specified in the XML configuration in the job's `DisplayName`
   property, and launch it.
4. Once the job is completed, the system's objects should be synchronized to the database's
   `UR_Resources` table.

# Usercube-Prepare-Synchronization

`Usercube-Prepare-Synchronization` is used as the second step of the
[Synchronization](/docs/identitymanager/6.2/identity-management/synchronization/index.md) process. It cleanses exported CSV files before
sending them to the server for database loading. It is performed on the _Agent_ side.

## Behavior Details

The task reads files from the source directory, usually the temp folder > ExportOutput folder. See
the
[Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md)
topic for additional information.

### Cleanse data

The following actions are performed on the _CSV source files_:

1. Remove columns that are not used in
   [ Entity Type Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
   or
   [ Entity Association Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).
2. Remove entries that have a null primary key.
3. Remove duplicates.
4. Sort entries according to the primary key.

The result of the _Prepare-Synchronization_ is stored in the
[Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md)
as three files:

- For every entity type of the relevant _Connector_ involved in an
  [ Entity Type Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
  or an
  [ Entity Association Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md),
  a `.sorted.csv` file is generated, containing the final, cleansed and sorted result.
- Duplicates are kept in a separate `.duplicates.csv` file.
- Null primary key entries are kept in a separate `.nullpk.csv` file.

All files produced by the task are in the work folder > Collect directory. See the
[Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md)
topic for additional information.

### Compute changes

In _incremental_ mode, changes might need to be computed by the _Agent_:

- If the Export step has provided computed changes, no further process is required. The changes will
  be sent as-is to the server.
- If the Export step has provided a full extract of the managed systems, the
  _Prepare-Synchronization_ step computes changes. This computation is based on the result of the
  last data cleansing, generated by the previous _Prepare-Synchronization_, and stored in the
  `previous` folder in the _export directory_. See the
  [Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md)
  topic for additional information.

For _incremental_ mode, it is recommended, whenever possible, to use managed systems to compute
changes. Dedicated workstations and knowledge of the inner data organization allow managed systems
to compute changes with performance that Identity Manager can't match. Using managed systems for
these operations avoids generating heavy files and alleviates Identity Manager's processing load.

The result is a set of clean lists of changes stored as a `.sorted.delta` file containing a
_command_ column. The _command_ column can take the following values:

- _insert_
- _update_
- _delete_
- _merge_

These values are instructions for the _Synchronization_ step to apply the changes to the database.

The `.sorted` file (that is, the **original** clean export file, **not** the changes) is stored in
the `previous` folder inside the _export directory_. It will be used as a reference for the next
_incremental_ Prepare-Synchronization to compute the changes, if needed. See the
[Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md)
topic for additional information.

Tampering with the `previous` folder content would result in false changes leading to false
computation. It would result in data corruption in the Identity Manager database. To restore the
Identity Manager database and reflect the managed system data updates, a _complete\_\_Sync Up_ would
be required.

### Prepare the server

At the beginning of every _Prepare-Synchronization_ process, the _Server_ is notified via HTTP.

Upon receiving the notification, the server creates a directory on its host environment, identified
by a unique GUID, to contain `.sorted` or `.sorted.delta` files that will be sent by the agent.

This is designed to prevent network errors that would cause an _incremental_ database update to
happen more than once.

This means that several _Export_ and _Prepare-Synchronization_ tasks can be executed simultaneously.
These tasks will be processed by the server one at a time, in the right order.

Any notification of a _complete_ Prepare-Synchronization would cancel the previous non-processed
_incremental_ Prepare-Synchronizations. As a _complete_ Prepare-Synchronization reloads the whole
database, it renders _incremental_ changes computation moot.

### Send clean exports

`.sorted` or `.sorted.delta` files are sent over HTTP to the _Server_ for the last step.

### Example

The figure models the complete _Prepare-Synchronization_ steps applied to an Active Directory
export. The matching _Connector_ defines an Entity Type _AD Entry_ and two associations (_members_
and _manager_).

![Active Directory Prepare-Synchronization Example](/img/product_docs/identitymanager/identitymanager/integration-guide/synchronization/upward-data-sync/ad_preparesynchro_example.webp)

## Examples

`Usercube-Prepare-Synchronization` can be used as an executable file as follows:

```
./identitymanager-Prepare-Synchronization --api-url myserver.usercube.com --api-client-id myclientid --api-secret myclient secret --connector --agent myagent --synchronization-mode complete

```

## Arguments

| Name                                            | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --agent required                                | **Type** [ Agent ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) **Description** Identifier of the agent where the task runs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --connector required                            | **Type** [ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) **Description** Identifier of the linked connector. The task is linked to a connector whose entity types are synchronized.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --synchronization-mode required                 | **Type** [ Upward Data Synchronization ](/docs/identitymanager/6.2/identity-management/synchronization/sync-configuration.md)Mode **Description** Synchronization mode for this task can be one of the following: - Initial - Complete - Incremental This must be the same as the associated Export and Synchronize tasks. Use _initial_ if this is the first time the target managed system is synchronized. Use _complete_ to load the data from the managed system as a whole. Use _incremental_ to consider only incremental changes from the last synchronization. In _incremental_ mode, the Prepare-Synchronization task computes changes in the source managed system since the last _Prepare-Synchronization_. |
| --sources-directory default value: ExportOutput | **Type** String **Description** Directory path, relative to temp folder, from which export files to cleanse are read. See the [Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md) topic for additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --working-directory default value: Collect      | **Type** String **Description** The directory path, relative to work folder, to which intermediary and cleansed files are stored. See the [Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md) topic for additional information                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---                                             | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --api-client-id required                        | **Type** String **Description** Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an OpenID Connect ClientId/Secret pair, linked to a profile with the relevant permissions. See the [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                     |
| --api-secret required                           | **Type** String **Description** Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an OpenID Connect ClientId/Secret pair, linked to a profile with the relevant permissions. See the [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                  |
| --api-url required                              | **Type** String **Description** URL of Identity Manager server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---                                             | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --log-level optional                            | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

# Synchronization

The documentation is not yet available for this page and will be completed in the near future.

See more information about [ Upward Data Synchronization ](/docs/identitymanager/6.2/identity-management/synchronization/sync-configuration.md).

See how to [ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md)for a given managed
system.

See how to anticipate changes due to synchronization thanks to
[ Thresholds ](/docs/identitymanager/6.2/identity-management/synchronization/sync-thresholds.md).

# Synchronize Data

How to launch data synchronization, i.e. read managed systems' data and load it into Identity
Manager.

## Overview

Data synchronization is a data flow from the managed systems into Identity Manager.

### Process

A connector's main purpose is to read and export the data previously mapped with
[Create an Entity Type](/docs/identitymanager/6.2/reference/index.md) in order to synchronize it
with Identity Manager. Connectors provide tools to perform a basic extraction of the system's data
in the form of CSV/XLSX files. These files are cleansed and loaded into Identity Manager.
Synchronization is a three-step ETL process going through export, synchronization preparation and
the synchronization itself.

![Synchronization Schema](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_schema.webp)

#### Export

The
[ Export Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
creates extractions, a snapshot of the managed system's data, used to insert and/or refresh the data
that is inside Identity Manager. Extractions are accessible when there is at least one connection
with an export-enabled
[ References: Packages ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).
Extracted data becomes meaningful when it is loaded into resources as specified by the entity type
structure.

Exported data is stored inside CSV files in the folder `/{InstallationFolder}/Temp/ExportOutput`.

#### Prepare synchronization

The
[ Prepare Synchronization Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)performs
a preparatory data cleansing to spot errors and list them in a generated file in the
`/{InstallationFolder}/Work/Synchronization` folder.

> For example, this task spots an identity if it is linked to an organization code which doesn't
> exist.

#### Synchronize

The `Synchronize` task loads data into Identity Manager's database.

See the
[ Upward Data Synchronization ](/docs/identitymanager/6.2/identity-management/synchronization/sync-configuration.md)
topic for additional information.

### Prerequisites

#### Extracted data must have keys

Every extracted resource must have an attribute that serves as a primary key so that Identity
Manager can uniquely identify the resource to be added/updated/deleted during synchronization. You
must have defined keys during Entity Type creation. See the
[Create an Entity Type](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

Extractions must not be modified before synchronization

Extractions must not be modified manually, for it may induce synchronization issues.

> For example, saving an XLSX file implies an automatic modification of format.

Also, synchronization must not be disturbed by a change in the source format, such as the deletion
of a column in the middle of the file.

Thresholds must never be deactivated

Thresholds are essential safety guards that control all changes, for example preventing the
overwriting of important data by mistake. Thresholds are by default activated to warn users when
synchronization or provisioning triggers too many modifications. If the number of modifications
exceeds the specified threshold, Identity Manager stops the synchronization and displays a warning
_"Threshold Exceeded"_ on the log page described below.

Once the changes have been reviewed, the blocked job can be resumed (or not).

Thresholds are configured with default values using the following
[ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
attributes:

- `MaximumDeletedLines`, `MaximumInsertedLines` and `MaximumUpdatedLines` for scalar properties;
- `MaxPercentageDeletedLines`, `MaxPercentageInsertedLines` and `MaxPercentageUpdatedLines` for
  scalar properties by percentage;
- `MaximumLinkDeletedLines`, `MaximumLinkInsertedLines` and `MaximumLinkUpdatedLines` for navigation
  properties;
- `MaxLinkPercentageDeletedLines`, `MaxLinkPercentageInsertedLines` and
  `MaxLinkPercentageUpdatedLines` for navigation properties by percentage.

## Participants and Artifacts

At this point, integrators should have all the elements they need to perform synchronization.

| Input                                      | Output            |
| ------------------------------------------ | ----------------- |
| Connector with its entity types (required) | Synchronized data |

See the [ Connect to a Managed System ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

## Launch Synchronization

Launch synchronization for a given managed system by proceeding as follows:

1. Access the list of connectors by clicking on **Connectors** on the home page in the
   **Configuration** section.

   ![Home - Connectors](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_connectors_v602.webp)

2. On the relevant connector page, in the **Entity Types** frame, click on **Jobs**.

   Here are all the tasks available for synchronization. They synchronize all connections and
   entity types for only this connector. It is possible to launch them individually in order to
   test them and debug a situation, or all together with **All Tasks**. According to the created
   connection(s) and package(s), all these tasks can be launched either in incremental or complete
   mode.

   ![Synchronize Job](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_executionjobs_v602.webp)

   - `Update Expressions`: computes the expressions used in the entity type mapping.
   - `All Tasks`: launches all previous tasks in a row.

   Notice that some connectors, depending on their connections and packages, can't be synchronized
   in incremental mode. As a consequence, when clicking on the **Jobs** button, you wouldn't have a
   choice between `Complete` and `Incremental`. See below this note.

   ![Synchronize Job (Only Complete)](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_executionjobs-complete_v602.webp)

## Manage Synchronization Automation

Export and synchronization are executed manually from the connector screens. By default, they are
also part of scheduled [ Jobs ](/docs/identitymanager/6.2/administration/jobs-tasks/job-configuration.md) provided by
Identity Manager:

- the complete job is scheduled to launch a synchronization once a day of all resources, modified or
  not;
- the incremental job is scheduled to launch a synchronization several times a day only of the
  resources modified since the last synchronization.

See the
[ Set Up Incremental Synchronization ](/docs/identitymanager/6.2/administration/jobs-tasks/job-configuration.md)
and
[ Set up Complete Synchronization ](/docs/identitymanager/6.2/administration/jobs-tasks/job-configuration.md)
topics for additional information.

Scheduling the jobs avoids manually triggering them everyday.

However, you can choose to withdraw a given connector from both the complete and incremental jobs by
clicking on **Deactivate** on the connector's dashboard. This is particularly useful when modifying
a connector. You can also re-insert it at any time with the same button which is now named
**Activate**.

![Jobs Results Dashboard](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_dashboard_v522.webp)

You can fine-tune the synchronization and/or provisioning of the connector by clicking on the
**Edit** button.

![Edit button](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_edit_v600.webp)

Click on **Job Results** to access the progress of this connector's jobs.

All jobs are accessible on the **Job Execution** page in the **Administration** section.

![Home - Job Execution](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

## Verify an Entity Type's Synchronization

In order to verify both the synchronization configuration and
[Create an Entity Type](/docs/identitymanager/6.2/reference/index.md):

1. Launch synchronization.
2. Access the connector's logs (from **Job Results** on the connector's dashboard) to ensure that
   synchronization completed successfully.

   ![Jobs Results](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_results_v603.webp)

3. Check that the entity types have been added to the left menu of the home page.

   ![Test Entity Type](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/entitytypecreation_test_v602.webp)

4. Access the relevant entity types (from the menu items on the left of the home page) to check
   synchronized resources, by navigating in the UI from the accounts through a sample of
   associations, via the eye icon:

   ![Eye Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/iconeye_v600.svg)

   You should first look for configuration validation, and only later validation of the actual data
   being synchronized.

   > For example, let's say we created a connector for SAB that contains two entity types called
   > `SAB - Users` and `SAB - Groups`. Then, the home page shows them on the left.
   >
   > ![SAB Example - Home Page](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_examplesab_v522.webp)
   >
   > Clicking on `SAB - Users` displays the list of all synchronized resources.
   >
   > ![SAB Example - Data List](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_examplesab2_v602.webp)
   >
   > Clicking on any resource displays its detailed attributes, for example `Abbott Mark`:
   >
   > ![SAB Example - Resource Attributes](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_examplesab3_v602.webp)
   >
   > Clicking on any eye icon displays the corresponding resource. SAB was created here with a
   > simple user-group schema that links n users to n groups. So here, we can check these links by
   > navigating from a given user to one of their groups, to one of said group's users, to one of
   > said user's groups, etc.

## Troubleshooting

Make sure you followed the prerequisite guidelines for synchronization.

Keep in mind that a problem observed in synchronized data might also come from a mistake made
previously in the connector's configuration. Therefore, logs can give more details. Logs are
accessible from the **Job Results** button on the dashboard of a given connector.

Don't hesitate to launch synchronization-related tasks individually and observe the corresponding
logs in order to debug a situation.

If the connector and/or entity type doesn't appear in the menu items, then:

![Test Entity Type](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_entitytypes_v602.webp)

Access the relevant connector's page and click on the **Reload** button to take into account the
last changes in the entity type mappings.

If a newly added property doesn't appear in users' data, then:

Access the relevant connector's page to click on the **Reload** button to take into account the most
recent changes in the entity type mappings.

If a synchronization is blocked by an exceeded threshold, then:

![Threshold warning](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_threshold_v603.webp)

Find out the reasons to decide whether or not to bypass the threshold. Proceed as follows:

1. On the logs page (accessible from the **Job Results** button), click on the line of a task
   instance to see its logs.
2. Study synchronization counters and the list of all synchronization changes. These tools help you
   make a decision about whether to bypass synchronization thresholds.

   ![Job progress](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_thresholdlog_v603.webp)

   In most cases, the first synchronization exceeds thresholds because no data exists in Identity
   Manager yet. Thus, a high quantity of modifications is expected and the synchronization is to be
   resumed.

   Numerous modifications can also be triggered by:

   - a change in date format;
   - the input of blank files by mistake, because it would overwrite and erase all existing data;
   - a swap of two headers in an input file.

3. If, after verifying, all changes are legitimate, click on the **Resume** button at the top of the
   job progress page. This will restart the job and allow the changes to be synchronized.

   Be cautious, check twice for mistakes before resuming.

   ![Resumed Job](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_thresholdresumed_v602.webp)

If an export doesn't complete, then:

- Check the connection's settings.
- If you manually typed the source column of a property in the entity types, then make sure that the
  source column exists in the corresponding managed system.

  ![Source Column](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/entitytype_sourcecolumn_v602.webp)

If a given property from users' data is displayed in an unexpected way, then:

Check the format of both the application metadata and the external system.

![Property Format](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/entitytype_format_v523.webp)

> For example, if you find that a given date doesn't comply with what you set, then maybe the format
> in the External System section wasn't correctly selected, thus inducing a conversion error during
> the export computation.

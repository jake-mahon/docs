# Create a Connection

How to create a [connection](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) inside a [connector](/versioned_docs/usercube_6.1/usercube/integration-guide/connectors/index.md) and choose the appropriate package.

## Overview

A connection is the information that allows to connect to a managed system, which includes credentials and path.

There is a minimum of one connection per connector. In many cases, there is one connection for [synchronization](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/synchronization/index.md) and one connection for [provisioning](/versioned_docs/usercube_6.1/usercube/user-guide/administrate/provisioning/index.md).

A connection is associated with a package, representing the technology to use for the data transfer.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the purpose of the application.

| Input | Output |
| --- | --- |
| [Connector container](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connector-declaration/index.md) (required)    [Connector model](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connector-modeling/index.md) (required) | Connection(s) |

## Create a Connection

Create a connection by proceeding as follows:

1. Click on the addition button in the __Connections__ frame on the connector's summary page.

   ![Add a New Connection](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/connection_newconnection_v602.png)
2. Fill in the connection information fields on the left, then [select a package](#select-a-package) (AD, CSV, etc.) and fill the associated agent settings on the right.

   ![Connection Creation](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/connectioncreation_connectioncreation_v602.png)

   - ```Identifier```: must be unique among connections, without any whitespace, start with a letter, and contain only letters, numbers, ```.``` and/or ```-```.
   - ```Name```: will be displayed in the UI to identify the connection.
   - ```Package```: the technology that enables the connection. Choose the package that fits best the managed system. See details below.
   - ```Agent Settings```: depends on the selected package.

   Then click on __Create & Close__.

### Select a package

A package is chosen according to the following constraints:

- What kind of technologies do we need?

  > An Active Directory, a plain CSV file, etc.
- Do we need [incremental or complete](/versioned_docs/usercube_6.1/usercube/integration-guide/tasks-jobs/jobs/index.md#incremental-or-complete)[synchronizations](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/synchronization/index.md), or both?

  [Incremental synchronizations](/versioned_docs/usercube_6.1/usercube/integration-guide/synchronization/upward-data-sync/index.md#Incremental-synchronizations), usually launched approximatively every two hours, are to be performed for real-time needs, while [complete synchronizations](/versioned_docs/usercube_6.1/usercube/integration-guide/synchronization/upward-data-sync/index.md#complete-synchronizations), scheduled no more than once a day, will recover any changes that may have slipped through the cracks of the incremental synchronizations.
- Do we need [provisioning](/versioned_docs/usercube_6.1/usercube/user-guide/administrate/provisioning/index.md)? If so, should provisioning be performed manually or automatically by Usercube?

NETWRIX recommends starting by creating a connector that only does synchronization, and do not worry yet about provisioning. It allows Usercube to read data from your managed system, without writing to the system.

One connector can contain several connections, and each connection contains one package.

> For example, an ```AD``` connector, that will handle synchronization and provisioning between Usercube and an AD, would generally use the ```Directory/Active Directory``` package which can do synchronization and automated provisioning. A second package for manual provisioning, ```Ticket/Usercube``` could be added to request manual provisioning of administration accounts that need more security.

Each type of package needs its own settings, and [secured options](/versioned_docs/usercube_6.1/usercube/integration-guide/connectors/configuration-details/connections/index.md#secured-options) can be used to store sensitive connection information.

## Refresh Schemas

A schema is a snapshot of the data structure (metadata) retrieved by a connection. It needs to be refreshed to enable the configuration of entity types and resource types.

Usercube refreshes a connection's schema:

- after the connection creation;
- when clicking on __Refresh Schema__ on the connection's page: only the schema of the current connection is refreshed;

  ![Refresh Schema of One Connection](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/connectioncreation_refreshschema_v522.png)
- when clicking on __Refresh all schemas__ on the connector's page: all schemas of the connector are refreshed.

  ![Refresh all Schemas](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/connectioncreation_refreshall_v602.png)

In the __Connections__ frame, either the last successful schema update is indicated or an icon is shown if the refresh schema failed.

![Failed Refresh Schemas](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/connectioncreation_failedindicator_v602.png)

Some packages don't generate a schema. For these packages, the __Refresh Schema__ button isn't displayed on the connection's page. On the connector's page, a connection without schema is indicated by the sentence "_There is no schema for this connection_".

![No Schema](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/connectioncreation_noschema_v522.png)

The connections' schemas must be refreshed before editing the connector's entity types via the UI, whether the connections were created via the UI or XML configuration. Otherwise, there will be no connection table available in the ```Source``` dropdown, so you will not be able to save anything.

## Impact of Modifications

Changes on a connection may imply changes in the connector's entity types. When a connection schema changes, a warning may appear in the entity type screen indicating that a mapped property doesn't exist anymore.

## Verify the Connection

In order to verify the process:

1. click on __Check Connection__ to ensure that Usercube can reach the managed system;

   ![Check Connection](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/connectioncreation_checkconnection_v602.png)

   Some connectors have both [incremental and complete](/versioned_docs/usercube_6.1/usercube/integration-guide/tasks-jobs/jobs/index.md#incremental-and-complete) setting modes. They are relatively independent so they both need to be tested.
2. check that the connection appears in the __Connections__ frame with the right options, and without the Failed icon.

![Decline Icon](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/certifcampaign_icondecline_v522.svg)

## Troubleshooting

#### If the Failed icon appears, then�

![Decline Icon](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/certifcampaign_icondecline_v522.svg)

Ensure that the schema of the connection is refreshed.

#### If the schema couldn't be recovered, then�

![Schema Not Recovered](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/connection_notrecovered_v523.png)

- Ensure that the managed system is properly connected.
- Check the connection's settings.

  > Example: For a CSV connection, ensure that the file paths are written correctly in full, such as ```C:/UsercubeDemo/Sources/Directory.xlsx```.

You may have a schema that could not be recovered if you work with a system without a direct access to the agent. In this case, schema refreshment will fail but that does not mean that there necessarily is a problem.
  
Try again from a system that can access the agent.

# Overview

This section will give you an overview of Usercube's components, their requirements and constraints, and possible interconnection schemes. At the end of this section, you should be able to choose the installation setup that fits best your organization's needs.

## Usercube Components and Data Flow

![Components & Data Flow](/img/versioned_docs/usercube_6.1/usercube/installation-guide/overview/components_data_flow.png)

### Components

Usercube's solution includes at least three components.

#### __1.__ Usercube server

One server handles all of Usercube's computing needs, internal database management and serves the UI as a web application accessible through a browser.

The SaaS offering hosts the Usercube Server in the __Cloud__. This means that the server needs not be installed within a Usercube SaaS installation.

#### __2.__ Usercube database

One database stores Usercube's data.

With the SaaS offering, the Usercube Database is hosted in the __Cloud__ and needs not be installed.

The port used to access the database depends on the [database configuration](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/server-network-configuration?view=sql-server-ver15#database-configuration) and the [connectionString](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectionstring?view=dotnet-plat-ext-8.0) set in the [technical configuration](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/index.md).

#### __3.__ Usercube agents

One or several agents perform synchronization and provisioning to/from the managed systems.

### Data flow

Usercube needs the following data flows to be enabled:

- The __Server__ requires opening connections to the __Database__.
- The __Agents__ require opening HTTPS connections to the __Server__.
- The __Agents__ require accessing __managed systems__.
- All end-users' __browsers__ require opening HTTPS connections to the __Server__.
- All end-users' __browsers__ require accessing the [authentication providers](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/server/index.md#authentication-providers).
- Some end-users' __browsers__ require opening HTTPS connections to the __Agents__.

  These connections are used to launch ```Jobs``` or use the ```Reset Password``` capabilities of some connectors. This requirement only applies to a few specific __administrator type profiles__.
- The __Server__ and the __Agent__ both need to access an __SMTP server__ to send [email notifications](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/email-server/index.md).

## SaaS vs. On-Premise

Usercube comes in two flavors: SaaS and On-Premise.

- The __SaaS__ offering only requires the [Agent](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/agent/index.md) to be installed on your organization network.
- The __On-Premise__ offering requires the [Agent](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/agent/index.md), the [Server](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/server/index.md), and the [Database](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/database/index.md) to be installed.

## Hosting Hardware

Depending on the existing network infrastructure and constraints, Usercube's components can be organized in several ways.

### Database & servers

The Usercube Database can be installed on the same workstation as the Usercube Server or run on a separate machine. The second approach is recommended.

### Server & agents

The [Usercube Server](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/server/index.md) and [Agents](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/agent/index.md) can be spread between several workstations. Two scenarios unfold:

#### __1.__ The server and agents are installed on separate workstations

This approach is useful when managed systems need to run on separate and isolated networks.

![Server & Agents isolated](/img/versioned_docs/usercube_6.1/usercube/installation-guide/overview/distribution_1.png)

#### __2.__ The Server and one Agent are installed on the same workstation

In that case, the Usercube Agent can run directly within the Usercube Server process. The hosting workstation would __only host a Usercube Server process__ (with the integrated agent) and no separate agent needs to be installed. The database could be installed on the same workstation or on a separate one.

![Server & Agent together](/img/versioned_docs/usercube_6.1/usercube/installation-guide/overview/distribution_2.png)

## Authentication

End-users will be able to access Usercube after authentication. Several [authentication methods](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/server/index.md#authentication-methods) are available.

## Email Server

Usercube sends notifications to users by email. An [email server](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/email-server/index.md) will have to be set up for the Agent and the Server.

Before you check out the installation steps, make sure that all the [requirements](/versioned_docs/usercube_6.1/usercube/installation-guide/requirements/index.md) are met.

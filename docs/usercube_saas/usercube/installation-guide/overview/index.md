# Overview

This section will give you an overview of Identity Manager's components, their requirements and constraints, and possible interconnection schemes. At the end of this section, you should be able to choose the installation setup that fits best your organization's needs.

## Components and Data Flow

![Components & Data Flow](../../../../../static/img/product_docs/usercube/usercube/installation-guide/overview/components_data_flow.webp)

### Components

Identity Manager's solution includes at least three components.

#### __1.__ Server

One server handles all of Identity Manager's computing needs, internal database management and serves the UI as a web application accessible through a browser.

The SaaS offering hosts the Identity Manager Server in the __Cloud__. This means that the server needs not be installed within a Identity Manager SaaS installation.

#### __2.__ Database

One database stores Identity Manager's data.

With the SaaS offering, the Identity Manager Database is hosted in the __Cloud__ and needs not be installed.

The port used to access the database depends on the [database configuration](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/server-network-configuration?view=sql-server-ver15#database-configuration) and the [connectionString](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectionstring?view=dotnet-plat-ext-8.0) set in the technical configuration. See the [Network Configuration](../../integration-guide/network-configuration/index.md) topic for additional information.

#### __3.__ Agents

One or several agents perform synchronization and provisioning to/from the managed systems.

### Data flow

Identity Manager needs the following data flows to be enabled:

- The __Server__ requires opening connections to the __Database__.
- The __Agents__ require opening HTTPS connections to the __Server__.
- The __Agents__ require accessing __managed systems__.
- All end-users' __browsers__ require opening HTTPS connections to the __Server__.
- All end-users' __browsers__ require accessing the authentication providers. See the [Install the Server](../production-ready/server/index.md) topic for additional information.
- Some end-users' __browsers__ require opening HTTPS connections to the __Agents__.

  These connections are used to launch ```Jobs``` or use the ```Reset Password``` capabilities of some connectors. This requirement only applies to a few specific __administrator type profiles__.
- The __Server__ and the __Agent__ both need to access an __SMTP server__ to [
  Send Notifications
  ](../production-ready/email-server/index.md).

## SaaS vs. On-Premise

Identity Manager comes in two flavors: SaaS and On-Premise.

- The __SaaS__ offering only requires the Agent to be installed on your organization network.
- The __On-Premise__ offering requires the Agent, the [Install the Server](../production-ready/server/index.md), and the [
  Install the Database
  ](../production-ready/database/index.md) to be installed.

See the [
Install the Agents](../production-ready/agent/index.md) topics for additional information.

## Hosting Hardware

Depending on the existing network infrastructure and constraints, Identity Manager's components can be organized in several ways.

### Database and Servers

The Identity Manager Database can be installed on the same workstation as the Identity Manager Server or run on a separate machine. The second approach is recommended.

### Server and Agents

The Identity Manager Server and the Agents can be spread between several workstations. See the [
Install the Agents](../production-ready/agent/index.md) topics for additional information.

Two scenarios unfold:

__1.__ The server and agents are installed on separate workstations

This approach is useful when managed systems need to run on separate and isolated networks.

![Server & Agents isolated](../../../../../static/img/product_docs/usercube/usercube/installation-guide/overview/distribution_1.webp)

__2.__ The Server and one Agent are installed on the same workstation

In that case, the Identity Manager Agent can run directly within the Identity Manager Server process. The hosting workstation would __only host a Identity Manager Server process__ (with the integrated agent) and no separate agent needs to be installed. The database could be installed on the same workstation or on a separate one.

![Server & Agent together](../../../../../static/img/product_docs/usercube/usercube/installation-guide/overview/distribution_2.webp)

## Authentication

End-users will be able to access Identity Manager after authentication. Several authentication methods are available. See the [Install the Server](../production-ready/server/index.md) topic for additional information.

## Email Server

Identity Manager sends notifications to users by email. An email server will have to be set up for the Agent and the Server. See the [
Send Notifications
](../production-ready/email-server/index.md) topic for additional information.

Before you check out the installation steps, make sure that all the [Requirements](../requirements/index.md) are met.

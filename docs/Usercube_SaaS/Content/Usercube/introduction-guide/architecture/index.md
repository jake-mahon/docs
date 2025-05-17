---
sidebar_position: 26
title: Architecture
---

# Architecture

Identity Manager is built to work via a specific architecture made of a server, an agent and a database.

## Server, Agent and Database

Identity Manager works via:

* a server which operates computation, stores all applicative data in the database, and serves a web User Interface;
* at least one agent which operates data flows to/from the managed systems.

  :::note
The managed systems' credentials are used only by the agent and are never disclosed to the server.
  :::

The agent can call the server, but the server cannot call the agent. The data flows' initiatives are always from the agent.

## Installation Types

Identity Manager can be installed:

* SaaS so that the server dwells in the cloud and is provided as a service;

  ![Architecture: SaaS](../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Architecture_SaaS.png)
* on-premises so that the server is installed on an isolated network within the company.

  ![Architecture: On-Premises](../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Architecture_onPrem.png)

## Next Steps

Let's learn about Identity Manager [Configuration](../configuration/index "Configuration").

## Learn More

Learn more on Identity Manager's [Architecture](# "Architecture").

See the [Network Configuration](../../integration-guide/network-configuration/index "Network Configuration") topic for additional information.
---
sidebar_position: 662
title: Production-Ready Installation
---

# Production-Ready Installation

This guide leads the reader through the steps to install Identity Manager for production purposes.

**1.****Before proceeding**, you should go through the [Overview](../overview/index "Overview") and [Requirements](../requirements/index "Requirements") sections to make fundamental decisions about Identity Manager setup, including:

* Whether to install the database within the Identity Manager Server or on a separated workstation.
* How many Agents will be installed?
* If only one Agent is installed, whether to install it as an integrated agent or a separate agent.
* What end-user authentication methods are to be used?
* What hosting environment is used for the Agent and the Server?

**2.** You should **get the following archives ready**:

* Identity Manager runtime: `runtime_.zip`
* Identity Manager database scheme: `Usercube.sql` from the `SQL_.zip`

**3.** This guide is **based on the following choices**:

* Identity Manager Server running with IIS
* Identity Manager Database connection with Windows authentication

This guide will allow you to **extrapolate** less common configurations and will provide links to the relevant [Network Configuration](../../integration-guide/network-configuration/index "Network Configuration") sections.

:::tip
Our examples use the fabled Contoso Corporation as target organization.
:::

## What's Next?

The first step consists in [Create a Working Directory](working-directory/index "Create a Working Directory").
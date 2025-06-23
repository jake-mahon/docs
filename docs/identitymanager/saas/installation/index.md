# Installation Guide

This guide is designed to help you install Identity Manager in a production environment.

## Target Audience

This guide is intended for **system administrators** and **system architects**.

Required knowledge includes:

- Windows Server administration
- Internet Information Services (IIS) administration
- SQL Server administration

## Overview

The installation of Identity Manager requires architectural decisions to be made. An
[ Overview ](/docs/identitymanager/saas/installation/overview.md) of the architecture and available configurations will help you make
informed decisions.

# Install the Development Environment

How to connect to Identity Manager's SaaS environment to set up the development environment.

When using Identity Manager's on-premise option, follow the procedure of installation of the
bootstrap version. See the [ Quick Start Guide](/docs/identitymanager/saas/getting-started/quick-start.md)
topic or additional information.

## Overview

The installation of Identity Manager's production environment usually takes time, while we want to
start configuring at once.

This is why Identity Manager offers a bootstrap version of the application, useful as a development
environment.

## Participants and Artifacts

Integrators must be in contact with Netwrix Identity Manager (formerly Usercube) to be able to get
infos about the SaaS tenant URL and authentication.

| Input | Output                  |
| ----- | ----------------------- |
| -     | Development environment |

## Install the Development Environment

The documentation is not yet available for this part and will be completed in the near future.

## Verify Environment Installation

In order to verify the process, try to authenticate to Identity Manager server, and access the
configuration screens.

## Next Steps

Once the development environment is ready, integrators can start to
[ Create the Workforce Repository ](/docs/identitymanager/saas/identity-management/index.md).

# Deploy

- [ Plan Change Management ](/docs/identitymanager/saas/toolkit/deploy-configuration.md)

  How to anticipate the deep changes in the organization's applications and processes due to
  Identity Manager installation as a new IGA tool.

- [ Install the Production Agent ](/docs/identitymanager/saas/installation/production-setup/agent.md)

  How to install a local agent for production environment.

- [ Configure the Agent's Settings ](/docs/identitymanager/saas/configuration/network/agent-settings/appsettings.md)

  How to configure the agent's application settings via the `web.config`, `appsettings.json` and
  `appsettings.agent.json` files.

- [ Install IIS via Server Manager ](/docs/identitymanager/saas/installation/production-setup/agent.md)

  How to configure the local server to install IIS via Server Manager.

- [ Configure the Pool and Site ](/docs/identitymanager/saas/installation/production-setup/agent.md)

  How to configure the application pool and website via IIS.

- [ Set the Working Directory's Permissions ](/docs/identitymanager/saas/installation/production-setup/agent.md)

  How to assign to the pool the right permissions on the working directory.

- [ Finalize the Installation ](/docs/identitymanager/saas/installation/production-setup/agent.md)

  How to finalize the installation of the agent.

- [Set Up User Authentication](/docs/identitymanager/saas/configuration/network/server-settings/end-user-authentication.md)

  How to allow end-users to authenticate and use the Identity Manager application.

- [Implement Identity Manager](/docs/identitymanager/saas/installation/index.md)

  How to actually implement Identity Manager solution.

# Implement Identity Manager

How to actually implement Identity Manager solution.

The documentation is not yet available for this page and will be completed in the near future.

---
sidebar_position: 675
title: Configuration
---

# Configuration

There are several options for configuring Identity Manager.

## Application Configuration

### User Interface

Netwrix Identity Manager (formerly Usercube) strongly recommends that Identity Manager be configured, as much as possible, via the UI.

### XML files

For advanced users, if the UI is not enough, Identity Manager can also be configured via XML files. These XML files should be placed in a `Conf` folder directly inside the working directory.

### Database

Identity Manager's application configuration, whether it is made from the UI or the XML files, is stored in a database which should never be modified manually.

## Network Configuration

Identity Manager's server and agent(s) are configured via JSON files, mainly `appsettings.json` and `appsettings.agent.json`.

## Next Steps

This is the end of the introduction guide, so you should now be able to dive into:

* The [User Guide](../../user-guide/index "User Guide") to configure Identity Manager from scratch via the UI, following the step-by-step procedures;
* The [Integration Guide](../../integration-guide/index "Integration Guide") to complete Identity Manager's configuration in XML according to your needs;
* The [Installation Guide](../../installation-guide/index "Installation Guide") to install Identity Manager in a production environment.

## Learn More

Learn more on how to [Create a Working Directory](../../installation-guide/production-ready/working-directory/index "Create a Working Directory").

See the [User Guide](../../user-guide/index "User Guide") topic to learn how to configure Identity Manager from scratch via the UI.

See how to [Export the Configuration](../../integration-guide/toolkit/how-tos/export-configuration/index "Export the Configuration") to XML files.

See how to [Identity Manager Deploy the Configuration](../../integration-guide/toolkit/how-tos/deploy-configuration/index "Deploy the Configuration").

Learn more about the [XML Configuration Schema](../../integration-guide/toolkit/xml-configuration/index "XML Configuration Schema").

Learn more about the [Network Configuration](../../integration-guide/network-configuration/index "Network Configuration").
# Configuration

There are several options for configuring Usercube.

## Application Configuration

### User Interface

NETWRIX strongly recommends that Usercube be configured, as much as possible, via the UI.

### XML files

For advanced users, if the UI is not enough, Usercube can also be configured via XML files. These
XML files should be placed in a `Conf` folder directly inside the working directory.

### Database

Usercube's application configuration, whether it is made from the UI or the XML files, is stored in
a database which should never be modified manually.

## Network Configuration

Usercube's server and agent(s) are configured via JSON files, mainly `appsettings.json` and
`appsettings.agent.json`.

## Next Steps

This is the end of the introduction guide, so you should now be able to dive into:

- the [User Guide](/versioned_docs/usercube_6.1/usercube/user-guide/index.md) to configure Usercube
  from scratch via the UI, following the step-by-step procedures;
- the [Integration Guide](/versioned_docs/usercube_6.1/usercube/integration-guide/index.md) to
  complete Usercube's configuration in XML according to your needs;
- the [Installation Guide](/versioned_docs/usercube_6.1/usercube/installation-guide/index.md) to
  install Usercube in a production environment.

## Learn More

[Learn more on the working directory](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/working-directory/index.md).

[See how to configure Usercube from scratch via the UI](/versioned_docs/usercube_6.1/usercube/user-guide/index.md).

[See how to export the UI configuration to XML files](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/how-tos/export-configuration/index.md).

[See how to (re)deploy the XML configuration](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/how-tos/deploy-configuration/index.md).

[Learn more about the XML configuration schema](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/index.md).

[Learn more about network configuration](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/index.md).

# Production-Ready Installation

This guide leads the reader through the steps to install Usercube for production purposes.

__1.____Before proceeding__, you should go through the [Overview](/versioned_docs/usercube_6.1/usercube/installation-guide/overview/index.md) and [Requirements](/versioned_docs/usercube_6.1/usercube/installation-guide/requirements/index.md) sections to make fundamental decisions about Usercube setup, including:

- Whether to install the database within the Usercube Server or on a separated workstation.
- How many Agents will be installed?
- If only one Agent is installed, whether to install it as an integrated agent or a separate agent.
- What end-user authentication methods are to be used?
- What hosting environment is used for the Agent and the Server?

__2.__ You should __get the following archives ready__:

- Usercube runtime: ```runtime_<version>.zip```
- Usercube database scheme: ```Usercube.sql``` from the ```SQL_<version>.zip```

__3.__ This guide is __based on the following choices__:

- Usercube Server running with IIS
- Usercube Database connection with Windows authentication

This guide will allow you to __extrapolate__ less common configurations and will provide links to the relevant [Technical Configuration](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/index.md) sections.

Our examples use the fabled [Contoso Corporation](https://docs.microsoft.com/en-us/microsoft-365/enterprise/contoso-overview?view=o365-worldwide) as target organization.

## What's Next?

The first step consists in creating a [Working Directory](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/working-directory/index.md).

# appsettings.connection

## Define configuration through UI

On some configuration screens, such as the connector screen, it is possible to define some of the [agent's configuration](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/agent-configuration/index.md). This configuration is stored in the __appsettings.connection.json__ file, located inside the [work folder](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/server-configuration/general-purpose/index.md#work-folder).

The __appsettings.connection.json__ file has the exact same structure as the other __[appsettings.agent.json](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)__ file.

This configuration file has the highest priority among others agent's configuration sources (see [Merge Priority](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/agent-configuration/index.md#Merge-Priority)) .

You should not modify this file manually.

# appsettings.connection

## Define configuration through UI

On some configuration screens, such as the connector screen, it is possible to define some of the
[agent's configuration](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md).
This configuration is stored in the **appsettings.connection.json** file, located inside the
[work folder](/docs/identitymanager/6.1/identitymanager/installation-setup/server-configuration.md).

The **appsettings.connection.json** file has the exact same structure as the other
**[appsettings.agent.json](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md)**
file.

This configuration file has the highest priority among others agent's configuration sources (see
[Merge Priority](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md#merge-priority))
.

You should not modify this file manually.

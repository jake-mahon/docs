# Migration Guide

This guide is designed to provide step-by-step procedures in order to migrate Identity Manager from your current version to the latest one.

__NOTE:__ For the latest SaaS versions, if you are using the administrator scaffolding the necessary permissions for the update are added to the administrator scaffolding and they will be taken into account the next time the configuration is deployed.

## General Upgrade Instructions for the Server with Integrated Agent

__Step 1 –__ Download the ```usercube-server-runtime``` from the expected version from [](https://extranet.usercube.com/)[Netwrix Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html).

__Step 2 –__ Stop the existing server.

__Step 3 –__ Rename the ```Runtime``` folder to create a backup, for example ```RuntimeOld```.

__Step 4 –__ Extract the content of the new ```Runtime```to the same folder as ```RuntimeOld```, inside a new ```Runtime``` folder.

__Step 5 –__ Copy the original ```appsettings.json``` and ```appsettings-agent.json``` files from ```RuntimeOld``` to the new ```Runtime```.

__Step 6 –__ Restart the server.

## General Upgrade Instructions for the Agent

__Step 1 –__ Download the ```usercube-agent-runtime``` from the expected version from [](https://extranet.usercube.com/)[Netwrix Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html).

__Step 2 –__ Stop the existing agent.

__Step 3 –__ Rename the ```Runtime``` folder to create a backup, for example ```RuntimeOld```.

__Step 4 –__ Extract the content of the new ```Runtime```to the same folder as ```RuntimeOld```, inside a new ```Runtime``` folder.

__Step 5 –__ Copy the original ```web.config, appsettings.json``` and ```appsettings-agent.json``` files from ```RuntimeOld``` to the new ```Runtime```.

__Step 6 –__ Restart the agent.

## Specific Information to Migrate from v6.1 to v6.2

If you are looking to upgrade the Netwrix Identity Manager version from 6.1 to 6.2 you will not need to take any action because the database will automatically be upgraded. If you have problems importing your configuration into 6.2 related to C# expressions, please run the Identity Manager-Check-ExpressionsConsistency tool. See the [Usercube-Check-ExpressionsConsistency](/docs/product_docs/usercube/usercube/integration-guide/executables/references/check-expressionsconsistency/index.md) topic for additional information.

## Specific Information to Migrate from v6.0 to v6.1

If you are looking to upgrade the Netwrix Identity Manager version from 6.0 to 6.1 you will not need to take any action because the database will automatically be upgraded.

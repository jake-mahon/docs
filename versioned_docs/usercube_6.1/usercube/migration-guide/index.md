# Migration Guide

This guide is designed to provide step-by-step procedures in order to migrate Usercube from your current version to the latest one.

This page will guide you through a migration to a more recent version with no major changes.
  
For example from 6.0.215 to 6.0.216.  
For a migration between versions with major changes, check this guide's subsections.
  
For example see the [
5.2.X to 6.0
](/versioned_docs/usercube_6.1/usercube/migration-guide/5.2.xto6.0/index.md) topic for additional information on migration.

## Upgrade the Server Only for a Minor Migration

In order to upgrade only the sever do the following:

__Step 1 –__ Download the new runtime from the expected version from [Netwrix portal](https://extranet.usercube.com/).

__Step 2 –__ Stop the server.

__Step 3 –__ Rename the ```Runtime``` folder to create a backup, for example ```RuntimeOld```.

![Extranet Artifacts](/img/versioned_docs/usercube_6.1/usercube/migration-guide/extranet_v601.png)

__Step 4 –__ Extract the content of the new runtime to the same folder as ```RuntimeOld```, inside a new ```Runtime``` folder.

__Step 5 –__ Copy the original ```appsettings.json``` and ```appsettings-agent.json``` files from ```RuntimeOld``` to the new ```Runtime```.

__Step 6 –__ Restart the server.

## Migrate from Older Versions

- [5.2.X to 6.0](/versioned_docs/usercube_6.1/usercube/migration-guide/5.2.xto6.0/index.md)
- [5.1.7 to 5.2.3](/versioned_docs/usercube_6.1/usercube/migration-guide/5.1.7to5.2.3/index.md)
- [5.1.1 To 5.1.7](/versioned_docs/usercube_6.1/usercube/migration-guide/5.1.1to5.1.7/index.md)
- [5.1.0 to 5.1.1](/versioned_docs/usercube_6.1/usercube/migration-guide/5.1.0to5.1.1/index.md)
- [5.0.X to 5.1](/versioned_docs/usercube_6.1/usercube/migration-guide/5.0.x-to-5.1/index.md)

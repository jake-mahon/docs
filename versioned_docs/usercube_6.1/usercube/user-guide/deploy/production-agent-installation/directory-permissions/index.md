# Set the Working Directory's Permissions

This guide shows how to assign to the pool the right permissions on the working directory.

## Overview

For Usercube to work correctly, the pool of the production agent must be configured with specific permissions on the working directory.

This page describes the optimal configuration of the pool's permissions on the working directory to prepare the production agent's installation.

## Set the Working Directory's Permissions

Set the working directory's permissions by proceeding as follows:

1. Right-click on the working directory, for example ```C:/Usercube```, to select __Properties__, and in the __Security__ tab, click on __Advanced__.

   ![Working Directory Properties: Step 1](/img/versioned_docs/usercube_6.1/usercube/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties1.png)
2. In the __Permissions__ tab, click on __Add__, and in the pop-up window click on __Select a principal__.

   ![Working Directory Properties: Step 2](/img/versioned_docs/usercube_6.1/usercube/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties2.png)
3. Click on __Locations�__ to choose the current computer, and in the text area enter ```iis apppool/Usercube``` (```Usercube``` being the name of the previously created pool).

   ![Working Directory Properties: Step 3](/img/versioned_docs/usercube_6.1/usercube/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties3.png)

   An error at this point should come either from a mistake in the pool's name or in the selected location.
4. Click on __OK__ and make sure that only the __Read and execute__, __List folder contents__ and __Read__ permissions are selected.

   ![Working Directory Properties: Step 4](/img/versioned_docs/usercube_6.1/usercube/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties4.png)
5. Click on __OK__ in the windows until they are all closed.
6. Right-click on the ```Temp``` folder to select __Properties__, and in the __Security__ tab, click on __Edit__.

   ![Temp Folder Properties: Step 1](/img/versioned_docs/usercube_6.1/usercube/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_foldersproperties1.png)
7. Select the user corresponding to the pool and give them ```Full control```.

   ![Temp Folder Properties: Step 2](/img/versioned_docs/usercube_6.1/usercube/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_foldersproperties2.png)
8. Click on __OK__ in the windows until they are all closed.
9. Repeat the last few steps (those concerning the ```Temp``` folder) to apply them to the ```Work``` and ```Mails``` folders.

## Next Steps

To continue, [finalize the installation in a few steps](/versioned_docs/usercube_6.1/usercube/user-guide/deploy/production-agent-installation/finalization/index.md).

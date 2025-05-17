---
sidebar_position: 603
title: Set the Working Directory's Permissions
---

# Set the Working Directory's Permissions

This guide shows how to assign to the pool the right permissions on the working directory.

## Overview

For Identity Manager to work correctly, the pool of the production agent must be configured with specific permissions on the working directory.

This page describes the optimal configuration of the pool's permissions on the working directory to prepare the production agent's installation.

## Set the Working Directory's Permissions

Set the working directory's permissions by proceeding as follows:

1. Right-click on the working directory, for example `C:/Usercube`, to select **Properties**, and in the **Security** tab, click on **Advanced**.

   ![Working Directory Properties: Step 1](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/ProdAgent_DirectoryProperties1.png)
2. In the **Permissions** tab, click on **Add**, and in the pop-up window click on **Select a principal**.

   ![Working Directory Properties: Step 2](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/ProdAgent_DirectoryProperties2.png)
3. Click on **Locations** to choose the current computer, and in the text area enter `iis apppool/Usercube` (`Usercube` being the name of the previously created pool).

   ![Working Directory Properties: Step 3](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/ProdAgent_DirectoryProperties3.png)

   :::tip
An error at this point should come either from a mistake in the pool's name or in the selected location.
   :::
4. Click on **OK** and make sure that only the **Read and execute**, **List folder contents** and **Read** permissions are selected.

   ![Working Directory Properties: Step 4](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/ProdAgent_DirectoryProperties4.png)
5. Click on **OK** in the windows until they are all closed.
6. Right-click on the `Temp` folder to select **Properties**, and in the **Security** tab, click on **Edit**.

   ![Temp Folder Properties: Step 1](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/ProdAgent_FoldersProperties1.png)
7. Select the user corresponding to the pool and give them `Full control`.

   ![Temp Folder Properties: Step 2](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/ProdAgent_FoldersProperties2.png)
8. Click on **OK** in the windows until they are all closed.
9. Repeat the last few steps (those concerning the `Temp` folder) to apply them to the `Work` and `Mails` folders.

## Next Steps

To continue, [Finalize the Installation](../finalization/index "Finalize the Installation")in a few steps.
---
sidebar_position: 1335
title: Set Up the Archive Folder
---

# Set Up the Archive Folder

Advanced Change Management allows data within customization to be archived during the Clean Up process. An archive folder must be created before the Clean Up process.

## Create the Archive Folder

1. Open **NetSuite Home** > **Set Preferences**
2. Under **Defaults**, make sure **Show Internal IDS** is checked on the **General** tab.
3. Click **Save**
4. Open **Documents** > **Files** > **File Cabinet** > **New**
5. Name the folder **Strongpoint Archived Data Files**.
6. Enter **Documents and Files** in **Sub-Folder Of**
7. Best practice is to add a meaningful description.
8. Click **Save**
9. Note the **Internal ID** for your new **Strongpoint Archived Data Files** folder. **48783** in this example.

   ![](../../../../static/images/enus/Content/Resources/Images/internal_id.png "Finding the Internal ID of the Archive Folder")

## Assign the Internal ID to the Deployed Script

To assign the internal ID to a deployed script:

1. Open **Customization** > **Scripting** > **Scripts**
2. Change the **Type** Filter to **Scheduled** and **From Bundle** to **294336**
3. Click **View** by the **Strongpoint Auto Archive**

![](../../../../static/images/enus/Content/Resources/Images/scripts-1.png)

4. Open the **Deployments** tab.
5. Click on **Strongpoint Auto Archive – OD**.

   ![](../../../../static/images/enus/Content/Resources/Images/scripts-2.png)
6. Click **Edit**
7. Open the **Parameters** tab, add the internal ID of your **Archive Folder**
8. Click Save

   ![](../../../../static/images/enus/Content/Resources/Images/scripts-3.png)

The archiving function on Change Requests is now set up and ready to use.
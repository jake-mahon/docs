---
sidebar_position: 4689
title: 'Advanced Standard Policies: Copying Multiple Files Wizard'
---

# Advanced Standard Policies: Copying Multiple Files Wizard

The second type of standard policy you can create is called Copy multiple files from same directory.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 13 - Remote Work Delivery Manager_manual/Getting to Know PolicyPak_22.png)

Many of the screens in this wizard are the same as those in the Copy a single file wizard, but the main difference is the Specify the copy source page.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 13 - Remote Work Delivery Manager_manual/Getting to Know PolicyPak_23.png)

This page enables you to specify presets and filters, and then lets you show a preview to determine which files from the folder will be copied to the destination.

The other main difference is the ability to specify the overwrite mode.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 13 - Remote Work Delivery Manager_manual/Getting to Know PolicyPak_24.png)

Your options for specifying the file overwrite mode are as follows:

* Copy new and update existing files (recommended) — This option will copy new files that are added to the source, and copy existing files that are changed in the source. This mode will not copy unchanged files.
* Update existing files — This option will update (download) the files already in the destination that are changed in the source. It will not copy newly added files and will not re-copy files that have not changed.
* Copy new files — This option will copy only new files in the source that are not yet in the destination. This method will not copy changed files and will not copy unchanged files.
* Replace all files (not recommended) — This option will copy all files, even if the files in the source are the same as the ones in the destination.
* Delete destination files and directories that no longer exist in source — This option will actively delete files in the destination folder if they are not also present in the source folder.

**NOTE:** Endpoint Policy Manager File Deployment manager cannot determine if the contents of the files have been changed. Instead, changed files are identified by changes in file size and/or modified date or time stamp. Therefore, if the source and destination file size are unequal, or if the source and destination timestamp is unequal, then the file is assumed to have been changed.
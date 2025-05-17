---
sidebar_position: 5801
title: PublicFolder Action Module
---

# PublicFolder Action Module

The Public Folder action module allows users to make bulk changes to selected Microsoft Exchange public folders by adding, changing, or removing folders and permissions from the environment. Use the Pubic Folder Action Module Wizard to choose the data table column that identifies the folders and to configure the operations performed against the selected folders.

Prior to configuring the Pubic Folder Action Module Wizard, scope the source data table to ensure the actions apply only to the desired folders.

**CAUTION:** Be careful when using this action module. Make sure that only the changes required are applied and only to those target folders desired. Always verify the data prior to execution of any action.

***RECOMMENDED:*** Although rollbacks for some actions are available, having to use one should be avoided

## Configuration

The Public Folder action module is configured through the Public Folder Action Module Wizard, which contains the following wizard pages:

* Welcome
* [Public Folder: Action](Action "Public Folder: Action")
* [Public Folder: Prior Actions](PriorActions "Public Folder: Prior Actions")
* [Public Folder: Folders](Folders "Public Folder: Folders")
* [Public Folder: MAPI Settings](MAPISettings "Public Folder: MAPI Settings")
* [Public Folder: Operations](Operations "Public Folder: Operations")
* [Public Folder: Rollback](Rollback "Public Folder: Rollback")
* [Public Folder: Options](Options "Public Folder: Options")
* [Public Folder: Summary](Summary "Public Folder: Summary")

The Welcome page gives an overview of the action module. The navigation pane contains links to the pages in the wizard. Review the introductory and caution information about the Public Folder Action Module before proceeding.

![Public Folder Action Module Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Action/PublicFolder/Welcome.png "Public Folder Action Module Wizard Welcome page")

To proceed, click **Next** or use the Steps navigation pane to open another page in the wizard.
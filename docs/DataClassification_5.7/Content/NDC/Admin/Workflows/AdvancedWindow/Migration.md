---
sidebar_position: 3022
title: Modify Migration action settings
---

Filter: 

* All Files

Submit Search

# Modify Migration action settings

To configure or modify Migration action settings using the **Advanced** interface:

1. In administrative web console, navigate to Workflows and select the workflow you want to configure action for.
2. Click the workflow, then click Add next to Rule Actions.
3. In the Add Action dialog, select the necessary migration action in the Action Type list.

There are common and content-specific settings that you need to specify.

## Common settings

These settings are the same for all supported sources.

[![](../../../../../../../static/images/DataClassification_5.7/Content/Resources/Images/Workflows/action_migration_common_settings_thumb_0_0.png)](../../../../Resources/Images/Workflows/action_migration_common_settings.png)

| Setting | Description | Comments |
| --- | --- | --- |
| **Migration Destination** | The root destination to migrate to. | Make sure to define the required destination as Migration Config. |
| **Destination Rename Mode** | Specifies what action to take if a file exists at the destination with the same name.   * **None** – overwrite the destination file or issue a “duplicate” error.   **NOTE:** Behaviour depends on the migration destination.   * **Append Number** - append a numeric counter as a suffix to the file name (e.g. *document\_2.txt)*. * **Append Date** - append workflow execution timestamp. |  |
| **Maintain Folder Structure** | If selected, subfolders will be created in the migration destination to match the relative path in the source. | Applies if this capability is supported by the source system.  For Exchange, the path will also include a folder for the mailbox name (e.g. *\\MigrationDestination\User@domain.com\Inbox\HR*). |
| **Delete Original Item** | If selected, the original item will be deleted after it is successfully copied to the destination. | Applies if this capability is supported by the source system. |
| **Mark Original item as Read Only** | If selected, the original item will be marked as *read-only*. | Applies if this capability is supported by the source system. |
| **Redaction Plan** | If redaction plans have been configured, specify the redaction plan to be applied to the document. See [Redaction](../../../Configuration/Redaction). | By default, this will be applied to the document at the destination. |
| **Redact Original** | If updating the source item is supported by the source system, then checking this box will cause the redaction plan to be applied to the source document after being successfully migrated. | Note that this option is not available when performing a move (deleting the original item). |

## Source-specific settings

Settings for Google Drive content migration are described below.

| Setting | Description | Comments |
| --- | --- | --- |
| **Destination Folder** | The path to migrate the document to relative to the migration destination. | To migrate to the root folder, leave blank.  Destination example: *Folder/SubFolder/SubFolder2* |

Settings for SharePoint content migration are described below.

| Setting | Description | Comments |
| --- | --- | --- |
| **Library/Folder** | The library and optional subfolder to migrate the document to in the migration destination. |  |
| **Mode** | Previous versions and metadata can be included. | Only applicable if the source system is also SharePoint. |
| **Dynamic Destination Field Name** | Specify a metadata field on the item that can be used to dynamically lookup the migration destination. | Only applicable if the source system is also SharePoint. |
| **Web Path** | The relative web path for the migration of the document. Format should be any of the following:   * *~/WebPath* —a document found, e.g., at *http://sharepoint/sites/Test/Demo* with the relative path *~/Subsite* would attempt to migrate to *http://sharepoint/sites/Test/Demo/subsite* * */SiteCollectionPath* —a document found, e.g., at *http://sharepoint/sites/Test/Demo* with the relative path */Subsite* would attempt to migrate to *http://sharepoint/sites/Test/Subsite* | Only applicable if a SharePoint relative migration is chosen. |
| **List Title** | The name of the library at the web path specified to migrate the document to. | Only applicable if a SharePoint relative migration is chosen. |
| **Fallback - if relative path invalid** | Enables/disables falling back to the standard migration destination if the relative path is unavailable. If the relative path does not exist, and the fallback mode is not enabled, then the Workflow will report a failure. | Only applicable if a SharePoint relative migration is chosen. |
|  |  |  |
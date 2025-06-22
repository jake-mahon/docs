# Migrate Document

This action can be used to copy or move a document between content sources (from 'source' to
'destination'). Simple migration copies the file and any document properties and is supported by all
content source types. Migration action properties specific for different content source types are
listed in the table below.

| Type                    | As 'source' | As 'destination' | Migration Config Type              | Supports structured migration? | Move? | Update source item? | Mark source 'read-only'? |
| ----------------------- | ----------- | ---------------- | ---------------------------------- | ------------------------------ | ----- | ------------------- | ------------------------ |
| Exchange                | Yes         | No               |                                    | Yes                            | No    | No                  | No                       |
| File System             | Yes         | Yes              | Custom -File Share                 | Yes                            | Yes   | Yes                 | Yes                      |
| Google Drive            | Yes         | Yes              | Source (Google Drive account)      | Yes                            | No    | No                  | No                       |
| SharePoint              | Yes         | Yes              | Custom -SharePoint Site Collection | Yes                            | Yes   | Yes                 | No                       |
| SQL and other databases | Yes         | No               |                                    | Yes                            | No    | No                  | No                       |

**IMPORTANT!** Before you add the **Migration** action to your workflow, you should configure
migration destinations. See Configuring Destinations for Migration Action.

When running the Workflow wizard and having selected **Migration** as action, you will be prompted
to configure related settings.

[<!-- Image removed: transparent.gif not found -->](<javascript:void(0)>)[To configure migration using Workflow wizard:](<javascript:void(0)>)

On the What do you want to do step, select Migrate Document action. do the following:

1. Specify migration source and folder:

   - Select migration destination under Which type of repository should the document be migrated
     to?. You can add migration destination directly from wizard:

     ![migration_destination_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/workflows/actions/migration_destination_thumb_0_0.webp)

   - If you created several sources for migration destinations, select on one in the under Where
     should the document be migrated to?
   - For Google Drive, you need to specify subfolder to save your files in the Where in the
     destination should the files be saved? field.

2. Configure migration options:

   | Option                                                                        | Description                                                                                                                                                                                                                                                                                     |
   | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Replicate folder structure                                                    | If supported by the source system, subfolders will be created in the migration destination to match the relative path in the source. In the case of Exchange this will also include a folder for the mailbox name (I.E: \\MigrationDestination\User@domain.com\Inbox\HR).                       |
   | Copy or Move the document                                                     | Select one of the following: - Copy - Move                                                                                                                                                                                                                                                      |
   | Mark Source as Read-only                                                      | The original item can be marked as read only.                                                                                                                                                                                                                                                   |
   | What action should be taken if the document already exists at the destination | Select action to perform: - Replace - Append                                                                                                                                                                                                                                                    |
   | Redact the document                                                           | If update of the source item is supported by the source system, then using this option will instruct the program to apply the redaction plan to the source document after its successful migration. **NOTE:** This option is not available when performing a move (deleting the original item). |

To modify action settings for the certain workflow, select the workflow and use the Advanced UI
window. See
[Modify Migration action settings](/docs/dataclassification/5.6.2/workflows-automation/workflow-actions/migration-actions.md)
for more information.

# Modify Migration action settings

To configure or modify Migration action settings using the **Advanced** interface:

1. In administrative web console, navigate to Workflows and select the workflow you want to
   configure action for.
2. Click the workflow, then click Add next to Rule Actions.
3. In the Add Action dialog, select the necessary migration action in the Action Type list.

There are common and content-specific settings that you need to specify.

## Common settings

These settings are the same for all supported sources.

![action_migration_common_settings_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/workflows/advanced_window/action_migration_common_settings_thumb_0_0.webp)

| Setting                             | Description                                                                                                                                                                                                                                                                                                                                                                             | Comments                                                                                                                                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Migration Destination**           | The root destination to migrate to.                                                                                                                                                                                                                                                                                                                                                     | Make sure to define the required destination as Migration Config.                                                                                                                              |
| **Destination Rename Mode**         | Specifies what action to take if a file exists at the destination with the same name. - **None** – overwrite the destination file or issue a “duplicate” error. **NOTE:** Behaviour depends on the migration destination. - **Append Number** - append a numeric counter as a suffix to the file name (e.g. _document_2.txt)_. - **Append Date** - append workflow execution timestamp. |                                                                                                                                                                                                |
| **Maintain Folder Structure**       | If selected, subfolders will be created in the migration destination to match the relative path in the source.                                                                                                                                                                                                                                                                          | Applies if this capability is supported by the source system. For Exchange, the path will also include a folder for the mailbox name (e.g. _\\MigrationDestination\User@domain.com\Inbox\HR_). |
| **Delete Original Item**            | If selected, the original item will be deleted after it is successfully copied to the destination.                                                                                                                                                                                                                                                                                      | Applies if this capability is supported by the source system.                                                                                                                                  |
| **Mark Original item as Read Only** | If selected, the original item will be marked as _read-only_.                                                                                                                                                                                                                                                                                                                           | Applies if this capability is supported by the source system.                                                                                                                                  |
| **Redaction Plan**                  | If redaction plans have been configured, specify the redaction plan to be applied to the document. See [Redaction](/docs/dataclassification/5.6.2/configuration/system-configuration/general-settings.md).                                                                                                                                                                              | By default, this will be applied to the document at the destination.                                                                                                                           |
| **Redact Original**                 | If updating the source item is supported by the source system, then checking this box will cause the redaction plan to be applied to the source document after being successfully migrated.                                                                                                                                                                                             | Note that this option is not available when performing a move (deleting the original item).                                                                                                    |

## Source-specific settings

Settings for Google Drive content migration are described below.

| Setting                | Description                                                                | Comments                                                                                       |
| ---------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Destination Folder** | The path to migrate the document to relative to the migration destination. | To migrate to the root folder, leave blank. Destination example: _Folder/SubFolder/SubFolder2_ |

Settings for SharePoint content migration are described below.

| Setting                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Comments                                                      |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Library/Folder**                      | The library and optional subfolder to migrate the document to in the migration destination.                                                                                                                                                                                                                                                                                                                                                                                           |                                                               |
| **Mode**                                | Previous versions and metadata can be included.                                                                                                                                                                                                                                                                                                                                                                                                                                       | Only applicable if the source system is also SharePoint.      |
| **Dynamic Destination Field Name**      | Specify a metadata field on the item that can be used to dynamically lookup the migration destination.                                                                                                                                                                                                                                                                                                                                                                                | Only applicable if the source system is also SharePoint.      |
| **Web Path**                            | The relative web path for the migration of the document. Format should be any of the following: - _~/WebPath_ —a document found, e.g., at _http://sharepoint/sites/Test/Demo_ with the relative path _~/Subsite_ would attempt to migrate to _http://sharepoint/sites/Test/Demo/subsite_ - _/SiteCollectionPath_ —a document found, e.g., at _http://sharepoint/sites/Test/Demo_ with the relative path _/Subsite_ would attempt to migrate to _http://sharepoint/sites/Test/Subsite_ | Only applicable if a SharePoint relative migration is chosen. |
| **List Title**                          | The name of the library at the web path specified to migrate the document to.                                                                                                                                                                                                                                                                                                                                                                                                         | Only applicable if a SharePoint relative migration is chosen. |
| **Fallback - if relative path invalid** | Enables/disables falling back to the standard migration destination if the relative path is unavailable. If the relative path does not exist, and the fallback mode is not enabled, then the Workflow will report a failure.                                                                                                                                                                                                                                                          | Only applicable if a SharePoint relative migration is chosen. |
|                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                               |

# Modify Migration action settings

To configure or modify Migration action settings using the __Advanced__ interface:

1. In administrative web console, navigate to Workflows and select the workflow you want to configure action for.
2. Click the workflow, then click Add next to Rule Actions.
3. In the Add Action dialog, select the necessary migration action in the Action Type list.

There are common and content-specific settings that you need to specify.

## Common settings

These settings are the same for all supported sources.

[![action_migration_common_settings_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/workflows/advanced_window/action_migration_common_settings_thumb_0_0.png)](/versioned_docs/dataclassification_5.6.2/images/workflows/action_migration_common_settings.png)

| Setting | Description | Comments |
| --- | --- | --- |
| __Migration Destination__ | The root destination to migrate to. | Make sure to define the required destination as Migration Config. |
| __Destination Rename Mode__ | Specifies what action to take if a file exists at the destination with the same name.   - __None__ – overwrite the destination file or issue a “duplicate” error.   __NOTE:__ Behaviour depends on the migration destination.   - __Append Number__ - append a numeric counter as a suffix to the file name (e.g. _document\_2.txt)_. - __Append Date__ - append workflow execution timestamp. |  |
| __Maintain Folder Structure__ | If selected, subfolders will be created in the migration destination to match the relative path in the source. | Applies if this capability is supported by the source system.  For Exchange, the path will also include a folder for the mailbox name (e.g. _\\MigrationDestination\User@domain.com\Inbox\HR_). |
| __Delete Original Item__ | If selected, the original item will be deleted after it is successfully copied to the destination. | Applies if this capability is supported by the source system. |
| __Mark Original item as Read Only__ | If selected, the original item will be marked as _read-only_. | Applies if this capability is supported by the source system. |
| __Redaction Plan__ | If redaction plans have been configured, specify the redaction plan to be applied to the document. See [Redaction](/versioned_docs/dataclassification_5.6.2/ndc/configuration/redaction.md). | By default, this will be applied to the document at the destination. |
| __Redact Original__ | If updating the source item is supported by the source system, then checking this box will cause the redaction plan to be applied to the source document after being successfully migrated. | Note that this option is not available when performing a move (deleting the original item). |

## Source-specific settings

Settings for Google Drive content migration are described below.

| Setting | Description | Comments |
| --- | --- | --- |
| __Destination Folder__ | The path to migrate the document to relative to the migration destination. | To migrate to the root folder, leave blank.  Destination example: _Folder/SubFolder/SubFolder2_ |

Settings for SharePoint content migration are described below.

| Setting | Description | Comments |
| --- | --- | --- |
| __Library/Folder__ | The library and optional subfolder to migrate the document to in the migration destination. |  |
| __Mode__ | Previous versions and metadata can be included. | Only applicable if the source system is also SharePoint. |
| __Dynamic Destination Field Name__ | Specify a metadata field on the item that can be used to dynamically lookup the migration destination. | Only applicable if the source system is also SharePoint. |
| __Web Path__ | The relative web path for the migration of the document. Format should be any of the following:   - _~/WebPath_ —a document found, e.g., at _http://sharepoint/sites/Test/Demo_ with the relative path _~/Subsite_ would attempt to migrate to _http://sharepoint/sites/Test/Demo/subsite_ - _/SiteCollectionPath_ —a document found, e.g., at _http://sharepoint/sites/Test/Demo_ with the relative path _/Subsite_ would attempt to migrate to _http://sharepoint/sites/Test/Subsite_ | Only applicable if a SharePoint relative migration is chosen. |
| __List Title__ | The name of the library at the web path specified to migrate the document to. | Only applicable if a SharePoint relative migration is chosen. |
| __Fallback - if relative path invalid__ | Enables/disables falling back to the standard migration destination if the relative path is unavailable. If the relative path does not exist, and the fallback mode is not enabled, then the Workflow will report a failure. | Only applicable if a SharePoint relative migration is chosen. |
|  |  |  |

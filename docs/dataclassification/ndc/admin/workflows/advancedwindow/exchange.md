# Advanced Actions for Exchange

In addition to the __Email Alert__ ,__Migrate Document__ and additional classification, the following actions are available for the __Exchange__ content source type:

- __Delete email__
- __Move email__

To configure these actions, use the Advanced UI dialog window. See [Configure a Workflow using Advanced dialog](/docs/dataclassification/ndc/admin/workflows/advancedwindow/createworkflow.md) for details on how to invoke it.

## Delete Email

This action will remove an email from Exchange mailbox.

![action_exchange_delete_email_thumb_0_0](/img/product_docs/dataclassification/ndc/admin/workflows/advancedwindow/action_exchange_delete_email_thumb_0_0.webp)

Specify the following action parameters:

| Action parameter | Description | Comments |
| --- | --- | --- |
| __Delete Mode__ | Matches the native Microsoft Exchange __Delete Modes__:   - __Soft Delete__ — Email will be available for recovery from the _Deleted Items_ folder. - __Hard Delete__ — Email will not be available for recovery after deletion. - __Move to Deleted items__ — Email will be moved to _Deleted Items_ folder. | See [this Microsoft article](https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/deleting-items-by-using-ews-in-exchange) for details. |
| __Suppress Read Receipts__ | With this option selected, _Read receipts_ will not be sent (if requested) for the item being deleted. | Selected by default. |

## Move Email

This action will move an email to the specified folder within the same mailbox.

Specify the following action parameters:

| Action parameter | Description | Comments |
| --- | --- | --- |
| __Target Folder Name__ | The name of the folder the move the email to. | For subfolders, only include the subfolder name (not the full path). |
| __Parent Folder Name__ | If the target folder name is not unique, specify the parent folder name — to ensure the correct folder is used. | Optional. |

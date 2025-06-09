# Advanced Actions for SharePoint

In addition to the __Email Alert__, __Migrate Document__ and additional classification, the following actions are available for the __SharePoint__ content source type:

- [Migrate Document](/docs/dataclassification/ndc/admin/workflows/actions/migratedocument.md) including copy and move operations
- Document property field (metadata) update, including:
  - __Send fixed value__, __send crawled value__ — these actions apply new metadata value entered by user or retrieved from the related NDC database field, respectively.
  - __Send classification value__ — this action writes classification metadata (__Taxonomy__) into the selected property field (__Field Name__). If multiple classification values are applied, they will be written using delimiters.
  - __Write O365 Label__, __Remove O365 Label__ — use these actions to write or remove Office 365 retention label as document metadata. These labels are typically used to automatically apply data protection policies to your documents.

  __NOTE:__ These actions require Microsoft Office 365 retention labels to be configured. See [this Microsoft article](https://docs.microsoft.com/en-us/microsoft-365/compliance/labels) for details.

  - __Filtered Targeted Meta Update__ — this advanced action can be used to update a SharePoint property based on rules embedded in the taxonomy clues. Enter the document property to update in the __Update Field__, then select the required __Taxonomy__ and enter __Match Field__, i.e. the field name/clue to match on.
- Apply MIP Label, Remove MIP Label — these actions, respectively, apply and remove sensitivity label to/from a document stored on a file system, using Microsoft Information Protection (MIP). This helps to automate protection policies application. See Modify MIP Label for details.

To configure actions for SharePoint documents using the Advanced interface:

1. In administrative web console, navigate to Workflows and select the workflow you want to configure action for.
2. Click the workflow, then click Add next to Rule Actions.
3. In the Add Action dialog, select the action you need from the __SharePoint__ section in the Action Type list.

[![action_advanced_sp_update_field_thumb_0_0](/img/product_docs/dataclassification/ndc/admin/workflows/advancedwindow/action_advanced_sp_update_field_thumb_0_0.png)](/docs/dataclassification/resources/images/workflows/action_advanced_sp_update_field.png)

# Advanced Actions for Content Server

In addition to the __Email Alert__ ,__Migrate Document__ and additional classification actions, for the documents stored on your Content Server you can instruct the program to update the document property field (metadata) with the values you specify.

For that, configure __Update Field__ as the automated action, using the Advanced UI window :

1. In administrative web console, navigate to Workflows and select the workflow you want to configure action for.
2. Click the workflow, then click Add next to Rule Actions.
3. In the Add Action dialog, from the Action Type list select __Update Field__ in the __Content Server__.

Then specify the following action parameters

| Action parameter | Description | Comments |
| --- | --- | --- |
| __Field Name__ | Provide the internal name or ID of the document property field (metadata) that should be updated. | This can be, for example, DocType, URL, Last modified date, etc. |
| __Value__ | Select where the new field value should be obtained from. | You can use static or crawled value, similarly to SharePoint (as described in the Update Field section). |

[![action_advanced_cs_update_field_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/workflows/advanced_window/action_advanced_cs_update_field_thumb_0_0.png)](/img/versioned_docs/dataclassification_5.6.2/ndc/workflows/action_advanced_cs_update_field.png)

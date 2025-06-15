# Box

This section contains information on how to exclude Box files or folders from being crawled, and how to configure writing classification attributes back to the content files (i.e. "tagging").

## Configure Exclusions

You can define the list of file locations that will be ignored when indexing files in Box, i.e. excluded from processing. For that, do the following:

1. In the management console, click __Sources__ → __Box__, then in the left pane click Collection Exclusions.
2. Click __Add__.

![boxexclusions](../../../../../../static/img/product_docs/dataclassification/ndc/admin/sources/database/boxexclusions.webp)

3. Click __Filter__ and in the __Filter__ field specify the objects (files or folders) to exclude:

   To exclude a certain file, enter _box://`<your_box_enterprise_ID>`/`<full_path>`_.
   For example: _box://26298724/Test Folder/Test Document.docx_

   Wildcards can be used anywhere in the exclusion pattern definition as follows:

   - The asterisk character (\*) matching any sequence of characters
   - The question mark character (?) matching any single character

   For example:

   - _box://26298724/Test Folder/\*_ will exclude all documents in the folder
   - _\*/Restricted Folder/\*_ will exclude specific folder in any Box source

__NOTE:__ Exclusions are case-insensitive.

4. To verify exclusion location, enter its path in the __Test Path__ field and click __Test__.
5. If needed, you can use metadata conditions to restrict when an exclusion filter should be applied. For that, click __Condition__ tab and click __Add__. Then select how the exclusion conditions will work: it can check if metadata field of the document has any value, is not specified, or matches a specific metadata value.

   | Criteria | Condition |
   | --- | --- |
   | Comparison | Compare a value in the document metadata field with the value set by condition. With this criteria selected, you will then need to specify:  - __Field name__ — document metadata field to check - __Comparison__ — operator to use (for example, "does not contain") - __Value__ — value to compare against For example, to exclude documents tagged with year 2018, set the condition as follows:  - __Field Name__ — _DocYear_ - __Comparison__ — _equals_ - __Value__ — _2018_ |
   | Has any value | Exclude the document if its metadata field has any value. With this criteria selected, specify __Field Name__. |
   | Has no values | Exclude the document if metadata field value is not specified. With this criteria selected, specify __Field Name__. |

   ![gdrive_exclusion_condition_2_thumb_0_0](../../../../../../static/img/product_docs/dataclassification/ndc/admin/sources/box/gdrive_exclusion_condition_2_thumb_0_0.webp)

   When finished, click __Add__.
6. To verify the settings, click __Test__.
7. Finally, click __Save__ and close the window.

## Configure Tagging

To enable the management of metadata for any document type, Box provides the ability to configure Metadata Templates with collections of attributes (see [this article](https://community.box.com/t5/Organizing-and-Tracking-Content/Using-Metadata/ta-p/30765) for details) ).

In addition to metadata, Box supports the concept of “Tags” to enhance the search experience (see [this article](https://community.box.com/t5/Organizing-and-Tracking-Content/Using-Tags/ta-p/29001) for details).

Netwrix Data Classification supports both of these mechanism: each registered taxonomy can be mapped to a metadata property. Related settings can be configured at a global level (default), or at a source level, as described below. Consider the following:

- To write tags, the program will use the crawling user account, so ensure that this account has permissions to create tags.
- To create missing Metadata Templates and attributes, ensure that the crawling user account has permissions to create and manage Metadata Templates.

Refer to Box documentation for information on user account permissions.

To configure tagging

1. In the management console, click __Sources__ →__Box__, then in the left pane click Write Configuration.
2. Select the taxonomy you need and click the __Edit__ link for it.
3. In the taxonomy properties, enable writing classification attributes (tags) and specify other settings:

| Setting | Description | Note |
| --- | --- | --- |
| __Enabled__ | Use to enable / disables the writing of classifications for the selected taxonomy. | Cleared by default |
| __Field Name__ | Defines the attribute name to be used when persisting the classifications (metadata property name). | By default, Classification fields will be used. To use the Metadata Template as well, enter its name and attribute name in the following format: _MetadataTemplateName!!AttributeName_ |
| __Single Value Field__ | If selected, this option will cause only the highest scoring classification to be written to the field. |  |
| __Format__ | How the classifications should be formatted. | You can create a custom delimited combination of the labels / GUIDs. |
| __Name/ID__ or __Class__ | Depending on the format, take the term labels, IDs or a combination of both | The corresponding Delimiter must be a string or array type with a maximum length of 3. |
| __Prefix/__  __Suffix__ | Will be appended to the formatted string of classifications. |  |

![box_tagging_thumb_0_0](../../../../../../static/img/product_docs/dataclassification/ndc/admin/sources/box/box_tagging_thumb_0_0.webp)

Finally, click __Save__.

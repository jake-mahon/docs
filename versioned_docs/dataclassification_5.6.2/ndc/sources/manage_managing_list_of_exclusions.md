# Managing list of exclusions

When indexing SharePoint files, you can specify the list of file locations that will be ignored. For that, in the list of sources, select SharePoint, then select __Settings__ →__SharePoint Excluded__ on the left, and click __Add__.

1. On the __Filter__ tab, in the __Filter__ field specify the objects (files or folders) to exclude:

   To exclude a certain document, enter the page URL with no wildcard indicators (e.g. _http://test.sharepoint.com/sites/documents/excluded%20document.docx_

   ![manage_managing_list_of_exclusions](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/manage_managing_list_of_exclusions.png)

   You can use wildcards anywhere in the exclusion pattern definition as follows:

   - The asterisk character (\*) matching any sequence of characters
   - The question mark character (?) matching any single character

   For example:

   - _http://test.sharepoint.com/sites/documents/\*_ will exclude all documents in the folder
   - _\*/Restricted Folder/\*_ will exclude such folder in any site

__NOTE:__ Exclusions are case-insensitive.

2. Optionally, enter full exclusion URL to verify the settings and click __Test__.
3. If needed, you can use metadata conditions to restrict when an exclusion filter should be applied. For that, click __Condition__ tab and click __Add__. Then select how the exclusion conditions will work: it can check if metadata field of the document has any value, is not specified, or matches a specific metadata value.

   | Criteria | Condition |
   | --- | --- |
   | Comparison | Compare a value in the document metadata field with the value set by condition. With this criteria selected, you will then need to specify:  - __Field name__ — document metadata field to check - __Comparison__ — operator to use (for example, "does not contain") - __Value__ — value to compare against For example, to exclude documents tagged with year 2018, set the condition as follows:  - __Field Name__ — _DocYear_ - __Comparison__ — _equals_ - __Value__ — _2018_ |
   | Has any value | Exclude the document if its metadata field has any value. With this criteria selected, specify __Field Name__. |
   | Has no values | Exclude the document if metadata field value is not specified. With this criteria selected, specify __Field Name__. |

   [![gdrive_exclusion_condition_2_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/gdrive_exclusion_condition_2_thumb_0_0.png)](/versioned_docs/dataclassification_5.6.2/images/sources/gdrive_exclusion_condition_2.png)

   When finished, click __Add__.
4. Finally, click __Save__ and close the window.

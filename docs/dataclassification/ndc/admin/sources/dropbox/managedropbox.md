# Dropbox

This section contains information on how to exclude Dropbox files or folders from being crawled.

## Configure Exclusions

You can define the list of file locations that will be ignored when indexing files in Dropbox, i.e. excluded from processing. All Dropbox documents start with _https://www.dropbox.com/home/_ followed by the full path to the file. So, to exclude specific document, enter the full document URL. You can exclude all pages within a folder - for that, use a wildcard indicator (e.g. “_https://www.dropbox.com/home/Test Folder/\*_”).

To configure exclusions, do the following:

1. In the management console, click __Content Configuration → Sources__ → __Dropbox__, then in the left pane click Collection Exclusions.
2. Click __Add__.

   ![boxexclusions_thumb_0_0](../../../../../../static/img/product_docs/dataclassification/ndc/admin/sources/dropbox/boxexclusions_thumb_0_0.webp)
3. Click __Filter__ and in the __Filter__ field specify the objects (files or folders) to exclude:

   To exclude a certain file, enter `https://www.dropbox.com/home/<full_path_to_file>`.
   For example: _https://www.dropbox.com/home/Reports__/Test Document.docx_

   Wildcards can be used anywhere in the exclusion pattern definition as follows:

   - The asterisk character (\*) matching any sequence of characters
   - The question mark character (?) matching any single character

   For example:

   - __https://www.dropbox.com/home/_Test Folder/\*_ will exclude all documents in the folder
   - _\*/Restricted Folder/\*_ will exclude specific folder in any Dropbox source

__NOTE:__ Exclusions are case-insensitive.

4. Optionally, enter a test path to verify the settings and click __Test__.

   If needed, you can use metadata conditions to restrict when an exclusion filter should be applied. For that, click __Condition__ tab and click __Add__. Then select how the exclusion conditions will work: it can check if metadata field of the document has any value, is not specified, or matches a specific metadata value.

   | Criteria | Condition |
   | --- | --- |
   | Comparison | Compare a value in the document metadata field with the value set by condition. With this criteria selected, you will then need to specify:  - __Field name__ — document metadata field to check - __Comparison__ — operator to use (for example, "does not contain") - __Value__ — value to compare against For example, to exclude documents tagged with year 2018, set the condition as follows:  - __Field Name__ — _DocYear_ - __Comparison__ — _equals_ - __Value__ — _2018_ |
   | Has any value | Exclude the document if its metadata field has any value. With this criteria selected, specify __Field Name__. |
   | Has no values | Exclude the document if metadata field value is not specified. With this criteria selected, specify __Field Name__. |

   When finished, click __Add__.
5. Finally, click __Save__ and close the window.

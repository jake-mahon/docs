# Exchange Mailbox

For the Exchange Mailbox source, you can configure the list of folders/emails to exclude from processing. Do the following:

1. In the management console, click __Sources__ →__Exchange Mailbox__, then Collection Exclusion will be displayed.
2. To create an exclusion, click __Add__.
3. ![boxexclusions](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/database/boxexclusions.png)
4. In the __Details__ window, on the __Filter__ tab enter the name of the entity to exclude. Consider the following:
   - If you specify a folder name (e.g. “Drafts”) with no special characters, then any folders with that specific name will be excluded. Note that adding an exclusion of this type will match any folders with the name provided, wherever they are within the mailbox.
   - Wrapping the exclusion in wildcard indicators (e.g. “\*Deleted\*”) will match any folder/email with “Deleted” somewhere in the title.

   __NOTE:__ You can optionally enter exclusion location in the __Test Path__ field to verify the new filter, and click __Test__.
5. If needed, you can use metadata conditions to restrict when an exclusion filter should be applied. For that, click __Condition__ tab and click __Add__. Then select how the exclusion conditions will work: it can check if metadata field of the document has any value, is not specified, or matches a specific metadata value.

   | Criteria | Condition |
   | --- | --- |
   | Comparison | Compare a value in the document metadata field with the value set by condition. With this criteria selected, you will then need to specify:  - __Field name__ — document metadata field to check - __Comparison__ — operator to use (for example, "does not contain") - __Value__ — value to compare against For example, to exclude documents tagged with year 2018, set the condition as follows:  - __Field Name__ — _DocYear_ - __Comparison__ — _equals_ - __Value__ — _2018_ |
   | Has any value | Exclude the document if its metadata field has any value. With this criteria selected, specify __Field Name__. |
   | Has no values | Exclude the document if metadata field value is not specified. With this criteria selected, specify __Field Name__. |

   When finished, click __Add__.
6. Finally, click __Save__ and close the window.

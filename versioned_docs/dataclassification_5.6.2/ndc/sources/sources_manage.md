# Manage Sources and Control Data Processing

The following commands are available on the __General__ tab of the __Sources__ section:

- Delete—Removes the source from processing. Its content will not appear in the search results in due course.

__NOTE:__ This does not delete content from the external system

- Re-Collect—Queues the source for re-processing. Crawled items will be deleted, and the entire source re-crawled
- Re-Index—Queues a source or item to be re-indexed regardless of if the documents were changed or not. You can select Re-Index scope:

  - Selected Item(s) and All Descendants — select to Re-Index an Item and child of a child of so forth child element.
  - Selected Item(s) and Children — select to Re-Index an Item and its direct child elements.
  - Selected Item(s) Only — select to Re-Index only current item and ignore its child elements.
- Re-Classify—Queues a source or item to be re-classified against the latest configured classification rules

__NOTE:__ See [Index Maintenance](/versioned_docs/dataclassification_5.6.2/ndc/utilities/utilities_cleaner.md) for more information on these operations.

- Pause—Temporarily pauses source content processing
- Resume—Resumes a source from a temporary pause
- Add To Group—Adds a source to a logical container (Source Group), either an existing or a newly created one.

Besides, in the source list on the __General__ tab you can do the following for selected source:

- [View Results](/versioned_docs/dataclassification_5.6.2/ndc/sources/view_content.md)
- __Edit__ the source details by clicking on the "gear" icon
- __View source-specific statistics__ by clicking on the "chart" icon
- __View detailed information__ by clicking on the “i” icon
- __Navigate to the source__ by clicking on the “link” icon

![sources](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/sources.png)

__NOTE:__ When adding a source or managing source configuration, the most commonly used source settings are displayed by default. However, some source types have additional configuration options that can be displayed by clicking the Advanced Settings ("wrench" icon). You can allow these advanced settings to be always shown to authorized users. [See Users and Security Settings for more information.](/versioned_docs/dataclassification_5.6.2/ndc/security/users.md)

## Modify Source Settings

To edit configuration settings for the certain source, select the source and go to the corresponding tab, e.g. __Box__ or __SharePoint__. Then you can, in particular, specify __Write configuration__ (i.e. "tagging") settings and apply source-specific parameters. See [Use Tagging](/versioned_docs/dataclassification_5.6.2/ndc/sources/tagging.md) for more information.

See also:

- [Database](/versioned_docs/dataclassification_5.6.2/ndc/sources/database/manage_database.md)
- [Exchange Mailbox](/versioned_docs/dataclassification_5.6.2/ndc/sources/database/manage_exchange.md)
- [File System](/versioned_docs/dataclassification_5.6.2/ndc/sources/file_system/manage_file_system.md)
- [ Google Drive](/versioned_docs/dataclassification_5.6.2/ndc/sources/google_drive/manage_googledrive.md)
- [SharePoint](/versioned_docs/dataclassification_5.6.2/ndc/sources/sharepoint/manage_sharepoint.md)

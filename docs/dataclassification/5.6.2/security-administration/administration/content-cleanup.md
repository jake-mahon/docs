# Step 1: Maintenance Operation

Select the operation you want to perform:

- Rebuild Index—All content processing results (text/metadata) will be retained, but the search
  index will be truncated. Then the program will re-do all indexing/classification (during that
  process, search results will be unavailable). Optionally you can choose to Shrink - this will
  rebuild the Text.cse file removing any fragmentation. Shrink will require sufficient disk space to
  process (up to the existing size of Text.cse)
- Re-Collect Index— The search index will be cleaned (all documents from the source will be removed
  from it). Then the program will re-crawl all configured sources and update the search index
  (during that process, search results will be unavailable).

**NOTE:** This option is recommended after setting up DQS configuration.

- Delete Index—Delete all content from both the search index and the NDC SQL database.

![cleaner_step_1](/img/versioned_docs/dataclassification_5.6.2/ndc/utilities/cleaner_step_1.webp)

# Step 2: Maintenance Options

Specify options for the operation you have selected.

| Operation selected | Available options                                                                                  | Details                                                                                                                                                                                                                 |
| ------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Rebuild Index**  | **Shrink the "text.cse" file?** - **Shrink** - **Don't Shrink** (default)                          | Selecting **Shrink** will rebuild the _Text.cse_ file, removing any fragmentation. **Shrink** will require sufficient disk space to process (up to the existing size of _Text.cse_) and may take some time to complete. |
| All operations     | **Would you like to re-run the product configuration wizard?** - **Run** - **Don't Run** (default) | Select **Run** if you want to re-configure this instance by going through the initial steps of the product configuration. Note that this will pause all sources.                                                        |

![cleaner_step_2_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/utilities/cleaner_step_2_thumb_0_0.webp)

# Step 3: Summary

Review the selected operation (action) and its options you have specified.

Clicking **Next** will confirm and start the maintenance operation.

![cleaner_step_3_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/utilities/cleaner_step_3_thumb_0_0.webp)

# Step 4: Process

Finally, wait for the selected maintenance operation to complete. Until then, search results will be
unavailable.

# Index Maintenance

**NOTE:** Only available for ‘Superusers’.

You may need to reprocess content or even clean the environment on a large scale —for example, after
a large amount of content has been deleted, or after configuring a DQS environment. In such
scenarios, index should also be maintained — to ensure data consistency. To automate maintenance
operations, you can use a built-in tool named Cleaner.

To launch the Cleaner tool

1. Open NDC Management Web Console.
2. Navigate to **Settings**→ **Config** and click **Run Cleaner**.
3. Then follow the steps of **Index Maintenance** wizard.

![run_cleaner_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/utilities/run_cleaner_thumb_0_0.webp)

See next:

- [Step 1: Maintenance Operation](/docs/dataclassification/5.6.2/security-administration/administration/content-cleanup.md)
- [Step 2: Maintenance Options](/docs/dataclassification/5.6.2/security-administration/administration/content-cleanup.md)
- [Step 3: Summary](/docs/dataclassification/5.6.2/security-administration/administration/content-cleanup.md)
- [Step 4: Process](/docs/dataclassification/5.6.2/security-administration/administration/content-cleanup.md)

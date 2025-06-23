# File Types > FS_FileTypes Job

The FS_FileTypes job is designed to report on file type information from targeted file servers.

![File Types > FS_FileTypes Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/content/filetypesjobstree.webp)

The FS_FileTypes job is located in the File Types job group.

## Analysis Tasks for the FS_FileTypes Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **File Types** >
**FS_FileTypes** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_FileTypes Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/content/filetypesanalysis.webp)

The following analysis tasks are selected by default:

- 1. Create File Types View – Creates the SA_ENG_FSAA_FileTypeView view accessible under the job’s
     Results node
- 2. Ranked File Extensions – Creates the SA_FS_FileTypes_ExtensionsRanked table accessible under
     the job’s Results node
- 3. File Types by Share – Creates the SA_FS_FileTypes_TypesByShare table accessible under the
     job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_FileTypes job produces the
following pre-configured report:

| Report     | Description                                                                                                                                    | Default Tags | Report Elements                                                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| File Types | This report identifies what types of files are located within your distributed file system and how much space they are taking up in gigabytes. | None         | This report is comprised of two elements: - Pie Chart – Displays file types extensions ranked - Table – Provides details on file types by share |

# Stale > FS_StaleContent Job

The FS_StaleContent job is designed to report on stale content information from targeted file
servers.

![Stale > FS_StaleContent Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/content/stalejobstree.webp)

The FS_StaleContent job is located in the Stale job group.

## Analysis Tasks for the FS_StaleContent Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **Stale** >
**FS_StaleContent** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_StaleContent Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/content/stalecontentanalysis.webp)

The following analysis tasks are selected by default:

- 1. Create Aging View – Creates the SA_ENG_FSAA_FolderAging table accessible under the job’s
     Results node
- 2. Enterprise Summary – Creates the SA_FS_StaleContent_EnterpriseSummary table accessible under
     the job’s Results node
- 3. Share Summary – Creates the SA_FS_StaleContent_ShareSummary table accessible under the job’s
     Results node
- 4. Host Summary – Creates the SA_FS_StaleContent_HostSummary table accessible under the job’s
     Results node

In addition to the tables created by the analysis tasks, the FS_StaleContent job produces the
following pre-configured reports:

| Report                                                | Description                                                                                                                                                                                                                                  | Default Tags | Report Elements                                                                                                                                                                                          |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hosts with Stale Content (Servers with Stale Content) | Identifies servers with stale content. Staleness is determined by files' last modified date. For these reports, by default, a file is considered stale after a year. Counts are based on Shares and Folders which contain any stale content. | None         | This report is comprised of three elements: - Pie Chart – Displays enterprise aging summary - Stacked Bar Chart– Displays aging summary by host - Table – Provides details on servers with stale content |
| Shares with Stale Content                             | Identifies shares with stale content. Staleness is determined by files' last modified date. For these reports, by default, a file is considered stale after a year. Counts are based on Shares and Folders which contain any stale content.  | None         | This report is comprised of two elements: - Bar Chart – Displays share summary - Table – Provides details on shares                                                                                      |

# 4.Content Job Group

The 4.Content job group is designed to report on content information from targeted file servers. Key
information reported on in this group is: File Types, File Sizing, Stale Content, and File Tags.

![4.Content Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 4.Content job group is comprised of:

- [File Types > FS_FileTypes Job](/docs/accessanalyzer/11.6/solutions/file-systems/content-analysis.md)
  – Designed to report on file type information from targeted file servers
- [Sizing Job Group](/docs/accessanalyzer/11.6/solutions/file-systems/content-analysis.md)
  – Designed to report on file sizing information from targeted file servers
- [Stale > FS_StaleContent Job](/docs/accessanalyzer/11.6/solutions/file-systems/content-analysis.md)
  – Designed to report on stale content information from targeted file servers
- [Tags Job Group](/docs/accessanalyzer/11.6/solutions/file-systems/content-analysis.md)
  – Designed to report on content classification information from targeted file servers

# FS_EmptyResources Job

The FS_EmptyResources job is designed to report on empty resources from targeted file servers.

## Analysis Tasks for the FS_EmptyResources Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **Sizing** >
**FS_EmptyResources** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_EmptyResources Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/content/sizing/emptyresourcesanalysis.webp)

The following analysis tasks are selected by default:

- 1. Folder Size View – Creates the SA_ENG_FSAA_FolderSizeView view accessible under the job’s
     Results node
- 2. Empty Folders – Creates the SA_FS_EmptyResources_EmptyFolders table accessible under the
     job’s Results node
- 3. Empty Shares – Creates the SA_FS_EmptyResources_EmptyShares table accessible under the job’s
     Results node
- 4. Summarize by Host – Creates the SA_FS_EmptyResources_HostSummary table accessible under the
     job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_EmptyResources job
produces the following pre-configured reports:

| Report        | Description                                                 | Default Tags | Report Elements                                                                                                                                                                                                     |
| ------------- | ----------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empty Folders | Identifies empty folders with no subdirectories.            | None         | This report is comprised of three elements: - Bar Chart – Displays the top five servers by empty folders - Table – Provides details on empty folders - Table – Provides details on the top servers by empty folders |
| Empty Shares  | This report identifies empty shares with no subdirectories. | None         | This report is comprised of three elements: - Bar Chart – Displays the top 5 servers by empty shares - Table – Provides details on the empty shares - Table – Provides summary of the share                         |

# FS_LargestResources Job

The FS_LargestResources job is designed to report on the largest resources from targeted file
servers.

## Analysis Tasks for the FS_LargestResources Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **Sizing** >
**FS_LargestResources** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_LargestResources Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/content/sizing/largestresourcesanalysis.webp)

The following analysis tasks are selected by default:

- 1. Largest Folders Ranked – Creates the SA_FS_LargestResources_Ranked table accessible under the
     job’s Results node
- 2. Largest Shares – Creates the SA_FS_LargestResources_SharesRanked table accessible under the
     job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_LargestResources job
produces the following pre-configured reports:

| Report          | Description                                                       | Default Tags | Report Elements                                                                                                                               |
| --------------- | ----------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Largest Folders | This report identifies the largest folders found.                 | None         | This report is comprised of two elements: - Bar Chart – Displays the top 5 largest folders - Table – Provides details on largest folders      |
| Largest Shares  | This report identifies the largest shares within the environment. | None         | This report is comprised of two elements: - Bar Chart – Displays the top 5 largest shares - Table – Provides details on the largest resources |

# FS_SmallestResources Job

The FS_SmallestResources job is designed to report on the smallest resources from targeted file
servers.

## Analysis Tasks for the FS_SmallestResources Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **Sizing** >
**FS_SmallestResources** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_SmallestResources Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/content/sizing/smallestresourcesanalysis.webp)

The following analysis tasks are selected by default:

- 1. Smallest Folders Ranked – Creates the SA_FS_SmallestResources_Ranked table accessible under
     the job’s Results node
- 2. Smallest Shares – Creates the SA_FS_SmallestResources_SharesRanked table accessible under the
     job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_SmallestResources job
produces the following pre-configured report:

| Report          | Description                                            | Default Tags | Report Elements                                                                            |
| --------------- | ------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------ |
| Smallest Shares | Identifies the smallest shares within the environment. | None         | This report is comprised of one element: - Table – Provides details on the smallest shares |

# Sizing Job Group

The Sizing job group is designed to report on file sizing information from targeted file servers.

![Sizing Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/content/sizing/sizingjobstree.webp)

The Sizing job group is comprised of:

- [FS_EmptyResources Job](/docs/accessanalyzer/11.6/solutions/file-systems/content-analysis.md)
  – Designed to report on empty resources from targeted file servers
- [FS_LargestResources Job](/docs/accessanalyzer/11.6/solutions/file-systems/content-analysis.md)
  – Designed to report on the largest resources from targeted file servers
- [FS_SmallestResources Job](/docs/accessanalyzer/11.6/solutions/file-systems/content-analysis.md)
  – Designed to report on the smallest resources from targeted file servers

# FS_AIPLabels Job

The FS_AIPLabels job is designed to report on resources classified by AIP labels from targeted file
servers.

## Analysis Tasks for the FS_AIPLabels Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **Tags** >
**FS_AIPLabels** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_AIPLabels Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/content/tags/aiplabelsanalysis.webp)

The following analysis task is selected by default:

- AIP Label Details – Creates the SA_FS_FileLabel_Details table accessible under the job’s Results
  node

In addition to the tables and views created by the analysis task, the FS_AIPLabels job produces the
following pre-configured report:

| Report     | Description                                                                                                                               | Default Tags | Report Elements                                                                                                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AIP Labels | This report provides details on labels applied to files. This information is rolled up by folder, and summarized at the enterprise level. | None         | This report is comprised of three elements: - Pie Chart – Displays enterprise AIP summary - Table– Provides details on label details by folder - Table – Provides details on labels by file count |

# FS_FileTags Job

The FS_FileTags job is designed to report on resources classified with metadata file tags from
targeted file servers.

## Analysis Tasks for the FS_FileTags Job

View the analysis tasks by navigating to the **FileSystem** > **4.Content** > **Tags** >
**FS_FileTags** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_FileTags Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/content/tags/filetagsanalysis.webp)

The following analysis task is selected by default:

- List file tag details – Creates the SA_FS_FileTags_Details table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis task, the FS_FileTags job produces the
following pre-configured report:

| Report    | Description                                                                                                                             | Default Tags | Report Elements                                                                                                                                                                               |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File Tags | This report provides details on tags applied to files. This information is rolled up by folder, and summarized at the enterprise level. | None         | This report is comprised of three elements: - Pie Chart – Displays enterprise tag summary - Table– Provides details on tag details by folder - Table – Provides details on tags by file count |

# Tags Job Group

The Tags job group is designed to report on content classification information from targeted file
servers.

![Tags Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/content/tags/tagsjobstree.webp)

The Tags job group is comprised of:

- [FS_AIPLabels Job](/docs/accessanalyzer/11.6/solutions/file-systems/content-analysis.md)
  – Designed to report on resources classified by AIP labels from targeted file servers
- [FS_FileTags Job](/docs/accessanalyzer/11.6/solutions/file-systems/content-analysis.md)
  – Designed to report on resources classified with metadata file tags from targeted file servers

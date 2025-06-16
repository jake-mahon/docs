# Use Tagging

## Overview

Tagging in Netwrix Data Classification means writing classification attributes back to the content
files. Tagging enables external systems (that is, not directly integrated with Netwrix Data
Classification) to leverage the automatically generated classifications for a variety of business
purposes, for example:

- Enriching the search experience
- Driving the application of DLP/Security labelling
- Enabling external workflow applications
- Applying IT policies to the classified objects

Tagging is designed to work as natively as possible with each source type. Therefore, each
integration varies in the way that classifications can be written, with some overlaps.

Typically, to use tagging, you need to take the following steps:

1. Ensure that an appropriate license has been loaded to enable document tagging. For that, go to
   **System Configuration** →**Config → Licensing → Licensing Summary**.
2. Ensure that the credentials you plan to use for accessing the source system have been granted the
   appropriate **Modify** permissions.
3. Ensure that tagging has been enabled for the source objects— for that, select the **Write
   Classifications** option in the source settings.
4. Configure the source-specific settings to map the classifications results back to the source
   properties, as described in the related section.

**NOTE:** If you are unsure of the correct source specific settings to use, then we recommend
initially working with some sandbox data.

You can **Pause** source processing while you are configuring the correct settings to ensure that no
tagging will occur with partial/incorrect configuration settings.

## Configure tagging for content sources

To learn how to set up tagging for the certain content sources, refer to related sections of these
chapters:

- [Box](/versioned_docs/dataclassification_5.6.2/ndc/sources/box/manage_box.md)
- [Database](/versioned_docs/dataclassification_5.6.2/ndc/sources/database/manage_database.md)
- [File System](/versioned_docs/dataclassification_5.6.2/ndc/sources/file_system/manage_file_system.md)
- [ Google Drive](/versioned_docs/dataclassification_5.6.2/ndc/sources/google_drive/manage_googledrive.md)
- [SharePoint](/versioned_docs/dataclassification_5.6.2/ndc/sources/sharepoint/manage_sharepoint.md)

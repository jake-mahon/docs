---
title: Box
sidebar_label: Box
description: Use the Box source configuration window to set up the crawling and classification operations for content stored in a Box Enterprise account. By default,...
---

# Box

Use the **Box** source configuration window to set up the crawling and classification operations for
content stored in a Box Enterprise account.

By default, configuration window displays basic configuration settings only. It is recommended that
you click the "wrench" icon in the bottom left corner to configure advanced settings.

**NOTE:** To configure advanced settings, your user account may need advanced privileges.
[See Users and Security Settings for more information.](/docs/dataclassification/5.6.2/security-administration/user-management/users-roles.md)

![addbox_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/box/addbox_thumb_0_0.webp)

Configure the following:

| Setting                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Basic settings**                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| JSON Import                                    | Drag and drop the JSON file with Box app configuration settings that you downloaded at [Step 1. Create the App](/docs/dataclassification/5.6.2/configuration/infrastructure/cloud-storage-configuration.md#step-1-create-the-app) (see #12). The program then parses this file so that many settings are filled in automatically.                                                                                                                                                                                                                                                                                                                                                                            |
| Enterprise ID                                  | Specifies the internal unique identifier for your Box account (filled in automatically).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| API Key                                        | _Client ID_ of the Box app created at [Step 1. Create the App](/docs/dataclassification/5.6.2/configuration/infrastructure/cloud-storage-configuration.md#step-1-create-the-app)(Filled in automatically.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Client Secret                                  | Will be generated when allowing access to the Netwrix Data Classification app. Is also known as the “App Key”.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Public Key ID Private Key Private Key Password | Created when generating the trust between your Box account, and the Netwrix Data Classification app – these should be kept secret and secure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Write Classifications                          | Identifies whether classifications should be written back to the Box source documents. Classification results can either be written to classification templates or to the generic ‘tags’ property. This is specified using the **Write Configuration** setting of the source. For more information, see [Use Tagging](/docs/dataclassification/5.6.2/data-sources/managing-sources.md)                                                                                                                                                                                                                                                                                                                       |
| Source Group                                   | Select the source group (if any).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Pause source on creation                       | Select if you want to make other configuration changes before collection of the source occurs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Advanced settings**                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Email Address                                  | Specify one or more users (email addresses) for impersonated crawling. - If specified explicitly, the crawling engine will impersonate these users when crawling their content as well as shared content where they are the owners. Enter one or several accounts from those listed in the _Managed Users_ on the '_Users and Groups_' tab of the Box console. - If not specified explicitly, the program will automatically create and use an admin user account (_NDC Crawling Account_) for crawling. Remember to provide this app user account with sufficient permissions for the content you want to index (i.e. share access). To share content for crawling with this account, use group membership. |
| Re-Index Period                                | Specifies how often the source should be checked for changes (period in days). Default is **7** days.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Priority                                       | Set priority for this data source to be crawled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Document Type                                  | Specify a value which can be used to restrict queries when utilizing the Netwrix Data Classification search index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

See also:

- [Configure Box for Crawling](/docs/dataclassification/5.6.2/configuration/infrastructure/cloud-storage-configuration.md)
- [Manage Sources and Control Data Processing](/docs/dataclassification/5.6.2/data-sources/managing-sources.md)

# Box

This section contains information on how to exclude Box files or folders from being crawled, and how
to configure writing classification attributes back to the content files (i.e. "tagging").

## Configure Exclusions

You can define the list of file locations that will be ignored when indexing files in Box, i.e.
excluded from processing. For that, do the following:

1. In the management console, click **Sources** → **Box**, then in the left pane click Collection
   Exclusions.
2. Click **Add**.

![boxexclusions](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/database/boxexclusions.webp)

3. Click **Filter** and in the **Filter** field specify the objects (files or folders) to exclude:

   To exclude a certain file, enter `box://<your_box_enterprise_ID>/<full_path>`. For example:
   _box://26298724/Test Folder/Test Document.docx_

   Wildcards can be used anywhere in the exclusion pattern definition as follows:

   - The asterisk character (\*) matching any sequence of characters
   - The question mark character (?) matching any single character

   For example:

   - _box://26298724/Test Folder/\*_ will exclude all documents in the folder
   - _\*/Restricted Folder/\*_ will exclude specific folder in any Box source

**NOTE:** Exclusions are case-insensitive.

4. To verify exclusion location, enter its path in the **Test Path** field and click **Test**.
5. If needed, you can use metadata conditions to restrict when an exclusion filter should be
   applied. For that, click **Condition** tab and click **Add**. Then select how the exclusion
   conditions will work: it can check if metadata field of the document has any value, is not
   specified, or matches a specific metadata value.

   | Criteria      | Condition                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
   | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Comparison    | Compare a value in the document metadata field with the value set by condition. With this criteria selected, you will then need to specify: - **Field name** — document metadata field to check - **Comparison** — operator to use (for example, "does not contain") - **Value** — value to compare against For example, to exclude documents tagged with year 2018, set the condition as follows: - **Field Name** — _DocYear_ - **Comparison** — _equals_ - **Value** — _2018_ |
   | Has any value | Exclude the document if its metadata field has any value. With this criteria selected, specify **Field Name**.                                                                                                                                                                                                                                                                                                                                                                   |
   | Has no values | Exclude the document if metadata field value is not specified. With this criteria selected, specify **Field Name**.                                                                                                                                                                                                                                                                                                                                                              |

   ![gdrive_exclusion_condition_2_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/gdrive_exclusion_condition_2_thumb_0_0.webp)

   When finished, click **Add**.

6. To verify the settings, click **Test**.
7. Finally, click **Save** and close the window.

## Configure Tagging

To enable the management of metadata for any document type, Box provides the ability to configure
Metadata Templates with collections of attributes (see
[this article](https://community.box.com/t5/Organizing-and-Tracking-Content/Using-Metadata/ta-p/30765)
for details) ).

In addition to metadata, Box supports the concept of “Tags” to enhance the search experience (see
[this article](https://community.box.com/t5/Organizing-and-Tracking-Content/Using-Tags/ta-p/29001)
for details).

Netwrix Data Classification supports both of these mechanism: each registered taxonomy can be mapped
to a metadata property. Related settings can be configured at a global level (default), or at a
source level, as described below. Consider the following:

- To write tags, the program will use the crawling user account, so ensure that this account has
  permissions to create tags.
- To create missing Metadata Templates and attributes, ensure that the crawling user account has
  permissions to create and manage Metadata Templates.

Refer to Box documentation for information on user account permissions.

To configure tagging

1. In the management console, click **Sources** →**Box**, then in the left pane click Write
   Configuration.
2. Select the taxonomy you need and click the **Edit** link for it.
3. In the taxonomy properties, enable writing classification attributes (tags) and specify other
   settings:

| Setting                  | Description                                                                                             | Note                                                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Enabled**              | Use to enable / disables the writing of classifications for the selected taxonomy.                      | Cleared by default                                                                                                                                                                     |
| **Field Name**           | Defines the attribute name to be used when persisting the classifications (metadata property name).     | By default, Classification fields will be used. To use the Metadata Template as well, enter its name and attribute name in the following format: _MetadataTemplateName!!AttributeName_ |
| **Single Value Field**   | If selected, this option will cause only the highest scoring classification to be written to the field. |                                                                                                                                                                                        |
| **Format**               | How the classifications should be formatted.                                                            | You can create a custom delimited combination of the labels / GUIDs.                                                                                                                   |
| **Name/ID** or **Class** | Depending on the format, take the term labels, IDs or a combination of both                             | The corresponding Delimiter must be a string or array type with a maximum length of 3.                                                                                                 |
| **Prefix/** **Suffix**   | Will be appended to the formatted string of classifications.                                            |                                                                                                                                                                                        |

![box_tagging_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/box/box_tagging_thumb_0_0.webp)

Finally, click **Save**.

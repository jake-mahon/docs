---
title: operations
sidebar_label: operations
description: Documentation for operations functionality in Access Analyzer including configuration and usage information.
---

# Add Tags

Use the Parameters page to specify the file tags the action adds.

![File System Action Module Wizard Add Tags Parameters page](/img/product_docs/accessanalyzer/admin/action/filesystem/parameters/addtags.webp)

Use the fields provided to select tags from the drop-down lists and populate the Tag field, or edit
the field manually. The Preview field updates based on the contents of the Tag field.

- Add Mode:

  - Append to existing tags - Adds new tags to the existing list of tags
  - Overwrite existing tags - Removes all existing tags before adding newly configured tags

**NOTE:** If choosing the option to overwrite tags, the action module will clear out both normal
tags and Boldon James tags and then proceed to apply the tags configured for overwrite. If choosing
the option to remove all tags, the action module will clear out both normal tags and Boldon James
tags.

- Fields – Use the drop-down list to select a field (column) from the source table, then click the
  blue arrow to insert the item into the **Tag** field
- Environment Variables – Select an item from the drop-down list, then click the blue arrow to
  insert the item into the **Tag** field
- Preview – Shows what the compound path specified will be resolved in to
- Click **Add** to add the tag field to the list
- Click **Remove** to remove the tag field from the list

![Boldon James Column on Add Tags Parameters page](/img/product_docs/accessanalyzer/admin/action/filesystem/parameters/addremovetagsboldonjames.webp)

- Type - Select which type of tag to add. The two types of tags that can be added are:

  - Regular - Configure new tag as a regular tag
  - Boldon James - Configure new tag as a Boldon James tag

    **NOTE:** The Boldon James column indicates whether a file tag is a regular tag or a Boldon
    James tag. Regular tags will be identified with **0**. Boldon James tags will be identified
    with **1**.

A list of supported file types appears at the bottom of the page.

# Change Attributes

Use the Change File Attributes Parameters page to change the attribute for one or more of the target
systems or data.

![File System Action Module Wizard Change File Attributes Parameters page](/img/product_docs/accessanalyzer/admin/action/filesystem/changeattributes.webp)

Select from the following options:

- Read-only – Set the file / folder to read only
- Archive – Archive the file / folder
- System – Stop / start a system process
- Hidden – Set the file / folder to hidden
- Compress – Compress the file / folder
- Encrypt – Encrypt the file / folder

Attribute change options are:

- Set – Applies the attribute
- Clear – Removes the attribute
- Leave intact – Leaves the attribute unchanged

# Change Owner

Use the Change Owner Parameters page to select a trustee to be the new owner.

![File System Action Module Wizard Change Owner Parameters page](/img/product_docs/accessanalyzer/admin/action/filesystem/parameters/changeowner.webp)

Use the options to enter the trustees:

- Insert field – Use the drop-down list to select a field (column) from the source table, then click
  the blue arrow
- Alternatively click **Select** to select a user or group object
- Replace owner on all child objects – Check to enable

# Change Permission Inheritance

Use the Change Permission Inheritance Parameters page to specify how to change inherited
permissions.

![File System Action Module Wizard Change Permissions Inheritance Parameters page](/img/product_docs/accessanalyzer/admin/action/filesystem/parameters/changepermissionsinheritance.webp)

Select the desired options for adding or removing inheritance.

# Change Permissions and Auditing

Use the Change Permissions and Auditing Parameters page to specify the permissions and auditing
settings the action changes.

![File System Action Module Wizard Change Permissions and Auditing Parameters page](/img/product_docs/accessanalyzer/admin/action/filesystem/parameters/changepermissionsauditing.webp)

Use the following options to enter the Permissions:

- Insert field – Use the drop-down list to select a field (column) from the source table, then click
  the blue arrow
- Group or user names:

  - Click **Add** to select a user or group object
  - Click **Remove** to remove a user or group object
  - Dynamic – Uses the host id to retrieve the applicable permissions

In the table, select from the following options:

- Permission – Permissions for the selected user or group object
- Action – Modify the attribute for the selected permission
- Action Apply To – Select the files or folders to apply the action to.
- Audit – Report the status of the change to the attribute
- Audit Apply To - Select the files or folders to report the status on

Select from the following options (Multiple options can be selected):

- Overwrite existing file explicit permissions (target object only)
- Replace permission entries on all child objects
- Apply these permissions to objects within the target container only

# Change Share Permissions

Use the Change Share Permissions Parameters page to specify the permission status for what group or
users are to be changed.

![File System Action Module Wizard Change Share Permissions Parameters page](/img/product_docs/accessanalyzer/admin/action/filesystem/parameters/changesharepermissions.webp)

Select the desired options for changing the permissions control of the selected group or users.

# Remove File Permissions

Use the Remove File Permissions Parameters page to specify whose file permissions the action
removes.

![File System Action Module Wizard Remove File Permissions Parameters page](/img/product_docs/accessanalyzer/admin/action/filesystem/parameters/removefilepermissions.webp)

Use the options to enter the Permissions:

- Insert field – Use the drop-down list to select a field (column) from the source table, then click
  the blue arrow
- Group or user names:
- Click **Add** to select a user or group object
- Click **Remove** to remove a user or group object

Specify how to change inherited permissions Select from the following options:

- Copy others – Make them explicit
- Remove others – Remove all
- Leave all intact – Delete explicit permissions only

# Remove Share Permissions

Use the Remove Share Permissions Parameters page to specify whose share permissions the action
removes.

![File System Action Module Wizard Remove Share Permissions Parameters page](/img/product_docs/accessanalyzer/admin/action/filesystem/parameters/removesharepermissions.webp)

Use the options to enter the Permissions:

- Insert field – Use the drop-down list to select a field (column) from the source table, then click
  the blue arrow
- Group or user names:

  - Click **Add** to select a user or group object
  - Click **Remove** to remove a user or group object

# Remove Tags

Use the Parameter page to specify the file tags the action removes.

![File System Action Module Wizard Remove Tags Parameters page](/img/product_docs/accessanalyzer/admin/action/filesystem/parameters/removetags.webp)

Use the fields provided to select tags from the drop-down lists and populate the Tag field, or edit
the field manually. The Preview field updates based on the contents of the Tag field.

- Remove Mode:

  - Remove specified tags - Remove specified tags from the existing list of tags
  - Remove all tags - Remove all existing tags

**NOTE:** If choosing the option to overwrite tags, the action module will clear out both normal
tags and Boldon James tags and then proceed to apply the tags configured for overwrite. If choosing
the option to remove all tags, the action module will clear out both normal tags and Boldon James
tags.

- Fields – Use the drop-down list to select a field (column) from the source table, then click the
  blue arrow to insert the item into the **Tag** field
- Environment Variables – Select an item from the drop-down list, then click the blue arrow to
  insert the item into the **Tag** field
- Preview – Shows what the compound path specified will be resolved in to
- Click **Add** to add the tag field to the list for removal
- Click **Remove** to remove the tag field from the list for removal

![Boldon James Column on Remove Tags Parameters page](/img/product_docs/accessanalyzer/admin/action/filesystem/parameters/addremovetagsboldonjames.webp)

- Type - Select which type of tag to remove. The two types of tags that can be removed are:

  - Regular - Specify a regular tag for removal
  - Boldon James - Specify a Boldon James tag for removal

    **NOTE:** The Boldon James column indicates whether a file tag is a regular tag or a Boldon
    James tag. Regular tags will be identified with **0**. Boldon James tags will be identified
    with **1**.

A list of supported file types appears at the bottom of the page.

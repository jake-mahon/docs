# Import Additional Owners

The __Import Additional Owners__ wizard enables you to specify additional owners for a group using an external file.

The wizards search the directory for objects listed in the external file, and if found, adds them as additional owners to the group.

Supported file formats are:

- Text (.txt)
- Comma Separated Value (.csv)
- Microsoft Excel (.xls and .xlsx)
- Extensible Markup Language (.xml)

What do you want to do?

- [Import additional owners using a wizard](#Import-additional-owners-using-a-wizard)

## Import additional owners using a wizard

Use the __Import__ button on the __Owners__ tab of the New Group page and in group properties to launch the __Import Additional Owners__ wizard.

1. On the __File__ page, click __Browse__ to locate and select the file containing the data to upload.
2. Click the __Up__ arrow to upload the file to the GroupID server for processing.
3. Click __Next__.
4. On the __Import__ page, follow these steps:

   1. In the __Import Options__ section, select this site/domain or the entire directory from the __Search__ drop-down list.

      The wizard compares records in the import file with records in the selected domain or directory to update the group's membership.
   2. In the __Map Field__ area, map a field in the source file (__Source Field__) with a directory attribute (__Destination__).

      The value in the selected source field is compared to the value of the selected destination field, and records with matching values are added to the group as members.
5. The __Preview__ page displays the possible outcome of the import process based on the settings specified on the previous pages. The wizard processes the records from the source file by matching the values of the source and destination
   fields. Results displayed may include the following types of items:

   - __Resolved Items:__

     Shows all objects that will be successfully processed.
   - __Unresolved Items:__

     Shows objects that will not be processed because a matching object could not be found in the destination directory.
   - __Ambiguous Items:__

     Shows objects for which duplicate entries were found in the destination directory.
6. Click __Finish__ to import the Additional Owners.

__See Also__

- [Groups](/versioned_docs/groupid_11.0/groupid/portal/group/create/overview.md)
- [Dynasty](/versioned_docs/groupid_11.0/groupid/portal/group/dynasty/overview.md)
- [Group Properties](/versioned_docs/groupid_11.0/groupid/portal/group/properties/overview.md)

# Import Group Members

The __Import Members__ wizard enables you to add members to the group using an external file.

The wizards search the directory for objects listed in the external file, and if found, adds them as members to the group.

Supported file formats are:

- Text (.txt)
- Comma Separated Value (.csv)
- Microsoft Excel (.xls and .xlsx)
- Extensible Markup Language (.xml)

## Import group members using a wizard

Use the __Import__ button on the __Members__ tab of the New Group page and in group properties to launch the __Import Members__ wizard.

1. On the __Lifecycle__ page, select whether the imported members should be added permanently or temporarily to the group membership. You can also import members from an existing group.

   - __Import Members Perpetually__: to add imported members permanently to the group membership.
   - __Import Members Temporarily__: to add imported members to the group membership for a specific period. At end of the period, the imported members are automatically removed from membership.
   - __Import Members From Group(s)__: to add all members of another group or groups to the membership of this group. See [Import members of an existing group to this group](#Import-members-of-an-existing-group-to-this-group).
2. In case of temporary membership, use the __Duration__ list to specify the membership duration of the imported members. Options are:

   - __7 Days__, to add members to the group for 7 days starting today.
   - __30 Days__, to add members to the group for 30 days starting today.
   - __60 Days__, to add members to the group for 60 days starting today.
   - __90 Days__, to add members to the group for 90 days starting today.
   - __Custom__, to add objects to the group for the period you specify in the __From Date__ and __To Date__ boxes.
3. Click __Next__.
4. On the Data Source page, select the data source that contains the objects to import to the group membership from the directory. Select either of the two options:

   - __Local File__

     1. On the __File__ page, click __Browse__ to locate and select the file containing the data to upload.
     2. Click the __Up__ arrow to upload the file to the Directory Manager server for processing.
     3. The __File Options__ section appears after uploading the file. Select the sheet from the drop-down list.
     4. Click __Read Data__ to complete the selection process.
     5. Click __Next__.
   - __External Data Source__

     1. On the __Providers__ page, select [Query Designer](/docs/product_docs/groupid/groupid/portal/group/querydesigner/overview.md) to create a query. The query will fetch all those members that match the set criteria.

        The Query Designer is not working. After adding provider in the data source, it is unable to read the table.
     2. Click __Next__.
5. On the __Import__ page, follow these steps:

   1. In the __Import Options__ section, select this site/domain or the entire directory from the __Search__ drop-down list.

      The wizard compares records in the import file with records in the selected domain or directory to update the group's membership.
   2. In the __Map Field__ area, map a field in the source file (__Source Field__) with a directory attribute (__Destination__).

      NOTE: While establishing mapping between a source field and a destination directory attribute, select a source field that has unique values, such as email address or sAMAccountName.

      The value in the selected source field is compared to the value of the selected destination field, and records with matching values are added to the group as members.
6. Click __Next__.
7. The __Preview__ page displays the possible outcome of the import process based on the settings specified on the previous pages. The wizard processes the records from the source file by matching the values of the source and destination
   fields. Results displayed may include the following types of items:

   - __Resolved Items:__

     Shows all objects that will be successfully processed.
   - __Unresolved Items:__

     Shows objects that will not be processed because a matching object could not be found in the destination directory.
   - __Ambiguous Items:__

     Shows objects for which duplicate entries were found in the destination directory.
8. If you do not want existing group members to be deleted during import, make sure that the __Append existing items (uncheck to replace)__ check box is selected.
9. Click __Finish__ to import members from the specified file or provider.

## Import members of an existing group to this group

You can import all members of an existing group or groups to the membership of another group.

Use the __Import__ button on the __Members__ page of the New Group wizard and in group properties to launch the __Import Members__ wizard.

1. On the __Lifecycle__ page, select the __Import Members From Group(s)__ option to add all members of another group or groups to the membership of this group.
2. Click the __Search Groups__ button; the [Find Dialog Box](/docs/product_docs/groupid/groupid/portal/search/find.md) is displayed, where you can search and select the group(s) whose members you want to import into the membership of this
   group.
3. Click __Next__.
4. The __Preview__ page lists the groups whose members are to be imported. Click the name of a group to view a list of its members.
5. If you do not want existing group members to be deleted during import, make sure that the __Append existing items (uncheck to replace)__ check box is selected.
6. Click __Finish__ to import members from the selected group(s).

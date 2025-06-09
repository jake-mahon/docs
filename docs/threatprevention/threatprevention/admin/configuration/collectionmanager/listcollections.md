# List of Collections Window

Use the List of Collections window to add new items to a collection as well as edit and remove existing items.

Click __Configuration__ > __Collections__ on the menu to launch the [Collection Manager Window](/docs/threatprevention/threatprevention/admin/configuration/collectionmanager/overview.md). Then either double-click a Collection or select a Collection and click the Manage button to open the List of Collections window.

![List of Collections window](/img/product_docs/threatprevention/threatprevention/admin/configuration/collectionmanager/listofcollections.png)

At the top of the window, the Collection Category is displayed. Each item in the list displays:

- Name – Name of the collection
- Item Count – Number of items in the collection
- Dependency Count – Number of policies or policy templates referencing the collection

Use the Add, Edit, Remove, Dependencies, and Export buttons to modify a collection.

## Add New Collection Window

Follow the steps to add a static collection.

__Step 1 –__ Click __Add__ on the List of Collections window to open the Add New Collection window.

![Add New Collections window](/img/product_docs/threatprevention/threatprevention/admin/configuration/collectionmanager/addnewcollection.png)

__Step 2 –__ Select an option:

- The _I will provide a list_ option button enables the default setting for a static collection.
- The _I want a list to come from the database table_ option button enables a dynamic collection. Enter the table name in the textbox that appears or select it from the drop-down menu. See the [Dynamic Collections](/docs/threatprevention/threatprevention/admin/configuration/collectionmanager/dynamic.md) topic for additional information.

__Step 3 –__ Provide a unique, descriptive name for the collection in the name box.

__Step 4 –__ Provide a detailed description in the Description box.

__Step 5 –__ The Created By, Created On, Modified By, and Modified On boxes are automatically populated when collections are created or changed.

__Step 6 –__ Use the Add (+) button to search for Items that match the selected Collection category.

The Select… window opens. Select a server/Agent from the drop-down menu and click __Connect__. Expand the domain tree in the navigation pane. Select an item in the Results pane on the right and click __OK__. See the [Selection Windows](/docs/threatprevention/threatprevention/admin/policies/eventtype/window/overview.md) topic for additional information.

![Select window](/img/product_docs/threatprevention/threatprevention/admin/configuration/collectionmanager/selectadobjects.png)

Use the __Remove__ (x) button to remove Items from the list on the Add New Collection window.

Some collection can be configured to be dynamic collections. See the [Dynamic Collections](/docs/threatprevention/threatprevention/admin/configuration/collectionmanager/dynamic.md) topic for additional information. The Perpetrators and Lockdown Perpetrators collections also have the option to expand group membership. See the [Expand Groups Option for Perpetrators & Objects Collection](#Expand-Groups-Option-for-Perpetrators-Objects-Collection) topic for additional information.

__Step 7 –__ When the configuration is set as desired, click __OK__ to save the collection.

## Expand Groups Option for Perpetrators & Objects Collection

The Expand Groups option on the Add New Collection window is only available for the following collections:

- Perpetrators
- Lockdown Perpetrators
- Objects
- Lockdown Objects

![Expand Groups option on the Add New Collection window](/img/product_docs/threatprevention/threatprevention/admin/configuration/collectionmanager/expandgroups.png)

- For Perpetrators – If checked, the groups and nested-groups are expanded to monitor effective group membership at the user level. This means the Agent monitors/blocks based on the user’s token instead of the group’s token. The impact specifically for Lockdown Perpetrators collections is that this option allows for the immediate blocking of a currently logged in user who has had a group membership change while logged in.
- For Objects – If checked, when a group object is added, then the groups and nested-groups are expanded to monitor effective group membership at the user level. This means the Agent monitors/blocks based on the user’s token instead of the group’s token. The impact specifically for Lockdown Objects collections is that this option allows for the immediate blocking of a currently logged in user who has had a group membership change while logged in.

The Expand Groups option does NOT apply to other object types.

There is a maximum cap of 1000 users/objects that can be expanded. If the total number of users or objects of the groups added to a single collection exceeds 1000, then the Agent defaults to monitoring/blocking based on the groups’ tokens.

If group membership cannot be resolved, then the Agent defaults to monitoring/blocking based on the groups’ tokens.

## Edit Collection Window

__Step 1 –__ Select a collection on the List of Collections window and click __Edit__. The Edit Collection window opens.

![Edit Collection Window](/img/product_docs/threatprevention/threatprevention/admin/configuration/collectionmanager/editcollection.png)

__Step 2 –__ You can modify the name, description, and items in the collection. See the [Add New Collection Window](#Add-New-Collection-Window) topic for additional information on these settings.

## Remove Collection

__Step 1 –__ Select a collection on the List of Collections window and click __Remove__.

__NOTE:__ You cannot delete a collection that is assigned to an active policy, as indicated in the Dependency Count column. Remove a collection from all policies it has been assigned to before deleting it.

![Confirm Removal window](/img/product_docs/threatprevention/threatprevention/admin/configuration/collectionmanager/confirmremoval.png)

__Step 2 –__ Click __Yes__ on the Confirm Removal window to delete the collection.

## Collection Dependencies Window

__Step 1 –__ Select a collection on the List of Collections window and click __Dependencies__ to open the Collection Dependencies window.

![Collection Dependencies Window](/img/product_docs/threatprevention/threatprevention/admin/configuration/collectionmanager/dependencies.png)

__Step 2 –__ This window displays a list of all policy templates and policies the selected collection is assigned to. View the list and click __OK__.

## Export Collections

You can select one or more collections on the List of Collections window and export their information to a TSV file.

Follow the steps to export a collection in the list.

__Step 1 –__ Select one or more collections on the List of Collections window and click __Export__.

__Step 2 –__ The Save As window opens. It displays the default file name and location where it will be saved. Modify if required and click __Save__.

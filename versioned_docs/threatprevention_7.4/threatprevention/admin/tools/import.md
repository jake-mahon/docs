# Import Window

You may need to export collections, policies, and templates from the Administration Console and them import them back for certain reasons, such as during a reinstall. The Export Policies and Templates Window enables you to export these items to an XML file. See the [Export Policies and Templates Window](/versioned_docs/threatprevention_7.4/threatprevention/admin/tools/exportpoliciestemplates.md) topic for additional information on export.

The Import window enables you to select an already exported XML file for import and configure the import settings.

Follow the steps to import the file.

__Step 1 –__  Open the Import window in any of the following ways:

- Click __Tools__ > __Import__ on the menu.
- Use the keyboard shortcut (Alt+I).

![Import Window](/img/versioned_docs/groupid_11.0/groupid/portal/import.png)

The Import window includes options for specifying the locations where imported policies and templates will be saved, and how duplicate items will be handled.

__Step 2 –__ In the Select Import File section, use the ellipsis (…) to browse for the XML file to be imported. Once selected, the Import File Details box displays statistical information on what will be imported and notes that were added while exporting the file.

__Step 3 –__ The Destination Folders section enables you to specify a folder from within the folder structure in the Navigation pane for saving the policies and/or templates imported from the XML file. For policies, you can specify a folder under the Policies node in the navigation pane. For templates, you can specify a folder under the Templates node.

__NOTE:__ You cannot create new folder locations.

Select one of the following option buttons:

- Place in Folders from Which They Were Exported – Imports the policies and templates to the same folders as the ones in which they existed at the time of export.
- Place in Specific Folders – Choose an option button:
  - Place All in This Single Folder –Select this option and then use the Folder Destination for Policies and/or Folder Destination for Templates box to select a folder for importing the policies and/or templates respectively. All policies from the XML file will be imported to the selected folder while ignoring any folder hierarchy mentioned in the XML file. The same is true for templates.
  - Maintain Folder Hierarchy from Which They Were Exported – Select this option and then use the Folder Destination for Policies and/or Folder Destination for Templates box to select a folder for importing the policies and/or templates respectively. All policies from the XML file will be imported with the selected folder acting as the parent folder, and any folder hierarchy as it was at the time of export will be re-created. The same is true for templates.

Use the ellipsis (…) next to the Folder Destination for Policies and/or Folder Destination for Templates box to browse for the folder where you want to import the policies and/or templates respectively.

- For policies, the Select Folder window limits you to select a location under the Policies node in the Navigation pane.
- For templates, the Select Folder window limits you to select a location under the Templates node in the Navigation pane.

__Step 4 –__ In the Collections section, select an option button:

- Create Collection with All Imported Items
- Create Empty Collection

__Step 5 –__ Check the Append Import Details to Modified Entries checkbox to append the import information to a pre-existing item instead of overwriting it. This means that if a policy, template or collections exists in the system with the same name as in the XML file, the system will add the information from the XML file to it. If this checkbox is not checked, the system will overwrite the existing policy, template or collection with the respective item from the XML file.

__Step 6 –__ When the options are set as desired, click __Import__.

Information from the XML file is imported into Threat Prevention as per the configured settings.

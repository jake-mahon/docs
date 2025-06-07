# Export Objects

Administrators can use this to export one or more objects, including all child objects, into a single view for easy review and management. For each export, you select the settings and optional profiles and permission sets to include in the object details. The export is done in the background to avoid timing out or exceeding the Salesforce Governor Limits. You will receive an email with a link to the [Export Object Attachment](/docs/product_docs/strongpointsalesforceflashlight/tools/export_object_attachment_records.md) record, where you can download your file.

NOTE: Strongpoint stores Object-level permissions in a Custom Object. There are two reports (__Flashlight__ > __Reports / List Views__ > __Customizations__) for easy access to this information:  
__Permissions by Object__  
__Object Permissions by Profile__

1. Open __Flashlight__ > __Tools__ > __Export Objects__  
   __Objects__ is the default tab. __Profiles and Permission Sets__ and __Users__ exports are on their own tabs.![export_object_800x500](/static/img/product_docs/strongpointsalesforceflashlight/tools/export_object_800x500.png)
2. Scroll through the __Select Objects to be Exported__, or enter all or part of a name in __Filter__ to filter the list.
3. Select one or more objects in the scroll box. Use __Shift__ or __Ctrl__ to select multiple objects.
4. Click the right arrow to move the items to the __Selected Objects__ list. To remove an item from the __Selected Objects__ list, select it and click the left arrow.
5. Select the __Settings to be exported__.  
   ![export_object_settings](/static/img/product_docs/strongpointforsalesforce/tools/export_object_settings.png)
6. Optional: Select one or more profiles to be included for more security information.![export_object_profiles_800x685](/static/img/product_docs/strongpointsalesforceflashlight/tools/export_object_profiles_800x685.png)
7. Optional: Select one or more permission sets to be included for more security information.![export_object_permissions_800x130](/static/img/product_docs/strongpointsalesforceflashlight/tools/export_object_permissions_800x130.png)
8. __Click Download XLS__ to export your selections. The file _ObjectExport.xls_ is created in your download folder.

### ObjectExport.xls File

When you open an exported file, this message may be displayed, as the exported _ObjectExport.xls_ file is in XML instead of the Excel format. Click __Yes__ to load the file.

![Excel error message - Click Yes to continue.](/static/img/product_docs/strongpointforsalesforce/tools/export_excel_error_msg.png)

The _ObjectExport.xls_ file contains a __Summary__ tab and a separate tab for each selected object.

The __Summary__ tab shows who created the export, the creation date and time, list of selected objects, and lists of any selected optional Profiles and Permission Sets.  
![export_object_summary](/static/img/product_docs/strongpointforsalesforce/tools/export_object_summary.png)

The __Object__ tabs contain all of the requested information for each object.![export_object_object_tab_800x401](/static/img/product_docs/strongpointsalesforceflashlight/tools/export_object_object_tab_800x401.png)

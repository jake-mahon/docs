# Export Objects

Administrators can use this to export one or more objects, including all child objects, into a single view for easy review and management. For each export, you select the settings and optional profiles and permission sets to include in the object details. The export is done in the background to avoid timing out or exceeding the Salesforce Governor Limits. You will receive an email with a link to the [Export Object Attachment](export_object_attachment_records.md) record, where you can download your file. You can also use the __Download Files__ link on this page or on the Netwrix Dashboard to download your file.

Platform Governance for Salesforce stores Object-level permissions in a Custom Object. There are two reports (__Netwrix Dashboard__ > __Reports__ > __Access Reports__) for easy access to this information:

> __Permissions by Object__
>
> __Object Permissions by Profile/PermSet__

Open __Netwrix Dashboard__ > __Tools__ > __Export Objects__  
__Objects__ is the default tab.

![export_object](../../../static/img/product_docs/strongpointforsalesforce/tools/export_object.webp)

Objects

Enter all or part of a name in __Filter__ to filter the list of objects.

Select one or more objects in the list. Selected options are shown below the filter. Click the __X__ within the selected option to remove it. You can use the __Select All__ and __Clear All__ options.

![Select the objects](../../../static/img/product_docs/strongpointforsalesforce/tools/export_object_filter.webp)

Settings to be Exported

Click the toggles to activate or inactivate the settings you want to export.

![export_object_settings](../../../static/img/product_docs/strongpointforsalesforce/tools/export_object_settings.webp)

Profiles: Object and Field Level Security (Optional)

Enter all or part of a name in __Filter__ to filter the list of profiles.

Select one or more profiles in the list. Selected options are shown below the filter. Click the __X__ within the selected option to remove it. You can use the __Select All__ and __Clear All__ options.

![export_object_profiles](../../../static/img/product_docs/strongpointforsalesforce/tools/export_object_profiles.webp)

Permission Sets: Object and Field Level Security (Optional)

Enter all or part of a name in __Filter__ to filter the list of permission sets.

Select one or more permission sets in the list. Selected options are shown below the filter. Click the __X__ within the selected option to remove it. You can use the __Select All__ and __Clear All__ options.

![export_object_permissions](../../../static/img/product_docs/strongpointforsalesforce/tools/export_object_permissions.webp)

Download XLS

Click __Download XLS__ to export your selections. An email is sent with a link to the file _Object_Export.xls_.

Download Files

Click __Download Files__ to see a list of generated files. The file does not appear in the list until it is complete.

![Download files](../../../static/img/product_docs/strongpointforsalesforce/tools/export_object_download.webp)

Click on the export name. The Export Attachments tab is opened, showing the attachment detail for your file. Click __View file__ to download it to your Downloads folder.

### ObjectExport.xls File

When you open an exported file, this message may be displayed, as the exported _ObjectExport.xls_ file is in XML instead of the Excel format. Click __Yes__ to load the file.

![Excel error message - Click Yes to continue.](../../../static/img/product_docs/strongpointforsalesforce/tools/export_excel_error_msg.webp)

The _ObjectExport.xls_ file contains a __Summary__ tab and a separate tab for each selected object.

The __Summary__ tab shows who created the export, the creation date and time, list of selected objects, and lists of any selected optional Profiles and Permission Sets.

![export_object_summary](../../../static/img/product_docs/strongpointforsalesforce/tools/export_object_summary.webp)

The __Object__ tabs contain all of the requested information for each object.

![export_object_object_tab](../../../static/img/product_docs/strongpointforsalesforce/tools/export_object_object_tab.webp)

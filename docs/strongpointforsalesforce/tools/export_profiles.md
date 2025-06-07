# Export Profiles and Permission Sets

Administrators can use this tool to export all user permissions into a single view for easy review and management. The export is done in the background to avoid timing out or exceeding the Salesforce Governor Limits. You will receive an email with a link to the [Export Object Attachment](/docs/product_docs/strongpointforsalesforce/tools/export_object_attachment_records.md) record, where you can download your file.

1. Open __Netwrix Dashboard__ > __Tools__ > __Export Objects__.
2. Open the __Profiles & Permission Sets__ tab.

   ![export_profile_ui](/static/img/product_docs/strongpointforsalesforce/tools/export_profile_ui.png)
3. Scroll through the __Select Profile to be Exported__.
4. Select one or more objects in the scroll box. Use __Shift__ or __Ctrl__ to select multiple objects.
5. Click the right arrow to move the items to the __Selected Profiles__ list. To remove an item from the __Selected Profiles__ list, select it and click the left arrow.
6. Select the __Settings to be exported__.

   ![export_profile_ui_settings](/static/img/product_docs/strongpointforsalesforce/tools/export_profile_ui_settings.png)
7. Click __Download XLS__. The file _ProfileExport.xls_ is created.

### ProfilesExport.xls File

When you open an exported file, this message may be displayed, as the exported _ProfilesExport.xls_ file is in XML instead of the Excel format. Click __Yes__ to load the file.

![Excel error message - Click Yes to continue.](/static/img/product_docs/strongpointforsalesforce/tools/export_excel_error_msg.png)

The _ProfilesExport.xls_ file contains a __Summary__ tab and a separate tab for each selected profile.

The __Summary__ tab shows who created the export, the creation date and time, and the list of selected profiles.

![export_profile_summary](/static/img/product_docs/strongpointforsalesforce/tools/export_profile_summary.png)

The __Profile__ tabs contain all of the requested information for each profile.

![export_profile_profile](/static/img/product_docs/strongpointforsalesforce/tools/export_profile_profile.png)

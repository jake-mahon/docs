# Export Users

Exports user information to an XLS file.

Administrators can use this tool to export all user information into a single view for easy review and management. The export is done in the background to avoid timing out or exceeding the Salesforce Governor Limits. You receive an email with a link to the [Export Object Attachment](/docs/strongpointforsalesforce/tools/export_object_attachment_records.md) record, where you can download your file.

1. Open __Netwrix Dashboard__ > __Tools__ > __Export Objects__
2. Open the __Users__ tab.

   ![export_users](/img/product_docs/strongpointforsalesforce/tools/export_users.png)
3. Scroll through the __Select User to be Exported__ or enter all of part .of a user name in the __Filter__ field.
4. Select one or more objects in the scroll box. Use __Shift__ or __Ctrl__ to select multiple objects.
5. Click the right arrow to move the items to the __Selected Users__ list. To remove an item from the __Selected Users__ list, select it and click the left arrow.
6. Select the __Settings to be exported__.

   ![export_users_settings](/img/product_docs/strongpointforsalesforce/tools/export_users_settings.png)
7. Click __Download XLS__. The file _UserExport.xls_ is created.

#### UserExport.xls File

When you open an exported file, this message may be displayed, as the exported _UserExport.xls_ file is in XML instead of the Excel format. Click __Yes__ to load the file.

![Excel error message - Click Yes to continue.](/img/product_docs/strongpointforsalesforce/tools/export_excel_error_msg.png)

The _UserExport.xls_ file contains a __Summary__ tab and a separate tab for each selected user.

The __Summary__ tab shows who created the export, the creation date and time, and the list of selected users.

![export_users_summary](/img/product_docs/strongpointforsalesforce/tools/export_users_summary.png)

The __User__ tabs contain all of the requested information for each exported user.

![export_users_user](/img/product_docs/strongpointforsalesforce/tools/export_users_user.png)

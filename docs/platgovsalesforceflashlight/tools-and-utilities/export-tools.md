---
title: Export Objects Tool
sidebar_label: Export Objects
description: Export one or more Salesforce objects with child objects, profiles, and permission sets into Excel files for easy review and management.
---

# Export Objects

Administrators can use this to export one or more objects, including all child objects, into a
single view for easy review and management. For each export, you select the settings and optional
profiles and permission sets to include in the object details. The export is done in the background
to avoid timing out or exceeding the Salesforce Governor Limits. You will receive an email with a
link to the [Export Object Attachment](/docs/platgovsalesforceflashlight/tools-and-utilities/export-tools.md) record, where you can
download your file.

NOTE: Strongpoint stores Object-level permissions in a Custom Object. There are two reports
(**Flashlight** > **Reports / List Views** > **Customizations**) for easy access to this
information:  
**Permissions by Object**  
**Object Permissions by Profile**

1. Open **Flashlight** > **Tools** > **Export Objects**  
   **Objects** is the default tab. **Profiles and Permission Sets** and **Users** exports are on
   their own
   tabs.![export_object_800x500](/img/product_docs/platgovsalesforceflashlight/tools/export_object_800x500.webp)
2. Scroll through the **Select Objects to be Exported**, or enter all or part of a name in
   **Filter** to filter the list.
3. Select one or more objects in the scroll box. Use **Shift** or **Ctrl** to select multiple
   objects.
4. Click the right arrow to move the items to the **Selected Objects** list. To remove an item from
   the **Selected Objects** list, select it and click the left arrow.
5. Select the **Settings to be exported**.  
   ![export_object_settings](/img/product_docs/platgovsalesforce/tools/export_object_settings.webp)
6. Optional: Select one or more profiles to be included for more security
   information.![export_object_profiles_800x685](/img/product_docs/platgovsalesforceflashlight/tools/export_object_profiles_800x685.webp)
7. Optional: Select one or more permission sets to be included for more security
   information.![export_object_permissions_800x130](/img/product_docs/platgovsalesforceflashlight/tools/export_object_permissions_800x130.webp)
8. **Click Download XLS** to export your selections. The file _ObjectExport.xls_ is created in your
   download folder.

### ObjectExport.xls File

When you open an exported file, this message may be displayed, as the exported _ObjectExport.xls_
file is in XML instead of the Excel format. Click **Yes** to load the file.

![Excel error message - Click Yes to continue.](/img/product_docs/platgovsalesforce/tools/export_excel_error_msg.webp)

The _ObjectExport.xls_ file contains a **Summary** tab and a separate tab for each selected object.

The **Summary** tab shows who created the export, the creation date and time, list of selected
objects, and lists of any selected optional Profiles and Permission Sets.  
![export_object_summary](/img/product_docs/platgovsalesforce/tools/export_object_summary.webp)

The **Object** tabs contain all of the requested information for each
object.![export_object_object_tab_800x401](/img/product_docs/platgovsalesforceflashlight/tools/export_object_object_tab_800x401.webp)

# Export Profiles and Permission Sets

Administrators can use this tool to export all user permissions into a single view for easy review
and management. The export is done in the background to avoid timing out or exceeding the Salesforce
Governor Limits. You will receive an email with a link to the
[Export Object Attachment](/docs/platgovsalesforceflashlight/tools-and-utilities/export-tools.md) record, where you can download your
file.

1. Open **Flashlight** > **Tools** > **Export Objects**.
2. Open the **Profiles and Permission Sets** tab.  
   ![export_profile_ui_800x685](/img/product_docs/platgovsalesforceflashlight/tools/export_object_profiles_800x685.webp)
3. Scroll through the **Select Profile to be Exported**.
4. Select one or more objects in the scroll box. Use **Shift** or **Ctrl** to select multiple
   objects.
5. Click the right arrow to move the items to the **Selected Profiles** list. To remove an item from
   the **Selected Profiles** list, select it and click the left arrow.
6. Select the **Settings to be exported**.  
   ![export_profile_ui_settings](/img/product_docs/platgovsalesforce/tools/export_profile_ui_settings.webp)
7. Click **Test Connection**.
8. Click **Download XLS**. The file _ProfileExport.xls_ is created.

### ProfilesExport.xls File

When you open an exported file, this message may be displayed, as the exported _ProfilesExport.xls_
file is in XML instead of the Excel format. Click **Yes** to load the file.

![Excel error message - Click Yes to continue.](/img/product_docs/platgovsalesforce/tools/export_excel_error_msg.webp)

The _ProfilesExport.xls_ file contains a **Summary** tab and a separate tab for each selected
profile.

The **Summary** tab shows who created the export, the creation date and time, and the list of
selected profiles.  
![export_profile_summary](/img/product_docs/platgovsalesforce/tools/export_profile_summary.webp)

The **Profile** tabs contain all of the requested information for each profile.
![export_profile_profile_800x728](/img/product_docs/platgovsalesforceflashlight/tools/export_profile_profile_800x728.webp)

# Export Users

Exports user information to an XLS file.

Administrators can use this tool to export all user information into a single view for easy review
and management. The export is done in the background to avoid timing out or exceeding the Salesforce
Governor Limits. You receive an email with a link to the
[Export Object Attachment](/docs/platgovsalesforceflashlight/tools-and-utilities/export-tools.md) record, where you can download your
file.

1. Open **Flashlight** > **Tools** > **Export Objects**
2. Open the **Users**
   tab.![export_users_800x397](/img/product_docs/platgovsalesforceflashlight/tools/export_users_800x397.webp)
3. Scroll through the **Select User to be Exported** or enter all of part .of a user name in the
   **Filter** field.
4. Select one or more objects in the scroll box. Use **Shift** or **Ctrl** to select multiple
   objects.
5. Click the right arrow to move the items to the **Selected Users** list. To remove an item from
   the **Selected Users** list, select it and click the left arrow.
6. Select the **Settings to be exported**.  
   ![export_users_settings](/img/product_docs/platgovsalesforce/tools/export_users_settings.webp)
7. Click **Download XLS**. The file _UserExport.xls_ is created.

#### UserExport.xls File

When you open an exported file, this message may be displayed, as the exported _UserExport.xls_ file
is in XML instead of the Excel format. Click **Yes** to load the file.

![Excel error message - Click Yes to continue.](/img/product_docs/platgovsalesforce/tools/export_excel_error_msg.webp)

The _UserExport.xls_ file contains a **Summary** tab and a separate tab for each selected user.

The **Summary** tab shows who created the export, the creation date and time, and the list of
selected
users.![export_users_summary_800x252](/img/product_docs/platgovsalesforceflashlight/tools/export_users_summary_800x252.webp)

The **User** tabs contain all of the requested information for each exported
user.![export_users_user_800x675](/img/product_docs/platgovsalesforceflashlight/tools/export_users_user_800x675.webp)

# Export Object Attachment Records

When [Object](/docs/platgovsalesforceflashlight/tools-and-utilities/export-tools.md), [Profile and Permission Set](/docs/platgovsalesforceflashlight/tools-and-utilities/export-tools.md) or
[User](/docs/platgovsalesforceflashlight/tools-and-utilities/export-tools.md) information is exported, an **Export Object Attachment** Record is
created for the export. When an export request is completed, you receive an email notification your
export file is ready. The link in the notification opens the **Export Object Attachment** Record in
Salesforce. Your download file is available under **Notes & Attachments**.

![Example Export Object Attachment detail](/img/product_docs/platgovsalesforceflashlight/tools/export_object_attach_record_800x226.webp)

The export history is saved in Salesforce. You can view the list, or add the Export Object
Attachments tabs to your menu bar.

> Salesforce Classic View
>
> Salesforce Lightning

## Salesforce Classic View

### View the List

1. Click the **+** in the menu bar to open the **All Tabs** list (Salesforce Classic).
2. Select **Export Object Attachments**.

![Export Object Attachments list](/img/product_docs/platgovsalesforce/tools/export_object_attach_record_list.webp)

### Add the **Export Object Attachments** Tab

1. Click the **+** in the menu bar to open the **All Tabs** list.
2. Click **Customize My Tabs**
3. Select **Export Object Attachments** from the **Available Tabs** and add it to the **Selected
   Tabs**.  
   ![Add Export Object Attachments to your menu bar in Classic view](/img/product_docs/platgovsalesforce/tools/export_object_attach_record_tab_classic.webp)
4. Click **Save**.

## Salesforce Lightning

### View the List

Enter **Export Object Attachments** in the **Search Salesforce** entry box on the top of your page.

### Add the **Export Object Attachments** Tab

1. Open **Setup** > **Apps** > **App Manager**
2. Locate **Strongpoint** in the list. From the pull down menu on the right, select **Edit**.
3. Select **Export Object Attachments** from the **Available Tabs** and add it to the **Selected
   Tabs**.  
   ![Add Export Object Attachments tab to your menu bar in Lightning](/img/product_docs/platgovsalesforce/tools/export_object_attach_record_tab_lightning.webp)
4. Click **Save**.

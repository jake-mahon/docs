# Folder Settings Page

The Folder Settings page within the Integrations interface allows users to designate the Investigation exports folder location. Additionally, a shared folder can be provided for subscription purposes.

![Integrations interface on the Folder Settings page](../../../../../../static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.webp)

By default, Investigation exports are placed in the Downloads folder of the logged in user, on the machine where that user is accessing the application. When a Local Folder path is designated, all Investigation exports are also stored in the specified folder on the application server.

When shared folders are added, they are displayed in a table at bottom of the page.

![Shared Folder table on the Folders Settings page](../../../../../../static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/sharedfoldertable.webp)

The Shared Folders table has the following columns:

- Display Name – The name of the shared folder as displayed in the application
- Path to the Shared folder – The path to the shared folder where subscription reports are stored
- Credential Profile – Name of the Credential Profile
- Access – The users that can save their subscription exports to the shared folder
- Last Time tested – Date timestamp when the the shared folder was tested to ensure it is configured correctly

Additional Options

When you hover over a row within the Shared Folders table, three additional options are displayed:

![Shared Folder table on the Folders Settings page showing additional options](../../../../../../static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/additionaloptions.webp)

- Refresh Arrow – Tests the shared folder configuration
- Edit – Opens the Add New Shared Folder window to edit the configured settings
- Trash – Deletes the shared folder, which prevents the application from using it

## Designate a Local Folder

Follow the steps to designate a local folder for Investigation exports.

__Step 1 –__ Use the gear icon in the upper right corner of the console to open the Configuration menu. Then select __Integrations__ to open the Integrations interface.

__Step 2 –__ On the Integrations interface, click __Folder Settings__ in the navigation pane.

![Local Folder settings on the Folder Settings page](../../../../../../static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/localfolder.webp)

__Step 3 –__ In the Path field, enter a valid folder path on the server where the application is installed. For example, C:\Reports.

__Step 4 –__ The Save button is enabled when any settings are modified. Click it to commit the changes before leaving the page.

Investigation exports will now be saved to the designated local folder on the application server.

## Add a Shared Folder

__NOTE:__  Prior to adding a shared folder, you must first configure a Credential Profile with Write access to the shared folder. See the [Credential Profile Page](credentialprofile.md) topic for additional information on creating a profile.

You can specify a shared folder for exporting investigations data from subscriptions through the Integrations menu. Follow the steps to add a shared folder.

__Step 1 –__ Use the gear icon in the upper right corner of the console to open the Configuration menu. Then select __Integrations__ to open the Integrations interface.

__Step 2 –__ On the Integrations interface, click __Folder Settings__ in the navigation pane.

__Step 3 –__ Click __Add Shared Folder__. The Add New Shared Folder window opens.

![Add New Shared Folder window](../../../../../../static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/addnewsharedfolderwindow.webp)

__Step 4 –__ Enter the following information:

- Display Name – Enter a name of the shared folder as displayed in the application
- Credential Profile – Select the Credential Profile by name from the drop-down menu. This was pre-created in the Credential Profiles page.
- Path – Enter a valid share path with the \\[SERVER NAME]\[PATH TO SHARED FOLDER] format. For example, \\NT-FS02\Subscriptions.
- Access – Allow specific users to access the folder when configuring subscriptions in the application. By default, this is set to All users. To limit access, select users from the drop-down menu. Only users granted application access through the System Settings > User Access page will be available in the drop-down.

__Step 5 –__ Click __Add__. The Add New Shared Folder window closes.

The specified shared folder has been configured for subscription exports.

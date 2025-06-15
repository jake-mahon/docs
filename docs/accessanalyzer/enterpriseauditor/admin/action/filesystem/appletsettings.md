# File System Action: Applet Settings

Use the Applet Settings page to specify the machines on which to execute the selected operation.

![File System Action Module Wizard Applet Settings page](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/appletsettings.webp)

Specify how the operations will be executed:

- Automatic – Get host data from the Host Management
- Local Access Analyzer server
- Specific remote server:

  - Fields – Use the drop-down list to select a field (column) from the source table, then click the blue arrow to insert the item into the __Remote server__ field
  - Environment Variables – Select an item from the drop-down list, then click the blue arrow to insert the item into the __Remote Server__ field
  - Remote Server – Enter the path to the server
  - Click the __ellipsis (…)__ to browse for server
  - Click the __tick__ icon to show a preview of the path
  - Click the __Help__ icon for additional information
- Preview – Shows what the compound path specified will be resolved in to. The text here is used to initialize the path specification selection dialog.
- Specific remote servers – Click the __ellipsis (…)__ to browse for servers

  - Click __Add__ to add the server
  - Click __Remove__ to remove the server
- Fall back to the local Access Analyzer server if an applet cannot start – Check to enable this option

# Import Location

Use the __Import Location__ option to import the physical location data for hosts and opens a customized version of the Import Hosts window. Add host locations from a CSV file or SQL Server database without creating a new host list. See the [Host Inventory Data Grid](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/datagrid.md) topic for information on the Location column of host inventory.

Follow the steps to import physical location data for hosts.

__Step 1 –__ Ensure the import source file has columns for both the host name as it is identified within Enterprise Auditor and the location.

__NOTE:__ When a host name does not match any existing hosts within the Host Master Table, it can be added as a new host.

![Import Location option on Activities pane](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/importlocation.png)

__Step 2 –__ Select the host list and click __Import Location__.

![Import Hosts window for importing location](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/importlocationwindow.png)

__Step 3 –__ On the Import Hosts window, use the __Import from__ dropdown to select the source as either __CSV File__ or __Database__.

__Step 4 –__ Configure the source file. The necessary fields depend on the selection in the previous step.

- CSV File

  - File Name – Click the ellipsis (__…__) to open a browser window and select the CSV file. This file needs to be stored on the Enterprise Auditor Console server. Once selected, a preview of the file is shown in the preview box.
  - Includes header row – Select this checkbox if the file contains a header row. Otherwise, the header row will be included in the import (visible within the preview box).

- Database

  - Data source – Identify the database. Click the ellipsis (__…__) to open the Data Link Properties window. Provide the required information on the Connection tab of the Data Link Properties window, and then click __OK__. See the [Import From a Database](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostdiscovery/wizard/database.md) topic for additional information.

    __NOTE:__ The Provider, Advanced, and All tabs of the Data Link Properties window should not be modified.
  - Table – Use the dropdown to select the table that contains the hosts to be imported. A preview of the selected table is displayed in the preview box.

__Step 5 –__ Use either the drop-down menu or click on the column in the preview box to select the column containing the host names. The selected column is highlighted in the preview box.

![Import Hosts window Location column selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/importlocationcsv.png)

__Step 6 –__ Use the __Import column__ drop-down menu to select the column containing the location information. The selected column is highlighted a lighter color in the preview box.

__Step 7 –__ Click __OK__ to complete the import.

![Imported Location column data in the data grid](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/importlocationcomplete.png)

The Location column now contains the imported information. If any of the hosts included in the import file are not already in the Host Master Table, Enterprise Auditor prompts for confirmation on whether or not to import the host. Selecting __Yes__ or __Yes to All__ adds the new hosts to the Host Master Table but not to any individual host lists.

__NOTE:__ Any new hosts that match dynamic host list criteria will be added to the appropriate dynamic host lists.

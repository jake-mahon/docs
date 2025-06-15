# Import Hosts Option

On the Manual Host Entry page of the Host List Wizard, the __Import__ option allows hosts to be imported from either a CSV file or a database into the host list being created.

Follow the steps to import hosts.

![Import option on the Manual Host Entry page of the Host List Wizard](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/actions/hostlistwizardimport.webp)

__Step 1 –__ On the Manual Host Entry page of the Host List Wizard, click __Import__. The Import Hosts window opens.

![Import Hosts window](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/actions/importhosts.webp)

__Step 2 –__ On the Import Hosts window, use the __Import from__ dropdown to select the source as either __CSV File__ or __Database__.

__Step 3 –__ Configure the source file. The necessary fields depend on the selection in the previous step.

![Import Hosts window for importing from CSV File](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/actions/importhostscsv.webp)

- CSV File

  - File Name – Click the ellipsis (__…__) to open a browser window and select the CSV file. This file needs to be stored on the Access Analyzer Console server. Once selected, a preview of the file is shown in the preview box.
  - Includes header row – Select this checkbox if the file contains a header row. Otherwise, the header row will be included in the import (visible within the preview box).

![Import Hosts window for importing from Database](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/actions/importhostsdatabase.webp)

- Database

  - Data source – Identify the database. Click the ellipsis (__…__) to open the Data Link Properties window. Provide the required information on the Connection tab of the Data Link Properties window, and then click __OK__. See the [Import From a Database](../../hostdiscovery/wizard/database.md) topic for additional information.

    __NOTE:__ The Provider, Advanced, and All tabs of the Data Link Properties window should not be modified.
  - Table – Use the dropdown to select the table that contains the hosts to be imported. A preview of the selected table is displayed in the preview box.

__Step 4 –__ Use either the drop-down menu or click on the column in the preview box to select the column containing the host names. The selected column is highlighted in the preview box.

__Step 5 –__ Click __OK__ to complete the import.

![Imported hosts added in the Host list box on the Manual Host Entry page of the Host List Wizard](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/actions/importhostscomplete.webp)

The Import Hosts window closes, and the imported list of host names is added in the Host list box on the Manual Host Entry page of the Host List Wizard. Click __Next__ to proceed with configuring the host list. See the [Add Hosts](add.md) topic for additional information on the Host List Wizard.

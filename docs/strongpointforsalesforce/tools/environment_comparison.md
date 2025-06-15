# Environment Comparison

Administrators use this tool to compare environments and generate an Excel report file with the results. This report can be used to troubleshoot processes or data causing errors in a particular account, compare preferences between accounts, or determine if data needs to migrate between accounts. An [Environment Compare Log](../reports/deployment_logs_environment_compare.md) is generated. The comparison can handle up to 10,000 items. You receive an email with a link to the [Export Object Attachment](export_object_attachment_records.md) record, where you can download your file. Here is the basic process:

Open __Netwrix Dashboard__ > __Tools__ > __Environment Comparison__

Select the Environments to Compare

Add Filters for the Comparison

Select Export Options

Run the Comparison

View the Report

## Select the Environments to Compare

![compare_env_environments](../../../static/img/product_docs/strongpointforsalesforce/tools/compare_env_environments.webp)

For both the __Source__ and __Target__ Environments:

Select your credentials from the drop down lists. Create credentials with the Credentials Handler.

The __Click here to proceed__ link opens the Credentials Handler where you can add, edit and sync your credentials.

## Add Filters for the Comparison

Filters determine what is included in the comparison. There are four options to add filters:

- Option 1: Select All Customizations of the Specified Metadata Type
- Option 2: Import All Customizations from a Selected Change Request
- Option 3: Select Specific Customizations
- Option 4: Packages to Exclude (All Options)

__NOTE:__ Filters are cumulative. Use a single filter (1 through 3) to avoid overlapping selections. __Packages to Exclude__ can be used in conjunction with options 1 through 3.

### Set a Metadata Type

__Metadata Type__
  
 Select a __All__ or a specific metadata type to compare from the list. If you select __Report__, only tabular and summary reports are compared. Metric and joined reports are not compared.

![compare_env_filters](../../../static/img/product_docs/strongpointforsalesforce/tools/compare_env_filters.webp)

### Import Customizations from a Change Request

__Change Request__
  
Enter a Change Request ID, or use the drop down to scroll through a list of available Change Requests.

![Import Customizations from a Change Request](../../../static/img/product_docs/strongpointforsalesforce/tools/compare_env_filters3.webp)

### Select Specific Customizations

1. Scroll through the __Search Customizations__, or enter all or part of a name to filter the list. You can __Select a Salesforce Type__ to limit this list. If you select __Report__, only tabular and summary reports are compared. Metric and joined reports are not compared.
2. Select one or more customizations in the __Select Customizations__ scroll box. Use __Shift__ or __Ctrl__ to select multiple customizations .
3. Click the right arrow to move the items to the __Selected Customizations__ list. To remove an item from the __Selected Customizations__ list, select it and click the left arrow.

![Add Filters with Individual Customizations](../../../static/img/product_docs/strongpointforsalesforce/tools/compare_env_filters2.webp)

### Packages to Exclude

1. Enter the package name in __Search Packages__.
2. Select one or more __Packages__ in the Select Packages to exclude scroll box.
3. Click the right arrow to move the items to the __Selected__ list. To remove an item from the __Selected__ list, select it and click the left arrow.

![Select packages to exclude](../../../static/img/product_docs/strongpointforsalesforce/tools/compare_env_filters4.webp)

## Select Export Options

Click __Export to Excel__ if you want to view the report in Excel. You receive an email when the Excel file is complete.

## Run the Comparison

Click __Compare__. The process is run in the background. You receive an email when the compare is complete.

## View the Report

1. Open the __Export Attachments__ tab. Change the Export Attachments from __Recently Viewed__ to __All__ if necessary to see your report. Refer to [Export Object Attachment](export_object_attachment_records.md) for details on adding the tab to your tool bar if needed.
2. Click on the __Environment Comparison__ report in the list. The Export Attachment __Details__ are displayed, and your Excel report is downloaded by your browser.
3. Open the _Environment_Compare_export.xls_ file. When you open an exported file, this message may be displayed, as the exported file is in XML instead of the Excel format. Click __Yes__ to load the file.  
   ![Excel error message - Click Yes to continue.](../../../static/img/product_docs/strongpointforsalesforce/tools/export_excel_error_msg.webp)

### Environment_Compare_export.xls

![The Only In Source tab of the Environment_Compare_Export.xls file](../../../static/img/product_docs/strongpointforsalesforce/tools/compare_env_results_excel.webp)

The _Environment_Compare_export.xls_ file contains a __Summary__ tab and individual tabs for each comparison type:

__Summary__: details about this Environment Comparison

__Only in Source__: items only present in the __Source__ Environment

__Only in Target__: items only present in the __Target__ Environment

__In Both Same__: items present in both Environments without differences

__In Both Different__: items present in both Environments with differences. Here is an example:

![Example of Environment Comparison differences](../../../static/img/product_docs/strongpointforsalesforce/tools/compare_env_results_excel_diffs.webp)

## Create a Change Request

You can use the link in your Environment Compare complete email to directly open a Salesforce form and create a Change Request based on the differences.

1. Open __Netwrix Dashboard__ > __Tools__ > __Environment Comparison__
2. __Select Customization(s)__ contains all of the Customizations with Differences. Select one or more and click __Add__ to move them to the __Selected Customization(s)__ pane.

   ![Select Customizations with Differences and create a Change Request](../../../static/img/product_docs/strongpointforsalesforce/tools/compare_env_create_cr.webp)
3. Click __Create Change Request__ to continue.

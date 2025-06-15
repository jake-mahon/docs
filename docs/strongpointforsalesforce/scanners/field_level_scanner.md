# Field Level Security Scanner

The Field Level Security Scanner creates a comprehensive list of Customizations, Field API Name, Parent Object, Package, and Salesforce Type for a selected Object.

Run the scanners before you search to ensure you have the latest data.

1. Open __Netwrix Dashboard__ > __Scanner__ > Field-Level Security Scanner.

   ![Open the Field Level Security Scanner](../../../static/img/product_docs/strongpointforsalesforce/scanners/field_level_scanner.webp)
2. Start typing the name of a __Salesforce Object__. Pick from the completion list.
3. Click __Search Fields__.

   ![Field Level Scanner example](../../../static/img/product_docs/strongpointforsalesforce/scanners/field_level_scanner_example.webp)
4. Select one or more fields to scan. The __Customization Name__ is a link to the Customization Record.

   __NOTE:__  It is not technically possible to scan permissions on all fields in each object.
5. Selected fields are shown in a list at the bottom of the form. You can uncheck individual fields or all fields from the __Selected Field__ list.

   ![Removal list](../../../static/img/product_docs/strongpointforsalesforce/scanners/field_level_scanner_remove.webp)
6. Click __Run Scanner__.

Once the scan is complete, open the Reports tab and select Field Permissions Report. The report is also available from the Netwrix Dashboard: __Reports__ > __Access Reports__ > __Field Permissions__.

![Field Permissions Report](../../../static/img/product_docs/strongpointforsalesforce/scanners/field_level_scanner_report.webp)

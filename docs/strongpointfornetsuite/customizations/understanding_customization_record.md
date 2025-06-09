# Understanding the Customization Record

Customization records are the documentation about each customization. They are normally built and maintained by the Spiders. They enable you to search the customizations and attach them to processes.

Customization records tell you:

- What customizations exist (or used to exist) in an account.
- Who is using the customizations.
- Which customizations are being used.
- What joins exist between customizations.
- Detailed automated documentation (search filters and formulas, related fields, scripts, searches and records).

A Customization is a meta record of the NetSuite customization that is created by the spider process. Links to other customizations and processes are captured and managed in this record.

## Understanding the Customization Record

Selecting __Strongpoint__> __Customizations__ > __Customization__ opens a list of customization records, or move the mouse further right to create a __New__ customization or to __Search__ for a customization.

### Fields

The main section of the Customization Record summarizes the key information for the object.

- __Base Record__: Displays the linked parent record. For Saved Searches it displays the Object Type.
- __Owner__: Displays the current owner of the record.
- __Description__: Displays the record description. If description is blank, you can click __Edit__ to manually enter it.
- __Type__: Displays the record's NetSuite Object Type.
- __Internal Id__: Displays the record’s internal ID.
- __Scriptid__: Displays the record’s Script ID.
- __Related Objects__: Summarizes the related object dependencies by object type. Click links to open detailed view. For example, there could be multiple scripts and workflows that depend on this object. Click links to open detailed view as shown.

![cust_ui_related_objects](/img/product_docs/strongpointfornetsuite/customizations/cust_ui_related_objects.png)

### Buttons

- __Edit__: Opens the record for editing.
- __Back__: returns to the customization list.
- __Respider__ __Now__: This button triggers the Spider and updates the documentation for this specific record.
- __Go to Record__: Displays the actual record from NetSuite.
- __Create Test__: Opens a new Test Record for the customization.

### Tabs

The tabs provide detailed information about the customization:

- __Detailed Metadata__: Details about the customization including Fields, Values, [Bundle / SuiteApp information](#Bundle-SuiteApp-information), [Date Last Used](/docs/strongpointfornetsuite/clean_up/date_last_used.md), Last Used Status, and who uses the customization. Information varies depending on the customization type. For example, Workflow customizations include States, Actions, and Workflow Fields not applicable when viewing Field customizations.
- __ERD__: Displays the Entity-Relationship Diagram centered around this customization.
- __Clean Up__: Comments, classification and clean up status associated with the customization. Search records have additional fields for Automated Search Clean Up alerts, rules, and status.
- __Change Log__: Displays the change log for the customization.
- __Related Change Log__: Displays any related change logs for the customization.
- __SoD__: Displays Segregation of Duties details for user role customizations.
- __Controls__: Displays searches enabling you to set the search as a Control.

#### Bundle / SuiteApp Information

This information is available on the Detailed Metadata tab for all customization types. They appear on the [Managed Bundle/App Updates](/docs/strongpointfornetsuite/change_management/change_management_reports.md#managed-bundleapp-updates) report.

- _Managed Bundle/SuiteApps_ are pushed to target accounts by a third-party provider.
- _Third-Party Bundle/SuiteApps_ are third-party products that can be updated on demand for target accounts. These components have the same change evaluation as managed bundle/apps. Unmanaged third-party bundles or apps must meet these conditions:

  1. Installed from a __Production__ account.
  2. Have a valid __Abstract Description__.
  3. Have a valid __Version Number__.

#### Detailed Metadata tab

![cust_ui_detailed_metadata](/img/product_docs/strongpointfornetsuite/customizations/cust_ui_detailed_metadata.png)

#### Detailed Metadata tab for Script Customizations

![cust_ui_detailed_metadata_scripts](/img/product_docs/strongpointfornetsuite/customizations/cust_ui_detailed_metadata_scripts.png)

#### Detailed Metadata tab with Data Sources Integration

![cust_ui_detailed_metadata_data_sources](/img/product_docs/strongpointfornetsuite/customizations/cust_ui_detailed_metadata_data_sources.png)

# Manage Reports

This section contains information on how to generate reports, use report templates and enable Auto-Classification.

## Generating and Exporting Reports

1. From the list of reports in the left pane, select the report you need.
2. In the preview pane on the right, provide the settings for report generation. For example, the Document Tagging report has the following settings: __Taxonomy__ (default is _All taxonomies_) and __Metadata__ (a user can include specified metadata in reports).
3. Click __Show Filters__. For example, the Document Tagging report has the following filters:

   - __Score range__
   - __Classification__
   - __Page URL__
   - __Source__
4. Finally, click __Generate__.

![reports_doctagging_thumb_0_0](/img/product_docs/dataclassification/ndc/admin/reporting/reports_doctagging_thumb_0_0.png)

The report will be displayed in the preview pane.

You can export document-specific report data along with any associated document metadata. For that, in the bottom of the pane select the export option you need (_CSV/XLSX_). The file will be downloaded to your default downloads folder.

## Save Report Configuration

Netwrix Data Classification allows you to save report configuration settings as a template for the future use. Then if you need to run the report with the specified parameters more than once, you can just load its configuration from the template you have saved.

NOTE: This capability is supported for built-in reports (Classification, Clue Building, Document, and System reports).

To view all templates available to you, open the __Reports__ tab and select __Report Templates__ on the left.

![reporttemplates](/img/product_docs/dataclassification/ndc/admin/reporting/reporttemplates.png)

To save a report configuration template

1. Select the report you need.
2. Specify the necessary properties (e.g., grouping settings) and apply filters (e.g., to only include data from the specific source).
3. Click the __Save Report Configuration__ button.

   ![report_template](/img/product_docs/dataclassification/ndc/admin/reporting/report_template.png)

   NOTE: Report configuration templates are saved per user.
4. Enter a name for the report configuration template.
5. To create a subscription for the report configuration template, check the __Create a Subscription__ box, then click __Save and Next__. Otherwise, click __Save__ to complete configuration. See the [Manage Subscriptions](#Manage-Subscriptions) section for additional information on creating report subscriptions.

__To load report configuration template__

1. Select a report you want to load the configuration for.
2. Click the __Load Saved Configuration__ link.
3. In the __Load Saved Configuration__ dialog, select the desired template from the __Template Name__ list.
4. Click __Generate__ to view the report.

## Manage Subscriptions

Subscriptions for report templates enable you to schedule email delivery of a variety of reports or set of specific search criteria. Subscriptions are helpful if you are a rare guest of Netwrix Data Classification and you only need to get statistics based on individual criteria. For example, an IT manager can easily provide auditors with weekly reports to prove compliance with regulations. [See Report Subscriptions for more information.](/docs/dataclassification/ndc/admin/reporting/reportsuscriptions.md)

To view existing subscriptions for reports, navigate to the __Report Templates__ page on the left and click __View Subscriptions__ next to an existing template to view and edit subscriptions.

![managesubscription](/img/product_docs/dataclassification/ndc/admin/reporting/managesubscription.png)

Checking the __Create a Subscription__ box when saving a new report configuration will enable users to create a new subscription. The following options are configured on the __Manage Subscriptions__ page:

| Option | Description |
| --- | --- |
| Subscription Name | Create a name for the report subscription |
| Email Group | Enter the email group(s) that will receive the reports. If no email groups are configured, click the __(+)__icon to create new email groups. |
| Send email when no data is reported | Check this box to send an email with the report even when there is no data. Leave this box unchecked to disable this option. |
| Export Format | Select whether to export the report as a __CSV__ or __XLSX__. |
| Run Every: | Set how often email reports are sent out. Users can choose to send reports in a period of __days__, __weeks__, or __months__. |
| Starting On: | Set the date that reports will start being sent out. |

Click __Save__ to complete configuration.

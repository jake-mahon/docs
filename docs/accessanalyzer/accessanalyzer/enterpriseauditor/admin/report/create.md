# Creating a Report

Creating and customizing reports allows you to design outputs uniquely crafted to your requirements. Reports can vary by section order, sourced data, file format, and other elements within the reports configuration.

You can add additional reports by the following methods:

- [Create a Custom Report](#Create-a-Custom-Report)
- [Copy an Existing Report](#Copy-an-Existing-Report)

__NOTE:__ It is important to consider whether a report should be added to an existing job, or a new job created to generate the report. Contact [Netwrix Support](https://www.netwrix.com/support.html) for additional information on report outputs.

## Create a Custom Report

You can create a new custom report for an existing job from the job’s Reports node. Follow the steps to create a new report.

__Step 1 –__ Navigate to __Jobs__ > __[Job]__ > __Configure__ and select the __Reports__ node.

![Create report option](/static/img/product_docs/threatprevention/threatprevention/eperestsite/create.png)

__Step 2 –__  On the Reports page, click Create.

__Step 3 –__ The Report Configuration wizard is automatically launched. Use the wizard to configure the new report as required, see the [Report Configuration Wizard](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/report/wizard/overview.md) topic for instructions. Click __Finish__ on the final page of the wizard to create the report.

The new report is added to the Reports table.

![Generate report](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/report/generate.png)

__Step 4 –__ Click the vertical ellipsis menu next to the report and select Generate.

The report is now created. To access the new report, see the [Viewing Generated Reports](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/report/view.md) topic.

## Copy an Existing Report

You can create a new report by copying an existing report and pasting it in a job’s Reports node. You can then optionally customize the report as required. Follow the steps to create a copy of an existing report.

![Copy Report](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/navigate/copy.png)

__Step 1 –__ Navigate to the Reports node where the desired report to copy is located. Click the vertical ellipsis menu next to the report and select Copy.

![Paste Report](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/navigate/paste.png)

__Step 2 –__ Navigate to the Reports node in the desired destination for the new report. Click the vertical ellipsis menu in the header row of the Reports table and select Paste.

The copy of the report is added to the Reports table. Reports that are copied maintain the same configuration settings as the original report.

__NOTE:__ If the report copied to the job’s Reports node has the same name as an existing report, the copied report adds a numerical value to the name sequentially. For example if the existing report is named Exceptions Summary, then the new report is named ```Exceptions Summary1```.

__Step 3 –__ (Optional) Click the __Configure__ button next to the report. Use the Report Configuration wizard to modify the reports settings. See the [Report Configuration Wizard](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/report/wizard/overview.md) topic for instructions.

__Step 4 –__ Click the vertical ellipsis menu next to the report and select Generate.

The report is now created. To access the new report, see the [Viewing Generated Reports](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/report/view.md) topic.

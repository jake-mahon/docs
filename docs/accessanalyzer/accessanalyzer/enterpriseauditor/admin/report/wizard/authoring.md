# Authoring Page

On the Authoring page of the Report Configuration wizard, you can configure the name, header information, and publish settings for the report.

![Report Configuration wizard Authoring page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/report/wizard/authoring.png)

Configure the following settings as required:

![name](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/report/wizard/name.png)

- Name – The name used for the report in the Access Analyzer console and Web Console.

Header Options

![header](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/webrequest/header.png)

- Title – The title of the report as displayed at the top of the generated report
- Author – Name of the person or group who created the report. This is displayed at the top of the generated report.
- Tags – Use the tag editor to add and remove tags, see the [Add Tags to a Report](#Add-Tags-to-a-Report) topic below for more information. Tags are displayed in the header of the generated reported.
- Description – A description of the report content. It is displayed beneath the report Title in the generated report.

Publish Options

- Publish Report – Select an option to configure if the report should be published to the Web Console when it is generated.
  - Use default setting – Applies the Global report settings, or the settings configured at the job group or job levels if inheritance has been broken. (See the [Publish Option](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/reporting.md#Publish-Option), [Reporting Node](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/group/reporting.md), and [Report Settings Tab](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/properties/reportsettings.md) topics for additional information.)
  - Publish report – Select this option to publish the report
  - Do not publish report – Select this option to not publish the report
- Publish State – Shows the current publish state of the report. If the report is already published, you can click the link to open the report in the Web Console.

## Add Tags to a Report

You can add tags to reports to describe the content and use cases of the report (see the [Tags](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/report/tags.md) topic for additional information). The Tag Editor allows you to select the tags for a report, including creating new ones to select.

Follow the steps to select tags using the Tag Editor.

__Step 1 –__ On the Authoring page of the Report Configuration wizard, click the __Edit__ button located next to the Tags text box.

![Tag Editor](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/report/wizard/tageditor.png)

__Step 2 –__ In the Tag editor, select the checkbox next to the tags that should be applied to the report.

- In addition to selecting existing tags, you can also add new tags to be selected. To create a tag, enter the desired tag name in the text box and click __Add__.

__Step 3 –__ Click __OK__.

The selected tags are now shown in the Tags field as a comma separated list.

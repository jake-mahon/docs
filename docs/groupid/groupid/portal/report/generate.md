# Generate Reports

Generating reports in Directory Manager portal is a two step process that makes the reporting process quick and easy. The steps for generating a report are the same for all reports; you have to specify settings, such as the source container or organizational unit, the field to sort all records, and the display names for the fields in the report.

After generating a report, you can download it in different formats such as Excel, PDF, and HTML.

You can generate a report in any of the two ways:

- Use the Create Report option.
- Use a Scheduled Reports job.

Of these, the last method can only be used for a report that has previously been generated.

## Create a Report

Reports are generated for the domain that your machine is joined to. For example, when your machine is joined to a domain, techwr5.local, reports would display data for techwr5.local.

__To generate a report:__

1. In Directory Manager portal, select __Reports__ from the left pane.
2. On Reports Portal, select the type of objects whose report you want to generate. It will display the reports templates for that object.

   For example, to create a user report, click __User Report__ from left pane. You will see all the user reports that you can generate.
3. Click on the template of your choice from the list and click __Create Report__.
4. In __Step 1__ of generating a report:

   1. You can specify a custom title for your report. Type the title of the report, replacing the existing one, in the __Report Name__ box.
   2. Click __Browse__ to open the __Select Container__ dialog box and select the required source container. The default selection is the Global Catalog.
   3. Select the __Include sub containers__ check box to include the sub-containers for the selected container when reporting.
   4. In the __Filter Criteria__ section, modify the default LDAP filter as required. This filter is used for selecting items from the container, to display in the report.

      To add additional filter, click __Add More Filters.__
   5. Click __Next__.
5. In __Step 2__ of generating a report:

   1. The __Fields__ section displays the fields that will be included in the report. You can add or remove fields from the list. You can also move the given fields to change their order.
   2. From __Sort By__ drop down list, select the field by which you want to sort the results in the report.
   3. From __Schedule__ drop down list, select the schedule for the report. If you select a schedule, the report will run automatically on the specified time of the schedule.
   4. Click __Finish.__

      Report based on the setting you set on the portal is displayed. The report displays the following information:

      1. Connected identity store name
      2. The selected container
      3. Number of the records fetched
      4. Date the report was created on
      5. The filter applied while creating the report
      6. List of the report results

      The report is then listed in the template's page. You can create multiple reports of the same template.
6. To download the report, click __Download__ and select the format for the report (PDF, Excel, or HTML).
7. You can also pin the report on Dashboard by clicking __Pin Report__.

## Scheduled Report job

You can create a __Scheduled Report job__ on Directory Manager Admin Center. See [Reports Schedule](/docs/groupid/groupid/admincenter/schedule/reports.md)

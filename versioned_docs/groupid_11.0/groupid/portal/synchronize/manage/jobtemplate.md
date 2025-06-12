# Job Templates

Synchronize comes with a set of pre-defined job templates that represent some of the most common business scenarios in use. You can use these templates as is, modify them to suit your needs, or create your own custom templates.

Creating a custom template involves saving a job as a template. Therefore, you must first create a job with commonly used settings before you can save it as a template. You can also create templates of existing jobs on-the-fly to reuse their settings
in new jobs.

What do you want to do?

- [Create a Job Template](#Create-a-Job-Template)
- [Import a Job Template](#Import-a-Job-Template)
- [Export a Job Template](#Export-a-Job-Template)
- [Create a Job from a Template](#Create-a-Job-from-a-Template)
- [Rename a Job Template](#Rename-a-Job-Template)
- [Delete a Job Template](#Delete-a-Job-Template)
- [Filter Job Templates](#Filter-Job-Templates)

## Create a Job Template

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On __Synchronize__ portal, select __All Jobs__.
3. From the __All Jobs__ list, select the job you want to save as a template.
4. Click the __three vertical dots__ icon and select __Save as Template__.
5. On __Template Name and Description wizard__, update the name and description and click __Save.__

## Import a Job Template

You can also import job templates. Only job templates that have been exported from GroupID Synchronize can be imported to other machines running GroupID Synchronize.

The import action only requires you to select the location where the exported template resides.

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Templates__.
3. Click __Import Jobs__ to open the dialog box.
4. Click the __Browse__ button to browse to the location where the exported job templates are placed. The selected path is displayed in the adjacent box.

   All job templates at the given location get listed in the __Name__ column.

   The __Description__ column shows the description of the job template.

   The __Source and Destination__ column displays the name of providers.

While importing, if a job template with the same name already exists on the machine, a confirmation box is displayed for you to verify the import by replacing the existing template or saving it as a new one. If you import it as a new template, Synchronize
appends a numeric code to the template name to differentiate it from the existing template.

## Export a Job Template

To export a job collection template, you need to follow these steps:

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Templates__.
3. On the __Job Templates__ page, click the __three vertical dots__ icon on the template in the list that you want to export
   and click __Export__.

If you want to export multiple job templates, select all and click __Export Job(s)__ from the top right corner.

## Create a Job from a Template

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Templates__.

   For every template listed, the view provides its name, description, source, and the destination proider.
3. On the __Job Templates__ page, click the __three vertical dots__ icon on the template in the list and select __Create from Template__.

   OR

   Click the job template you want to use for the new job..
4. This will launch [Create a Job](/versioned_docs/groupid_11.0/groupid/portal/synchronize/job/create.md) wizard. Proceed to map the settings stored in the template on to the new job.

## Rename a Job Template

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Templates__.
3. On the __Job Templates__ page, click the __three vertical dots__ icon on the template in the list click __Rename__.
4. On __Rename Job Template Name & Description wizard__, update the name and description and click __Save.__

## Delete a Job Template

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On __Synchronize__ portal, select __Job Templates__.
3. On the __Job Templates__ list, click the __three vertical dots__ icon of the template that you want to delete and select __Delete__ from the menu.

## Filter Job Templates

You can apply filters on the __Job Templates__ page to display only those job templates that match the criteria set in the __Search Filters__ section.

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __Job Templates__.
3. In the __Search Filters__ section, select one of the following attributes from the __Attributes__ list to filter job templates:

   - Name
   - Description
   - Source
   - Destination
4. Two more boxes get displayed next to __Attributes__ box upon selecting a filter.

   - __Select an Operator__ from the first list.
   - Specify a value for the selected operator in the second box.
5. Click __Apply Filter__.

   All the job templates that match the specified criterion are displayed.

__See Also__

- [Create a Job](/versioned_docs/groupid_11.0/groupid/portal/synchronize/job/create.md)
- [Manage a Job](/versioned_docs/groupid_11.0/groupid/portal/synchronize/manage/job.md)
- [Synchronize Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/synchronize.md)

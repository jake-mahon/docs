# Job Collection Template

You can create a job collection template either by converting an existing job collection into a job collection template or by importing a job collection template.

By using a template for creating a new job collection, you can duplicate its job set, execution order, and failure actions. The run schedule for the collection, however, is not defined in the template.

A job collection template cannot be modified. Any changes made to it are not saved in the template but a new job collection is created with the modifications.

Because of the wide variation of possible job combinations, Synchronize does not provide predefined job collection templates.

What do you want to do?

- [Create a job collection template from a job collection](#Create-a-job-collection-template-from-a-job-collection)
- [Import a Job Collection Template](#Import-a-Job-Collection-Template)
- [Export a Job Collection Template](#Export-a-Job-Collection-Template)
- [Create a Job Collection from a Template](#Create-a-Job-Collection-from-a-Template)
- [Rename a Job Collection Template](#Rename-a-Job-Collection-Template)
- [Delete a Job Collection Template](#Delete-a-Job-Collection-Template)
- [Filter Job Collection Templates](#Filter-Job-Collection-Templates)

## Create a job collection template from a job collection

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Collections__.
3. In the __Job Collections__ view, click ![option](/img/versioned_docs/groupid_11.0/groupid/portal/synchronize/manage/option.png) on the job collection you want to save as a template and click __Save As Template__.
4. Now click __Job Collection Templates__ and refresh the page. The newly created job group template appears in the __Job Collection Templates__ list.
5. If a run schedule has been define for the collection, it does not become part of the template. Rather, when you create a job collection from the template, you have to define a run schedule for it.

## Import a Job Collection Template

You can also import job collection templates. Only job collection templates that have been exported from GroupID Synchronize can be imported to other machines running GroupID Synchronize.

The import action only requires you to select the location where the exported template resides.

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Collections Templates__.
3. Click __Import Jobs__ to open the dialog box.
4. Click the __Browse__ button to browse to the location where the exported job Collection templates are placed. The selected path is displayed in the adjacent box.

   All job collection templates at the given location get listed in the __Name__ column.

   The __Description__ column shows the description of the job collection template.

   The __Total Jobs__ column shows the total number of jobs in the job collection template.

While importing, if a job collection template with the same name already exists on the machine, a confirmation box is displayed for you to verify the import by replacing the existing template or saving it as a new one. If you import it as a new template,
Synchronize appends a numeric code to the template name to differentiate it from the existing template.

## Export a Job Collection Template

To export a job collection template, you need to follow these steps:

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Collections Templates__.
3. On the __Job Collection Templates__ page, click the __three vertical dots__ icon on the template in the list that you want
   to export and click __Export__.

If you want to export multiple job collection templates, select all and click __Export Job(s)__ from the top right corner.

## Create a Job Collection from a Template

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Collection Templates__.

   For every template listed, the view provides its name, description and the number of jobs it contains.
3. On the __Job Collection Templates__ page, click the __three vertical dots__ icon on the template in the list and select __Create from Template__.

   OR

   Double-click the job collection template you want to use for the new job collection.
4. This will launch [Create a Job Collection
   ](/versioned_docs/groupid_11.0/groupid/portal/synchronize/collection/create.md) wizard starting from the Job Collection(s) page. Proceed to map the settings stored in the template on to the new job collection.

## Rename a Job Collection Template

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Collection Templates__.
3. On the __Job Collection Templates__ page, click the __three vertical dots__ icon on the template in the list click __Rename__.
4. On __Rename Job Template Name and Description wizard__, update the name and description and click __Save.__

## Delete a Job Collection Template

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Collection Templates__.
3. On the __Job Collection Templates__ page, click the __three vertical dots__ icon on the template in the list that you want to delete and click __Delete__.

## Filter Job Collection Templates

You can apply filters on the __Job Collection Templates__ page to display only those job templatess that match the criteria set in the __Search Filters__ section.

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __Job Collection Templates__.
3. In the __Search Filters__ section, select one of the following attributes from the __Attributes__ list to filter job collection templates:

   - Name
   - Description
4. Two more boxes get displayed next to __Attributes__ box upon selecting a filter.

   - __Select an Operator__ from the first list.
   - Specify a value for the selected operator in the second box.
5. Click __Apply Filter__.

   All the job collection templates that match the specified criterion are displayed.

__See Also__

- [Create a Job Collection
  ](/versioned_docs/groupid_11.0/groupid/portal/synchronize/collection/create.md)
- [Manage a Job Collection ](/versioned_docs/groupid_11.0/groupid/portal/synchronize/manage/jobcollection.md)
- [Synchronize Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/synchronize.md)

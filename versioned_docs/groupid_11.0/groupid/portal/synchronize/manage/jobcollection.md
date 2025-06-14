# Manage a Job Collection

You can do the following in a job collection:

- __Duplicate a job collection__ - select an existing job collection and duplicate it to create a new job with the same settings.
- __Remove jobs from a collection__ - Suppose you add an existing job to a collection. If this job is deleted from the collection, the collection’s copy is deleted while the original continues to exist in
  the All Jobs list.
- __Determine the order of their execution__ - specify the order in which jobs run one after another.
- __Specify a failure action for each job__ - For each job in the collection, you can specify the action to take if it fails to run successfully, choosing whether to continue or to abort the execution of the remaining jobs in collection.
- __Set up job run notifications__ - Email notifications contain a brief numerical summary of the objects processed by the job collection and a detailed log of statistics and errors.

  NOTE: Notification settings for individual jobs do not apply when they are run as part of a job collection.

What do you want to do?

- [Filter Job Collection](#filter-job-collection)
- [Run a Job Collection](#run-a-job-collection)
- [Create a Job Collection by duplicating an existing one](#create-a-job-collection-by-duplicating-an-existing-one)
- [Change the execution order of individual jobs in a Job Collection](#change-the-execution-order-of-individual-jobs-in-a-job-collection)
- [Edit a Job in a Job Collection](#edit-a-job-in-a-job-collection)
- [Remove a job from a job collection](#remove-a-job-from-a-job-collection)
- [Delete a Job Collection](#delete-a-job-collection)
- [Preview a Job Collection](#preview-a-job-collection)
- [Pin a Job Collection](#pin-a-job-collection)
- [Save as Template](#save-as-template)
- [Rename a Job Collection](#rename-a-job-collection)
- [Export a Job Collection](#export-a-job-collection)
- [Import a Job Collection](#import-a-job-collection)
- [Recent Runs](#recent-runs)

## Filter Job Collection

You can apply filters on the __Job Collections__ page to display only those jobs that match the criteria set in the __Search Filters__ section.

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __Job Collections__.
3. In the __Search Filters__ section, select one of the following attributes from the __Attributes__ list to filter job collections:

   - Name
   - Description
   - TimesRun
   - NextRun
   - LastRun
   - Created
4. Two more boxes get displayed next to __Attributes__ box upon selecting a filter.

   - __Select an Operator__ from the first list.
   - Specify a value for the selected operator in the second box.
5. Click __Apply Filter__.

   All the job collections that match the specified criterion are displayed.

## Run a Job Collection

1. On GroupID Portal, click __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Collection.__
3. From the list, click the __three vertical dots__ icon of the required job collection and click __Run Job Collection__.

   The __Run Job Collection__ dialog box opens, showing the progress of the of the job collection as it runs.
4. __Run Job Collection__ dialog box displays overall collection statistics for the run, reports and individual logs for each job in the collection.
5. Click __Run Job Collection in the Background__ to list the job in the __Background__ tasks.

## Create a Job Collection by duplicating an existing one

1. In GroupID Portal, select __Synchronize__.
2. On the Synchronize portal, click __Job Collection__.
3. In the job collection list, click the __three vertical dots__ icon on the job collection you want to duplicate and select __Duplicate__.
4. Update the __Job name__ and __Job Description__.
5. Click Save.

## Change the execution order of individual jobs in a Job Collection

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Collection__.
3. In the job collection list, click the required job collection.
4. In the jobs list on __Synchronized Job Collections__ page, click the __three vertical dots__ icon the required job and then click __Move Up__ or __Move Down__ as needed.
5. Click __Finish__.

## Edit a Job in a Job Collection

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Collections__.
3. In the job collections list, click the job collection you want to edit.
4. Click the __three vertical dots__ icon the required job and click __Edit__.
5. Go through the wizard pages to modify the job as required.
6. Click __Finish__ twice to close both wizards.

## Remove a job from a job collection

You can remove a certain job from your job collection by the following methods:

__Remove a job from a job collection, using Action Menu__

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Collections__.
3. In the job collections list, expand the required job collection.
4. __Added Jobs__ displays the jobs of that collection.
5. Select See Details.
6. Click the __three vertical dots__ icon on the job you want to remove and click __Delete__.

__Remove a job from a job collection, using job collection creation wizard__

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Collections__.
3. In the job collections list, click on the required job collection to open __Synchronized Job Collection__ page.
4. Select the required job and click __Remove__.

## Delete a Job Collection

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Collections.__
3. In the job collections list, click the __three vertical dots__ icon on the job collection you want to delete and click __Delete__.

## Preview a Job Collection

1. On GroupID Portal, click select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Collection.__
3. From the list, click the __three vertical dots__ icon of the required job collection and click __Preview__.

   The __Preview Job Collection__ dialog box opens, showing the progress of all the jobs included in the job collection.,
4. __Preview Job Collection__ dialog box displays overall job collection statistics and reports.

## Pin a Job Collection

To pin a job to the [Dashboard](/versioned_docs/groupid_11.0/groupid/portal/synchronize/dashboard.md) under the pinned job card:

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __All Collections__.
3. Click the __three vertical dots__ icon of the job collection and select __Pin Item__ from
   the menu.
4. The job collection is displayed on __My Pinned Job Collections__ section on the [Dashboard](/versioned_docs/groupid_11.0/groupid/portal/synchronize/dashboard.md).

## Save as Template

You can save a job as a template to use it for future job creation.

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __All Collections__.
3. Click the __three vertical dots__ icon of the job collection and select __Save as Template__ from
   the menu.
4. On __Job Collection Template Name Description wizard__, update the name and description and click Save.

   The new template gets listed in the __Job Collection Templates__ page.

## Rename a Job Collection

Renaming a job collection lets you save a job collection under a new name and a new description. Renaming a job collection does not affect its settings.

__Renaming a Job Collection, using shortcut__

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __Job Collection__.
3. Click the required Job Collection. It takes you to Job Collection creation pages.
4. Go to __Job Details__ to rename the job.

   1. In the __Job Collection Name__ box, type a new name for the Job.
   2. In the Job Collection __Description__ box, type a new description for the box (optional).
5. Click __Finish__ to close the dialog box and save changes.

__Rename a Job Collection, using the Actions menu__

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __Job Collection__.
3. From the list, select the required Job Collection.
4. On the __Actions__ menu, click __Rename__.
5. On the __Rename Job Collection__ dialog box:

   1. In the __Job Name__ box, type a new name for the Job.
   2. In the Job Collection __Description__ box, type a new description for the box (optional).
6. Click __Save__ to close the dialog box and save changes.

## Export a Job Collection

To export a job collection, you need to follow these steps:

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __Job Collection__.
3. On the __Job Collection__ page, click the __three vertical dots__ icon on the job in the list that you want to export and click __Export__.
4. On the __Export Job(s)__ wizard, enter the password and export the job collection.

If you want to export multiple job collections, select all and click __Export Job(s)__ from the top right corner.

## Import a Job Collection

Only job that have been exported from GroupID Synchronize can be imported to other machines running GroupID Synchronize.

The import action only requires you to select the location where the exported job resides.

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __Job Collection__.
3. Click __Import Jobs__ to open the dialog box.
4. Click the __Browse__ button to browse to the location where the exported jobs are placed.

   Enter the password in the __Password__ box.

   Select the __Rename Job if already exists__ checkbox if you do not want multiple jobs with same names.
5. Click __Import Job(s)__. The Job collection gets listed with other jobs.

## Recent Runs

1. On GroupID Portal, click __Synchronize__ on left pane.
2. On the Synchronize portal, click __Job Collections__.
3. From the list, right-click the required job group and click __Recent Runs__.
4. This provides the overall collection statistics, reports and individual logs for each of the jobs in the collection for their last run activity.

__See Also__

- [Create a Job Collection
  ](/versioned_docs/groupid_11.0/groupid/portal/synchronize/collection/create.md)
- [Synchronize Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/synchronize.md)

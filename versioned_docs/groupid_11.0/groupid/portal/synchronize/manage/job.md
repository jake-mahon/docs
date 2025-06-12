# Manage a Job

After creating a job, you can open a job to edit and change the settings of the job. You can also rename a job without changing its setting or entirely delete a job. All these actions are easily accessible through the Actions pane in __All Jobs__ page.

What do you want to do?

- [Filter a Job](#filter-a-job)
- [Open a Job](#open-a-job)
- [Run a Job](#run-a-job)
- [Edit a Job](#edit-a-job)
- [Deleting a Job](#deleting-a-job)
- [Preview a Job](#preview-a-job)
- [Schedule a Job](#schedule-a-job)
- [Pin a Job](#pin-a-job)
- [Save as Template](#save-as-template)
- [Duplicate a Job](#duplicate-a-job)
- [View Job Details](#view-job-details)
- [Export a Job](#export-a-job)
- [Import a Job](#import-a-job)
- [Rename a Job](#rename-a-job)

## Filter a Job

You can apply filters on the __All Jobs__ page to display only those jobs that match the criteria set in the __Search Filters__ section.

1. On GroupID Portal, select __Synchronize__on left pane.
2. On Synchronize portal, click __All Jobs__.
3. In the __Search Filters__ section, select one of the following attributes from the __Attributes__ list to filter jobs:

   - Name
   - Description
   - Source
   - Destination
   - LastRun
   - Created
   - Modified
   - TimesRun
4. Two more boxes get displayed next to __Attributes__ box upon selecting a filter.

   - __Select an Operator__ from the first list.
   - Specify a value for the selected operator in the second box.
5. Click __Apply Filter__.

   All the jobs that match the specified criterion are displayed.

## Open a Job

When you open a job to view or change its settings, the __Edit Job__ wizard opens, which is virtually identical to the [Create a Job](/versioned_docs/groupid_11.0/groupid/portal/synchronize/job/create.md) wizard.

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __All Jobs__.

   Click the job name to launch the __Job Details__ wizard.
3. In the __Job Details__ wizard, navigate to the page containing the information that you want to review or modify.

## Run a Job

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the __Synchronize__ portal, click __All Jobs__.
3. In the jobs list, click ![option](/img/versioned_docs/groupid_11.0/groupid/portal/synchronize/manage/option.png) on the job that you want to run and click __Run__.
4. If workflow requests are enabled, the request for running the job will go to the approver. If they approve the requests, the job will run. If they deny the requests, you will not be able to run the job.
5. The __Review Job Run__ dialog box appears, providing access to run statistics, reports, and logs for the last job run.
6. Click __Run Job in the Background__ to list the job in the __Background__ tasks.

## Edit a Job

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __All Jobs__.
3. In the jobs list, click the __three vertical dots__ icon on the job that you want to edit and click __Edit__.
4. Go through the wizard pages to modify the job as required.
5. Click __Finish__ twice to close both wizards.

## Deleting a Job

Deleting a Job removes it from Synchronize. By deleting a Job, you also loose any information about it, such as its run history.

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __All Jobs__.
3. Click the __three vertical dots__ icon of the job that has to be deleted and select __Delete__ from
   the menu.

## Preview a Job

Before running a job, you can preview the results and identify if the job consists of any errors.

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __All Jobs__.
3. Click the __three vertical dots__ icon of the job and select __Preview__ from
   the menu.

## Schedule a Job

To add or update the schedule for a job:

1. On GroupID Portal, select __Synchronize__on left pane.
2. On Synchronize portal, click __All Jobs__.
3. Click the __three vertical dots__ icon of the job and select __Schedule__ from
   the menu.

   It will take you to the __Schedule and Job Notifications__ page of [Create a Job](/versioned_docs/groupid_11.0/groupid/portal/synchronize/job/create.md). Update the schedule and click __Finish__ to save
   the changes.

## Pin a Job

To pin a job to the [Dashboard](/versioned_docs/groupid_11.0/groupid/portal/synchronize/dashboard.md) under the pinned job card:

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __All Jobs__.
3. Click the __three vertical dots__ icon of the job and select __Pin Item__ from the menu.
4. The job is displayed on __My Pinned Jobs__ card on the [Dashboard](/versioned_docs/groupid_11.0/groupid/portal/synchronize/dashboard.md).

## Save as Template

You can save a job as a template to use it for future job creation.

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __All Jobs__.
3. Click the __three vertical dots__ icon of the job and select __Save as Template__ from
   the menu.
4. On __Template Name Description wizard__, update the name and description and click Save.

   The new template gets listed in the __Job Templates__ page.

## Duplicate a Job

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the __Synchronize__ portal, click __All Jobs__.
3. In the __Jobs__ list, click the __three vertical dots__ icon on the job that has to be duplicated and click __Duplicate__.
4. Update the __Job name__ and __Job Description__.
5. Click __Save__.

## View Job Details

You can view the details of the job by following these steps:

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the __Synchronize__ portal, click __All Jobs__.
3. In the __Jobs__ list, click the __three vertical dots__ icon on the job and click __Job Details__.

## Import a Job

You can also import jobs. Only job that have been exported from GroupID Synchronize can be imported to other machines running GroupID Synchronize.

The import action only requires you to select the location where the exported job resides.

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __All Jobs__.
3. Click __Import Jobs__ to open the dialog box.
4. Click the __Browse__ button to browse to the location where the exported jobs are placed.

   Enter the password in the __Password__ box.

   Select the __Rename Job if already exists__ checkbox if you do not want multiple jobs with same names.
5. Click __Import Job(s)__. The job gets listed with other jobs.

## Export a Job

To export a job collection template, you need to follow these steps:

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __All Jobs__.
3. On the __All Job__ page, click the __three vertical dots__ icon on the job in the list
   that you want to export and click __Export__.
4. On the __Export Job(s)__ wizard, enter the password and export the job.

If you want to export multiple jobs, select all and click __Export Job(s)__ from the top right corner.

## Rename a Job

Renaming a job lets you save a job under a new name and a new description. As you would expect, renaming a job does not affect its settings.

__Renaming a Job, using shortcut__

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __All Jobs__.
3. Click the required Job. It takes you to Job creation pages.
4. Go to __Job Details__ to rename the job.

   1. In the __Job Name__ box, type a new name for the Job.
   2. In the __Description__ box, type a new description for the box (optional).
5. Click __Finish__ to close the dialog box and save changes.

__Rename a Job, using the Actions menu__

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On Synchronize portal, click __All Jobs__.
3. From the list, select the required Job.
4. On the __Actions__ menu, click __Rename__.
5. On the __Rename Job__ dialog box:

   1. In the __Job Name__ box, type a new name for the Job.
   2. In the __Description__ box, type a new description for the box (optional).
6. Click __Save__ to close the dialog box and save changes.

__See Also__

- [Create a Job](/versioned_docs/groupid_11.0/groupid/portal/synchronize/job/create.md)
- [Synchronize Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/synchronize.md)

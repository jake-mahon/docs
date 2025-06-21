# Choose your Job Template

For creating a job, GroupID Synchronize enables you to create a new job collection based on your
setting and criteria. In addition to that, it also gives you multiple templates to directly create a
job collection from.

**Follow these steps:**

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Create New** and then click **Job Collection.**
3. On the **Choose Your Job Template** page, enter job collection details and select whether to use
   a job group template or create the job group from scratch.
4. Click **Next Step**.

**See Also**

- [Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)

# Create a Job Collection

A job collection is a group of individual jobs that you want to run in a particular order. For
instance, you can create a job collection to synchronize user accounts between multiple Active
Directory domains. You first create multiple Synchronize jobs to transfer data between two
directories, and then combine them in a job collection. Then you can execute the job collection
instead of executing each job one by one.

To understand how workflows work with Synchronize jobs, see the
[Synchronize Jobs and Workflows](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md#synchronize-jobs-and-workflows)
topic.

What do you want to do?

- Create a job Collection

## Create a job Collection

1. On GroupID Portal, select **Synchronize** on left pane.
2. On the Synchronize portal, click **Create New** and then click **Job Collection.**
3. On the
   [Choose your Job Template](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)
   page, enter job collection details and select whether to use a job collection template or create
   the job collection from scratch.
4. Click **Next Step**
5. On the
   [Synchronized Job Collection](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)
   page, add jobs to the collection. You can either add existing jobs or create new jobs to add them
   to the job collection.
6. On the
   [Scheduling and Notifications](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)
   page, choose a schedule for a job collection and set up notification settings.

   NOTE: After creating the job collection, you can modify the schedule for the job collection and
   you can also create a new schedule.

7. Select **Preview job collection when finished** checkbox to preview the job collection before
   executing it.
8. To review the information and changes regarding the job collection, click **Review Your Change**
   at the bottom.
9. Click **Finish** to exit the wizard and create the job collection.
10. Once you run the job collection, the job collection runs and only those jobs will process for
    which workflow is not configured. If workflow is configured for any job, the request gets
    generated against that specific job.
11. Generated workflow request will be displayed in the
    "[Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md)" section for the
    workflow approver(s). If the approver approves the workflow request, the job will execute the
    results.
12. **Run Job Collection** dialog box displays overall collection statistics for the run, reports
    and individual logs for each job in the collection.

**See Also**

- [Job Collection Template](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Manage a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
- [Synchronize Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)
- [Transform](/docs/directorymanager/11.0/user-guide/synchronization/index.md)
- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/user-guide/synchronization/transformations.md)

# Scheduling and Notifications

On the **Scheduling and Notifications** page, you can set the schedule on the basis of which the job
collection can run in future and can also set the notifications settings for the job collection.

1. On the **Scheduling and Notifications** page:

   1. In the **Schedule Job Collection** section, choose from existing schedules from the drop down
      list.
   2. In the **Schedule** section, the **Task name** drop down lists the Smart Group Update jobs
      existing in the identity store for the Active Directory domain that is provided as
      destination in this Synchronize job. Select a job that you want to run along with this
      Synchronize job. The selected job will run each time the Synchronize job is run either
      manually or from the Synchronize job scheduler.

      If you are modifying an existing job collection, you can also a new schedule for the job
      collection. Visit
      [Synchronize Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)

2. On the **Notifications** section, set up email notification of job collection run results. This
   feature requires Microsoft Exchange. Notifications are disabled by default and can be enabled and
   disabled from this page. Select the **Enable notifications** check box to enable them.
3. Enter the email address of notification recipients in the given box.
4. From the **Send notification** list, select the notification trigger event. Options are:

   NOTE: This step requires that the identity store of the destination should be configured.

   - **Always**: Send a notification every time the job collection is run, regardless of outcome.
   - **Records are updated**: Send a notification only when one or more records have been updated.
   - **One or more errors occur**: Send a notification only when errors occur while executing the
     job collection.
   - **Job fails**: Send a notification only when a fatal error occurs causing the job collection
     to fail.

5. Select **Preview job collection when finished** checkbox to preview the job collection before
   executing it.
6. To review the information and changes regarding the job collection, click **Review Your Changes**
   at the bottom.
7. Click **Finish** to exit the wizard and create the job collection.
8. Once you run the job collection, a workflow request is triggered.
9. Generated workflow request will be displayed in the
   [Requests](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md) section for the
   workflow approver(s). If the approver approves the workflow request, the job will execute the
   results.

**See Also**

- [Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)

# Synchronized Job Collection

On the Synchronize Job Collection page, you view the list of jobs that you have added to the
collection and their information. You can add exisitng jobs or new jobs to the collections. You can
also rename, change the order, and remove jobs from the job collection.

1. On the **Synchronized Jobs Collection** page, add jobs to the collection.

   - To add an existing job to the collection, select **Add Existing Job(s)** dialog box. Select
     the check box next to the name of each job to be added and click **Add in Collection**.
   - To add a new job to the collection, select **Add New Job** dialog box. Follow the steps from
     [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md).

2. Rename the jobs in the job collection by clicking the **three vertical dots** button and click
   **Rename**.
3. Set the run order of an individual job by clicking the **three vertical dots** button and then
   selecting **Move Up** or **Move Down.**
4. Set the action to take on the failure of a job by clicking its cell in the **On Failure** column
   and then selecting one of the following:

   - **Abort**, to stop the execution of the remaining jobs in the collection.
   - **Continue**, to continue the execution of next job in the collection.

5. If you want to remove a job from the job collection, select the required job and click
   **Remove**.
6. Click **Next Step** to continue.

**See Also**

- [Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)

# Schedule a Job / Job Collection

The GroupID scheduling function enables you to set any Synchronize job or job collection to run
automatically. Create a Synchronize schedule and add Synchronize jobs and job collections as
targets. When the schedule runs, the target jobs and job collections are executed.

To create a Synchronize schedule, see the
[Synchronize Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)
topic.

See Also

- [Schedules](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)

# Create a Job Collection

A job collection is a group of individual jobs that you want to run in a particular order. For instance, you can create a job collection to synchronize user accounts between multiple Active Directory domains. You first create multiple Synchronize jobs to transfer data between two directories, and then combine them in a job collection. Then you can execute the job collection instead of executing each job one by one.

To understand how workflows work with Synchronize jobs, see the [Synchronize Jobs and Workflows](/versioned_docs/groupid_11.0/groupid/admincenter/workflow/overview.md#synchronize-jobs-and-workflows) topic.

What do you want to do?

- [Create a job Collection](#create-a-job-collection)

## Create a job Collection

1. On GroupID Portal, select __Synchronize__ on left pane.
2. On the Synchronize portal, click __Create New__ and then click __Job Collection.__
3. On the [Choose your Job Template](/versioned_docs/groupid_11.0/groupid/portal/synchronize/collection/chooseyourjobcollectiontemplate.md) page, enter job collection details and select whether to use
   a job collection template or create the job collection from scratch.
4. Click __Next Step__
5. On the [Synchronized Job Collection](/versioned_docs/groupid_11.0/groupid/portal/synchronize/collection/synchronizedjobcollection.md) page, add jobs to the collection. You can either add existing jobs or create new jobs to add them to the job collection.
6. On the [Scheduling and Notifications](/versioned_docs/groupid_11.0/groupid/portal/synchronize/collection/schedulingandnotification.md) page, choose a schedule for a job collection and set up notification settings.

   NOTE: After creating the job collection, you can modify the schedule for the job collection and you can also create a new schedule.
7. Select __Preview job collection when finished__ checkbox to preview the job collection before executing it.
8. To review the information and changes regarding the job collection, click __Review Your Change__ at the bottom.
9. Click __Finish__ to exit the wizard and create the job collection.
10. Once you run the job collection, the job collection runs and only those jobs will process for which workflow is not configured. If workflow is configured for any job, the request gets generated against that specific job.
11. Generated workflow request will be displayed in the “[Requests](/versioned_docs/groupid_11.0/groupid/portal/request/overview.md)” section for the workflow approver(s). If the approver approves the workflow request, the job will execute the results.
12. __Run Job Collection__ dialog box displays overall collection statistics for the run, reports and individual logs for each job in the collection.

__See Also__

- [Job Collection Template](/versioned_docs/groupid_11.0/groupid/portal/synchronize/manage/jobcollectiontemplate.md)
- [Manage a Job Collection ](/versioned_docs/groupid_11.0/groupid/portal/synchronize/manage/jobcollection.md)
- [Synchronize Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/synchronize.md)
- [Transform](/versioned_docs/groupid_11.0/groupid/portal/synchronize/transformation/overview.md)
- [Auto-Generate Unique, Complex Passwords](/versioned_docs/groupid_11.0/groupid/portal/synchronize/transformation/autogenerateuniquepassword.md)

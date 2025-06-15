# Schedule Job and Notifications

On __Schedule Job and Notifications__, you can set the schedule on the basis of which the job can run in future and set the notifications settings for the job.

1. On the __Schedule Job and Notifications__ page:

   1. In the __Schedule Job__ section, choose an existing job from the drop down list.
   2. In the __Schedule__ section, the __Task name__ drop down lists the Smart Group Update jobs existing in the identity store for the Active Directory domain that is provided as destination in this Synchronize job. Select a job that you want to run along with this Synchronize job. The selected job will run each time the Synchronize job is run either manually or from the Synchronize job scheduler.

      If you are modifying an existing job, you can also a new schedule for the job. Visit [Synchronize Schedule](../../../admincenter/schedule/synchronize.md)
2. Set up email notification of job run results:

   1. Select the __Enable__ option.
   2. Enter email addresses of notification recipients in __Send notification to the following email(s)__ box
   3. From the __Send Notification__ options, select one of the following notification trigger event:

      1. __Always__: Send a notification every time the job  is run, regardless of outcome.
      2. __Records are updated__: Send a notification only when one or more records have been updated.
      3. __One or more errors occur__: Send a notification only when errors occur while executing the job.
      4. __Job fails__: Send a notification only when a fatal error occurs causing the job to fail.

         RECOMMENDED: This step requires that notification settings are already configured in the connected identity store. Click Configure Notifications if notifications are not configured.
3. Click on __Advanced Settings__ to go to __Advanced Setting For the Job__ page:

1. Review and test the default query statement shown and modify it, if required on the __Source Query__ section.

   The Source Query page shows the default query statement generated from the settings you have
   entered into the wizard. Synchronize job uses this query to fetch records from the source provider.
2. On the __Destination Query__ section, review the default query statement shown and modify it if required.

   Like the Source Query page, the Destination Query page shows the default query statement generated from the settings you have entered into the wizard. Synchronize job uses this query to sync records at the destination provider.

   - In case of Identity store providers, filter criteria will be used, and its data will be fetched from elastic search.
   - In case of Data source providers (SQL/Excel/Access), SQL query will be used, and data will be fetched directly from the provider.  
      Click Test to preview the results before executing the query. You can click Clear to delete the command query.
3. On the __Synchronize Settings__ wizard page, configure directory synchronization and job scheduling:

   - __Update all records from source__: to synchronize all records from the source to the destination. This is limited to Exchange 5.5, Active Directory, SQL Server, or Excel.) each time the job runs.
   - __Update only records that have changed__: to synchronize only those records that have changed in the source data since the last time the job was run. For this option to apply, your source must carry the
     last updated time stamp of each record.

     The __Select source time stamp__ field drop-down box gets enabled when you select the __Update only records that have changed__ option. From here, select the attribute or field in the source that would contain a value for the time stamp.

     NOTE: Synchronizing all fields every time the job runs can be inefficient. If your data source has a time stamp field that indicates the last time the row was updated or modified, Synchronize can use it to selectively update only the rows that
     have changed since the last time the job was run.
4. Click __Save__.

4. Select __Preview job when finished__ checkbox to preview the job.
5. __Review your Changes__ before finishing the job.
6. Click __Finish__ and create the job.
7. Once you run the job, a workflow request is triggered.
8. Generated workflow request will be displayed in the [Requests](../../request/overview.md) section for the workflow approver(s). If the approver approves the workflow request, the job will
   execute the results.

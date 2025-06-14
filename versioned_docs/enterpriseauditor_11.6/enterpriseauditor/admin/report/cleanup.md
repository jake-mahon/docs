# Report Cleanup when Deleting a Job or Job Group

When deleting a job or job group, the Delete Job and Delete Group wizards allow you to delete any published reports contained in the jobs that are being deleted. Follow the steps to delete a job or job group that contains published reports.

__CAUTION:__ Deleted objects cannot be restored.

![Delete Group on right-click menu](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/jobstree.png)

__Step 1 –__ In the Jobs tree, right-click on the job or group that you want to delete and select __Delete Job/Group__.

![Delete Group wizard page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/report/deletegroup.png)

__Step 2 –__ On the Delete Job/Group page of the wizard, confirm it shows the correct job or group that you want to delete, then click __Next__.

__NOTE:__ If there are no published reports, clicking __Next__ starts the deletion (skip to step 4).

![Delete Published Reports wizard page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/report/reporttree.png)

__Step 3 –__ The Delete Published Reports page of the wizard shows the tree of published reports. Select the checkboxes next to all the reports you want to delete. You can also select reports by job group or job. Click __Next__ to proceed with the deletion.

![Progress wizard page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/application/upgrade/progress.png)

__Step 4 –__ The Progress page shows you the status of the deletion process. When it has completed, click __Finish__ to exit the wizard.

The job or job group and all of the selected published reports have been deleted. If you chose not to delete any of the published reports contained in any of the deleted jobs, then those remaining reports can still be viewed in the Web Console, even though the parent has been removed from the Enterprise Auditor Console.

![Delete Published Reports page with a report from previous deletion](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/report/reportfrompreviousdeletion.png)

The remaining published reports that weren't deleted are shown in the wizard if you are deleting the parent group of the previously deleted job or group.

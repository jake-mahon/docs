# Jobs Tree

Jobs are the fundamental unit of Enterprise Auditor. It is through jobs that all data collection
queries, analysis tasks, notification tasks, action tasks, and report generation occur. Jobs are
housed within the Jobs tree of the Navigation pane.

The Jobs Tree is located in the Navigation Pane on the Enterprise Auditor Console.

![Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/jobstreeoverview.png)

Clicking on the arrow next to the Jobs node will expand it. The Jobs tree is organized
alphanumerically, first by job groups and then by any jobs that are independent of job groups.

Each component within the Jobs tree has an icon for quick reference. The icons are:

| Icon Description                                                                                                     | Description                                               |
| -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| ![jobgroup](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/jobgroup.png)                    | Job Group                                                 |
| ![modifiedjobgroup](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/modifiedjobgroup.png)    | Modified Job Group                                        |
| ![settings](/img/versioned_docs/activitymonitor_7.1/config/dellpowerscale/settings.png)                              | Settings node for a Job Group/ Configure node for a job   |
| ![job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job.png)                              | Job                                                       |
| ![modifiedjob](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/modifiedjob.png)              | Modified Job                                              |
| ![lockedjob](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/lockedjob.png)                  | Locked Job (Only applicable to Role Based Access feature) |
| ![status](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/status.png)                        | Status node for a Job                                     |
| ![connectstatus](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/connectstatus.png)          | Job’s ConnectStatus Node                                  |
| ![jobstatus](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/jobstatus.png)                  | Job Status for a Job                                      |
| ![taskstatus](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/taskstatus.png)                | Task Status for a Job                                     |
| ![results](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/results.png) | Results node for a Job                                    |
| ![messages](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/messages.png)                    | Job’s Messages table                                      |
| ![jobsdata](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/jobsdata.png)                    | Job’s Data Table or View                                  |
| ![jobsreport](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/jobsreport.png)                | Job’s Report                                              |

A green checkmark over a Job or Job Group icon indicates a configuration change has been made to the
job or job group. The global settings configured under the Settings node are inherited down through
the Jobs tree to the job unless inheritance is broken in a job group’s Settings node, a job’s
Configure node, or a job’s Properties window. See the
[Navigating the Console](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/overview.md)
for additional information.

## Job Execution Options

Enterprise Auditor is designed to execute jobs one at a time in the order assigned. If a job group
is run, the jobs execute in the order listed within the job group. Job groups are designed to run
data collection jobs before running analysis and reporting jobs. If multiple jobs are independently
triggered to run, the jobs execute in the order triggered.

Jobs execution options include:

- Manual or Ad Hoc
    - Applies logged in user’s credentials to execute the job on the Enterprise Auditor Console
      server
    - Job progress can be monitored through the **Running Instances** node
    - Order of job execution can be manipulated on the **Running Instances** node
    - Closing the Enterprise Auditor Console terminates the running job and clear the jobs queue
- Schedule
    - Applies Schedule Service Account credentials to execute the job through Windows Task Scheduler
    - Each scheduled task independently employs the Enterprise Auditor application, allowing
      unrelated tasks to run simultaneously
    - Runs on schedule whether a user is logged in or not

## Changes Window

The Changes window is where jobs are created by customers or professional services engineers. Custom
jobs can be enabled to track changes to configuration settings. When enabled, configuration changes
are tracked in change logs stored within the job folder. Changes can also be viewed within this
window.

Remember, custom jobs are not shipped with Enterprise Auditor but instead user created.

The Changes window opens from the **Changes** option in the right-click menu from the selected Jobs
tree, job group, or job node.

![Changes Window](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/changeswindow.png)

Select **Enabled** from the drop-down menu in the upper-left corner to turn on change tracking of
configuration settings. Select a modification from the table and click **Undo** to revert the
change.

The window columns display the following information:

- Job Path – Path to the job where the configuration change occurred, only visible when viewed at
  the Jobs tree or job group level
- Component – Component of the job where the configuration change occurred, for example Job, Query,
  or Analysis
- Modification – Type of change that was made, for example Add or Update
- Task – Name of the analysis or action task modified, only populated when the change occurred to an
  Analysis or Action component
- Setting – A changed setting
- Value – New setting value. If the modification was an update, this displays both the old and the
  new setting value.

Select a modification from the table and click **Undo** to revert the change.

If configuration change tracking is **Disabled**, configuration changes are only written directly to
the job’s XML file. If the configuration change tracking feature was previously enabled and then
disabled at a later time, an option is provided to merge changes back into the job’s XML file.

![Change Window Merge Changes](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/changeswindowmerge.png)

To merge the changes into the job’s XML file without disabling the configuration change tracking
feature, click **Merge** on the bottom left corner of the Changes window and then click **Yes** on
the Enterprise Auditor pop-up window to confirm the merge.

![Changes Window Locked](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/changeswindowlocked.png)

Changes between releases are tracked. Only jobs that are locked can be upgraded.

**NOTE:** Jobs that are included in Enterprise Auditor are locked and changes cannot be made to
those jobs.

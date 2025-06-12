# Disable or Enable a Job

Job groups may contain individual jobs that should not be run when the entire job group is run. Some job groups also contain jobs that can optionally be run separately from the rest of the job group. Individual jobs can be disabled or enabled at the job group or job level. Disabled jobs do not execute when the parent job group is run.

If the role based access feature is enabled, the ability to enable and disable jobs is limited by the assigned role. See the [Role Based Access](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/access/rolebased/overview.md) topic for additional information.

## Disable a Job

Jobs can be disabled from the Jobs tree. Disabled jobs cannot be run manually, through a scheduled task, or executed as part of the job group. Follow the steps to disable a job.

__Step 1 –__ Select a job group or job.

__NOTE:__ When disabling jobs at the job group level, all jobs contained in the job group are disabled, but the job group is not disabled. Any additional jobs added to that job group at a later time will be enabled by default.

![Disable Job from Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/disablejob.png)

__Step 2 –__ Right-click on the job group or job and select __Disable Job(s)__ from the menu.

![Disabled Job in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/disabledjob.png)

The job is now disabled. If a job group was selected, all the jobs in the group are now disabled. Disabled jobs are grayed out, and a red cross is displayed in front of the job.

![Disabled Job Description page banner](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/disabledjob2.png)

A yellow banner also notifies users that a job is disabled in the Job’s Description page.

Additionally, if a disabled job is run, a warning message appears in the Messages table stating: ```[UserName] requested [JobName] to run but it is in a disabled state```. Job statistics also do not display on the job’s description page.

## Enable a Job

Jobs that have been disabled can be enabled from the Jobs tree. Following the steps to enable a disabled job.

__Step 1 –__ Select the disabled job. If multiple jobs in a job group are disabled, select the job group to enable all of the disabled jobs.

![Enable Job from Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/enablejob.png)

__Step 2 –__ Right-click on the job group or job and select __Enable Job(s)__ from the menu.

The job is now enabled. If a job group was selected, all the jobs in the group are now enabled.

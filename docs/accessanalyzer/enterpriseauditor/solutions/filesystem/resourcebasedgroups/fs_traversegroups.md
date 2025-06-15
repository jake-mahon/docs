# FS_TraverseGroups Job

The __FS_TraverseGroups__ Job can be used to create and apply permissions for traverse groups based on previous resource based groups. This job would be used in the case where the folder to which resource based groups permissions are applied is not the root share folder, or at the root of the share. This job prevents users from losing the ability to navigate through the directory structure if the folder is nested. The FS_TraverseGroups Job must be installed from the Instant Job library. See the [Instant Job Wizard](/docs/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/overview.md) topic for additional information.

## Recommended Configurations for the FS_TraverseGroups Job

Dependencies

- The __FS_ResourceBasedGroups__ job must be successfully run prior to running this job

Targeted Hosts

- None – If targeting all file servers known to Access Analyzer
- Scope the actions to a host list – If targeting specific file servers

Schedule Frequency

This job can be scheduled to run as desired. Throughout this document reference to executing a job refers to either manual execution or scheduled execution, according to the needs of the organization. See the [Scheduling the Resource Based Groups Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/resourcebasedgroups/overview.md#scheduling-the-resource-based-groups-job-group) topic for additional information.

History Retention

Not supported

Workflow

__Step 1 –__ Run the __FS_ResourceBasedGroups__ job.

__Step 2 –__ Configure a Host List for the job at the job level.

__NOTE:__ If a host list is not configured, this job will analyze and commit actions on every File System server known to Access Analyzer. To scope the actions to target specific servers, configure a host list at the job level to target only those servers.

__Step 3 –__ Configure and execute analysis tasks.

- Configure the Create Groups analysis task
- Execute the analysis tasks
- See the [Configure & Execute Analysis Tasks](#configure--execute-analysis-tasks) topic for additional information

__Step 4 –__ Configure and execute Active Directory action task.

- Configure & Enable the Create Groups action task
- Execute the Create Groups action task
- See the [Configure & Execute Active Directory Action Task](#configure--execute-active-directory-action-task) topic for additional information

__Step 5 –__ Execute File System action task.

- Allow an appropriate grace period for token refresh prior to executing File System action task, for example one week
- Disable the Active Directory action task
- Enable the Modify Permissions action task
- Execute the Modify Permissions action task
- See the [Execute File System Action Task](#execute-file-system-action-task) topic for additional information

__Step 6 –__ Generate and review the List Traverse Group Changes report.

- See the [Generate the List Traverse Group Changes Report](#generate-the-list-traverse-group-changes-report) topic for additional information

## Configure & Execute Analysis Tasks

Prior to executing the action tasks, configure and execute the analysis tasks.

### Configure the Create Groups Analysis Task

View the analysis tasks by navigating to the place in the Jobs tree where the Traverse Groups job was installed from the Instant Jobs library. Then go to the __FS_TraverseGroups__ > __Configure__ node and select __Analysis__. The Create Groups analysis task contains an analysis parameter that should be configured to set the naming convention for list groups.

![FS_TraverseGroups analysis tasks](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/resourcebasedgroups/traverseanalysis.webp)

The job has the following analysis tasks:

- Create Groups – Creates the FS_ListTraverseGroups_NewGroups table accessible under the job’s Results node

  - This analysis task contains a configurable parameter: @naming_convention
- Show Table – Displays the FS_ListTraverseGroups_NewPermissions table accessible under the job’s Results node
- Show Table – Displays the FS_ListTraverseGroups_NewGroups table accessible under the job’s Results node

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| Create Groups | @naming_convention | FS_[HostName]_[ShareName]_[FolderName]_List | Naming convention for list groups |

For instructions on configuring analysis parameters, see the [SQLscripting Analysis Module](/docs/accessanalyzer/enterpriseauditor/admin/analysis/sqlscripting.md) topic.

### Execute Analysis Tasks

Once the Create Groups analysis task has been configured, execute the analysis tasks. The analysis tasks are selected by default. Follow the steps to execute the analysis tasks.

__Step 1 –__ Make sure all of the analysis tasks are enabled.

__CAUTION:__ Prior to executing the analysis tasks, make sure that all action tasks are disabled. The purpose at this point is only to create the required traversal tables.

__Step 2 –__ In the Configure node, select __Actions__ and make sure that all of the action tasks are disabled.

__Step 3 –__ Right click on the __FS_TraverseGroups__ job and select __Run Job__. This will generate the Change Modeling report.

- Wait for the queued jobs to execute.

The analysis tasks create the required traversal tables accessible under the job’s Results node.

## Configure & Execute Active Directory Action Task

The Active Directory action tasks create and populate resource based groups. The Create Groups action tasks must be updated to specify a Target OU for group creation prior to enabling and executing the actions. It should also be verified that the action tasks are targeting the same domain controller. View the actions by navigating to the place in the Jobs tree where the Traverse Groups job was installed from the Instant Jobs library. Then go to the __FS_TraverseGroups__ > __Configure__ node and select __Actions__. The Create Groups action task must be configured to specify the OU for group creation.

___RECOMMENDED:___ It is recommended to execute the actions one at a time and in order as opposed to running the entire job group with the actions enabled.

![FS_TraverseGroups action tasks](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/resourcebasedgroups/traverseactions.webp)

There are the following action tasks:

- Create Groups – Create groups and add resource based groups
- Modify Permissions – Add list groups

It is recommended to review the tables used by the actions prior to executing the actions. For instructions on configuring action tables, see the [Configure & Enable the Create Groups Action Task](#configure--enable-the-create-groups-action-task) topic. The actions act upon the data within the following tables:

- FS_ListTraverseGroups_NewGroups
- FS_ListTraverseGroups_NewPermissions

These tables can be viewed under the job’s Results node. The FS_TraverseGroups Job will run analysis tasks against these tables.

### Configure & Enable the Create Groups Action Task

Follow the steps to configure the Create Groups action task.

__Step 1 –__ Select the action and click __Action Properties__.

__Step 2 –__ On the Action Properties page, click __Configure Action__.

__Step 3 –__ In the Active Directory Action Module Wizard, navigate to the Create Groups page.

![AD Action Module Wizard Create Groups page](/img/product_docs/accessanalyzer/enterpriseauditor/admin/action/activedirectory/operations/creategroups.webp)

__Step 4 –__ In the OU box, select the OU where the groups will be created.

__Step 5 –__ Navigate to the Options page and verify that the domain controller used to create groups is the same domain controller used in the Update Members action task.

__Step 6 –__ Navigate to the Summary page and click __Finish__.

### Execute Active Directory Action Task

The Create Groups action creates the resource based groups. Enabled action tasks can be manually executed at the Actions node. Action tasks can be scheduled only at the job level. Follow the steps to create the resource based groups.

__Step 1 –__ On the Action Selection page, enable the __Create Groups__ action task.

__Step 2 –__ Right-click on the __FS_TraverseGroups__ job and select __Run Job__.

- Wait for the queued job to execute

The resource based groups are created and populated.

## Execute File System Action Task

Once the Create Groups action has been executed, the Modify Permissions action can be executed. Follow the steps to execute the action.

__CAUTION:__ Prior to executing the File System action tasks, allow a grace period, for example one week. This is important for token refresh to occur as users log off and log on again.

__Step 1 –__ On the Action Selection page, disable the __Create Groups__ action task.

__Step 2 –__ Enable the __Modify Permissions__ action task.

__Step 3 –__ Right-click on the __FS_TraverseGroups__ job and select Run Job.

- Wait for the queued job to execute.

The Modify Permissions action task assigns all of the newly-created groups to File System resources with the configured permissions. All other permissions will have been removed from the resources.

## Generate the List Traverse Group Changes Report

The Generate the List Traverse Group Changes report displays a list of changes made in the environment by the action modules.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| List Traverse Group Changes | This report shows a list of changes made in the environment by the action modules. | None | This report is comprised of one elements:   - Table – This table provides details on the changes made to the environment by the action modules |

 Follow the steps to analyze and report on action history.

__CAUTION:__ Disable all of the action tasks prior to generating the List Traverse Group Changes report.

__Step 1 –__ On the Action Selection page, disable the __Modify Permissions__ action task. Make sure all of the action tasks are disabled.

__Step 2 –__ On the Analysis Selection page, enable the __Create Groups__ and both __Show Table__ analysis tasks.

__Step 3 –__ Run the job to generate the Action History report and review the actions taken on each share.

The permissions for traverse groups are applied based on the previously created resource based groups. Users retain access to nested folders.

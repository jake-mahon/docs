---
title: file systems resource based groups
sidebar_label: resource based groups
description: Solution guide for file systems resource based groups including implementation steps, configuration, and best practices.
---

# FS_ResourceBasedGroupAICImport Job

The FS_ResorceBasedGroupsAICImport Job imports resources and access groups from the
FS_ResoureBasedGroup Job into the Netwrix Access Information Center. This job assigns ownership in
the Access Information Center and then assigns resource groups. This step is required if it is
desired to change access through entitlement reviews, self-service, or for publishing resources to
IAM.

## Recommended Configurations for the FS_ResourceBasedGroupsAICImport Job

Dependencies

- The **FS_ResourceBasedGroups** job must be successfully run prior to running this job
- The **.Active Directory Inventory** > **1-AD_Scan** job must be successfully run prior to running
  this job
- The **File System** > **0.Collection** > **1-FSAA System Scans** job must be successfully run
  prior to running this job
- The **File System** > **0.Collection** > **2-FSAA Bulk Import** job must be successfully run prior
  to running this job

Targeted Hosts

None

Schedule Frequency

This job group can be scheduled to run as desired. Throughout this document reference to executing a
job refers to either manual execution or scheduled execution, according to the needs of the
organization. See the
[Scheduling the Resource Based Groups Job Group](/docs/accessanalyzer/11.6/solutions/file-systems/resource-based-groups.md#scheduling-the-resource-based-groups-job-group)
topic for additional information.

History Retention

Not supported

Workflow

**Step 1 –** Run the following jobs:

- FS_ResourceBasedGroups
- .Active Directory Inventory > 1-AD_Scan
- File System > 0.Collection > 1-FSAA System Scans
- File System > 0.Collection > 2-FSAA Bulk Import

**Step 2 –** Run the FS_ResourceBasedGroupsAICImport job.

- See the [Run the FS_ResourceBasedGroupsAICImportJob](#run-the-fs_resourcebasedgroupsaicimportjob)
  topic for additional information

**Step 3 –** Review the newly-created resource based groups in the AIC.

- See the
  [Review the New Resource Based Groups in the AIC](#review-the-new-resource-based-groups-in-the-aic)
  topic for additional information

## Run the FS_ResourceBasedGroupsAICImportJob

Now that the target environment follows a Resource Based Groups model, the new resources can be
imported into the Access Information Center. Follow the steps to import the new resources into the
AIC Ownership Workflow.

**CAUTION:** It is important to run the .Active Directory Inventory Job Group and **File System** >
**0. Collection** Job Group again so that the AD and permissions changes are captured by Enterprise
Auditor.

**Step 1 –** Run the **.Active Directory Inventory** Job Group and **FileSystem** > **0.Collection**
Job Group again.

**Step 2 –** Right click the **FS_ResourceBasedGroupsAICImport** job and select **Run Job**.

The newly created resource based groups are imported to the AIC. The Owner and Access Groups have
been assigned to the resources by the import process. The AIC can now be used to manage these
resources through Entitlement Reviews, Ad hoc owner changes, and the Self Service access portal.

## Review the New Resource Based Groups in the AIC

Use the Access Information Center **Manage Resource Ownership** to review the imported resources.
These resources with the assigned reviewers will now be in the Manage Owners table on the Resource
Owners interface. The next step is to confirm ownership through the Entitlement Review workflow and
the Self-Service Access Requests workflow. See the Resource Review and Access Requests topics in the
[Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
for additional information.

# FS_ResourceBasedGroups Job

The FS_ResourceBasedGroups Job is designed to report on and take action against resources from
targeted file servers that can have their permissions structure transformed to a resource-based
group implementation.

## Workflow

**Step 1 –** Ensure that there is up-to-date **.Active Directory Inventory** Job Group data.

**Step 2 –** Ensure that there is up-to-date **FileSystem** > **0.Collection** Job Group data.

**Step 3 –** (Optional) Configure a Host List for the job at the job level.

**NOTE:** If a host list is not configured, this job will analyze and commit actions on every File
System server known to Enterprise Auditor. To scope the actions to target specific servers,
configure a host list at the job level to target only those servers.

**Step 4 –** Model the intended changes:

- Configure the Analyze Group Permissions analysis task
- Verify that all actions are disabled

  **CAUTION:** Do not make configuration changes to the analysis tasks after reviewing and
  approving the Change Modeling report

- Execute the analysis tasks to generate the Change Modeling report and review the proposed changes
- See the [Model Intended Changes](#model-intended-changes) topic for additional information

**Step 5 –** Configure and execute Active Directory actions:

- Configure and enable the Create Groups action task
- Configure and enable the Update Members action task
- Execute the Active Directory actions
- See the Configure & Execute Active Directory Action Tasks topic for additional information

**Step 6 –** Execute File System actions:

- Allow an appropriate grace period for token refresh prior to executing File System action tasks,
  for example one week
- Disable the Active Directory action tasks
- Enable the File System action tasks
- Execute the File System action tasks
- See the [Execute File System Action Tasks](#execute-file-system-action-tasks) topic for additional
  information

**Step 7 –** Analyze and report on action history:

- Disable all action tasks.
- Generate the Action History report and review it.
- See the [Analyze and Report on Action History](#analyze-and-report-on-action-history) topic for
  additional information

Additional Options

**Step 8 –** (Optional) Create and apply permissions for traverse groups based on previous resource
based groups. See the
[FS_TraverseGroups Job](/docs/accessanalyzer/11.6/solutions/file-systems/resource-based-groups.md)
topic for additional information.

**Step 9 –** (Optional) Import resources and access groups from the FS_ResoureBasedGroup Job into
the Netwrix Access Information Center. See the
[FS_ResourceBasedGroupAICImport Job](/docs/accessanalyzer/11.6/solutions/file-systems/resource-based-groups.md)
topic for additional information.

## Model Intended Changes

Prior to executing the actions to apply changes, the proposed changes can be modeled and reviewed to
determine if the parameters are configured as desired.

### Configure the Analyze Group Permissions Analysis Task

The Analyze Group Permissions analysis task in the FS_ResourceBasedGroups Job contains parameters
for group permissions that should be configured and then reviewed in the Change Modeling report.
View the analysis tasks by navigating to the **Jobs** > **FileSystem** > **ResourceBasedGroups** >
**FS_ResourceBasedGroups** > **Configure** node and select **Analysis**.

![Analyze Group Permissions analysis task in the FS_ResourceBasedGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/resourcebasedgroups/rbganalysis.webp)

- Analyze Group Permissions – Creates the FS_ResourceBasedGroups_NewACLs table accessible under the
  job’s Results node.

  - This analysis task contains configurable parameters: #SA_Job_Hosts, @levels_down,
    @naming_convention, @add_admin_groups, #folders, @activity_filter.

Configure the following parameters. See the
[SQLscripting Analysis Module](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/scripting.md)
topic for additional information.

| Analysis Task             | Customizable Parameter Name | Default Value                                        | Value Indicates                                                                                                                                                                                                                                                           |
| ------------------------- | --------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Analyze Group Permissions | #SA_Job_Hosts               |                                                      | List of hosts that are associated with the job. The job acts against these hosts. Review the host list. If the host list requires updating, update the host list at the job level                                                                                         |
| Analyze Group Permissions | @levels_down                | 0                                                    | Number of levels down from share to root to assign permissions                                                                                                                                                                                                            |
| Analyze Group Permissions | @naming_convention          | FS*[HostName]*[ShareName]_[FolderName]_[Permissions] | Naming convention for resource based groups                                                                                                                                                                                                                               |
| Analyze Group Permissions | @add_admin_groups           | 1                                                    | Add full control admin groups. 1=true. 0=false.                                                                                                                                                                                                                           |
| Analyze Group Permissions | @admin_groups               |                                                      | ObjectSIDs of admin groups to add to every share if @add_admin_groups = 1                                                                                                                                                                                                 |
| Analyze Group Permissions | #folders                    |                                                      | List of folders to assign RBG to. Overrides @levels_down.                                                                                                                                                                                                                 |
| Analyze Group Permissions | @activity_filter            | 1000                                                 | Filter out users with last activity older than X days ago. Will filter out users who have not accessed the folder within the specified threshold. If activity records show the user has never accessed the folder, users will still be included in resource based groups. |

### Execute the Analysis Tasks

Execute the analysis tasks to generate the Change Modeling report and review the proposed changed
prior to executing the actions to apply the changes.

| Report          | Description                                                            | Default Tags | Report Elements                                                                                                                                                                                                       |
| --------------- | ---------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Change Modeling | This report shows proposed changes of access for the targeted folders. | None         | This report is comprised of three elements: - Pie Chart – Displays a proposed access changes summary - Table – Provides details on proposed access changes by share - Table – Provides details on access modification |

The Change Modeling report should be used to gain acceptance on the following areas before
implementing the changes:

- Group Naming Conventions
- Cases of Changed Access

Access changes occur in the following cases:

- The user is granted full access, but is not a member of the administrator group specified in the
  analysis parameters
- The user is granted less access, but is a member of the administrator group specified in the
  analysis parameters
- The user has not used access within the timeframe configured in the analysis parameters

Follow the steps to model the proposed changes.

**Step 1 –** Make sure all of the analysis tasks are enabled.

**CAUTION:** Prior to executing the analysis tasks, make sure that all action tasks are disabled.
The purpose at this point is only to model the intended changes.

**Step 2 –** In the Configure node, select **Actions** and make sure that all of the action tasks
are disabled.

**Step 3 –** Right click on the **Resource Based Groups** folder and select **Run Group**. This will
generate the Change Modeling report.

- Wait for the queued jobs to execute.

**Step 4 –** In the **FS_ResourceBasedGroups** node, navigate to **Results** > **Change Modeling**
to review the proposed changes prior to executing the actions to apply the changes.

The Change Modeling report has been created for review. Ensure the modeled changes are approved
before continuing with implementing them.

## Configure & Execute Active Directory Action Tasks

**CAUTION:** Do not modify the analysis tasks after the Change Modeling report has been reviewed and
approved. The approved modeled changes are implemented through the execution of the action tasks.

The Active Directory action tasks create and populate resource based groups. The Create Groups and
Update Members action tasks must be updated to specify a Target OU for group creation prior to
enabling and executing the actions. It should also be verified that these action tasks are targeting
the same domain controller.

View the action tasks by navigating to the **Jobs** > **FileSystem** > **Resourced Based Groups** >
**FS_ResourceBasedGroups** > **Configure** node and select **Actions**.

![Active Directory Action Tasks](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/resourcebasedgroups/rbgactivedirectoryactions.webp)

There are the following two Active Directory action tasks:

- Create Groups – Creates resource based groups
- Update Members – Adds members to the resource based groups based on permissions

It is recommended to review the tables used by the actions prior to executing the actions. The
actions act upon the data within the following tables:

- FS_ResourceBasedGroups_GroupsToCreate
- FS_ResourceBasedGroups_NewACLs

The actions populate the Create Groups and Update Members tables, which can be viewed under the
job’s Results node. The FS_ResourceBasedGroups Job will run analysis tasks against these tables.

### Configure & Enable the Create Groups Action Task

Follow the steps to configure the Create Groups action task.

**Step 1 –** Select the action and click **Action Properties**.

**Step 2 –** On the Action Properties page, click **Configure Action**.

**Step 3 –** In the Active Directory Action Module Wizard, navigate to the Create Groups page.

![AD Action Module Wizard Create Groups page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/activedirectory/operations/creategroups.webp)

**Step 4 –** In the OU box, select the OU where the groups will be created.

**Step 5 –** Navigate to the Options page and verify that the domain controller used to create
groups is the same domain controller used in the Update Members action task. It is a best practice
to identify the domain controller that is closest to the file server and use that domain controller.

**Step 6 –** Navigate to the Summary page and click **Finish**.

**Step 7 –** On the Action Selection page, select the Create Groups action's checkbox to enable it.

The Create Groups action is configured.

### Configure & Enable the Update Members Action Task

Follow the steps to configure the Create Groups action task.

**Step 1 –** Select the action task and click **Action Properties**.

**Step 2 –** On the Action Properties page, click **Configure Action**.

**Step 3 –** In the Active Directory Action Module Wizard, navigate to the Group Membership page.

![AD Action Module Wizard Groups Membership page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/resourcebasedgroups/rbggroupsmembership.webp)

**Step 4 –** On the Create Groups page, **Target Group by OU** is selected by default. In the OU
box, select the target OU.

**Step 5 –** Navigate to the Options page and verify that the domain controller used to create
groups is the same domain controller used in the Create Groups action task. It is a best practice to
identify the domain controller that is closest to the file server and use that domain controller.

**Step 6 –** Navigate to the Summary page and click **Finish**.

**Step 7 –** On the Action Selection page, select the Update Members action's checkbox to enable it.

The Update Members action is configured.

### Execute Active Directory Action Tasks

Make sure that the File System actions are deselected and execute the Active Directory action tasks.
The Create Groups action creates the resource based groups. The Update Members action populates
those groups.

Enabled action tasks can be manually executed at the Actions node. Action tasks can be scheduled
only at the job level.

Follow the steps to execute the AD actions.

**CAUTION:** Do not modify the analysis tasks after the Change Modeling report has been reviewed and
approved. The approved modeled changes are implemented through the execution of the action tasks.

**_RECOMMENDED:_** Disable the analysis tasks. It is not necessary to collect the data again.

**Step 1 –** On the Action Selection page, enable the **Create Groups** and **Update Members**
actions.

**Step 2 –** Right-click on the **Resource Based Groups** folder and select **Run Group**.

- Wait for the queued jobs to execute.

The resource based groups are created and populated.

## Execute File System Action Tasks

**CAUTION:** Prior to executing the File System action tasks, allow a grace period, for example one
week. This is important for token refresh to occur as users log off and log on again.

The File System actions modify folder permissions and break inheritance. The Modify Permissions and
Break Inheritance actions modules do not require any configuration.

View the action tasks by navigating to the **Jobs** > **FileSystem** > **Resourced Based Groups** >
**FS_ResourceBasedGroups** > **Configure** node and select **Actions**.

![File System action tasks](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/resourcebasedgroups/rbgfilesystemactions.webp)

There are the following two File System action tasks:

- Modify Permissions – Modifies folder permissions
- Break Inheritance – Breaks inheritance and remove all previous permissions

It is recommended to review the tables used by the actions prior to executing the actions. The
actions act upon the data within the following table:

- FS_ResourceBasedGroups_GroupsToCreate

The actions populate the Modify Permissions and Break Inheritance tables, which can viewed under the
job’s Results node. The FS_ResourceBasedGroups Job will run analysis tasks against these tables.

Follow the steps to execute the FS actions.

**CAUTION:** Do not modify the analysis tasks after the Change Modeling report has been reviewed and
approved. The approved modeled changes are implemented through the execution of the action tasks.

**Step 1 –** On the Action Selection page, disable the **Create Groups** and **Update Members**
actions.

**Step 2 –** Enable the **Modify Permissions** and **Break Inheritance** actions.

**Step 3 –** Right-click on the **Resource Based Groups** folder and select **Run Group**.

- Wait for the queued jobs to execute.

The File System action tasks assign all of the newly-created groups to File System resources with
the configured permissions. All other permissions will have been removed from the resources.

## Analyze and Report on Action History

The Action History report generated by the job shows all actions taken on each share for audit trail
purposes.

| Report         | Description                                                                 | Default Tags | Report Elements                                                                                                   |
| -------------- | --------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------- |
| Action History | This report shows all actions taken on each share for audit trail purposes. | None         | This report is comprised of one element: - Table – This table provides details on the actions taken on each share |

Follow the steps to analyze and report on action history.

**CAUTION:** Disable all of the action tasks prior to generating the Action History report.

**Step 1 –** On the Action Selection page, disable the **Modify Permissions** and **Break
Inheritance** actions. Make sure all of the action tasks are disabled.

**Step 2 –** On the Analysis Selection page, enable the **Create view for action status** and
**Summarize Access Changes** analysis tasks.

**Step 3 –** Run the job to generate the Action History report and review the actions taken on each
share.

The organization of the users and their permissions now follows a least privileged access (resource
based groups) model.

# FS_TraverseGroups Job

The **FS_TraverseGroups** Job can be used to create and apply permissions for traverse groups based
on previous resource based groups. This job would be used in the case where the folder to which
resource based groups permissions are applied is not the root share folder, or at the root of the
share. This job prevents users from losing the ability to navigate through the directory structure
if the folder is nested. The FS_TraverseGroups Job must be installed from the Instant Job library.
See the
[Instant Job Wizard](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/instant-jobs.md)
topic for additional information.

## Recommended Configurations for the FS_TraverseGroups Job

Dependencies

- The **FS_ResourceBasedGroups** job must be successfully run prior to running this job

Targeted Hosts

- None – If targeting all file servers known to Enterprise Auditor
- Scope the actions to a host list – If targeting specific file servers

Schedule Frequency

This job can be scheduled to run as desired. Throughout this document reference to executing a job
refers to either manual execution or scheduled execution, according to the needs of the
organization. See the
[Scheduling the Resource Based Groups Job Group](/docs/accessanalyzer/11.6/solutions/file-systems/resource-based-groups.md#scheduling-the-resource-based-groups-job-group)
topic for additional information.

History Retention

Not supported

Workflow

**Step 1 –** Run the **FS_ResourceBasedGroups** job.

**Step 2 –** Configure a Host List for the job at the job level.

**NOTE:** If a host list is not configured, this job will analyze and commit actions on every File
System server known to Enterprise Auditor. To scope the actions to target specific servers,
configure a host list at the job level to target only those servers.

**Step 3 –** Configure and execute analysis tasks.

- Configure the Create Groups analysis task
- Execute the analysis tasks
- See the Configure & Execute Analysis Tasks topic for additional information

**Step 4 –** Configure and execute Active Directory action task.

- Configure & Enable the Create Groups action task
- Execute the Create Groups action task
- See the Configure & Execute Active Directory Action Task topic for additional information

**Step 5 –** Execute File System action task.

- Allow an appropriate grace period for token refresh prior to executing File System action task,
  for example one week
- Disable the Active Directory action task
- Enable the Modify Permissions action task
- Execute the Modify Permissions action task
- See the [Execute File System Action Task](#execute-file-system-action-task) topic for additional
  information

**Step 6 –** Generate and review the List Traverse Group Changes report.

- See the
  [Generate the List Traverse Group Changes Report](#generate-the-list-traverse-group-changes-report)
  topic for additional information

## Configure & Execute Analysis Tasks

Prior to executing the action tasks, configure and execute the analysis tasks.

### Configure the Create Groups Analysis Task

View the analysis tasks by navigating to the place in the Jobs tree where the Traverse Groups job
was installed from the Instant Jobs library. Then go to the **FS_TraverseGroups** > **Configure**
node and select **Analysis**. The Create Groups analysis task contains an analysis parameter that
should be configured to set the naming convention for list groups.

![FS_TraverseGroups analysis tasks](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/resourcebasedgroups/traverseanalysis.webp)

The job has the following analysis tasks:

- Create Groups – Creates the FS_ListTraverseGroups_NewGroups table accessible under the job’s
  Results node

  - This analysis task contains a configurable parameter: @naming_convention

- Show Table – Displays the FS_ListTraverseGroups_NewPermissions table accessible under the job’s
  Results node
- Show Table – Displays the FS_ListTraverseGroups_NewGroups table accessible under the job’s Results
  node

| Analysis Task | Customizable Parameter Name | Default Value                                 | Value Indicates                   |
| ------------- | --------------------------- | --------------------------------------------- | --------------------------------- |
| Create Groups | @naming_convention          | FS*[HostName]*[ShareName]\_[FolderName]\_List | Naming convention for list groups |

For instructions on configuring analysis parameters, see the
[SQLscripting Analysis Module](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/scripting.md)
topic.

### Execute Analysis Tasks

Once the Create Groups analysis task has been configured, execute the analysis tasks. The analysis
tasks are selected by default. Follow the steps to execute the analysis tasks.

**Step 1 –** Make sure all of the analysis tasks are enabled.

**CAUTION:** Prior to executing the analysis tasks, make sure that all action tasks are disabled.
The purpose at this point is only to create the required traversal tables.

**Step 2 –** In the Configure node, select **Actions** and make sure that all of the action tasks
are disabled.

**Step 3 –** Right click on the **FS_TraverseGroups** job and select **Run Job**. This will generate
the Change Modeling report.

- Wait for the queued jobs to execute.

The analysis tasks create the required traversal tables accessible under the job’s Results node.

## Configure & Execute Active Directory Action Task

The Active Directory action tasks create and populate resource based groups. The Create Groups
action tasks must be updated to specify a Target OU for group creation prior to enabling and
executing the actions. It should also be verified that the action tasks are targeting the same
domain controller. View the actions by navigating to the place in the Jobs tree where the Traverse
Groups job was installed from the Instant Jobs library. Then go to the **FS_TraverseGroups** >
**Configure** node and select **Actions**. The Create Groups action task must be configured to
specify the OU for group creation.

**_RECOMMENDED:_** It is recommended to execute the actions one at a time and in order as opposed to
running the entire job group with the actions enabled.

![FS_TraverseGroups action tasks](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/resourcebasedgroups/traverseactions.webp)

There are the following action tasks:

- Create Groups – Create groups and add resource based groups
- Modify Permissions – Add list groups

It is recommended to review the tables used by the actions prior to executing the actions. For
instructions on configuring action tables, see the Configure & Enable the Create Groups Action Task
topic. The actions act upon the data within the following tables:

- FS_ListTraverseGroups_NewGroups
- FS_ListTraverseGroups_NewPermissions

These tables can be viewed under the job’s Results node. The FS_TraverseGroups Job will run analysis
tasks against these tables.

### Configure & Enable the Create Groups Action Task

Follow the steps to configure the Create Groups action task.

**Step 1 –** Select the action and click **Action Properties**.

**Step 2 –** On the Action Properties page, click **Configure Action**.

**Step 3 –** In the Active Directory Action Module Wizard, navigate to the Create Groups page.

![AD Action Module Wizard Create Groups page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/activedirectory/operations/creategroups.webp)

**Step 4 –** In the OU box, select the OU where the groups will be created.

**Step 5 –** Navigate to the Options page and verify that the domain controller used to create
groups is the same domain controller used in the Update Members action task.

**Step 6 –** Navigate to the Summary page and click **Finish**.

### Execute Active Directory Action Task

The Create Groups action creates the resource based groups. Enabled action tasks can be manually
executed at the Actions node. Action tasks can be scheduled only at the job level. Follow the steps
to create the resource based groups.

**Step 1 –** On the Action Selection page, enable the **Create Groups** action task.

**Step 2 –** Right-click on the **FS_TraverseGroups** job and select **Run Job**.

- Wait for the queued job to execute

The resource based groups are created and populated.

## Execute File System Action Task

Once the Create Groups action has been executed, the Modify Permissions action can be executed.
Follow the steps to execute the action.

**CAUTION:** Prior to executing the File System action tasks, allow a grace period, for example one
week. This is important for token refresh to occur as users log off and log on again.

**Step 1 –** On the Action Selection page, disable the **Create Groups** action task.

**Step 2 –** Enable the **Modify Permissions** action task.

**Step 3 –** Right-click on the **FS_TraverseGroups** job and select Run Job.

- Wait for the queued job to execute.

The Modify Permissions action task assigns all of the newly-created groups to File System resources
with the configured permissions. All other permissions will have been removed from the resources.

## Generate the List Traverse Group Changes Report

The Generate the List Traverse Group Changes report displays a list of changes made in the
environment by the action modules.

| Report                      | Description                                                                        | Default Tags | Report Elements                                                                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| List Traverse Group Changes | This report shows a list of changes made in the environment by the action modules. | None         | This report is comprised of one elements: - Table – This table provides details on the changes made to the environment by the action modules |

 Follow the steps to analyze and report on action history.

**CAUTION:** Disable all of the action tasks prior to generating the List Traverse Group Changes
report.

**Step 1 –** On the Action Selection page, disable the **Modify Permissions** action task. Make sure
all of the action tasks are disabled.

**Step 2 –** On the Analysis Selection page, enable the **Create Groups** and both **Show Table**
analysis tasks.

**Step 3 –** Run the job to generate the Action History report and review the actions taken on each
share.

The permissions for traverse groups are applied based on the previously created resource based
groups. Users retain access to nested folders.

# Resource Based Groups Job Group

The Resource Based Groups Job Group will transform permissions on specified folders to a resource
based groups model. The jobs which comprise the Resource Based Groups Job Group use the Active
Directory Action Module to create resource based groups and populate resource based groups
membership. The jobs use the File System Action Module to modify folder permissions and break
inheritance.

## Prerequisites

Action modules are available with a special Enterprise Auditor license. In order to use the Resource
Based Groups workflow, the following Enterprise Auditor licensing components are required:

- File System Feature
- File System Reports Add-on
- File System Actions Add-on
- Active Directory Actions Add-on

The following job groups must be successfully run prior to using this workflow:

- .Active Directory Inventory Job Group
- FileSystem > 0.Collection Job Group

## Location

The **File System** > **Resource Based Groups** Job Group is a separately licensed component of the
Enterprise Auditor File System solution set. Typically this job group is added during installation,
but it can be installed from the Instant Job Wizard.

![Resource Based Groups Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

Once it has been installed into the Jobs tree, navigate to the solution: **Jobs** > **FileSystem** >
**Resource Based Groups**.

The FS_TraverseGroups Job and the FS_ResourceBasedGroupsAICImport Job must be installed from the
Instant Job library. See the
[Instant Job Wizard](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/instant-jobs.md)
topic for additional information.

## Jobs

The Resource Based Groups Job Group will transform permissions on specified folders to a resource
based groups model.

![Job Group Overview page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/runninginstances/overviewpage.webp)

The following jobs comprise the Resource Based Groups Job Group:

- [FS_ResourceBasedGroups Job](/docs/accessanalyzer/11.6/solutions/file-systems/resource-based-groups.md)
  – This job will transform permission on specified folders to a resource based groups model
- [FS_TraverseGroups Job](/docs/accessanalyzer/11.6/solutions/file-systems/resource-based-groups.md)
  – (Optional) This job can be used to create and apply permissions for traverse groups based on
  previous resource based groups. The FS_TraverseGroupsJob must be added from the Instant Job
  Library in order to be used.
- [FS_ResourceBasedGroupAICImport Job](/docs/accessanalyzer/11.6/solutions/file-systems/resource-based-groups.md)
  – (Optional) This job imports resources and access groups from the FS_ResoureBasedGroup Job into
  the Netwrix Access Information Center. The FS_ResourceBasedGroupsAICImport Job must be added from
  the Instant Job Library to be used.

## Recommended Configurations for the Resource Based Groups Job Group

Dependencies

- The **.Active Directory Inventory** Job Group must be successfully run prior to running this job
- The **FileSystem** > **0.Collection** Job Group must be successfully run prior to running this job

Targeted Hosts

- None – If targeting all file servers known to Enterprise Auditor
- Scope the actions to a host list – If targeting specific file servers

Schedule Frequency

This job group can be scheduled to run as desired. Throughout this document reference to executing a
job refers to either manual execution or scheduled execution, according to the needs of the
organization. See the
[Scheduling the Resource Based Groups Job Group](#scheduling-the-resource-based-groups-job-group)
topic for additional information.

History Retention

Not supported

## Scheduling the Resource Based Groups Job Group

Netwrix recommends that the job be run by a scheduled task with an unlimited timeout to ensure the
job will not be aborted when an interactive session is ended due to logoff (a logoff based on
inactivity is common in enterprise environments). Netwrix also recommends that the job only be
scheduled for discrete one-time runs so that results may be reviewed after each execution. See the
[Schedule Jobs](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/scheduling.md#schedule-jobs)
topic for additional information.

Throughout this document reference to executing a job refers to either manual execution or scheduled
execution, according to the needs of the organization.

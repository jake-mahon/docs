---
sidebar_position: 5630
title: Navigation Pane
---

# Navigation Pane

The Navigation Pane, located on the left-hand side of the Access Analyzer Console, lists all the major functions of Access Analyzer in a collapsible list format. Clicking on any node with an arrow will open a collapsible list that shows more navigation, configuration, and use options.

![Configuration Settings](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Navigate/NavigationMenu.png "Configuration Settings")

The items in the Navigation Pane are:

* Settings – Opens the Global Settings section for configurations which affect the running of Access Analyzer jobs. See the [Global Settings](../Settings/Overview "Navigates to the Global Settings section") topic for additional information.
* Host Management – Opens the Host Management section for inventorying and managing hosts to be targeted by Access Analyzer jobs. See the [Host Management](../HostManagement/Overview "Navigates to the Host Management section") topic for additional information.
* Host Discovery - Opens the Host Discovery section for discovering hosts to be targeted by the Access Analyzer jobs. See the Host Discovery topic for additional information.
* Running Instances – Displays progress for all running jobs. This includes jobs that are run by a scheduled task, interactively within the open Access Analyzer instance, or interactively in any other running instance of Access Analyzer See the [Running Instances Node](../RunningInstances/Overview "Running Instances Node") topic for additional information.
* Schedules – Opens the Scheduled Actions view which displays information on all scheduled tasks. See the [Schedules](../Schedule/Overview "Schedules") topic for additional information.
* Jobs – Lists all solutions, job groups, and jobs within a folder structure. See the [Jobs Tree](../Jobs/Overview "Jobs Tree") topic for additional information.

The title above the Navigation Pane will change depending on what is selected. There are also several right-click or context menus available throughout the console. See the [Navigation Pane Right-click Menus](#_Navigation_Pane_Right-click "Navigates to the Navigation Pane Right-click Menus section") topic for additional information.

## Navigation Pane Right-click Menus

There are several contextual right-click menus that are accessed by right-clicking on individual nodes or sub-nodes in the Navigation Pane. The different right-click menus are:

* Host Management Right-click Menus
* Jobs Tree Right-click Menus

### Host Management Right-click Menus

The following right-click menus are available within the Host Management node.

See the [Host Management](../HostManagement/Overview "Navigates to the Host Management section") topic for additional information on these actions.

#### Discovery Node

The Discovery node right click-menu can be accessed in the Host Management node in the Navigation Pane.

![Discovery Node options](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Archive/NavigationPane1.png "Discovery Node options")

The Discovery node right-click menu options are:

* Create Query – Opens the [Host Discovery Wizard](../HostDiscovery/Wizard/Overview "Navigates to the Discovery Wizard section")
* Suspend/Resume Query Queue – Pauses or resumes the host discovery queue

#### All Hosts Node

The All Hosts node right-click menu can be accessed in the Host Management node in the Navigation Pane.

![All Hosts Node options](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Archive/NavigationPane2.png "All Hosts Node options")

The All Hosts right-click menu options are:

* Add Hosts – Opens the [Add Hosts](../HostManagement/Actions/Add "Add Hosts") window
* Refresh Lists – Refreshes host list
* Refresh Hosts – Executes the host inventory query
* Save Selected to Lists – Opens the [Add Hosts](../HostManagement/Actions/Add "Add Hosts") window with the selected hosts already added to a new list
* Schedule – Opens the [Schedule (Activities Pane Option)](../HostManagement/Actions/Schedule)") window to schedule a host inventory query
* Export Data – Export the current data grid to an HTML file, an XML file, or a CSV file
* Suspend/Resume Host Inventory – Pauses or resumes a host inventory query

#### All Hosts > [Host List] Node

The All Hosts > [Host List] right-click menu can be accessed in the Host Management node in the Navigation Pane.

![Host List Node options](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Archive/NavigationPane3.png "Host List Node options")

The All Hosts > [Host List] node right-click menu options are:

* Edit List – Opens the [Add Hosts](../HostManagement/Actions/Add "Add Hosts") window for the selected list
* Rename List – Opens the Host list name window
* Delete List – Delete the selected host list
* Refresh List – Refreshes host list
* Refresh Hosts – Executes the host inventory query
* Save Selected to List – Opens the [Add Hosts](../HostManagement/Actions/Add "Add Hosts") window with the selected hosts already added to a new list
* Schedule – Opens the [Schedule (Activities Pane Option)](../HostManagement/Actions/Schedule)") window to schedule a host inventory query
* Export Data – Export the current data grid to an HTML file, an XML file, or a CSV file
* Suspend Host Inventory – Pauses or resumes a host inventory query

### Jobs Tree Right-click Menus

The following right-click menus are available within the Jobs tree.

See the [Jobs Tree](../Jobs/Overview "Jobs Tree") topic for additional information on these actions.

#### Jobs Tree Primary Nodes

The Job tree primary nodes have the following right-click menu items:

**NOTE:** These menu items apply to a Jobs Tree, Job Group, and a Job. Depending on the chosen selection, some menu items are grayed out.

| Jobs Tree Primary Nodes | Jobs Tree Primary Nodes | Jobs Tree Primary Nodes |
| --- | --- | --- |
| Jobs Tree Node | A Job Group Node | A Job Node |

Menu items include:

* Run Group/Jobs – Executes the selected job group or job
* Publish – Publishes the reports from the selected job group or job without regenerating the report. See the [Reporting](../Report/Overview "Navigates to the Reporting section") topic for additional information.
* Lock Group/Job – Locks job group or job, indicating configuration has been approved and the job group or job is ready to be scheduled/run. This option only applies to Role Based Access. See the [Role Based Access](../Settings/Access/RoleBased/Overview "Navigates to the Role Based Access section") topic for additional information.
* Unlock Group/Job – Unlocks job group or job, indicating the configuration has not been approved or needs to be modified. Unlocking a job will prevent Job Initiators from scheduling or running the job. This option only applies to Role Based Access. See the [Role Based Access](../Settings/Access/RoleBased/Overview "Navigates to the Role Based Access section") for additional information.
* Enable/Disable Job(s) – Disables the selected job or job group and skips them during scan execution. When a job group is disabled, all existing jobs within the job group are disabled. See the [Disable or Enable a Job](../Jobs/Job/DisableEnable "Disable or Enable a Job") topic for more information.
* Schedules – Opens the [Schedule Jobs](../Schedule/Overview#Schedule "Schedule Jobs") to schedule job group or job execution
* Refresh Tree – Refreshes the Jobs tree
* Changes – Opens the [Changes Window](../Jobs/Overview#Changes_Window "Navigates to the Changes Window section") to track changes to job configuration in a change log
* Cut – Cuts the selected job group or job (Ctrl+X)
* Copy – Copies the selected job group or job (Ctrl+C)
* Paste – Pastes a copied/cut job group or job to the selected location (Ctrl+V)

  **CAUTION:** Delete Group/Job will also delete all tables that match the job’s naming convention from the database.
* Delete Group/Job – Deletes the selected job group or job. See the [Report Cleanup when Deleting a Job or Job Group](../Report/Cleanup "Report Cleanup when Deleting a Job or Job Group") topic for additional information.

  **CAUTION:** Rename Group/Job will rename all tables that match the job’s naming convention within the database.
* Rename Group/Job – Opens a textbox over the selected job group or job to rename
* Export – Zips the selected job group or job. Options allow for including the job, the reports, and/or the job log and SA\_Debug log.
  * Save the ZIP file to a desired location, and optionally attach it to an email to [Netwrix Support](https://www.netwrix.com/support.html "Netwrix Support").
  * Email option requires [Notification](../Settings/Notification "Navigates to the Notification section") settings to be configured.
* Create Job (Ctrl+Alt+A) – Creates a new job at the same location as the selected job group or job. See the [Create a New Job](../Jobs/Job/Create "Create a New Job") topic for additional information.
* Add Instant Job – Opens the [Instant Job Wizard](../Jobs/InstantJobs/Overview "Instant Job Wizard").
* Create Group – Creates a new job group within the selected location
* Explore Folder – Opens the Windows Explorer folder for the select object
* Properties – Opens the [Job Properties](../Jobs/Job/Properties/Overview "Navigates to the Job Properties section") window

#### [Job] > Status Node

The [Job] > Status node has the following right-click menu items:

![Status Node](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Archive/NavigationPane7.png "Status Node")

The Status node right-click menu items are:

* Run Job – Executes the selected job
* Add Instant Job – Opens the [Instant Job Wizard](../Jobs/InstantJobs/Overview "Navigates to the Instant Job Wizard section")
* Create Job – Creates a new job at the same location as the selected job group or job (Ctrl+Alt+A)

#### [Job] > Status > [Table/View] Nodes

The [Job] > Status > [Table/View] nodes have the following right-click menu items:

| Table/View Nodes | Table/View Nodes | Table/View Nodes |
| --- | --- | --- |
| ConnectStatus Table | Job Stats & Task Stats Tables | Messages Table |

These menu items apply to the ConnectStatus Tables, Job Stats and Task Stats Tables, and the Messages Table. Depending on the chosen selection, some menu items are grayed out. The menu items are:

* Create Hostlist From Data – Opens the New host list from job results window
* Edit Host List – Opens the Edit Dynamic Job Host Lists window
* Export Data – Export the current data grid to an HTML file, an XML file, or a CSV file
* Run Job – Executes the selected job
* Add Instant Job – Opens the [Instant Job Wizard](../Jobs/InstantJobs/Overview "Instant Job Wizard")
* Creates Job – Creates a new job at the same location as the selected job group or job (Ctrl+Alt+A)

#### [Job] > Results Node

The [Job] > Results node has the following right-click menu items:

![Results Node](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Archive/NavigationPane11.png "Results Node")

The menu items are:

* Refresh Tree – Refreshes the Jobs Tree
* Run Job – Executes the selected job
* Add Instant Job – Opens the [Instant Job Wizard](../Jobs/InstantJobs/Overview "Navigates to the Instant Job Wizard section")
* Create Job – Creates a new job at the same location as the selected job group or job (Ctrl+Alt+A)

#### [Job] > Results > [Table/View] Nodes

The [Job] > Results > [Table/View] nodes have the following right-click menu items:

![Results-Table View Nodes](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Archive/NavigationPane12.png "Results-Table View Nodes")

The menu items are:

* Create Hostlist From Data – Opens the New host list from job results window. See the [Host Management](../HostManagement/Overview "Navigates to the Host Management section") topic for additional information.
* Edit Host List – Opens the Edit Dynamic Job Host Lists window. See the [Host Management](../HostManagement/Overview "Navigates to the Host Management section") topic for additional information.
* Export Data – Export the current data grid to an HTML file, an XML file, or a CSV file
* Actions – Opens the selected [Action Modules](../Action/Overview "Navigates to the Action Modules section") for the selected table/view
* Run Job – Executes the selected job
* Add Instant Job – Opens the [Instant Job Wizard](../Jobs/InstantJobs/Overview "Navigates to the Instant Job Wizard section")
* Create Job - Creates a new job at the same location as the selected job group or job (Ctrl+Alt+A)

#### [Job] > Results > [Report] Nodes

The [Job] > Results > [Report] nodes have the following right-click menu items:

![Results-Report Nodes](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Archive/NavigationPane13.png "Results-Report Nodes")

The [Job] > Results > [Report] node right-click menu items are:

* Run Job – Executes the selected job
* Add Instant Job – Opens the [Instant Job Wizard](../Jobs/InstantJobs/Overview "Navigates to the Instant Job Wizard section")
* Create Job – Creates a new job at the same location as the selected job group or job (Ctrl+Alt+A)

#### [Job] > Configure Node

The [Job] >Configure node have the following right-click menu items:

![Configure Nodes](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Archive/NavigationPane13.png "Configure Nodes")

The [Job] > Configure node right-click menu items are:

* Run Job – Executes the selected job
* Add Instant Job – Opens the [Instant Job Wizard](../Jobs/InstantJobs/Overview "Navigates to the Instant Job Wizard section")
* Create Job – Creates a new job at the same location as the selected job group or job (Ctrl+Alt+A)

  **NOTE:** This right-click menu is also opened at the Configure > Hosts node.

#### [Job] > Configure > [Configuration] Nodes

The right-click menu items for the [Job] > Configure > [Configuration] node are the same right-click menus as those available within the job’s individual configuration views:

| Configure-Configuration Nodes | Configure-Configuration Nodes | Configure-Configuration Nodes |
| --- | --- | --- |
| Queries Node | Analysis Node | Actions Node |

Each configuration node has a different right-click menu. For additional information on each:

* For the Queries node, see the [Jobs](../Jobs/Job/Overview "Navigates to the Queries section") section for information on these options
* For the Analysis node, see the [Jobs](../Jobs/Job/Overview "Navigates to the Analysis section") section for information on these options
* For the Actions node, see the [Jobs](../Jobs/Job/Overview "Navigates to the Actions section") section for information on these options

#### [Job] > Configure > Reports Node

The [Job] >Configure > Reports node has the following right-click menu items:

![Configure-Reports Node](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Archive/NavigationPane17.png "Configure-Reports Node")

The [Job] > Configure > Reports node right-click menu items are:

* Create Report – Opens a new report Configuration under the job’s **Configure > Reports Node**
* Paste Report – Paste a copied report from a different job into this job’s Reports node
* Run Job – Executes the selected job
* Add Instant Job – Opens the [Instant Job Wizard](../Jobs/InstantJobs/Overview "Navigates to the Instant Job Wizard section")
* Create Job – Creates a new job at the same location as the selected job group or job

#### [Job] > Configure > Reports > [Report Configuration] Node

The [Job] >Configure > Reports > [Report Configuration] node has the following right-click menu items:

![Reports Configuration Node](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Archive/NavigationPane18.png "Reports Configuration Node")

The [Job] > Configure > Reports > [Report Configuration] node right-click menu items are:

* Generate Report – Generates the selected report
* Rename Report – Opens a textbox over the selected report to rename
* Delete Report – Deletes the selected report
* Copy Report – Copies the report configuration to clipboard. The copied report will have only the roles inherited from the parent job when pasted.
* Run Job – Executes the selected job
* Add Instant Job – Opens the [Instant Job Wizard](../Jobs/InstantJobs/Overview "Navigates to the Instant Job Wizard section")
* Create Job – Creates a new job at the same location as the selected job group or job (Ctrl+Alt+A)
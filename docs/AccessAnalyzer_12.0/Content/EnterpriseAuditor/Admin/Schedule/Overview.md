---
sidebar_position: 5636
title: Schedules
---

# Schedules

The Access Analyzer Console can only run one task at a time. However, with the Schedule Service Account, the Access Analyzer application can run multiple tasks simultaneously. See the [Schedule](../Settings/Schedule "Schedule") topic for information on configuring the Schedule Service Account.

The following tasks can be scheduled:

* Job or Job Group – Schedule jobs to run at the job or job group level. See the [Schedule Jobs](#Schedule "Schedule Jobs") topic for additional information.
* Host Discovery Query – Schedule Host Discovery queries from the Host Discovery node. See the [Host Discovery Queries Activities Pane](../HostDiscovery/Activities "Host Discovery Queries Activities Pane") topic for additional information.
* Host Inventory Query – Schedule Host Inventory queries from within the Host Management node. See the [Schedule (Activities Pane Option)](../HostManagement/Actions/Schedule)") topic for additional information.

**NOTE:** If you attempt to rename a task after a scheduled task using custom credentials has been created, then the Rename Scheduled Task wizard displays to update the credentials. See the [Rename Scheduled Task Wizard](RenameWizard "Rename Scheduled Task Wizard") topic for additional information.

## Schedule Jobs

Jobs can be scheduled at the job group or job level.

![Schedule option from Job Tree](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Schedule/JobTree.png "Schedule option from Job Tree")

Select the desired job group or job. Right-click on the node and select **Schedule** to open the Schedule wizard.

![Schedule Job wizard](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Schedule/Schedule.png "Schedule Job wizard")

The Schedule wizard has five pages with options for setting up the schedule task:

* Schedule
* Host List
* Connection
* Run as
* Options

See the [Schedule Wizard](Wizard "Schedule Wizard") topic for additional information.
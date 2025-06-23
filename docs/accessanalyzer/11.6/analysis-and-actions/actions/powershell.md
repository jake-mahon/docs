---
title: powershell
sidebar_label: powershell
description: Documentation for powershell functionality in Access Analyzer including configuration and usage information.
---

# PowerShell Action: Execution Options

Specify the execution options for the PowerShell script using the Execution Options page.

![PowerShell Action Module Wizard Execution Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/commandlineutility/executionoptions.webp)

The options on the Execution Options page are:

- Execute script locally on the Enterprise Auditor server – Enable this to execute the PowerShell
  script on the Enterprise Auditor server

  - Use the same PowerShell session for each row – Select to enable using the same PowerShell
    session to run multiple rows

- Execute script remotely on a target server – Enable this to execute the PowerShell script on a
  remote target server

  - Use the **Remote host** dropdown to select the database column that will be used as the target
    server name or type in a network host name
  - Select the **Fall back to the local Enterprise Auditor server if the remote execution fails**
    option to use the Enterprise Auditor server if remote execution fails

- Use impersonation within server executable – Select this option to use impersonation when
  executing the PowerShell script

# PowerShell Action Module

The PowerShell action module provides methods of running PowerShell scripts on the local machine or
on remote hosts. Define PowerShell scripting actions using the PowerShell Action Module Wizard.

**CAUTION:** Ensure that only the changes required are applied and only to those target systems
desired.

Enterprise Auditor action modules contain one or more selectable operations. Each operation performs
its function on a single object per row from the source table defined in the action.

## Configuration

The PowerShell action module is configured through the PowerShell Action Module Wizard, which
contains the following wizard pages:

- Welcome
- [PowerShell Action: Script](/docs/accessanalyzer/11.6/analysis-and-actions/actions/powershell.md)
- [PowerShell Action: Execution Options](/docs/accessanalyzer/11.6/analysis-and-actions/actions/powershell.md)
- [PowerShell Action: Summary](/docs/accessanalyzer/11.6/analysis-and-actions/actions/powershell.md)

The Welcome page displays first and gives an overview of the action module. The navigation pane
contains links to the pages in the wizard.

![PowerShell Action Module Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

To proceed, click **Next** or use the Steps navigation pane to open another page in the wizard.

# PowerShell Action: Script

The Script page enables you to input the PowerShell script that will be used to perform the
requested action. Built-in variables are available for use in the script.

![PowerShell Action Module Wizard Script page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/powershell/script.webp)

The PowerShell script can be entered manually into the Script window at the top of the Script page.
To open a pre-existing PowerShell script from a file, click **Open** to select the script file.

At the bottom of the page are three tabs that can be used to configure the PowerShell action module
further. The tabs are:

- [Columns](#columns)
- [Parameters](#parameters)
- [Input Data](#input-data)

## Columns

Use the Columns tab to select the available columns.

![Columns tab](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/powershell/scriptcolumns.webp)

The table in the Columns tab displays the Columns that can be used for the PowerShell script. To use
a Column, select the checkbox under the **Use** column.

![Right-click menu](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/powershell/scriptrightclickoption.webp)

Right-clicking any of the variable names brings up a **Copy variable name** option that enables
users to paste the variable name into the PowerShell script.

## Parameters

The Parameters tab contains options to add, edit, or delete user-made PowerShell parameters.

![Parameters tab](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/powershell/scriptparamters.webp)

The options are:

- Add – Clicking **Add** opens the Add/Edit Variable window. See the
  [Add/Edit Variable Window](#addedit-variable-window) topic for additional information.
- Edit – Select an existing parameter and click **Edit** to open the Add/Edit Variable window. See
  the [Add/Edit Variable Window](#addedit-variable-window) topic for additional information.

  - Double-clicking an existing parameter also opens the **Add/Edit Variable** window

- Delete – Delete a selected parameter

**NOTE:** The built-in default parameters cannot be edited or deleted.

### Add/Edit Variable Window

Configure options for a new or existing parameter using the Add/Edit Variable window.

![Add/Edit Variable Window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/powershell/addeditvariable.webp)

The options are:

- Name – Enter or edit the name for the custom parameter
- Description – Enter or edit the description for the custom parameter
- Type – Select the Type from a dropdown list. The options are:

  - String
  - List
  - Filepath
  - Boolean
  - Long
  - Double

- Value – Enter or edit the value for the custom parameter

## Input Data

Preview how the input data will look in the Input Data tab.

![Input Data tab](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/action/powershell/scriptinputdata.webp)

Information in the Input Data tab varies depending on which source table the PowerShell action
module is configured to pull data from.

# PowerShell Action: Summary

View a summary of configured options on the Summary page.

![PowerShell Action Module Wizard Summary page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

Click **Finish** to save changes and exit the PowerShell Action Module Wizard. Click **Cancel** to
exit the wizard without saving.

---
title: command line
sidebar_label: command line
description: Documentation for command line functionality in Access Analyzer including configuration and usage information.
---

# CLU: Define Fields

The Define Fields page provides options to define and configure fields for the Command Line Utility
output. It is a wizard page for the **Edit Profile** and **Create a New Profile** profile types.

![Command Line Utility Data Collector Wizard Define Fields page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/commandlineutility/definefields.webp)

**CAUTION:** Do not modify this page without guidance from Netwrix or the data may not be processed
by Enterprise Auditor.

# CLU: Execution Options

The Execution Options page provides options to define the mode of execution. It is a wizard page for
the **Edit Profile** and **Create a New Profile** selections on the Profile Type page.

![Command Line Utility Data Collector Wizard Execution Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/commandlineutility/executionoptions.webp)

The available options on the page vary depending on the selected profile type. The possible options
are as follows:

Execution Type

The Execution Type section identifies the mode of execution:

- Local – Execute the utility within the Enterprise Auditor Console
- Remote – Execute the utility on the target host

Output options

The output options include:

- Write Output to a text file – Writes task output to a text file which is thenprocessed to collect
  properties
- Preserve Output file – Stores the output file on the local machine
- .Exe Present in Installed CLU Directory – Select the checkbox if the .exe utility is present in
  the installed CLU directory. The path on the Profile Parameters page should be the utility name
  instead of the full path. See the
  [CLU: Profile Parameters](/docs/accessanalyzer/11.6/data-collection/custom-collectors/command-line.md) topic
  for additional information.

Remote Execution Options

The Remote Execution Options apply to the Remote mode of execution:

- Copy .exe to remote host – Copies the executable from the local machine to the remote machine
  before executing it
- Leave .exe on remote host – Keeps the executable on the remote machine after execution

Other Settings

The Other Settings section provides additional options:

- Ignore Error Code – Error code to skip while executing the command line utility using the task
  scheduler

  - The `0` code is always skipped during execution
  - If no error code is required, enter `0`

- Timeout – Timeout limit in seconds for the task to finish

  - The default value is 1200 seconds, or 20 minutes

# CommandLineUtility Data Collector

The CommandLineUtility Data Collector provides the ability to remotely spawn, execute, and extract
data provided by a Microsoft native or third-party command line utility. It allows users to easily
execute a command line utility and capture its output as Enterprise Auditor data. This data
collector is a core component of Enterprise Auditor and is available with all Enterprise Auditor
licenses.

Protocols

- Remote Registry
- RPC

Ports

- TCP 135-139
- Randomly allocated high TCP ports

Permissions

- Member of the local Administrators group

## CommandLineUtility Query Configuration

The CommandLineUtility Data Collector executes a command line utility and captures the output. It is
configured through the Command Line Utility Data Collector Wizard, which contains the following
pages:

- Welcome
- [CLU: Profile Type](/docs/accessanalyzer/11.6/data-collection/custom-collectors/command-line.md)
- [CLU: Profile Parameters](/docs/accessanalyzer/11.6/data-collection/custom-collectors/command-line.md)
- [CLU: Execution Options](/docs/accessanalyzer/11.6/data-collection/custom-collectors/command-line.md)
- [CLU: Define Fields](/docs/accessanalyzer/11.6/data-collection/custom-collectors/command-line.md)
- [CLU: Script Editor](/docs/accessanalyzer/11.6/data-collection/custom-collectors/command-line.md)
- [CLU: Results](/docs/accessanalyzer/11.6/data-collection/custom-collectors/command-line.md)
- [CLU: Summary](/docs/accessanalyzer/11.6/data-collection/custom-collectors/command-line.md)

![Command Line Utility Data Collector Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.

# CLU: Profile Parameters

The Profile Parameters page provides settings to configure the parameters for the profile. It is a
wizard page for the **Edit Profile** or **Create a New Profile** selections on the Profile Type
page.

![Command Line Utility Data Collector Wizard Profile Parameters page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/commandlineutility/profileparameters.webp)

Profile parameters include:

- Profile Name – Name of the profile. If **Edit Profile** was selected on the Profile Type page,
  then this is the name of an existing profile to be edited. If **Create a New Profile** was
  selected, then this is the name of a new profile.
- Path – Path of the utility (.exe) from the local or remote machine. If stored on the local
  machine, give the local path. If the utility is located on multiple paths in the same machine,
  each can be entered on a new line in this field. If the .exe file is present in the installed CLU
  directory, then enter the utility name rather than the full path.
- Start in path for task (Optional) – Working directory for the command line that executes the
  program or script. This should be either the path to the program or script file, or the path to
  the files that are used by the executable file.
- Command Line – Command that the utility executes. If the utility is self-executable and does not
  need a command, leave this field blank.
- Output File Name – Enter the desired name for the output file. By default, the output file name
  matches the profile name.

# CLU: Profile Type

The Profile Type page contains options to select a new or existing profile.

![Command Line Utility Data Collector Wizard Profile Type page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/commandlineutility/profiletype.webp)

The options on the Profile Type page are:

- Select Profile – Allows you to change the properties of a profile from the results page
- Edit Profile – Allows you to edit a profile's execution options and properties. Enables the Define
  Fields and Script Editor pages.
- Create a New Profile – Allows you to create a new profile. Enables the Define Fields and Script
  Editor pages.

The profile type selected may alter the availability of the subsequent wizard steps.

# CLU: Results

The Results page is where the properties to be returned as columns in the results table are
selected. It is a wizard page for all profile types.

![Command Line Utility Data Collector Wizard Results page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/results.webp)

Select one or more properties to be returned as columns in the results table. Click **Select All**
to select all of the properties, or click **Clear All** to clear all the currently selected
properties. The available properties vary based on the selections on previous wizard pages.

# CLU: Script Editor

The Script Editor page provides options to create or edit a Visual Basic script that is used to
parse the output file created by the data collector after execution. The Script Editor page is
enabled when **Edit Profile** or **Create a New Profile** is selected on the Profile Type page. The
page is disabled when the **Select Profile** option is selected on the Profile Type page.

![Command Line Utility Data Collector Wizard Script Editor page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/commandlineutility/scripteditor.webp)

**CAUTION:** Do not modify this page without guidance from Netwrix or the data may not be processed
by Enterprise Auditor.

# CLU: Summary

The Summary page provides a summary of the query that has been created or edited. It is a wizard
page for all profile types.

![Command Line Utility Data Collector Wizard Summary page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

Click **Finish** to save configuration changes. If no changes were made, it is a best practice to
click **Cancel** to close the Command Line Utility Data Collector Wizard to ensure that no
accidental clicks are saved.

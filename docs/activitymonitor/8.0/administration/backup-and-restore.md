---
title: Agent Backup and Restore Procedures
sidebar_label: Backup & Restore
description: Step-by-step procedures for backing up and restoring Activity Monitor agent configurations, passwords, event data files, and activity logs.
---

# Agent Backup

Follow the steps to back up the configuration, passwords, Active Directory event data file, and
activity log files for Activity Monitor Agents deployed on file system servers, SharePoint servers,
and domain controllers.

Configuration

**Step 1 –** Back up the `SBTFileMon.ini` file. The default location is

C:\ProgramData\Netwrix\Activity Monitor\Agent\SBTFileMon.ini

The location of the `SBTFileMon.ini` is determined by the registry value:

HKLM\SYSTEM\CurrentControlSet\Services\SBTLogging\Parameters, value ConfigPath.

**Step 2 –** Back up passwords

> Passwords are stored in the `SBTFileMon.ini` file in an encrypted form using PSAPI. They can only
> be decrypted on the same Windows server. To be able to restore the configuration of a different
> server, back up the passwords separately. This includes the following:

- Credentials for Agent
- Credentials for Monitored Hosts
- Credentials for Archive

Active Directory Event Data File

**Step 3 –** On a domain controller, back up the `SAMConfig.xml` file. The default location is:

C:\Program Files (x86)\STEALTHbits\StealthINTERCEPT\SIWindowsAgent

The location of the file is determined by the registry value
`HKLM\SOFTWARE\STEALTHbits Technologies\StealthINTERCEPT Windows Agent`, value `Installdir`. Append
`SIWindowsAgent` to the value of `Installdir`.

Activity Log Files

**Step 4 –** Back up the log files stored on the local drive and on the archival network share. The
default folder is

C:\ProgramData\Netwrix\Activity Monitor\Agent\ActivityLogs

**NOTE:** Keep in mind that` C:\ProgramData` folder may be hidden. Navigate to it by typing
`%ALLUSERSPROFILE%` in the File Explorer.

The location of the files depend on the configuration and whether the archiving is enabled. See the
[Archiving Tab](/docs/activitymonitor/8.0/agents/configuration/storage-and-archiving.md) topic for additional information.

All key components necessary for data recovery have now been backed up for the agents.

# Agent Restoration

Follow the steps to restore the configuration, Active Directory configuration file, and activity log
files for Activity Monitor Agents deployed on file system servers, SharePoint servers, and domain
controllers.

**CAUTION:** Restore the agent before restoring the console to ensure connectivity and monitoring
functionality

**Step 1 –** Reinstall the Activity Monitor Agents.

**Step 2 –** Replace the `SBFileMon.ini` file with the backed up configuration file.

**Step 3 –** Replace the `SAMConfig.xml` file with the backed up Active Directory event data file.

**Step 4 –** Disable all activity monitoring on the Monitored Hosts and Monitored Domains page.

**Step 5 –** Use the Console to update the passwords if the agent is restored on a different server.

**Step 6 –** Use the Console to update the archive password, or the archive location if the location
is moved.

**Step 7 –** Restore the log files with the backed up activity log files.

**Step 8 –** Enable all activity monitoring.

The configuration, Active Directory event data file, and activity log files are now restored on the
Activity Monitor Agents.

# Console Backup

Follow the steps to back up the list of agents managed on the Activity Monitor Console.

**Step 1 –** Back up the configuration file:

%ALLUSERSPROFILE%\Netwrix\Activity Monitor\Console\Agents.ini

**Step 2 –** Back up the license file:

%ALLUSERSPROFILE%\Netwrix\Activity Monitor\Console\FileMonitor.lic

**Step 3 –** Back up passwords.

Credentials for the agents are stored in the `Agents.ini` file in an encrypted form using PSAPI.
They can only be decrypted on the same Windows workstation. To be able to restore the configuration
on a different workstation, back up the passwords separately.

All key components necessary for data recovery have now been backed up for the console.

# Console Restoration

Follow the steps to restore the list of agents managed on the Activity Monitor Console.

**Step 1 –** Restore `Agents.ini` file.

**Step 2 –** Restore `FileMonitor.lic` file.

**Step 3 –** Start the console.

**Step 4 –** Update the passwords if the console is restored on a different workstation.

The Activity Monitor Console can now connect to deployed agents.

# Backup & Restoration

The Netwrix Activity Monitor is comprised of the following components:

- Activity Monitor Console - Controls configuration settings. See the
  [Administration](/docs/activitymonitor/8.0/administration/index.md)topic for additional information.
- Deployed Agents - Monitor targeted servers and domains. See the
  [Agent Information](/docs/activitymonitor/8.0/agents/index.md) topic for additional information.

The configuration settings are stored on individual agents, and the console stores which agents have
been deployed. Agents also store activity log files of monitored environments, which can optionally
be stored on a network share. This document describes the process for backing up and restoring the
Activity Monitor Console and the activity agents.

The sections in this document are:

- [Agent Backup](/docs/activitymonitor/8.0/administration/backup-and-restore.md)
- [Agent Restoration](/docs/activitymonitor/8.0/administration/backup-and-restore.md)
- [Console Backup](/docs/activitymonitor/8.0/administration/backup-and-restore.md)
- [Console Restoration](/docs/activitymonitor/8.0/administration/backup-and-restore.md)

---
sidebar_position: 1785
title: Active Directory Registry Key Configuration
---

Filter: 

* All Files

Submit Search

# Active Directory Registry Key Configuration

Review the basic registry keys that you may need to configure for monitoring Active Directory with Netwrix Auditor. On the computer whereNetwrix Auditor Server is installed, navigate to **Start** > **Run** and type **regedit**.

| Registry key (REG\_DWORD type) | Description / Value |
| --- | --- |
| HKEY\_LOCAL\_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\AD Change Reporter | |
| CleanAutoBackupLogs | Defines the retention period for the security log backups:   * 0—Backups are never deleted from Domain controllers * [X]— Backups are deleted after [X] hours |
| IgnoreAuditCheckResultError | Defines whether audit check errors should be displayed in the Activity Summary footer:   * 0—Display errors * 1—Do not display errors |
| IgnoreRootDCErrors | Defines whether to display audit check errors for the root domain (when data is collected from a child domain) in the Activity Summary footer:   * 0—Display errors * 1—Do not display errors |
| MonitorModifiedAndRevertedBack | Defines whether the Activity Summary must display the attributes whose values were modified and then restored between data collections:   * 0—These attributes are not displayed * 1—These attributes are displayed as "modified and reverted back" |
| ProcessBackupLogs | Defines whether to process security log backups:   * 0—No * 1—Yes   Even if this key is set to *"0"*, the security log backups will not be deleted regardless of the value of the CleanAutoBackupLogs key. |
| HKEY\_LOCAL\_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\AD Change Reporter\ | |
| CollectLogsMaxThreads | Defines the number of Domain Controllers to simultaneously start log collection on. |
| HKEY\_LOCAL\_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\Management Console\Database settings | |
| SqlOperationTimeout | Defines the timeout for executing SQL queries such as data selection, insertion or deletion (in seconds). |
| timeout | Defines the Audit Database connection timeout (in seconds). |
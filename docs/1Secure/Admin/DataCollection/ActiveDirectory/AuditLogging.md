---
id: auditlogging
title: Auditlogging
---

| Setting | Value | Comment |
| --- | --- | --- |
| AdminAuditLogEnabled | True | Enables audit logging |
| AdminAuditLogAgeLimit | 30 | Determines how long audit log entries will be retained (default is 90 days) |
| AdminAuditLogCmdlets | * | Instructs the program to create a log entry for every cmdlet that is run. |
| LogLevel | Verbose | Sets logging level. |
| ExcludedCmdlets | *-InboxRule,  *-MailboxAutoReplyConfiguration,  Set-MailboxAuditBypassAssociation,  Set-MailboxAutoReplyConfiguration,  Set-MailboxCalendarConfiguration,  Set-MailboxCalendarFolder,  Set-MailboxFolderPermission,  Set-MailboxJunkEmailConfiguration,  Set-MailboxMessageConfiguration,  Set-MailboxRegionalConfiguration,  Set-MailboxSpellingConfiguration | This list of exclusions is set up as explained in step 3 of the procedure below. |

**Step 1 –** On the computer where the monitored Exchange server is installed, navigate to **Start → Programs → Exchange Management Shell**.

**Step 2 –** Execute the following command depending on your Exchange version:

- Exchange 2019, 2016 and 2013

  `Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogAgeLimit 30 -AdminAuditLogCmdlets * -LogLevel Verbose`
- Exchange 2010

`Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogAgeLimit 30 -AdminAuditLogCmdlets *`

1. To reduce server load, you can exclude the cmdlets listed in the table above from Exchange logging. For that:

   1. On the computer where Netwrix 1Secure is installed, browse to the *%Netwrix Auditor Server installation folder%/Active Directory Auditing* folder, locate the **SetAALExcludedCmdlets.ps1** PowerShell script file and copy it to Exchange server.
   2. In **Exchange Management Shell**, run this script using the command line:

      `.\SetAALExcludedCmdlets.ps1`

   Make sure your policies allow script execution.
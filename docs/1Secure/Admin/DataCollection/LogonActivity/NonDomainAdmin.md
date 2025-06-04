---
id: nondomainadmin
title: Nondomainadmin
---

Do the following:

**Step 1 –** Create a domain user with the following privileges:

- Back up files and directories. [Configure the Back up Files and Directories Policy](../Computer/BackupFilesDirectories.md "Configuring 'Back up Files and Directories' Policy")
- Log on as a batch job. [Define Log On As a Batch Job Policy](../ActiveDirectory/LogOnAsBatch.md "Define Log On As a Batch Job Policy")
- Manage auditing and security log. [Configure the Manage Auditing and Security Log Policy](../ActiveDirectory/ManageAuditingSecurityLog.md "Configuring 'Manage Auditing and Security Log' Policy")

**Step 2 –** Grant the *Read* permission on the following registry keys to this user:

- HKEY_LOCAL_MACHINE\SECURITY\Policy\PolAdtEv
- HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg
- HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security

[Assigning Permission To Read the Registry Key](../ActiveDirectory/PermissionsRegistryKeys.md "Assigning Permission To Read the Registry Key") how to do it using Registry Editor.
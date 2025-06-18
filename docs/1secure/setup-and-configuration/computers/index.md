---
id: configure-the-back-up-files-and-directories-policy
title: 'Configure the Back up Files and Directories Policy'
pagination_label: 'Configure the Back up Files and Directories Policy'
sidebar_label: 'Configure the Back up Files and Directories Policy'
sidebar_position: 72
description: 'Learn how to configure the Back up Files and Directories policy using Local Security Policy or Group Policy Management Console.'
---

# Configure the Back up Files and Directories Policy

Configure this Back up Files and Directories policy via the **Local Security Policy Snap-in** or
using the **Group Policy Management Console**.

Follow the steps to configure the Back up Files and Directories' policy via the **Local Security
Policy Snap-in**.

**Step 1 –** On any domain controller in the target domain, open the **Local Security Policy**
snap-in: navigate to Start > Administrative Tools (Windows Server 2016 and higher) or Administrative
Tools (Windows 2012) > Local Security Policy.

**Step 2 –** Navigate to Security Settings > Local Policies > User Right Assignment.

**Step 3 –** Locate the **Back up files and directories** policy and double-click it.

**Step 4 –** In the **Back up files and directories Properties** dialog, click **Add User or
Group**, specify the user that you want to define this policy for.

The policy is now configured.

Follow the steps to configure the Back up Files and Directories' policy using the **Group Policy
Management Console**.

**NOTE:** Perform this procedure only if the account selected for data collection is not a member of
the Domain Admins group.

**Step 1 –** Open the Group Policy Management console on any domain controller in the target domain:
navigate to Start > Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools
(Windows 2012 R2 and below) > Group Policy Management.

**Step 2 –** In the left pane, navigate to Forest: `<forest name>` > Domains > `<domain name>` >
Domain Controllers. Right-click the effective domain controllers policy (by default, it is the
_Default Domain Controllers Policy_), and select Edit .

**Step 3 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to Policies > Windows Settings > Security Settings > Local Policies.

**Step 4 –** On the right, double-click the User Rights Assignment policy.

**Step 5 –** Locate the Back up files and directories policy and double-click it.

**Step 6 –** In the Back up files and directories Properties dialog, click Add User or Group and
specify the user that you want to define this policy for.

**Step 7 –** Navigate to Start > Run and type "_cmd_". Input the `gpupdate /force` command and press
Enter. The group policy will be updated.

**Step 8 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

**Step 9 –** Ensure that new GPO settings applied on any audited domain controller.

## The policy is now configured.

id: prepare-for-windows-file-server-monitoring
title: "Prepare for Windows File Server Monitoring"
pagination_label: "Prepare for Windows File Server Monitoring"
sidebar_label: "Prepare for Windows File Server Monitoring"
sidebar_position: 130
description: "Learn the requirements, limitations, protocols, and considerations necessary for Windows File Server data collection."

---

# Prepare for Windows File Server Monitoring

This topic provides the requirements, limitations, protocols, and other considerations necessary for
data collection from the computer while working with Netwrix 1Secure.

## Check requirements

Make sure the Windows File Servers you want to monitor meet the requirements listed in the
[Requirements](/docs/1secure/getting-started/requirements.md#prerequisites-for-data-sources) section.

## Decide on audit data to collect

**Step 1 –** Review the list of objects and attributes that can be monitored by Netwrix 1Secure: .

**Step 2 –** Plan for the file servers and shares you want to audit. Consider the following:

- If you have multiple file shares frequently accessed by a significant number of users, it is
  reasonable to audit object changes only. Tracking all events may result in too much data written
  to the audit logs, whereas only some part of it may be of any interest.

  Audit flags must be set on every file share or the whole computer you want to audit.

- If your file shares are stored within one folder (or disk drive), you can configure audit settings
  for this folder only. As a result, you will receive reports on all required access types applied
  to all file shares within this folder.

  It is not recommended to configure audit settings for system disks.

- By default, Netwrix 1Secure will monitor all shares stored in the specified location, except for
  hidden shares (both default and user-defined). If you want to monitor user-defined hidden shares,
  select the related option in the monitored item settings.

Administrative hidden shares like default system root or Windows directory (_ADMIN$_), default drive
shares (_D$, E$_), etc. will not be monitored.

## Review considerations and limitations

The following considerations and limitations refer to data collection:

- To collect data from 32-bit operating systems, network traffic compression must be disabled.
- To collect data from Windows Failover Cluster, network traffic compression must be enabled.
- Scale-Out File Server (SOFS) cluster is not supported.

The following considerations and limitations refer to reporting:

- For Windows File Servers running Windows Server 2008, changes to the file shares will be reported
  without exact initiator's account in the _who_ field— instead, _system_ is reported.
- If a file server is running Windows Server 2008 SP2, Netwrix 1Secure may be unable to retrieve
  workstation name for the failed read attempts.
- In the reports and search results, in some cases, Netwrix 1Secure UI displays not the actual time
  when the event occurred but data collection time.
- Netwrix 1Secure may report on several unexpected changes with _who_ (initiator's account) reported
  as _system_ due to the native Windows File Servers audit peculiarities. If you do not want to see
  these changes, exclude them from the audit. See for more information. For example - mass file
  removals, when target Windows server generates too many events at a time and the product is unable
  to parse their sequences correctly.
- Due to Windows limitations, the _copy/rename/move_ actions on remote file shares may be reported
  as two sequential actions: copying – as adding a new file and reading the initial file;
  renaming/moving – as removing the initial file and adding a new file with the same name.
- To report on _copy_ actions on remote file shares, make sure that audit of successful read
  operations is enabled. See for details.

## Apply required audit settings

Depending on your auditing requirements, you may need to audit your file server objects for:

- Successful read, added, modified, removed, renamed, moved, copied attempts;
- Failed read, added, modified, removed, renamed, moved, copied attempts;

For that, object-level audit settings and appropriate audit policies should be set up. Besides, the
following should be configured for your Windows file servers:

- Windows Event log size and retention settings
- Remote registry service
- Inbound connection rules for Windows firewall

You can apply the required audit settings to your Windows file servers in one of the following ways:

- Automatically - The current audit settings will be applied automatically. They will be
  periodically checked and adjusted if necessary.
  See [Data Collecting Account](/docs/1secure/setup-and-configuration/data-collection-account.md) for
  additional information.

- Manually - Perform the following action to manually apply audit settings to Windows File Servers:

  - Configure Advanced Audit Policies

## Configure Data Collecting Account

Follow the instructions in the
[Data Collecting Account](/docs/1secure/setup-and-configuration/data-collection-account.md) section.

## Configure required protocols and ports

Set up protocols and ports as described in the
[Protocols and Ports Required for Monitoring File Servers](/docs/1secure/setup-and-configuration/computers/index.md) section.

---

id: file-servers-and-antivirus
title: "File Servers and Antivirus"
pagination_label: "File Servers and Antivirus"
sidebar_label: "File Servers and Antivirus"
sidebar_position: 133
description: "Learn which Netwrix executables to add to your antivirus exclusion list for optimal performance."

---

# File Servers and Antivirus

## File Servers and Antivirus

It is strongly recommended that you add the following executables to the list of exclusions for your
antivirus:

- C:\Windows\SysWOW64\NwxExeSvc\NwxExeSvc.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxEventCollectorAgent.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxFsAgent.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxSaclTunerAgent.exe
- C:\ProgramData\Netwrix Cloud Agent

Otherwise, significant delays and performance issues may occur while collecting data.

This happens because these executables access a large number of file server objects (files,
folders), fetching audit data — and your antivirus may treat this as a suspicious behavior.

For some antiviruses (for example, Trend Micro) you may need to specify the folders to exclude, that
is, `C:\Windows\SysWOW64\NwxExeSvc\`. Refer to your antivirus documentation for details.

---

id: protocols-and-ports-required-for-monitoring-file-servers
title: "Protocols and Ports Required for Monitoring File Servers"
pagination_label: "Protocols and Ports Required for Monitoring File Servers"
sidebar_label: "Protocols and Ports Required for Monitoring File Servers"
sidebar_position: 137
description: "Review the complete list of protocols and ports required for Netwrix 1Secure file server monitoring."

---

# Protocols and Ports Required for Monitoring File Servers

Review a full list of protocols and ports required for Netwrix 1Secure for File Servers.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Cloud Agent resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Cloud Agent resides (source),
allow outbound connections to remote 389 TCP port. On domain controllers in your domain (target),
allow inbound connections to local 389 TCP port.

|                            |              |                     |                    |                                                                                      |
| -------------------------- | ------------ | ------------------- | ------------------ | ------------------------------------------------------------------------------------ |
| **Port**                   | **Protocol** | **Source**          | **Target**         | **Application protocol**                                                             |
| 389                        | TCP/UDP      | Netwrix Cloud Agent | Domain Controllers | LDAP DC query Account resolve                                                        |
| 135 + Dynamic: 1024 -65535 | TCP          | Netwrix Cloud Agent | Monitored computer | Windows Management Instrumentation Firewall configuration Core Service communication |
| 135                        | TCP          | Netwrix Cloud Agent | Monitored computer | Service Control Manager Remote Protocol Core Service installation                    |
| 137                        | UDP          | Netwrix Cloud Agent | Monitored computer | File and Printer Sharing (NetBIOS Name Resolution)                                   |
| 138                        | UDP          | Netwrix Cloud Agent | Monitored computer | File and Printer Sharing (NetBIOS Datagram Service)                                  |
| 139                        | TCP          | Netwrix Cloud Agent | Monitored computer | File and Printer Sharing (NetBIOS Session Service)                                   |
| 445 + 139                  | TCP          | Netwrix Cloud Agent | Monitored computer | SMB 2.0/3.0                                                                          |
| 3268                       | TCP          | Netwrix Cloud Agent | Domain controllers | LDAP Group membership GC search                                                      |

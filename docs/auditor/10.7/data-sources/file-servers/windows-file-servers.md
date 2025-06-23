---
title: windows file servers
sidebar_label: windows-file-servers
description: Auditor 10.7 documentation for windows file servers with configuration details, usage instructions, and implementation guidance.
---

# Configure Advanced Audit Policies

Configure advanced audit policies to limit the range of events tracked and recorded by the product,
thus preventing your AuditArchive and the Security event log from overfilling. Perform procedures
below instead of the [Configure Local Audit Policies](/docs/auditor/10.7/data-sources/file-servers/windows-file-servers.md).

## Configure Security Options

Setting up both basic and advanced audit policies may lead to incorrect audit reporting. To force
basic audit policies to be ignored and prevent conflicts, enable the _Audit: Force audit policy
subcategory settings_ policy.

Follow the steps to enforce advanced policies.

**Step 1 –** On the audited server, open the Local Security Policy snap-in and navigate to Start >
Windows Administrative Tools > Local Security Policy.

**Step 2 –** Navigate to Security Settings > Local Policies > Security Options and locate the Audit:
Force audit policy subcategory settings policy.

![Local Security Policy snap-in ](/img/product_docs/1secure/configuration/computer/manualconfig_fileserver_graudit_secpol2016.webp)

**Step 3 –** Double-click the policy and enable it.

## Configure Advanced Audit Policy on Windows Server 2016 and Above

In Windows Server 2016 and above, Advanced audit policies are integrated with Group Policies, so
they can be applied via Group Policy Object or Local Security Policies. The procedure below
describes how to apply Advanced policies via Local Security Policy console.

**Step 1 –** On the audited server, open the **Local Security Policy** snap-in and navigate to
Start > Windows Administrative Tools > Local Security Policy.

**Step 2 –** In the left pane, navigate to Security Settings > Advanced Audit Policy Configuration >
System Audit Policies.

**Step 3 –** Configure the following audit policies.

| Policy Subnode              | Policy Name                                     | Audit Events                                                                  |
| --------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------- |
| Object Access               | - Audit File System - Audit Handle Manipulation | "Success" and/or "Failure" depending on the type of events you want to track. |
| - Audit Detailed File Share | "Failure"                                       |                                                                               |
| - Audit File Share          | "Success"                                       |                                                                               |
| Policy Change               | - Audit Policy Change                           | "Success"                                                                     |
| Logon/Logoff                | - Logon                                         | "Success"                                                                     |
| - Logoff                    | "Success"                                       |                                                                               |
| System                      | - Security State Change                         | "Success"                                                                     |

# Configure the Back up Files and Directories Policy

Configure this Back up Files and Directories policy via the Local Security Policy Snap-in or using
the Group Policy Management Console.

Follow the steps to configure the Back up Files and Directories policy via the Local Security Policy
Snap-in.

**Step 1 –** On any domain controller in the target domain, open the Local Security Policy snap-in:
navigate to Start > Windows Administrative Tools > Local Security Policy.

**Step 2 –** Navigate to **Security Settings** > **Local Policies** > **User right Assignment**.

**Step 3 –** Locate the Back up files and directories policy and double-click it.

**Step 4 –** In the Back up files and directories Properties dialog, click **Add User or Group**,
specify the user that you want to define this policy for.

The policy is now configured.

Follow the steps to configure the Back up Files and Directories policy using the Group Policy
Management Console.

**NOTE:** Perform this procedure only if the account selected for data collection is not a member of
the Domain Admins group.

**Step 1 –** Open the Group Policy Management console on any domain controller in the target domain:
navigate to **Start** > **Windows Administrative Tools (Windows Server 2016/2019) or Administrative
Tools (Windows 2012 R2 and below)** > **Group Policy Management**.

**Step 2 –** In the left pane, navigate to Forest: `<forest name>` > Domains > `<domain name>` >
Domain Controllers. Right-click the **effective domain controllers policy** (by default, it is the
Default Domain Controllers Policy), and select **Edit**.

**Step 3 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to **Policies** > **Windows Settings** > **Security Settings** > **Local
Policies**.

**Step 4 –** On the right, double-click the User Rights Assignment policy.

**Step 5 –** Locate the Back up files and directories policy and double-click it.

**Step 6 –** In the Back up files and directories Properties dialog, click Add User or Group and
specify the user that you want to define this policy for.

**Step 7 –** Navigate to Start > Run and type **cmd**. Input the `gpupdate /force` command and press
Enter. The group policy will be updated.

**Step 8 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

**Step 9 –** Ensure that new GPO settings applied on any audited domain controller.

The policy is now configured.

# Configure Event Log Size and Retention Settings

The procedure below describes one of the possible ways to adjust event log settings. If you have
multiple target computers, you need to perform this procedure on each of them.

If you move security log files from the default system folder to a non-default one, you must reboot
your target server for the reports and search functionality to work properly.

Follow the steps to configure Event Log Size and Retention Settings.

**Step 1 –** On a target server, navigate to Start > Windows Administrative Tools > Event Viewer.

**Step 2 –** Navigate to Event Viewer tree > Windows Logs, right-click **Security** and select
**Properties**.

![Log Properties dialog box](/img/product_docs/1secure/configuration/computer/manualconfig_ws_eventviewerpr2016_thumb_0_0.webp)

**Step 3 –** Make sure Enable logging is selected.

**Step 4 –** In the Maximum log size field, specify the desired log size.

**Step 5 –** Make sure the Do not overwrite events (Clear logs manually) check box is cleared. If
selected, change the retention method to _Overwrite events as needed (oldest events first)_.

Make sure the Maximum security log size group policy does not overwrite your log settings. To check
this, start the Group Policy Management console, proceed to the GPO that affects your server, and
navigate to Computer Configuration > Policies > Windows Settings > Security Settings > Event Log.

# Configure Local Audit Policies

You can choose to configure local audit policies or advanced audit policies.See the
[Configure Advanced Audit Policies](/docs/auditor/10.7/data-sources/file-servers/windows-file-servers.md) topic for more information.

Follow the steps to configure local audit policies.

**Step 1 –** On the audited server, open the Local Security Policy snap-in: navigate to Start >
Windows Administrative Tools > Local Security Policy.

**Step 2 –** Navigate to Security Settings > Local Policies > Audit Policy.

**Step 3 –** Configure the following audit policies.

| Policy Name              | Audit Events |
| ------------------------ | ------------ |
| Audit account management | "Success"    |
| Audit object access      | "Success"    |
| Audit policy change      | "Success"    |

Local audit policy is configured.

![Local Security Policy snap-in](/img/product_docs/1secure/configuration/computer/manualconfig_ws_local_audit_policies2016.webp)

# Configure Object-Level Access Auditing

Netwrix Auditor can be configured to audit all access types, review the table below and select
options that you want to track:

| Option      |                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                   |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Changes     | Successful                                                                                                                                                                                                                                                                                         | Use this option to track changes to your data. Helps find out who made changes to your files, including their creation and deletion.                                                                                                                                                                                                          |
| Failed      | Use this option to detect suspicious activity on your file server. Helps identify potential intruders who tried to modify or delete files, etc., but failed to do it.                                                                                                                              |                                                                                                                                                                                                                                                                                                                                               |
| Read access | Successful                                                                                                                                                                                                                                                                                         | Use this option to supervise access to files containing confidential data intended for privileged users. Helps identify who accessed important files besides your trusted users. Enabling this option on public shares will result in high number of events generated on your file server and the amount of data written to the AuditArchive. |
| Failed      | Use this option to track suspicious activity. Helps find out who was trying to access your private data without proper justification. Enabling this option on public shares will result in high number of events generated on your file server and the amount of data written to the AuditArchive. |                                                                                                                                                                                                                                                                                                                                               |

Actions reported by Netwrix Auditor vary depending on the file server type and the audited object
(file, folder, or share). The changes include creation, modification, deletion, moving, renaming,
and copying. To track the copy action, enable successful read access and change auditing. See the
[File Servers](/docs/auditor/10.7/data-sources/file-servers/index.md) topic for additional information.

Perform one of the following procedures depending on the OS version you are using:

- Configure Object-level Access Auditing on Windows Server 2012 and Above
- Configure Object-level access auditing on pre-Windows Server 2012 versions

## Configure Object-level Access Auditing on Windows Server 2012 and Above

Follow the steps to configure Object-level access auditing on Windows Server 2012 and above.

**Step 1 –** Navigate to the target file share, right-click it and select **Properties**.

**Step 2 –** In the `<Share_Name>` Properties dialog box, select the Security tab and click
**Advanced**.

**Step 3 –** In the Advanced Security Settings for `<Share_Name>` dialog box, navigate to the
Auditing tab.

![Advanced Security Settings for Share_Name dialog box](/img/product_docs/1secure/configuration/computer/auditing_entries_netapp_2016.webp)

**Step 4 –** Click **Add** to add a new principal. You can select **Everyone** (or another
user-defined group containing users that are granted special permissions) and click **Edit**.

**Step 5 –** In the Auditing Entry for `<Folder_Name>` dialog box, click the **Select a principal**
link and specify **Everyone**.

**NOTE:** You can specify any other user group, but in this case the emails will be sent with
warnings on incorrect audit configuration. The product will audit only user accounts that belong to
the selected group.

**Step 6 –** Apply settings to your Auditing Entries depending on the access types that you want to
audit. If you want to audit all access types (successful reads, modification as well as failed read
and modification attempts), you need to add separate Auditing Entries for each file share.
Otherwise, reports will contain limited data and warning messages.

Review the following for additional information:

| Auditing Entry                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| Successful reads                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |     |
| The Auditing Entry below shows Advanced Permissions for auditing successful reads only: ![manualconfig_fileserver_auditingentry_1_2016](/img/product_docs/auditor/auditor/configuration/fileservers/netappcmode/manualconfig_fileserver_auditingentry_1_2016.webp) - Type—Set to _"Success"_. - Applies to—Set to _"Files only"_. - Advanced permissions—Select List folder / read data. - Make sure that the Only apply these auditing settings to objects and/or containers within this container checkbox is cleared.                                                                                                                                                               |     |
| Successful changes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |     |
| The Auditing Entry below shows Advanced Permissions for auditing successful changes only: ![manualconfig_fileserver_auditingentry_2_2016](/img/product_docs/auditor/auditor/configuration/fileservers/netappcmode/manualconfig_fileserver_auditingentry_2_2016.webp) - Type—Set to _"Success"_. - Applies to—Set to _"This folder, subfolders and files"_. - Advanced permissions: - Create files / write data - Create folders / append data - Write extended attributes - Delete subfolders and files - Delete - Change permissions - Take ownership - Make sure that the Only apply these auditing settings to objects and/or containers within this container checkbox is cleared. |     |
| Failed read attempts                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |     |
| The Auditing Entry below shows Advanced Permissions for auditing failed read attempts: ![manualconfig_fileserver_auditingentry_3_2016](/img/product_docs/auditor/auditor/configuration/fileservers/netappcmode/manualconfig_fileserver_auditingentry_3_2016.webp) - Type—Set to _"Fail"_. - Applies to—Set to _"This folder, subfolders and files"_. - Advanced permissions—Select List folder / read data. - Make sure that the Only apply these auditing settings to objects and/or containers within this container checkbox is cleared.                                                                                                                                            |     |
| Failed change attempts                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |     |
| The Auditing Entry below shows Advanced Permissions for auditing failed change attempts: ![manualconfig_fileserver_auditingentry_4_2016](/img/product_docs/auditor/auditor/configuration/fileservers/netappcmode/manualconfig_fileserver_auditingentry_4_2016.webp) - Type—Set to _"Fail"_. - Applies to—Set to _"This folder, subfolders and files"_. - Advanced permissions: - Create files / write data - Create folders / append data - Write extended attributes - Delete subfolders and files - Delete - Change permissions - Take ownership - Make sure that the Only apply these auditing settings to objects and/or containers within this container checkbox is cleared.     |     |

## Configure Object-level access auditing on pre-Windows Server 2012 versions

**Step 1 –** Navigate to the target file share, right-click it and select **Properties**.

**Step 2 –** In the **`<Share_Name>` Properties** dialog, select the **Security** tab and click
**Advanced**.

**Step 3 –** In the **Advanced Security Settings for `<Share_Name>`** dialog, navigate to the
**Auditing** tab, click Edit.

**Step 4 –** In a separate **Advanced Security Settings for `<Share_Name>`** dialog, click Add to
add a principal. You can select **Everyone** (or another user-defined group containing users that
are granted special permissions) and click **Edit**.

**Step 5 –** You can specify any other user group, but in this case Netwrix Auditor will send emails
with errors on incorrect audit configuration. This will not affect the reports or data searches
performed in the Auditor client and the product will only audit user accounts that belong to the
selected group.

**Step 6 –** Apply settings to your Auditing Entries depending on the access types that you want to
audit. If you want to audit all access types (successful reads and changes as well as failed read
and change attempts), you need to add separate Auditing Entries for each file share. Otherwise,
reports will contain limited data and warning messages. Review the following for additional
information:

- Successful reads
- Successful changes
- Failed read attempts
- Failed change attempts

| Auditing Entry                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Successful reads**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| The Auditing Entry below shows Advanced Permissions for auditing successful reads only: - Apply onto—Select _"Files only"_. - Check _"Successful"_ and _"Failed"_ next to List folder / read data. - Make sure that the **Apply these auditing entries to objects and/or containers within this container only** checkbox is cleared.                                                                                                                                                                                 |
| **Successful changes**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| The Auditing Entry below shows Advanced Permissions for auditing successful changes only: - Apply onto—Select _"This folder, subfolders and files"_. - Check _"Successful"_ next to the following permissions: - Create files / write data - Create folders / append data - Write extended attributes - Delete subfolders and files - Delete - Change permissions - Take ownership - Make sure that the **Apply these auditing entries to objects and/or containers within this container only** checkbox is cleared. |
| **Failed read attempts**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| The Auditing Entry below shows Advanced Permissions for auditing failed read attempts only: - Apply onto—Select _"This folder, subfolders and files"_. - Check _"Failed"_ next to List folder / read data. - Make sure that the **Apply these auditing entries to objects and/or containers within this container only** checkbox is cleared.                                                                                                                                                                         |
| **Failed change attempts**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| The Auditing Entry below shows Advanced Permissions for auditing failed change attempts only: - Apply onto—Select _"This folder, subfolders and files"_. - Check _"Failed"_ next to the following permissions: - Create files / write data - Create folders / append data - Write extended attributes - Delete subfolders and files - Delete - Change permissions - Take ownership - Make sure that the **Apply these auditing entries to objects and/or containers within this container only** checkbox is cleared. |

# Windows File Servers

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HirCAE.html)
knowledge base article for additional information.

## Configuration Overview

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to
  automatically configure audit in the target environment, your current audit settings will be
  checked on each data collection and adjusted if necessary.
- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

  - On the Windows file server:

    - For a security principal (e.g., Everyone), the following options must be configured in the
      Advanced Security > Auditing settings for the audited shared folders:

      | Advanced Security Option                                    | Setting              |
      | ----------------------------------------------------------- | -------------------- |
      | List Folder / Read Data (Files only)                        | "Success" and "Fail" |
      | List Folder / Read Data (This folder, subfolders and files) | "Fail"               |
      | Create Files / Write Data\*                                 | "Success" and "Fail" |
      | Create Folders / Append Data\*                              | "Success" and "Fail" |
      | Write Extended Attributes\*                                 | "Success" and "Fail" |
      | Delete Subfolders and Files\*                               | "Success" and "Fail" |
      | Delete\*                                                    | "Success" and "Fail" |
      | Change Permissions\*                                        | "Success" and "Fail" |
      | Take Ownership\*                                            | "Success" and "Fail" |

      \* Select "Fail" only if you want to track failure events, it is not required for
      success events monitoring.

      **NOTE:** If you want to get only state-in-time snapshots of your system configuration,
      limit your settings to the permissions marked with \* and set it to "Success" (Apply
      onto: This folder, subfolders and files).

    - The following Advanced audit policy settings must be configured:

      - The Audit: Force audit policy subcategory settings (Windows 7 or later) security
        option must be enabled.
      - **NOTE:** If you want to get only state-in-time snapshots of your system
        configuration, limit your audit settings to the following policies:

        | Advanced Audit Policy                     | Setting   |
        | ----------------------------------------- | --------- |
        | Object Access > Audit File Share          | "Success" |
        | Object Access > Audit Handle Manipulation | "Success" |
        | Policy Change > Audit Audit Policy Change | "Success" |

    - The following legacy policies can be configured instead of advanced:

      - Audit object access policy must set to "Success" and "Failure."
      - Audit logon events policy must be set to "Success."
      - Audit system events policy must be set to "Success."
      - Audit policy change must be set to "Success."

    - The Security event log maximum size must be set to 4GB. The retention method of the
      Security event log must be set to _“Overwrite events as needed”_.
    - The Remote Registry service must be started.
    - The following inbound Firewall rules must be enabled:

      - Remote Event Log Management (NP-In)\*
      - Remote Event Log Management (RPC)\*
      - Remote Event Log Management (RPC-EPMAP)\*
      - Windows Management Instrumentation (ASync-In)
      - Windows Management Instrumentation (DCOM-In)
      - Windows Management Instrumentation (WMI-In)
      - Network Discovery (NB-Name-In)
      - File and Printer Sharing (NB-Name-In)
      - File and Printer Sharing (Echo Request - ICMPv4-In)
      - File and Printer Sharing (Echo Request - ICMPv6-In)

        **NOTE:** The rules marked with \* are required only if you do not want to use
        network traffic compression for auditing.

      - If you plan to audit Windows Server 2019 or Windows 10 Update 1803 without network
        compression service, make sure the following inbound connection rules are enabled:

        - Remote Scheduled Tasks Management (RPC)
        - Remote Scheduled Tasks Management (RPC-EMAP)

  - On the Auditor console computer:

    - If your file shares contain symbolic links and you want to collect state-in-time data for
      these shares, the local-to-local, local-to-remote, remote-to-local, and remote-to-remote
      symbolic link evaluations must be enabled on the computer that hosts Auditor Server.

Consider the following:

- To collect data from 32-bit operating systems, network traffic compression must be disabled.
- To collect data from Windows Failover Cluster, network traffic compression must be enabled.
- Scale-Out File Server (SOFS) cluster is not supported.
- Auditing of files and folders placed directly into the DFS namespace root is not supported, as
  such configuration is not recommended by Microsoft. (See the Microsoft
  [Placing files directly in the namespace share](https://learn.microsoft.com/en-us/archive/blogs/askds/common-dfsn-configuration-mistakes-and-oversights#placing-files-directly-in-the-namespace-share)
  article for additional information.) Make sure the UNC path of a shared folder is placed within a
  share targeted by a DFS folder.

## Configuration Steps

Follow the steps to configure Windows File Servers for auditing:

**Step 1 –** Check requirements. Make sure the Windows File Servers you want to monitor meet the
requirements.

**Step 2 –** Decide on audit data to collect.

- Review the list of objects and attributes that can be monitored by Auditor: See the
  [File Servers](/docs/auditor/10.7/data-sources/file-servers/index.md)topic for additional information.
- Plan for the file servers and shares you want to audit:
- - If you have multiple file shares frequently accessed by a significant number of users, it is
    reasonable to audit object changes only. Tracking all events may result in too much data
    written to the audit logs, whereas only some part of it may be of any interest.
  - Audit flags must be set on every file share you want to audit.
  - If your file shares are stored within one folder (or disk drive), you can configure audit
    settings for this folder only. As a result, you will receive reports on all required access
    types applied to all file shares within this folder. It is not recommended to configure audit
    settings for system disks.
  - By default, Auditor will monitor all shares stored in the specified location, except for
    hidden shares (both default and user-defined). If you want to monitor user-defined hidden
    shares, select the related option in the monitored item settings.
  - Administrative hidden shares like default system root or Windows directory (_ADMIN$_), default
    drive shares (_D$, E$_), etc. will not be monitored.

**Step 3 –** Review considerations and limitations:

**The following considerations and limitations refer to data collection:**

- To collect data from 32-bit operating systems, network traffic compression must be disabled.
- To collect data from Windows Failover Cluster, network traffic compression must be enabled.
- Scale-Out File Server (SOFS) cluster is not supported.
- Several constraints apply to DFS auditing. See the DFS-Related Constraints topic for additional
  information.

**The following considerations and limitations refer to reporting:**

- In the reports and search results, in some cases, Auditor displays not the actual time when the
  event occurred but data collection time.
- Auditor may report on several unexpected changes with _who_ (initiator's account) reported as
  _system_ due to the native Windows File Servers audit peculiarities. If you do not want to see
  these changes, exclude them from the audit. See the [File Servers](/docs/auditor/10.7/data-sources/file-servers/index.md) topic for
  additional information. For example - mass file removals, when target Windows server generates too
  many events at a time and the product is unable to parse their sequences correctly.
- Due to Windows limitations, the _copy/rename/move_ actions on remote file shares may be reported
  as two sequential actions: copying – as adding a new file and reading the initial file;
  renaming/moving – as removing the initial file and adding a new file with the same name.
- To report on _copy_ actions on remote file shares, make sure that audit of successful read
  operations is enabled. See the [Configure Object-Level Access Auditing](/docs/auditor/10.7/data-sources/file-servers/windows-file-servers.md) topic for
  additional information.

**Step 4 –** Apply required audit settings.

Depending on your auditing requirements, you may need to audit your file server objects for:

- Successful read attempts
- Successful modifications
- Failed read and modification attempts
- Failed modification attempts

For that, object-level audit settings and appropriate audit policies should be set up. Besides, the
following should be configured for your Windows file servers:

- Windows Event log size and retention settings
- Remote registry service
- Inbound connection rules for Windows firewall

You can apply required audit settings to your Windows file servers in one of the following ways:

- **Automatically** when creating a monitoring plan.

  In this case, the audit settings will be applied automatically, then they will be periodically
  checked and adjusted if necessary. See the
  [Create a New Monitoring Plan](/docs/auditor/10.7/monitoring-plans/creating-monitoring-plans.md) topic for additional
  information.

- **Manually.** To configure your Windows File Servers for monitoring manually, perform the
  following procedures:

  - [Configure Object-Level Access Auditing](/docs/auditor/10.7/data-sources/file-servers/windows-file-servers.md)
  - [Configure Local Audit Policies](/docs/auditor/10.7/data-sources/file-servers/windows-file-servers.md) or
    [Configure Advanced Audit Policies](/docs/auditor/10.7/data-sources/file-servers/windows-file-servers.md)
  - [Configure Event Log Size and Retention Settings](/docs/auditor/10.7/data-sources/file-servers/windows-file-servers.md)
  - [Enable Remote Registry Service](/docs/auditor/10.7/data-sources/file-servers/windows-file-servers.md)
  - [Windows File Server Ports](/docs/auditor/10.7/installation-and-setup/system-requirements/ports-and-networking.md)

With automatically applied settings, initial SACL configuration for DFS replication links may take
longer than with manual configuration — however, automatic configuration will help to minimize the
impact on the DFS backlog and replication process in general.

**Step 5 –** Configure Data Collecting Account. See the
[Data Collecting Account](/docs/auditor/10.7/monitoring-plans/data-collection-accounts.md) topic for additional
information.

**Step 6 –** Configure required protocols and ports. Set up protocols and ports. See the
[Dell Data Storage Ports](/docs/auditor/10.7/installation-and-setup/system-requirements/ports-and-networking.md) topic for additional information.

## DFS-Related Constraints

Perform the following steps if planning to audit DFS files and folders:

**Step 1 –** Auditor supports auditing of DFS and clustered file servers if Object Access Auditing
is enabled on DFS file shares or on every cluster node.

**Step 2 –** When adding a cluster file server for auditing, it is recommended to specify a server
name of the **Role** server or a UNC path of the shared folder located on the **Role** server.

**Step 3 –** When adding a DFS file share for auditing, specify a Windows file share item and
provide the UNC path of the whole namespace or UNC path of the DFS link (folder). For example:

- _"\\domain\dfsnamespace\"_ (domain-based namespace)
- _"\\server\dfsnamespace\"_ (in case of stand-alone namespace);

Auditing of files and folders placed directly into the DFS namespace root is not supported, as such
configuration is not recommended by Microsoft. See the
[Placing files directly in the namespace share](https://docs.microsoft.com/en-us/archive/blogs/askds/common-dfsn-configuration-mistakes-and-oversights#placing-files-directly-in-the-namespace-share)
section of the Microsoft article for additional information. Make sure the UNC path of a shared
folder is placed within a share targeted by a DFS folder.

For recommendations on configuring DFS replication, refer to the following Netwrix knowledge base
article:
[Why did loss of performance occur when configuring audit settings for Windows File Servers?](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA00g000000H9SyCAK.html).
Remember that replication of namespace roots is not supported.

## File Servers and Antivirus

It is strongly recommended that you add the following executables to the list of exclusions for your
antivirus:

- C:\Windows\SysWOW64\NwxExeSvc\NwxExeSvc.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxEventCollectorAgent.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxFsAgent.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxSaclTunerAgent.exe

Otherwise, significant delays and performance issues may occur while collecting data.

This happens because these executables access a large number of file server objects (files,
folders), fetching audit data — and your antivirus may treat this as a suspicious behavior.

For some antiviruses (for example, Trend Micro) you may need to specify the folders to exclude, that
is, **C:\Windows\SysWOW64\NwxExeSvc**. Refer to your antivirus documentation for details.

## Monitored Objects

The following table lists the actions that can be performed with Windows-Based File Shares:

|                          | File | Folder | Share |
| ------------------------ | ---- | ------ | ----- |
| Added                    | +    | +      | +     |
| Add (failed attempt)     | +    | +      | –     |
| Modified                 | +    | +      | +     |
| Modify (failed attempt)  | +    | +      | +     |
| Moved                    | +    | +      | –     |
| Move (failed attempt)    | –    | –      | –     |
| Read                     | +    | –      | –     |
| Read (failed attempt)    | +    | +      | +     |
| Renamed                  | +    | +      | –     |
| Renamed (failed attempt) | –    | –      | –     |
| Removed                  | +    | +      | +     |
| Remove (failed attempt)  | +    | +      | –     |
| Copied                   | +    | –      | –     |

# Permissions for Windows File Server Auditing

Before creating a monitoring plan to audit your Windows file servers, plan for the account that will
be used for data collection . This account should meet the requirements listed below. You will
provide this account in the monitoring plan wizard or monitored item settings.

Data Collection Accounts should meet the following policies and permissions:

- Data collecting account on the target server must be a member of the local Administrators group.
- The **Manage auditing and security log** and Backup files and directories policies must be defined
  for this account. See the
  [Permissions for Active Directory Auditing](/docs/auditor/10.7/data-sources/active-directory/permissions-and-access.md) and topics for
  additional more information.
- The **Read** share permission on the audited shared folders.
- The Read NTFS permission on all objects in the audited folders.

## Considerations for gMSA Account

You can use group Managed Service Accounts (gMSA) as data collecting accounts.

**NOTE:** On the Netwrix Auditor Server, the gMSA account must be a member of the local
Administrators group.

For more information on gMSA, see the following:

- [Use Group Managed Service Account (gMSA)](/docs/auditor/10.7/installation-and-setup/system-requirements/service-accounts.md)

- Microsoft article:
  [Group Managed Service Accounts Overview](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview)

# Enable Remote Registry Service

Follow the steps to enable the Remote Registry service.

**Step 1 –** Navigate to Start > Windows Administrative Tools > Services.

![Services Console](/img/product_docs/1secure/configuration/computer/manualconfig_genevents_remoteregistry2016.webp)

**Step 2 –** In the Services window, locate the Remote Registry service, right-click it and select
**Properties**.

**Step 3 –** In the Remote Registry Properties dialog box, make sure the Startup type parameter is
set to _Automatic_ and click **Start**.

![Remote Registry Properties dialog box](/img/product_docs/1secure/configuration/computer/manualconfig_genevents_remoteregistry_start2016.webp)

**Step 4 –** In the Services window, ensure that the Remote Registry service has the _Running_
status on Windows Server 2012 and above.

**NOTE:** The Remote Registry service should be enabled on the target server.

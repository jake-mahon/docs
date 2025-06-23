---
title: Hitachi Activity Auditing Configuration
sidebar_label: Hitachi
description: Configure activity monitoring for Hitachi NAS (HNAS) servers with Enterprise Virtual Servers, file system auditing, and log collection setup.
---

# Hitachi Activity Auditing Configuration

The Hitachi NAS (HNAS) server can host multiple Enterprise Virtual Servers (EVS). Each EVS has
multiple file systems. Auditing is enabled and configured per file system. This guide explains how
to enable auditing on an HNAS and to configure the Activity Monitor to monitor activity coming from
the Hitachi device auditing.

The Activity Monitor does not use the EVS or file system name to connect to HNAS. Therefore, all
that is required of the user for HNAS activity collection is the following:

- Logs path (UNC)

  - Active Log file name – Active Log File name needs with an `.evt` extension, and it should be
    the same as in the HNAS configuration. This is usually `audit.evt`.

- Credentials to access the HNAS log files

  - The only requirement for the credentials is the ability to read files from the `logs`
    directory.

- A polling interval between log collections (15 seconds by default)

  - The Activity Monitor minimizes IO by remembering a file offset where it stopped reading and
    continuing from that offset next time.

**CAUTION:** The following disclaimer is provided by Hitachi:

“Because CIFS defines open and close operations, auditing file system object access performed by
clients using other protocols would be costly in terms of system performance, because each I/O
operation would have to be audited as an open operation. **Therefore, when file system auditing is
enabled, by default, only clients connecting through the CIFS protocol are allowed access to the
file system.** Access by clients using other protocols, like NFS, can, however, be allowed. When
such access is allowed, access to file system objects through these protocols is not audited.”

**NOTE:** File system auditing can be configured to deny access to clients connecting with protocols
that cannot be audited (NFS). Please see the Hitachi
[Server and Cluster Administration Guide](https://support.hds.com/download/epcra/hnas0106.pdf) for
additional information.

Configuration Checklist

Complete the following checklist prior to configuring activity monitoring of Hitachi devices.
Instructions for each item of the checklist are detailed within the following topics.

Checklist Item 1:
[Configure Audit Logs on HNAS](/docs/activitymonitor/7.1/configuration/storage-platforms/hitachi.md)

Checklist Item 2:
[Configure Access to HNAS Audit Logs on Activity Agent Server](/docs/activitymonitor/7.1/configuration/storage-platforms/hitachi.md)

Checklist Item 3: Activity Monitor Configuration

- Deploy the Activity Monitor Activity Agent to a Windows proxy server

# Configure Access to HNAS Audit Logs on Activity Agent Server

Follow the steps to configure access to the HNAS audit logs on the Windows server hosting the
Activity Monitor activity agent.

**Step 1 –** On the Windows computer, go to Run and type `compmgmt.msc`.

**Step 2 –** In the right-hand panel, select More Actions > Connect to another computer.

**Step 3 –** In the Select Computer dialog box, enter the IP Address for EVS for HNAS and then click
OK.

**Step 4 –** In the Computer Management window, go to Computer Management > System tools > Shared
Folders > Shares.

**Step 5 –** Select the Security tab and click Advanced.

**Step 6 –** In the Advanced Security Settings dialog box, select the Audit tab. Click Add or Edit
to select the users and groups to be audited and add the desired user or group.

**Step 7 –** Select All for Type, and Full Control for Basic permissions.

Once access has been configured on both the Hitachi device and the Activity Agent server, it is time
to configure and enable monitoring with the Activity Monitor Console.

# Configure Audit Logs on HNAS

Follow the steps to configure access to the HNAS audit logs on the Hitachi device.

**Step 1 –** Open a browser and enter the IP Address for HNAS in the address bar to launch the
Hitachi Storage Navigator (SN). Enter the username and password.

**Step 2 –** At the Storage Navigator home page, click File Services.

**Step 3 –** On the File Services screen, click Enable File Service.

**Step 4 –** On the Enable File Services screen, verify that the CIFS/Windows service is selected.

**Step 5 –** On the File Services screen, click File System Security.

**Step 6 –** Click Switch Mode and set the default file system security mode to Mixed (Windows and
UNIX) for all virtual file systems.

**Step 7 –** Configure the Hitachi NAS Platform audit policy by returning to the File Services page.

**Step 8 –** Click File System Audit Policies.

**Step 9 –** Select the correct EVS and click details for the file system to enable auditing.

**Step 10 –** In the Access via Unsupported Protocols section, select Allow Access (without
auditing). In the Audit Log section, set the maximum log file size to a value of at least 8 MB. It
is recommended to set it to 16 MB. In the Log roll over policy section, select New. The product does
not support the Wrap policy. Click OK to close.

Once access has been configured on the Hitachi device, it is necessary to configure access to the
HNAS audit logs on the Windows server. See the
[Configure Access to HNAS Audit Logs on Activity Agent Server](/docs/activitymonitor/7.1/configuration/storage-platforms/hitachi.md)
topic for additional information.

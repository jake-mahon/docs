---
title: synology
sidebar_label: synology
description: Auditor 10.6 documentation for synology with configuration details, usage instructions, and implementation guidance.
---

# Configure Synology File Servers for Audit

Follow the steps to configure your Synology NAS devices to transmit the local system logs for
monitoring.

**Step 1 –** Navigate to **Control Panel > File Services > SMB > Log Settings**. Please note that
all audit types should be enabled.

**Step 2 –** Log in to the Synology Web Administration Console.

**Step 3 –** Navigate to **Log Center > Log Sending** and configure the following:

- Server – Provide the IP address or the computer listened by Syslog. It should be a running Netwrix
  Syslog service or a third-party Syslog forward service.
- Port – Use the default value (514).
- Transfer protocol – select TCP or **UDP**.
- Log format – Set to "IETF (RFC 5424)".
- Enable secure connection – Use the default value.
- Import certificate – Use the default value.

**Step 4 –** Click Apply.

**NOTE:** Currently, Netwrix Auditor cannot collect activities using a local Synology user. Data
collection only supported via a domain user with the necessary access privileges to the Synology
file server.

# Synology

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HirCAE.html)
knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to
  automatically configure audit in the target environment, your current audit settings will be
  checked on each data collection and adjusted if necessary.
- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

  - The log sending must be configured as described in the
    [Configure Synology File Servers for Audit](/docs/auditor/10.6/data-sources/file-servers/synology.md)
    topic.

Review a full list of object types Netwrix Auditor can collect on Synology NAS network devices.

## Monitored Objects

| Action                  | File | Folder | Share |
| ----------------------- | ---- | ------ | ----- |
| Added                   | +    | +      | -     |
| Add (failed attempt)    | -    | -      | -     |
| Modified                | +    | -      | -     |
| Modify (failed attempt) | -    | -      | -     |
| Moved                   | +    | +      | -     |
| Move (failed attempt)   | -    | -      | -     |
| Read                    | +    | -      | -     |
| Read (failed attempt)   | -    | -      | -     |
| Renamed                 | +    | +      | -     |
| Rename (failed attempt) | -    | -      | -     |
| Remove (failed attempt) | -    | -      | -     |
| Copied                  | -    | -      | -     |

**NOTE:** For Synology system Auditor displays the actual time when the event occurred. The 'When'
column shows the time when the syslog message arrived.

If an object has been moved between file shares, the product reports the following actions:

- Read + Removed for the initial object

- Added + Modified for the object to a new location

# Permissions for Synology Auditing

Before you start creating a monitoring plan to audit your Qumulo or Synology file servers, plan for
the account that will be used for data collection – it should meet the requirements listed below.
Then you will provide this account in the monitoring plan wizard (or monitored item settings).

You can also use group Managed Service Accounts (gMSA) as data collecting accounts.

See the
[Use Group Managed Service Account (gMSA)](/docs/auditor/10.6/administration/user-management/service-accounts.md)
topic and the
[Group Managed Service Accounts Overview](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview)
Microsoft article for additional information.

These group Managed Service Accounts should meet the related requirements, as listed below.

On the target server:

- The account requires Read share permission on the audited shared folders.
- The account requires Read NTFS permission on all objects in the audited folders.

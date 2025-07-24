---
title: "What's New"
description: "What's New"
sidebar_position: 3
---

# What's New

## New Netwrix Community!

All Netwrix product announcements have moved to the new Netwrix Community. See announcements for
Netwrix Threat Prevention in the
[Threat Prevention](https://community.netwrix.com/c/threat-prevention/announcements/160) area of our
new community.

The following information highlights the new and enhanced features introduced for this Netwrix
Threat Prevention version.

## Threat Prevention 7.4

This release contains the following new features and enhancements.

**Rebranding**

Netwrix StealthINTERCEPT is now Netwrix Threat Prevention. As part of rebranding:

- StealthINTERCEPT Server.msi is now threatprevention-server-7.4.0.xxx.msi
- SI Agent.exe is mow threatprevention-agent-7.4.0.xxx.exe
- File system paths have changed from …\STEALTHbits\StealthINTERCEPT to ...\Netwrix\Netwrix Threat
  Prevention\
- The names of services remain the same, though their display names have changed.

  | Service Name        | New Display Name                               |
  | ------------------- | ---------------------------------------------- |
  | SIWindowsAgent      | Netwrix Threat Prevention Windows Agent        |
  | SIAgentUpdater      | Netwrix Threat Prevention AgentUpdater Service |
  | SIGPOSvc            | Netwrix Threat Prevention Group Policy Service |
  | SBTService          | Netwrix Windows File Monitoring Service        |
  | SIEnterpriseManager | Netwrix Threat Prevention Enterprise Manager   |

**Remote Administration Console Instances**

Threat Prevention supports the deployment of remote Administration Console, enabling you to install
additional consoles on standalone machines, like administrator or user workstations. In this way,
users can launch the Administration Console on their workstations, as an alternate to using it on
the Enterprise Manager server only.

**EPE (Enterprise Password Enforcer) Updates**

- EPE Multi-Language Support – EPE now offers multi-language support, ensuring users receive clear
  and consistent password rejection messages regardless of their location. This simplifies password
  compliance enforcement across your global organization. String tables are provided for:

  - Chinese Simplified
  - Chinese Traditional
  - Czech
  - Dutch
  - English
  - French
  - German
  - Hungarian
  - Italian
  - Japanese
  - Korean
  - Polish
  - Portuguese
  - Spanish
  - Thai

- Third-Party Integration with EPE REST Server – Third-party applications can now leverage the EPE
  REST server to verify passwords against your EPE rules, ensuring consistent password strength
  across all your systems.

**LDAP Bind Detection**

A new event type, LDAP Bind, has been introduced that enables you to monitor suspicious attempts to
connect (bind) to your LDAP server, so you can promptly detect unauthorized access attempts or
malware activity.

**Improved FSMO Role Monitoring**

Get a clear view of which domain controller holds critical FSMO roles at any given time.

- The Agents interface features a new FSMO Roles column that displays the FSMO roles a domain
  controller holds.
- Moreover, the FSMO Role Monitoring event type has a new FSMO Operations tab that allows the
  tracking of when a domain controller acquires or relinquishes a FSMO role.

In this way, you can easily track FSMO role changes to quickly identify potential disruptions or
unauthorized modifications. These additions provide comprehensive visibility into FSMO role
assignments, empowering users with real-time insights for proactive Active Directory management.

**Up-to-date IP Blocking with Automatic DNS Refresh**

Regularly refreshed DNS ensures the blocking rules set in policies always have up-to-date IP
addresses.

The "hostsActualizationPeriod" key in the Enterprise Manager config file stores the default time for
DNS refresh, which is set to four hours. That's how often it will resolve the DNS or the machine
names that are in filters for blocking rules and get fresh IP values; then send them down to the
Agents.

**More Accurate Activity Source Reporting**

Improved attribution of actions performed through Active Directory Web Services such as when
initiated by PowerShell; the system can identify and report the true source of changes (initiating
perpetrator) rather than the proxy service (AD Web Service account).

**Streamlined Agent Management**

- Eliminated WMI access requirement for the Soften and Harden operations for the Agent
- Improved Agent self-upgrade process, optimized for low-bandwidth connections

**Simplified Setup and Configuration**

- The custom-signed certificate wizard has been unified into a single component. This consolidated
  certificate management has eliminated the need for separate .key.pem and .crt.pem files.
- Removed Web Console and Web Scheduler options from DBConfig.

**Netwrix Threat Manager Policy Template Improvements**

- Added more LDAP filters for BloodHound Detection
- Added options for NTDS.dit file monitoring
- Added options for DPAPI threat detection, which is an Active Directory Read monitoring policy on
  the secret class and currentvalue attribute

**Security Improvements**

Security infrastructure improvements are the primary focus of the 7.4 release.

- The Enterprise Manager (server) is backwards compatible with the 7.3.9 Agent only.

  :::note
  Existing customers must upgrade to SI 7.3.9 first; else pre 7.3.9 Agents are orphaned
  :::


- Replaced insecure BinaryFormatter with more secure ProtoBuf over encrypted gRPC connection. The
  Enterprise Manager in v7.4 talks over the new interface in 7.3.9 Agents.
- Introduced Data Protection API (DPAPI) to protect internal secrets.
- Enterprise Manager/Agent and Enterprise Manager/Administration Console APIs have changed. Roles
  and access rights are now enforced by the Enterprise Manager and not by the Administration
  Console.
- Only a user with the administrator role in the Administration Console can view and modify custom
  action scripts in policies.
- The Administration Console no longer connects to SQL Server. All SQL access is performed by the
  Enterprise Manager as proxy for the console, reducing database exposure risks.

  - Console users no longer require any SQL Server rights. For example, for database maintenance,
    no SQL user rights are needed. Moreover, for Recent events, Investigate, and Alerts, the
    console asks the Enterprise Manager instead of SQL Server for results. The Enterprise Manager
    gets data from SQL Server and returns it to the console.

- Enhanced security for secondary Enterprise Manager setup with Secure Secret Manager export/import

Detailed information on the security content of this release can be found at
[https://security.netwrix.com/Advisories/ADV-2024-003](https://security.netwrix.com/Advisories/ADV-2024-003).

## Netwrix Threat Manager Reporting Module 3.0

This release contains the following new enhancements.

More Granular Role-Based Access Control (RBAC) for Reporting & Investigations

The Netwrix Threat Manager Reporting Module comes with more precise role-based access control for
managing reporting and investigations, ensuring that only authorized users have access to sensitive
information.

**Updated Investigations Interface**

The Investigations interface now has an improved design for a more intuitive user experience.

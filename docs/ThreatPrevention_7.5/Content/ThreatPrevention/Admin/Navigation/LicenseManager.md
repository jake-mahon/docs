---
sidebar_position: 6764
title: License Manager Window
---

# License Manager Window

The License Manager window displays the Threat Prevention modules that you are licensed for. If under an Enterprise license, it also displays an expiration date. On license expiry, the Enterprise Manager will refuse events from all Agents.

*Remember,* if events are not received and displayed in the Administration Console, check if your license has expired.

Generate Alerts when the License Nears Expiration

You can configure alerts to be sent when the.Threat Prevention license nears expiration. These alerts serve as a reminder for license renewal.

To generate license expiration alerts 14 days prior to license expiry, enable the **License** option on the [System Alerting Window](../Configuration/SystemAlerting/Overview "System Alerting Window"). Go to the Email, Event Log or SIEM tab depending on how you want to receive alerts (i.e., by email, in the Windows event log, or in a SIEM product) and click Configuration in the left pane to locate the License option for enabling it.

The first alert is generated 14 days prior to license expiry and then every following day at 9:00 AM. You can customize the time by modifying the following entry in the SIEnterpriseManager.exe.config file:



File path: `...\Netwrix\Netwrix Threat Prevention\SIEnterpriseManager`

## View Licensing Information

Follow the steps to view your Threat Prevention license details.

Click **Help > License Manager** on the menu. The Netwrix Threat Prevention License Manager window is displayed.

![License Manager window](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Navigation/LicenseManager.png "License Manager window")

This window lists the modules that you are licensed for. Each module is linked to a Threat Prevention solution.

Following is a list of the solutions with their respective modules. You can also view the event types available with each module.

**NOTE:** The Password Enforcement module is available under all licenses for monitoring weak passwords. However, you need the Enterprise Password Enforcer solution license to block weak passwords.

#### Active Directory Solution

The Active Directory solution comes with the following licensed modules:

| Licensed Module | Available Event Type |
| --- | --- |
| Active Directory Changes | Active Directory Changes  Active Directory Read Monitoring  AD Replication Monitoring  Authentication Monitoring  Effective Group Membership  FSMO Role Monitoring  LSASS Guardian – Monitor |
| Active Directory Lockdown  \*Requires Active Directory Changes Module | Active Directory Lockdown  AD Replication Lockdown  Authentication Lockdown  LSASS Guardian – Protect |
| GPO Lockdown  \*Requires Active Directory Changes Module  \*\*Requires File System Module | GPO Setting Lockdown |
| GPO Setting Changes  \*Requires Active Directory Changes Module  \*\*Requires File System Module | GPO Setting Changes |

See the following topics for additional information:

* [Active Directory Changes Event Type](../Policies/EventType/ActiveDirectoryChanges "Active Directory Changes Event Type")
* [Active Directory Lockdown Event Type](../Policies/EventType/ActiveDirectoryLockdown "Active Directory Lockdown Event Type")
* [Active Directory Read Monitoring Event Type](../Policies/EventType/ActiveDirectoryReadMonitoring "Active Directory Read Monitoring Event Type")
* [AD Replication Monitoring Event Type](../Policies/EventType/ADReplicationMonitoring "AD Replication Monitoring Event Type")
* [AD Replication Lockdown Event Type](../Policies/EventType/ADReplicationLockdown "AD Replication Lockdown Event Type")
* [Authentication Monitoring Event Type](../Policies/EventType/AuthenticationMonitoring "Authentication Monitoring Event Type")
* [Authentication Lockdown Event Type](../Policies/EventType/AuthenticationLockdown "Authentication Lockdown Event Type")
* [Effective Group Membership Event Type](../Policies/EventType/EffectiveGroupMembership "Effective Group Membership Event Type")
* [FSMO Role Monitoring Event Type](../Policies/EventType/FSMORoleMonitoring "FSMO Role Monitoring Event Type")
* [GPO Setting Changes Event Type](../Policies/EventType/GPOSettingChanges "GPO Setting Changes Event Type")
* [GPO Setting Lockdown Event Type](../Policies/EventType/GPOSettingLockdown "GPO Setting Lockdown Event Type")
* [LSASS Guardian – Monitor Event Type](../Policies/EventType/LSASSGuardianMonitor "LSASS Guardian – Monitor Event Type")
* [LSASS Guardian – Protect Event Type](../Policies/EventType/LSASSGuardianProtect "LSASS Guardian – Protect Event Type")

#### Enterprise Password Enforcer Solution

The Enterprise Password Enforcer solution comes with the following licensed modules:

| Licensed Module | Available Event Type |
| --- | --- |
| Password Enforcement Module | Password Enforcement |

See the [Password Enforcement Event Type](../Policies/EventType/PasswordEnforcement "Password Enforcement Event Type") topics for additional information.

#### Exchange Solution

The Exchange solution comes with the following licensed modules:

| Licensed Module | Available Event Type |
| --- | --- |
| Exchange Events Module | Exchange Changes |
| Exchange Lockdown Module  \*Requires Exchange Events Module | Exchange Lockdown |

See the following topics for additional information:

* [Exchange Changes Event Type](../Policies/EventType/ExchangeChanges "Exchange Changes Event Type")
* [Exchange Lockdown Event Type](../Policies/EventType/ExchangeLockdown "Exchange Lockdown Event Type")

#### File System Solution

The File System solution comes with the following licensed modules:

| Licensed Module | Available Event Type |
| --- | --- |
| File System Module | File System Changes  File System Lockdown  File System Enterprise Auditor |

The File System Changes event type and File System Lockdown event type only generate event monitoring and blocking data for Threat Prevention. The File System Enterprise Auditor event type only generates event monitoring data for Netwrix Access Analyzer (formerly Enterprise Auditor). To generate the same data to be accessible for both products, you must create a single policy with both event types assigned.

See the following topics for additional information:

* [File System Changes Event Type](../Policies/EventType/FileSystemChanges "File System Changes Event Type") – For Windows file servers and/or NAS devices
* [File System Lockdown Event Type](../Policies/EventType/FileSystemLockdown "File System Lockdown Event Type") – For Windows file servers
* [File System Enterprise Auditor Event Type](../Policies/EventType/FileSystemEnterpriseAuditor "File System Enterprise Auditor Event Type") – For Windows file servers

#### LDAP Solution

The LDAP solution comes with the following licensed modules:

| Licensed Module | Available Event Type |
| --- | --- |
| LDAP Monitoring Module  \*Requires Active Directory Changes Module | LDAP Lockdown  LDAP Monitoring  LDAP Bind Monitoring |

See the following topics for additional information:

* [LDAP Monitoring Event Type](../Policies/EventType/LDAPMonitoring "LDAP Monitoring Event Type")
* [LDAP Lockdown Event Type](../Policies/EventType/LDAPLockdown "LDAP Lockdown Event Type")
* [LDAP Bind Monitoring Event Type](../Policies/EventType/LDAPBindMonitoring "LDAP Bind Monitoring Event Type")
# License Manager Window

The License Manager window displays the Threat Prevention modules that you are licensed for. If
under an Enterprise license, it also displays an expiration date. On license expiry, the Enterprise
Manager will refuse events from all Agents.

_Remember,_ if events are not received and displayed in the Administration Console, check if your
license has expired.

Click **Help > License Manager** on the menu. The Netwrix Threat Prevention License Manager window
is displayed.

![License Manager window](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/navigation/licensemanager.png)

This window lists the modules that you are licensed for. Each module is linked to a Threat
Prevention solution.

Following is a list of the solutions with their respective modules. You can also view the event
types available with each module.

**NOTE:** The Password Enforcement module is available under all licenses for monitoring weak
passwords. However, you need the Enterprise Password Enforcer solution license to block weak
passwords.

## Active Directory Solution

The Active Directory solution comes with the following licensed modules:

| Licensed Module                                                                                | Available Event Type                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Active Directory Changes                                                                       | Active Directory Changes Active Directory Read Monitoring AD Replication Monitoring Authentication Monitoring Effective Group Membership FSMO Role Monitoring LSASS Guardian – Monitor |
| Active Directory Lockdown \*Requires Active Directory Changes Module                           | Active Directory Lockdown AD Replication Lockdown Authentication Lockdown LSASS Guardian – Protect                                                                                     |
| GPO Lockdown \*Requires Active Directory Changes Module \*\*Requires File System Module        | GPO Setting Lockdown                                                                                                                                                                   |
| GPO Setting Changes \*Requires Active Directory Changes Module \*\*Requires File System Module | GPO Setting Changes                                                                                                                                                                    |

See the following topics for additional information:

- [Active Directory Changes Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/activedirectorychanges.md)
- [Active Directory Lockdown Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/activedirectorylockdown.md)
- [Active Directory Read Monitoring Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/activedirectoryreadmonitoring.md)
- [AD Replication Monitoring Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/adreplicationmonitoring.md)
- [AD Replication Lockdown Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/adreplicationlockdown.md)
- [Authentication Monitoring Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/authenticationmonitoring.md)
- [Authentication Lockdown Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/authenticationlockdown.md)
- [Effective Group Membership Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/effectivegroupmembership.md)
- [FSMO Role Monitoring Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/fsmorolemonitoring.md)
- [GPO Setting Changes Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/gposettingchanges.md)
- [GPO Setting Lockdown Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/gposettinglockdown.md)
- [LSASS Guardian – Monitor Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/lsassguardianmonitor.md)
- [LSASS Guardian – Protect Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/lsassguardianprotect.md)

## Enterprise Password Enforcer Solution

The Enterprise Password Enforcer solution comes with the following licensed modules:

| Licensed Module             | Available Event Type |
| --------------------------- | -------------------- |
| Password Enforcement Module | Password Enforcement |

See the
[Password Enforcement Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/passwordenforcement.md)
topics for additional information.

## Exchange Solution

The Exchange solution comes with the following licensed modules:

| Licensed Module                                            | Available Event Type |
| ---------------------------------------------------------- | -------------------- |
| Exchange Events Module                                     | Exchange Changes     |
| Exchange Lockdown Module \*Requires Exchange Events Module | Exchange Lockdown    |

See the following topics for additional information:

- [Exchange Changes Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/exchangechanges.md)
- [Exchange Lockdown Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/exchangelockdown.md)

## File System Solution

The File System solution comes with the following licensed modules:

| Licensed Module    | Available Event Type                                                    |
| ------------------ | ----------------------------------------------------------------------- |
| File System Module | File System Changes File System Lockdown File System Enterprise Auditor |

The File System Changes event type and File System Lockdown event type only generate event
monitoring and blocking data for Threat Prevention. The File System Enterprise Auditor event type
only generates event monitoring data for Netwrix Access Analyzer (formerly Enterprise Auditor). To
generate the same data to be accessible for both products, you must create a single policy with both
event types assigned.

See the following topics for additional information:

- [File System Changes Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/filesystemchanges.md)
  – For Windows file servers and/or NAS devices
- [File System Lockdown Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/filesystemlockdown.md)
  – For Windows file servers
- [File System Enterprise Auditor Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/filesystementerpriseauditor.md)
  – For Windows file servers

## LDAP Solution

The LDAP solution comes with the following licensed modules:

| Licensed Module                                                   | Available Event Type                               |
| ----------------------------------------------------------------- | -------------------------------------------------- |
| LDAP Monitoring Module \*Requires Active Directory Changes Module | LDAP Lockdown LDAP Monitoring LDAP Bind Monitoring |

See the following topics for additional information:

- [LDAP Monitoring Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/ldapmonitoring.md)
- [LDAP Lockdown Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/ldaplockdown.md)
- [LDAP Bind Monitoring Event Type](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/ldapbindmonitoring.md)

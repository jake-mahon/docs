---
sidebar_position: 6030
title: PasswordSecurity Data Collector
---

# PasswordSecurity Data Collector

The PasswordSecurity Data Collector compares passwords stored in Active Directory to known, breached passwords in the Netwrix weak password dictionary or custom dictionaries. The PasswordSecurity Data Collector also checks for common misconfigurations with passwords in Active Directory.

The PasswordSecurity Data Collector is a core component of Access Analyzer, but it has been preconfigured within the Active Directory Solution. While the data collector is available with all Access Analyzer license options, the Active Directory Solution is only available with a special Access Analyzer license. See the [Active Directory Solution](../../../Solutions/ActiveDirectory/Overview "Active Directory Solution") topic for additional information.

Protocols

* LDAP

Ports

* TCP 389/636

Permissions

* At the domain level:

  * Read
  * Replicating Directory Changes
  * Replicating Directory Changes All
  * Replicating Directory Changes in a Filtered Set
  * Replication Synchronization

## PasswordSecurity Query Configuration

The PasswordSecurity Data Collector is configured through the Password Security Data Collector Wizard, which contains the following wizard pages:

* [PasswordSecurity: Category](Category "PasswordSecurity: Category")
* [PasswordSecurity: Options](Options "PasswordSecurity: Options")
* [PasswordSecurity: Dictionaries](Dictionaries "PasswordSecurity: Dictionaries")
* [PasswordSecurity: Results](Results "PasswordSecurity: Results")
* [PasswordSecurity: Summary](Summary "PasswordSecurity: Summary")
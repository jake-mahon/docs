---
sidebar_position: 5981
title: EWSMailbox Data Collector
---

# EWSMailbox Data Collector

The EWSMailbox Data Collector provides configuration options to scan mailbox contents, permissions, and sensitive data, and is preconfigured within the Exchange Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [Exchange Solution](../../../Solutions/Exchange/Overview "Exchange Solution") topic for additional information.

Protocols

* HTTPS
* ADSI
* LDAP

Ports

* TCP 389
* TCP 443

Permissions

* Exchange Admin Role
* Discovery Management Role
* Application Impersonation Role
* Exchange Online License

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## EWSMailbox Query Configuration

The EWSMailbox Data Collector is configured through the Exchange Mailbox Data Collector Wizard, which contains the following wizard pages:

**NOTE:** The Category selected may alter the subsequent steps displayed by the wizard.

* [EWSMailbox: Category](Category "EWSMailbox: Category")
* [EWSMailbox: Options](Options "EWSMailbox: Options")
* [EWSMailbox: Scope](Scope "EWSMailbox: Scope")
* [EWSMailbox: Scope Select](ScopeSelect "EWSMailbox: Scope Select")
* [EWSMailbox: SDD Options](SDDOptions "EWSMailbox: SDD Options")
* [EWSMailbox: Criteria](Criteria "EWSMailbox: Criteria")
* [EWSMailbox: Filter](Filter "EWSMailbox: Filter")
* [EWSMailbox: Search Filter](SearchFilter "EWSMailbox: Search Filter")
* [EWSMailbox: Results](Results "EWSMailbox: Results")
* [EWSMailbox: Summary](Summary "EWSMailbox: Summary")
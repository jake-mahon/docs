---
sidebar_position: 6043
title: ADPermissions Data Collector
---

# ADPermissions Data Collector

The ADPermissions Data Collector collects the advanced security permissions of objects in AD. It is preconfigured within the Active Directory Permissions Analyzer Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [Active Directory Permissions Analyzer Solution](../../../Solutions/ActiveDirectoryPermissionsAnalyzer/Overview "Active Directory Permissions Analyzer Solution") topic for additional information.

Protocols

* ADSI
* LDAP
* RPC

Ports

* TCP 389
* TCP 135 – 139
* Randomly allocated high TCP ports

Permissions

* LDAP Read permissions
* Read on all AD objects
* Read permissions on all AD Objects

## ADPermissions Query Configuration

The ADPermissions Data Collector is configured through the Active Directory Permissions Data Collector Wizard. The wizard contains the following pages, which change based upon the query category selected:

* [ADPermissions: Category](Category "ADPermissions: Category")
* [ADPermissions: Scope](Scope "ADPermissions: Scope")
* [ADPermissions: Custom Filter](CustomFilter "ADPermissions: Custom Filter")
* [ADPermissions: Options](Options "ADPermissions: Options")
* [ADPermissions: Results](Results "ADPermissions: Results")
* [ADPermissions: Summary](Summary "ADPermissions: Summary")
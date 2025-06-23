---
title: Account Inventory Colors
sidebar_label: dashboard guide
description: Documentation for Privilege Secure privileged access management solution covering features, configuration, and usage procedures.
---

# Account Inventory Colors

Account Inventory Colors

# Account Inventory Colors

### Purpose of this article

This article will help you to understand the color scheme used within the Privilege Secure machine
inventory

### Details

Various colors are used to differentiate the administrator accounts on a machine as shown in the
Administrator Accounts frame in Privilege Secure:

![Screen_Shot_2020-06-16_at_11.51.53_AM.webp](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360050514593_screen_shot_2020-06-16_at_11.51.53_am.webp)

In this list pane on the right-hand side of the “Access” menu, you can see the inventory of users
and groups with the ability to get Administrator rights to the selected system. Note that a User or
Group in the ‘Account’ column may not **currently have** Local Administrator rights. This is further
described in the section that follows.

Users and Group are shown in varying colors:

- Light Grey – Persistent Accounts. These accounts will **not** be removed from the system’s Local
  Administrators group by Privilege Secure in Protect Mode during a scan. How an account becomes
  persistent is discussed further in the “Action” section below.
- Dark Grey – Offline Access and Privilege Secure service account. The key symbol denotes that
  Privilege Secure is managing the rotation of the password.
- Black – Windows RID500 local account. The circle with a line through it, “Ghost Busters”, symbol
  denotes that the account is disabled. The key symbol denotes that Privilege Secure is managing the
  rotation of the password as part of the Offline Access Management (OAM) functionality.
- Blue – Groups which were assigned to the inventory directly:
- Dark Green – Users which are assigned to the inventory directly and not part of a group.
- The following applies to both Blue and Dark Green:

  - Members of the system’s Local Administrator group **at the time** a system was put into
    Privilege Secure “Protect Mode”. They were removed at that time, but will continue to appear
    in the inventory list
  - Added to the Administrator Account/Group Inventory via the Privilege Secure API.
  - Added to the Local Administrators group on the system itself. Depending on the configuration
    of Privilege Secure, Privilege Secure **may** remove this entry from the Local Administrators
    group during the next scan and/or it **may** remain in the Administrator Account/Group
    Inventory.

- Light Green – Users which currently have an open ‘Administrative Access Session’ to the system. A
  session which was provisioned by clicking the “Access System” button in the “System Search” pane
  in the Privilege Secure application.
- Red – Local administrator account that is not a domain account or a special account (RID 500 or
  Privilege Secure specific account).

# Dashboard Guide

Dashboard Guide

# Dashboard Guide

What do these numbers mean? Where do they come from? Let’s find out.  
The queries made to the API are listed here along with which parts of the Dashboard they populate.

![blobid0.webp](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/reporting/360058765294_blobid0.webp)

- **Summary | Total Systems Scanned** (the total part, after the slash, aka denominator)

- The total number of Computer objects that we have in ldap_store
- contrast this number with Summary | Scan Mode Enabled, which is the number of system that we would
  attempt to scan.

- **Summary | Total Systems Scanned** (the scanned part, before the slash, aka numerator)

- count of systems that we attempted to scan on this run

- **Scan Performance | Encountered Error**

- count of systems that had a connection error or some other unhandled exception

- **Scan Performance | Scan Completion**
- **Scan Performance | Offline Systems**

- count of systems that were offline at the time of scan

- **Scan Performance | Successful Systems**

- count of systems that were successfully reached and scanned

Systems where we were unable to Verify that the correct host was reached (VerifyHostError) don’t
appear to be accounted for in the dashboard.

- **Summary | Inactive Systems**

- Computer objects with a lastLogonTimestamp older than 90 days.

- **Overdue Requests**

- Access requests that are more than 2 minutes overdue (i.e. access requests that marked to be
  expired more than 2 minutes ago)

- **Failed Hosts**

- Systems that have a lastScan.success set to false. In other words, systems that we could not
  successfully scan for some reason on the more recent scan attempt.
- Note that systems that are no longer set to be scanned but previously failed to scan are still
  counted here.
- This should not include systems that have not already been scanned (e.g. systems newly added from
  ldapsync)

- **Highest Privileged Accounts**

- Users who are able to reach the most systems to gain admin access.
- Descending sort on the FlattenedAdminsUserStats collection

- **LDAP Domains**

- names of all configured LDAP connections

- **High Risk Systems**

- Systems that have the largest number of users who could request admin access.
- Descending sort of the current FlattenedAdmin

- **Summary | Active Sessions**

- number of JITA sessions that are active and the time is ticking down towards expiration.

- **Summary | Scan Mode Enabled**

- number of systems with the scan policy set to true

- **Summary | Protect Mode Enabled**

- number of systems with protect mode set to true.

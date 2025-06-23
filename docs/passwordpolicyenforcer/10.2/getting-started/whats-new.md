---
title: What's New in Password Policy Enforcer 10.2
sidebar_label: What's New
description: New and enhanced features introduced in Password Policy Enforcer v10.2 including bulk password testing and HIBP updater capabilities.
---

# What's New

## New Netwrix Community!

All Netwrix product announcements have moved to the new Netwrix Community. See announcements for
Netwrix Password Policy Enforcer in the
[Password Policy Enforcer](https://community.netwrix.com/c/password-policy-enforcer/announcements/118)
area of our new community.

The following information highlights the new and enhanced features introduced in this Netwrix
Password Policy Enforcer version.

### Password Policy Enforcer v10.2

NEW: Bulk Password Testing

Check a large number of passwords against a selected policy and a get a report of the accepted and
rejected passwords.

NEW: HIPB Updater

Downloads the most recent Have I Been Pwnd (HIBP) hash list and incremental updates directly from
Netwrix Labs . Offers options to apply scheduling and triggers. This feature replaces the Pwnd
Passwords Downloader (PPD) and the HIBP Prep Tool to simplify updating the HIBP hash list.

See the
[HIBP Updater](/docs/passwordpolicyenforcer/10.2/tools-and-utilities/hibp-updater.md)
topic for additional information.

NEW: Password Quality Feedback

End users get real-time feedback when typing a new password on the Windows Change Password screen,
indicating whether the new password meets the applied policies.

Enhancement: Updated Password Checker User Interface

Added a three-tab user layout for better separation of settings and improved usability. Password
Checker can now be accessed from the PPS Properties page.

Enhancement: Event Logging in Password Checker

Password Checker now has an option to log an event when it finds a compromised password.

Enhancement: Force Password Expiration in Password Checker

Password Checker now has an option to force password expiration for accounts where compromised
passwords are found.

Enhancement: License Usage Count

The License tab on PPS Properties page now displays the number of connected active AD accounts and
the number of AD accounts where policies are applied.

Enhancement: Security Update

Added option to utilize RPC Kerberos Sign/Seal protocol for client-server communication.

Enhancement: Rule Name Properties

Added the names of the rules to their properties’ windows for better identification.

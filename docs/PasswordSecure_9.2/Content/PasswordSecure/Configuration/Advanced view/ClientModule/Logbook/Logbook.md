---
sidebar_position: 6411
title: Logbook
---

# Logbook

## What is a logbook?

Netwrix Password Secure logs all user interactions. These entries can be viewed and filtered via the logbook. The logbook records which user has made exactly what changes. This module is (theoretically) classified as uncritical. This is because the employee only has access to those logbook entries to which he is actually entitled.

![Logbook module](../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/logbook_1-en.png "Logbook module")

## Relevant rights

The following options are required:

### User right

* Display logbook module

## Use of the filter in the logbook

You can also use the filter in the logbook. This enables you to limit the number of displayed elements based on the defined criteria. In the following example, the user is searching for logbook entries relating to the object type “Password” that also match the event criteria "Change". In short: The entries are being filtered based on changes to passwords.

![Logbook filter](../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/logbook_2-en.png "Logbook filter")

## Grouping in the logbook

This list can also be grouped together by dragging and dropping column headers – see the following grouping of the columns for **computer user**. The filtered results now show all changes to passwords carried out by the computer user "administrator".

![Logbook entries](../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/logbook_3-en.png "Logbook entries")

## Revision-safe archiving

In Netwrix Password Secure, an uncompromising method is used when handling the logbook: Every change of state is recorded and saved in the MSSQL database. There are no plans to allow triggers for logbook entries to be selectively defined. It is only by using this process that changes are completed in a traceable and audit-proof manner to prevent falsification.

NOTE: If desired, the logbook can be automatically cleaned up. This option can be configured on the Server Manager. Further information can be found in the section [Managing databases](../../../Server Manager/Managing databases/Managing databases "Managing databases").

## Transferring to a Syslog server

The logbook can also be completely transferred to a [Syslog](../../../Server Manager/Database properties/Syslog "Syslog") server. Further information on this subject can be found in the section Syslog.
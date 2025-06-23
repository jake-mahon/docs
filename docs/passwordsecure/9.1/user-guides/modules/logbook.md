# Logbook

The logbook in the footer of the **Discovery Service Task** is extremely helpful for checking the
**Discovery Service Task**. Information about the progress of the **Discovery Service Task** is
displayed here. The data is displayed both in the **footer** and also in the **logbook module**
(although in more detail here). To display the footer, the user requires the **user right**: Global
settings in the
[User settings](/docs/passwordsecure/9.1/user-guides/administration/user-settings.md)
in the category: "Footer area" - "Show logbook in the footer area (activated)"

## Show in footer

![logbook in footer](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/logbook/logbook_ds-1-en.webp)

The following **events** are displayed in the **logbook for the footer** and in the **logbook
module**:

1. New
2. Change
3. Execute
4. Execution completed
5. Error during execution

If an error occurs during the execution of the **Discovery Service Task**, this is also shown n the
**logbook for the footer** with **additional information** about the error.

![ logbook for the footer](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/logbook/logbook_ds-2-en.webp)

## Display in the logbook

In general, the **logbook module** displays more detailed information about the **Discovery Service
Task**. The
[Filter](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/filter-and-search.md)
can be used to select which data is displayed. The same **events** as for the footer for the
**Discovery Service Task** are also used here.

![logbook entries](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/logbook/logbook_ds-3-en.webp)

The column editor can be used to arrange and display the data in the table according to their
importance.

# Logbook

## What is a logbook?

Netwrix Password Secure logs all user interactions. These entries can be viewed and filtered via the
logbook. The logbook records which user has made exactly what changes. This module is
(theoretically) classified as uncritical. This is because the employee only has access to those
logbook entries to which he is actually entitled.

![Logbook module](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/logbook/logbook_1-en.webp)

## Relevant rights

The following options are required:

### User right

- Display logbook module

## Use of the filter in the logbook

You can also use the filter in the logbook. This enables you to limit the number of displayed
elements based on the defined criteria. In the following example, the user is searching for logbook
entries relating to the object type “Password” that also match the event criteria "Change". In
short: The entries are being filtered based on changes to passwords.

![Logbook filter](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/logbook/logbook_2-en.webp)

## Grouping in the logbook

This list can also be grouped together by dragging and dropping column headers – see the following
grouping of the columns for **computer user**. The filtered results now show all changes to
passwords carried out by the computer user "administrator".

![Logbook entries](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/logbook/logbook_3-en.webp)

## Revision-safe archiving

In Netwrix Password Secure, an uncompromising method is used when handling the logbook: Every change
of state is recorded and saved in the MSSQL database. There are no plans to allow triggers for
logbook entries to be selectively defined. It is only by using this process that changes are
completed in a traceable and audit-proof manner to prevent falsification.

NOTE: If desired, the logbook can be automatically cleaned up. This option can be configured on the
Server Manager. Further information can be found in the section
[Managing databases](/docs/passwordsecure/9.1/configuration/server-manager/managing-databases.md).

## Transferring to a Syslog server

The logbook can also be completely transferred to a
[Syslog](/docs/passwordsecure/9.1/configuration/server-manager/syslog.md)
server. Further information on this subject can be found in the section Syslog.

# Logbook entries under Password Reset

Subsequently all possible logbook entries in connection with Password Reset are listed

The password reset first checks with the first script (via the heartbeat) whether the password is
correct:

| Logbook Type                   | Logbook Record |
| ------------------------------ | -------------- |
| Login data valid               | Container      |
| Login data invalid             | Container      |
| Check errors during login data | Container      |

Afterwards all scripts of the password reset are executed one after the other and the following
logbook entries are written:

| Logbook type          | Logbook record |
| --------------------- | -------------- |
| Execute               | Password Reset |
| Execute Rollback      | Password Reset |
| Execution Error       | Password Reset |
| Error during rollback | Password Reset |

If an attempt was made to perform a rollback, but the rollback cannot be performed because the old
password was incorrect before the reset, or the first script is of the type “user-defined”, the
following logbook entry is written:

| Logbook type          | Logbook record |
| --------------------- | -------------- |
| Error during rollback | Password Reset |

If a password reset has failed and an attempt is made to perform a rollback, the reset is blocked
for one day and the following logbook entry is written: (It does not matter if the rollback worked
or not)

| Logbook type           | Logbook record |
| ---------------------- | -------------- |
| Password Reset blocked | Password Reset |

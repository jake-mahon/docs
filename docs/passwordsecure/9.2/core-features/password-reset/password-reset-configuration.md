# Configuration

## Creating a Password Reset

New Password Resets can be directly added via the ribbon or the keyboard shortcut "Ctrl + N" in the
Password Reset module. With regards to setting permissions, a Password Reset behaves in precisely
the same way as every other object. It is thus possible to precisely control which users can view
and use which Password Resets.

## Configuration Guide

The configuration of a new Password Reset comprises four steps. All of the necessary conditions and
variables for the configuration are defined in the following areas: "General", "Trigger", "Scripts"
and "Linked passwords".

![configuration password reset](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/configuration/configuration_1-en.webp)

### General

- **Name**: Designation for the Password Reset
- **Responsible user**: All completed Password Resets are also recorded within Netwrix Password
  Secure (logbook,…). To ensure these steps can be allocated to a user, a user who is registered in
  Netwrix Password Secure is selected in the field "Responsible user".

### Trigger

Triggers describe the conditions that need to be fulfilled so that a Password Reset is carried out.
There are a total of three possible triggers available:

- Reset the password x minutes after the password has been viewed
- Reset the password when it has not been changed for x days
- Reset the password when it has been expired for x days

At least one trigger must be activated so that the Password Reset is activated. Deactivating all
triggers is equivalent to deactivating the Password Reset. All three triggers can be activated and
deactivated independently of one another. Only one selection can be made in each of the three
categories.

NOTE: A separate system task within Netwrix Password Secure checks every minute whether a trigger
applies.

### Scripts

A new dialogue appears after the selection in which the type of system "to be reset2 can be defined.

![new script password reset](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/configuration/configuration_2-en.webp)

- **Script type**: You select here from the possible script types.
- **Password**: The credentials for the record that will ultimately carry out the Password Reset.
  The required information is specifically requested in each case. For example, if the reset is for
  an MSSQL user, the MSSQL instance and the port used needs to be entered.

The functions and configuration process are described in detail in the section Scripts.

NOTE: It is not possible to create a Password Reset without an associated script.

### Linked passwords

All records that should be reset with the Password Reset according to the selected trigger are
listed under “Linked passwords”. Multiple objects can be entered. The linked Password Reset is also
visible in the footer of the reading pane once it has been successfully configured.

![new script password reset](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/configuration/configuration_2-en.webp)

# Heartbeat

## What is the heartbeat?

The heartbeat checks whether passwords in Netwrix Password Secure match the login data on the
relevant systems. This process ensures that the passwords do not differ from one another.

## Requirements

The heartbeat is only available for passwords that are linked to a properly functioning Password
Reset.

### Supported script types

The passwords for the following script types can be tested:

- Windows user
- MSSQL user
- Active Directory users
- Linux user

Further information can be found in the section Scripts.

## Testing using heartbeat

The testing process using the heartbeat can be executed via various methods.

## Testing via Password Reset

The heartbeat is always carried out before the first resetting process using a Password Reset. After
the script has run, the testing process is carried out again. Further information on this process
can also be found in the section [Rollback](/docs/passwordsecure/9.2/core-features/password-reset/rollback-functionality.md).

### Manual testing

The heartbeat can be executed in the ribbon for the password module by clicking on **Check login
data**. The currently marked password is always tested.

### Automatic testing via the password settings

It is also possible to configure the heartbeat to run cyclically. It can be configured either via
the [User settings](/docs/passwordsecure/9.2/administration/user-management/user-settings.md) or directly in the
[Password settings](/docs/passwordsecure/9.2/core-features/password-management/password-settings.md).

## Results of the tests

The results of the test can be viewed in the **passwords module**.

![result heartbeat](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/heartbeat/heartbeat_1-en.webp)

The date when it was last executed can be seen at the top of the
[Reading pane](/docs/passwordsecure/9.2/user-interfaces/advanced-view/reading-pane.md). The success of the testing
process is indicated alongside using a coloured icon. Further information can be displayed by moving
the mouse over the icon.

The icon has three different versions. These have the following meanings:

The last test was successful. The password is correct The test could not be performed. For example,
the password could not be reached. The last test was completed. However, the password is different
to the one on the target system.

## Filtering the results

The filter can be configured using the filter group **Status of the login data** so that the tested
records can be selected.

![Filter heartbeat status](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/heartbeat/heartbeat_2-en.webp)

# Requirements

## Relevant rights

The following options are required for creating a Password Reset.

### User rights

- Can add new Password Resets
- Display Password Reset module

### Requirements for Password Resets

- A password that has administrative rights to the relevant target computers must have been saved in
  Netwrix Password Secure.
- The Microsoft Remote Admin Tools must be saved on the target system.
- The target system must be accessible via the network.

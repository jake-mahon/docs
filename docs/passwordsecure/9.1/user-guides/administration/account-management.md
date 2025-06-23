---
title: User Account Management
sidebar_label: Account Management
description: Configure user-specific account information with considerations for Masterkey mode integration and Active Directory data synchronization.
---

# Account

## What is an account?

Users can configure all user-specific information in their account. It should be noted that if the
[Masterkey mode](/docs/passwordsecure/9.1/configuration/authentication/directory-services/masterkey-mode.md)
process is used, user data will always be taken from Active Directory – editing this information in
Netwrix Password Secure is thus not possible.

![account](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/account/installation_with_parameters_123-ewn.webp)

## Edit profile

All of the information in the contact and address sections can be defined under “Edit profile”. Some
areas of the profile overlap with the **management of users.** This information is explained in
[Managing users](/docs/passwordsecure/9.1/user-guides/organizational-structure/managing-users.md).

NOTE: No changes can be made to users that were imported from AD using Master Key mode. In this
case, all information will be imported from AD.

#### Editing user image

A new image can be added or the existing one replaced or deleted by clicking on the profile image.

NOTE: No changes can be made to users that were imported from AD with the aid of Master Key mode. If
an image has been saved in AD, it will be used here.

#### Change password

It is recommended that the user password is changed on a regular basis. If you want to use a new
password, it is necessary to enter the existing password in advance. The strength of the password
will be directly displayed.

NOTE: Users who were imported from AD with the aid of Master Key mode log in with the domain
password. Therefore, no password can be configured in this case.

NOTE: The strength of the user password can be stipulated by administration through the issuing of
password rules.

NOTE: If a user changes his or her password, all sessions that are still open are automatically
terminated.

#### Multifactor authentication

Multifactor authentication provides additional protection through a second login authentication
using a hardware token. The configuration is carried out via the ribbon in the “Security” section.
See also in
[Multifactor authentication](/docs/passwordsecure/9.1/configuration/authentication/multifactor-authentication/multifactor-overview.md)

![installation_with_parameters_124](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/account/installation_with_parameters_124.webp)

#### Configure autologin

This option can be used to automate the login to Netwrix Password Secure. For setup, just enter the
password twice and save it.

The autologin is linked to the hardware and thus will not work on a different computer. If you
change the hardware or the hardware ID, an existing autologin needs to be recreated.

#### Relevant right

Option to manage the autologin

User right

- Can manage autologin

**CAUTION:** The automatic login should be handled as a process critical to security. It is
important to note that all data can be accessed, for example, if you forget to lock the computer.

NOTE: For security reasons, the autologin is only valid for 180 days and then needs to be
subsequently renewed.

#### Reset settings

Clicking on this button resets all user-specific settings such as the column width, colour scheme,
etc. to the default values.

#### Start offline synchronization

If you have made changes to the database and do not want to wait for the next automatic
synchronization, an offline synchronization can also be started manually. The synchronization runs
in the background and is indicated by a status bar in the footer as well as by the icon. More…

# Administration

## Sessions

Via the menu item **Sessions**, all users connected to the database can be displayed. This page is
purely informative in character and thus no configurations can be made here.

![installation_with_parameters_120](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/administration/installation_with_parameters_120.webp)

The session view starts in the currently active module in a separate tab.

#### Locked users

All currently locked users can also be retrieved. There are two scenarios here:

1. User name correct, password incorrect: The user name is displayed
2. User name incorrect: The client is displayed

In addition, the number of attempted logins and the length of time that the user was locked in each
case can be seen.

![installation_with_parameters_121](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/administration/installation_with_parameters_121.webp)

#### Default password rules

Password rules can be defined for both user passwords and also for WebViewer exports that then need
to be fulfilled. In the following example, a user password must correspond to the “default password”
rule in order to be valid

![Standard password rule](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/administration/installation_with_parameters_122-en_677x129.webp)

#### Relevant right

There is a separate option for defining the password rules for named passwords.

**User right**

- Can configure standard password rules

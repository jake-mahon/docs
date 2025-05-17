---
sidebar_position: 6334
title: Autofill Add-on
---

# Autofill Add-on

## What is the Autofill Add-on?

The Autofill Add-on is responsible for the automatic entry of login data in applications. This enables logins without knowledge of the password, which can be a particularly valuable tool in combination with [Password masking](../Advanced view/PermissionConcept/Predefining rights/Protective mechanisms/Password masking/Password masking "Password masking"). The [Authorization and protection mechanisms](../Web Applicaiton/Authorization and protection/Authorization and protection mechanisms "Authorization and protection mechanisms") is used to define which users should receive access.

However, the password remains hidden because it is entered by Netwrix Password Secure.

#### Requirements

The Autofill Add-on is installed together with the Netwrix Password Secure client and can then be used by users (assuming they have sufficient permissions). A separate installation is thus not necessary. A desktop link is created for both the client and also for the Autofill Add-on.

User rights

The right **Can create web applications** is required for creating new web applications\*

NOTE: The agent can control multiple databases at the same time

#### Functionality

The functionality of the Autofill Add-on is illustrated in the following diagram.

![Automatic entries diagram](../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/Installation_with_parameters_125-en.png "Automatic entries diagram")

RDP and SSH sessions(![](../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/1.png) ) are not automatically started via the Autofill Add-on. Applications are created for this purpose in the Netwrix Password Secure client. The creation and use of these connections is explained in detail in the corresponding section.

Automatically starting all other types of connection is the task of the **Autofill Add-on**. The following types of connections exist:

* Entering login data in Windows applications: Alongside the above-mentioned RDP and SSH sessions, other Windows applications can also be automated (![](../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/2.png)). A major difference is that the two above-mentioned connections are set up and “embedded” in a separate tab. Other applications, such as e.g. VMware, are directly started as usual. In these cases, the Autofill Add-on takes over the communication between the application server and the Windows applications.

NOTE: For entering data on websites, the record must contain at least the following fields: User name, password, URL.

#### Conclusion

As the Autofill Add-on is directly connected to the application server, login data can also be entered without the main client. Exceptions are the RDP and SSH connections. These are forced to remain part of the client. The Autofill Add-on thus acts as a lean alternative for the use of the client with the two limitations mentioned. Naturally, all of the steps completed are still entered in the logbook and are always traceable.
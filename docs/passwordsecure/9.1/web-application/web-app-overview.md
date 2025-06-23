---
title: Web Application Functional Scope
sidebar_label: Web App Overview
description: Password Secure Web Application functional scope overview with general functions and module descriptions for constant enhancement.
---

# Functional scope

The **Web Application** will act as the basis for a constant enhancement. The current functional
scope will be explained at this point. For the purposes of clarity, the relevant modules will be
described in their own subsections.

#### General functions

- Global settings and User settings
- Global User rights

#### Functions in the individual modules

- [Password module](/docs/passwordsecure/9.1/web-application/web-app-features/password-module.md)
- [Tag system](/docs/passwordsecure/9.1/web-application/web-app-features/tag-system-web.md)
- [Organisational structure module](/docs/passwordsecure/9.1/web-application/web-app-features/organizational-structure-web.md)
- [Roles module](/docs/passwordsecure/9.1/web-application/web-app-features/roles-web.md)
- [Forms module](/docs/passwordsecure/9.1/web-application/web-app-features/forms-web.md)
- [Notifications](/docs/passwordsecure/9.1/web-application/web-app-features/notifications-web.md)
- [Logbook](/docs/passwordsecure/9.1/web-application/web-app-features/logbook-web.md)
- [Application](/docs/passwordsecure/9.1/web-application/web-app-features/applications-web.md)
- [Documents](/docs/passwordsecure/9.1/web-application/web-app-features/documents-web.md)

# Operation

Operation of the Web Application has been based as far as possible on the operation of the Netwrix
Password Secure client. Nevertheless, there are some differences that need to be noted and they are
described here.

NOTE: There is also a Basic view in the Web Application. Everything worth knowing can be found at
the following link: web view Basic view

#### Login

There is no database profile on the Web Application. All databases approved for the Web Application
will be made available. The following information needs to be entered to log in:

Database name

User name

Password

![Login WebClient](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/web_applicaiton/operation/installation_with_parameters_167-en.webp)

After successfully logging in, the last database name used and the last registered user will be
saved. You thus only need to enter the password for the next login.

#### Transferring login data via the URL

The **database name** and **user name** can be transferred directly via the URL. The following
parameters are used here:

- **database** for transferring the database nam
- **username** for transferring the user name

The parameters are simply attached to the URL for the Web Application and separated from one another
with a **&**.

Example

You want to call up the Web Application under **https://psr_Web Application.firma.com.** In the
process, you want the login mask to be directly filled with the database **Passwords** and the user
name **Anderson**. The following URL is then used: **https://psr_Web
Application.firma.com/authentication/ login?database=Passwords&username=Anderson**

NOTE: It is possible to only transfer the database. The user name is not absolutely necessary.

#### Structure

The Web Application is split into a number of sections that are described below.

![Operation](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/web_applicaiton/operation/installation_with_parameters_168-en.webp)

1. [Header](/docs/passwordsecure/9.1/web-application/web-app-navigation/header.md)

The header provides access to some essential functions.

2. [Navigation bar](/docs/passwordsecure/9.1/web-application/web-app-navigation/navigation-bar.md)

It is possible to switch between module and filter view on the navigation bar.

3. [Filter or structure area](/docs/passwordsecure/9.1/web-application/web-app-navigation/filter-structure.md)

As is also the case on the client, it is possible to select between filter and structure.

4. [Menu](/docs/passwordsecure/9.1/web-application/web-app-navigation/menu-bar.md)

The ribbon on the client has been replaced by a menu bar on the Web Application.

5. [List view](/docs/passwordsecure/9.1/web-application/web-app-navigation/list-view.md)

The records currently selected using the filter can be viewed in list view.

6. [Reading pane](/docs/passwordsecure/9.1/web-application/web-app-navigation/reading-pane.md)

The reading pane shows you details about the relevantly selected element.

7. [Footer](/docs/passwordsecure/9.1/web-application/web-app-navigation/footer.md)

Various information about the record is displayed in the footer. For example, logbook entries or the
history.

# Web Application

## What is the Web Application

The previous WebAccess function has been replaced by the **Web Application” in Netwrix Password
Secure version** **8.3.0. The completely newly developed \*Web Application** will act as the basis
for the constant enhancement of the functional scope. The desired objective is to also provide the
full functional scope of the client in the Web Application. The **Web Application** will thus be
constantly enhanced. All of the currently available functions can be viewed in the
[Functional scope](/docs/passwordsecure/9.1/web-application/web-app-overview.md)
section.

![WebClient](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/web_applicaiton/installation_with_parameters_159.webp)

**Netwrix Password Secure Web Application** enables platform-independent access to the database via
a browser. It is irrelevant whether you are using Microsoft Windows, macOS or Linux, it is only
necessary for javascript to be supported. As the **Netwrix Password Secure Web Application** has a
responsive design, it can also be used on all mobile devices such as tablets and smartphones.

The **Web Application** is based both optically and also in its operation on the Netwrix Password
Secure client. As usual, users can only access the data for which they also have permissions. The
installation is described in the section
[Installation Web Application](/docs/passwordsecure/9.1/installation/web-application/installation-web-application.md)

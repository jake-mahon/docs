---
sidebar_position: 7328
title: Security Service
---

# Security Service

Admin Center lets you quickly create and deploy a Security service. This web-based service is a single sign-on implantation for Directory Manager clients. It is responsible for authenticating and authorizing users on different Directory Manager clients
and functionalities in accordance with their roles. The service also encrypts and decrypts data that Data service stores and fetches from the Directory Manager database on SQL Server.

You can create multiple Security services; the default service is created while configuring Directory Manager.

## The Default Security Service

See
[The Default Data Service](../DataService/Overview#default "The Default Data Service") topic.

At the time of Directory Manager installation, a generic signing key is assigned to the Directory Manager Security Service. For security reasons, it is recommended that a unique signing key is used which is specific to your environment. Using Netwrix Directory Manager (formerly GroupID) Signing Key Utility you can replace the old signing key with a new key. See the [Signing Key Utility](SignKeyUtility "Signing Key Utility") topic for additional information.

## Why Create Multiple Security Services?

See the
[Why Create Multiple Data Services?](../DataService/Overview#Why "Why Create Multiple Data Services?") topic while replacing references to Data service with Security service. After defining multiple Security services, you can enable communication between them. As a result of their communication, logged in session-related information persists across multiple Directory Manager clients. See the [Manage Advanced Settings](Manage#advanced "Advanced Settings") section of the [Manage Security Service Settings](Manage "Manage Security Service Settings") topics for additional information.
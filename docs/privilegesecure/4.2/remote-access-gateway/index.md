---
title: End User Overview
sidebar_label: Overview
description: Documentation for Privilege Secure privileged access management solution covering features, configuration, and usage procedures.
---

# End User Overview

This topic and its subtopics are written for users who have been assigned as a Remote Access
Gateway User.

New users will need to go through the MFA registration process before they can log in. Privilege
Secure requires a multi-factor authentication (MFA) solution (Authenticator, DUO, Symantec VIP etc)
for all user accounts. Upon initial login, the user must complete MFA registration in order to
proceed with using Privilege Secure. It is recommended to check with the organization's
Administrators for login requirements.

# Remote Access Gateway

The Remote Access Gateway (RAG) may be added to any Netwrix Privilege Secure installation to
securely extend access to external users such as remote workers or third-party vendors. VPN-less
access is provided via web page with browser-based sessions for RDP and SSH.

![architecture](/img/product_docs/changetracker/changetracker/architecture.webp)

The RAG is made up of two components:

RAG Portal

A dedicated web server to be installed in the DMZ. This is the front-end of the solution for end
users and by default the website runs on HTTPS\443. The RAG Portal communicates with the RAG gateway
over HTTPS\443

RAG Gateway

The gateway runs inside the corporate network and provides a bridge between the RAG Portal and the
Netwrix Privilege Secure installation. The RAG Gateway communicates to the Netwrix Privilege Secure
web service on port 6500 and the Proxy on 4489 and 4422 for RDP and SSH, respectively.

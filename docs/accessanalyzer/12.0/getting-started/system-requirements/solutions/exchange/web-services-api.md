---
title: Getting Started: web services api
sidebar_label: web services api
description: Getting started guide for web services api in Access Analyzer including setup instructions and initial configuration steps.
---

# Exchange Web Services API Permissions

The EWSMailbox and EWSPublicFolder data collectors utilizes Exchange Web Services API to access and
communicate with Exchange. These data collectors collect statistical, content, permission, and
sensitive data information from mailboxes and public folders.

Exchange Online Hybrid Environment Requirement

In addition to the permissions required by the EWSMailbox and EWSPublicFolder data collectors, the
Connection Profile assigned to the 7. Sensitive Data Job Group requires the following permissions
(based on default settings):

- Customized Administrator > Exchange Administrator Role

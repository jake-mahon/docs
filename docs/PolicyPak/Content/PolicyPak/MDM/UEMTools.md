---
sidebar_position: 3079
title: Using Endpoint Policy Manager with MDM and UEM Tools
---

# Using Endpoint Policy Manager with MDM and UEM Tools

Netwrix Endpoint Policy Manager (formerly PolicyPak) works with your mobile device management (MDM) service or unified endpoint management (UEM) tool as needed. This gives you the ability to wrap up Microsoft Group Policy and Endpoint Policy Manager directives into an MSI and deploy them using the system you already use. However, these kinds of tools need to acquire the following three files to work with Endpoint Policy Manager:

* Endpoint Policy Manager client-side extension (CSE) MSI file (one for 64-bit machines and one for 32-bit machines)
* Endpoint Policy Manager license MSI file
* Endpoint Policy Manager exported directives wrapped up as an MSI file (can be one MSI file or multiple MSI files)

In the sections that follow, we'll explain how to use Endpoint Policy Manager with any MDM or UEM tool you might already have.

## Using Endpoint Policy Manager with any UEM Tool

You can use Endpoint Policy Manager with any UEM tool you already have like SCCM, LANDesk, KACE, etc. Figure 30 shows a systems flow when using Endpoint Policy Manager with any UEM or systems management utility, like Microsoft Endpoint Configuration Manager (MEMCM) (formerly known as SCCM), KACE, etc.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Appendix A - Advanced Concepts_manual/Using PolicyPak with MDM and.png)

Figure 30. The correlation between applications and systems when using Endpoint Policy Manager with any systems management utility.

**NOTE:**  For a series of videos to get started with Endpoint Policy Manager and any UEM tool, like SCCM, KACE, etc., see the following link: Getting Started with Endpoint Policy Manager (Misc) > [Knowledge Base](../GettingStarted/Overview/KnowledgeBase "Knowledge Base").
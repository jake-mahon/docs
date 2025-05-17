---
sidebar_position: 4056
title: 'Getting Started: GUI'
---

# Getting Started: GUI

There are two ways to get started with Endpoint Policy Manager + Netwrix Privilege Secure:

* Starting with the Netwrix Privilege Secure download, or
* Starting with the Endpoint Policy Manager download

This guide has so far assumed you have started with the Endpoint Policy Manager download. However, you may have been directed here to get clarity on how to start with the Netwrix Privilege Secure download and proceed onward.

In the Netwrix Privilege Secure download you will find NPS for Endpoint Group Policy Snap-in x64 and x86 installers.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/PrivilegeSecure/Getting Started GUI.png)

This MSI is meant to increase what is possible with a Group Policy editor and let you create NPS Endpoint rules (aka Endpoint Policy Manager Least Privilege Manager) rules.

When you install the NPS Endpoint Group Policy Snap-In on a machine which has the Group Policy Editor and/or Group Policy Management Console, you will see the Netwrix Privilege Secure node and Endpoint Policy Manager Least Privilege Manager within it. All GPOs have the same look and feel and editing ability.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/PrivilegeSecure/Getting Started GUI_1.png)

If you want to upgrade to Endpoint Policy Manager and see both Netwrix Privilege Secure and all the other Endpoint Policy Manager nodes, you need to install the Endpoint Policy Manager Admin Console. This can be installed on top of the Netwrix Privilege Secure Admin Console, or, installed directly.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/PrivilegeSecure/Getting Started GUI_2.png)

The result can be seen here with Netwrix Privilege Secure / Least Privilege Manager and all the Endpoint Policy Manager nodes.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/PrivilegeSecure/Getting Started GUI_3.png)

In other words, the Endpoint Policy Manager Admin Console MSI is a superset of the Netwrix Privilege Secure Console MSI.

**NOTE:** See the [Netwrix Privilege Secure Client - Getting Started with MMC with/without Endpoint Policy Manager](../../../Video/LeastPrivilege/Integration/PrivilegeSecure "Netwrix Privilege Secure Client - Getting Started with MMC with/without PolicyPak")  video for a demo on the relationship between the Netwrix Privilege Secure and Endpoint Policy Manager downloads and moving parts.

**CAUTION:** It is technically possible to upgrade to the latest version of the Netwrix Privilege Secure Console MSI after installing some version of the Endpoint Policy Manager Admin Console MSI. If you do this, you will remove the Endpoint Policy Manager nodes and be left only with the Netwrix Privilege Secure node. Any Endpoint Policy Manager data and directives will still be in the GPO, and active. Therefore, it is recommended that if you upgrade to Endpoint Policy Manager Admin Console MSI, you maintain your console with upgrades only via the Endpoint Policy Manager Admin Console MSI and don’t attempt a re-install of Netwrix Privilege Secure Console MSI.
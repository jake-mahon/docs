---
sidebar_position: 3141
title: Preconfigured XMLs
---

# Preconfigured XMLs

Endpoint Policy Manager Least Privilege Manager comes with some preconfigured XML files that help to get you started quickly with a variety of common situations and applications.

* See the [Installing applications-and-Preconfigured-Rules](../Video/LeastPrivilege/InstallApplications "Installing applications-and-Preconfigured-Rules") video for an overview of how to use preconfigured Endpoint Policy ManagerLeast Privilege Manager XML examples.
* A common request is to overcome the Print dialog. As such we have a preconfigured rule to help with that. See the [Endpoint Privilege Manager: Install Printers via Native NTPRINT Dialog](../Video/LeastPrivilege/NTPrintDialog "Endpoint Privilege Manager: Install Printers via Native NTPRINT Dialog") video for an example.
* Another common request is to overcome the Windows Ethernet & IP address GUI. As such we have a preconfigured rule to help with that. See the [Endpoint Privilege Manager: Edit IP SETTINGS EDIT VIA WIN GUI](../Video/LeastPrivilege/WinGUI "Endpoint Privilege Manager: Edit IP SETTINGS EDIT VIA WIN GUI") video for an example.

First, to download the preconfigured XMLs, log onto the PolicyPak Portal, and click **Guidance XMLs and Scripts (PPLPM, PPBR, PPFAM, & PPSCRIPTS)**.

![A screenshot of a computer

Description automatically generated](../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/PreconfiguredXMLs/Preconfigured XMLs.png)

Once these files are downloaded and unpacked, you’ll see a folder named \_PolicyPak Least Privilege Manager XMLs.

![A screenshot of a computer

Description automatically generated](../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/PreconfiguredXMLs/Preconfigured XMLs_1.png)

If you want to enable users to install CutePDF Reader, you can use the preconfigured XML found in the above folder and drag and drop it to the MMC editor.

![A screenshot of a computer

Description automatically generated](../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/PreconfiguredXMLs/Preconfigured XMLs_2.png)

After that, the application will install on the endpoints without requiring Admin rights for installation.

These examples may or may not work, depending on specific circumstances so be sure to test before rolling out.
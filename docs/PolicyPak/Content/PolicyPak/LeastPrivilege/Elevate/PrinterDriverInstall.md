---
sidebar_position: 4182
title: How to elevate Print driver installation using Endpoint Privilege Manager?
  (alternate method)
---

# How to elevate Print driver installation using Endpoint Privilege Manager? (alternate method)

These directions should only be performed if asked by support. The normal method to elevate print driver installation is to use the Netwrix Endpoint Policy Manager (formerly PolicyPak) Helper tools. The following videos provide you with step by step instructions:

* [Overcome Network Card, Printer, and Remove Programs UAC prompts](../../Video/LeastPrivilege/UACPrompts "Overcome Network Card, Printer, and Remove Programs UAC prompts")
* [Endpoint Policy Manager Least Priv Manager Tools Setup](../../Video/LeastPrivilege/ToolsSetup "Endpoint Policy Manager Least Priv Manager Tools Setup")
* [Getting the helper tools as desktop shortcuts](../../Video/LeastPrivilege/HelperDesktopShortcut "Getting the helper tools as desktop shortcuts")
* [Endpoint Privilege Manager: Install Printers via Native NTPRINT Dialog](../../Video/LeastPrivilege/NTPrintDialog "Endpoint Privilege Manager: Install Printers via Native NTPRINT Dialog")
* [Endpoint Privilege Manager: Edit IP SETTINGS EDIT VIA WIN GUI](../../Video/LeastPrivilege/WinGUI "Endpoint Privilege Manager: Edit IP SETTINGS EDIT VIA WIN GUI")

Printui.dll is the executable file that contains the functions to install a Print driver. Currently Endpoint Policy Manager can elevate a Control Panel applet, and it can be `.CPL` or `.DLL` files. But we cannot elevate a `.DLL` file alone.

In this KB we will demonstrate how a non-admin user can install a print driver on its own, by elevating a `rundll32.exe` process using `PPLPM`.

Using Endpoint Policy Manager , elevate the `rundll32.exe`, and include a command-line argument to elevate a specific DLL. Just like shown in below screenshot.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/LeastPrivilege/Elevate/362_1_rundll.png)

Rule to elevate `rundll32.exe` by PATH and COMMAND LINE (when `rundll32.exe` runs a `DLL`, the `DLL` path is specified on the command line)
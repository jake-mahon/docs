---
sidebar_position: 3740
title: Mount / Unmount for USB and .DMG Files
---

# Mount / Unmount for USB and .DMG Files

**NOTE:** See the [Endpoint Privilege Manager for Mac: Mount / Unmount Part I](../../Video/LeastPrivilege/Mac/MountUnmountPart1 "Endpoint Privilege Manager for Mac: Mount / Unmount Part I") video and the [Endpoint Privilege Manager for Mac: Mount / Unmount Part II](../../Video/LeastPrivilege/Mac/MountUnmounPart2 "Endpoint Privilege Manager for Mac: Mount / Unmount Part II") video for an overview of this section.

You might want to manage when USB devices and/or .DMG disk files can be mounted (or unmounted).

![A screenshot of a computer

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Mac/MountedUnmounted/Mount Unmount for USB and.png)

You can perform the following functions:

Operations:

* Mount — Operations for mounting USB devices and dmg files
* Unmount — Operations for unmounting/ejecting USB devices and dmg disk images
* Apply to any device — Automatically apply to all USB disk devices and DMG files

Device Types:

* USB — USB disk devices are supported
* DMG — DMG files are supported as mounted devices

Action:

* Deny Execution — Block the specified device type
* Allow Execution —Allow attachment of specified device type
* Elevate — Lets users perform operations with elevated privileges without entering an admin password

Targets:

* Path — Path to DMG file to mount it
* Sources — Mount point defined by the system by USB device name or DMG file name

For a simple demo, let's Block All USB and DMG devices.

![A screenshot of a computer

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Mac/MountedUnmounted/Mount Unmount for USB and_1.png)

The result of trying to attach a new device by USB can be seen here, as Endpoint Policy Manager has blocked it.

![A screenshot of a computer

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Mac/MountedUnmounted/Mount Unmount for USB and_2.png)
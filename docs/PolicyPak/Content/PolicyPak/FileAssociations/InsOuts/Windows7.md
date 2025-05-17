---
sidebar_position: 3401
title: Managing Windows 7 File Associations with Group Policy Preferences
---

# Managing Windows 7 File Associations with Group Policy Preferences

Several years ago, managing file associations with Group Policy used to be quite easy. Group Policy Preferences had a specific item type that dynamically set which extensions would open in which applications. This is still available within the Microsoft Group Policy Editor by going to **User Configuration** > **Preferences** > **Control Panel Settings** > **Folder Options** > **New** > **Open With**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/FileAssociations/About PolicyPak File Associations.png)

This older method of setting file associations is still available in the Microsoft Group Policy Editor on the User side with Windows 7 and 8.

Next, select the file extension and the associated program. You can also choose to **Set as Default**.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/FileAssociations/About PolicyPak File Associations_1.png)

This method worked well on Windows XP to Windows 8, but stopped working with Windows 8.1.

Endpoint Policy Manager File Associations Manager fills in this gap. If you are already accustomed to using Group Policy (with Group Policy Preferences) to manage file associations, then Endpoint Policy Manager File Associations Manager will be a familiar way to perform that work.
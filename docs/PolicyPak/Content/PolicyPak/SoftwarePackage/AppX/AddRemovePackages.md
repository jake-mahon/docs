---
sidebar_position: 3448
title: Adding or Removing AppX Packages
---

# Adding or Removing AppX Packages

The Microsoft Store is full of useful applications. However, users do not always select the apps that you want them to download. This is where Software Package Manager can force the installation of the apps you want via AppX policies. Additionally, you may want to remove AppX packages as well. Windows itself will request unwanted applications for the user from the Microsoft Store. Below we can see pre-installed applications like Duolingo, Pandora, and Skype. Windows versions before 20H1 very often have quite cluttered Start menus, as shown in the figure.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 17 - PACKManager_manual/AppX Policies and Settings_2.png)

However, even newer versions of Windows still have some store applications , installed, like Skype, even though the default Start menu is cleaner. In both cases you might want to remove applications that are not needed..

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 17 - PACKManager_manual/AppX Policies and Settings_3.png)

We'll discuss how to install or remove AppX packages in the next two sections.

Get-AppxPackage | Where-Object -Property 'Publisher' -NE -Value 'CN=Microsoft Windows,
O=Microsoft Corporation, L=Redmond, S=Washington, C=US' | Where-Object -Property 'Publisher'
-NE -Value 'CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US' |
Where-Object -Property 'Publisher' -NE -Value 'CN=PolicyPak Software, Inc.,O=PolicyPak Software,
Inc.,L=Media,S=Pennsylvania,C=US' | Format-Table -Property Name, Publisher -AutoSize
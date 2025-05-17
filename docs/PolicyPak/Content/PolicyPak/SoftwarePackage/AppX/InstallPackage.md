---
sidebar_position: 3449
title: Install Package
---

# Install Package

To install an AppX package from the Microsoft Store, you need to know the store link. In this example, we will install WinZip Microsoft Store Edition, but you're welcome to use anything you like from the Windows 10 Microsoft Store instead. To get the store link you need to first go to an example machine and open the Windows 10 Microsoft Store to look for the application.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 17 - PACKManager_manual/AppX Policies and Settings_4.png)

Select the application, and find the Share section. Then click on **Copy link**

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 17 - PACKManager_manual/AppX Policies and Settings_5.png)

When you paste the link into the Netwrix Endpoint Policy Manager (formerly PolicyPak) Software Package Manager AppX policy to install an application, the link will be verified before allowing you to continue. You can then also verify that the App Store ID, name, and publisher all look correct.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 17 - PACKManager_manual/AppX Policies and Settings_6.png)

On the client machine, login as a user who would get the GPO and run GPUpdate. While the AppX packages that are queued might not be available for immediate download, very often they download nearly instantly.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 17 - PACKManager_manual/AppX Policies and Settings_7.png)

You can now run your newly deployed Microsoft Store application.

Get-AppxPackage | Where-Object -Property 'Publisher' -NE -Value 'CN=Microsoft Windows,
O=Microsoft Corporation, L=Redmond, S=Washington, C=US' | Where-Object -Property 'Publisher'
-NE -Value 'CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US' |
Where-Object -Property 'Publisher' -NE -Value 'CN=PolicyPak Software, Inc.,O=PolicyPak Software,
Inc.,L=Media,S=Pennsylvania,C=US' | Format-Table -Property Name, Publisher -AutoSize
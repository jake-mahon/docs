---
sidebar_position: 3221
title: Policies and Settings
---

# Policies and Settings

In this example, we're going to deliver an RDP file to the user desktop. The shortcut will appear when the policy applies, and disappear when the policy no longer applies (i.e., falls out of scope).

Start out on your GPMC management station by creating a group policy object (GPO) and linking it to your users. In this example we have a GPO created and linked to the East Sales Users organizational unit (OU).

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 15 -  RDP Manager_manual/Getting to Know PolicyPak.png)

Next, you need to configure settings, starting with the general settings. Under the General tab, enter the file path, which is the destination location for the RDP file. In most cases, you will probably want it delivered to the user desktop.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 15 -  RDP Manager_manual/Getting to Know PolicyPak_1.png)

You also need to select an action from the following list. In most cases you will choose **Create** or **Update**.

* Create — Item will be created when there is no match on exact file path.
* Replace — Item will replace (delete when re-write) all settings when matching item with the same file path.
* Update — Item will be created (if it doesn't exist). For matching items with the same file path, item will merge settings (that is, keep previously configured settings, but replace any existing items from the policy).
* Delete — Item will be deleted when matching item with the same file path.

You should configure the logon settings next. You can use the browse button to search for designated servers in AD. Then use the user name variable `%domainname%\%username%` .

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 15 -  RDP Manager_manual/Getting to Know PolicyPak_2.png)

You can then begin to choose the granular settings you want. For instance, you can use the slider to set your display configuration and choose your color depth from the drop down menu .

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 15 -  RDP Manager_manual/Getting to Know PolicyPak_3.png)

An underlined variable means that it will be delivered within the policy. As we can see below, there is one checked box and two underlined, unchecked boxes in the Local devices and resources section. That means that these checked and unchecked values will be delivered. When a check box is solid green it means that no value has been assigned to that variable.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 15 -  RDP Manager_manual/Getting to Know PolicyPak_4.png)

You can also configure experience settings such as optimized performance speed.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 15 -  RDP Manager_manual/Getting to Know PolicyPak_5.png)
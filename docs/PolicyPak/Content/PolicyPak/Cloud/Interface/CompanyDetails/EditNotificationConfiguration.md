---
sidebar_position: 3549
title: Edit Notification Configuration
---

# Edit Notification Configuration

The **Notifications Editor** is only available to admins with the **Notification & Logging Options Admin** role. This role enables the admin to perform two functions:

* Add Rules: Specify email alerts when specific actions are taken inside of Endpoint Policy Manager Cloud.
* Actions Configuration: Specify special emails when certain conditions exist within the Endpoint Policy Manager Cloud instance.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_91_624x157.png)

## Add Rules

Admins can get alerts via email when specific actions are taken by other admins. To get an action notification, you need tospecify the following:

* Action Name: This is the action type you want to audit for.
* Initiator User: This is the admin you want to audit.
* Notification Receiving User: This is who will get the alerts.
* Notification: This is the delivery method of the notification. Currently only email is supported, but there may be additional methods added in the future.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_92_499x345.png)

If you want to quickly set up all notifications for all admins, click all three check boxes.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_93_499x337.png)

When you set up notifications, you will see a list of the added rules.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_94_498x221.png)

## Actions Configuration

The **Actions Configuration Editor** has two settings that can be selected:

* Inactive Computers: When selected, allows you to send a weekly report of inactive computers to all company admins.
* License threshold: Allows you to set the threshold for notification of the percentage of remaining licenses.

Neither of these are turned on by default and may only be enabled by an admin with the **Notification & Logging Options Admin** role.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_95_623x429.png)

When the weekly report of inactive computers is turned on, admins will get an email like yjos on Mondays.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_96_625x341.png)

When the check box for remaining license notification threshold is set and the pool of licenses dips below the reporting threshold, all admins get a notification.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_97_624x209.png)
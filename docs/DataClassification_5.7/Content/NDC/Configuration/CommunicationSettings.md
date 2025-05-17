---
sidebar_position: 2873
title: Communication Settings
---

Filter: 

* All Files

Submit Search

# Communication Settings

This section contains information on how to configure settings for external communication, including configuring email groups and health service notifications. Review the following for details:

* [Email Servers](#Server)
* [Email Groups](#Email_Groups)
* [Health Service Notifications](#Health_Notifications)

[Email Servers](#)

Email servers can be configured to enable external communication. For instance when the health service identifies an issue.

Servers can be amended post configuration by selecting Edit, or, new SMTP servers can be added by selecting Add Email Server Configuration.

![](../../../../../static/images/DataClassification_5.7/Content/Resources/Images/configemailservers.png)

The SMTP details should be entered based on the values provided by your network team. Each configuration supports both SSL enabled SMTP servers, and those without SSL enabled.

It is also possible to supply a test email address which will be used to test the configuration settings.

![](../../../../../static/images/DataClassification_5.7/Content/Resources/Images/configemailserveradd.png)

[Email Groups](#)

Email groups are used to define a logical group of people to email, essentially – a mailing list.

Each email group is linked to an SMTP server, so, before configuring an email group, you must configure your Email Servers.

To add a new group, select Add Email Server Group, or select Edit on each row to configure the group members.

![](../../../../../static/images/DataClassification_5.7/Content/Resources/Images/configaddemailgroup.png)

Each group can have one or more members, and can be assigned a friendly name, which will be displayed when selecting an email group.

[Health Service Notifications](#)

Health Service Notifications can be configured to email a specific group of people when something goes wrong within the product. Each notification configuration is linked to an email group, so, before configuring notifications, you must configure your Email Groups.

To add a new notification configuration select Add Notification Configuration, or select Edit on each row to change the configuration.

[![](../../../../../static/images/DataClassification_5.7/Content/Resources/Images/confighealthnotifications_thumb_0_0.png)](../../Resources/Images/confighealthnotifications.png)

Notifications can be set to trigger on warnings, or just on errors – by default problems of any level will be reported.

The Daily Summary can also be disabled / enabled, this functionality sends out a summary email of outstanding problems each morning.

![](../../../../../static/images/DataClassification_5.7/Content/Resources/Images/configaddhealthnotification.png)
# Communication Settings

This section contains information on how to configure settings for external communication, including configuring email groups and health service notifications. Review the following for details:

- [Email Servers](#Email-Servers)
- [Email Groups](#Email-Groups)
- [Health Service Notifications](#Health-Service-Notifications)

[![Closed](/img/versioned_docs/transparent.gif)](javascript:void(0))[Email Servers](javascript:void(0))

Email servers can be configured to enable external communication. For instance when the health service identifies an issue.

Servers can be amended post configuration by selecting Edit, or, new SMTP servers can be added by selecting Add Email Server Configuration.

![configemailservers](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/configemailservers.png)

The SMTP details should be entered based on the values provided by your network team. Each configuration supports both SSL enabled SMTP servers, and those without SSL enabled.

It is also possible to supply a test email address which will be used to test the configuration settings.

![configemailserveradd](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/configemailserveradd.png)

[![Closed](/img/versioned_docs/transparent.gif)](javascript:void(0))[Email Groups](javascript:void(0))

Email groups are used to define a logical group of people to email, essentially – a mailing list.

Each email group is linked to an SMTP server, so, before configuring an email group, you must configure your Email Servers.

To add a new group, select Add Email Server Group, or select Edit on each row to configure the group members.

![configaddemailgroup](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/configaddemailgroup.png)

Each group can have one or more members, and can be assigned a friendly name, which will be displayed when selecting an email group.

[![Closed](/img/versioned_docs/transparent.gif)](javascript:void(0))[Health Service Notifications](javascript:void(0))

Health Service Notifications can be configured to email a specific group of people when something goes wrong within the product. Each notification configuration is linked to an email group, so, before configuring notifications, you must configure your Email Groups.

To add a new notification configuration select Add Notification Configuration, or select Edit on each row to change the configuration.

[![confighealthnotifications_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/confighealthnotifications_thumb_0_0.png)](/versioned_docs/dataclassification_5.6.2/images/confighealthnotifications.png)

Notifications can be set to trigger on warnings, or just on errors – by default problems of any level will be reported.

The Daily Summary can also be disabled / enabled, this functionality sends out a summary email of outstanding problems each morning.

![configaddhealthnotification](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/configaddhealthnotification.png)

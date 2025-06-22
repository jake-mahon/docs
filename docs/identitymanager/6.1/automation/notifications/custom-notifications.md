# Custom Notifications

Custom notifications can be configured for specific needs, to be triggered by a workflow, or
periodically via a task.

## Workflow-Triggered Notifications

A notification can be configured to be sent to one or several users right after the execution of a
given activity in a
[workflow](/docs/identitymanager/6.1/index.md).

> For example, when a user is created in Usercube through a workflow, a notification can be sent to
> the user's manager. A notification can also be sent when someone must process an action for a
> workflow to continue.

The configuration is made through the XML tag
[`NotificationAspect`](/docs/identitymanager/6.1/configuration-reference/xml-configuration/workflow-config.md).

## Periodic Notifications

A notification can be configured to be sent to a given user on a regular basis at specified times,
through the
[`SendNotificationsTask`](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
as part of a job.

> For example, a notification can be sent automatically to remind a manager that someone arrives in
> their team a month before the arrival, and again a week before.

The configuration is made through the XML tag
[`Notification`](/docs/identitymanager/6.1/configuration-reference/xml-configuration/notification-config.md).

# Customize a Native Notification

This guide shows how to set a template other than the default one for native notifications.

## Overview

Usercube natively sends notifications for usual cases.
[See more details](/docs/identitymanager/6.1/automation/notifications/native-notifications.md).

These native notifications are based on cshtml templates available inside the `Runtime` folder. If
the provided templates do not meet your exact needs, then they can be replaced by personalized
templates.

## Customize a Native Notification

Customize a native notification by proceeding as follows:

1. Among the
   [list of all native notifications](/docs/identitymanager/6.1/configuration-reference/xml-configuration/notification-config.md),
   get the identifier of the notification whose templates are to be replaced.

   > For example, to customize the notification for one-way password reset: `OneWayPasswordReset`.

2. In `Runtime/NotificationTemplates`, copy to the configuration folder the cshtml template(s)
   associated to the notification that need to be overridden.

   > For example, we can copy the template for the email's body but keep the provided template for
   > the subject. Then we have: `Conf/Templates/MyOneWayPasswordReset.cshtml`.
   >
   > Let's say that we also need to customize the email's subject in French which is the language
   > 2: `Conf/Templates/MyOneWayPasswordReset_Subject.fr.cshtml`

3. Customize the template(s) previously copied to the configuration folder.
4. Configure an XML element
   [`NotificationTemplate`](/docs/identitymanager/6.1/configuration-reference/xml-configuration/notification-config.md)
   with the identifier collected at step 1, and the relative path(s) to the customized template(s).

   > For example:
   >
   > ```
   >
   > <NotificationTemplate Identifier="OneWayPasswordReset" BodyTemplate_L1="./Templates/MyOneWayPasswordReset.cshtml" SubjectTemplate_L2="./Templates/MyOneWayPasswordReset_Subject.fr.cshtml" />
   >
   > ```

# Set Notifications' Languages

This guide shows how to set the language for all notifications.

## Overview

Usercube sends all kinds of notification emails whose language is by default the language specified
in the configuration as the first language.

The language can also be configured explicitly with a language code. If this language code is not
defined, then notifications use the first language.

## Set the First Language

Set the first language for the whole application by proceeding as follows:

1. In the XML configuration, create a `Language` with `IndicatorNumber` set to `1`.
   [See more details on `Language`](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md).

   > For example, to set English as the first language:
   >
   > ```
   >
   > <Language Code="en-US" IndicatorNumber="1" />
   >
   > ```

2. Deploy the configuration and relaunch the server.

## Set the Language Explicitly

Set the language explicitly for server-side-task notifications by proceeding as follows:

1. In the XML configuration, configure `MailSetting` with a `LanguageCode`.
   [See more details on `MailSetting`](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md).

   > For example, to set the language to English:
   >
   > ```
   >
   > <MailSetting MailProperty="Directory_User:Email" LanguageCode="en-US" />
   >
   > ```

   When `LanguageCode` is not defined, then the language of notifications will be the first
   language, i.e. the one specified with `Indicator` set to `1`.

2. Deploy the configuration and relaunch the server.

---
sidebar_position: 5846
title: 'Notification: Type'
---

# Notification: Type

Use the Notification Type page to specify one or more notification types.

![Notification Data Analysis Module wizard Notification Type page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Analysis/Notification/Type.png "Notification Data Analysis Module wizard Notification Type page")

The following options are available:

* Email – Sends a notification email to specified addresses defined on the SMTP page. See the [Notification: SMTP](SMTP "Notification: SMTP") topic for additional information.
* Command-line Executable – Runs a command-line program such as a batch file. On the Command Line page, define the specific application to run and any flags or arguments that must be set at runtime. See the [Notification: Command Line](CommandLine "Notification: Command Line") topic for additional information.
* Event Log – Creates a Windows Event Log item on the Access Analyzer Event Log. On the Event Log page, define the following:

  * Type of event (Information, Warning, Error, SuccessAudit, FailureAudit)
  * Event ID
  * Description of the event

  See the [Notification: Event Log](EventLog "Notification: Event Log") topic for additional information.
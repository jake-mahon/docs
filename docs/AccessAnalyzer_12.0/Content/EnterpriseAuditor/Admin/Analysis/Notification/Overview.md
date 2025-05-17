---
sidebar_position: 5842
title: Notification Analysis Module
---

# Notification Analysis Module

The Notification Data analysis module provides the ability to send an email or command-line notification to selected targets based on the values contains in any table.

The Notification Data Analysis Module has the following prerequisites:

* Configure the **Notification** node in the global settings

  * See the [Notification](../../Settings/Notification "Notification") topic for additional information
* Enable History for the table specified as the source

  * Only required if configuring Frequency or Time Window, or when using the Change Detection table as a source on the Table Type page

## Configuration

The Notification analysis module is configured through the Notification Data Analysis Module wizard, which contains the following wizard pages:

* Welcome
* [Notification: Table Type](TableType "Notification: Table Type")
* [Notification: Select Table](SelectTable "Notification: Select Table")
* [Notification: Change Type](ChangeType "Notification: Change Type")
* [Notification: Criteria](Criteria "Notification: Criteria")
* [Notification: Hosts](Hosts "Notification: Hosts")
* [Notification: Type](Type "Notification: Type")
* [Notification: SMTP](SMTP "Notification: SMTP")
* [Notification: Command Line](CommandLine "Notification: Command Line")
* [Notification: Event Log](EventLog "Notification: Event Log")
* [Notification: Frequency](Frequency "Notification: Frequency")
* [Notification: Time Window](TimeWindow "Notification: Time Window")
* [Notification: Summary](Summary "Notification: Summary")

The Welcome page lists the prerequisites needed for the Notification Analysis Module to function properly.

![Notification Data Analysis Module wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Analysis/Notification/Welcome.png "Notification Data Analysis Module wizard Welcome page")

There are no configurable settings on the Welcome page. To proceed, click **Next**.
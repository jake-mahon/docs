---
sidebar_position: 1761
title: Health Status Dashboard
---

Filter: 

* All Files

Submit Search

# Health Status Dashboard

New Health Status dashboard facilitates Auditor maintenance and troubleshooting tasks, providing IT specialists with at-a-glance view on the most critical factors: data collection performance, product health and storage capacity. The dashboard comprises a set of widgets that display the status of these aspects using aggregated statistics and charts. Nearly each widget allows you to drill down to the detailed information on the aspect you are interested in.

To view the dashboard, on the main Auditor page, click the Health status tile located in the Configuration section.

The dashboard includes the following widgets:

* The Activity records by date chart—Shows the number of activity records produced by your data sources, collected and saved by Netwrix Auditor during the last 7 days. See the [Activity Records Statistics](ActivityRecordStatistics "Activity Records Statistics") topic for additional information.
* The Monitoring overview widget—Shows aggregated statistics on the statuses of all monitoring plans configured in Netwrix Auditor at the moment. See the [Monitoring Overview](MonitoringOverview "Monitoring Overview") topic for additional information.
* The Health log chart—Shows the statistics on the events written in the Netwrix Auditor health log in the last 24 hours. Click the link in this widget to view the log. See the [Netwrix Auditor Health Log](HealthLog "Health Log") topic for additional information.
* The Database statistics widget—Helps you to estimate database capacity on the default SQL Server instance that hosts the product databases. See the [Database Statistics](DatabaseStatistics "Database Statistics") topic for additional information.
* The Long-Term Archive widget—Helps you to estimate the capacity of the Long-Term Archive file-based storage. To modify its settings, including location and retention, click the link in this widget. See the [System Health](../../../Requirements/LongTermArchive#System "System Health") topic for additional information.
* The Working Folder widget—Helps you to estimate the capacity of the Auditor working folder used to keep operational information (configuration files of the product components, log files, and other data) on the Auditor Server. See the [System Health](../../../Requirements/LongTermArchive#System "System Health") topic for additional information.

[![](../../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/Health/HealthStatusDashboard_thumb_0_0.png)](../../../../Resources/Images/Auditor/Health/HealthStatusDashboard.png)

You can also instruct Netwrix Auditor to forward similar statistics as a health summary email to personnel in charge. For that, click Notification settings, then follow the steps described in the [Notifications](../../Settings/Notifications "Notifications") topic.
---
sidebar_position: 5393
title: Suspicious Activity Job Group
---

# Suspicious Activity Job Group

The Suspicious Activity Job Group identifies areas and times of abnormal activity by analyzing typical activity patterns and identifying outliers based on factors such as amount of activity or time of day.

![Suspicious Activity Job Group in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Box/Activity/SuspiciousActivity/JobsTree.png "Suspicious Activity Job Group in the Jobs Tree")

The Suspicious Activity Job Group is comprised of:

* [Box\_FailedLogins Job](Box_FailedLogins "Box_FailedLogins Job") – Identifies failed logon events that have occurred over the last 30 days
* [Box\_FirstTimeFolderAccess Job](Box_FirstTimeFolderAccess "Box_FirstTimeFolderAccess Job") – Identifies the first time a user performs any activity on a folder or a file over the past 30 days
* [Box\_UnusualDownloadActivity Job](Box_UnusualDownloadActivity "Box_UnusualDownloadActivity Job") – Highlights unusual download activity for a user on a specific day by analyzing the download activity for a given user and looking for outliers
* [Box\_UnusualUserActivity Job](Box_UnusualUserActivity "Box_UnusualUserActivity Job") – Highlights unusual activity for a user on a specific day by analyzing the activity for a given user and looking for outliers
* [Box\_WeekendActivity Job](Box_WeekendActivity "Box_WeekendActivity Job") – Identifies Box activity events which have occurred on weekends over the last 30 days
---
sidebar_position: 5275
title: Suspicious Activity Job Group
---

# Suspicious Activity Job Group

The Suspicious Activity job group is designed to report on potentially suspicious activity event information from targeted file servers.

![Suspicious Activity Job Group in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Activity/SuspiciousActivity/JobsTree.png "Suspicious Activity Job Group in the Jobs Tree")

The Suspicious Activity job group is comprised of:

* [FS\_DeniedActivity Job](FS_DeniedActivity "FS_DeniedActivity Job") – Designed to report on denied activity event information from targeted file servers

  * Requires **Access Auditing** component data collection

  [FS\_HighestHourlyActivity Job](FS_HighestHourlyActivity "FS_HighestHourlyActivity Job") – Designed to report on the highest hourly activity event information from targeted file servers broken down by user

  * Includes a Notification analysis task option
  * Requires **Access Auditing** component data collection
* [FS\_HourlyShareActivity Job](FS_HourlyShareActivity "FS_HourlyShareActivity Job") – Designed to report on the highest hourly activity event information from targeted file servers broken down by share

  * Requires **Access Auditing** component data collection
* [FS\_ModifiedBinaries Job](FS_ModifiedBinaries "FS_ModifiedBinaries Job") – Designed to report on activity event information where binaries were modified from targeted file servers

  * Requires **Access Auditing** component data collection
* [FS\_PeerGroupActivity Job](FS_PeerGroupActivity "FS_PeerGroupActivity Job") – Designed to report on abnormal activity event information based on peer group analysis from targeted file servers

  * Requires **Access Auditing** component data collection
  * Requires Ownership be assigned within the Access Information Center. See the Resource Owners Overview topic in the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter "Netwrix Access Information Center Documentation") for additional information.
* [FS\_Ransomware Job](FS_Ransomware "FS_Ransomware Job") – Designed to report on potential ransomware activity event information based on file extensions and large number of modified file events from targeted file servers
* [FS\_SensitiveDataActivity Job](FS_SensitiveDataActivity "FS_SensitiveDataActivity Job") – Designed to report on activity event information on resources identified to contain sensitive information from targeted file servers

  * Requires **Access Auditing** component data collection
  * Requires **Sensitive Data Discovery Auditing** component data collection
* [FS\_StaleFileActivity Job](FS_StaleFileActivity "FS_StaleFileActivity Job") – Designed to report on user activity event information involving stale files from targeted file servers
* [FS\_UserShareActivity Job](FS_UserShareActivity "FS_UserShareActivity Job") – Designed to report on normal user activity within a share from targeted file servers

  * Requires **Access Auditing** component data collection
* [FS\_WeekendActivity Job](FS_WeekendActivity "FS_WeekendActivity Job") – Designed to report on activity events that occur over the weekend from targeted file servers

  * Requires **Access Auditing** component data collection
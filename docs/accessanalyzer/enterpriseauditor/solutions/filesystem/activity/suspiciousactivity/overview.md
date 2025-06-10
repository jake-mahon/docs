# Suspicious Activity Job Group

The Suspicious Activity job group is designed to report on potentially suspicious activity event information from targeted file servers.

![Suspicious Activity Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.webp)

The Suspicious Activity job group is comprised of:

- [FS\_DeniedActivity Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/fs_deniedactivity.md) – Designed to report on denied activity event information from targeted file servers

  - Requires __Access Auditing__ component data collection

  [FS\_HighestHourlyActivity Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/fs_highesthourlyactivity.md) – Designed to report on the highest hourly activity event information from targeted file servers broken down by user

  - Includes a Notification analysis task option
  - Requires __Access Auditing__ component data collection
- [FS\_HourlyShareActivity Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/fs_hourlyshareactivity.md) – Designed to report on the highest hourly activity event information from targeted file servers broken down by share

  - Requires __Access Auditing__ component data collection
- [FS\_ModifiedBinaries Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/fs_modifiedbinaries.md) – Designed to report on activity event information where binaries were modified from targeted file servers

  - Requires __Access Auditing__ component data collection
- [FS\_PeerGroupActivity Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/fs_peergroupactivity.md) – Designed to report on abnormal activity event information based on peer group analysis from targeted file servers

  - Requires __Access Auditing__ component data collection
  - Requires Ownership be assigned within the Access Information Center. See the Resource Owners Overview topic in the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter) for additional information.
- [FS\_Ransomware Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/fs_ransomware.md) – Designed to report on potential ransomware activity event information based on file extensions and large number of modified file events from targeted file servers
- [FS\_SensitiveDataActivity Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/fs_sensitivedataactivity.md) – Designed to report on activity event information on resources identified to contain sensitive information from targeted file servers

  - Requires __Access Auditing__ component data collection
  - Requires __Sensitive Data Discovery Auditing__ component data collection
- [FS\_StaleFileActivity Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/fs_stalefileactivity.md) – Designed to report on user activity event information involving stale files from targeted file servers
- [FS\_UserShareActivity Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/fs_usershareactivity.md) – Designed to report on normal user activity within a share from targeted file servers

  - Requires __Access Auditing__ component data collection
- [FS\_WeekendActivity Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/fs_weekendactivity.md) – Designed to report on activity events that occur over the weekend from targeted file servers

  - Requires __Access Auditing__ component data collection

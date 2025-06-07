# DiskInfo Data Collector

The DiskInfo Data Collector provides enumeration of disks and their associated properties. When targeting the local host for a DiskInfo query, it is necessary to select the __Systems Default__ option as the connection profile. This data collector is a core component of Access Analyzer and is available with all Access Analyzer licenses.

Protocols

- RPC
- WMI

Ports

- TCP 135
- Randomly allocated high TCP ports

Permissions

- Member of the local Administrators group

## DiskInfo Query Configuration

The DiskInfo Data Collector is configured through the Disk Info wizard, which contains the following wizard pages:

- Welcome
- [DiskInfo: Target Disks](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/diskinfo/targetdisks.md)
- [DiskInfo: Results](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/diskinfo/results.md)
- [DiskInfo: Summary](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/diskinfo/summary.md)

![Disk Info wizard Welcome page](/static/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

The Welcome page can be hidden by selecting the __Do not display this page the next time__ checkbox when the wizard is open and configuration settings are saved.

# WMICollector Data Collector

The WMICollector Data Collector identifies data for certain types of WMI classes and namespaces. The WMICollector Data Collector is a core component of Access Analyzer, but it has been preconfigured within the Windows Solution. While the data collector is available with all Access Analyzer license options, the Windows Solution is only available with a special Access Analyzer license. See the [Windows Solution](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/overview.md) topic for additional information.

Protocols

- RPC
- WMI

Ports

- TCP 135-139
- Randomly allocated high TCP ports

Permissions

- Member of the Local Administrators group

## WMICollector Query Configuration

The WMICollector Data Collector is configured through the WMI Browser wizard, which contains the following wizard pages:

- Welcome
- [WMICollector: Sample Host](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/wmicollector/samplehost.md)
- [WMICollector: Classes](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/wmicollector/classes.md)
- [WMICollector: Properties](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/wmicollector/properties.md)
- [WMICollector: Summary (Results)](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/wmicollector/summary.md)

![WMI Browser wizard Welcome page](/static/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

The Welcome page can be hidden by selecting the __Do not display this page the next time__ checkbox when the wizard is open and configuration settings are saved.

# CommandLineUtility Data Collector

The CommandLineUtility Data Collector provides the ability to remotely spawn, execute, and extract data provided by a Microsoft native or third-party command line utility. It allows users to easily execute a command line utility and capture its output as Access Analyzer data. This data collector is a core component of Access Analyzer and is available with all Access Analyzer licenses.

Protocols

- Remote Registry
- RPC

Ports

- TCP 135-139
- Randomly allocated high TCP ports

Permissions

- Member of the local Administrators group

## CommandLineUtility Query Configuration

The CommandLineUtility Data Collector executes a command line utility and captures the output. It is configured through the Command Line Utility Data Collector Wizard, which contains the following pages:

- Welcome
- [CLU: Profile Type](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/commandlineutility/profiletype.md)
- [CLU: Profile Parameters](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/commandlineutility/profileparameters.md)
- [CLU: Execution Options](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/commandlineutility/executionoptions.md)
- [CLU: Define Fields](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/commandlineutility/definefields.md)
- [CLU: Script Editor](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/commandlineutility/scripteditor.md)
- [CLU: Results](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/commandlineutility/results.md)
- [CLU: Summary](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/commandlineutility/summary.md)

![Command Line Utility Data Collector Wizard Welcome page](/static/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

The Welcome page can be hidden by selecting the __Do not display this page the next time__ checkbox when the wizard is open and configuration settings are saved.

# CommandLineUtility Data Collector

The CommandLineUtility Data Collector provides the ability to remotely spawn, execute, and extract
data provided by a Microsoft native or third-party command line utility. It allows users to easily
execute a command line utility and capture its output as Enterprise Auditor data. This data
collector is a core component of Enterprise Auditor and is available with all Enterprise Auditor
licenses.

Protocols

- Remote Registry
- RPC

Ports

- TCP 135-139
- Randomly allocated high TCP ports

Permissions

- Member of the local Administrators group

## CommandLineUtility Query Configuration

The CommandLineUtility Data Collector executes a command line utility and captures the output. It is
configured through the Command Line Utility Data Collector Wizard, which contains the following
pages:

- Welcome
- [CLU: Profile Type](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/commandlineutility/profiletype.md)
- [CLU: Profile Parameters](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/commandlineutility/profileparameters.md)
- [CLU: Execution Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/commandlineutility/executionoptions.md)
- [CLU: Define Fields](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/commandlineutility/definefields.md)
- [CLU: Script Editor](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/commandlineutility/scripteditor.md)
- [CLU: Results](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/commandlineutility/results.md)
- [CLU: Summary](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/commandlineutility/summary.md)

![Command Line Utility Data Collector Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.png)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.

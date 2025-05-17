---
sidebar_position: 6127
title: WMICollector Data Collector
---

# WMICollector Data Collector

The WMICollector Data Collector identifies data for certain types of WMI classes and namespaces. The WMICollector Data Collector is a core component of Access Analyzer, but it has been preconfigured within the Windows Solution. While the data collector is available with all Access Analyzer license options, the Windows Solution is only available with a special Access Analyzer license. See the [Windows Solution](../../../Solutions/Windows/Overview "Windows Solution") topic for additional information.

Protocols

* RPC
* WMI

Ports

* TCP 135-139
* Randomly allocated high TCP ports

Permissions

* Member of the Local Administrators group

## WMICollector Query Configuration

The WMICollector Data Collector is configured through the WMI Browser wizard, which contains the following wizard pages:

* Welcome
* [WMICollector: Sample Host](SampleHost "WMICollector: Sample Host")
* [WMICollector: Classes](Classes "WMICollector: Classes")
* [WMICollector: Properties](Properties "WMICollector: Properties")
* [WMICollector: Summary (Results)](Summary)")

![WMI Browser wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/WMICollector/Welcome.png "WMI Browser wizard Welcome page")

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox when the wizard is open and configuration settings are saved.
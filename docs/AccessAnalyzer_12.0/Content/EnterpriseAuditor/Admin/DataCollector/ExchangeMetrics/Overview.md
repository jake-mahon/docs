---
sidebar_position: 6118
title: ExchangeMetrics Data Collector
---

# ExchangeMetrics Data Collector

The ExchangeMetrics Data Collector collects Mail-Flow metrics from the Exchange Message Tracking Logs on the Exchange servers. Some examples of this include server volume and message size statistics. This data collector runs as an applet over RPC connection to process and collect summarized metrics from the Message Tracking Log. See the [Exchange Support and Permissions Explained](../../../Requirements/Solutions/Exchange/Support "Exchange Support and Permissions Explained") topic for a complete list of supported platforms.

The ExchangeMetrics Data Collector has been preconfigured within the Exchange Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [Exchange Solution](../../../Solutions/Exchange/Overview "Exchange Solution") topic for additional information.

Protocols

* RPC
* WMI

Ports

* TCP 135
* Randomly allocated high TCP ports

Permissions

* Member of the local Administrator group on the targeted Exchange server(s)

See the [Exchange Mail-Flow Permissions](../../../Requirements/Solutions/Exchange/MailFlow "Exchange Mail-Flow Permissions") topic for additional information.

## ExchangeMetrics Query Configuration

The ExchangeMetrics Data Collector is configured through the Exchange Metrics Data Collector Wizard, which contains the following wizard pages:

* Welcome
* [ExchangeMetrics: Category](Category "ExchangeMetrics: Category")
* [ExchangeMetrics: Scope](Scope "ExchangeMetrics: Scope")
* [ExchangeMetrics: Results](Results "ExchangeMetrics: Results")
* [ExchangeMetrics: Collect Mode](CollectMode "ExchangeMetrics: Collect Mode")
* [ExchangeMetrics: Time Frames](TimeFrames "ExchangeMetrics: Time Frames")
* [ExchangeMetrics: Message Sizes](MessageSizes "ExchangeMetrics: Message Sizes")
* [ExchangeMetrics: Options](Options "ExchangeMetrics: Options")
* [ExchangeMetrics: Message Activity Filter](MessageActivityFilter "ExchangeMetrics: Message Activity Filter")
* [ExchangeMetrics: Summary](Summary "ExchangeMetrics: Summary")

  **NOTE:** Pages available vary depending on the Category selected.

![Exchange Metrics Data Collector Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/ExchangeMetrics/Welcome.png "Exchange Metrics Data Collector Wizard Welcome page")

The Welcome page can be hidden by checking the **Do not display this page the next time** box when the wizard is open and configuration settings are saved.
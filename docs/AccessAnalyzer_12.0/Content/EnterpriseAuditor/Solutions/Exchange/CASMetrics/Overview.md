---
sidebar_position: 5538
title: 2.CAS Metrics Job Group
---

# 2.CAS Metrics Job Group

The 2. CAS Metrics Job Group is comprised of data collection, analysis and reports that focus on remote connections (Outlook Web Access, ActiveSync, and Outlook Anywhere Access) occurring within your organization. This job group goes out to each server that contains the IIS Logs and parses the logs to return the data to the Access Analyzer database.

![2.CAS Metrics Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/CASMetrics/JobsTree.png "2.CAS Metrics Job Group in the Jobs Tree")

The jobs in the 2.CAS Metrics Job Group are:

* [0.Collection > EX\_IISLogs Job](EX_IISLogs "0.Collection > EX_IISLogs Job") – Provides data collection to be utilized in the ActiveSync, Outlook Web Access, and Outlook Anywhere Reports. This job group goes out to each server that contains the IIS Logs and parses the logs to return the data to the Access Analyzer database.
* [ActiveSync > EX\_ActiveSync Job](EX_ActiveSync "ActiveSync > EX_ActiveSync Job") – Provides visibility into ActiveSync Traffic in the Organization
* [Outlook Anywhere > EX\_RPCTraffic Job](EX_RPCTraffic "Outlook Anywhere > EX_RPCTraffic Job") – Provides visibility into Outlook Anywhere or RPC\HTTPs Traffic in the organization
* [Outlook Web Access > EX\_OWATraffic Job](EX_OWATraffic "Outlook Web Access > EX_OWATraffic Job") – Provides visibility into Outlook Web Access Traffic in the organization
* [EX\_ASPolicies Job](EX_ASPolicies "EX_ASPolicies Job") – Comprised of data collection and a report to show information about what policies are enabled for which users

  **NOTE:** An actual CAS name is required for the data collection. When targeting Exchange 2013 or 2016, it is possible for the **Settings** > **Exchange** node to have been configured with a web address instead of an actual server. See the [ExchangePS Data Collector & Client Access Server](../Recommended#_ExchangePS_Data_Collector_1 "ExchangePS Data Collector & Client Access Server") topic for additional information.
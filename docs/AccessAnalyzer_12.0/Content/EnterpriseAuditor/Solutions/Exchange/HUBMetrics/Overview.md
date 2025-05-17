---
sidebar_position: 5551
title: 1.HUB Metrics Job Group
---

# 1.HUB Metrics Job Group

The 1. HUB Metrics Job Group is comprised of data collection, analysis and reports that focus on mail-flow activity occurring within your organization. This job group goes out to each server that contains the Message Tracking Logs and parse the log to return the data to the Access Analyzer database.

![1.HUB Metrics Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/HUBMetrics/JobsTree.png "1.HUB Metrics Job Group in the Jobs Tree")

The following job groups and jobs comprise the 1. HUB Metrics Job Group:

* [0. Collection Job Group](Collection/Overview "0. Collection Job Group") – Comprised of jobs that process and analyze the message tracking logs on the Exchange Servers in the environment
* [EX\_DeliveryTimes Job](EX_DeliveryTimes "EX_DeliveryTimes Job") – Provides information around organizational and server level delivery times
* [EX\_DLMetrics Job](EX_DLMetrics "EX_DLMetrics Job") – Provides information around distribution list usage
* [EX\_DomainMetrics Job](EX_DomainMetrics "EX_DomainMetrics Job") – Provides information about which domains mail-flow is going to and coming from
* [EX\_HourlyMetrics Job](EX_HourlyMetrics "EX_HourlyMetrics Job") – Provides visibility into how much mail-flow the organization sends and receives each hour
* [EX\_MessageSize Job](EX_MessageSize "EX_MessageSize Job") – Provides information around size of messages sent and received
* [EX\_ServerMetrics Job](EX_ServerMetrics "EX_ServerMetrics Job") – Provides visibility into server mail-flow statistics, such as, sent, received, journaling, transport and NDR counts and sizes
* [EX\_UserMetrics Job](EX_UserMetrics "EX_UserMetrics Job") – Provides information around each user’s mail-flow in the organization
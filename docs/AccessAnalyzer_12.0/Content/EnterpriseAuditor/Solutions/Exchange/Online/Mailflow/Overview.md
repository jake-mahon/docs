---
sidebar_position: 5566
title: Mailflow Job Group
---

# Mailflow Job Group

The Mailbox job group is comprised of jobs that process and analyze the Message Tracking Logs in the Office 365 environment. This job group parses message tracking and stores the data for analysis and reporting in the Access Analyzer database.

![Mailflow Job Group in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Online/MailflowJobsTree.png "Mailflow Job Group in the Jobs Tree")

The jobs in the Mailflow job group are:

* [0. Collection > EX\_Mailflow Job](EX_Mailflow "0. Collection > EX_Mailflow Job") – Collects message trace data from an Office 365 server
* [EX\_Mailflow\_DL Job](EX_Mailflow_DL "EX_Mailflow_DL Job") – Comprised of analysis and reports which provide information around distribution list usage
* [EX\_Mailflow\_Domain Job](EX_Mailflow_Domain "EX_Mailflow_Domain Job") – Comprised of analysis and reports which provide information about which domains mail flow is going to and coming from
* [EX\_Mailflow\_Mailbox Job](EX_Mailflow_Mailbox "EX_Mailflow_Mailbox Job") – Comprised of analysis and reports which provide information around each user's mail-flow in the organization
* [EX\_Mailflow\_OrgOverview Job](EX_Mailflow_OrgOverview "EX_Mailflow_OrgOverview Job") – Comprised of analysis and reports which provide information around the overall traffic in the organization
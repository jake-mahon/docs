---
sidebar_position: 6019
title: "ExchangePS:\_Scope by Mailboxes"
---

# ExchangePS: Scope by Mailboxes

The Scope by Mailboxes page is used to define specific mailboxes to search. This page is enabled when the **Scope by Mailbox Target Host: Local Host** option is selected on the Scope page. See the [ExchangePS: Scope](Scope "ExchangePS: Scope") topic for additional information.

When using the applet, the data collector will return mailboxes for the Exchange Forest in which the Access Analyzer Console currently resides, and only return information about those mailboxes. For Remote PowerShell, the data collector will return mailboxes for the Exchange Forest as well as return information about those mailboxes.

![ExchangePS Data Collector Wizard Scope by Mailboxes page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/ExchangePS/ScopeMailboxes.png "ExchangePS Data Collector Wizard Scope by Mailboxes page")

Click **Retrieve** to return all mailboxes in the Exchange Organization and populate them in the Available Mailboxes list. Select desired mailboxes from the Available Mailboxes list and click **Add**. The selected mailboxes are added in the Selected Mailboxes list. To remove undesired mailboxes from Selected Mailboxes, select them and click **Remove**. The Select All and Clear All buttons can be used for quick selection.
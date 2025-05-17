---
sidebar_position: 5594
title: Logons Job Group
---

# Logons Job Group

The Logons Job Group provides collection of Native Mailbox Access Auditing logs from Exchange to provide reporting around mailbox logon activity.

***RECOMMENDED:*** Schedule the Logons Job Group to run daily at 7 PM.

The data collection job requires that Exchange Access Auditing is enabled in the Exchange environment.

![](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/Mailboxes/Logons/JobsTree.png "Logons Job Group")

The jobs in the Logons Job Group are:

* [0.Collection > EX\_MailboxActivity Job](EX_MailboxActivity "0.Collection > EX_MailboxActivity Job") – Collects logs of Native Mailbox Access Auditing from Exchange to provide reporting around mailbox logon activity
* [EX\_MailboxLogons Job](EX_MailboxLogons "EX_MailboxLogons Job") – Provides details around Mailbox logon activity occurring within the Exchange environment
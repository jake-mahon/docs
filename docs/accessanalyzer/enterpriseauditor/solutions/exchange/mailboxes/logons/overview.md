# Logons Job Group

The Logons Job Group provides collection of Native Mailbox Access Auditing logs from Exchange to provide reporting around mailbox logon activity.

___RECOMMENDED:___ Schedule the Logons Job Group to run daily at 7 PM.

The data collection job requires that Exchange Access Auditing is enabled in the Exchange environment.

![Logons Job Group](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.webp)

The jobs in the Logons Job Group are:

- [0.Collection > EX_MailboxActivity Job](/docs/accessanalyzer/enterpriseauditor/solutions/exchange/mailboxes/logons/ex_mailboxactivity.md) – Collects logs of Native Mailbox Access Auditing from Exchange to provide reporting around mailbox logon activity
- [EX_MailboxLogons Job](/docs/accessanalyzer/enterpriseauditor/solutions/exchange/mailboxes/logons/ex_mailboxlogons.md) – Provides details around Mailbox logon activity occurring within the Exchange environment

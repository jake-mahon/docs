# 0. Collection Job Group

The 0. Collection job group is comprised of data collection and analysis that focus on access granted to each mailbox in the environment including: Mailbox Rights, Active Directory Permissions, Delegation, and Folder Permissions.

![0.Collection Job Group in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/databases/collection/collectionjobstree.png)

The jobs in the 0. Collection job group are:

- [EX\_Delegates Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/mailboxes/permissions/collection/ex_delegates.md) – Collects data from Active Directory to identify the delegates applied to a mailbox
- [EX\_MBRights Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/mailboxes/permissions/collection/ex_mbrights.md) – Collects data from Active Directory to identify the mailbox rights applied to a mailbox
- [EX\_Perms Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/mailboxes/permissions/collection/ex_perms.md) – Collects information about permissions applied to the folders within Exchange mailboxes
- [EX\_SendAs Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/mailboxes/permissions/collection/ex_sendas.md) – Collects data from Active Directory to identify the Active Directory rights applied to a mailbox

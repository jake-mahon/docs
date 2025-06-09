# Collection Job Group

The Collection job group collects group policy settings, local users, and local group membership information from Windows servers which will be further analyzed to provide insight into privileged users within the environment.

![Collection Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/databases/collection/collectionjobstree.png)

The jobs in the Collection job group are:

- [SG\_GroupPolicy Job](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/privilegedaccounts/logonrights/collection/sg_grouppolicy.md) – This job collects policy assignments from all targeted servers. In particular, __Allow log on locally__, __Log on as a batch job__, __Allow log on through Remote Desktop Services__, and __Log on as a service__ are audited.
- [SG\_LocalMembership Job](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/privilegedaccounts/logonrights/collection/sg_localmembership.md) – This job collects local group membership details from all targeted servers
- [SG\_LocalUsers Job](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/privilegedaccounts/logonrights/collection/sg_localusers.md) – This job collects local user accounts from all targeted servers

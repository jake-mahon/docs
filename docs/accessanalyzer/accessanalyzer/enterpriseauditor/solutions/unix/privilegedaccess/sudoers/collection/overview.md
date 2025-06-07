# 0.Collection Job Group

The 0.Collection job group collects details on all rights granted via sudoers within audited Unix and Linux Environments.

![0.Collection Job Group in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/databases/collection/collectionjobstree.png)

The jobs in the 0.Collection job group are:

- [UX\_MakeDirectory Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/unix/privilegedaccess/sudoers/collection/ux_makedirectory.md) – This job creates a temporary Access Analyzer directory on target Unix and Linux environments to be used by the UX\_ParseSudoers job
- [UX\_ParseSudeors Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/unix/privilegedaccess/sudoers/collection/ux_parsesudeors.md) – This job parses all rights granted via sudoers in the audited environment

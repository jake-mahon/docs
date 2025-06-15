# Changes Job Group

The Changes Job Group provides an audit trail for changes made to Computer, Group and User objects
within the environment.

![Changes Job Group in the Jobs Tree](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.webp)

The following Jobs make up the Changes Job Group:

**_RECOMMENDED:_** Schedule these jobs to run with the 0.Collection job group.

- [AD_ComputerModifications Job](ad_computermodifications.md) – Reports on activity relating to
  changes made on computer objects
- [AD_GroupModifications Job](ad_groupmodifications.md) – Reports on activity relating to changes
  made on a group objects and changes made to group membership
- [AD_UserModifications Job](ad_usermodifications.md) – Reports on activity relating to changes made
  on user objects

# Group Usage Job Group

The Group Usage Job Group reports shows how group membership changes have affected access across the entire environment, the actions taken by the members of a group, and identifies where groups may be used for authorization in applications.

![Group Usage Job Group in the Jobs Tree](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.webp)

The following Jobs make up the Group Usage Job Group:

___RECOMMENDED:___ Schedule these jobs to run with the 0.Collection job group.

- [AD_AccessChanges Job](ad_accesschanges.md) – Reports on activity relating to access changes for Active Directory groups, highlighting membership changes that have created large access change within the environment
- [AD_GroupHosts Job](ad_grouphosts.md) – Reports on what hosts groups are being used on within the environment
- [AD_GroupMemberActivity Job](ad_groupmemberactivity.md) – Reports on the activity that group members are taking within the Active Directory environment

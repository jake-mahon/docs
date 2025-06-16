# 0.Collection Job Group

The 0.Collection job group collects data on permissions applied to certificates, computers, groups,
organizational units, and users. It is dependent on data collected by the .Active Directory
Inventory job group. The jobs which comprise the 0.Collection job group process analysis tasks.

![0.Collection Job Group in the Jobs Tree](../../../../../static/img/product_docs/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the 0.Collection job group are:

- [AD_CertificateRights Job](ad_certificaterights.md) – Collects all Active Directory permissions
  applied to certificate objects within the targeted domains
- [AD_ComputerRights Job](ad_computerrights.md) – Collects all Active Directory permissions applied
  to computer objects within the targeted domains
- [AD_ContainerRights Job](ad_containerrights.md) – Collects all Active Directory permissions
  applied to container objects within the targeted domains
- [AD_DomainRights Job](ad_domainrights.md) – Collects all Active Directory permissions applied to
  domain objects within the targeted domains
- [AD_GroupRights Job](ad_grouprights.md) – Collects all Active Directory permissions applied to
  group objects within the targeted domains
- [AD_OURights Job](ad_ourights.md) – Collects all Active Directory permissions applied to group
  objects within the targeted domains
- [AD_SiteRights Job](ad_siterights.md) – Collects all Active Directory permissions applied to site
  objects within the targeted domains
- [AD_UserRights Job](ad_userrights.md) – Collects all Active Directory permissions applied to user
  objects within the targeted domains

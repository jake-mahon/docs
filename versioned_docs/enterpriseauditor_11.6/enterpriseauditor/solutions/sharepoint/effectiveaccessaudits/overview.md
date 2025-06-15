# Effective Access Audits Job Group

This group returns reports identifying specific trustees’ effective access across the entire SharePoint environment.

![Effective Access Audits Job Group in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/jobstree.png)

The Effective Access Audits Job Group is comprised of:

- [Scoping > SP_TrusteeAccess Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/effectiveaccessaudits/sp_trusteeaccess.md) – Scopes a list of users to audit their access across the SharePoint environment. This can also be accomplished by looking users up in the Access Information Center. However, it is recommended to use this job in scenarios where a report on multiple users’ effective access at once needs to be generated.
- [SP_TrusteeAudit Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/effectiveaccessaudits/sp_trusteeaudit.md) – Provides functionality similar to the Access Information Center by allowing scoped audits of users’ access across the environment

For the SP_TrusteeAccess Job, the host list is set to Local host at the Scoping Job Group level. The assigned Connection Profile needs to have rights on the Enterprise Auditor Console server to access the CSV file saved in the job’s directory. The Connection Profile should be set at the __Effective Access Audits__ > __Scoping__ > __Settings__ > __Connection__ node.

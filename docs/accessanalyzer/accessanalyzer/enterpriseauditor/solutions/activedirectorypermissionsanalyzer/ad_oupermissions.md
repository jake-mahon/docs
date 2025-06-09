# 3.OUs > AD\_OUPermissions Job

The AD\_OUPermissions job reports on all Active Directory permissions and ownership applied to organizational unit (OU) objects within the targeted domains.

![3.OUs Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/ousjobstree.png)

The AD\_OUPermissions job is located in the 3.OUs job group.

## Analysis Tasks for the AD\_OUPermissions Job

Navigate to the __Active Directory Permissions Analyzer__ > __3.OUs__ > __AD\_OUPermissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_OUPermissions Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/oupermissionsanalysis.png)

The default analysis tasks are:

- List OU permissions – Creates the SA\_AD\_OUPermissions\_Details table accessible under the job’s Results node
- Summarize OU permissions – Creates an interim processing table in the database for use by downstream analysis and report generation
- Shadow Access OU Paths – Calculates the object location and permissions for shadow access
- OU Ownership – Lists the owners of each OU and determines if they are a non-standard owner. Principals that are not administrators are considered non-standard owners of OU objects. Creates the SA\_AD\_OUOwnership\_Details table accessible under the job’s Results node.
- OU Ownership Summary – Summarizes owner type by domain

In addition to the tables and views created by the analysis tasks, the AD\_OUPermissions job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| OU Ownership | This report highlights instances where Active Directory OU objects are owned by non admin principals. This information is summarized at the domain level. | None | This report is comprised of two elements:   - Stacked Bar Chart – Displays a summary of user ownership by domain - Table – Provides details of non-standard ownership |
| OU Permissions | This report highlights instances where permissions are applied to Active Directory organizational units. This information is summarized at the domain and enterprise levels. | None | This report is comprised of three elements:   - Bar Chart – Displays OU permissions by domain - Pie Chart – Displays OU permissions by type - Table – Provides details on OU permissions |

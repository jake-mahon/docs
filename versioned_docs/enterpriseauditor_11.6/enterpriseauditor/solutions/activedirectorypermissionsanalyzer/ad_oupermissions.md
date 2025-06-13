# 3.OUs > AD\_OUPermissions Job

The AD\_OUPermissions Job reports on all Active Directory permissions applied to organizational unit objects within the targeted domains.

![3.OUs Job Group in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/ousjobstree.png)

The AD\_OUPermissions Job is located in the 3.OUs Job Group.

## Analysis Tasks for the AD\_OUPermissions Job

Navigate to the __Active Directory Permissions Analyzer__ > __3.OUs__ > __AD\_OUPermissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_OUPermissions Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/oupermissionsanalysis.png)

The default analysis tasks are:

- List OU permissions – Creates the SA\_AD\_OUPermissions\_Details table accessible under the job’s Results node
- Summarize OU permissions – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD\_OUPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| OU Permissions | This report highlights instances where permissions are applied to Active Directory organizational units. This information is summarized at the domain and enterprise levels. | None | This report is comprised of three elements:   - Bar Chart – Displays OU permissions by domain - Pie Chart – Displays OU permissions by type - Table – Provides details on OU permissions |

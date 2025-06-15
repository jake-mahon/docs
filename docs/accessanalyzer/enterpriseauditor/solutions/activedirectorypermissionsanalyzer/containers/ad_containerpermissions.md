# AD_ContainerPermissions Job

The AD_ContainerPermissions Job is responsible for reporting on all Active Directory permissions applied to container objects within the targeted domains.

## Analysis Tasks for the AD_ContainerPermissions Job

Navigate to the __Active Directory Permissions Analyzer__ > __7.Containers__ > __AD_ContainerPermissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_ContainerPermissions Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/containers/containerpermissionsanalysis.webp)

The default analysis tasks are:

- List container object permissions – Creates the SA_AD_ContainerPermissions_Details table accessible under the job’s Results node
- Summarize container object permissions – Creates the SA_AD_ContainerPermissions_DomainSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_ContainerPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Container Permissions | This report highlights instances where permissions are applied to Active Directory container objects. This information is summarized at the domain and enterprise levels. | None | This report is comprised of three elements:   - Bar Chart – Displays container permissions by domain - Pie Chart – Provides details on enterprise container permissions by type - Table – Provides details on container permissions |

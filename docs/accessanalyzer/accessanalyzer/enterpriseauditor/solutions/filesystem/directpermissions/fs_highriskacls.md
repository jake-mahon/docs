# FS\_HighRiskACLs Job

The FS\_HighRiskACLs job is designed to report on high risk security principals that have been granted direct permissions on resources from targeted file servers.

## Analysis Tasks for the FS\_HighRiskACLs Job

View the analysis tasks by navigating to the __FileSystem__ > __2.Direct Permissions__ > __FS\_HighRiskACLs__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the FS_HighRiskACLs Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/directpermissions/highriskaclsanalysis.png)

The following analysis tasks are selected by default:

- 1. High Risk ACL Details – Creates the SA\_FS\_HighRiskACLs\_Details table accessible under the job’s Results node
- 2. High Risk Permissions Matrix – Creates an interim processing table in the database for use by downstream analysis and report generation
- 3. Open Manage Rights – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis task, the FS\_HighRiskACLs job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| High Risk ACLs | This report shows permissions of Authenticated Users, Anonymous Login, Everyone, or Domain Users.  Applying these trustees to permissions may inadvertently open security holes. | GDPR  SOX  HIPAA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of two elements:   - Stacked Bar Chart – Displays high risk permission assignments - Table – Provides details on resources by open manage rights |

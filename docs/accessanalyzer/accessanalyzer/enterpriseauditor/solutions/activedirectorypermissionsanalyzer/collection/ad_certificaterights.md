# AD\_CertificateRights Job

The AD\_CertificateRights job collects all Active Directory permissions applied to certificate objects within the targeted domains.

## Query for the AD\_CertificateRights Job

The AD\_CertificateRights job uses the ADPermissions data collector for the following query:

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Query for the AD_CertificateRights Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/certificaterightsquery.png)

- Certificate Template Permissions – Collects certificate templates from Active Directory

  - See the [ADPermissions Data Collector](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/adpermissions/overview.md) topic for additional information

## Analysis Tasks for the AD\_CertificateRights Job

Navigate to the __Active Directory Permissions Analyzer__ > __0.Collection__ > __AD\_CertificateRights__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_CertificateRights Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/certificaterightsanalysis.png)

- Certificate Rights View – Creates the SA\_AD\_CertificateRights\_Details\_PermissionsView visible under the job’s Results node
- AIC Certificate Permissions Import – Creates an interim processing table in the database for use by downstream analysis and report generation

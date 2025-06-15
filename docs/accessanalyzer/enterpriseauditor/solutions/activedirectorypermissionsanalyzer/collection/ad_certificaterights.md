# AD_CertificateRights Job

The AD_CertificateRights job collects all Active Directory permissions applied to certificate objects within the targeted domains.

## Query for the AD_CertificateRights Job

The AD_CertificateRights job uses the ADPermissions data collector for the following query:

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Query for the AD_CertificateRights Job](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/certificaterightsquery.webp)

- Certificate Template Permissions – Collects certificate templates from Active Directory

  - See the [ADPermissions Data Collector](../../../admin/datacollector/adpermissions/overview.md) topic for additional information

## Analysis Tasks for the AD_CertificateRights Job

Navigate to the __Active Directory Permissions Analyzer__ > __0.Collection__ > __AD_CertificateRights__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_CertificateRights Job](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/certificaterightsanalysis.webp)

- Certificate Rights View – Creates the SA_AD_CertificateRights_Details_PermissionsView visible under the job’s Results node
- AIC Certificate Permissions Import – Creates an interim processing table in the database for use by downstream analysis and report generation

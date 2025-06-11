# AD\_CertificateTemplates Job

The AD\_CertificateTemplates job provides details on certificate template settings.

#### Analysis Tasks for the AD\_CertificateTemplates Job

Navigate to the __Active Directory Permissions Analyzer__ > __8.Domains__ > __AD\_CertificateTemplates__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_CertificateTemplates Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/domains/certificatetemplatesanalysis.webp)

The default analysis tasks are:

- Certificate Templates – Provides details on certificate templates. Creates the SA\_AD\_CertificateAudit\_Templates table accessible under the job’s Results node.
- Templates Summary – Summarizes the counts of templates for each Certificate Authority and permission

In addition to the tables and views created by the analysis tasks, the AD\_CertificateTemplates job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Certificate Template Configuration | This report highlights certificate templates and their configurations in the audited Certificate Authority. | None | This report is comprised of three elements:   - Bar Chart – Displays templates by Certificate Authority - Pie Chart – Displays templates by permission count - Table – Provides details on certificate templates |

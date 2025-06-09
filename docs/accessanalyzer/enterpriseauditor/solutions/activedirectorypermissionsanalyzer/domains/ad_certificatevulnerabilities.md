# AD\_CertificateVulnerabilities Job

The AD\_CertificateVulnerabilities job highlights vulnerabilities in the configuration and permissions of the Certificate Authority, certificate templates, and Active Directory.

#### Analysis Tasks for the AD\_CertificateVulnerabilities Job

Navigate to the __Active Directory Permissions Analyzer__ > __8.Domains__ > __AD\_CertificateVulnerabilities__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the AD_CertificateVulnerabilities Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/domains/certificatevulnerabilitiesanalysis.png)

The default analysis task is:

- Certificate Issues – Creates the SA\_AD\_CertificateAudit\_Vulnerabilities table accessible under the job’s Results node. The following vulnerabilities are identified by this task:

  - SubjectAltName Allows Privilege Escalation (ESC1)
  - Defined EKUs Allow Arbitrary Certificate Signing (ESC2)
  - Certificates in Combination can be used for Arbitrary Privilege Escalation (ESC3)
  - Exploitable Access Control Entries on Templates (ESC4)
  - Public Key Infrastructure Misconfigurations (ESC5)
  - EDITF\_ATTRIBUTESUBJECTALTNAME2 Allows Privilege Escalation (ESC6)
  - Certificate Authority Open Access (ESC7)
  - NTLM Web Enrollment Enabled (ESC8)

In addition to the tables and views created by the analysis task, the AD\_CertificateVulnerabilities job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Certificate Vulnerabilities | This report highlights Certificate Authority and template configurations and permissions that create vulnerabilities in the audited environment. | None | This report is comprised of two elements:   - Bar Chart – Displays vulnerabilities by count - Table – Provides details on vulnerabilities |

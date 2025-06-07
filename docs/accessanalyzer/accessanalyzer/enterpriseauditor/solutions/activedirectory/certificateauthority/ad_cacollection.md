# Collection > AD\_CACollection Job

The AD\_CACollection job collects Certificate Authority details and settings for analysis against potential vulnerabilities that exist in Active Directory Certificate Services configurations. This job is located in the Collection job group.

Target Host

It is recommended to target the __ONE DOMAIN CONTROLLER PER DOMAIN__ or __Default domain controller__ host list.

## Queries for the AD\_CACollection Job

The AD\_CACollection job uses the PowerShell data collector to collect details about Certificate Authorities, templates, and requests.

![Queries for the AD_CACollection Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/certificateauthority/cacollectionqueries.png)

The queries for the job are:

- CA Connection String – Gets the Certificate Authority (CA) string to use for connections
- Permissions – Returns Certificate Authority Access Control Lists (ACLs)
- Registry Settings – Returns setup of Certificate Authorities
- Enrollment Agents – Returns Enrollment Agent rights, availability, and details
- NTLM Endpoints – Discovers NTLM enabled endpoints for Certificate Authorities
- AllCertificates – Collects all certificate requests from the ADCS Database
- CertificateTemplates – Gets certificate templates
- CertificateTemplatesPublished – Collects information from the PkiEnrollmentServices

## Analysis Tasks for the AD\_CACollection Job

Navigate to the __Active Directory__ > __7.Certificate Authority__ > __Collection__ > __AD\_CACollection__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_CACollection Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/certificateauthority/cacollectionanalysis.png)

The default analysis tasks are:

- Split String – Splits strings on a given delimiter. This is used to break apart Certificate Values.
- Subject Alternative Names – Breakdown of all Subject Alternative Names in key value pairs. Creates the SA\_AD\_CertificateConfiguration\_ALLSANs view accessible under the job’s Results node.
- Certificate OIDs – Certificate templates split out with OIDs
- Template Flags – Enumerates flags on certificate templates. Creates the SA\_AD\_CertificateConfiguration\_Flags view accessible under the job’s Results node.

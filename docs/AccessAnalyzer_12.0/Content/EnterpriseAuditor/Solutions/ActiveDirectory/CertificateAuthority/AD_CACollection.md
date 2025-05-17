---
sidebar_position: 5336
title: Collection > AD_CACollection Job
---

# Collection > AD\_CACollection Job

The AD\_CACollection job collects Certificate Authority details and settings for analysis against potential vulnerabilities that exist in Active Directory Certificate Services configurations. This job is located in the Collection job group.

Target Host

It is recommended to target the **ONE DOMAIN CONTROLLER PER DOMAIN** or **Default domain controller** host list.

## Queries for the AD\_CACollection Job

The AD\_CACollection job uses the PowerShell data collector to collect details about Certificate Authorities, templates, and requests.

![Queries for the AD_CACollection Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/CertificateAuthority/CACollectionQueries.png "Queries for the AD_CACollection Job")

The queries for the job are:

* CA Connection String – Gets the Certificate Authority (CA) string to use for connections
* Permissions – Returns Certificate Authority Access Control Lists (ACLs)
* Registry Settings – Returns setup of Certificate Authorities
* Enrollment Agents – Returns Enrollment Agent rights, availability, and details
* NTLM Endpoints – Discovers NTLM enabled endpoints for Certificate Authorities
* AllCertificates – Collects all certificate requests from the ADCS Database
* CertificateTemplates – Gets certificate templates
* CertificateTemplatesPublished – Collects information from the PkiEnrollmentServices

## Analysis Tasks for the AD\_CACollection Job

Navigate to the **Active Directory** > **7.Certificate Authority** > **Collection** > **AD\_CACollection** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_CACollection Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/CertificateAuthority/CACollectionAnalysis.png "Analysis Tasks for the AD_CACollection Job")

The default analysis tasks are:

* Split String – Splits strings on a given delimiter. This is used to break apart Certificate Values.
* Subject Alternative Names – Breakdown of all Subject Alternative Names in key value pairs. Creates the SA\_AD\_CertificateConfiguration\_ALLSANs view accessible under the job’s Results node.
* Certificate OIDs – Certificate templates split out with OIDs
* Template Flags – Enumerates flags on certificate templates. Creates the SA\_AD\_CertificateConfiguration\_Flags view accessible under the job’s Results node.
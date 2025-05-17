---
sidebar_position: 5337
title: AD_CertificateRequests Job
---

# AD\_CertificateRequests Job

The AD\_CertificateRequests job provides details about certificate requests, and highlights any that are expiring soon.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](../../../Admin/Jobs/Job/Overview#Parameter_Configuration "Parameter Configuration") topic for instructions on how to edit parameters on a job overview page.

The AD\_CertificateRequests job has the following configurable parameter:

* Number of days to consider a cert close to expiration (default 60)

This parameter sets the definition of an expiring certificate, which is used by the Certificate Expiration analysis task to identify any certificates expiring with this specified next number of days. The default is 60 days.

## Analysis Tasks for the AD\_CertificateRequests Job

Navigate to the **Active Directory** > **7.Certificate Authority** > **AD\_CertificateRequests** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_CertificateRequests Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/CertificateAuthority/CertificateRequestsAnalysis.png "Analysis Tasks for the AD_CertificateRequests Job")

The default analysis tasks are:

* Suspicious Principal Certs – Identifies certificates that show the requester requesting a certificate for a different principal
* OID in Template – Analysis on certificate Extended Key Usage (EKU) Object Identifier (OID) being in template OID
* Certificate Expiration – Identifies certificates that expire in the next number of days set by the customizable parameter. The default number of days is 60. Creates the SA\_AD\_CertificateRequests\_ExpiringSoon table accessible under the job’s Results node.
* Authentication Based Certificates – Identifies certificates that contain Authentication based OIDs. Creates the SA\_AD\_CertificateRequests\_AuthenticationBasedCertiifcates view accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the AD\_CertificateRequests job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Expiring Certificate Requests | Certificate hygiene is another aspect of a Certificate Authority that should be monitored. This report shows you all certificate information on certificate requests, expired, and expiring certificates. | None | This report is comprised of three elements:   * Stacked Bar Chart – Displays expiring certificates by Certificate Authority * Table –Provides a summary of expired and expiring certificates * Table –Provides details on expiring certificates |
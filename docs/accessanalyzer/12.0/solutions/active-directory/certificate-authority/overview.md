---
title: active directory certificate authority overview
sidebar_label: overview
description: Solution guide for active directory certificate authority overview including implementation steps, configuration, and best practices.
---

# 7.Certificate Authority Job Group

The 7.Certificate Authority job group collects settings, permissions, and configurations for
Certificate Authorities. It details access rights for the Certificate Authority and reports on
certificate requests, highlighting any that might expire soon.

![7.Certificate Authority job group in the Jobs tree](/img/product_docs/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following jobs comprise the job group:

- [Collection > AD_CACollection Job](/docs/accessanalyzer/12.0/solutions/active-directory/certificate-authority/ad-ca-collection.md) – Collects Certificate Authority details
  and settings for analysis against potential vulnerabilities that exist in Active Directory
  Certificate Services configurations
- [AD_CertificateAudit Job](/docs/accessanalyzer/12.0/solutions/active-directory/certificate-authority/ad-certificate-audit.md) – Provides details on access rights to the
  Certificate Authority
- [AD_CertificateRequests Job](/docs/accessanalyzer/12.0/solutions/active-directory/certificate-authority/ad-certificate-requests.md) – Provides details about certificate
  requests, and highlights any that are expiring soon

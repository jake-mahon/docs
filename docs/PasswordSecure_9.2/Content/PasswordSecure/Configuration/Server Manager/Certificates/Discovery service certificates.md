---
sidebar_position: 6345
title: Discovery service certificates
---

# Discovery service certificates

## What is a discovery service certificate?

If a discovery service is created, a corresponding certificate is also created:

![](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/PasswordSecure_Documentation_without_existing_chapters/Installation with parameters_202.png)

NOTE: The discovery service certificate cannot be replaced by your own certificate.

NOTE: The certificates for the discovery service have an expiry date. However, this is not checked. The certificate thus does not need to be renewed.

**CAUTION:** If the database is being moved to another server, it is **essential that the discovery service certificate is also transferred!**

#### Exporting and importing the certificate

The section [Certificates](Certificates "Certificates")explains how to back up the certificate and link it again.
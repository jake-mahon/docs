---
sidebar_position: 6346
title: Master Key certificates
---

# Master Key certificates

#### What is a Master Key certificate?

If Active Directory is accessed via [Masterkey mode](../../Advanced view/ClientModule/OrganisationalStructures/DirectoryServices/ActiveDirectoryLink/Masterkey mode "Masterkey mode"), a certificate will be created. This has the name

Active Directory: Domain:

![](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/PasswordSecure_Documentation_without_existing_chapters/Installation with parameters_208.png)

NOTE: The Master Key certificate cannot be replaced by your own certificate.

NOTE: The certificates for Master Key mode have an expiry date. However, this is not checked. The certificate thus does not need to be renewed.

**CAUTION:** If the database is being moved to another server, it is essential that the Master Key certificate is also transferred!

#### Exporting and importing the certificate

The section certificates explains how to back up the certificate and link it again.
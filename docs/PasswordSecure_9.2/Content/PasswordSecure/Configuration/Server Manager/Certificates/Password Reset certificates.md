---
sidebar_position: 6347
title: Password Reset certificates
---

# Password Reset certificates

## What is a Netwrix Password Secure certificate?

If a [Password Reset](../../Advanced view/ClientModule/PasswordReset/Password Reset "Password Reset") is created, a corresponding certificate is created. This ensures that the passwords are transferred in encrypted form.

![](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/password-reset.png)

NOTE: The Password Reset certificate cannot be replaced by your own certificate.

NOTE: The certificates for the Password Reset have an expiry date. However, this is not checked. The certificate thus does not need to be renewed.

**CAUTION:** If the database is being moved to another server, it is essential that all Password Reset certificate is also transferred!

#### Exporting and importing the certificate

The section [Certificates](Certificates "Certificates")explains how to back up the certificate and link it again.
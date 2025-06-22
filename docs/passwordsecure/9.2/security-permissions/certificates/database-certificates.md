# Database certificates

## What is a database certificate?

A unique certificate is created for each database. This has the name **psrDatabaseKey**:

![installation_with_parameters_207](/img/product_docs/passwordsecure/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_207.webp)

The database certificate **does not encrypt the database.** Rather, it is used for the encrypted
transfer of passwords from the client to the server in the following cases:

- Creation of a WebViewer via a task
- Creation of an AD profile protected by a master key
- Login of users imported from AD in Master Key mode

NOTE: The database certificate cannot be replaced by your own certificate.

NOTE: The expiry date for the database certificate is not checked. The certificate thus does not
need to be renewed.

**CAUTION:** If the database is being moved to another server, it is essential that the certificate
is also transferred!

#### Exporting and importing the certificate

The section [Certificates](/docs/passwordsecure/9.2/security-permissions/certificates/certificates-overview.md) explains how to back up the certificate and link it
again.

# Discovery service certificates

## What is a discovery service certificate?

If a discovery service is created, a corresponding certificate is also created:

![installation_with_parameters_202](/img/product_docs/passwordsecure/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_202.webp)

NOTE: The discovery service certificate cannot be replaced by your own certificate.

NOTE: The certificates for the discovery service have an expiry date. However, this is not checked.
The certificate thus does not need to be renewed.

**CAUTION:** If the database is being moved to another server, it is **essential that the discovery
service certificate is also transferred!**

#### Exporting and importing the certificate

The section [Certificates](/docs/passwordsecure/9.2/security-permissions/certificates/certificates-overview.md)explains how to back up the certificate and link it
again.

# Master Key certificates

#### What is a Master Key certificate?

If Active Directory is accessed via
[Masterkey mode](/docs/passwordsecure/9.2/security-permissions/encryption/masterkey-mode.md),
a certificate will be created. This has the name

Active Directory: Domain:

![installation_with_parameters_208](/img/product_docs/passwordsecure/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_208.webp)

NOTE: The Master Key certificate cannot be replaced by your own certificate.

NOTE: The certificates for Master Key mode have an expiry date. However, this is not checked. The
certificate thus does not need to be renewed.

**CAUTION:** If the database is being moved to another server, it is essential that the Master Key
certificate is also transferred!

#### Exporting and importing the certificate

The section certificates explains how to back up the certificate and link it again.

# Netwrix Password Secure Server Encryption Certificate

With the update to the version 8.16.0 the Netwrix Password Secure Server Encryption Certificate will
be added automatically.

![NPS Server Encryption](/img/product_docs/passwordsecure/passwordsecure/configuration/server_manager/certificates/nps-server-encryption_1014x771.webp)

This certificate is important if you will activate an offline license. In future there will be more
features for which this certificate is relevant.

RECOMMENDED: **Please export this certificate separately!!!**

# Password Reset certificates

## What is a Netwrix Password Secure certificate?

If a [Password Reset](/docs/passwordsecure/9.2/core-features/password-reset/password-reset-overview.md) is created,
a corresponding certificate is created. This ensures that the passwords are transferred in encrypted
form.

![password-reset](/img/product_docs/passwordsecure/passwordsecure/configuration/server_manager/certificates/password-reset.webp)

NOTE: The Password Reset certificate cannot be replaced by your own certificate.

NOTE: The certificates for the Password Reset have an expiry date. However, this is not checked. The
certificate thus does not need to be renewed.

**CAUTION:** If the database is being moved to another server, it is essential that all Password
Reset certificate is also transferred!

#### Exporting and importing the certificate

The section [Certificates](/docs/passwordsecure/9.2/security-permissions/certificates/certificates-overview.md)explains how to back up the certificate and link it
again.

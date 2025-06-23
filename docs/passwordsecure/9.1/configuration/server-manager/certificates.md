---
title: Certificate Management and Security
sidebar_label: Certificates
description: Manage various security certificates essential for Password Secure operation including backup procedures and certificate type descriptions.
---

# Certificates

Various different certificates are used to guarantee the security of Netwrix Password Secure. The
certificates are essential for the smooth operation of Netwrix Password Secure. It is thus important
that they are carefully backed up.

## What certificates are used?

The individual certificates are described in the following sections:

- [SSL connection certificates](/docs/passwordsecure/9.1/configuration/server-manager/certificates.md)
- [Database certificates](/docs/passwordsecure/9.1/configuration/server-manager/certificates.md)
- [Master Key certificates](/docs/passwordsecure/9.1/configuration/server-manager/certificates.md)
- [Discovery service certificates](/docs/passwordsecure/9.1/configuration/server-manager/certificates.md)s
- [Password Reset certificates](/docs/passwordsecure/9.1/configuration/server-manager/certificates.md)

## Calling up the certificate manager

There are two ways to open the certificate manager. The certificates for each specific database can
be managed via the ribbon:

![installation_with_parameters_196_647x73](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_196_647x73.webp)

In the **Main menu**, it is also possible to start the certificate manager for all databases via the
**basic configuration:**

![base configuration](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_197-en.webp)

NOTE: Operation of the certificate manager is always the same. The only difference is whether the
certificates are displayed for each database or for all databases.

#### Checking existing certificates

After opening the certificate manager, all certificates specific to Netwrix Password Secure will be
displayed. Clicking on the certificate will display further information.

![installation_with_parameters_198](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_198.webp)

Double clicking on a certificate will open the Windows Certificate Manger to provide more detailed
information.

![installation_with_parameters_199_423x396](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_199_423x396.webp)

#### Required certificates / deleting no longer required certificates

The overview will initially only display those certificates that are being used and are thus
required. Clicking on **All** will also display the no longer required certificates. For example, it
is possible that outdated certificates exist on the machine due to a test installation. These
certificates can be easily deleted via the corresponding button in the ribbon.

![certificates-ac-4-en](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/certificates-ac-4-en.webp)

#### Importing certificates

Previously backed up certificates can be integrated into the installation via the Import button.
This merely requires you to enter the desired .pfx file and its password.

#### Exporting certificates

The relevant certificates will be backed up by clicking on export. A password firstly needs to be
issued here. If a storage location has not yet been entered via the settings, you are firstly asked
to enter it.

NOTE: SSL connection certificates are not included in this process and are also not backed up. These
certificates can be recreated if necessary.

#### Settings

You can define whether every certificate should be saved to its own file in the **settings**. If
this option has not been activated, all relevant certificates will be backed up in one file. In
addition, the storage location is defined in the settings.

![installation_with_parameters_201_826x310](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_201_826x310.webp)

#### Backing up certificates

If you want to automatically back up the certificates on a cyclical basis, this can be done via the
backup system. Further information can be found in the section Backup management.

# Database certificates

## What is a database certificate?

A unique certificate is created for each database. This has the name **psrDatabaseKey**:

![installation_with_parameters_207](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_207.webp)

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

The section
[Certificates](/docs/passwordsecure/9.1/configuration/server-manager/certificates.md)
explains how to back up the certificate and link it again.

# Discovery service certificates

## What is a discovery service certificate?

If a discovery service is created, a corresponding certificate is also created:

![installation_with_parameters_202](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_202.webp)

NOTE: The discovery service certificate cannot be replaced by your own certificate.

NOTE: The certificates for the discovery service have an expiry date. However, this is not checked.
The certificate thus does not need to be renewed.

**CAUTION:** If the database is being moved to another server, it is **essential that the discovery
service certificate is also transferred!**

#### Exporting and importing the certificate

The section
[Certificates](/docs/passwordsecure/9.1/configuration/server-manager/certificates.md)explains
how to back up the certificate and link it again.

# Master Key certificates

#### What is a Master Key certificate?

If Active Directory is accessed via
[Masterkey mode](/docs/passwordsecure/9.1/configuration/authentication/directory-services/masterkey-mode.md),
a certificate will be created. This has the name

Active Directory: Domain:

![installation_with_parameters_208](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_208.webp)

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

![NPS Server Encryption](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/nps-server-encryption_1014x771.webp)

This certificate is important if you will activate an offline license. In future there will be more
features for which this certificate is relevant.

RECOMMENDED: **Please export this certificate separately!!!**

# Password Reset certificates

## What is a Netwrix Password Secure certificate?

If a
[Password Reset](/docs/passwordsecure/9.1/user-guides/password-reset/password-reset-overview.md)
is created, a corresponding certificate is created. This ensures that the passwords are transferred
in encrypted form.

![password-reset](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/password-reset.webp)

NOTE: The Password Reset certificate cannot be replaced by your own certificate.

NOTE: The certificates for the Password Reset have an expiry date. However, this is not checked. The
certificate thus does not need to be renewed.

**CAUTION:** If the database is being moved to another server, it is essential that all Password
Reset certificate is also transferred!

#### Exporting and importing the certificate

The section
[Certificates](/docs/passwordsecure/9.1/configuration/server-manager/certificates.md)explains
how to back up the certificate and link it again.

# SSL connection certificates

## What is an SSL connection certificate?

The connection between clients and the server is secured via an SSL certificate. The **latest
encryption standard TLS 1.2** is used here. It is also possible to create a certificate via the
server, as well as to use an existing certificate with a CA. All computers on which a client is
installed must trust the certificate.

Otherwise, the following message will appear when the client is started:

**This connection is not trusted!**

The connection to the server is not considered secure.

![not_trusted_certificates](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/not_trusted_certificates.webp)

NOTE: Windows Server 2012 R2 requires the latest patch level, since it has been delivered with SSL3,
and has been extended to include TLS 1.2

**CAUTION:** The service user creates the databases. A separate certificate is also generated for
each database. Therefore, the service user must be a local administrator or a domain administrator,
as otherwise they would have no rights to save data in the certificate store.

#### Structure of certificates

The following information applies to both the **Netwrix Password Secure certificate** and also to
your **own certificates:**

Alternative applicant

Communication between the client and server can only take place using the path that is stored in the
certificate with the alternative applicant. Therefore, the Netwrix Password Secure certificate
stores all IP addresses for the server, as well as the hostname. When creating your own certificate,
this information should also be saved under the alternative applicant.

NOTE: All information (including the IP address) are stored as DNS name.

#### Using the Netwrix Password Secure certificate

The name of the PSR certificate is **PSR8Server**. This can be done via the
[Basic configuration](/docs/passwordsecure/9.1/configuration/server-manager/basic-configuration.md)
in the AdminConsole. The certificate is saved locally under:

Local computer -> own certificates -> certificates

NOTE: The certificate is valid from its creation up to the year 9999 – and is thus valid almost
indefinitely. For this reason, it is not necessary to note any expiry date.

Distributing the Netwrix Password Secure certificate

In order for the certificate to be trusted, it can be exported to the server and then imported to
the clients. The following storage location needs to be selected here:

local computer -> trusted root certificate location -> certificates

The certificate can be both rolled out and distributed using group guidelines.

Manually importing the Netwrix Password Secure certificate

If the Netwrix Password Secure certificate is not rolled out, it is also possible to manually import
the certificate. To do this, firstly open the certificate information. In the warning notification,
the Show server certificate button is available for this purpose. In the following dialogue, select
the option Install certificate…

![installation_with_parameters_204_415x395](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_204_415x395.webp)

A **Certificate import wizard** will open in which **Local computer** should be selected.

![installation_with_parameters_205_555x405](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_205_555x405.webp)

In the next step, the storage location “trusted root certificate location” needs to be manually
selected.

![installation_with_parameters_206_556x406](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_206_556x406.webp)

Finally, the installation needs to be confirmed once again.

NOTE: The user logged in to the operating system requires rights to create certificates

#### Using your own certificate

If a CA already exists, you can also use your own certificate. You can specify this within the
[Basic configuration](/docs/passwordsecure/9.1/configuration/server-manager/basic-configuration.md).
Please note that a server certificate for SSL encryption is used here. The CA must be configured so
that all clients trust the certificate. It is necessary to adhere to the certification path.

**CAUTION:** When configuring, you must ensure that the clients can access the CA lock lists

Wildcard certificates

Wildcard certificates are not supported. In theory, it should be possible to use them but we cannot
help with the configuration. You can use wildcard certificates at your own responsibility.

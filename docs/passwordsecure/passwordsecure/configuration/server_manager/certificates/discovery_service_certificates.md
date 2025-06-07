# Discovery service certificates

## What is a discovery service certificate?

If a discovery service is created, a corresponding certificate is also created:

![installation_with_parameters_202](/static/img/product_docs/passwordsecure/passwordsecure/configuration/server_manager/certificates/installation_with_parameters_202.png)

NOTE: The discovery service certificate cannot be replaced by your own certificate.

NOTE: The certificates for the discovery service have an expiry date. However, this is not checked. The certificate thus does not need to be renewed.

__CAUTION:__ If the database is being moved to another server, it is __essential that the discovery service certificate is also transferred!__

#### Exporting and importing the certificate

The section [Certificates](/docs/product_docs/passwordsecure/passwordsecure/configuration/server_manager/certificates/certificates.md)explains how to back up the certificate and link it again.

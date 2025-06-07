# Password Reset certificates

## What is a Netwrix Password Secure certificate?

If a [Password Reset](/docs/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/password_reset.md) is created, a corresponding certificate is created. This ensures that the passwords are transferred in encrypted form.

![password-reset](/static/img/product_docs/passwordsecure/passwordsecure/configuration/server_manager/certificates/password-reset.png)

NOTE: The Password Reset certificate cannot be replaced by your own certificate.

NOTE: The certificates for the Password Reset have an expiry date. However, this is not checked. The certificate thus does not need to be renewed.

__CAUTION:__ If the database is being moved to another server, it is essential that all Password Reset certificate is also transferred!

#### Exporting and importing the certificate

The section [Certificates](/docs/product_docs/passwordsecure/passwordsecure/configuration/server_manager/certificates/certificates.md)explains how to back up the certificate and link it again.

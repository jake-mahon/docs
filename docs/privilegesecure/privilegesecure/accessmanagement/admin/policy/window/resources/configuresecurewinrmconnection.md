# Configure Secure WinRM Connection Window

Follow the steps to configure secure WinRM connection for the selected host:

__Step 1 –__ Navigate to the Resources page.

__Step 2 –__ Select the resource(s) to modify.

__Step 3 –__ Click the __WinRM Config__ button.

![winrmconfig](../../../../../../../../static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/window/resources/winrmconfig.webp)

__Step 4 –__ Perform the following steps:

- Choose certificate source – Select the source to apply the certificate for the secure WinRm connection to the desired host resource. The following options are available:

  - Import certificate from host;
  - Push NPS certificate to host;
  - Generate a new self-signed certificate .
- Select a certificate – Provide a certificate thumbprint.

__NOTE:__ This option is applicable to the host and NPS certificates. If you selected a new self-signed certificate option, it will be generated automatically and imported to Netwrix Privilege Secure.

__Step 5 –__ Click __Submit__.

Secure WinRM connection has been configured for the selected host.

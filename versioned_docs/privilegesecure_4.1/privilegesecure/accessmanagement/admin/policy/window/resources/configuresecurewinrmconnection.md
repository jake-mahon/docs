# Configure Secure WinRM Connection Window

Follow the steps to configure secure WinRM connection for the selected host:

**Step 1 –** Navigate to the Resources page.

**Step 2 –** Select the resource(s) to modify.

**Step 3 –** Click the **WinRM Config** button.

![winrmconfig](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/window/resources/winrmconfig.png)

**Step 4 –** Perform the following steps:

- Choose certificate source – Select the source to apply the certificate for the secure WinRm
  connection to the desired host resource. The following options are available:

    - Import certificate from host;
    - Push NPS certificate to host;
    - Generate a new self-signed certificate .

- Select a certificate – Provide a certificate thumbprint.

**NOTE:** This option is applicable to the host and NPS certificates. If you selected a new
self-signed certificate option, it will be generated automatically and imported to Netwrix Privilege
Secure.

**Step 5 –** Click **Submit**.

Secure WinRM connection has been configured for the selected host.

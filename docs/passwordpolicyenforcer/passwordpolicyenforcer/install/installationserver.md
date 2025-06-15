# Install Password Policy Enforcer on a Server

Password Policy Enforcer server should be installed on every domain controller to enforce the password policy for domain user accounts, or on individual servers and workstations to enforce the password policy for local user accounts.

If your domain contains some read-only domain controllers, then installation of Password Policy Enforcer on these servers is only necessary if you are using the following features:

- [Rules](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/rules.md)
- [Password Policy Client](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/password_policy_client.md)
- [Netwrix Password Reset](https://helpcenter.netwrix.com/category/passwordreset)
- [](/docs/passwordpolicyenforcer/passwordpolicyenforcer/web/web_overview.md)[Password Policy Enforcer Web](/docs/passwordpolicyenforcer/passwordpolicyenforcer/web/web_overview.md)

The Server installation package includes multiple features selected during installation:

- PPE Server – enforces password policies. It can be installed on Domain Controllers for domain password policy, or on servers and workstations for local account password policy.
- Configuration Console – manages policy configuration. Install where ever needed.
- Mailer Service – sends email reminders. Install on any server.

__Step 1 –__ Download the installation package from Netwrix.

__Step 2 –__ Extract the installers from the compressed file. If you are going to use Group Policy Manager to install Netwrix Password Policy Enforcer, copy the __msi__ files to a distribution folder. See the [Install with Group Policy Management](/docs/passwordpolicyenforcer/passwordpolicyenforcer/install/installationgpm.md) topic for additional details. You can also install/uninstall the products using command line [Silent Installation](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/command_line_interface.md#silent-installation).

__NOTE:__ Continue with these steps to install one or more features on your current server or domain controller. You must repeat these steps for each server where the features are installed.

__Step 3 –__ Click on the __Netwrix_PPE_Server__version__x64.msi__ installation package. The installer is launched.

![Server Setup](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/serversetup1.webp)

__Step 4 –__ Click __Next__.

![Server Setup](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/serversetup2.webp)

__Step 5 –__ Review the End-User License Agreement. Click __I accept the terms in the License Agreement__.

__Step 6 –__ Click __Next__.

![Server Setup](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/serversetup3.webp)

__Step 7 –__ Select the features to install. The required storage is shown for each selection.

- PPE Server – enforces password policies. It can be installed on Domain Controllers for domain password policy, or on servers and workstations for local account password policy. It is not selected by default.
- Configuration Console – manages policy configuration. Install where ever needed. Selected by default.
- Mailer Service – sends email reminders. Should be installed on a Domain Controller. It is not selected by default.

__Step 8 –__ The default location is shown. Click __Browse__ and select a new location if needed.

__Step 9 –__ Click __Next__.

![Server Setup](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/serversetup4.webp)

__Step 10 –__ Review your selections. Click __Back__ to make any changes. When ready, click __Install__.

![Server Setup](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/serversetup5.webp)

__Step 11 –__ Click __Finish__ when installation is complete. You are prompted to restart your system for the changes to take effect.

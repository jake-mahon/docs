# Configuring Login Page Disclaimer

Users can add a disclaimer message to the logon screen by adding a custom `Disclaimer.txt` file in
the Web folder in the Enterprise Auditor directory and configuring the `WebServer.exe.config` file.
Follow the steps to configure the optional disclaimer message:

**Step 1 –** Navigate to the Web folder of the installation directory:
` …\STEALTHbits\StealthAUDIT\Web`.

![Disclaimer.txt file added to the Web folder](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/disclaimertxt.webp)

**Step 2 –** Create a `Disclaimer.txt` file in the Web folder. Write a custom disclaimer that
displays on the login page for the Web Console.

- The text file must be named `Disclaimer.txt`. The disclaimer message option is not configured
  properly if using a text file with a different name.

![File Explorer WebServer.exe.config](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/webserverexeconfigfile.webp)

**Step 3 –** Locate the `WebServer.exe.config` file and open it.

![WebServer.exe.config file in Notepad](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/webserverexeconfigdisclaimer.webp)

**Step 4 –** Find the following line in the text:

```
<add key="ShowDisclaimerMessage" value="false"/>
```

**Step 5 –** Replace the value with `true` so that the line now reads as:

```
<add key="ShowDisclaimerMessage" value="true"/>
```

**Step 6 –** Save the changes to enable the disclaimer message on the Web Console login page.

![Web Console login page with disclaimer message](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/webconsolelogindisclaimer.webp)

**Step 7 –** To check if the disclaimer message was configured correctly, open the Web Console to
access the login page.

- If the disclaimer is configured correctly, the custom disclaimer message displays at the bottom of
  the login page.

The disclaimer message displays on the Web Console login page.

# Reports via the Web Console

The Web Console is where any reports which have been published can be viewed outside of the
Enterprise Auditor Console.

- Web Console – This console uses an embedded website for published reports. It provides a
  consolidated logon feature for viewing published reports, and accessing the Netwrix Access
  Information Center (when installed) and other Netwrix products.

The Enterprise Auditor installer places a Web folder at the root of the Enterprise Auditor
directory. This folder contains the Enterprise Auditor Web Server (WebServer.exe) that runs on the
Enterprise Auditor Console upon installation.

**NOTE:** The Enterprise Auditor Web Server service must run as an account that has access to the
Enterprise Auditor database. This may be a different account than the one used to connect Enterprise
Auditor to the database. If the Enterprise Auditor Vault service is running, the account running the
Web Server service must be an Enterprise Auditor Administrator. See the
[Vault](/docs/accessanalyzer/11.6/administration/settings/application.md) topic
for additional information.

The Web folder that the Enterprise Auditor installer places at the root of the Enterprise Auditor
directory also contains a `WebServer.exe.config` file. This file contains configurable parameters.

**CAUTION:** If encryption methods have been configured for Kerberos on the Enterprise Auditor
server but not on the service account running the Enterprise Auditor Web Server service, then users
will not be able to log-in to the Web Console and will receive an error message. See the
[Manage Kerberos Encryption Warning for the Web Console](/docs/accessanalyzer/11.6/installation/reports-configuration/authentication.md)
topic for additional information on configuring security polices to allow Kerberos encryption.

## Log into the Web Console

In order for a user to log into the Web Console, the user’s account must have the User Principal
Name (UPN) attribute populated within Active Directory. Then the user can login using domain
credentials. If multiple domains are being managed by the Netwrix Access Information Center, then
the username needs to be in the `domain\username` format.

Access to reports in the Web Console can be managed through the Role Based Access feature of
Enterprise Auditor (**Settings** > **Access**). The Web Administrator role and the Report Viewer
role grant access to the published reports. See the
[Role Based Access](/docs/accessanalyzer/11.6/administration/access-control/role-based-access.md)
topic for addition information.

**NOTE:** Access to the AIC and other Netwrix products is controlled from within those products.

The address to the Web Console can be configured within the Enterprise Auditor Console
(**Settings** > **Reporting**). The default address is `http://[hostname.domain.com]:8082`. From the
Enterprise Auditor Console server, it can be accessed at `http://localhost/` with any standard
browser. To access the Web Console from another machine in or connected to the environment, replace
localhost with the name of the Enterprise Auditor Console. See the
[Update Website URLs](/docs/accessanalyzer/11.6/installation/reports-configuration/security.md#update-website-urls)
topic for additional information.

**NOTE:** Any browser used to access the Web Console must have JavaScript allowed for the site. See
the
[Configure JavaScript Settings for the Web Console](/docs/accessanalyzer/11.6/administration/settings/reporting.md#configure-javascript-settings-for-the-web-console)
topic for additional information.

Follow the steps to login to the Web Console.

**Step 1 –** To open the Web Console page, use one of the following methods:

- From the Enterprise Auditor Console server – Click the Published Reports desktop icon
  (`http://localhost:8082`)
- For remote access – Enter one of the following URLs into a web browser:

  http://[machinename]:8082

  https://[machinename]:8082

**NOTE:** The URL that is used may need to be added to the browser’s list of trusted sites.

![Web Console Login page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/webconsolelogin.webp)

**Step 2 –** Enter your **User Name** and **Password**. Click **Login**.

![Web Console Home page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/webconsolehome.webp)

The home page shows the solutions with published reports available. See the
[Web Console](/docs/accessanalyzer/11.6/accessanalyzer/admin/report/view.md#web-console)
topic for information on using the Web Console.

# Securing the Web Console

Published reports can be accessed in the Web Console. There are several options for enhancing
security.

Additional configuration options for enhanced security include:

- Enable SSL – The `BindingUrl` parameter shows the port used by the Enterprise Auditor web server
  for SSL reports. If SSL is enabled, the value will be HTTPS instead of HTTP.
- Enable Multiple Domain Access – The `AuthenticationDomains` parameter allows the Web Console to be
  accessed from multiple domains. By default this parameter is blank, allowing only domain users
  from the domain where the Enterprise Auditor Console resides to access the Web Console.
- Enable Single Sign-On – The `WindowsAuthentication` parameter allows domain users to be
  automatically logged into the Web Console. By default this parameter is set to `false`, which
  requires domain users to login each time the Web Console is accessed. See the
  [Enable Single Sign-On](/docs/accessanalyzer/11.6/installation/reports-configuration/sso-setup.md)
  topic for additional information.

  **NOTE:** The Web Console also supports using Microsoft Entra ID single sign-on. See the
  [Microsoft Entra ID Single Sign-On](/docs/accessanalyzer/11.6/installation/reports-configuration/sso-setup.md)
  topic for additional information.

These parameters can be configured within the **WebServer.exe.config** file in the Web folder of the
Enterprise Auditor installation directory `…\STEALTHbits\StealthAUDIT\Web`.

## Enable SSL for the Web Console

To enable Secure Sockets Layer (SSL) for secure, remote connections to the Web Console it is
necessary to bind a certificate to the port. See the
[Use a Self-Signed Certificate for SSL](#use-a-self-signed-certificate-for-ssl) topic for more
information. Follow the steps on the server where Enterprise Auditor is installed to enable SSL for
the Web Console.

**NOTE:** The following steps require a certificate to be available. Organizations typically have
one or more system administrators responsible for Public Key Infrastructure (PKI) and certificates.
To continue with this configuration it will first be necessary to confer with the PKI administrator
to determine which certificate method will conform to the organization’s security policies.
Optionally, see [Use a Self-Signed Certificate for SSL](#use-a-self-signed-certificate-for-ssl) for
an Administrator PowerShell command which will both create and import a self-signed certificate.

**Step 1 –** Import the certificate to the hosting server using the Certificate Management MMC
snap-in.

**NOTE:** If using a self-signed certificate, it will also need to be imported.

**Step 2 –** Create an SSL binding. It is necessary to use the certificate’s **Hash** value for the
`$certHash` value:

**NOTE:** The following Administrator PowerShell dir command can be run on the certificate's “drive”
to find the **Hash** value of a certificate which was already created and the output will include
the Thumbprint (**Hash**) value and the certificate name:

```
dir cert:\localmachine\my
```

- Run the following command using Administrator PowerShell to create the SSL binding, with the
  appropriate `certHash` value:

  ```
  $guid = "bdd5710f-7cbe-4f85-b8c1-da4bddf485a8"
  $certHash = "80F78FD2566793D2F39E748CDF6DED09B6F57A82" # the 'Thumbprint' value
  $ip = "0.0.0.0" # this means all IP addresses
  $port = "8082" # the default HTTPS port
  "http add sslcert ipport=$($ip):$port certhash=$certHash appid={$guid}" | netsh
  ```

**Step 3 –** Open the **WebServer.exe.config** file with a text editor, for example Notepad. It is
located within the Web folder of the Enterprise Auditor installation directory.

![WebServer.exe.config file in Notepad](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/webserverexeconfig.webp)

**Step 4 –** Change the value for the `BindingUrl` parameter from `http` to `https`:

```
<add key="BindingUrl" value="https://+:8082" />
```

- After changing the `BindingUrl` value in the **WebServer.exe.config** file, the Website URL must
  be updated to match the new value in the following places:
  - Enterprise Auditor's **Settings** > **Reporting** node
  - Enterprise Auditor's Published Reports Desktop icon properties
  - See the [Update Website URLs](#update-website-urls) topic for additional information.

**Step 5 –** Save and close the file.

**Step 6 –** Navigate to Services (`services.msc`). Restart the Netwrix Enterprise Auditor Web
Server service.

**NOTE:** If also using the AIC, then SSL needs to be enabled for the AIC using this certificate.
See the Securing the AIC section of the
[Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
for additional information.

The Web Console has been enabled for SSL communication. Access it using the server’s fully qualified
domain name and the HTTPS port (`https://[hostname.domain.com]:8082`). If a self-signed certificate
was used, then the client-side access to the Web Console will generate a Certificate error. See the
[Add the Certificate for Client-Side Access](#add-the-certificate-for-client-side-access) topic for
additional information.

### Update Website URLs

If the Binding URL value is updated in Enterprise Auditor's **WebServer.exe.config** file, the
Website URL must be updated to match the new value in the following places:

- Enterprise Auditor's Reporting node (**Settings** > **Reporting**)
- Enterprise Auditor's Published Reports Desktop icon properties

Update the Website URL in the Reporting Node

Follow the steps to update the Website URL in the **Settings** > **Reporting** node.

**Step 1 –** Expand **Settings** and select the **Reporting** node.

![Access Governance Reporting Settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/websiteurlreporting.webp)

**Step 2 –** In the **Website URL** box, update the URL to: `https://[hostname.domain.com]:8082`

**Step 3 –** Click **Save**.

The Website URL is now updated.

Update the URL in the Published Reports Desktop Icon Properties

Follow the steps to update the URL in the Published Reports desktop icon's Published Report's
Properties window.

**Step 1 –** Right click on the **Published Reports** desktop shortcut and click **Properties**.

![Published Reports desktop icon properties](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/publishedreportsproperties.webp)

**Step 2 –** On the **Web Document** tab, update the **URL** in the text box to:
`https://localhost:8082/`

**Step 3 –** Click **Apply** and then **OK** to exit.

The URL is now updated.

### Remove Certificate from the Port

Remove or unbind the certificate from the port by running the following Administrator PowerShell
command:

```
netsh http delete sslcert ipport=0.0.0.0:8082 # ip and port used when binding
```

### List SSL Certificate Bindings

You can run the following PowerShell command to list all SSL certificate bindings and use this to
validate which certificates are bound to specific ports:

```
netsh http show sslcert
```

## Use a Self-Signed Certificate for SSL

If you want to use a self-signed certificate, use the `New-SelfSignedCertificate` cmdlet, which is
available in Administrator PowerShell 3.0+ to generate and import the certificate:

```
New-SelfSignedCertificate -DnsName machinename.domain.com -CertStoreLocation Cert:\LocalMachine\My
```

The output will show this info:

`Thumbprint                                Subject`

`----------                                -------`

`80F78FD2566793D2F39E748CDF6DED09B6F57A82  CN=machinename.domain.com`

The Thumbprint value is the certificate **Hash** value to be used when binding to the port. The port
can be the same as in HTTP (8082). Use this **Hash** value for Step 2 of the
[Enable SSL for the Web Console](#enable-ssl-for-the-web-console) instructions.

Creation and import of the self-signed certificate can be validated in Microsoft Management Console.
Follow these steps to confirm the certificate is in Microsoft Management Console.

**Step 1 –** Open Microsoft Management Console (`mmc.exe`).

![Microsoft Management Console Certificates snap-in](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/certificateaddsnapin.webp)

**Step 2 –** Select **File** > **Add/Remove Snap-in**. The Add or Remove Snap-ins window opens.
Select **Certificates**, and click **Add**. Then select **Computer account** in the Certificates
snap-in window.

![Microsoft Management Console Certificates snap-in Select Computer dialog](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/certificateselectcomputer.webp)

**Step 3 –** Click **Next** and select **Local computer**. Click **Finish**.

![Microsoft Management Console Certificates Add or Remove Snap-ins window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/certificatesnapins.webp)

**Step 4 –** The certificate will appear in the Selected snap-ins list in the Add or Remove Snap-ins
window. Click **OK** to close the window.

**Step 5 –** Navigate to **Certificates** > **Personal** > **Certificates**. The certificate should
show in the pane on the right.

The self-signed certificate was created and imported. Repeat these steps for each client-side host.

### Add the Certificate for Client-Side Access

When you open the Web Console with SSL enabled, the web browser shows a Your connection isn't
private warning message. This can be removed by importing the certificate onto the client server.

Follow the steps to remove the certificate error.

**Step 1 –** Open the Web Console in your browser.

![Your connection isn't private warning in Microsoft Edge](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/certificateconnectionnotprivate.webp)

**Step 2 –** Click **Advanced**, and then use the link to continue to the site. This loads the main
page of the Web Console.

![Access Certificat Viewer from Not Secure error in Microsoft Edge address bar](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/certificatenotsecureerror.webp)

**Step 3 –** Click the **Not Secure** warning in the browser's address bar. Open the Certificate
Viewer from the warning details.

- In Microsoft Edge, click the **Your Connection to this site isn't secure** section, and then click
  the certificate icon.
- In Google Chrome, click **Certificate is not valid**.

![Web browser Certificate Viewer window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/certificateviewer.webp)

**Step 4 –** On the Details tab of the Certificate Viewer, click **Export**. Save the security
certificate and close the Certificate Viewer.

![Certificate window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/certificatewindow.webp)

**Step 5 –** Navigate to the save location from the previous step and open the exported security
certificate. On the Certificate window, click **Install Certificate**. The Certificate Import Wizard
opens.

![Certificate Import Wizard](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/certificateimportwizard.webp)

**Step 6 –** On the Certificate Import Wizard, select the Store Location as **Local Machine**, and
click **Next**. Keep the default selection of **Automatically select the certificate store based on
the type of certificate**. Navigate through the wizard to save this configuration. A pop-up message
should state that the import was successful. Click **OK** to close out all dialogs.

![Microsoft Management Console Trusted Root Certification Authorities Certificates](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/addcertificateconsole.webp)

**Step 7 –** In the Microsoft Management Console, check the **Trusted Root Certification
Authorities** > **Certificates**. The self-signed certificate should now be listed there.

The client-side access to the Web Console will no longer generate a certificate error. Repeat these
steps for each client-side host.

# Timeout Parameter for the Web Console

The Web Console is configured with a default timeout parameter of 15 minutes. This can be configured
within the **WebServer.exe.config** file in the Web folder of the Enterprise Auditor installation
directory:

…\STEALTHbits\StealthAUDIT\Web

Follow the steps to modify the timeout parameter for the Web Console.

**Step 1 –** Open the **WebServer.exe.config** file with a text editor, for example Notepad.

![WebServer.exe.config file in Notepad](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/webserverexeconfigtimeout.webp)

**Step 2 –** Change the value for the `SessionTimeout` parameter to the desired number of minutes:

```
<add key="SessionTimeout" value="15" />
```

**Step 3 –** Save and close the file.

The Web Console session will timeout after this many minutes of inactivity. This value will take
precedence over session timeout values set within the product consoles, for example the AIC, when
accessed through the Web Console.

# Securing the Web Console

Published reports can be accessed in the Web Console. There are several options for enhancing security.

Additional configuration options for enhanced security include:

- Enable SSL – The ```BindingUrl``` parameter shows the port used by the Access Analyzer web server for SSL reports. If SSL is enabled, the value will be HTTPS instead of HTTP.
- Enable Multiple Domain Access – The ```AuthenticationDomains``` parameter allows the Web Console to be accessed from multiple domains. By default this parameter is blank, allowing only domain users from the domain where the Access Analyzer Console resides to access the Web Console.
- Enable Single Sign-On – The ```WindowsAuthentication``` parameter allows domain users to be automatically logged into the Web Console. By default this parameter is set to ```false```, which requires domain users to login each time the Web Console is accessed. See the [Enable Single Sign-On](/docs/accessanalyzer/enterpriseauditor/install/application/reports/sso.md) topic for additional information.

  __NOTE:__ The Web Console also supports using Microsoft Entra ID single sign-on. See the [Microsoft Entra ID Single Sign-On](/docs/accessanalyzer/enterpriseauditor/install/application/reports/entraidsso.md) topic for additional information.

These parameters can be configured within the __WebServer.exe.config__ file in the Web folder of the Access Analyzer installation directory ```…\STEALTHbits\StealthAUDIT\Web```.

## Enable SSL for the Web Console

To enable Secure Sockets Layer (SSL) for secure, remote connections to the Web Console it is necessary to bind a certificate to the port. See the [Use a Self-Signed Certificate for SSL](#use-a-self-signed-certificate-for-ssl) topic for more information. Follow the steps on the server where Access Analyzer is installed to enable SSL for the Web Console.

__NOTE:__ The following steps require a certificate to be available. Organizations typically have one or more system administrators responsible for Public Key Infrastructure (PKI) and certificates. To continue with this configuration it will first be necessary to confer with the PKI administrator to determine which certificate method will conform to the organization’s security policies. Optionally, see [Use a Self-Signed Certificate for SSL](#use-a-self-signed-certificate-for-ssl) for an Administrator PowerShell command which will both create and import a self-signed certificate.

__Step 1 –__ Import the certificate to the hosting server using the Certificate Management MMC snap-in.

__NOTE:__ If using a self-signed certificate, it will also need to be imported.

__Step 2 –__  Create an SSL binding. It is necessary to use the certificate’s __Hash__ value for the ```$certHash``` value:

__NOTE:__ The following Administrator PowerShell dir command can be run on the certificate's “drive” to find the __Hash__ value of a certificate which was already created and the output will include the Thumbprint (__Hash__) value and the certificate name:

```
dir cert:\localmachine\my
```

- Run the following command using Administrator PowerShell to create the SSL binding, with the appropriate ```certHash``` value:

  ```
  $guid = "bdd5710f-7cbe-4f85-b8c1-da4bddf485a8"  
  $certHash = "80F78FD2566793D2F39E748CDF6DED09B6F57A82" # the 'Thumbprint' value  
  $ip = "0.0.0.0" # this means all IP addresses  
  $port = "8082" # the default HTTPS port  
  "http add sslcert ipport=$($ip):$port certhash=$certHash appid={$guid}" | netsh
  ```

__Step 3 –__ Open the __WebServer.exe.config__ file with a text editor, for example Notepad. It is located within the Web folder of the Access Analyzer installation directory.

![WebServer.exe.config file in Notepad](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/webserverexeconfig.png)

__Step 4 –__ Change the value for the ```BindingUrl``` parameter from ```http``` to ```https```:

```
<add key="BindingUrl" value="https://+:8082" />
```

- After changing the ```BindingUrl``` value in the __WebServer.exe.config__ file, the Website URL must be updated to match the new value in the following places:
  - Access Analyzer's __Settings__ > __Reporting__ node
  - Access Analyzer's Published Reports Desktop icon properties
  - See the [Update Website URLs](#update-website-urls) topic for additional information.

__Step 5 –__ Save and close the file.

__Step 6 –__ Navigate to Services (```services.msc```). Restart the Netwrix Access Analyzer (formerly Enterprise Auditor) Web Server service.

__NOTE:__ If also using the AIC, then SSL needs to be enabled for the AIC using this certificate. See the Securing the AIC section of the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter) for additional information.

The Web Console has been enabled for SSL communication. Access it using the server’s fully qualified domain name and the HTTPS port (```https://[hostname.domain.com]:8082```). If a self-signed certificate was used, then the client-side access to the Web Console will generate a Certificate error. See the [Add the Certificate for Client-Side Access](#add-the-certificate-for-client-side-access) topic for additional information.

### Update Website URLs

If the Binding URL value is updated in Access Analyzer's __WebServer.exe.config__ file, the Website URL must be updated to match the new value in the following places:

- Access Analyzer's Reporting node (__Settings__ > __Reporting__)
- Access Analyzer's Published Reports Desktop icon properties

Update the Website URL in the Reporting Node

Follow the steps to update the Website URL in the __Settings__ > __Reporting__ node.

__Step 1 –__ Expand __Settings__ and select the __Reporting__ node.

![Access Governance Reporting Settings page](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/websiteurlreporting.png)

__Step 2 –__ In the __Website URL__ box, update the URL to: ```https://[hostname.domain.com]:8082```

__Step 3 –__  Click __Save__.

The Website URL is now updated.

Update the URL in the Published Reports Desktop Icon Properties

Follow the steps to update the URL in the Published Reports desktop icon's Published Report's Properties window.

__Step 1 –__ Right click on the __Published Reports__ desktop shortcut and click __Properties__.

![Published Reports desktop icon properties](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/publishedreportsproperties.png)

__Step 2 –__ On the __Web Document__ tab, update the __URL__ in the text box to: ```https://localhost:8082/```

__Step 3 –__  Click __Apply__ and then __OK__ to exit.

The URL is now updated.

### Remove Certificate from the Port

Remove or unbind the certificate from the port by running the following Administrator PowerShell command:

```
netsh http delete sslcert ipport=0.0.0.0:8082 # ip and port used when binding
```

### List SSL Certificate Bindings

You can run the following PowerShell command to list all SSL certificate bindings and use this to validate which certificates are bound to specific ports:

```
netsh http show sslcert
```

## Use a Self-Signed Certificate for SSL

If you want to use a self-signed certificate, use the ```New-SelfSignedCertificate``` cmdlet, which is available in Administrator PowerShell 3.0+ to generate and import the certificate:

```
New-SelfSignedCertificate -DnsName machinename.domain.com -CertStoreLocation Cert:\LocalMachine\My
```

The output will show this info:

```Thumbprint                                Subject```

```----------                                -------```

```80F78FD2566793D2F39E748CDF6DED09B6F57A82  CN=machinename.domain.com```

The Thumbprint value is the certificate __Hash__ value to be used when binding to the port. The port can be the same as in HTTP (8082). Use this __Hash__ value for Step 2 of the [Enable SSL for the Web Console](#enable-ssl-for-the-web-console) instructions.

Creation and import of the self-signed certificate can be validated in Microsoft Management Console. Follow these steps to confirm the certificate is in Microsoft Management Console.

__Step 1 –__ Open Microsoft Management Console (```mmc.exe```).

![Microsoft Management Console Certificates snap-in](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/certificateaddsnapin.png)

__Step 2 –__ Select __File__ > __Add/Remove Snap-in__. The Add or Remove Snap-ins window opens. Select __Certificates__, and click __Add__. Then select __Computer account__ in the Certificates snap-in window.

![Microsoft Management Console Certificates snap-in Select Computer dialog](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/certificateselectcomputer.png)

__Step 3 –__ Click __Next__ and select __Local computer__. Click __Finish__.

![Microsoft Management Console Certificates Add or Remove Snap-ins window](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/certificatesnapins.png)

__Step 4 –__ The certificate will appear in the Selected snap-ins list in the Add or Remove Snap-ins window. Click __OK__ to close the window.

__Step 5 –__ Navigate to __Certificates__ > __Personal__ > __Certificates__. The certificate should show in the pane on the right.

The self-signed certificate was created and imported. Repeat these steps for each client-side host.

### Add the Certificate for Client-Side Access

When you open the Web Console with SSL enabled, the web browser shows a Your connection isn't private warning message. This can be removed by importing the certificate onto the client server.

Follow the steps to remove the certificate error.

__Step 1 –__ Open the Web Console in your browser.

![Your connection isn't private warning in Microsoft Edge](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/certificateconnectionnotprivate.png)

__Step 2 –__ Click __Advanced__, and then use the link to continue to the site. This loads the main page of the Web Console.

![Access Certificat Viewer from Not Secure error in Microsoft Edge address bar](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/certificatenotsecureerror.png)

__Step 3 –__ Click the  __Not Secure__ warning in the browser's address bar. Open the Certificate Viewer from the warning details.

- In Microsoft Edge, click the __Your Connection to this site isn't secure__ section, and then click the certificate icon.
- In Google Chrome, click __Certificate is not valid__.

![Web browser Certificate Viewer window](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/certificateviewer.png)

__Step 4 –__ On the Details tab of the Certificate Viewer, click __Export__. Save the security certificate and close the Certificate Viewer.

![Certificate window](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/certificatewindow.png)

__Step 5 –__ Navigate to the save location from the previous step and open the exported security certificate. On the Certificate window, click __Install Certificate__. The Certificate Import Wizard opens.

![Certificate Import Wizard](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/certificateimportwizard.png)

__Step 6 –__  On the Certificate Import Wizard, select the Store Location as __Local Machine__, and click __Next__. Keep the default selection of __Automatically select the certificate store based on the type of certificate__. Navigate through the wizard to save this configuration. A pop-up message should state that the import was successful. Click __OK__ to close out all dialogs.

![Microsoft Management Console Trusted Root Certification Authorities Certificates](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/addcertificateconsole.png)

__Step 7 –__ In the Microsoft Management Console, check the __Trusted Root Certification Authorities__ > __Certificates__. The self-signed certificate should now be listed there.

The client-side access to the Web Console will no longer generate a certificate error. Repeat these steps for each client-side host.

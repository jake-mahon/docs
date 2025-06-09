# Configuring the Web Console to use ADFS

The Access Analyzer Webserver and Access Information Center are able to support Single-Sign-On (SSO) leveraging WSFederation with SAML tokens. This guide contains steps for implementing SSO using Active Directory Federation Services (ADFS).

Follow the steps to configure the Web Console to use ADFS authentication:

__NOTE:__ A certificate from the ADFS server is required. Confer with a PKI administrator to determine which certificate method will conform to the organization's security policies.

__Step 1 –__ Import the certificate for the ADFS server onto the hosting server using the Certificate Management MMC snap-in.

- If used, self-signed certificates will also need to be imported

__Step 2 –__ On the ADFS server, open __AD FS Management__.

__Step 3 –__ Navigate to __Relying Party Trusts__ and click __Add Relying Part Trust...__. Use the Add Relying Party Trust Wizard to configure the relying party trust:

- On the Welcome page, select __Claims aware__ and click __Start__.
- On the Select Data Source page, select __Enter data about the relying party manually__ and click __Next__.
- On the Specify Display Name page, enter a display name for the relying party trust. Click __Next__.
- On the Configure URL page, do not select any options and click __Next__.

  ![Identifier added on the Configure Identifiers page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/relyingpartytrustwizardidentifier.png)
- On the Configure Identifiers page, add an identifier of ```https://``` followed by the fully qualified domain name (FQDN) of your ADFS server.

  - For example, ```https://app0290.train90.local```
- Click __Next__ to proceed through the remaining wizard pages and complete the wizard.

![Add an Endpoint window](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/addanendpointwindow.png)

__Step 4 –__ Double-click on the newly added relying party trust to open it's Properties window. Navigate to the Endpoints tab and click __Add WS-Federation__. On the Add an Endpoint window, add ```https://`<FQDN of the web server>`:`<port number>`/federation``` as the Trusted URL, then click __OK__.

- For example, ```https://app0190.train90.local:8082/federation```

Click __OK__ to save the changes and close the properties window.

__Step 5 –__ Select the relying party trust, and click __Edit Claim Issuance Policy__ on the right-hand panel.

- On the Edit Claim Issuance Policy window, click __Add Rule__.
- On the Choose Rule Type page of the Add Transform Claim Rule Wizard, select __Send LDAP Attributes as Claims__ as the Claim rule template. Click __Next__.

  ![Configure Claim Rule page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/claimrulenameadfsconfig.png)
- On the Configure Claim Rule page, enter a name in the __Claim rule name__ field.

If the SID claim is not configured by default, add it to the Claim Description as follows:

![Configure Claim Rule SID Properties](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/claimrulenamesidproperties.png)

__Step 6 –__ Navigate to the Access Analyzer installation directory and open the ```WebServer.exe.config``` file in a text editor.

![WebServer.exe.config file in Notepad](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/webserverexeconfigadfs.png)

__Step 7 –__  In the ```WebServer.exe.config``` file, change the following parameters:

- ```WsFederationMetadata``` – Change the value to the following:

  ```
  <add key="WsFederationMetadata" value="https://ADFSServer.domain.com/FederationMetadata/2007-06/FederationMetadata.xml" />
  ```
- ```WsFederationRealm``` – Replace the value text with the URL entered for the Relying Party Trust in Step 3:

  ```
  <add key="WsFederationRealm" value="INSERT VALUE HERE" />
  ```

  ![URL required for WsFederationRealm attribute](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/wsfederationrealmurl.png)

  You can retrieve the URL value from the Identifiers tab of the relying party trust properties window.
- ```WsFederationReply``` – Replace the value text with the Trusted URL entered for the Endpoint in Step 4:

  ```
  <add key="WsFederationReply" value="INSERT VALUE HERE" />
  ```

  ![URL required for WsFederationReply attribute](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/wsfederationreplyurl.png)

  You can obtain the URL required for this parameter from the Endpoints tab of the relying party trust properties window. Select the endpoint and click __Edit__ to open the Edit Endpoint window.

The following is an example of how the parameters should look when configured in the config file:

```
<add key="WsFederationMetadata" value="https://app0290.train90.local/FederationMetadata/2007-06/FederationMetadata.xml" />  
<add key="WsFederationRealm" value="https://app0290.train90.local" />   
<add key="WsFederationReply" value="https://app0190.train90.local:8082/federation" /> 
```

__Step 8 –__ Save the changes in the ```WebServer.exe.config``` file.

__Step 9 –__ Navigate to Services (```services.msc```). Restart the __Access Analyzer Web Server__ service.

ADFS authentication is now enabled for Access Analyzer.

## Update the Published Reports URL for ADFS

If ADFS does not accept ```http://localhost:8082/``` as an acceptable path, the path will need to be updated in the Published Reports properties window. Follow the steps to configure the Published Reports URL for ADFS:

__Step 1 –__ Right-click the Published Reports shortcut on the desktop and select __Properties__.

![Published Reports desktop shortcut properties](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/publishedreportsproperties.png)

__Step 2 –__ Replace the URL with ```https://SAWebConsole.domain.com:8082```.

__Step 3 –__ Click __Apply__. Exit the window.

The Published Reports URL is now configured for ADFS.

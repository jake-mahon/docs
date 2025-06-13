# Application Settings

This section describes the settings available in the server's ```appsettings.json``` file, located in the server's working directory or in environment variables.

JSON files can contain any additional information that you might find useful. See the example below.

> For example, in order to store the agent's address, we can add:
>
> ```
>
> appsettings.json
>
> "UsercubeAgent": {
>   "Url": "http://localhost:1234"
> }
>
> ```
>
> As Usercube does not know any object named ```UsercubeAgent```, its content will be ignored, but it can still be used to store information for human use.

The ```appsettings``` set allows the following attributes and sections:

| Name | Details |
| --- | --- |
| ApplicationUri   required | __Type__    String   __Description__ URI of the server to use in log messages, to communicate with the server in tasks, to allow certain redirect URIs.   __Note:__ must be the same as the agent's ```appsettings.json```'s ```ApplicationUri```. __Example__``` appsettings.json   {     �     "ApplicationUri": "usercubeserver.contoso.com:5000"   } ``` |
| EncryptionCertificate   required | __Type__    [EncryptionCertificate](#EncryptionCertificate)    __Description__ Settings to configure the encryption of specific files. |
| License   required | __Type__    String   __Description__ License key of the server. __Example__``` appsettings.json   {     �     "License": "{"LicensedTo":"Demo","ValidTo":"20120905","IdentityQuota":"10000","Signature":"�"}"   } ``` |
| Agents   optional | __Type__    Agent List   __Description__ List of [agents](/versioned_docs/usercube_6.1/usercube/integration-guide/architecture/index.md)' settings used to work on several environments.   __Info:__ this way, each agent's URI/URL is configured without altering the database. __Example__``` appsettings.json   {     �     "Agents": {       "Local": {         "Uri": "http://localhost:5010"       },       �     }   } ``` |
| AppDisplay   optional | __Type__    [AppDisplay](#AppDisplay)    __Description__ Settings to override the [application display](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/index.md) XML configuration.   __Info:__ useful to change the application's theme and name without redeploying the whole configuration. |
| ApplicationInsights   optional | __Type__    [ApplicationInsights](#ApplicationInsights)    __Description__ Settings to plug to and configure the [AppInsights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview) monitoring tool. |
| DataProtection   optional | __Type__    [DataProtection](#DataProtection)    __Description__ Settings to configure the encryption used for the authentication cookies and the anti-forgery tokens.   __Info:__ data protection can be configured to share the keys between several instances of Usercube's server, for example when deployed in a cluster where the servers do not have the same machine id. |
| InstallationDirectoryPath   default value: Usercube-Server.exe | __Type__    String   __Description__ Path of the installation directory.   __Info:__ used to read other configuration files. __Example__``` appsettings.json   {     �    "InstallationDirectoryPath": "C://UsercubeContoso/Runtime"   } ``` |
| MailSettings   optional | __Type__    [MailSettings](#MailSettings)    __Description__ Settings to configure the email service. |
| NotUseAgent   default value: false | __Type__    Boolean   __Description__ ```True``` to disable the use of the [agent](/versioned_docs/usercube_6.1/usercube/integration-guide/architecture/index.md). __Example__``` appsettings.json   {     �     "NotUseAgent":  true   } ``` |
| OpenIdClients   optional | __Type__    OpenIdClient List   __Description__ List of hashed secrets used to override the plain-text secrets from the [OpenIdClient](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md) XML configuration.   __Info:__ this way, Usercube stores only hashed secrets, for security purposes.   __Note:__ each environment must have its own secret, distinct from the others. __Example__``` appsettings.json   {     �     "OpenIdClients": {       "Job": {         "HashedSecret": "K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols"       },       "PowerBI": {         "HashedSecret": "7b8N2NWka5alDrjM7rFqf7+xqq9LIcT5jSoQ+1Ci2V0"       }     }   } ``` |
| PowerBISettings   optional | __Type__    [PowerBISettings](#PowerBISettings)    __Description__ Settings to configure the API used by Power BI to access Usercube data. |
| Serilog   optional | __Type__    [Serilog](/versioned_docs/usercube_6.1/usercube/integration-guide/monitoring/index.md)    __Description__ Settings to configure the logging service, complying to the [Logger](/versioned_docs/usercube_6.1/usercube/integration-guide/monitoring/index.md#Logger) properties and structure. __Example__``` appsettings.json   {     �     "Serilog": {       "WriteTo": [ "Console" ],       "MinimumLevel": {         "Default": "Error",         "Override": {           "Usercube": "Information"         }       }     }   } ``` |
| Swagger   optional | __Type__    [Swagger](#Swagger)    __Description__ Enabling [Swagger](https://swagger.io/tools/swagger-ui/) enables visualizing and interacting with the API's resources without having any of the implementation logic in place.   __Info:__ it is automatically generated from Usercube's API, with the visual documentation making it easy for back-end implementation and client-side consumption. |
| TempFolderPath   default value: ../Temp | __Type__    String   __Description__ Path to the temporary folder which contains:   - ```ExportOutput```: directory storing data exported from connectors. - ```JobLogs```: directory storing task instance logs. - ```Reports```: directory storing generated reports. - ```Packages```: directory storing the downloaded package logos. - ```PolicySimulations```: directory storing the files generated by policy simulations. - ```ProvisioningCache.txt```: file storing the clustered provisioning cache. __Note:__ when enabled, this file can be used to coordinate the API cache among clusters. - ```CorrelationCache.txt``` - ```RiskCache.txt``` - ```ExpressionCache.txt``` - ```scheduler.lock``` - ```connector.txt``` - ```container.reset.txt```: file acting as a reset command for Usercube's server, i.e. any change to this file triggers the reset service, thus reloading all the services instantiated by the server. __Note:__ this path can be overridden by __ResetSettings__ > __FilepathResetService__. - ```Mails```: directory storing the email messages. __Note:__ this path can be overridden by __ResetSettings__ > __PickupDirectory__. - ```Deployment```   __Note:__ these elements can be removed, but make sure to restart the server after doing so. __Example__``` appsettings.json   {     �     "TempFolderPath": "../Temp"   } ``` |
| WorkFolderPath   default value: ../Work | __Type__    String   __Description__ Path of the work folder which contains:   - ```Collect```: directory storing the CSV source files exported by connectors. - ```ProvisioningOrders```: directory storing the orders generated by the server. - ```FulfillPowerShell```: PowerShell provisioner's working directory. - ```FulfillRobotFramework```: Robot Framework's provisioner working directory. - ```ExportCookies```: directory storing the cookies used for incremental export. - ```Synchronization```: directory storing the agent's data collection results. - ```Upload```: directory storing the uploaded media like uploaded pictures, before they are inserted into the database. - ```appsettings.connection.json```   __Note:__ these elements must not be removed, because doing so may disrupt Usercube's execution after restarting. __Example__``` appsettings.json   {     �     "WorkFolderPath": "../Work"   } ``` |

## Swagger

| Name | Details |
| --- | --- |
| Enabled   required | __Type__    Boolean   __Description__ ```True``` to enable Swagger. __Example__``` appsettings.json   {     �     "Swagger": {       "Enabled": false     },   } ``` |

## EncryptionCertificate

This information can be set one of two ways:

- As a [Public Key Cryptography Standards (PKCS) #12](https://en.wikipedia.org/wiki/PKCS_12) archive (also called [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files) or ```.pfx``` file) stored in the _Agent_'s host file system. The archive contains both the public key certificate and the private key.
- As a certificate from a Windows' [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store) identified by _SubjectDistinguishedName_ or by _Thumbprint_. The Windows certificate also contains both the public key certificate and the private key.

  NETWRIX recommends using Windows' certificate store.
    
  On the other hand, the PFX file takes priority over Windows' certificate, which means that when ```File``` is specified then the PFX certificate is used, even if the options for Windows' certificate are specified too.
    
  In both ways, missing and/or incorrect settings trigger an error and no certificate is loaded.

#### As a PFX file

> For example:
>
> ```
>
> {
>     ...
>     "EncryptionCertificate": {
>         "File": "C:/UsercubeAgentContoso/contoso.pfx",
>         "Password": "oarjr6r9f00"
>      }
>  }
>
> ```

The archive is set using the following attributes:

| Name | Details |
| --- | --- |
| File   required | __Type__    String   __Description__ [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the host file system. |
| Password   optional | __Type__    String   __Description__ [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password. |

Storing a ```.pfx``` file password in plain text in a production environment is strongly discouraged. It should always be encrypted using the [Usercube-Protect-CertificatePassword tool](/versioned_docs/usercube_6.1/usercube/integration-guide/executables/references/protect-certificatepassword/index.md).

The archive is set using the following attributes:

| Name | Details |
| --- | --- |
| File   required | __Type__    String   __Description__ [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the host file system. |
| Password   optional | __Type__    String   __Description__ [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password.   __Info:__ storing a ```.pfx``` file's password in plain text in a production environment is strongly discouraged. It should always be encrypted using the [```Usercube-Protect-CertificatePassword.exe``` tool](/versioned_docs/usercube_6.1/usercube/integration-guide/executables/references/protect-certificatepassword/index.md). |

#### As a Certificate in the Windows Store

> For example:
>
> ```
>
>  {
>     ...
>     "EncryptionCertificate": {
>          "DistinguishedName":"UsercubeContoso",
>          "StoreLocation": "LocalMachine",
>          "StoreName": "AuthRoot"
>      }
>  }
>
> ```

The Windows certificate is set using these attributes:

| Name | Details |
| --- | --- |
| DistinguishedName   optional | __Type__    String   __Description__ _SubjectDistinguishedName_ of the store certificate.   __Note:__ required when ```Thumbprint``` is not specified. |
| Thumbprint   optional | __Type__    String   __Description__ _Thumbprint_ of the store certificate.   __Note:__ required when ```DistinguishedName``` is not specified. |
| StoreLocation   required | __Type__    String   __Description__ Location of the relevant Windows certificate store: ```LocalMachine``` or ```CurrentUser```. |
| StoreName   required | __Type__    String   __Description__ Name of the relevant Windows certificate store. |

#### Using Azure Key Vault

If the certificate is saved in Azure Key Vault, we must define the certificate identifier and the [Vault connection](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md).

```

"EncryptionCertificate": {
    "CertificateAzureKeyVault": "<CertificateIdentifier>"
}

```

#### Disabling file encryption

The encryption of specific files can be disabled via the following attribute:

| Name | Details |
| --- | --- |
| EncryptFile   default value: true | __Type__    Boolean   __Description__ ```True``` to encrypt specific files such as logs or temporary files. __Example__``` appsettings.json   {     �     EncryptionCertificate": {       "EncryptFile": false     }   } ``` |

## MailSettings

> For example:
>
> ```
> appsettings.json
>
> {
>   ...
>   "MailSettings": {
>     "FromAddress": "no-reply@acme.com",
>     "PickupDirectory": "C:/UsercubeDemo/Temp/Mails",
>     "UseSpecifiedPickupDirectory": true,
>     "UseDefaultCredentials": false,
>     "SecureSocketOption": "StartTlsWhenAvailable"
>   }
> }
> ```

| Name | Details |
| --- | --- |
| FromAddress   required | __Type__    String   __Description__ Email address used as sender for Usercube's emails. |
| AllowedDomains   optional | __Type__    String   __Description__ List of allowed domains, separated by ```;```. |
| CatchAllAddress   optional | __Type__    String   __Description__ Email address to be used as catchAll. |
| CatchAllCCAddress   optional | __Type__    String   __Description__ Email address to be used as CC catchAll. |
| Enabled   default value: true | __Type__    Boolean   __Description__ ```True``` to activate Usercube's email services. |
| EnableSsl   default value: false | __Type__    Boolean   __```DEPRECATED```__: EnableSsl won't be supported in the future. Please specify a ```SecureSocketOption``` instead.   To keep the same behavior as EnableSsl: ```True```, use the setting ```SecureSocketOption```: ```StartTls```.   __Description__ ```True``` to encrypt communication with the SMTP server.   __Note:__ to be used only when ```UseSpecifiedPickupDirectory``` is set to ```false```. |
| SecureSocketOption   default value: Auto | __Type__    String   __Description__ Specifies the encryption strategy to connect to the SMTP server. _If set, this takes priority over ```EnableSsl```_.   ```None```: No SSL or TLS encryption should be used.   ```Auto```: Allow the mail service to decide which SSL or TLS options to use (default). If the server does not support SSL or TLS, then the connection will not be encrypted.   ```SslOnConnect```: The connection should use SSL or TLS encryption immediately.   ```StartTls```: Elevates the connection to use TLS encryption immediately after reading the greeting and capabilities of the server. If the server does not support the STARTTLS extension, then the connection will fail and a NotSupportedException will be thrown.   ```StartTlsWhenAvailable```: Elevates the connection to use TLS encryption immediately after reading the greeting and capabilities of the server, but only if the server supports the STARTTLS extension.   __Note:__ to be used only when ```UseSpecifiedPickupDirectory``` is set to ```false```. |
| Host   optional | __Type__    String   __Description__ Name or IP address of the host used for SMTP transactions.   __Note:__ required when ```UseSpecifiedPickupDirectory``` is set to ```false```. |
| Password   optional | __Type__    String   __Description__ Password to be used with the user name as credentials. |
| PickupDirectory   optional | __Type__    String   __Description__ Path of the folder where Usercube will save the email messages.   __Note:__ useful and required when ```UseSpecifiedPickupDirectory``` is set to ```true```. |
| Port   optional | __Type__    String   __Description__ Port used for SMTP transactions.   __Note:__ required when ```Host``` is defined. |
| UseDefaultCredentials   default value: false | __Type__    Boolean   __Description__ ```True``` to use in requests the default credentials instead of those from ```UserName``` and ```Password``` here. |
| UserName   optional | __Type__    String   __Description__ User name to be used with the user name as credentials. |
| UseSpecifiedPickupDirectory   default value: false | __Type__    Boolean   __Description__ ```True``` to save email messages to the folder specified in ```PickupDirectory``` instead of sending them to their recipients through the host specified in ```Host```.   __Note:__ required when ```Host``` is not defined. |

## ApplicationInsights

> For example:
>
> ```
>
> appsettings.json
>
> {
>   ...
>   "ApplicationInsights": {
>     "InstrumentationKey": "<AppInsights instance's key>"
>   }
> }
> ```

| Name | Details |
| --- | --- |
| InstrumentationKey   default value: null | __Type__    String   __Description__ Key linked to the AppInsights instance to which the server's logs, requests, dependencies and performance are to be sent. [See Microsoft's documentation to create an instrumentation key](https://docs.microsoft.com/en-us/azure/azure-monitor/app/create-new-resource). |

The logs sent to AppInsights are configured through the [Logger properties](/versioned_docs/usercube_6.1/usercube/integration-guide/monitoring/index.md#Logger-properties).

## PowerBISettings

> For example:
>
> ```
> appsettings.json
>
> {
>   "PowerBISettings": {
>     "PageSize": 500
>   }  
>
> }
> ```

| Name | Details |
| --- | --- |
| PageSize   default value: 1000 | __Type__    Int32   __Description__ Size of the page containing the data returned by the API. |

## DataProtection

> For example:
>
> ```
> appsettings.json
>
> {
>   "DataProtection": {
>     "KeysPath": "/home/DataProtection",
>     "X509KeyFilePath": "../Usercube.pfx",
>     "X509KeyFilePassword": "secret"
>   },
> }
> ```

| Name | Details |
| --- | --- |
| KeysPath   default value: ../Work/DataProtection | __Type__    String   __Description__ Path of the location where the keys' descriptions are stored. |
| X509KeyFilePath   optional | __Type__    String   __Description__ Path of the custom certificate used to protect the keys. |
| X509KeyFilePassword   optional | __Type__    String   __Description__ Password of the custom certificate used to protect the keys. |

## AppDisplay

> For example:
>
> ```
> appsettings.json
>
> {
>   ...
>   "AppDisplay": {
>     "PrimaryColor": "#01CDE9",
>     "SecondaryColor": "#EA6E1A",
>     "BannerColor": "#EA6E1A",
>     "BannerTextColor": "#ffffff",
>     "ApplicationNamePrefix": "QA - ",
>     "ApplicationName": "USERCUBE"
>   },
>   ...
> }
> ```

| Name | Details |
| --- | --- |
| ApplicationName   optional | __Type__    String   __Description__ Name of the application, visible on the application's tabs. |
| ApplicationNamePrefix   optional | __Type__    String   __Description__ Prefix to be displayed before the application name. |
| BannerColor   optional | __Type__    String   __Description__ HEX code of the color for the banner, i.e. the header displaying logo and navigation bar. |
| BannerTextColor   optional | __Type__    String   __Description__ HEX code of the color for the banner's text. |
| PrimaryColor   optional | __Type__    String   __Description__ HEX code of the color for the highlighted buttons. |
| SecondaryColor   optional | __Type__    String   __Description__ HEX code of the color for the background of the authentication screen. |

[See more details on application display settings](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting/index.md).

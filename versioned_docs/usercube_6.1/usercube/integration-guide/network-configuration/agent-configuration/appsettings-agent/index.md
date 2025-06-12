# appsettings.agent

The ```appsettings.agent.json``` file is meant to contain configuration data to be used by the agent to run Usercube.

It includes:

- connections to the managed systems;
- password reset settings;
- connections to potential additional databases;
- OpenId information;
- specific task configuration.

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

## Supported Sections

| Name | Details |
| --- | --- |
| Connections   optional | __Type__    List of Connections   __Description__ Connection information of all the systems managed by this agent, for synchronization and fulfillment configuration.   This section contains a subsection for each connection containing the connection's agent settings. ``` {     �     "Connections": {       �       "<ConnectionIdentifier>": {         "<AgentSetting>": "<Value>":          �       }     }   } ```__Example__``` {     �     "Connections": {       �       "Directory": {         "Path": "C:\UsercubeDemo\Sources\Directory.xlsx"       },       "ServiceNowExportFulfillment": {         "Server": "https://INSTANCE.service-now.com/api/now/table",         "Login": "LOGIN",         "Password": "PASSWORD"       }     }   } ``` [See how to configure connections' agent settings via the UI](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/index.md).   [See more technical details on connections](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md). |
| Databases   optional | __Type__    List of Databases   __Description__ Names and connection strings of all databases used by the agent through [```InvokeSqlCommandTask```](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/jobs/tasks/server/invokesqlcommandtask/index.md), other than Usercube's database and other than the databases provided in Usercube's available packages.   This subsection contains a subsection for each additional database. ``` {     �     "Databases": {       "<DatabaseName>": "<DatabaseConnectionString>"     }   } ```__Example__``` {     �     "Databases": {       "UsercubeContoso": "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"     }   } ``` |
| OpenId   optional | __Type__    [OpenId](#openid)    __Description__ OpenId information, i.e. the ClientIds and related ClientSecrets that the agent may use to authenticate to the server in order to launch jobs and tasks.  In order to launch jobs and tasks, the profiles related to these OpenId credentials must possess the required permissions.  [See examples below](#see-examples-below). |
| PasswordResetSettings   optional | __Type__    [PasswordResetSettings](#passwordresetsettings)    __Description__ Parameters which configure the reset password process for the managed systems that support it.   [See examples below](#see-examples-below). |
| SourcesRootPaths   optional | __Type__    String Array   __Description__ List of folder paths from which Usercube is allowed to read. This option is used to validate the sources files defined in file-based connections.  These paths are case sensitive. __Example__``` {     �     "SourcesRootPaths": [ "C:/UsercubeContoso/SourceHR", "C:/UsercubeContoso/SourcesPhone" ]    } ``` |
| TaskAgentConfiguration   optional | __Type__    [TaskAgentConfiguration](#taskagentconfiguration)    __Description__ Various settings to customize the behavior of some agent tasks.   [See examples below](#see-examples-below). |

## OpenId

| Name | Details |
| --- | --- |
| AgentIdentifier   required | __Type__    String   __Description__ Identifier of the agent, as it is named in the XML configuration. __Example__ With the following configuration: ``` <Agent Identifier="MyAgent" DisplayName_L1="My Agent" URI="https://contoso.com" /> ``` We could have the following setting in the agent's ```appsettings.agent.json```: ``` {     �     "OpenId":{       �       "AgentIdentifier": "MyAgent"     }   } ``` |
| DefaultOpenIdClient   required | __Type__    String   __Description__ ClientId that defines the default OpenId pair, from the ```OpenIdClients``` section, used by the agent to authenticate to the server. __Example__``` {     �     "OpenId":{       "OpenIdClients": {         "Job": "secret1",         "Admin": "secret2",         "Agent": "secret3"       },       "DefaultOpenIdClient": "Agent"     }   } ``` |
| OpenIdClients   required | __Type__    List of OpenIdClients   __Description__ Pairs of ClientIds and non-hashed ClientSecrets, to override the corresponding secrets specified in the XML configuration. __Example__```  {     �     "OpenId":{       "OpenIdClients": {         "Job": "secret",         "Admin": "secret2"       }     }   } ``` |

## PasswordResetSettings

| Name | Details |
| --- | --- |
| EncryptionCertificate   required | __Type__    [EncryptionCertificate](#encryptioncertificate)    __Description__ Location of the public key certificate and the private key used to handle input and output files' encryption. |
| MailSettings   optional | __Type__    [MailSettings](#mailsettings)    __Description__ Settings for configuring the SMTP server, used to send password reset email notifications. |
| NotificationSettings   optional | __Type__    [NotificationSettings](#notificationsettings)    __Description__ Settings to configure password reset notifications. |
| TokenBuildingSettings   optional | __Type__    [TokenBuildingSettings](#tokenbuildingsettings)    __Description__ Settings to build the confirmation token used by the password reset's two-Way mode.  The confirmation token is a base-64 encoded JSON Web Token (JWT) token that contains the information required to complete password reset when in two-way mode. It is appended to the confirmation Uri. |
| TwoFactorSettings   optional | __Type__    [TwoFactorSettings](#twofactorsettings)    __Description__ Settings to configure the password reset's two-way mode, i.e. the process where Usercube sends emails containing links to users for them to click on it and reset their passwords. |

### EncryptionCertificate

If you are using the certificate provided in the SDK, the agent will be unable to launch. You must create your own certificate.

Encryption certificate information can be set in one of two ways:

- as a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive (also called [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files) or ```.pfx``` file) stored in the agent's host file system. The archive contains both the public key certificate and the private key;

  | Name | Details |
  | --- | --- |
  | File   required | __Type__    String   __Description__ [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the agent's host file system. __Example__``` {     �     "PasswordResetSettings": {       "File": "C:/UsercubeAgentContoso/contoso.pfx"     }   } ``` |
  | Password   optional | __Type__    String   __Description__ [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password. __Example__``` {     �     "PasswordResetSettings": {       "File": "C:/UsercubeAgentContoso/contoso.pfx",       "Password": "oarjr6r9f00"     }   } ``` |
- as a certificate from a Windows' [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store), identified by its subject distinguished name or its thumbprint. The Windows certificate also contains both the public key certificate and the private key.

  | Name | Details |
  | --- | --- |
  | DistinguishedName   required__if__ Thumbprint is empty | __Type__    String   __Description__ Subject distinguished name of the certificate. __Example__``` {     �     "PasswordResetSettings": {       "DistinguishedName": "UsercubeContoso"       �     }   } ``` |
  | StoreLocation   required | __Type__    String   __Description__ Location of the relevant Windows certificate. __Example__``` {     �     "PasswordResetSettings": {       �       "StoreLocation": "LocalMachine"     }   } ``` |
  | StoreName   required | __Type__    String   __Description__ Name of the relevant Windows certificate. __Example__``` {     �     "PasswordResetSettings": {       �       "StoreName": "AuthRoot"     }   } ``` |
  | Thumbprint   required__if__ DistinguishedName is empty | __Type__    String   __Description__ Thumbprint of the certificate. __Example__``` {     �     "PasswordResetSettings": {       "Thumbprint": "6261A70E599642A21A57A605A73B6D2AE7C5C450"       �     }   } ``` |

### MailSettings

| Name | Details |
| --- | --- |
| FromAddress   required__if__ PickupDirectory is empty | __Type__    String   __Description__ Email address used by Usercube to send notifications. __Example__``` {     �     "PasswordResetSettings": {       �       "MailSettings": {         "FromAddress": "no-reply@acme.com",         �       }     }   } ``` |
| Host   required__if__ PickupDirectory is empty | __Type__    String   __Description__ SMTP server domain name or an IP address.   __Note:__ to be used only when ```UseSpecifiedPickupDirectory``` is set to ```false```. |
| Password   required | __Type__    String   __Description__ Password that Usercube will use to login to the SMTP server.   __Note:__ used only when the SMTP server is password-protected and ```UseSpecifiedPickupDirectory``` is set to ```false```. |
| PickupDirectory   required__if__ FromAddress/Host are empty | __Type__    String   __Description__ Path to the pickup directory. [See more details on the pickup directory feature](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/email-server/index.md#see-more-details-on-the-pickup-directory-feature).   __Note:__ to be used only when ```UseSpecifiedPickupDirectory``` is set to ```true```. __Example__``` {     �     "PasswordResetSettings": {       �       "MailSettings": {         "PickupDirectory": "../Mails",         �       }     }   } ``` |
| Username   required | __Type__    String   __Description__ Username for Usercube to login to the SMTP server.   __Note:__ used only when the SMTP server is password-protected and ```UseSpecifiedPickupDirectory``` is set to ```false```. |
| AllowedDomains   optional | __Type__    String   __Description__ List of domains to which the SMTP server is authorized to send emails. Domain names must be separated with ```;```. |
| CatchAllAddress   optional | __Type__    String   __Description__ Catch-all address that will receive all of Usercube's emails instead of usual users.   __Note:__ this is helpful for testing before going live. __Example__``` {     �     "PasswordResetSettings": {       �       "MailSettings": {         "CatchAllAddress": "administrator@acme.com",         �       }     }   } ``` |
| CatchAllCCAddress   optional | __Type__    String   __Description__ Catch-all address that will receive all of Usercube's emails as cc (carbon copied). __Example__``` {     �     "PasswordResetSettings": {       �       "MailSettings": {         "CatchAllCCAddress": "administratorcc@acme.com",         �       }     }   } ``` |
| Enabled   default value: True | __Type__    Boolean   __Description__ ```True``` to enable email sending. When set to ```false```, no email is sent by Usercube. |
| EnableSsl   default value: False | __Type__    Boolean   __```DEPRECATED```__: EnableSsl won't be supported in the future. Please specify a ```SecureSocketOption``` instead.   To keep the same behavior as EnableSsl: ```True```, use the setting ```SecureSocketOption```: ```StartTls```.   __Description__ ```True``` to encrypt communication with the SMTP server.   __Note:__ to be used only when ```UseSpecifiedPickupDirectory``` is set to ```false```. |
| SecureSocketOption   default value: Auto | __Type__    String   __Description__ Specifies the encryption strategy to connect to the SMTP server. _If set, this takes priority over ```EnableSsl```_.   ```None```: No SSL or TLS encryption should be used.   ```Auto```: Allow the mail service to decide which SSL or TLS options to use (default). If the server does not support SSL or TLS, then the connection will not be encrypted.   ```SslOnConnect```: The connection should use SSL or TLS encryption immediately.   ```StartTls```: Elevates the connection to use TLS encryption immediately after reading the greeting and capabilities of the server. If the server does not support the STARTTLS extension, then the connection will fail and a NotSupportedException will be thrown.   ```StartTlsWhenAvailable```: Elevates the connection to use TLS encryption immediately after reading the greeting and capabilities of the server, but only if the server supports the STARTTLS extension.   __Note:__ to be used only when ```UseSpecifiedPickupDirectory``` is set to ```false```. |
| Port   default value: 0 | __Type__    String   __Description__ SMTP server port.   __Note:__ to be used only when ```UseSpecifiedPickupDirectory``` is set to ```false```. |
| UseDefaultCredentials   default value: False | __Type__    Boolean   __Description__ ```True``` to use the default username/password pair to login to the SMTP server. When set to ```false```, Windows authentication is used.   __Note:__ to be used only when ```UseSpecifiedPickupDirectory``` is set to ```false```. |
| UseSpecifiedPickupDirectory   default value: False | __Type__    Boolean   __Description__ ```True``` to write emails as local files in the specified ```PickupDirectory``` instead of sending them as SMTP packets. [See more details on the pickup directory feature](/versioned_docs/usercube_6.1/usercube/installation-guide/production-ready/email-server/index.md#see-more-details-on-the-pickup-directory-feature). __Example__``` {     �     "PasswordResetSettings": {       �       "MailSettings": {         "UseSpecifiedPickupDirectory": true,         �       }     }   } ``` |

### NotificationSettings

| Name | Details |
| --- | --- |
| Cultures   default value: ["en"] | __Type__    String Array   __Description__ List of languages in which reset-password email notifications will be sent, among: ```fr```; ```en```. __Example__``` {     �     "PasswordResetSettings": {       �       "NotificationSettings": {         "Cultures": ["fr", "en"]       }     }   } ``` |

### TokenBuildingSettings

| Name | Details |
| --- | --- |
| ValidFor   default value: 03:00:00 | __Type__    String   __Description__ Validity period of the issued token, and thus of the password reset link. The format must be ```HH:mm:ss```. __Example__``` {     �     "PasswordResetSettings": {       �       "TokenBuildingSettings": {         "ValidFor": "03:00:00"       }     }   } ``` |

### TwoFactorSettings

| Name | Details |
| --- | --- |
| ApplicationUri   required | __Type__    String   __Description__ URI of the Usercube application.   __Note:__ this helps create the links in the emails for two-way password reset. __Example__``` {       �       "PasswordResetSettings": {           �           "TwoFactorSettings": {              "ApplicationUri": "http://localhost:5000"              �           }       }   } ``` |
| ResetConfirmationUri   required | __Type__    String   __Description__ Base URI for the password reset link that is sent to the user. The password reset confirmation token is appended to the ```ResetConfirmationUri```. The resulting URI is sent to the user. __Example__``` {       �       "PasswordResetSettings": {           �           "TwoFactorSettings": {              �              "ResetConfirmationUri": "http://localhost:5000/PasswordReset/Activate/?activationCode="           }       }   } ``` |

## TaskAgentConfiguration

| Name | Details |
| --- | --- |
| HttpClientTimeoutSupplement   default value: 0 | __Type__    Integer   __Description__ Additional minutes that extend the default timeout (30 minutes) of the HttpClient instance used to send requests to the server. __Example__ Here the total timeout will be 50 minutes: ``` {     �     "TaskAgentConfiguration": {       �        "HttpClientAdditionalTimeout": 20     }   } ``` |

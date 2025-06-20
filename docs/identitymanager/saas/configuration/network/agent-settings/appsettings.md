# appsettings.agent

The appsettings.agent.json file is meant to contain configuration data to be used by the agent to
run Identity Manager.

It includes:

- Connections to the managed systems
- Password reset settings
- Connections to potential additional databases
- OpenId information
- Specific task configuration

JSON files can contain any additional information that you might find useful. See the example below.

For example, in order to store the agent's address, we can add:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.json
"UsercubeAgent": {
  "Url": "<http://localhost:1234>"
}
```

As Identity Manager does not know any object named Identity ManagerAgent, its content will be
ignored, but it can still be used to store information for human use.

## Supported Sections

| Name                            | Type                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connections optional            | List of Connections    | Connection information of all the systems managed by this agent, for synchronization and fulfillment configuration. This section contains a subsection for each connection containing the connection's agent settings. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "Connections": {       …       "<ConnectionIdentifier>": {         "<AgentSetting>": "<Value>":          …       }     }   }` Example: `{     …     "Connections": {       …       "Directory": {         "Path": "C:\UsercubeDemo\Sources\Directory.xlsx"       },       "ServiceNowExportFulfillment": {         "Server": "https://INSTANCE.service-now.com/api/now/table",         "Login": "LOGIN",         "Password": "PASSWORD"       }     }   }` See the [Create a Connection](/docs/identitymanager/saas/connectors/configuration/connections.md)and [ Connection ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md) topics for additional information. |
| Databases optional              | List of Databases      | Names and connection strings of all databases used by the agent through InvokeSqlCommandTask, other than Identity Manager's database and other than the databases provided in Identity Manager's available packages. This subsection contains a subsection for each additional database. **NOTE:** The Database is a subsection of the Connections section mentioned above. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "Databases": {       "<DatabaseName>": "<DatabaseConnectionString>"     }   }` Example: `{     …     "Databases": {       "UsercubeContoso": "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"     }   }`                                                                                                                                                                                                                                                                                       |
| OpenId optional                 | OpenId                 | OpenId information, i.e. the ClientIds and related ClientSecrets that the agent may use to authenticate to the server in order to launch jobs and tasks. In order to launch jobs and tasks, the profiles related to these OpenId credentials must possess the required permissions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| PasswordResetSettings optional  | PasswordResetSettings  | Parameters which configure the reset password process for the managed systems that support it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| SourcesRootPaths optional       | String Array           | List of folder paths from which Identity Manager is allowed to read. This option is used to validate the sources files defined in file-based connections. These paths are case sensitive. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "SourcesRootPaths": [ "C:/identitymanagerContoso/SourceHR", "C:/identitymanagerContoso/SourcesPhone" ]    }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| TaskAgentConfiguration optional | TaskAgentConfiguration | Various settings to customize the behavior of some agent tasks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## OpenId

| Name                         | Type                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AgentIdentifier required     | String                | Identifier of the agent, as it is named in the XML configuration. With the following configuration: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `<Agent Identifier="MyAgent" DisplayName_L1="My Agent" URI="https://contoso.com" />` We could have the following setting in the agent’s appsettings.agent.json: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "OpenId":{       …       "AgentIdentifier": "MyAgent"     }   }` |
| DefaultOpenIdClient required | String                | ClientId that defines the default OpenId pair, from the OpenIdClients section, used by the agent to authenticate to the server. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "OpenId":{       "OpenIdClients": {         "Job": "secret1",         "Admin": "secret2",         "Agent": "secret3"       },       "DefaultOpenIdClient": "Agent"     }   }`                                                                                                                                                   |
| OpenIdClients required       | List of OpenIdClients | Pairs of ClientIds and non-hashed ClientSecrets, to override the corresponding secrets specified in the XML configuration. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "OpenId":{       "OpenIdClients": {         "Job": "secret",         "Admin": "secret2"       }     }   }`                                                                                                                                                                                                                           |

## PasswordResetSettings

| Name                           | Type                  | Description                                                                                                                                                                                                                                                                                |
| ------------------------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| EncryptionCertificate required | EncryptionCertificate | Location of the public key certificate and the private key used to handle input and output files' encryption.                                                                                                                                                                              |
| MailSettings optional          | MailSettings          | Settings for configuring the SMTP server, used to send password reset email notifications.                                                                                                                                                                                                 |
| NotificationSettings optional  | NotificationSettings  | Settings to configure password reset notifications.                                                                                                                                                                                                                                        |
| TokenBuildingSettings optional | TokenBuildingSettings | Settings to build the confirmation token used by the password reset's two-Way mode. The confirmation token is a base-64 encoded JSON Web Token (JWT) token that contains the information required to complete password reset when in two-way mode. It is appended to the confirmation Uri. |
| TwoFactorSettings optional     | TwoFactorSettings     | Settings to configure the password reset's two-way mode, i.e. the process where Identity Manager sends emails containing links to users for them to click on it and reset their passwords.                                                                                                 |

### EncryptionCertificate

If you are using the certificate provided in the SDK, the agent will be unable to launch. You must
create your own certificate.

Encryption certificate information can be set in one of two ways:

- As a [Public Key Cryptography Standards (PKCS) #12](https://en.wikipedia.org/wiki/PKCS_12) archive
  (also called
  [Personal ](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files)Information
  Exchange file or `.pfx` file) stored in the Agent's host file system. The archive contains both
  the public key certificate and the private key.

| Name              | Type   | Description                                                                                                                                                                                                                                                                                                                                       |
| ----------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File required     | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the agent's host file system. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       "File": "<C:/identitymanagerAgentContoso/contoso.pfx>"     }   }`        |
| Password optional | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       "File": "<C:/identitymanagerAgentContoso/contoso.pfx>",       "Password": "<oarjr6r9f00>"     }   }` |

- As a certificate from a Windows'
  [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store)
  identified by SubjectDistinguishedName or by Thumbprint. The Windows certificate also contains
  both the public key certificate and the private key.

| Name                                              | Type   | Description                                                                                                                                                                                                                                                                           |
| ------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DistinguishedName Required if Thumbprint is empty | String | Subject distinguished name of the certificate. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       "DistinguishedName": "<UsercubeContoso>"       …     }   }`   |
| StoreLocation required                            | String | Location of the relevant Windows certificate. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "StoreLocation": "<LocalMachine>"     }   }`           |
| StoreName required                                | String | Name of the relevant Windows certificate. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "StoreName": "<AuthRoot>"     }   }`                       |
| Thumbprint Required if DistinguishedName is empty | String | Thumbprint of the certificate. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       "Thumbprint": "<6261A70E599642A21A57A605A73B6D2AE7C5C450>"       …     }   }` |

_Remember,_ Netwrix recommends using Windows' certificate store.

On the other hand, the PFX file takes priority over Windows' certificate, which means that when
`File` is specified then the PFX certificate is used, even if the options for Windows' certificate
are specified too.

In both ways, missing and/or incorrect settings trigger an error and no certificate is loaded.

### MailSettings

| Name                                                   | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FromAddress Required if PickupDirectory is empty       | String  | Email address used by Identity Manager to send notifications. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "MailSettings": {         "FromAddress": "<no-reply@acme.com>",         …       }     }   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Host Required if PickupDirectory is empty              | String  | SMTP server domain name or an IP address. To be used only when UseSpecifiedPickupDirectory is set to false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Password Required                                      | String  | Password that Identity Manager will use to login to the SMTP server. used only when the SMTP server is password-protected and UseSpecifiedPickupDirectory is set to false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| PickupDirectory Required if FromAddress/Host are empty |         | Path to the pickup directory. See the [ Send Notifications ](/docs/identitymanager/saas/installation/production-setup/email-server.md) topic for additional information. See more details on the pickup directory feature. To be used only when UseSpecifiedPickupDirectory is set to true. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "MailSettings": {         "PickupDirectory": "<../Mails>",         …       }     }   }`                                                                                                                                                                                                                                                                                                                                                                                           |
| Username required                                      | String  | Username for Identity Manager to login to the SMTP server. Used only when the SMTP server is password-protected and UseSpecifiedPickupDirectory is set to false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| AllowedDomains optional                                | String  | List of domains to which the SMTP server is authorized to send emails. Domain names must be separated by `;`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| CatchAllAddress optional                               | String  | Catch-all address that will receive all of Identity Manager's emails instead of usual users. this is helpful for testing before going live. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "MailSettings": {         "CatchAllAddress": "<administrator@acme.com>",         …       }     }   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| CatchAllCCAddress optional                             | String  | Catch-all address that will receive all of Identity Manager's emails as cc (carbon copied). Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "MailSettings": {         "CatchAllCCAddress": "<administratorcc@acme.com>",         …       }     }   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Enabled default value: True                            | Boolean | True to enable email sending. When set to false, no email is sent by Identity Manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| EnableSsl default value: False                         | Boolean | **DEPRECATED**: EnableSsl won't be supported in the future. Please specify a SecureSocketOption instead. To keep the same behavior as EnableSsl: True, use the setting SecureSocketOption: StartTls. True to encrypt communication with the SMTP server. **NOTE:** To be used only when UseSpecifiedPickupDirectory is set to false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| SecureSocketOption default value: Auto                 | String  | Specifies the encryption strategy to connect to the SMTP server. If set, this takes priority over EnableSsl. None: No SSL or TLS encryption should be used. Auto: Allow the mail service to decide which SSL or TLS options to use (default). If the server does not support SSL or TLS, then the connection will not be encrypted. SslOnConnect: The connection should use SSL or TLS encryption immediately. StartTls: Elevates the connection to use TLS encryption immediately after reading the greeting and capabilities of the server. If the server does not support the STARTTLS extension, then the connection will fail and a NotSupportedException will be thrown. StartTlsWhenAvailable: Elevates the connection to use TLS encryption immediately after reading the greeting and capabilities of the server, but only if the server supports the STARTTLS extension. **NOTE:** To be used only when UseSpecifiedPickupDirectory is set to false. |
| Port default value: 0                                  | String  | SMTP server port. **NOTE:** To be used only when UseSpecifiedPickupDirectory is set to false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| UseDefaultCredentials default value: False             | Boolean | True to use the default username/password pair to login to the SMTP server. When set to false, Windows authentication is used. **NOTE:** To be used only when UseSpecifiedPickupDirectory is set to false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| UseSpecifiedPickupDirectory default value: False       | Boolean | True to write emails as local files in the specified PickupDirectory instead of sending them as SMTP packets. See the [ Send Notifications ](/docs/identitymanager/saas/installation/production-setup/email-server.md)topic for additional information. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "MailSettings": {         "UseSpecifiedPickupDirectory": true,         …       }     }   }`                                                                                                                                                                                                                                                                                                                                                                                                                           |

### NotificationSettings

| Name                           | Type         | Description                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cultures default value: ["en"] | String Array | List of languages in which reset-password email notifications will be sent, among: fr and en. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "NotificationSettings": {         "Cultures": [“fr”, “en”]       }     }   }` |

### TokenBuildingSettings

| Name                             | Type   | Description                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ValidFor default value: 03:00:00 | String | Validity period of the issued token, and thus of the password reset link. The format must be HH:mm:ss Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "TokenBuildingSettings": {         "ValidFor": "<03:00:00>"       }     }   }` |

### TwoFactorSettings

| Name                          | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ApplicationUri required       | String | URI of the Identity Manager application. **NOTE:** this helps create the links in the emails for two-way password reset. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{       …       "PasswordResetSettings": {           …           "TwoFactorSettings": {              "ApplicationUri": "<http://localhost:5000>"              …           }       }   }`                                                                                                           |
| ResetConfirmationUri required | String | Base URI for the password reset link that is sent to the user. The password reset confirmation token is appended to the ResetConfirmationUri. The resulting URI is sent to the user. Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{       …       "PasswordResetSettings": {           …           "TwoFactorSettings": {              …              "ResetConfirmationUri": "<http://localhost:5000/PasswordReset/Activate/?activationCode=>"           }       }   }` |

## TaskAgentConfiguration

| Name                                         | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HttpClientTimeoutSupplement default value: 0 | Integer | Additional minutes that extend the default timeout (30 minutes) of the HttpClient instance used to send requests to the server. Here the total timeout will be 50 minutes: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `{     …     "TaskAgentConfiguration": {       …        "HttpClientAdditionalTimeout": 20     }   }` |

# Application Settings

This section describes the settings available in the agent's appsettings.json file, located in the
agent's working directory or in environment variables.

**NOTE:** JSON files can contain any additional information that you might find useful. See the
example below.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

For example, in order to store the agent's address, we can add:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

appsettings.json
"UsercubeAgent": {
  "Url": "<http://localhost:1234>"
}
```

As Identity Manager does not know any object named Identity Manager Agent, its content will be
ignored, but it can still be used to store information for human use.

The appsettings set allows the following attributes and sections:

| Name                                                                  | Type                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ApplicationUri (required)                                             | Uri                   | Server's listening URI. Used by the agent to send requests to the server. Example: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `appsettings.json   {  "ApplicationUri": "   <https://identitymanagerserver.contoso.com:5000>"   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Jobs (optional)                                                       | Job                   | Settings to configure all jobs with common values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Scheduler (optional)                                                  | Scheduler             | Settings to configure Identity Manager's scheduler.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| TaskTimeoutSupplement default value: 0                                | Int32                 | Additional time (in minutes) for the Invoke-Job tool's Timeout property. Example: `appsettings.json   {       "TaskTimeoutSupplement": 10   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| InstallationDirectoryPath default value: Usercube-agent.exe directory | String                | Path of the installation directory. It is used to read other configuration files.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| EncryptionCertificate (required)                                      | EncryptionCertificate | Settings to configure the encryption of specific files.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| IdentityServer (required)                                             | IdentityServer        | Settings to configure the agent's encrypted network communication, for example with the server or a browser.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Authentication (required)                                             | Authentication        | Settings to configure end-user authentication, for example for users to launch a job from the UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Serilog (optional)                                                    | Logger setting        | Settings to configure the logging service, complying to the Logger properties and structure. See the [ Monitoring ](/docs/identitymanager/saas/monitoring/index.md) topic for additional information. Example: `appsettings.json   {     "Serilog": {       "WriteTo": [ "Console" ],       "MinimumLevel": {         "Default": "Error",         "Override": {           "Usercube": "Information"           }         }       }   }                           `                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Cors (optional)                                                       | Cors                  | Settings to configure the agent's [CORS policy](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS), which is useful when using non-integrated agents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ApplicationInsights (optional)                                        | ApplicationInsights   | Settings to plug to and configure the [AppInsights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview) monitoring tool.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| TempFolderPath (optional)                                             | String                | Path to the temporary folder which contains: - ExportOutput: directory storing data exported from connectors. - JobLogs: directory storing task instance logs. - Reports: directory storing generated reports. - Packages: directory storing the downloaded package logos. - PolicySimulations: directory storing the files generated by policy simulations. - ProvisioningCache.txt: file storing the clustered provisioning cache. When enabled, this file can be used to coordinate the API cache among clusters. - CorrelationCache.txt - RiskCache.txt - ExpressionCache.txt - scheduler.lock - connector.txt - container.reset.txt: file acting as a reset command for Identity Manager's server, i.e. any change to this file triggers the reset service, thus reloading all the services instantiated by the server. Note that this path can be overridden by **ResetSettings** > **FilepathResetService**. - Mails: directory storing the email messages. Note that this path can be overridden by **ResetSettings** > **PickupDirectory**. - Deployment these elements can be removed, but make sure to restart the server after doing so. Example: `appsettings.json   {     "TempFolderPath": "../Temp"   }` |
| WorkFolderPath (optional)                                             | String                | Path of the work folder which contains: - Collect: directory storing the CSV source files exported by connectors. - ProvisioningOrders: directory storing the orders generated by the server. - FulfillPowerShell: PowerShell provisioner's working directory. - FulfillRobotFramework: Robot Framework's provisioner working directory. - ExportCookies: directory storing the cookies used for incremental export. - Synchronization: directory storing the agent's data collection results. - Upload: directory storing the uploaded media like uploaded pictures, before they are inserted into the database. - appsettings.connection.json These elements must not be removed, because doing so may disrupt Identity Manager's execution after restarting. Example: `appsettings.json   {     "WorkFolderPath": "../Work"   }`                                                                                                                                                                                                                                                                                                                                                                                      |
| JobLaunchTimeout default value: 7500                                  | String                | Time period (in milliseconds) after which, if a launched job has not started, it is considered in error. Example: `appsettings.json   {     "JobLaunchTimeout": 9000   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| InvokeSqlCommands default value: null                                 | String                | List of parameter sets used to override InvokeSqlCommandTasks' SQLInputFile and OutputPath parameters from the XML configuration. See the [Invoke Sql Command Task](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/invokesqlcommandtask/index.md) topic for additional information. For each task to override, the key must be the task's identifier. Example: `appsettings.json    {          "InvokeSqlCommands": {           "InvokeSqlCommandTask_Identifier": {             "SQLInputFile": "YourInputFilePath",             "OutputPath": "YourOutputFilePath"  },           }   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Jobs

Below is an example of job that can be executed by the agent.

For example:

```
appsettings.json
{
  ...
  "Jobs": {
    "MaxTaskBatchSize": "2"
  }
}
```

| Name                              | Type  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaxTaskBatchSize default value: 5 | Int64 | Maximum number of tasks that can be launched simultaneously, thus avoiding timeout issues. When executing a job, Identity Manager launches simultaneously the tasks of a same Level. See the [ Job ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/jobs/job/index.md) topic for additional information. If the number of same-level tasks exceeds MaxTaskBatchSize, then Identity Manager inserts new levels. These effective levels can be seen in the job's logs or with the Usercube-Get-JobSteps executable. See the [ Usercube-Get-JobSteps ](/docs/identitymanager/saas/automation/executables/get-job-steps.md) topic for additional information. |

## Scheduler

Below is an example of scheduling and a list of attributes.

For example:

```
appsettings.json
{
  ...
  "Scheduler": {
    "Enabled": "true",
    "MaxLockWatchTime": 3600
 }
}
```

| Name                                 | Type    | Description                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled (optional)                   | Boolean | True to activate Identity Manager's scheduler.                                                                                                                                                                                                                                                                                                      |
| MaxLockWatchTime default value: 1800 | Int32   | Time period (in seconds) to spend watching for the scheduler's lock file before launching it. When set to 0 the duration is infinite, and when set to a negative value the scheduler launch fails if the lock file already exists. This parameter prevents a failure if Identity Manager's scheduler has already been launched from another source. |

## Encryption Certificate

This information can be set one of two ways:

- As a [Public Key Cryptography Standards (PKCS) #12](https://en.wikipedia.org/wiki/PKCS_12) archive
  (also called
  [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files)
  or .pfx file) stored in the Agent's host file system. The archive contains both the public key
  certificate and the private key.
- As a certificate from a Windows'
  [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store)
  identified by SubjectDistinguishedName or by Thumbprint. The Windows certificate also contains
  both the public key certificate and the private key.

  **NOTE:** Netwrix recommends using Windows' certificate store.

  On the other hand, the PFX file takes priority over Windows' certificate, which means that when
  File is specified then the PFX certificate is used, even if the options for Windows' certificate
  are specified too.  
   In both ways, missing and/or incorrect settings trigger an error and no certificate is loaded.

As a PFX file

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
{
    ...
    "EncryptionCertificate": {
        "File": "<C:/identitymanagerAgentContoso/contoso.pfx>",
        "Password": "<oarjr6r9f00>"
     }
 }

```

The archive is set using the following attributes:

| Name                | Type   | Description                                                                             |
| ------------------- | ------ | --------------------------------------------------------------------------------------- |
| File (required)     | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the host file system. |
| Password (optional) | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password.                     |

**NOTE:** Storing a .pfx file password in plain text in a production environment is strongly
discouraged. It should always be encrypted using the Usercube-Protect-CertificatePassword tool. See
the
[ Usercube-Protect-CertificatePassword ](/docs/identitymanager/saas/automation/executables/protect-certificate-password.md)
topic for additional information.

The archive is set using the following attributes:

| Name                | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File (required)     | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the host file system.                                                                                                                                                                                                                                                                                                                                           |
| Password (optional) | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password. storing a .pfx file's password in plain text in a production environment is strongly discouraged. It should always be encrypted using the Usercube-Protect-CertificatePassword.exe tool. See the[ Usercube-Protect-CertificatePassword ](/docs/identitymanager/saas/automation/executables/protect-certificate-password.md) topic for additional information. |

As a Certificate in the Windows Store

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
 {
    ...
    "EncryptionCertificate": {
         "DistinguishedName":"<UsercubeContoso>",
         "StoreLocation": "<LocalMachine>",
         "StoreName": "<AuthRoot>"
     }
 }

```

The Windows certificate is set using these attributes:

| Name                         | Type   | Details                                                                                             |
| ---------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| DistinguishedName (optional) | String | SubjectDistinguishedName of the store certificate. It is required when Thumbprint is not specified. |
| Thumbprint (optional)        | String | Thumbprint of the store certificate. It is required when DistinguishedName is not specified.        |
| StoreLocation (required)     | String | Location of the relevant Windows certificate store: LocalMachine or CurrentUser.                    |
| StoreName (required)         | String | Name of the relevant Windows certificate store.                                                     |

Using Azure Key Vault

If the certificate is saved in Azure Key Vault, we must define the certificate identifier and the
Vault connection. See the [Azure Key Vault](/docs/identitymanager/saas/configuration/network/agent-settings/azure-key-vault.md) topic for additional
information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

"<EncryptionCertificate>": {
    "CertificateAzureKeyVault": "<CertificateIdentifier>"
}
```

## Identity Server

Just like the Encryption Certificate, this information can be set one of two ways.

As a PFX file

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

appsettings.json
"<IdentityServer>": {
  "X509KeyFilePath": "<./identitymanager.pfx>",
  "X509KeyFilePassword": "<oarjr6r9f00>"
}
```

The archive is set using the following attributes:

| Name                           | Type   | Description                                                                                     |
| ------------------------------ | ------ | ----------------------------------------------------------------------------------------------- |
| X509KeyFilePath (required)     | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the agent's host file system. |
| X509KeyFilePassword (optional) | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password.                             |

**NOTE:** Storing a .pfx file password in plain text in a production environment is strongly
discouraged. It should always be encrypted using the Usercube-Protect-CertificatePassword tool. See
the
[ Usercube-Protect-CertificatePassword ](/docs/identitymanager/saas/automation/executables/protect-certificate-password.md)
topic for additional information.

As a Certificate in the Windows Store

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.json
"<IdentityServer>": {
  "X509SubjectDistinguishedName":"<UsercubeContoso>",
  "X509StoreLocation": "<LocalMachine>",
  "X509StoreName": "<AuthRoot>"
}
```

The certificate is set using these attributes:

| Name                                    | Type   | Description                                                                                     |
| --------------------------------------- | ------ | ----------------------------------------------------------------------------------------------- |
| X509StoreLocation (required)            | String | Location of the relevant Windows certificate store: LocalMachine or CurrentUser.                |
| X509StoreName (required)                | String | Name of the relevant Windows certificate store.                                                 |
| X509SubjectDistinguishedName (optional) | String | SubjectDistinguishedName of the certificate. It is required when X509Thumbprint is not defined. |
| X509Thumbprint (optional)               | String | Thumbprint of the certificate. It is required when X509SubjectDistinguishedName is not defined. |

**NOTE:** If you are using the certificate provided in the SDK, the agent will fail when launching.
You must create your own certificate.

You can get the DistinguishedName of the certificate using OpenSSL:

```

openssl x509 -noout -in {certificate file name with full path} -subject

```

## Authentication

An example of authentication and a list of attributes.

```
appsettings.json
{
  ...
  "Authentication": {
    "Enabled": true,
    "RequireHttpsMetadata": true
  }
}
```

| Name                                     | Type    | Description                                            |
| ---------------------------------------- | ------- | ------------------------------------------------------ |
| Enabled default value: true              | Boolean | True to enable authentication.                         |
| RequireHttpsMetadata default value: true | Boolean | True to set HTTPS required for the discovery endpoint. |

## Cors

An example of cors and a list of attributes.

```
appsettings.json
{
  ...
  "Cors": {
    "AllowAnyHeader": true,
    "AllowAnyMethod": false,
    "AllowCredentials": true
  }
}
```

| Name                                  | Type    | Description                                                                                                                                                                                                                                                                           |
| ------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AllowAnyHeader default value: false   | Boolean | True to enable the [Access-Control-Allow-Headers: \*](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) header in the agent's response to a [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/preflight_request).           |
| AllowAnyMethod default value: false   | Boolean | True to enable the [Access-Control-Allow-Methods: \*](https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) header in the agent's response to a [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/preflight_request).              |
| AllowCredentials default value: false | Boolean | True to enable the [Access-Control-Allow-Credentials: true](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) header in the agent's response to a [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/preflight_request). |

## Application Insights

Identity Manager supports the Application Insights integration. It means that you can monitor the
lifecycle of the application through a dedicated interface, which can be useful to measure
performance, observe how the application is used or detect performance anomalies.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

appsettings.json
{
  ...
  "ApplicationInsights": {
    "InstrumentationKey": "<AppInsights instance's key>"
  }
}
```

The application insights details are:

| Name                                   | Type   | Details                                                                                                                                                                                                                                                                   |
| -------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| InstrumentationKey default value: null | String | Key linked to the AppInsights instance to which the server's logs, requests, dependencies and performance are to be sent. See Microsoft's documentation to create an[ instrumentation key](https://docs.microsoft.com/en-us/azure/azure-monitor/app/create-new-resource). |

**NOTE:** The logs sent to AppInsights are configured through the Logger properties. See the
[ Monitoring ](/docs/identitymanager/saas/monitoring/index.md) topic for additional information.

# Configure the Agent's Settings

This guide shows how to configure the agent's application settings via the `web.config`,
`appsettings.json` and `appsettings.agent.json` files.

## Overview

Identity Manager provides JSON files to configure varied application settings, named appsettings
json and appsettings.agent.json. See the
[Application Settings](/docs/identitymanager/saas/configuration/network/agent-settings/appsettings.md)
and
[appsettings.agent](/docs/identitymanager/saas/configuration/network/agent-settings/appsettings.md)
topics for additional information.

This page describes the optimal configuration of the production agent's application settings.

## Configure the Agent's Settings

Configure the agent's settings by proceeding as follows:

1. From the `Runtime/Agent` folder, copy the files `appsettings.json`, `appsettings.agent.json` and
   `web.config` and paste them in the `Runtime` folder, thus replacing the pre-existing ones.
2. Open `web.config` and make sure that, in the `aspNetCore` tag, the value of `arguments` is set to
   `./identitymanager-Agent.dll`.

   When needing to get the agent's logs, set also `stdoutLogEnabled` to `true`. See more details in
   [Microsoft's documentation](https://learn.microsoft.com/fr-fr/aspnet/core/host-and-deploy/iis/logging-and-diagnostics?view=aspnetcore-7.0).

   ```

    web.config

    ...
    <aspNetCore processPath="dotnet" arguments="./identitymanager-Agent.dll" stdoutLogEnabled="true" stdoutLogFile="../Temp/stdout-server.log" hostingModel="inprocess">     ...
    </aspNetCore> ...

   ```

3. Open `appsettings.json` and make sure that:

   - **License** contains a valid license;
   - **IdentityServer** contains the encryption certificate's path and password provided by Netwrix
     Identity Manager (formerly Usercube) team, in order to secure agent/server identification;

     > For example:
     >
     > ```
     >
     > appsettings.json
     >
     > "IdentityServer": {
     >   "X509KeyFilePath": "./identitymanager.pfx",
     >   "X509KeyFilePassword": "secret"
     > }
     >
     > ```

   - you get an encryption certificate which will be used to encrypt specific files such as logs or
     temporary files, and that **EncryptionCertificate** contains its path and password;

     > For example:
     >
     > ```
     >
     > appsettings.json
     >
     > "EncryptionCertificate": {
     >   "File": "./identitymanager-Files.pfx",
     >   "Password": "secret",
     >   "EncryptFile": true
     > }
     >
     > ```

     **EncryptFile** can stay set to `false` while verifying the agent installation, but for
     security reasons it must be set to `true` afterwards.

     If the certificates' passwords contain `@`, then they must be escaped via the `@` as first
     character of the strings.

   - **ApplicationUri** contains the server's address, provided by Netwrix Identity Manager
     (formerly Usercube) team when working in a SaaS environment;

     > For example:
     >
     > ```
     >
     > appsettings.json
     >
     > "ApplicationUri": "http://localhost:5000"
     >
     > ```

     Do not write a `/` character at the end of the string.

   - **Cors** > **AllowAnyHeader**, **AllowAnyMethod** and **AllowCredentials** are set to `true`;

     ```

       appsettings.json

       "Cors": {
           "AllowAnyHeader": "true",
           "AllowAnyMethod": "true",
           "AllowCredentials": "true"
       }

     ```

4. Open `appsettings.agent.json` and make sure that:

   - **OpenId** > **AgentIdentifier** specifies the agent's name which must match the XML
     configuration. See the
     [appsettings.agent](/docs/identitymanager/saas/configuration/network/agent-settings/appsettings.md)
     topic for additional information..

     > For example:
     >
     > ```
     >
     >         appsettings.agent.json
     >
     >         "OpenId": {
     >           "AgentIdentifier": "MyAgent"
     >           }
     >
     > ```
     >
     > With the following configuration:
     >
     > ```
     >
     >         <Agent Identifier="MyAgent" DisplayName_L1="My Agent" URI="https://contoso.com" />
     >
     > ```

   - **OpenId** > **OpenIdClients** > **Job** contains the non-hashed value of the password of
     "Job-Remote" provided by NETWRIX' team

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "OpenId": {
     >   "AgentIdentifier": "MyAgent",
     >   "OpenIdClients": {
     >       "Job": "secret"
     >   }
     > }
     >
     > ```

     and add the hashed value of this password to the `OpenIdClient` named `Job` from the XML
     configuration;

     > For example:
     >
     > ```
     >
     > <OpenIdClient Identifier="Job" HashedSecret="K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" ConsolidationMode="Merge" />
     >
     > ```

   - **OpenId** > **DefaultOpenIdClient** is set to `Job`;

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "OpenId": {
     >   "AgentIdentifier": "MyAgent",
     >   "OpenIdClients": {
     >       "Job": "secret"
     >   },
     >   "DefaultOpenIdClient": "Job"
     > }
     >
     > ```

   - **PasswordResetSettings** > **TwoFactorSettings** > **ApplicationUri** contains the server's
     address, provided by NETWRIX' team when working in a SaaS environment;

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "PasswordResetSettings": {
     >   "TwoFactorSettings": {
     >       "ApplicationUri": "http://localhost:5000"
     >   }
     > }
     >
     > ```

   - **PasswordResetSettings** > **EncryptionCertificate** contains contains the path and password
     of the certificate used to secure password tokens;

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "PasswordResetSettings": {
     >   "TwoFactorSettings": {
     >       "ApplicationUri": "http://localhost:5000"
     >   },
     >   "EncryptionCertificate": {
     >       "File": "../identitymanager.pfx",
     >       "Password": "secret"
     >   }
     > }
     >
     > ```

   - **PasswordResetSettings** > **MailSettings** > **PickupDirectory** is set to the `Mails`
     folder and **FromAddress** to `no-reply@<organization>.com`;

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "PasswordResetSettings": {
     >   "TwoFactorSettings": {
     >       "ApplicationUri": "http://localhost:5000"
     >   },
     >   "EncryptionCertificate": {
     >       "File": "../identitymanager.pfx",
     >       "Password": "secret"
     >   },
     >   "MailSettings": {
     >       "PickupDirectory": "../Mails",
     >       "FromAddress": "no-reply@contoso.com"
     >   }
     > }
     >
     > ```

   - **SourcesRootPaths** contains the path to the `Sources` folder.

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "SourcesRootPaths": [
     >   "C:/identitymanager/Sources"
     > ]
     >
     > ```

## Next Steps

To continue,see the local server to
[ Install IIS via Server Manager ](/docs/identitymanager/saas/installation/production-setup/agent.md).

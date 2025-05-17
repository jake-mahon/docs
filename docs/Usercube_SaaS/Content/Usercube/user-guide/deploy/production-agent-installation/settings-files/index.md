---
sidebar_position: 602
title: Configure the Agent's Settings
---

# Configure the Agent's Settings

This guide shows how to configure the agent's application settings via the `web.config`, `appsettings.json` and `appsettings.agent.json` files.

## Overview

Identity Manager provides JSON files to configure varied application settings, named appsettings json and appsettings.agent.json. See the [Application Settings](../../../../integration-guide/network-configuration/agent-configuration/appsettings/index "Application Settings") and [appsettings.agent](../../../../integration-guide/network-configuration/agent-configuration/appsettings-agent/index "appsettings.agent") topics for additional information.

This page describes the optimal configuration of the production agent's application settings.

## Configure the Agent's Settings

Configure the agent's settings by proceeding as follows:

1. From the `Runtime/Agent` folder, copy the files `appsettings.json`, `appsettings.agent.json` and `web.config` and paste them in the `Runtime` folder, thus replacing the pre-existing ones.
2. Open `web.config` and make sure that, in the `aspNetCore` tag, the value of `arguments` is set to `./Usercube-Agent.dll`.

   :::note
When needing to get the agent's logs, set also stdoutLogEnabled to true. See more details in Microsoft's documentation.
   :::

   ```
web.config

    ...
         ...
     ...
    
   ```
3. Open `appsettings.json` and make sure that:

   * **License** contains a valid license;
   * **IdentityServer** contains the encryption certificate's path and password provided by Netwrix Identity Manager (formerly Usercube) team, in order to secure agent/server identification;

     > For example:
     >
     > ```
>
     > appsettings.json
     >
     > "IdentityServer": {
     >   "X509KeyFilePath": "./Usercube.pfx",
     >   "X509KeyFilePassword": "secret"
     > }
     >
     > ```
* you get an encryption certificate which will be used to encrypt specific files such as logs or temporary files, and that **EncryptionCertificate** contains its path and password;

     > For example:
     >
     > ```
>
     > appsettings.json
     >
     > "EncryptionCertificate": {
     >   "File": "./Usercube-Files.pfx",
     >   "Password": "secret",
     >   "EncryptFile": true
     > }
     >
     > ```
:::note
EncryptFile can stay set to false while verifying the agent installation, but for security reasons it must be set to true afterwards.
     :::

     :::tip
If the certificates' passwords contain @, then they must be escaped via the @ as first character of the strings.
     :::
   * **ApplicationUri** contains the server's address, provided by Netwrix Identity Manager (formerly Usercube) team when working in a SaaS environment;

     > For example:
     >
     > ```
>
     > appsettings.json
     >
     > "ApplicationUri": "http://localhost:5000"
     >
     > ```
:::tip
Do not write a / character at the end of the string.
     :::
   * **Cors** > **AllowAnyHeader**, **AllowAnyMethod** and **AllowCredentials** are set to `true`;

     ```
appsettings.json

       "Cors": {
           "AllowAnyHeader": "true",
           "AllowAnyMethod": "true",
           "AllowCredentials": "true"
       }
       
     ```
4. Open `appsettings.agent.json` and make sure that:

   * **OpenId** > **AgentIdentifier** specifies the agent's name which must match the XML configuration. See the [appsettings.agent](../../../../integration-guide/network-configuration/agent-configuration/appsettings-agent/index "appsettings.agent") topic for additional information..

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
     >         
     >         
     > ```
* **OpenId** > **OpenIdClients** > **Job** contains the non-hashed value of the password of "Job-Remote" provided by NETWRIX' team

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
and add the hashed value of this password to the `OpenIdClient` named `Job` from the XML configuration;

     > For example:
     >
     > ```
>
     > 
     >
     > ```
* **OpenId** > **DefaultOpenIdClient** is set to `Job`;

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
* **PasswordResetSettings** > **TwoFactorSettings** > **ApplicationUri** contains the server's address, provided by NETWRIX' team when working in a SaaS environment;

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
* **PasswordResetSettings** > **EncryptionCertificate** contains contains the path and password of the certificate used to secure password tokens;

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
     >       "File": "../Usercube.pfx",
     >       "Password": "secret"
     >   }
     > }
     >
     > ```
* **PasswordResetSettings** > **MailSettings** > **PickupDirectory** is set to the `Mails` folder and **FromAddress** to `no-reply@.com`;

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
     >       "File": "../Usercube.pfx",
     >       "Password": "secret"
     >   },
     >   "MailSettings": {
     >       "PickupDirectory": "../Mails",
     >       "FromAddress": "no-reply@contoso.com"
     >   }
     > }
     >
     > ```
* **SourcesRootPaths** contains the path to the `Sources` folder.

     > For example:
     >
     > ```
>
     > appsettings.agent.json
     >
     > "SourcesRootPaths": [
     >   "C:/Usercube/Sources"
     > ]
     >
     > ```
## Next Steps

To continue,see the local server to [Install IIS via Server Manager](../iis-installation/index).
# Configure the Agent's Settings

This guide shows how to configure the agent's application settings via the ```web.config```, ```appsettings.json``` and ```appsettings.agent.json``` files.

## Overview

Usercube provides JSON files to configure varied application settings, named [```appsettings.json```](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/agent-configuration/appsettings/index.md) and [```appsettings.agent.json```](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md).

This page describes the optimal configuration of the production agent's application settings.

## Configure the Agent's Settings

Configure the agent's settings by proceeding as follows:

1. From the ```Runtime/Agent``` folder, copy the files ```appsettings.json```, ```appsettings.agent.json``` and ```web.config``` and paste them in the ```Runtime``` folder, thus replacing the pre-existing ones.
2. Open ```web.config``` and make sure that, in the ```aspNetCore``` tag, the value of ```arguments``` is set to ```./Usercube-Agent.dll```.

   When needing to get the agent's logs, set also ```stdoutLogEnabled``` to ```true```. See more details in [Microsoft's documentation](https://learn.microsoft.com/fr-fr/aspnet/core/host-and-deploy/iis/logging-and-diagnostics?view=aspnetcore-7.0).

   ```

    web.config

    ...
    <aspNetCore processPath="dotnet" arguments="./Usercube-Agent.dll" stdoutLogEnabled="true" stdoutLogFile="../Temp/stdout-server.log" hostingModel="inprocess">     ...
    </aspNetCore> ...
    
   ```
3. Open ```appsettings.json``` and make sure that:

   - __License__ contains a valid license;
   - __IdentityServer__ contains the encryption certificate's path and password provided by NETWRIX' team, in order to secure agent/server identification;

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
   - you get an encryption certificate which will be used to encrypt specific files such as logs or temporary files, and that __EncryptionCertificate__ contains its path and password;

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

     __EncryptFile__ can stay set to ```false``` while verifying the agent installation, but for security reasons it must be set to ```true``` afterwards.

     If the certificates' passwords contain ```@```, then they must be escaped via the ```@``` as first character of the strings.
   - __ApplicationUri__ contains the server's address, provided by NETWRIX' team when working in a SaaS environment;

     > For example:
     >
     > ```
     >
     > appsettings.json
     >
     > "ApplicationUri": "http://localhost:5000"
     >
     > ```

     Do not write a ```/``` character at the end of the string.
   - __Cors__ > __AllowAnyHeader__, __AllowAnyMethod__ and __AllowCredentials__ are set to ```true```;

     ```

       appsettings.json

       "Cors": {
           "AllowAnyHeader": "true",
           "AllowAnyMethod": "true",
           "AllowCredentials": "true"
       }
       
     ```
4. Open ```appsettings.agent.json``` and make sure that:

   - __OpenId__ > __AgentIdentifier__ specifies the agent's name which must match the XML configuration. [See more details](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md).

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
   - __OpenId__ > __OpenIdClients__ > __Job__ contains the non-hashed value of the password of "Job-Remote" provided by NETWRIX' team�

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

     � and add the hashed value of this password to the ```OpenIdClient``` named ```Job``` from the XML configuration;

     > For example:
     >
     > ```
     >
     > <OpenIdClient Identifier="Job" HashedSecret="K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" ConsolidationMode="Merge" />
     >
     > ```
   - __OpenId__ > __DefaultOpenIdClient__ is set to ```Job```;

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
   - __PasswordResetSettings__ > __TwoFactorSettings__ > __ApplicationUri__ contains the server's address, provided by NETWRIX' team when working in a SaaS environment;

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
   - __PasswordResetSettings__ > __EncryptionCertificate__ contains contains the path and password of the certificate used to secure password tokens;

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
   - __PasswordResetSettings__ > __MailSettings__ > __PickupDirectory__ is set to the ```Mails``` folder and __FromAddress__ to ```no-reply@<organization>.com```;

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
   - __SourcesRootPaths__ contains the path to the ```Sources``` folder.

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

To continue, [configure the local server to install IIS via Server Manager](/versioned_docs/usercube_6.1/usercube/user-guide/deploy/production-agent-installation/iis-installation/index.md).

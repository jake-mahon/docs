---
sidebar_position: 1029
title: Server Configuration
---

# Server Configuration

Identity Manager Server's technical configuration includes settings on end-user authentication, database connection and some general-purpose settings.

## Configuration Files

The Server configuration is included in the Server's appsettings set.

The appsettings set content can be written to appsettings.json in the Server's working directory or to environment variables. See the [Architecture](../../architecture/index "Architecture") topic for additional information.

The server appsettings supported attributes and sections are described in the following sections:

* Database Connection
* End-User Authentication
* General-Purpose Settings

See the[Connection to the Database](database-connection/index "Database Connection"), [End-User Authentication](end-users-authentication/index "End-User Authentication") and [Application Settings](general-purpose/index "Application Settings") topics for additional information.

## Secret and Certificate Management

All the certificates and secrets present in the settings can be loaded with an Azure Key Vault.

See the [Azure Key Vault](../agent-configuration/azure-key-vault/index "Azure Key Vault") topic for additional information.

## Default Configuration

The default behavior of the server configuration is outlined through an example.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
{  
    "IdentityServer": {  
        // Token signing certificate stored in a file  
        "X509KeyFilePath": "",  
        // Optional certificate password  
        "X509KeyFilePassword": ""  
    },  
    "Authentication": {  
        "RequireHttpsMetadata": false,  
        "TestUserStore": {  
            "Enabled": "",  
            "Password": ""  
        },  
        "AllowLocalLogin": true  
    }  
}  

```
---
sidebar_position: 400
title: Configure the Fulfill Task for a Connector
---

# Configure the Fulfill Task for a Connector

This guide shows how to create the adequate configuration to add the fulfill task of a given system (here LDAP) in a job.

For Identity Manager fill an LDAP some configuration element are necessary.

## Resource Type Mapping

This configuration is to use the fill for the LDAP and configure the Reset Password.

```
                        

```
## Add connection information to AD Connect

The [LDAP](../../../connectors/references-connectors/ldap/index) connection information define this section to add all information to use the AD Fulfillment.

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "ADFulfillment": {
      "Servers": [
        {
          "Server": "paris.contoso.com",
          "BaseDN": "DC=paris,DC=com"
        }
      ],
      "AuthType": "Basic",
      "Login": "CN=exampleCn,DC=exampleDc1,DC=exampleDc2",
      "Password": "Password",
      "AsAdLds": "true"
    }
  }
}
```
After defining this settings, encrypt this JSON file with [Usercube-Protect-X509JsonFile](../../../executables/references/protect-x509jsonfile/index "Usercube-Protect-X509JsonFile").

## Configure The FulfillTask

Configure The task with the same ResourceType using in ResourceTypeMapping. It's possible to use a connector instead of ResourceType.

```
      

```
Integrate this Task in the job that provisions the AD connector.

```
  ...
          ...


```
---
sidebar_position: 558
title: Okta
---

# Okta

This connector exports and fulfills entries from/to Okta application.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Okta.png)

## Overview

Okta is an access management solution that provides SSO and federation capabilities for single sign-on, multi-factor authentication, and API access management. Okta's platform is widely used by organizations to protect accesses for digital identities in an increasingly complex and interconnected digital world.

### Prerequisites

Implementing this connector requires:

* Reading first the appsettings documentation
* An Okta Token with specific permissions on the target instance

See the [appsettings.agent](../../../network-configuration/agent-configuration/appsettings-agent/index "appsettings.agent") topic for additional information.

### Configuration

To configure the Okta connector it is necessary to:

**Step 1 –** Create a new user for Netwrix Identity Manager (formerly Usercube).

In order to do so you must connect to the Okta administration console `https://myexample-admin.okta.com` and create a new Netwrix Identity Manager (formerly Usercube) user.

**NOTE:** For some Okta deployments it is possible to create a service account or to Manage an Okta user account as a service account.

**Step 2 –** Assign administrator role and permissions to the Netwrix Identity Manager (formerly Usercube) user.

**Step 3 –** Generate a Token for the Netwrix Identity Manager (formerly Usercube) user.

See the [Okta documentation](https://help.okta.com/en-us/content/topics/users-groups-profiles/service-accounts/service-accounts-overview.htm "Okta documentation") for additional information.

### Export

This connector exports a list of users, groups, applications with their attributes specified in the connector's configuration, to CSV files.

### Configuration

This process is configured through a connection in the UI and/or the XML configuration, and in the appsettings.agent.json > Connections section.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
appsettings.agent.json  
{  
  ...  
  "Connections": {  
    ...  
    "": {  
      ...  
    }  
  }  
}  

```
The identifier of the connection and thus the name of the subsection must:

* Be unique
* Not begin with a digit
* Not contain , :, ", /, \, |, ?, \* and \_.

For example:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
appsettings.agent.json  
{  
    "Connections": {  
        ...  
        "OktaExportFulfillment": {  
            "Server": " https://.okta.com",  
            "ApiKey": "",  
        }  
    }  
}  

```
### Setting attributes

| Name | Type | Description |
| --- | --- | --- |
| Server required | String | URI of the data system. |
| ApiKey required | String | User token value. |

### Output details

This connector can create, delete and update users, groups and applications, and is meant to generate the following to the ExportOutput folder :

* A CSV file, named \_users.csv, with one column for each property either having a ConnectionColumn or which is used in an entity association;
* A CSV file, named \_groups.csv, with one column for each property either having a ConnectionColumn or which is used in an entity association;
* A CSV file, named \_apps.csv, with one column for each property either having a ConnectionColumn or which is used in an entity association;
* A CSV file, named \_groupsapps.csv, with one column for each property either having a ConnectionColumn or which is used in an entity association;
* A CSV file, named \_groupsusers.csv, with one column for each property either having a ConnectionColumn or which is used in an entity association;

For example, with the following entity type mapping for users:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
      
      
      
      
      
      
      
      
      
      
      
      
      
….    
  
  
    
      
      
      
      
      
      
      
      
      
      
      
    

```
And the following entity type mapping for groups:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
      
      
      
      
      
      
      
      
      
    
  
    
      
      
      
      
      
      
      
    

```
And the following entity type mapping for applications:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
    

```
Then we will have `C:/UsercubeContoso/Sources/OktaExportFulfillment_users.csv` as follows:

```
id, status, created, activated, statusChanged, lastLogin, lastUpdated, passwordChanged, type.id, profile.city, profile.costCenter, profile.countryCode, profile.department, profile.displayName
```
And `C:/UsercubeContoso/Sources/OktaExportFulfillment_groups.csv` as follows:

```
id, created, lastUpdated, lastMemberShipUpdated, type, profile.description, profile.name
```
And `C:/UsercubeContoso/Sources/OktaExportFulfillment_apps.csv` as follows:

```
id, created, lastUpdated, status, name, label
```
### Fulfill

The Okta connector writes to Okta to create, update and delete entries, initiated manually through the UI or automatically by enforcing the policy. See the [Evaluate Policy](../../../role-assignment/evaluate-policy/index "Evaluate Policy") topic for additional information.

### Configuration

Same as for export, fulfill is configured through connections.

For example:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
appsettings.agent.json  
{  
    "Connections": {  
        ...  
        "OktaExportFulfillment": {  
            "Server": " https://.okta.com",  
            "ApiKey": "",  
        }  
    }  
}  

```
### Password reset

The password reset settings configuration is described in the appsettings.agent.json file. See the [appsettings.agent](../../../network-configuration/agent-configuration/appsettings-agent/index "appsettings.agent") topic for additional information.

### Credential protection

Data protection can be ensured through:

* [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection"), configured in the appsettings.encrypted.agent.json file
* An [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection")
* A [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection")Vault able to store Okta Login, Password, Account and Server.
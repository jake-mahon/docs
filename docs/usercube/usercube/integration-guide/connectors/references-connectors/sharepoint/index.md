# SharePoint

This connector exports sites, folders, groups and permissions from a [SharePoint](https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration) instance.

This page is about Storage/SharePoint.

![Package: Storage/SharePoint](/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/sharepoint/packages_sharepoint_v603.webp)

## Overview

SharePoint is a system used by organizations to store, organize, share and access information.

## Prerequisites

Implementing this connector requires an account with the permissions to access all items and read their entitlements.

### Configuration

This process is configured through a connection in the UI and/or the XML configuration, and in the ```appsettings.agent.json > Connections``` section:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
                   
                        appsettings.agent.json  
{  
  ...  
  "Connections": {  
    ...  
    "<ConnectionIdentifier>": {  
      ...  
    }  
  }  
}  
                
```

The identifier of the connection and thus the name of the subsection must:
  
- Be unique.
  
- Not begin with a digit.
  
- Not contain ```<```, ```>```, ```:```, ```"```, ```/```, ```\```, ```|```, ```?```, ```*``` and ```_```.

The following example scans the example.sharepoint.com SharePoint at the more detailed level (ListItem) with the account [account.example@acme.com](mailto:account.example@usercube.com):

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
appsettings.agent.json  
{  
  ...  
  "Connections": {  
    ...  
    "SharePointExport": {  
        "Server": "https://example.sharepoint.com/",  
        "Scanlevel": "ListItem",  
        "Login": "account.example@usercube.com",  
        "Password": "account'sexamplepassword",  
        "CsvUrls": "C:/Usercube/source/SP_others.csv¤URL¤,"  
    }  
  }  
}
```

#### Setting attributes

| Name | Type | Description |
| --- | --- | --- |
| Login   required | String | Login of the account used to access files and read their entitlements. |
| Password   required | String | Password of the account used to access files and read their entitlements. |
| Server   required | String | URL of the SharePoint website to scan. |
| Domain   optional | String | Domain, sometimes needed in addition to Login to make the connection to the SharePoint server. |
| TimeOut   default value: 300000 | Int32 | Timeout (in milliseconds) for requests. |
| Scanlevel   default value: ListItem | Scanlevel | Level of scan to be performed, from less to more detailed: Site; List; and ListItem. |
| CsvUrls   optional | String | Path, column and separator (split by ¤) of the CSV file containing the other sites to be scanned.  Useful when scanning a SharePoint with a root site (https://example.sharepoint.com) with other sites (https://example.sharepoint.com/sites/OtherSite) which are not sub-sites (https://example.sharepoint.com/SubSite). Sub-sites don't need to be provided through a CSV file because they are found from the root site. |

### Limitations

Synchronization in incremental mode does not retrieve user account changes, because SharePoint is not able to provide this information through its API.

To avoid unnecessary scanning and to increase performance, the connector in incremental mode does not scan user accounts from the sites given through CsvUrls. However, it still retrieves the folders, groups, permissions and the links between users and these elements.

When needing to retrieve all of user account information, then go through complete synchronization instead of incremental.

### Output details

This connector is meant to generate to the Export Output folder the following CSV files:

```<connectionIdentifier>_Entity.csv```, with the following columns:

- __command__— empty for complete synchronization, and ```merge``` for incremental;
- __Collection__— SharePoint server's URL where the information was found;
- __Id__— Identifier of the entity;
- __SharePointId__— Identifier of the entity in the scanned site;
- __Name__— name of the entity;
- __Description__— description of the entity;
- __PrincipalType__— type of the entity, for example ```User```, ```SecurityGroup``` or ```SharePointGroup```, etc.;
- __Email__— email of the user;
- __IsEmailAuthenticationGuestUser__— ```true``` if the email is for the authentication of a guest user;
- __IsSiteAdmin__— ```true``` if the user is a site administrator;
- __IsShareByEmailGuestUser__— ```true``` if the user is a guest invited by email;
- __AadObjectId__— Microsoft Entra ID (formerly Microsoft Azure AD)'s identifier of the entity;

```<connectionIdentifier>_GroupMember.csv```, with the following columns:

- __command__;
- __Collection__;
- __Group\_Id__: Identifier of the group;
- __Entity\_Id__: Identifier of the entity related to the group member;

```<connectionIdentifier>_GroupMemberScanFail.csv```, with the following columns:

- __command__;
- __Collection__;
- __Id__;
- __Name__;
- __Description__;
- __PrincipalType__;

```<connectionIdentifier>_Role.csv```, with the following columns:

- __command__;
- __Collection__;
- __Id__;
- __Name__;
- __Description__;
- __Permissions__: permissions concatenated together with line breaks;

```<connectionIdentifier>_RoleAssignment.csv```, with the following columns:

- __command__;
- __Collection__;
- __Key__— concatenation (with ```-```) of the ```Role_Id```, the ```Entity_Id``` and the ```SecurableObject_Key```;
- __Role\_Id__— Identifier of the role;
- __Entity\_Id__— Identifier of the entity related to the role;
- __Entity\_Name__— name of the group member;
- __SecurableObject\_Key__— concatenation (with ```|```) of the ```Collection``` and the relative URLs where the object was found;

```<connectionIdentifier>_SecurableObject.csv```, with the following columns:

- __command__;
- __Key__— concatenation (with ```|```) of the ```Collection``` and the relative URLs where the object was found;
- __Collection__;
- __Level__— level where the securable object was found, among: ```Site```; ```List```; ```ListItem```;
- __Label__— title or display name of the securable object;
- __ParentKey__— key of the securable object's parent;
- __ScanStatus__— status of the scan (success or fail);
- __HasUniqueRoleAssignments__— ```true``` if entitlement inheritance is blocked for this securable object;

```<connectionIdentifier>_SecurableObjectRightInheritance.csv```, with the following columns:

- __command__;
- __Collection__;
- __SecurableObject\_Key__;
- __Inheritance\_Key__— key of the ancestor object that the securable object gets its inherited rights from;

```<connectionIdentifier>_SecurableObjectScanFail.csv```, with the following columns:

- __command__;
- __Key__: concatenation (with ```|```) of the ```Collection``` and the relative URLs where the object was found;
- __Collection__;
- __Level__;
- __Label__;
- __ParentKey__;
- __HasUniqueRoleAssignments__.

## Fulfill

Identity Manager's fulfill functionality can add and remove members from existing SharePoint groups.

### Configuration

Same as for export, fulfill is configured through connections.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
appsettings.agent.json  
{  
  ...  
  "Connections": {  
    ...  
    "SharePointFulfillment": {  
        "Server": "https://example.sharepoint.com/",  
        "Scanlevel": "ListItem",  
        "Login": "account.example@usercube.com",  
        "Password": "account'sexamplepassword",  
        "CsvUrls": "C:/Usercube/source/SP_others.csv¤URL¤,"  
    }  
  }  
}
```

#### Setting attributes

| Name | Type | Description |
| --- | --- | --- |
| Login   required | String | Login of the account used to access files and read their entitlements. |
| Password   required | String | Password of the account used to access files and read their entitlements. |
| Server   required | String | URL of the SharePoint website to scan. |
| Domain   optional | String | Domain, sometimes needed in addition to Login to make the connection to the SharePoint server. |
| TimeOut   default value: 300000 | Int32 | Timeout (in milliseconds) for requests. |

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- RSA encryption, configured in the ```appsettings.encrypted.agent.json``` file;
- An Azure Key Vault safe;

| Attribute | Naming Convention for the Key in Azure Key Vault |
| --- | --- |
| Domain | ```Connections--<identifier>--Domain``` |
| Login | ```Connections--<identifier>--Login``` |
| Password | ```Connections--<identifier>--Password``` |
| Scanlevel | ```Connections--<identifier>--Scanlevel``` |
| TimeOut | ```Connections--<identifier>--TimeOut``` |
| Server | ```Connections--<identifier>--Server``` |
| CsvUrls | ```Connections--<identifier>--CsvUrls``` |

- A CyberArk Vault able to store SharePoint's ```Login``` and ```Password```.

See the [
RSA Encryption
](/docs/usercube/usercube/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md), [Azure Key Vault](/docs/usercube/usercube/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md), and [CyberArk's AAM Credential Providers
](/docs/usercube/usercube/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md)topics for additional information.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be retrieved by Identity Manager from ```appsettings.cyberark.agent.json```.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
                          
                            appsettings.cyberark.agent.json  
{  
  ...  
  "Connections": {  
    ...  
    "SharePointFulfill": {  
        "Login": "SharePointSettings",  
        "Password": "SharePointSettings"  
    }  
  }  
}  
                    
```

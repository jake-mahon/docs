---
sidebar_position: 533
title: For Microsoft Entra ID
---

# For Microsoft Entra ID

See the[Microsoft Entra ID](../../../references-connectors/microsoftentraID/index "Microsoft Entra ID") topic for additional information about creating a connector.

## Prerequisites

The following are prerequisites for the connector creation.

Configure the external system

See the [Register for Microsoft Entra ID](../../azuread-register/index "Register for Microsoft Entra ID") topic for additional information on how to register Identity Manager.

Configure Identity Manager

See the [Microsoft Entra ID](../../../references-connectors/microsoftentraID/index "Microsoft Entra ID") topic for additional information on the connection.

For example:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
appsettings.agent.json  
{  
  ...  
  "Connections": {  
    ...  
    "MicrosoftEntraIDContosoNYExport": {  
      "ApplicationId": "",  
      "ApplicationKey": "",  
      "TenantId": "",  
      "MicrosoftGraphPathApi": "",  
    }  
  }  
}
```
## Build the Connector

See the [Connect to a Managed System](../../../../../user-guide/set-up/connect-system/index "Connect to a Managed System") topic for additional information on how to build a connector via the UI, with its connections, entity types and mappings.

This example declares the MicrosoftEntraID connector on the Local agent:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID Connector.xml  
  
  
  
    ...  
      
    ...  
  

```
### Entity model

The entity model should match as closely as possible the structure of the relevant Microsoft Entra ID data, and be aligned with Identity Manager's repository. See the [Entity Model](../../../../entity-model/index "Entity Model") topic for additional information.

For example, Microsoft Entra ID's Users and Groups can be described by entity types, and group memberships by entity associations.

The following example defines an entity type named MicrosoftEntraID\_DirectoryObject to match the attributes selected for extraction from the Microsoft Entra ID instance:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID Connector.xml  
...  
  
      
      
      
      
      
      
      
      
      
      
      
      
     quot;true" />  
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
  
      
      
      
      
      
      
  
      
      
      
  
...  

```
Notice the omitted TargetColumnIndex attribute for the members and memberOf properties. This means that these properties are navigation properties.

The following example declares an n-n association between two MicrosoftEntraID\_DirectoryObjects, where:
  
- memberOf is a collection of Groups IDs of which this MicrosoftEntraID\_DirectoryObject is a member;
  
- members from a Group is a collection of MicrosoftEntraID\_DirectoryObjects IDs which are members of this Group.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID Connector.xml  
...  
  
...  

```
Notice the format of the Property1 and Property2 XML attributes: the name of the entity type is followed by a colon (:) and the name of an entity property. It is a binding describing in one expression, the target entity type and property. See the[Binding](../../../../toolkit/xml-configuration/metadata/binding/index "Binding") topic for additional information.

Entity mapping

Each property of the entity type must be mapped to an attribute among those exported from Microsoft Entra ID.

So each element of an entity type mapping is meant to link a property from the CSV file containing the exported Microsoft Entra ID attributes to a property from the entity type.

For example:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID Connector.xml  
...  
  
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
  
      
      
      
      
      
      
  
    
...
```
As a result, synchronization updates Identity Manager's UR\_Resource table based on the data of the exported CSV files.
Considering that AzureAD\_DirectoryObject has never been synchronized, the UR\_Resource table receives a new line for which the 47th column (City) is filled in with the city column from the `C:/UsercubeDemo/Temp/ExportOutput/AzureADContosoNYExport_directoryobjects.csv` file.

An association mapping is the equivalent of an entity type mapping, but for the properties of an entity association instead of an entity type.

The following example describes the "actual group/member" associations between MicrosoftEntraID\_DirectoryObjects.

These associations are exported from the Microsoft Entra ID system into the `C:/UsercubeDemo/Temp/ExportOutput/MicrosoftEntraIDContosoNYExport_members_group.csv` file, containing, for each group, a list of members in the following format, with id being the id of an Microsoft Entra ID object and groupId the matching Group's id to which the object belongs:

| Id | GroupId |
| --- | --- |
| 12 | 454 |
| 3 | 454 |
| 4 | 454 |
| 5 | 333 |
| 2 | 333 |

The following entity association mapping maps the properties from the MicrosoftEntraID\_DirectoryObject\_members entity association:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID Connector.xml  
...  
  
  
...  

```
Here the members property of the MicrosoftEntraID\_DirectoryObject entity (written to the Property1 attribute of the MicrosoftEntraID\_DirectoryObject\_members entity association) is filled in by values from the groupId column (written to the Column1 attribute of the MicrosoftEntraID\_DirectoryObject\_members entity association mapping) of the CSV file.

And the membersOf property of the MicrosoftEntraID\_DirectoryObject entity (written to the Property2 attribute of the MicrosoftEntraID\_DirectoryObject\_members entity association) is filled in by values from the Id column (written to the Column2 attribute of the MicrosoftEntraID\_DirectoryObject\_members entity association mapping) of the CSV file.

## Display the Connector in the UI

This is how the connectors are displayed on the UI.

Menu items

Each connector should be configured with a menu item, which is created automatically when working via the UI.

![Menu Item - Azure AD Connector](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Howtos_azure_menuItem_V603.png)

In XML, it should look like this:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID Nav.xml  
  

```
Displayed resources

See the [Organize Resources' Datasheets](../../../../../user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/index "Organize Resources' Datasheets") topic for additional information on how to set the display properties via the UI.

For example:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID UI.xml  
  
  
      
      
  

```
![Navigation Properties - Azure AD Connector](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Howtos_azure_navproperties_V603.png)

Microsoft Entra ID's resources are listed in a table.

For example:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID UI.xml  
  
  
      
      
      
  

```
![Display Table - Azure AD Connector](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Howtos_azure_table_V603.png)

This is how the resources are displayed on the UI.

Resources' display names

See the [Set Resources' Display Names](../../../../../user-guide/set-up/connect-system/entity-type-creation/display-name-setting/index "Set Resources' Display Names") topic for additional information on how to set resources' display names via the UI.

For example:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID UI.xml  
  

```
Permissions

In order to access the connector, any user must have the right permissions.

The following example sets the permissions to access the Microsoft Entra ID connector and resources for the Administrator profile.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
Conf/MicrosoftEntraID/MicrosoftEntraID Profile Administrator.xml  
  
  
      
      
  
  
  
      
  

```
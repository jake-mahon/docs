---
sidebar_position: 531
title: Fulfill Microsoft Exchange via PowerShell
---

# Fulfill Microsoft Exchange via PowerShell

This guide shows how to set up a PowerShell connector to fulfill data in Microsoft Exchange Server. It will focus on registering Identity Manager within the target Microsoft Exchange instance, configuring the connector, and building the job to perform a regularly scheduled fulfillment. Of course, any other system compatible with PowerShell can be chosen.

## Prerequisites

### External System Configuration

Check the following prerequisites:

* [PowerShellProv](../../references-connectors/powershellprov/index "PowerShellProv")
* [Microsoft Exchange](../../references-connectors/microsoftexchange/index "Microsoft Exchange")
* [Active Directory](../../references-connectors/activedirectory/index "Active Directory")

Let's consider a simplified system, including three parts:

1. Identity Manager
2. Microsoft Exchange Server
3. Active Directory

:::note
For more details on the complete system, see Exchange architecture.
:::

Identity Manager can:

* export and fulfill AD entries independently of Microsoft Exchange.
* export mailboxes from Microsoft Exchange independently of AD.
* fulfill a mailbox but Identity Manager needs first to fulfill an AD entry and then, launch the Microsoft Exchange Fulfill.

### Identity Manager Configuration

This step sets up the Identity Manager Agent to use the Active Directory and PowerShell connectors in order to fulfill the Microsoft Exchange mailboxes.

The settings must be entered in `appsettings.agent.json > Connections`. For more details, see the [Active Directory](../../references-connectors/activedirectory/index "Active Directory") and [PowerShellProv](../../references-connectors/powershellprov/index "PowerShellProv") sections.

#### Add Sections

As explained previously, the simplified system consists of Identity Manager and two other systems. It means that settings are required in `appsettings.agent.json` to connect with the systems. See the [Microsoft Exchange](../../references-connectors/microsoftexchange/index "Microsoft Exchange"), [PowerShellProv](../../references-connectors/powershellprov/index "PowerShellProv"), and[Active Directory](../../references-connectors/activedirectory/index "Active Directory") topics for additional information.

> This example contains export and fulfillment settings for the Active Directory and for Microsoft Exchange:
>
> ```
> appsettings.agent.json
> {
>     "Connections": {
>     ...
>     "ADFulfillment": {
>       "Servers": [
>         {
>           "Server": "...",
>           "BaseDN": "..."
>         },
>         {
>           "Server": "paris.contoso.com",
>           "BaseDN": "DC=defense,DC=paris,DC=com"
>         }
>       ],
>       "AuthType": "Basic",
>       "Login": "...",
>       "Password": "...",
>       "Filter": "(objectclass=*)",
>       "EnableSSL": true,
>     }
>     "MicrosoftExchangeExportFulfillment": {
>       // Export Microsoft Exchange settings
>       ...
>       // Fulfillment Microsoft Exchange settings
>       "PowerShellScriptPath": "C:/UsercubeDemo/Scripts/Fulfill-Exchange.ps1",
>       "Options": {
>         "AuthType": "Basic",
>         "Server": "http://ex-server1/powershell",
>         "Login": "PIXELABS\\Administrateur",
>         "Password": "Secret123"
>       }
>     },
>   }
> }
> ```
As this guide focuses on the fulfillment of an external system, export settings will be omitted.

The Fulfill-PowerShell needs a script whose path is defined by the attribute **PowerShellScriptPath**. Identity Manager provides a script in the SDK in `Usercube.Demo/Scripts/Fulfill-Exchange.ps1`.See the [Write a PowerShell Script for Provisioning](../write-fulfill-powershell-script/index "Write a PowerShell Script for Provisioning") topic for additional information on how to write a customized script.

To define and apply additional settings when authenticating to an external system, we can set the attribute Options and add required parameters for authentication.

In the example above, the `Basic` AuthType was chosen to show how to fill the credentials, but it isn't mandatory to use this . See the [Microsoft Exchange](../../references-connectors/microsoftexchange/index "Microsoft Exchange") topic for additional information.

For pedagogical reasons, this guide focuses on the simplest way to set up the fulfillment, but it's not the most secure. Hence, it is strongly recommended to use Kerberos AuthType or credentials protection via Azure Key Vault or CyberArk in a production environment. See the [PowerShellProv](../../references-connectors/powershellprov/index "PowerShellProv") topic for additional information.  
  
Netwrix Identity Manager (formerly Usercube) recommends completing this guide once, testing the configuration, and only then, switching to a more secure way of storing credentials.

## Build the Connector

To be used for export tasks, a connector must be declared in the applicative configuration and linked to an Agent. See the [Toolkit for XML Configuration](../../../toolkit/index "Toolkit for XML Configuration") topic for additional information.

It is strongly recommended that the applicative configuration be stored in the working directory Conf folder as a set of xml files organized by connector. To follow this structure, create a MicrosoftExchange directory in the Conf folder.

### Declare a Connector

In the `MicrosoftExchange` directory, create a `MicrosoftExchange Connector.xml` file. This file contains the declaration of the connector and the associated [Entity Model](../../../entity-model/index "Entity Model").

> This example declares the `MicrosoftExchange`[Connector](../../../toolkit/xml-configuration/connectors/connector/index "Connector") on the `Local` agent, and the [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") linked to the previously defined `MicrosoftExchangeExportFulfillment` JSON section (see the example above):
>
> ```
> Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
>     ...
>                 ...
> 
>
> ```
### Write Entity Types

The [Entity Model](../../../entity-model/index "Entity Model") should match as closely as possible the structure of the Microsoft Exchange data relevant for Identity Manager. It is designed by analyzing the Microsoft Exchange data structure, and describing said data with Entity Types and [Entity Association](../../../toolkit/xml-configuration/metadata/entityassociation/index "Entity Association").

Eventually, it is up to the integration team to design the [Entity Model](../../../entity-model/index "Entity Model") that best serves the Role Model needs. It will most likely be refined iteratively throughout the project integration. See the [Assignment Policy](../../../role-model/role-model-rules/index "Assignment Policy") topic for additional information.

A good starting point for the Entity Model is to mirror the shape of the Microsoft Exchange mailboxes and databases.

##### Example

This example defines the entity types named MicrosoftExchange\_Database and MicrosoftExchange\_Mailbox.

Notice the omitted **TargetColumnIndex** attribute and the presence of Type="ForeignKey" for the Mailboxes and Database properties. If omitted, this attribute indicates that the properties are navigation properties.

```
Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
...
                                                                                                        ...

```
### Write the Entity Type Mapping

The entity type must be mapped, on a property by property basis, to the exported attributes of Microsoft Exchange mailboxes and databases (namely, the columns of the CSV source files generated by the export). The [Entity Type Mapping](../../../toolkit/xml-configuration/connectors/entitytypemapping/index "Entity Type Mapping") element maps scalar properties from a CSV source file to an EntityType.

##### Example

In this example, the CSV source files are microsoftexchange\_databases.csv and microsoftexchange\_mailboxes.csv located in the [Application Settings](../../../network-configuration/agent-configuration/appsettings/index "Application Settings") folder.

```
Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
...
                                                                                                    ...

```
### Write Entity Associations

Entity types are associated through their navigation properties with [Entity Association](../../../toolkit/xml-configuration/metadata/entityassociation/index "Entity Association") elements.

##### Example

The following example declares a `1:n` (`'one-to-many'`) association. One `MicrosoftExchange_Database` may be referenced by any number of `MicrosoftExchange_Mailbox`*(es)*, but each `MicrosoftExchange_Mailbox` can only reference one `MicrosoftExchange_Database`.

The properties used for the association must be `Primary` or `Unique` keys.

```
Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
...
...

```
### Write the Entity Association Mapping

The [Entity Association Mapping](../../../toolkit/xml-configuration/connectors/entityassociationmapping/index "Entity Association Mapping") element maps column values from a CSV source file to an EntityType navigation property.

##### Example

This example describes the mailbox/database associations between MicrosoftExchange\_Mailbox and MicrosoftExchange\_Database.
Thanks to the **Export** Microsoft Exchange job, the file microsoftexchange\_mailboxes.csv is generated.
This file looks like:

```
Command;Property_1;Property_2;...;Property_N
Add;value1;value2;...;valueN

```
Each line of the CSV file corresponds to a `MicrosoftExchange_Mailbox`.
The properties used in the association are:

* `Guid`: the Guid of the `MicrosoftExchange_Mailbox`.
* `Name`: the name of the `MicrosoftExchange_Database` referencing the `MicrosoftExchange_Mailbox` (name is unique among the databases).

The following table can be extracted from the CSV file:

| Guid | Name |
| --- | --- |
| 4ecbdba7-e984-409a-a9ac-6027ac81fa42 | Mailbox Database 1882404652 |
| 1d3e67a2-7d44-46f1-a300-afa73ae120f4 | DB1 |
| aab57e15-847b-4e16-96f1-82ebc54c01e2 | DB1 |
| ea513604-3758-463f-9b72-6c42ea949260 | DB2 |

It means that the MicrosoftExchange\_Mailbox with Guid ? 4ecbdba7-e984-409a-a9ac-6027ac81fa42 is contained in the MicrosoftExchange\_Database with Name ? Mailbox Database 1882404652. This association is created for every line in the CSV file, and therefore also for every line in the table above.

This can be enabled with an **EntityAssociationMapping** like in the following XML:

```
Conf/MicrosoftExchange/MicrosoftExchange Connector.xml
...
...

```
:::note
The CSV file microsoftexchange\_mailboxes.csv must be exported to the export output folder. See the Application Settings topic for additional information.
:::

## Build the Role Model

A [Entitlement Management](../../../../introduction-guide/overview/entitlement-management/index "Entitlement Management") must be created with the following elements:

* `ResourceType`
* `ResourceTypeMapping`
* `ResourceCorrelationRule`
* `SingleRole` (optional)

### Resource Type

A [Resource Type](../../../toolkit/xml-configuration/provisioning/resourcetype/index "Resource Type") is a conceptual model of an information system object, here a mailbox.

The resource type contains several rules:

* Type Rule which assigns a resource to a user
* which specifies the value to be set to an assigned resource scalar property
* Resource Type which specifies a value to be set to an assigned resource multi-valued navigation property

#### Example

```
Conf/MicrosoftExchange/Directory User Role Model MicrosoftExchange.xml"
...
            ...

```
The TargetEntityType is MicrosoftExchange\_Mailbox and the SourceEntityType is Directory\_User.

This Resource Type allows Identity Manager to compute the values used when fulfilling the external system.

Finally, the Navigation Rule sets the property Database of the entity MicrosoftExchange\_Mailbox. See the [Fulfill Microsoft Exchange via PowerShell](# "Fulfill Microsoft Exchange via PowerShell") topic for additional information.

### Resource Type Mapping

A [Resource Type Mappings](../../../toolkit/xml-configuration/connectors/resourcetypemappings/index "Resource Type Mappings") element contains all the resource types (sharing the same Identifier) that can be provisioned into targeted platforms, applications, and systems.

#### Example

```
Conf/MicrosoftExchange/Directory User Role Model MicrosoftExchange.xml"
...
...

```
In this example, `Fulfill-PowerShell` requires only a simple `ResourceTypeMapping` (including only one `Identifier` and one `Connection`):

* The **Identifier** attribute is `MicrosoftExchange_Mailbox_NominativeUser` which corresponds to the identifier of the resource type defined earlier.
* The **Connection** attribute is `MicrosoftExchangeExportFulfillment` which corresponds to the section in `appsettings.agent.json` containing the parameters used to provision the external system.

### Resource Correlation Rule

A [Resource Correlation Rule](../../../toolkit/xml-configuration/provisioning/resourcecorrelationrule/index "Resource Correlation Rule") is used to correlate the resource `MicrosoftExchange_Mailbox_NominativeUser` with the `Directory_User`.

#### Example

```
Conf/MicrosoftExchange/NotImplementInAutoTest/Directory User Role Model MicrosoftExchange.xml"
...
...

```
This rule means if the `SamAccountName` (`MicrosoftExchange_Mailbox`) is equal to the `Login` (`Directory_User`) then, the `ResourceType` can be linked to the `User` with a confidence rate of 100%.

### Single Role (optional)

A [Single Role](../../../toolkit/xml-configuration/provisioning/singlerole/index "SingleRole") encapsulates system entitlements.

#### Example

```
Conf/MicrosoftExchange/Directory User Role Model MicrosoftExchange.xml"
...
...

```
This single role was previously used in one of the navigation rules defined in the `ResourceType`.

```
Conf/MicrosoftExchange/Directory User Role Model MicrosoftExchange.xml"
...
...

```
If a `Directory_User` is assigned the SingleRole `DB1` then, the `NavigationRule` indicates that the property `Database` (in `MicrosoftExchange_Mailbox`) will have the value `9c512155-d912-4fcb-9448-0755fbaf1b96` (unique id of a `MicrosoftExchange_Database`).

## Display

This step focuses on configuring a nice display for the synchronized list of resources in the UI.

### Navigation

A [Menu Item](../../../toolkit/xml-configuration/user-interface/menuitem/index "MenuItem") can be added to include a link to the resources list in the left menu on the UI home screen.

It is strongly recommended that you gather synchronized resources menu items under parent menu items. This is usually declared in the `Nav.xml` file in the configuration root folder.

NETWRIX also advises to use a new `MicrosoftExchange Nav.xml` file in the `MicrosoftExchange` connector's folder to add a `mailboxes` and `databases` menu item.

#### Example

```
Conf/MicrosoftExchange/MicrosoftExchange Nav.xml
...
      ...

```
This example adds a new menu item under the `Nav_Connectors` menu item declared in the root `Conf/Nav.xml` file. This new menu item gives access to the list of synchronized Microsoft Exchange entities.

![Microsoft Exchange Menu Items](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/microsoftexchange_fulfill_menu_item_5.1.7.png)

### Configuration

It is strongly recommended that the display configuration be written to a new `MicrosoftExchange UI.xml` file in the `MicrosoftExchange` connector's folder.

#### All-in-One Scaffolding

The [View Target Resource Template](../../../toolkit/xml-configuration/configuration/scaffoldings/templates/viewtargetresourcetemplate/index "ViewTargetResourceTemplate") generates all the required elements to be seen by the user.

##### Example

The documentation explains what is generated by the following scaffolding:

```
Conf/MicrosoftExchange/MicrosoftExchange UI.xml
...
...

```
The following sections show how to override the elements generated by this scaffolding in order to provide a more precise display.

#### Display Entity Type

The [Display Entity Type](../../../toolkit/xml-configuration/user-interface/displayentitytype/index "Display Entity Type") describes how a single resource should be displayed.

##### Example

```
Conf/MicrosoftExchange/MicrosoftExchange UI.xml
...
  ...

```
This example configures the following display for [wolfgang.abendroth@acme.com](mailto:wolfgang.abendroth@acme.com).

![Microsoft Exchange Display Entity Type](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/microsoftexchange_fulfill_display_entity_type_5.1.7.png)

The scalar properties require no configuration: they are automatically displayed. The only information that the [Display Entity Type](../../../toolkit/xml-configuration/user-interface/displayentitytype/index "Display Entity Type") adds here, is that the property `BasicCollection` is a navigation property. An eye icon will be displayed to take you directly to the matching page.

#### Display Table

The [Display Table](../../../toolkit/xml-configuration/user-interface/displaytable/index "Display Table") elements describe how a list of resources should be displayed.

The [[Display Table](../../../toolkit/xml-configuration/user-interface/displaytable/index "Display Table")](../../../toolkit/xml-configuration/user-interface/displaytable/index) contains a list of [Display Table](../../../toolkit/xml-configuration/user-interface/displaytable/index "Display Table") columns elements that identify which properties should be included in the list display.

##### Example

```
Conf/MicrosoftExchange/MicrosoftExchange UI.xml
...
            ...

```
This example configures the following list display:

![Microsoft Exchange Display Table](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/microsoftexchange_fulfill_display_table_5.1.7.png)

#### Internal Display Name

An `InternalDisplayName` can also be declared as an [Entity Type](../../../toolkit/xml-configuration/metadata/entitytype/index "EntityType") property expression. The `InternalDisplayName` is used in several UI screens to identify a resource for the user.

:::note
With no custom InternalDisplayName, a default value is used (instead of the first property of the identity) containing the string name. If no such property is found, the first declared property of the entity type is used.
:::

##### Example

```
Conf/MicrosoftExchange/MicrosoftExchange UI.xml
...
...

```
This example adds the `InternalDisplayName` to the `MicrosoftExchange_Mailbox` entity type to be used by the UI.

### Permissions

This step focuses on setting up permissions for Identity Manager's end-users granting them access to the connector.

The [Access Control Rule](../../../toolkit/xml-configuration/access-control/accesscontrolrule/index "AccessControlRule") and Access Control Entry elements define [AccessControlPermission](../../../toolkit/xml-configuration/access-control/accesscontrolpermission/index "AccessControlPermission") for end-user profiles to read and write the connector's data (such as resources of a given entity type). It is used by the UI when displaying data such as resources and available roles.

It is strongly recommended that permissions be written to a new file. For example, the administrator profile permissions can be written to the `MicrosoftExchange Profile Administrator.xml` file.

#### Example

```
Conf/MicrosoftExchange/MicrosoftExchange Profile Administrator.xml
...
...

```
This example sets permissions for the `Administrator` profile.

It entitles an administrator to display Microsoft Exchange resources (`mailboxes` and `databases`) and role categories from the UI.

## Jobs

### Construction

This step focuses on writing a Complete Synchronization Job.

Netwrix Identity Manager (formerly Usercube) recommends writing Jobs associated with the MicrosoftExchange connector to the Conf/MicrosoftExchange/MicrosoftExchange Jobs.xml file.

#### Example

```
Conf/MicrosoftExchange/MicrosoftExchange Jobs.xml
...
    ...

```
This job will be executed on Microsoft Exchange's connector agent.

Notice the **Identifier** attribute with the value `Job` in the `OpenIdIdentifier` tag. It refers to the `ClientId` written to the [appsettings.agent](../../../network-configuration/agent-configuration/appsettings-agent/index "appsettings.agent") technical configuration. The Tasks will authenticate with the profile associated with this `ClientId` in the `` xml configuration element.

There is also the tag  which means that the export will not be executed. Removing the tag will launch export-related tasks before fulfillment-related tasks. Export tasks need the same XML configuration and additional settings in [appsettings.agent](../../../network-configuration/agent-configuration/appsettings-agent/index "appsettings.agent").json.

All the job steps generated by the scaffolding can be found in the [Create Connector Synchro Complete](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchrocomplete/index "Create Connector Synchro Complete") scaffolding.

:::note
Check Create Connector Synchro Incremental for incremental synchronization.
:::

### Permissions

The execution of a Job entails the execution of Tasks, reading/writing to the Database and sending files over to the Server. These operations are protected by an authorization mechanism.

A [Profile](../../../toolkit/xml-configuration/access-control/profile/index "Profile") is required and must have the proper permissions for the associated Job or Task to perform.

Here, jobs use the default `OpenId`.

### Job Launch

Scheduling the job execution can rely either on Identity Manager's scheduler or an external scheduler.

#### With Scheduler

Use the [Job](../../../toolkit/xml-configuration/jobs/job/index "Job") Cron Tab Expression attribute.

#### With an external scheduler

An external scheduler would rely on the [Usercube-Invoke-Job](../../../executables/references/invoke-job/index "Usercube-Invoke-Job") tool.

## Validation

### Deploy Configuration

The configuration is written to the database using the [Deploy Configuration Task](../../../toolkit/xml-configuration/jobs/tasks/server/deployconfigurationtask/index "DeployConfigurationTask") tool.

### Test

#### ADMicrosoftExchange Prerequisites

An Active Directory configuration is required for Microsoft Exchange to work. Fill the AD Microsoft Exchange Export Fulfillment settings in accordance with the configuration.

:::note
To reset the password, if AuthType is Basic, then EnableSSL must be true. Otherwise, if AuthType is Kerberos, then EnableSSL is not required.
:::

#### Mailbox Creation

To create a new mailbox, apply the following procedure:

1. Select a user and validate both resource types `ADMicrosoftExchange_Entry_NominativeUser` and `MicrosoftExchange_Mailbox_NominativeUser`.
2. In the Provisioning Review, confirm both resource types.
3. First, launch the job AD Microsoft Exchange Synchronization.
4. Then, launch the job Microsoft Exchange Synchronization.

In fact, an `ADMicrosoftExchange_Entry` is required to create a mailbox.
To update or delete an existing mailbox, the Active Directory part can be skipped.

#### Interface display

The Synchronization job should be found in the UI, under the **Job Execution** menu, with the name input in the Job's **DisplayName\_Li** attribute.

![Microsoft Exchange Jobs](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/microsoftexchange_jobs_5.1.7.png)

From there, the Synchronization job can be launched and debugged (if needed).

After execution, Microsoft Exchange resources and databases should be in the `UR_Resources` table of the SQL Server database.

The results can also be viewed on the UI:

![Microsoft Exchange Menu Items](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/microsoftexchange_fulfill_menu_item_5.1.7.png)

![Microsoft Exchange Display Entity Type](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/microsoftexchange_fulfill_display_entity_type_5.1.7.png)

![Microsoft Exchange Display Table](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/microsoftexchange_fulfill_display_table_5.1.7.png)
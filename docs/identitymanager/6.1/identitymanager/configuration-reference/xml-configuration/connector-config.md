# ConnectorResourceTypeAccessControl

Generates the access control rules which give to a profile the permission to create and update
resource types, and launch generate provisioning orders and fulfillment from the connector screen.

## Examples

```

  <ConnectorResourceTypeAccessControl Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

  <AccessControlRule Identifier="ConnectorResourceType_Administrator_Category" DisplayName_L1="Administrator_Category" DisplayName_L2="Administrateur_Category" EntityType="Category" Profile="Administrator">    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Identifier="ConnectorResourceType_Administrator_Connection" DisplayName_L1="Administrator_Connection" DisplayName_L2="Administrateur_Connection" EntityType="Connection" Profile="Administrator">    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Identifier="ConnectorResourceType_Administrator_EntityProperty" DisplayName_L1="Administrator_EntityProperty" DisplayName_L2="Administrateur_EntityProperty" EntityType="EntityProperty" Profile="Administrator">    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Identifier="ConnectorResourceType_Administrator_PasswordResetSetting" DisplayName_L1="Administrator_PasswordResetSetting" DisplayName_L2="Administrateur_PasswordResetSetting" EntityType="PasswordResetSetting" Profile="Administrator">    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Identifier="ConnectorResourceType_Administrator_Policy" DisplayName_L1="Administrator_Policy" DisplayName_L2="Administrateur_Policy" EntityType="Policy" Profile="Administrator">    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Identifier="ConnectorResourceType_Administrator_ResourcePropertyMapping" DisplayName_L1="Administrator_ResourcePropertyMapping" DisplayName_L2="Administrateur_ResourcePropertyMapping" EntityType="ResourcePropertyMapping" Profile="Administrator">    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Identifier="ConnectorResourceType_Administrator_ResourceType" DisplayName_L1="Administrator_ResourceType" DisplayName_L2="Administrateur_ResourceType" EntityType="ResourceType" Profile="Administrator">    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>  <AccessControlRule Identifier="ConnectorResourceType_Administrator_ResourceTypeMapping" DisplayName_L1="Administrator_ResourceTypeMapping" DisplayName_L2="Administrateur_ResourceTypeMapping" EntityType="ResourceTypeMapping" Profile="Administrator">    <Entry Permission="/Connectors/ResourceTypeMapping/Query" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Create" CanExecute="true" />    <Entry Permission="/UserInterface/ConnectorResourceType/Update" CanExecute="true" />  </AccessControlRule>

```

# Connectors

- #### [ConnectorResourceTypeAccessControl](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
  Gives the rights to create and update resource types, generate provisioning orders and fulfill
  from the connector screen.- ####
  [SettingsAccessControlRules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
  Generates the permissions to configure the Workforce Core Solution module and connector
  settings.

# SettingsAccessControlRules

Generates the permissions to configure the Workforce Core Solution module and connector settings.

## Examples

```

  <SettingsAccessControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Settings_ConnectionPackage_Manage" DisplayName_L1="Administrator_ConnectionPackage" DisplayName_L2="Administrator_ConnectionPackage" EntityType="ConnectionPackage" Profile="Administrator">  <Entry CanExecute="true" Permission="/Settings/Manage" /></AccessControlRule><AccessControlRule Identifier="Administrator_Settings_Connection_Manage" DisplayName_L1="Administrator_Connection" DisplayName_L2="Administrator_Connection" EntityType="Connection" Profile="Administrator">  <Entry CanExecute="true" Permission="/Settings/Manage" /></AccessControlRule><AccessControlRule Identifier="Administrator_Settings_Connector_Manage" DisplayName_L1="Administrator_Connector" DisplayName_L2="Administrator_Connector" EntityType="Connector" Profile="Administrator">  <Entry CanExecute="true" Permission="/Settings/Manage" /></AccessControlRule><AccessControlRule Identifier="Administrator_Settings_Setting_Manage" DisplayName_L1="Administrator_Setting" DisplayName_L2="Administrator_Setting" EntityType="Setting" Profile="Administrator">  <Entry CanExecute="true" Permission="/Settings/Manage" /></AccessControlRule>

```

# Agent

Contains all the running agents.

## Properties

| Property                | Details                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------- |
| DisplayName_L1 required | **Type** String **Description** Display name of the agent in language 1 (up to 16).    |
| Identifier required     | **Type** String **Description** Agent Identifier.                                      |
| State default value: 0  | **Type** Int32 **Description** Agent Status ("Unknown"=0, "Online"=1 and "Offline"=2). |
| URI optional            | **Type** String **Description** Agent URI.                                             |

# Connection

A connection represents a link between a
[connector](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
and a connection package.

## Examples

The following example creates a connection for the previously created connector `AD`, using the
package `Usercube.AD@0000001` with only the export task and not the fulfill task.

```

<Connection Connector="AD" DisplayName_L1="Connection Active Directory" Identifier="ADExportFulfillment" Package="Usercube.AD@0000001" DeactivationExportFulfill="Fulfill"/>

```

We will need to configure the connection settings in the `appsettings.agent.json` file, by adding a
`ADExportFulfillment` part in the `Connections` section, for example:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "ADExportFulfillment": {
      "Servers": [
        {
          "Server": "contoso.server.com",
          "BaseDN": "DC=contoso,DC=com"
        }
      ],
      "AuthType": "Basic",
      "Login": "Contoso",
      "Password": "ContOso$123456789",
      "Filter": "(objectclass=*)",
      "EnableSSL": "true"
    },
    ...
  }
}
```

Details about these settings can be found in Usercube's
[connector references](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/index.md).

## Properties

| Property                                   | Details                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connector required                         | **Type** Int64 **Description** Identifier of the linked connector. **Note:** a connection can be used by one and only one connector.                                                                                                                                                                                                |
| DeactivationExportFulfill default value: 0 | **Type** DeactivationExportFulfill **Description** For a connection having a package which implements both export and fulfill, this option can deactivate either the export or the fulfill part. `0` - **None**: keeps both parts. `1` - **Export**: deactivates export. `2` - **Fulfill**: deactivates fulfill.                    |
| DisplayName_L1 required                    | **Type** String **Description** Display name of the connection in language 1 (up to 16).                                                                                                                                                                                                                                            |
| Identifier required                        | **Type** String **Description** Unique identifier of the connection. It must start with a letter followed by up to 441 characters, chosen from the following set: point, dash, letter, or number. **Warning:** identifiers are case insensitive, for example the identifiers `adexport` and `ADEXPORT` cannot exist simultaneously. |
| Package required                           | **Type** Enumeration **Description** Identifier of the linked connection package which defines the connection's capabilities and technologies to export and/or fulfill data.                                                                                                                                                        |

## Child Element: Transformation

A connection transformation is optional, but can be needed to adjust the Excel files, output of
[export tasks](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)from
Excel export connections, before
[prepare-synchronization tasks](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md).
The following operations are possible:

- filtering out given rows;
- adding/removing days from specific date properties;
- merging columns together.

### Examples

#### Edit dates

The following example sets all users' end dates to the end of the day instead of the morning. This
way, the end dates of users' permissions will be managed more easily.

Technically speaking, Usercube implements a sort of extra-task between the export and
prepare-synchronization tasks of HR synchronization. The CSV files produced by the export task of
the connection `Directory` are to be transformed: Usercube will add 1 day to all dates between 1900
and 2100, contained in the `ContractEndDate`, `PositionEndDate` and `EndDate` columns of the
`Directory_UserRecord` table.

This date edition goes the other way around when loading data back to your systems: if Usercube adds
a few days when synchronizing, then it removes the same few days when using the synchronized data.

```

<Connection Identifier="Directory" DisplayName_L1="Directory" Connector="Directory" Package="Usercube.Excel@0000001" >
    <Transformation Type="TransformDate" Table="Directory_UserRecord" Column="ContractEndDate" AddedDays="1" MinYear="1900" MaxYear="2100" />    <Transformation Type="TransformDate" Table="Directory_UserRecord" Column="PositionEndDate" AddedDays="1" MinYear="1900" MaxYear="2100" />    <Transformation Type="TransformDate" Table="Directory_UserRecord" Column="EndDate" AddedDays="1" MinYear="1900" MaxYear="2100" />
</Connection>

```

#### Filter out rows

The following example filters the CSV files produced by the export of the `Directory` connection, in
order to keep only German sites, i.e. the rows where `Identifier` starts with `DE_`.

```

<Connection Identifier="Directory" DisplayName_L1="Directory" Connector="Directory" Package="Usercube.Excel@0000001" >
    <Transformation Type="WhereValue" Table="Directory_Site" Column="Identifier" WhereOperator="StartsWith" WhereValue="DE_" />
</Connection>

```

#### Merge columns together

Consider the situation where users' organizations are defined in 4 levels.

The following example merges the `Company`, `Subsidiary`, `Department` and `Team` columns of the
`Directory_UserRecord` table, output of the export of the `Directory` connection, in order to
concatenate the 4 properties into a single `FullOrganization` property.

Setting `RemoveEmpty` to `true` means that rather than having an organization such as
`Contoso//HR/Payroll`, we will have `Contoso/HR/Payroll`.

Setting `RemoveDuplicates` to `true` means that rather than having an organization such as
`Contoso/Contoso/HR/Payroll`, we will have `Contoso/HR/Payroll`.

```

<Connection Identifier="Directory" DisplayName_L1="Directory" Connector="Directory" Package="Usercube.Excel@0000001" >
    <Transformation Type="TransformDate" Table="Directory_UserRecord" Column="FullOranization" InputColumn="Company" InputColumn2="Subsidiary" InputColumn3="Department" InputColumn4="Team" ConcatSeparator="/" RemoveEmpty="true" RemoveDuplicates="true" />
</Connection>

```

### Properties

| Property                  | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AddedDays optional        | **Type** Float **Description** Number of days to add to the date column to be transformed, specified in `Column`, when the transformation type is `TransformDate`. The value can be negative, for example `-0.5` removes 12 hours from the date.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Column optional           | **Type** String **Description** Column (case-sensitive) used as input of the filtering and the date editing transformations, and as output of the merging transformation. When defining an output, `Column` can be an existing column or a column to be created.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ConcatSeparator optional  | **Type** String **Description** Separator used between the concatenated values, when the transformation type is `ConcatColumns`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| DatePattern optional      | **Type** String **Description** Format of the transformed dates to be stored when the original object is not a date, when the transformation type is `TransformDate`. **Note:** for example we could need this property when using CSV files which store everything as strings, including dates.                                                                                                                                                                                                                                                                                                                                                                                            |
| InputColumn optional      | **Type** String **Description** Column (case-sensitive) used as input when the transformation type is `TransformDate`, and as part of the input when the transformation type is `ConcatColumns`. **Note:** required for `ConcatColumns`. **Note:** when not specified for `TransformDate`, `Column` is used as input.                                                                                                                                                                                                                                                                                                                                                                       |
| InputColumn2 optional     | **Type** String **Description** Second (up to fifth) input column (case-sensitive) when the transformation type is `ConcatColumns`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| MaxYear optional          | **Type** Int32 **Description** Year after which the date contained in the input of the transformation of type `TransformDate` is ignored by the transformation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| MinYear optional          | **Type** Int32 **Description** Year before which the date contained in the input of the transformation of type `TransformDate` is ignored by the transformation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| RemoveDuplicates optional | **Type** Boolean **Description** `true` to keep only one of two identical and successive values, when the transformation type is `ConcatColumns`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| RemoveEmpty optional      | **Type** Boolean **Description** `true` to ignore empty values, when the transformation type is `ConcatColumns`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| SortValues optional       | **Type** Boolean **Description** `true` to sort the concatenated values by alphabetical order, when the transformation type is `ConcatColumns`. **Note:** concatenated values are sorted after duplicates are removed, when relevant.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Table optional            | **Type** String **Description** Table on which the transformation is to be applied. **Note:** must be of the format `<connectionIdentifier>_<datasetName>` (case-sensitive).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Type required             | **Type** ConnectionTransformationType **Description** Type of the transformation: **ConcatColumns**: concatenates `InputColumn` columns into `Column` with a separator defined in `ConcatSeparator`, potentially with additional transformation options among `RemoveDuplicates`, `RemoveEmpty`, `SortValues`. **TransformDate**: adds or removes a given number of days defined in `AddedDays` to/from the date stored in `InputColumn` or `Column`, only for dates between `MinYear` and `MaxYear`, in order to be stored in `Column` in the format defined by `DatePattern`. **WhereValue**: filters the rows based on a comparison with the `WhereOperator` and `WhereValue` arguments. |
| WhereOperator optional    | **Type** ConnectionTransformationWhereValueOperator **Description** Operator of the comparison that filters out rows from the CSV file(s), when the transformation type is `WhereValue`: `Equals`; `NotEquals`; `Contains`; `CotContains`; `StartsWith`; `EndsWith`; `Regex`.                                                                                                                                                                                                                                                                                                                                                                                                               |
| WhereValue optional       | **Type** String **Description** Value (case-sensitive) that the content of `Column` will be compared to, when the transformation type is `WhereValue`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

# ConnectionTable

A ConnectionTable, linked to its ConnectionColumns, represents a potential Export output.

## Properties

| Property             | Details                                                                             |
| -------------------- | ----------------------------------------------------------------------------------- |
| Connection required  | **Type** Int64 **Description** The Id of the Connection having the ConnectionTable. |
| DisplayName optional | **Type** String **Description** The name displayed for the ConnectionTable.         |
| Identifier required  | **Type** String **Description** The identifier of the ConnectionTable.              |
| Path optional        | **Type** String **Description** Path to the schema of the ConnectionTable.          |

## Child Element: Column

Connection columns correspond to the attributes existing in a specific external system and retrieved
through its schema. They are linked to a connection table which can hold several connection columns.
Connection columns provide an assistance to the input of properties in entity types to ensure that
the attribute names are valid.

### Properties

| Property                           | Details                                                                                                                                                                                                                    |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DisplayName optional               | **Type** String **Description** Name displayed for the column.                                                                                                                                                             |
| ForeignColumn optional             | **Type** Int64 **Description** Defines the id of the foreign key if provided by the system.                                                                                                                                |
| Identifier required                | **Type** String **Description** Identifier of the column.                                                                                                                                                                  |
| IsMultivalued default value: false | **Type** Boolean **Description** Defines if the attribute is multi-valued.                                                                                                                                                 |
| KeyType default value: 0           | **Type** ConnectionColumnKeyType **Description** Defines the key type of the column. - 0: not a key - 1: primary key - 2: unique key                                                                                       |
| Path optional                      | **Type** String **Description** Allows to regroup columns based on a criteria. For example, for an LDAP system, the path is the value of the attribute objectClass.                                                        |
| ValueLength default value: 0       | **Type** Int32 **Description** Maximum length of the attribute value.                                                                                                                                                      |
| ValueType default value: 0         | **Type** ConnectionColumnValueType **Description** Defines the format of the attribute value. - 0: String - 1: Bytes - 2: Int32 - 3: Int64 - 4: DateTime - 5: Bool - 6: Guid - 7: Double - 8: Binary - 9: Byte - 10: Int16 |

# Connector

Connectors provide the means by which Usercube communicates with managed platforms, applications and
systems. They describe how the data from these systems are mapped to the
[entity model](/docs/identitymanager/6.1/identitymanager/core-concepts/entity-model.md).

A connector in most case represents an application model. It is composed of entities and
associations.

> For example we can define an HR connector, with the following entities: Person, Department,
> Function, Location, etc. and with the following associations: Person-Department, Person-Site,
> Person-Manager(Person), etc.

A connector is used to synchronize each of its entities and associations in Usercube's physical
model. A connector is defined with:

- [entity types](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md);
- [entity associations](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md);
- [entity type mappings](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
  and
  [entity association mappings](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
  to link the entity types and associations to the corresponding files and columns containing the
  exported data from the managed system.

## Examples

The following example creates a `HR` connector on the agent called `Local` previously declared by
[an `<Agent>` element](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md).

We create the right
[connections](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
to use the connector as a
[CSV connector](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
aiming to export HR CSV files into new CSV files in Usercube's format.

The
[entity types](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
model the resources as `HR_Person` or `HR_Organization`, defining properties.

The
[entity type mappings](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
link the entity types to the source files.

The
[entity association](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
creates a link between the two entity types.

The
[entity association mapping](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
links the association to the source files.

```

  <Connector Identifier="HR" DisplayName_L1="HR" Agent="Local" />  <Connection Connector="HR" DisplayName_L1="HR Organization" Package="Usercube.CSV.Complete@0000001" Identifier="HROrganizations"/>  <Connection Connector="HR" DisplayName_L1="HR Person" Package="Usercube.CSV.Complete@0000001" Identifier="HRPeople"/>  <EntityType Identifier="HR_Person" DisplayName_L1="HR - User">    <Property Identifier="Managed_organizations" DisplayName_L1="Managed organizations" Type="Int64" />    <Property Identifier="Assistant_of_organizations" DisplayName_L1="Assistant of organizations" Type="Int64" />    <Property Identifier="Employee_Id" DisplayName_L1="Employee Id" IsKey="true" TargetColumnIndex="0" Type="String" />    <Property Identifier="First_name" DisplayName_L1="First name" TargetColumnIndex="7" Type="String" />    <Property Identifier="Last_name" DisplayName_L1="Last name" TargetColumnIndex="8" Type="String" />    <Property Identifier="Birth_date" DisplayName_L1="Birth date" TargetColumnIndex="9" Type="String" />    <Property Identifier="Birth_name" DisplayName_L1="Birth name" TargetColumnIndex="13" Type="String" />    <Property Identifier="Personal_title" DisplayName_L1="Personal title" TargetColumnIndex="12" Type="String" />    <Property Identifier="Start_date" DisplayName_L1="Start date" TargetColumnIndex="10" Type="String" />    <Property Identifier="End_date" DisplayName_L1="End date" TargetColumnIndex="14" Type="String" />    <Property Identifier="VIP" DisplayName_L1="VIP" TargetColumnIndex="15" Type="String" />    <Property Identifier="Leave" DisplayName_L1="Leave" TargetColumnIndex="16" Type="String" />    <Property Identifier="Title_name" DisplayName_L1="Title name" TargetColumnIndex="1" Type="String" />    <Property Identifier="Location_name" DisplayName_L1="Site name" TargetColumnIndex="4" Type="String" />    <Property Identifier="Organization_name" DisplayName_L1="Organization name" TargetColumnIndex="2" Type="String" />    <Property Identifier="Organization" DisplayName_L1="Organization" TargetColumnIndex="131" Type="Int64" />  </EntityType>   <EntityType Identifier="HR_Organization" DisplayName_L1="HR - Department">    <Property Identifier="Identifier" DisplayName_L1="Code" IsKey="true" TargetColumnIndex="0" Type="String" />    <Property Identifier="Name" DisplayName_L1="Name" TargetColumnIndex="1" Type="String" />    <Property Identifier="Name_fr" DisplayName_L1="Name (fr)" TargetColumnIndex="3" Type="String" />    <Property Identifier="Name_de" DisplayName_L1="Name (de)" TargetColumnIndex="4" Type="String" />    <Property Identifier="Phone_number" DisplayName_L1="Phone number" TargetColumnIndex="5" Type="String" />    <Property Identifier="Fax_number" DisplayName_L1="Fax number" TargetColumnIndex="6" Type="String" />    <Property Identifier="Organization_type" DisplayName_L1="Organization type" TargetColumnIndex="7" Type="String" />    <Property Identifier="Location" DisplayName_L1="Site" TargetColumnIndex="8" Type="String" />    <Property Identifier="Parent_organization" DisplayName_L1="Parent organization" TargetColumnIndex="129" Type="Int64" />    <Property Identifier="Manager" DisplayName_L1="Manager" TargetColumnIndex="128" Type="Int64" />    <Property Identifier="Assistant" DisplayName_L1="Assistant" TargetColumnIndex="130" Type="Int64" />    <Property Identifier="Persons" DisplayName_L1="Persons" Type="Int64" />  </EntityType>  <EntityTypeMapping Identifier="HR_Person" Connector="HR" ConnectionTable="hr_people">    <Property Identifier="Employee_Id" ConnectionColumn="Employee Id" IsPrimaryKey="true" />    <Property Identifier="First_name" ConnectionColumn="First name" />    <Property Identifier="Last_name" ConnectionColumn="Last name" />    <Property Identifier="Birth_date" ConnectionColumn="Birth date" />    <Property Identifier="Birth_name" ConnectionColumn="Birth name" />    <Property Identifier="Personal_title" ConnectionColumn="Personal title" />    <Property Identifier="Start_date" ConnectionColumn="Start date" />    <Property Identifier="End_date" ConnectionColumn="End date" />    <Property Identifier="VIP" ConnectionColumn="VIP" />    <Property Identifier="Leave" ConnectionColumn="Leave" />    <Property Identifier="Title_name" ConnectionColumn="Title name" />    <Property Identifier="Location_name" ConnectionColumn="Location name" />    <Property Identifier="Organization_name" ConnectionColumn="Organization name" />  </EntityTypeMapping>  <EntityTypeMapping Identifier="HR_Organization" Connector="HR" ConnectionTable="hr_organizations">    <Property Identifier="Identifier" ConnectionColumn="Identifier" IsPrimaryKey="true" />    <Property Identifier="Name" ConnectionColumn="Name" />    <Property Identifier="Name_fr" ConnectionColumn="Name (fr)" />    <Property Identifier="Name_de" ConnectionColumn="Name (de)" />    <Property Identifier="Phone_number" ConnectionColumn="Phone number" />    <Property Identifier="Fax_number" ConnectionColumn="Fax number" />    <Property Identifier="Organization_type" ConnectionColumn="Organization type" />    <Property Identifier="Location" ConnectionColumn="Location" />  </EntityTypeMapping>  <EntityAssociation Identifier="HR_Person_Organization" DisplayName_L1="Organization" IsProperty1Collection="true" Property1="HR_Organization:Persons" Property2="HR_Person:Organization" />  <EntityAssociationMapping Identifier="HR_Person_Organization" Column1="Organization" Column2="Employee Id" Connector="HR" ConnectionTable="hr_people" EntityPropertyMapping1="HR_Organization:Identifier" EntityPropertyMapping2="HR_Person:Employee_Id" />

```

## Properties

| Property                                        | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent optional                                  | **Type** Int64 **Description** Identifier of the agent where the connector's tasks are launched.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| CompleteJob default value: 0                    | **Type** JobIntegrationRule **Description** Indicates how the connector should be used in the complete job (scaffolding): `0` - Used `1` - NotUsed `2` - OnlySynchronization `3` - OnlyProvisioning Warning: The job scaffolding has priority over the connector's decision. For example, if your job scaffolding specifies that the Microsoft Entra ID is `NotUsed` for the complete job, setting that connector to `Used` for the complete job will not activate it. You should not only add the `Used` to the connector but also remove the `NotUsed` from the configuration of the job scaffolding.          |
| DisplayName_L1 required                         | **Type** String **Description** Connector DisplayName.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Identifier required                             | **Type** String **Description** Connector Identifier.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| IncrementalJob default value: 0                 | **Type** JobIntegrationRule **Description** Indicates how the connector should be used in the incremental job (scaffolding): `0` - Used `1` - NotUsed `2` - OnlySynchronization `3` - OnlyProvisioning Warning: The job scaffolding has priority over the connector's decision. For example, if your job scaffolding specifies that the Microsoft Entra ID is `NotUsed` for the incremental job, setting that connector to `Used` for the incremental job will not activate it. You should not only add the `Used` to the connector but also remove the `NotUsed` from the configuration of the job scaffolding. |
| IsDeactivated default value: false              | **Type** Boolean **Description** Indicates that the export and the provisioning are deactivated for this connector.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| MaximumDeletedLines default value: 100          | **Type** Int32 **Description** Deleted lines threshold. Sets the maximum number of resources that can be removed from the connector when running the synchronization job.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| MaximumInsertedLines default value: 100         | **Type** Int32 **Description** Inserted lines threshold. Sets the maximum number of resources that can be added into the connector when running the synchronization job.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| MaximumLinkDeletedLines default value: 1000     | **Type** Int32 **Description** Deleted association links threshold. Sets the maximum number of navigation properties that can be removed from the connector when running the synchronization job.                                                                                                                                                                                                                                                                                                                                                                                                                |
| MaximumLinkInsertedLines default value: 1000    | **Type** Int32 **Description** Inserted association links threshold. Sets the maximum number of navigation properties that can be added into the connector when running the synchronization job.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| MaximumUpdatedLines default value: 100          | **Type** Int32 **Description** Updated lines threshold. Sets the maximum number of resources that can be modified within the connector when running the synchronization job.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| MaxLinkPercentageDeletedLines default value: 5  | **Type** Int32 **Description** Deleted association links threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| MaxLinkPercentageInsertedLines default value: 5 | **Type** Int32 **Description** Inserted association links threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| MaxPercentageDeletedLines default value: 5      | **Type** Int32 **Description** Deleted lines threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| MaxPercentageInsertedLines default value: 5     | **Type** Int32 **Description** Inserted lines threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| MaxPercentageUpdatedLines default value: 5      | **Type** Int32 **Description** Updated lines threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

# EntityAssociationMapping

Contains all the
[Entity Association](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
that can be materialized in the Usercube physical model. An association mapping can be established
between two properties of the same entity type mapping or between two properties of different entity
type mappings having the same connector. See
[Connector](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
to see how to configure an EntityAssociationMapping.

## Properties

| Property                                    | Details                                                                                                                                                                                                                                                                              |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| C0 optional                                 | **Type** String **Description** In a ServiceNow connector, generic column used during provisioning to map the property to be provisioned (target property from the entity association mapping). This column stores the name of the table in ServiceNow in which the property exists. |
| Column1 required                            | **Type** String **Description** The column of EntityPropertyMapping1 in the association data source.                                                                                                                                                                                 |
| Column2 required                            | **Type** String **Description** The column of EntityPropertyMapping2 in the association data source.                                                                                                                                                                                 |
| ConnectionTable optional                    | **Type** String **Description** Association data source containing Column1 and Column2. Example: ConnectionTable="datasource"                                                                                                                                                        |
| Connector required                          | **Type** Int64 **Description** Id of the connector to which it is linked.                                                                                                                                                                                                            |
| EntityPropertyMapping1 required             | **Type** Int64 **Description** The ID of mapping of the property use to establish the association. The property must be a unique key.                                                                                                                                                |
| EntityPropertyMapping2 required             | **Type** Int64 **Description** The ID of mapping of the property use to establish the association. The property must be a unique key.                                                                                                                                                |
| MaximumDeletedLines default value: 0        | **Type** Int32 **Description** Deleted association links threshold. Sets the maximum number of navigation properties that can be removed from the entity type when running the synchronization job.                                                                                  |
| MaximumInsertedLines default value: 0       | **Type** Int32 **Description** Inserted association links threshold. Sets the maximum number of navigation properties that can be added into the entity type when running the synchronization job.                                                                                   |
| MaxPercentageDeletedLines default value: 0  | **Type** Int32 **Description** Deleted association links threshold in percent.                                                                                                                                                                                                       |
| MaxPercentageInsertedLines default value: 0 | **Type** Int32 **Description** Inserted association links threshold in percent.                                                                                                                                                                                                      |

# EntityTypeMapping

An entity type mapping links a given
[entity type](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)'s
properties with the source columns of the corresponding managed system. The entity type mapping
specifies the related
[connector](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
and the path to the CSV source file which contains, or will contain, the data exported from the
managed system. Each of its [properties](#properties) will define the corresponding source column
and specific options.

An entity type mapping shares the same identifier as its related entity type.

[See the example of a whole connector containing an entity type mapping](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md).

## Properties

| Property                                    | Details                                                                                                                                                                                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C0 optional                                 | **Type** String **Description** In a Microsoft Entra ID connector (formerly Microsoft Azure AD), generic column used to map the entities to be exported. By default, Usercube exports: `user`; `group`; `directoryRole`; `servicePrincipal`. |
| ConnectionTable optional                    | **Type** String **Description** Name of the CSV file which contains, or will contain, the exported data from the corresponding entity type.                                                                                                  |
| Connector optional                          | **Type** Int64 **Description** Identifier of the related connector.                                                                                                                                                                          |
| MaximumDeletedLines default value: 0        | **Type** Int32 **Description** Deleted lines threshold. Sets the maximum number of resources that can be removed from the entity type when running the synchronization job.                                                                  |
| MaximumInsertedLines default value: 0       | **Type** Int32 **Description** Inserted lines threshold. Sets the maximum number of resources that can be added into the entity type when running the synchronization job.                                                                   |
| MaximumUpdatedLines default value: 0        | **Type** Int32 **Description** Updated lines threshold. Sets the maximum number of resources that can be modified within the entity type when running the synchronization job.                                                               |
| MaxPercentageDeletedLines default value: 0  | **Type** Int32 **Description** Deleted lines threshold in percent.                                                                                                                                                                           |
| MaxPercentageInsertedLines default value: 0 | **Type** Int32 **Description** Inserted lines threshold in percent.                                                                                                                                                                          |
| MaxPercentageUpdatedLines default value: 0  | **Type** Int32 **Description** Updated lines threshold in percent.                                                                                                                                                                           |

## Child Element: Property

Contains all the
[entity properties](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
of an
[entity type](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
that can be synchronized into Usercube physical model. Each mapping share the same id as its
corresponding property in the entity type.

### Properties

| Property                          | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ConnectionColumn optional         | **Type** String **Description** Specifies the corresponding column in the entity type data source.                                                                                                                                                                                                                                                                                                                                                                                                         |
| Format optional                   | **Type** String **Description** The format of the attribute in the external system. Ex: 1601date for LDAP Date.                                                                                                                                                                                                                                                                                                                                                                                            |
| IsPrimaryKey default value: false | **Type** Boolean **Description** `true` if the property is designated to be the unique and immutable key that uniquely identifies any resource from the entity type, during synchronization. Each entity type mapping must have a primary key. It prevents duplicates and null resources.                                                                                                                                                                                                                  |
| IsUniqueKey default value: false  | **Type** Boolean **Description** `true` if the property is designated to be one of the unique keys that uniquely identify any resource from the entity type in an association/navigation, during synchronization. Each entity type mapping can have up to three unique keys, in addition to the mapping key that already acts as such. **Note:** AD synchronization requires the `dn` property to have either `IsUniqueKey` or `EntityType` > `Property` > `IsKey` set to `true` (key property in the UI). |

# Connectors

- #### [Agent](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
- #### [Connection](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
- #### [ConnectionTable](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
- #### [Connector](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
- #### [ResourceTypeMappings](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
- #### [EntityAssociationMapping](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
- #### [EntityTypeMapping](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
- #### [PasswordResetSettings](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)

# PasswordResetSettings

This set of password reset settings contains the configuration to perform password reset operations
such as change, reset, etc.

## Examples

The following example declares a password reset settings.

```

    <PasswordResetSettings Identifier="default" BeneficiaryEmailBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Mail"
        BeneficiaryFullNameBinding="AssignedResourceType:Owner.Directory_User:MainRecord.InternalDisplayName"
        NotifiedEmailBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Organization.Manager.MainRecord.Mail"
        NotifiedFullNameBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Organization.Manager.MainRecord.InternalDisplayName"
        Mode="1" DefaultPassword="Usercube@2019" MustChange="true"
        AutoGenerate="false" DisableNotifications="false" GeneratedLength="12" />

```

### Password length and counts

The following example makes Usercube generate a password with at least 12 characters in total, at
least 8 lowercase characters, 4 uppercase characters, 2 digits and 2 symbols.

```

<PasswordResetSettings AutoGenerate="true" GeneratedLength="12" GeneratedLowerCaseCharsCount="8" GeneratedUpperCaseCharsCount="4" GeneratedDigitCharsCount="2" GeneratedSymbolCharsCount="2"/>

```

As the total of all counts (16) is greater than the length (12), the password length will be the
count total (16).

The following example makes Usercube generate a password with at least 12 characters in total, at
least 8 lowercase characters, 4 uppercase characters, 2 digits and 2 symbols.

```

<PasswordResetSettings AutoGenerate="true" GeneratedLength="8" GeneratedLowerCaseCharsCount="1" GeneratedUpperCaseCharsCount="1" GeneratedDigitCharsCount="1" GeneratedSymbolCharsCount="1"/>

```

As the total of all counts (4) is lower than the length (8), the password will be generated with 8
characters, among them 1 lowercase character, 1 uppercase character, 1 digit, 1 symbol, and 4 more
random characters.

The generated password's strength can also be checked via a regular expression (regex) through
`StrengthCheck`. Thus, the following example makes Usercube generate a password with at least 9
characters including at least one digit, one lowercase letter, one uppercase and one special
character.

```

<PasswordResetSettings AutoGenerate="true" StrengthCheck="'^..........*$','^.*[0-9].*$', '^.*[a-z].*$', '^.*[A-Z].*$', '^.*[^A-Za-z0-9].*$'"/>

```

## Properties

| Property                                      | Details                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AutoGenerate default value: false             | **Type** Boolean **Description** `true` to make Usercube generate the password automatically.                                                                                                                                                                                                                                                 |
| BeneficiaryEmailBinding optional              | **Type** Int64 **Description** Binding to the email address property whose password is to be reset.                                                                                                                                                                                                                                           |
| BeneficiaryFullNameBinding optional           | **Type** Int64 **Description** Binding to the full name property of the user(s) whose password is to be reset.                                                                                                                                                                                                                                |
| DefaultPassword optional                      | **Type** String **Description** Default password to set when `AutoGenerate` is set to `false`.                                                                                                                                                                                                                                                |
| DisableNotifications default value: false     | **Type** Boolean **Description** `true` to disable the mailing of notifications concerning password reset.                                                                                                                                                                                                                                    |
| GeneratedDigitCharsCount default value: 2     | **Type** Int32 **Description** Number of digit characters in the password generated by Usercube when `AutoGenerate` is set to `true`.                                                                                                                                                                                                         |
| GeneratedLength default value: 12             | **Type** Int32 **Description** Length of the password generated by Usercube when `AutoGenerate` is set to `true`.                                                                                                                                                                                                                             |
| GeneratedLowerCaseCharsCount default value: 6 | **Type** Int32 **Description** Number of lower case characters in the password generated by Usercube when `AutoGenerate` is set to `true`.                                                                                                                                                                                                    |
| GeneratedSymbolCharsCount default value: 2    | **Type** Int32 **Description** Number of symbol characters in the password generated by Usercube when `AutoGenerate` is set to `true`.                                                                                                                                                                                                        |
| GeneratedUpperCaseCharsCount default value: 2 | **Type** Int32 **Description** Number of upper case characters in the password generated by Usercube when `AutoGenerate` is set to `true`.                                                                                                                                                                                                    |
| Identifier required                           | **Type** String **Description** Identifier of the set of password reset settings.                                                                                                                                                                                                                                                             |
| Mode default value: 0                         | **Type** Int64 **Description** Mode used by the password reset service. `0` - Disabled. `1` - One-Way. `2` - Two-Way.                                                                                                                                                                                                                         |
| MustChange default value: false               | **Type** Boolean **Description** `true` to force users to modify their passwords on the first login.                                                                                                                                                                                                                                          |
| NotificationCC optional                       | **Type** String **Description** Email address to set as CC recipient of all password reset notifications.                                                                                                                                                                                                                                     |
| NotifiedEmailBinding optional                 | **Type** Int64 **Description** Binding to the email address property of the person to be notified.                                                                                                                                                                                                                                            |
| NotifiedFullNameBinding optional              | **Type** Int64 **Description** Binding to the full name property of the person to be notified.                                                                                                                                                                                                                                                |
| StrengthCheck optional                        | **Type** String **Description** Regular expression (regex) that generated passwords must match, when `AutoGenerate` is set to `true`. **Note:** the strength of passwords set manually by users can be configured via [`PasswordTestsSetting`](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md). |

# AzureADResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<AzureADResourceTypeMapping Identifier="MicrosoftEntraID_DirectoryObject_Guest" Connection="MicrosoftEntraIDExportFulfillment" DefaultObjectClass="users" InvitationMode="MicrosoftInvitation" InvitationRedirectUrl="https://demo.usercube.com" PasswordResetSetting="ToSponsor">  <Property Property="objectid" IsDNProperty="true" />  <Property Property="groups" DataSourceBacklinkColumnName="member" />  <Property Property="displayName" IsDisplayNameProperty="true" />  <Property Property="mail" IsMailProperty="true" /></AzureADResourceTypeMapping>

```

## Properties

| Property                                 | Details                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required                      | **Type** String **Description** Identifier of the corresponding connection.                                                                                                                                                                                                                                                                                                              |
| DefaultObjectClass required              | **Type** String **Description** Default object class used by the provisioner, for example `person`, `organizationalPerson`, `user`, etc. **Note:** multiple default object classes are separated with `&#xA;`.                                                                                                                                                                           |
| InvitationCustomizedMessageBody optional | **Type** String **Description** Message that will replace Azure's default message in the invitation. **Note:** only used when `InvitationMode` is set to `MicrosoftInvitation`.                                                                                                                                                                                                          |
| InvitationMessageLanguage optional       | **Type** String **Description** Language of the invitation's message. **Note:** when not specified, the message is in English. **Note:** only used when `InvitationMode` is set to `MicrosoftInvitation`.                                                                                                                                                                                |
| InvitationMode default value: None       | **Type** InvitationMode **Description** Mode of the invitation email sent during the creation of a guest Microsoft Entra ID account. - **None**: nothing is sent. - **MicrosoftInvitation**: an invitation email is sent to another person to initiate the external user's guest account in Microsoft Entra ID according to the related password reset setting (one-way, two-way, etc.). |
| InvitationRedirectUrl optional           | **Type** String **Description** URL that will be displayed in the invitation email. **Note:** required when `InvitationMode` is set to `MicrosoftInvitation`.                                                                                                                                                                                                                            |
| PasswordResetSetting optional            | **Type** String **Description** Identifier of the corresponding password reset setting. **Note:** required when `InvitationMode` is set to `None` and `DefaultObjectClass` set to `users`.                                                                                                                                                                                               |

# EasyVistaResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<EasyVistaResourceTypeMapping Identifier="Badge_User_NominativeUser" Connection="EasyVistaManual" TicketSynchroIsNotAvailable="true" RecipientId="EVEmployeeId" CatalogCode="42" UrgencyId="1" ImpactId="2" SeverityId="3" Title="C:/identitymanagerDemo/Conf/EasyVista/TitleTemplate.txt" Description="C:/identitymanagerDemo/Conf/EasyVista/DescriptionTemplate.txt" />

```

## Properties

| Property                                         | Details                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CatalogCode required                             | **Type** String **Description** Code of the catalog. It is possible to define three catalog codes, one for each provisioning action (add, modify, delete) by separating them with `�`, for example `42�25�43`.                                                                                                                                                                                      |
| Connection required                              | **Type** String **Description** Identifier of the corresponding connection.                                                                                                                                                                                                                                                                                                                         |
| RecipientId required                             | **Type** String **Description** Identifier of the ticket's recipient.                                                                                                                                                                                                                                                                                                                               |
| Description optional                             | **Type** String **Description** File path of the template used for the generation of the ticket description.                                                                                                                                                                                                                                                                                        |
| ImpactId optional                                | **Type** String **Description** [Impact](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#impact) of the ticket.                                                                                                                                                                                                                    |
| SeverityId optional                              | **Type** String **Description** [Severity level](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#severity-level) of the ticket.                                                                                                                                                                                                    |
| TicketSynchroIsNotAvailable default value: false | **Type** Boolean **Description** `true` to set synchronization as unavailable for this resource type. Once the ticket is closed and the resource is created, updated or deleted, then the assignment's status is directly set to `Verified`. **Note:** only used with the [package for tickets](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/servicenow.md). |
| Title optional                                   | **Type** String **Description** File path of the template used for the generation of the ticket title.                                                                                                                                                                                                                                                                                              |
| UrgencyId optional                               | **Type** String **Description** [Urgency level](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#urgency-level) of the ticket.                                                                                                                                                                                                      |

# ResourceTypeMappings

- #### [AzureADResourceTypeMapping](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
- #### [EasyVistaResourceTypeMapping](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
  To create a ticket in EasyVista, some information need to be provided to the external system and
  are configured through the XML configuration in the resource type mappings- ####
  [LdapResourceTypeMapping](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
- #### [ManualProvisioningResourceTypeMapping](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
- #### [OktaResourceTypeMapping](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
- #### [SapResourceTypeMapping](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
- #### [ScimResourceTypeMapping](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
- #### [ServiceNowResourceTypeMapping](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
- #### [SharePointResourceTypeMapping](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)

# LdapResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<LdapResourceTypeMapping Identifier="AD_Entry_NominativeUser" Connection="ADExportFulfillment" PasswordResetSetting="ToManager" DefaultObjectClass="user" RDNAttributeIdentifier="CN" UsePermissiveModify="true" UseTreeDelete="false">  <Property Property="dn" IsDNProperty="true" />  <Property Property="parentdn" IsParentProperty="true" />  <Property Property="cn" IsRDNProperty="true" />  <Property Property="userAccountControl" IsUserAccountControlProperty="true" />  <Property Property="memberOf" DataSourceBacklinkColumnName="member" />  <Property Property="Categories" MultiValueSeparator=";" /></LdapResourceTypeMapping>

```

### Multiple default object classes

The following example configures a whole set of settings for the `LDAP_Entry_NominativeUser`
resource type, including several default object classes.

```

<ResourceTypeMapping Identifier="LDAP_Entry_NominativeUser" DefaultObjectClass="inetOrgPerson
organizationalPerson" ... />

```

## Properties

| Property                                 | Details                                                                                                                                                                                                        |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required                      | **Type** String **Description** Identifier of the corresponding connection.                                                                                                                                    |
| DefaultObjectClass required              | **Type** String **Description** Default object class used by the provisioner, for example `person`, `organizationalPerson`, `user`, etc. **Note:** multiple default object classes are separated with `<br/>`. |
| RDNAttributeIdentifier required          | **Type** String **Description** Identifier of the RDN attribute used by the provisioner.                                                                                                                       |
| PasswordResetSetting optional            | **Type** String **Description** Identifier of the corresponding password reset setting.                                                                                                                        |
| UsePermissiveModify default value: false | **Type** Boolean **Description** `true` to use [LDAP's permissive modify control](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ldap/ldap-server-permissive-modify-oid).                 |
| UseTreeDelete default value: false       | **Type** Boolean **Description** `true` to use the control option that enables deleting all the sub-trees within a directory via a single deletion request.                                                    |

# ManualProvisioningResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<ManualProvisioningResourceTypeMapping Identifier="Access_Badge_Nominative" Connection="AccessManual" TicketSynchroIsNotAvailable="true"/>

```

## Properties

| Property                             | Details                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required                  | **Type** String **Description** Identifier of the corresponding connection.                                                                                                                                                                                                                                                                                                                         |
| TicketSynchroIsNotAvailable optional | **Type** Boolean **Description** `true` to set synchronization as unavailable for this resource type. Once the ticket is closed and the resource is created, updated or deleted, then the assignment's status is directly set to `Verified`. **Note:** only used with the [package for tickets](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/servicenow.md). |

# OktaResourceTypeMapping

## Properties

| Property                      | Details                                                                                                           |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Connection required           | **Type** String **Description** Identifier of the corresponding connection.                                       |
| DefaultObjectClass optional   | **Type** String **Description** Default object class used by the provisioner, for example `users`, `groups`, etc. |
| PasswordResetSetting optional | **Type** String **Description** Identifier of the corresponding password reset setting.                           |

# SapResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<SapResourceTypeMapping Identifier="SAP_User_NominativeUser" Connection="SAPConnection" PasswordResetSetting="ToSelf" DefaultObjectClass="sapuser">  <Property Property="sapid" IsDNProperty="true" />  <Property Property="roles" DataSourceBacklinkColumnName="member" /></SapResourceTypeMapping>

```

## Properties

| Property                      | Details                                                                                                                                                                                                        |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required           | **Type** String **Description** Identifier of the corresponding connection.                                                                                                                                    |
| DefaultObjectClass optional   | **Type** String **Description** Default object class used by the provisioner, for example `person`, `organizationalPerson`, `user`, etc. **Note:** multiple default object classes are separated with `<br/>`. |
| PasswordResetSetting optional | **Type** String **Description** Identifier of the corresponding password reset setting.                                                                                                                        |

# ScimResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<ScimResourceTypeMapping Identifier="CyberArk_Shadow_NominativeUser" DefaultObjectClass="Users" Connection="SCIMCyberArkExportFulfillment">    <Property Property="CyberArk_id" IsDNProperty="true" /></ScimResourceTypeMapping>

```

## Properties

| Property                    | Details                                                                                                                                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required         | **Type** String **Description** Identifier of the corresponding connection.                                                                                                                                    |
| DefaultObjectClass optional | **Type** String **Description** Default object class used by the provisioner, for example `person`, `organizationalPerson`, `user`, etc. **Note:** multiple default object classes are separated with `<br/>`. |

# ServiceNowResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

Any resource type linked to a ServiceNow connection must be configured with a set of parameters to
map the properties in Usercube with those in ServiceNow, for provisioning purposes.

Below is an example of an incident ticket in ServiceNow, where relevant properties (from Usercube's
perspective) are emphasized:

![ServiceNow Ticket Example](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/connectors/resourcetypemappings/servicenowresourcetypemapping/servicenow_example.webp)

## Examples

```

<ServiceNowResourceTypeMapping Identifier="ServiceNow_Entry_NominativeUser" Connection="ServiceNowExportFulfillment" PasswordResetSetting="ToSelf" DefaultObjectClass="sys_user">
  <Property Property="sys_id" IsDNProperty="true" />
</ServiceNowResourceTypeMapping>

```

## Properties

| Property                                         | Details                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required                              | **Type** String **Description** Identifier of the corresponding connection.                                                                                                                                                                                                                                                                                                                         |
| DefaultObjectClass optional                      | **Type** String **Description** Default object class used by the provisioner, for example `person`, `organizationalPerson`, `user`, etc. **Note:** multiple default object classes are separated with `<br/>`.                                                                                                                                                                                      |
| PasswordResetSetting optional                    | **Type** String **Description** Identifier of the corresponding password reset setting.                                                                                                                                                                                                                                                                                                             |
| TicketAdditionalInformation optional             | **Type** String **Description** Information to add at the end of the description for all tickets created for this resource type. **Note:** only used with the [package for tickets](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/servicenow.md).                                                                                                             |
| TicketCallerId optional                          | **Type** String **Description** Attribute that corresponds to the identifier of the "caller" person in ServiceNow. **Note:** required when using the [package for tickets](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/servicenow.md).                                                                                                                      |
| TicketCategory optional                          | **Type** String **Description** Category in which new tickets will be created in ServiceNow for this resource type. **Note:** only used with the [package for tickets](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/servicenow.md).                                                                                                                          |
| TicketImpact default value: Low                  | **Type** TicketImpact **Description** Impact of the ticket in ServiceNow: `Low`; `Medium`; `High`. **Note:** only used with the [package for tickets](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/servicenow.md).                                                                                                                                           |
| TicketSubCategory optional                       | **Type** String **Description** Subcategory in which new tickets will be created in ServiceNow for this resource type. **Note:** only used with the [package for tickets](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/servicenow.md).                                                                                                                       |
| TicketSynchroIsNotAvailable default value: false | **Type** Boolean **Description** `true` to set synchronization as unavailable for this resource type. Once the ticket is closed and the resource is created, updated or deleted, then the assignment's status is directly set to `Verified`. **Note:** only used with the [package for tickets](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/servicenow.md). |
| TicketUrgency default value: Low                 | **Type** TicketUrgency **Description** Urgency of the ticket in ServiceNow: `Low`; `Medium`; `High`. **Note:** only used with the [package for tickets](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/servicenow.md).                                                                                                                                         |

# SharePointResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<SharePointResourceTypeMapping Identifier="SharePoint_Entity_NominativeUser" Connection="SharePointExportFulfillment">  <Property Property="Name" IsDNProperty="true" />  <Property Property="Collection" IsParentProperty="true" /></SharePointResourceTypeMapping>

```

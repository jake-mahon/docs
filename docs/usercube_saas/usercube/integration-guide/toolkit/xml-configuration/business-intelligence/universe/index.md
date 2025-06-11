# Universe

Universes constitute the basis for the configuration of a new model that we will call universe model. Users can then exploit it, through the Query module and/or Power BI, to generate graphic reports.

## Examples

##### Basic universe

The following example builds a universe called ```Universe1```:

```

<Universe Identifier="Universe1" DisplayName_L1="Universe 1" >

    <EntityInstance Identifier="Directory_User" EntityType="Directory_User" DisplayName_L1="Users" />    <EntityInstance Identifier="Directory_UserRecord" EntityType="Directory_UserRecord" DisplayName_L1="UserRecords" />    <AssociationInstance Association="Directory_UserRecord_User_Records" Instance1="Directory_User" Instance2="Directory_UserRecord" Direction="From1To2" /></Universe>

```

![Universe - Basic Example](/img/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/business-intelligence/universe/bi_universeexampledisplaynames.webp)

When getting Identity Manager data in [Connect Power BI to Identity Manager](/docs/usercube_saas/usercube/integration-guide/governance/reporting/how-tos/connect-powerbi/index.md), we see the following:

![Universe (Display Names)](/img/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/business-intelligence/universe/universe_columnnamedisplayname.webp)

##### Basic universe with identifiers instead of display names

The following example builds a universe called ```Universe1``` with identifiers as labels instead of display names:

```

<Universe Identifier="Universe1" DisplayName_L1="Universe 1" ColumnNamesMode="Identifier" >    <EntityInstance Identifier="Directory_User" EntityType="Directory_User" DisplayName_L1="Users" />    <EntityInstance Identifier="Directory_UserRecord" EntityType="Directory_UserRecord" DisplayName_L1="UserRecords" />    <AssociationInstance Association="Directory_UserRecord_User_Records" Instance1="Directory_User" Instance2="Directory_UserRecord" Direction="From1To2" />    </Universe>

```

![Universe - Basic Example](/img/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/business-intelligence/universe/bi_universeexample.webp)

When getting Identity Manager data in [Connect Power BI to Identity Manager](/docs/usercube_saas/usercube/integration-guide/governance/reporting/how-tos/connect-powerbi/index.md), we see the following:

![Universe (Identifiers)](/img/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/business-intelligence/universe/universe_columnnameidentifier.webp)

## Properties

| Property | Details |
| --- | --- |
| ColumnNamesMode   default value: DisplayName | __Type__    UniverseColumnNamesMode   __Description__   Type of label to be displayed as the column names in Power BI, for this universe.   ```0``` - DisplayName: display name of entity instances.   ```1``` - Identifier: identifier of entity instances. |
| DisplayName\_L1   optional | __Type__    String   __Description__   Display name of the universe in language 1 (up to 16). |
| Identifier   required | __Type__    String   __Description__   Identifier of the universe. |

## Child Element: Association Instance

An association instance represents, within a [
Universe
](#Universe), the occurrence in the model of an [
Entity Association
](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md).

### Properties

| Property | Details |
| --- | --- |
| Association   required | __Type__    Int64   __Description__   Identifier of the entity association, in Identity Manager's entity model, that corresponds to the association instance. |
| Direction   default value: 0 | __Type__    Direction   __Description__   Direction of the association between the two entity instances. It must be the same direction as between the two entity types specified in these entity instances.   ```0``` - Both directions.   ```1``` - From the instance 1 to 2.   ```2``` - From the instance 2 to 1. |
| Instance1   required | __Type__    Int64   __Description__   Identifier of the entity instance number one. |
| Instance2   required | __Type__    Int64   __Description__   Identifier of the entity instance number two. |

## Child Element: Entity Instance

An entity instance represents, within a [
Universe
](#Universe), the occurrence in the model of an [
Entity Association
](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md).

### Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1   optional | __Type__    String   __Description__   Display name of the entity instance in language 1 (up to 16). |
| EntityType   required | __Type__    Int64   __Description__   Identifier of the entity type, in Identity Manager's entity model, that corresponds to the entity instance. |
| FilterEntityProperty   optional | __Type__    Int64   __Description__   Entity property used as filter (FilterProperty must be a navigation property to EntityProperty) |
| FilterEntityType   optional | __Type__    Int64   __Description__   Entity type used as filter (FilterProperty must be a navigation property to EntityType) |
| FilterProperty   optional | __Type__    Int64   __Description__   Property used to filter entity type's instance. |
| FilterResourceType   optional | __Type__    Int64   __Description__   Resource type used as filter (FilterProperty must be a navigation property to ResourceType) |
| FilterValue   optional | __Type__    String   __Description__   Constant value used as filter. |
| Identifier   required | __Type__    String   __Description__   Identifier of the entity instance. |
| IsHidden   default value: false | __Type__    Boolean   __Description__   ```true``` if the entity instance is to be hidden in Power BI. |

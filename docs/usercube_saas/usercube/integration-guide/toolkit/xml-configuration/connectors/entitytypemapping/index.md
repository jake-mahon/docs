# Entity Type Mapping

An entity type mapping links a given [
Entity Type
](/docs/product_docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)'s properties with the source columns of the corresponding managed system. The entity type mapping specifies the related [
Connector
](/docs/product_docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/connectors/connector/index.md) and the path to the CSV source file which contains, or will contain, the data exported from the managed system. Each of its [
Entity Type Mapping
](#Entity-Type-Mapping)properties will define the corresponding source column and specific options.

An entity type mapping shares the same identifier as its related entity type.

See the example of a whole [
Connector
](/docs/product_docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/connectors/connector/index.md) containing an entity type mapping.

## Properties

| Property | Details |
| --- | --- |
| C0   optional | __Type__    String   __Description__   In a Microsoft Entra ID connector (formerly Microsoft Azure AD), generic column used to map the entities to be exported. By default, Identity Manager exports: ```user```; ```group```; ```directoryRole```; ```servicePrincipal```. |
| ConnectionTable   optional | __Type__    String   __Description__   Name of the CSV file which contains, or will contain, the exported data from the corresponding entity type. |
| Connector   optional | __Type__    Int64   __Description__   Identifier of the related connector. |
| MaximumDeletedLines   default value: 0 | __Type__    Int32   __Description__   Deleted lines threshold. Sets the maximum number of resources that can be removed from the entity type when running the synchronization job. |
| MaximumInsertedLines   default value: 0 | __Type__    Int32   __Description__   Inserted lines threshold. Sets the maximum number of resources that can be added into the entity type when running the synchronization job. |
| MaximumUpdatedLines   default value: 0 | __Type__    Int32   __Description__   Updated lines threshold. Sets the maximum number of resources that can be modified within the entity type when running the synchronization job. |
| MaxPercentageDeletedLines   default value: 0 | __Type__    Int32   __Description__   Deleted lines threshold in percent. |
| MaxPercentageInsertedLines   default value: 0 | __Type__    Int32   __Description__   Inserted lines threshold in percent. |
| MaxPercentageUpdatedLines   default value: 0 | __Type__    Int32   __Description__   Updated lines threshold in percent. |

## Child Element: Property

Contains all the [
Entity Type
](/docs/product_docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md) properties that can be synchronized into Identity Manager physical model. Each mapping share the same id as its corresponding property in the entity type.

### Properties

| Property | Details |
| --- | --- |
| ConnectionColumn   optional | __Type__    String   __Description__   Specifies the corresponding column in the entity type data source. |
| Format   optional | __Type__    String   __Description__   The format of the attribute in the external system. Ex: 1601date for LDAP Date. |
| IsPrimaryKey   default value: false | __Type__    Boolean   __Description__   ```true``` if the property is designated to be the unique and immutable key that uniquely identifies any resource from the entity type, during synchronization. Each entity type mapping must have a primary key. It prevents duplicates and null resources. |
| IsUniqueKey   default value: false | __Type__    Boolean   __Description__   ```true``` if the property is designated to be one of the unique keys that uniquely identify any resource from the entity type in an association/navigation, during synchronization. Each entity type mapping can have up to three unique keys, in addition to the mapping key that already acts as such.   __Note:__ AD synchronization requires the ```dn``` property to have either ```IsUniqueKey``` or ```EntityType``` > ```Property``` > ```IsKey``` set to ```true``` (key property in the UI). |

# Entity Association Mapping

Contains all the [
Entity Association
](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md) that can be materialized in the Identity Manager physical model.
An association mapping can be established between two properties of the same entity type mapping or between two properties of different entity type mappings having the same connector.
See the [
Connector
](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/connectors/connector/index.md) topic to learn how to configure an EntityAssociationMapping.

## Properties

| Property | Details |
| --- | --- |
| C0   optional | __Type__    String   __Description__   In a ServiceNow connector, generic column used during provisioning to map the property to be provisioned (target property from the entity association mapping). This column stores the name of the table in ServiceNow in which the property exists. |
| Column1   required | __Type__    String   __Description__   The column of EntityPropertyMapping1 in the association data source. |
| Column2   required | __Type__    String   __Description__   The column of EntityPropertyMapping2 in the association data source. |
| ConnectionTable   optional | __Type__    String   __Description__   Association data source containing Column1 and Column2. Example: ConnectionTable="datasource" |
| Connector   required | __Type__    Int64   __Description__   Id of the connector to which it is linked. |
| EntityPropertyMapping1   required | __Type__    Int64   __Description__   The ID of mapping of the property use to establish the association. The property must be a unique key. |
| EntityPropertyMapping2   required | __Type__    Int64   __Description__   The ID of mapping of the property use to establish the association. The property must be a unique key. |
| MaximumDeletedLines   default value: 0 | __Type__    Int32   __Description__   Deleted association links threshold. Sets the maximum number of navigation properties that can be removed from the entity type when running the synchronization job. |
| MaximumInsertedLines   default value: 0 | __Type__    Int32   __Description__   Inserted association links threshold. Sets the maximum number of navigation properties that can be added into the entity type when running the synchronization job. |
| MaxPercentageDeletedLines   default value: 0 | __Type__    Int32   __Description__   Deleted association links threshold in percent. |
| MaxPercentageInsertedLines   default value: 0 | __Type__    Int32   __Description__   Inserted association links threshold in percent. |

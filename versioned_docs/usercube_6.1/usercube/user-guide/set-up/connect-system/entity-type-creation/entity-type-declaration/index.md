# Create the Entity Type

How to create the technical container of an [entity type](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md).

## Overview

Here, you will learn how to create an [entity type](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md): the shell that harbors the (scalar and navigation) properties which describe a given set of resources related to one managed system.

## Create the Entity Type

Create the entity type by proceeding as follows:

1. Access the connector's page by clicking on the __Connectors__ button on the home page in the __Configuration__ section, then on the relevant connector.

   ![Home page - Connectors](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/synchronization/home_connectors_v602.png)
2. On the connector's page, in the __Entity Types__ frame, click on the addition button.

   ![Addition Icon](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/categorization/classification/iconadd_v602.svg)
3. Fill in the information fields.

   ![Entity type creation](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_entitytypecreation_v602.png)

   - ```Identifier```: must be unique among entity types, without any whitespace, and be C#-compatible. [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#See-Microsoft-lexical-structure). NETWRIX recommends using ```<connector>_<notion>``` in the singular.
   - ```Name```: will be displayed in the UI to identify the entity type.
   - ```Icon```: can be chosen from [Microsoft's list](https://uifabricicons.azurewebsites.net/) and will be displayed with the entity type in the left menu of the home page.
   - ```Auto Complete in Pickers```: can be set once properties are created (and saved) so that, when using a searchbar for selected properties, Usercube suggests existing entries.
4. In the entity type's __Properties__ section, choose a source so that the connection provides the source's data structure.

   ![Properties' source](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_propertiessource_v522.png)

   > Let's use the example of an AD connector. We create an entity type ```AD - Entry``` to gather the valuable information from the AD, i.e. all the AD entries (groups and accounts) which we want to classify, with the properties that are useful for assignment management.
   >
   > The AD connector uses as a source ```Connection Active Directory - entries```. Its structure was retrieved when we [refreshed the schemas](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/index.md#refreshed-the-schemas) of the ```Active Directory``` connection, thus retrieving the attributes from the Active Directory and storing them temporarily on the agent side, inside CSV files.

## Next Steps

To continue, [define at least one scalar property](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/index.md) for this entity type.

## Troubleshooting

#### If there are no connection tables available in the __Source__ dropdown list of an entity type, then�

![Properties' source](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_propertiessource_v522.png)

Ensure that there are existing connections:

- if this is the case, then click on [__Refresh all schemas__](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/index.md#__Refresh-all-schemas__) on the connector page, and verify that there is no error.
- if not, then you must [create at least one connection](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/index.md).

#### If there is a message stating to refresh the connection's schema, then�

![No Connection Table Error](/img/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_troubleshootingschema_v603.png)

Start by making sure that the connection's schema is refreshed by clicking on [__Refresh all schemas__](/versioned_docs/usercube_6.1/usercube/user-guide/set-up/connect-system/connection-creation/index.md#__Refresh-all-schemas__) on the connector page, and verify that there is no error.

If the message is still displayed, then it means that the previously selected connection table no longer exists in the managed system. In this case, either the table's name simply changed, or the table is not relevant anymore. Then you should find a relevant table in the __Source__ dropdown list.

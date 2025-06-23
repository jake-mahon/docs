# Entity Model

At the heart of any successful IGA project, dwells an efficient data model.

The data involved in the project, be it reference data, identities, or from the managed systems',
needs to be modeled in a way that is both relevant to the organization and to Identity Manager.

Identity Manager allows integrators to adapt the data model to the target organization, instead of
forcing the organization to fit in a pre-conceived hardwired model. This philosophy has proven
successful by Identity Manager's field experience and project feedback.

## Entity-Relationship model

The model for all resources (that means data from the managed system, reference data and identities)
is written in the applicative configuration in the form of an
[Entity-Relationship model](https://en.wikipedia.org/wiki/Entity–relationship_model), called the
**entity model**. See the [Toolkit for XML Configuration](/docs/identitymanager/saas/toolkit/index.md) topic for additional
information.

The model is organized into cohesive **connectors**, one for each managed system, and one for the
reference data/identity repository.

An **entity model** describes the shape of resources (the **metadata**) and how they are built from
real world sources of truth (the **mapping**).

### Metadata

The **metadata** of a resource is the description of the resources' shape. Using the
_Entity-Relationship_ vocabulary, it's a list of property names and types for a resource.

The metadata is written using
[ Entity Type ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md),
[ Entity Type ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md) and
[ Entity Association ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md).

#### Entity types

Every resource is assigned an
[ Entity Type ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md) that describes its shape.

It's a description of the resource: it can be a managed system's resource or a real world entity
such as an identity or a department.

An [ Entity Type ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md) includes:

- One or more [ Entity Type ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)
- Zero or more
  [ Entity Association ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md)

#### Entity properties

Properties are key-value pairs, with a name and type that describes the nature of the value held by
the property. They are described by
[ Entity Type ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md) properties.

There are two kind of properties: **Scalar Properties** and **Navigation Properties**.

**Scalar Properties** simply hold a value: a string, a number, a date for example.

Available types include:

- `String`
- `Bytes`
- `Int32` (32 bits integer)
- `Int64` (64 bits integer)
- `DateTime`
- `Bool` (boolean)
- `Guid`
- `Double`
- `Binary` (binary file like an image)

For these types, the UI and binding system transforms the value retrieved from the database into the
corresponding type for display.

**Navigation Properties** properties hold links between the parent resource and another resource.

**Navigation Properties** type is `ForeignKey`.

**Navigation Properties** are completed by an Entity Association that explicitly describe the nature
of the link.

#### Entity association

An [ Entity Association ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md)
describes a link between entity types. It connects a pair of navigation properties, from two
**Entity Types**.

There are two types of navigational properties:

- _mono-valued_, that link to a [single](<https://en.wikipedia.org/wiki/One-to-one_(data_model)>)
  entity;
- _multi-valued_, that link to a
  [collection](<https://en.wikipedia.org/wiki/many-to-many_(data_model)>) of entities.

Given a navigation property A of EntityType 1, linking EntityType 1 to navigation properties B of
EntityType 2, then navigation property B is called the reverse property of navigation property A and
navigation property A is called the reverse property of navigation property B.

For example,

- The _User_ entity type has the navigational property _Positions_ (a link to **zero or
  more\_**Position\_ entities);
- The _Position_ entity type has the navigational property _Person_ (a link to **zero or
  one\_**User\_ entity);
- The navigational property _Person_ is the reverse link of the navigational property _Positions;_
- The _User_ entity type has the navigational property _Manager_ (a link to **zero or one\_**User\_
  entity);
- The _User_ entity type has the navigational property _Subordinates_ (a link to **zero or
  more\_**User\_ entities);
- The navigational property _Subordinates_ is the reverse link of the navigational property
  _Manager_.

#### Locatable property

Some property values must be available in several languages. In this case, we define a **neutral
property** and as many corresponding properties as languages.

The built-in _InternalDisplayName_ property is a neutral property. Its associated properties are
named \_`InternalDisplayName___L{Index}`_ where \_Index_ reference the
[Languages](/docs/identitymanager/saas/toolkit/languages.md).

#### Computed property

A property can be calculated from other properties. The
[ Entity Type ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md) property expression
element allows the expression of a computed property. It references the property (specifying the
entity type's identifier and the property's identifier) and expresses the calculation based on a
given entity using the calculation [Expressions](/docs/identitymanager/saas/toolkit/expressions/index.md) syntax.

An element `<EntityPropertyExpression>` can be used to calculate a scalar property or a mono-valued
navigation property. In the latter case, the expression must return an integer that corresponds to
the primary key of the target entity.

#### Display name

Every declared **EntityType** automatically has the `InternalDisplayName` property even if it is not
explicitly declared in the applicative configuration.

It represents a user-friendly name for **EntityType** that is used in the UI if needed.

Its value can be explicitly computed by an
[ Entity Type ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md) property expression.
Otherwise, a default value is automatically computed by Identity Manager using the first property of
the **EntityType** where `identifier` contains the string _"name"_. If no such property is found,
the first declared property of the **EntityType** is used instead.

The _InternalDisplayName_ property will be used as a default label of the entity in the UI.

#### Database mapping

Resources from the **resource repository** are stored in the generic UR_Resources table.

This table has:

- 128 columns to store scalar properties (index 0 to 127). The first four are reserved for big
  scalar properties values (as many as 4000 unicode char). he other columns are limited to 442
  unicode char. These columns are named C0 to C3V following a base-32 convention for naming.

- 25 columns to store mono-valued navigational properties values (index 128 to 152). These columns
  are named `I0` to `I4N` following a base-32 convention for naming.

_Multi-valued navigation property_ values are stored in the UR_ResourceLinks junction table.

Binary property values (such as pictures or files) are stored in the UR_ResourceFiles table.

### Mapping

Identity Manager's Entity Model also contains **a mapping** between the external data and
[ Entity Type ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md) properties or
[](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md)[ Entity Association ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entityassociation/index.md).
That's why entity types are organized into **connectors**. The **mapping\_**connects\_ entity types
to external sources of truth.

This information is provided by the
[ Entity Type Mapping ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md), their
[ Entity Type Mapping ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md) and
[ Entity Association Mapping ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md).

To build Identity Manager resources from external data found in the managed system, the entity model
provides a mapping between the external data (often in the form of CSV files, see
[ Upward Data Synchronization ](/docs/identitymanager/saas/synchronization/upward-data-sync.md)) and entity
properties. This information is provided by the
[ Entity Type Mapping ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md), their
[ Entity Type Mapping ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)and
[ Entity Association Mapping ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md).

Every
[ Entity Type Mapping ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)maps a
CSV column to a scalar [ Entity Type ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md).

Every
[ Entity Association Mapping ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
maps a CSV column to a navigation
[ Entity Type ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md).

#### Format

When exporting entries from an external system, the results are usually retrieved as simple strings,
written in a CSV file, and imported into the Identity Manager Database as-is. But an external system
will rarely uses the same format as Identity Manager to store objects such as dates.

Let's take, for example, a case where we want to store an employee's start date:

- In the external system, the date is stored as a string with the format `2020-09-29 22:00:00`.
- In Identity Manager, dates are stored as strings in the format `20200929220000`

We need to transform the input data, from the export, into something readable by Identity
Manager and, when writing to the external system, transform Identity Manager's data back into
something readable by the external system.

![Export and Fulfill Data transformation](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/entitypropertymapping-format/entitypropertymapping-format-flowchart.webp)

The format used in the external system can be provided through the
[ Entity Type Mapping ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md) using
the
[ References: Format for the EntityPropertyMapping ](/docs/identitymanager/saas/connectors/configuration/entity-property-mapping.md)
attribute to help Identity Manager to convert data appropriately.

If the field in the external system is not forced to a specific value type, but is free-form
(example: a string field in which date values are stored but which can sometimes hold other values),
we strongly recommend not using the `Format` attribute to prevent inconsistent user input in the
external system.

#### Primary key

When writing an
[ Entity Type Mapping ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md), one of
the _scalar properties_ should be chosen as primary key. This property will be used by Identity
Manager to [uniquely identify a resource](https://en.wikipedia.org/wiki/Primary_key). It is hence
crucial to choose carefully as many of Identity Manager's processes and optimizations depend on this
choice.

### SQL views

The `UR_Resource` table contains resources from all the connectors, for all the Entity Types.
Columns names are not semantically meaningful because they have generic I\*/C\* names. For this
reason, Identity Manager provides SQL views to help the user explore the resource repository from
the database. The views are useful to understand how Identity Manager works or to debug a faulty
configuration.

SQL Views are built by the
[ Create Database Views Task ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/createdatabaseviewstask/index.md).

SQL Views created by this tool are identified in the database by a `zz_` prefix.

Created views are not used by the Identity Manager engine directly. Identity Manager's engine always
creates, reads, updates and deletes from the `UR_*` tables.

## Records

The **entity model** is enhanced with **records** to handle positions and movements of staff. See
the [Identity Management](/docs/identitymanager/saas/identity-management/index.md) topic for additional information.

# Create an Entity Type

How to create an
[ Entity Type ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)
that corresponds to the connector model.

## Overview

An entity type is a model of a managed system's data. It defines the shape of the associated
resources (instances of said model) and not the intent (that would be a resource type. See the
[ Create a Resource Type ](/docs/identitymanager/saas/connectors/configuration/index.md) topic for
additional information. It defines a set of properties describing said resources and linking them
together.

In other words, an entity type is supposed to model the representation of a certain group of
resources inside Identity Manager. It is a relational model, made of properties
([ Define Scalar Properties ](/docs/identitymanager/saas/identity-management/entity-model.md)) and links between entity types
([ Define Navigation Properties ](/docs/identitymanager/saas/identity-management/entity-model.md)), both described later.

![Entity Type - Schema](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entitytypecreation_schema.webp)

The configuration of entity types depends entirely on the previously established
by[ Model the Data ](/docs/identitymanager/saas/connectors/configuration/index.md).

Entity types will impact the import of the managed system's resources, and the way said resources
are displayed in the UI.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
purpose of the application.

| Input                                                                                                                                                           | Output      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Connection (required) Refreshed schemas (required) Connector's data [ Model the Data ](/docs/identitymanager/saas/connectors/configuration/index.md) (required) | Entity type |

See the [Create a Connection](/docs/identitymanager/saas/connectors/configuration/connections.md) and
[ Model the Data ](/docs/identitymanager/saas/connectors/configuration/index.md) topics for additional information.

## Create an Entity Type

Create an entity type by proceeding as follows:

1. [ Create the Entity Type ](/docs/identitymanager/saas/identity-management/entity-model.md).
2. [ Define Scalar Properties ](/docs/identitymanager/saas/identity-management/entity-model.md)to be used in the entity type.
3. Choose the [ Select Primary Keys ](/docs/identitymanager/saas/identity-management/entity-model.md) and key properties which will identify
   resources.
4. Define [ Define Navigation Properties ](/docs/identitymanager/saas/identity-management/entity-model.md)if applicable.
5. Customize the [ Set Resources' Display Names ](/docs/identitymanager/saas/identity-management/entity-model.md) for the entity
   type's resources.
6. Organize the [ Organize Resources' Datasheets ](/docs/identitymanager/saas/identity-management/entity-model.md) for the entity
   type's resources in Identity Manager.

For some connectors, Identity Manager provides a template to automatically create a basic
configuration. See below this note.

> For example, the Active Directory template automatically creates an AD entity type and two
> resource types for a standard AD connector. The template is available for a connector with an AD
> connection but no entity types.
>
> ![Entity Type - AD Template](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entitytype_template_v602.webp)

## Verify the Entity Type

Changes will take effect once you have launched synchronization. Therefore, in order to verify the
process, follow the verification procedure indicated
to[ Synchronize Data ](/docs/identitymanager/saas/synchronization/index.md).

# Select Primary Keys

How to choose its keys and an
[ Entity Type Mapping ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)key
in order to uniquely identify the
[ Entity Type ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)'s
resources at different points in a resource's lifecycle.

## Overview

Here you will learn how to select keys from among the entity type's scalar properties, in order to
ensure the unique identification of resources at different times.

It is important to show caution when choosing the mapping key and key properties for a set of data.
Every extracted resource must have unique keys in order to be uniquely identified in all IGA actions
performed by Identity Manager.

### Key properties

The key property of an entity type is a property chosen from among scalar properties. A key property
is used only in the XML configuration, but required when working both from the UI or from the XML
configuration.

The purpose of key properties is to uniquely identify a resource from the entity type in the XML
configuration. In particular, some rules need to fetch a resource, by querying the key property's
column in Identity Manager's database.

> For example a navigation rule involving an AD group can be written:
>
> ```
>
> <NavigationRule Property="memberOf" Resource="CN=SG_APP_AG002,OU=Applications,DC=acme,DC=internal" SingleRole="AG002" />
>
> ```
>
> Identity Manager needs to know what column to query to find the right resource via
> `CN=SG_APP_AG002...`. In this example we must choose `dn` as a key property because it is the `dn`
> property we use to represent the AD resource.

Key properties must be unique and immutable. They do not have to be immutable but they must enable
resources to be uniquely identifiable at t time.

> The `dn` attribute of a resource in the Active Directory usually depends on the resource's
> position, which often changes during the resource's lifecycle. However, `dn` is unique at a given
> time, and rather useful to define for example query rules for `parentdn`.

Only one key property is required, but using several key properties can sometimes help with the
rules in the XML configuration. Identity Manager will search the columns of each key property, one
by one, until a corresponding resource is found.

> For example, the AD's unique identifier is `objectGuid`. However, integrators may prefer to use
> `dn` because it constitutes a clearer group identification from a user's point of view. Plus,
> `objectGuid` is environment-specific so using it can complexify a situation where we want to move
> the configuration from an environment to another.
>
> Since an `objectGuid` can still be an interesting identifier, we want to have both the `dn` and
> the `objectGuid` as key properties. In this case, Identity Manager will be able to fetch a
> resource in a rule using said resource's `dn` or `objectGuid`.

### Mapping key

The mapping key is also chosen from among scalar properties, and serves to uniquely identify any
resource during the[ Synchronize Data ](/docs/identitymanager/saas/synchronization/index.md). It must be unique and
immutable, i.e. must not change during the whole lifecycle of the resource.

> A mapping key cannot be based on properties subject to change, such as the display name of any
> object, or users' title which could be renamed.
>
> For example, resources from the AD are usually identified through the `objectGuid` attribute which
> is therefore specified as mapping key.

Commonly used mapping keys are:

- `objectGuid` for the Active Directory
- `objectid` for Microsoft Entra ID
- `entryUuid` for LDAP
- `Identifier` for the directory
- `Login` for SAB
- `sapid` for SAP
- `sys_id` for ServiceNow
- `EmployeeId` for the HR

Since the mapping is able to uniquely identify any resource, NETWRIX recommends that your mapping
key is always part of your key properties.

## Select the Entity Type's Keys

Create an entity type by proceeding as follows:

1. Start by defining the entity type's scalar properties. See the
   [ Define Scalar Properties ](/docs/identitymanager/saas/identity-management/entity-model.md) topic for additional
   information.

   ![Keys](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_keys_v522.webp)

2. In the entity type's **Properties** section, choose the key properties.
3. Choose the mapping key.
4. Click on **Create & Close** > **Create** to save your changes.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you
should reload the schema to implement the changes. You do not need to click on the button every
time. It is essential though to reload after the final changes are made.

![Reload](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the
left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

## Next Steps

After the entity type is created with its scalar properties and keys, you can
[ Define Navigation Properties ](/docs/identitymanager/saas/identity-management/entity-model.md) and/or
[ Set Resources' Display Names ](/docs/identitymanager/saas/identity-management/entity-model.md).

# Define Scalar Properties

How to define the simple, or scalar, properties of an
[ Entity Type ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)'s
resources.

## Overview

Here you will learn how to define scalar properties, which contain scalar values, mostly based on
the properties from the corresponding managed system.

> For example: `DisplayName`; `Email`; `Identifier`; `StartDate`; etc.
>
> ![Scalar Properties](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarex_v600.webp)

Most often, properties inside Identity Manager are each linked to a property from the managed
system. This way, data from the managed system can be imported into Identity Manager and stored in
the corresponding property. These properties are mapped from the source (see step 2).

If the property to be created does not exist in the external source, it is impossible to map the
property, but it can still be created with **+ Add a scalar property**.

This can be used to store data needed for assignment management, but which you cannot write to the
connected system. Since these properties do not exist in the connected system, they cannot be
written or read.

For example, we may need to create in the AD the property `isUnused` to spot unused accounts. It
would be configured with a C# expression based on other properties from the same entity type. These
properties, such as `accountExpires` and `lastLogonTimestamp`, are each linked to a property from
the AD, while `isUnused` is for governance and surveying AD accounts.

Such properties do not exist in the AD, and thus will never be written to the AD, nor overwritten by
any property from the AD, but will be recalculated based on the other properties.

## Define the Entity Type's Scalar Properties

Define the entity type's scalar properties by proceeding as follows:

1. Start by declaring the [ Create the Entity Type ](/docs/identitymanager/saas/identity-management/entity-model.md).
2. In the entity type's **Properties** section, click on **Map scalar properties** to display
   existing columns from the external source, and select the properties to be used in the entity
   type.

   ![Map from source](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarpropertiesmap_v602.webp)

   You need to configure at least one property to be able to define primary keys later, and thus
   create an entity type.

3. Fill in the information fields.

   ![Scalar properties](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarproperties_v603.webp)

   - **APPLICATION METADATA**: fields about the future display of the properties inside Identity
     Manager.

     - `Identifier`: must be unique among properties, without any whitespace, and be
       C#-compatible.
       [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure).
     - `Name`: will be displayed in the UI to indicate the property.

       Entity properties' names and identifiers cannot be "Id".

     - `Format`: format used for the property's display in Identity Manager, for search tools and
       computation based on said property. Do not keep the default string format if the property
       is not a string. See the
       [ References: Format for the EntityPropertyMapping ](/docs/identitymanager/saas/connectors/configuration/entity-property-mapping.md)
       topic for additional information.

       > For example, dates, booleans, integers, etc.

       For one entity type, Identity Manager can store up to 128 scalar properties of any
       format, and an unlimited number of binaries which are stored differently. Among these
       128 properties, only 4 can be formatted as more-than-443-character strings (with a limit
       of 4,000 characters), and 124 as less-than-443-character strings.

   - **EXTERNAL SYSTEM**: fields about the corresponding properties inside the connected system.

     - `Source Column`: column in the external system where the property data comes from.
       Advanced settings can be configured according to the description below.
     - `Format`: for mapped properties, format used to convert a value during export and fulfill
       from Identity Manager to the connected system, whenever different from a string.
       > To continue with the `AD - Entry` entity type, we map all the properties we need:
       >
       > `accountExpires`; `c`; `cn`; `comment`; `company`; `department`; `description`;
       > `displayName`; `division`; `dn`; `employeeId`; `employeeNumber`; `employeeType`;
       > `extensionAttribute10`; `extensionAttribute11`; `givenName`; `groupType`;
       > `homeDirectory`; `homeDrive`; `initials`; `l`; `lastLogonTimestamp`; `mail`; `mobile`;
       > `objectCategory`; `objectGuid`; `objectSid`; `ou`; `pwdLastSet`; `rdn`;
       > `sAMAccountName`; `scriptPath`; `sn`; `st`; `telephoneNumber`; `thumbnailPhoto`;
       > `title`; `uid`; `userAccountControl`; `userPrincipalName`; `whenCreated`.
       >
       > We create the properties that do not exist in the external system: `AppName`;
       > `businessCategory`; `isUnused`; `thumbnailPhotoTag`.
       >
       > Some of them have a specific format in case of provisioning to the managed AD like
       > `thumbnailPhoto` of format `Binary` or `objectCategory` as `RDN` or `pwdLastSet` as
       > `1601 Date`.
       >
       > ![AD Entity Type - Scalar Properties](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_examplead2_v602.webp)

4. Click on the Gear symbol to add advanced settings if needed.

   ![Advanced Settings](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_propertiessettings_v602.webp)

   - `Icon`: can be chosen from [Microsoft's list](https://uifabricicons.azurewebsites.net/) and
     will be displayed with the property among users' data.
   - **Source Expression**: expression that defines the property based on at least one source
     object. Can be defined by a property path and/or
     [Expressions](/docs/identitymanager/saas/toolkit/expressions/index.md).

     > For example, `isUnused` is created to spot unused accounts via a combination of
     > `accountExpires` and `lastLogonTimestamp`:
     >
     > ![Advanced Settings](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_sourceexpressionexample_v60.webp)

   - `Flexible Comparison Expression`: expression that inserts adaptable comparison flexibility
     when using a searchbar for the property.
   - `History Precision`: time period over which Identity Manager historically records only one
     value.

     > For example, the `lastLogonTimestamp` property of an AD resource is modified every time
     > the user connects to the application. Every modification triggers the historization of all
     > properties for said resource inside the database. Hence, the database can quickly become
     > full of data. In order to lighten the database, we can set the `History Precision` option
     > to one week (10080 minutes) so that resources are historized once a week at most
     > (concerning changes on `lastLogonTimestamp`). In the meantime, in case of a change,
     > instead of historizing resources with all their properties, only `lastLogonTimestamp` is
     > updated with the new value.

   Clicking on **Continue** closes the pop-up window so that you can continue the configuration of
   the entity type. But it does not save anything.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you
should reload the schema to implement the changes. You do not need to click on the button every
time. It is essential though to reload after the final changes are made.

![Reload](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the
left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

## Next Steps

Before saving, you must first[ Select Primary Keys ](/docs/identitymanager/saas/identity-management/entity-model.md)for the entity type.

## Troubleshooting

If the Format column is not displayed in the External System part, then:

![Scalar properties](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarpropertieswithoutformat_v522.webp)

Refresh the connections' schemas.

# Define Navigation Properties

How to define the properties which describe the
[Entity Type](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/metadata/entitytype/index.md)'s
relationships to other entity types.

## Overview

Here you will learn to define navigation properties, which contain scalar values just like scalar
properties, but which are also linked to and point to other properties—from the same entity type or
to another entity type.  
See the [Define Scalar Properties](/docs/identitymanager/saas/identity-management/entity-model.md) topic for additional
information.

> For example, `memberOf` can contain a list of groups, thus linking a user to groups, and a group
> to other groups. In the UI, `memberOf` is displayed just like scalar properties, but you can click
> its values to access each group in the list. Here for the AD entry `ADM Vidal Pierre`:
>
> ![Navigation Property - memberOf](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_memberof_v600.webp)
>
> Clicking on one of these groups will display the group’s properties, including the other side of
> the `memberOf` property—called `member`—which contains the list of users and groups who are
> members. Example: `SG_APP_RAY_0_LDAP_READLDSFEDE`:
>
> ![Navigation Property - member](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_member_v600.webp)

> As another example, a department is linked to a manager who is an existing user. The user
> identifier is used in the `Manager` property to create the link between department and manager. In
> the UI, `Manager` is displayed like scalar properties, but you can click it to access the
> manager’s page:
>
> ![Navigation Property - Manager](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_manager_v600.webp)
>
> Clicking the manager displays their properties, including the `Department` property, which points
> back to the managed department:
>
> ![Navigation Property - Managed Department](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_managerof_v600.webp)

Navigation properties can create a link:

- inside an entity type;
- between two entity types from the same connector;
- between two entity types from different connectors.

Inside Identity Manager, a navigation property has a flip side—one for each linked element.

For example, in AD:

- `member`: for groups (contains a list of users)
- `memberOf`: for users (contains a list of groups)

Some systems only expose one side.  
For example, AD only exposes `member` on groups. Users don’t have `memberOf`.  
But Identity Manager links both sides, translating the info to simulate bidirectionality.

When importing from AD, `member` updates Identity Manager's `member`, which then updates `memberOf`.

Most properties in Identity Manager are linked to those in the managed system so data can be
imported and stored correctly. These mappings are configured in Step 3 below.

If a property doesn’t exist in the source system, you can still create it using **+ Add a navigation
property**.  
This is useful for storing internal-use data that the connected system can’t read or write.

## Reload

After saving, a green banner reminds you to reload the schema.  
It’s not necessary after every step—but is **required after the final step** to apply changes.

![Reload](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button ensures updates appear in the menu links on the UI home page.  
You’ll find it either in the banner or on the connector dashboard.

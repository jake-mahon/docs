# Category

A category is a classification of Composite Roles, Single Roles or/and [Resource Types](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md). It can be used to group multiple roles of the same context.

## Examples

The following example declares a new category called "Shares - Public".

```

    <Category Policy="Default" Identifier="Shares - Public" DisplayName_L1="Shares - Public" />

```

## Properties

| Property | Details |
| --- | --- |
| Description\_L1   optional | __Type__    String   __Description__   Describe this category in detail. |
| DisplayName\_L1   required | __Type__    String   __Description__   Display name of the category in language 1 (up to 16). |
| Identifier   required | __Type__    String   __Description__   Unique identifier of the category. |
| IsCollapsed   default value: false | __Type__    Boolean   __Description__   Defines if the category must be collapsed by default in the permission list of a resource (View Permissions popup and roles basket). |
| Parent   optional | __Type__    Int64   __Description__   Represents the parent category definition. |
| Policy   required | __Type__    Int64   __Description__   Identifier of the policy that the category is part of. |

---
sidebar_position: 768
title: AccessControlPropertyGroup
---

# AccessControlPropertyGroup

AccessControlPropertyGroup is used to hide properties based on the connected users profiles and scopes of responsibility.
It allows applying visibility rules on groups of entity properties.

The AccessControlPropertyGroup on itself is only a marker. The groups are assigned to properties by using Access Control Entity Type and Access Control Entity Property.

A group can contain properties from several entity types by adding as many AccessControlEntityType as needed.

An Access Control Rule can then define the profiles and the scopes of responsibility allowed to view the properties in the two groups.

When an API call is performed on a resource, the values of the properties that belong to AccessControlPropertyGroup will not be returned unless the calling user has the right permissions.

## Examples

The following example shows two property groups. The first one for HR sensitive properties like the start and exit dates. The other one contains administration properties like the login or the compliance grace period.

```
              

```
Here, the Administrator profile is given access to all the properties. The Manager profile can view all the HR sensitive fields for people in his department.

```
          

```
## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1 required | **Type**  String  **Description** Display name of the group in language 1 (up to 16). |
| Identifier required | **Type**  String  **Description** Identifier of the group. |
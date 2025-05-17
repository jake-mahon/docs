---
sidebar_position: 1022
title: Infer Single Roles with a Composite Role
---

# Infer Single Roles with a Composite Role

This guide shows how to assign several single roles via the assignment of one composite role.

It is possible to infer SingleRoles with [Composite Role](../../../toolkit/xml-configuration/provisioning/compositerole/index "CompositeRole").
The SingleRole can only be inferred by the CompositeRole if both the CompositeRole and SingleRole rules are verified.

## Create a Dimension

The restriction of resource allocations is done from a filter. To do this, it is necessary to create [Dimension](../../../toolkit/xml-configuration/metadata/dimension/index "Dimension") to define which EntityTypes the filters will apply to.

For the different examples of restrictions, the filters will be based on the EntityType "Organization" and "Title".

```
  

```
## Create a Composite Role

A CompositeRole is created in the same way as a SingleRole.

```


```
## Assign the Composite Role Based on the Dimension

:::note
This step is optional for our simple purpose of inferring single roles with a composite role. The composite role can be linked to a dimension, but it does not have to.
:::

The CompositeRoleRule can be limited with the use of dimensions.

```


```
## Assign Single Roles Based on the Composite Role

The link between a SingleRole and a CompositeRole is made in the SingleRoleRule.

```
                                                                                                            

```
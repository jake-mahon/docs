---
sidebar_position: 353
title: Restrict Users' Rights
---

# Restrict Users' Rights

This guide shows how to define rules to limit users' access rights, which is possible via several elements.

## Overview

Each UI element can be accessed only by the users who have a profile with the appropriate access rights.

All of this page's examples are based on the following access rights to view the `Directory_User` entity type:

```
        

```
## Assign a Profile Based on Users' Dimensions

Assign a profile based on users' dimensions by proceeding as follows:

1. Create the appropriate dimensions.

   > The following example states two user criteria as dimensions: users' organizations and titles:
   >
   > ```
>
   > 
   >
   > ```
See the [Dimension](../../../toolkit/xml-configuration/metadata/dimension/index "Dimension") topic for additional information.
2. Write profile rules and profile rule contexts to make the previously created dimensions act as filters in rules meant to assign profiles to users.

   > The following examples creates a rule assigning the `Manager` profile to specific users based on their organizations and titles, now that they both exist as dimensions:
   >
   > ```
>
   >   
   >
   > ```
The profile rule context must use a Sub-Binding to define the entity type that contains the dimension information.

   See the [Dimension](../../../toolkit/xml-configuration/metadata/dimension/index "Dimension") topic for additional information.

## Limit an Entity's Visibility

Limit an entity's visibility by proceeding as follows:

1. Create at least one property group to gather a set of entity properties together.

   > For example:
   >
   > ```
>
   > 
   >
   > ```
See the [Dimension](../../../toolkit/xml-configuration/metadata/dimension/index "Dimension") topic for additional information.
2. Create an access control entity type to list all the properties whose visibility must be restricted, and link them to a visibility group.

   > For example:
   >
   > ```
>
   >                   
   >
   > ```
As a result, all the properties listed in the access control entity type are hidden from users by default when they have the usual permissions written above. See the [Dimension](../../../toolkit/xml-configuration/metadata/dimension/index "Dimension") topic for additional information.

   To be able to see these properties, a user must have these permissions with a full access.

   > For example to give access to all properties:
   >
   > ```
>
   >       
   >
   > ```
>
   > And to give access only to a property group:
   >
   > ```
>
   > 
   >
   > ```
When there is not any profile with a full access, then the visibility restriction is lifted and all users can access the properties.

## Limit a Profile's Permissions

Limit a profile's permissions by using filters in the access control rule that give permissions to the profile.

> For example to limit permissions based on a hardcoded value:
>
> ```
>
> 
>
>   
>
>   
>
> ```
>
> And based on a dimension:
>
> ```
>
> 
>
>   
>
>   
>
> ```
See the [Dimension](../../../toolkit/xml-configuration/metadata/dimension/index "Dimension") topic for additional information.
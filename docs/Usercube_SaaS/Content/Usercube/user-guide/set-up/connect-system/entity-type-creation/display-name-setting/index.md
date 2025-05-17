---
sidebar_position: 642
title: Set Resources' Display Names
---

# Set Resources' Display Names

How to change the value of the display name for resources of an [Entity Type](../../../../../integration-guide/toolkit/xml-configuration/metadata/entitytype/index).

## Overview

Here you will learn how to change a resource's display name, which is the name used by the UI to identify a resource of an entity type. Its value is computed from existing properties. For example for the entity type `HR - User`, integrators may set the display name to:  
` -  `.

![Display Name - Example](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_displayNameExample_V600.png)

If you do not set your own display name, Identity Manager provides a default value based on the first scalar property after alphabetizing all the properties whose name contains `name`.

## Set the Resource's Display Name

Set the resource's display name by proceeding as follows:

1. Start by creating the entity type with its calar properties and keys. See the [Define Scalar Properties](../scalar-property-definition/index) and [Select Primary Keys](../key-selection/index) topics for additional information.
2. Ensure that the created properties are saved by clicking on **Save & Close** > **Save** at the top right corner.
3. On the entity type's definition page, click on the **Settings** tab.

   ![Display Name - Property Path](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_displayName_V603.png)
4. Set the display name. As a display name, you can use either the value of an existing property, or compute [Expressions](../../../../../integration-guide/toolkit/expressions/index) based on existing properties.

   > A resource from `AD - Entry` can be displayed using its `userPrincipalName` with predefined functions.
   >
   > ![AD Entity Type - Display Name](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_exampleAD4_V602.png)
   >
   > ![AD Entity Type - Display Name Result](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_exampleAD4-result_V602.png)

   > Another example from the HR connector (User entity type):
   >
   > ![HR User Entity Type - Display Name](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_exampleHR_V602.png)
   >
   > ![HR User Entity Type - Display Name Result](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_exampleHR-result_V602.png)
5. Click on **Save & Close**.

   :::note
Changes inside connectors won't take effect until the next
   Synchronize Data
   . More specifically, changes in display names won't take effect until the next
   Update Entity Property Expressions Task
   runs.
   :::

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you should reload the schema to implement the changes. You do not need to click on the button every time. It is essential though to reload after the final changes are made.

![Reload](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_reload_V522.png)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

## Troubleshooting

If no property appears in the display name auto-completion, then:

![No Property](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_troubleProp_V602.png)

Ensure that the created properties are saved by clicking on **Save & Close** > **Save** at the top right corner of the screen.
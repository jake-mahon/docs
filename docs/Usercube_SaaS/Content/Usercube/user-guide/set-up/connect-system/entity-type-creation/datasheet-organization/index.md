---
sidebar_position: 641
title: Organize Resources' Datasheets
---

# Organize Resources' Datasheets

How to change the default display of the resource data from this entity type, by creating display groups.

## Overview

Here you will learn how to change how a resource's data is organized in the UI, by creating display groups.

If you do not add display groups, Identity Manager displays the data of this entity type's resources in alphabetic order.

> For example, for an HR user without any display groups:
>
> ![Without Display Groups](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_displayGroups_without_V603.png)

## Organize Resources' Datasheets

Organize resources' datasheets by proceeding as follows:

1. Start by creating the entity type with its scalar properties and keys. See the [Define Scalar Properties](../scalar-property-definition/index) and [Select Primary Keys](../key-selection/index) topics for additional information.
2. Ensure that the created properties are saved by clicking on **Save & Close** > **Save** at the top right corner.
3. On the entity type's definition page, click on the **Display** tab.

   ![Display Groups](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_displayGroups_V603.png)
4. Click on the arrow to see the entity type's properties listed in the alphabetical order, and drag and drop the properties to customize the order.

   > For example:
   >
   > ![Display Example](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_displayGroups_example1_V603.png)
5. When needing to group properties together, click on **Add Display Group**, fill in the fields and select from the pop-up window the properties to be grouped.

   ![Display Group Fields](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_displayGroups_fields_V603.png)

   * `Identifier`: must be unique among display groups, without any whitespace, and be C#-compatible. [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#643-identifiers).
   * `Name`: will be displayed in the UI to indicate the property group.
   > For example:
   >
   > ![Display Example](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_displayGroups_example2_V603.png)
   >
   > The entity type's resources would look like:
   >
   > ![Display Example](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_displayGroups_example2results_V603.png)
6. Click on **Save & Close**.

   :::note
Changes in display groups won't take effect until the next
   Update Entity Property Expressions Task
   runs.
   :::

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you should reload the schema to implement the changes. You do not need to click on the button every time. It is essential though to reload after the final changes are made.

![Reload](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/EntityTypeCreation_reload_V522.png)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.
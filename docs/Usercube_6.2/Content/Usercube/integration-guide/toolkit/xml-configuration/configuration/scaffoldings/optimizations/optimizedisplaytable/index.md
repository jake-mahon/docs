---
sidebar_position: 971
title: Optimize Display Table
---

# Optimize Display Table

This scaffolding optimizes the given display table by replacing its tiles navigation properties by scalar (pre-computed, via expressions) properties. This ultimately improves the performances of the SQL queries used to fetch the data displayed in the corresponding table.

In order to optimize the display table, this scaffolding will create the following elements if they don't exist.

* An [Entity Type](../../../../metadata/entitytype/index)for each tile item that uses a navigation binding. This will be used to hold the computed expression.
* An [Entity Property Expression](../../../../metadata/entitypropertyexpression/index) to evaluate the binding expression used by the optimizable tile item.

Then, the scaffolding will link the display table tile elements to the newly created scalar properties.

This scaffolding has a downside which is that the displayed data is less dynamic than a normal display table, since it requires computing the expression (via jobs) ahead of time.

## Examples

The following example optimized the DisplayTable `Directory_User`

```


```
## Properties

| Property | Details |
| --- | --- |
| DisplayTableIdentifier required | **Type**  String  **Description** The identifier of the display table to optimize |

## Generated XML

Our example generates the following configuration:

```
                                                                                                        

```
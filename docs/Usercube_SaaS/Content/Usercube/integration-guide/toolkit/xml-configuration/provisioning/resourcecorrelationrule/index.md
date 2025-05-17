---
sidebar_position: 203
title: Resource Correlation Rule
---

# Resource Correlation Rule

A correlation rule is used to correlate the resources, i.e. link resources to their owners. See the [Entitlement Management](../../../../../introduction-guide/overview/entitlement-management/index) topic for additional information.

## Examples

#### Correlation based on unchanged attributes

The following example creates an Active Directory correlation rule based on the mail property:

```


```
#### Correlation based on attributes changed by a function

The following example copies the previous example (based on unchanged attributes), but using a predefined function (`ToLower`) in source and target bindings' expressions, to compare the email attributes:

```


```
:::note
A list of Predefined functions is available.
:::

#### Correlation based on attributes within a C# expression

The following example creates an Active Directory correlation rule based on the comparison between the AD's simplified display name and an expression from the external system:

```


```
This example also uses a confidence rate equals to 80%.

## Properties

| Property | Details |
| --- | --- |
| Policy required | **Type**  Int64  **Description** Identifier of the policy that the rule is part of. |
| ResourceType required | **Type**  Int64  **Description** Identifier of the resource type. |
| SourceBinding optional | **Type**  Int64  **Description** Binding property from the source system. |
| SourceExpression optional | **Type**  String  **Description** Binding expression based on properties from the source system. See the [Expressions](../../../expressions/index "Expressions") topic for additional information. |
| SourceMatchedConfidenceLevel default value: 0 | **Type**  Int32  **Description** Defines the correlation confidence rate of this rule. If the value is less than 100, we process a manual review step to confirm the choice. |
| TargetBinding optional | **Type**  Int64  **Description** Binding property from the target system. |
| TargetExpression optional | **Type**  String  **Description** Binding expression based on properties from the target system. See the [Expressions](../../../expressions/index "Expressions") topic for additional information. |
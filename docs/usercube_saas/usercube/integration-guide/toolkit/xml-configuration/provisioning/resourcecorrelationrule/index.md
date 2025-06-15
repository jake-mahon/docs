# Resource Correlation Rule

A correlation rule is used to correlate the resources, i.e. link resources to their owners. See the [
Entitlement Management
](../../../../../introduction-guide/overview/entitlement-management/index.md) topic for additional information.

## Examples

#### Correlation based on unchanged attributes

The following example creates an Active Directory correlation rule based on the mail property:

```

    <ResourceCorrelationRule ResourceType="AD_Entry_To_Directory_UserRecord" TargetBinding="Directory_UserRecord:Mail" Policy="Default" SourceMatchedConfidenceLevel="100" SourceBinding="AD_Entry:mail" />

```

#### Correlation based on attributes changed by a function

The following example copies the previous example (based on unchanged attributes), but using a predefined function (```ToLower```) in source and target bindings' expressions, to compare the email attributes:

```

<ResourceCorrelationRule ResourceType="AD_Entry_To_Directory_UserRecord" TargetBinding="Mail" TargetExpression="ToLower" Policy="Default" SourceMatchedConfidenceLevel="100" SourceBinding="mail" SourceExpression="ToLower" />

```

A list of [Predefined functions](../../../expressions/predefined-functions/index.md) is available.

#### Correlation based on attributes within a C# expression

The following example creates an Active Directory correlation rule based on the comparison between the AD's simplified display name and an expression from the external system:

```

<ResourceCorrelationRule ResourceType="AD_Entry_NominativeUser" TargetBinding="displayName" TargetExpression="Simplify" Policy="Default" SourceMatchedConfidenceLevel="80" SourceExpression="C#:person:return (person.LastName + person.FirstName).Simplify();" />

```

This example also uses a confidence rate equals to 80%.

## Properties

| Property | Details |
| --- | --- |
| Policy   required | __Type__    Int64   __Description__   Identifier of the policy that the rule is part of. |
| ResourceType   required | __Type__    Int64   __Description__   Identifier of the resource type. |
| SourceBinding   optional | __Type__    Int64   __Description__   Binding property from the source system. |
| SourceExpression   optional | __Type__    String   __Description__   Binding expression based on properties from the source system. See the [Expressions](../../../expressions/index.md) topic for additional information. |
| SourceMatchedConfidenceLevel   default value: 0 | __Type__    Int32   __Description__   Defines the correlation confidence rate of this rule. If the value is less than 100, we process a manual review step to confirm the choice. |
| TargetBinding   optional | __Type__    Int64   __Description__   Binding property from the target system. |
| TargetExpression   optional | __Type__    String   __Description__   Binding expression based on properties from the target system. See the [Expressions](../../../expressions/index.md) topic for additional information. |

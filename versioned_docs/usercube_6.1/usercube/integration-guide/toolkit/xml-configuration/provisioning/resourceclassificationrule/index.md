# ResourceClassificationRule

In Usercube, this type of rule is used to classify the resources based on a C# expression.

## Examples

The following example declares a rule to classify the Active Directory accounts based on the dn values.

```

    <ResourceClassificationRule ResourceType="AD_Entry_TechnicalEntry" Policy="Default" ResourceTypeIdentificationConfidenceLevel="100"
        TargetExpression="C#:resource:return resource.dn.Contains(",CN=Roles,");" />

```

## Properties

| Property | Details |
| --- | --- |
| Policy   required | __Type__    Int64   __Description__   Identifier of the policy that the rule is part of. |
| ResourceType   required | __Type__    Int64   __Description__   Represents the resource type definition. |
| ResourceTypeIdentificationConfidenceLevel   default value: 0 | __Type__    Int32   __Description__   Defines the confidence level used to match the resources. |
| SourceMatchedConfidenceLevel   default value: false | __Type__    Boolean   __Description__   Defines the confidence level used to match the sources. |
| TargetExpression   optional | __Type__    String   __Description__   Defines the C# expression used to classify the resources. [See more details on C# expressions](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#see-more-details-on-c-expressions). |

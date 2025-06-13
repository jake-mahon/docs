# RoleMapping

Defines a naming rule to create a single role in a specific category based on a property.
A navigation rule will also be created by the naming rule, giving the property to the target user when the created single role is assigned to this user.

## Examples

### Additional condition

The following example uses ```WhereExpression``` to condition the application of the rule.

NETWRIX recommends using this property only when the properties from the rule items do not suffice.

Here the naming convention says that we should create a single role for each group (```memberOf``` value) whose ```dn``` starts with ```SG_```and whose dn's second part (between two ```_```) is made of three characters.

```

<RoleMapping Identifier="AD_dn" Policy="Default" Property="AD_Entry:memberOf" ResourceType="AD_Entry_NominativeUser" WhereExpression="C#:resource:return resource.dn?.Split('_')[1].Length == 3;" >    <Rule>        <Item Property="AD_Entry:dn" Operator="StartWith" Value="SG_"/>    </Rule></RoleMapping>

```

## Properties

| Property | Details |
| --- | --- |
| ApprovalRequired   default value: false | __Type__    Boolean   __Description__   Indicates that the generated role must be approved before being used by a policy. |
| ApprovalWorkflowType   default value: None | __Type__    ProvisioningPolicyApprovalWorkflow   __Description__   Indicates the number of validation to give to a manual role (from 0 to 3 inclusive). The value 4 is used when a manual assignment cannot be performed. |
| Category   optional | __Type__    Int64   __Description__   Identifier of the category. |
| CategoryDisplayNameBinding   optional | __Type__    Int64   __Description__   Defines the binding used to compute the category display name. |
| CategoryDisplayNameExpression   optional | __Type__    String   __Description__   References the C# or literal expression used to compute the category display name. [See more details on C# expressions](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#see-more-details-on-c-expressions). |
| CategoryIdentifierBinding   optional | __Type__    Int64   __Description__   Binding used to compute the category identifier. |
| CategoryIdentifierExpression   optional | __Type__    String   __Description__   C# or literal expression used to compute the category identifier. [See more details on C# expressions](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#see-more-details-on-c-expressions). |
| CommentActivationOnApproveInReview   default value: Inherited | __Type__    CommentActivationWithInherited   __Description__   Indicates if a comment is enabled when reviewing a request of the role and deciding to approve it.   ```0``` - Disabled   ```1``` - Optional   ```2``` - Required   ```3``` - Inherited: comment activation in the associated policy. |
| CommentActivationOnDeclineInReview   default value: Inherited | __Type__    CommentActivationWithInherited   __Description__   Indicates if a comment is enabled when reviewing a request of the role and deciding to refuse it.   ```0``` - Disabled   ```1``` - Optional   ```2``` - Required   ```3``` - Inherited: comment activation in the associated policy. |
| CommentActivationOnDeleteGapInReconciliation   default value: Inherited | __Type__    CommentActivationWithInherited   __Description__   Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to delete it.   ```0``` - Disabled   ```1``` - Optional   ```2``` - Required   ```3``` - Inherited: comment activation in the associated policy. |
| CommentActivationOnKeepGapInReconciliation   default value: Inherited | __Type__    CommentActivationWithInherited   __Description__   Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to keep it.   ```0``` - Disabled   ```1``` - Optional   ```2``` - Required   ```3``` - Inherited: comment activation in the associated policy. |
| DisplayNameBinding   optional | __Type__    Int64   __Description__   Defines the binding used to compute the role display name. |
| DisplayNameExpression   optional | __Type__    String   __Description__   References the C# or literal expression used to compute the role display name. [See more details on C# expressions](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#see-more-details-on-c-expressions). |
| HideOnSimplifiedView   default value: false | __Type__    Boolean   __Description__   ```true``` to hide this role in the basket simplified view. This flag is applied only on automatic assignments. |
| Identifier   required | __Type__    String   __Description__   Identifier of the role mapping. |
| IdentifierBinding   optional | __Type__    Int64   __Description__   Binding used to compute the role identifier. |
| IdentifierExpression   optional | __Type__    String   __Description__   C# or literal expression used to compute the role identifier. [See more details on C# expressions](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#see-more-details-on-c-expressions). |
| ImplicitApproval   default value: 0 | __Type__    Byte   __Description__   Indicates if the validation steps of the single role can be skipped.   ```0``` - Inherited: implicit approval value in the associated policy.   ```1``` - Explicit: all the workflow steps must be approved.   ```2``` - Implicit: the workflow steps can be skipped if the requester has enough permissions. |
| ParentCategoryIdentifierBinding   optional | __Type__    Int64   __Description__   Defines the binding used to compute the parent category. |
| ParentCategoryIdentifierExpression   optional | __Type__    String   __Description__   References the C# or literal expression used to compute the parent category. [See more details on C# expressions](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#see-more-details-on-c-expressions). |
| Policy   required | __Type__    Int64   __Description__   Identifier of the policy that the rule is part of. |
| Property   required | __Type__    Int64   __Description__   Property on which the naming rule will be applied. |
| ResourceType   required | __Type__    Int64   __Description__   Resource type on which the naming rule will be applied. |
| RolePolicy   optional | __Type__    Int64   __Description__   Identifier of the policy used for the roles created by the naming rule. |
| WhereExpression   optional | __Type__    String   __Description__   C# expression returning a boolean, used to condition the application of the naming convention. [See more details on C# expressions](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#see-more-details-on-c-expressions). |

## Child Element: Rule

Represent the sets of conditions which will determine the enforcement of the naming rule.

## Child Element: Item

Represents one of the conditions used to determine the enforcement of the naming rule.

### Properties

| Property | Details |
| --- | --- |
| Operator   default value: 0 | __Type__    QueryComparisonOperator   __Description__   Operator used in the condition for the naming rule enforcement. |
| Property   required | __Type__    Int64   __Description__   Property on which the condition for the naming rule enforcement is based. |
| Value   optional | __Type__    String   __Description__   Value used in the condition for the naming rule enforcement. |

# AssertValueRequiredAspect

Checks whether a given property has a non-null value.

## Examples

The following example makes sure that the contract start date is specified for any new worker. The pointcuts define when the value assertion must happen.

```

<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_ContractStartDate" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Binding="Workflow_Directory_User:Directory_User.Records.ContractStartDate" Message_L1="The contract start date is required">
    <PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" />    <PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" TemplateTransformation="NewInternalWorkflowIsReviewRequired" />    <PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />    <PointCut Activity="Directory_User_NewExternal:Review" ActivityState="ReviewWithFeedback-Approved" TemplateTransformation="NewExternalWorkflowIsReviewRequired" />  </AssertValueRequiredAspect>

```

## Properties

| Property | Details |
| --- | --- |
| Binding   required | __Type__    String   __Description__   Binding whose difference with ```ExpressionBinding``` defines the property to be validated by the aspect. |
| Identifier   required | __Type__    String   __Description__   Unique identifier of the aspect. |
| ExpressionBinding   optional | __Type__    String   __Description__   Binding:   - that defines the variable type used in the potential expressions specified in the aspect;   - whose difference with ```Binding``` defines the property involved in the aspect.   __Note:__ required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression   optional | __Type__    String   __Description__   Expression that conditions the aspect execution. [See more details on C# expressions](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#see-more-details-on-c-expressions). |
| Message\_L1   optional | __Type__    String   __Description__   Message in language 1 (up to 16) to be displayed when the property is empty. |
| Priority   default value: 0 | __Type__    Int32   __Description__   Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first.   __Note:__ the priority can be a negative value. |

## Child Element: PointCut

A pointcut is a mechanism telling Usercube when to execute the linked [aspect](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/workflows/aspects/index.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.png)

| Property | Details |
| --- | --- |
| Activity   required | __Type__    Int64   __Description__   Identifier of the activity whose specified state triggers the aspect. |
| ActivityState   required | __Type__    Enumeration   __Description__   Identifier of the activity state that triggers the aspect. |
| Mode   default value: 0 | __Type__    PointCutMode   __Description__   Mode defining when exactly the aspect is triggered around the specified workflow's activity state.   ```0``` - __Before__: the aspect will be executed on entry to the specified activity state, regardless of the transition used.   ```1``` - __After__: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

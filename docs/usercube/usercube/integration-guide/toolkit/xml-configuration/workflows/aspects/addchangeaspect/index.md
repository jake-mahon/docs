# Add Change Aspect

Modifies a given property value.

## Examples

The following example computes a new value for the property ```IsDraft``` from the ```Directory_User``` entity type. The new value is always ```true```. The pointcuts define when the value change must happen.

```

<AddChangeAspect Identifier="Directory_UserRecord_AddChange_IsDraft" Binding="Workflow_Directory_User:Directory_User.IsDraft" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:record:return true;">
    <PointCut Activity="Directory_User_NewInternal:PersistDraft" ActivityState="PersistOnlyResources-Invoked" Mode="Before" TemplateTransformation="NewInternalWorkflowIsReviewRequired" />    <PointCut Activity="Directory_User_NewExternal:PersistDraft" ActivityState="PersistOnlyResources-Invoked" Mode="Before" TemplateTransformation="NewExternalWorkflowIsReviewRequired" /></AddChangeAspect>

```

### Accept Null Value

The following example computes a new value for the ```Card``` property in users' records, considering ```null``` as a value. Instead of being ignored, a ```null``` value returned by ```Expression``` will replace the old value.

```

<AddChangeAspect Identifier="AddChangeAspect_Self_PersonRecord_Card" Binding="Workflow_Person:Person.PersonRecords.Card" AcceptNullValueExpression="C#:record:return true;" ExpressionBinding="Workflow_Person:Person.PersonRecords" Expression="C#:record:
        if(!string.IsNullOrEmpty(record.Card))
        {
            return record.Card;
        }
        return null;" >    <PointCut Activity="Self_DataUpdate:Request" ActivityState="Action-Executed" Mode="After" /></AddChangeAspect>

```

## Properties

| Property | Details |
| --- | --- |
| Binding   required | __Type__    String   __Description__   Binding whose difference with ```ExpressionBinding``` defines the property to be changed. |
| Identifier   required | __Type__    String   __Description__   Unique identifier of the aspect. |
| AcceptNullValueExpression   optional | __Type__    String   __Description__   C# expression returning a boolean, ```true``` to consider ```null``` for the new value returned by ```Expression```. By default, ```null``` values are ignored. |
| Expression   optional | __Type__    String   __Description__   C# expression returning a new value for the property to be changed.    __Note:__ this property can also be defined by a binding via ```ExpressionBinding```. |
| ExpressionBinding   optional | __Type__    String   __Description__   Binding:   - that defines the variable type used in the potential expressions specified in the aspect;   - whose difference with ```Binding``` defines the property involved in the aspect.   __Note:__ required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression   optional | __Type__    String   __Description__   Expression that conditions the aspect execution. See the [Expressions](/docs/usercube/usercube/integration-guide/toolkit/expressions/index.md) topic for additional information. |
| Priority   default value: 0 | __Type__    Int32   __Description__   Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first.   __Note:__ the priority can be a negative value. |

## Child Element: PointCut

A pointcut is a mechanism telling Identity Manager when to execute the linked [Aspects](/docs/usercube/usercube/integration-guide/toolkit/xml-configuration/workflows/aspects/index.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.png)

| Property | Details |
| --- | --- |
| Activity   required | __Type__    Int64   __Description__   Identifier of the activity whose specified state triggers the aspect. |
| ActivityState   required | __Type__    Enumeration   __Description__   Identifier of the activity state that triggers the aspect. |
| Mode   default value: 0 | __Type__    PointCutMode   __Description__   Mode defining when exactly the aspect is triggered around the specified workflow's activity state.   ```0``` - __Before__: the aspect will be executed on entry to the specified activity state, regardless of the transition used.   ```1``` - __After__: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

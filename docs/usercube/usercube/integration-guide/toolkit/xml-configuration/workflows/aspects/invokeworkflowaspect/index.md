# Invoke Workflow Aspect

Launches a workflow.

## Examples

The following example launches the workflow ```Directory_User_VehicleRequest``` when a vehicle is requested for a new internal user.

```

<InvokeWorkflowAspect Identifier="Directory_User_VehicleRequest" ExpressionBinding="Workflow_Directory_User:Directory_User" IfExpression="C#:person:return person.Vehicle_Requested;" Workflow="Directory_User_VehicleRequest">
    <PointCut Activity="Directory_User_NewInternal:Persist" ActivityState="Persist-Invoked" Mode="After" /></InvokeWorkflowAspect>

```

## Properties

| Property | Details |
| --- | --- |
| Identifier   required | __Type__    String   __Description__   Unique identifier of the aspect. |
| Workflow   required | __Type__    String   __Description__   Identifier of the workflow to be launched. |
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

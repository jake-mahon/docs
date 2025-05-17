---
sidebar_position: 178
title: Assert Value Aspect
---

# Assert Value Aspect

Checks whether the value of a given property satisfies a given condition.

## Examples

The following example makes sure that, when creating a new employee, the contract end date is after the contract start date. The pointcuts define when the value assertion must happen.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
        
```
### Assert a multi-valued object

When asserting a multi-valued object, said object must not be called through a binding that goes back and forth between entities.
  
  
For example, to manage records, using the ExpressionBinding set to . Records and the Expression using C#:record:return record.Directory\_User.Records... will not work.
  
  
Instead, the ExpressionBinding should be set to  and the Expression should use C#:user:return user.Records.

The following example makes sure that a user's positions do not overlap.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
    
```
## Properties

| Property | Type | Description |
| --- | --- | --- |
| Binding required | String | Binding whose difference with ExpressionBinding defines the property to be validated by the aspect. |
| Identifier required | String | Unique identifier of the aspect. |
| Expression optional | String | C# expression returning a boolean, false to invalidate the property value. |
| ExpressionBinding optional | String | Binding:   * Defines the variable type used in the potential expressions specified in the aspect; * Whose difference with Binding defines the property involved in the aspect   **NOTE:** Required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional | String | Expression that conditions the aspect execution. See the [Expressions](../../../../expressions/index "Expressions") topic for additional information. |
| Message\_L1 optional | String | Message in language 1 (up to 16) to be displayed when the property is invalidated by the condition specified in Expression. |
| Priority default value: 0 | Int32 | Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first.  **NOTE:** The priority can be a negative value. |

## Child Element: PointCut

A pointcut is a mechanism telling Identity Manager when to execute the linked aspect. See the [Aspects](../index "Aspects") topic for additional information.

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](../../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/PointCut.png)

| Property | Type | Description |
| --- | --- | --- |
| Activity required | Int64 | Identifier of the activity whose specified state triggers the aspect. |
| ActivityState required | Enumeration | Identifier of the activity state that triggers the aspect. |
| Mode default value: 0 | PointCutMode | Mode defining when exactly the aspect is triggered around the specified workflow's activity state. 0 - Before — the aspect will be executed on entry to the specified activity state, regardless of the transition used. 1 - After — the aspect will be executed on exit from the specified activity state, regardless of the transition used. |
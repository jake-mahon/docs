# Add Change Aspect

Modifies a given property value.

## Examples

The following example computes a new value for the property `IsDraft` from the `Directory_User`
entity type. The new value is always `true`. The pointcuts define when the value change must happen.

```

<AddChangeAspect Identifier="Directory_UserRecord_AddChange_IsDraft" Binding="Workflow_Directory_User:Directory_User.IsDraft" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:record:return true;">
    <PointCut Activity="Directory_User_NewInternal:PersistDraft" ActivityState="PersistOnlyResources-Invoked" Mode="Before" TemplateTransformation="NewInternalWorkflowIsReviewRequired" />    <PointCut Activity="Directory_User_NewExternal:PersistDraft" ActivityState="PersistOnlyResources-Invoked" Mode="Before" TemplateTransformation="NewExternalWorkflowIsReviewRequired" /></AddChangeAspect>

```

### Accept Null Value

The following example computes a new value for the `Card` property in users' records, considering
`null` as a value. Instead of being ignored, a `null` value returned by `Expression` will replace
the old value.

```

<AddChangeAspect Identifier="AddChangeAspect_Self_PersonRecord_Card" Binding="Workflow_Person:Person.PersonRecords.Card" AcceptNullValueExpression="C#:record:return true;" ExpressionBinding="Workflow_Person:Person.PersonRecords" Expression="C#:record:
        if(!string.IsNullOrEmpty(record.Card))
        {
            return record.Card;
        }
        return null;" >    <PointCut Activity="Self_DataUpdate:Request" ActivityState="Action-Executed" Mode="After" /></AddChangeAspect>

```

## Properties

| Property                           | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding required                   | **Type** String **Description** Binding whose difference with `ExpressionBinding` defines the property to be changed.                                                                                                                                                                                                                                                                   |
| Identifier required                | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                        |
| AcceptNullValueExpression optional | **Type** String **Description** C# expression returning a boolean, `true` to consider `null` for the new value returned by `Expression`. By default, `null` values are ignored.                                                                                                                                                                                                         |
| Expression optional                | **Type** String **Description** C# expression returning a new value for the property to be changed. **Note:** this property can also be defined by a binding via `ExpressionBinding`.                                                                                                                                                                                                   |
| ExpressionBinding optional         | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional              | **Type** String **Description** Expression that conditions the aspect execution. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                                                                                    |
| Priority default value: 0          | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                           |

## Child Element: PointCut

A pointcut is a mechanism telling Identity Manager when to execute the linked
[Aspects](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

# Assert Value Aspect

Checks whether the value of a given property satisfies a given condition.

## Examples

The following example makes sure that, when creating a new employee, the contract end date is after
the contract start date. The pointcuts define when the value assertion must happen.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AssertValueAspect Identifier="Directory_User_NewInternal_CheckDates" Binding="Workflow_Directory_User:Directory_User.Records.ContractEndDate" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Expression="C#:record: return ( ((Nullable&lt;DateTime&gt;) record.ContractStartDate).HasValue && ((Nullable&lt;DateTime&gt;) record.ContractEndDate).HasValue) ?  record.ContractStartDate &lt; record.ContractEndDate : true;" Message_L1="Contract's end date must be after contract's start date.">    <PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="Before" />    <PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" Mode="Before" /></AssertValueAspect>
```

### Assert a multi-valued object

When asserting a multi-valued object, said object must not be called through a binding that goes
back and forth between entities.

For example, to manage records, using the ExpressionBinding set to
`Workflow_Directory_User:Directory_User`. Records and the Expression using C#:record:return
record.Directory_User.Records... will not work.

Instead, the ExpressionBinding should be set to `Workflow_Directory_User:Directory_User` and the
Expression should use C#:user:return user.Records.

The following example makes sure that a user's positions do not overlap.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AssertValueAspect Identifier="RecordsOverlapCheck" Binding="Workflow_Directory_User:Directory_User.Records.Organization" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:user:for (int i = 0; i &lt; user.Records.Count; i++)
{
    for (int j = 0; j &lt; user.Records.Count &amp;&amp; i != j ; j++)
    {
        if (user.Records[i].StartDate != default
            &amp;&amp; user.Records[j].StartDate != default)
        {
            if ((user.Records[i].EndDate == null) &amp;&amp; (user.Records[j].EndDate == null))
              || ((user.Records[i].EndDate == null) &amp;&amp; (user.Records[j].EndDate != null) &amp;&amp; (user.Records[j].EndDate &gt; user.Records[i].StartDate))
              || ((user.Records[j].EndDate == null) &amp;&amp; (user.Records[i].EndDate != null) &amp;&amp; (user.Records[i].EndDate &gt;= user.Records[j].StartDate))
              || ((user.Records[i].EndDate != null) &amp;&amp; (user.Records[j].EndDate != null) &amp;&amp; (user.Records[i].StartDate &lt;= user.Records[j].EndDate) &amp;&amp; (user.Records[i].EndDate &gt;= user.Records[j].StartDate))
            {
                return false;
            }
        }
    }
}
return true;" Message_L1="A user cannot have more than one position simultaneously.">    <PointCut Activity=... ></AssertValueAspect>
```

## Properties

| Property                   | Type   | Description                                                                                                                                                                                                                                                                                                                                     |
| -------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding required           | String | Binding whose difference with ExpressionBinding defines the property to be validated by the aspect.                                                                                                                                                                                                                                             |
| Identifier required        | String | Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                |
| Expression optional        | String | C# expression returning a boolean, false to invalidate the property value.                                                                                                                                                                                                                                                                      |
| ExpressionBinding optional | String | Binding: - Defines the variable type used in the potential expressions specified in the aspect; - Whose difference with Binding defines the property involved in the aspect **NOTE:** Required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional      | String | Expression that conditions the aspect execution. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                                                                            |
| Message_L1 optional        | String | Message in language 1 (up to 16) to be displayed when the property is invalidated by the condition specified in Expression.                                                                                                                                                                                                                     |
| Priority default value: 0  | Int32  | Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **NOTE:** The priority can be a negative value.                                                                                                                                                                  |

## Child Element: PointCut

A pointcut is a mechanism telling Identity Manager when to execute the linked aspect. See the
[Aspects](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md) topic for additional information.

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Type         | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | Int64        | Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                          |
| ActivityState required | Enumeration  | Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                     |
| Mode default value: 0  | PointCutMode | Mode defining when exactly the aspect is triggered around the specified workflow's activity state. 0 - Before — the aspect will be executed on entry to the specified activity state, regardless of the transition used. 1 - After — the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

# Assert Value Required Aspect

Checks whether a given property has a non-null value.

## Examples

The following example makes sure that the contract start date is specified for any new worker. The
pointcuts define when the value assertion must happen.

```

<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_ContractStartDate" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Binding="Workflow_Directory_User:Directory_User.Records.ContractStartDate" Message_L1="The contract start date is required">
    <PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" />    <PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" TemplateTransformation="NewInternalWorkflowIsReviewRequired" />    <PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />    <PointCut Activity="Directory_User_NewExternal:Review" ActivityState="ReviewWithFeedback-Approved" TemplateTransformation="NewExternalWorkflowIsReviewRequired" />  </AssertValueRequiredAspect>

```

## Properties

| Property                   | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding required           | **Type** String **Description** Binding whose difference with `ExpressionBinding` defines the property to be validated by the aspect.                                                                                                                                                                                                                                                   |
| Identifier required        | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                        |
| ExpressionBinding optional | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional      | **Type** String **Description** Expression that conditions the aspect execution. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                                                                                    |
| Message_L1 optional        | **Type** String **Description** Message in language 1 (up to 16) to be displayed when the property is empty.                                                                                                                                                                                                                                                                            |
| Priority default value: 0  | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                           |

## Child Element: PointCut

A pointcut is a mechanism telling Identity Manager when to execute the linked
[Aspects](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

# Build Unique Value Aspect

Computes a unique value for a given property.

## Examples

The following example generates bots' logins during their creation.

```

<BuildUniqueValueAspect Identifier="Directory_Bot_UniqueValue_Login" Binding="Workflow_Directory_Bot:Directory_Bot.Login" ExpressionBinding="Workflow_Directory_Bot:Directory_Bot" Expression="C#:wkf:return 'B' + string.Format(&quot;{0:D5}&quot;, new Random().Next(99000, 99999));" SqlCheckExpression="SELECT TOP 1 login FROM zz_directory_bot WHERE login=@VALUE" Priority="10" IterationsCount="10" SimulationExpression="C#:wkf:return &quot;99999&quot;;">
    <PointCut Activity="Directory_Bot_Create:Request" ActivityState="Action-Executed" Mode="After" /></BuildUniqueValueAspect>

```

## Properties

| Property                            | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Binding required                    | **Type** String **Description** Binding whose difference with `ExpressionBinding` defines the property to be computed.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Identifier required                 | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Expression optional                 | **Type** String **Description** C# expression that computes the unique value. **Note:** the computation can be configured in SQL instead of C# via `SqlBuildExpression`. Decide whether to use either `Expression` or `SqlBuildExpression`, not both.                                                                                                                                                                                                                                                                                                                                |
| ExpressionBinding optional          | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one.                                                                                                                                                                                              |
| HistorizeBinding optional           | **Type** String **Description** Binding that stores all the old values computed by the aspect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| HistorizeSeparator default value: � | **Type** String **Description** Defines the character used as a separator in the `HistorizeBinding` property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| IfExpression optional               | **Type** String **Description** Expression that conditions the aspect execution. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                 |
| IterationsCount default value: 0    | **Type** String **Description** Maximum number of computation attempts without finding a unique value. **Note:** a variable named `iteration` is available to use the attempt number in the expressions of the aspect and/or of the potential unicity check rules, for example to help manage homonyms. Hence, a custom variable cannot be declared with the name `iteration`.                                                                                                                                                                                                       |
| Message_L1 default value:           | **Type** String **Description** Message in language 1 (up to 16) to be displayed when the value generation failed, i.e. when `IterationsCount` is exceeded.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| OnlyIfNew default value: false      | **Type** String **Description** `true` to trigger the aspect only for the creation of new resources.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Priority default value: 0           | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                                                                                                                                                                                                                        |
| SimulationExpression optional       | **Type** String **Description** Expression used instead of the `Expression` parameter when previewing the workflow result before its implementation.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| SqlBuildExpression optional         | **Type** String **Description** SQL command that computes the unique value. **Note:** the computation can be configured in C# instead of SQL via `Expression`. Decide whether to use either `SqlBuildExpression` or `Expression`, not both.                                                                                                                                                                                                                                                                                                                                          |
| SqlCheckExpression optional         | **Type** String **Description** SQL request that checks whether the value computed with the binding/expression is unique, i.e. not yet used by another resource.**Note:** required if zero unicity check rules are linked to the aspect.**Warning:** the SQL request must be efficient because a potential timeout may block the progress of the workflow. For example, when the database's state and indexes are not well known, prefer to use views rather than the whole tables, because views store way fewer elements than tables, which makes them faster to use in a request. |

## Child Element: PointCut

A pointcut is a mechanism telling Identity Manager when to execute the linked
[Aspects](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

## Child Element: UnicityCheckRule

A unicity check rule ensures that the expression computed by a `BuildUniqueValue`aspect for a given
property is unique, i.e. not yet used by another resource, in a given entity type.

The comparison performed by these rules to check unicity can be configured in SQL instead of C# via
the [```SqlCheckExpression```](() property of the aspect.

The value of the source binding/expression is computed based on the properties of the source
resource which is the resource whose property we compute via the `BuildUniqueValue` aspect.

The rule compares the return value of the source binding/expression with the existing values of the
target binding/expression in the target entity type.

![Schema: Unicity Check](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/builduniquevalueaspect/aspects_unicitycheck.webp)

> For example, we need to generate an email address for any new user joining the company. We
> configure in a `BuildUniqueValue` aspect that users' emails are computed with
> `{firstName}.{lastName}@{EmailDomain}`.
>
> Consider a new user called John Doe. We need to link to the aspect a unicity check rule that is
> going to compare the email core `john.doe` with the email cores of existing resources in a given
> entity type. Thus Identity Manager can ensure that the email core is unique, and finally build the
> unique email address.

Both source and target bindings/expressions must be consistent with the binding/expression used in
the corresponding aspect which must not use a `SqlCheckExpression`.

One `BuildUniqueValue` aspect can be linked to many unicity check rules, but should not be linked to
more than one rule per target entity type.

The unicity check rules linked to a same aspect are combined with the AND operator. It means that
the aspect's iteration goes up when at least one of the rules detects non-unicity.

When creating or updating a unicity check rule, launch the
[ Compute Correlation Keys Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)before
applying the role model and launching workflows.

**For information:** Identity Manager needs to store the correlation keys linked to the expressions
defined in the unicity check rule, such as the return value, the entity type, etc. That's why the
task mentioned above must be launched before launching any workflow using a unicity check rule.

### Examples

#### Basic example

The following example checks the unicity of the login of a new user.

> In order to be able to write the source and target bindings/expressions of the unicity check rule,
> you must understand the binding/expression of the corresponding `BuildUniqueValue` aspect:
>
> ```
>
> <BuildUniqueValueAspect Identifier="Directory_UserRecord_UniqueValue_Login" Binding="Workflow_Directory_User:Directory_User.Records.Login" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Expression="C#:record:return (record.UserType?.LoginPrefix ?? &quot;U&quot;) + record.UserIdentifier;" IterationsCount="10" Priority="70" >  <PointCut ... /></ BuildUniqueValueAspect >
>
> ```

We want to check the unicity of the new user's login, compared with the logins of existing users:

```

<UnicityCheck Aspect="Directory_UserRecord_UniqueValue_Login" TargetEntityType="Directory_UserRecord" TargetBinding="Login" />

```

Here the source binding and expression are those from the aspect.

#### Multiple unicity checks

With the same aspect as the previous example, we might want to compare the login of the new user
with the list of reserved logins too:

```

<UnicityCheck Aspect="Directory_UserRecord_UniqueValue_Login" TargetEntityType="Directory_UserRecord" TargetBinding="Login" /><UnicityCheck Aspect="Directory_UserRecord_UniqueValue_Login" TargetEntityType="Directory_ReservedLogin" TargetBinding="Value" />

```

#### Sophisticated example

The following example checks the unicity of the email address of a new user.

> In order to be able to write the source and target bindings/expressions of the unicity check rule,
> you must understand the binding/expression of the corresponding `BuildUniqueValue` aspect:
>
> ```
>
> <BuildUniqueValueAspect Identifier="Directory_UserRecord_UniqueValue_Email" Binding="Workflow_Directory_User:Directory_User.Records.Email" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Priority="80"
>
> // We want an email address such as {firstName}.{lastName}@{EmailDomain}.
>
> Expression="C#:record:var firstName = record.FirstName.Simplify()?.ToLowerInvariant();
> var lastName = record.LastName.Simplify()?.ToLowerInvariant();
> if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
> {
>   // Missing data
>   return null;
> }
>
> var result = firstName + &quot;.&quot; + lastName;
>
> // If the email core, i.e. {firstName}.{lastName}, is already used, then we try with {firstName}.{lastName}2, etc.
> if (iteration &gt; 0)
> {
>   result += iteration.ToString();
> }
>
> result = result + '@' + record.Subsidiary?.EmailDomain;
> return result;" IterationsCount="10" />
>
> ```

We want to include in the unicity check only the email's core `firstName.lastName` without the
`@EmailDomain` part. This is why the source expression starts like the aspect's expression but does
not add the domain part, and the target expression removes the domain part from existing values:

```

<UnicityCheck Aspect="Directory_UserRecord_UniqueValue_Email"

    SourceBinding="Workflow_Directory_User:Directory_User.Records"

    // The source expression is similar to the one from the aspect, but we check the unicity of the email core only, not the whole email address.

    SourceExpression="C#:record:var firstName = record.FirstName.Simplify()?.ToLowerInvariant();
var lastName = record.LastName.Simplify()?.ToLowerInvariant();
if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
{
    // Missing data
    return null;
}

var result = firstName + &quot;.&quot; + lastName;
if (iteration &gt; 0)
{
    result += iteration.ToString();
}

return result;"

    TargetEntityType="Directory_UserRecord"
    TargetExpression="C#:record:
if(string.IsNullOrEmpty(record.Email))
{
    return null;
}

var result = record.Email;

// Delete the domain to keep only the email core
var index = result.IndexOf('@');
if(index &gt;= 0)
{
    result = result.Substring(0, index);
}
return result;" />

```

| Property                  | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SourceBinding optional    | **Type** Int64 **Description** Binding property (from the source entity type specified in the corresponding workflow) whose value is to be compared with the existing values of the target binding/expression. **Note:** when not specified, the unicity check rule uses the binding from the aspect.                                                                                                                                                               |
| SourceExpression optional | **Type** String **Description** Binding expression (based on properties from the source entity type specified in the corresponding workflow) whose value is to be compared with the existing values of the target binding/expression. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information. **Note:** when not specified, the unicity check rule uses the expression from the aspect. |
| TargetBinding optional    | **Type** Int64 **Description** Binding property (from the target entity type) whose values corresponding to existing resources are to be compared with the value of the source binding/expression.                                                                                                                                                                                                                                                                  |
| TargetEntityType required | **Type** Int64 **Description** Identifier of the entity type for which the rule checks the property's unicity.                                                                                                                                                                                                                                                                                                                                                      |
| TargetExpression optional | **Type** String **Description** Binding expression (based on properties from the target entity type) whose values corresponding to existing resources are to be compared with the value of the source binding/expression. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                       |

# Aspects

An aspect is a modularization of a concern that cuts across multiple work flows. Identity Manager
uses aspects to perform some specific actions at given workflow steps.

For example, an aspect can assert a given user's input is valid.

- [ Add Change Aspect ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Modifies a given property value.

- [Assert Value Aspect](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Checks whether the value of a given property satisfies a given condition.

- [ Assert Value Required Aspect ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Checks whether a given property has a non-null value.

- [ Build Unique Value Aspect ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Computes a unique value for a given property.

- [Invoke Script Aspect](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Executes a customized script.

- [ Invoke Workflow Aspect ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Launches a workflow.

- [ Notification Aspect ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Sends a notification email to one or several users.

# Invoke Script Aspect

Runs a tailored script asynchronously, independent of the workflow event, necessitating the creation
and execution of a job using an InvokeAspectsTask task.

## Examples

The following example executes the script `aspect.ps1` on the local agent, when creating a new user.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<InvokeScriptAspect Identifier="Directory_User_InvokeScript" Agent="Local" ScriptFile="C:/identitymanagerDemo/Conf/InvokeAspects/aspect.ps1">
<PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_StartExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
</InvokeScriptAspect>
<Job Identifier="InvokeAspects" DisplayName_L1="00: Invoke Aspects" Agent="Local">
<InvokeAspectsTask Agent="Local" DisplayName_L1="Execute Powershell for aspects" OutputPath="C:/identitymanagerDemo/Temp" OpenIdClient="Job" />
</Job>
```

## Properties

| Property                   | Type   | Description                                                                                                                                                                                                                                                                                                                                       |
| -------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required        | String | Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                  |
| Agent optional             | String | Agent on which the script will be launched.                                                                                                                                                                                                                                                                                                       |
| ExpressionBinding optional | String | Binding defines the variable type used in the potential expressions specified in the aspect. The difference with `Binding` defines the property involved in the aspect. **NOTE:** It is required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional      | String | Expression that conditions the aspect execution. See the [ C# utility functions ](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                                                                   |
| Priority default value: 0  | Int32  | Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **NOTE:** The priority can be a negative value.                                                                                                                                                                    |
| ScriptFile optional        | String | Path of the script file to be executed by the aspect.                                                                                                                                                                                                                                                                                             |

## ChildElement: PointCut

A pointcut is a mechanism telling Identity Manager when to execute the linked aspect. See the
[Aspects](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md) topic for additional information.

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Type         | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | Int64        | Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                          |
| ActivityState required | Enumeration  | Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                     |
| Mode default value: 0  | PointCutMode | Mode defining when exactly the aspect is triggered around the specified workflow's activity state. 0 - Before — The aspect will be executed on entry to the specified activity state, regardless of the transition used. 1 - After — The aspect will be executed on exit from the specified activity state, regardless of the transition used. |

# Invoke Workflow Aspect

Launches a workflow.

## Examples

The following example launches the workflow `Directory_User_VehicleRequest` when a vehicle is
requested for a new internal user.

```

<InvokeWorkflowAspect Identifier="Directory_User_VehicleRequest" ExpressionBinding="Workflow_Directory_User:Directory_User" IfExpression="C#:person:return person.Vehicle_Requested;" Workflow="Directory_User_VehicleRequest">
    <PointCut Activity="Directory_User_NewInternal:Persist" ActivityState="Persist-Invoked" Mode="After" /></InvokeWorkflowAspect>

```

## Properties

| Property                   | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required        | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                        |
| Workflow required          | **Type** String **Description** Identifier of the workflow to be launched.                                                                                                                                                                                                                                                                                                              |
| ExpressionBinding optional | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional      | **Type** String **Description** Expression that conditions the aspect execution. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                                                                                    |
| Priority default value: 0  | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                           |

## Child Element: PointCut

A pointcut is a mechanism telling Identity Manager when to execute the linked
[Aspects](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

# Notification Aspect

Sends a notification email to one or several users.

## Examples

The following example sends a notification email based on the template
`Notification_Directory_Guest.cshtml` and the subject computed by `SubjectExpression_L1`, which both
use data from `Workflow_Directory_Guest:Directory_Guest`, and on the styles from
`Notification_Directory_Guest.css`.

```

<NotificationAspect Identifier="Notification_Directory_Guest" ExpressionBinding="Workflow_Directory_Guest:Directory_Guest" RazorFile_L1="./Templates/Notification_Directory_Guest.cshtml" CssFile="./Templates/Notification_Directory_Guest.css" SubjectExpression_L1="C#:guest:return &quot;Validating data for guest: &quot; + guest.FirstName + guest.LastName;">
    <PointCut Activity="Directory_Guest_AdvancedStart:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />    <Recipient Type="Binding" Binding="Directory_Guest:Mail" /></NotificationAspect>

```

The notification will be sent after the `Request` activity of the `Directory_Guest_AdvancedStart`
workflow is executed.  
The notification will be sent to all email addresses defined by `Directory_Guest:Mail`.

## Properties

| Property                      | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required           | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                        |
| Binding optional              | **Type** String **Description** Binding whose difference with `ExpressionBinding` defines the property that corresponds to identities' email addresses, when `Type` is set to `Binding`.                                                                                                                                                                                                |
| CssFile optional              | **Type** String **Description** Path to the css file that defines the styles for the email. **Note:** the path must be relative to the configuration folder, and the file must be inside it.                                                                                                                                                                                            |
| ExpressionBinding optional    | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| Priority default value: 0     | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                           |
| RazorFile_L1 optional         | **Type** String **Description** Path to the Razor cshtml file that defines the email's body template in language 1 (up to 16). **Note:** the path must be relative to the configuration folder, and the file must be inside it.                                                                                                                                                         |
| SubjectExpression_L1 optional | **Type** String **Description** C# expression that defines the email's subject in language 1 (up to 16). The expression's variable type is defined in `ExpressionBinding`.                                                                                                                                                                                                              |

## Child Element: PointCut

A pointcut is a mechanism telling Identity Manager when to execute the linked
[Aspects](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

## Child Element: Recipient

A recipient defines one or several identities who will receive a notification from
`NotificationAspect`.

### Examples

The following example sends a notification email to the actors of the next step of the workflow.

```

<NotificationAspect Identifier="Notification_Directory_User" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Template/Notification_Directory_User.cshtml" CssFile="Template/Notification_Directory_User.css">  <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
  <Recipient Type="Actor" />
</NotificationAspect>

```

The following example sends a notification email to the performers of the `Request` activity of the
`Directory_User_StartInternal` workflow when the state is `Executed`.

```

<NotificationAspect Identifier="Notification_Directory_User" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Template/Notification_Directory_User.cshtml" CssFile="Template/Notification_Directory_User.css">  <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
  <Recipient Type="Performer" Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" />
</NotificationAspect>

```

The following example sends a notification email to the email address, stored in `Mail`, of the
user(s) from `Directory_User` targeted by the workflow, so here the new user created by the
`Directory_User_StartInternal` workflow.

```

<NotificationAspect Identifier="Notification_Directory_User" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Template/Notification_Directory_User.cshtml" CssFile="Template/Notification_Directory_User.css">  <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
  <Recipient Type="Binding" Binding="Directory_User:Mail" />
</NotificationAspect>

```

The following example sends a notification email to all identities whose email addresses are defined
as `{lastName}@company.com`.

```

<NotificationAspect Identifier="Notification_Directory_User" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Template/Notification_Directory_User.cshtml" CssFile="Template/Notification_Directory_User.css">  <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
  <Recipient Type="Expression" Expression="C#:user:return user.LastName+"@company.com";" />
</NotificationAspect>

```

The following example sends a notification to all identities with a profile that includes the right
permission.

```

<NotificationAspect Identifier="Directory_User_New" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Directory/User/Directory-User-Notification-New.cshtml" CssFile="Notifications.css">  <PointCut Activity="Directory_User_NewInternal:Persist" ActivityState="Persist-Invoked" Mode="After" />  <PointCut Activity="Directory_User_NewExternal:Persist" ActivityState="Persist-Invoked" Mode="After" />
  <Recipient Type="Profile" />
</NotificationAspect>

Knowing that we also have:
<Profile Identifier="Workforce/Notifications/Directory_User_New" DisplayName_L1="Workforce/Notifications/New User" IsComponent="true" /><AccessControlRule Profile="Workforce/Notifications/Directory_User_New" EntityType="Directory_User" Identifier="Composite_Notifications_Directory_User_New*" DisplayName_L1="Composite_Notifications_Directory_User_New*">
  <Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewInternal/Persist/Invoked" />  <Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewExternal/Persist/Invoked" />
</AccessControlRule>

```

| Property                  | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity optional         | **Type** Int64 **Description** Identifier of the activity whose last performers are to be notified, when `Type` is set to `Performer`. **Note:** must be set together with `ActivityState`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ActivityState optional    | **Type** Enumeration **Description** Identifier of the activity state whose last performers are to be notified, when `Type` is set to `Performer`. **Note:** must be set together with `Activity`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Binding optional          | **Type** Int64 **Description** Binding of the property that represents the notification's recipients, when `Type` is set to `Binding`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| EmailAddresses optional   | **Type** String **Description** Email addresses of the notification's recipients, when `Type` is set to `Hardcoded`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Expression optional       | **Type** String **Description** C# expression that returns the email addresses of the notification's recipients, as strings or `IEnumerable<string>`, when `Type` is set to `Expression`. The expression's variable type is defined in `ExpressionBinding` in the associated `NotificationAspect`. See the [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                             |
| IsCC default value: false | **Type** Boolean **Description** `true` to send the notification email to the recipient(s) as a carbon copy (CC).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Type required             | **Type** RecipientType **Description** Type of recipients for the email notification. **Actor**: the identities with the permissions to act on the next step of the workflow specified in the pointcut. **Performer**: the actors of a past workflow step specified in `Activity` and `ActivityState`. **Binding**: the identities whose email addresses are designated by the property specified in `Binding`. **Hardcoded**: the identities whose email addresses are specified explicitly in `EmailAddresses`. **Expression**: the identities whose email addresses match the C# expression specified in `Expression`. **Profile**: the identities with the permission `/Custom/WorkflowsNotifications/{workflow_identifier}/` `{activity_identifier}/{activityTemplateState_shortIdentifier}`. |

# Forms

Workflows use forms to collect input data through the UI. A form is a set of fields, configured with
controls. A control can define a field to fill, a fields set, call an existing form, etc. depending
on its output type.

Here is a list of forms:

- [Workflow Add and End Record Entity Form](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Displays a form to define the end date of an existing record, and replace it with a new record
  at said date, by duplicating and adjusting the old record.

- [Workflow Add Record Entity Form](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Displays a form to add a new record for an existing resource, by duplicating and adjusting an
  existing record.

- [Workflow Create Entity Form](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Displays a form to create a new resource, without a record.

- [Workflow Create Record Entity Form](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Displays a form to create a new resource with a record.

- [ Workflow Create Several Records Entity Form ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Displays a form to create a new resource with one or several records.

- [Workflow Edit Entity Form](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Displays a form to update or delete an existing resource, without a record.

- [Workflow Update Record Entities Form](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Displays a form to update data for several resources simultaneously.

- [Workflow Update Record Entity Form](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Displays a form to select an existing record and update it.

- [Workflow Update Several Records Entity Form](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

  Displays a form to create, update or delete one or several records.

# Workflow Add and End Record Entity Form

Displays a form to define the end date of an existing record, and replace it with a new record at
said date, by duplicating and adjusting the old record.

## Examples

The following example is a form to update a position.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<WorkflowAddAndEndRecordEntityForm Identifier="Workflow_Directory_User_ChangePosition" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_ChangePosition:Request" FormTitle_L1="Schedule a Job Change">
    <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Main"/>
    <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_ChangePosition_Base" />
    <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_ChangePosition_Base" />
    <MainSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Main" />
    <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_ChangePosition_Base" />
</WorkflowAddAndEndRecordEntityForm>
With the following form for the resource data's content and summary:
<Form Identifier="Workflow_Directory_User_Main" EntityType="Directory_User">
    <Control Binding="Identifier" />
    <Control Binding="IsDraft" />
</Form>
And with the following form for the record data's content and summary, and for the data that groups records together:
<Form Identifier="Workflow_Directory_User_ChangePosition_Base" EntityType="Directory_UserRecord">
    <Control DisplayName_L1="New Position Dates" OutputType="LayoutFieldset">
        <Control Binding="StartDate" />
        <Control Binding="EndDate" InputType="Date" />
    </Control>
    <Control DisplayName_L1="New Position" OutputType="LayoutFieldset">
        <Control Binding="Title" />
        <Control Binding="Organization" />
        <Control Binding="Manager" DefaultValueBinding="Organization.Manager" />
        <Control Binding="Site" DefaultValueBinding="Organization.Manager.MainRecord.Site" />
    </Control>
</Form>

```

The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:

![Form Example - Update Position](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowaddandendrecordentityform/formexample_workflowaddandendrecordentityform_v603.webp)

The content of `RecordUniqueItemControl` is not visible. The user's records that have the same
values for all the properties in `RecordUniqueItemControl` will be displayed, and potentially
modified, as one.

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's
execution:

![Summary Form Example - Update Position](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowaddandendrecordentityform/formexample_workflowaddandendrecordentityform_summary_v603.webp)

## Properties

| Property                               | Description                                                                                                                                                                                                                                                                            |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Child Element: MainControl             | Set of fields to collect data about the main resource.                                                                                                                                                                                                                                 |
| Child Element: RecordControl           | Set of fields to collect data about the resource's record.                                                                                                                                                                                                                             |
| Child Element: RecordUniqueItemControl | Set of fields that group records together. All records with the same data in `RecordUniqueItemControl` are displayed in the workflow as only one record, and they will potentially be modified together. When not specified, records will be grouped by the data from `RecordControl`. |
| Child Element: MainSummaryControl      | Set of fields to sum up the data collected by `MainControl` after the workflow's execution.                                                                                                                                                                                            |
| Child Element: RecordSummaryControl    | Set of fields to sum up the data collected by `RecordControl` after the workflow's execution.                                                                                                                                                                                          |

# Workflow Add Record Entity Form

Displays a form to add a new record for an existing resource, by duplicating and adjusting an
existing record.

## Examples

The following example is a form to request a computer.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<WorkflowAddRecordEntityForm Identifier="Workflow_Directory_User_AddPosition" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_AddPosition:Request" FormTitle_L1="New Position" >
    <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Main"/>
    <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_AddPosition_Base" />
    <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_AddPosition_Unique" />
    <MainSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Main" />
    <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_AddPosition_Base" />
</WorkflowAddRecordEntityForm>
With the following form for the resource data's content and summary:
<Form Identifier="Workflow_Directory_User_Main" EntityType="Directory_User">
    <Control Binding="Identifier" />
    <Control Binding="IsDraft" />
</Form>
And with the following form for the record data's content and summary:
<Form Identifier="Workflow_Directory_User_AddPosition_Base" EntityType="Directory_UserRecord">
    <Control DisplayName_L1="Position Dates" OutputType="LayoutFieldset">
        <Control Binding="StartDate" />
        <Control Binding="EndDate" InputType="Date" />
    </Control>
    <Control DisplayName_L1="Position" OutputType="LayoutFieldset">
        <Control Binding="Title" />
        <Control Binding="Organization" />
        <Control Binding="Manager" DefaultValueBinding="Organization.Manager" />
        <Control Binding="Site" DefaultValueBinding="Organization.Manager.MainRecord.Site" />
    </Control>
</Form>
And with the following form for the data that groups records together:
<Form Identifier="Workflow_Directory_User_AddPosition_Unique" EntityType="Directory_UserRecord">
    <Control Binding="PositionIdentifier" />
</Form>

```

The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:

![Form Example - Computer Request](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowaddrecordentityform/formexample_workflowaddrecordentityform_v603.webp)

The content of `RecordUniqueItemControl` is not visible. The user's records that have the same
values for all the properties in `RecordUniqueItemControl` will be displayed, and potentially
modified, as one.

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's
execution:

![Summary Form Example - Computer Request](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowaddrecordentityform/formexample_workflowaddrecordentityform_summary_v603.webp)

## Properties

| Property                               | Description                                                                                                                                                                                                                                                                            |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Child Element: MainControl             | Set of fields to collect data about the main resource.                                                                                                                                                                                                                                 |
| Child Element: RecordControl           | Set of fields to collect data about the resource's record.                                                                                                                                                                                                                             |
| Child Element: RecordUniqueItemControl | Set of fields that group records together. All records with the same data in `RecordUniqueItemControl` are displayed in the workflow as only one record, and they will potentially be modified together. When not specified, records will be grouped by the data from `RecordControl`. |
| Child Element: MainSummaryControl      | Set of fields to sum up the data collected by `MainControl` after the workflow's execution.                                                                                                                                                                                            |
| Child Element: RecordSummaryControl    | Set of fields to sum up the data collected by `RecordControl` after the workflow's execution.                                                                                                                                                                                          |

# Workflow Create Entity Form

Displays a form to create a new resource, without a record.

## Examples

The following example is a form to create a new site.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<WorkflowCreateEntityForm Identifier="Workflow_Directory_Site_Create" EntityType="Workflow_Directory_Site" MainProperty="Workflow_Directory_Site:Directory_Site" WorkflowRequestType="Self" Activity="Directory_Site_Create:Request" FormTitle_L1="New Site">
    <MainControl OutputType="TransformImport" EmbeddedForm="Base_Directory_Site" />
    <SummaryControl OutputType="TransformImport" EmbeddedForm="Summary_Directory_Site"/>
</WorkflowCreateEntityForm>
With the following form for the workflow's content:
<Form Identifier="Base_Directory_Site" EntityType="Directory_Site">
    <Control DisplayName_L1="Address" OutputType="LayoutFieldset" Name="Address">
        <Control Binding="Name" />
        <Control Binding="StreetNumber" />
        <Control Binding="StreetName" />
        <Control Binding="StreetType" />
        <Control Binding="Floor" />
        <Control Binding="PostalCode" />
        <Control Binding="City" />
        <Control Binding="Region" />
        <Control Binding="Region.Country" IsReadOnly="true" />
        <Control Binding="Photo" OutputType="Image" />
    </Control>
    <Control DisplayName_L1="Additional Data" OutputType="LayoutFieldset" Name="Additional Data">
        <Control Binding="Identifier" />
        <Control Binding="DisplayName" />
        <Control Binding="TimeZone" />
    </Control>
</Form>
And with the following form for the workflow's summary:
<Form Identifier="Summary_Directory_Site" EntityType="Directory_Site">
    <Control DisplayName_L1="Address" OutputType="LayoutFieldset" Name="Address">
        <Control Binding="Name" />
        <Control Binding="StreetNumber" />
        <Control Binding="StreetName" />
        <Control Binding="StreetType" />
    </Control>
    <Control DisplayName_L1="Additional Data" OutputType="LayoutFieldset" Name="Additional Data">
        <Control Binding="Identifier" />
        <Control Binding="DisplayName" />
    </Control>
</Form>

```

The content of `MainControl` is visible during the workflow's execution:

![Form Example - Site Creation](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowcreateentityform/formexample_workflowcreateentityform_v603.webp)

The content of `SummaryControl` is visible after the workflow's execution:

![Summary Form Example - Site Creation](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowcreateentityform/formexample_workflowcreateentityform_summary_v603.webp)

## Properties

| Property                      | Description                                                                |
| ----------------------------- | -------------------------------------------------------------------------- |
| Child Element: MainControl    | Set of fields to collect data about the main resource.                     |
| Child Element: SummaryControl | Set of fields to sum up the collected data after the workflow's execution. |

# Workflow Create Record Entity Form

Displays a form to create a new resource with a record.

## Examples

The following example is a form to create a new user from HR.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_CreateFromHR" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_CreateFromHR:Request" FormTitle_L1="New Employee (from HR)">
    <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Main"/>
    <MainSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Main"/>
    <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_HR_Base" />
    <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Summary_Directory_User_HR_Base"/>
</WorkflowCreateRecordEntityForm>
With the following form for the workflow's content and summary about resource data:
<Form Identifier="Workflow_Directory_User_Main" EntityType="Directory_User">
    <Control DisplayName_L1="Resource Data" OutputType="LayoutFieldset" Name="ResourceData">
        <Control Binding="Identifier" />
    </Control>
</Form>
And with the following form for the workflow's content about record data:
<Form Identifier="Workflow_Directory_User_HR_Base" EntityType="Directory_UserRecord">
    <Control Binding="LastName" />
    <Control Binding="FirstName" />
    <Control Binding="BirthDate" />
    <Control Binding="ContractStartDate"/>
    <Control Binding="ContractEndDate" />
    <Control Binding="Title" />
    <Control Binding="UserType" />
    <Control Binding="Organization" />
    <Control Binding="Site" />
</Form>
And with the following form for the workflow's summary on record data:
<Form Identifier="Summary_Directory_User_HR_Base" EntityType="Directory_UserRecord">
    <Control DisplayName_L1="Record Data" OutputType="LayoutFieldset" Name="RecordData">
        <Control Binding="LastName" />
        <Control Binding="FirstName" />
        <Control Binding="ContractStartDate"/>
        <Control Binding="ContractEndDate" />
        <Control Binding="UserType" />
    </Control>
</Form>

```

The content of `MainControl` is visible during the workflow's execution:

![Form Example - New User from HR](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowcreaterecordentityform/formexample_workflowcreaterecordentityform_v603.webp)

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's
execution.

## Properties

| Property                            | Description                                                                                   |
| ----------------------------------- | --------------------------------------------------------------------------------------------- |
| Child Element: MainControl          | Set of fields to collect data about the main resource.                                        |
| Child Element: RecordControl        | Set of fields to collect data about the resource's record.                                    |
| Child Element: MainSummaryControl   | Set of fields to sum up the data collected by `MainControl` after the workflow's execution.   |
| Child Element: RecordSummaryControl | Set of fields to sum up the data collected by `RecordControl` after the workflow's execution. |

# Workflow Create Several Records Entity Form

Displays a form to create a new resource with one or several records.

## Examples

The following example is a form to request a computer.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<WorkflowCreateSeveralRecordsEntityForm Identifier="Workflow_Helpdesk_Directory_User_New" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_Helpdesk" WorkflowRequestType="Helpdesk" Activity="Helpdesk_Directory_User_New:Request" FormTitle_L1="New User (helpdesk)" TableTitle_L1="Records" AddRowLabel_L1="Add Record" RemoveRowLabel_L1="Remove Record">
    <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_User_Base" />
    <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Shared"/>
    <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" />
</WorkflowCreateSeveralRecordsEntityForm>
With the following form for the resource's data:
<Form Identifier="Workflow_Helpdesk_Directory_User_Base" EntityType="Directory_User">
    <Control Binding="Identifier" />
    <Control Binding="IsDraft" />
    <Control Binding="Photo" />
    <Control Binding="ConsentPhotoUsage" />
</Form>
And with the following form for the data shared with all records:
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Shared" EntityType="Directory_UserRecord">
    <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset" Name="Personal Data">
        <Control DisplayName_L1="Full Name" OutputType="LayoutRowset" Name="Full Name">
        <Control Binding="LastName" />
        <Control Binding="FirstName" />
        </Control>
        <Control Binding="BirthName" ColumnSize="4" />
        <Control Binding="BirthDate" />
        <Control Binding="Gender" ColumnSize="3" />
        <Control Binding="PersonalTitle" ColumnSize="3" />
    </Control>
</Form>
And with the following form for the data specific to each record:
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Base" EntityType="Directory_UserRecord">
    <Control DisplayName_L1="Identifiers" OutputType="LayoutFieldset" Name="Identifiers">
        <Control Binding="RecordIdentifier" ColumnSize="4" />
        <Control Binding="UserIdentifier" ColumnSize="4" />
    </Control>
    <Control DisplayName_L1="Contract" OutputType="LayoutFieldset" Name="Contract">
        <Control Binding="EmployeeId" ColumnSize="4" />
        <Control Binding="ContractIdentifier" ColumnSize="4" />
        <Control Binding="UserType" />
        <Control Binding="ExternalCompany" />
        <Control Binding="ContractStartDate" />
        <Control Binding="ContractEndDate" />
    </Control>
    <Control DisplayName_L1="Position" OutputType="LayoutFieldset" Name="Position">
        <Control Binding="PositionIdentifier" ColumnSize="4" />
        <Control Binding="JobTitle" />
        <Control Binding="Manager" />
        <Control Binding="Site" />
        <Control Binding="PositionStartDate" />
        <Control Binding="PositionEndDate" InputType="Date" />
        <Control Binding="IsMainPosition" />
    </Control>
</Form>

```

The contents of `MainControl`, `RecordControl` and `RecordUniqueItemControl` are visible during the
workflow's execution:

![Form Example - New User from Helpdesk](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowcreateseveralrecordsentityform/formexample_workflowcreateseveralrecordsentityform_v603.webp)

## Properties

| Property                               | Description                                                |
| -------------------------------------- | ---------------------------------------------------------- |
| Child Element: MainControl             | Set of fields to collect data about the main resource.     |
| Child Element: RecordControl           | Set of fields to collect data about the resource's record. |
| Child Element: RecordUniqueItemControl | Set of fields to collect data specific to each record.     |

# Workflow Edit Entity Form

Displays a form to update or delete an existing resource, without a record.

## Examples

The following example is a form to request a computer.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<WorkflowEditEntityForm Identifier="Workflow_Directory_User_ComputerRequest" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" WorkflowRequestType="Self" Activity="Directory_User_ComputerRequest:Request" FormTitle_L1="Computer Request" RecordProperty="Directory_User:PC_Requested" HideRoles="true">
    <MainControl OutputType="TransformImport" EmbeddedForm="PC_Request" />
    <SummaryControl OutputType="TransformImport" EmbeddedForm="PC_Request" />
</WorkflowEditEntityForm>
With the following form for the workflow's content and summary:
<Form Identifier="PC_Request" EntityType="Directory_User">
    <Control Binding="PC_Modele" DisplayName_L1="Model if already known" />
</Form>

```

The content of `MainControl` is visible during the workflow's execution:

![Form Example - Computer Request](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workfloweditentityform/formexample_workfloweditentityform_v603.webp)

The content of `SummaryControl` is visible after the workflow's execution:

![Summary Form Example - Computer Request](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workfloweditentityform/formexample_workfloweditentityform_summary_v603.webp)

## Properties

| Property                      | Description                                                                |
| ----------------------------- | -------------------------------------------------------------------------- |
| Child Element: MainControl    | Set of fields to collect data about the main resource.                     |
| Child Element: SummaryControl | Set of fields to sum up the collected data after the workflow's execution. |

# Workflow Update Record Entities Form

Displays a form to update data for several resources simultaneously.

## Examples

The following example is a form to update users' positions in bulk.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<WorkflowUpdateRecordEntitiesForm Identifier="Workflow_Directory_User_MassUpdate" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_MassUpdate:Request" HideRoles="false" FormTitle_L1="Update Users" >
    <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_MassUpdate_Main" />
    <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_MassUpdate_Base" />
    <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_AddPosition_Unique" />
    <MainSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_MassUpdate_Main" />
    <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_MassUpdate_Base" />
</WorkflowUpdateRecordEntitiesForm>
With the following form for the workflow's content and summary about resource data:
<Form Identifier="Workflow_Directory_UserRecord_MassUpdate_Main" EntityType="Directory_User">
    <Control Binding="IsDraft" />
</Form>
And with the following form for the workflow's content and summary about record data:
<Form Identifier="Workflow_Directory_UserRecord_MassUpdate_Base" EntityType="Directory_UserRecord">
        <Control Binding="ContractEndDate" InputType="Date" />
    <Control DisplayName_L1="Position" OutputType="LayoutFieldset" Name="Position">
        <Control Binding="PositionIdentifier" ColumnSize="4" />
        <Control Binding="Title" />
        <Control Binding="Manager" />
        <Control Binding="Organization" />
        <Control Binding="Site" />
        <Control Binding="PositionStartDate" />
        <Control Binding="PositionEndDate" InputType="Date" />
    </Control>
</Form>
And with the following form for the data that groups records together:
<Form Identifier="Workflow_Directory_User_AddPosition_Unique" EntityType="Directory_UserRecord">
    <Control Binding="PositionIdentifier" />
</Form>

```

The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:

![Form Example - Mass Update](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowupdaterecordentitiesform/formexample_workflowupdaterecordentitiesform_v603.webp)

The content of `RecordUniqueItemControl` is not visible. The user's records that have the same
values for all the properties in `RecordUniqueItemControl` will be modified as one.

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's
execution:

## Properties

| Property                               | Details                                                                                                                                                                                                                                                                                |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Child Element: MainControl             | Set of fields to collect data about the main resource.                                                                                                                                                                                                                                 |
| Child Element: RecordControl           | Set of fields to collect data about the resource's record.                                                                                                                                                                                                                             |
| Child Element: RecordUniqueItemControl | Set of fields that group records together. All records with the same data in `RecordUniqueItemControl` are displayed in the workflow as only one record, and they will potentially be modified together. When not specified, records will be grouped by the data from `RecordControl`. |
| Child Element: MainSummaryControl      | Set of fields to sum up the data collected by `MainControl` after the workflow's execution.                                                                                                                                                                                            |
| Child Element: RecordSummaryControl    | Set of fields to sum up the data collected by `RecordControl` after the workflow's execution.                                                                                                                                                                                          |

# Workflow Update Record Entity Form

Displays a form to select an existing record and update it.

## Examples

The following example is a form to update a user's record from helpdesk:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<WorkflowUpdateRecordEntityForm Identifier="Workflow_Helpdesk_Directory_User_FixRecord" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Helpdesk" Activity="Helpdesk_Directory_User_FixRecord:Request" FormTitle_L1="Repair Data (helpdesk)" >
  <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_User_Base" />
  <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" />
  <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Unique" />
  <MainSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_User_Base" />
  <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" />
</WorkflowUpdateRecordEntityForm>
With the following form for the resource's data and summary:
<Form Identifier="Workflow_Helpdesk_Directory_User_Base" EntityType="Directory_User">
  <Control Binding="Identifier" />
  <Control Binding="IsDraft" />
</Form>
And with the following form for the data shared with all records and for the summary:
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Base" EntityType="Directory_UserRecord">
  <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset" Name="Personal Data">
    <Control DisplayName_L1="Full Name" OutputType="LayoutRowset" Name="Full Name">
      <Control Binding="LastName" />
      <Control Binding="FirstName" />
    </Control>
    <Control Binding="BirthDate" />
    <Control Binding="Gender" ColumnSize="3" />
    <Control Binding="Email" ColumnSize="6" />
    <Control DisplayName_L1="Phone Numbers" OutputType="LayoutRowset" Name="Phone Numbers">
      <Control Binding="PhoneNumber" />
      <Control Binding="MobileNumber" />
    </Control>
    <Control Binding="Login" ColumnSize="4" />
    <Control Binding="StartDate" />
    <Control Binding="EndDate" InputType="Date" />
  </Control>
  <Control DisplayName_L1="Contract" OutputType="LayoutFieldset" Name="Contract">
    <Control Binding="EmployeeId" ColumnSize="4" />
    <Control Binding="ContractIdentifier" ColumnSize="4" />
    <Control Binding="UserType" />
    <Control Binding="ContractStartDate" />
    <Control Binding="ContractEndDate" />
  </Control>
  <Control DisplayName_L1="Position" OutputType="LayoutFieldset" Name="Position">
    <Control Binding="PositionIdentifier" ColumnSize="4" />
    <Control Binding="JobTitle" />
    <Control Binding="Manager" />
    <Control Binding="IGAManager" />
    <Control Binding="Organization" />
    <Control Binding="PositionStartDate" />
    <Control Binding="PositionEndDate" InputType="Date" />
  </Control>
</Form>
And with the following form for the data that groups records together:
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Unique" EntityType="Directory_UserRecord">
  <Control Binding="Id" />
</Form>

```

**NOTE:** `WorkflowUpdateRecordEntity` used in config Delete mode (`IsDelete=True`) will delete
systematically the main resource and all the associated records.

The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:

![Form Example - Update Data](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowupdaterecordentityform/formexample_workflowupdaterecordentityform_v603.webp)

The content of `RecordUniqueItemControl` is not visible. The user's records that have the same
values for all the properties in `RecordUniqueItemControl` will be displayed, and potentially
modified, as one.

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's
execution:

![Summary Form Example - Update Data](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowupdaterecordentityform/formexample_workflowupdaterecordentityform_summary_v603.webp)

## Properties

| Property                               | Details                                                                                                                                                                                                                                                                                |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Child Element: MainControl             | Set of fields to collect data about the main resource.                                                                                                                                                                                                                                 |
| Child Element: RecordControl           | Set of fields to collect data about the resource's record.                                                                                                                                                                                                                             |
| Child Element: RecordUniqueItemControl | Set of fields that group records together. All records with the same data in `RecordUniqueItemControl` are displayed in the workflow as only one record, and they will potentially be modified together. When not specified, records will be grouped by the data from `RecordControl`. |
| Child Element: MainSummaryControl      | Set of fields to sum up the data collected by `MainControl` after the workflow's execution.                                                                                                                                                                                            |
| Child Element: RecordSummaryControl    | Set of fields to sum up the data collected by `RecordControl` after the workflow's execution.                                                                                                                                                                                          |

# Workflow Update Several Records Entity Form

Displays a form to create, update or delete one or several records.

## Examples

The following example is a form to create, update and/or delete one or several positions for a given
user.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<WorkflowUpdateSeveralRecordsEntityForm Identifier="Workflow_Directory_User_ManagePositions" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_ManagePositions" WorkflowRequestType="Self" Activity="Directory_User_ManagePositions:Request" FormTitle_L1="Manage Positions" TableTitle_L1="Positions" AddRowLabel_L1="Add Position" RemoveRowLabel_L1="Remove Position" RecordStartProperty="Directory_UserRecord:PositionStartDate" RecordEndProperty="Directory_UserRecord:PositionEndDate">
    <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Position_Main" />
    <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_Position_Base_New" />
    <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_Position_Unique" />
    <RecordSlaveUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_Position_Contract" />
    <RecordSlaveControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_Position_Base_Existing" />
</WorkflowUpdateSeveralRecordsEntityForm>
With the following form for the resource's data:
<Form Identifier="Workflow_Directory_User_Position_Main" EntityType="Directory_User">
    <Control Binding="Identifier" />
    <Control Binding="IsDraft" />
</Form>
And with the following form for the data shared with all records:
<Form Identifier="Workflow_Directory_UserRecord_Position_Contract" EntityType="Directory_UserRecord">
    <Control Binding="EmployeeId" ColumnSize="4" />
    <Control Binding="ContractIdentifier" ColumnSize="4" />
    <Control Binding="UserType" />
    <Control Binding="ContractStartDate" />
    <Control Binding="ContractEndDate" />
</Form>
And with the following form for the data used to update existing records:
<Form Identifier="Workflow_Directory_UserRecord_Position_Base_Existing" EntityType="Directory_UserRecord">
    <Control DisplayName_L1="Position" OutputType="LayoutFieldset" Name="Position">
        <Control Binding="PositionIdentifier" ColumnSize="4" />
        <Control Binding="Manager" />
        <Control Binding="IGAManager" />
        <Control Binding="Organization" />
        <Control Binding="Site" />
        <Control Binding="PositionStartDate" />
        <Control Binding="PositionEndDate" InputType="Date" />
    </Control>
</Form>
And with the following form for the data used to add new records:
<Form Identifier="Workflow_Directory_UserRecord_Position_Base_New" EntityType="Directory_UserRecord">
    <Control DisplayName_L1="Position" OutputType="LayoutFieldset" Name="Position">
        <Control Binding="PositionIdentifier" ColumnSize="4" />
        <Control Binding="Title" />
        <Control Binding="Manager" />
        <Control Binding="IGAManager" />
        <Control Binding="Organization" />
        <Control Binding="Site" />
        <Control Binding="PositionStartDate" />
        <Control Binding="PositionEndDate" InputType="Date" />
    </Control>
</Form>
And with the following form for the data that groups records together:
<Form Identifier="Workflow_Directory_UserRecord_Position_Unique" EntityType="Directory_UserRecord">
    <Control Binding="PositionIdentifier" />
</Form>

```

The contents of `MainControl`, `RecordControl`, `RecordSlaveUniqueItemControl` and
`RecordSlaveControl` are visible during the workflow's execution:

![Form Example - Manage a User's Positions](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowupdateseveralrecordsentityform/formexample_workflowupdateseveralrecordsentityform_v603.webp)

When adding a new position, we decide to make `Title` available, in addition to the fields used to
update existing records:

![Form Example - Manage a User's Positions - New Record](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowupdateseveralrecordsentityform/formexample_workflowupdateseveralrecordsentityform_newrecord_v603.webp)

The content of `RecordUniqueItemControl` is not visible. The user's records that have the same
values for all the properties in `RecordUniqueItemControl` will be displayed, and potentially
modified, as one.

## Properties

| Property                                    | Details                                                                                                                                                                                                                                                                                |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Child Element: MainControl                  | Set of fields to collect data about the main resource.                                                                                                                                                                                                                                 |
| Child Element: RecordControl                | Set of fields to collect data when adding new records.                                                                                                                                                                                                                                 |
| Child Element: RecordUniqueItemControl      | Set of fields that group records together. All records with the same data in `RecordUniqueItemControl` are displayed in the workflow as only one record, and they will potentially be modified together. When not specified, records will be grouped by the data from `RecordControl`. |
| Child Element: RecordSlaveUniqueItemControl | Set of fields to collect the data shared with all the resource's records, for example contract information when managing positions.                                                                                                                                                    |
| Child Element: RecordSlaveControl           | Set of fields to collect data when updating existing records.                                                                                                                                                                                                                          |

# Homonym Entity Link

This entity is used to configure the homonym workflow.

## Examples

```

<HomonymEntityLink FormEntityType="Referentiel_UserRecord" Identifier="Homonym_Referentiel_UserRecord"/>

```

In this example the homonym is linked to a [Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and it will be
applied for the [ Binding ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) included in the Control where the
homonym is located. Read more about how to configure
[ Workflow Homonym ](/docs/identitymanager/6.2/integration/workflows/index.md).

```

<Form Identifier="Workflow_Referentiel_User_AdvancedStartInternal_Base" EntityType="Referentiel_UserRecord">    <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset" HomonymEntityLink="Homonym_Referentiel_UserRecord">        <Control DisplayName_L1="Full Name" OutputType="LayoutRowset">            <Control Binding="LastName" IsRequired="true" />            <Control Binding="FirstName" IsRequired="true" />        </Control>    </Control></Form>

```

## Properties

| Property                | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FormEntityType required | **Type** Int64 **Description** In a [Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), an [ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) is defined and the [ Binding ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) of this Form will be loaded from this EntityType. The FormEntityType property represents this EntityType. |
| Identifier required     | **Type** String **Description** Unique identifier of the HomonymEntityLink.                                                                                                                                                                                                                                                                                                                                                                                   |

## Child Element: Filter

Defines combination of property comparison to use to find homonyms.

### Properties

| Property                     | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ComparisonProperty1 optional | **Type** Int64 **Description** Defines the property used to compare with the form control `Property`. It should not be defined if it the same as the property in the attribute `Property`. Going from 1 to 5.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Expression1 optional         | **Type** String **Description** Defines the C# expression to apply on the homonymy form controls. The result of the expression evaluation will be compared with the corresponding `ComparisonProperty` using the defined `Operator`. If the `ComparisonProperty` is a computed property, no need to define the expression if it is the same as the one for the computed property. It will be automatically used when finding homonyms. Going from 1 to 5. See the [ C# utility functions ](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Operator1 default value: 2   | **Type** QueryComparisonOperator **Description** Defines the operator to use to compare between the `ComparisonProperty` and the `Property` or the `Expression` evaluation result. By default the `Equal` operator is used. Going from 1 to 5. All possible values: `0` - Auto: The `Operator` is calculated by the engine according to the type of element. `1` - NotEqual: finds the elements that are not equal to the desired value. `2` - Equal: finds the elements that are strictly equal to the desired value. `3` - Contain: finds the elements that contain the desired value. `4` - StartWith: finds the elements that start with the desired value. `5` - EndWith: finds the elements that end with the desired value. `6` - NotContain: finds the elements that do not contain the desired value. `7` - NotStartWith: finds the elements that do not start with the desired value. `8` - NotEndWith: finds the elements that do not end with the desired value. `9` - GreaterThan: finds the elements that are greater than the desired value. `10` - LessThan: finds the elements that are less than the desired value. `11` - GreaterThanOrEqual: finds the elements that are greater than or equal to the desired value. `12` - LessThanOrEqual: finds the elements that are less than or equal to the desired value. `*`- Flexible: The `Flexible` operators transform the desired value according to the `FlexibleComparisonExpression` defined in the `EntityProperty` then search. The flexible operators are: `13` - FlexibleEqual `14` - FlexibleContain `15` - FlexibleStartWith `16` - FlexibleEndWith |
| Property1 optional           | **Type** Int64 **Description** Defines the form control property to use to compare with `ComparisonOperator` using the defined `Operator`. Going from 1 to 5.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

# Workflows

- [Aspects](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)
- [Forms](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)
- [ Homonym Entity Link ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)
- [ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)

# Workflow

In Identity Manager, a workflow is a set of elemental units called activities that are stored as a
model to describe a real-world process. A workflow provides a mechanism for automating multi-step
processes across the application. It can be depicted as a sequence of operations, declared as work
of a person or group, an organization of staff, or one or more simple or complex mechanisms.

## Examples

The following example declares a simple workflow called `Directory_User_StartInternal` that involves
resources from the entity type `Directory_User`.

```

    <Workflow Identifier="Directory_User_StartInternal" DisplayName_L1="User - New Employee" VariablesType="Workflow_Directory_User">
        <Activity ... />        ...
    </Workflow>

```

## Properties

| Property                  | Details                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| DisplayName_L1 required   | **Type** String **Description** Workflow' name displayed in the UI. This column is used for the first language.                                  |
| Identifier required       | **Type** String **Description** Unique identifier of the workflow.                                                                               |
| IdentifierPrefix optional | **Type** String **Description** Workflow's identifier prefix, used to prefix the workflow's activity instances.                                  |
| VariablesType required    | **Type** Int64 **Description** Entity type of the resources involved by the workflow. Must follow the naming convention `Workflow_<EntityType>`. |

## Child Element: Activity

In Identity Manager, an activity is a elemental unit used to model a workflow's steps, such as the
request of new records, the mailing of notifications to users about pending approvals, or the
approval/decline of modifications. A workflow is made of a series of successive activities.

### Examples

The following workflow is made of four activities to add a new worker in the system.

```

<Workflow Identifier="Directory_User_StartInternal" DisplayName_L1="User - New Employee" VariablesType="Workflow_Directory_User">
    <Activity Identifier="Request"  DisplayName_L1="Request" Template="ActionWithRefine" />
    <Activity Identifier="PersistDraft"  DisplayName_L1="Draft Creation" Template="PersistOnlyResources" WorkflowOverviewDisable="1"/>
    <Activity Identifier="Review"  DisplayName_L1="Review" Template="ReviewWithFeedback" />
    <Activity Identifier="Persist"  DisplayName_L1="Commit" Template="Persist" WorkflowOverviewDisable="1"/>  </Workflow>

```

### Properties

| Property                                       | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ArgumentBlockProvisioning default value: false | **Type** Boolean **Description** `true` to block provisioning orders (argument used only for an activity following the template `Persist` or `PersistOnlyResources`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ArgumentCalledWorkflow optional                | **Type** Int64 **Description** Workflow to call (argument used only for an activity following the template `ContinueWith`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| DisplayName_L1 required                        | **Type** String **Description** Activity's name to display in the UI. This column is used for the first language.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Identifier required                            | **Type** String **Description** Unique identifier of the activity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Template required                              | **Type** Enumeration **Description** Identifier of the activity template. All possible values: - `Action`: awaits user modifications without another user's intervention. - `ActionWithRefine`: awaits user modifications with the possibility to delegate the action to another user. - `Review`: awaits user approval without another user's intervention. - `ReviewWithFeedback`: awaits user approval with the possibility of getting feedback from another user before taking the action. - `Persist`: saves the workflow's collected data to the repository and triggers dependant processes (i.e. provisioning). - `PersistOnlyResources`: saves the workflow's collected data to the repository and without triggering dependant processes (i.e. provisioning). - `ContinueWith`: Gets the previous activities of the workflow and continues starting from a given activity of another workflow. |
| WorkflowOverviewDisable default value: false   | **Type** Boolean **Description** `true` to disable the activity's appearance on the **Workflow Overview** screen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

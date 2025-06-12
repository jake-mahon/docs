# BuildUniqueValueAspect

Computes a unique value for a given property.

## Examples

The following example generates bots' logins during their creation.

```

<BuildUniqueValueAspect Identifier="Directory_Bot_UniqueValue_Login" Binding="Workflow_Directory_Bot:Directory_Bot.Login" ExpressionBinding="Workflow_Directory_Bot:Directory_Bot" Expression="C#:wkf:return 'B' + string.Format(&quot;{0:D5}&quot;, new Random().Next(99000, 99999));" SqlCheckExpression="SELECT TOP 1 login FROM zz_directory_bot WHERE login=@VALUE" Priority="10" IterationsCount="10" SimulationExpression="C#:wkf:return &quot;99999&quot;;">
    <PointCut Activity="Directory_Bot_Create:Request" ActivityState="Action-Executed" Mode="After" /></BuildUniqueValueAspect>

```

## Properties

| Property | Details |
| --- | --- |
| Binding   required | __Type__    String   __Description__   Binding whose difference with ```ExpressionBinding``` defines the property to be computed. |
| Identifier   required | __Type__    String   __Description__   Unique identifier of the aspect. |
| Expression   optional | __Type__    String   __Description__   C# expression that computes the unique value.   __Note:__ the computation can be configured in SQL instead of C# via ```SqlBuildExpression```. Decide whether to use either ```Expression``` or ```SqlBuildExpression```, not both. |
| ExpressionBinding   optional | __Type__    String   __Description__   Binding:   - that defines the variable type used in the potential expressions specified in the aspect;   - whose difference with ```Binding``` defines the property involved in the aspect.   __Note:__ required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| HistorizeBinding   optional | __Type__    String   __Description__   Binding that stores all the old values computed by the aspect. |
| HistorizeSeparator   default value: � | __Type__    String   __Description__   Defines the character used as a separator in the ```HistorizeBinding``` property. |
| IfExpression   optional | __Type__    String   __Description__   Expression that conditions the aspect execution. [See more details on C# expressions](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#See-more-details-on-C-expressions). |
| IterationsCount   default value: 0 | __Type__    String   __Description__   Maximum number of computation attempts without finding a unique value.   __Note:__ a variable named ```iteration``` is available to use the attempt number in the expressions of the aspect and/or of the potential unicity check rules, for example to help manage homonyms. Hence, a custom variable cannot be declared with the name ```iteration```. |
| Message\_L1   default value: | __Type__    String   __Description__   Message in language 1 (up to 16) to be displayed when the value generation failed, i.e. when ```IterationsCount``` is exceeded. |
| OnlyIfNew   default value: false | __Type__    String   __Description__   ```true``` to trigger the aspect only for the creation of new resources. |
| Priority   default value: 0 | __Type__    Int32   __Description__   Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first.   __Note:__ the priority can be a negative value. |
| SimulationExpression   optional | __Type__    String   __Description__   Expression used instead of the ```Expression``` parameter when previewing the workflow result before its implementation. |
| SqlBuildExpression   optional | __Type__    String   __Description__   SQL command that computes the unique value.   __Note:__ the computation can be configured in C# instead of SQL via ```Expression```. Decide whether to use either ```SqlBuildExpression``` or ```Expression```, not both. |
| SqlCheckExpression   optional | __Type__    String   __Description__   SQL request that checks whether the value computed with the binding/expression is unique, i.e. not yet used by another resource.__Note:__ required if zero [unicity check rules](#unicity-check-rules) are linked to the aspect.__Warning:__ the SQL request must be efficient because a potential timeout may block the progress of the workflow. For example, when the database's state and indexes are not well known, prefer to use views rather than the whole tables, because views store way fewer elements than tables, which makes them faster to use in a request. |

## Child Element: PointCut

A pointcut is a mechanism telling Usercube when to execute the linked [aspect](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/workflows/aspects/index.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.png)

| Property | Details |
| --- | --- |
| Activity   required | __Type__    Int64   __Description__   Identifier of the activity whose specified state triggers the aspect. |
| ActivityState   required | __Type__    Enumeration   __Description__   Identifier of the activity state that triggers the aspect. |
| Mode   default value: 0 | __Type__    PointCutMode   __Description__   Mode defining when exactly the aspect is triggered around the specified workflow's activity state.   ```0``` - __Before__: the aspect will be executed on entry to the specified activity state, regardless of the transition used.   ```1``` - __After__: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

## Child Element: UnicityCheckRule

A unicity check rule ensures that the expression computed by a [```BuildUniqueValue```aspect](#BuildUniqueValueaspect) for a given property is unique, i.e. not yet used by another resource, in a given entity type.

The comparison performed by these rules to check unicity can be configured in SQL instead of C# via the [```SqlCheckExpression```](#SqlCheckExpression) property of the aspect.

The value of the source binding/expression is computed based on the properties of the source resource which is the resource whose property we compute via the ```BuildUniqueValue``` aspect.

The rule compares the return value of the source binding/expression with the existing values of the target binding/expression in the target entity type.

![Schema: Unicity Check](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/workflows/aspects/builduniquevalueaspect/aspects_unicitycheck.png)

> For example, we need to generate an email address for any new user joining the company. We configure in a ```BuildUniqueValue``` aspect that users' emails are computed with ```{firstName}.{lastName}@{EmailDomain}```.
>
> Consider a new user called John Doe. We need to link to the aspect a unicity check rule that is going to compare the email core ```john.doe``` with the email cores of existing resources in a given entity type. Thus Usercube can ensure that the email core is unique, and finally build the unique email address.

Both source and target bindings/expressions must be consistent with the binding/expression used in [the corresponding aspect](#the-corresponding-aspect) which must not use a ```SqlCheckExpression```.

One ```BuildUniqueValue``` aspect can be linked to many unicity check rules, but should not be linked to more than one rule per target entity type.
  
The unicity check rules linked to a same aspect are combined with the AND operator. It means that the aspect's iteration goes up when at least one of the rules detects non-unicity.

When creating or updating a unicity check rule, launch the [```ComputeCorrelationKeysTask```](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/jobs/tasks/server/computecorrelationkeystask/index.md)before applying the role model and launching workflows.
  
__For information:__ Usercube needs to store the correlation keys linked to the expressions defined in the unicity check rule, such as the return value, the entity type, etc. That's why the task mentioned above must be launched before launching any workflow using a unicity check rule.

### Examples

#### Basic example

The following example checks the unicity of the login of a new user.

> In order to be able to write the source and target bindings/expressions of the unicity check rule, you must understand the binding/expression of the corresponding ```BuildUniqueValue``` aspect:
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

With the same aspect as the previous example, we might want to compare the login of the new user with the list of reserved logins too:

```

<UnicityCheck Aspect="Directory_UserRecord_UniqueValue_Login" TargetEntityType="Directory_UserRecord" TargetBinding="Login" /><UnicityCheck Aspect="Directory_UserRecord_UniqueValue_Login" TargetEntityType="Directory_ReservedLogin" TargetBinding="Value" />

```

#### Sophisticated example

The following example checks the unicity of the email address of a new user.

> In order to be able to write the source and target bindings/expressions of the unicity check rule, you must understand the binding/expression of the corresponding ```BuildUniqueValue``` aspect:
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

We want to include in the unicity check only the email's core ```firstName.lastName``` without the ```@EmailDomain``` part. This is why the source expression starts like the aspect's expression but does not add the domain part, and the target expression removes the domain part from existing values:

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
| Property | Details |
| --- | --- |
| SourceBinding   optional | __Type__    Int64   __Description__   Binding property (from the source entity type specified in the corresponding workflow) whose value is to be compared with the existing values of the target binding/expression.   __Note:__ when not specified, the unicity check rule uses the binding from the aspect. |
| SourceExpression   optional | __Type__    String   __Description__   Binding expression (based on properties from the source entity type specified in the corresponding workflow) whose value is to be compared with the existing values of the target binding/expression. [See more details on C# expressions](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#See-more-details-on-C-expressions).   __Note:__ when not specified, the unicity check rule uses the expression from the aspect. |
| TargetBinding   optional | __Type__    Int64   __Description__   Binding property (from the target entity type) whose values corresponding to existing resources are to be compared with the value of the source binding/expression. |
| TargetEntityType   required | __Type__    Int64   __Description__   Identifier of the entity type for which the rule checks the property's unicity. |
| TargetExpression   optional | __Type__    String   __Description__   Binding expression (based on properties from the target entity type) whose values corresponding to existing resources are to be compared with the value of the source binding/expression. [See more details on C# expressions](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/expressions/index.md#See-more-details-on-C-expressions). |

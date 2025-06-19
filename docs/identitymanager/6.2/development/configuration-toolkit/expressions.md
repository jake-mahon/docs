# C# utility functions

These functions can be called in any C# expression specified in the configuration. See the
[Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.

These are static functions defined in the class `Usercube.Expressions.Functions.UtilExpressions`.

The way these functions are configured, they require the `UtilExpressions` prefix, but not
necessarily the rest (`Usercube.Expressions.Functions`). However, using the full namespace would
also work.

For example, you could use `UtilExpressions.BuildUsername(...)` as shown in the example below.

[LinQ methods](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable?view=net-8.0) can
be used, without needing to add a prefix.

## BuildUsername

Builds a username by concatenating a first name, a separator, a last name and a possible suffix.

First name and last name are simplified using the
[Predefined functions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) function.

```
string? BuildUsername(string? firstName, string? lastName, string? separator, string? suffix, int? iteration)
```

The iteration argument is usually used in a
[ Build Unique Value Aspect ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md).
If the iteration number is greater than 0, it is inserted after the last name.

### Example of use in a BuildUniqueValue aspect:

```
<BuildUniqueValueAspect
    Identifier="Directory_UserRecord_UniqueValue_Mail"
    Binding="Workflow_Directory_User:Directory_User.Records.Mail"
    ExpressionBinding="Workflow_Directory_User:Directory_User.Records"
    Expression="C#:person:return UtilExpressions.BuildUsername(person.FirstName, person.LastName, &quot;.&quot;, ((person.EmployeeType != null) &amp;&amp; (person.EmployeeType.Category != null) &amp;&amp; (person.EmployeeType.Category.Identifier == &quot;Internal&quot;)) ? null : &quot;.ext&quot;, iteration) + &quot;@acme.com&quot;;"
    SqlCheckExpression="SELECT TOP 1 mail FROM zz_ad_entry WHERE mail=@VALUE" IterationsCount="10">    <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />    <PointCut Activity="Directory_User_StartInternal:Review" ActivityState="ReviewWithFeedback-Approved" Mode="After" />    <PointCut Activity="Directory_User_StartExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />    <PointCut Activity="Directory_User_StartInternalByHR:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />    <PointCut Activity="Directory_User_CreateFromHR:Request" ActivityState="Action-Executed" Mode="After" /></BuildUniqueValueAspect>
```

## BuildUsernameWithInitials

Builds a username by concatenating a first name initials, a separator, a last name and a possible
suffix.

Hyphenated first names are accepted (In this case, we consider the initial of each first name).

```
string? BuildUsernameWithInitials(string? firstName, string? lastName, string? separator, string? suffix, int? maxLength, int? iteration)
```

The `maxLength` argument limits the length of the username.

The iteration argument is usually used in a
[ Build Unique Value Aspect ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md).
If it is greater than 0, we use several letters of the first name avoiding as much as possible to
insert a number in the built username.

### Example of use in a BuildUniqueValue aspect:

```
<BuildUniqueValueAspect
    Identifier="Directory_UserRecord_UniqueValue_Mail"
    Binding="Workflow_Directory_User:Directory_User.Records.Mail"
    ExpressionBinding="Workflow_Directory_User:Directory_User.Records"
    Expression="C#:person:return UtilExpressions.BuildUsernameWithInitials(person.FirstName, person.LastName, &quot;.&quot;, ((person.EmployeeType != null) &amp;&amp; (person.EmployeeType.Category != null) &amp;&amp; (person.EmployeeType.Category.Identifier == &quot;Internal&quot;)) ? null : &quot;.ext&quot;, 16, iteration) + &quot;@acme.com&quot;;"
    SqlCheckExpression="SELECT TOP 1 mail FROM zz_ad_entry WHERE mail=@VALUE" IterationsCount="10">    <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />    <PointCut Activity="Directory_User_StartInternal:Review" ActivityState="ReviewWithFeedback-Approved" Mode="After" />    <PointCut Activity="Directory_User_StartExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />    <PointCut Activity="Directory_User_StartInternalByHR:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />    <PointCut Activity="Directory_User_CreateFromHR:Request" ActivityState="Action-Executed" Mode="After" /></BuildUniqueValueAspect>
```

# Expressions

Expressions are a way to define the attributes whose values must be computed based on other
attributes.

## Overview

In Identity Manager's XML configuration, some attributes are defined with expressions. Expression
attributes do not take a plain string value, but rather an expression that computes a value based on
a given input. See the
[ Entity Property Expression ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and
[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topics for additional
information.

Every expression must be passed at least one argument and return at least one value.

The expression can either be provided as a built-in function or as a full-fledged C# expression. See
the list of available C# utility functions and functions predefined by Identity Manager. See the
[Predefined functions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.

**NOTE:** When changing the value of a property that is part of some expressions in the
configuration, do not expect to see all expressions recomputed right away.

In order to ensure the recomputation of all expressions based on the recent change, wait for the
next run of Update Expressions in the complete job or through the corresponding connector's overview
page.

### Expressions in the UI

In the UI, the attributes that can be defined with an expression show two fields: Property Path and
Expression.

For example, the source object of a scalar rule based on user records is displayed:

![Property Path and Expression](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/expressions/expression-propertypath_v602.webp)

The field Property Path is usually filled in with the + button only when the rule involves one
single attribute. If the object involves more than one attribute, then the attributes are to be
written in Expression (C#), with the help of predefined simple transformations. See the
[Predefined functions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional information.

The first example defines the source object as simply the user record's Login property, while the
second defines the source object with an expression based on the user record's first and last names:

![Property Path Example](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/expressions/expression-propertypath-example1_v602.webp)

![Expression Example](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/expressions/expression-propertypath-example2_v602.webp)

### Expressions in XML

In XML, inside the C# expressions, make sure to escape `<">` characters by writing them as `<">`.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ScalarRule Property="displayName" Expression="C#:person:return person.LastName + &quot; &quot; + person.FirstName;" />

```

### Nullability checks

Nullability checks constitute a common area for improvement in C# expressions, rather easy to
implement.

See Microsoft documentation on
[nullable reference types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-reference-types)
and more precisely on
[nullable operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#nullable-operators).

For example, the following scalar rule computes the value of users' email addresses via a C#
expression. The `<?>` characters cut the operations short by returning null when one of the chain
members returns null, thus preventing errors.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ScalarRule Property="EmailAddress" Expression="C#:resource:return resource?.mail?.ToLower();" />

```

## Built-in Functions

Identity Manager provides a set of built-in function that implement basic expressions. They can be
used as-is or be included in a C# expression.

Identity Manager's engine automatically passes the main argument to the function during the
computation, but extra arguments can be provided using the following syntax:

`function name : arg2 | arg3 | ...`

### Example

Plain built-in function:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
// transform string to uppercase
Expression="ToUpper"
```

Built-in function with parameters:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
// add 1440 minutes to a date formated as dd/MM/yyyy
Expression="ParseLocalDateThenAddMinutes:Romance Standard Time|dd/MM/yyyy|1440"
```

## C# Expressions

More complex expressions can be written as ad-hoc C# code according to the following rules:

- The expression is prefixed by C#:ParameterName: where ParameterName is the variable name pointing
  to the input value.
- The expression has to return a value

For example:

```

// user full name
C#:user:return user.FirstName+" "+user.LastName;

```

### QueryHandler

Expression can includes squeries, using the QueryHandler service.

For example, to query the employee type whose Identifier is CDI:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
C#:user:
var resources = queryHandler.Select<Directory_EmployeeType>("Select Id Where Identifier=\"CDI\"");
return resources.FirstOrDefault()?.Id;
```

Another example, to query the organization whose Identifier is `<23040>`:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
C#:return queryHandler.Select<Directory_Organization>("Select Identifier Where Id=23040").FirstOrDefault()?.Identifier;
```

### Logger service

Identity Manager provides a logger service called "logger" to debug C# expressions.

For example:

```
C#:resource:logger.LogDebug("Name={0}", resource.Name); return resource.Name;
```

### White list

The following .NET libraries from the white list can be used.

Authorized Namespaces

Every class and function from the following namespaces is allowed:

- `System.Linq`
- `System.Text.RegularExpressions`

Authorized Classes

Beyond the authorized namespaces, the following classes can be used:

- `System.Convert`
- `System.Reflection.AssemblyFileVersionAttribute`
- `System.Reflection.AssemblyVersionAttribute`
- `System.Reflection.AssemblyCopyrightAttribute`
- `System.Reflection.AssemblyProductAttribute`
- `System.Reflection.AssemblyCompanyAttribute`
- `System.Reflection.AssemblyTitleAttribute`
- `System.Char`
- `Usercube.Expressions.Functions.UtilExpressions`
- `System.Nullable`
- `System.String`
- `System.Int32`
- `System.Random`

Authorized Methods

Beyond the authorized classes, the following methods can be used:

- `System.Convert`
- `Microsoft.Extensions.Logging.LoggerExtensions.LogDebug`
- `System.DateTime.Add`
- `System.DateTime.AddDays`
- `System.DateTime.AddHours`
- `System.DateTime.AddMicroseconds`
- `System.DateTime.AddMilliseconds`
- `System.DateTime.AddMinutes`
- `System.DateTime.AddMonths`
- `System.DateTime.AddSeconds`
- `System.DateTime.AddTicks`
- `System.DateTime.AddYears`
- `System.DateTime.Compare`
- `System.DateTime.CompareTo`
- `System.DateTime.DaysInMonth`
- `System.DateTime.Equals`
- `System.DateTime.GetDateTimeFormats`
- `System.DateTime.ToUniversalTime`
- `System.DateTime.ToString`

Trying to use code from outside this white list would yield the following error during computation:

`the Method Name : ... Parent Class : ... NameSpace : ... used are not authorized`

Method ... cannot be called with entities as arguments.

However, here is a whitelist of methods that can be called with these kinds of arguments:

- `System.Linq.Enumerable.Max()`
- `System.Linq.Enumerable.Min()`
- `System.Linq.Enumerable.Count<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.Count<TSource>(IEnumerable<TSource>, Func<TSource,Boolean))`
- `System.Linq.Enumerable.Select<TSource,TResult>(IEnumerable<TSource>, Func<TSource,Int32,TResult)`
- `System.Linq.Enumerable.Select<TSource,TResult>(IEnumerable<TSource>, Func<TSource,TResult)`
- `System.Linq.Enumerable.Any<TSource>(IEnumerable<TSource>, Func<TSource,Boolean)`
- `System.Linq.Enumerable.Any<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.All<TSource>(IEnumerable<TSource>, Func<TSource,Boolean)`
- `System.Linq.Enumerable.All<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.Where<TSource>(IEnumerable<TSource>, Func<TSource,Boolean)`
- `System.Linq.Enumerable.Where<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.First<TSource>(IEnumerable<TSource>, Func<TSource,Boolean)`
- `System.Linq.Enumerable.First<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.Last<TSource>(IEnumerable<TSource>, Func<TSource,Boolean)`
- `System.Linq.Enumerable.Last<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.Last<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.Single<TSource>(IEnumerable<TSource>, Func<TSource,Boolean)`
- `System.Linq.Enumerable.Single<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.OrderBy<TSource>(IEnumerable<TSource>, Func<TSource,Boolean)`
- `System.Linq.Enumerable.OrderBy<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.OrderByDescending<TSource>(IEnumerable<TSource>, Func<TSource,Boolean)`
- `System.Linq.Enumerable.OrderByDescending<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.Skip(IEnumerable<TSource>, int count)`
- `System.Linq.Enumerable.SkipLast(IEnumerable<TSource>, int count)`
- `System.Linq.Enumerable.ThenBy<TSource>(IEnumerable<TSource>, Func<TSource,Boolean)`
- `System.Linq.Enumerable.ThenBy<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.ThenByDescending<TSource>(IEnumerable<TSource>, Func<TSource,Boolean)`
- `System.Linq.Enumerable.ThenByDescending<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.ThenByDescending<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.Contains()`
- `System.Linq.Enumerable.FirstOrDefault<TSource>(IEnumerable<TSource>, Func<TSource,Boolean>, TSource)`
- `System.Linq.Enumerable.FirstOrDefault<TSource>(IEnumerable<TSource>, TSource)`
- `System.Linq.Enumerable.FirstOrDefault<TSource>(IEnumerable<TSource>, Func<TSource,Boolean)`
- `System.Linq.Enumerable.FirstOrDefault<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.SingleOrDefault<TSource>(IEnumerable<TSource>, Func<TSource,Boolean>, TSource)`
- `System.Linq.Enumerable.SingleOrDefault<TSource>(IEnumerable<TSource>, TSource)`
- `System.Linq.Enumerable.SingleOrDefault<TSource>(IEnumerable<TSource>, Func<TSource,Boolean)`
- `System.Linq.Enumerable.SingleOrDefault<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.LastOrDefault<TSource>(IEnumerable<TSource>, Func<TSource,Boolean>, TSource)`
- `System.Linq.Enumerable.LastOrDefault<TSource>(IEnumerable<TSource>, TSource)`
- `System.Linq.Enumerable.LastOrDefault<TSource>(IEnumerable<TSource>, Func<TSource,Boolean)`
- `System.Linq.Enumerable.LastOrDefault<TSource>(IEnumerable<TSource)`
- `System.Linq.Enumerable.ToList()`
- `System.Linq.Enumerable.ToArray()`
- `System.Linq.Enumerable.ToHashSet()`
- `System.Collections.Generic.List.ToArray()`

## Literal Expression

To avoid the use of a C# expression when the parameter is not needed, simple literal values can be
written as literal expressions according to the following rules:

- The expression is prefixed by the Literal: tag.
- The expression value must be valid according to the expected type of the property to which the
  expression applies. For example, Literal:five does not work for an Int property.

Literal expressions are available for ScalarRule, QueryRule and EntityPropertyExpression expressions
whose target EntityPropertyType attribute is of the following :

- String = 0
- Bytes = 1
- Int32 = 2
- Int64 = 3
- Bool = 5
- Guid = 6
- Double = 7
- Byte = 9
- Int16 = 10
- ForeignKey = 12

Literal expressions are not available for QueryRuleTargetExpression attribute, only
SourceExpression. Literal expressions are not available for rules targeting a DateTime or Binary
property.

Example

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ScalarRule Property="userAccountControl" Expression="C#:bot:return &quot;66048&quot;;" /><ScalarRule Property="userAccountControl" Expression="Literal:66048" />
<QueryRule Property="parentdn" TargetBinding="dn" SourceExpression="C#:bot:return &quot;OU=Bots,DC=acme,DC=internal&quot;;" /><QueryRule Property="parentdn" TargetBinding="dn" SourceExpression="Literal:OU=Bots,DC=acme,DC=internal" />
<EntityPropertyExpression Identifier="EntityType_BoolProperty"  EntityType="EntityType" Property="BoolProperty" Expression="Literal:false" /><EntityPropertyExpression Identifier="EntityType_BoolProperty"  EntityType="EntityType" Property="BoolProperty" Expression="Literal:True" /><EntityPropertyExpression Identifier="EntityType_IntProperty"  EntityType="EntityType" Property="IntProperty" Expression="Literal:42" />
<EntityPropertyExpression Identifier="EntityType_BoolProperty"  EntityType="EntityType" Property="BoolProperty" Expression="Literal:42" /><EntityPropertyExpression Identifier="EntityType_IntProperty"  EntityType="EntityType" Property="IntProperty" Expression="Literal:five" />
```

Literal expressions targeting String properties can accept any value, since it is already a string
in the configuration.

# Predefined functions

Identity Manager provides a set of predefined functions that simplify the configuration of entity
property expressions and scalar rules. See the
[ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
and[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topics for additional
information.

Unlike C# expressions, Identity Manager's predefined functions do not need any prefix. They can be
used as such. See the [ C# utility functions ](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for
additional information.

### Examples

The following example shows two predefined functions. The first function normalizes the HR_Person
FirstName. The other one converts the end date into a UTC date and adds 1440 minutes.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

    <ScalarRule Property="CFirstName" Binding="HR_Person:FirstName" Expression="Simplify" Policy="Default" />
    <ScalarRule Property="CEndDate" Binding="HR_Person:EndDate" Expression="ParseLocalDateThenAddMinutes:Romance Standard Time|dd/MM/yyyy|1440" Policy="Default" />

```

The following table summarizes existing predefined functions:

| Name                             | Description                                                                                                                                                                                               | Parameters           | Return type          |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- | -------------- | -------- |
| ToUpper                          | Returns the input string converted to uppercase, using the current culture.                                                                                                                               | None                 | String               |
| ToLower                          | Returns the input string converted to lowercase, using the current culture.                                                                                                                               | None                 | String               |
| Simplify                         | Returns the input string converted to uppercase, removing all whitespace and special characters, and replacing diacritics.                                                                                | None                 | String               |
| Trim                             | Removes all leading and trailing white-space characters from the current string.                                                                                                                          | None                 | String               |
| TrimStart                        | Removes all leading white-space characters from the current string.                                                                                                                                       | None                 | String               |
| TrimEnd                          | Removes all trailing white-space characters from the current string.                                                                                                                                      | None                 | String               |
| RemoveDiacritics                 | Replaces all the éèçàù by eecau, ä by ae, Ä by AE, ö by oe, Ö by OE, ü by ue, Ü by UE, č by c, Č by C, ø by o, Ø by O, ł by l, Ł by L, ß by ss, æ by ae, Æ by AE, œ by oe, Œ by OE, š by sh, and Š by SH. | None                 | String               |
| ToDoubleMetaphone                | An implementation of Double Metaphone phonetic algorithm.                                                                                                                                                 | None                 | String               |
| ToSoundex                        | An implementation of Soundex phonetic algorithm.                                                                                                                                                          | None                 | String               |
| ToFirstName                      | Normalizes a first name (first character of each word in uppercase) separated with ‘-’ and the right accents.                                                                                             | None                 | String               |
| ToTitle                          | Puts the first character in uppercase.                                                                                                                                                                    | None                 | String               |
| ToFormatedDN                     | Returns the input string converted to Distinguished Name format.                                                                                                                                          | None                 | String               |
| ParseLocalDate                   | Converts the specified string representation of a date and time to its DateTime equivalent using the specified parameters.                                                                                | Time zone identifier | Input string format. | DateTime       |
| ParseLocalDateThenAddMinutes     | Converts the input string into a DateTime and adds minutes value.                                                                                                                                         | Time zone identifier | Input string format  | Added minutes. | DateTime |
| ParseUniversalDate               | Converts the specified string representation of a date and time to its Coordinated Universal Time (UTC).                                                                                                  | Input string format. | DateTime             |
| ParseUniversalDateThenAddMinutes | Converts the input string into an UTC DateTime and adds minutes value.                                                                                                                                    | Time zone identifier | Input string format  | Added minutes. | DateTime |
| FormatLocalDate                  | Converts the specified string into a local DateTime.                                                                                                                                                      | Time zone identifier | Input string format. | DateTime       |

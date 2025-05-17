---
sidebar_position: 348
title: C# utility functions
---

# C# utility functions

These functions can be called in any C# expression specified in the configuration. See the [Expressions](../index "Expressions") topic for additional information.

These are static functions defined in the class `Usercube.Expressions.Functions.UtilExpressions`.

The way these functions are configured, they require the `UtilExpressions` prefix, but not necessarily the rest (`Usercube.Expressions.Functions`). However, using the full namespace would also work.
  
For example, you could use `UtilExpressions.BuildUsername(...)` as shown in the example below.

[LinQ methods](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable?view=net-8.0) can be used, without needing to add a prefix.

## BuildUsername

Builds a username by concatenating a first name, a separator, a last name and a possible suffix.

First name and last name are simplified using the Simplify function. See the [Predefined functions](../predefined-functions/index "Predefined functions")topic for additional information.

```
string? BuildUsername(string? firstName, string? lastName, string? separator, string? suffix, int? iteration)

```
The iteration argument is usually used with the help of [Build Unique Value Aspect](../../xml-configuration/workflows/aspects/builduniquevalueaspect/index "BuildUniqueValueAspect"). If the iteration number is greater than 0, it is inserted after the last name.

### Example of use in a BuildUniqueValue aspect:

```
                    

```
## BuildUsernameWithInitials

Builds a username by concatenating a first name initials, a separator, a last name and a possible suffix.

Hyphenated first names are accepted (In this case, we consider the initial of each first name).

```
string? BuildUsernameWithInitials(string? firstName, string? lastName, string? separator, string? suffix, int? maxLength, int? iteration)

```
The `maxLength` argument limits the length of the username.

The iteration argument is usually used with the help of [Build Unique Value Aspect](../../xml-configuration/workflows/aspects/builduniquevalueaspect/index "BuildUniqueValueAspect"). If it is greater than 0, we use several letters of the first name avoiding as much as possible to insert a number in the built username.

### Example of use in a BuildUniqueValue aspect:

```
                    

```
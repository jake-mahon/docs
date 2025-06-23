---
title: user-cmdlets Cmdlet
sidebar_label: user-cmdlets
description: PowerShell cmdlet reference for user-cmdlets with parameter details, syntax examples, and usage instructions for Directory Manager.
---

# Get-User

Use the Get-User commandlet to retrieve basic information about a user that match your given
criteria.

## Syntax

```
Get-User
[[-Identity] <string[]>]
[-SearchContainer <string[]>]
[-SearchContainersScopeList <string>]
[-ShouldReturnCollection]
[-MaxItemsToDisplay <int>]
[-ObjectType <string[]>]
[-LdapFilter <string>]
[-SmartFilter <string>]
[-ServerFilter <string>]
[-AttributesToLoad <string[]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- None

Example:

The following command retrieves the specified user from the connected identity store.

```
Get-User -Identity "Osama"
```

# Get-UserEnrollment

The commandlet Get-UserEnrollment retrieves enrollment information of a user.

## Syntax

```
Get-UserEnrollment
-Identity <string>
[-EnrollmentTypes {None | Mobile | SecurityQuestions | Email | Authenticator | LinkAccount | Yubikey | WindowsHello | All | Any}]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example 1:

If a user is enrolled, this cmdlet will enlist the authentication type(s) the user is enrolled with.

```
Get-UserEnrollment -Identity euser1
```

Example 2:

Check whether the specified user is enrolled with the specified enrollment type(s).

```
Get-UserEnrollment -Identity euser1 -EnrollmentTypes SecurityQuestions, Email
```

Example 3:

This example gets user enrollment information through the pipeline operator.

```
'euser1', 'euser2' | Get-UserEnrollment
```

# New-User

Use the New-User commandlet to create a new user in Directory. Most user properties can be directly
added by using the parameters of this commandlet.

## Syntax

```
New-User
-Name <string>
-OrganizationalUnit <string>
-SAMAccountName <string>
-Password <string>
-FirstName <string>
-LastName <string>
-DisplayName <string>
[-UPNSuffix <string>]
[-Title <string>]
[-City <string>]
[-State <string>]
[-Zip <string>]
[-Country <string>]
[-Initials <string>]
[-Address <string>]
[-Office <string>]
[-Business <string>]
[-Business2 <string>]
[-Alias <string>]
[-EmailAddress <string>]
[-Department <string>]
[-Company <string>]
[-Mobile <string>]
[-Home <string>]
[-AccountDisabled <string>]
[-PasswordNeverExpires <string>]
[-PasswordForceChange <string>]
[-Manager <string[]>]
[-HomePage <string>]
[-Assistant <string>]
[-Notes <string>]
[-MailEnabled <string>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameters

- Name
- OrganizationalUnit
- SAMAccountName
- Password
- FirstName
- LastName
- DisplayName

Example:

The following command creates a new user in the container specified by the OrganizationalUnit
parameter. The command also specifies the logon name, password, first name, last name and display
name of the new user.

```
New-User -Name "OsamaUser" -OrganizationalUnit "OU=osamamu,DC=naveed,DC=local" -SAMAccountName "OsamaUser11" -Password "password123" -FirstName "Osama" -LastName "Shahbaz" -DisplayName "Osama"
```

# User Commands

This section covers cmdlets for performing user-related tasks such as:

- [Get-User](/docs/directorymanager/11.1/powershell-reference/user-cmdlets.md) – Retrieves a user.
- [Get-UserEnrollment](/docs/directorymanager/11.1/powershell-reference/user-cmdlets.md) – Displays information about the status of user
  enrollment.
- [New-User](/docs/directorymanager/11.1/powershell-reference/user-cmdlets.md) – Creates a new user.
- [Remove-User](/docs/directorymanager/11.1/powershell-reference/user-cmdlets.md) – Removes a user from the directory.
- [Set-User ](/docs/directorymanager/11.1/powershell-reference/user-cmdlets.md) – Modifies a user in the directory

# Remove-User

Use the Remove-User commandlet to delete a user from directory.

## Syntax

```
Remove-User
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command deletes a user with the specified name.

```
Remove-User -Identity "osama"
```

# Set-User

The Set-User commandlet modifies a user in Directory. Most user properties can be directly modified
by using the parameters of this commandlet.

## Syntax

```
Set-User
-Identity <string>
[-FirstName <string>]
[-LastName <string>]
[-Title <string>]
[-City <string>]
[-State <string>]
[-Zip <string>]
[-Country <string>]
[-Initials <string>]
[-Address <string>]
[-Office <string>]
[-Business <string>]
[-Add <hashtable[]>]
[-Remove <hashtable[]>]
[-Replace <hashtable[]>]
[-Clear <string[]>]
[-Department <string>]
[-Company <string>]
[-Assistant <string>]
[-HomePage <string>]
[-Alias <string>]
[-EmailAddress <string>]
[-Description <string>]
[-Notes <string>]
[-AdministrativeNotes <string>]
[-DisplayName <string>]
[-SimpleDisplayName <string>]
[-CustomAttribute1 <string>]
[-CustomAttribute2 <string>]
[-CustomAttribute3 <string>]
[-CustomAttribute4 <string>]
[-CustomAttribute5 <string>]
[-CustomAttribute6 <string>]
[-CustomAttribute7 <string>]
[-CustomAttribute8 <string>]
[-CustomAttribute9 <string>]
[-CustomAttribute10 <string>]
[-CustomAttribute11 <string>]
[-CustomAttribute12 <string>]
[-CustomAttribute13 <string>]
[-CustomAttribute14 <string>]
[-CustomAttribute15 <string>]
[-Delimiter <string>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command modifies the display name of the specified user.

```
Set-User -Identity "Osama" -DisplayName "Osama123"
```

---
sidebar_position: 7067
title: Set-User
---

# Set-User

The Set-User commandlet modifies a user in Directory. Most user properties can be directly modified by using the parameters of this commandlet.

## Syntax

```
Set-User  
-Identity   
[-FirstName ]  
[-LastName ]  
[-Title ]  
[-City ]  
[-State ]  
[-Zip ]  
[-Country ]  
[-Initials ]  
[-Address ]  
[-Office ]  
[-Business ]  
[-Add ]  
[-Remove ]  
[-Replace ]  
[-Clear ]  
[-Department ]  
[-Company ]  
[-Assistant ]  
[-HomePage ]  
[-Alias ]  
[-EmailAddress ]  
[-Description ]  
[-Notes ]  
[-AdministrativeNotes ]  
[-DisplayName ]  
[-SimpleDisplayName ]  
[-CustomAttribute1 ]  
[-CustomAttribute2 ]  
[-CustomAttribute3 ]  
[-CustomAttribute4 ]  
[-CustomAttribute5 ]  
[-CustomAttribute6 ]  
[-CustomAttribute7 ]  
[-CustomAttribute8 ]  
[-CustomAttribute9 ]  
[-CustomAttribute10 ]  
[-CustomAttribute11 ]  
[-CustomAttribute12 ]  
[-CustomAttribute13 ]  
[-CustomAttribute14 ]  
[-CustomAttribute15 ]  
[-Delimiter ]  
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[]
```
## Required Parameter

* Identity

Example:

The following command modifies the display name of the specified user.

```
Set-User -Identity "Osama" -DisplayName "Osama123"
```
---
sidebar_position: 7113
title: Get-GroupMember
---

# Get-GroupMember

Use this commandlet to retrieve members of a particular group from directory. You can apply filters to the results returned by the commandlet.

## Syntax

```
Get-GroupMember  
[-Identity]   
[[-LdapFilter] ]  
[-AttributesToLoad ]  
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[]
```
## Required Parameter

* None

Example 1:

The following command retrieves all members of the Password\_Expiry group using the credentials set in the $Credentials environment variable. See the [Set the $Credentials Environment Variable](../Parameters/SettheCredential "Set the $Credentials Environment Variable") topic for setting credentials in an environment variable.

```
Get-GroupMember -Identity "CN=Password_Expiry,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```
Example 2:

The command below retrieves all members from the Enrollment group display name of which starts with the character S using the credentials of current user logged-on to the identity store.

```
Get-GroupMember -Identity "CN=Enrollment,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -LdapFilter "(displayname=S*)"
```
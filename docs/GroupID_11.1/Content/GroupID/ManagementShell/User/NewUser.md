---
sidebar_position: 7069
title: New-User
---

# New-User

Use the New-User commandlet to create a new user in Directory. Most user properties can be directly added by using the parameters of this commandlet.

## Syntax

```
New-User  
-Name   
-OrganizationalUnit   
-SAMAccountName   
-Password   
-FirstName   
-LastName   
-DisplayName   
[-UPNSuffix ]  
[-Title ]  
[-City ]  
[-State ]  
[-Zip ]  
[-Country ]  
[-Initials ]  
[-Address ]  
[-Office ]  
[-Business ]  
[-Business2 ]  
[-Alias ]  
[-EmailAddress ]  
[-Department ]  
[-Company ]  
[-Mobile ]  
[-Home ]  
[-AccountDisabled ]  
[-PasswordNeverExpires ]  
[-PasswordForceChange ]  
[-Manager ]  
[-HomePage ]  
[-Assistant ]  
[-Notes ]  
[-MailEnabled ]  
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[]
```
## Required Parameters

* Name
* OrganizationalUnit
* SAMAccountName
* Password
* FirstName
* LastName
* DisplayName

Example:

The following command creates a new user in the container specified by the OrganizationalUnit parameter. The command also specifies the logon name, password, first name, last name and display name of the new user.

```
New-User -Name "OsamaUser" -OrganizationalUnit "OU=osamamu,DC=naveed,DC=local" -SAMAccountName "OsamaUser11" -Password "password123" -FirstName "Osama" -LastName "Shahbaz" -DisplayName "Osama"
```
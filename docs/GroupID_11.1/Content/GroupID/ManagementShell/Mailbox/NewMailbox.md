---
sidebar_position: 7062
title: New-Mailbox
---

# New-Mailbox

Use the New-Mailbox commandlet to create a new mailbox in Directory. Most mailbox properties can be directly added by using the parameters of this commandlet.

## Syntax

```
New-MailBox  
-MailBoxStore   
-Alias   
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

* MailBoxStore
* Alias
* Name
* OrganizationalUnit
* SAMAccountName
* Password
* FirstName
* LastName
* DisplayName

Example:

The following command creates a new mailbox in the container specified by the **OrganizationalUnit** parameter of specified mailbox store. The command also specifies the logon name, password, first name, last name and display name of the new mailbox.

```
New-MailBox -MailBoxStore "OsamaMailBoxDb120435" -Name "OsamaMailBox" -OrganizationalUnit "OU=osamamu,DC=naveed,DC=local" -SAMAccountName "OsamaMailBoxUser" -Password "password123" -FirstName "OsamaMailBox" -LastName "MailBoxuser" -DisplayName "OsamaMailBox" -Alias "OsamaMailBox
```
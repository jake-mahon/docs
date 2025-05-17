---
sidebar_position: 7024
title: New-Contact
---

# New-Contact

Use the New-Contact cmdlet to create a new contact in the directory. Most contact properties can be directly added by using the parameters supported by this cmdlet.

## Syntax

```
New-Contact  
-Name   
-OrganizationalUnit   
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
* FirstName
* LastName
* DisplayName

Example:

The following command creates a new contact in the container specified by the *OrganizationalUnit* parameter. The command also specifies the logon name, first name, last name and display name of the new contact.

```
New-Contact -Name "OsamaContact" -OrganizationalUnit "OU=osamamu,DC=naveed,DC=local" -FirstName "OsamaContact" -LastName "OsamaContact" -DisplayName "OsamaContact"
```
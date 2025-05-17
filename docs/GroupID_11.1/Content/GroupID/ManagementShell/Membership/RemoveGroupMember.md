---
sidebar_position: 7114
title: Remove-GroupMember
---

# Remove-GroupMember

Use this commandlet to remove one or more members from a group membership.

Directory Manager maintains a history for this commandlet, which you can view in Directory Manager portal, against the History node in the left panel.

## Syntax

```
Remove-GroupMember  
-GroupIdentity   
-Identity   
[-Type ]  
[-StartDate ]  
[-EndDate ]  
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[]
```
## Required Parameters

* GroupIdentity
* Identity

Example:

The following command removes the user Brian Regan from the membership of the group Event Management using the credentials set in the $Credentials environment variable. See the [Set the $Credentials Environment Variable](../Parameters/SettheCredential "Set the $Credentials Environment Variable") topic for setting credentials in an environment variable.

```
Remove-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Identity "Brian Regan" -Credential $Cred
```
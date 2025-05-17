---
sidebar_position: 7063
title: Set-Mailbox
---

# Set-Mailbox

The Set-Mailbox commandlet modifies a mailbox in Directory. Most mailbox properties can be directly modified by using the parameters of this commandlet.

## Syntax

```
Set-MailBox  
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
[-CustomAttribute6   ]  
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

The following commandlet modifies the country value of the specified mailbox in the connected identity store.

```
Set-MailBox -Identity "OsamaMailBox" -Country "Pakistan"
```
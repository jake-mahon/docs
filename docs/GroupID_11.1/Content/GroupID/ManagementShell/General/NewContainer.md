---
sidebar_position: 7043
title: New-Container
---

# New-Container

The New-Container commandlet creates a new organizational unit in Directory. You can also use it to create nested organizational units by repeatedly executing the commandlet and changing the value of the ParentContainer parameter.

## Syntax

```
New-Container  
-ContainerName   
-OrganizationalUnit   
[-AccidentalDeletion]  
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[]
```
## Required Parameters

* ContainerName
* OrganizationalUnit

Example 1:

The following command creates the organizational unit *Recruiting* at the root level in Directory, using the credentials of current user logged-on to the identity store.

```
New-Container -OrganizationalUnit "DC=HR,DC=Imanami,DC=US" -ContainerName "Recruiting"
```
Example 2:

The following command creates the organizational unit *Local Recruiting* inside the *Recruiting* container in Directory using the credentials set in the $Credentials environment variable. See the [Set the $Credentials Environment Variable](../Parameters/SettheCredential "Set the $Credentials Environment Variable") topic for setting credentials.

```
New-Container - OrganizationalUnit "OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ContainerName "Local Recruiting" -Credential $Cred
```
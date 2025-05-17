---
sidebar_position: 7053
title: New-Group
---

# New-Group

Use the New-Group commandlet to create a new unmanaged group in a particular container in directory.

You can view events related to this commandlet in Directory Manager portal, against the History node in the left panel.

## Syntax

```
New-Group  
-SamAccountName   
-Name   
-OrganizationalUnit   
-GroupScope   
-Type   
-SecurityType   
[-GroupAlias ]  
[-ManagedBy ]  
[-DisplayName ]  
[-MailEnabled ]  
[-Description ]  
[-AdditionalOwners ]  
[-NotifyOptOutAdditionalOwners ]  
[-Members ]  
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[]
```
## Required Parameters

* SamAccountName
* Name
* OrganizationalUnit
* GroupScope
* Type
* SecurityType

Example 1:

The following command creates a new unmanaged, mail-disabled, global, distribution group in the container specified by the **OrganizationalUnit** parameter, using the credentials of current user logged-on to the identity store.

```
New-Group -Name "Event Management" -OrganizationalUnit "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -GroupAlias "EventManagement" -SamAccountName "Event Management" -GroupScope "Global Group" -Type "Distribution"
```
Example 2:

The command below creates a new mail-enabled, domain-local, semi-private, security group in the container specified by the **OrganizationalUnit** parameter, using the credentials set in the **$Credentials** environment variable. See the [Set the $Credentials Environment Variable](../Parameters/SettheCredential "Set the $Credentials Environment Variable") topic for setting credentials in an environment variable.

```
New-Group -Name "Enrollment" -OrganizationalUnit "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -GroupAlias "Enrollment" -MailEnable True -SamAccountName "Enrollment" -GroupScope "Domain Local" -Type "Security" -SecurityType "Semi_Private"
```
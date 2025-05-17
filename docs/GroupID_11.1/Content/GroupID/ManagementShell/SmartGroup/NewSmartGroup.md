---
sidebar_position: 7105
title: New-SmartGroup
---

# New-SmartGroup

This commandlet helps you to create a new Smart Group (managed group) in Directory. A Smart Group is a conventional distribution or security group that dynamically maintains its membership based on the rules applied by a user-defined LDAP query.

A Smart Group can also be defined as a Password Expiry group. A Password Expiry group is a dynamic group whose membership is based on password policy conditions defined by the administrator. The LDAP query defined for a Smart Group can be updated any time using the [Set-SmartGroup](SetSmartGroup "Set-SmartGroup") commandlet. When the LDAP query is changed, you must update the group once to modify its membership according to the changes made to the query. For information about updating a group, see [Update-Group](UpdateGroup "Update-Group").

You can view events related to this commandlet in Directory Manager portal, against the History node in the left panel.

## Syntax

```
New-SmartGroup  
-SamAccountName   
-Name   
-OrganizationalUnit   
-GroupScope   
-Type   
-SecurityType   
[-SearchContainers ]  
[-SearchContainersScopeList ]  
[-ObjectTypes ]  
[-LdapFilter ]  
[-IncludeRecipients ]  
[-ExcludeRecipients ]  
[-Storage ]  
[-DataSourceType ]  
[-SystemDSN ]  
[-TableorView ]  
[-DataSourceUserName ]  
[-DataSourcePassword ]  
[-FilePath ]  
[-Server ]  
[-Port ]  
[-LDAPSearchContainer ]  
[-DataSourceName ]  
[-DataSourceConnection ]  
[-DataSourceQuery ]  
[-KeyMapDB ]  
[-KeyMapAD ]  
[-WindowsAthentication]  
[-IsPasswordExpiryGroup]  
[-DomainExpiration ]  
[-ExpirationRange ]  
[-IncludeDisabledUsers ]  
[-IncludePasswordNeverExpireUsers ]  
[-Script ]  
[-ScriptFilePath ]  
[-Sun_Container ]  
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

The following command creates a new mail-enabled, universal, distribution Smart Group in the container specified by the **OrganizationalUnit** parameter, using the credentials of current user logged-on to the identity store.

```
New-SmartGroup  -OrganizationalUnit "OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Name "Smart_Training" -GroupAlias "Smart_Training" -MailEnable True -SamAccountName "Smart_Training" -GroupScope "Universal Group" -Type "Distribution"
```
NOTE: In Microsoft Exchange 2007 and later, mail-enabled groups are created with *Universal Group Scope*.

Example 2:

The following command creates a new universal, distribution Smart Group in the container specified by the **OrganizationalUnit** parameter and builds its membership by retrieving those objects from the containers specified in the **SearchContainers** parameter excluding sub-containers that have **Display Names** matching the Names in a text file.

```
New-SmartGroup -OrganizationalUnit "OU=Recruiting,OU=HR,DC=Imanami,DC=US" -Name "Smart_Enrollment" -SamAccountName "Smart_Enrollment" -GroupScope "Universal Group" -Type "Distribution" -SearchContainers "OU=Recruiting,OU=HR,DC=Imanami,DC=US","OU=Outsourcing,OU=HR,DC=Imanami,DC=US" -SearchContainersScopeList "1","1" -LdapFilter "(displayName=Database.[Name])" -DataSourceType "Microsoft Text Driver (*.txt,*.csv)" -FilePath "D:\Inputs\Names.txt" -DataSourceQuery "SELECT [Name] FROM [Names.txt]"
```
Example 3:

The following command creates a new local, distribution, Password Expiry group, using the credentials set in the **$Credential**s environment variable. Those users will be members of the group who have passwords aged 20 days or older. Disabled users will also be included in the membership.

```
New-SmartGroup -OrganizationalUnit "OU=Recruiting,OU=HR,DC=Imanami,DC=US" -Name "Password_Expiry" -GroupAlias "Password_Expiry" -SamAccountName "Password_Expiry" -GroupScope "Domain Local" -Type "Distribution" -IsPasswordExpiryGroup -DomainExpiration 30 -ExpirationRange 10 -IncludeDisabledUsers True -Credential $Cred
```
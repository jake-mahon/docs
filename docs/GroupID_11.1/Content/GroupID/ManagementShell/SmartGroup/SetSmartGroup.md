---
sidebar_position: 7104
title: Set-SmartGroup
---

# Set-SmartGroup

The Set-SmartGroup commandlet modifies a Smart Group in Directory. Attributes that are common to both Smart Groups and unmanaged groups can also be modified using the [Set-Group](../Group/SetGroup "Set-Group") commandlet.

You can view events related to this commandlet in Directory Manager portal, against the History node in the left panel.

## Syntax

```
Set-SmartGroup  
-Identity   
[-SearchContainers ]  
[-SearchContainersScopeList ]  
[-ObjectTypes ]  
[-LdapFilter ]  
[-IncludeRecipients ]  
[-ExcludeRecipients ]  
[-Storage ]  
[-DataSourceType ]  
[-SystemDSN ]  
[-TableOrView ]  
[-DataSourceUserName ]  
[-DataSourcePassword ]  
[-FilePath ]  
[-Server ]  
[-Port ]  
[-LDAPSearchContainer ]  
[-DataSourceName ]  
[-DataSourceQuery ]  
[-WindowsAuthentication]  
[-EnableUpdate ]  
[-IsPasswordExpirySmartDL]  
[-ExpirationRange ]  
[-DomainExpiration ]  
[-MaximumPasswordAge ]  
[-MinimumPasswordAge ]  
[-IncludeDisabledUsers ]  
[-IncludePasswordNeverExpireUsers ]  
[-SendEmail ]  
[-EmailTemplatePath ]  
[-Script ]  
[-ScriptFilePath ]  
[-Provider_Container ]  
[-PowerTools ]  
[-KeyMapAD ]  
[-KeyMapDB ]  
[-ExtendGroupLife]  
[-ExpirationPolicy ]  
[-MsExchCoManagedByLink ]  
[-IsExpired ]  
[-GroupScope ]  
[-Type ]  
[-Prefix ]  
[-SecurityType ]  
[-ManagedBy ]  
[-MaxSendSize ]  
[-AcceptMessagesOnlyFrom ]  
[-RejectMessagesFrom ]  
[-AcceptMessagesOnlyFromGroups ]  
[-RejectMessagesFromGroup ]  
[-AdditionalOwners ]  
[-NotifyOptOutAdditionalOwners ]  
[-ExpansionServer ]  
[-BypassOwnersPolicy ]  
[-MsExchRequireAuthToSendTo ]  
[-HiddenFromAddressListEnabled ]  
[-SendOofMessageToOriginatorEnabled ]  
[-HideMembershipFromAddressListEnabled ]  
[-ReportToManagerEnabled ]  
[-ReportToOriginatorEnabled ]  
[-UpdateMembershipByManagerEnabled ]  
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
[-Credential  ]  
[]
```
## Required Parameter

* Identity

Example 1:

The following command modifies a Smart Group by adding **Administrator** statically in the group membership, regardless of whether it is returned by the query, using the credentials of current user logged-on to the identity store.

```
Set-SmartGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -IncludeRecipients "CN=Administrator,CN=Users,DC=HR,DC=Imanami,DC=US"
```
Example 2:

The following command modifies the LDAP query of a Smart Group to retrieve all mail-enabled objects that are members of the group **Training**, using the credentials set in the **$Credentials** environment variable.

```
Set-SmartGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ObjectTypes "ExchangeUsers","ExternalUsers","ExternalContacts","EmailGroups" -LdapFilter "(MemberOf=Training)" -Credential $Cred
```
Example 3:

The following command modifies the Password Expiry group using the credentials of current user logged-on to the identity store. To be added are those users who reside in the containers specified in the **Add** parameter (including sub-containers) and whose password is 20 days or more older and set to never expire.

```
Set-SmartGroup -Identity "CN=Password_Expiry,OU=Recruiting,OU=HR,DC=Imanami,DC=US" -Add @{SearchContainers="OU=Recruiting,OU=HR,DC=Imanami,DC=US#2","OU=Outsourcing,OU=HR,DC=Imanami,DC=US#2" -IsPasswordExpirySmartDL -DomainExpiration 30 -ExpirationRange 10 -IncludePasswordNeverExpireUsers True]
```
Example 4:

The following command modifies the membership of a Smart Group based on the script given in the script file.

```
Set-SmartGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" –ScriptFilePath "c:\MembershipUpdateScript.vb"
```
Example 5:

The following command overwrites the **Includes** and **Excludes** lists of a Smart Group by adding two groups in the Includes list and one group in the Excludes list.

```
Set-SmartGroup -Identity "CN=imrantest, OU=Testit, DC=minion,DC=local" –Replace @{Includes = "CN=Shizasss,CN=Users,DC=minion,DC=Local","CN=ShezaOfc,CN=Users,DC=minion,DC=Local" ; Excludes="CN=Administrator,CN=Users,DC=minion,DC=local" , "CN=TestMailbox,CN=Users,DC=minion,DC=local"]  

```
Exampe 6:

The following command modifies lists of members a Smart Group can accept and reject messages from.

```
Set-SmartGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" –Add @{ RejectMessagesFrom = "CN=Roger_Manson,OU=ResignedStaff,DC=HR,DC=Imanami,DC=US"} -Add @(AcceptMessageOnlyFrom = "CN=PKWing,OU=Recruiting,DC=HR,DC=Imanami,DC=US","CN=USWing,OU=Recruiting,DC=HR,DC=Imanami,DC=US")
```
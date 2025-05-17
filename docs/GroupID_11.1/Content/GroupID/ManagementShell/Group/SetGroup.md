---
sidebar_position: 7056
title: Set-Group
---

# Set-Group

The Set-Group commandlet modifies an unmanaged group in directory. However, you can use this commandlet to modify those parameters of a Smart Group that are native attributes of an unmanaged group in Directory. For modifying Smart Group-specific attributes, you can use the [Set-SmartGroup](../SmartGroup/SetSmartGroup "Set-SmartGroup") commandlet.

You can view events related to this commandlet in Directory Manager portal, against the History node in the left panel.

## Syntax

```
Set-Group  
-Identity   
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
[-Credential ]  
[]
```
## Required Parameter

* Identity

Example 1:

The following command changes the expiration policy of the Training group to 60 days and assigns a manager to the group, using the credentials of current user logged-on to the identity store.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ExpirationPolicy "60" -ExtendGroupLife -ManagedBy "CN=John Smith,CN=Users,DC=HR,DC=Imanami,DC=US"
```
Example 2:

The following command expires the group Training, using the credentials set in the $Credentials environment variable. See the [Set the $Credentials Environment Variable](../Parameters/SettheCredential "Set the $Credentials Environment Variable") topic for setting credentials in an environment variable.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -IsExpired True -Credential $Cred
```
Example 3:

The following command gets all groups in the container Recruiting, clears their additional owner lists and sets their expiration policy to Never Expire. The OUT-NULL commandlet has been used to prevent the retrieved groups information from appearing on the console.

```
Get-Group -searchcontainer "OU=Recruiting,DC=HR,DC=Imanami,DC=US" | Set-Group -AdditionalOwners "" -ExpirationPolicy "0" -ExtendGroupLife | OUT-NULL
```
Example 4:

The following command removes two additional owners from the Training group and adds three new additional owners to the group and excludes an additional owner from receiving e-mail notifications.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Remove @{AdditionalOwners = "CN=Roger_Manson,OU=ResignedStaff,DC=HR,DC=Imanami,DC=US","KillenEdward"} -Add @{AdditionalOwners = "RobinSoto","MeganFox","DollyChan"} -NotifyOptOutAdditionalOwners "RobinSoto"
```
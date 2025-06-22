# Convert-Group

The Convert-Group commandlet converts an unmanaged group to a Smart Group.

Directory Manager Management Shell prompts for the identity of the unmanaged group you want to
convert into a Smart Group. After executing, the commandlet displays the status that update is
successful as shown in the following snapshot:

![managementshell](/img/product_docs/directorymanager/directorymanager/managementshell/group/managementshell.webp)

The converted Smart Group will not have an LDAP query attached to it. You have to define it
manually.

## Syntax

```
Convert-Group
-Identity <string>
[-SearchContainers <string[]>]
[-SearchContainersScopeList <string[]>]
[-ObjectTypes <string[]>]
[-LdapFilter <string>]
[-IncludeRecipients <string[]>]
[-ExcludeRecipients <string[]>]
[-Storage <string>]
[-DataSourceType <string>]
[-SystemDSN <string>]
[-TableOrView <string>]
[-DataSourceUserName <string>]
[-DataSourcePassword <string>]
[-FilePath <string>]
[-Server <string>]
[-Port <int>]
[-LDAPSearchContainer <string>]
[-DataSourceName <string>]
[-DataSourceQuery <string>]
[-WindowsAuthentication]
[-EnableUpdate <string>]
[-IsPasswordExpirySmartDL]
[-ExpirationRange <int>]
[-DomainExpiration <int>]
[-MaximumPasswordAge <int>]
[-MinimumPasswordAge <int>]
[-IncludeDisabledUsers <string>]
[-IncludePasswordNeverExpireUsers <string>]
[-SendEmail <string>]
[-EmailTemplatePath <string>] [-Script <string>]
[-ScriptFilePath <string>]
[-Provider_Container <string>]
[-PowerTools <ArrayList>]
[-KeyMapAD <string>]
[-KeyMapDB <string>]
[-ExtendGroupLife]
[-ExpirationPolicy <int>]
[-MsExchCoManagedByLink <string[]>]
[-IsExpired <string>]
[-GroupScope <string>]
[-Type <string>]
[-Prefix <string>]
[-SecurityType <string>]
[-ManagedBy <string[]>]
[-MaxSendSize <int>]
[-AcceptMessagesOnlyFrom <string[]>]
[-RejectMessagesFrom <string[]>]
[-AcceptMessagesOnlyFromGroups <string[]>]
[-RejectMessagesFromGroup <string[]>]
[-AdditionalOwners <string[]>]
[-NotifyOptOutAdditionalOwners <string[]>]
[-ExpansionServer <string>]
[-BypassOwnersPolicy <string>]
[-MsExchRequireAuthToSendTo <string>]
[-HiddenFromAddressListEnabled <string>]
[-SendOofMessageToOriginatorEnabled <string>]
[-HideMembershipFromAddressListEnabled <string>]
[-ReportToManagerEnabled <string>]
[-ReportToOriginatorEnabled <string>]
[-UpdateMembershipByManagerEnabled <string>]
[-Add <hashtable[]>]
[-Remove <hashtable[]>]
[-Replace <hashtable[]>]
[-Clear <string[]>]
[-Department <string>]
[-Company <string>]
[-Assistant <string>]
[-HomePage <string>]
[-Alias <string>]
[-EmailAddress <string>]
[-Description <string>]
[-Notes <string>]
[-AdministrativeNotes <string>]
[-DisplayName <string>]
[-SimpleDisplayName <string>]
[-CustomAttribute1 <string>]
[-CustomAttribute2 <string>]
[-CustomAttribute3 <string>]
[-CustomAttribute4 <string>]
[-CustomAttribute5 <string>]
[-CustomAttribute6 <string>]
[-CustomAttribute7 <string>]
[-CustomAttribute8 <string>]
[-CustomAttribute9 <string>]
[-CustomAttribute10 <string>]
[-CustomAttribute11 <string>]
[-CustomAttribute12 <string>]
[-CustomAttribute13 <string>]
[-CustomAttribute14 <string>]
[-CustomAttribute15 <string>]
[-Delimiter <string>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following commandlet converts a group _Clay2_ group to a Smart Group using the credentials of
current logged-on user.

```
Convert-Group -Identity "Clay2" -Credential $Cred
```

# Expire-Group

The Expire-Group commandlet expires a group temporarily. All notifications to the expired group will
be stopped.

You can view events related to this commandlet in Directory Manager portal, against the History node
in the left panel.

## Syntax

```
Expire-Group
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command expires the specified group from the connected identity store.

```
Expire-Group –Identity "CN=Training,OU=Local Recruiting,DC=HR,DC=Imanami,DC=US"
```

# Get-Group

This Get-Group commandlet retrieves both managed and unmanaged groups that are in one or more
containers in the identity store matching the given criteria.

## Syntax

```
Get-Group
[[-Identity] <string[]>]
[-SearchContainer <string[]>]
[-SearchContainersScopeList <string>]
[-ShouldReturnCollection]
[-MaxItemsToDisplay <int>]
[-ObjectType <string[]>]
[-LdapFilter <string>]
[-SmartFilter <string>]
[-ServerFilter <string>]
[-AttributesToLoad <string[]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

The following command retrieves all groups in the base container specified by the SearchContainer
parameter including its sub-containers, using the credentials of logged-in user.

```
Get-Group -SearchContainer "OU=Recuriting,DC=HR,DC=Imanami,DC=US"
```

Example 2:

The following command retrieves all groups with a display name beginning with S in the base
containers specified by the SearchContainer parameter including sub-containers of the first base
container and excluding sub-containers of the second one using the credentials set in the
$Credentials environment variable. See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.1/powershell-reference/setthecredential.md) topic for setting
credentials in an environment variable.

```
Get-Group -SearchContainer "OU=Recuriting,DC=HR,DC=Imanami,DC=US","OU=OutSourcing,DC=HR,DC=Imanami,DC=US" -SearchContainersScopeList "2","1" -LdapFilter "(DisplayName = S*)" -Credential $Cred
```

Example 3:

The following command retrieves all Smart Groups from the connected identity store with Security
Type Private and John Smith as their additional owner. The OUT-NULL commandlet is useful for
preventing the retrieved groups' information from appearing on the console.

```
Get-Group -SmartFilter "(SecurityType = Private)" | Set-Group -AdditionalOwners "CN=JohnSmith,DC=HR,DC=Imanami,DC=US" | OUT-NULL
```

# Move-Group

The Move-Group commandlet enables you to move a group to a different container in the same domain or
in a different domain within the same forest. Movement of groups across forests is not allowed.

You can view events related to this commandlet in Directory Manager portal, against the History node
in the left panel.

## Syntax

```
Move-Group
-Identity <string>
-DestinationContainer <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameters

- Identity
- DestinationContainer

Example 1:

The following command moves the group _Training_ to the _Local Recruiting_ organizational unit using
the credentials of current user logged-on to the identity store.

```
Move-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -DestinationContainer "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

Example 2:

The following command moves the group _Training_ to the _OffShore Recruiting_ organizational unit.
The command uses the credentials set in the $Credentials environment variable for moving a group.
See the [Set the $Credentials Environment Variable](/docs/directorymanager/11.1/powershell-reference/setthecredential.md) topic for
setting credentials in an environment variable.

```
Move-Group -Identity "CN=Training,OU=Local Recruiting,DC=HR,DC=Imanami,DC=US" -DestinationContainer "OU=OffShore Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

# New-Group

Use the New-Group commandlet to create a new unmanaged group in a particular container in directory.

You can view events related to this commandlet in Directory Manager portal, against the History node
in the left panel.

## Syntax

```
New-Group
-SamAccountName <string>
-Name <string>
-OrganizationalUnit <string>
-GroupScope <string>
-Type <string>
-SecurityType <string>
[-GroupAlias <string>]
[-ManagedBy <string[]>]
[-DisplayName <string>]
[-MailEnabled <string>]
[-Description <string>]
[-AdditionalOwners <string[]>]
[-NotifyOptOutAdditionalOwners <string[]>]
[-Members <string[]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameters

- SamAccountName
- Name
- OrganizationalUnit
- GroupScope
- Type
- SecurityType

Example 1:

The following command creates a new unmanaged, mail-disabled, global, distribution group in the
container specified by the **OrganizationalUnit** parameter, using the credentials of current user
logged-on to the identity store.

```
New-Group -Name "Event Management" -OrganizationalUnit "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -GroupAlias "EventManagement" -SamAccountName "Event Management" -GroupScope "Global Group" -Type "Distribution"
```

Example 2:

The command below creates a new mail-enabled, domain-local, semi-private, security group in the
container specified by the **OrganizationalUnit** parameter, using the credentials set in the
**$Credentials** environment variable. See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.1/powershell-reference/setthecredential.md) topic for setting
credentials in an environment variable.

```
New-Group -Name "Enrollment" -OrganizationalUnit "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -GroupAlias "Enrollment" -MailEnable True -SamAccountName "Enrollment" -GroupScope "Domain Local" -Type "Security" -SecurityType "Semi_Private"
```

# Group Commands

This section covers cmdlets for performing tasks related to managed and unmanaged groups.

- [Convert-Group](/docs/directorymanager/11.1/powershell-reference/group-cmdlets.md) – Converts an unmanaged group to a Smart Group.
- [Expire-Group](/docs/directorymanager/11.1/powershell-reference/group-cmdlets.md) – Expires a group temporarily.
- [Get-Group](/docs/directorymanager/11.1/powershell-reference/group-cmdlets.md) – Retrieves groups from one or more containers.
- [Move-Group](/docs/directorymanager/11.1/powershell-reference/group-cmdlets.md) – Moves a group to a different container in the same domain or in a
  different domain.
- [New-Group](/docs/directorymanager/11.1/powershell-reference/group-cmdlets.md) – Creates an unmanaged group.
- [Remove-Group](/docs/directorymanager/11.1/powershell-reference/group-cmdlets.md) – Deletes a managed group, unmanaged group, or Dynasty in the
  directory.
- [Renew-Group](/docs/directorymanager/11.1/powershell-reference/group-cmdlets.md) – Reactivates an expired group.
- [Set-Group](/docs/directorymanager/11.1/powershell-reference/group-cmdlets.md) – Modifies an unmanaged group in the directory.

# Remove-Group

Use this commandlet to delete a group (managed or unmanaged) or Dynasty in directory. Removing a
parent Dynasty using this commandlet removes all its children as well.

You can view events related to this commandlet in Directory Manager portal, against the History node
in the left panel.

## Syntax

## Required Parameter

```
Remove-Group
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

- Identity

Example 1:

The following command removes the Event Management group, using the credentials of current user
logged-on to the identity store.

```
Remove-Group -identity "OU=Event Management,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

Example 2:

The following command first shows the changes that will be made by executing the command (a
deletion). The command uses the credentials set in the $Credentials environment variable to perform
the deletion. See the [Set the $Credentials Environment Variable](/docs/directorymanager/11.1/powershell-reference/setthecredential.md)
topic for setting credentials in an environment variable.

```
Remove-Group -identity "OU=Event Management,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

# Renew-Group

The Renew-Group re-activates an expired group.

You can view events related to this commandlet in Directory Manager portal, against the History node
in the left panel.

## Syntax

```
Renew-Group
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command renews the specified group in the connected identity store.

```
Renew-Group -Identity "CN=Training,OU=Local Recruiting,DC=HR,DC=Imanami,DC=US"
```

# Set-Group

The Set-Group commandlet modifies an unmanaged group in directory. However, you can use this
commandlet to modify those parameters of a Smart Group that are native attributes of an unmanaged
group in Directory. For modifying Smart Group-specific attributes, you can use the
[Set-SmartGroup](/docs/directorymanager/11.1/powershell-reference/setsmartgroup.md) commandlet.

You can view events related to this commandlet in Directory Manager portal, against the History node
in the left panel.

## Syntax

```
Set-Group
-Identity <string>
[-ExtendGroupLife]
[-ExpirationPolicy <int>]
[-MsExchCoManagedByLink <string[]>]
[-IsExpired <string>]
[-GroupScope <string>]
[-Type <string>]
[-Prefix <string>]
[-SecurityType <string>]
[-ManagedBy <string[]>]
[-MaxSendSize <int>]
[-AcceptMessagesOnlyFrom <string[]>]
[-RejectMessagesFrom <string[]>]
[-AcceptMessagesOnlyFromGroups <string[]>]
[-RejectMessagesFromGroup <string[]>]
[-AdditionalOwners <string[]>]
[-NotifyOptOutAdditionalOwners <string[]>]
[-ExpansionServer <string>]
[-BypassOwnersPolicy <string>]
[-MsExchRequireAuthToSendTo <string>]
[-HiddenFromAddressListEnabled <string>]
[-SendOofMessageToOriginatorEnabled <string>]
[-HideMembershipFromAddressListEnabled <string>]
[-ReportToManagerEnabled <string>]
[-ReportToOriginatorEnabled <string>]
[-UpdateMembershipByManagerEnabled <string>]
[-Add <hashtable[]>]
[-Remove <hashtable[]>]
[-Replace <hashtable[]>]
[-Clear <string[]>]
[-Department <string>]
[-Company <string>]
[-Assistant <string>]
[-HomePage <string>]
[-Alias <string>]
[-EmailAddress <string>]
[-Description <string>]
[-Notes <string>]
[-AdministrativeNotes <string>]
[-DisplayName <string>]
[-SimpleDisplayName <string>]
[-CustomAttribute1 <string>]
[-CustomAttribute2 <string>]
[-CustomAttribute3 <string>]
[-CustomAttribute4 <string>]
[-CustomAttribute5 <string>]
[-CustomAttribute6 <string>]
[-CustomAttribute7 <string>]
[-CustomAttribute8 <string>]
[-CustomAttribute9 <string>]
[-CustomAttribute10 <string>]
[-CustomAttribute11 <string>]
[-CustomAttribute12 <string>]
[-CustomAttribute13 <string>]
[-CustomAttribute14 <string>]
[-CustomAttribute15 <string>]
[-Delimiter <string>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example 1:

The following command changes the expiration policy of the Training group to 60 days and assigns a
manager to the group, using the credentials of current user logged-on to the identity store.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ExpirationPolicy "60" -ExtendGroupLife -ManagedBy "CN=John Smith,CN=Users,DC=HR,DC=Imanami,DC=US"
```

Example 2:

The following command expires the group Training, using the credentials set in the $Credentials
environment variable. See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.1/powershell-reference/setthecredential.md) topic for setting
credentials in an environment variable.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -IsExpired True -Credential $Cred
```

Example 3:

The following command gets all groups in the container Recruiting, clears their additional owner
lists and sets their expiration policy to Never Expire. The OUT-NULL commandlet has been used to
prevent the retrieved groups information from appearing on the console.

```
Get-Group -searchcontainer "OU=Recruiting,DC=HR,DC=Imanami,DC=US" | Set-Group -AdditionalOwners "" -ExpirationPolicy "0" -ExtendGroupLife | OUT-NULL
```

Example 4:

The following command removes two additional owners from the Training group and adds three new
additional owners to the group and excludes an additional owner from receiving e-mail notifications.

```
Set-Group -Identity "CN=Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Remove @{AdditionalOwners = "CN=Roger_Manson,OU=ResignedStaff,DC=HR,DC=Imanami,DC=US","KillenEdward"} -Add @{AdditionalOwners = "RobinSoto","MeganFox","DollyChan"} -NotifyOptOutAdditionalOwners "RobinSoto"
```

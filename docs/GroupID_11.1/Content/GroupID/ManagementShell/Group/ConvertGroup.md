---
sidebar_position: 7055
title: Convert-Group
---

# Convert-Group

The Convert-Group commandlet converts an unmanaged group to a Smart Group.

Directory Manager Management Shell prompts for the identity of the unmanaged group you want to convert into a Smart Group. After executing, the commandlet displays the status that update is successful as shown in the following snapshot:

![](../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/ManagementShell/ManagementShell.png)

The converted Smart Group will not have an LDAP query attached to it. You have to define it manually.

## Syntax

```
Convert-Group  
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
[-EmailTemplatePath ] [-Script ]  
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
[-Credential ]  
[]
```
## Required Parameter

* Identity

Example:

The following commandlet converts a group *Clay2* group to a Smart Group using the credentials of current logged-on user.

```
Convert-Group -Identity "Clay2" -Credential $Cred
```
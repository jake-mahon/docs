---
sidebar_position: 7029
title: Set-Dynasty
---

# Set-Dynasty

The Set-Dynasty commandlet lets you to modify a Dynasty or its children in Directory.

Directory Manager maintains a history for this commandlet, which you can view against the History node in the left panel.

## Syntax

```
Set-Dynasty  
-Identity   
[-GroupBy ]  
[-AliasTemplate ]  
[-DisplayNameTemplate ]  
[-InheritanceBehaviour  
{InheritSelectedAttributeOnCreation |  
AlwaysInheritSelectedAttributes |  
NeverInheritSelectedAttributes}]  
[-TopManager ]  
[-ChildContainer ]  
[-ExcludeNestedLists ]  
[-CreateFlatManagerialList ]  
[-IncludeManagerAsMember ]  
[-Filters ]  
[-Separator ]  
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
[-Credential ]  
[]
```
## Required Parameter

* Identity

Example 1:

The following command modifies the Departmental Dynasty by changing the Group-by attributes list using the credentials of current user logged-on to the identity store.

```
Set-Dynasty -Identity "CN=DepartmentalOU=Recruiting,DC=HR,DC=Imanami,DC=US" -GroupBy "Department","Company","Title"
```
Example 2:

The command below modifies the Top Manager of a Managerial Dynasty, changes the alias name and display name templates for the Dynasty children, sets the scope to search Dynasty children in the containers specified in the Add parameter excluding sub-containers using the credentials set in the $Credentials environment variable. See the [Set the $Credentials Environment Variable](../Parameters/SettheCredential "Set the $Credentials Environment Variable") topic for setting credentials in an environment variable.

```
Set-Dynasty -Identity "CN=Managerial,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -TopManager "CN=Administrator,CN=Users,DC=HR,DC=Imanami,DC=US" -Add @{ SearchContainers="OU=Recruiting,OU=HR,DC=Imanami,DC=US#1","OU=Outsourcing,OU=HR,DC=Imanami,DC=US#1"}-ExcludeNestedLists False -ChildContainer "" -AliasTemplate "%Manager% -DirectReports" -DisplayNameTemplate "Direct reports of %Manager%" -Credential $Cred
```
Example 3:

The following command modifies the search criteria for the Managerial Dynasty to retrieve all mail-enabled objects who are the member of the Training group.

```
Set-Dynasty -Identity "CN=Managerial,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ObjectTypes "ExchangeUsers","ExternalUsers","ExternalContacts","EmailGroups" -LdapFilter "(MemberOf=Training)"
```
Example 4:

The following command adds three group-by levels to an Organizational Dynasty.

```
Set-Dynasty -Identity "CN=Organizational,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Add @{GroupBy="Company#OU=Recruiting,DC=HR,DC=Imanami,DC=US#Left 3#-","Department#OU=Recruiting,DC=HR,DC=Imanami,DC=US#Right 5#-","OU=Recruiting,DC=HR,DC=Imanami,DC=US#With %GROUPBY%\*#^"}
```
Example 5:

The following command modifies additional owners, Includes and Excludes lists and replaces Search Scope of a Managerial Dynasty.

```
Set- Dynasty -Identity "CN=Managerial,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Add @{AdditionalOwners="CN=Roger Manson,OU=Recruiting,OU=HR,DC=Imanami,DC=US","Robin Soto"; Includes="USWing","PKWing"; Excludes="UAEWing"} -Replace @{SearchContainers="OU=Recruiting,OU=HR,DC=Imanami,DC=US#1","OU=Outsourcing,OU=HR,DC=Imanami,DC=US#1"}
```
Example 6:

The following command clears the groups specified in the Includes list of a Managerial Dynasty.

```
Set-Dynasty -Identity "CN=Managerial,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Clear "Includes"
```
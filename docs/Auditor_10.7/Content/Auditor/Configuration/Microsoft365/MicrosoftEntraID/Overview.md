---
sidebar_position: 1897
title: Microsoft Entra ID
---

Filter: 

* All Files

Submit Search

# Microsoft Entra ID

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and access auditing requires a certain configuration of native audit settings in the audited environment and on the Auditor console computer. Configuring your IT infrastructure may also include enabling certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See the [Antivirus Exclusions for Netwrix Auditor](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HirCAE.html "Antivirus Exclusions for Netwrix Auditor") knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

* Automatically through a monitoring plan – This is a recommended method. If you select to automatically configure audit in the target environment, your current audit settings will be checked on each data collection and adjusted if necessary.
* Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or configure them manually:

  * Unified audit log must be enabled for a Tenant. See the Microsoft [Turn auditing on or off](https://docs.microsoft.com/en-us/microsoft-365/compliance/turn-audit-log-search-on-or-off?view=o365-worldwide) article for additional information.
  * While no special settings are required. Remember to do the following:

    * Prepare a Data Collecting Account as described in [Permissions for Microsoft Entra ID Auditing](Permissions "Permissions for Microsoft Entra ID Auditing") topic
    * Configure required protocols and ports, as described in the [Microsoft Entra ID Ports](Ports "Microsoft Entra ID Ports") topic

## Monitored Object Types and Attributes

See the full list of object types and attributes monitored by Microsoft Entra ID.

Collected properties for snapshot

Users properties:

```
manager,userPrincipalName,accountEnabled,ageGroup,assignedLicenses,assignedPlans,  
identities,passwordProfile,businessPhones,city,companyName,consentProvidedForMinor,  
country,department,displayName,employeeId,faxNumber,givenName,imAddresses,jobTitle,  
legalAgeGroupClassification,mail,mailNickname,mobilePhone,onPremisesDistinguishedName,  
onPremisesImmutableId,onPremisesLastSyncDateTime,onPremisesSecurityIdentifier,  
onPremisesSyncEnabled,onPremisesDomainName,onPremisesSamAccountName,onPremisesUserPrincipalName,  
otherMails,passwordPolicies,officeLocation,postalCode,preferredLanguage,provisionedPlans,proxyAddresses,  
showInAddressList,state,streetAddress,surname,usageLocation,userType,lastPasswordChangeDateTime,  
createdDateTime,externalUserState,externalUserStateChangeDateTime,isResourceAccount,licenseAssignmentStates,  
refreshTokensValidFromDateTime,signInSessionsValidFromDateTime,id  

```
Groups properties:

```
members,classification,createdDateTime,description,displayName,groupTypes,  
mail,mailEnabled,mailNickname,onPremisesLastSyncDateTime,  
onPremisesSecurityIdentifier,onPremisesSyncEnabled,proxyAddresses,  
renewedDateTime,securityEnabled,visibility,resourceProvisioningOptions,id            
```
Devices properties:

```
displayName,deviceId,deviceMetadata,deviceVersion,manufacturer,model,operatingSystem,  
operatingSystemVersion,profileType,trustType,accountEnabled,isCompliant,isManaged,id  
            
```
DirectoryRoles properties:

```
description,displayName,roleTemplateId,id,members  
            
```
DirectoryRoleTemplates properties:

```
displayName,description,id  
            
```
SubscribedSkus properties:

```
capabilityStatus,consumedUnits,prepaidUnits,servicePlans,skuId,skuPartNumber,appliesTo,id  
            
```
ServicePrincipals properties:

```
accountEnabled,appId,appRoles,displayName,homepage,oauth2PermissionScopes,  
 servicePrincipalNames,servicePrincipalType,tags,id  
            
```
| Data source | Data usage |
| --- | --- |
| Audit logs  Collected via MS Graph on endpoint */auditLogs/directoryaudits* | Activity Record: who, when and some event-based Activity Record |
| Sign-in logs  Collected via MS Graph on endpoint */auditLogs/signIns* | Logon Activity Record |
| Users changes  Collected via MS Graph on endpoint */users/delta/…* | Activity Record for users |
| Groups changes  Collected via MS Graph on endpoint */groups/delta/…* | Activity Record for groups |
| Groups membership changes  Collected via MS Graph on endpoint */groups/delta?$deltaToken=latest&$select=members&$expand=members* | Activity Record for groups membership |
| All Users  Collected via MS Graph on endpoint */users/delta/…* | Snapshot for users.  Used for previous values in users Activity Record.  Used in SSRS (SQL Server Reporting Services) report "Entra ID Accounts – Attributes" |
| All Groups and membership  Collected via MS Graph on endpoint */groups/delta/…&$expand=members* | Snapshot for groups and membership  Groups snapshot used for previous values in groups Activity Record. |
| All devices  Collected via MS Graph on endpoint */devices* | Snapshot for "Not used" devices. |
| All service principals  Collected via MS Graph on endpoint */servicePrincipals* | Snapshot for service principals. |
| All directory role templates  Collected via MS Graph on endpoint */directoryRoleTemplates*  All directory roles  Collected via MS Graph on endpoint */directoryRoles/delta* | Snapshot for Entra ID directory roles  Used in SSRS (SQL Server Reporting Services) report "Entra ID roles and their members" |
| All SKUs  Collected via MS Graph on endpoint */subscribedSkus* | Snapshot for SKUs  Used in SSRS report "Entra ID roles and their members" |
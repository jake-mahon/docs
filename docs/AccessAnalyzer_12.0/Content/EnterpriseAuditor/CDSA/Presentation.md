---
sidebar_position: 4904
title: Presentation Dependencies
---

# Presentation Dependencies

In the following subsections, each slide is aligned to the jobs that supply its data. The slide number is specific to the **Netwrix\_CDSA\_Presentation.pptx** file, as there are slight various in page numbering with the files designed to be saved as PDFs. Many jobs contribute to multiple slides, so jobs are highlighted in bold text the first time they are listed.

## Executive Summary Slide

The Executive Summary slide (Slide 1) has no data points.

## Netwrix Credential and Data Security Assessment (CDSA) Slide

The Netwrix Credential and Data Security Assessment (CDSA) slide (Slide 2) has no data points.

## Data Security Slide

The Data Security slide (Slide 3) has the following primary job dependencies:

* .Active Directory Inventory

  * **1-AD\_Scan**
* FileSystem

  * **0.Collection > 1-FSAA System Scans**
  * **0.Collection > 2-FSAA Bulk Import**

Data is also supplied by the following jobs when they have been executed:

* AWS

  * **0.Collection > 1.AWS\_OrgScan**
  * **0.Collection > 2.AWS\_S3Scan**
* Box

  * **0.Collection > 1-Box\_Access Scans**
  * **0.Collection > 2-Box\_Import**
* Databases

  * **0.Collection > Oracle > 0-Oracle\_Servers**
  * **0.Collection > Oracle > 1-Oracle\_PermissionsScan**
  * **0.Collection > SQL > 0-SQL\_InstanceDiscovery**
  * **0.Collection > SQL > 1-SQL\_PermissionsScan**
* Dropbox

  * **0.Collection > 1-Dropbox\_Permissions Scan**
  * **0.Collection > 2-Dropbox\_Permissions Bulk Import**
* Exchange

  * **4. Mailboxes > Sizing > 0. Collection > EX\_MBSize**
  * **5. Public Folders > Growth and Size > Collection > PF\_FolderScans**
* SharePoint

  * **0.Collection > 2-SPAA\_SystemScans**
  * **0.Collection > 5-SPAA\_BulkImport**

## Condition: Open Access Slide

The Condition: Open Access slide (Slide 4) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* FileSystem

  * 0.Collection > 1-FSAA System Scans
  * 0.Collection > 2-FSAA Bulk Import
  * **1.Open Access >FS\_OpenAccess**

Data is also supplied by the following jobs when they have been executed:

* AWS

  * 0.Collection > 1.AWS\_OrgScan
  * 0.Collection > 2.AWS\_S3Scan
  * **6.S3 Permissions > AWS\_OpenBuckets**
* Box

  * 0.Collection > 1-Box\_Access Scans
  * 0.Collection > 2-Box\_Import
* Databases

  * 0.Collection > Oracle > 0-Oracle\_Servers
  * 0.Collection > Oracle > 1-Oracle\_PermissionsScan
  * 0.Collection > SQL > 0-SQL\_InstanceDiscovery
  * 0.Collection > SQL > 1-SQL\_PermissionsScan
  * **Oracle > 3.Permissions > Oracle\_PublicPermissions**
  * **SQL > 3.Permissions > SQL\_PublicPermissions**
* Dropbox

  * 0.Collection > 1-Dropbox\_Permissions Scan
  * 0.Collection > 2-Dropbox\_Permissions Bulk Import
* Exchange

  * **4. Mailboxes > Permissions > 0. Collection > EX\_Delegates**
  * **4. Mailboxes > Permissions > 0. Collection > EX\_MBRights**
  * **4. Mailboxes > Permissions > 0. Collection > EX\_Perms**
  * **4. Mailboxes > Permissions > 0. Collection > EX\_SendAs**
  * **4. Mailboxes > Permissions > EX\_MailboxAccess**
  * 4. Mailboxes > Sizing > 0. Collection > EX\_MBSize
  * 5. Public Folders > Growth and Size > Collection > PF\_FolderScans
  * **5. Public Folders > Permissions > Collection > PF\_EntitlementScans**
* SharePoint

  * 0.Collection > 2-SPAA\_SystemScans
  * 0.Collection > 5-SPAA\_BulkImport
  * **2.High Risk Sites > SP\_OpenAccess**

## Sensitive Data Slide

The Sensitive Data slide (Slide 5) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* FileSystem

  * **0.Collection > 1-SEEK System Scans**
  * **0.Collection > 2-SEEK Bulk Import**
  * **7.Sensitive Data > FS\_DLPResults**

Data is also supplied by the following jobs when they have been executed:

* AWS

  * 0.Collection > 1.AWS\_OrgScan
  * **0.Collection > 4.AWS\_S3SDDScan**
  * **8.S3 Sensitive Data > AWS\_SensitiveData**
* Databases

  * 0.Collection > Oracle > 0-Oracle\_Servers
  * 0.Collection > Oracle > 1-Oracle\_PermissionsScan
  * **0.Collection > Oracle > 2-Oracle\_SensitiveDataScan**
  * 0.Collection > SQL > 0-SQL\_InstanceDiscovery
  * 0.Collection > SQL > 1-SQL\_PermissionsScan
  * **0.Collection > SQL > 2-SQL\_SensitiveDataScan**
  * **Oracle > 5.Sensitive Data > Oracle\_SensitiveData**
  * **SQL > 5.Sensitive Data > SQL\_SensitiveData**
* Dropbox

  * **0.Collection > 1-Dropbox\_SDD Scan**
  * **0.Collection > 2-Dropbox\_SDD Bulk Import**
  * **5.Sensitive Data > Dropbox SensitiveData**
* Exchange

  * **7. Sensitive Data > 0.Collection > EX\_Mailbox\_SDD**
  * **7. Sensitive Data > 0.Collection > EX\_PublicFolder\_SDD**
  * **7. Sensitive Data > EX\_SDDResults**
* SharePoint

  * **0.Collection > 1-SPSEEK\_SystemScans**
  * **0.Collection > 4-SPSEEK\_BulkImport**
  * **6.Sensitive Data > SP\_SensitiveData**

## Stale Data Slide

The Stale Data slide (Slide 6) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* FileSystem

  * 0.Collection > 1-FSAA System Scans
  * 0.Collection > 2-FSAA Bulk Import
  * **4.Content > Stale > FS\_StaleContent**

Data is also supplied by the following jobs when they have been executed:

* Box

  * 0.Collection > 1-Box\_Access Scans
  * 0.Collection > 2-Box\_Import
* Databases

  * 0.Collection > Oracle > 0-Oracle\_Servers
  * 0.Collection > Oracle > 1-Oracle\_PermissionsScan
  * 0.Collection > SQL > 0-SQL\_InstanceDiscovery
  * 0.Collection > SQL > 1-SQL\_PermissionsScan
* Dropbox

  * 0.Collection > 1-Dropbox\_Permissions Scan
  * 0.Collection > 2-Dropbox\_Permissions Bulk Import
* Exchange

  * **5. Public Folders > Content > Collection > PF\_ContentScans**
* SharePoint

  * 0.Collection > 2-SPAA\_SystemScans
  * 0.Collection > 5-SPAA\_BulkImport
  * **4.Content > SP\_StaleFiles**

## Active Directory Security Slide

The Active Directory Security slide (Slide 7) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* Active Directory Permissions Analyzer

  * **0.Collection > AD\_ComputerRights**
  * **0.Collection > AD\_ContainerRights**
  * **0.Collection > AD\_DomainRights**
  * **0.Collection > AD\_GroupRights**
  * **0.Collection > AD\_OURights**
  * **0.Collection > AD\_SiteRights**
  * **0.Collection > AD\_UserRights**

Data is also supplied by the following jobs when they have been executed:

* .Entra ID Inventory

  * **1-AAD\_Scan**

## Password Issues Slide

The Password Issues slide (Slide 8) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* Active Directory

  * **2.Users > AD\_WeakPasswords**
  * **2.Users > AD\_PasswordStatus**
  * **4.Group Policy > AD\_CPassword**

## Toxic Active Directory Conditions Slide

The Toxic Active Directory Conditions slide (Slide 9) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
  * **3-AD\_Exceptions**
* Active Directory

  * **1.Groups > AD\_CircularNesting**
  * **1.Groups > AD\_EmptyGroups**
  * **1.Groups > AD\_SensitiveSecurityGroups**
  * **1.Groups > AD\_StaleGroups**
  * **2.Users > AD\_SIDHistory**
  * **2.Users > AD\_StaleUsers**

## Non-Administrators that can Perform Sensitive AD Actions Slide

The Non-Administrators that can Perform Sensitive AD Actions slide (Slide 10) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* Active Directory Permissions Analyzer

  * 0.Collection > AD\_ComputerRights
  * 0.Collection > AD\_ContainerRights
  * 0.Collection > AD\_DomainRights
  * 0.Collection > AD\_GroupRights
  * 0.Collection > AD\_OURights
  * 0.Collection > AD\_SiteRights
  * 0.Collection > AD\_UserRights
  * **1.Users > AD\_ResetPasswordPermissions**
  * **2.Groups > AD\_GroupMembershipPermissions**
  * **8.Domains > AD\_DomainReplication**

## Active Directory Sensitive Security Groups Slide

The Active Directory Sensitive Security Groups slide (Slide 11) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan

## Windows: Assessment Summary Slide

The Windows: Assessment Summary slide (Slide 12) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* Windows

  * **Authentication > SG\_LSASettings**
  * **Authentication > SG\_SecuritySupportProviders**
  * **Authentication > SG\_WDigestSettings**
  * **Open Access > SG\_OpenFolders**
  * **Privileged Accounts > Local Administrators > SG\_LocalAdmins**
  * **Privileged Accounts > Local Administrators > SG\_MicrosoftLAPS**
  * **Privileged Accounts > Logon Rights > SG\_LocalPolicies**
  * **Privileged Accounts > Service Accounts > SG\_ServiceAccounts**
  * **Security Utilities > SG\_PowerShellCommands**

## Local Administrators Slide

The Local Administrators slide (Slide 13) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* Windows

  * Privileged Accounts > Local Administrators > SG\_LocalAdmins
  * Privileged Accounts > Logon Rights > SG\_LocalPolicies

## Service Accounts Slide

The Service Accounts slide (Slide 14) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* Windows

  * Authentication > SG\_LSASettings
  * Authentication > SG\_WDigestSettings
  * Privileged Accounts > Service Accounts > SG\_ServiceAccounts
  * Security Utilities > SG\_PowerShellCommands

## Ticket and Credential Management Slide

The Ticket and Credential Management slide (Slide 15) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* Windows

  * Authentication > SG\_LSASettings
  * Authentication > SG\_WDigestSettings
  * Security Utilities > SG\_PowerShellCommands

## Shadow Access Rights Slide

The Shadow Access Rights slide (Slide 16) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* Active Directory

  * 1.Groups > AD\_SensitiveSecurityGroups
  * 2.Users > AD\_WeakPasswords
* Active Directory Permissions Analyzer

  * 0.Collection > AD\_ComputerRights
  * 0.Collection > AD\_ContainerRights
  * 0.Collection > AD\_DomainRights
  * 0.Collection > AD\_GroupRights
  * 0.Collection > AD\_OURights
  * 0.Collection > AD\_SiteRights
  * 0.Collection > AD\_UserRights
  * 1.Users > AD\_ResetPasswordPermissions
  * 2.Groups > AD\_GroupMembershipPermissions
  * **7.Containers > AD\_AdminSDHolder**
  * 8.Domains > AD\_DomainReplication
* FileSystem

  * 0.Collection > 1-SEEK System Scans
  * 0.Collection > 2-SEEK Bulk Import
  * 7.Sensitive Data > FS\_DLPResults
* Windows

  * Privileged Accounts > Local Administrators > SG\_LocalAdmins
  * **Privileged Accounts > Local Administrators > SG\_Sessions**

Data is also supplied by the following jobs when they have been executed:

* Databases

  * 0.Collection > SQL > 0-SQL\_InstanceDiscovery
  * 0.Collection > SQL > 1-SQL\_PermissionsScan
  * 0.Collection > SQL > 2-SQL\_SensitiveDataScan
  * SQL > 5.Sensitive Data > SQL\_SensitiveData

## Additional Findings (FS, AD, Windows OS) Slide

Slide 17 in the **Netwrix\_CDSA\_Presentation.pptx** file is hidden by default. It is recommended to use Slides 18-20 instead, even when the primary jobs are the only ones supplying data. Slide 17 is an alternative to slides 18-20. It has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* Active Directory

  * 1.Groups > AD\_StaleGroups
  * **2.Users > AD\_ServiceAccounts**
  * 2.Users > AD\_StaleUsers
  * **2.Users > AD\_UserToken**
  * **3.Computers > AD\_StaleComputers**
  * 4.Group Policy > AD\_CPassword
  * 8.Domains > AD\_DomainReplication
* FileSystem

  * 0.Collection > 1-FSAA System Scans
  * 0.Collection > 1-SEEK System Scans
  * 0.Collection > 2-FSAA Bulk Import
  * 0.Collection > 2-SEEK Bulk Import
  * **2.Direct Permissions > FS\_DomainUserACLs**
  * **3.Broken Inheritance > FS\_BrokenInheritance**
  * 4.Content > Stale > FS\_StaleContent
  * 7.Sensitive Data > FS\_DLPResults
* Windows

  * Authentication > SG\_LSASettings
  * Authentication > SG\_WDigestSettings
  * Privileged Accounts > Local Administrators > SG\_LocalAdmins
  * Privileged Accounts > Service Accounts > SG\_ServiceAccounts

## Additional Findings (FS, SharePoint, Box, Dropbox) Slide

The Additional Findings (FS, SharePoint, Box, Dropbox) slide (Slide 18) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* FileSystem

  * 0.Collection > 1-FSAA System Scans
  * 0.Collection > 1-SEEK System Scans
  * 0.Collection > 2-FSAA Bulk Import
  * 0.Collection > 2-SEEK Bulk Import
  * **2.Direct Permissions > FS\_DomainUserACLs**
  * **3.Broken Inheritance > FS\_BrokenInheritance**
  * 4.Content > Stale > FS\_StaleContent
  * 7.Sensitive Data > FS\_DLPResults

Data is also supplied by the following jobs when they have been executed:

* Box

  * 0.Collection > 1-Box\_Access Scans
  * 0.Collection > 2-Box\_Import
* Dropbox

  * 0.Collection > 1-Dropbox\_SDD Scan
  * 0.Collection > 2-Dropbox\_SDD Bulk Import
  * **1.Access > Dropbox\_Access**
* SharePoint

  * 0.Collection > 2-SPAA\_SystemScans
  * 0.Collection > 5-SPAA\_BulkImport
  * **2.High Risk Sites > SP\_AnonymousSharing**
  * 2.High Risk Sites > SP\_OpenAccess
  * **3.Broken Inheritance > SP\_BrokenInheritance**
  * 4.Content > SP\_StaleFiles
  * 7.Sensitive Data > SP\_SensitiveData

## Additional Findings (Exchange, Databases) Slide

The Additional Findings (Exchange, Databases) slide (Slide 19) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan

Data is also supplied by the following jobs when they have been executed:

* Databases

  * 0.Collection > Oracle > 0-Oracle\_Servers
  * 0.Collection > Oracle > 1-Oracle\_PermissionsScan
  * 0.Collection > Oracle > 2-Oracle\_SensitiveDataScan
  * 0.Collection > SQL > 0-SQL\_InstanceDiscovery
  * 0.Collection > SQL > 1-SQL\_PermissionsScan
  * 0.Collection > SQL > 2-SQL\_SensitiveDataScan
  * **Oracle > 1. Users and Roles > Oracle\_PasswordIssues**
  * Oracle > 3.Permissions > Oracle\_PublicPermissions
  * **Oracle > 4. Configuration > Oracle\_DataDictionaryProtection**
  * **Oracle > 4. Configuration > Oracle\_InstanceNameIssues**
  * **Oracle > 4. Configuration > Oracle\_RemoteOSAuthentication**
  * Oracle > 5.Sensitive Data > Oracle\_SensitiveData
  * **SQL > 1. Users and Roles > SQL\_PasswordIssues**
  * SQL > 3.Permissions > SQL\_PublicPermissions
  * **SQL > 4.Configuration > SQL\_Authentication**
  * **SQL > 4. Configuration > SQL\_BestPractices**
  * **SQL > 4.Configuration > SQL\_CMDShell**
  * SQL > 5.Sensitive Data > SQL\_SensitiveData
* Exchange

  * 4. Mailboxes > Permissions > 0. Collection > EX\_Delegates
  * 4. Mailboxes > Permissions > 0. Collection > EX\_MBRights
  * 4. Mailboxes > Permissions > 0. Collection > EX\_Perms
  * 4. Mailboxes > Permissions > 0. Collection > EX\_SendAs
  * **4. Mailboxes > Permissions > EX\_AdminGroups**
  * 4. Mailboxes > Permissions > EX\_MailboxAccess
  * **4. Mailboxes > Sizing > EX\_StaleMailboxes**
  * 5. Public Folders > Content > Collection > PF\_ContentScans
  * 5. Public Folders > Permissions > Collection > PF\_EntitlementScans
  * 7. Sensitive Data > 0.Collection > EX\_Mailbox\_SDD
  * 7. Sensitive Data > 0.Collection > EX\_PublicFolder\_SDD
  * 7. Sensitive Data > EX\_SDDResults

## Additional Findings (AD, Windows OS) Slide

The Additional Findings (AD, Windows OS) slide (Slide 20) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* Active Directory

  * 1.Groups > AD\_StaleGroups
  * **2.Users > AD\_ServiceAccounts**
  * 2.Users > AD\_StaleUsers
  * **2.Users > AD\_UserToken**
  * **3.Computers > AD\_StaleComputers**
  * 4.Group Policy > AD\_CPassword
  * 8.Domains > AD\_DomainReplication
* Windows

  * Authentication > SG\_LSASettings
  * Authentication > SG\_WDigestSettings
  * Privileged Accounts > Local Administrators > SG\_LocalAdmins

## Product Portfolio Slide

The Product Portfolio slide (Slide 21) has no data points.

## Path To Success Slide

The Path To Success slide (Slide 22) has no data points.

## Netwrix Slide

The Netwrix slide (Slide 23) has no data points.

## Thank You Slide

The Thank You slide (Slide 24) has no data points.

## Executive Summary: ePHI Security Assessment Slide

The Executive Summary: ePHI Security Assessment slide (Slide 25) has no data points.

## Netwrix ePHI Security Assessment Slide

The Netwrix ePHI Security Assessment slide (Slide 26) has no data points.

## ePHI Data Slide

The ePHI Data slide (Slide 27) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* FileSystem

  * 0.Collection > 1-SEEK System Scans
  * 0.Collection > 2-SEEK Bulk Import
  * **0.Collection > 3-FSAA-Exceptions**
  * 7.Sensitive Data > FS\_DLPResults

Data is also supplied by the following jobs when they have been executed:

* AWS

  * 0.Collection > 1.AWS\_OrgScan
  * 0.Collection > 4.AWS\_S3SDDScan
  * 8.S3 Sensitive Data > AWS\_SensitiveData
* Box

  * 0.Collection > 1-Box\_Access Scans
  * 0.Collection > 2-Box\_Import
* Databases

  * 0.Collection > Oracle > 0-Oracle\_Servers
  * 0.Collection > Oracle > 1-Oracle\_PermissionsScan
  * 0.Collection > Oracle > 2-Oracle\_SensitiveDataScan
  * 0.Collection > SQL > 0-SQL\_InstanceDiscovery
  * 0.Collection > SQL > 1-SQL\_PermissionsScan
  * 0.Collection > SQL > 2-SQL\_SensitiveDataScan
  * Oracle > 3.Permissions > Oracle\_PublicPermissions
  * Oracle > 5.Sensitive Data > Oracle\_SensitiveData
  * SQL > 3.Permissions > SQL\_PublicPermissions
  * SQL > 5.Sensitive Data > SQL\_SensitiveData
* Dropbox

  * 0.Collection > 1-Dropbox\_SDD Scan
  * 0.Collection > 2-Dropbox\_SDD Bulk Import
  * 5.Sensitive Data > Dropbox\_SensitiveData
* Exchange

  * 7. Sensitive Data > 0.Collection > EX\_Mailbox\_SDD
  * 7. Sensitive Data > 0.Collection > EX\_PublicFolder\_SDD
  * 7. Sensitive Data > SDDResults
  * 4. Mailboxes > Permissions > 0. Collection > EX\_Delegates
  * 4. Mailboxes > Permissions > 0. Collection > EX\_MBRights
  * 4. Mailboxes > Permissions > 0. Collection > EX\_Perms
  * 4. Mailboxes > Permissions > 0. Collection > EX\_SendAs
  * 4. Mailboxes > Permissions > EX\_MailboxAccess
* SharePoint

  * 0.Collection > 1-SPSEEK\_SystemScans
  * 0.Collection > 4-SPSEEK\_BulkImport
  * **0.Collection > 7-SPAA\_Exceptions**
  * 6.Sensitive Data > SP\_SensitiveData

## Condition: Stale Data Slide

The Condition: Stale Data slide (Slide 28) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* FileSystem

  * 0.Collection > 1-SEEK System Scans
  * 0.Collection > 2-SEEK Bulk Import
  * 7.Sensitive Data > FS\_DLPResults

Data is also supplied by the following jobs when they have been executed:

* Dropbox

  * 0.Collection > 1-Dropbox\_SDD Scan
  * 0.Collection > 2-Dropbox\_SDD Bulk Import
  * 5.Sensitive Data > Dropbox\_SensitiveData
* SharePoint

  * 0.Collection > 1-SPSEEK\_SystemScans
  * 0.Collection > 4-SPSEEK\_BulkImport
  * 6.Sensitive Data > SP\_SensitiveData

## AD Security Assessment Slide

The AD Security Assessment slide (Slide 29) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
  * 3-AD\_Exceptions
* Active Directory

  * 1.Groups > AD\_SensitiveSecurityGroups
  * 2.Users > AD\_WeakPasswords
  * 2.Users > AD\_PasswordStatus
  * 4.Group Policy > AD\_CPassword
* Active Directory Permissions Analyzer

  * 1.Users > AD\_ResetPasswordPermissions
  * 2.Groups > AD\_GroupMembershipPermissions
  * 8.Domains > AD\_DomainReplication

## Windows: Security Assessment Slide

The Windows: Security Assessment slide (Slide 30) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* Windows

  * Authentication > SG\_LSASettings
  * Authentication > SG\_WDigestSettings
  * Privileged Accounts > Local Administrators > SG\_LocalAdmins
  * Privileged Accounts > Service Accounts > SG\_ServiceAccounts

## Shadow Access Rights to ePHI Data Slide

The Shadow Access Rights to ePHI Data slide (Slide 31) has the following primary job dependencies:

* .Active Directory Inventory

  * 1-AD\_Scan
* Active Directory

  * 1.Groups > AD\_SensitiveSecurityGroups
  * 2.Users > AD\_WeakPasswords
* Active Directory Permissions Analyzer

  * 0.Collection > AD\_ComputerRights
  * 0.Collection > AD\_ContainerRights
  * 0.Collection > AD\_DomainRights
  * 0.Collection > AD\_GroupRights
  * 0.Collection > AD\_OURights
  * 0.Collection > AD\_SiteRights
  * 0.Collection > AD\_UserRights
  * 1.Users > AD\_ResetPasswordPermissions
  * 2.Groups > AD\_GroupMembershipPermissions
  * 7.Containers > AD\_AdminSDHolder
  * 8.Domains > AD\_DomainReplication
* FileSystem

  * 0.Collection > 1-SEEK System Scans
  * 0.Collection > 2-SEEK Bulk Import
  * 7.Sensitive Data > FS\_DLPResults
* Windows

  * Privileged Accounts > Local Administrators > SG\_LocalAdmins
  * Privileged Accounts > Local Administrators > SG\_Sessions

Data is also supplied by the following jobs when they have been executed:

* Databases

  * 0.Collection > SQL > 0-SQL\_InstanceDiscovery
  * 0.Collection > SQL > 1-SQL\_PermissionsScan
  * 0.Collection > SQL > 2-SQL\_SensitiveDataScan
  * SQL > 5.Sensitive Data > SQL\_SensitiveData
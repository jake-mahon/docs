# Presentation Dependencies

In the following subsections, each slide is aligned to the jobs that supply its data. The slide number is specific to the __Netwrix\_CDSA\_Presentation.pptx__ file, as there are slight various in page numbering with the files designed to be saved as PDFs. Many jobs contribute to multiple slides, so jobs are highlighted in bold text the first time they are listed.

## Executive Summary Slide

The Executive Summary slide (Slide 1) has no data points.

## Netwrix Credential and Data Security Assessment (CDSA) Slide

The Netwrix Credential and Data Security Assessment (CDSA) slide (Slide 2) has no data points.

## Data Security Slide

The Data Security slide (Slide 3) has the following primary job dependencies:

- .Active Directory Inventory

  - __1-AD\_Scan__
- FileSystem

  - __0.Collection > 1-FSAA System Scans__
  - __0.Collection > 2-FSAA Bulk Import__

Data is also supplied by the following jobs when they have been executed:

- AWS

  - __0.Collection > 1.AWS\_OrgScan__
  - __0.Collection > 2.AWS\_S3Scan__
- Box

  - __0.Collection > 1-Box\_Access Scans__
  - __0.Collection > 2-Box\_Import__
- Databases

  - __0.Collection > Oracle > 0-Oracle\_Servers__
  - __0.Collection > Oracle > 1-Oracle\_PermissionsScan__
  - __0.Collection > SQL > 0-SQL\_InstanceDiscovery__
  - __0.Collection > SQL > 1-SQL\_PermissionsScan__
- Dropbox

  - __0.Collection > 1-Dropbox\_Permissions Scan__
  - __0.Collection > 2-Dropbox\_Permissions Bulk Import__
- Exchange

  - __4. Mailboxes > Sizing > 0. Collection > EX\_MBSize__
  - __5. Public Folders > Growth and Size > Collection > PF\_FolderScans__
- SharePoint

  - __0.Collection > 2-SPAA\_SystemScans__
  - __0.Collection > 5-SPAA\_BulkImport__

## Condition: Open Access Slide

The Condition: Open Access slide (Slide 4) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- FileSystem

  - 0.Collection > 1-FSAA System Scans
  - 0.Collection > 2-FSAA Bulk Import
  - __1.Open Access >FS\_OpenAccess__

Data is also supplied by the following jobs when they have been executed:

- AWS

  - 0.Collection > 1.AWS\_OrgScan
  - 0.Collection > 2.AWS\_S3Scan
  - __6.S3 Permissions > AWS\_OpenBuckets__
- Box

  - 0.Collection > 1-Box\_Access Scans
  - 0.Collection > 2-Box\_Import
- Databases

  - 0.Collection > Oracle > 0-Oracle\_Servers
  - 0.Collection > Oracle > 1-Oracle\_PermissionsScan
  - 0.Collection > SQL > 0-SQL\_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL\_PermissionsScan
  - __Oracle > 3.Permissions > Oracle\_PublicPermissions__
  - __SQL > 3.Permissions > SQL\_PublicPermissions__
- Dropbox

  - 0.Collection > 1-Dropbox\_Permissions Scan
  - 0.Collection > 2-Dropbox\_Permissions Bulk Import
- Exchange

  - __4. Mailboxes > Permissions > 0. Collection > EX\_Delegates__
  - __4. Mailboxes > Permissions > 0. Collection > EX\_MBRights__
  - __4. Mailboxes > Permissions > 0. Collection > EX\_Perms__
  - __4. Mailboxes > Permissions > 0. Collection > EX\_SendAs__
  - __4. Mailboxes > Permissions > EX\_MailboxAccess__
  - 4. Mailboxes > Sizing > 0. Collection > EX\_MBSize
  - 5. Public Folders > Growth and Size > Collection > PF\_FolderScans
  - __5. Public Folders > Permissions > Collection > PF\_EntitlementScans__
- SharePoint

  - 0.Collection > 2-SPAA\_SystemScans
  - 0.Collection > 5-SPAA\_BulkImport
  - __2.High Risk Sites > SP\_OpenAccess__

## Sensitive Data Slide

The Sensitive Data slide (Slide 5) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- FileSystem

  - __0.Collection > 1-SEEK System Scans__
  - __0.Collection > 2-SEEK Bulk Import__
  - __7.Sensitive Data > FS\_DLPResults__

Data is also supplied by the following jobs when they have been executed:

- AWS

  - 0.Collection > 1.AWS\_OrgScan
  - __0.Collection > 4.AWS\_S3SDDScan__
  - __8.S3 Sensitive Data > AWS\_SensitiveData__
- Databases

  - 0.Collection > Oracle > 0-Oracle\_Servers
  - 0.Collection > Oracle > 1-Oracle\_PermissionsScan
  - __0.Collection > Oracle > 2-Oracle\_SensitiveDataScan__
  - 0.Collection > SQL > 0-SQL\_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL\_PermissionsScan
  - __0.Collection > SQL > 2-SQL\_SensitiveDataScan__
  - __Oracle > 5.Sensitive Data > Oracle\_SensitiveData__
  - __SQL > 5.Sensitive Data > SQL\_SensitiveData__
- Dropbox

  - __0.Collection > 1-Dropbox\_SDD Scan__
  - __0.Collection > 2-Dropbox\_SDD Bulk Import__
  - __5.Sensitive Data > Dropbox SensitiveData__
- Exchange

  - __7. Sensitive Data > 0.Collection > EX\_Mailbox\_SDD__
  - __7. Sensitive Data > 0.Collection > EX\_PublicFolder\_SDD__
  - __7. Sensitive Data > EX\_SDDResults__
- SharePoint

  - __0.Collection > 1-SPSEEK\_SystemScans__
  - __0.Collection > 4-SPSEEK\_BulkImport__
  - __6.Sensitive Data > SP\_SensitiveData__

## Stale Data Slide

The Stale Data slide (Slide 6) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- FileSystem

  - 0.Collection > 1-FSAA System Scans
  - 0.Collection > 2-FSAA Bulk Import
  - __4.Content > Stale > FS\_StaleContent__

Data is also supplied by the following jobs when they have been executed:

- Box

  - 0.Collection > 1-Box\_Access Scans
  - 0.Collection > 2-Box\_Import
- Databases

  - 0.Collection > Oracle > 0-Oracle\_Servers
  - 0.Collection > Oracle > 1-Oracle\_PermissionsScan
  - 0.Collection > SQL > 0-SQL\_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL\_PermissionsScan
- Dropbox

  - 0.Collection > 1-Dropbox\_Permissions Scan
  - 0.Collection > 2-Dropbox\_Permissions Bulk Import
- Exchange

  - __5. Public Folders > Content > Collection > PF\_ContentScans__
- SharePoint

  - 0.Collection > 2-SPAA\_SystemScans
  - 0.Collection > 5-SPAA\_BulkImport
  - __4.Content > SP\_StaleFiles__

## Active Directory Security Slide

The Active Directory Security slide (Slide 7) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- Active Directory Permissions Analyzer

  - __0.Collection > AD\_ComputerRights__
  - __0.Collection > AD\_ContainerRights__
  - __0.Collection > AD\_DomainRights__
  - __0.Collection > AD\_GroupRights__
  - __0.Collection > AD\_OURights__
  - __0.Collection > AD\_SiteRights__
  - __0.Collection > AD\_UserRights__

Data is also supplied by the following jobs when they have been executed:

- .Entra ID Inventory

  - __1-AAD\_Scan__

## Password Issues Slide

The Password Issues slide (Slide 8) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- Active Directory

  - __2.Users > AD\_WeakPasswords__
  - __2.Users > AD\_PasswordStatus__
  - __4.Group Policy > AD\_CPassword__

## Toxic Active Directory Conditions Slide

The Toxic Active Directory Conditions slide (Slide 9) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
  - __3-AD\_Exceptions__
- Active Directory

  - __1.Groups > AD\_CircularNesting__
  - __1.Groups > AD\_EmptyGroups__
  - __1.Groups > AD\_SensitiveSecurityGroups__
  - __1.Groups > AD\_StaleGroups__
  - __2.Users > AD\_SIDHistory__
  - __2.Users > AD\_StaleUsers__

## Non-Administrators that can Perform Sensitive AD Actions Slide

The Non-Administrators that can Perform Sensitive AD Actions slide (Slide 10) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- Active Directory Permissions Analyzer

  - 0.Collection > AD\_ComputerRights
  - 0.Collection > AD\_ContainerRights
  - 0.Collection > AD\_DomainRights
  - 0.Collection > AD\_GroupRights
  - 0.Collection > AD\_OURights
  - 0.Collection > AD\_SiteRights
  - 0.Collection > AD\_UserRights
  - __1.Users > AD\_ResetPasswordPermissions__
  - __2.Groups > AD\_GroupMembershipPermissions__
  - __8.Domains > AD\_DomainReplication__

## Active Directory Sensitive Security Groups Slide

The Active Directory Sensitive Security Groups slide (Slide 11) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan

## Windows: Assessment Summary Slide

The Windows: Assessment Summary slide (Slide 12) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- Windows

  - __Authentication > SG\_LSASettings__
  - __Authentication > SG\_SecuritySupportProviders__
  - __Authentication > SG\_WDigestSettings__
  - __Open Access > SG\_OpenFolders__
  - __Privileged Accounts > Local Administrators > SG\_LocalAdmins__
  - __Privileged Accounts > Local Administrators > SG\_MicrosoftLAPS__
  - __Privileged Accounts > Logon Rights > SG\_LocalPolicies__
  - __Privileged Accounts > Service Accounts > SG\_ServiceAccounts__
  - __Security Utilities > SG\_PowerShellCommands__

## Local Administrators Slide

The Local Administrators slide (Slide 13) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- Windows

  - Privileged Accounts > Local Administrators > SG\_LocalAdmins
  - Privileged Accounts > Logon Rights > SG\_LocalPolicies

## Service Accounts Slide

The Service Accounts slide (Slide 14) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- Windows

  - Authentication > SG\_LSASettings
  - Authentication > SG\_WDigestSettings
  - Privileged Accounts > Service Accounts > SG\_ServiceAccounts
  - Security Utilities > SG\_PowerShellCommands

## Ticket and Credential Management Slide

The Ticket and Credential Management slide (Slide 15) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- Windows

  - Authentication > SG\_LSASettings
  - Authentication > SG\_WDigestSettings
  - Security Utilities > SG\_PowerShellCommands

## Shadow Access Rights Slide

The Shadow Access Rights slide (Slide 16) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- Active Directory

  - 1.Groups > AD\_SensitiveSecurityGroups
  - 2.Users > AD\_WeakPasswords
- Active Directory Permissions Analyzer

  - 0.Collection > AD\_ComputerRights
  - 0.Collection > AD\_ContainerRights
  - 0.Collection > AD\_DomainRights
  - 0.Collection > AD\_GroupRights
  - 0.Collection > AD\_OURights
  - 0.Collection > AD\_SiteRights
  - 0.Collection > AD\_UserRights
  - 1.Users > AD\_ResetPasswordPermissions
  - 2.Groups > AD\_GroupMembershipPermissions
  - __7.Containers > AD\_AdminSDHolder__
  - 8.Domains > AD\_DomainReplication
- FileSystem

  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-SEEK Bulk Import
  - 7.Sensitive Data > FS\_DLPResults
- Windows

  - Privileged Accounts > Local Administrators > SG\_LocalAdmins
  - __Privileged Accounts > Local Administrators > SG\_Sessions__

Data is also supplied by the following jobs when they have been executed:

- Databases

  - 0.Collection > SQL > 0-SQL\_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL\_PermissionsScan
  - 0.Collection > SQL > 2-SQL\_SensitiveDataScan
  - SQL > 5.Sensitive Data > SQL\_SensitiveData

## Additional Findings (FS, AD, Windows OS) Slide

Slide 17 in the __Netwrix\_CDSA\_Presentation.pptx__ file is hidden by default. It is recommended to use Slides 18-20 instead, even when the primary jobs are the only ones supplying data. Slide 17 is an alternative to slides 18-20. It has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- Active Directory

  - 1.Groups > AD\_StaleGroups
  - __2.Users > AD\_ServiceAccounts__
  - 2.Users > AD\_StaleUsers
  - __2.Users > AD\_UserToken__
  - __3.Computers > AD\_StaleComputers__
  - 4.Group Policy > AD\_CPassword
  - 8.Domains > AD\_DomainReplication
- FileSystem

  - 0.Collection > 1-FSAA System Scans
  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-FSAA Bulk Import
  - 0.Collection > 2-SEEK Bulk Import
  - __2.Direct Permissions > FS\_DomainUserACLs__
  - __3.Broken Inheritance > FS\_BrokenInheritance__
  - 4.Content > Stale > FS\_StaleContent
  - 7.Sensitive Data > FS\_DLPResults
- Windows

  - Authentication > SG\_LSASettings
  - Authentication > SG\_WDigestSettings
  - Privileged Accounts > Local Administrators > SG\_LocalAdmins
  - Privileged Accounts > Service Accounts > SG\_ServiceAccounts

## Additional Findings (FS, SharePoint, Box, Dropbox) Slide

The Additional Findings (FS, SharePoint, Box, Dropbox) slide (Slide 18) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- FileSystem

  - 0.Collection > 1-FSAA System Scans
  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-FSAA Bulk Import
  - 0.Collection > 2-SEEK Bulk Import
  - __2.Direct Permissions > FS\_DomainUserACLs__
  - __3.Broken Inheritance > FS\_BrokenInheritance__
  - 4.Content > Stale > FS\_StaleContent
  - 7.Sensitive Data > FS\_DLPResults

Data is also supplied by the following jobs when they have been executed:

- Box

  - 0.Collection > 1-Box\_Access Scans
  - 0.Collection > 2-Box\_Import
- Dropbox

  - 0.Collection > 1-Dropbox\_SDD Scan
  - 0.Collection > 2-Dropbox\_SDD Bulk Import
  - __1.Access > Dropbox\_Access__
- SharePoint

  - 0.Collection > 2-SPAA\_SystemScans
  - 0.Collection > 5-SPAA\_BulkImport
  - __2.High Risk Sites > SP\_AnonymousSharing__
  - 2.High Risk Sites > SP\_OpenAccess
  - __3.Broken Inheritance > SP\_BrokenInheritance__
  - 4.Content > SP\_StaleFiles
  - 7.Sensitive Data > SP\_SensitiveData

## Additional Findings (Exchange, Databases) Slide

The Additional Findings (Exchange, Databases) slide (Slide 19) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan

Data is also supplied by the following jobs when they have been executed:

- Databases

  - 0.Collection > Oracle > 0-Oracle\_Servers
  - 0.Collection > Oracle > 1-Oracle\_PermissionsScan
  - 0.Collection > Oracle > 2-Oracle\_SensitiveDataScan
  - 0.Collection > SQL > 0-SQL\_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL\_PermissionsScan
  - 0.Collection > SQL > 2-SQL\_SensitiveDataScan
  - __Oracle > 1. Users and Roles > Oracle\_PasswordIssues__
  - Oracle > 3.Permissions > Oracle\_PublicPermissions
  - __Oracle > 4. Configuration > Oracle\_DataDictionaryProtection__
  - __Oracle > 4. Configuration > Oracle\_InstanceNameIssues__
  - __Oracle > 4. Configuration > Oracle\_RemoteOSAuthentication__
  - Oracle > 5.Sensitive Data > Oracle\_SensitiveData
  - __SQL > 1. Users and Roles > SQL\_PasswordIssues__
  - SQL > 3.Permissions > SQL\_PublicPermissions
  - __SQL > 4.Configuration > SQL\_Authentication__
  - __SQL > 4. Configuration > SQL\_BestPractices__
  - __SQL > 4.Configuration > SQL\_CMDShell__
  - SQL > 5.Sensitive Data > SQL\_SensitiveData
- Exchange

  - 4. Mailboxes > Permissions > 0. Collection > EX\_Delegates
  - 4. Mailboxes > Permissions > 0. Collection > EX\_MBRights
  - 4. Mailboxes > Permissions > 0. Collection > EX\_Perms
  - 4. Mailboxes > Permissions > 0. Collection > EX\_SendAs
  - __4. Mailboxes > Permissions > EX\_AdminGroups__
  - 4. Mailboxes > Permissions > EX\_MailboxAccess
  - __4. Mailboxes > Sizing > EX\_StaleMailboxes__
  - 5. Public Folders > Content > Collection > PF\_ContentScans
  - 5. Public Folders > Permissions > Collection > PF\_EntitlementScans
  - 7. Sensitive Data > 0.Collection > EX\_Mailbox\_SDD
  - 7. Sensitive Data > 0.Collection > EX\_PublicFolder\_SDD
  - 7. Sensitive Data > EX\_SDDResults

## Additional Findings (AD, Windows OS) Slide

The Additional Findings (AD, Windows OS) slide (Slide 20) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- Active Directory

  - 1.Groups > AD\_StaleGroups
  - __2.Users > AD\_ServiceAccounts__
  - 2.Users > AD\_StaleUsers
  - __2.Users > AD\_UserToken__
  - __3.Computers > AD\_StaleComputers__
  - 4.Group Policy > AD\_CPassword
  - 8.Domains > AD\_DomainReplication
- Windows

  - Authentication > SG\_LSASettings
  - Authentication > SG\_WDigestSettings
  - Privileged Accounts > Local Administrators > SG\_LocalAdmins

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

- .Active Directory Inventory

  - 1-AD\_Scan
- FileSystem

  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-SEEK Bulk Import
  - __0.Collection > 3-FSAA-Exceptions__
  - 7.Sensitive Data > FS\_DLPResults

Data is also supplied by the following jobs when they have been executed:

- AWS

  - 0.Collection > 1.AWS\_OrgScan
  - 0.Collection > 4.AWS\_S3SDDScan
  - 8.S3 Sensitive Data > AWS\_SensitiveData
- Box

  - 0.Collection > 1-Box\_Access Scans
  - 0.Collection > 2-Box\_Import
- Databases

  - 0.Collection > Oracle > 0-Oracle\_Servers
  - 0.Collection > Oracle > 1-Oracle\_PermissionsScan
  - 0.Collection > Oracle > 2-Oracle\_SensitiveDataScan
  - 0.Collection > SQL > 0-SQL\_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL\_PermissionsScan
  - 0.Collection > SQL > 2-SQL\_SensitiveDataScan
  - Oracle > 3.Permissions > Oracle\_PublicPermissions
  - Oracle > 5.Sensitive Data > Oracle\_SensitiveData
  - SQL > 3.Permissions > SQL\_PublicPermissions
  - SQL > 5.Sensitive Data > SQL\_SensitiveData
- Dropbox

  - 0.Collection > 1-Dropbox\_SDD Scan
  - 0.Collection > 2-Dropbox\_SDD Bulk Import
  - 5.Sensitive Data > Dropbox\_SensitiveData
- Exchange

  - 7. Sensitive Data > 0.Collection > EX\_Mailbox\_SDD
  - 7. Sensitive Data > 0.Collection > EX\_PublicFolder\_SDD
  - 7. Sensitive Data > SDDResults
  - 4. Mailboxes > Permissions > 0. Collection > EX\_Delegates
  - 4. Mailboxes > Permissions > 0. Collection > EX\_MBRights
  - 4. Mailboxes > Permissions > 0. Collection > EX\_Perms
  - 4. Mailboxes > Permissions > 0. Collection > EX\_SendAs
  - 4. Mailboxes > Permissions > EX\_MailboxAccess
- SharePoint

  - 0.Collection > 1-SPSEEK\_SystemScans
  - 0.Collection > 4-SPSEEK\_BulkImport
  - __0.Collection > 7-SPAA\_Exceptions__
  - 6.Sensitive Data > SP\_SensitiveData

## Condition: Stale Data Slide

The Condition: Stale Data slide (Slide 28) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- FileSystem

  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-SEEK Bulk Import
  - 7.Sensitive Data > FS\_DLPResults

Data is also supplied by the following jobs when they have been executed:

- Dropbox

  - 0.Collection > 1-Dropbox\_SDD Scan
  - 0.Collection > 2-Dropbox\_SDD Bulk Import
  - 5.Sensitive Data > Dropbox\_SensitiveData
- SharePoint

  - 0.Collection > 1-SPSEEK\_SystemScans
  - 0.Collection > 4-SPSEEK\_BulkImport
  - 6.Sensitive Data > SP\_SensitiveData

## AD Security Assessment Slide

The AD Security Assessment slide (Slide 29) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
  - 3-AD\_Exceptions
- Active Directory

  - 1.Groups > AD\_SensitiveSecurityGroups
  - 2.Users > AD\_WeakPasswords
  - 2.Users > AD\_PasswordStatus
  - 4.Group Policy > AD\_CPassword
- Active Directory Permissions Analyzer

  - 1.Users > AD\_ResetPasswordPermissions
  - 2.Groups > AD\_GroupMembershipPermissions
  - 8.Domains > AD\_DomainReplication

## Windows: Security Assessment Slide

The Windows: Security Assessment slide (Slide 30) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- Windows

  - Authentication > SG\_LSASettings
  - Authentication > SG\_WDigestSettings
  - Privileged Accounts > Local Administrators > SG\_LocalAdmins
  - Privileged Accounts > Service Accounts > SG\_ServiceAccounts

## Shadow Access Rights to ePHI Data Slide

The Shadow Access Rights to ePHI Data slide (Slide 31) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD\_Scan
- Active Directory

  - 1.Groups > AD\_SensitiveSecurityGroups
  - 2.Users > AD\_WeakPasswords
- Active Directory Permissions Analyzer

  - 0.Collection > AD\_ComputerRights
  - 0.Collection > AD\_ContainerRights
  - 0.Collection > AD\_DomainRights
  - 0.Collection > AD\_GroupRights
  - 0.Collection > AD\_OURights
  - 0.Collection > AD\_SiteRights
  - 0.Collection > AD\_UserRights
  - 1.Users > AD\_ResetPasswordPermissions
  - 2.Groups > AD\_GroupMembershipPermissions
  - 7.Containers > AD\_AdminSDHolder
  - 8.Domains > AD\_DomainReplication
- FileSystem

  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-SEEK Bulk Import
  - 7.Sensitive Data > FS\_DLPResults
- Windows

  - Privileged Accounts > Local Administrators > SG\_LocalAdmins
  - Privileged Accounts > Local Administrators > SG\_Sessions

Data is also supplied by the following jobs when they have been executed:

- Databases

  - 0.Collection > SQL > 0-SQL\_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL\_PermissionsScan
  - 0.Collection > SQL > 2-SQL\_SensitiveDataScan
  - SQL > 5.Sensitive Data > SQL\_SensitiveData

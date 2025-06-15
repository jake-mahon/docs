# Presentation Dependencies

In the following subsections, each slide is aligned to the jobs that supply its data. The slide number is specific to the __Netwrix_CDSA_Presentation.pptx__ file, as there are slight various in page numbering with the files designed to be saved as PDFs. Many jobs contribute to multiple slides, so jobs are highlighted in bold text the first time they are listed.

## Executive Summary Slide

The Executive Summary slide (Slide 1) has no data points.

## Netwrix Credential and Data Security Assessment (CDSA) Slide

The Netwrix Credential and Data Security Assessment (CDSA) slide (Slide 2) has no data points.

## Data Security Slide

The Data Security slide (Slide 3) has the following primary job dependencies:

- .Active Directory Inventory

  - __1-AD_Scan__
- FileSystem

  - __0.Collection > 1-FSAA System Scans__
  - __0.Collection > 2-FSAA Bulk Import__

Data is also supplied by the following jobs when they have been executed:

- AWS

  - __0.Collection > 1.AWS_OrgScan__
  - __0.Collection > 2.AWS_S3Scan__
- Box

  - __0.Collection > 1-Box_Access Scans__
  - __0.Collection > 2-Box_Import__
- Databases

  - __0.Collection > Oracle > 0-Oracle_Servers__
  - __0.Collection > Oracle > 1-Oracle_PermissionsScan__
  - __0.Collection > SQL > 0-SQL_InstanceDiscovery__
  - __0.Collection > SQL > 1-SQL_PermissionsScan__
- Dropbox

  - __0.Collection > 1-Dropbox_Permissions Scan__
  - __0.Collection > 2-Dropbox_Permissions Bulk Import__
- Exchange

  - __4. Mailboxes > Sizing > 0. Collection > EX_MBSize__
  - __5. Public Folders > Growth and Size > Collection > PF_FolderScans__
- SharePoint

  - __0.Collection > 2-SPAA_SystemScans__
  - __0.Collection > 5-SPAA_BulkImport__

## Condition: Open Access Slide

The Condition: Open Access slide (Slide 4) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- FileSystem

  - 0.Collection > 1-FSAA System Scans
  - 0.Collection > 2-FSAA Bulk Import
  - __1.Open Access >FS_OpenAccess__

Data is also supplied by the following jobs when they have been executed:

- AWS

  - 0.Collection > 1.AWS_OrgScan
  - 0.Collection > 2.AWS_S3Scan
  - __6.S3 Permissions > AWS_OpenBuckets__
- Box

  - 0.Collection > 1-Box_Access Scans
  - 0.Collection > 2-Box_Import
- Databases

  - 0.Collection > Oracle > 0-Oracle_Servers
  - 0.Collection > Oracle > 1-Oracle_PermissionsScan
  - 0.Collection > SQL > 0-SQL_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL_PermissionsScan
  - __Oracle > 3.Permissions > Oracle_PublicPermissions__
  - __SQL > 3.Permissions > SQL_PublicPermissions__
- Dropbox

  - 0.Collection > 1-Dropbox_Permissions Scan
  - 0.Collection > 2-Dropbox_Permissions Bulk Import
- Exchange

  - __4. Mailboxes > Permissions > 0. Collection > EX_Delegates__
  - __4. Mailboxes > Permissions > 0. Collection > EX_MBRights__
  - __4. Mailboxes > Permissions > 0. Collection > EX_Perms__
  - __4. Mailboxes > Permissions > 0. Collection > EX_SendAs__
  - __4. Mailboxes > Permissions > EX_MailboxAccess__
  - 4. Mailboxes > Sizing > 0. Collection > EX_MBSize
  - 5. Public Folders > Growth and Size > Collection > PF_FolderScans
  - __5. Public Folders > Permissions > Collection > PF_EntitlementScans__
- SharePoint

  - 0.Collection > 2-SPAA_SystemScans
  - 0.Collection > 5-SPAA_BulkImport
  - __2.High Risk Sites > SP_OpenAccess__

## Sensitive Data Slide

The Sensitive Data slide (Slide 5) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- FileSystem

  - __0.Collection > 1-SEEK System Scans__
  - __0.Collection > 2-SEEK Bulk Import__
  - __7.Sensitive Data > FS_DLPResults__

Data is also supplied by the following jobs when they have been executed:

- AWS

  - 0.Collection > 1.AWS_OrgScan
  - __0.Collection > 4.AWS_S3SDDScan__
  - __8.S3 Sensitive Data > AWS_SensitiveData__
- Databases

  - 0.Collection > Oracle > 0-Oracle_Servers
  - 0.Collection > Oracle > 1-Oracle_PermissionsScan
  - __0.Collection > Oracle > 2-Oracle_SensitiveDataScan__
  - 0.Collection > SQL > 0-SQL_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL_PermissionsScan
  - __0.Collection > SQL > 2-SQL_SensitiveDataScan__
  - __Oracle > 5.Sensitive Data > Oracle_SensitiveData__
  - __SQL > 5.Sensitive Data > SQL_SensitiveData__
- Dropbox

  - __0.Collection > 1-Dropbox_SDD Scan__
  - __0.Collection > 2-Dropbox_SDD Bulk Import__
  - __5.Sensitive Data > Dropbox SensitiveData__
- Exchange

  - __7. Sensitive Data > 0.Collection > EX_Mailbox_SDD__
  - __7. Sensitive Data > 0.Collection > EX_PublicFolder_SDD__
  - __7. Sensitive Data > EX_SDDResults__
- SharePoint

  - __0.Collection > 1-SPSEEK_SystemScans__
  - __0.Collection > 4-SPSEEK_BulkImport__
  - __6.Sensitive Data > SP_SensitiveData__

## Stale Data Slide

The Stale Data slide (Slide 6) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- FileSystem

  - 0.Collection > 1-FSAA System Scans
  - 0.Collection > 2-FSAA Bulk Import
  - __4.Content > Stale > FS_StaleContent__

Data is also supplied by the following jobs when they have been executed:

- Box

  - 0.Collection > 1-Box_Access Scans
  - 0.Collection > 2-Box_Import
- Databases

  - 0.Collection > Oracle > 0-Oracle_Servers
  - 0.Collection > Oracle > 1-Oracle_PermissionsScan
  - 0.Collection > SQL > 0-SQL_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL_PermissionsScan
- Dropbox

  - 0.Collection > 1-Dropbox_Permissions Scan
  - 0.Collection > 2-Dropbox_Permissions Bulk Import
- Exchange

  - __5. Public Folders > Content > Collection > PF_ContentScans__
- SharePoint

  - 0.Collection > 2-SPAA_SystemScans
  - 0.Collection > 5-SPAA_BulkImport
  - __4.Content > SP_StaleFiles__

## Active Directory Security Slide

The Active Directory Security slide (Slide 7) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- Active Directory Permissions Analyzer

  - __0.Collection > AD_ComputerRights__
  - __0.Collection > AD_ContainerRights__
  - __0.Collection > AD_DomainRights__
  - __0.Collection > AD_GroupRights__
  - __0.Collection > AD_OURights__
  - __0.Collection > AD_SiteRights__
  - __0.Collection > AD_UserRights__

Data is also supplied by the following jobs when they have been executed:

- .Entra ID Inventory

  - __1-AAD_Scan__

## Password Issues Slide

The Password Issues slide (Slide 8) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- Active Directory

  - __2.Users > AD_WeakPasswords__
  - __2.Users > AD_PasswordStatus__
  - __4.Group Policy > AD_CPassword__

## Toxic Active Directory Conditions Slide

The Toxic Active Directory Conditions slide (Slide 9) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
  - __3-AD_Exceptions__
- Active Directory

  - __1.Groups > AD_CircularNesting__
  - __1.Groups > AD_EmptyGroups__
  - __1.Groups > AD_SensitiveSecurityGroups__
  - __1.Groups > AD_StaleGroups__
  - __2.Users > AD_SIDHistory__
  - __2.Users > AD_StaleUsers__

## Non-Administrators that can Perform Sensitive AD Actions Slide

The Non-Administrators that can Perform Sensitive AD Actions slide (Slide 10) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- Active Directory Permissions Analyzer

  - 0.Collection > AD_ComputerRights
  - 0.Collection > AD_ContainerRights
  - 0.Collection > AD_DomainRights
  - 0.Collection > AD_GroupRights
  - 0.Collection > AD_OURights
  - 0.Collection > AD_SiteRights
  - 0.Collection > AD_UserRights
  - __1.Users > AD_ResetPasswordPermissions__
  - __2.Groups > AD_GroupMembershipPermissions__
  - __8.Domains > AD_DomainReplication__

## Active Directory Sensitive Security Groups Slide

The Active Directory Sensitive Security Groups slide (Slide 11) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan

## Windows: Assessment Summary Slide

The Windows: Assessment Summary slide (Slide 12) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- Windows

  - __Authentication > SG_LSASettings__
  - __Authentication > SG_SecuritySupportProviders__
  - __Authentication > SG_WDigestSettings__
  - __Open Access > SG_OpenFolders__
  - __Privileged Accounts > Local Administrators > SG_LocalAdmins__
  - __Privileged Accounts > Local Administrators > SG_MicrosoftLAPS__
  - __Privileged Accounts > Logon Rights > SG_LocalPolicies__
  - __Privileged Accounts > Service Accounts > SG_ServiceAccounts__
  - __Security Utilities > SG_PowerShellCommands__

## Local Administrators Slide

The Local Administrators slide (Slide 13) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- Windows

  - Privileged Accounts > Local Administrators > SG_LocalAdmins
  - Privileged Accounts > Logon Rights > SG_LocalPolicies

## Service Accounts Slide

The Service Accounts slide (Slide 14) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- Windows

  - Authentication > SG_LSASettings
  - Authentication > SG_WDigestSettings
  - Privileged Accounts > Service Accounts > SG_ServiceAccounts
  - Security Utilities > SG_PowerShellCommands

## Ticket and Credential Management Slide

The Ticket and Credential Management slide (Slide 15) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- Windows

  - Authentication > SG_LSASettings
  - Authentication > SG_WDigestSettings
  - Security Utilities > SG_PowerShellCommands

## Shadow Access Rights Slide

The Shadow Access Rights slide (Slide 16) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- Active Directory

  - 1.Groups > AD_SensitiveSecurityGroups
  - 2.Users > AD_WeakPasswords
- Active Directory Permissions Analyzer

  - 0.Collection > AD_ComputerRights
  - 0.Collection > AD_ContainerRights
  - 0.Collection > AD_DomainRights
  - 0.Collection > AD_GroupRights
  - 0.Collection > AD_OURights
  - 0.Collection > AD_SiteRights
  - 0.Collection > AD_UserRights
  - 1.Users > AD_ResetPasswordPermissions
  - 2.Groups > AD_GroupMembershipPermissions
  - __7.Containers > AD_AdminSDHolder__
  - 8.Domains > AD_DomainReplication
- FileSystem

  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-SEEK Bulk Import
  - 7.Sensitive Data > FS_DLPResults
- Windows

  - Privileged Accounts > Local Administrators > SG_LocalAdmins
  - __Privileged Accounts > Local Administrators > SG_Sessions__

Data is also supplied by the following jobs when they have been executed:

- Databases

  - 0.Collection > SQL > 0-SQL_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL_PermissionsScan
  - 0.Collection > SQL > 2-SQL_SensitiveDataScan
  - SQL > 5.Sensitive Data > SQL_SensitiveData

## Additional Findings (FS, AD, Windows OS) Slide

Slide 17 in the __Netwrix_CDSA_Presentation.pptx__ file is hidden by default. It is recommended to use Slides 18-20 instead, even when the primary jobs are the only ones supplying data. Slide 17 is an alternative to slides 18-20. It has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- Active Directory

  - 1.Groups > AD_StaleGroups
  - __2.Users > AD_ServiceAccounts__
  - 2.Users > AD_StaleUsers
  - __2.Users > AD_UserToken__
  - __3.Computers > AD_StaleComputers__
  - 4.Group Policy > AD_CPassword
  - 8.Domains > AD_DomainReplication
- FileSystem

  - 0.Collection > 1-FSAA System Scans
  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-FSAA Bulk Import
  - 0.Collection > 2-SEEK Bulk Import
  - __2.Direct Permissions > FS_DomainUserACLs__
  - __3.Broken Inheritance > FS_BrokenInheritance__
  - 4.Content > Stale > FS_StaleContent
  - 7.Sensitive Data > FS_DLPResults
- Windows

  - Authentication > SG_LSASettings
  - Authentication > SG_WDigestSettings
  - Privileged Accounts > Local Administrators > SG_LocalAdmins
  - Privileged Accounts > Service Accounts > SG_ServiceAccounts

## Additional Findings (FS, SharePoint, Box, Dropbox) Slide

The Additional Findings (FS, SharePoint, Box, Dropbox) slide (Slide 18) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- FileSystem

  - 0.Collection > 1-FSAA System Scans
  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-FSAA Bulk Import
  - 0.Collection > 2-SEEK Bulk Import
  - __2.Direct Permissions > FS_DomainUserACLs__
  - __3.Broken Inheritance > FS_BrokenInheritance__
  - 4.Content > Stale > FS_StaleContent
  - 7.Sensitive Data > FS_DLPResults

Data is also supplied by the following jobs when they have been executed:

- Box

  - 0.Collection > 1-Box_Access Scans
  - 0.Collection > 2-Box_Import
- Dropbox

  - 0.Collection > 1-Dropbox_SDD Scan
  - 0.Collection > 2-Dropbox_SDD Bulk Import
  - __1.Access > Dropbox_Access__
- SharePoint

  - 0.Collection > 2-SPAA_SystemScans
  - 0.Collection > 5-SPAA_BulkImport
  - __2.High Risk Sites > SP_AnonymousSharing__
  - 2.High Risk Sites > SP_OpenAccess
  - __3.Broken Inheritance > SP_BrokenInheritance__
  - 4.Content > SP_StaleFiles
  - 7.Sensitive Data > SP_SensitiveData

## Additional Findings (Exchange, Databases) Slide

The Additional Findings (Exchange, Databases) slide (Slide 19) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan

Data is also supplied by the following jobs when they have been executed:

- Databases

  - 0.Collection > Oracle > 0-Oracle_Servers
  - 0.Collection > Oracle > 1-Oracle_PermissionsScan
  - 0.Collection > Oracle > 2-Oracle_SensitiveDataScan
  - 0.Collection > SQL > 0-SQL_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL_PermissionsScan
  - 0.Collection > SQL > 2-SQL_SensitiveDataScan
  - __Oracle > 1. Users and Roles > Oracle_PasswordIssues__
  - Oracle > 3.Permissions > Oracle_PublicPermissions
  - __Oracle > 4. Configuration > Oracle_DataDictionaryProtection__
  - __Oracle > 4. Configuration > Oracle_InstanceNameIssues__
  - __Oracle > 4. Configuration > Oracle_RemoteOSAuthentication__
  - Oracle > 5.Sensitive Data > Oracle_SensitiveData
  - __SQL > 1. Users and Roles > SQL_PasswordIssues__
  - SQL > 3.Permissions > SQL_PublicPermissions
  - __SQL > 4.Configuration > SQL_Authentication__
  - __SQL > 4. Configuration > SQL_BestPractices__
  - __SQL > 4.Configuration > SQL_CMDShell__
  - SQL > 5.Sensitive Data > SQL_SensitiveData
- Exchange

  - 4. Mailboxes > Permissions > 0. Collection > EX_Delegates
  - 4. Mailboxes > Permissions > 0. Collection > EX_MBRights
  - 4. Mailboxes > Permissions > 0. Collection > EX_Perms
  - 4. Mailboxes > Permissions > 0. Collection > EX_SendAs
  - __4. Mailboxes > Permissions > EX_AdminGroups__
  - 4. Mailboxes > Permissions > EX_MailboxAccess
  - __4. Mailboxes > Sizing > EX_StaleMailboxes__
  - 5. Public Folders > Content > Collection > PF_ContentScans
  - 5. Public Folders > Permissions > Collection > PF_EntitlementScans
  - 7. Sensitive Data > 0.Collection > EX_Mailbox_SDD
  - 7. Sensitive Data > 0.Collection > EX_PublicFolder_SDD
  - 7. Sensitive Data > EX_SDDResults

## Additional Findings (AD, Windows OS) Slide

The Additional Findings (AD, Windows OS) slide (Slide 20) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- Active Directory

  - 1.Groups > AD_StaleGroups
  - __2.Users > AD_ServiceAccounts__
  - 2.Users > AD_StaleUsers
  - __2.Users > AD_UserToken__
  - __3.Computers > AD_StaleComputers__
  - 4.Group Policy > AD_CPassword
  - 8.Domains > AD_DomainReplication
- Windows

  - Authentication > SG_LSASettings
  - Authentication > SG_WDigestSettings
  - Privileged Accounts > Local Administrators > SG_LocalAdmins

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

  - 1-AD_Scan
- FileSystem

  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-SEEK Bulk Import
  - __0.Collection > 3-FSAA-Exceptions__
  - 7.Sensitive Data > FS_DLPResults

Data is also supplied by the following jobs when they have been executed:

- AWS

  - 0.Collection > 1.AWS_OrgScan
  - 0.Collection > 4.AWS_S3SDDScan
  - 8.S3 Sensitive Data > AWS_SensitiveData
- Box

  - 0.Collection > 1-Box_Access Scans
  - 0.Collection > 2-Box_Import
- Databases

  - 0.Collection > Oracle > 0-Oracle_Servers
  - 0.Collection > Oracle > 1-Oracle_PermissionsScan
  - 0.Collection > Oracle > 2-Oracle_SensitiveDataScan
  - 0.Collection > SQL > 0-SQL_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL_PermissionsScan
  - 0.Collection > SQL > 2-SQL_SensitiveDataScan
  - Oracle > 3.Permissions > Oracle_PublicPermissions
  - Oracle > 5.Sensitive Data > Oracle_SensitiveData
  - SQL > 3.Permissions > SQL_PublicPermissions
  - SQL > 5.Sensitive Data > SQL_SensitiveData
- Dropbox

  - 0.Collection > 1-Dropbox_SDD Scan
  - 0.Collection > 2-Dropbox_SDD Bulk Import
  - 5.Sensitive Data > Dropbox_SensitiveData
- Exchange

  - 7. Sensitive Data > 0.Collection > EX_Mailbox_SDD
  - 7. Sensitive Data > 0.Collection > EX_PublicFolder_SDD
  - 7. Sensitive Data > SDDResults
  - 4. Mailboxes > Permissions > 0. Collection > EX_Delegates
  - 4. Mailboxes > Permissions > 0. Collection > EX_MBRights
  - 4. Mailboxes > Permissions > 0. Collection > EX_Perms
  - 4. Mailboxes > Permissions > 0. Collection > EX_SendAs
  - 4. Mailboxes > Permissions > EX_MailboxAccess
- SharePoint

  - 0.Collection > 1-SPSEEK_SystemScans
  - 0.Collection > 4-SPSEEK_BulkImport
  - __0.Collection > 7-SPAA_Exceptions__
  - 6.Sensitive Data > SP_SensitiveData

## Condition: Stale Data Slide

The Condition: Stale Data slide (Slide 28) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- FileSystem

  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-SEEK Bulk Import
  - 7.Sensitive Data > FS_DLPResults

Data is also supplied by the following jobs when they have been executed:

- Dropbox

  - 0.Collection > 1-Dropbox_SDD Scan
  - 0.Collection > 2-Dropbox_SDD Bulk Import
  - 5.Sensitive Data > Dropbox_SensitiveData
- SharePoint

  - 0.Collection > 1-SPSEEK_SystemScans
  - 0.Collection > 4-SPSEEK_BulkImport
  - 6.Sensitive Data > SP_SensitiveData

## AD Security Assessment Slide

The AD Security Assessment slide (Slide 29) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
  - 3-AD_Exceptions
- Active Directory

  - 1.Groups > AD_SensitiveSecurityGroups
  - 2.Users > AD_WeakPasswords
  - 2.Users > AD_PasswordStatus
  - 4.Group Policy > AD_CPassword
- Active Directory Permissions Analyzer

  - 1.Users > AD_ResetPasswordPermissions
  - 2.Groups > AD_GroupMembershipPermissions
  - 8.Domains > AD_DomainReplication

## Windows: Security Assessment Slide

The Windows: Security Assessment slide (Slide 30) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- Windows

  - Authentication > SG_LSASettings
  - Authentication > SG_WDigestSettings
  - Privileged Accounts > Local Administrators > SG_LocalAdmins
  - Privileged Accounts > Service Accounts > SG_ServiceAccounts

## Shadow Access Rights to ePHI Data Slide

The Shadow Access Rights to ePHI Data slide (Slide 31) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
- Active Directory

  - 1.Groups > AD_SensitiveSecurityGroups
  - 2.Users > AD_WeakPasswords
- Active Directory Permissions Analyzer

  - 0.Collection > AD_ComputerRights
  - 0.Collection > AD_ContainerRights
  - 0.Collection > AD_DomainRights
  - 0.Collection > AD_GroupRights
  - 0.Collection > AD_OURights
  - 0.Collection > AD_SiteRights
  - 0.Collection > AD_UserRights
  - 1.Users > AD_ResetPasswordPermissions
  - 2.Groups > AD_GroupMembershipPermissions
  - 7.Containers > AD_AdminSDHolder
  - 8.Domains > AD_DomainReplication
- FileSystem

  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-SEEK Bulk Import
  - 7.Sensitive Data > FS_DLPResults
- Windows

  - Privileged Accounts > Local Administrators > SG_LocalAdmins
  - Privileged Accounts > Local Administrators > SG_Sessions

Data is also supplied by the following jobs when they have been executed:

- Databases

  - 0.Collection > SQL > 0-SQL_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL_PermissionsScan
  - 0.Collection > SQL > 2-SQL_SensitiveDataScan
  - SQL > 5.Sensitive Data > SQL_SensitiveData

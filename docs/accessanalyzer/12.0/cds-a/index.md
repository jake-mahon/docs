# Credential & Data Security Assessment Overview

Proper data security begins with a strong foundation. The Credential & Data Security Assessment
(CDSA) provides a deep-dive into the security of your structured and unstructured data, Active
Directory, and Windows infrastructure.

The CDSA job depends upon several Access Analyzer solutions for data collection. See the
[Requirements](/docs/accessanalyzer/12.0/getting-started/requirements/overview.md) topic for installation and database requirements.

## Supporting Solutions

At a minimum the following solutions need to run prior to the CDSA job to provide the data used to
generate the CDSA presentations:

- .Active Directory Inventory Solution

  - See the
    [.Active Directory Inventory Solution](/docs/accessanalyzer/12.0/solutions/active-directory-inventory/overview.md)
    topic for additional information

- Active Directory Solution

  - See the [Active Directory Solution](/docs/accessanalyzer/12.0/solutions/active-directory/overview.md) topic for
    additional information

- Active Directory Permissions Analyzer Solution

  - See the
    [Active Directory Permissions Analyzer Solution](/docs/accessanalyzer/12.0/solutions/active-directory-permissions-analyzer/overview.md)
    topic for additional information

- File System Solution

  - See the [File System Solution](/docs/accessanalyzer/12.0/solutions/file-system/overview.md) topic for additional
    information

- Windows Solution

  - See the [Windows Solution](/docs/accessanalyzer/12.0/solutions/windows/overview.md) topic for additional information

The following additional solutions also provide data to the CDSA job:

- [Entra ID Solution](/docs/accessanalyzer/12.0/solutions/entraid/overview.md)
- [AWS Solution](/docs/accessanalyzer/12.0/solutions/aws/overview.md)
- [Box Solution](/docs/accessanalyzer/12.0/solutions/box/overview.md)
- [Dropbox Solution](/docs/accessanalyzer/12.0/solutions/dropbox/overview.md)
- [Exchange Solution](/docs/accessanalyzer/12.0/solutions/exchange/overview.md)
- [Oracle Solution](/docs/accessanalyzer/12.0/solutions/databases/oracle/overview.md)
- [SharePoint Solution](/docs/accessanalyzer/12.0/solutions/sharepoint/overview.md)
- [SQL Job Group](/docs/accessanalyzer/12.0/solutions/databases/sql/overview.md)

Additionally, the Sensitive Data Discovery Add-On also contributes to the CDSA presentations. See
the [Sensitive Data Discovery](/docs/accessanalyzer/12.0/sensitive-data/overview.md) topic for additional
information.

# Presentation Dependencies

In the following subsections, each slide is aligned to the jobs that supply its data. The slide
number is specific to the **Netwrix_CDSA_Presentation.pptx** file, as there are slight various in
page numbering with the files designed to be saved as PDFs. Many jobs contribute to multiple slides,
so jobs are highlighted in bold text the first time they are listed.

## Executive Summary Slide

The Executive Summary slide (Slide 1) has no data points.

## Netwrix Credential and Data Security Assessment (CDSA) Slide

The Netwrix Credential and Data Security Assessment (CDSA) slide (Slide 2) has no data points.

## Data Security Slide

The Data Security slide (Slide 3) has the following primary job dependencies:

- .Active Directory Inventory

  - **1-AD_Scan**

- FileSystem

  - **0.Collection > 1-FSAA System Scans**
  - **0.Collection > 2-FSAA Bulk Import**

Data is also supplied by the following jobs when they have been executed:

- AWS

  - **0.Collection > 1.AWS_OrgScan**
  - **0.Collection > 2.AWS_S3Scan**

- Box

  - **0.Collection > 1-Box_Access Scans**
  - **0.Collection > 2-Box_Import**

- Databases

  - **0.Collection > Oracle > 0-Oracle_Servers**
  - **0.Collection > Oracle > 1-Oracle_PermissionsScan**
  - **0.Collection > SQL > 0-SQL_InstanceDiscovery**
  - **0.Collection > SQL > 1-SQL_PermissionsScan**

- Dropbox

  - **0.Collection > 1-Dropbox_Permissions Scan**
  - **0.Collection > 2-Dropbox_Permissions Bulk Import**

- Exchange

  - **4. Mailboxes > Sizing > 0. Collection > EX_MBSize**
  - **5. Public Folders > Growth and Size > Collection > PF_FolderScans**

- SharePoint

  - **0.Collection > 2-SPAA_SystemScans**
  - **0.Collection > 5-SPAA_BulkImport**

## Condition: Open Access Slide

The Condition: Open Access slide (Slide 4) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan

- FileSystem

  - 0.Collection > 1-FSAA System Scans
  - 0.Collection > 2-FSAA Bulk Import
  - **1.Open Access >FS_OpenAccess**

Data is also supplied by the following jobs when they have been executed:

- AWS

  - 0.Collection > 1.AWS_OrgScan
  - 0.Collection > 2.AWS_S3Scan
  - **6.S3 Permissions > AWS_OpenBuckets**

- Box

  - 0.Collection > 1-Box_Access Scans
  - 0.Collection > 2-Box_Import

- Databases

  - 0.Collection > Oracle > 0-Oracle_Servers
  - 0.Collection > Oracle > 1-Oracle_PermissionsScan
  - 0.Collection > SQL > 0-SQL_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL_PermissionsScan
  - **Oracle > 3.Permissions > Oracle_PublicPermissions**
  - **SQL > 3.Permissions > SQL_PublicPermissions**

- Dropbox

  - 0.Collection > 1-Dropbox_Permissions Scan
  - 0.Collection > 2-Dropbox_Permissions Bulk Import

- Exchange

  - **4. Mailboxes > Permissions > 0. Collection > EX_Delegates**
  - **4. Mailboxes > Permissions > 0. Collection > EX_MBRights**
  - **4. Mailboxes > Permissions > 0. Collection > EX_Perms**
  - **4. Mailboxes > Permissions > 0. Collection > EX_SendAs**
  - **4. Mailboxes > Permissions > EX_MailboxAccess**
  - 4. Mailboxes > Sizing > 0. Collection > EX_MBSize
  - 5. Public Folders > Growth and Size > Collection > PF_FolderScans
  - **5. Public Folders > Permissions > Collection > PF_EntitlementScans**

- SharePoint

  - 0.Collection > 2-SPAA_SystemScans
  - 0.Collection > 5-SPAA_BulkImport
  - **2.High Risk Sites > SP_OpenAccess**

## Sensitive Data Slide

The Sensitive Data slide (Slide 5) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan

- FileSystem

  - **0.Collection > 1-SEEK System Scans**
  - **0.Collection > 2-SEEK Bulk Import**
  - **7.Sensitive Data > FS_DLPResults**

Data is also supplied by the following jobs when they have been executed:

- AWS

  - 0.Collection > 1.AWS_OrgScan
  - **0.Collection > 4.AWS_S3SDDScan**
  - **8.S3 Sensitive Data > AWS_SensitiveData**

- Databases

  - 0.Collection > Oracle > 0-Oracle_Servers
  - 0.Collection > Oracle > 1-Oracle_PermissionsScan
  - **0.Collection > Oracle > 2-Oracle_SensitiveDataScan**
  - 0.Collection > SQL > 0-SQL_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL_PermissionsScan
  - **0.Collection > SQL > 2-SQL_SensitiveDataScan**
  - **Oracle > 5.Sensitive Data > Oracle_SensitiveData**
  - **SQL > 5.Sensitive Data > SQL_SensitiveData**

- Dropbox

  - **0.Collection > 1-Dropbox_SDD Scan**
  - **0.Collection > 2-Dropbox_SDD Bulk Import**
  - **5.Sensitive Data > Dropbox SensitiveData**

- Exchange

  - **7. Sensitive Data > 0.Collection > EX_Mailbox_SDD**
  - **7. Sensitive Data > 0.Collection > EX_PublicFolder_SDD**
  - **7. Sensitive Data > EX_SDDResults**

- SharePoint

  - **0.Collection > 1-SPSEEK_SystemScans**
  - **0.Collection > 4-SPSEEK_BulkImport**
  - **6.Sensitive Data > SP_SensitiveData**

## Stale Data Slide

The Stale Data slide (Slide 6) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan

- FileSystem

  - 0.Collection > 1-FSAA System Scans
  - 0.Collection > 2-FSAA Bulk Import
  - **4.Content > Stale > FS_StaleContent**

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

  - **5. Public Folders > Content > Collection > PF_ContentScans**

- SharePoint

  - 0.Collection > 2-SPAA_SystemScans
  - 0.Collection > 5-SPAA_BulkImport
  - **4.Content > SP_StaleFiles**

## Active Directory Security Slide

The Active Directory Security slide (Slide 7) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan

- Active Directory Permissions Analyzer

  - **0.Collection > AD_ComputerRights**
  - **0.Collection > AD_ContainerRights**
  - **0.Collection > AD_DomainRights**
  - **0.Collection > AD_GroupRights**
  - **0.Collection > AD_OURights**
  - **0.Collection > AD_SiteRights**
  - **0.Collection > AD_UserRights**

Data is also supplied by the following jobs when they have been executed:

- .Entra ID Inventory

  - **1-AAD_Scan**

## Password Issues Slide

The Password Issues slide (Slide 8) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan

- Active Directory

  - **2.Users > AD_WeakPasswords**
  - **2.Users > AD_PasswordStatus**
  - **4.Group Policy > AD_CPassword**

## Toxic Active Directory Conditions Slide

The Toxic Active Directory Conditions slide (Slide 9) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan
  - **3-AD_Exceptions**

- Active Directory

  - **1.Groups > AD_CircularNesting**
  - **1.Groups > AD_EmptyGroups**
  - **1.Groups > AD_SensitiveSecurityGroups**
  - **1.Groups > AD_StaleGroups**
  - **2.Users > AD_SIDHistory**
  - **2.Users > AD_StaleUsers**

## Non-Administrators that can Perform Sensitive AD Actions Slide

The Non-Administrators that can Perform Sensitive AD Actions slide (Slide 10) has the following
primary job dependencies:

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
  - **1.Users > AD_ResetPasswordPermissions**
  - **2.Groups > AD_GroupMembershipPermissions**
  - **8.Domains > AD_DomainReplication**

## Active Directory Sensitive Security Groups Slide

The Active Directory Sensitive Security Groups slide (Slide 11) has the following primary job
dependencies:

- .Active Directory Inventory

  - 1-AD_Scan

## Windows: Assessment Summary Slide

The Windows: Assessment Summary slide (Slide 12) has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan

- Windows

  - **Authentication > SG_LSASettings**
  - **Authentication > SG_SecuritySupportProviders**
  - **Authentication > SG_WDigestSettings**
  - **Open Access > SG_OpenFolders**
  - **Privileged Accounts > Local Administrators > SG_LocalAdmins**
  - **Privileged Accounts > Local Administrators > SG_MicrosoftLAPS**
  - **Privileged Accounts > Logon Rights > SG_LocalPolicies**
  - **Privileged Accounts > Service Accounts > SG_ServiceAccounts**
  - **Security Utilities > SG_PowerShellCommands**

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
  - **7.Containers > AD_AdminSDHolder**
  - 8.Domains > AD_DomainReplication

- FileSystem

  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-SEEK Bulk Import
  - 7.Sensitive Data > FS_DLPResults

- Windows

  - Privileged Accounts > Local Administrators > SG_LocalAdmins
  - **Privileged Accounts > Local Administrators > SG_Sessions**

Data is also supplied by the following jobs when they have been executed:

- Databases

  - 0.Collection > SQL > 0-SQL_InstanceDiscovery
  - 0.Collection > SQL > 1-SQL_PermissionsScan
  - 0.Collection > SQL > 2-SQL_SensitiveDataScan
  - SQL > 5.Sensitive Data > SQL_SensitiveData

## Additional Findings (FS, AD, Windows OS) Slide

Slide 17 in the **Netwrix_CDSA_Presentation.pptx** file is hidden by default. It is recommended to
use Slides 18-20 instead, even when the primary jobs are the only ones supplying data. Slide 17 is
an alternative to slides 18-20. It has the following primary job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan

- Active Directory

  - 1.Groups > AD_StaleGroups
  - **2.Users > AD_ServiceAccounts**
  - 2.Users > AD_StaleUsers
  - **2.Users > AD_UserToken**
  - **3.Computers > AD_StaleComputers**
  - 4.Group Policy > AD_CPassword
  - 8.Domains > AD_DomainReplication

- FileSystem

  - 0.Collection > 1-FSAA System Scans
  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-FSAA Bulk Import
  - 0.Collection > 2-SEEK Bulk Import
  - **2.Direct Permissions > FS_DomainUserACLs**
  - **3.Broken Inheritance > FS_BrokenInheritance**
  - 4.Content > Stale > FS_StaleContent
  - 7.Sensitive Data > FS_DLPResults

- Windows

  - Authentication > SG_LSASettings
  - Authentication > SG_WDigestSettings
  - Privileged Accounts > Local Administrators > SG_LocalAdmins
  - Privileged Accounts > Service Accounts > SG_ServiceAccounts

## Additional Findings (FS, SharePoint, Box, Dropbox) Slide

The Additional Findings (FS, SharePoint, Box, Dropbox) slide (Slide 18) has the following primary
job dependencies:

- .Active Directory Inventory

  - 1-AD_Scan

- FileSystem

  - 0.Collection > 1-FSAA System Scans
  - 0.Collection > 1-SEEK System Scans
  - 0.Collection > 2-FSAA Bulk Import
  - 0.Collection > 2-SEEK Bulk Import
  - **2.Direct Permissions > FS_DomainUserACLs**
  - **3.Broken Inheritance > FS_BrokenInheritance**
  - 4.Content > Stale > FS_StaleContent
  - 7.Sensitive Data > FS_DLPResults

Data is also supplied by the following jobs when they have been executed:

- Box

  - 0.Collection > 1-Box_Access Scans
  - 0.Collection > 2-Box_Import

- Dropbox

  - 0.Collection > 1-Dropbox_SDD Scan
  - 0.Collection > 2-Dropbox_SDD Bulk Import
  - **1.Access > Dropbox_Access**

- SharePoint

  - 0.Collection > 2-SPAA_SystemScans
  - 0.Collection > 5-SPAA_BulkImport
  - **2.High Risk Sites > SP_AnonymousSharing**
  - 2.High Risk Sites > SP_OpenAccess
  - **3.Broken Inheritance > SP_BrokenInheritance**
  - 4.Content > SP_StaleFiles
  - 7.Sensitive Data > SP_SensitiveData

## Additional Findings (Exchange, Databases) Slide

The Additional Findings (Exchange, Databases) slide (Slide 19) has the following primary job
dependencies:

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
  - **Oracle > 1. Users and Roles > Oracle_PasswordIssues**
  - Oracle > 3.Permissions > Oracle_PublicPermissions
  - **Oracle > 4. Configuration > Oracle_DataDictionaryProtection**
  - **Oracle > 4. Configuration > Oracle_InstanceNameIssues**
  - **Oracle > 4. Configuration > Oracle_RemoteOSAuthentication**
  - Oracle > 5.Sensitive Data > Oracle_SensitiveData
  - **SQL > 1. Users and Roles > SQL_PasswordIssues**
  - SQL > 3.Permissions > SQL_PublicPermissions
  - **SQL > 4.Configuration > SQL_Authentication**
  - **SQL > 4. Configuration > SQL_BestPractices**
  - **SQL > 4.Configuration > SQL_CMDShell**
  - SQL > 5.Sensitive Data > SQL_SensitiveData

- Exchange

  - 4. Mailboxes > Permissions > 0. Collection > EX_Delegates
  - 4. Mailboxes > Permissions > 0. Collection > EX_MBRights
  - 4. Mailboxes > Permissions > 0. Collection > EX_Perms
  - 4. Mailboxes > Permissions > 0. Collection > EX_SendAs
  - **4. Mailboxes > Permissions > EX_AdminGroups**
  - 4. Mailboxes > Permissions > EX_MailboxAccess
  - **4. Mailboxes > Sizing > EX_StaleMailboxes**
  - 5. Public Folders > Content > Collection > PF_ContentScans
  - 5. Public Folders > Permissions > Collection > PF_EntitlementScans
  - 7. Sensitive Data > 0.Collection > EX_Mailbox_SDD
  - 7. Sensitive Data > 0.Collection > EX_PublicFolder_SDD
  - 7. Sensitive Data > EX_SDDResults

## Additional Findings (AD, Windows OS) Slide

The Additional Findings (AD, Windows OS) slide (Slide 20) has the following primary job
dependencies:

- .Active Directory Inventory

  - 1-AD_Scan

- Active Directory

  - 1.Groups > AD_StaleGroups
  - **2.Users > AD_ServiceAccounts**
  - 2.Users > AD_StaleUsers
  - **2.Users > AD_UserToken**
  - **3.Computers > AD_StaleComputers**
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
  - **0.Collection > 3-FSAA-Exceptions**
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
  - **0.Collection > 7-SPAA_Exceptions**
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

# CDSA Job

The CDSA Job is available through the Instant Job Library under the CDSA library. See the
[Instant Job Wizard](/docs/accessanalyzer/12.0/administration/jobs/instantjobs/overview.md) topic for instructions of how to add
this instant job to the Jobs tree. When installing the job, select **Local host** on the Host pages
of the Instant Job Wizard.

Ensure the supporting solutions have successfully collected and analyzed data prior to running this
job. See the [Presentation Dependencies](/docs/accessanalyzer/12.0/cds-a/index.md) topic for alignment between presentation
slides and jobs that supply the data points.

The CDSA job generates three PowerPoint files:

- For the Presenter

  - The **Netwrix_CDSA_Presentation.pptx** file is designed to be presented live to the customer

- For the Customer as printable assets

  - The **Netwrix_CDSA_8.5x11_Presentation.pptx** file is designed to be given to the customer for
    self-review as a PDF file
  - The **Netwrix_CDSA_A4_Presentation.pptx** file is designed to be given to the customer for
    self-review as a PDF file

**CAUTION:** Do not send any these presentations to a customer in PowerPoint format.

The printable assets can be converted to PDFs or printed booklet style at a professional print shop
(suggested) if desired.

These presentations are located within the job’s folder in the Access Analyzer installation
directory, which varies according to the location of the job within the Jobs tree. Navigate to this
folder by clicking **Open Folder** on the job's overview page.

The presentation files contain slides for both a classic CDSA presentation applicable to most
organizations and an ePHI Security Assessment applicable to the healthcare industry.

## Delivering a CDSA Presentation Slide Show

The **Netwrix_CDSA_Presentation.pptx** file is designed to be presented live to the customer. There
are two presentation options for the live slide show:

- The **CDSA - Classic** slide show contains the first 24 slides and is applicable for most
  organizations
- The **ePHI Security Assessment** slide show contains the ending slides with select summary slides
  from the Classic slide show and is applicable to the healthcare industry

Use the Custom Slide Show drop-down menu on the Slide Show ribbon in PowerPoint to select the
appropriate presentation.

**NOTE:** Slide 17 is hidden by default as same information is available on Slides 18-20.

Netwrix University includes a training module with details on the key talking points for a live
delivery of the slide shows. Check out the **315 – Getting Started with Credential & Data Security
Assessment** training course.

## Choosing a PDF Version

Both of the printable assets have two customized options for converting to a PDF:

- CDSA Classic – Contains the first 24 slides and is applicable for most organizations
- ePHI Security Assessment – Contains the ending slides with select summary slides from the Classic
  slide show and is applicable to the healthcare industry

Follow the steps to create the appropriate custom PDF.

**Step 1 –** Use the **Save As** option.

**Step 2 –** Set the file name as desired and change the Save As type to **PDF**.

**Step 3 –** Click **Options** and change the Range to **Custom show**.

**Step 4 –** By default, this is set to the **CDSA Classic** show. If needed, change it to the
**ePHI Security Assessment** show.

**Step 5 –** Click **OK** to confirm the option, and then click **Save** to generate the PDF.

The presentation is converted to a PDF with only the applicable slides included.

**NOTE:** Slide 16 is hidden by default as same information is available on Slides 17-19.

## Custom Slide Show Alignment

The table lists each slide as it is listed in the **Netwrix_CDSA_Presentation.pptx** file. It
indicates which slides are included in each custom slide show. There are slight variations in page
numbering with the files designed to be saved as PDFs.

| #   | Slide Title                                              | CDSA Classic | ePHI Security Assessment |
| --- | -------------------------------------------------------- | ------------ | ------------------------ |
| 1   | Executive Summary                                        | X            |                          |
| 2   | Netwrix Credential and Data Security Assessment (CDSA)   | X            |                          |
| 3   | Data Security                                            | X            |                          |
| 4   | Condition: Open Access                                   | X            | X                        |
| 5   | Sensitive Data                                           | X            |                          |
| 6   | Stale Data                                               | X            |                          |
| 7   | Active Directory Security                                | X            | X                        |
| 8   | Password Issues                                          | X            |                          |
| 9   | Toxic Active Directory Conditions                        | X            |                          |
| 10  | Non-Administrators that can Perform Sensitive AD Actions | X            |                          |
| 11  | Active Directory Sensitive Security Groups               | X            |                          |
| 12  | Windows: Assessment Summary                              | X            | X                        |
| 13  | Local Administrators                                     | X            |                          |
| 14  | Service Accounts                                         | X            |                          |
| 15  | Ticket and Credential Management                         | X            |                          |
| 16  | Shadow Access Rights                                     | X            |                          |
| 17  | Additional Findings (FS, AD, Windows OS)                 |              |                          |
| 18  | Additional Findings (FS, SharePoint, Box, Dropbox)       | X            | X                        |
| 19  | Additional Findings (Exchange, Databases)                | X            | X                        |
| 20  | Additional Findings (AD, Windows OS)                     | X            | X                        |
| 21  | Product Portfolio                                        | X            | X                        |
| 22  | Path To Success                                          | X            | X                        |
| 23  | Netwrix                                                  | X            | X                        |
| 24  | Thank You                                                | X            | X                        |
| 25  | Executive Summary: ePHI Security Assessment              |              | X                        |
| 26  | Netwrix ePHI Security Assessment                         |              | X                        |
| 27  | ePHI Data                                                |              | X                        |
| 28  | Condition: Stale Data                                    |              | X                        |
| 29  | AD Security Assessment                                   |              | X                        |
| 30  | Windows: Security Assessment                             |              | X                        |
| 31  | Shadow Access Rights to ePHI Data                        |              | X                        |

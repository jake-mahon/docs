---
sidebar_position: 4963
title: Azure Files Target Requirements
---

# Azure Files Target Requirements

Azure Files is a fully managed, cloud-based file sharing service from Microsoft that allows users to access file shares from anywhere as a virtual network drive. Access Analyzer uses the File System solution to execute Access Auditing (FSAA) and Sensitive Data Discovery Auditing scans on Azure Files.

Before the File System solution can perform scans for Azure Files, the following prerequisites are required both in Access Analyzer and the Azure environments:

* [Create Host List](#Create "Create Host List")
* [Configure Connection Profile](#Configur "Configure Connection Profile")
* [Job and Query Configuration](#Job "Job and Query Configuration")

## Create Host List

A host list containing the desired target Azure hosts must be created and assigned to the collection jobs. You can create the host list with either of the following two methods:

* Use the FS\_AzureTenantScan instant job to create the host list automatically. See the [FS\_AzureTenantScan Job](../../../Solutions/FileSystem/Collection/FS_AzureTenantScan "FS_AzureTenantScan Job") topic for additional information.
* Manually add hosts to a host list in the following format:

  `.file.core.windows.net`

  See the [Add Hosts](../../../Admin/HostManagement/Actions/Add "Add Hosts") topic for additional information.

## Configure Connection Profile

The Access Analyzer connection profile requires two or more credentials depending on the amount of storage accounts being targeted. It requires an active directory account with rights to run the applet, and credentials for each storage account. These should be configured as follows:

* Account for running applet

  * Select Account type – Active Directory
  * Provide the credentials for an account with the privileges to run the FSAA applet. See the [File System Scan Options](../../Solutions/FileSystem/ScanOptions "File System Scan Options") topic for additional information on the required permissions.
* Accounts for storage accounts

  * Select Account Type – Azure Active Directory

    ![Storage account name and Connection string in Azure](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/FileSystem/AzureFiles/AccessKeys.png "Storage account name and Connection string in Azure")
  * Client ID – The name of the storage account

    * For example, if the target is `files.file.core.windows.net` then the Client ID should be `files`. It is not case sensitive.
  * Key – Connection string value for access keys on the storage account

  If you are targeting multiple storage accounts, a user credential of this type is required for each storage account.

See the [Connection](../../../Admin/Settings/Connection/Overview "Connection") topic for additional information.

## Job and Query Configuration

Azure Files scans require the following configuration of the job and query performing the scan.

### Jobs Targeting Azure Files

For FSAA and SEEK scans targeting Azure Files storage accounts, you must clear the **Skip Hosts that do not respond to PING** option in the job properties.

![Skip Hosts option on Performance tab of the Job Properties window](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/FileSystem/AzureFiles/SkipHostsOption.png "Skip Hosts option on Performance tab of the Job Properties window")

Right-click on the required scan job in the Jobs tree, and select **Properties** to open the Job Properties window. Navigate to the Performance tab, and ensure the **Skip Hosts that do not respond to PING** option is not selected. See the [Job Properties](../../../Admin/Jobs/Job/Properties/Overview "Job Properties") and [Performance Tab](../../../Admin/Jobs/Job/Properties/Performance "Performance Tab") topics for additional information.

### Query Configuration Considerations

Last Access Time (LAT) preservation is not supported for Azure Files scans. This option must not be selected in the query for the FSAA or SEEK scan job.

![Last Access Time (LAT) preservation option in FSAA DC wizard](../../../../Resources/Images/EnterpriseAuditor/FileSystem/AzureFiles/LATPreservationOption.png "Last Access Time (LAT) preservation option in FSAA DC wizard")

The **Last Access Time (LAT) preservation** option is located on the Default Scoping Options page of the File System Access Auditor Data Collector Wizard. See the [Configure the (FSAA) File System Scan Query](../../../Solutions/FileSystem/Collection/1-FSAA_System_Scans#_Configure_FSAA_SystemScan_Query "Configure the (FSAA) File System Scan Query") or [Configure the (SEEK) File System Scan Query](../../../Solutions/FileSystem/Collection/1-SEEK_System_Scans#_Configure_the_(SEEK)_FileSystemScanQuery_1-SEEK_System_1 "Configure the (SEEK) File System Scan Query") topic for additional information.
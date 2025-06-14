# Azure Information Protection Target Requirements

Microsoft® Azure is a cloud-based computing platform that provides a range of services, such as file storage. Azure uses Azure Information Protection (AIP) labels, a Microsoft tool used to classify and protect stored files. Enterprise Auditor employs the File System Solution to execute Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans in order to find AIP Protection labels and scan protected (i.e. encrypted) files for sensitive data.

This document provides information needed to properly configure access required by Enterprise Auditor to successfully scan for Azure Information Protection labels in a targeted environment.

__NOTE:__ Enterprise Auditor does not scan for AIP Marking labels, only Protection labels.

## Workflow for Scanning AIP Labels

Before the Enterprise Auditor File System solution can scan for Azure Information Protection (AIP) labels, certain prerequisites are required both in Enterprise Auditor and Azure environments.

1. [Rights Management Service Client Installation](#rights-management-service-client-installation)
2. [Create a Service Principal Account using PowerShell](#create-a-service-principal-account-using-powershell)
3. [Enable the Account as an AIP Super User using PowerShell](#enable-the-account-as-an-aip-super-user-using-powershell)
4. [Add User to the AIP Role in Microsoft® Azure](#add-user-to-the-aip-role-in-microsoft-azure)
5. [Enterprise Auditor Configurations](#enterprise-auditor-configurations)
6. Enable settings in FSAA Data Collector in Enterprise Auditor.

   - See the FileSystemAccess Data Collector section in the [File System Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/filesystem/overview.md) topic for additional information

## Prerequisites

Ensure the following prerequisites are met before configuring AIP scanning:

- Microsoft Entra ID Admin credentials
- The PowerShell ```Install-Module``` command requires:

  - PowerShell 5.0 (Run as Administrator)
  - Windows Server 2016and later
- Active Directory Rights Management Services Client 2.1 installed on the server where the FSAA applet or proxy is being run

## Rights Management Service Client Installation

The Rights Management Service Client must be installed on the applet servers where FSAA is running. This may be the local Enterprise Auditor server, a Proxy server, or a File Server running in applet mode.

- To install the Rights Management Service Client 2.1 on the server where the scan is taking place, go to the Microsoft download center:

  [https://www.microsoft.com/en-us/download/details.aspx?id=38396](https://www.microsoft.com/en-us/download/details.aspx?id=38396)

___RECOMMENDED:___ Read the System Requirements and Install Instructions provided by Microsoft to complete the installation.

## Create a Service Principal Account using PowerShell

Follow the steps to create a service principal account with a symmetric key to connect to AIP:

__NOTE:__ All PowerShell commands should be run in order through PowerShell as an Admin.

__Step 1 –__ Open up PowerShell (Administrator).

__Step 2 –__ Install and import MsOnline module:

```
Install-Module MsOnline  
Import-Module MsOnline
```

__Step 3 –__ Connect to Azure with the ```Connect-MsolService``` command. Enter the Azure credentials in the __Sign in to your account__ window that displays from Microsoft.

__Step 4 –__ Once successfully connected to Azure, create a service principal with the following command:

```
New-MsolServicePrincipal
```

> Enter the __DisplayName__ of the new service principal name. (For example, AIP\_EnterpriseAuditor)

__Step 5 –__ Take note and save the __Symmetric Key__ and __AppPrincipalID__ to be used in later steps.

__CAUTION:__ Do not lose the symmetric key. It is not retrievable again once the PowerShell window is closed.

The service principal account with the proper key has been created.

## Enable the Account as an AIP Super User using PowerShell

Follow the steps to enable the Service Principal Account in AIP as a Super User:

__NOTE:__ All PowerShell commands should be run in order through PowerShell as an Admin.

__Step 1 –__ In PowerShell, install Microsoft Azure Active Directory Rights Manager (AIPService) module:

```
Install-Module AIPService  
Import-Module AIPService
```

__Step 2 –__ Connect to Azure using the ```Connect-AIPService``` command and supply Azure credentials in the __Sign in to your account__ window that displays from Microsoft.

__Step 3 –__ Add the service principal to the Azure AD Rights Management service super users, using the AppPrincipalID saved from the steps in the [Create a Service Principal Account using PowerShell](#create-a-service-principal-account-using-powershell) section:

```
Add-AipServiceSuperUser-ServicePrincipalID <AppPrincipalID>
```

__Step 4 –__ Enable the DisplayName account using the following command:

```
Enable-AIPServiceSuperUserFeature
```

The Service Principal Account is now added to the Rights Management service as a Super User, and the Super User feature is enabled.

## Add User to the AIP Role in Microsoft® Azure

In Microsoft Azure, add the Account to the Azure Information Protection Administrator Role.

__Step 1 –__ Log into __http://portal.azure.com__ with Azure credentials and select __Microsoft Entra ID__ from the list of resources on the left-hand pane.

__Step 2 –__ Navigate to __Roles and Administrators__. On the Administrative Roles page, select the __Azure Information Protection Administrator__ role.

__Step 3 –__ Use the __Add Assignment__ button to display the Add assignments pane. Search for the name of the new service principal account (the __DisplayName__ entered in PowerShell) and add it to the list of assignments.

The Service Principal Account is now successfully added to the Azure Information Protection Administrator role.

## Enterprise Auditor Configurations

Before Enterprise Auditor can scan for AIP labels, two configurations must be done prior to the initial scan.

- [Azure Connection Profile ](#azure-connection-profile)
- [Configure FSAA Data Collector](#configure-fsaa-data-collector)

### Azure Connection Profile

To collect tags for files protected with Azure Information Protection, an Azure connection profile must be configured in Enterprise Auditor before an FSAA scan runs. See the [Global Settings](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/overview.md) topic for additional information on how to set up a connection profile at the global level.

__Step 1 –__ In Enterprise Auditor, add a credential for an Azure Active Directory account type to the existing Connection Profile used for File System scanning. Supply the Client ID field with the __AppPrincipalID__ and the Key field with the __Symmetric key__ created upon creation of the new service principal.

__Step 2 –__ At the job level, apply the connection profile that contains both the Microsoft Entra ID credential and credentials required for File System scanning under the __Jobs__ > [__Job__] > __Settings__ > __Connection__ node.

__Step 3 –__ Ensure that the job is configured correctly before running a scan. See the [Configure FSAA Data Collector](#configure-fsaa-data-collector) topic for additional information.

An Azure Connection Profile has now been successfully created for an FSAA scan.

### Configure FSAA Data Collector

In Enterprise Auditor, configure the FSAA Data Collector wizard pages to scan files protected by Azure Information Protection. This can be done for both FSAA System Scans and SEEK System Scans. In the FSAA Data Collector Wizard, configure the following menus to scan for AIP protection labels:

For FSAA System Scans:

- Scan Server Selection – Choose the server that scanning is executed on. Target the server that has the Rights Management Service Client 2.1 installed where the applet is running.

  - This may be a proxy server, file server (applet mode), or the local Enterprise Auditor console depending on scan configuration
- Scan Settings – Select the __Enable scanning of files protected by Azure Information Protection__ checkbox to add AIP files to the scan criteria
- Azure Tenant Mapping page – Add the __AppPrincipalID__ (App ID) and the __Domain Name__ or __Tenant ID__

  _Remember,_ the Azure Tenant Mapping page is only visible when the __Enable scanning of files protected by Azure Information Protection__ checkbox is selected on the Scan Settings page.
- Default Scoping Options

  - File Details tab – __Include files protected by Azure Information Protection (AIP)__
  - File Properties (Folder Summary) – __Include AIP Protected Files__
- Scoping Options – if needed, scope to a specific subset of resources on a selected host

For SEEK System Scans:

- Scan Server Selection – Choose the server that scanning is executed on. Target the server that has the Rights Management Service Client 2.1 installed where the applet is running.

  - This may be a proxy server, file server (applet mode), or the local Enterprise Auditor console depending on scan configuration
- Scan Settings – Select the __Enable scanning of files protected by Azure Information Protection__ checkbox to add AIP files to the scan criteria
- Azure Tenant Mapping page – Add the __AppPrincipalID__ (App ID) and the __Domain Name__ or __Tenant ID__

  _Remember,_ the Azure Tenant Mapping page is only visible when the __Enable scanning of files protected by Azure Information Protection__ checkbox is selected on the Scan Settings page.
- Scoping Options – if needed, scope to a specific subset of resources on a selected host
- Sensitive Data Settings – Select __Decrypt Files Protected by Azure Information Protection__. This page only applies for SEEK scans.

See the FileSystemAccess Data Collector section in the [File System Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/filesystem/overview.md) topic for additional information on these scoping options.

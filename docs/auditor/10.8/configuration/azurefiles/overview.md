---
title: "Azure Files Configuration Overview"
description: "Configure Azure Files for monitoring with Netwrix Auditor v10.8"
sidebar_position: 1
---

# Azure Files Configuration Overview

Azure Files is a cloud-based file storage service that provides shared file storage accessible via the Server Message Block (SMB) protocol. To monitor Azure Files with Netwrix Auditor, you need to configure audit logging and permissions in your Azure environment.

## Prerequisites

Before configuring Azure Files monitoring, ensure you have:

### Azure Environment Requirements
- **Azure Subscription**: Active Azure subscription with Azure Files storage accounts  
- **Azure Active Directory**: Access to Azure AD tenant administration
- **Storage Accounts**: Azure storage accounts containing file shares to monitor

### Required Permissions
- **Global Administrator** or **Security Administrator** role in Azure AD
- **Storage Account Contributor** role on target storage accounts
- **Resource Group Reader** access to storage account resource groups

## Configuration Steps Overview

The Azure Files configuration process involves several key steps:

1. **[Azure Application Registration](#azure-application-registration)** - Create and configure Azure AD application
2. **[Storage Account Configuration](#storage-account-configuration)** - Configure audit logging for file shares
3. **[Permissions Setup](#permissions-setup)** - Assign necessary permissions to the monitoring application
4. **[Audit Log Storage](#audit-log-storage)** - Configure audit log collection and storage

## Azure Application Registration

### Create Azure AD Application

1. Navigate to **Azure Active Directory > App registrations** in the Azure portal
2. Click **New registration**
3. Configure the application:
   - **Name**: `Netwrix-Auditor-AzureFiles-Monitor`
   - **Supported account types**: Accounts in this organizational directory only
   - **Redirect URI**: Leave blank
4. Click **Register**

### Configure Application Credentials

1. In the registered application, go to **Certificates & secrets**
2. Click **New client secret**
3. Configure the secret:
   - **Description**: `Netwrix Auditor Access Secret`
   - **Expires**: Choose appropriate expiration (recommended: 24 months)
4. **Important**: Copy and securely store the secret value immediately

### Required Application Information

Record the following information for Netwrix Auditor configuration:
- **Tenant ID**: From Azure AD properties
- **Application (Client) ID**: From the app registration overview
- **Client Secret**: Created in the previous step

## Storage Account Configuration

### Enable Audit Logging

For each Azure storage account containing file shares to monitor:

1. Navigate to **Storage Account > Monitoring > Diagnostic settings**
2. Click **Add diagnostic setting**
3. Configure audit logging:
   - **Name**: `Netwrix-AzureFiles-Audit`
   - **Categories**: Select all file service categories:
     - StorageRead
     - StorageWrite
     - StorageDelete
4. **Destination**: Configure to send logs to:
   - Storage account (for Netwrix Auditor collection)
   - Log Analytics workspace (optional, for additional analysis)

### File Share Configuration

1. Navigate to **Storage Account > File shares**
2. For each file share to monitor:
   - Ensure **Access tier** is set appropriately
   - Configure **Backup** if required for compliance
   - Review **Access policies** and permissions

## Permissions Setup

### Microsoft Graph API Permissions

The Azure application requires the following Microsoft Graph permissions:

#### Application Permissions (Admin Consent Required)
- **Directory.Read.All**: Read directory data
- **User.Read.All**: Read all users' profiles

### Azure Storage Permissions

#### Storage Account Level
- **Storage Blob Data Reader**: Read audit logs from storage containers
- **Storage File Data SMB Share Reader**: Read file share data and metadata

#### Resource Group Level  
- **Reader**: List and view storage accounts in the resource group

### Assign Permissions

#### Graph API Permissions
1. In the Azure AD application, go to **API permissions**
2. Click **Add a permission > Microsoft Graph > Application permissions**
3. Select the required permissions listed above
4. Click **Grant admin consent** for your organization

#### Storage Permissions
1. Navigate to each **Storage Account > Access control (IAM)**
2. Click **Add > Add role assignment**
3. Assign the following roles to your application:
   - **Storage Blob Data Reader**
   - **Storage File Data SMB Share Reader**

## Audit Log Storage

### Create Dedicated Storage Account

It's recommended to create a separate storage account for audit logs:

1. Create new storage account: `netwrixauditlogs[suffix]`
2. Configure storage settings:
   - **Performance**: Standard
   - **Replication**: LRS or GRS based on compliance requirements
   - **Access tier**: Hot (for frequent access to recent logs)

### Configure Log Collection

1. Navigate to the audit log storage account
2. Create containers for audit data organization:
   - `azurefiles-audit-logs`
   - `file-access-logs`
   - `permission-change-logs`

## Network and Security Considerations

### Network Access
- Ensure Netwrix Auditor can reach Azure endpoints (*.core.windows.net)
- Configure firewall rules if necessary
- Consider using Azure Private Endpoints for enhanced security

### Security Best Practices
- **Principle of Least Privilege**: Grant only necessary permissions
- **Regular Secret Rotation**: Rotate client secrets regularly
- **Monitor Application Usage**: Review application access logs
- **Conditional Access**: Consider applying conditional access policies

## Troubleshooting Common Issues

### Authentication Problems
- Verify Tenant ID is correct (use ID, not name)
- Ensure client secret hasn't expired
- Check application permissions are granted with admin consent

### Permission Issues
- Verify storage account role assignments
- Check resource group reader access
- Ensure Microsoft Graph permissions are application-level, not delegated

### Audit Log Collection Issues
- Verify diagnostic settings are properly configured
- Check storage account accessibility from Netwrix Auditor
- Review audit log retention policies

## Next Steps

After completing the Azure Files configuration:

1. **Test Connectivity**: Verify Netwrix Auditor can authenticate and access storage accounts
2. **Create Monitoring Plan**: Configure Azure Files monitoring in Netwrix Auditor
3. **Validate Data Collection**: Confirm audit events are being collected properly
4. **Set Up Alerting**: Configure alerts for suspicious activities

For detailed instructions on creating the monitoring plan in Netwrix Auditor, see the [Azure Files Monitoring Plan](/docs/auditor/10.8/admin/monitoringplans/azurefiles/overview.md) documentation.
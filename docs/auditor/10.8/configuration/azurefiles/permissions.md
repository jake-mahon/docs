---
title: "Azure Files Permissions"
description: "Detailed permissions configuration for Azure Files monitoring"
sidebar_position: 2
---

# Azure Files Permissions

This document provides detailed information about the permissions required to monitor Azure Files with Netwrix Auditor, including specific steps for configuring each permission level.

## Permission Types Overview

Azure Files monitoring requires permissions at multiple levels:
- **Azure Active Directory**: Application permissions for Graph API access
- **Storage Account**: Access to file shares and audit logs
- **Resource Group**: Resource discovery and management
- **Subscription**: Optional, for broader resource access

## Azure Active Directory Permissions

### Required Microsoft Graph Permissions

#### Application Permissions (Requires Admin Consent)

| Permission | Scope | Justification |
|------------|--------|---------------|
| `Directory.Read.All` | Read all directory objects | Required to read user and group information for audit events |
| `User.Read.All` | Read all users' full profiles | Needed to resolve user identities in file access events |

#### Optional Enhanced Permissions

| Permission | Scope | Use Case |
|------------|--------|----------|
| `Group.Read.All` | Read all groups | Enhanced group membership resolution |
| `Application.Read.All` | Read applications | Track application-based file access |

### Configuring Azure AD Permissions

#### Method 1: Azure Portal
1. Navigate to **Azure Active Directory > App registrations**
2. Select your Netwrix Auditor application
3. Go to **API permissions**
4. Click **Add a permission**
5. Select **Microsoft Graph > Application permissions**
6. Search for and select required permissions:
   - `Directory.Read.All`
   - `User.Read.All`
7. Click **Add permissions**
8. **Critical**: Click **Grant admin consent for [Your Organization]**

#### Method 2: PowerShell
```powershell
# Connect to Azure AD
Connect-AzureAD

# Get the service principal for your application
$appId = "YOUR_APPLICATION_ID"
$sp = Get-AzureADServicePrincipal -Filter "AppId eq '$appId'"

# Get Microsoft Graph service principal
$graphSP = Get-AzureADServicePrincipal -Filter "AppId eq '00000003-0000-0000-c000-000000000000'"

# Add Directory.Read.All permission
$directoryReadPermission = $graphSP.AppRoles | Where-Object {$_.Value -eq "Directory.Read.All"}
New-AzureADServiceAppRoleAssignment -ObjectId $sp.ObjectId -PrincipalId $sp.ObjectId -ResourceId $graphSP.ObjectId -Id $directoryReadPermission.Id

# Add User.Read.All permission  
$userReadPermission = $graphSP.AppRoles | Where-Object {$_.Value -eq "User.Read.All"}
New-AzureADServiceAppRoleAssignment -ObjectId $sp.ObjectId -PrincipalId $sp.ObjectId -ResourceId $graphSP.ObjectId -Id $userReadPermission.Id
```

## Storage Account Permissions

### Required Storage Roles

#### Primary File Share Access
| Role | Scope | Purpose |
|------|--------|---------|
| `Storage File Data SMB Share Reader` | Storage Account | Read file share data and metadata |
| `Storage Blob Data Reader` | Storage Account | Access audit logs stored as blobs |

#### Alternative Broader Access (Less Secure)
| Role | Scope | Purpose |
|------|--------|---------|
| `Storage Account Contributor` | Storage Account | Full storage account access (not recommended) |

### Configuring Storage Account Permissions

#### Method 1: Azure Portal
1. Navigate to **Storage Account > Access control (IAM)**
2. Click **Add > Add role assignment**
3. For each required role:
   - **Role**: Select from required roles above
   - **Assign access to**: User, group, or service principal
   - **Select**: Search for your Netwrix Auditor application
   - Click **Save**

#### Method 2: Azure CLI
```bash
# Variables
SUBSCRIPTION_ID="your-subscription-id"
RESOURCE_GROUP="your-resource-group"
STORAGE_ACCOUNT="your-storage-account"
APP_OBJECT_ID="your-app-object-id"

# Assign Storage File Data SMB Share Reader
az role assignment create \
  --assignee $APP_OBJECT_ID \
  --role "Storage File Data SMB Share Reader" \
  --scope "/subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP/providers/Microsoft.Storage/storageAccounts/$STORAGE_ACCOUNT"

# Assign Storage Blob Data Reader
az role assignment create \
  --assignee $APP_OBJECT_ID \
  --role "Storage Blob Data Reader" \
  --scope "/subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP/providers/Microsoft.Storage/storageAccounts/$STORAGE_ACCOUNT"
```

#### Method 3: PowerShell
```powershell
# Connect to Azure
Connect-AzAccount

# Variables
$subscriptionId = "your-subscription-id"
$resourceGroupName = "your-resource-group"
$storageAccountName = "your-storage-account"
$appObjectId = "your-app-object-id"

# Set context
Set-AzContext -SubscriptionId $subscriptionId

# Get storage account resource
$storageAccount = Get-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName

# Assign Storage File Data SMB Share Reader
New-AzRoleAssignment -ObjectId $appObjectId -RoleDefinitionName "Storage File Data SMB Share Reader" -Scope $storageAccount.Id

# Assign Storage Blob Data Reader
New-AzRoleAssignment -ObjectId $appObjectId -RoleDefinitionName "Storage Blob Data Reader" -Scope $storageAccount.Id
```

## Resource Group Permissions

### Required Resource Group Roles

| Role | Scope | Purpose |
|------|--------|---------|
| `Reader` | Resource Group | List and discover storage accounts |

### Configuring Resource Group Permissions

#### Azure Portal Method
1. Navigate to **Resource Groups > [Your Resource Group] > Access control (IAM)**
2. Click **Add > Add role assignment**
3. Configure assignment:
   - **Role**: Reader
   - **Assign access to**: User, group, or service principal
   - **Select**: Your Netwrix Auditor application
4. Click **Save**

## Subscription-Level Permissions (Optional)

### Optional Subscription Roles

| Role | Scope | Use Case |
|------|--------|----------|
| `Reader` | Subscription | Discovery across multiple resource groups |
| `Storage Account Contributor` | Subscription | Manage storage accounts (typically not needed) |

**Note**: Subscription-level permissions are generally not required for Azure Files monitoring and should be avoided following the principle of least privilege.

## Permission Validation

### Verify Azure AD Permissions
```powershell
# Connect and get application permissions
Connect-AzureAD
$appId = "YOUR_APPLICATION_ID"
$sp = Get-AzureADServicePrincipal -Filter "AppId eq '$appId'"
Get-AzureADServiceAppRoleAssignment -ObjectId $sp.ObjectId
```

### Verify Storage Account Permissions
```bash
# List role assignments for storage account
az role assignment list --scope "/subscriptions/SUBSCRIPTION_ID/resourceGroups/RESOURCE_GROUP/providers/Microsoft.Storage/storageAccounts/STORAGE_ACCOUNT" --assignee APP_OBJECT_ID
```

### Test Connectivity
```powershell
# Test Graph API access
$appId = "YOUR_APPLICATION_ID"
$clientSecret = "YOUR_CLIENT_SECRET"
$tenantId = "YOUR_TENANT_ID"

# Get access token
$body = @{
    grant_type = "client_credentials"
    client_id = $appId
    client_secret = $clientSecret
    scope = "https://graph.microsoft.com/.default"
}

$response = Invoke-RestMethod -Uri "https://login.microsoftonline.com/$tenantId/oauth2/v2.0/token" -Method Post -Body $body
$accessToken = $response.access_token

# Test Graph API call
$headers = @{Authorization = "Bearer $accessToken"}
Invoke-RestMethod -Uri "https://graph.microsoft.com/v1.0/users?`$top=1" -Headers $headers
```

## Troubleshooting Permission Issues

### Common Permission Problems

#### Insufficient Privileges Error
**Symptoms**: `Insufficient privileges to complete the operation`
**Solutions**:
- Verify admin consent was granted for Graph API permissions
- Check that application permissions (not delegated) are configured
- Ensure the service principal has the required storage roles

#### Access Denied to Storage Account
**Symptoms**: `Access denied` when accessing file shares or audit logs
**Solutions**:
- Verify storage account role assignments
- Check that roles are assigned to the service principal, not the user
- Ensure storage account firewall settings allow access

#### Authentication Failed
**Symptoms**: `Authentication failed` or `Invalid client secret`
**Solutions**:
- Verify Tenant ID is correct (use ID, not display name)
- Check client secret hasn't expired
- Ensure application ID is correct

### Permission Auditing

#### Regular Permission Reviews
1. **Monthly**: Review application permissions and role assignments
2. **Quarterly**: Validate that permissions follow principle of least privilege
3. **Annually**: Rotate client secrets and review access patterns

#### Monitoring Permission Usage
- Enable Azure AD sign-in logs for the application
- Monitor Azure Activity Log for permission-related events
- Set up alerts for permission changes

## Security Best Practices

### Principle of Least Privilege
- Grant only the minimum permissions required
- Use resource-specific roles rather than broad administrative roles
- Regularly review and remove unused permissions

### Secret Management
- Rotate client secrets every 12-24 months
- Use Azure Key Vault for secret storage when possible
- Monitor secret expiration dates

### Access Monitoring
- Enable logging for the monitoring application
- Set up alerts for unusual access patterns
- Regular audit permission usage

## Next Steps

After configuring permissions:
1. **Test Connectivity**: Verify the application can authenticate and access resources
2. **Create Monitoring Plan**: Configure Azure Files monitoring in Netwrix Auditor
3. **Validate Data Collection**: Ensure audit events are collected successfully
4. **Implement Monitoring**: Set up alerts for permission changes and access anomalies
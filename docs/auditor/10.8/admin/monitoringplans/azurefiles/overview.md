---
title: "Azure Files Monitoring Plan"
description: "Create and configure Azure Files monitoring plans in Netwrix Auditor v10.8"
sidebar_position: 1
---

# Azure Files Monitoring Plan

**New in Netwrix Auditor v10.8:** Azure Files monitoring provides comprehensive visibility into your Azure file storage environment, tracking file and folder changes, permission modifications, and access attempts across your Azure storage accounts.

## Prerequisites

Before creating an Azure Files monitoring plan, ensure you have completed:

### Configuration Requirements
- **[Azure Files Configuration](/docs/auditor/10.8/configuration/azurefiles/overview.md)** - Azure environment setup and permissions
- **[Protocols and Ports Required](/docs/auditor/10.8/requirements/ports.md)** - Network connectivity configuration
- **[Data Collecting Account](/docs/auditor/10.8/admin/monitoringplans/dataaccounts.md)** - Service account configuration

### Azure Prerequisites
- **Azure Application**: Registered Azure AD application with proper permissions
- **Storage Accounts**: Azure storage accounts with file shares configured for monitoring
- **Audit Logging**: Diagnostic settings enabled for file storage audit logs

## Creating Azure Files Monitoring Plan

### Step 1: Create New Monitoring Plan

1. Navigate to **Home > Monitoring Plans** in Netwrix Auditor
2. Click **Create New Monitoring Plan**
3. Configure basic plan settings:
   - **Plan Name**: Descriptive name (e.g., "Azure Files - Production")
   - **Description**: Optional description of monitored resources
   - **Schedule**: Configure collection frequency (recommended: every 15-30 minutes)

### Step 2: Add Azure Files Data Source

1. In the monitoring plan, click **Add Data Source**
2. Select **Azure Files** from the available data collectors
3. Configure data source properties:

#### General Settings
| Setting | Description | Example |
|---------|-------------|---------|
| **Data Source Name** | Descriptive name for this data source | "Production Azure Files" |
| **Description** | Optional detailed description | "File shares for finance and HR departments" |

#### Azure Connection Settings
| Setting | Description | Required |
|---------|-------------|----------|
| **Tenant ID** | Azure Active Directory tenant identifier | ✅ |
| **Application ID** | Azure AD application (client) ID | ✅ |
| **Application Secret** | Client secret for the Azure application | ✅ |

**Important**: Use the Tenant ID (GUID format) rather than the tenant name for more reliable authentication.

#### Storage Account Configuration
| Setting | Description | Required |
|---------|-------------|----------|
| **File Share Storage Account** | Name of storage account containing file shares | ✅ |
| **Audit Log Storage Account** | Storage account for collecting audit logs | ✅ |
| **Resource Group** | Resource group containing the storage accounts | ✅ |

### Step 3: Configure Monitoring Options

Select the monitoring capabilities to enable:

#### Data Collection Options
| Option | Description | Impact |
|--------|-------------|--------|
| **Monitor this data source and collect activity data** | Enable basic activity monitoring | Standard performance impact |
| **Collect data for state-in-time reports** | Store daily snapshots for compliance reporting | Increased storage requirements |
| **Monitor file and folder changes** | Track file/folder creation, modification, deletion | Moderate performance impact |
| **Monitor permission changes** | Track access control modifications | Low performance impact |
| **Monitor access attempts** | Log successful and failed file access | High performance impact |

#### Advanced Monitoring Settings
| Option | Description | Recommendation |
|--------|-------------|----------------|
| **Include read operations** | Monitor file read access | Enable for high-security environments only |
| **Monitor metadata changes** | Track file attribute modifications | Enable for compliance requirements |
| **Collect user activity details** | Detailed user interaction logging | Enable for forensic capabilities |

**⚠️ Performance Note**: Enabling read operation monitoring significantly increases audit event volume and may impact performance.

### Step 4: Add Storage Accounts for Monitoring

1. Click **Add Item** to specify storage accounts to monitor
2. For each storage account:

#### Item Configuration
| Setting | Description | Example |
|---------|-------------|---------|
| **Storage Account Name** | Azure storage account name | `companyfilestorage` |
| **Resource Group** | Resource group containing the storage account | `rg-files-production` |
| **Region** | Azure region of the storage account | `East US` |

#### File Share Selection
| Setting | Description | Options |
|---------|-------------|---------|
| **Monitor All File Shares** | Monitor all file shares in the storage account | Recommended for comprehensive monitoring |
| **Specific File Shares** | Select individual file shares to monitor | Use for targeted monitoring |

#### Monitoring Scope
Configure what to monitor within selected file shares:

| Scope Option | Description | Use Case |
|--------------|-------------|----------|
| **All Files and Folders** | Monitor entire file share content | Complete visibility |
| **Specific Paths** | Monitor designated folders only | Focused monitoring on sensitive data |
| **Exclude Paths** | Exclude specific folders from monitoring | Reduce noise from temp/cache folders |

### Step 5: Configure Audit Database

Set up the database for storing Azure Files audit data:

#### Database Configuration
| Setting | Description | Recommendation |
|---------|-------------|----------------|
| **Database Server** | SQL Server instance for audit data | Use dedicated audit database server |
| **Database Name** | Name for Azure Files audit database | `NetwrixAuditor_AzureFiles` |
| **Authentication** | SQL Server or Windows authentication | Use Windows authentication when possible |

#### Database Sizing Considerations
- **Initial Size**: Minimum 1 GB for small environments
- **Growth**: 10-50 MB per 1000 files monitored per day
- **Retention**: Configure based on compliance requirements (typically 1-7 years)

### Step 6: Configure Alert and Notification Settings

Set up alerts for Azure Files monitoring:

#### Email Notifications
| Setting | Description | Example |
|---------|-------------|---------|
| **SMTP Server** | Mail server for sending alerts | `smtp.company.com` |
| **Recipients** | Email addresses for notifications | `security@company.com` |
| **Alert Frequency** | How often to send digest emails | Daily summary recommended |

#### Alert Triggers
Configure alerts for specific events:

| Event Type | Alert Condition | Business Impact |
|------------|----------------|-----------------|
| **Mass File Deletion** | >100 files deleted by single user in 1 hour | High - Potential data loss |
| **Permission Escalation** | User granted elevated file share permissions | Medium - Security risk |
| **Unusual Access Patterns** | Access outside normal business hours | Medium - Potential insider threat |
| **Failed Access Attempts** | Multiple failed access attempts | Low - Possible unauthorized access |

### Step 7: Test and Validate Configuration

#### Connectivity Test
1. Click **Test Connection** to verify Azure authentication
2. Confirm successful connection to:
   - Azure Active Directory
   - Storage accounts
   - Audit log storage

#### Data Collection Validation
1. **Initial Scan**: Allow 15-30 minutes for initial data collection
2. **Verify Events**: Check that file activities are being captured
3. **Test Alerts**: Perform test activities to validate alert triggers

## Monitoring Scope and Items

### File Share Monitoring Scope

Configure monitoring scope for optimal coverage:

#### Inclusion Patterns
```
/finance/*          - Monitor all files in finance folder
/hr/sensitive/*     - Monitor sensitive HR documents
*.docx             - Monitor all Word documents
*.xlsx             - Monitor all Excel files
```

#### Exclusion Patterns
```
/temp/*            - Exclude temporary files
~*                 - Exclude temporary Office files
*.tmp              - Exclude temporary files
/logs/*            - Exclude log directories
```

### User and Group Monitoring

Configure which users and activities to monitor:

#### High-Priority Users
- Administrators with elevated permissions
- Service accounts accessing file shares
- External users with file share access
- Recently terminated employees (during transition period)

#### Activity Priorities
1. **Critical**: File deletion, permission changes, bulk operations
2. **Important**: File creation, modification, unusual access patterns
3. **Informational**: Read operations, metadata changes

## Performance Optimization

### Collection Frequency Optimization

| Environment Size | Recommended Frequency | Rationale |
|------------------|----------------------|-----------|
| Small (<1000 files) | Every 15 minutes | Real-time monitoring with minimal impact |
| Medium (1000-10000 files) | Every 30 minutes | Balance between timeliness and performance |
| Large (>10000 files) | Every 60 minutes | Reduce processing overhead |

### Storage Account Optimization

#### Multiple Storage Accounts
- Create separate monitoring plans for different business units
- Distribute monitoring load across multiple data sources
- Group related file shares in single monitoring plans

#### Regional Considerations
- Monitor storage accounts in same region as Netwrix Auditor when possible
- Account for network latency in collection scheduling
- Consider using multiple Netwrix Auditor instances for global deployments

## Troubleshooting Common Issues

### Authentication Problems

**Issue**: "Authentication failed" or "Access denied"
**Solutions**:
1. Verify Tenant ID is correct (use ID, not name)
2. Check application secret hasn't expired
3. Confirm admin consent granted for Graph API permissions
4. Validate storage account role assignments

### Data Collection Issues

**Issue**: "No data collected" or "Events missing"
**Solutions**:
1. Verify diagnostic settings enabled on storage accounts
2. Check audit log storage account accessibility
3. Confirm monitoring plan is active and scheduled
4. Review exclusion patterns for over-filtering

### Performance Problems

**Issue**: Slow data collection or high system resource usage
**Solutions**:
1. Reduce monitoring frequency for large environments
2. Disable read operation monitoring if not required
3. Optimize inclusion/exclusion patterns
4. Consider splitting large storage accounts across multiple plans

## Security Considerations

### Data Privacy
- **Audit Log Content**: May include file names and metadata
- **User Information**: Contains user identities and access patterns
- **Compliance**: Ensure audit data handling meets regulatory requirements

### Access Control
- **Monitoring Data**: Restrict access to audit data based on business need
- **Administrative Access**: Limit who can modify monitoring plans
- **Credential Management**: Securely store and rotate Azure application secrets

## Next Steps

After creating the Azure Files monitoring plan:

1. **Monitor Performance**: Track initial collection performance and adjust settings
2. **Configure Reports**: Set up regular compliance and security reports
3. **Establish Baselines**: Create baseline activity patterns for anomaly detection
4. **User Training**: Train security team on Azure Files audit capabilities
5. **Regular Reviews**: Schedule periodic reviews of monitoring scope and effectiveness

For detailed Azure Files configuration requirements, see [Azure Files Configuration](/docs/auditor/10.8/configuration/azurefiles/overview.md).
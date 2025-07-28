---
title: "Azure Files Monitoring Scope"
description: "Configure monitoring scope for Azure Files in Netwrix Auditor v10.8"
sidebar_position: 2
---

# Azure Files Monitoring Scope

Configuring the appropriate monitoring scope for Azure Files is critical for balancing comprehensive visibility with performance and storage requirements. This document provides guidance on defining what files, folders, users, and activities to monitor.

## Scope Configuration Overview

Azure Files monitoring scope can be configured at multiple levels:
- **Storage Account Level**: Which storage accounts to monitor
- **File Share Level**: Which file shares within storage accounts to monitor
- **Path Level**: Specific folders and files to include or exclude
- **User Level**: Which users and groups to monitor
- **Activity Level**: Which types of activities to track

## File and Folder Scope

### Inclusion Strategies

#### Department-Based Monitoring
Monitor file shares based on organizational structure:

```
Finance Department:
  /finance/budgets/*
  /finance/reports/*
  /finance/invoices/*

Human Resources:
  /hr/personnel/*
  /hr/policies/*
  /hr/payroll/*

Legal Department:
  /legal/contracts/*
  /legal/compliance/*
  /legal/litigation/*
```

#### Sensitivity-Based Monitoring
Focus on sensitive data locations:

```
High Sensitivity:
  /confidential/*
  /executive/*
  /security/*
  /intellectual-property/*

Medium Sensitivity:
  /internal/*
  /projects/*
  /customer-data/*

Low Sensitivity:
  /public/*
  /archived/*
  /templates/*
```

#### File Type-Based Monitoring
Monitor specific file types across all locations:

```
Financial Documents:
  *.xlsx
  *.xls
  *budget*
  *financial*

Legal Documents:
  *.docx
  *.pdf
  *contract*
  *agreement*

Code and IP:
  *.cs
  *.js
  *.py
  *.config
```

### Exclusion Strategies

#### System and Temporary Files
Exclude files that create excessive noise:

```
Temporary Files:
  ~*
  *.tmp
  *.temp
  desktop.ini
  thumbs.db

System Folders:
  /System Volume Information/*
  /$RECYCLE.BIN/*
  /Windows/*
  /.vs/*

Cache and Logs:
  /cache/*
  /logs/*
  /temp/*
  *.log
  *.cache
```

#### Application-Specific Exclusions
Exclude application folders that generate high activity:

```
Office Applications:
  ~$*
  *.tmp
  /SharePoint Drafts/*

Development Tools:
  /bin/*
  /obj/*
  /node_modules/*
  /.git/*

Media Files (if not sensitive):
  *.mp4
  *.avi
  *.mov
  *.mp3
```

### Path Configuration Examples

#### Complete File Share Monitoring
Monitor all content in critical file shares:

```xml
<FileShareScope>
  <Include>
    <Path>/*</Path>
  </Include>
  <Exclude>
    <Path>/temp/*</Path>
    <Path>*.tmp</Path>
    <Path>~*</Path>
  </Exclude>
</FileShareScope>
```

#### Selective Path Monitoring
Monitor only specific business-critical folders:

```xml
<FileShareScope>
  <Include>
    <Path>/finance/*</Path>
    <Path>/hr/sensitive/*</Path>
    <Path>/legal/contracts/*</Path>
    <Path>/executive/*</Path>
  </Include>
  <Exclude>
    <Path>/finance/temp/*</Path>
    <Path>*.tmp</Path>
  </Exclude>
</FileShareScope>
```

## User and Group Scope

### High-Priority Users

#### Administrative Users
Monitor users with elevated privileges:

```
IT Administrators:
  - Domain Admins
  - Storage Admins
  - Azure Admins
  - Service Account owners

Business Administrators:
  - Finance Managers
  - HR Directors
  - Legal Counsel
  - Executive Assistants
```

#### Service Accounts
Monitor automated processes and applications:

```
Service Accounts:
  - Backup services
  - Automated reporting systems
  - Integration applications
  - Synchronization services
```

#### External Users
Monitor external access and contractors:

```
External Users:
  - Guest accounts
  - Contractor accounts
  - Vendor access accounts
  - Temporary accounts
```

### User-Based Monitoring Rules

#### Executive-Level Users
```xml
<UserScope Type="Executive">
  <Include>
    <User>ceo@company.com</User>
    <User>cfo@company.com</User>
    <Group>C-Level Executives</Group>
  </Include>
  <MonitorActivities>
    <Activity>All</Activity>
  </MonitorActivities>
  <AlertLevel>High</AlertLevel>
</UserScope>
```

#### Privileged Users
```xml
<UserScope Type="Privileged">
  <Include>
    <Group>Domain Admins</Group>
    <Group>Storage Administrators</Group>
  </Include>
  <MonitorActivities>
    <Activity>FileDelete</Activity>
    <Activity>PermissionChange</Activity>
    <Activity>BulkOperations</Activity>
  </MonitorActivities>
  <AlertLevel>Medium</AlertLevel>
</UserScope>
```

## Activity Scope Configuration

### Activity Types

#### File Operations
Configure which file operations to monitor:

| Activity | Priority | Performance Impact | Use Case |
|----------|----------|-------------------|----------|
| **Create** | High | Low | Track new document creation |
| **Modify** | High | Low | Monitor document changes |
| **Delete** | Critical | Low | Detect data loss events |
| **Rename** | Medium | Low | Track file organization changes |
| **Move** | Medium | Low | Monitor file relocation |

#### Access Operations
Configure access monitoring with performance considerations:

| Activity | Priority | Performance Impact | Use Case |
|----------|----------|-------------------|----------|
| **Read** | Low | Very High | Forensic investigations only |
| **Open** | Medium | High | Track file usage patterns |
| **Download** | High | Medium | Monitor data exfiltration |
| **Copy** | High | Medium | Track data duplication |

#### Permission Operations
Monitor security-related changes:

| Activity | Priority | Performance Impact | Use Case |
|----------|----------|-------------------|----------|
| **Permission Grant** | Critical | Low | Detect privilege escalation |
| **Permission Revoke** | High | Low | Monitor access removal |
| **Owner Change** | Critical | Low | Track ownership transfers |
| **Share Creation** | High | Low | Monitor new shared access |

### Activity Configuration Examples

#### Security-Focused Monitoring
```xml
<ActivityScope Type="Security">
  <Include>
    <Activity>Delete</Activity>
    <Activity>PermissionChange</Activity>
    <Activity>OwnerChange</Activity>
    <Activity>BulkDelete</Activity>
    <Activity>UnusualAccess</Activity>
  </Include>
  <Thresholds>
    <BulkDelete>50</BulkDelete>
    <UnusualHours>18:00-08:00</UnusualHours>
  </Thresholds>
</ActivityScope>
```

#### Compliance-Focused Monitoring
```xml
<ActivityScope Type="Compliance">
  <Include>
    <Activity>Create</Activity>
    <Activity>Modify</Activity>
    <Activity>Delete</Activity>
    <Activity>PermissionChange</Activity>
    <Activity>Access</Activity>
  </Include>
  <Retention>
    <Years>7</Years>
  </Retention>
</ActivityScope>
```

## Time-Based Scope

### Business Hours Configuration
Focus monitoring on business-critical time periods:

```xml
<TimeScope>
  <BusinessHours>
    <Monday>08:00-18:00</Monday>
    <Tuesday>08:00-18:00</Tuesday>
    <Wednesday>08:00-18:00</Wednesday>
    <Thursday>08:00-18:00</Thursday>
    <Friday>08:00-18:00</Friday>
  </BusinessHours>
  <HighAlertPeriods>
    <Period>18:00-08:00</Period>
    <Period>Saturday-Sunday</Period>
    <Period>Holidays</Period>
  </HighAlertPeriods>
</TimeScope>
```

### Seasonal Monitoring Adjustments
Adjust monitoring scope based on business cycles:

```
High Activity Periods:
  - Financial year-end (increased finance folder monitoring)
  - Budget planning season (enhanced budget document tracking)
  - Audit periods (comprehensive compliance monitoring)
  - Project deadlines (expanded project folder monitoring)

Low Activity Periods:
  - Company holidays (reduced monitoring frequency)
  - Vacation seasons (focus on administrative activities)
  - Maintenance windows (exclude system-generated activities)
```

## Performance Impact Considerations

### High-Impact Activities to Limit

#### Read Operation Monitoring
```
Impact: Very High
Recommendation: Enable only for:
  - High-security environments
  - Specific sensitive folders
  - Investigation periods
  - Forensic analysis requirements
```

#### Real-Time Monitoring
```
Impact: High
Recommendations:
  - Use 15-30 minute collection intervals instead of real-time
  - Implement during business hours only
  - Focus on critical file shares
```

### Performance Optimization Strategies

#### Tiered Monitoring Approach
```
Tier 1 - Critical (Real-time monitoring):
  - Executive documents
  - Financial data
  - Legal contracts
  - IP/source code

Tier 2 - Important (30-minute intervals):
  - HR documents
  - Customer data
  - Project files
  - Policies

Tier 3 - Standard (Hourly monitoring):
  - General business documents
  - Archived data
  - Templates
  - Public information
```

## Scope Validation and Testing

### Validation Checklist

#### Coverage Validation
- [ ] All critical business data paths included
- [ ] High-risk users covered
- [ ] Sensitive file types monitored
- [ ] Compliance requirements met
- [ ] Security gaps identified and addressed

#### Performance Validation
- [ ] Initial data collection completed within acceptable timeframe
- [ ] System resource usage within limits
- [ ] Network bandwidth impact acceptable
- [ ] Database growth rate manageable

#### Functional Testing
```powershell
# Test scope configuration
$testActivities = @(
    "Create test file in monitored folder",
    "Modify existing monitored document", 
    "Delete file from sensitive location",
    "Change permissions on critical folder",
    "Access file outside business hours"
)

foreach ($activity in $testActivities) {
    Write-Host "Testing: $activity"
    # Perform test activity
    # Verify event captured in Netwrix Auditor
    # Confirm alert triggered if configured
}
```

## Scope Maintenance

### Regular Review Schedule

#### Monthly Reviews
- Review alert frequency and relevance
- Adjust thresholds based on normal activity patterns
- Add new critical paths as business grows
- Remove monitoring for deprecated file shares

#### Quarterly Reviews
- Analyze performance metrics and optimize
- Review user scope for organizational changes
- Update file type monitoring based on new applications
- Assess compliance requirement changes

#### Annual Reviews
- Complete scope assessment against business objectives
- Review and update documentation
- Validate disaster recovery and backup monitoring
- Assess monitoring coverage gaps

### Scope Documentation Template

```markdown
## Azure Files Monitoring Scope - [Environment Name]

### Monitored Storage Accounts
- [List storage accounts and business justification]

### Monitored File Shares
- [List file shares with sensitivity classification]

### Inclusion Rules
- [Document path patterns and rationale]

### Exclusion Rules
- [Document excluded paths and reasons]

### User Scope
- [High-priority users and groups]

### Activity Scope
- [Monitored activities and thresholds]

### Performance Baseline
- [Document expected volumes and performance metrics]

### Review Schedule
- [Next review date and responsible party]
```

## Best Practices Summary

1. **Start Narrow**: Begin with critical data and expand scope gradually
2. **Performance First**: Monitor performance impact before adding extensive scope
3. **Document Rationale**: Maintain clear documentation for scope decisions
4. **Regular Reviews**: Schedule periodic scope reviews and adjustments
5. **Test Changes**: Validate scope changes in test environment first
6. **User Communication**: Inform stakeholders about monitoring scope and privacy implications
7. **Compliance Alignment**: Ensure scope meets regulatory and compliance requirements
8. **Balance Coverage and Performance**: Optimize for business risk while maintaining system performance
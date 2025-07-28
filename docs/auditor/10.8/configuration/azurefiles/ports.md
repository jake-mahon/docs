---
title: "Azure Files Ports and Network Configuration"  
description: "Network ports and connectivity requirements for Azure Files monitoring"
sidebar_position: 3
---

# Azure Files Ports and Network Configuration

This document outlines the network connectivity requirements, ports, and protocols needed for Netwrix Auditor to monitor Azure Files storage accounts.

## Network Connectivity Overview

Azure Files monitoring requires outbound connectivity from Netwrix Auditor to various Azure services over HTTPS (port 443). All communication is initiated from the Netwrix Auditor server to Azure cloud services.

## Required Outbound Connections

### Azure Storage Services

| Service | FQDN Pattern | Port | Protocol | Purpose |
|---------|--------------|------|----------|---------|
| Azure Storage | `*.core.windows.net` | 443 | HTTPS | File share and audit log access |
| Azure Storage | `[storageaccount].file.core.windows.net` | 443 | HTTPS | Specific file share access |
| Azure Storage | `[storageaccount].blob.core.windows.net` | 443 | HTTPS | Audit log blob access |

### Azure Active Directory Services

| Service | FQDN | Port | Protocol | Purpose |
|---------|------|------|----------|---------|
| Azure AD | `login.microsoftonline.com` | 443 | HTTPS | Authentication and token requests |
| Azure AD | `graph.microsoft.com` | 443 | HTTPS | Microsoft Graph API access |
| Azure AD | `[tenant].onmicrosoft.com` | 443 | HTTPS | Tenant-specific authentication |

### Azure Management Services

| Service | FQDN | Port | Protocol | Purpose |
|---------|------|------|----------|---------|
| Azure Resource Manager | `management.azure.com` | 443 | HTTPS | Resource discovery and management |
| Azure Monitor | `[region].monitoring.azure.com` | 443 | HTTPS | Diagnostic data collection |

## Firewall Configuration

### Windows Firewall (Netwrix Auditor Server)

If Windows Firewall is enabled on the Netwrix Auditor server, ensure outbound HTTPS traffic is allowed:

```powershell
# Allow outbound HTTPS traffic for Netwrix Auditor
New-NetFirewallRule -DisplayName "Netwrix Auditor - Azure Files Monitoring" -Direction Outbound -Protocol TCP -LocalPort Any -RemotePort 443 -Action Allow -Program "C:\Program Files\Netwrix Auditor\[AuditorExecutable].exe"
```

### Corporate Firewall Rules

Configure your corporate firewall to allow outbound connections:

#### Method 1: FQDN-Based Rules (Recommended)
```
ALLOW OUTBOUND HTTPS (TCP/443) TO:
- *.core.windows.net
- login.microsoftonline.com  
- graph.microsoft.com
- management.azure.com
- *.monitoring.azure.com
```

#### Method 2: IP Address Ranges
If FQDN filtering is not available, use Azure IP ranges (updated monthly):

1. Download current Azure IP ranges from: https://www.microsoft.com/download/details.aspx?id=56519
2. Extract relevant IP ranges for your Azure region
3. Configure firewall rules for the following service tags:
   - `Storage.[Region]`
   - `AzureActiveDirectory`
   - `AzureResourceManager`
   - `AzureMonitor.[Region]`

**Note**: IP-based rules require regular updates as Azure IP ranges change monthly.

## Proxy Configuration

### Corporate Proxy Settings

If your organization uses a corporate proxy, configure Netwrix Auditor to route Azure traffic through the proxy:

#### Windows Proxy Configuration
```powershell
# Configure system proxy (affects all applications)
netsh winhttp set proxy proxy-server:port

# Configure proxy with authentication
netsh winhttp set proxy proxy-server:port bypass-list="<local>"
```

#### Application-Specific Proxy
Configure proxy settings in Netwrix Auditor configuration files (consult Netwrix documentation for specific file locations):

```xml
<configuration>
  <system.net>
    <defaultProxy>
      <proxy proxyaddress="http://proxy-server:port" 
             bypassonlocal="true" />
    </defaultProxy>
  </system.net>
</configuration>
```

### Proxy Bypass for Internal Resources
Configure proxy bypass for internal resources while routing Azure traffic through proxy:

```
PROXY BYPASS LIST:
- *.internal.company.com
- 192.168.*
- 10.*
- 172.16.*
```

## Network Security Considerations

### SSL/TLS Requirements

All Azure communications use TLS 1.2 or higher:
- Ensure TLS 1.2 is enabled on Netwrix Auditor server
- Disable older SSL/TLS versions for security
- Verify certificate validation is enabled

#### Enable TLS 1.2 on Windows
```powershell
# Enable TLS 1.2 for .NET applications
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\.NETFramework\v4.0.30319" -Name "SchUseStrongCrypto" -Value 1
Set-ItemProperty -Path "HKLM:\SOFTWARE\Wow6432Node\Microsoft\.NETFramework\v4.0.30319" -Name "SchUseStrongCrypto" -Value 1

# Enable TLS 1.2 system-wide
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Client" -Name "Enabled" -Value 1
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Client" -Name "DisabledByDefault" -Value 0
```

### Private Endpoints (Enhanced Security)

For organizations requiring enhanced security, consider using Azure Private Endpoints:

#### Storage Account Private Endpoint
1. Create private endpoint for storage account in your virtual network
2. Configure DNS resolution for private endpoint
3. Ensure Netwrix Auditor can resolve private DNS names
4. Update firewall rules to allow traffic to private IP ranges

#### Network Architecture with Private Endpoints
```
[Netwrix Auditor] → [Corporate Network] → [VPN/ExpressRoute] → [Azure VNet] → [Private Endpoint] → [Storage Account]
```

## DNS Configuration

### DNS Resolution Requirements

Ensure proper DNS resolution for Azure services:

#### Required DNS Records
- `*.core.windows.net` resolves to Azure Storage public IPs
- `login.microsoftonline.com` resolves to Azure AD public IPs
- `graph.microsoft.com` resolves to Microsoft Graph public IPs

#### DNS Testing
```powershell
# Test DNS resolution for key services
nslookup login.microsoftonline.com
nslookup graph.microsoft.com
nslookup [yourstorageaccount].file.core.windows.net
nslookup [yourstorageaccount].blob.core.windows.net
```

### Custom DNS Configuration

For environments with custom DNS servers:

1. Ensure DNS servers can resolve public Azure FQDNs
2. Configure conditional forwarders for `*.azure.com` and `*.microsoft.com`
3. Test resolution from the Netwrix Auditor server

## Bandwidth and Performance Considerations

### Bandwidth Requirements

| Activity | Estimated Bandwidth | Peak Usage |
|----------|-------------------|------------|
| Authentication tokens | < 1 KB/hour | Minimal |
| File metadata collection | 10-100 KB/hour per 1000 files | During initial scan |
| Audit log collection | 1-10 MB/hour per active user | Business hours |
| Graph API queries | 1-5 KB/query | Periodic |

### Performance Optimization

#### Connection Pooling
- Azure Storage SDKs automatically use connection pooling
- Monitor connection limits (typically 100+ concurrent connections)

#### Caching Configuration
```xml
<!-- Example configuration for reducing API calls -->
<caching>
  <userInfoCache durationMinutes="60" />
  <tokenCache durationMinutes="55" />
</caching>
```

## Monitoring Network Connectivity

### Connection Testing Script

```powershell
# Test Azure Files connectivity
function Test-AzureFilesConnectivity {
    param(
        [string]$StorageAccount,
        [string]$TenantId
    )
    
    $endpoints = @(
        "https://login.microsoftonline.com/$TenantId/oauth2/v2.0/token",
        "https://graph.microsoft.com/v1.0/users",
        "https://$StorageAccount.file.core.windows.net",
        "https://$StorageAccount.blob.core.windows.net",
        "https://management.azure.com"
    )
    
    foreach ($endpoint in $endpoints) {
        try {
            $response = Invoke-WebRequest -Uri $endpoint -Method GET -TimeoutSec 10 -UseBasicParsing
            Write-Host "✓ $endpoint - Status: $($response.StatusCode)" -ForegroundColor Green
        }
        catch {
            Write-Host "✗ $endpoint - Error: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}

# Usage
Test-AzureFilesConnectivity -StorageAccount "yourstorageaccount" -TenantId "your-tenant-id"
```

### Network Monitoring Tools

#### Built-in Windows Tools
```cmd
# Test connectivity to Azure endpoints
telnet login.microsoftonline.com 443
telnet graph.microsoft.com 443
telnet yourstorageaccount.file.core.windows.net 443
```

#### PowerShell Network Testing
```powershell
# Test port connectivity
Test-NetConnection -ComputerName "login.microsoftonline.com" -Port 443
Test-NetConnection -ComputerName "graph.microsoft.com" -Port 443
Test-NetConnection -ComputerName "[storageaccount].file.core.windows.net" -Port 443
```

## Troubleshooting Network Issues

### Common Connectivity Problems

#### Firewall Blocking
**Symptoms**: Connection timeout errors, "Unable to connect" messages
**Solutions**:
- Verify outbound HTTPS (port 443) is allowed
- Check corporate firewall logs for blocked connections
- Test connectivity from Netwrix Auditor server

#### DNS Resolution Failures
**Symptoms**: "Host not found" or "Name resolution failed"
**Solutions**:
- Test DNS resolution using `nslookup`
- Verify DNS server configuration
- Check for DNS filtering/blocking

#### Proxy Authentication Issues
**Symptoms**: HTTP 407 Proxy Authentication Required
**Solutions**:
- Configure proxy credentials in application settings
- Verify proxy bypass rules
- Test proxy connectivity manually

#### SSL/TLS Certificate Issues
**Symptoms**: "Certificate validation failed" or "SSL handshake failed"
**Solutions**:
- Update certificate store
- Verify system date/time is correct
- Check for SSL inspection/filtering

### Network Diagnostics

#### Comprehensive Network Test
```powershell
# Comprehensive Azure Files network diagnostic
$testResults = @()

# Test DNS resolution
$dnsTests = @(
    "login.microsoftonline.com",
    "graph.microsoft.com", 
    "[storageaccount].file.core.windows.net",
    "[storageaccount].blob.core.windows.net"
)

foreach ($host in $dnsTests) {
    try {
        $result = Resolve-DnsName -Name $host -ErrorAction Stop
        $testResults += "✓ DNS: $host resolved to $($result.IPAddress -join ', ')"
    }
    catch {
        $testResults += "✗ DNS: $host resolution failed - $($_.Exception.Message)"
    }
}

# Test port connectivity
$portTests = @(
    @{Host="login.microsoftonline.com"; Port=443},
    @{Host="graph.microsoft.com"; Port=443}
)

foreach ($test in $portTests) {
    try {
        $result = Test-NetConnection -ComputerName $test.Host -Port $test.Port -WarningAction SilentlyContinue
        if ($result.TcpTestSucceeded) {
            $testResults += "✓ Port: $($test.Host):$($test.Port) accessible"
        } else {
            $testResults += "✗ Port: $($test.Host):$($test.Port) not accessible"
        }
    }
    catch {
        $testResults += "✗ Port: $($test.Host):$($test.Port) test failed - $($_.Exception.Message)"
    }
}

$testResults | ForEach-Object { Write-Host $_ }
```

## Next Steps

After configuring network connectivity:
1. **Verify Connectivity**: Run network tests to ensure all endpoints are accessible
2. **Test Authentication**: Verify Azure AD authentication works from Netwrix Auditor
3. **Configure Monitoring Plan**: Set up Azure Files monitoring in Netwrix Auditor
4. **Monitor Performance**: Establish baseline performance metrics for monitoring
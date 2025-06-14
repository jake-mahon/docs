# Get-AvailableMessagingServers

The commandlet __Get-AvailableMessagingServers__ retrieves the messaging server(s) available for the configured messaging provider.

## Syntax

```
Get-AvailableMessagingServers  
-IdentityStoreName <string>  
-Provider {o365 | gsuite | exchange2013 | exchange2016 | exchange2019}  
-UserName <string>  
[-Password <string>]  
<CommonParameters>]  
Get-AvailableMessagingServers  
-IdentityStoreName <string>  
-Provider {o365 | gsuite | exchange2013 | exchange2016 | exchange2019}  
-Credential <pscredential>  
[<CommonParameters>]
```

## Required Parameters

- IdentityStoreName
- Provider
- Credential

Example 1:

This example retrieves the available messaging server(s) configured in AdStore1 identity store for Exchange 2013 messaging provider.

```
Get-AvailableMessagingServers -IdentityStoreName AdStore1 -Provider exchange2013 -UserName administrator -Password webdir123R -Domain pucit.local
```

Example 2:

This example retrieves the available messaging server(s) configured in Adstore1 identity store for Office365 messaging provider.

```
Get-AvailableMessagingServers -IdentityStoreName AdStore1 -Provider o365 -UserName admin@mydomain.onmicrosoft.com -Password webdir123R -Domain mydomain.onmicrosoft.com -AppId 'eeeeeeee-aaaa-dddd-bbbb-cccccccccccc'
```

Example 3:

This example retrieves the available messaging server(s) in AdStore1 identity store for GSuite (Google Apps) messaging provider.

```
Get-AvailableMessagingServers -IdentityStoreName AdStore1 -Provider gsuite -UserName svcaccount@myproject-219211.iam.gserviceaccount.com -AdminUsername 'arslan@mydomain.com' -P12CertificatePath 'C:\Keys\gsuite\key.p12'
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Identity Store Commands](/versioned_docs/groupid_11.0/groupid/managementshell/identitystore/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

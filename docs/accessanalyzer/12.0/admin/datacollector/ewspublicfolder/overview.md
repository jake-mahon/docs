# EWSPublicFolder Data Collector

The EWSPublicFolder Data Collector provides configuration options to extract public folder contents,
permissions, and sensitive data, and is preconfigured within the Exchange Solution. Both this data
collector and the solution are available with a special Access Analyzer license. See the
[Exchange Solution](../../../solutions/exchange/overview.md) topic for additional information.

Protocols

- HTTPS
- ADSI
- LDAP

Ports

- TCP 389
- TCP 443

Permissions

- Exchange Admin Role
- Discovery Management Role
- Application Impersonation Role
- Exchange Online License with a mailbox

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## EWSPublicFolder Query Configuration

The EWSPublicFolder Data Collector is configured through the Exchange Public Folder Data Collector
Wizard. The wizard contains the following pages:

**NOTE:** The Category selected may alter the subsequent steps displayed by the wizard.

- [EWSPublicFolder: Category](category.md)
- [EWSPublicFolder: Options](options.md)
- [EWSPublicFolder: SDD Options](sddoptions.md)
- [EWSPublicFolder: Critieria](critieria.md)
- [EWSPublicFolder: Filter](filter.md)
- [EWSPublicFolder: Search Filter](searchfilter.md)
- [EWSPublicFolder: Results](results.md)
- [EWSPublicFolder: Summary](summary.md)

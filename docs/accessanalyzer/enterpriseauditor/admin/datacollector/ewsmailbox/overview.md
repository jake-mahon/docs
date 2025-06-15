# EWSMailbox Data Collector

The EWSMailbox Data Collector provides configuration options to scan mailbox contents, permissions, and sensitive data, and is preconfigured within the Exchange Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [Exchange Solution](../../../solutions/exchange/overview.md) topic for additional information.

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
- Exchange Online License

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## EWSMailbox Query Configuration

The EWSMailbox Data Collector is configured through the Exchange Mailbox Data Collector Wizard, which contains the following wizard pages:

__NOTE:__ The Category selected may alter the subsequent steps displayed by the wizard.

- [EWSMailbox: Category](category.md)
- [EWSMailbox: Options](options.md)
- [EWSMailbox: Scope](scope.md)
- [EWSMailbox: Scope Select](scopeselect.md)
- [EWSMailbox: SDD Options](sddoptions.md)
- [EWSMailbox: Criteria](criteria.md)
- [EWSMailbox: Filter](filter.md)
- [EWSMailbox: Search Filter](searchfilter.md)
- [EWSMailbox: Results](results.md)
- [EWSMailbox: Summary](summary.md)

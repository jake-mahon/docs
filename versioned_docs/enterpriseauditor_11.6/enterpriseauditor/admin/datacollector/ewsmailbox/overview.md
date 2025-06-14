# EWSMailbox Data Collector

The EWSMailbox Data Collector provides configuration options to scan mailbox contents, permissions, and sensitive data, and is preconfigured within the Exchange Solution. Both this data collector and the solution are available with a special Enterprise Auditor license. See the [Exchange Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/overview.md) topic for additional information.

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

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server, which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## EWSMailbox Query Configuration

The EWSMailbox Data Collector is configured through the Exchange Mailbox Data Collector Wizard, which contains the following wizard pages:

__NOTE:__ The Category selected may alter the subsequent steps displayed by the wizard.

- [EWSMailbox: Category](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/category.md)
- [EWSMailbox: Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/options.md)
- [EWSMailbox: Scope](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/scope.md)
- [EWSMailbox: Scope Select](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/scopeselect.md)
- [EWSMailbox: SDD Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/sddoptions.md)
- [EWSMailbox: Criteria](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/criteria.md)
- [EWSMailbox: Filter](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/filter.md)
- [EWSMailbox: Search Filter](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/searchfilter.md)
- [EWSMailbox: Results](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/results.md)
- [EWSMailbox: Summary](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/summary.md)

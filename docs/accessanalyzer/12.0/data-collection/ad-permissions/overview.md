# ADPermissions Data Collector

The ADPermissions Data Collector collects the advanced security permissions of objects in AD. It is
preconfigured within the Active Directory Permissions Analyzer Solution. Both this data collector
and the solution are available with a special Access Analyzer license. See the
[Active Directory Permissions Analyzer Solution](/docs/accessanalyzer/12.0/solutions/active-directory-permissions-analyzer/overview.md)
topic for additional information.

Protocols

- ADSI
- LDAP
- RPC

Ports

- TCP 389
- TCP 135 – 139
- Randomly allocated high TCP ports

Permissions

- LDAP Read permissions
- Read on all AD objects
- Read permissions on all AD Objects

## ADPermissions Query Configuration

The ADPermissions Data Collector is configured through the Active Directory Permissions Data
Collector Wizard. The wizard contains the following pages, which change based upon the query
category selected:

- [ADPermissions: Category](/docs/accessanalyzer/12.0/data-collection/ad-permissions/category.md)
- [ADPermissions: Scope](/docs/accessanalyzer/12.0/data-collection/ad-permissions/scope.md)
- [ADPermissions: Custom Filter](/docs/accessanalyzer/12.0/data-collection/ad-permissions/custom-filter.md)
- [ADPermissions: Options](/docs/accessanalyzer/12.0/data-collection/ad-permissions/options.md)
- [ADPermissions: Results](/docs/accessanalyzer/12.0/data-collection/ad-permissions/results.md)
- [ADPermissions: Summary](/docs/accessanalyzer/12.0/data-collection/ad-permissions/summary.md)

# ActiveDirectory Data Collector

The ActiveDirectory Data Collector audits objects published in Active Directory. It has been
preconfigured within the Active Directory Solution. Both this data collector and the solution are
available with a special Access Analyzer license. See the
[Active Directory Solution](/docs/accessanalyzer/12.0/solutions/active-directory/overview.md) topic for additional
information.

Protocols

- ADSI
- LDAP
- RPC

Ports

- TCP 389/636
- TCP 135-139
- Randomly allocated high TCP ports

Permissions

- Member of the Domain Administrators group

## ActiveDirectory Query Configuration

The ActiveDirectory Data Collector is configured through the Active Directory Data Collector Wizard,
which contains the following wizard pages:

- Welcome
- [ActiveDirectory: Category](/docs/accessanalyzer/12.0/administration/data-collectors/activedirectory/category.md)
- [ActiveDirectory: Directory Scope](/docs/accessanalyzer/12.0/administration/data-collectors/activedirectory/directoryscope.md)
- [ActiveDirectory: Results](/docs/accessanalyzer/12.0/administration/data-collectors/activedirectory/results.md)
- [ActiveDirectory: Options](/docs/accessanalyzer/12.0/administration/data-collectors/activedirectory/options.md)
- [ActiveDirectory: Summary](/docs/accessanalyzer/12.0/administration/data-collectors/activedirectory/summary.md)

![Active Directory Data Collector Wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.

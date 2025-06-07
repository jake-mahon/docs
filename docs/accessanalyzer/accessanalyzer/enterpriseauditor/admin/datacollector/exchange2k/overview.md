# Exchange2K Data Collector

The Exchange2K Data Collector extracts configuration details from Exchange organizations for versions 2003 and later. This is a MAPI-based data collector which requires the __Settings__ > __Exchange__ node to be enabled and configured. See the [Exchange](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/exchange.md) topic for additional information.

The Exchange2K Data Collector has been preconfigured within the Exchange Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [Exchange Solution](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/overview.md) topic for additional information.

Protocols

- LDAP
- MAPI
- PowerShell
- RPC
- WMI

Ports

- TCP 135-139
- Randomly allocated high TCP ports
- TCP 389
- Optional TCP 445

Permissions

- Member of the Exchange Administrator group
- Domain Admin for AD property collection
- Public Folder Management

## Exchange2K Query Configuration

The Exchange2K Data Collector is configured through the Exchange 2K+ Data Collector Wizard, which contains the following wizard pages:

- Welcome
- [Exchange2K: Category](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchange2k/category.md)
- [Exchange2K: Scope](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchange2k/scope.md)
- [Exchange2K: Results](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchange2k/results.md)
- [Exchange2K: MAPI Settings](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchange2k/mapisettings.md)
- [Exchange2K: Options](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchange2k/options.md)
- [Exchange2K: Summary](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchange2k/summary.md)

![Exchange 2K+ Data Collector Wizard Welcome page](/static/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

The Welcome page can be hidden by selecting the __Do not show this page the next time__ checkbox when the wizard is open and configuration settings are saved.

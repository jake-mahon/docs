# GroupPolicy Data Collector

The GroupPolicy Data Collector provides the ability to retrieve the GPO’s list in the domain and where they are linked, return information on configured policies and policy parts from the individual policies that have been selected, return information on selected policy parts from all policies within the domain, and return effective security policies in effect at the individual workstation.

The GroupPolicy Data Collector is a core component of Access Analyzer, but it has been preconfigured within the Active Directory Solution and the Windows Solution. While the data collector is available with all Access Analyzer license options, the Windows Solution is only available with a special Access Analyzer licenses. See the following topics for additional information:

- [Active Directory Solution](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/overview.md)
- [Windows Solution](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/overview.md)

Protocols

- LDAP
- RPC

Ports

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

Permissions

- Member of the Domain Administrators group (if targeting domain controllers)
- Member of the Local Administrators group

## GroupPolicy Query Configuration

The GroupPolicy Data Collector is configured through the Group Policy Data Collector Wizard. The available pages change based upon the query category selected. It contains the following wizard pages:

- Welcome
- [GroupPolicy: Category](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/grouppolicy/category.md)
- [GroupPolicy: Target](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/grouppolicy/target.md)
- [GroupPolicy: Policies List](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/grouppolicy/policieslist.md)
- [GroupPolicy: Options](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/grouppolicy/options.md)
- [GroupPolicy: Summary](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/grouppolicy/summary.md)

![Group Policy Data Collector Wizard Welcome page](/static/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

The Welcome page can be hidden by selecting the __Do not display this page the next time__ checkbox when the wizard is open and configuration settings are saved.

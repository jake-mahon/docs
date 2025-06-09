# Box Data Collector

The Box Data Collector audits access, group membership, and content within a Box enterprise.

__NOTE:__ If the Box Data Collector is used in a new job, outside of the Box Solution, it is necessary to deselect the __Skip Hosts that do not respond to PING__ option on the job’s __Properties__ > __Performance__ tab.

The Box Data Collector has been preconfigured within the Box Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [Box Solution](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/box/overview.md) topic for additional information.

Protocols

- HTTP
- HTTPS

Ports

- TCP 80
- TCP 443

Permissions

- Box Enterprise Administrator

## Box Query Configuration

The Box Data Collector is configured through the Box Data Collector Wizard. The wizard contains the following pages, which change based up on the query category selected:

- Welcome
- [Box: Category](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/box/category.md)
- [Box: Exclusions Page](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/box/exclusions.md)
- [Box: Scope by User Page](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/box/scopebyuser.md)
- [Box: Additional Scoping](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/box/additionalscoping.md)
- [Box: Activity Timeframe Scope](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/box/activitytimeframescope.md)
- [Box: Activity Operation Scope](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/box/activityoperationscope.md)
- [Box: Authenticate](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/box/authenticate.md)
- [Box: Results](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/box/results.md)
- [Box: Summary](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/box/summary.md)

The Welcome page gives an overview of the data collector. To proceed through the pages, click __Next__ or use the Steps navigation pane to open another page in the wizard. Review the introductory and caution information about the Box Data Collector before proceeding.

![Box DC Wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

The Welcome page can be hidden by checking the __Do not display this page the next time__ box when the wizard is open and configuration settings are saved.

# SMARTLog Data Collector

The SMARTLog Data Collector provides search and extraction of details from Windows Event Logs (online or offline) and Microsoft Exchange Internet Information Server (IIS) logs.

The SMARTLog Data Collector is a core component of Access Analyzer, but it has been preconfigured within the Active Directory Solution, Exchange Solution, SQL Solution, and the Windows Solution. While the data collector is available with all Access Analyzer license options, these solutions are only available with a special Access Analyzer licenses. See following sections for additional information:

- [Active Directory Solution](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/overview.md)
- [Exchange Solution](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/overview.md)
- [SQL Job Group](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/sql/overview.md)
- [Windows Solution](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/overview.md)

Protocols

- Log
- Remote Event
- RPC

Ports

- TCP 135
- TCP 445
- Randomly allocated high TCP ports

Permissions

- Member of the Domain Administrators group (if targeting domain controllers)
- Member of the local Administrators group

See the [Exchange Remote Connections Permissions](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/solutions/exchange/remoteconnections.md) topic for additional information related to permissions required for targeting Exchange servers.

## SMARTLog Query Configuration

The SMARTLog Data Collector is configured through the SMART Log DC Wizard, which contains the following wizard pages:

- Welcome
- [SMARTLog: Log Type](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/smartlog/logtype.md)
- [SMARTLog: Sample Host](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/smartlog/samplehost.md)
- [SMARTLog: Target Log](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/smartlog/targetlog.md)
- [SMARTLog: Results](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/smartlog/results.md)
- [SMARTLog: Criteria](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/smartlog/criteria.md)
- [SMARTLog: Collection Method](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/smartlog/collectionmethod.md)
- [SMARTLog: Log State](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/smartlog/logstate.md)
- [SMARTLog: Event Log Options](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/smartlog/eventlogoptions.md)
- [SMARTLog: Summary](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/smartlog/summary.md)

![SMART Log DC Wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

There are no configurable settings on the Welcome page. Click __Next__ to proceed to the Log Type page.

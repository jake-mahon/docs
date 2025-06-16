# SMARTLog Data Collector

The SMARTLog Data Collector provides search and extraction of details from Windows Event Logs
(online or offline) and Microsoft Exchange Internet Information Server (IIS) logs.

The SMARTLog Data Collector is a core component of Enterprise Auditor, but it has been preconfigured
within the Active Directory Solution, Exchange Solution, SQL Solution, and the Windows Solution.
While the data collector is available with all Enterprise Auditor license options, these solutions
are only available with a special Enterprise Auditor licenses. See following sections for additional
information:

- [Active Directory Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/overview.md)
- [Exchange Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/overview.md)
- [SQL Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/overview.md)
- [Windows Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/windows/overview.md)

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

See the
[Exchange Remote Connections Permissions](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/requirements/solutions/exchange/remoteconnections.md)
topic for additional information related to permissions required for targeting Exchange servers.

## SMARTLog Query Configuration

The SMARTLog Data Collector is configured through the SMART Log DC Wizard, which contains the
following wizard pages:

- Welcome
- [SMARTLog: Log Type](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/smartlog/logtype.md)
- [SMARTLog: Sample Host](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/smartlog/samplehost.md)
- [SMARTLog: Target Log](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/smartlog/targetlog.md)
- [SMARTLog: Results](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/smartlog/results.md)
- [SMARTLog: Criteria](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/smartlog/criteria.md)
- [SMARTLog: Collection Method](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/smartlog/collectionmethod.md)
- [SMARTLog: Log State](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/smartlog/logstate.md)
- [SMARTLog: Event Log Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/smartlog/eventlogoptions.md)
- [SMARTLog: Summary](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/smartlog/summary.md)

![SMART Log DC Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

There are no configurable settings on the Welcome page. Click **Next** to proceed to the Log Type
page.

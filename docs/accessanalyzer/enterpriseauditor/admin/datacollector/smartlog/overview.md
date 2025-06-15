# SMARTLog Data Collector

The SMARTLog Data Collector provides search and extraction of details from Windows Event Logs (online or offline) and Microsoft Exchange Internet Information Server (IIS) logs.

The SMARTLog Data Collector is a core component of Access Analyzer, but it has been preconfigured within the Active Directory Solution, Exchange Solution, SQL Solution, and the Windows Solution. While the data collector is available with all Access Analyzer license options, these solutions are only available with a special Access Analyzer licenses. See following sections for additional information:

- [Active Directory Solution](../../../solutions/activedirectory/overview.md)
- [Exchange Solution](../../../solutions/exchange/overview.md)
- [SQL Job Group](../../../solutions/databases/sql/overview.md)
- [Windows Solution](../../../solutions/windows/overview.md)

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

See the [Exchange Remote Connections Permissions](../../../requirements/solutions/exchange/remoteconnections.md) topic for additional information related to permissions required for targeting Exchange servers.

## SMARTLog Query Configuration

The SMARTLog Data Collector is configured through the SMART Log DC Wizard, which contains the following wizard pages:

- Welcome
- [SMARTLog: Log Type](logtype.md)
- [SMARTLog: Sample Host](samplehost.md)
- [SMARTLog: Target Log](targetlog.md)
- [SMARTLog: Results](results.md)
- [SMARTLog: Criteria](criteria.md)
- [SMARTLog: Collection Method](collectionmethod.md)
- [SMARTLog: Log State](logstate.md)
- [SMARTLog: Event Log Options](eventlogoptions.md)
- [SMARTLog: Summary](summary.md)

![SMART Log DC Wizard Welcome page](../../../../../../static/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

There are no configurable settings on the Welcome page. Click __Next__ to proceed to the Log Type page.

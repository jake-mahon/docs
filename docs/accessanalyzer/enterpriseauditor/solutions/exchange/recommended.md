# Recommended Configurations for the Exchange Solution

Each job group within the Exchange Solution has its own Recommended Configurations topic. See the relevant topic for specific information on job group settings and recommended schedule frequency.

- [Recommended Configurations for the 1. HUB Metrics Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/exchange/hubmetrics/recommended.md)
- [Recommended Configurations for the 2. CAS Metrics Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/exchange/casmetrics/recommended.md)
- [Recommended Configurations for the 3. Databases Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/exchange/databases/recommended.md)
- [Recommended Configurations for the 4. Mailboxes Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/exchange/mailboxes/recommended.md)
- [Recommended Configurations for the 5. Public Folders Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/exchange/publicfolders/recommended.md)
- [Recommended Configurations for the 6. Distribution Lists Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/exchange/distributionlists/recommended.md)
- [Recommended Configurations for the 7. Sensitive Data Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/exchange/sensitivedata/recommended.md)
- [Recommended Configurations for the 8. Exchange Online Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/exchange/online/recommended.md)

## ExchangePS Data Collector & Client Access Server

A Client Access Server (CAS) name is required for the ExchangePS Data Collector. When targeting Exchange 2013 or 2016, it is possible for the __Settings__ > __Exchange__ node to have been configured with a web address instead of a CAS.

- Exchange 2010 Servers – Uses the CAS server set in the global configuration (__Settings__ > __Exchange__ node)
- Exchange 2013 & 2016 – May require a CAS name set in the ExchangePS Data Collector configuration:

  - If the __Settings__ > __Exchange__ node was configured for __MAPI over HTTP__, then a CAS server name was supplied and that is used by the ExchangePS Data Collector
  - If the __Settings__ > __Exchange__ node was configured for __MAPI over HTTPS__, then the global configuration has a web address instead of an actual server. Therefore, each query requires the CAS server to be set as the specific server on the Category page.

Follow the steps to supply a CAS name for data collection.

__Step 1 –__ Navigate to the job’s __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, click __Query Properties__. The Query Properties window opens.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__. The ExchangePS Data Collector Wizard opens.

__CAUTION:__ Unless otherwise indicated within the job group section, do not make changes to other wizard pages as they have been pre-configured for the purpose of the job.

![CAS name on ExchangePS Data Collector Wizard Category page](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/exchangepscas.webp)

__Step 4 –__ On the Category page, select the __Use specific server__ option and enter the CAS name in the text box. See the [ExchangePS: Category](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/exchangeps/category.md) topic for additional information.

__Step 5 –__ Navigate to the Summary page. Click __Finish__.

The job now successfully targets Exchange 2013 and 2016 environments.

# SharePointAccess Data Collector

The SharePointAccess (SPAA) Data Collector audits access, group membership, and content within a SharePoint on-premises and SharePoint Online environment. The SPAA Data Collector has been preconfigured within the SharePoint Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [SharePoint Solution](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/overview.md) topic for additional information. The SPAA Data Collector has the following requirements:

Protocols

- MS SQL
- Remote Registry
- SP CSOM (Web Services via HTTP & HTTPS)
- SP Server API
- WCF AUTH via TCP (configurable)

Ports

- Ports vary based on the Scan Mode selected and target environment. See the [SharePoint Scan Options](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/solutions/sharepoint/scanoptions.md) topic for additional information.

Permissions

- Permissions vary based on the Scan Mode selected and target environment. See the [SharePoint Support](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/sharepoint.md) topic for additional information.

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## SPAA Query Configuration

The SharePointAccess Data Collector is configured through the SharePoint Access Auditor Data Collector Wizard. The wizard contains the following pages, which change based up on the query Category selected:

- Welcome
- [SPAA: Category](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/category.md)
- [SPAA: SharePoint Data Collection Settings](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/settings.md)
- [SPAA: Scan Scoping Options](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/scanscopingoptions.md)
- [SPAA: Additional Scoping](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/additionalscoping.md)
- [SPAA: Agent Settings](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/agentsettings.md)
- [SPAA: Bulk Import Settings](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/bulkimportsettings.md)
- [SPAA: DLP Audit Settings](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/dlpauditsettings.md)
- [SPAA: Select DLP Criteria](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/selectdlpcriteria.md)
- [SPAA: Activity Date Scope](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/activitydatescope.md)
- [SPAA: Activity Log Locations](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/activityloglocations.md)
- [SPAA: Test Access](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/testaccess.md)
- [SPAA: Results](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/results.md)
- [SPAA: Summary Page](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/summary.md)

![SPAA Data Collector Wizard Welcome Page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/welcomepage.png)

The Welcome page can be hidden by checking the __Do not display this page the next time__ box when the wizard is open and configuration settings are saved.

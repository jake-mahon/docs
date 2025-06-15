# SharePointAccess Data Collector

The SharePointAccess (SPAA) Data Collector audits access, group membership, and content within a
SharePoint on-premises and SharePoint Online environment. The SPAA Data Collector has been
preconfigured within the SharePoint Solution. Both this data collector and the solution are
available with a special Access Analyzer license. See the
[SharePoint Solution](../../../solutions/sharepoint/overview.md) topic for additional information.
The SPAA Data Collector has the following requirements:

Protocols

- MS SQL
- Remote Registry
- SP CSOM (Web Services via HTTP & HTTPS)
- SP Server API
- WCF AUTH via TCP (configurable)

Ports

- Ports vary based on the Scan Mode selected and target environment. See the
  [SharePoint Scan Options](../../../requirements/solutions/sharepoint/scanoptions.md) topic for
  additional information.

Permissions

- Permissions vary based on the Scan Mode selected and target environment. See the
  [SharePoint Support](../../../requirements/target/sharepoint.md) topic for additional information.

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## SPAA Query Configuration

The SharePointAccess Data Collector is configured through the SharePoint Access Auditor Data
Collector Wizard. The wizard contains the following pages, which change based up on the query
Category selected:

- Welcome
- [SPAA: Category](category.md)
- [SPAA: SharePoint Data Collection Settings](settings.md)
- [SPAA: Scan Scoping Options](scanscopingoptions.md)
- [SPAA: Additional Scoping](additionalscoping.md)
- [SPAA: Agent Settings](agentsettings.md)
- [SPAA: Bulk Import Settings](bulkimportsettings.md)
- [SPAA: DLP Audit Settings](dlpauditsettings.md)
- [SPAA: Select DLP Criteria](selectdlpcriteria.md)
- [SPAA: Activity Date Scope](activitydatescope.md)
- [SPAA: Activity Log Locations](activityloglocations.md)
- [SPAA: Test Access](testaccess.md)
- [SPAA: Results](results.md)
- [SPAA: Summary Page](summary.md)

![SPAA Data Collector Wizard Welcome Page](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/spaa/welcomepage.webp)

The Welcome page can be hidden by checking the **Do not display this page the next time** box when
the wizard is open and configuration settings are saved.

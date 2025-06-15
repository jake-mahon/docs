# SharePointAccess Data Collector

The SharePointAccess (SPAA) Data Collector audits access, group membership, and content within a
SharePoint on-premises and SharePoint Online environment. The SPAA Data Collector has been
preconfigured within the SharePoint Solution. Both this data collector and the solution are
available with a special Enterprise Auditor license. See the
[SharePoint Solution](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/overview.md)
topic for additional information. The SPAA Data Collector has the following requirements:

Protocols

- MS SQL
- Remote Registry
- SP CSOM (Web Services via HTTP & HTTPS)
- SP Server API
- WCF AUTH via TCP (configurable)

Ports

- Ports vary based on the Scan Mode selected and target environment. See the
  [SharePoint Scan Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/requirements/solutions/sharepoint/scanoptions.md)
  topic for additional information.

Permissions

- Permissions vary based on the Scan Mode selected and target environment. See the
  [SharePoint Support](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/requirements/target/sharepoint.md)
  topic for additional information.

Sensitive Data Discovery Considerations

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

_Remember,_ if employing the Enterprise Auditor SharePoint Agent, it is also necessary for the
Sensitive Data Discovery Add-on to be installed on the server where the agent is installed.

## SPAA Query Configuration

The SharePointAccess Data Collector is configured through the SharePoint Access Auditor Data
Collector Wizard. The wizard contains the following pages, which change based up on the query
Category selected:

- Welcome
- [SPAA: Category](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/category.md)
- [SPAA: SharePoint Data Collection Settings](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/settings.md)
- [SPAA: Scan Scoping Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/scanscopingoptions.md)
- [SPAA: Additional Scoping](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/additionalscoping.md)
- [SPAA: Agent Settings](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/agentsettings.md)
- [SPAA: Bulk Import Settings](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/bulkimportsettings.md)
- [SPAA: DLP Audit Settings](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/dlpauditsettings.md)
- [SPAA: Select DLP Criteria](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/selectdlpcriteria.md)
- [SPAA: Activity Date Scope](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/activitydatescope.md)
- [SPAA: Activity Log Locations](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/activityloglocations.md)
- [SPAA: Test Access](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/testaccess.md)
- [SPAA: Results](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/results.md)
- [SPAA: Summary Page](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/summary.md)

![SPAA Data Collector Wizard Welcome Page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/welcomepage.png)

The Welcome page can be hidden by checking the **Do not display this page the next time** box when
the wizard is open and configuration settings are saved.

# SP\_TrusteeAudit Job

The SP\_TrusteeAudit Job runs analysis tasks and generates a report on effective access of specified trustees. This job provides functionality similar to the Access Information Center by allowing scoped audits of user access across the targeted SharePoint environment.

## Analysis Tasks for the SP\_TrusteeAudit Job

Navigate to the __Jobs__ > __SharePoint__ > __Effective Access Audits__ > __SP\_TrusteeAudit__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SP_TrusteeAudit Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/effectiveaccessaudits/trusteeauditanalysis.png)

The default analysis tasks are:

- 1. Find Effective Access. Returns Only Site Collections – Creates the SA\_SP\_TrusteeAudit\_Results table accessible under the job’s Results node
- 2. Find Direct Permissions. Unscoped - All Resource Types – Creates the SA\_SP\_TrusteeAudit\_DirectPermissions table accessible under the job’s Results node
- 3. Summarize Access – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables created by the analysis tasks which display effective access for the specified trustees, the SP\_TrusteeAudit Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Site Collection Access | This report shows what site collections a domain user has effective and direct access to. Audited users are scoped in the SP\_TrusteeAccess job. | None | This report is comprised of three elements:   - Table – Provides user summary details - Table – Provides details on site collections with effective access - Table – Provides details on direct permissions |

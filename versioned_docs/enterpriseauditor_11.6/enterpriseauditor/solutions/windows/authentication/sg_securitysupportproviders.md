# SG_SecuritySupportProviders Job

The SG_SecuritySupportProviders job identifies security support providers on all targeted hosts, highlighting potentially malicious SSPs.

## Queries for the SG_SecuritySupportProviders Job

The SG_SecuritySupportProviders job uses the Registry Data Collector for the following queries:

__CAUTION:__ The queries are preconfigured for this job. Never modify the queries.

![Queries for the SG_SecuritySupportProviders Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/windows/authentication/securitysupportprovidersqueries.png)

The queries for the SG_SecuritySupportProviders job are:

- Security Support Providers LSA – Determines security support providers in the LSA Key
- Security Support Providers OSConfig – Determines security support providers in the OSConfig key

## Analysis Tasks for the SG_SecuritySupportProviders Job

Navigate to the __Windows__ > __Authentication__ > __SG_SecuritySupportProviders__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SG_SecuritySupportProviders Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/windows/authentication/securitysupportprovidersanalysis.png)

The default analysis tasks are:

- Track changes – Creates the SG_SecuritySupportProviders_ChangeTracking table accessible under the job’s Results node
- List security support provider details – Creates the SG_SecuritySupportProviders_Details table accessible under the job’s Results node
- Summarize security support provider details – Creates an interim processing table in the database for use by downstream analysis and report generation

The optional analysis tasks are:

- Bring changes from last run to console – Creates the SG_SecuritySupportProviders_LastRun table accessible under the job’s Results node
- Notify on changes – Creates the SG_SecuritySupportProviders_LastRun_NOTIFICATION table accessible under the job’s Results node

In addition to the tables created by the data collector, the SG_SecuritySupportProviders job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Security Support Providers | This report lists non-standard security support providers in the audited environment. | None | This report is comprised of two elements:   - Pie Chart – Displays malicious security support providers by host - Table – Provides malicious security support providers details |

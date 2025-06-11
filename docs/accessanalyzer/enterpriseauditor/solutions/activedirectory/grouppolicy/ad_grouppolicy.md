# AD\_GroupPolicy Job

The AD\_GroupPolicy Job audits all Group Policies that are present on the Domain Controller, and provides details on the containers they are linked to, and the settings that are configured.

## Queries for the AD\_GroupPolicy Job

The AD\_GroupPolicy Job uses the GroupPolicy Data Collector for the following query:

__CAUTION:__ Do not modify the queries. The queries are preconfigured for this job.

![Queries for the AD_GroupPolicy Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/grouppolicy/grouppolicyquery.webp)

The queries for this job are:

- Link Status – Targets the default domain controller known to Access Analyzer to retrieve a GPO's list for the domain
- Settings – Targets the default domain controller known to Access Analyzer to return the state for domain policies for all GPOs. See the [GroupPolicy Data Collector](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/grouppolicy/overview.md) topic for additional information.

## Analysis Tasks for the AD\_GroupPolicy Job

Navigate to the __Active Directory__ > __4.GroupPolicy__ > __AD\_GroupPolicy__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_GroupPolicy Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/grouppolicy/grouppolicyanalysis.webp)

The default analysis tasks are:

- 1. Group Policy Analysis – Creates an interim processing table in the database for use by downstream analysis and report generation
- 2. Combined User and Computer Settings – Creates the SA\_AD\_GroupPolicy\_SettingList table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_GroupPolicy Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| GPO Details | This report lists all Group Policies and their settings. | None | This report is comprised of four elements:   - Bar Chart – Displays GPO count by domain  - Table – Provides details on policies by domain  - Table – Provides details on GPO count by domain  - Table – Provides details on settings |
| GPO Overview | This report lists all Group Policies and their settings. | None | This report is comprised of three elements:   - Bar Chart – Displays GPO configuration by domain  - Table – Provides details on GPOs  - Table – Provides details on GPO configuration by domain |

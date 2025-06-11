# SG\_RunAtBoot Job

The SG\_RunAtBoot job lists applications which are set to __Run__ or __Run Once__ on all targeted hosts.

## Queries for the SG\_RunAtBoot Job

The SG\_RunAtBoot job uses the Registry Data Collector for the following queries:

__CAUTION:__ The queries are preconfigured for this job. Never modify the queries.

![Queries for the SG_RunAtBoot Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/windows/applications/runatbootqueries.webp)

The queries for the SG\_RunAtBoot job are:

- Run – Targets all Windows servers known to Access Analyzer to run at boot applications
- Run Once – Targets all Windows servers known to Access Analyzer to run once at boot applications

## Analysis Tasks for the SG\_RunAtBoot Job

Navigate to the __Windows__ > __Applications__ > __SG\_RunAtBoot__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SG_RunAtBoot Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/windows/applications/runatbootanalysis.webp)

The default analysis tasks are:

- Track Changes – Creates the SA\_SG\_RunAtBoot\_ChangeTracking table accessible under the job’s Results node
- List application details – Creates the SA\_SG\_RunAtBoot\_Details table accessible under the job’s Results node
- Summarize details by host – Creates the SA\_SG\_RunAtBoot\_HostSummary table accessible under the job’s Results node
- Summarize details by application – Creates the SA\_SG\_RunAtBoot\_AppSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SG\_RunAtBoot job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Run at Boot | This report enumerates applications which are set to run at boot across the audited environment. | None | This report is comprised of three elements:   - Bar Chart – Displays Top Hosts by Applications Run at Boot - Table – Provides details on Top Hosts by Applications Run at Boot bar chart - Table – Provides details on Run / Run Once Applications |

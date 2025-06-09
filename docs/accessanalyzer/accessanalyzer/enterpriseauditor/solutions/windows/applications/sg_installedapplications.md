# SG\_InstalledApplications Job

The SG\_InstalledApplications job identifies installed applications on all targeted hosts.

## Queries for the SG\_InstalledApplications Job

The SG\_InstalledApplications job uses the WMICollector Data Collector for the following query:

__CAUTION:__ The query is preconfigured for this job. Never modify the query.

![Queries for the SG_InstalledApplications Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/applications/installedapplicationsquery.png)

The query for the SG\_InstalledApplications job are:

- Installed Applications – Targets all Windows servers known to Access Analyzer to determine installed applications

## Analysis Tasks for the SG\_InstalledApplications Job

Navigate to the __Windows__ > __Applications__ > __SG\_InstalledApplications__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SG_InstalledApplications Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/applications/installedapplicationsanalysis.png)

The default analysis tasks are:

- All Installed Applications - Change Tracking – Creates the SA\_SG\_InstalledApplications\_ChangeTracking table accessible under the job’s Results node
- All Installed Applications - Details – Creates the SA\_SG\_InstalledApplications\_Details table accessible under the job’s Results node
- MS Applications - Details – Creates the SA\_SG\_InstalledApplications\_MSDetails table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SG\_InstalledApplications job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| All Installed Applications | This report details all installed applications, and highlights the most common installed applications across the audited environment. | None | This report is comprised of two elements:   - Bar Chart – Displays top installed applications - Table – Provides details on installed applications |
| MS Office Applications | This report provides host-level details on which Microsoft Office applications are installed. | None | This report is comprised of two elements:   - Bar Chart – Displays top MS Office applications - Table – Provides details on MS Office applications |

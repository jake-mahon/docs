# UX\_EmptyGroups Job

The UX\_EmptyGroups job identifies empty groups found within the audited Unix or Linux environment. These are suitable candidates for consolidation or cleanup.

## Analysis Tasks for the UX\_EmptyGroups Job

Navigate to the __Unix__ > __1.Users and Groups__ > __UX\_EmptyGroups__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the UX_EmptyGroups Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/distributionlists/membershipanalysis/emptygroupsanalysis.png)

The default analysis tasks are:

- Finds empty groups – Creates the SA\_UX\_EmptyGroups\_Details table accessible under the job’s Results node
- Summarizes empty groups – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the table and views created by the analysis tasks, the UX\_EmptyGroups job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Empty Groups | This report identifies empty groups within the audited domains | None | This report is comprised of three elements:   - Bar Chart – Displays Empty Groups by Type - Table – Provides details on Empty Groups by Type bar chart - Table – Provides information on Empty Group Details |

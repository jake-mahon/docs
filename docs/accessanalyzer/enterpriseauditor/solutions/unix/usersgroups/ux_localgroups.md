# UX\_LocalGroups Job

The UX\_LocalGroups job provides an overview of all local groups within the audited Unix and Linux environments.

## Analysis Tasks for the UX\_LocalGroups Job

Navigate to the __Unix__ > __1.Users and Groups__ > __UX\_LocalGroups__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the UX_LocalGroups Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/unix/usersgroups/localgroupsanalysis.webp)

The default analysis tasks are:

- Creates local groups table – Creates the SA\_UX\_LocalGroups\_Details table accessible under the job’s Results node
- Creates local groups summary table – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the table and views created by the analysis tasks, the UX\_LocalGroups job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Local Groups | This report summarizes local groups in the audited environment. Hosts with large numbers of local groups are highlighted, as are local groups with large memberships. | None | This report is comprised of two elements:   - Bar Chart – Displays Top Hosts by Local Group Count - Table – Provides details on All Local Groups |

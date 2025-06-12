# UX\_Sudoers Job

The UX\_Sudoers job provides visibility into all rights granted via sudoers within audited Unix and Linux environments.

## Analysis Tasks for the UX\_Sudoers Job

Navigate to the __Unix__ > __2.Privileged Access__ > __Sudoers__ > __UX\_Sudoers__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the UX_Sudoers Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/unix/privilegedaccess/sudoers/sudoersanalysis.png)

The default analysis tasks are:

- Summarize number of provisioned users by host – Creates an interim processing table in the database for use by downstream analysis and report generation
- Determine highly provisioned users – Creates an interim processing table in the database for use by downstream analysis and report generation
- List sudoers entries across the environment – Creates the SA\_UX\_Sudoers\_Details table accessible under the job’s Results node

In addition to the table and views created by the analysis tasks, the UX\_Sudoers job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Sudo Rights by Host | This report details all rights granted via sudoers across the audited environment | None | This report is comprised of three elements:   - Bar Chart – Displays Hosts With Most Provisioning - Table – Provides details on Provisioning by Host - Table – Provides information on Sudoers Details |

# AD\_OrphanedUsers Job

The AD\_OrphanedUsers Job identifies users whose managers are stale or disabled. These user accounts should be reviewed and appropriate management should be assigned.

## Analysis Tasks for the AD\_OrphanedUsers Job

Navigate to the __Active Directory__ > __2.Users__ > __AD\_OrphanedUsers__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_OrphanedUsers Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/users/orphanedusersanalysis.png)

The default analysis tasks are:

- Details – Creates the SA\_AD\_OrphanedUsers\_Details table accessible under the job’s Results node
- Domain Summary – Creates the SA\_AD\_OrphanedUsers\_DomainSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_OrphanedUsers Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Orphaned Users | A user is considered orphans when their manager is disabled or stale. | None | This report is comprised of three elements:   - Bar Chart – Displays top domains by orphaned users  - Table – Provides details on orphaned users  - Provides details on top domains by orphaned users |

# UX\_CriticalFiles Job

The UX\_CriticalFiles job provides visibility into owners of critical files within audited Unix and Linux environments such as passwd, shadow, sudoers, hosts.deny, and more.

## Queries for the UX\_CriticalFiles Job

The UX\_CriticalFIles job uses the Unix Data Collector for the following query:

__CAUTION:__ The query is preconfigured for this job. Never modify the query.

![Queries for the UX_CriticalFiles Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/unix/privilegedaccess/criticalfilesquery.png)

The query for the UX\_CriticalFiles job is:

- Critical File Owners – Finds critical file ownership

## Analysis Tasks for the UX\_CriticalFiles Job

Navigate to the __Unix__ > __2.Privileged Access__ > __UX\_CriticalFiles__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the UX_CriticalFiles Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/unix/privilegedaccess/criticalfilesanalysis.png)

The default analysis task is:

- Details critical file ownership, highlights top users

  - Creates SA\_UX\_PrivilegedAccess\_CriticalFileOwnership table accessible under the job’s Results node
  - Creates SA\_UX\_PrivilegedAccess\_CriticalFileOwners table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the UX\_CriticalFiles job produces the following preconfigured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Critical File Ownership | This report lists the ownership of critical files across the audited environment. The top non-root users and groups with critical file ownership are highlighted. | None | This report is comprised of three elements:   - Table – Provides details on Top 5 Critical File Owners (Users) - Table – Provides details on Top 5 Critical File Owners (Groups) - Table – Provides information on Critical File Ownership Details |

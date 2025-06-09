# SG\_LocalUsers Job

The SG\_LocalUsers job audits local user accounts from all targeted hosts.

## Queries for the SG\_LocalUsers Job

The SG\_LocalMembership job uses the UsersGroups Data Collector for the following query:

__CAUTION:__ The query is preconfigured for this job. Never modify the query.

![Queries for the SG_LocalUsers Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/windows/privilegedaccounts/logonrights/collection/localusersquery.png)

The query for the SG\_LocalUsers job is:

- LocalUsers – Collects local user information

## Analysis Tasks for the SG\_LocalUsers Job

Navigate to the __Windows__ > __Privileged Accounts__ > __Logon Rights__ > __Collection__ > __SG\_LocalUsers__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SG_LocalUsers Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/unix/usersgroups/localusersanalysis.png)

The default analysis tasks is:

- Update LocalUsers – Creates an interim processing table in the database for use by downstream analysis and report generation

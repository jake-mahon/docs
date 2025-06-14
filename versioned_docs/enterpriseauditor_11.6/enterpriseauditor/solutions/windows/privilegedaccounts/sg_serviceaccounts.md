# Service Accounts > SG\_ServiceAccounts Job

The SG\_ServiceAccounts job determines which domain accounts are being used to run services on member servers, identifying password age and settings.

![Service Accounts > SG_ServiceAccounts Job in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/windows/privilegedaccounts/serviceaccountsjobstree.png)

The SG\_ServiceAccounts job is located in the Service Account job group.

## Queries for the SG\_ServiceAccounts Job

The SG\_ServiceAccounts job uses the Services Data Collector for the following query:

__CAUTION:__ The query is preconfigured for this job. Never modify the query.

![Queries for the SG_ServiceAccounts Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/windows/privilegedaccounts/serviceaccountsquery.png)

The query for the SG\_ServiceAccounts job is:

- Service Accounts – Collects information on service accounts

See the [Services Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/services.md) topic for additional information.

## Analysis Tasks for the SG\_ServiceAccounts Job

Navigate to the __Jobs__ > __Windows__ > __Privileged Accounts__ > __Service Accounts__ > __SG\_ServiceAccounts__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SG_ServiceAccounts Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/users/serviceaccountsanalysis.png)

The default analysis tasks are:

- Domain Service Accounts – Creates the SA\_SG\_ServiceAccounts\_Details table accessible under the job’s Results node
- Domain Summary – Creates the SA\_SG\_ServiceAccounts\_DomainSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the SG\_ServiceAccounts job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Service Accounts | This report identifies domain accounts being used for services. | None | This report is comprised of three elements:   - Bar Chart – Displays domains by service accounts found - Table – Provides domains by service accounts found - Table – Provides service details |

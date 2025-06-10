# SG\_LocalAdmins Job

The SG\_LocalAdmins job identifies the effective membership for all local administrator groups. The purpose of this job is to gain an understanding of what accounts within the environment are privileged and should be monitored closely.

## Queries for the SG\_LocalAdmins Job

The SG\_LocalAdmins job uses the UsersGroups Data Collector for the following query:

__CAUTION:__ The query is preconfigured for this job. Never modify the query.

![Queries for the SG_LocalAdmins Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/windows/privilegedaccounts/localadministrators/localadminsquery.webp)

The query for the SG\_LocalAdmins job is:

- Direct Membership – Returns direct membership from targeted hosts

## Analysis Tasks for the SG\_LocalAdmins Job

Navigate to the __Windows__ > __Privileged Accounts__ > __Local Administrators__ > __SG\_LocalAdmins__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SG_LocalAdmins Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/windows/privilegedaccounts/localadministrators/localadminsanalysis.webp)

The default analysis tasks are:

- Expand Effective Membership – Creates the SA\_SG\_LocalAdmins\_Details table accessible under the job’s Results node
- Membership Summary – Creates the SA\_SG\_LocalAdmins\_MembershipSummary table accessible under the job’s Results node
- Privileged Accounts – Creates the SA\_SG\_LocalAdmins\_PrivilegedAccounts table accessible under the job’s Results node
- Track Changes – Creates the SA\_SG\_LocalAdmins\_Changes table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the SG\_LocalAdmins job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Local Administrators | This report identifies servers with the largest local administrator groups in the environment. | GDPR, SOX, HIPAA, PCI-DSS, GLBA, ITAR, FERPA, FISMA, ISO27001 | This report is comprised of three elements:   - Stacked Chart – Displays largest local administrator groups - Table – Provides membership details - Table – Provides a local administrator groups summary |
| Membership Changes | This report identifies changes in effective membership between two scans of the environment. | None | This report is comprised of one element:   - Table – Displays membership changes |
| Privileged Accounts | This report highlights user accounts with a large number of local administrator rights. | None | This report is comprised of two elements:   - Stacked Chart – Displays top trustees by administrator rights - Table – Provides details on privileged accounts |

## Least Privilege Model

The SG\_LocalAdmins job typically uses an account that is a member of the Local Administrators group on the target host. However if a less-privileged option is required, you can instead use a regular domain user that has been added to the __Network access: Restrict clients allowed to make remote calls to SAM__ Local Security Policy.

![User added to the Local Securtiy Policy](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/windows/privilegedaccounts/localadministrators/leastprivilegemodel.webp)

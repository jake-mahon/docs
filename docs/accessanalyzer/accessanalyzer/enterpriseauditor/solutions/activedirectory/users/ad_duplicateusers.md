# AD\_DuplicateUsers Job

The AD\_DuplicateUsers Job helps to identify multiple user accounts which may be owned by a single employee. A user may have accounts in multiple domains or administrative accounts with greater access than their normal account.

## Analysis Tasks for the AD\_DuplicateUsers Job

Navigate to the __Active Directory__ > __2.Users__ > __AD\_DuplicateUsers__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_DuplicateUsers Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/users/duplicateusersanalysis.png)

The default analysis tasks are:

- Potential Duplicates Details – Creates the SA\_AD\_DuplicateUsers\_Details table accessible under the job’s Results node
- User Details – Creates the SA\_AD\_DuplicateUsers\_DomainSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_DuplicateUsers Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Duplicate User Accounts | This report identifies user accounts which may belong to a single employee, based on a variety of common attributes. | None | This report is comprised of three elements:   - Bar Chart – Displays a domain summary  - Table – Provides details on matches  - Table – Provides details on duplicate user accounts by domain |

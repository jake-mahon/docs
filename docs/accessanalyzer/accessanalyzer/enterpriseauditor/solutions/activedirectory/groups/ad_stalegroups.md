# AD\_StaleGroups Job

The AD\_StaleGroups Job identifies groups that contain potentially stale users. Users are considered stale if they have never logged onto the domain, have not logged onto the domain in the past 60 days, or are disabled. These group memberships should be reviewed and possibly removed.

## Analysis Tasks for the AD\_StaleGroups Job

Navigate to the __Active Directory__ > __1.Groups__ > __AD\_StaleGroups__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_StaleGroups Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/distributionlists/membershipanalysis/stalegroupsanalysis.png)

The default analysis tasks are:

- Stale Group Details – Creates the SA\_AD\_StaleGroups\_Details table accessible under the job’s Results node
- Stale Groups Summary – Creates the SA\_AD\_StaleGroups\_GroupSummary table accessible under the job’s Results node
- Stale Groups Org Summary – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD\_StaleGroups Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Stale Effective Membership (A.K.A. Stale Groups) | This report identifies groups with stale effective membership. A stale user is defined as someone who has not logged into the domain in over 60 days, is expired, or currently disabled. | None | This report is comprised of three elements:   - Bar Chart – Displays group membership  - Table – Provides details on membership  - Table – Provides details on group membership |

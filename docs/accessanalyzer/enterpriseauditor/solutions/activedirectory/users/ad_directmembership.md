# AD\_DirectMembership Job

The AD\_DirectMembership Job identifies users who do not have any group membership. This condition may indicate unnecessary user accounts that are suitable candidates for review and cleanup.

## Analysis Tasks for the AD\_DirectMembership Job

Navigate to the __Active Directory__ > __2.Users__ > __AD\_DirectMembership__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_DirectMembership Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/users/directmembershipanalysis.webp)

The default analysis tasks are:

- User Details – Creates the SA\_AD\_DirectMembership\_Details table accessible under the job’s Results node
- Domain Summary – Creates the SA\_AD\_DirectMembership\_DomainSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_DirectMembership Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| No Group Membership | This report identifies users with no group membership. | None | This report is comprised of three elements:   - Bar Chart – Displays top domains by users with no membership  - Table – Provides details on all users with no group membership  - Table – Provides details on top domains by users with no membership |

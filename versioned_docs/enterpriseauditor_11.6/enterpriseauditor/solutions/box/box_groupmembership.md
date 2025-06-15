# Box_GroupMembership Job

The Box_GroupMembership Job provides visibility into group membership within an organization's Box environment.

## Analysis Tasks for the Box_GroupMembership Job

Navigate to __Box__ > __Box_GroupMembership__ > __Configure__ node and select __Analysis__ to view analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Box_GroupMembership Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/box/groupmembershipanalysis.png)

The following analysis task is selected by default:

- Summarize Group Membership – Creates the Box_GroupMembership_Details table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the Box_Content Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Membership (Box Group Membership) | This report summarizes Box group membership and lists all group membership across the audited environment. | None | This report is comprised of three elements:   - Bar Chart – Displays top groups by member count - Table – Provides summary of group membership - Table – Provides details on group membership |

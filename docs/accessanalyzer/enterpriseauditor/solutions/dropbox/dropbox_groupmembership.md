# 3.Group Membership > Dropbox\_GroupMembership Job

The Dropbox\_GroupMembership job provides insight into group membership within the targeted Dropbox environment, highlighting the largest groups. It is dependent on data collected by the 0.Collection job group. This job processes analysis tasks and generates a report.

![3.Group Membership > Dropbox_GroupMembership Job in the Jobs Tree](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/dropbox/groupmembershipjobstree.png)

The Dropbox\_GroupMembership job is located in the 3.Group Membership job group.

## Analysis Tasks for the Dropbox\_GroupMembership Job

View the analysis tasks by navigating to the __Jobs__ > __Dropbox__ > __3.Group Membership__ > __Dropbox\_GroupMembership__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Dropbox_GroupMembership Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/box/groupmembershipanalysis.png)

- Get group membership details – Creates an interim processing table in the database for use by downstream analysis and report generation
- Summarize group membership by team – Creates the SA\_Dropbox\_GroupMembership\_Summary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display group membership details, the Dropbox\_GroupMembership job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Membership | This report lists membership and owners for all groups within Dropbox. | None | This report is comprised of three elements:   - Bar Chart – Displays largest groups - Table – Provides summary of group membership - Table – Provides details on membership |

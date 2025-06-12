# Box\_Access Job

The Box\_Access Job analyzes access granted to users and groups in an organization's Box environment in order to report on effective access rights, file-level permissions, and inactive access rights that can be revoked.

## Analysis Tasks for the Box\_Access Job

Navigate to __Box__ > __Box\_Access__ > __Configure__ node and select __Analysis__ to view analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Box_Access Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/box/accessanalysis.png)

The following analysis tasks are selected by default:

- Calculate Access Details – Creates the Box\_Access\_Details table accessible under the job’s Results node
- Summarize Access by User – Creates an interim processing table in the database for use by downstream analysis and report generation
- Summarize Access by Group – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the Box\_Access Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Access (Box Access Overview) | This report highlights groups with access to Box resources, and summarizes them by group. | None | This report is comprised of three elements:   - Bar Chart – Displays top groups by access granted - Table – Provides details on top groups by access - Table – Provides details on group access |
| User Access | This report highlights users with access to Box resources, and summarizes them by group. | None | This report is comprised of three elements:   - T-Chart – Displays top users by direct access - Table – Provides summary of user access - Table – Provides details on user access |

# UX\_DuplicateGroups Job

The UX\_DuplicateGroups job identifies duplicate groups within the audited Unix or Linux environment. Duplicate groups contain the same group membership as one another and are suitable candidates for cleanup.

## Analysis Tasks for the UX\_DuplicateGroups Job

Navigate to the __Unix__ > __1.Users and Groups__ > __UX\_DuplicateGroups__ > __Configure__ node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the UX_DuplicateGroups Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/groups/duplicategroupsanalysis.png)

The default analysis tasks are:

- Finds duplicate groups – Creates the SA\_UX\_DuplicateGroups\_Details table accessible under the job’s Results node
- Summarizes duplicate groups – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the table and views created by the analysis tasks, the UX\_DuplicateGroups job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Duplicate Groups | This report identifies duplicate groups within the audited domains | None | This report is comprised of two elements:   - Bar Chart – Displays Largest Groups with Duplicates - Table – Provides details on Duplicate Group Details |

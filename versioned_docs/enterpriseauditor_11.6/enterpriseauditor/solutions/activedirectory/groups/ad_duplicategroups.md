# AD_DuplicateGroups Job

The AD_Duplicate Job identifies duplicate groups within Active Directory. Duplicate groups contain the same group membership as one another and are suitable candidates for cleanup.

## Analysis Task for the AD_DuplicateGroups Job

Navigate to the __Active Directory__ > __1.Groups__ > __AD_DuplicateGroups__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Task for the AD_DuplicateGroups Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/groups/duplicategroupsanalysis.png)

The default analysis tasks are:

- Identify Duplicate Groups – Creates the SA_AD_DuplicateGroups_Details table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the AD_DuplicateGroups Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Duplicate Groups | This report identifies duplicate groups within the audited domains. | None | This report is comprised of three elements:   - Bar Chart – Displays domains by number of groups with duplicates  - Table – Provides details on duplicate groups  - Table – Provides details on domains by number of groups with duplicates |

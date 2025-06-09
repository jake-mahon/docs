# AD\_LargestGroups Job

The AD\_LargestGroups Job identifies groups with large effective member counts. These types of groups may cause administrative overhead and burden in being able to easily understand who is getting access to resources, or how much access is being granted to resources through these groups.

## Analysis Task for the AD\_LargestGroups Job

Navigate to the __Active Directory__ > __1.Groups__ > __AD\_LargestGroups__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Task for the AD_LargestGroups Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/exchange/distributionlists/membershipanalysis/largestgroupsanalysis.png)

The default analysis tasks are:

- Group Details – Creates the SA\_AD\_LargestGroups\_Details table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the AD\_LargestGroups Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Largest Groups | This report identifies the largest groups within the audited environment. | None | This report is comprised of two elements:   - Bar Chart – Displays largest groups  - Table – Provides details on groups |

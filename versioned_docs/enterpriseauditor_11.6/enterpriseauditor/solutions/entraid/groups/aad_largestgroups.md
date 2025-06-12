# AAD\_LargestGroups Job

The AAD\_LargestGroups Job identifies groups with large effective member counts. These groups may cause administrative overhead and burden in being able to easily understand who is getting access to resources, or how much access is being granted to resources through these groups.

## Analysis Tasks for the AAD\_LargestGroups Job

Navigate to the __Jobs__ > __Entra ID__ > __1.Groups__ > __AAD\_LargestGroups__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis tasks for AAD_LargestGroups Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/distributionlists/membershipanalysis/largestgroupsanalysis.png)

The default analysis tasks are:

- Calculate large group details – Creates the AAD\_LargestGroups\_Details table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD\_LargestGroups Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Largest Groups | This report identifies the largest groups within the audited environment | None | This report is comprised of two elements:   - Bar Chart – Displays largest groups - Table – Provides group details |

# AD_AccessChanges Job

The AD_AccessChanges Job highlights the type and number of resources across the environment where access has been affected. Groups which have historically been the cause of most access changes are highlighted, to show potential issues in access sprawl and provisioning.

## Analysis Tasks for the AD_AccessChanges Job

Navigate to the __Jobs__ > __Active Directory__ > __6.Activity__ > __Group Usage__ > __AD_AccessChanges__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_AccessChanges Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/activity/groupusage/accesschangesanalysis.png)

The following non-configurable analysis tasks are selected by default:

- Find Access Changes – Creates the SA_AD_AccessChanges_Details table accessible under the job’s Results node
- Group Summary – Creates the SA_AD_AccessChanges_GroupSummary table accessible under the job’s Results node
- Access Type Summary – Creates the SA_AD_AccessChanges_TypeSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD_AccessChanges Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Access Changes | Highlights group membership additions that have created large changes in access within the environment. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of three elements:   - Bar Chart – Displays largest changes last week  - Table – Displays groups by modified access  - Table – Displays all group membership changes |

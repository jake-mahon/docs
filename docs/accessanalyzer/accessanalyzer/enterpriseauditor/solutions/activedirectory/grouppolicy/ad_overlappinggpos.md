# AD\_OverlappingGPOs Job

The AD\_OverlappingGPOs Job identifies conflicting and redundant GPO settings based on link location. These GPO settings should be cleaned up or consolidated.

## Analysis Tasks for the AD\_OverlappingGPOs Job

Navigate to the __Active Directory__ > __4. Group Policy__ > __AD\_OverlappingGPOs__ > __Configure__ node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected first analysis task. The first analysis task is preconfigured for this job.

![Analysis Tasks for the AD_OverlappingGPOs Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/grouppolicy/overlappinggposanalysis.png)

The default analysis tasks are:

- Conflicting – Creates the SA\_AD\_OverlappingGPOs\_Conflicts table accessible under the job’s Results node

The following analysis tasks are deselected by default:

__NOTE:__ Deselect the __Conflicting__ analysis task before selecting the analysis tasks below.

- Redundant – Restores the SA\_AD\_OverlappingGPOs\_Redundant table to be visible under the job’s Results node
- Redundant GPOs by OU – Restores the SA\_AD\_OverlappingGPOs\_RedundantGPOsbyOU table to be visible under the job’s Results node
- Redundant GPOs – Restores the SA\_AD\_OverlappingGPOs\_RedundantGPOs table to be visible under the job’s Results node
- Conflicts by OU – Restores the SA\_AD\_OverlappingGPOs\_ConflictsByOU table to be visible under the job’s Results node
- Conflicts by GPO – Restores the SA\_AD\_OverlappingGPOs\_ConflictsByGPO table to be visible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_OverlappingGPOs Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Conflicting GPOs | This report lists group policy objects that apply conflicting settings. | None | This report is comprised of four elements:   - Bar Chart – Displays GPOs by conflicts  - Table – Provides details on GPOs by conflicts  - Table – Provides details on GPOs Details  - Table – Provides details on OUs with conflicting GPOs |
| Redundant GPOs | This report lists group policy objects that apply redundant settings. | None | This report is comprised of four elements:   - Bar Chart – Displays GPOs by redundant children  - Table – Provides details on GPOs by redundant children  - Table – Provides details on overlapping GPOs  - Table – Provides details on OUs with most redundancies |

# AAD\_GroupDirSync Job

The AAD\_GroupDirSync Job summarizes on-premises Active Directory syncing in the audited Microsoft Entra ID environment.

## Analysis Tasks for the AAD\_GroupDirSync Job

Navigate to the __Jobs__ > __Entra ID__ > __1.Groups__ > __AAD\_GroupDirSync__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis tasks for AAD_GroupDirSync Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/entraid/groups/groupdirsyncanalysis.png)

The default analysis tasks are:

- Calculate group DirSync details – Creates the AAD\_GroupDirSync\_Details table accessible under the job’s Results node
- Summarize group DirSync details – Creates the AAD\_GroupDirSync\_EnterpriseSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD\_GroupDirSync Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Syncing | This report indicates the sync status of groups within the audited environment. | None | This report is comprised of two elements:   - Pie Chart – Displays an enterprise group synching summary - Table – Provides group sync details |

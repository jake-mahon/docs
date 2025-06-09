# PF\_Owners Job

The PF\_Owners job is comprised of analysis and reports that focus on public folder ownership, and most importantly the identification of each public folder's Most Probable Owner. The Most Probable Owner is a unique algorithm built into the public folder data collector that is determined based on folder ownership, content posted, and size of content posted.

## Analysis Tasks for the PF\_Owners Job

View the analysis tasks by navigating to the __Exchange__ > __5. Public Folders__ > __Ownership__ > __PF\_Owners__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the PF_Owners Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/publicfolders/ownership/ownersanalysis.png)

The following analysis tasks are selected by default:

- 00.Probable Owners – Creates the SA\_PF\_Ownership\_ProbableOwners table, accessible under the job’s Results node
- 01.ID rate by Root Folder – Creates the SA\_PF\_Ownership\_SuccessRate table, accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the PF\_Owners job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Identification Success  (Probable Owner Identification Rate) | This report identifies folder trees with a high success rate of probable owners identified. This may help scope initial cleanup campaigns. | None | This report is comprised of two elements:   - Stacked Bar Chart – Displays probable owner identification success - Table – Provides details probable owner identification success |
| Probable Owners | This report identifies probable owners for all scanned folders. | None | This report is comprised of one element:   - Table – Provides details on probable owners |

# UX\_Samba Job

The UX\_Samba job identifies potentially insecure Samba share configurations which are categorized by their risk level.

## Analysis Tasks for the UX\_Samba Job

View the analysis tasks by navigating to the __Unix__ > __3.Sharing__ > __UX\_Samba__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the UX_Samba Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/unix/sharing/sambaanalysis.png)

The default analysis tasks are:

- Lists high risk Samba share configurations – Creates the SA\_UX\_Samba\_HighRiskSambaShares table accessible under the job’s Results node
- Highlights hosts with a large number of risky shares – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis task, the UX\_NFS job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Samba Shares with Potentially Insecure Configurations | This report identifies Samba shares with parameters which may lead to open access | None | This report is comprised of three elements:   - Bar Chart – Displays Top Hosts by Potentially Insecure Shares - Table – Provides details on Top Hosts by Potentially Insecure Shares bar chart - Table – Provides details on List of Potentially Insecure Share Configurations |

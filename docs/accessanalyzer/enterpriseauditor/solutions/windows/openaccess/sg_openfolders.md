# SG_OpenFolders Job

The SG_OpenFolders job enumerates folders with open access across the audited environment.

## Queries for the SG_OpenFolders Job

The SG_OpenFolders job uses the SystemInfo Data Collector for the following query:

![Queries for the SG_OpenFolders Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/windows/openaccess/openfoldersquery.webp)

The query for the SG_OpenFolders job is:

- OpenAccess – Checks for folders with open access

  - (Optional) By default, the OpenAccess query used in this job has a search depth of 0 and will return share-level information. If needed, the subfolder depth can be increased in the query configuration. See the [Configure the OpenAccess Query](#configure-the-openaccess-query) topic for additional information.

### Configure the OpenAccess Query

The OpenAccess query has been preconfigured to run with the default settings. However, the subfolder depth can optionally be increased on the Options page in the System Info Data Collector Wizard. Follow the steps to customize the query. See the [SystemInfo Data Collector](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/systeminfo/overview.md) topic for additional information.

__Step 1 –__ Navigate to the __Jobs__ > __Windows__ > __Open Access__ > __SG_OpenFolders__ > __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, click __Query Properties__. The Query Properties window opens.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__. The System Info Data Collector Wizard opens.

![System Info Data Collector Wizard Options page](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/windows/openaccess/configuresubfolderdepth.webp)

__Step 4 –__ Navigate to the Options page and select the __Enumerate subfolders within shared folder__ checkbox and then the __Limit returned subfolders depth to__ checkbox.

__Step 5 –__ Select the desired subfolders depth level using the arrows. Click __Next__.

__Step 6 –__ On the Summary page, click __Finish__ to save the changes.

The subfolders depth is now saved to the configured level.

## Analysis Tasks for the SG_OpenFolders Job

Navigate to the __Windows__ > __OpenAccess__ > __SG_OpenFolders__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SG_OpenFolders Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/windows/openaccess/openfoldersanalysis.webp)

The default analysis tasks are:

- Enumerates open folders across the audited environment – Creates an interim processing table in the database for use by downstream analysis and report generation
- Enumerates hosts with open folders across the audited environment – Creates interim processing tables in the database for use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the SG_OpenFolders job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Open Access By Host | This report enumerates hosts with openly accessible folders. | None | This report is comprised of two elements:   - Line Chart – Displays hosts with open folders - Table – Provides an open folder count by host |
| Open Folders | This report enumerates folders with open access across the audited environment. | None | This report is comprised of two elements:   - Line Chart – Displays open folders over time - Table – Provides details on all open folders |

# SP\_LargestFiles Job

The SP\_LargestFiles Job identifies the largest files across SharePoint farms. Changes to a document or its metadata create new versions that result in added storage. It is therefore important to manage file size and control versioning. Report includes file names, URLs, total file size, versions, and version size, along with file owner and file editor information.

## Analysis Tasks for the SP\_LargestFiles Job

Navigate to the __Jobs__ > __SharePoint__ > __4.Content__ > __SP\_LargestFiles__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SP_LargestFiles Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/sharepoint/content/largestfilesanalysis.png)

The default analysis task is:

- Identify Large Files – Creates the SA\_SP\_LargestFiles\_Details table accessible under the job’s Results node

In addition to the table created by the analysis task which displays the largest file resources, the SP\_LargestFiles Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Largest Files | This report identifies where the largest files, including versions, are stored. | None | This report is comprised of three elements:   - Bar Chart – Displays largest files - Table – Provides a summary of the largest sites - Table – Provides details on largest files |

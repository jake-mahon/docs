# 6.Sensitive Data > SP\_SensitiveData Job

The SP\_SensitiveData Job identifies where sensitive data is located inside SharePoint farms. Special care is paid to access and user activity in these locations.

![6.Sensitve Data > SP_SensitiveData Job in the Jobs Tree](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/db2/sensitivedata/sensitivedatajobstree.png)

The SP\_SensitiveData Job is located in the 6.Sensitive Data Job Group.

## Analysis Tasks for the SP\_SensitiveData Job

Navigate to the __Jobs__ > __SharePoint__ > __6.Sensitive Data__ > __SP\_SensitiveData__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SP_SensitiveData Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/postgresql/collection/sensitivedataanalysis.png)

The default analysis tasks are:

- Details – Creates the SA\_SP\_SensitiveData\_Details table accessible under the job’s Results node
- Summarize by Site – Creates the SA\_SP\_SensitiveData\_SiteSummary table accessible under the job’s Results node
- Enterprise Summary – Creates the SA\_SP\_SensitiveData\_Summary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display sensitive data, the SP\_SensitiveData Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Enterprise Summary (A.K.A. Sensitive Data) | This report summarizes the types and amount of sensitive data discovered on targeted SharePoint farms. | Sensitive Data | This report is comprised of two elements:   - Pie Chart – Displays sensitive data discovered on SharePoint farms - Table – Provides details on sensitive data |
| Site Collection Details | This report highlights sites with the largest amount of sensitive data found. | Sensitive Data | This report is comprised of three elements:   - Bar Chart – Displays top sites by sensitive files - Table – Provides details on the site collection summary - Table – Provides details the files fetched |

# SP\_TeamsSensitiveData Job

The SP\_TeamsSensitiveData Job analyzes sensitive data activity within Teams Sites.

## Analysis Tasks for the SP\_TeamsSensitiveData Job

Navigate to the __Jobs__ > __SharePoint__ > __8.M365__ > __SP\_TeamsSensitiveData__ >__Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SP_TeamsSensitiveData Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/m365/teamssensitivedataanalysis.png)

The default analysis task is:

- Analyze Teams Sensitive Data – Creates the SA\_TeamsSensitiveDataActivityDetails table accessible under the job's Results node

In addition to the table created by the analysis task, the SP\_TeamsSensitiveData Job produces the following preconfigured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Teams Sensitive Data Report | This report analyzes sensitive data activity in Teams sites. | None | This report is comprised of two elements:   - Bar Chart – Provides information on the top Teams users by sensitive file interaction count - Table – Provides details on user activity |

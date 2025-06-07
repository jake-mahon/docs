# Oracle\_SecurityAssessment Job

The Oracle\_SecurityAssessment Job is designed to summarize and categorize the security findings from the Oracle Solution into HIGH, MEDIUM, LOW, and NO FINDING categories base on severity.

![Oracle Security Assessment Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/jobgroup46.png)

## Analysis Tasks for the Oracle\_SecurityAssessment Job

Navigate to the __Databases__ > __Oracle__ > __Oracle\_SecurityAssessment__ > __Configure__ node and select Analysis to view the analysis tasks.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/jobgroup47.png)

The default analysis task is:

- Summarize Audit Findings – Aggregates all security issues in the Oracle environment. Creates the #scopeOfAudit table used to create the Oracle Security Assessment report under the Configure > Reports node

In addition to the tables and views created by the analysis task, the Oracle\_SecurityAssessment Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Oracle Security Assessment | This report summarizes security related results from the Oracle solution set. | Security Assessment | This report is comprised of four elements:   - Table – Provides information on the scope of the audit - Pie Chart – Displays remote OS authentication - Table – Displays findings by category - Table – Provides details of the security assessment |

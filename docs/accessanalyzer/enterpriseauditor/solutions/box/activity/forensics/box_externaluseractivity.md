# Box\_ExternalUserActivity Job

The Box\_ExternalUserActivity Job identifies and analyzes activity events performed by external users over the last 30 days. External Users are collaborators from outside your organization. They can be granted the same collaborator access and sharing rights as Managed Users, but there is limited control over the content they own and their security settings.

## Analysis for the Box\_ExternalUserActivity Job

Navigate to __Box__ > __1.Activity__ > __Forensics__ > __Box\_ExternalUserActivity__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis for the Box_ExternalUserActivity Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/box/activity/forensics/externaluseractivityanalysis.webp)

The following analysis tasks are selected by default:

- External User Activity Details – Creates the Box\_ExternalUserActivity\_Details table accessible under the job’s Results node
- External User Summary – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box\_ExternalUserActivity Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Most Active External User | This report identifies highest resource activity by external users. The bar chart and summary table outline the top 5 most active external users. | None | This report is comprised of three elements:   - Bar Chart – Displays top events by top external users - Table – Provides summary of events by top external user - Table – Provides details on external users |

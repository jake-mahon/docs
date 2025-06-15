# 2.Sharing > Dropbox_Sharing Job

The Dropbox_Sharing job provides insight into the sharing of resources within the targeted Dropbox environment. It is dependent on data collected by the 0.Collection job group. This job processes analysis tasks and generates a report on which resources are being shared and under which policy the sharing occurs. Best practices often dictate that these resources should be carefully monitored due to the amount of access to the data. If these resources contain privileged data, the access should be reevaluated or the sensitive resources relocated.

![2.Sharing > Dropbox_Sharing Job in the Jobs Tree](../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/dropbox/sharingjobstree.webp)

The Dropbox_Sharing job is located in the 2.Sharing job group.

## Analysis Tasks for the Dropbox_Sharing Job

View the analysis tasks by navigating to the __Jobs__ > __Dropbox__ > __2.Sharing__ > __Dropbox_Sharing__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the Dropbox_Sharing Job](../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/box/activity/forensics/sharinganalysis.webp)

- Get shared folder details – Creates the SA_Dropbox_Sharing_Details table accessible under the job’s Results node
- Summarize sharing by team – Creates the SA_Dropbox_Sharing_TeamSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display details on shared resources, the Dropbox_Sharing job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Shared Files and Folders | This report lists all shares by team, and provides sharing policy and owner information. | None | This report is comprised of three elements:   - Bar Chart – Displays shared folders by team - Table – Provides details on shared folders by team - Table – Provides details on shares |

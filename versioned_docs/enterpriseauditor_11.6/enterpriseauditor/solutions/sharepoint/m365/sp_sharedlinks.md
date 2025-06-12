# SP\_SharedLinks Job

The SP\_SharedLinks Job provides an overview of the shared links configured with SharePoint Online, with visibility into Anonymous Sharing, External User Sharing, and activity pertaining to Shared Links.

## Analysis Tasks for the SharedLinks Job

Navigate to the __Jobs__ > __SharePoint__ > __8.M365__ > __SP\_SharedLinks__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SharedLinks Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/m365/sharedlinksanalysis.png)

The default analysis tasks are:

- Calculate anonymous sharing – Creates the SA\_SP\_AnonynomousSharing\_Details table accessible under the job's Results node
- Summarize anonymous sharing – Creates the SA\_SP\_AnonynomousSharing\_Summary table accessible under the job's Results node
- Calculate shared links – Creates the SA\_SP\_SharingLinks\_Details table accessible under the job's Results node
- Summarize shared links – Creates the SA\_SP\_SharingLinks\_SiteCollection and SA\_SP\_SharingLinks\_Tenant\_Summary tables accessible under the job's Results node
- Calculate Shared Links Activity – Creates the SA\_SP\_SharingLinks\_Activity\_Details, SA\_SP\_SharingLinks\_Creation\_Detail\_Last\_7\_Days, and SA\_SP\_SharingLinks\_Creation\_Summary\_Last\_7\_Days tables accessible under the job's Results node

In addition to the tables created by the analysis tasks, the SP\_Shared Links Job produces the following preconfigured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Anonymous Sharing | This report highlights instances where resources are anonymously shared via a shareable link in SharePoint Online. | None | This report is comprised of three elements:   - Bar Chart – Provides information on the top site collections and anonymously shared files - Table – Provides details anonymous sharing summary by site collection - Table – Provides details on anonymously sharing details |
| Shared Link Activity | This report highlights instances of activity via shared links in SharePoint Online. | None | This report is comprised of three elements:   - Bar Chart – Provides information on the shared link creation for the last 7 days OneDrive summary - Table – Provides details on shared link creation summary for the last 7 days - Table – Provides details on shared link activity |
| Shared Links | This report highlights instances of shared links in SharePoint Online. | None | This report is comprised of three elements:   - Bar Chart Table– Provides information on the shared link summary - Bar Chart– Provides details on top site collections by shared files - Table – Provides details on site collection summary - Table – Provides details on shared links |

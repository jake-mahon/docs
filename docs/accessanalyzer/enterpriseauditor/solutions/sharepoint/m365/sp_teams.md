# SP\_Teams

The SP\_Teams Job identifies activities, sensitive data and a summary of collected data for SharePoint Teams.

## Analysis Tasks for the SP\_Teams Job

Navigate to the __Jobs__ > __SharePoint__ > __8.M365__ > __SP\_Teams__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SP_Teams Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/sharepoint/m365/teamsanalysis.webp)

The default analysis task is:

- Teams Details and Summary – Creates the SA\_SP\_TeamsSummary table to populate the Teams Activity and Teams Summary reports
- Teams Activity Details – Creates the SA\_SP\_TeamsActivityDetails table to populate the Teams Activity report
- Teams Activity Summary – Creates the SA\_SP\_TeamsActivitySummary table to populate the Teams Activity report
- Teams Sensitive Data – Creates the SA\_SP\_TeamsFileDetailsSensitiveData table to populate the Teams Sensitive Data report

In addition to the tables created by the analysis tasks, the SP\_Teams Job produces the following preconfigured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Teams Activity | This report identifies and analyzes activity in SharePoint Teams. | None | This report is comprised of three elements:   - Bar Chart – Provides Operation count of the Top Teams - Table – Provides a summary of Teams activity - Table – Provides details about Teams activity |
| Teams Sensitive Data | This report identifies and analyzes sensitive data in SharePoint Teams. | None | This report is comprised of three elements:   - Bar Chart – Provides the top Teams containing sensitive files - Table – Provides a sensitive data summary - Table – Provides additional details about sensitive files in Teams |
| Teams Summary | This report summarizes collected data for SharePoint Teams. | None | This report is comprised of four elements:   - Table – Provides a summary of permissions in Teams - Bar Chart – Provides information about Top Teams by size (GB) - Pie Chart – Provides a comparison of stale vs active Teams sites - Table – Provides additional details about Teams sites permissions |

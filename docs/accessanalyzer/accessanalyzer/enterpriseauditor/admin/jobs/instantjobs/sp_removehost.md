# SP\_RemoveHost Job

The SP\_RemoveHost Job removes desired SharePoint hosts from the Access Analyzer database. It is available through the Instant Job Library under the SharePoint library. See the [Instant Job Wizard](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/overview.md) topic for instructions to add this instant job into the Jobs tree.

![SP_RemoveHost job in the Jobs tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.png)

Runtime Details:

- Dependencies – None
- Target Hosts – SharePoint host to be deleted
- Scheduling – This job should be scheduled to run as desired
- History Retention – Not supported and should be turned off
- Multi-console Support – Not supported
- Additional Notes – None

The SP\_RemoveHosts Job removes desired SharePoint hosts from the Access Analyzer database, target the hosts on the job and run it to delete the respective hosts SharePoint data.

## Analysis Tasks for the SP\_RemoveHost Job

Navigate to the __Jobs__ > __SP\_RemoveHost__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Default Analysis tasks for the job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/analysistasks.png)

The default analysis tasks are:

- Remove Host(s) — Remove Scanned Hosts from Tier 1

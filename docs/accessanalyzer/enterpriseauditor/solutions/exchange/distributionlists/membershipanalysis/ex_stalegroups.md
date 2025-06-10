# EX\_StaleGroups Job

The EX\_StaleGroups job identifies potentially stale distribution groups based on the last domain logon of the members. These groups should be reviewed and cleaned up.

## Analysis Tasks for the EX\_StaleGroups Job

View the analysis tasks by navigating to the __Exchange__ > __6. Distribution Lists__ > __Membership Analysis__ > __EX\_StaleGroups__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_StaleGroups Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/distributionlists/membershipanalysis/stalegroupsanalysis.webp)

The following analysis tasks are selected by default:

- 1. Stale User Details – Creates the SA\_EX\_StaleGroups\_Details table, accessible under the job’s Results node
- 2. Group Summary – Creates the SA\_EX\_StaleGroups\_GroupSummary table, accessible under the job’s Results node
- 3. Stale Groups – Creates an interim processing table in the database, for use by downstream analysis and report generations

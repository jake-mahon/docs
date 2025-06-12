# UX\_SambaConfiguration Job

The __0.Collection__ > __UX\_SambaConfiguration__ job collects Samba configuration information which will be further analyzed to identify and categorize risk within audited Unix and Linux environments.

## Queries for the UX\_SambaConfiguration Job

The UX\_SambaConfiguration job uses the Unix Data Collector for the following queries:

__CAUTION:__ The queries are preconfigured for this job. Never modify the queries.

![Queries for the UX_SambaConfiguration Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/unix/sharing/collection/sambaconfigurationqueries.png)

The queries for the UX\_SambaConfiguration Job are:

- Samba Configuration – Uses the Unix Data Collector to parse the smb.conf file
- Host OS – Gets the operating system of the target hosts

## Analysis Tasks for the UX\_SambaConfiguration Job

Navigate to the __Unix__ > __3.Sharing__ > __0.Collection__ > __UX\_SambaConfiguration__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the UX_SambaConfiguration Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/unix/sharing/collection/sambaconfigurationanalysis.png)

The default analysis task is:

- Creates Samba Parameters table from scan results – Creates the SA\_UX\_Sharing\_SambaParameters table accessible under the job’s Results node

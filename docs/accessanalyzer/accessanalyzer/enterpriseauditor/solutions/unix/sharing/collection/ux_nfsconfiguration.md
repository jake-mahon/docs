# UX\_NFSConfiguration Job

The __0.Collection__ > __UX\_NFSConfiguration__ job collects NFS configuration information which will be further analyzed to identify and categorize risk within audited Unix and Linux environments.

## Queries for the UX\_NFSConfiguration Job

The UX\_NFSConfiguration job uses the Unix Data Collector for the following queries:

__CAUTION:__ The queries are preconfigured for this job. Never modify the queries.

![Queries for the UX_NFSConfiguration Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/unix/sharing/collection/nfsconfigurationqueries.png)

The queries for the UX\_NFSConfiguration job are:

- NFS Config – NFS Configuration
- Host OS – Gets the operating system of the target hosts

## Analysis Tasks for the UX\_NFSConfiguration Job

Navigate to the __Unix__ > __3.Sharing__ > __0.Collection__ > __UX\_NFSConfiguration__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the UX_NFSConfiguration Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/unix/sharing/collection/nfsconfigurationanalysis.png)

The default analysis task is:

- Create NFS Options table – Creates the SA\_UX\_Sharing\_NFSOptions table accessible under the job’s Results node

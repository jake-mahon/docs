# UX_NFSConfiguration Job

The __0.Collection__ > __UX_NFSConfiguration__ job collects NFS configuration information which will be further analyzed to identify and categorize risk within audited Unix and Linux environments.

## Queries for the UX_NFSConfiguration Job

The UX_NFSConfiguration job uses the Unix Data Collector for the following queries:

__CAUTION:__ The queries are preconfigured for this job. Never modify the queries.

![Queries for the UX_NFSConfiguration Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/unix/sharing/collection/nfsconfigurationqueries.webp)

The queries for the UX_NFSConfiguration job are:

- NFS Config – NFS Configuration
- Host OS – Gets the operating system of the target hosts

## Analysis Tasks for the UX_NFSConfiguration Job

Navigate to the __Unix__ > __3.Sharing__ > __0.Collection__ > __UX_NFSConfiguration__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the UX_NFSConfiguration Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/unix/sharing/collection/nfsconfigurationanalysis.webp)

The default analysis task is:

- Create NFS Options table – Creates the SA_UX_Sharing_NFSOptions table accessible under the job’s Results node

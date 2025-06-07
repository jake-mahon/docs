# 0-FSDFS System Scans Job

The 0-FSDFS System Scans job enumerates a list of all root and link targets in the distributed file system and creating a dynamic host list that will be used by the components.

## Query for the 0-FSDFS System Scans Job

The DFS System Scan Query uses the FSAA Data Collector and has been preconfigured to use the DFS Scan Category.

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Query for the 0-FSDFS System Scans Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/fsdfssystemscansquery.png)

- DFS System Scan – Scans the DFS System

## Analysis Tasks for the 0-FSDFS System Scans Job

View the analysis tasks by navigating to the __FileSystem__ > __0.Collection__ > __0-FSDFS System Scans__ > __Configure__ node and selecting __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the 0-FSDFS System Scans Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/fsdfssystemscansanalysis.png)

The following analysis tasks are selected by default:

- Create Hosts View – Creates the 0-FSDFS\_System\_HostView visible through the Results node that contains the dynamic host list
- Create Views – Creates the FSDFS\_NamespacesTraversalView visible through the Results node that contains expansion of all the scanned namespaces

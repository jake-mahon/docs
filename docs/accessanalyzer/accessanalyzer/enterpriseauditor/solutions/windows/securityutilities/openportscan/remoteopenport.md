# RemoteOpenPort Job

The RemoteOpenPort job remotely executes a ```netstat -a -b -n``` command to gather information about the available ports on the targeted hosts.

## Queries for the RemoteOpenPort Job

The RemoteOpenPort job uses the Script Data Collector for the following query:

__CAUTION:__ The query is preconfigured for this job. Never modify the query.

![Queries for the RemoteOpenPort Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/securityutilities/openportscan/remoteopenportquery.png)

The query for the RemoteOpenPort job is:

- Remote Execution of NETSTAT – Runs VBScript on a remote host to run NETSTAT and gather information about the available ports on the targeted hosts

## Analysis Tasks for the RemoteOpenPort Job

Navigate to the __Windows__ > __Security Utilities__ > __OpenPortScan__ > __RemoteOpenPort__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the RemoteOpenPort Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/securityutilities/openportscan/remoteopenportanalysis.png)

The default analysis task is:

- 1. Impose 30 Second Wait Timer – Slows processing down to allow remote command to complete

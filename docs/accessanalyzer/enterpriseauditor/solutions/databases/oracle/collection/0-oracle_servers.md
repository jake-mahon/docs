# 0-Oracle_Servers Job

The 0-Oracle_Servers job is designed to enumerate and store the list of Oracle Database Instances running on the targeted servers.

## Query for the Oracle_Servers Job

The Server Discovery query uses the PowerShell Data Collector for the following query:

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Query Selection](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/oracle/collection/jobgroup3.webp)

- Oracle Servers – Returns a list of Oracle servers from the specified host list

Regarding Oracle instance discovery, there may be errors running the query that are not reported. An additional log to store the issues has been added for instance discoveries named ```Oracle_Server_log_[target_hostname]```. This file can be found in ```%sainstalldir%\Jobs\GROUP_ORACLE_0.Collection\GROUP_1.Discovery\JOB_Oracle_Servers\OUTPUT```. See the [PowerShell Data Collector](../../../../admin/datacollector/powershell/overview.md) topic for additional information.

## Analysis Task for the Oracle_Servers Job

Navigate to the __Databases__ > __0.Collection__ > __Oracle__ > __0-Oracle_Servers__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Selection](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/oracle/collection/jobgroup4.webp)

The default analysis task is:

- Insert Instances in SA_SQL_Instances table – Creates the SA_SQL_Instances table accessible under the job’s Results node

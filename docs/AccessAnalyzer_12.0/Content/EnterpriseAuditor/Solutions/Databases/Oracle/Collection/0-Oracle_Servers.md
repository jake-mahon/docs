---
sidebar_position: 5494
title: 0-Oracle_Servers Job
---

# 0-Oracle\_Servers Job

The 0-Oracle\_Servers job is designed to enumerate and store the list of Oracle Database Instances running on the targeted servers.

## Query for the Oracle\_Servers Job

The Server Discovery query uses the PowerShell Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/JobGroup3.png "Query Selection")

* Oracle Servers – Returns a list of Oracle servers from the specified host list

Regarding Oracle instance discovery, there may be errors running the query that are not reported. An additional log to store the issues has been added for instance discoveries named `Oracle_Server_log_[target_hostname]`. This file can be found in `%sainstalldir%\Jobs\GROUP_ORACLE_0.Collection\GROUP_1.Discovery\JOB_Oracle_Servers\OUTPUT`. See the [PowerShell Data Collector](../../../../Admin/DataCollector/PowerShell/Overview "PowerShell Data Collector") topic for additional information.

## Analysis Task for the Oracle\_Servers Job

Navigate to the **Databases** > **0.Collection** > **Oracle** > **0-Oracle\_Servers** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/JobGroup4.png "Analysis Selection")

The default analysis task is:

* Insert Instances in SA\_SQL\_Instances table – Creates the SA\_SQL\_Instances table accessible under the job’s Results node
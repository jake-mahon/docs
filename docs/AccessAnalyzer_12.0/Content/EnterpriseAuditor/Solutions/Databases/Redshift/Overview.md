---
sidebar_position: 5408
title: Redshift Solution
---

# Redshift Solution

The Access Analyzer Redshift Solution Set is a comprehensive set of pre-configured audit jobs and reports that provide visibility into various aspects of Redshift: Data Collection, Configuration, and Sensitive Data.

The Redshift Solution requires a special Access Analyzer license. Additionally, Sensitive Data Discovery enables the solution to search Redshift and AWS content for sensitive data.

Supported Platforms

* Amazon AWS Redshift
* AWS Redshift Cluster

Requirements, Permissions, and Ports

See the [Target Redshift Requirements, Permissions, and Ports](../../../Requirements/Target/DatabaseRedshift "Target Redshift Requirements, Permissions, and Ports") topic for additional information.

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

By default, the job is configured to use 10 threads, which can be adjusted based on available resources on the Access Analyzer server.

**NOTE:** The appropriate JDK (Java) version for Sensitive Data Discovery is installed on the server. The JDK deployed is prepackaged and does not require any configuration; it has been preconfigured to work with Access Analyzer and should never be customized through Java. It will not conflict with other JDKs or Java Runtimes in the same environment.

Location

The Redshift Solution requires a special Access Analyzer license. It can be installed from the Access Analyzer Instant Job Wizard. Once it has been installed in the **Jobs** tree, navigate to the solution: **Jobs** > **Databases** > **Redshift Solution**.

The 0.Collection Job Group discovers SQL instances on the target hosts, and collects the data. The other job groups analyze the collected data and generate reports.

The Database Solution license includes all supported database platforms supported by Access Analyzer. Additionally, Sensitive Data Discovery enables the solution to search database content for sensitive data.

## Redshift Job Group

The Access Analyzer Redshift  Solution Set is a set of preconfigured audit jobs and reports that provides visibility into Redshift Sensitive Data.

![](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Redshift/RedshiftJobGrpOverview.png)

The following job groups comprise the Redshift Job Group:

* [0.Collection Job Group](Collection/Overview "0.Collection Job Group") — Collects high level summary information from targeted Redshift Servers. Other jobs in the Redshift Solution Set use this information for further analysis and producing respective report. This Job Group is comprised of the following jobs(s)

  * [Redshift\_Configuration Job](Collection/Redshift_Configuration "Redshift_Configuration Job")
  * [Redshift\_SensitiveDataScan Job](Collection/Redshift_SensitiveDataScan "Redshift_SensitiveDataScan Job")
  * [Redshift\_TablePrivileges Job](Collection/Redshift_TablePrivileges "Redshift_TablePrivileges Job")

* [Configuration > Redshift\_DatabaseSizing Job](Redshift_DatabaseSizing "Configuration > Redshift_DatabaseSizing Job") — Provides insight into details about the Redshift environment and potential vulnerabilities relating to instance configuration settings.

* [Sensitive Data Job Group](Sensitive Data/Overview "Navigates to the Sensitive Data Job Group section") — Provides insight into where sensitive data exists and who has access to it across all the targeted Redshift databases.This Job Group is comprised of the following job(s):

  * [Redshift\_SensitiveData Job](Sensitive Data/Redshift_SensitiveData "Redshift_SensitiveData")
  * [Redshift\_SensitiveDataPermissions Job](Sensitive Data/Redshift_SensitiveDataPermissions "Redshift_SensitiveDataPermissions Job")
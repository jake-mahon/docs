---
sidebar_position: 5497
title: 0.Collection Job Group
---

# 0.Collection Job Group

The Oracle Job Group is designed to collect a high level summary of information from the targeted Oracle Database Servers. This information is used by other jobs in the Oracle Job Group for further analysis, and for producing reports.

![Oracle 0Collection Job Group](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/0Collection.png "Oracle 0Collection Job Group")

The job groups in the 0.Collection Job Group are:

* [0-Oracle\_Servers Job](0-Oracle_Servers#_Oracle_Servers_Job_1 "0-Oracle_Servers Job") – This job is designed to enumerate and store the list of Oracle Database Instances running on the targeted servers
* [1-Oracle\_PermissionsScan Job](1-Oracle_PermissionsScan#_1-Oracle_PermissionsScan_Job_1 "1-Oracle_PermissionsScan Job") – This job is designed to collect Oracle database level permissions from all the targeted Oracle database servers
* [2-Oracle\_SensitiveDataScan Job](2-Oracle_SensitiveDataScan#_2-Oracle_SensitiveDataScan_Job_1 "2-Oracle_SensitiveDataScan Job") – This job is designed to discover sensitive data in the Oracle database across all the targeted Oracle database servers based on pre-defined or user-defined search criteria
* [3-Oracle\_ActivityScan Job](3-Oracle_ActivityScan#_3-Oracle_ActivityScan_Job_1 "3-Oracle_ActivityScan Job") – This job is designed to capture user activity from all the targeted Oracle database servers
* [4-Oracle\_DefaultPasswordUsers Job](4-Oracle_DefaultPasswordUsers#_4-Oracle_DefaultPasswordUsers_Job_1 "4-Oracle_DefaultPasswordUsers Job") – This job is designed to provide a list of users in the database that are configured to use default passwords
* [5-Oracle\_Configuration Job](5-Oracle_Configuration "5-Oracle_Configuration Job") – This job is designed to return additional configuration settings from Oracle servers.
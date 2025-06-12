# 0.Collection Job Group

The Oracle Job Group is designed to collect a high level summary of information from the targeted Oracle Database Servers. This information is used by other jobs in the Oracle Job Group for further analysis, and for producing reports.

![Oracle 0Collection Job Group](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/oracle/collection/0collection.png)

The job groups in the 0.Collection Job Group are:

- [0-Oracle\_Servers Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/oracle/collection/0-oracle_servers.md#0-oracle_servers-job) – This job is designed to enumerate and store the list of Oracle Database Instances running on the targeted servers
- [1-Oracle\_PermissionsScan Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/oracle/collection/1-oracle_permissionsscan.md#1-oracle_permissionsscan-job) – This job is designed to collect Oracle database level permissions from all the targeted Oracle database servers
- [2-Oracle\_SensitiveDataScan Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/oracle/collection/2-oracle_sensitivedatascan.md#2-oracle_sensitivedatascan-job) – This job is designed to discover sensitive data in the Oracle database across all the targeted Oracle database servers based on pre-defined or user-defined search criteria
- [3-Oracle\_ActivityScan Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/oracle/collection/3-oracle_activityscan.md#3-oracle_activityscan-job) – This job is designed to capture user activity from all the targeted Oracle database servers
- [4-Oracle\_DefaultPasswordUsers Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/oracle/collection/4-oracle_defaultpasswordusers.md#4-oracle_defaultpasswordusers-job) – This job is designed to provide a list of users in the database that are configured to use default passwords
- [5-Oracle\_Configuration Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/oracle/collection/5-oracle_configuration.md) – This job is designed to return additional configuration settings from Oracle servers.

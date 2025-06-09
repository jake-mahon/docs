# 4.Configuration Job Group

The SQL > 4.Configuration Job Group Is designed to provide insight into potential vulnerabilities related to Oracle Database Instance configuration settings.

![Configuration Job Group - Oracle](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/configuration/configoverview.png)

The jobs in the 4.Configuration Job Group are:

- [Oracle\_DatabaseLinks Job](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/configuration/oracle_databaselinks.md) – Contains a report that provides information on Database Links where the listed Oracle Server is able to execute remote commands
- [Oracle\_DatabaseSizing Job](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/configuration/oracle_databasesizing.md) – Provides details on tablespace file sizes and overall tablespace sizes
- [Oracle\_DataDictionaryProtection Job](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/configuration/oracle_datadictionaryprotection.md) – This job is designed to identify if the Oracle data dictionary views are accessible by all the schemas or not. Oracle best practice recommendations are to restrict access to data dictionary views by default and grant explicit system privilege to access the dictionary views when needed.
- [Oracle\_InstanceNameIssues Job](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/configuration/oracle_instancenameissues.md) – This job is designed to find out if the names used for the Oracle database instances conform to Oracle recommended best practices. The job also checks to see if the Oracle SID conforms to DISA STIG V-61413 – Oracle instance name or SID should not contain Oracle version numbers.
- [Oracle\_RemoteOSAuthentication Job](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/configuration/oracle_remoteosauthentication.md) – This job is designed to find out if remote OS authentication is enabled for the targeted Oracle database servers

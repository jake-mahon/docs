# SQL\_PasswordIssues Job

The SQL\_PasswordIssues Job analyzes SQL or Azure SQL login passwords and evaluates SQL login password compliance against prescribed password policies. The SQL\_PasswordIssues Job also checks for weak passwords.

## Queries for the SQL\_Passwords Job

The Collect Weak Passwords Job uses the PowerShell Data Collector for the following query:

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Query Selection](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/sql/usersroles/sqljobgroup24.png)

- Collect Weak Passwords – Locate the dictionary file containing the weak passwords and import the passwords
  - See [PowerShell Data Collector](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/powershell/overview.md) for additional information.

## Analysis Tasks for the SQL\_PasswordIssues Job

Navigate to the Jobs > __Databases__ > SQL > 3.Users and Roles > SQL\_PasswordIssues > Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Most of these analysis tasks are preconfigured and should not be modified and or deselected unless otherwise specified.

![Analysis Selection](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/sql/usersroles/sqlpasswordissuesanalysistasks.png)

The default analysis tasks are:

- Analyze the Weak Passwords – Compare the weak passwords list against the collected password hashes
  - This analysis task has a configurable parameter:
    - @ShowPassword – Set to __0__ by default. Set to __1__ to enable the analysis task to bring back the plain-text password that was found
    - See the [Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md) topic for additional information on modifying analysis parameters.
- Shared Passwords – Highlights SQL Server Logins with shared password hashes
- No Password – Inserts users that do not have a password set into the details table
- Summarize the Weak Password Results – Summarizes the data that has been collected by the weak passwords job

The following analysis task is deselected by default:

- Drop SQL Login Password Hashes – Nulls the SQL password hashes for the SQLServer\_SqlLogins table.
  - Enable this analysis task only if needed. This analysis task nulls the password\_hash column in the SA\_SqlServer\_SqlLogins table.

In addition to the tables and views created by the analysis tasks, the SQL\_PasswordIssues Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Reused Passwords | This report highlights instances where a password hash is being reused. | None | This report is comprised of one element:   - Table – Provides details on reused password details |
| Weak Passwords | This report highlights SQL logins that have a weak password. | None | This report is comprised of three elements:   - Bar Chart – Displays weak passwords by instance - Table – Provides details on weak passwords by instance data - Table – Provides details on logins with weak passwords |

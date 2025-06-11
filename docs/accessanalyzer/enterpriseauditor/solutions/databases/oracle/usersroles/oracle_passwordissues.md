# Oracle\_PasswordIssues Job

The Oracle\_PasswordIssues Job is designed to analyze the Oracle user passwords and evaluate if they comply with prescribed password policies. In addition, the job group will also scan for weak passwords.

## Query for the Oracle\_PasswordIssues Job

The Oracle\_PasswordIssues Job uses the PowerShell Data Collector for the following query:

__CAUTION:__ Do not modify the query. The query is preconfigured for this job.

![Query Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/oracle/usersroles/jobgroup20.webp)

- Weak Password Hash – Locates the dictionary file used to compare Oracle passwords to determine if they are weak.

See the [PowerShell Data Collector](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/powershell/overview.md) topic for additional information.

## Analysis Tasks for the Oracle\_PasswordIssues Job

Navigate to the __Jobs__ > __Oracle__ > __1.Users and Roles__ > __Oracle\_PasswordIssues__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/oracle/usersroles/jobgroup21.webp)

The default analysis tasks are:

- Oracle Weak Password Details – Lists details of weak passwords in Oracle. Adds data to the SA\_Oracle\_PasswordIssues\_Details table accessible under the job’s Results node.
- Weak Hashes – Highlights user accounts with weak hashes. Adds data to the SA\_Oracle\_PasswordIssues\_Details table accessible under the job’s Results node.
- Default Passwords – Finds users with default passwords. Adds data to the SA\_Oracle\_PasswordIssues\_Details table accessible under the job’s Results node.
- Weak Password Instance Summary – Summarizes weak passwords per instance. Creates the SA\_Oracle\_PasswordIssues\_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the Oracle\_PasswordIssues Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Weak Passwords | This report highlights users with weak passwords in the audited Oracle environment | None | This report is comprised of three elements:   - Bar Chart – Displays password issues by instance - Table – Provides details on password issues by instance - Table – Provides information on password issue details |

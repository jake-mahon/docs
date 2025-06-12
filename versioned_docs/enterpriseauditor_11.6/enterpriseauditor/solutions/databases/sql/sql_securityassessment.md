# SQL\_SecurityAssessment Job

The SQL\_SecurityAssessment Job summarizes and categorizes security findings into HIGH, MEDIUM, LOW, and NO FINDINGS categories based on severity.

![SQL_SecurityAssessment](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/sqljobgroup49.png)

Special Dependencies

One or more of the following jobs or job groups must be run to produce results:

- [0.Collection > SQL Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/collection/overview.md)
- [SQL\_PasswordIssues Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/usersroles/sql_passwordissues.md)
- [SQL\_RoleMembers Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/usersroles/sql_rolemembers.md)
- [SQL\_PublicPermissions Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/permissions/sql_publicpermissions.md)
- [5.Sensitive Data Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/sensitivedata/overview.md)
- [Privileged Accounts Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/windows/privilegedaccounts/overview.md)
- [Privileged Accounts Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/windows/privilegedaccounts/overview.md)

Only information collected from jobs/groups being run will produce findings.

### Analysis Task for the SQL\_SecurityAssessment Job

Navigate to the SQL > SQL\_SecurityAssesment > Configure node and select Analysis to view the analysis task.

![Analysis Selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/sqljobgroup50.png)

The default analysis task is:

- Summarize Audit Findings – Pulls data from tables created by the jobs and job groups throughout the SQL Solution to provide a summary of results in the SQL Security Assessment report

In addition to the tables and views created by the analysis task, the SQL\_SecurityAssessment Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| SQL Security Assessment | This report summarizes security related results from the SQL solution set. | Security Assessment | This report is comprised of four elements:   - Table – Provides details on the scope of the audit of the SQL Solution set - Pie Chart – Displays job findings by severity - Table – Displays findings by category and provides details on the SQL\_SecurityAssessment job results |

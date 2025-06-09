# AD\_SIDHistory Job

The AD\_SIDHistory Job enumerates historical SIDs in the audited environment and highlights exceptions involving the SIDHistory attribute on AD user objects. Specific conditions include when a user has a historical SID from their current domain, or when a non-admin user has a historical SID with administrative rights, both of which may be indicators of compromise.

## Analysis Tasks for the AD\_SIDHistory Job

Navigate to the __Active Directory__ > __2.Users__ > __AD\_SIDHistory__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_SIDHistory Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/users/sidhistoryanalysis.png)

The default analysis tasks are:

- Determine SIDHistory details – Creates the SA\_AD\_SIDHistory\_Details table accessible under the job’s Results node
- Summarize SIDHistory details – Creates the SA\_AD\_SIDHistory\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_PasswordStatus Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| SID History | This report lists historical SIDs in the audited environment. Additionally, it highlights exceptions involving the SIDHistory attribute on AD user objects. Considered in particular are when a user has a historical SID from their current domain, or when a non-admin user has a historical SID with administrative rights. | None | This report is comprised of three elements:   - Bar Chart – Displays historical SIDs by domain  - Table – Provides details on SID history  - Table – Provides details on historical SIDs by domain |

# AD\_DCLogonGroups Job

The AD\_DCLogonGroups Job identifies users who are able to log on to Domain Controllers through effective membership to the Enterprise Admins, Domain Admins, Administrators, Backup Operators, Account Operators, Print Operators, or Remote Desktop Users groups. This type of access should be limited to only those individuals who require this level of administrative privileges.

## Analysis Tasks for the AD\_DCLogonGroups Job

Navigate to the __Active Directory__ > __1.Groups__ > __AD\_DCLogonGroups__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_DCLogonGroups Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/groups/dclogongroupsanalysis.png)

The default analysis tasks are:

- Circular Effective Membership – Creates the SA\_AD\_DCLogonGroups\_Membership table accessible under the job’s Results node
- User Listing – Creates the SA\_AD\_DCLogonGroups\_UserList table accessible under the job’s Results node
- Membership Summary – Creates the SA\_AD\_DCLogonGroups\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_CircularNesting Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Domain Controller Logon Rights | This report displays effective membership for groups with logon rights to domain controllers. | None | This report is comprised of three elements:   - Stacked Bar Chart – Displays largest groups  - Table – Provides details on membership  - Table – Provides summary of membership |

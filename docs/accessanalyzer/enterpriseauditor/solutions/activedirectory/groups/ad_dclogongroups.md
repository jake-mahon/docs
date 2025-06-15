# AD_DCLogonGroups Job

The AD_DCLogonGroups Job identifies users who are able to log on to Domain Controllers through effective membership to the Enterprise Admins, Domain Admins, Administrators, Backup Operators, Account Operators, Print Operators, or Remote Desktop Users groups. This type of access should be limited to only those individuals who require this level of administrative privileges.

## Analysis Tasks for the AD_DCLogonGroups Job

Navigate to the __Active Directory__ > __1.Groups__ > __AD_DCLogonGroups__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_DCLogonGroups Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/groups/dclogongroupsanalysis.webp)

The default analysis tasks are:

- Circular Effective Membership – Creates the SA_AD_DCLogonGroups_Membership table accessible under the job’s Results node
- User Listing – Creates the SA_AD_DCLogonGroups_UserList table accessible under the job’s Results node
- Membership Summary – Creates the SA_AD_DCLogonGroups_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_CircularNesting Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Domain Controller Logon Rights | This report displays effective membership for groups with logon rights to domain controllers. | None | This report is comprised of three elements:   - Stacked Bar Chart – Displays largest groups  - Table – Provides details on membership  - Table – Provides summary of membership |

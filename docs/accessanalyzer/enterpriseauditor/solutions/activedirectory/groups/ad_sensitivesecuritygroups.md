# AD\_SensitiveSecurityGroups Job

The AD\_SensitiveSecurityGroups Job identifies users who are granted administrative access within Active Directory through membership to the Enterprise Admins, Domain Admins, Schema Admins, DNS Admins, or Administrators groups. This level of access should be limited to only those individuals who require this level of administrative privileges.

## Analysis Tasks for the AD\_SensitiveSecurityGroups Job

Navigate to the __Active Directory__ > __1.Groups__ > __AD\_SensitiveSecurityGroups__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_SensitiveSecurityGroups Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/groups/sensitivesecuritygroupsanalysis.png)

The default analysis tasks are:

- Calculate Effective Membership – Creates the SA\_AD\_SensitiveSecurityGroups\_Membership table accessible under the job’s Results node
- User Listing – Creates the SA\_AD\_SensitiveSecurityGroups\_UserList table accessible under the job’s Results node
- Membership Summary – Creates the SA\_AD\_SensitiveSecurityGroups\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_SensitiveSecurityGroups Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Sensitive Security Group Membership | This report displays effective membership for sensitive security groups. | None | This report is comprised of three elements:   - Stacked Bar Chart – Displays largest groups  - Table – Provides details on membership  - Table – Provides summary of group membership |

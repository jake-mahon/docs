---
title: active directory permissions analysis
sidebar_label: permissions analysis
description: Solution guide for active directory permissions analysis including implementation steps, configuration, and best practices.
---

# 6.Broken Inheritance > AD_BrokenInheritance Job

The AD_BrokenInheritance Job reports on all locations within Active Directory where inheritance is
broken within the targeted domains.

![6.Broken Inheritance Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/brokeninheritancejobstree.webp)

The AD_BrokenInheritance Job is located in the 6.Broken Inheritance Job Group.

## Analysis Tasks for the AD_BrokenInheritance Job

Navigate to the **Active Directory Permissions Analyzer** > **6.BrokenInheritance** >
**AD_BrokenInheritance** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_BrokenInheritance Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/brokeninheritanceanalysis.webp)

The default analysis tasks are:

- Broken Inheritance Details – Creates the SA_AD_BrokenInheritance_Details table accessible under
  the job’s Results node
- Broken Inheritance Summary – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_BrokenInheritance Job
produces the following pre-configured report.

| Report                       | Description                                                                                                                   | Default Tags | Report Elements                                                                                                                                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Broken Inheritance by Domain | This report highlights instances of broken inheritance on Active Directory objects. This information is summarized by domain. | None         | This report is comprised of three elements: - Bar Chart – Displays broken inheritance by domain - Table – Provides summary of broken inheritance by OU - Table – Provides details on broken inheritance |

# 5.Open Access > AD_OpenAccess Job

The AD_OpenAccess Job reports on all Active Directory permissions granting open access within the
targeted domains. Open Access can be defined as access granted to security principals such as:
Domain Users, Authenticated Users, and Everyone.

![5.Open Access Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/openaccessjobstree.webp)

The AD_OpenAccess Job is located in the 5.Open Access Job Group.

## Analysis Tasks for the AD_OpenAccess Job

Navigate to the **Active Directory Permissions Analyzer** > **5.Open Access** > **AD_OpenAccess** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_OpenAccess Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/openaccessanalysis.webp)

The default analysis tasks are:

- Determine open access – Creates the SA_AD_OpenAccess_Details table accessible under the job’s
  Results node
- Summarize open access by domain – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_OpenAccess Job produces
the following pre-configured report.

| Report                | Description                                                                                          | Default Tags | Report Elements                                                                                                                                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Open Access by Domain | This report highlights instances of open access on AD objects, and summarizes open access by domain. | None         | This report is comprised of three elements: - Bar Chart – Displays open access by domain - Table – Provides details on open access - Table – Provides details on open access by domain |

# 3.OUs > AD_OUPermissions Job

The AD_OUPermissions Job reports on all Active Directory permissions applied to organizational unit
objects within the targeted domains.

![3.OUs Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/ousjobstree.webp)

The AD_OUPermissions Job is located in the 3.OUs Job Group.

## Analysis Tasks for the AD_OUPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **3.OUs** > **AD_OUPermissions** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_OUPermissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/oupermissionsanalysis.webp)

The default analysis tasks are:

- List OU permissions – Creates the SA_AD_OUPermissions_Details table accessible under the job’s
  Results node
- Summarize OU permissions – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_OUPermissions Job produces
the following pre-configured report.

| Report         | Description                                                                                                                                                                  | Default Tags | Report Elements                                                                                                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OU Permissions | This report highlights instances where permissions are applied to Active Directory organizational units. This information is summarized at the domain and enterprise levels. | None         | This report is comprised of three elements: - Bar Chart – Displays OU permissions by domain - Pie Chart – Displays OU permissions by type - Table – Provides details on OU permissions |

# AD_ShadowAccess Job

This job finds shadow access that leads to compromise of a domain or sensitive data. Attackers can
chain vulnerabilities to escalate privileges from a non-privileged user to administrator with only a
few steps. This job will generate the shortest path between every non-privileged user to a domain
administrative group, total domain compromise, or access to sensitive data.

This job will analyze the following links between resources and privileges in your environment:

- Effective Group Membership
- Modify Group Membership
- Reset User Password
- Access through adminSDHolder
- DCSync/Domain Replication privileges
- Shared passwords between domain accounts
- Groups that provide access to sensitive data
- Local administrators that can dump hashes from user sessions
- Administrative rights on SQL Servers that hold sensitive data

The AD_ShadowAccess Job has special dependencies. See the
[Recommended Configurations for AD Permissions Analyzer Solution](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
topic for additional information.

## Analysis Tasks for the AD_ShadowAccess Job

Navigate to the **Active Directory Permissions Analyzer** > **AD_ShadowAccess** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks, with the exception of the
**Calculate Shadow Access** analysis tasks. The analysis tasks are preconfigured for this job. The
**Calculate Shadow Access** analysis task is the only analysis task that has customizable
parameters.

![Analysis Tasks for the AD_ShadowAccess Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/shadowaccessanalysis.webp)

The default analysis tasks are:

- Shadow Access Schema – Sets up the Shadow Access Tables and Views
- Dijkstra – Creates an interim processing table in the database for use by downstream analysis and
  report generation
- Path Formatting – Creates an interim processing table in the database for use by downstream
  analysis and report generation
- String Split – Creates an interim processing table in the database for use by downstream analysis
  and report generation
- Calculate Shadow Access – Creates the SA_ShadowAccess_Details table accessible under the job’s
  Results node

  - This Analysis Task has configurable parameters. See the
    [Configure the Analysis Tasks for the AD_ShadowAccess Job](#configure-the-analysis-tasks-for-the-ad_shadowaccess-job)
    topic for additional information.

- Shadow Access Paths Cleanup – Removes calculated rows that are no longer used

In addition to the tables and views created by the analysis tasks, the AD_ShadowAccess Job produces
the following pre-configured reports.

| Report                       | Description                                                                                                | Default Tags | Report Elements                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Domain Shadow Access         | This report will calculate the shortest path between highly sensitive privileges and non-privileged users. | None         | This report is comprised of five elements: - Bar Chart – Displays summary information on targeted domain - Table – Provides details on targeted domain in table form - Table – Provides details on exploited permissions - Table – Provides details on vulnerabilities - Table – Provides details on domain users and attack paths that can be used against those domain users |
| Sensitive Data Shadow Access | This report will calculate the shortest path between highly sensitive data and non-privileged users.       | None         | This report is comprised of five elements: - Bar Chart – Displays summary information on sensitive data - Table – Provides details on sensitive data in table form - Table – Provides details on exploited permissions - Table – Provides details on vulnerabilities - Table – Provides details on domain users and attack paths that can be used against those domain users   |

See the
[Report Functions for the AD_ShadowAccess Job](#report-functions-for-the-ad_shadowaccess-job) topic
for additional information.

### Customizable Analysis Tasks for the AD_ShadowAccess Job

The default values for customizable parameters are:

| Analysis Task            | Customizable Parameter Name | Default Value                                         | Instruction                           |
| ------------------------ | --------------------------- | ----------------------------------------------------- | ------------------------------------- |
| Calculate Shadow Access  | @session                    | 1                                                     | Set to 0 to turn off Session Analysis |
| @shared_password         | 0                           | Set to 0 to turn of Shared Password Analysis          |                                       |
| @modify_group_membership | 1                           | Set to 0 to turn off Modify Group Membership analysis |                                       |
| @sensitive_data          | 1                           | Set to 0 to ignore sensitive data attacks             |                                       |
| @dcsync                  | 1                           | Set to 0 to ignore dcsync rights                      |                                       |
| @sdholder                | 1                           | Set to 0 to ignore sdadminholder                      |                                       |
| @disabled                | 0                           | Set to 0 to ignore disabled users                     |                                       |

See the
[Configure the Analysis Tasks for the AD_ShadowAccess Job](#configure-the-analysis-tasks-for-the-ad_shadowaccess-job)
topic for additional information.

### Configure the Analysis Tasks for the AD_ShadowAccess Job

Customizable parameters enable Enterprise Auditor users to set the values used to classify user and
group objects during this job’s analysis. The parameters can be customized and are listed in a
section at the bottom of the SQL Script Editor. Follow the steps to customize an analysis task’s
parameters.

**Step 1 –** Navigate to the **Active Directory Permissions Analyzer** > **AD_ShadowAccess** >
**Configure** node and select **Analysis** to view analysis tasks.

![Configure Calculate Shadow Access task from Analysis Selection view](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/shadowaccessanalysisconfigure.webp)

**Step 2 –** In the Analysis Selection view, select the **Calculate Shadow Access** analysis task,
then click **Analysis Configuration**. The SQL Script Editor opens.

![SQL Script Editor](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/shadowaccesssqlscripteditor.webp)

**Step 3 –** In the parameters section at the bottom of the editor, find the Value column.
Double-click on the current value and change as desired.

- If the variable type is a table, select the cell and click **Edit Table** to modify the value.

**CAUTION:** Do not change any parameters where the Value states `Created during execution`.

**Step 4 –** Click **Save and Close** to finalize the customization and close the SQL Script Editor
window.

The customizable analysis task parameters are now configured and ready to run.

### Report Functions for the AD_ShadowAccess Job

The reports generated by the AD_ShadowAccess Job presents users with an overview of vulnerabilities
and attack paths within the targeted environments.

![Shadow Access reports in the job's Results node](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/shadowaccessreports.webp)

Navigate to the **Active Directory Permissions Analyzer** > **AD_ShadowAccess** > **Results** node
to view the AD_ShadowAccess job reports.

**NOTE:** These reports can also be accessed through the Web Console. See the
[Viewing Generated Reports](/docs/accessanalyzer/11.6/accessanalyzer/admin/report/view.md)
topic for additional information.

![Exploited Permissions and Vulnerabilities on Shadow Access reports](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/shadowaccessreport1.webp)

The Domain Shadow Access and Sensitive Data Shadow Access reports provide information on the
exploited permissions and vulnerabilities that can be used as attack paths for shadow access to
domain and sensitive data.

- Exploited Permissions – Displays summary information of the types of permissions that can be
  exploited by shadow attacks and the number of occurrences of those permissions
- Vulnerabilities – Displays summary information of the vulnerabilities that were detected and the
  number of occurrences of those vulnerabilities

![Report element displaying information on potential attack paths for users found in the targeted domain](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/shadowaccessreport2.webp)

The last report element displays information on potential attack paths for users found in the
targeted domain. Clicking on the green plus sign next to an attack path will open an Attack Path
window that displays a step-by-step process of how a user object, if compromised, can be used to
conduct a shadow attack.

![Attack Path window example](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/shadowaccessreport3.webp)

The Attack Path window displays how a user object can be used in a shadow attack.

- Example:

  - The `Everyone` principle has the rights to reset the password of `LSA`
  - `LSA` can modify group membership of `Domain Admins`
  - The Attack Path window reveals that every user in the domain is effectively a Domain Admin

![Attack Path window example](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/shadowaccessreport4.webp)

The number of objects and the direction of the arrows can change depending on the attack path and
related elements.

- Example:

  - The `testgroupuser10` user object is a Local Admin on the `TESTS` server
  - A user object that has a session on the `TESTS` server is a member of the `Domain Admins`
    group
  - If the `testgroupuser10` user object becomes compromised, an attacker can scrape the password
    hash on a user object’s local session on `TESTS` that also is a member of `Domain Admins` and
    become a Domain Admin itself

# AD_ComputerRights Job

The AD_ComputerRights Job provides data collection to identify permissions applied to computers in
Active Directory.

## Query for the AD_ComputerRights Job

The AD_ComputerRights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_ComputerRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/computerrightsquery.webp)

- Computer Access Permissions – Returns computer access permission

  - See the
    [ADPermissions Data Collector](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
    topic for additional information

## Analysis Tasks for the AD_ComputerRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** >
**AD_ComputerRights** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Task for the AD_ComputerRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/computerrightsanalysis.webp)

- Computer Rights View – Creates the SA_AD_ComputerRights_Details_PermissionsView visible under the
  job’s Results node
- AIC computer permissions import – Creates an interim processing table in the database for use by
  downstream analysis and report generation

# AD_ContainerRights Job

The AD_ContainerRights Job provides data collection to identify permissions applied to Containers in
Active Directory.

## Query for the AD_ContainerRights Job

The AD_ContainerRights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_ContainerRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/containerrightsquery.webp)

- Container Access Permissions – Returns containers under the given scope

  - See the
    [ADPermissions Data Collector](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
    topic for additional information

## Analysis Tasks for the AD_ContainerRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** >
**AD_ContainerRights** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_ContainerRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/containerrightsanalysis.webp)

The default analysis tasks are:

- Container Rights View – Creates the SA_AD_ContainerRights_Details_PermissionsView visible under
  the job’s Results node
- AIC container permissions import – Creates an interim processing table in the database for use by
  downstream analysis and report generation

# AD_DomainRights Job

The AD_DomainRights Job provides data collection to identify permissions applied to Domains in
Active Directory.

## Query for the AD_DomainRights Job

The AD_DomainRights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_DomainRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/domainrightsquery.webp)

- Domain Access Permissions – Returns domain access permissions

  - See the
    [ADPermissions Data Collector](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
    topic for additional information

## Analysis Tasks for the AD_DomainRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD_DomainRights** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_DomainRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/domainrightsanalysis.webp)

The default analysis tasks are:

- Domain Rights View – Creates the SA_AD_DomainRights_Details_PermissionsView visible under the
  job’s Results node
- AIC domain permissions import – Creates an interim processing table in the database for use by
  downstream analysis and report generation

# AD_GroupRights Job

The AD_GroupRights Job provides data collection to identify permissions applied to groups in Active
Directory.

## Query for the AD_GroupRights Job

The AD_GroupRights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_GroupRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/grouprightsquery.webp)

- Group Access Permissions – Returns group access permissions

  - See the
    [ADPermissions Data Collector](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
    topic for additional information

## Analysis Tasks for the AD_GroupRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD_GroupRights** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_GroupRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/grouprightsanalysis.webp)

The default analysis tasks are:

- Group Rights View – Creates the SA_AD_GroupRights_Details_PermissionsView visible under the job’s
  Results node
- AIC group permissions import – Creates an interim processing table in the database for use by
  downstream analysis and report generation

# AD_OURights Job

The AD_OURights Job provides data collection to identify permissions applied to organizational units
in Active Directory.

## Query for the AD_OURights Job

The AD_OURights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_OURights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/ourightsquery.webp)

- OU Access Permissions – Returns organizational unit permissions

  - See the
    [ADPermissions Data Collector](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
    topic for additional information

## Analysis Tasks for the AD_OURights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD_OURights** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_OURights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/ourightsanalysis.webp)

The default analysis tasks are:

- OU Rights View – Creates the SA_AD_OURights_Details_PermissionsView visible under the job’s
  Results node
- AIC OU permissions import – Creates an interim processing table in the database for use by
  downstream analysis and report generation

# AD_SiteRights Job

The AD_SiteRights Job provides data collection to identify permissions applied to sites in Active
Directory.

## Query for the AD_SiteRights Job

The AD_SiteRights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_SiteRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/siterightsquery.webp)

- Site Access Permissions – Returns site permissions

  - See the
    [ADPermissions Data Collector](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
    topic for additional information

## Analysis Tasks for the AD_SiteRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD_SiteRights** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_SiteRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/userrightsanalysis.webp)

The default analysis tasks are:

- Site Rights View – Creates the SA_AD_SiteRights_Details_PermissionsView visible under the job’s
  Results node
- AIC Site Permissions Import – Creates an interim processing table in the database for use by
  downstream analysis and report generation

# AD_UserRights Job

The AD_UserRights Job provides data collection to identify permissions applied to users in Active
Directory.

## Query for the AD_UserRights Job

The AD_UserRights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_UserRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/userrightsquery.webp)

- User Access Permissions – Returns user permissions

  - See the
    [ADPermissions Data Collector](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
    topic for additional information

## Analysis Tasks for the AD_UserRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD_UserRights** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_UserRights Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/collection/userrightsanalysis.webp)

The default analysis tasks are:

- User Rights View – Creates the SA_AD_UserRights_Details_PermissionsView visible under the job’s
  Results node
- AIC user permissions import – Creates an interim processing table in the database for use by
  downstream analysis and report generation

# 0.Collection Job Group

The 0.Collection Job Group collects data on permissions applied to computers, groups, organizational
units, and users. It is dependent on data collected by the .Active Directory Inventory Job Group.
The jobs which comprise the 0.Collection Job Group process analysis tasks.

![0.Collection Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the 0.Collection Job Group are:

- [AD_ComputerRights Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Collects all Active Directory permissions applied to computer objects within the targeted
  domains
- [AD_ContainerRights Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Collects all Active Directory permissions applied to container objects within the targeted
  domains
- [AD_DomainRights Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Collects all Active Directory permissions applied to domain objects within the targeted domains
- [AD_GroupRights Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Collects all Active Directory permissions applied to group objects within the targeted domains
- [AD_OURights Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Collects all Active Directory permissions applied to group objects within the targeted domains
- [AD_SiteRights Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Collects all Active Directory permissions applied to site objects within the targeted domains
- [AD_UserRights Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Collects all Active Directory permissions applied to user objects within the targeted domains

# AD_ComputerPermissions Job

The AD_ComputerPermissions Job reports on all Active Directory permissions applied to computer
objects within the targeted domains.

## Analysis Tasks for the AD_ComputerPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **4.Computers** >
**AD_ComputerPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_ComputerPermissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/computers/computerpermissionsanalysis.webp)

The default analysis tasks are:

- List computer object permissions – Creates the SA_AD_ComputerPermissions_Details table accessible
  under the job’s Results node
- Summarize computer object permissions – Creates an interim processing table in the database for
  use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_ComputerPermissions Job
produces the following pre-configured report.

| Report               | Description                                                                                                                                                              | Default Tags | Report Elements                                                                                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Computer Permissions | This report highlights instances where permissions are applied to Active Directory computer objects. This information is summarized at the domain and enterprise levels. | None         | This report is comprised of three elements: - Bar Chart – Displays computer permissions by domain - Pie Chart – Displays computer permissions by type - Table – Provides details on computer permissions |

# AD_LAPSPermissions Job

The AD_LAPSPermissions Job identifies Active Directory objects that have access to LAPS attributes
and access to computer objects that may lead to unintended access to LAPS attributes.

## Analysis Tasks for the AD_LAPSPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **4.Computers** >
**AD_LAPSPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_LAPSPermissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/computers/lapspermissionsanalysis.webp)

The default analysis tasks are:

- LAPS Permissions – Identifies potential indirect LAPS permissions. Creates the
  SA_AD_LAPSPermissions_Results table accessible under the job’s Results node.
- LAPS Attribute Permissions – Identifies permissions on the LAPS attributes in Active Directory for
  each computer. Creates the SA_AD_LAPSPermissions_Attributes table accessible under the job’s
  Results node.

In addition to the tables and views created by the analysis tasks, the AD_LAPSPermissions Job
produces the following pre-configured reports.

| Report           | Description                                                                                                                                           | Default Tags | Report Elements                                                                                                                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LAPS Attributes  | Identify Active Directory objects that have access to LAPS attributes on Computers within your organization.                                          | None         | This report is comprised of three elements: - Pie Chart – Displays top attribute permissions by trustee - Table – Provides details on attribute permissions by trustee - Table – Provides details on attributes |
| LAPS Permissions | Identify Active Directory objects that have access to computers objects within your organization that may lead to indirect access to LAPS attributes. | None         | This report is comprised of three elements: - Bar Chart – Displays LAPS permissions by domain - Pie Chart – Displays LAPS permissions by type - Table – Provides details on LAPS permissions                    |

# 4.Computers Job Group

The 4.Computers Job Group reports on all Active Directory permissions applied to computer objects
within the targeted domains.

![4.Computers Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the 4.Computers Job Group are:

- [AD_ComputerPermissions Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all Active Directory permissions applied to computer objects within the targeted
  domains
- [AD_LAPSPermissions Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Identifies Active Directory objects that have access to LAPS attributes and access to computer
  objects that may lead to unintended access to LAPS attributes

# AD_AdminSDHolder Job

The AD_AdminSDHolder Job is comprised of analysis tasks and reports which use the data collected by
the 0.Collection Job Group to provide information on permissions applied to the AdminSDHolder
Container in Active Directory.

## Queries for the AD_AdminSDHolder Job

The AD_AdminSDHolder Job uses the PowerShell Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Queries for the AD_AdminSDHolder Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/containers/adminsdholderquery.webp)

- Default AdminSDHolder Perms – Creates a table of default AdminSDHolder permissions

  - See the
    [PowerShell Data Collector](/docs/accessanalyzer/11.6/data-collection/custom-collectors/powershell.md)
    topic for additional information

## Analysis Tasks for the AD_AdminSDHolder Job

Navigate to the **Active Directory Permissions Analyzer** > **7.Containers** >
**AD_AdminSDHolder** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_AdminSDHolder Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/containers/adminsdholderanalysis.webp)

The default analysis tasks are:

- Determine AdminSDHolder permissions – Creates the SA_AD_AdminSDHolder_Details table accessible
  under the job’s Results node
- Summarize AdminSDHolder permissions – Creates the SA_AD_AdminSDHolder_DomainSummary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_AdminSDHolder Job produces
the following pre-configured report.

| Report                    | Description                                                                                                                                                                                                                                                                                                                                                                                          | Default Tags | Report Elements                                                                                                                                                                                                                                           |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AdminSDHolder Permissions | This report highlights suspicious (non-default) permissions applied to the AdminSDHolder container across all audited domains, and enumerates all AdminSDHolder permissions. For more information on vulnerabilities involving AdminSDHolder access, see the Microsoft [AdminSDHolder, Protected Groups and SDPROP](https://technet.microsoft.com/en-us/library/2009.09.sdadminholder.aspx) article. | None         | This report is comprised of three elements: - Bar Chart – Displays suspicious AdminSDHolder permissions by domain - Table – Provides details on AdminSDHolder permissions - Table – Provides details on top users by suspicious AdminSDHolder permissions |

# AD_ContainerPermissions Job

The AD_ContainerPermissions Job is responsible for reporting on all Active Directory permissions
applied to container objects within the targeted domains.

## Analysis Tasks for the AD_ContainerPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **7.Containers** >
**AD_ContainerPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_ContainerPermissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/containers/containerpermissionsanalysis.webp)

The default analysis tasks are:

- List container object permissions – Creates the SA_AD_ContainerPermissions_Details table
  accessible under the job’s Results node
- Summarize container object permissions – Creates the SA_AD_ContainerPermissions_DomainSummary
  table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_ContainerPermissions Job
produces the following pre-configured report.

| Report                | Description                                                                                                                                                               | Default Tags | Report Elements                                                                                                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Container Permissions | This report highlights instances where permissions are applied to Active Directory container objects. This information is summarized at the domain and enterprise levels. | None         | This report is comprised of three elements: - Bar Chart – Displays container permissions by domain - Pie Chart – Provides details on enterprise container permissions by type - Table – Provides details on container permissions |

# 7.Containers Job Group

The 7.Containers Job Group reports on all Active Directory permissions applied to container objects
within the targeted domains.

![7.Containers Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the 7.Containers Job Group are:

- [AD_AdminSDHolder Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all non-default Active Directory permissions applied to the AdminSDHolder container
  within the targeted domains. The AdminSDHolder container can be leveraged by an attacker to create
  persistence within the environment. See the Microsoft
  [AdminSDHolder, Protected Groups and SDPROP](https://technet.microsoft.com/en-us/library/2009.09.sdadminholder.aspx)
  article for additional information.
- [AD_ContainerPermissions Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all Active Directory permissions applied to container objects within the targeted
  domains

# AD_DomainPermissions Job

The AD_DomainPermissions Job reports on all Active Directory permissions applied to domain objects
within the targeted domains.

#### Analysis Tasks for the AD_DomainPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **8.Domains** >
**AD_DomainPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_DomainPermissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/domains/domainpermissionsanalysis.webp)

The default analysis tasks are:

- List domain object permissions – Creates the SA_AD_DomainPermissions_Details table accessible
  under the job’s Results node
- Summarize domain permissions – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_DomainPermissions Job
produces the following pre-configured report.

| Report             | Description                                                                                                                                                            | Default Tags | Report Elements                                                                                                                                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain Permissions | This report highlights instances where permissions are applied to Active Directory domain objects. This information is summarized at the domain and enterprise levels. | None         | This report is comprised of three elements: - Bar Chart – Displays permissions by domain - Pie Chart – Provides details on enterprise domain permissions by type - Table – Provides details on domain permissions |

# AD_DomainReplication Job

The AD_DomainReplication Job highlights all Active Directory permissions applied to domain objects
within the targeted domains.

## Analysis Tasks for the AD_DomainReplication Job

Navigate to the **Active Directory Permissions Analyzer** > **8.Domains** >
**AD_DomainReplication** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_DomainReplication Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/domains/domainreplicationanalysis.webp)

The default analysis tasks are:

- List domain replication permissions – Creates the SA_AD_DomainReplication_Details table accessible
  under the job’s Results node
- Summarize replication permission details – Creates an interim processing table in the database for
  use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_DomainReplication Job
produces the following pre-configured report.

| Report                         | Description                                                                                          | Default Tags | Report Elements                                                                                                                                                                                                                      |
| ------------------------------ | ---------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Domain Replication Permissions | This report highlights domain replication permissions applied to domain objects in active directory. | None         | This report is comprised of three elements: - Bar Chart – Displays replication permission summary by domain - Table – Provides details on replication permissions - Table – Provides details on top users by replication permissions |

# 8.Domains Job Group

The 8.Domains Job Group reports on all Active Directory permissions applied to domain objects within
the targeted domains.

![8.Domains Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the 8.Domains Job Group are:

- [AD_DomainPermissions Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all Active Directory permissions applied to domain objects within the targeted
  domains
- [AD_DomainReplication Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Highlights all Active Directory permissions applied to domain objects within the targeted
  domains

# AD_GroupMembershipPermissions Job

The AD_GroupMembershipPermissions Job highlights all Active Directory users that are capable of
modifying group membership within the targeted domains.

## Analysis Tasks for the AD_GroupMembershipPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **2.Groups** >
**AD_GroupMembershipPermissions** > **Configure** node and select **Analysis** to view the analysis
tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_GroupMembershipPermissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/groups/groupmembershippermissionsanalysis.webp)

The default analysis tasks are:

- List group object permissions – Creates the SA_AD_GroupMembershipPermissions_Details table
  accessible under the job’s Results node
- Summarize group object permissions – Creates an interim processing table in the database for use
  by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_GroupMembershipPermissions
Job produces the following pre-configured report.

| Report           | Description                                                                                                                                                                                                                                                                                                                          | Default Tags | Report Elements                                                                                                                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Membership | This report highlights instances where trustees can change the membership of Active Directory group objects, either by writing the member attribute or via the "Add/Remove self as member" permission. By default, this report excludes members of administrator groups such as Domain Admins, Schema Admins, and Enterprise Admins. | None         | This report is comprised of three elements: - Bar Chart – Displays affected groups by domain - Table – Provides details on membership change permissions - Table – Provides details on top users with group membership change permissions |

# AD_GroupPermissions Job

The AD_Permissions Job reports on all Active Directory permissions applied to group objects within
the targeted domains.

## Analysis Tasks for the AD_GroupPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **2.Groups** > **AD_GroupPermissions** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_GroupPermissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/groups/grouppermissionsanalysis.webp)

The default analysis tasks are:

- List group object permissions – Creates the SA_AD_GroupPermissions_Details table accessible under
  the job’s Results node
- Summarize group object permissions – Creates an interim processing table in the database for use
  by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_GroupPermissions Job
produces the following pre-configured report.

| Report            | Description                                                                                                                                                           | Default Tags | Report Elements                                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Permissions | This report highlights instances where permissions are applied to Active Directory group objects. This information is summarized at the domain and enterprise levels. | None         | This report is comprised of three elements: - Bar Chart – Displays group permissions by domain - Pie Chart – Displays group permissions by type - Table – Provides details on group permissions |

# 2.Groups Job Group

The 2.Groups Job Group reports on all Active Directory permissions applied to group objects within
the targeted domains.

![2.Groups Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the 2.Groups Job Group are:

- [AD_GroupMembershipPermissions Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Highlights all Active Directory users that are capable of modifying group membership within the
  targeted domains
- [AD_GroupPermissions Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all Active Directory permissions applied to group objects within the targeted domains

# Active Directory Permissions Analyzer Solution

The Enterprise Auditor Active Directory Permissions Analyzer Solution enables organizations to
easily and automatically determine effective permissions applied to any and all Active Directory
(AD) objects. AD, Security, and Network Administrators can easily browse and compare information
from individual or multiple domains using comprehensive, preconfigured analyses and reports focused
on permissions associated with AD domains, organizational units, groups, users, and computers. These
capabilities enable them to obtain the most authoritative view of who has access to what in AD.

The Active Directory Permissions Analyzer Solution is located within the **Jobs** > **Active
Directory Permissions Analyzer** Job Group, which identifies permissions applied to computers,
groups, organizational units, and users.

Supported Platforms

- Windows Server 2016 and later
- Windows 2003 Forest level or higher

**NOTE:** See the Microsoft
[Windows Server end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/deployoffice/endofsupport/windows-server-support)
article for additional information.

Requirements, Permissions, and Ports

See the
[Domain Target Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for additional information.

Location

The Active Directory Permissions Analyzer requires a special Enterprise Auditor license. It can be
installed from the Instant Job Wizard, see the
[Instant Job Wizard](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/instant-jobs.md)
topic for additional information. When purchased separately, the Permissions Analyzer Solution is
installed into the Jobs tree with the Active Directory instant solution. The license limits the
solution to just the **Jobs** > **Active Directory Permissions Analyzer** Job Group. Once installed
into the Jobs tree, navigate to the solution: **Jobs** > **Active Directory Permissions Analyzer**.
The 0.Collection Job Group collects the data. The other job groups run analysis on the collected
data and generate reports.

## Job Groups

The Active Directory Permissions Analyzer Solution is designed to provide visibility into Active
Directory permissions applied on all objects. Key information includes who can reset user passwords,
who can modify group membership, and who can replicate domain information.

The jobs which comprise the Active Directory Permissions Analyzer Job Group use the ADPermissions
Data Collector and the PowerShell Data Collector to return advanced security permissions and process
analysis tasks and generate reports. The collected data is then available to the Netwrix Access
Information Center for analysis.

![Active Directory Permissions Analyzer Solution Overview page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/runninginstances/overview.webp)

The job groups and jobs in the Active Directory Permissions Analyzer Solution are:

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Collects all Active Directory permissions information from the targeted domain
- [1.Users Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all Active Directory permissions applied to user objects within the targeted domains
- [2.Groups Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all Active Directory permissions applied to group objects within the targeted domains
- [3.OUs > AD_OUPermissions Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all Active Directory permissions applied to organizational unit objects within the
  targeted domains
- [4.Computers Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all Active Directory permissions applied to computer objects within the targeted
  domains
- [5.Open Access > AD_OpenAccess Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all Active Directory permissions granting open access within the targeted domains.
  Open Access can be defined as access granted to security principals such as: Domain Users,
  Authenticated Users, and Everyone.
- [6.Broken Inheritance > AD_BrokenInheritance Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all locations within Active Directory where inheritance is broken within the targeted
  domains
- [7.Containers Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all Active Directory permissions applied to container objects within the targeted
  domains
- [8.Domains Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all Active Directory permissions applied to domain objects within the targeted
  domains.
- [9.Sites Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all Active Directory permissions applied to domain objects within the targeted
  domains
- [AD_ShadowAccess Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Finds shadow access that leads to compromise of a domain or sensitive data. Attackers can chain
  vulnerabilities to escalate privileges from a non-privileged user to administrator with only a few
  steps. This job generates the shortest path between every non-privileged user to a domain
  administrative group, total domain compromise, or access to sensitive data.

# Recommended Configurations for AD Permissions Analyzer Solution

Dependencies

The following Enterprise Auditor job groups need to be successfully run:

- .Active Directory Inventory Job Group

The following jobs need to be run prior to running the
[AD_ShadowAccess Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md):

- .Active Directory Inventory >1-AD_Scan > ADInventory
- Active Directory > 1.Groups > AD_SensitiveSecurityGroups
- Active Directory Permissions Analyzer > 7.Containers > AD_AdminSDHolder
- Active Directory Permissions Analyzer > 8.Domains > AD_DomainReplication
- Active Directory Permissions Analyzer > 1.Users > AD_ResetPasswordPermissions
- Active Directory Permissions Analyzer > 2.Groups > AD_GroupMembershipPermissions

The following jobs can be optionally run to enhance reporting in the
[AD_ShadowAccess Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md):

- Active Directory > 2.Users > AD_WeakPasswords
- FileSystem > 7.Sensitive Data > FS_DLPResults > FS_DLPResults
- Databases > 0.Collection >SQL > 2-SQL_SensitiveDataScan > SQLServer_SDD
- Windows > Privileged Accounts > Local Administrators > SG_Sessions
- Windows > Privileged Accounts > Local Administrators > SG_LocalAdmins

Targeted Hosts

The **Active Directory Permissions Analyzer** > **0. Collection** Job Group has been set to run
against the following default host list:

- One Domain Controller Per Domain

Connection Profile

Assign a Connection Profile at the **Active Directory Permissions Analyzer** > **0. Collection** >
**Settings** > **Connection** node with local Administrator privileges on the target host, or Domain
Administrator privileges if the target host is a domain controller.

See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information.

Schedule Frequency

This job group can be scheduled to run as desired.

Workflow

**Step 1 –** Prerequisite: Successful execution of the .Active Directory Inventory Job Group.

**Step 2 –** Schedule the Active Directory Permissions Analyzer Job Group to run as desired.

- Run sub-job groups individually if desired, but run the 0.Collection Job Group first

**Step 3 –** Review the reports generated by the Active Directory Permissions Analyzer Job Group.

# AD_DCShadowPermissions Job

The AD_DCShadowPermissions Job highlights all Active Directory users that are capable of potentially
performing a DCShadow attack within the targeted domains.

## Analysis Tasks for the AD_DCShadowPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **9.Sites** >
**AD_DCShadowPermissions** > **Configure** node and select **Analysis** to view analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_DCShadowPermissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/sites/dcshadowpermissionsanalysis.webp)

The default analysis tasks are:

- DCShadow Permissions – Creates the SA_AD_DCShadowPermissions_Details table accessible under the
  job’s Results node
- DCShadow Summary – Creates the SA_AD_DCShadowPermission_Summary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_DCShadowPermisssions Job
produces the following pre-configured report.

| Report               | Description                                                                                                                                                                                                                                                               | Default Tags | Report Elements                                                                                                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DCShadow Permissions | This report highlights permissions applied to Site objects and Computer objects in Active Directory required to execute the DCShadow attack. By default this report excludes members of administrator groups such as Domain Admins, Schema Admins, and Enterprise Admins. | None         | This report is comprised of three elements: - Bar Chart – Displays top users by computer count - Table – Provides details on top users by computer count - Table – Provides details on DCShadow permission details |

# AD_SitePermissions Job

The AD_SitePermissions Job reports on all Active Directory permissions applied to site objects
within the targeted domains.

## Analysis Tasks for the AD_SitePermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **9.Sites** > **AD_SitePermissions** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_SitePermissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/sites/sitepermissionsanalysis.webp)

The default analysis tasks are:

- Site Permissions – Creates the SA_AD_SitePermissions_Details table accessible under the job’s
  Results node
- Summarize Site Permissions – Creates the SA_AD_SitePermissions_DomainSummary table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_SitePermissions Job
produces the following pre-configured report.

| Report           | Description                                                                                      | Default Tags | Report Elements                                                                                                                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Site Permissions | This report highlights instances where permissions are applied to Active Directory Site objects. | None         | This report is comprised of three elements: - Bar Chart – Displays permissions by site - Pie chart – Provides details on enterprise site permissions by type - Table – Provides details on site permissions |

# 9.Sites Job Group

The 9.Sites Job Group reports on all Active Directory permissions applied to site objects within the
targeted domains.

![9.Sites Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the 9.Sites Job Group are:

- [AD_DCShadowPermissions Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Highlights all Active Directory users that are capable of potentially performing a DCShadow
  attack within the targeted domains
- [AD_SitePermissions Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all Active Directory permissions applied to site objects within the targeted domains

# AD_ResetPasswordPermissions Job

The AD_ResetPasswordPermissions Job highlights all Active Directory users that are capable of
resetting another user's password within the targeted domains. It uses the data collected by the
0.Collection Job Group to provide information on permissions applied to user objects in Active
Directory.

## Analysis Tasks for the AD_ResetPasswordPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **1.Users** >
**AD_ResetPasswordPermissions** > **Configure** node and select **Analysis** to view the analysis
tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_ResetPasswordPermissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/users/resetpasswordpermissionsanalysis.webp)

The default analysis tasks are:

- List user password reset permissions – Creates the SA_AD_ResetPasswordPermissions_Details table
  accessible under the job’s Results node
- Summarize password reset permissions – Creates an interim processing table in the database for use
  by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_ResetPasswordPermissions
Job produces the following pre-configured report.

| Report         | Description                                                                                                                                                                                                                                                                                                         | Default Tags | Report Elements                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reset Password | This report highlights instances where "Reset Password" permissions are applied to Active Directory user objects. This information is summarized at the domain and enterprise levels. By default, this report excludes members of administrator groups such as Domain Admins, Schema Admins, and Enterprise Admins. | None         | This report is comprised of three elements: - Bar Chart – Displays affected accounts by domain - Table – Provides details on reset password permissions - Table – Provides details on top users with reset password permissions |

# AD_UserPermissions Job

The AD_UserPermissions Job is comprised of analysis tasks and reports which use the data collected
by the 0.Collection Job Group to provide information on permissions applied to user objects in
Active Directory.

## Analysis Tasks for the AD_UserPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **1.Users** > **AD_UserPermissions** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_UserPermissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectorypermissionsanalyzer/users/userpermissionsanalysis.webp)

The default analysis tasks are:

- List user object permissions – Creates the SA_AD_UserPermissions_Details table accessible under
  the job’s Results node
- Summarize user object permissions – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_UserPermissions Job
produces the following pre-configured report.

| Report           | Description                                                                                                                                                          | Default Tags | Report Elements                                                                                                                                                                                      |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User permissions | This report highlights instances where permissions are applied to Active Directory user objects. This information is summarized at the domain and enterprise levels. | None         | This report is comprised of three elements: - Bar Chart – Displays user permissions by domain - Pie Chart – Provides details on user permission types - Table – Provides details on user permissions |

# 1.Users Job Group

The 1.Users Job Group reports on all Active Directory permissions applied to user objects within the
targeted domains

![1.Users Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following jobs comprise the 1.Users Job Group:

- [AD_ResetPasswordPermissions Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Highlights all Active Directory users that are capable of resetting another user’s password
  within the targeted domains
- [AD_UserPermissions Job](/docs/accessanalyzer/11.6/solutions/active-directory/permissions-analysis.md)
  – Reports on all Active Directory permissions applied to user objects within the targeted domains

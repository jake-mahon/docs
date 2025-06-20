# AD_ComputerDelegation Job

The AD_ComputerDelegation Job provides details on computer accounts that have been enabled for
unconstrained delegation. Once this configuration is enabled for a computer, any time an account
connects to the computer for any reason, their ticket-granting ticket (TGT) is stored in memory so
it can be used later by the computer for impersonation, which exposes a significant security risk in
cases where privileged accounts access the computer.  See the
[What Is Kerberos Delegation?](https://blog.netwrix.com/2021/11/30/what-is-kerberos-delegation-an-overview-of-kerberos-delegation/) Netwrix
blog article for more information about this configuration and the related security risks.

## Analysis Task for the AD_ComputerDelegation Job

Navigate to the **Active Directory** > **3.Computers** > **AD_ComputerDelegation** > Configure node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the analysis task. The analysis task is preconfigured for
this job.

![Analysis Task for the AD_ComputerDelegation Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/computers/computerdelegationanalysis.webp)

The default analysis tasks are:

- Determine computers trusted for delegation – Creates the SA_AD_ComputerDelegation_Details table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the AD_ComputerDelegation Job
produces the following pre-configured report:

| Report                           | Description                                                                                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Computers Trusted for Delegation | This report highlights which computers are trusted for delegation, which accounts are sensitive, and whether the delegation is constrained or unconstrained. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays computers trusted for delegation by domain - Table – Provides details on computers trusted for delegation - Table – Provides details on computers trusted for delegation by domain |

# AD_StaleComputers Job

The AD_StaleComputers Job provides details on stale computers that may be candidates for cleanup.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The AD_StaleComputers Job has the following configurable parameters:

- Days since Last Logon
- Consider disabled accounts as stale

See the
[Customizable Analysis Parameters for the AD_StaleComputers Job](#customizable-analysis-parameters-for-the-ad_stalecomputers-job)
topic for additional information.

## Analysis Tasks for the AD_StaleComputers Job

Navigate to the **Active Directory** > **3.Computers** > **AD_StaleComputers** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the **2. Summarize by Domain** analysis task. This analysis
task is preconfigured for this job.

![Analysis Tasks for the AD_StaleComputers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/computers/stalecomputersanalysis.webp)

The default analysis tasks are:

- 1. Identify Stale Computers

  - Identifies computer objects that are disabled or have exceeded the defined threshold of
    inactivity
  - Creates the SA_AD_StaleComputers_Details table accessible under the job’s Results node
  - Definition of a stale computer can be customized

- 2. Summarize by Domain – Creates the SA_AD_StaleComputers_DomainSummay table accessible under
     the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_StaleComputers Job
produces the following pre-configured report:

| Report          | Description                                                                                                                                                                                                                                                     | Default Tags | Report Elements                                                                                                                                                                            |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Stale Computers | This report presents potentially stale computers. Computers are considered stale if they have never logged onto the domain, have not logged onto the domain in the past 90 days, or are disabled. **NOTE:** The definition of a stale computer is customizable. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays stale computers by domain - Table – Provides details on computers - Table – Provides summary of stale computers |

### Customizable Analysis Parameters for the AD_StaleComputers Job

Analysis parameters that can be customized have the following default values:

| Analysis Task               | Customizable Parameter Name | Default Value | Value Indicates                                                                                                                                         |
| --------------------------- | --------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Identify Stale Computers | @days_since_last_logon      | 90            | A computer object that has been inactive for 90 days or more                                                                                            |
| 1. Identify Stale Computers | @consider_disable           | 1             | A computer object that has been disabled: - Value 1 = Disabled computers are included as stale - Value 0 = Disabled computers are not included as stale |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for additional information.

# 3.Computers Job Group

The 3.Computers Job Group help to pinpoint potential areas of administrative concern related to
computer accounts, including stale computers and computers that have been trusted for delegation.

![3.Computers Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following jobs comprise the 3.Computers Job Group:

- [AD_ComputerDelegation Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Provides details on computer accounts that have been trusted for delegation. Once this
  configuration is enabled for a computer, any time an account connects to the computer for any
  reason, their ticket-granting ticket (TGT) is stored in memory so it can be used later by the
  computer for impersonation, which exposes a significant security risk in cases where privileged
  accounts access the computer.  See the
  [What Is Kerberos Delegation?](https://blog.netwrix.com/2021/11/30/what-is-kerberos-delegation-an-overview-of-kerberos-delegation/) Netwrix
  blog article for more information about this configuration and the related security risks.
- [AD_StaleComputers Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Provides details on stale computers that may be candidates for cleanup

# AD_DCSummary Job

The AD_DCSummary Job provides operational reporting related to the details collected for each domain
controller. For each domain controller, the report identifies the FSMO role, whether it is a
bridgehead server, whether it is a global catalog, and the time server it syncs to.

## Analysis Task for the AD_DCSummary Job

Navigate to the **Active Directory > 5.Domains > AD_DCSummary > Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/domains/dcsummaryanalysis.webp)

The default analysis tasks are:

- 1. List DCs
  - Creates the AD_DCSummary_List table accessible under the job’s Results node
  - Creates an interim processing table in the database for use by downstream analysis and report
    generation

In addition to the tables and views created by the analysis task, the AD_DCSummary Job produces the
following pre-configured report:

| Report                      | Description                                                                         | Default Tags | Report Elements                                                                                                                                          |
| --------------------------- | ----------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain Controllers Overview | This report identifies domain controllers' roles and attributes within each domain. | None         | This report is comprised of two elements: - Bar Chart – Displays domain controllers by domain - Table – Provides details on domain controllers by domain |

# AD_DomainInfo Job

The AD_DomainInfo Job provides operational reporting related to the collected domains, sites, and
trusts, providing details such as high level object counts by domain or site, domain and forest
functional levels, and types and directions of trusts.

## Queries for the AD_DomainInfo Job

The AD_DomainInfo Job uses the ActiveDirectory Data Collector and the LDAP Data Collector for the
following queries:

**CAUTION:** Do not modify the queries. The queries are preconfigured for this job.

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/domains/domaininfoquery.webp)

The queries for this job are:

- Trusts – Targets one domain controller per forest to retrieve domain trust information
- Sites – Targets one domain controller per forest to retrieve domain site information
- Domains – Targets one domain controller per forest to retrieve domain information
- Trust Filtering – Queries the host specified to retrieve domain trust information
- dSHeuristics – Returns dSHeuristics Unicode string using LDAP

**NOTE:** See the Active Directory Data Collector and LDAP Data Collector sections for additional
information

## Analysis Tasks for the AD_DomainInfo Job

Navigate to the **Active Directory > 5.Domains > AD_DomainInfo > Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/domains/domaininfoanalysis.webp)

The default analysis tasks are:

- Domain Summary – Creates interim processing tables in the database for use by downstream analysis
  and report generation
- Site Summary – Creates an interim processing table in the database for use by downstream analysis
  and report generation
- Trust Details – Creates an interim processing table in the database for use by downstream analysis
  and report generation
- dSHeuristics Details – Creates an interim processing table in the database for use by downstream
  analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_DomainInfo Job produces
the following pre-configured reports:

| Report  | Description                                                                                                             | Default Tags | Report Elements                                                                                                                        |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Domains | This report lists the forest sites and presents the total number of domain controllers, GC Servers, and users per site. | None         | This report is comprised of two elements: - Stacked Bar Chart – Displays domains - Table – Provides details on domains                 |
| Sites   | This report lists the sites and counts the domain controllers, global catalogue servers, and users of each.             | None         | This report is comprised of two elements: - Bar Chart – Displays sites by user count - Table – Provides details on sites by user count |
| Trusts  | This report lists the domains and presents the trust information, including type, direction, and transitivity.          | None         | This report is comprised of one elements: - Table – Provides details on domains and trusts                                             |

# AD_DSRMSettings Job

The AD_DRSMSettings Job provides details on domain controller registry settings for the
DSRMAdminLogonBehavior key. If this key is set to 1 or 2, the DSRM Admin Account can be used to log
in to the domain controller even if it has not been started in DSRM which can present a potential
security vulnerability. Additional information on this registry key is available in this
[Microsoft Document](<https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732714(v=ws.10)?redirectedfrom=MSDN>).

## Analysis Tasks for the AD_DSRMSettings Job

Navigate to the **Active Directory > 5.Domains > AD_DSRMSettings > Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.

![dsrmsettingsanalysis](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/domains/dsrmsettingsanalysis.webp)

The default analysis tasks are:

- Change tracking – Creates the SA_AD_DSRMSettings_ChangeTracking table accessible under the job’s
  Results node
- Details – Creates the SA_AD_DSRMSettings_Details table accessible under the job’s Results node
- Summary – Creates the SA_AD_DSRMSettings_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_DSRMSettings Job produces
the following pre-configured report:

| Report              | Description                                                                                                                                                                                                                                                                                                                                                                                                                               | Default Tags | Report Elements                                                                                                                                          |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DSRM Admin Security | This report highlights domain controller registry settings for the DSRMAdminLogonBehavior key. If this key is set to 1 or 2, the DSRM Admin account can be used to log in to the domain controller even if it has not been started in DSRM. This is a potential vulnerability. See the Microsoft [Restartable AD DS Step-by-Step Guide](<https://technet.microsoft.com/en-us/library/cc732714(v=ws.10).aspx>) for additional information. | None         | This report is comprised of two elements: - Pie Chart – Displays DSRM admin logon  by domain controller - Table – Provides details on domain controllers |

# AD_DomainControllers Job

The 0.Collection > AD_DomainControllers Job collects domain controller details which will be further
analyzed in order to provide information on domains, sites, and trusts.

## Queries for the AD_DomainControllers Job

The AD_DomainControllers Job uses the LDAP Data Collector and the ActiveDirectory Data Collector for
the following queries:

**CAUTION:** Except the first query, do not modify the remaining queries. The remaining queries are
preconfigured for this job.

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/domains/collection/domaincontrollersquery.webp)

The queries for this job are:

- Domain Controller Listing – Targets one domain controller per domain known to Enterprise Auditor
  to collect a listing of all domain controllers
  - Can be modified to connect securely with TLS/SSL.
  - See the [Connect Securely with TLS/SSL](#connect-securely-with-tlsssl) topic for additional
    information.
- Actual Bridgehead Servers – Targets one domain controller per domain known to Enterprise Auditor
  to collect all of the bridgehead servers for each site
- Global Catalog Servers – Targets one domain controller per domain known to Enterprise Auditor to
  extract a list of GCs for each site
- Significant DCs – Targets one domain controller per domain known to Enterprise Auditor to gather
  information about the significant DCs
- Preferred Bridgehead Servers – Targets one domain controller per domain known to Enterprise
  Auditor to list the preferred bridgehead servers for each site

  **NOTE:** See the Active Directory Data Collector and LDAP Data Collector sections for
  additional information.

### Connect Securely with TLS/SSL

The Domain Controller Listing Query in the AD_DomainControllers Job is configured to use the LDAP
Data Collector. This query can be optionally configured to connect securely with TLS/SSL.

**CAUTION:** Do not modify any other settings in this query.

**Step 1 –** Navigate to the job’s > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select the _Domain Controller Listing_ Query and click
**Query Properties**. The Query Properties window displays.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The LDAP template form wizard
opens.

![LDAP template form](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/domains/collection/ldaptemplate.webp)

**Step 4 –** Click **Options**.

![Connection Options](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/domains/collection/ldaptemplateoptions.webp)

**Step 5 –** On the Options page, select **Connect Securely with TLS/SSL**. Optionally, select
**Ignore Certificate Errors** to connect even if certificate errors occur. Use **Server Port** 686
for a secure connection. Click **OK** to close the Options page.

**Step 6 –** Step 13 – Then click **OK** to close the LDAP template form wizard.

The job now connects securely with TLS/SSL.

# AD_DSRM Job

The **0.Collection > AD_DSRM** Job collects data related to domain controller registry settings for
the DSRMAdminLogonBehavior key. If this key is set to 1 or 2, the DSRM Admin Account can be used to
log in to the domain controller even if it has not been started in DSRM which can present a
potential security vulnerability. Additional information on this registry key is available in this
[Microsoft Document](<https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732714(v=ws.10)?redirectedfrom=MSDN>).

## Query for the AD_DSRM Job

The AD_TimeSync Job uses the Registry Data Collector for the following query:

**CAUTION:** Do not modify this query. The query is preconfigured for this job.

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/domains/collection/dsrmquery.webp)

The queries for this job are:

- Check LSA registry keys – Targets all domain controllers check LSA registry keys
  - See the
    [Registry Data Collector](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/registry.md)
    topic for additional information.

# AD_TimeSync Job

The 0.**Collection > AD_TimeSync** Job collects TimeSync information from the registry for each
domain controller within the domain.

## Query for the AD_TimeSync Job

The AD_TimeSync Job uses the Registry Data Collector for the following query:

**CAUTION:** Do not modify this query. The query is preconfigured for this job.

![Query Selection](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/domains/collection/timesyncquery.webp)

The queries for this job are:

- Timesync Info – Targets one domain controller per domain known to Enterprise Auditor to determine
  TimeSync information from the registry
  - See the
    [Registry Data Collector](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/registry.md)
    topic for additional information.

# 0.Collection Job Group

The **5.Domains > 0.Collection** Job Group collects the data which will be further analyzed in order
to provide details on domains, sites, and trusts.

![0.Collection Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/databases/collection/collectionjobstree.webp)

The 0.Collection Job Group is comprised of:

- [AD_DomainControllers Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Collects domain controller details which will be further analyzed in order to provide
  information on domains, sites, and trusts.
- [AD_DSRM Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Collects data related to domain controller registry settings for the DSRMAdminLogonBehavior key.
  If this key is set to 1 or 2, the DSRM Admin Account can be used to log in to the domain
  controller even if it has not been started in DSRM which can present a potential security
  vulnerability. Additional information on this registry key is available in this
  [Microsoft Document](<https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732714(v=ws.10)?redirectedfrom=MSDN>).
- [AD_TimeSync Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Collects TimeSync information from the registry for each domain controller within the domain

# 5.Domains Job Group

The 5.Domains Job Group provides details on domains, sites, and trusts, and highlight domain level
configurations that may leave your environment at risk.

![Domains Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following components comprises the 5.Domains Job Group:

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Collects the data which will be further analyzed in order to provide details on domains, sites,
  and trusts.
- [AD_DCSummary Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Provides operational reporting related to the details collected for each domain controller. For
  each domain controller, the report identifies the FSMO role, whether it is a bridgehead server,
  whether it is a global catalog, and the time server it syncs to.
- [AD_DomainInfo Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Provides operational reporting related to the collected domains, sites, and trusts, providing
  details such as high level object counts by domain or site, domain and forest functional levels,
  and types and directions of trusts
- [AD_DSRMSettings Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Provides details on domain controller registry settings for the DSRMAdminLogonBehavior key. If
  this key is set to 1 or 2, the DSRM Admin Account can be used to log in to the domain controller
  even if it has not been started in DSRM which can present a potential security vulnerability.
  Additional information on this registry key is available in this
  [Microsoft Document](<https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732714(v=ws.10)?redirectedfrom=MSDN>).

# AD_CPassword Job

The AD_CPassword Job identifies passwords that are stored in Group Policy Preferences which present
a security risk allowing attackers access to these passwords. Microsoft published the AES private
key, which can be used to decrypt passwords stored in Group Policy Preferences. See the Microsoft
[2.2.1.1.4 Password Encryption](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-gppref/2c15cbf0-f086-4c74-8b70-1f2fa45dd4be)
article for additional information. Since Authenticated Users have read access to SYSVOL, any
malicious insider or attacker can search for the cPassword file inside XML files shared through
SYSVOL to decrypt them. GPOs can be stored in the `%ProgramData%\Microsoft\Group Policy\History`
folder on each machine, meaning any results found by this job should be deleted off every computer
once this policy has been removed.

## Query for the AD_CPassword Job

The AD_CPassword Job uses the PowerShell Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job

![Query for the AD_CPassword Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/grouppolicy/cpasswordquery.webp)

The queries for this job are:

- Sysvol – Targets one domain controller per domain known to Enterprise Auditor to determine
  CPassword security

  - See the
    [PowerShell Data Collector](/docs/accessanalyzer/11.6/data-collection/custom-collectors/powershell.md)
    topic for additional information.

In addition to the tables created by the data collector, the AD_CPassword Job produces the following
pre-configured report:

| Report                        | Description                                                                                                                  | Default Tags | Report Elements                                                                                       |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------- |
| Potential Plaintext Passwords | This report highlights domain contollers where this vulnerability exists, and provides the path of the XML file in question. | None         | This report is comprised of one elements: - Table – Provides details on potential plaintext passwords |

# AD_GroupPolicy Job

The AD_GroupPolicy Job audits all Group Policies that are present on the Domain Controller, and
provides details on the containers they are linked to, and the settings that are configured.

## Queries for the AD_GroupPolicy Job

The AD_GroupPolicy Job uses the GroupPolicy Data Collector for the following query:

**CAUTION:** Do not modify the queries. The queries are preconfigured for this job.

![Queries for the AD_GroupPolicy Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/grouppolicy/grouppolicyquery.webp)

The queries for this job are:

- Link Status – Targets the default domain controller known to Enterprise Auditor to retrieve a
  GPO's list for the domain
- Settings – Targets the default domain controller known to Enterprise Auditor to return the state
  for domain policies for all GPOs. See the
  [GroupPolicy Data Collector](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/grouppolicy/overview.md)
  topic for additional information.

## Analysis Tasks for the AD_GroupPolicy Job

Navigate to the **Active Directory** > **4.GroupPolicy** > **AD_GroupPolicy** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_GroupPolicy Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/grouppolicy/grouppolicyanalysis.webp)

The default analysis tasks are:

- 1. Group Policy Analysis – Creates an interim processing table in the database for use by
     downstream analysis and report generation
- 2. Combined User and Computer Settings – Creates the SA_AD_GroupPolicy_SettingList table
     accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_GroupPolicy Job produces
the following pre-configured reports:

| Report       | Description                                              | Default Tags | Report Elements                                                                                                                                                                                                                 |
| ------------ | -------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GPO Details  | This report lists all Group Policies and their settings. | None         | This report is comprised of four elements: - Bar Chart – Displays GPO count by domain - Table – Provides details on policies by domain - Table – Provides details on GPO count by domain - Table – Provides details on settings |
| GPO Overview | This report lists all Group Policies and their settings. | None         | This report is comprised of three elements: - Bar Chart – Displays GPO configuration by domain - Table – Provides details on GPOs - Table – Provides details on GPO configuration by domain                                     |

# AD_OverlappingGPOs Job

The AD_OverlappingGPOs Job identifies conflicting and redundant GPO settings based on link location.
These GPO settings should be cleaned up or consolidated.

## Analysis Tasks for the AD_OverlappingGPOs Job

Navigate to the **Active Directory** > **4. Group Policy** > **AD_OverlappingGPOs** > **Configure**
node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected first analysis task. The first analysis task is
preconfigured for this job.

![Analysis Tasks for the AD_OverlappingGPOs Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/grouppolicy/overlappinggposanalysis.webp)

The default analysis tasks are:

- Conflicting – Creates the SA_AD_OverlappingGPOs_Conflicts table accessible under the job’s Results
  node

The following analysis tasks are deselected by default:

**NOTE:** Deselect the **Conflicting** analysis task before selecting the analysis tasks below.

- Redundant – Restores the SA_AD_OverlappingGPOs_Redundant table to be visible under the job’s
  Results node
- Redundant GPOs by OU – Restores the SA_AD_OverlappingGPOs_RedundantGPOsbyOU table to be visible
  under the job’s Results node
- Redundant GPOs – Restores the SA_AD_OverlappingGPOs_RedundantGPOs table to be visible under the
  job’s Results node
- Conflicts by OU – Restores the SA_AD_OverlappingGPOs_ConflictsByOU table to be visible under the
  job’s Results node
- Conflicts by GPO – Restores the SA_AD_OverlappingGPOs_ConflictsByGPO table to be visible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_OverlappingGPOs Job
produces the following pre-configured reports:

| Report           | Description                                                             | Default Tags | Report Elements                                                                                                                                                                                                                                               |
| ---------------- | ----------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conflicting GPOs | This report lists group policy objects that apply conflicting settings. | None         | This report is comprised of four elements: - Bar Chart – Displays GPOs by conflicts - Table – Provides details on GPOs by conflicts - Table – Provides details on GPOs Details - Table – Provides details on OUs with conflicting GPOs                        |
| Redundant GPOs   | This report lists group policy objects that apply redundant settings.   | None         | This report is comprised of four elements: - Bar Chart – Displays GPOs by redundant children - Table – Provides details on GPOs by redundant children - Table – Provides details on overlapping GPOs - Table – Provides details on OUs with most redundancies |

# AD_PasswordPolicies Job

The AD_PasswordPolicies Job identifies fine-grained domain password policies that are stored within
the Password Settings Container. Fine-Grained password policies allow AD administrators to apply
different password policies within a single domain.

## Query for the AD_PasswordPolicies Job

The AD_PasswordPolicies Job uses the LDAP Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_PasswordPolicies Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/grouppolicy/passwordpoliciesquery.webp)

The query for this job is:

- Fine-grained Policies – Targets one domain controller per domain known to Enterprise Auditor to
  return fine-grained password policies

  - See the
    [LDAP Data Collector](/docs/accessanalyzer/11.6/data-collection/custom-collectors/ldap.md)
    topic for additional information

## Analysis Task for the AD_PasswordPolicies Job

Navigate to the **Active Directory** > **4.GroupPolicy** > **AD_PasswordPolicies** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Task for the AD_PasswordPolicies Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/grouppolicy/passwordpoliciesanalysis.webp)

The default analysis tasks are:

- Determine fine-grained password policy details – Creates the SA_AD_PasswordPolicies_Details table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the AD_UserDelegation Job produces
the following pre-configured report:

| Report                         | Description                                                                               | Default Tags | Report Elements                                                                                             |
| ------------------------------ | ----------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------- |
| Fine-Grained Password Policies | This report highlights fine-grained password policies on all targeted domain controllers. | None         | This report is comprised of one element: - Table – Provides details on fine-grained password policy details |

# 4.Group Policy Job Group

The 4.Group Policy Job Group audits GPOs and their settings, and provides in depth analysis of
conditions such as where GPOs have been linked, misconfigurations that can cause security or
operational issues, and redundant GPOs that can be consolidated.

![4.Group Policy Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following components comprise the 4.Group Policy Job Group:

- [AD_CPassword Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies passwords that are stored in Group Policy Preferences which present a security risk
  allowing attackers access to these passwords. Microsoft published the AES private key, which can
  be used to decrypt passwords stored in Group Policy Preferences. See the Microsoft
  [2.2.1.1.4 Password Encryption](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-gppref/2c15cbf0-f086-4c74-8b70-1f2fa45dd4be)
  article for additional information. Since Authenticated Users have read access to SYSVOL, any
  malicious insider or attacker can search for the cPassword file inside XML files shared through
  SYSVOL to decrypt them. GPOs can be stored in the `%ProgramData%\Microsoft\Group Policy\History`
  folder on each machine, meaning any results found by this job should be deleted off every computer
  once this policy has been removed.
- [AD_GroupPolicy Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Audits all Group Policies that are present on the Domain Controller, and provides details on the
  containers they are linked to and the settings that are configured
- [AD_OverlappingGPOs Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies conflicting and redundant GPO settings based on link location. These GPO settings
  should be cleaned up or consolidated.
- [AD_PasswordPolicies Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies fine-grained domain password policies that are stored within the Password Settings
  Container. Fine-Grained password policies allow AD administrators to apply different password
  policies within a single domain.

# AD_CircularNesting Job

The AD_CircularNesting Job identifies circularly nested groups within Active Directory which can
pose administrative and operational challenges with identifying effective access to resources.

## Analysis Tasks for the AD_CircularNesting Job

Navigate to the **Active Directory** > **1.Groups** > **AD_CircularNesting** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_CircularNesting Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/circularnestinganalysis.webp)

The default analysis tasks are :

- Circular Nesting Details – Creates the SA_AD_CircularNesting_Details table accessible under the
  job’s Results node
- Domain Summary – Creates the SA_AD_CircularNesting_DomainSummary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_CircularNesting Job
produces the following pre-configured report:

| Report           | Description                                                                  | Default Tags | Report Elements                                                                                                                                                                                       |
| ---------------- | ---------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Circular Nesting | This report identifies instances of circular nesting within the environment. | None         | This report is comprised of three elements: - Bar Chart – Displays circular nesting by domain - Table – Provides details on circular nesting - Table – Provides details on circular nesting by domain |

# AD_DCLogonGroups Job

The AD_DCLogonGroups Job identifies users who are able to log on to Domain Controllers through
effective membership to the Enterprise Admins, Domain Admins, Administrators, Backup Operators,
Account Operators, Print Operators, or Remote Desktop Users groups. This type of access should be
limited to only those individuals who require this level of administrative privileges.

## Analysis Tasks for the AD_DCLogonGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_DCLogonGroups** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_DCLogonGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/groups/dclogongroupsanalysis.webp)

The default analysis tasks are:

- Circular Effective Membership – Creates the SA_AD_DCLogonGroups_Membership table accessible under
  the job’s Results node
- User Listing – Creates the SA_AD_DCLogonGroups_UserList table accessible under the job’s Results
  node
- Membership Summary – Creates the SA_AD_DCLogonGroups_Summary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_CircularNesting Job
produces the following pre-configured report:

| Report                         | Description                                                                                   | Default Tags | Report Elements                                                                                                                                                             |
| ------------------------------ | --------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain Controller Logon Rights | This report displays effective membership for groups with logon rights to domain controllers. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays largest groups - Table – Provides details on membership - Table – Provides summary of membership |

# AD_DuplicateGroups Job

The AD_Duplicate Job identifies duplicate groups within Active Directory. Duplicate groups contain
the same group membership as one another and are suitable candidates for cleanup.

## Analysis Task for the AD_DuplicateGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_DuplicateGroups** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Task for the AD_DuplicateGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/groups/duplicategroupsanalysis.webp)

The default analysis tasks are:

- Identify Duplicate Groups – Creates the SA_AD_DuplicateGroups_Details table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis task, the AD_DuplicateGroups Job
produces the following pre-configured report:

| Report           | Description                                                         | Default Tags | Report Elements                                                                                                                                                                                                                         |
| ---------------- | ------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Duplicate Groups | This report identifies duplicate groups within the audited domains. | None         | This report is comprised of three elements: - Bar Chart – Displays domains by number of groups with duplicates - Table – Provides details on duplicate groups - Table – Provides details on domains by number of groups with duplicates |

# AD_EmptyGroups Job

The AD_EmptyGroups Job identifies empty and single member groups which are suitable candidates for
consolidation or cleanup.

## Analysis Tasks for the AD_EmptyGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_EmptyGroups** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_EmptyGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/emptygroupsanalysis.webp)

The default analysis tasks are:

- Empty Groups – Creates the SA_AD_EmptyGroups_Empty table accessible under the job’s Results node
- Single User Groups – Creates the SA_AD_EmptyGroups_SingleUser table accessible under the job’s
  Results node
- Summarize Empty Groups – Creates the SA_AD_EmptyGroups_EmptySummary table accessible under the
  job’s Results node
- Summarize Single User Groups – Creates the SA_AD_EmptyGroups_SingleUserSummary table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_EmptyGroups Job produces
the following pre-configured reports:

| Report             | Description                                                     | Default Tags | Report Elements                                                                                                                                                                                      |
| ------------------ | --------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empty Groups       | This report identifies all groups without any members.          | None         | This report is comprised of three elements: - Bar Chart – Displays top domains by empty group counts - Table – Provides details on empty groups - Table – Provides details on empty groups by domain |
| Single User Groups | This report identifies groups which only contain a single user. | None         | This report is comprised of three elements: - Bar Chart – Displays top domains by single user groups - Table – Provides details on groups - Table – Provides details on single user groups by domain |

# AD_GroupProbableOwners Job

The AD_GroupProbableOwners Job determines potential owners for Active Directory Groups which can be
used to perform automated membership reviews and enable self-service group management and membership
requests.

## Analysis Tasks for the AD_GroupProbableOwners Job

Navigate to the **Active Directory** > **1.Groups** > **AD_GroupProbableOwners** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_GroupProbableOwners Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/groups/groupprobableownersanalysis.webp)

The default analysis tasks are:

- Determine Ownership – Creates the SA_AD_GroupProbableOwner_Owners table accessible under the job’s
  Results node
- Domain Summary – Creates an interim processing table in the database for use by downstream
  analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_GroupProbableOwner Job
produces the following pre-configured report:

| Report          | Description                                                                                           | Default Tags | Report Elements                                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Probable Owners | This report identifies the most probable manager or department, based on effective member attributes. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays top domains by blank manager field - Table – Provides details on probable ownership - Table – Provides summary of managers |

# AD_LargestGroups Job

The AD_LargestGroups Job identifies groups with large effective member counts. These types of groups
may cause administrative overhead and burden in being able to easily understand who is getting
access to resources, or how much access is being granted to resources through these groups.

## Analysis Task for the AD_LargestGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_LargestGroups** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Task for the AD_LargestGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/largestgroupsanalysis.webp)

The default analysis tasks are:

- Group Details – Creates the SA_AD_LargestGroups_Details table accessible under the job’s Results
  node

In addition to the tables and views created by the analysis task, the AD_LargestGroups Job produces
the following pre-configured report:

| Report         | Description                                                               | Default Tags | Report Elements                                                                                                      |
| -------------- | ------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------- |
| Largest Groups | This report identifies the largest groups within the audited environment. | None         | This report is comprised of two elements: - Bar Chart – Displays largest groups - Table – Provides details on groups |

# AD_MailSecurityGroups Job

The AD_MailSecurityGroups Job identifies mail-enabled security groups within Active Directory.

## Analysis Tasks for the AD_MailSecurityGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_MailSecurityGroups** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_MailSecurityGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/groups/mailsecuritygroupsanalysis.webp)

The default analysis tasks are:

- Calculate Effective Membership – Creates the SA_AD_MailSecurityGroups_Membership table accessible
  under the job’s Results node
- Mail Enabled Domain Summary – Creates the SA_AD_MailSecurityGroups_DomainSummary table accessible
  under the job’s Results node
- Membership Summary – Creates the SA_AD_MailSecurityGroups_Summary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_MailSecurityGroups Job
produces the following pre-configured report:

| Report                       | Description                                                         | Default Tags | Report Elements                                                                                                                                                                                                                                    |
| ---------------------------- | ------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mail Enabled Security Groups | This report displays summary data for mail enabled security groups. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays mail enabled security groups per domain - Table – Provides summary of mail enabled security groups - Table – Provides summary of mail enabled security groups by domain |

# AD_NestedGroups Job

The AD_NestedGroups Job identifies nested groups within Active Directory and provides details such
as the levels of nesting. While Active Directory provides the ability to nest certain types of
groups within other groups, Microsoft recommends nesting does not go beyond two levels in order to
avoid difficulties in understanding effective membership and access.

## Analysis Tasks for the AD_NestedGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_NestedGroups** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_NestedGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/nestedgroupsanalysis.webp)

The default analysis tasks are:

- Details – Creates the SA_AD_NestedGroups_Details table accessible under the job’s Results node
- Summarize by Domain – Creates the SA_AD_NestedGroups_DomainSummary table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_NestedGroups Job produces
the following pre-configured report:

| Report        | Description                                                                                                           | Default Tags | Report Elements                                                                                                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nested Groups | This report identifies the groups with the largest amount of nested groups, and how many levels of nesting there are. | None         | This report is comprised of three elements: - Bar Chart – Displays top groups by nesting - Table – Provides details on nested groups - Table – Provides details on top groups by nesting |

# AD_SensitiveSecurityGroups Job

The AD_SensitiveSecurityGroups Job identifies users who are granted administrative access within
Active Directory through membership to the Enterprise Admins, Domain Admins, Schema Admins, DNS
Admins, or Administrators groups. This level of access should be limited to only those individuals
who require this level of administrative privileges.

## Analysis Tasks for the AD_SensitiveSecurityGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_SensitiveSecurityGroups** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_SensitiveSecurityGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/groups/sensitivesecuritygroupsanalysis.webp)

The default analysis tasks are:

- Calculate Effective Membership – Creates the SA_AD_SensitiveSecurityGroups_Membership table
  accessible under the job’s Results node
- User Listing – Creates the SA_AD_SensitiveSecurityGroups_UserList table accessible under the job’s
  Results node
- Membership Summary – Creates the SA_AD_SensitiveSecurityGroups_Summary table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_SensitiveSecurityGroups
Job produces the following pre-configured report:

| Report                              | Description                                                              | Default Tags | Report Elements                                                                                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Security Group Membership | This report displays effective membership for sensitive security groups. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays largest groups - Table – Provides details on membership - Table – Provides summary of group membership |

# AD_StaleGroups Job

The AD_StaleGroups Job identifies groups that contain potentially stale users. Users are considered
stale if they have never logged onto the domain, have not logged onto the domain in the past 60
days, or are disabled. These group memberships should be reviewed and possibly removed.

## Analysis Tasks for the AD_StaleGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_StaleGroups** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_StaleGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/stalegroupsanalysis.webp)

The default analysis tasks are:

- Stale Group Details – Creates the SA_AD_StaleGroups_Details table accessible under the job’s
  Results node
- Stale Groups Summary – Creates the SA_AD_StaleGroups_GroupSummary table accessible under the job’s
  Results node
- Stale Groups Org Summary – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_StaleGroups Job produces
the following pre-configured report:

| Report                                           | Description                                                                                                                                                                              | Default Tags | Report Elements                                                                                                                                                             |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Effective Membership (A.K.A. Stale Groups) | This report identifies groups with stale effective membership. A stale user is defined as someone who has not logged into the domain in over 60 days, is expired, or currently disabled. | None         | This report is comprised of three elements: - Bar Chart – Displays group membership - Table – Provides details on membership - Table – Provides details on group membership |

# 1.Groups Job Group

The 1.Groups Job Group identifies effective group membership and pinpoints potential areas of
administrative concern such as nested or stale groups.

![1.Groups Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following jobs comprise the 1.Groups Job Group:

- [AD_CircularNesting Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies circularly nested groups within Active Directory which can pose administrative and
  operational challenges with identifying effective access to resources
- [AD_DCLogonGroups Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies users who are able to log on to Domain Controllers through effective membership to
  the Enterprise Admins, Domain Admins, Administrators, Backup Operators, Account Operators, Print
  Operators, or Remote Desktop Users groups. This type of access should be limited to only those
  individuals who require this level of administrative privileges.
- [AD_DuplicateGroups Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies duplicate groups within Active Directory. Duplicate groups contain the same group
  membership as one another and are suitable candidates for cleanup.
- [AD_EmptyGroups Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies empty and single member groups which are suitable candidates for consolidation or
  cleanup
- [AD_GroupProbableOwners Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Determines potential owners for Active Directory Groups which can be used to perform automated
  membership reviews and enable self-service group management and membership requests
- [AD_LargestGroups Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies groups with large effective member counts. These types of groups may cause
  administrative overhead and burden in being able to easily understand who is getting access to
  resources, or how much access is being granted to resources through these groups.

  - The definition of a large group is set by the **.Active Directory Inventory** >
    **3-AD_Exceptions** Job. It can be customized. See the
    [3-AD_Exceptions Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
    topic for additional information.

- [AD_MailSecurityGroups Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies mail-enabled security groups within Active Directory
- [AD_NestedGroups Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies nested groups within Active Directory and provides details such as the levels of
  nesting. While Active Directory provides the ability to nest certain types of groups within other
  groups, Microsoft recommends nesting does not go beyond two levels in order to avoid difficulties
  in understanding effective membership and access.

  - The definition of a deeply nested group is set by the **.Active Directory Inventory** >
    **3-AD_Exceptions** Job. It can be customized. See the
    [3-AD_Exceptions Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
    topic for additional information.

- [AD_SensitiveSecurityGroups Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies users who are granted administrative access within Active Directory through
  membership to the Enterprise Admins, Domain Admins, Schema Admins, DNS Admins, or Administrators
  groups. This level of access should be limited to only those individuals who require this level of
  administrative privileges.
- [AD_StaleGroups Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies groups that contain potentially stale users. Users are considered stale if they have
  never logged onto the domain, have not logged onto the domain in the past 60 days, or are
  disabled. These group memberships should be reviewed and possibly removed.

  - The definition of a stale user” is set by the **.Active Directory Inventory** >
    **3-AD_Exceptions** Job. It can be customized. See the
    [3-AD_Exceptions Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
    topic for additional information.

# Active Directory Solution

The Active Directory Solution is a comprehensive set of audit jobs and reports that provide the
information administrators need for Active Directory configuration, operational management,
troubleshooting, analyzing effective permissions, and tracking who is making what changes within an
organization.

Supported Platforms

- Windows Server 2016 and later
- Windows 2003 Forest level or higher

**NOTE:** See the Microsoft
[Windows Server end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/deployoffice/endofsupport/windows-server-support)
article for additional information.

Requirements, Permissions, and Ports

See the
[Active Directory Domain Target Requirements](/docs/accessanalyzer/11.6/configuration-guides/directory-services/active-directory.md)
topic for additional information.

Location

The Active Directory Solution requires a special Enterprise Auditor license. It can be installed
from the Enterprise Auditor Instant Job Wizard. Once installed into the Jobs tree, navigate to the
solution: **Jobs** > **Active Directory**.

![Active Directory Solution](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/solutionoverview.webp)

Each job group works independently from the other job groups. Some job groups run analysis tasks
against the analyzed data collected by the .Active Directory Inventory Solution to generate reports,
e.g. 1.Groups Job Group. Other job groups run both data collection and analysis to generate reports.
The AD_SecurityAssessment Job summarizes security related results from both the Active Directory
Solution and the Active Directory Permissions Analyzer Solution.

**NOTE:** The Cleanup Job Group requires additional licenses to function. See the
[Active Directory Job Groups](#active-directory-job-groups) topic for additional information.

See the
[Instant Job Wizard](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/instant-jobs.md)
topic for additional information.

## Active Directory Job Groups

The Active Directory solution is a comprehensive set of audit jobs and reports that provide the
information every administrator needs for Active Directory configuration, operational management,
troubleshooting, analyzing effective permissions, and tracking who is making what changes within an
organization.

![Active Directory Job Group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/adsolutionjobgroup.webp)

The following job groups comprise the Active Directory Solution:

- [1.Groups Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies effective group membership and pinpoints potential areas of administrative concern
  such as nested or stale groups
- [2.Users Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies user conditions and pinpoint potential areas of administrative concern such as weak
  passwords, user token size, or stale users
- [3.Computers Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Pinpoints potential areas of administrative concern related to computer accounts, including
  stale computers and computers that have been trusted for delegation
- [4.Group Policy Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Audits GPOs and their settings, and provides in depth analysis of conditions such as where GPOs
  have been linked, misconfigurations that can cause security or operational issues, and redundant
  GPOs that can be consolidated
- [5.Domains Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Provides details on domains, sites, and trusts, and highlight domain level configurations that
  may leave your environment at risk
- [6.Activity Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/activity-monitoring.md)
  – Provides insights into access sprawl, privileged account usage, and operational health of the
  Active Directory environment. Information collected includes Active Directory Changes,
  Authentication, LDAP Traffic, Replication Traffic, and LSASS.EXE process injection on domain
  controllers

  - Requires the Active Directory Activity license feature to function

- [Cleanup Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – Identifies potential stale and unused users, computers, and groups as well as issues with group
  membership. Remediation workflows are included to de-provision unnecessary objects to help
  increase security and reduce complexity.

  - Requires the Active Directory Actions license feature to function.
  - Requires the Active Directory Actions Module to be installed

- [AD Security Assessment Job](/docs/accessanalyzer/11.6/solutions/active-directory/security-assessment.md)
  – Summarizes security related results from the Active Directory Solution and the Active Directory
  Permissions Analyzer Solution

Since each job group within the Active Directory Solution is designed to run independently, refer to
the Recommended Configurations section for each job group, for information on frequency and job
group settings.

# AD_DirectMembership Job

The AD_DirectMembership Job identifies users who do not have any group membership. This condition
may indicate unnecessary user accounts that are suitable candidates for review and cleanup.

## Analysis Tasks for the AD_DirectMembership Job

Navigate to the **Active Directory** > **2.Users** > **AD_DirectMembership** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_DirectMembership Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/directmembershipanalysis.webp)

The default analysis tasks are:

- User Details – Creates the SA_AD_DirectMembership_Details table accessible under the job’s Results
  node
- Domain Summary – Creates the SA_AD_DirectMembership_DomainSummary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_DirectMembership Job
produces the following pre-configured report:

| Report              | Description                                            | Default Tags | Report Elements                                                                                                                                                                                                                                   |
| ------------------- | ------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No Group Membership | This report identifies users with no group membership. | None         | This report is comprised of three elements: - Bar Chart – Displays top domains by users with no membership - Table – Provides details on all users with no group membership - Table – Provides details on top domains by users with no membership |

# AD_DuplicateUsers Job

The AD_DuplicateUsers Job helps to identify multiple user accounts which may be owned by a single
employee. A user may have accounts in multiple domains or administrative accounts with greater
access than their normal account.

## Analysis Tasks for the AD_DuplicateUsers Job

Navigate to the **Active Directory** > **2.Users** > **AD_DuplicateUsers** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_DuplicateUsers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/duplicateusersanalysis.webp)

The default analysis tasks are:

- Potential Duplicates Details – Creates the SA_AD_DuplicateUsers_Details table accessible under the
  job’s Results node
- User Details – Creates the SA_AD_DuplicateUsers_DomainSummary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_DuplicateUsers Job
produces the following pre-configured report:

| Report                  | Description                                                                                                          | Default Tags | Report Elements                                                                                                                                                                           |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Duplicate User Accounts | This report identifies user accounts which may belong to a single employee, based on a variety of common attributes. | None         | This report is comprised of three elements: - Bar Chart – Displays a domain summary - Table – Provides details on matches - Table – Provides details on duplicate user accounts by domain |

# AD_OrphanedUsers Job

The AD_OrphanedUsers Job identifies users whose managers are stale or disabled. These user accounts
should be reviewed and appropriate management should be assigned.

## Analysis Tasks for the AD_OrphanedUsers Job

Navigate to the **Active Directory** > **2.Users** > **AD_OrphanedUsers** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_OrphanedUsers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/orphanedusersanalysis.webp)

The default analysis tasks are:

- Details – Creates the SA_AD_OrphanedUsers_Details table accessible under the job’s Results node
- Domain Summary – Creates the SA_AD_OrphanedUsers_DomainSummary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_OrphanedUsers Job produces
the following pre-configured report:

| Report         | Description                                                           | Default Tags | Report Elements                                                                                                                                                                                   |
| -------------- | --------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Orphaned Users | A user is considered orphans when their manager is disabled or stale. | None         | This report is comprised of three elements: - Bar Chart – Displays top domains by orphaned users - Table – Provides details on orphaned users - Provides details on top domains by orphaned users |

# AD_PasswordStatus Job

The AD_PasswordStatus Job highlights potential issues with user password settings that may exploited
or compromised if not addressed.

## Analysis Tasks for the AD_PasswordStatus Job

Navigate to the **Active Directory** > **2.Users** > **AD_PasswordStatus** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigure for this job.

![Analysis Tasks for the AD_PasswordStatus Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/passwordstatusanalysis.webp)

The default analysis tasks are:

- Password Status Details – Creates the SA_AD_PasswordStatus_Details table accessible under the
  job’s Results node
- Domain Summary – Creates an interim processing table in the database for use by downstream
  analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_PasswordStatus Job
produces the following pre-configured report:

| Report          | Description                                                                              | Default Tags | Report Elements                                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Password Status | This report identifies the password status of all users and highlights potential issues. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays password issues by domain - Table – Provides details on users - Provides details on password issues by domain |

# AD_ServiceAccounts Job

The AD_ServiceAccounts Job offers information about service accounts and if they are vulnerable to
Kerberoasting. An account is deemed vulnerable to a Kerberoasting attack if the
msDS-SupportedEncryptionTypes value supports RC4 as the highest encryption type.

_Remember,_ the 1-AD_Scan Job needs to be configured to collect these Custom Attributes:

- servicePrincipalName – Provides service account information. See the Microsoft
  [Service Principal Names](<https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/cc961723(v=technet.10)>)
  article for additional information.
- msDS-SupportedEncryptionTypes – Identifies service accounts vulnerable to Kerberoasting attacks

## Analysis Task for the AD_ServiceAccounts Job

Navigate to the **Active Directory** > **2.Users** > **AD_ServiceAccounts** > **Configure** node and
select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Task for the AD_ServiceAccounts Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/serviceaccountsanalysis.webp)

The default analysis tasks are:

- Password Status Details – Creates the SA_AD_ServiceAccounts_Details table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis task, the AD_ServiceAccounts Job
produces the following pre-configured report:

| Report           | Description                                                                  | Default Tags | Report Elements                                                                                                                                                                                       |
| ---------------- | ---------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Service Accounts | This report provides details on service accounts in the audited environment. | None         | This report is comprised of three elements: - Bar Chart – Displays service accounts by domain - Table – Provides details on service accounts - Table – Provides details on service accounts by domain |

# AD_SIDHistory Job

The AD_SIDHistory Job enumerates historical SIDs in the audited environment and highlights
exceptions involving the SIDHistory attribute on AD user objects. Specific conditions include when a
user has a historical SID from their current domain, or when a non-admin user has a historical SID
with administrative rights, both of which may be indicators of compromise.

## Analysis Tasks for the AD_SIDHistory Job

Navigate to the **Active Directory** > **2.Users** > **AD_SIDHistory** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_SIDHistory Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/sidhistoryanalysis.webp)

The default analysis tasks are:

- Determine SIDHistory details – Creates the SA_AD_SIDHistory_Details table accessible under the
  job’s Results node
- Summarize SIDHistory details – Creates the SA_AD_SIDHistory_Summary table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_PasswordStatus Job
produces the following pre-configured report:

| Report      | Description                                                                                                                                                                                                                                                                                                                    | Default Tags | Report Elements                                                                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SID History | This report lists historical SIDs in the audited environment. Additionally, it highlights exceptions involving the SIDHistory attribute on AD user objects. Considered in particular are when a user has a historical SID from their current domain, or when a non-admin user has a historical SID with administrative rights. | None         | This report is comprised of three elements: - Bar Chart – Displays historical SIDs by domain - Table – Provides details on SID history - Table – Provides details on historical SIDs by domain |

# AD_StaleUsers Job

The AD_StaleUsers job identifies potentially stale users based on the amount of time since their
last login to the domain, or if the account has been disabled. These accounts should be reviewed and
cleaned up in order to increase security and reduce complexity.

**NOTE:** The definition of a stale user is set by the .Active Directory Inventory solution. These
parameters, including the number of days since last login to be considered stale (by default 60
days), can be customized within the **.Active Directory Inventory** > **3-AD_Exceptions** job's
**Stale Users** analysis task. See the
[3-AD_Exceptions Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
topic for additional information.

## Analysis Tasks for the AD_StaleUsers Job

Navigate to the **Active Directory** > **2.Users** > **AD_StaleUsers** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_StaleUsers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/staleusersanalysis.webp)

The default analysis tasks are:

- User Details – Creates the SA_AD_StaleUsers_Details table accessible under the job’s Results node
- Summarize by Domain – Creates the SA_AD_StaleUsers_DomainSummary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_StaleUsers job produces
the following pre-configured report:

| Report      | Description                                                                                                                                                                                                                                       | Default Tags | Report Elements                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Users | This report identifies user accounts which have not logged into the domain for an extended amount of time or are currently disabled. A user account is considered stale if the last logon is over 60 days ago, is currently disabled, or expired. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays users by domain - Table – Provides details on users - Table – Provides details on users by domain |

# AD_UserAttributeCompletion Job

The AD_UserAttributeCompletion Job identifies which attributes are present within User fields in
Active Directory, and which ones are blank for a majority of objects. This may indicate accounts
within Active Directory which are lacking appropriate information.

## Analysis Tasks for the AD_UserAttributeCompletion Job

Navigate to the **Active Directory** > **2.Users** > **AD_UserAttributeCompletion** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_UserAttributeCompletion Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/userattributecompletionanalysis.webp)

The default analysis tasks are:

- Details – Creates an interim processing table in the database for use by downstream analysis and
  report generation
- User Details – Creates an interim processing table in the database for use by downstream analysis
  and report generation

In addition to the tables and views created by the analysis tasks, the AD_UserAttributeCompletion
Job produces the following pre-configured report:

| Report                    | Description                                                                                                                                     | Default Tags | Report Elements                                                                                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Attribute Completion | This report identifies which attributes are present within User fields in Active Directory, and which ones are blank for a majority of objects. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays completeness by attribute - Table – Provides details on users with blank attributes - Table –Provides details on completeness by attribute |

# AD_UserDelegation Job

The AD_Delegation Job highlights user accounts which are trusted for delegation. Kerberos delegation
enables an application to access resources hosted on a different server, and opens up several
avenues to compromise based on the type of delegation enabled.  See the
[What Is Kerberos Delegation?](https://blog.netwrix.com/2021/11/30/what-is-kerberos-delegation-an-overview-of-kerberos-delegation/) Netwrix
blog article for more information about this configuration and the related security risks.

## Analysis Task for the AD_UserDelegation Job

Navigate to the **Active Directory** > **2.Users** > **AD_UserDelegation** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Task for the AD_UserDelegation Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/userdelegationanalysis.webp)

The default analysis tasks are:

- Determine users for trusted delegation – Creates the SA_AD_UserDelegation_Details table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis task, the AD_UserDelegation Job produces
the following pre-configured report:

| Report                       | Description                                                                                                                                              | Default Tags | Report Elements                                                                                                                                                                                                                           |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Users Trusted for Delegation | This report highlights which users are trusted for delegation, which accounts are sensitive, and whether the delegation is constrained or unconstrained. | None         | This report is comprised of three elements: - Bar Chart – Displays users trusted for delegation by domain - Table – Provides details on users trusted for delegation - Table – Provides details on users trusted for delegation by domain |

# AD_UserToken Job

The AD_UserToken Job identifies and reports the number of SIDS and estimated token size associated
with each user. Token bloat can lead to issues during login and can also cause applications that use
Kerberos authentication to fail. See the Microsoft
[Problems with Kerberos authentication when a user belongs to many groups](https://learn.microsoft.com/en-US/troubleshoot/windows-server/windows-security/kerberos-authentication-problems-if-user-belongs-to-groups)
article for more information about estimated token size.

## Analysis Task for the AD_UserToken Job

Navigate to the **Active Directory** > **2.Users** > **AD_UserToken** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Task for the AD_UserToken Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/usertokenanalysis.webp)

The default analysis tasks are:

- Calculate Token Size – Creates the SA_AD_UserTokens_Details table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis task, the AD_UserToken Job produces the
following pre-configured report:

| Report     | Description                                                                                                                                                     | Default Tags | Report Elements                                                                                                                                      |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Token | A user's token size is directly related to the number of SIDs associated with their user account, taking into account historical SIDs and effective membership. | None         | This report is comprised of two elements: - Stacked Bar Chart – Displays top users by estimated token size - Table – Provides details on user tokens |

# AD_WeakPasswords Job

The AD_WeakPasswords Job analyzes user account password hashes to determine how easily each could be
compromised or the likelihood their passwords are known through comparison with compromised password
dictionaries and other exceptions. Exceptions include:

- AES Key Missing – Account is set up using older functional AD levels, so has no AES key. These
  accounts use weaker encryption methods susceptible to brute force attacks.
- Clear Text Password – Account has passwords stored with reversible encryption. See the Microsoft
  [Store passwords using reversible encryption](<https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/hh994559(v=ws.11)>)
  article for additional information.
- Default Computer Password – Computer has default computer passwords set
- Delegable Admins – Administrator account is allowed to be delegated to a service
- DES Encryption Only – Account is using Kerberos DES encryption. DES encryption is considered weak
  as the 56-bit key is prone to brute force attacks. See the Microsoft
  [AD DS: User accounts and trusts in this domain should not be configured for DES only](<https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/ff646918(v=ws.10)>)
  article for additional information.
- Empty Password – Account has an empty password
- Kerberos Pre-authentication is not required – Account does not require Kerberos
  pre-authentication. Kerberos pre-authentication can mitigate against brute force attacks. See the
  Microsoft
  [Kerberos Pre-Authentication: Why It Should Not Be Disabled](https://learn.microsoft.com/en-us/archive/technet-wiki/23559.kerberos-pre-authentication-why-it-should-not-be-disabled)
  article for additional information.
- LM Hash – Account has stored LM hashes. The LM hash is a relatively weak hash that is prone to
  brute force attacks. See the Microsoft
  [How to prevent Windows from storing a LAN manager hash of your password in Active Directory and local SAM databases](https://learn.microsoft.com/en-US/troubleshoot/windows-server/windows-security/prevent-windows-store-lm-hash-password)
  article for additional information.
- Password Never Expires – Account has a password that never expires
- Password Not Required – Account does not require a password
- Weak Historical Password – Account has a historical password that was found in the dictionary
- Weak Password – Account has a password that was found in the dictionary
- Shares Common Password – Account shares a password with another account

## Queries for the AD_WeakPasswords Job

The AD_WeakPasswords Job uses the PasswordSecurity Data Collector.

![Query for the AD_WeakPasswords Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/weakpasswordsquery.webp)

The query for this job are:

- Weak Passwords – Collects password hashes to identify weak passwords

  - See the
    [PasswordSecurity Data Collector](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/passwordsecurity/overview.md)
    topic for additional information

### Configure the Weak Passwords Query

The PasswordSecurity Data Collector can be scoped if desired. Follow the steps to modify the query
configuration.

**Step 1 –** Navigate to the job’s Configure node and select Queries.

**Step 2 –** In the Query Selection view, select the **Weak Passwords** query and click**Query
Properties**. The Query Properties window opens.

**Step 3 –** Select the Data Source tab, and click **Configure**. The Password Security Data
Collector Wizard opens.

![Password Security Data Collection Wizard Scan options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/optionsweakpassword.webp)

**CAUTION:** Read the warning prior to enabling the cleartext password feature.

**Step 4 –** On the Options page, configure the scan options by enabling communication with the
Active Directory via SSL or returning cleartext password entries.

![Password Security Data Collection Wizard Dictionary options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/dictionariesweakpassword.webp)

**Step 5 –** On the Dictionaries page, configure the dictionary options by enabling the Stealthbits
password dictionary or click **Add…** to upload a custom dictionary with NTLM hashes or plaintext
passwords to use during the scan.

- See the
  [PasswordSecurity: Dictionaries](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/passwordsecurity/dictionaries.md)
  topic for additional information

**Step 6 –** Navigate to the Summary page, click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

The Weak Passwords query is now configured.

## Analysis Tasks for the AD_WeakPasswords Job

Navigate to the **Active Directory** > **2.Users** > **AD_WeakPasswords** > **Configure** node and
select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_WeakPasswords Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/weakpasswordsanalysis.webp)

The default analysis tasks are:

- Count of Shared Passwords – Creates the SA_AD_WeakPasswords_Count table accessible under the job's
  Results node
- Join Active Directory Stats – Creates the SA_AD_WeakPasswords_Details table accessible under the
  job’s Results node
- Summarize Password Issues – Creates the SA_SA_AD_WeakPasswords_Summary table accessible under the
  job's Results node
- Add to AD Exceptions – Creates the SA_AD_UserDelegation_Details table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the AD_UserDelegation Job
produces the following pre-configured report:

| Report                | Description                                                                                                        | Default Tags | Report Elements                                                                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Weak Passwords Checks | This job identifies accounts in the organization with weak passwords that can be easily decrypted or brute forced. | None         | This report is comprised of three elements: - Bar Chart – Displays password weaknesses - Table – Provides details on password weaknesses - Table – Provides details on exceptions and user counts |

# 2.Users Job Group

The 2.Users Job Group identifies user conditions and pinpoint potential areas of administrative
concern such as weak passwords, user token size, or stale users.

![2.Users Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following components comprise the 2.Users Job Group:

- [AD_DirectMembership Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies users who do not have any group membership. This condition may indicate unnecessary
  user accounts that are suitable candidates for review and cleanup.
- [AD_DuplicateUsers Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies multiple user accounts which may be owned by a single employee. A user may have
  accounts in multiple domains or administrative accounts with greater access than their normal
  account.
- [AD_OrphanedUsers Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies users whose managers are stale or disabled. These user accounts should be reviewed
  and appropriate management should be assigned.
- [AD_PasswordStatus Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Highlights potential issues with user password settings that may exploited or compromised if not
  addressed
- [AD_ServiceAccounts Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Offers information about service accounts and if they are vulnerable to Kerberoasting. An
  account is deemed vulnerable to a Kerberoasting attack if the msDS-SupportedEncryptionTypes value
  supports RC4 as the highest encryption type.
- [AD_SIDHistory Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Enumerates historical SIDs in the audited environment and highlights exceptions involving the
  SIDHistory attribute on AD user objects. Specific conditions include when a user has a historical
  SID from their current domain, or when a non-admin user has a historical SID with administrative
  rights, both of which may be indicators of compromise.
- [AD_StaleUsers Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies potentially stale users based on the amount of time since their last login to the
  domain, or if the account has been disabled. These accounts should be reviewed and cleaned up in
  order to increase security and reduce complexity.
- [AD_UserAttributeCompletion Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies which attributes are present within User fields in Active Directory, and which ones
  are blank for a majority of objects. This may indicate accounts within Active Directory which are
  lacking appropriate information.
- [AD_UserDelegation Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Highlights user accounts which are trusted for delegation. Kerberos delegation enables an
  application to access resources hosted on a different server, and opens up several avenues to
  compromise based on the type of delegation enabled.
- [AD_UserToken Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Identifies and reports the number of SIDS and estimated token size associated with each user.
  Token bloat can lead to issues during login and can also cause applications that use Kerberos
  authentication to fail.
- [AD_WeakPasswords Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Analyzes user account password hashes to determine how easily each could be compromised or the
  likelihood their passwords are known through comparison with compromised password dictionaries and
  other exceptions

# 1-AD_Scan Job

The 1-AD_Scan Job collects data from Active Directory. In most environments, this job requires no
additional customizations before running it. Optionally, the job can be configured to scope scan
options and to collect custom attributes. For enable SSL encryption for communication with Active
Directory, see the [Enable SSL Option](#enable-ssloption) topic for additional information.

## Queries for the 1-AD Scan Job

The 1-AD_Scan Job uses the ADInventory Data Collector for the following query:

![Queries for the 1-AD Scan Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectoryinventory/scanqueries.webp)

- AD Inventory – Targets a domain controller to collect inventory data for user, group, and computer
  objects

  - This query can be modified. See the
    [Customize the 1-AD_Scan Query](#customize-the-1-ad_scan-query) topic for additional
    information.

### Customize the 1-AD_Scan Query

The 1-AD_Scan Job has been preconfigured to run with the default settings with the category of Scan
Active Directory. Follow the steps to set any desired customizations to scan options or to collect
custom attributes.

**Step 1 –** Navigate to the **.Active Directory Inventory** > **1-AD_Scan** > **Configure** node
and select **Queries**.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window
opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The Active Directory Inventory
DC Wizard opens.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for the
purpose of this job.

![Active Directory Inventory DC Wizard Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectoryinventory/scandcwizardoptions.webp)

**Step 4 –** (Optional) On the Options page, you can:

- Enable encrypted communication with Active Directory (SSL)
- Configure the differential scan settings using the **Collect only updates since last
  scan** settings

See the
[ADInventory: Options](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
topic for more information.

![Active Directory Inventory DC Wizard Custom Attributes page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectoryinventory/scandcwizardcustomattributes.webp)

**Step 5 –** (Optional) On the Custom Attributes page, add any desired custom attributes to be used
in the Active Directory scan. See the
[ADInventory: Custom Attributes](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
topic for additional information.

**Step 6 –** Navigate to the Summary page. Click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

**NOTE:** In order for the Access Information Center to populate NFS permissions within File System
reports, the .Active Directory Inventory Job Group must be configured to collect the **uid** and
**uidNumber** attributes for Users. See the
[NFS Permissions for the AIC ](#nfs-permissions-for-the-aic) topic for additional information.

The 1-AD_Scan Job is now ready to run with the customized settings. If any custom attributes are
added to the data collection, the **Create Extended Attributes View** analysis task can be enabled
in order to have visibility into the collected data.

## Analysis Tasks for the 1-AD_Scan Job

View the analysis tasks by navigating to the **.Active Directory Inventory** > **1-AD_Scan** >
**Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the 1-AD_Scan Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectoryinventory/scananalysis.webp)

The following analysis tasks are selected by default:

- Import functions – Imports effective group membership function into the database
- Create Extended Attributes View – Creates the SA_ADInventory_ExtendedAttributesView for Custom
  Attributes that have been added to the query
- Summarize Domains – Creates the SA_ADInventory_Report_DomainSummary table
- Summarize Stats – Creates the SA_ADInventory_Summary table

The following analysis tasks never need to be selected as they are only needed to restore views that
have been accidentally hidden:

- Bring User View To Console – Restores the SA_ADInventory_UsersView to be visible within the
  Enterprise Auditor Console if it is hidden
- Bring Group Members View To Console – Restores the SA_ADInventory_GroupMembersView to be visible
  within the Enterprise Auditor Console if it is hidden
- Bring Group View To Console – Restores the SA_ADInventory_GroupsView to be visible within the
  Enterprise Auditor Console if it is hidden
- Bring Computers View to Console – Restores the SA_ADInventory_ComputersView to be visible within
  the Enterprise Auditor Console if it is hidden
- Remove ADI Stored Procedures – Removes the built-in ADI stored procedures

In addition to the tables and views explained in the
[Standard Reference Tables & Views for the ADInventory Data Collector](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
topic, the 1-AD_Scan Job produces the following pre-configured report:

| Report                   | Description                                                        | Default Tags | Report Elements                                                                                                                                                                                                                                                                                                                  |
| ------------------------ | ------------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Active Directory Summary | This report provides a summary of all audited domains and objects. | None         | This report is comprised of four elements: - Table – Displays general statistics in the Users, Groups, and Computers in All Audited Domains - Pie Chart – Displays Principals by Object Class - Pie Chart – Displays Principals by Audited Domain - Table – Displays detailed statistical information for each of the AD objects |

## NFS Permissions for the AIC

In order for the Access Information Center to populate NFS resources within all File System
permissions and resource audit reports, the .Active Directory Inventory Job Group must be configured
to collect the following custom attributes for Users:

- uid
- uidNumber

Follow the steps to add the custom attributes.

**Step 1 –** Navigate to the Active Directory Inventory DC Wizard for the AD Inventory Query within
the 1-AD_Scan Job.

![Active Directory Inventory DC Wizard Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectoryinventory/scandcwizardoptionsnfs.webp)

**Step 2 –** Navigate to the Options page. Ensure the **Collect only updates since last scan**
option is deselected.

**NOTE:** Whenever query configurations are modified, it is necessary to do a full scan. After the
first full scan, differential scanning can be re-enabled.

![Active Directory Inventory DC Wizard Custom Attributes page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectoryinventory/scandcwizardcustomattributesnfs.webp)

**Step 3 –** Use the **Next** button to navigate to the Custom Attributes page. Add both **uid** and
**uidNumber** attributes to the existing list of custom attributes. See the
[ADInventory: Custom Attributes](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
topic for additional information.

- **uid** attribute:

  - Domain Filter – \*
  - Object Class – User
  - Attribute Name – uid

- **uidNumber** attribute:

  - Domain Filter – \*
  - Object Class – User
  - Attribute Name – uidNumber

**Step 4 –** Use the **Next** button to navigate to the Summary page and click **Finish**. The
Active Directory Inventory DC Wizard closes. Click **OK** to close the Query Properties window.

**Step 5 –** Run the .Active Directory Inventory Job Group either manually or through a scheduled
task.

The .Active Directory Inventory Job Group is now collecting attributes required for NFS data to be
visible within the Access Information Center.

_Remember,_ it is necessary to re-enable differential scanning after Step 5 if desired.

See the Resource Audit topics in the
[Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
for additional information.

## Enable SSL Option

Follow the steps to enable SSL encryption for communications with Active Directory:

**Step 1 –** Navigate to the **1-AD_Scan > Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select the query and click **Query Properties**. The Query
Properties window opens.

**Step 3 –** Go to the Options page and select the **Encrypt communication with Active Directory
(SSL)** checkbox. Click **Next**.

**Step 4 –** Navigate to the Summary page, click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

The job will now use SSL encryption to query Active Directory.

# 2-AD_Changes Job

The 2-AD_Changes Job tracks changes within all scanned domains. Reports in the job highlight Active
Directory changes which have occurred since the last time the .Active Directory Inventory Job Group
was run. It is dependent on the running of the 1-AD_Scan Job, also located in the .Active Directory
Inventory Job Group.

The 1-AD_Scan Job must have the Query Option to **Track changes into Change tracking tables**
selected in order for the Analysis Tasks in the 2-AD_Changes Job to work. See Step 4 of the
[Customize the 1-AD_Scan Query](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md#customize-the-1-ad_scan-query)
topic for additional information.

## Analysis Tasks for the 2-AD_Changes Job

View the analysis tasks by navigating to the **.Active Directory Inventory** > **2-AD_Changes** >
**Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the 2-AD_Changes Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectoryinventory/changesanalysis.webp)

The following analysis tasks are selected by default:

- Org Changes

  - Creates the SA_AD_Changes_OrganizationalChanges table accessible under the job’s Results node
  - Creates interim processing tables in the database for use by downstream analysis and report
    generation

- Analyze Group Changes – Creates the SA_AD_Changes_GroupAnalysis table accessible under the job’s
  Results node
- Attribute Changes

  - Creates the SA_AD_Changes_AttributeChangeDetails table accessible under the job’s Results node
  - Creates interim processing tables in the database for use by downstream analysis and report
    generation

- User Account Status

  - Creates the SA_AD_Changes_UserAccountStatus table accessible under the job’s Results node
  - Creates interim processing tables in the database for use by downstream analysis and report
    generation

- Group Membership Changes

  - Creates the SA_AD_Changes_GroupMembershipChanges table accessible under the job’s Results node
  - Creates interim processing tables in the database for use by downstream analysis and report
    generation

- Object Moves

  - Creates the SA_AD_Changes_ObjectMoves table accessible under the job’s Results node
  - Creates interim processing tables in the database for use by downstream analysis and report
    generation

- New Principals – Creates interim processing tables in the database for use by downstream analysis
  and report generation
- Deleted Principals

  - Creates the SA_AD_Changes_DeletedPrincipals table accessible under the job’s Results node
  - Creates interim processing tables in the database for use by downstream analysis and report
    generation

The Notification analysis tasks are optional and require configuration before enabling them. The
following analysis tasks are deselected by default:

- Domain Admin Changes – Alerts when Domain Admins Group membership changes occur

  - Importance – Security, as this is a Sensitive Security Group

- Empty Groups – Alerts when group membership changes result in an empty group

  - Importance – AD Clean-up

- Circular Nesting – Alerts when group membership changes result in a group effectively containing
  itself

  - Importance – Security and AD Clean-up

- Stale Membership – Alerts when group members become stale

  - Importance – Security and AD Clean-up

- Large Change – Alerts when group membership changes result in a group becoming large

  - Importance – Security

- Disabled Users – Alerts when user accounts become disabled

  - Importance – Security

- Locked out Users – Alerts when user accounts become locked-out

  - Importance – Security  and Employee Productivity

- Alert on New Principals – Alerts when new user, group, or computer objects are created

  - Importance – Security and AD Clean-up

- Alert on Deleted Users – Alerts when user accounts are deleted

  - Importance – Security  and Employee Productivity

Notification must have recipients configured for the analysis task. Optionally, the email subject
and body can be modified. See the
[Notification Analysis Tasks for the 2-AD_Changes Job](#notification-analysis-tasks-for-the-2-ad_changes-job)
topic for additional information.

In addition to the tables and views created by the analysis tasks, the 2-AD_Changes Job produces the
following pre-configured reports:

| Report                                               | Description                                                                           | Default Tags | Report Elements                                                                                                                                                                                                                                           |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attribute Changes                                    | This report tracks attribute changes within Active Directory.                         | None         | This report is comprised of three elements: - Bar graph – Displays Attribute Changes (Past 24 Hours) - Table – Provides details on attribute changes (Past 24 Hours) - Table – Provides details on changes                                                |
| Group Membership Changes (A.K.A. Most Active Groups) | This report tracks group membership changes in Active Directory.                      | None         | This report is comprised of three elements: - Bar graph – Displays Most Active Groups (Past 24 Hours) - Table – Provides details on the most active groups (Past 24 Hours) - Table – Provides details on the most active groups                           |
| New Principals                                       | This report identifies when principals have been created on the targeted domains.     | None         | This report is comprised of two elements: - Bar graph – Displays New Principals by Domain (Past 24 Hours) - Table – Provides details on the new principals by domain                                                                                      |
| Object Moves                                         | This report tracks object moves in Active Directory.                                  | None         | This report is comprised of two elements: - Table – Displays Most Active OUs (Past 24 Hours) - Table – Provides details on the most active OUs                                                                                                            |
| Org Changes (A.K.A. Organizational Changes)          | This report tracks organizational moves such as manager, title or department changes. | None         | This report is comprised of three elements: - Bar graph – Displays Organizational Changes (Past 24 Hours) - Table – Provides details on organizational changes (Past 24 Hours) - Table – Provides details on the organizational changes                   |
| Principal Deletions (A.K.A. Past 24 Hours)           | This report identifies when principals have been deleted from the targeted domains.   | None         | This report is comprised of three elements: - Bar graph – Displays Deleted Principals by Domain (Past 24 Hours) - Table – Provides details on deleted principals by domain (Past 24 Hours) - Table – Provides details on the principals by domain         |
| User Account Status Changes                          | This report tracks user account status changes.                                       | None         | This report is comprised of three elements: - Bar graph – Displays User Account Control Changes (Past 24 Hours) - Table – Provides details on user account control changes (Past 24 Hours) - Table – Provides details on the user account control changes |

### Notification Analysis Tasks for the 2-AD_Changes Job

In order for Enterprise Auditor to send email notifications, it is necessary for the **Settings** >
**Notification** node to be properly configured. See the
[Notification](/docs/accessanalyzer/11.6/administration/settings/notifications.md)
topic for instructions on enabling the Enterprise Auditor Console to send email notifications. Once
email notifications have been enabled, the individual notification analysis tasks can be configured
and enabled. Follow the steps to configure a notification analysis task.

**Step 1 –** Navigate to the **.Active Directory Inventory** > **2-AD_Changes** > **Configure** node
and select **Analysis**.

![Notification Analysis Tasks for the 2-AD_Changes Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectoryinventory/changesanalysisnotification.webp)

**Step 2 –** In the Analysis Selection view, select the desired notification analysis task and click
**Analysis Configuration**. The Notification Data Analysis Module opens.

![Notification Data Analysis Module SMTP properties page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectoryinventory/notificationanalysissmtp.webp)

**CAUTION:** Do not make changes to the pages preceding the SMTP page.

**Step 3 –** Use the **Next** button to navigate to the email configuration SMTP page.

![Recipients section of SMTP properties page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectoryinventory/notificationanalysissmtprecipients.webp)

**Step 4 –** In the Recipients section, provide the email addresses or distribution lists (fully
qualified address) for those who are to receive this notification. Multiple addresses can be
provided. You can use the following options:

- Add – Add an email address to the E-mail field
- Remove – Remove an email address from the Recipients list
- Combine multiple messages into single message – Sends one email for all objects in the record set
  instead of one email per object to all recipients

![Message section of SMTP properties page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectoryinventory/notificationanalysissmtpmessage.webp)

**Step 5 –** In the Message section, edit the **Subject**. It is not recommended to remove any
parameters. Then, customize the email content in the textbox to provide an explanation of the
notification to the recipients.

**Step 6 –** Click **Next** to save these configuration changes and navigate to the Summary page. Do
not make changes to any other pages. Click **Finish**. The Notification Data Analysis Module window
closes.

**Step 7 –** This notification analysis task is now configured to send emails. In the Analysis
Selection view, select the task checkbox.

**Step 8 –** Repeat this process for each desired notification analysis task.

Configured and enabled notifications now send alerts automatically during the execution of the
2-AD_Changes Job.

# 3-AD_Exceptions Job

The 3-AD_Exceptions Job identifies toxic conditions that exist within Active Directory which may
leave your environment at risk or add unnecessary administrative overhead. It is dependent on
running the 1-AD_Scan Job, also located in the .Active Directory Inventory Job Group.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The 3-AD_Exceptions Job has the following configurable parameters:

- Threshold of group members
- Threshold of nesting
- Threshold necessary to identify a stale group (0-100%)
- Whether to include disabled users that are stale
- Whether to include expired users that are stale
- Threshold for token size
- List of administrative groups

See the
[Customize Analysis Parameters for the 3-AD_Exceptions Job](#customize-analysis-parameters-for-the-3-ad_exceptions-job)
topic for additional information.

## Analysis Tasks for the 3-AD_Exceptions Job

View the analysis tasks by navigating to the **.Active Directory Inventory** > **3-AD_Exceptions** >
**Configure** node and select **Analysis**. Analysis tasks with configuration parameters that define
the security concerns within them can be modified.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the 3-AD_Exceptions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectoryinventory/exceptionsanalysis.webp)

The following analysis tasks are selected by default:

- Large Groups

  - Identifies groups that exceeded the defined threshold for effective group membership
  - Populates processing tables in the database for use by downstream analysis and report
    generation
  - Definition of a large group can be customized

- Deeply Nested Groups

  - Identifies groups that exceeded the defined threshold of deep levels of membership nesting
  - Populates processing tables in the database for use by downstream analysis and report
    generation
  - Definition of a deeply nested group can be customized

- Circular Nesting

  - Identifies groups with circular references in their effective membership
  - Populates processing tables in the database for use by downstream analysis and report
    generation

- Empty Groups

  - Identifies groups with no membership
  - Populates processing tables in the database for use by downstream analysis and report
    generation

- Single Member Groups

  - Identifies groups with a single direct member
  - Populates processing tables in the database for use by downstream analysis and report
    generation

- Stale Users

  - Identifies user accounts that are expired, are disabled, or have exceeded the defined
    threshold of inactivity
  - Populates processing tables in the database for use by downstream analysis and report
    generation
  - Definition of a stale user can be customized

- Stale Membership

  - Identifies groups with a high percentage of effective members that are stale users
  - Populates processing tables in the database for use by downstream analysis and report
    generation
  - Definition of stale membership can be customized

- Large Token

  - Identifies users that exceeded the defined threshold for effective membership in authorization
    groups
  - Populates processing tables in the database for use by downstream analysis and report
    generation
  - Definition of a large token can be customized

- Historical SID Tampering

  - Identifies users that have a historical SID from their current domain
  - Populates processing tables in the database for use by downstream analysis and report
    generation

- Admin Historical SID

  - Identifies users that have a historical SID from an administrator account
  - Populates processing tables in the database for use by downstream analysis and report
    generation
  - Definition of an administrator group can be customized

- Display Exceptions View – Creates the SA_ADInventory_ExceptionsView accessible under the job’s
  Results node
- Summarize Exceptions Count – Generates data used in the Exceptions report

In addition to the tables and views created by the analysis tasks, the 3-AD_Exceptions Job produces
the following pre-configured report:

| Report                                    | Description                                                                  | Default Tags | Report Elements                                                                                                                                                        |
| ----------------------------------------- | ---------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exceptions Summary (A.K.A. AD Exceptions) | This report summarizes common issues with user accounts and group membership | None         | This report is comprised of three elements: - Pie Chart – Displays exceptions by class - Table – Provides exceptions by count - Table – Provides details on exceptions |

### Customize Analysis Parameters for the 3-AD_Exceptions Job

Exception definitions that can be customized have the following default values for the customizable
parameters:

| Analysis Task        | Customizable Parameter Name | Default Value                                       | Value Indicates                                                       |
| -------------------- | --------------------------- | --------------------------------------------------- | --------------------------------------------------------------------- |
| Large Groups         | @LARGE_THRESHOLD            | 10                                                  | A group object with 10 members or more                                |
| Deeply Nested Groups | @NESTING_THRESHOLD          | 1                                                   | A group object nested 1 level or deeper within another group object   |
| Stale Users          | @STALE_THRESHOLD            | 60                                                  | A user object that has been inactive for 60 days or more              |
|                      | @INCLUDE_DISABLED           | True                                                | A user object that has been disabled                                  |
|                      | @INCLUDE_EXPIRED            | True                                                | A user object that has expired                                        |
| Stale Membership     | @STALE_THRESHOLD            | 10                                                  | A group with 10% of its effective members are stale users             |
| Large Token          | @TOKEN_THRESHOLD            | 10                                                  | A user object with effective membership in more than 10 group objects |
| Admin Historical SID | #ADMIN_GROUPS               | - Domain Admins - Enterprise Admins - Schema Admins | List of administrative groups                                         |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for instructions to modify the parameters. See the
[AD Exception Types Translated](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md#ad-exception-types-translated)
topic for an explanation of Exception Types.

# .Active Directory Inventory Solution

Active Directory (AD) acts as the central nervous system of any Microsoft environment and plays a
vital role in granting access to resources such as Exchange, File Systems, SharePoint, and SQL
Server. The .Active Directory Inventory Solution is designed to provide essential user, group
membership, and computer details from the targeted domains to many Enterprise Auditor built-in
solutions. Key information includes user status, user attributes, and group membership. The
collected data is accessed by other Enterprise Auditor solutions and the Netwrix Access Information
Center for analysis.

**NOTE:** This solution is required for using the Access Information Center.

This topic covers information on using the ADInventory Data Collector and the .Active Directory
Inventory Job Group.

Supported Platforms

- Windows 2003 Forest level or higher

Permissions

- Read access to directory tree
- List Contents & Read Property on the Deleted Objects Container

  **NOTE:** See the Microsoft
  [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx)
  article and the Microsoft
  [Dsacls](<https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx>) article for
  additional information.

Ports

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

Location

The .Active Directory Inventory Solution is a core component of all Enterprise Auditor
installations. Typically this solution is instantiated during installation, but it can be installed
from the Instant Job Wizard. Once it has been installed into the Jobs tree, navigate to the
solution: **Jobs** > **.Active Directory Inventory**. This group has been named in such a way to
keep it at the top of the Jobs tree.

## Jobs

This Job Group is comprised of three jobs that collect, analyze, and report on data. The data
collection is conducted by the ADInventory Data Collector. See the
[Standard Reference Tables & Views for the ADInventory Data Collector](/docs/accessanalyzer/11.6/data-collection/active-directory/configuration.md)
topic for database table information.

![.Active Directory Inventory Solution Overview page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/runninginstances/overview.webp)

The .Active Directory Inventory Solution has the following jobs:

- [1-AD_Scan Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Collects data and generates the standard reference tables and views
- [2-AD_Changes Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Analyzes the collected data to track and alert on changes within all scanned domains that
  occurred since the last scan
- [3-AD_Exceptions Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
  – Analyzes the collected data to identify security and provisioning concerns, such as circular
  nesting and stale membership

# Recommended Configurations for the .Active Directory Inventory Solution

The .Active Directory Inventory Solution has been configured by default to run with the
out-of-the-box settings, but some settings are optional for configuration. It can be run directly or
scheduled.

Dependencies

This job group does not have dependencies.

Targeted Hosts

The host list assignment has been configured under the **.Active Directory Inventory** >
**Settings** > **Host List Assignment** node. It is set to target the Default domain controller host
list, which is the domain in which the Enterprise Auditor Console server resides.

If targeting multiple domains, change the Host List Assignment to the **ONE DOMAIN CONTROLLER PER
DOMAIN** host list.

The Default domain controller host list and ONE DOMAIN CONTROLLER PER DOMAIN host list are dynamic
host lists based on the host inventory value in the isDomainController field in the Host Master
Table.

Connection Profile

The Connection Profile has been configured under the **.Active Directory Inventory** >
**Settings** > **Connection** node. It is set to Use the Default Profile, as configured at the
global settings level. Ensure the assigned Connection Profile has the necessary permissions on all
targeted domains.

If targeting multiple domains, ensure the assigned Connection Profile has the necessary permissions
on all targeted domains.

History Retention

Not supported and should be turned off

Multi-Console Support

Not supported

Schedule Frequency

**_RECOMMENDED:_** Schedule the .Active Directory Inventory Job Group to run once a day.

If there are frequent AD changes within the target environment, then it can be executed more often.
It is best to rerun it anytime AD changes might have occurred.

Run at the Solution Level

The jobs in the .Active Directory Inventory Job Group should be run together and in order by running
the entire solution, instead of the individual jobs.

Query Configuration

The solution is best run with the default query configuration. However, a possible modification
might be to include configurations of the scan options or additional custom attributes within the
[1-AD_Scan Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md).

Analysis Configuration

The solution is best run with the default analysis configuration. However, possible modifications
might be to:

- Enable notification analysis tasks within the
  [2-AD_Changes Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)
- Customize exception analysis parameters within the
  [3-AD_Exceptions Job](/docs/accessanalyzer/11.6/solutions/active-directory/inventory-reports.md)

Workflow

The .Active Directory Inventory Job Group has been set to run against the following default dynamic
host list:

- Default domain controller

Default dynamic host lists are populated from hosts in the Host Master Table that meet the host
inventory criteria for the list. Ensure the appropriate host lists have been populated through host
inventory results.

**Step 1 –** (Optional) Run a host discovery query to discover domain controllers. This is needed
when targeting multiple domains.

**Step 2 –** Set a Connection Profile.

**Step 3 –** chedule the .Active Directory Inventory Job Group to run as desired.

**Step 4 –** Review the reports generated by the .Active Directory Inventory Job Group.

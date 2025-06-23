---
title: entra id group analysis
sidebar_label: group analysis
description: Solution guide for entra id group analysis including implementation steps, configuration, and best practices.
---

# AAD_CircularNesting Job

The AAD_CircularNesting Job identifies circularly nested groups within Microsoft Entra ID which can
pose administrative and operational challenges with identifying effective access to resources.

## Analysis Tasks for the AAD_CircularNesting Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_CircularNesting** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis tasks for AAD_CircularNesting Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/circularnestinganalysis.webp)

The default analysis tasks are:

- Provide detail on instances of circular nesting – Creates the SA_AAD_CircularNesting_Details table
  accessible under the job’s Results node
- Summarize circular nesting by domain – Creates the SA_AAD_Circularnesting_DomainSummary table
  accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_CircularNesting Job produces the
following pre-configured report.

| Report           | Description                                                                   | Default Tags | Report Elements                                                                                                                                                                                      |
| ---------------- | ----------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Circular Nesting | This report identifies instances of circular nesting within your environment. | None         | This report is comprised of three elements: - Bar Chart– Displays circular nesting by domain - Table – Provides details on circular nesting - Table – Provides details on circular nesting by domain |

# AAD_DuplicateGroups Job

The AAD_DuplicateGroups Job identifies duplicate groups within Microsoft Entra ID. Duplicate groups
contain the same group membership as one another and are suitable candidates for cleanup.

## Analysis Tasks for the AAD_DuplicateGroups Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_DuplicateGroups** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Anaylsis tasks for AAD_DuplicateGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/groups/duplicategroupsanalysis.webp)

The default analysis tasks are:

- Identify duplicate groups – Creates the AAD_DuplicateGroups_Details table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the AAD_DuplicateGroups Job produces the
following pre-configured report.

| Report           | Description                                                         | Default Tags | Report Elements                                                                                                                                                                                                                    |
| ---------------- | ------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Duplicate Groups | This report identifies duplicate groups within the audited domains. | None         | This report is comprised of one elements: - Bar Chart – Displays domains by number of groups with duplicates - Table – Provides duplicate groups details - Table – Provides details on domains by number of groups with duplicates |

# AAD_EmptyGroups Job

The AAD_EmptyGroups Job identifies empty groups within Microsoft Entra ID which are suitable
candidates for consolidation or cleanup.

## Analysis Tasks for the AAD_EmptyGroups Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_EmptyGroups** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis tasks for AAD_EmptyGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/emptygroupsanalysis.webp)

The default analysis tasks are:

- Empty Groups – Creates the AAD_EmptyGroups_Empty table accessible under the job’s Results node
- Single User Groups – Creates the AAD_EmptyGroups_SingleUser table accessible under the job’s
  Results node
- Empty Group Summary – Creates the AAD_EmptyGroups_EmptySummary table accessible under the job’s
  Results node
- Single User Group Summary – Creates the AAD_EmptyGroups_SingleUserSummary table accessible under
  the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_EmptyGroups Job produces the
following pre-configured reports.

| Report             | Description                                                     | Default Tags | Report Elements                                                                                                                                                                                                                        |
| ------------------ | --------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empty Groups       | This report identifies all groups without any members.          | None         | This report is comprised of three elements: - Bar Chart – Displays domains by number of empty groups - Table – Provides details on empty groups - Table – Provides details on number of empty groups by domain                         |
| Single User Groups | This report identifies groups which only contain a single user. |              | This report is comprised of three elements: - Bar Chart – Displays top domains by single user group count - Table – Provides details on top domains by single user group count - Table – Provides details on single user group details |

# AAD_GroupDirSync Job

The AAD_GroupDirSync Job summarizes on-premises Active Directory syncing in the audited Microsoft
Entra ID environment.

## Analysis Tasks for the AAD_GroupDirSync Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_GroupDirSync** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis tasks for AAD_GroupDirSync Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/entraid/groups/groupdirsyncanalysis.webp)

The default analysis tasks are:

- Calculate group DirSync details – Creates the AAD_GroupDirSync_Details table accessible under the
  job’s Results node
- Summarize group DirSync details – Creates the AAD_GroupDirSync_EnterpriseSummary table accessible
  under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_GroupDirSync Job produces the
following pre-configured report.

| Report        | Description                                                                     | Default Tags | Report Elements                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Syncing | This report indicates the sync status of groups within the audited environment. | None         | This report is comprised of two elements: - Pie Chart – Displays an enterprise group synching summary - Table – Provides group sync details |

# AAD_LargestGroups Job

The AAD_LargestGroups Job identifies groups with large effective member counts. These groups may
cause administrative overhead and burden in being able to easily understand who is getting access to
resources, or how much access is being granted to resources through these groups.

## Analysis Tasks for the AAD_LargestGroups Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_LargestGroups** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis tasks for AAD_LargestGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/largestgroupsanalysis.webp)

The default analysis tasks are:

- Calculate large group details – Creates the AAD_LargestGroups_Details table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the AAD_LargestGroups Job produces the
following pre-configured report.

| Report         | Description                                                              | Default Tags | Report Elements                                                                                                  |
| -------------- | ------------------------------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------- |
| Largest Groups | This report identifies the largest groups within the audited environment | None         | This report is comprised of two elements: - Bar Chart – Displays largest groups - Table – Provides group details |

# AAD_NestedGroups Job

The AAD_NestedGroups Job identifies nested groups within Microsoft Entra ID and provides details
such as the levels of nesting. While Microsoft Entra ID provides the ability to nest certain types
of groups within other groups, Microsoft recommends nesting does not go beyond two levels in order
to avoid difficulties in understanding effective membership and access.

## Analysis Tasks for the AAD_NestedGroups Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_NestedGroups** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis tasks for AAD_NestedGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/nestedgroupsanalysis.webp)

The default analysis tasks are:

- Get nested group details – Creates the AAD_NestedGroups_Details table accessible under the job’s
  Results node
- Summarize nested groups – Creates the AAD_NestedGroups_DomainSummary table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the AAD_NestedGroups Job produces the
following pre-configured report.

| Report        | Description                                                                                                       | Default Tags | Report Elements                                                                                                                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nested Groups | This report identifies the groups with the largest nested group count, as well as their deepest level of nesting. | None         | This report is comprised of three elements: - Bar Chart – Displays top domains by group nesting - Table – Provides nested group details - Tables – Provides details on top domains by group nesting |

# AAD_ProbableOwners Job

The AAD_ProbableOwners Job determines potential owners for Microsoft Entra ID Groups which can be
used to perform automated membership reviews and enable self-service group management and membership
requests.

## Analysis Tasks for the AAD_ProbableOwners Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_ProbableOwners** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis tasks for AAD_ProbableOwners Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/entraid/groups/probableownersanalysis.webp)

The default analysis tasks are:

- Calculates group probable owners – Creates the AAD_ProbableOwners_Details table accessible under
  the job’s Results node
- Summarizes group probable owners by domain – Creates the AAD_ProbableOwners_DomainSummary table
  accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_ProbableOwners Job produces the
following pre-configured report.

| Report          | Description                                                                            | Default Tags | Report Elements                                                                                                                                                                                                           |
| --------------- | -------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Probable Owners | This report identifies the most probable manager based on effective member attributes. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays top domains by blank manager field - Table – Provides probable owner details - Tables – Provides details on top domains by blank manager field |

# AAD_StaleGroups Job

The AAD_StaleGroups Job identifies Microsoft Entra ID groups that contain potentially stale users.
Users are considered stale if they have never logged onto the domain, have not logged onto the
domain in the past 30 days, or are disabled. These group memberships should be reviewed and possibly
removed.

## Analysis Tasks for the AAD_StaleGroups Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD_StaleGroups** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis tasks for AAD_StaleGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/stalegroupsanalysis.webp)

The default analysis tasks are:

- Stale Group Details – Creates the AAD_StaleGroups_Details table accessible under the job’s Results
  node
- Group Summary – Creates the AAD_StaleGroups_GroupSummary table accessible under the job’s Results
  node
- Stale Groups Org Summary – Creates the AAD_StaleGroups_OrgSummary table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks, the AAD_StaleGroups Job produces the
following pre-configured report.

| Report                                    | Description                                                                                                                                                                    | Default Tags | Report Elements                                                                                                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Effective Membership (Stale Groups) | This report identifies groups with stale effective membership. A stale user is defined as someone who has not logged into the domain in over 30 days or is currently disabled. | None         | This report is comprised of three elements: - Chart – Displays group membership - Table – Provides group membership details - Tables – Provides stale groups organization summary |

# 1.Groups Job Group

The jobs in the 1.Groups group identify group conditions and areas of administrative concern within
Microsoft Entra ID, such as toxic group conditions or synchronization issues.

![1.Groups Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the 1.Groups Job Group are:

- [AAD_CircularNesting Job](/docs/accessanalyzer/11.6/solutions/entra-id/group-analysis.md)
  – Identifies circularly-nested groups within Microsoft Entra ID which can pose administrative and
  operational challenges with identifying effective access to resources
- [AAD_DuplicateGroups Job](/docs/accessanalyzer/11.6/solutions/entra-id/group-analysis.md)
  – Identifies duplicate groups within Microsoft Entra ID. Duplicate groups contain the same group
  membership as one another and are suitable candidates for cleanup
- [AAD_EmptyGroups Job](/docs/accessanalyzer/11.6/solutions/entra-id/group-analysis.md)
  – Identifies empty groups within Microsoft Entra ID which are suitable candidates for
  consolidation or cleanup
- [AAD_GroupDirSync Job](/docs/accessanalyzer/11.6/solutions/entra-id/group-analysis.md)
  – Summarizes on-premises Active Directory syncing in the audited Microsoft Entra ID environment
- [AAD_LargestGroups Job](/docs/accessanalyzer/11.6/solutions/entra-id/group-analysis.md)
  – Identifies groups with large effective member counts. These types of groups may cause
  administrative overhead and burden in being able to easily understand who is getting access to
  resources, or how much access is being granted to resources through these groups.
- [AAD_NestedGroups Job](/docs/accessanalyzer/11.6/solutions/entra-id/group-analysis.md)
  – Identifies nested groups within Microsoft Entra ID and provides details such as the levels of
  nesting. While Microsoft Entra ID provides the ability to nest certain types of groups within
  other groups, Microsoft recommends nesting does not go beyond two levels in order to avoid
  difficulties in understanding effective membership and access.
- [AAD_ProbableOwners Job](/docs/accessanalyzer/11.6/solutions/entra-id/group-analysis.md)
  – Determines potential owners for Microsoft Entra ID Groups which can be used to perform automated
  membership reviews and enable self-service group management and membership requests
- [AAD_StaleGroups Job](/docs/accessanalyzer/11.6/solutions/entra-id/group-analysis.md)–
  Identifies Microsoft Entra ID groups that contain potentially stale users. Users are considered
  stale if they have never logged onto the domain, have not logged onto the domain in the past 30
  days, or are disabled. These group memberships should be reviewed and possibly removed.

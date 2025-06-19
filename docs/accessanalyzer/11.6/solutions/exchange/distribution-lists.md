# EX_DLCleanup Job

The EX_DLCleanup job identifies potentially stale Distribution Groups based on the last domain logon
of the members, membership counts, and last time mail was sent to the distribution lists. These DLs
should be reviewed and cleaned up.

## Analysis Tasks for the EX_DLCleanup Job

View the analysis task by navigating to the **Exchange** > **6. Distribution Lists** >
**EX_DLCleanup** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the EX_DLCleanup Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/dlcleanupanalysis.webp)

The following analysis task is selected by default:

- 1. DL Cleanup – Creates the SA_EX_GroupCleanup_GroupSummary table, accessible under the job’s
     Results node

In addition to the tables and views created by the analysis task, the EX_DLCleanup job produces the
following pre-configured report:

| Report                                                 | Description                                                                               | Default Tags | Report Elements                                                                          |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------- |
| Distribution List Cleanup (Distribution List Overview) | This report identifies common issues which may affect distribution list group membership. | None         | This report is comprised of one element: - Table – Provides a distribution list overview |

# Effective Membership > EX_GroupExpansion Job

The EX_GroupExpansion job expands the direct membership of distribution groups in the environment.

![Effective Membership > EX_GroupExpansion Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/effectivemembershipjobstree.webp)

The EX_GroupExpansion job is located in the Effective Membership job group.

## Analysis Tasks for the EX_GroupExpansion Job

View the analysis tasks by navigating to the **Exchange** > **6. Distribution Lists** > **Effective
Membership** > **EX_GroupExpansion** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_GroupExpansion Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/groupexpansionanalysis.webp)

The following analysis tasks are selected by default:

- Drop Tables – Drops all previously-created tables and creates the group expansion function
- 1a. Expand Distribution Groups – Expands the distribution group’s direct members
- 2. Create Group Membership View – Creates an interim processing table in the database for use by
     downstream analysis and report generation

# EX_CircularNesting Job

The EX_CircularNesting job identifies where circular nesting exists within distribution groups.

## Analysis Tasks for the EX_CircularNesting Job

View the analysis tasks by navigating to the **Exchange** > **6. Distribution Lists** > **Membership
Analysis** > **EX_CircularNesting** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_CircularNesting Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/circularnestinganalysis.webp)

The following analysis tasks are selected by default:

- 1. Circular Nesting Details – Creates the SA_EX_CircularNesting_Details table, accessible under
     the job’s Results node
- 2. Domain Summary – Creates the SA_EX_CircularNesting_DomainSummary table, accessible under the
     job’s Results node

# EX_EmptyGroups Job

The EX_EmptyGroups job identifies empty distribution groups that are candidates for cleanup.

## Analysis Tasks for the EX_EmptyGroups Job

View the analysis tasks by navigating to the **Exchange** > **6. Distribution Lists** > **Membership
Analysis** > **EX_EmptyGroups** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_EmptyGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/emptygroupsanalysis.webp)

The following analysis tasks are selected by default:

- 0. Drop tables – Drops tables from previous runs
- 1. Empty Groups – Creates the SA_EX_EmptyGroups_Empty table, accessible under the job’s Results
     node
- 2. Single User Groups – Creates the SA_EX_EmptyGroups_SingleUser table, accessible under the
     job’s Results node
- 3. Summarize Empty Groups – Creates the SA_EX_EmptyGroups_EmptySummary table, accessible under
     the job’s Results node
- 4. Summarize Single User Groups – Creates the SA_EX_EmptyGroups_SingleUserSummary table,
     accessible under the job’s Results node

# EX_LargestGroups Job

The EX_LargestGroups job identifies distribution groups with a high member count.

## Analysis Tasks for the EX_LargestGroups Job

View the analysis task by navigating to the **Exchange** > **6. Distribution Lists** > **Membership
Analysis** > **EX_LargestGroups** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the EX_LargestGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/largestgroupsanalysis.webp)

The following analysis task is selected by default:

- 1. Group Details – Creates the SA_EX_LargestGroups_Details table, accessible under the job’s
     Results node

# EX_NestedGroups Job

The EX_NestedGroups job identifies where nesting exists within distribution groups.

## Analysis Tasks for the EX_NestedGroups Job

View the analysis tasks by navigating to the **Exchange** > **6. Distribution Lists** > **Membership
Analysis** > **EX_NestedGroups** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_NestedGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/nestedgroupsanalysis.webp)

The following analysis tasks are selected by default:

- 1. Details – Creates the SA_EX_NestedGroups_Details table, accessible under the job’s Results
     node
- 2. Summarize by Domain – Creates the SA_EX_NestedGroups_DomainSummary table, accessible under
     the job’s Results node

# EX_StaleGroups Job

The EX_StaleGroups job identifies potentially stale distribution groups based on the last domain
logon of the members. These groups should be reviewed and cleaned up.

## Analysis Tasks for the EX_StaleGroups Job

View the analysis tasks by navigating to the **Exchange** > **6. Distribution Lists** > **Membership
Analysis** > **EX_StaleGroups** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_StaleGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/stalegroupsanalysis.webp)

The following analysis tasks are selected by default:

- 1. Stale User Details – Creates the SA_EX_StaleGroups_Details table, accessible under the job’s
     Results node
- 2. Group Summary – Creates the SA_EX_StaleGroups_GroupSummary table, accessible under the job’s
     Results node
- 3. Stale Groups – Creates an interim processing table in the database, for use by downstream
     analysis and report generations

# Membership Analysis Job Group

The Membership Analysis job group provides visibility into toxic conditions contained with the
environment, such as circular nesting, large groups, empty groups, nesting, and potentially stale
groups.

![Membership Analysis Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/membershipanalysisjobstree.webp)

The jobs in the Membership Analysis job group are:

- [EX_CircularNesting Job](/docs/accessanalyzer/11.6/solutions/exchange/distribution-lists.md)
  – Identifies where circular nesting exists within distribution groups
- [EX_EmptyGroups Job](/docs/accessanalyzer/11.6/solutions/exchange/distribution-lists.md)
  – Identifies empty distribution groups that are candidates for cleanup
- [EX_LargestGroups Job](/docs/accessanalyzer/11.6/solutions/exchange/distribution-lists.md)
  – Identifies distribution groups with a high member count
- [EX_NestedGroups Job](/docs/accessanalyzer/11.6/solutions/exchange/distribution-lists.md)
  – Identifies where nesting exists within distribution groups
- [EX_StaleGroups Job](/docs/accessanalyzer/11.6/solutions/exchange/distribution-lists.md)
  – Identifies potentially stale distribution groups based on the last domain logon of the members.
  These groups should be reviewed and cleaned up.

# 6. Distribution Lists Job Group

The 6. Distribution Lists job group lists the direct and effective membership to distribution lists,
in addition to providing context around potentially stale distribution lists.

![6. Distribution Lists Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following comprise the 6. Distribution Lists job group:

**NOTE:** These jobs are compatible with the Office 365 environment.

- [Effective Membership > EX_GroupExpansion Job](/docs/accessanalyzer/11.6/solutions/exchange/distribution-lists.md)
  – Expands the direct membership of distribution groups in the environment
- [Membership Analysis Job Group](/docs/accessanalyzer/11.6/solutions/exchange/distribution-lists.md)
  – Provides visibility into toxic conditions contained with the environment, such as circular
  nesting, large groups, empty groups, nesting, and potentially stale groups
- [EX_DLCleanup Job](/docs/accessanalyzer/11.6/solutions/exchange/distribution-lists.md)
  – Identifies potentially stale distribution groups based on the last domain logon of the members,
  membership counts, and last time mail was sent to the distribution lists. These DLs should be
  reviewed and cleaned up.

# Recommended Configurations for the 6. Distribution Lists Job Group

Dependencies

The following job groups need to be successfully run:

- .Active Directory Inventory Job Group
- .Entra ID Inventory Job Group
- (Optional) Exchange > 1. HUB Metrics Job Group

  - Provides data on distribution list metrics for on-premise Exchange environments and the last
    time a distribution list received mail

- (Optional) Exchange > 8. Exchange Online > Mailflow Job Group

  - Provides data on distribution list metrics for Exchange Online environments and the last time
    a distribution list received mail

Schedule Frequency

This job group has been designed to run daily after the .Active Directory Inventory Job Group has
been run, to analyze distribution list membership. This job group does not collect data. It uses the
data collection from the .Active Directory Inventory Job Group.

**_RECOMMENDED:_** Run this job group at 5:00 AM.

Workflow

**Step 1 –** Schedule the 6. Distribution Lists job group to run daily after the .Active Directory
Inventory job group has successfully run.

**Step 2 –** Review the reports generated by the jobs.

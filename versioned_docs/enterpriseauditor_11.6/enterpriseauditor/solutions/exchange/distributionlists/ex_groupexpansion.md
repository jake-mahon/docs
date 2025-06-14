# Effective Membership > EX\_GroupExpansion Job

The EX\_GroupExpansion job expands the direct membership of distribution groups in the environment.

![Effective Membership > EX_GroupExpansion Job in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/distributionlists/effectivemembershipjobstree.png)

The EX\_GroupExpansion job is located in the Effective Membership job group.

## Analysis Tasks for the EX\_GroupExpansion Job

View the analysis tasks by navigating to the __Exchange__ > __6. Distribution Lists__ > __Effective Membership__ > __EX\_GroupExpansion__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the EX_GroupExpansion Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/distributionlists/groupexpansionanalysis.png)

The following analysis tasks are selected by default:

- Drop Tables – Drops all previously-created tables and creates the group expansion function
- 1a. Expand Distribution Groups – Expands the distribution group’s direct members
- 2. Create Group Membership View – Creates an interim processing table in the database for use by downstream analysis and report generation

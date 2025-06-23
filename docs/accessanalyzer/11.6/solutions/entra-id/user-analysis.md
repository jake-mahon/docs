# AAD_DirectMembership Job

The AAD_DirectMembership Job identifies Microsoft Entra ID users who do not have any group
membership. This condition may indicate unnecessary user accounts that are suitable candidates for
review and cleanup.

## Analysis Tasks for the AAD_DirectMembership Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD_DirectMembership** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AAD_DirectMembership Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/directmembershipanalysis.webp)

The default analysis tasks are:

- Get user direct membership details – Creates the AAD_DirectMembership_Details table accessible
  under the job’s Results node
- Summarize user direct membership details by domain – Creates the
  AAD_DirectoryMembership_DomainSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_DirectMembership Job produces the
following pre-configured report.

| Report              | Description                                            | Default Tags | Report Elements                                                                                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No Group Membership | This report identifies users with no group membership. | None         | This report is comprised of three elements: - Bar Chart – Displays top domains by users with no group membership - Table – Provides details on all users with no group membership - Tables – Provides details on top domains by users with no group membership |

# AAD_DisabledUsers Job

The AAD_DisabledUsers Job identifies disabled user accounts within Microsoft Entra ID. These
accounts should be reviewed and cleaned up in order to increase security and reduce complexity.

## Analysis Tasks for the AAD_DisabledUsers Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD_DisabledUsers** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AAD_DisabledUsers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/entraid/users/disabledusersanalysis.webp)

The default analysis tasks are:

- Get disabled user account information – Creates the AAD_DisabledUsers_Details table accessible
  under the job’s Results node
- Summarize disabled user information – Creates the AAD_DisabledUsers_Summary table accessible under
  the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_DisabledUsers Job produces the
following pre-configured report.

| Report                 | Description                                                                  | Default Tags | Report Elements                                                                                                                                                                             |
| ---------------------- | ---------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Disabled User Accounts | This report identifies disabled user accounts and summarizes them by domain. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays disabled users by domain - Table – Provides user details - Tables – Provides details on disabled users by domain |

# AAD_StaleUsers Job

The AAD_StaleUsers Job identifies potentially stale users based on a variety of factors. These
accounts should be reviewed and cleaned up in order to increase security and reduce complexity.

## Analysis Tasks for the AAD_StaleUsers Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD_StaleUsers** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AAD_StaleUsers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/staleusersanalysis.webp)

The default analysis tasks are:

- Stale User Details – Creates the AAD_StaleUsers_Details table accessible under the job’s Results
  node
- Summarize by Domain – Creates the AAD_StaleUsers_DomainSummary table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks, the AAD_StaleUsers Job produces the
following pre-configured report.

| Report      | Description                                                                                                                                                                                                                             | Default Tags | Report Elements                                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Users | This report identifies user accounts which have not logged into the domain for an extended amount of time or are currently disabled. A user account is considered stale if the last logon is over 30 days ago or is currently disabled. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays users by domain - Table – Provides details on users - Tables – Provides details on users by domain |

# AAD_UserAttributeCompletion Job

The AAD_UserAttributeCompletion Job identifies which attributes are present within User fields in
Microsoft Entra ID, and which ones are blank for a majority of objects. This may indicate accounts
within Microsoft Entra ID which are lacking appropriate information.

## Analysis Tasks for the AAD_UserAttributeCompletion Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD_UserAttributeCompletion** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AAD_UserAttributeCompletion Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/userattributecompletionanalysis.webp)

The default analysis tasks are:

- Gets details on user attribute completion, by attribute – Creates the
  AAD_UserAttributeCompletion_AttributeDetails table accessible under the job’s Results node
- Gets details on user attribute completion, by user – Creates the
  AAD_UserAttributeCompletion_UserDetails table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_UserAttributeCompletion Job
produces the following pre-configured report.

| Report                    | Description                                                                                                                                            | Default Tags | Report Elements                                                                                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Attribute Completion | This report identifies which attributes are present within User fields in Microsoft Entra ID, and which ones are blank for a majority of User objects. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays completeness by attribute - Table – Provides details on users with blank attributes - Tables – Provides details om completeness by attribute |

# AAD_UserDirSync Job

The AAD_UserDirSync Job summarizes on-premises Active Directory syncing in the audited Microsoft
Entra ID environment.

## Analysis Tasks for the AAD_UserDirSync Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD_UserDirSync** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AAD_UserDirSync Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/entraid/users/userdirsyncanalysis.webp)

The default analysis tasks are:

- Get user DirSync details – Creates the AAD_UserDirSync_Details table accessible under the job’s
  Results node
- Summarize user DirSync details – Creates the AAD_UserDirSync_EnterpriseSummary table accessible
  under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_UserDirSync Job produces the
following pre-configured report.

| Report       | Description                                                                            | Default Tags | Report Elements                                                                                                                               |
| ------------ | -------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| User Syncing | This report indicates the sync status of user accounts within the audited environment. | None         | This report is comprised of two elements: - Bar Chart – Displays enterprise user synchronization summary - Table – Provides user sync details |

# 2.Users Job Group

The jobs in the 2.Users group identify user conditions and pinpoint potential areas of
administrative concerns within Microsoft Entra ID such as disabled or stale users.

![2.Users Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the 2.Users Job Group are:

- [AAD_DirectMembership Job](/docs/accessanalyzer/11.6/solutions/entra-id/user-analysis.md)
  – Identifies Microsoft Entra ID users who do not have any group membership. This condition may
  indicate unnecessary user accounts that are suitable candidates for review and cleanup.
- [AAD_DisabledUsers Job](/docs/accessanalyzer/11.6/solutions/entra-id/user-analysis.md)
  – Identifies disabled user accounts within Microsoft Entra ID. These accounts should be reviewed
  and cleaned up in order to increase security and reduce complexity.
- [AAD_StaleUsers Job](/docs/accessanalyzer/11.6/solutions/entra-id/user-analysis.md)–
  Identifies potentially stale users based on a variety of factors. These accounts should be
  reviewed and cleaned up in order to increase security and reduce complexity.
- [AAD_UserAttributeCompletion Job](/docs/accessanalyzer/11.6/solutions/entra-id/user-analysis.md)–
  Identifies which attributes are present within User fields in Microsoft Entra ID, and which ones
  are blank for a majority of objects. This may indicate accounts within Microsoft Entra ID which
  are lacking appropriate information.
- [AAD_UserDirSync Job](/docs/accessanalyzer/11.6/solutions/entra-id/user-analysis.md)
  – Summarizes on-premises Active Directory syncing in the audited Microsoft Entra ID environment

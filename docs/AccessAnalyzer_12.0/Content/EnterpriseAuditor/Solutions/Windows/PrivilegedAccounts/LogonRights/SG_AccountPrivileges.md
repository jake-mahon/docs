---
sidebar_position: 5083
title: SG_AccountPrivileges Job
---

# SG\_AccountPrivileges Job

The SG\_AccountPrivileges job identifies accounts privileges on hosts in the targeted environment.

Targeted Hosts

All Windows Hosts

## Queries for the SG\_AccountPrivileges Job

The SG\_AccountPrivileges job uses the PowerShell Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the SG_AccountPrivileges Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/LogonRights/AccountPrivilegesQuery.png "Queries for the SG_AccountPrivileges Job")

The query for the SG\_AccountPrivileges job is:

* Account Privilege Check – Determines account privileges on local hosts

## Analysis Tasks for the SG\_AccountPrivileges Job

Navigate to the **Windows** > **Privileged Accounts** > **Logon Rights** > **SG\_AccountPrivileges** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SG_AccountPrivileges Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/LogonRights/AccountPrivilegesAnalysis.png "Analysis Tasks for the SG_AccountPrivileges Job")

The default analysis task is:

* List all assigned privileges – Creates the SA\_SG\_AccountPrivileges\_Details table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the SG\_AccountPrivileges job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Account Privilege Details | This report highlights account privileges on hosts in the targeted environment. Default privileges present on all Windows hosts have been filtered. | None | This report is comprised of one element:   * Table – Provides account privilege details |
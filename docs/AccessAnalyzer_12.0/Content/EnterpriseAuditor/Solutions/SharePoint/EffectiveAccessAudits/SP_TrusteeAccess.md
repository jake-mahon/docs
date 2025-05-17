---
sidebar_position: 5153
title: Scoping > SP_TrusteeAccess Job
---

# Scoping > SP\_TrusteeAccess Job

The SP\_TrusteeAccess job allows you to scope a list of users to audit their access across the SharePoint environment. You can also accomplish this by looking users up in the Access Information Center, however you want to utilize this job in scenarios where you want to generate a report on multiple users’ effective access at once.

**NOTE:** Trustees can be specified in the `UserScoping.csv` file for the SP\_TrusteeAccess Job. See the [Configure CSV File for the Query for the SP\_TrusteeAccess Job](#_Configure_CSV_File "Configure CSV File for the Query for the SP_TrusteeAccess Job") topic for additional information.

![Scoping > SP_TrusteeAccess Job in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/EffectiveAccessAudits/ScopingJobsTree.png "Scoping > SP_TrusteeAccess Job in the Jobs Tree")

The SP\_TrusteeAccess job is located in the Scoping Job Group.

## Queries for the SP\_TrusteeAccess Job

The SP\_TrusteeAccess Job uses the TextSearch Data Collector for the following query:

![Queries for the SP_TrusteeAccess Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/EffectiveAccessAudits/TrusteeAccessQuery.png "Queries for the SP_TrusteeAccess Job")

The default query is:

* Scoping – Modifies the CSV in the Job Directory. See the [Configure CSV File for the Query for the SP\_TrusteeAccess Job](#_Configure_CSV_File "Configure CSV File for the Query for the SP_TrusteeAccess Job") topic for additional information.

### Configure CSV File for the Query for the SP\_TrusteeAccess Job

Follow the steps to specify trustees in the `UserScoping.csv` file.

**Step 1 –** Navigate to the **Jobs** > **SharePoint** > **Effective Access Audits** > **Scoping** > **SP\_TrusteeAccess** Job and right-click on the job. Select **Explore Folder** and the job’s directory opens.

![UserScoping.csv in the SP_TrusteeAccess Job folder in File Explorer](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/EffectiveAccessAudits/UserScopingFileExplorer.png "UserScoping.csv in the SP_TrusteeAccess Job folder in File Explorer")

**Step 2 –** Open the `UserScoping.csv` file with a text editor, for example Notepad.

![UserScoping.csv file in Notepad](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/EffectiveAccessAudits/UserScopingNotepad.png "UserScoping.csv file in Notepad")

**Step 3 –** Enter the trustees using a `Domain\UserName` format. Enter one trustee per row.

**Step 4 –** Save and close the file.

The SP\_TrusteeAccess Job is now ready to import this list of trustees to scope the Effective Access Audits Job Group. After job execution, the list of specified trustees will populate the Scope table accessible under the job’s Results node.
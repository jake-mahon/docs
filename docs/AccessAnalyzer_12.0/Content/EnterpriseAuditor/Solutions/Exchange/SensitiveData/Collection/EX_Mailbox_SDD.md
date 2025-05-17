---
sidebar_position: 5611
title: EX_Mailbox_SDD Job
---

# EX\_Mailbox\_SDD Job

The EX\_Mailbox\_SDD job locates sensitive data found in mailboxes in the Exchange environment.

## Queries for the EX\_Mailbox\_SDD Job

The EX\_Mailbox\_SDD job uses the EWSMailbox Data Collector.

![Queries for the EX_Mailbox_SDD Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/SensitiveData/MailboxSDDQuery.png "Queries for the EX_Mailbox_SDD Job")

The following query is included in the EX\_Mailbox\_SDD job:

* Exchange Sensitive Data Discovery – Collects potentially-sensitive data from mailboxes

  * Set to search all mailboxes. It can be scoped.
  * Default sensitive data criteria includes:

    * Birth Records
    * Credit Cards
    * Passwords
    * Tax Forms
    * US SSN
* See the [Configure the EWSMailbox Data Collector for the EX\_Mailbox\_SDD Job](#_EWSMailbox_Data_Collector "Configure the EWSMailbox Data Collector for the EX_Mailbox_SDD Job") topic for additional information

### Configure the EWSMailbox Data Collector for the EX\_Mailbox\_SDD Job

The Exchange Sensitive Data Discovery query has been preconfigured to run with the EWSMailbox Data Collector to scan for sensitive data.

Follow the steps to configure the scope of the EWSMailbox Data Collector:

**Step 1 –** Navigate to the **Exchange** > **7. Sensitive Data** > **0. Collection** > **EX\_Mailbox\_SDD** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select the **Exchange Sensitive Data Discovery** query and click **Query Properties**. The Query Properties window opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The EWS Mailbox Data Collector Wizard opens.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for the purpose of this job.

![EWS Mailbox Data Collector Wizard Mailbox scope settings page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/SensitiveData/DCWizard/MailboxScopeSettings.png "EWS Mailbox Data Collector Wizard Mailbox scope settings page")

**Step 4 –** To scope the query for specific mailboxes, navigate to the Scope page. The query is configured by default to target **All mailboxes**. Change the Mailboxes to be queried to **Select mailboxes from list**. See the [EWSMailbox: Scope](../../../../Admin/DataCollector/EWSMailbox/Scope "EWSMailbox: Scope") topic for additional information.

![EWS Mailbox Data Collector Wizard Scope select page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/SensitiveData/DCWizard/MailboxScopeSelect.png "EWS Mailbox Data Collector Wizard Scope select page")

**Step 5 –** To retrieve available mailboxes, click **Retrieve** on the Scope Select page. Select the desired mailboxes and click **Add**. See the [EWSMailbox: Scope Select](../../../../Admin/DataCollector/EWSMailbox/ScopeSelect "EWSMailbox: Scope Select") topic for additional information.

![EWS Mailbox Data Collector Wizard SDD Options page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/EWSMailbox/SDDOptions.png "EWS Mailbox Data Collector Wizard SDD Options page")

**Step 6 –**  To enable storage of discovered sensitive data, navigate to the SDD Options page. Sensitive data matches can be limited to reduce storage space. See the [EWSMailbox: SDD Options](../../../../Admin/DataCollector/EWSMailbox/SDDOptions "EWSMailbox: SDD Options") topic for additional information.

**NOTE:** By default, discovered sensitive data strings are not stored in the Access Analyzer database.

![EWS Mailbox Data Collector Wizard Criteria page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/EWSMailbox/Criteria.png "EWS Mailbox Data Collector Wizard Criteria page")

**Step 7 –** To modify criteria, navigate to the Criteria page. Add or remove criteria as desired. See the [EWSMailbox: Criteria](../../../../Admin/DataCollector/EWSMailbox/Criteria "EWSMailbox: Criteria") topic for additional information.

* (Optional) To create custom criteria, see the [Sensitive Data Criteria Editor](../../../../SensitiveDataDiscovery/CriteriaEditor/Overview "Sensitive Data Criteria Editor") topic for additional information

![EWS Mailbox Data Collector Wizard Filter page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/SensitiveData/DCWizard/MailboxFilterSettings.png "EWS Mailbox Data Collector Wizard Filter page")

**Step 8 –** To filter the scan to specific mailbox folders, navigate to the Filter page. Include or exclude folders and attachments as desired. See the [EWSMailbox Data Collector](../../../../Admin/DataCollector/EWSMailbox/Overview#EWSMailbox_Filter "Navigates to the EWSMailbox: Filter section") topic for additional information.

* To modify the threshold for message size, set the **Limit message size to** value as desired. The default is 2000 KB.
* To modify the threshold for large attachment size, set the **Limit attachment size to** value as desired. The default is 2000 KB.

![EWS Mailbox Data Collector Wizard Results page](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/SensitiveData/DCWizard/MailboxResults.png "EWS Mailbox Data Collector Wizard Results page")

**Step 9 –** Navigate to the Results page to select which properties are gathered based on category. See the [EWSMailbox: Results](../../../../Admin/DataCollector/EWSMailbox/Results "EWSMailbox: Results") topic for additional information.

**NOTE:** By default, all categories are selected under sensitive data.

**Step 10 –** Navigate to the Summary page, click **Finish** to save any setting modifications or click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window

The job now applies the modification to future job executions.

## Analysis Tasks for the EX\_Mailbox\_SDD Job

View the analysis task by navigating to the **Exchange** > **7.Sensitive Data** > **EX\_Mailbox\_SDD** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the EX_Mailbox_SDD Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/SensitiveData/MailboxSDDAnalysis.png "Analysis Tasks for the EX_Mailbox_SDD Job")

The following analysis task is selected by default:

* AIC Import - Exchange SSD – Imports Exchange sensitive data to the Access Information Center
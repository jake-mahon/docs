---
sidebar_position: 5133
title: 1-Dropbox_SDD Scan Job
---

# 1-Dropbox\_SDD Scan Job

The 1-Dropbox\_SDD Scan job collects data from the Dropbox environment on access rights, sharing policies, configurations, content and sensitive data.

## Queries for the 1-Dropbox\_SDD Scan Job

The 1-Dropbox\_SDD Scan job has been preconfigured to run under the default settings within the category of Scan for Sensitive Content.

![Queries for the 1-Dropbox_SDD Scan Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Dropbox/Collection/SDDScanQuery.png "Queries for the 1-Dropbox_SDD Scan Job")

The query for the 1-Dropbox\_SDD Scan job is:

* Sensitive Data Scan – Scans Dropbox for sensitive data

### Configure the Sensitive Data Scan Query

Follow the steps to either generate the access token needed for the Connection Profile (only done prior to first execution) or to set any desired customizations.

**Step 1 –** Navigate to the **Jobs** > **Dropbox** > **0.Collection** > **1-Dropbox\_SDD Scan** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, click **Query Properties** to open the Query Properties window.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The Dropbox Access Auditor Data Collector Wizard opens.

![Dropbox Access Auditor Data Collector Wizard Scoping page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Dropbox/Collection/SDDScopingPage.png "Dropbox Access Auditor Data Collector Wizard Scoping page")

**Step 4 –** On the Scoping page, select whether to scan **All Users** or **Limited Users**. If **Limited Users** is selected, browse to a CSV file with one email address per row for the desired users. In the File Permissions section, select the **Collect File Level Permissions** checkbox to collect permissions at the file level. See the [DropboxAccess: Scoping](../../../Admin/DataCollector/DropboxAccess/Scoping "DropboxAccess: Scoping") topic for additional information.

![Dropbox Access Auditor Data Collector Wizard DLP Audit Settings page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Dropbox/Collection/SDDDLPSettings.png "Dropbox Access Auditor Data Collector Wizard DLP Audit Settings page")

**Step 5 –** On theDLP Audit Settings page:

* Modify the maximum file size to be scanned
* Modify file types to be scanned
* Enable storing of discovered match hits
* Enable differential scanning

See the [DropboxAccess: DLP Audit Settings](../../../Admin/DataCollector/DropboxAccess/DLPAuditSettings "DropboxAccess: DLP Audit Settings") topic for additional information.

![Dropbox Access Auditor Data Collector Wizard Select DLP criteria page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Dropbox/Collection/SDDSelectDLPCriteria.png "Dropbox Access Auditor Data Collector Wizard Select DLP criteria page")

**Step 6 –** On the Select DLP Criteria for This Scan page , add or remove criteria as desired.

* (Optional) Create custom criteria with the **Edit** option. See the [Sensitive Data Criteria Editor](../../../SensitiveDataDiscovery/CriteriaEditor/Overview "Sensitive Data Criteria Editor") topic for additional information.

See the [DropboxAccess: Select DLP Criteria](../../../Admin/DataCollector/DropboxAccess/SelectDLPCriteria "DropboxAccess: Select DLP Criteria") topic for additional information.

**Step 7 –** On the Completion Page, click **Finish** to save any setting modifications or click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

If changes were made, the 1-Dropbox\_SDD Scan job has now been customized.
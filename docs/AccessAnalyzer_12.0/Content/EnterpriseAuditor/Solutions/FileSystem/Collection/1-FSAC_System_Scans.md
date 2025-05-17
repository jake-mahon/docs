---
sidebar_position: 5212
title: 1-FSAC System Scans Job
---

# 1-FSAC System Scans Job

The 1-FSAC System Scans job is designed to collect activity events from the targeted file servers.

## Query for the 1-FSAC System Scans Job

The Activity Scan query uses the FSAA Data Collector and has been preconfigured to use the File system activity Scan category.

![Query for the 1-FSAC System Scans Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Collection/FSACSystemScansQuery.png "Query for the 1-FSAC System Scans Job")

* Activity Scan – Scans for File System Activity

The following default configurations are commonly customized:

* Scan Server Selection page:

  * Set to **Local Server**, or local mode scans
* Activity Settings page:

  * Set scan filter for detailed activity **60** days
  * Set filter for statistics of activity **120** days

See the [Recommended Configuration for the File System Solution](../Recommended "Recommended Configuration for the File System Solution") topic for a complete list of customizable settings. See the [Configure the Activity Scan Query](#_Configure_the_Activity_Scan-Query_for1-FSAC_System_Scans "Configure the Activity Scan Query") topic for instructions.

### Configure the Activity Scan Query

The 1-FSAC System Scans job has been preconfigured to run with the default settings with the category of File system activity Scan. Follow the steps to set any desired customizations.

**Step 1 –** Navigate to the **FileSystem** > **0.Collection** > **1-FSAC System Scans** > **Configure** node and select the **Queries** node.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The File System Access Auditor Data Collector Wizard opens.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for the purpose of this job.

![Applet Settings](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Collection/FSACAppletSettings.png "Applet Settings")

**Step 4 –** The Applet Settings page applies to the applet and proxy mode scans which are selected on the Scan Server Level Page. If employing proxy servers, see the [FSAA: Applet Settings](../../../Admin/DataCollector/FSAA/AppletSettings "FSAA: Applet Settings") topic for configuration instructions.

![Scan Server Selection](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Collection/FSACScanServerSelection.png "Scan Server Selection")

**Step 5 –** The Scan Server Selection page applies to the applet and proxy mode scans. Remember, each mode has different provisioning requirements. See the [FSAA: Scan Server Selection](../../../Admin/DataCollector/FSAA/ScanServerSelection "FSAA: Scan Server Selection") topic for additional information.

![Activity Settings](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/FileSystem/Collection/FSACActivitySettings.png "Activity Settings")

**Step 6 –** On the Activity Settings page:

* Modify the number of days detailed activity is kept
* Modify the number of days activity statistics are kept
* Modify log parsing limits

See the [FSAA: Activity Settings](../../../Admin/DataCollector/FSAA/ActivitySettings "FSAA: Activity Settings") topic for additional information.

**Step 7 –** Click **Finish** to save any setting modifications or click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

If changes were made, the 1-FSAC System Scans job is now customized.
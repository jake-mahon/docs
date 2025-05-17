---
sidebar_position: 4999
title: 1-AAD_Scan Job
---

# 1-AAD\_Scan Job

The **1-AAD\_Scan** job is responsible for collecting data from Microsoft Entra ID. This job requires no additional customizations before being used, but can be scoped to disable collecting sign-in activity with the scan.

**NOTE:**  This job requires an Microsoft Entra ID application with the appropriate permissions to perform the scan. See the [Microsoft Entra ID Tenant Target Requirements](../../../Config/EntraID/Overview "Microsoft Entra ID Tenant Target Requirements") topic for information on the prerequisites for this job.

## Queries for the 1-AAD\_Scan Job

The 1-AAD\_Scan job uses the AzureADInventory and Entra Data Collectors for the following queries:

![Query Selection page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraIDInventory/ScanQuerySelection.png "Query Selection page")

* AAD Inventory – Targets Microsoft Entra tenants to collect inventory data for user group objects

  * *(Optional)* This query can be modified to specify scan options and to collect custom attributes. See the [Configure the AAD\_Inventory Query](#Configure_the_1-AAD_Scan "Configure the AAD Inventory Query") topic for additional information.
* Entra – Collects Entra roles details from the target Microsoft Entra tenants

### Configure the AAD\_Inventory Query

The 1-AAD\_Scan job is configured to run with the default settings with the category of Scan Entra ID. Follow the steps to customize configurations.

**Step 1 –** Navigate to the **.Entra ID Inventory** > **1-AAD\_Scan** > **Configure** node and select **Queries**.

![Query Properties button on Query Selection page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraIDInventory/ScanQuerySelectionProperties.png "Query Properties button on Query Selection page")

**Step 2 –** In the Query Selection view, click on **Query Properties** to open the Query Properties window.

![Query Properties window](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraIDInventory/ScanQueryProperties.png "Query Properties window")

**Step 3 –** Select the **Data Source** tab, and click **Configure** to open the Entra ID Inventory DC Wizard.

![Entra ID Inventory DC Wizard Options page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraIDInventory/ScanDCWizardOptions.png "Entra ID Inventory DC Wizard Options page")

**Step 4 –** On the Options page, select the different Scan Options as needed:

* Collect only updates since the last scan – Enables differential scanning.

  **NOTE:** Enabling the Collect Open Extensions option on the Custom Attributes page overrides this function.
* Collect sign-in activity with scan – Required to collect the LastLogonTimestamp attribute of user objects. A message will alert users that deselecting this option will disable this function.
* Collect Directory Audit Events – Collect Microsoft Entra ID audit logs

![Entra ID Inventory DC Wizard Custom Attributes page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraIDInventory/ScanDCWizardCustomAttributes.png "Entra ID Inventory DC Wizard Custom Attributes page")

**Step 5 –** On the Custom Attributes page, click **Add** or **Import** to add or import custom attributes.

* Select **Collect Open Extensions** to enable the data collector to collect all extension attributes in Microsoft Entra ID. Enabling this option will increase scan times.

  **NOTE:** Enabling this option overrides the differential scan setting and will direct the data controller to run a full scan every time the job is run.
* See the [AzureADInventory Data Collector](../../Admin/DataCollector/AzureADInventory/Overview "AzureADInventory Data Collector") topic for additional information on adding and importing custom attributes.

**Step 6 –** Navigate to the Summary page. Click **Finish** to save changes or click **Cancel** to exit without saving. Then click **OK** to close the Query Properties window.

The 1-AAD\_Scan Job is now ready to run with the customized settings.

## Analysis Tasks for the 1-AAD\_Scan Job

Navigate to the **.Entra ID Inventory** > **1-AAD\_Scan** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for 1-AAD_Scan Job](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraIDInventory/ScanAnalysisTasks.png "Analysis Tasks for 1-AAD_Scan Job")

The default analysis tasks are:

* Import functions – Imports effective group membership function into the database
* Create Extended Attributes View – Enables the SA\_AzureADInventory\_ExtendedAttributesPivotView to be accessible under the job’s Results node
* Bring Users View to Console – Enables the SA\_AzureADInventory\_UsersView to be accessible under the job’s Results node
* Bring Groups View to Console – Enables the SA\_AzureADInventory\_GroupsView to be accessible under the job’s Results node
* Bring Group Members View to Console – Enables the SA\_AzureADInventory\_GroupMemberssView to be accessible under the job’s Results node
* Summarize Domains – Creates interim processing tables in the database for use by downstream analysis and report generation
* Summarize Stats – Creates interim processing tables in the database for use by downstream analysis and report generation

In addition to the tables and views listed in the [Standard Reference Tables & Views for the AzureADInventory Data Collector](../../Admin/DataCollector/AzureADInventory/StandardTables "Standard Reference Tables & Views for the AzureADInventory Data Collector") topic, the 1-AAD\_Scan job produces the following preconfigured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Entra ID Summary | This report provides a summary of all audited domains and objects. | None | This report has two elements:   * Table – Provides details on general statistics on the Users and groups found with each tenant scanned * Table – Provides details on statistical information for each of these Entra ID objects |
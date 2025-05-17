---
sidebar_position: 5000
title: 2-AAD_Exceptions Job
---

# 2-AAD\_Exceptions Job

The 2-AAD\_Exceptions Job identifies toxic conditions that exist within Microsoft Entra ID which may leave environments at risk or add unnecessary administrative overhead.

## Analysis Tasks for the 2-AAD\_Exceptions Job

Navigate to the **.Entra ID Inventory** > **2-AAD\_Exceptions** > **Configure** node and select **Analysis**. Analysis tasks with configuration parameters that define security concerns can be modified.

**CAUTION:** Most of these analysis tasks are preconfigured and should not be modified and not be deselected. There are a few which are deselected by default, as they are for troubleshooting purposes.

![Analysis Tasks for 2-AAD_Exceptions Job](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraIDInventory/ExceptionsAnalysisTasks.png "Analysis Tasks for 2-AAD_Exceptions Job")

The default analysis tasks are:

* Create Exception Type Table – Creates a processing table in the database for use by downstream analysis and report generation
* Large Groups
  * Identifies groups that exceed the defined threshold for effective group membership
  * Populates processing tables in the database for use by downstream analysis and report generation
  * This analysis task has configurable parameters
    * Definition of a larger group can be customized
* Deeply Nested Groups
  * Identifies groups that exceed the defined threshold of deep levels of membership nesting
  * Populates processing tables in the database for use by downstream analysis and report generation
  * This analysis task has configurable parameters
    * Definition of a deeply nested group can be customized
* Circular Nesting
  * Identifies groups with circular references in their effective membership
  * Populates processing tables in the database for use by downstream analysis and report generation
* Empty Groups
  * Identifies groups with no membership
  * Populates processing tables in the database for use by downstream analysis and report generation
* Single Member Groups
  * Identifies groups with a single direct member
  * Populates processing tables in the database for use by downstream analysis and report generation
* Stale Users
  * Identifies user accounts that are disabled or exceed the defined threshold of inactivity
  * Populates processing tables in the database for use by downstream analysis and report generation
  * This analysis task has configurable parameters
    * Definition of a stale user can be customized
* Stale Membership
  * Identifies groups with a high percentage of effective members that are stale users
  * Populates processing tables in the database for use by downstream analysis and report generation
  * This analysis task has configurable parameters
    * Definition of a stale membership can be customized
* Display Exceptions View – Creates the SA\_AzureADInventory\_ExceptionsView accessible under the job’s Results node

### Customize Analysis Parameters for the 2-AAD\_Exceptions Job

The default values for parameters that can be customized are:

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| Large Groups | @LARGE\_THRESHOLD | 1000 | A group object with 1000 members or more |
| Deeply Nested Groups | @NESTING\_THRESHOLD | 10 | A group object nested 10 levels or deeper within another group object |
| Stale Users | @STALE\_THRESHOLD | 30 | A user object that has been inactive for 30 days or more |
|  | @INCLUDE\_DISABLED | True | A user object that has been disabled |
| Stale Membership | @STALE\_THRESHOLD | 10 | A group where 10% of its effective members are stale users |

See the [Configure the Analysis Tasks for the 2-AAD\_Exceptions Job](#Configure_the_AnalysisTasks_2-AAD_ExceptionsJob "Configure the Analysis Tasks for the 2-AAD_Exceptions Job") section for instructions to modify parameters. See the [AzureADInventory Exception Types Translated](../../Admin/DataCollector/AzureADInventory/StandardTables#Entra "AzureADInventory Exception Types Translated") topic for an explanation of Exception Types.

### Configure the Analysis Tasks for the 2-AAD\_Exceptions Job

Customizable parameters enable Access Analyzer users to set the values used to classify user and group objects during this job’s analysis. The parameters can be customized and are listed in a section at the bottom of the SQL Script Editor. Follow the steps to customize an analysis task’s parameters.

**CAUTION:** Modifying these parameters affects solutions with .Entra ID Inventory Job Group dependency.

**Step 1 –** Navigate to the **.Entra ID Inventory** > **2-AAD\_Exceptions** > **Configure** node and select **Analysis**.

![Analysis Configuration option on Analysis Selection page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraIDInventory/ExceptionsAnalysisConfiguration.png "Analysis Configuration option on Analysis Selection page")

**Step 2 –** In the Analysis Selection view, select an analysis task and click **Analysis Configuration**. The SQL Script Editor opens.

**Step 3 –** Click Parameters to open the Parameters section.

![Change Parameter Value in SQL Script Editor](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraIDInventory/ExceptionsSQLScriptEditor.png "Change Parameter Value in SQL Script Editor")

**Step 4 –** Double-click in a field in the Value column and enter a custom value.

**CAUTION:** Do not change any parameters where the Value states **Created during execution**.

**Step 5 –** Click **Save and Close** to finalize the customization and close the SQL Script Editor.

Repeat these steps to customize other analysis tasks for this job.
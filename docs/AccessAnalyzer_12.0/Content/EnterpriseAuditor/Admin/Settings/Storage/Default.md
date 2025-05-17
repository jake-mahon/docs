---
sidebar_position: 5887
title: Set a Default Storage Profile
---

# Set a Default Storage Profile

While multiple Storage Profiles can exist, only one profile can be set as the default. A green checkmark next to the profile name indicates the default Storage Profile. Follow the steps to change the default Storage Profile at the global level.

![Set as Default option on Storage page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Storage/Default.png "Set as Default option on Storage page")

**Step 1 –** Select the profile to be the new default, and click **Set as default**. The Change storage profile window opens.

![Change storage profile window](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Storage/ChangeStorageProfile.png "Change storage profile window")

**Step 2 –** There are three options for host management data migration. Select the desired option, choose whether or not to apply the secondary option, and click **OK**.

* Merge your host management data with data in the destination table (Recommended) – This option keeps existing hosts and host discovery tasks in the destination and updates the tasks based on the information found in the source database

  * Use destination value on conflict – If selected, any conflicting information between the destination table and the source database is resolved in favor of the destination table
* Overwrite data in the destination table – This option replaces existing hosts and host discovery tasks with ones found in the source database

  * Also overwrite shared host inventory data – If selected, host inventory data is also replaced with data found in the source database
* Don’t copy your host management data to destination table – This option does not copy, update, or overwrite information between databases

  * Clear data in destination table – If selected, all host management data in the destination table is deleted

![Change storage profile window when transfer is complete](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Storage/ChangeStorageProfileFinish.png "Change storage profile window when transfer is complete")

**Step 3 –** When the host management data migration has completed, click **Finish**.

![Storage page with new default storage profile](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Storage/DefaultSave.png "Storage page with new default storage profile")

**Step 4 –** A blue arrow now points to the new default Storage Profile. However, the arrow is also an indication that the new default is not fully recognized by Access Analyzer. Click **Save** and then **OK** to confirm the changes.

**Step 5 –** Finally, to ensure these changes take effect, exit the Access Analyzer application and relaunch it.

The blue arrow is replaced by the green checkmark, indicating the new default Storage Profile is recognized.
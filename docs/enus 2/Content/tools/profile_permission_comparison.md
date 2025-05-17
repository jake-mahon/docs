---
sidebar_position: 2813
title: Profile Permission Comparison
---

# Profile Permission Comparison

The Profile / Permission Set Comparison enables you to efficiently clean up and secure your Orgs.

* *Clean Up Efficiency*: Identify inactive, unused, or excessive permissions, ensuring your Org is streamlined and efficient.
* *Enhanced Security*: Uncover potential security risks by identifying permission sets that grant access to more than intended, providing an added layer of protection for your organization.

Comparison tool features include:

* *Native Salesforce Components*: Enjoy a seamless experience within your Salesforce environment.
* *Compare up to three Profiles / Permission Sets*: Gain a comprehensive view of your Org's permissions.
* *Export Results to Excel*: Share and analyze comparison results.

:::note
Run the scanners before you perform comparisons to ensure you have the latest data.
:::

## System Permission Comparison

To perform a **System Permission** comparison:

1. Select **Tools** > **Permissions Comparison** from the Netwrix Dashboard page. Click the expansion indicator u to expand the **Comparison** panel. Make sure **System Permission** is selected.

   ![](../../../../static/images/enus 2/Content/Resources/Images/permission_comparison.png "Open the Profile / Permission Comparison")
2. Select at least two **Profile / Permission Sets**. For each item:

   * Enter part of the **Profile or Permission Set** name
   * Check the **View** box for the item to compare.

   ![](../../../../static/images/enus 2/Content/Resources/Images/permission_comparison_select.png "Select a Profile or Permission Set to compare")
3. Select the **System Permissions Category**: **All**, **API**, **Create**, **Edit**, **Manage**, **Modify**, **User**, or **View**.

   ![](../../../../static/images/enus 2/Content/Resources/Images/permission_comparison_display.png "System Permission Comparison")
4. Review the comparison. If the permissions are identical, you can research whether one or more can be removed.
5. Click **Export Data** to create an Excel file containing the comparison. The **StrongpointSystemPermissionsComparison (#).xlsx** file is saved to your default download directory.

## Object Permission Comparison

To perform an **Object Permission** comparison:

1. Select **Tools** > **Permissions Comparison** from the Netwrix Dashboard page. Click the expansion indicator u to expand the **Comparison** panel. Make sure **Object Permission** is selected.

   :::note
If you ran a System Permission comparison before switching to Object Permission, your selected items are used by default. You can select different items to compare.
   :::
2. Select at least two **Profile / Permission Sets**. For each item:

   * Enter part of the **Profile or Permission Set** name
   * Check the **View** box for the item to compare.

   ![](../../../../static/images/enus 2/Content/Resources/Images/permission_comparison_select.png "Select a Profile or Permission Set to compare")
3. Set the optional **Filter** for object permissions: **Create**, **Edit**, **Read**, **Delete**, **View All**, and **Modify All**. You can use the **Select All** and **Clear All** shortcuts to set the **Filter**.

   ![](../../../../static/images/enus 2/Content/Resources/Images/permission_comparison_display_object.png "Object Permission Comparison")
4. Review the comparison. If the permissions are identical, you can research whether one or more can be removed.
5. Click **Export Data** to create an Excel file containing the comparison. The **StrongpointObjectComparison (#).xlsx** file is saved to your default download directory.
---
sidebar_position: 7664
title: Create Microsoft Entra ID Groups
---

# Create Microsoft Entra ID Groups

Using Directory Manager portal, you can create static groups and Smart Groups in an Microsoft Entra ID identity store.

NOTE: If the Directory Manager administrator has specified the group creation action for review, the new group will be created after it is verified by an approver. See the [Requests](../../../Request/Overview "Requests - Overview") topic for additional information.

## Create a Static Group

Follow the steps to create a static group.

1. In the Directory Manager portal, click the **Create New** button in the left pane and select **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   NOTE: Pages and fields on the Create Group wizard may vary, since the administrator can customize the wizard by adding or removing tabs and fields.
2. On the [Group Type page](../GroupType "Create Group wizard - Group Type page"), select the **Static Group** option button and click **Next**.
3. On the [General page](General) – General page"), specify basic information about the group.
4. On the [Members page](../ActiveDirectory/Members "Create Group wizard – Members page"), add objects to group membership.

   Only user objects can be added as members of an Office 365 group.
5. On the [Owners page](../ActiveDirectory/Owners "Create Group wizard – Owners page"), specify primary and additional owners for the group.

   Only users can be set as primary owners. You can specify multiple primary owners for a group. At least one primary owner is mandatory.
6. On the [Summary Page](../../../User/Create/ActiveDirectory/Summary "Create User wizard – Summary page"), review the settings and then click Finish to complete the wizard.

## Create a Smart Group

Follow the steps to create a Smart Group.

1. In the Directory Manager portal, click the **Create New** button in the left pane and select **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   Remember, pages and fields on the Create Group wizard may vary, since the administrator can customize the wizard by adding or removing tabs and fields.
2. On the [Group Type page](../GroupType "Create Group wizard - Group Type page") page, select the **Smart Group** option button and click **Next**.
3. On the [General page](General) – General page") page, specify basic information about the group.
4. On the  [Smart Group page](../ActiveDirectory/SmartGroup "Create Group wizard – Smart Group page") page, review and modify the query for updating group membership.

   Smart Groups in an Microsoft Entra ID based identity store use a device structured query language to
   update group membership. You should either apply a query to a group in the Microsoft Entra ID portal or in Directory Manager.
5. On the [Owners page](../ActiveDirectory/Owners "Create Group wizard – Owners page"), specify primary and additional owners for the group.

   * Only users can be set as primary owners.
   * You can specify multiple primary owners for a group. At least one primary owner is mandatory.
   * When a Smart Group Update job runs on a group, the notification behavior is as follows:

     Even when the **Do not Notify** check box is selected, the additional owner will receive the notifications if the administrator has included its email address for job-specific notifications.
6. On the [Summary Page](../../../User/Create/ActiveDirectory/Summary "Create User wizard – Summary page"), review the settings and then click **Finish** to complete the wizard.
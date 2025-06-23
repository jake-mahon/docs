---
title: group
sidebar_label: group
description: Directory Manager 11.1 documentation for group with configuration details, usage instructions, and implementation guidance.
---

# Create Active Directory Groups

Using Directory Manager portal, you can create static groups and Smart Groups in an Active Directory
identity store.

NOTE: If the Directory Manager administrator has specified the group creation action for review, the
new group will be created after it is verified by an approver. See the
[Requests](/docs/directorymanager/11.1/index.md)topic for additional information.

## Create a Static Group

Follow the steps to create a static group.

1. In the Directory Manager portal, click the **Create New** button in the left pane and select
   **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   Pages and fields on the Create Group wizard may vary, since the administrator can customize the
   wizard by adding or removing pages and fields.

2. On the [Group Type page](/docs/directorymanager/11.1/group-management/grouptype.md), select the **Static Group** option button and click
   **Next**.
3. On the [General page](/docs/directorymanager/11.1/group-management/general.md), specify basic information about the group.
4. On the [Members page](/docs/directorymanager/11.1/group-management/managing-members.md), specify members for the group.
5. On the [Owners page](/docs/directorymanager/11.1/group-management/owners.md), specify primary and additional owners for the group.
6. On the [Summary Page](/docs/directorymanager/11.1/user-management/summary.md), review the settings and
   then click Finish to complete the wizard.

## Create a Smart Group

A Smart Group is one that dynamically maintains its membership based on the rules applied by a
user-defined query, such as an LDAP query.

Rather than specifying static user memberships, you can use a query (for example, "All full-time
employees in my company") to dynamically build membership in a Smart Group. Managing memberships
with queries significantly reduces administrative costs.

Follow the steps to create a Smart Group:

1. In the Directory Manager portal, click the **Create New** button in the left pane and select
   **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   Pages and fields on the Create Group wizard may vary, since the administrator can customize the
   wizard by adding or removing tabs and fields.

2. On the [Group Type page](/docs/directorymanager/11.1/group-management/grouptype.md), select the **Smart Group** option button and click
   **Next**.
3. On the [General page](/docs/directorymanager/11.1/group-management/general.md), specify basic information about the group.
4. On the [ Smart Group page](/docs/directorymanager/11.1/group-management/smartgroup.md), review and modify the query for updating group
   membership.
5. On the [Owners page](/docs/directorymanager/11.1/group-management/owners.md), specify primary and additional owners for the group.

   When a Smart Group Update job runs on a group, the notification behavior is as follows:  
    Even when the **Do not Notify** check box is selected, the additional owner will receive the
   notifications if the administrator has included its email address for job-specific
   notifications.

6. On the [1](/docs/directorymanager/11.1/user-management/summary.md), review the settings and then click
   Finish to complete the wizard.

## Create a Password Expiry Group

A password expiry group is a Smart Group whose membership contains users whose identity store
account passwords are approaching their expiry dates. Members of this group are notified by email to
reset their passwords. When they do so, they are automatically removed from the group membership.

NOTE: Password Expiry group is not supported in Microsoft Entra ID.

Follow the steps to create a Password Expiry Group:

1. In the Directory Manager portal, click the **Create New** button in the left pane and select
   **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   Pages and fields on the Create Group wizard may vary, since the administrator can customize the
   wizard by adding or removing tabs and fields.

2. On the [Group Type page](/docs/directorymanager/11.1/group-management/grouptype.md), select the **Password Expiry Group** option button and
   click **Next**.
3. On the [General page](/docs/directorymanager/11.1/group-management/general.md), specify basic information about the group.
4. On the [ Smart Group page](/docs/directorymanager/11.1/group-management/smartgroup.md), review and modify the query for updating group
   membership.
5. On the [Owners page](/docs/directorymanager/11.1/group-management/owners.md), specify primary and additional owners for the group.

   When a Smart Group Update job runs on a group, the notification behavior is as follows:  
    Even when the **Do not Notify** check box is selected, the additional owner will receive the
   notifications if the administrator has included its email address for job-specific
   notifications.

6. On the [Summary Page](/docs/directorymanager/11.1/user-management/summary.md), review the settings and
   then click Finish to complete the wizard.

# Create Microsoft Entra ID Groups

Using Directory Manager portal, you can create static groups and Smart Groups in an Microsoft Entra
ID identity store.

NOTE: If the Directory Manager administrator has specified the group creation action for review, the
new group will be created after it is verified by an approver. See the
[Requests](/docs/directorymanager/11.1/index.md) topic for additional information.

## Create a Static Group

Follow the steps to create a static group.

1. In the Directory Manager portal, click the **Create New** button in the left pane and select
   **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   NOTE: Pages and fields on the Create Group wizard may vary, since the administrator can
   customize the wizard by adding or removing tabs and fields.

2. On the [Group Type page](/docs/directorymanager/11.1/group-management/grouptype.md), select the **Static Group** option button and click
   **Next**.
3. On the [General page](/docs/directorymanager/11.1/group-management/general.md), specify basic information about the group.
4. On the [Members page](/docs/directorymanager/11.1/group-management/managing-members.md), add objects to group membership.

   Only user objects can be added as members of an Office 365 group.

5. On the [Owners page](/docs/directorymanager/11.1/group-management/owners.md), specify primary and additional owners for the
   group.

   Only users can be set as primary owners. You can specify multiple primary owners for a group. At
   least one primary owner is mandatory.

6. On the [Summary Page](/docs/directorymanager/11.1/user-management/summary.md), review the settings and
   then click Finish to complete the wizard.

## Create a Smart Group

Follow the steps to create a Smart Group.

1. In the Directory Manager portal, click the **Create New** button in the left pane and select
   **Group**.

   The **Create Group** wizard opens to the **Group Type** page.

   Remember, pages and fields on the Create Group wizard may vary, since the administrator can
   customize the wizard by adding or removing tabs and fields.

2. On the [Group Type page](/docs/directorymanager/11.1/group-management/grouptype.md) page, select the **Smart Group** option button and
   click **Next**.
3. On the [General page](/docs/directorymanager/11.1/group-management/general.md) page, specify basic information about the group.
4. On the [ Smart Group page](/docs/directorymanager/11.1/group-management/smartgroup.md) page, review and modify the query
   for updating group membership.

   Smart Groups in an Microsoft Entra ID based identity store use a device structured query
   language to update group membership. You should either apply a query to a group in the Microsoft
   Entra ID portal or in Directory Manager.

5. On the [Owners page](/docs/directorymanager/11.1/group-management/owners.md), specify primary and additional owners for the
   group.

   - Only users can be set as primary owners.
   - You can specify multiple primary owners for a group. At least one primary owner is mandatory.
   - When a Smart Group Update job runs on a group, the notification behavior is as follows:

     Even when the **Do not Notify** check box is selected, the additional owner will receive the
     notifications if the administrator has included its email address for job-specific
     notifications.

6. On the [Summary Page](/docs/directorymanager/11.1/user-management/summary.md), review the settings and
   then click **Finish** to complete the wizard.

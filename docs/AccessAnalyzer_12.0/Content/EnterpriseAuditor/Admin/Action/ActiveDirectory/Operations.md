---
sidebar_position: 5764
title: Active Directory Action Operations
---

# Active Directory Action Operations

Use Operations page to select one or more operations for the action to perform on the targeted Active Directory objects. Some operations have wizard pages to specify the configuration settings.

![Active Directory Action Module Wizard Operations page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Action/ActiveDirectory/Operations.png "Active Directory Action Module Wizard Operations page")

The Operations drop-down menu contains the following operations:

* [Clear/Set SID History](Operations/SIDHistory "Clear/Set SID History")
* [Computer Details](Operations/ComputerDetails "Computer Details")
* [Disable/Enable Computers](Operations/DisableEnableComputers "Disable/Enable Computers")
* [Create Groups](Operations/CreateGroups "Create Groups")
* [Create Users](Operations/CreateUsers "Create Users")
* [Delete Objects](#Delete "Delete Objects")
* [Disable/Enable Users](Operations/DisableEnableUsers "Disable/Enable Users")
* [Group Details](Operations/GroupDetails "Group Details")
* [Group Membership](Operations/GroupMembership "Group Membership")
* [Groups Remove All Members](#Groups "Groups Remove All Members")
* [Move Objects](Operations/MoveObjects "Move Objects")
* [Set/Reset Users Password](Operations/SetResetPassword "Set/Reset Users Password")
* [Unlock Users](#Unlock "Unlock Users")
* [Users Details](Operations/UsersDetails "Users Details")

Select an operation from the drop-down list and then click **Add**. The selection appears in the Selections pane as well as the navigation pane if there is an associated configuration page. If performing multiple operations, the action executes the operations in the order in which they appear here. To change the order, select an operation and use the **Down** and **Up** buttons.

## Delete Objects

**CAUTION:** Once deleted, objects from Active Directory cannot be restored.

Select this operation to delete objects from Active Directory, such as users, groups, or computers. The source table determines which objects are deleted from the Active Directory. Therefore, this operation does not possess its own wizard window.

## Groups Remove All Members

Select this operation to remove all members from groups located in the source table. There is not a wizard window associated with this operation. No configuration is required.

## Unlock Users

Select this operation to unlock the account of the specified users in the source table. There is not a wizard window associated with this operation. No configuration is required.
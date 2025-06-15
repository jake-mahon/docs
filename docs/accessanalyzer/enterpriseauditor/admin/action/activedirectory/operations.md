# Active Directory Action Operations

Use Operations page to select one or more operations for the action to perform on the targeted Active Directory objects. Some operations have wizard pages to specify the configuration settings.

![Active Directory Action Module Wizard Operations page](../../../../../../static/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operations.webp)

The Operations drop-down menu contains the following operations:

- [Clear/Set SID History ](operations/sidhistory.md)
- [Computer Details](operations/computerdetails.md)
- [Disable/Enable Computers](operations/disableenablecomputers.md)
- [Create Groups](operations/creategroups.md)
- [Create Users](operations/createusers.md)
- [Delete Objects](#delete-objects)
- [Disable/Enable Users](operations/disableenableusers.md)
- [Group Details](operations/groupdetails.md)
- [Group Membership](operations/groupmembership.md)
- [Groups Remove All Members ](#groups-remove-all-members)
- [Move Objects](operations/moveobjects.md)
- [Set/Reset Users Password ](operations/setresetpassword.md)
- [Unlock Users ](#unlock-users)
- [Users Details ](operations/usersdetails.md)

Select an operation from the drop-down list and then click __Add__. The selection appears in the Selections pane as well as the navigation pane if there is an associated configuration page. If performing multiple operations, the action executes the operations in the order in which they appear here. To change the order, select an operation and use the __Down__ and __Up__ buttons.

## Delete Objects

__CAUTION:__ Once deleted, objects from Active Directory cannot be restored.

Select this operation to delete objects from Active Directory, such as users, groups, or computers. The source table determines which objects are deleted from the Active Directory. Therefore, this operation does not possess its own wizard window.

## Groups Remove All Members

Select this operation to remove all members from groups located in the source table. There is not a wizard window associated with this operation. No configuration is required.

## Unlock Users

Select this operation to unlock the account of the specified users in the source table. There is not a wizard window associated with this operation. No configuration is required.

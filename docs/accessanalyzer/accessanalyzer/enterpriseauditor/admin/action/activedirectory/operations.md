# Active Directory Action Operations

Use Operations page to select one or more operations for the action to perform on the targeted Active Directory objects. Some operations have wizard pages to specify the configuration settings.

![Active Directory Action Module Wizard Operations page](/img/product_docs/activitymonitor/activitymonitor/admin/monitoreddomains/admonitoringconfiguration/operations.png)

The Operations drop-down menu contains the following operations:

- [Clear/Set SID History ](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/activedirectory/operations/sidhistory.md)
- [Computer Details](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/activedirectory/operations/computerdetails.md)
- [Disable/Enable Computers](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/activedirectory/operations/disableenablecomputers.md)
- [Create Groups](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/activedirectory/operations/creategroups.md)
- [Create Users](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/activedirectory/operations/createusers.md)
- [Delete Objects](#Delete-Objects)
- [Disable/Enable Users](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/activedirectory/operations/disableenableusers.md)
- [Group Details](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/activedirectory/operations/groupdetails.md)
- [Group Membership](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/activedirectory/operations/groupmembership.md)
- [Groups Remove All Members ](#Groups-Remove-All-Members)
- [Move Objects](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/activedirectory/operations/moveobjects.md)
- [Set/Reset Users Password ](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/activedirectory/operations/setresetpassword.md)
- [Unlock Users ](#Unlock-Users)
- [Users Details ](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/activedirectory/operations/usersdetails.md)

Select an operation from the drop-down list and then click __Add__. The selection appears in the Selections pane as well as the navigation pane if there is an associated configuration page. If performing multiple operations, the action executes the operations in the order in which they appear here. To change the order, select an operation and use the __Down__ and __Up__ buttons.

## Delete Objects

__CAUTION:__ Once deleted, objects from Active Directory cannot be restored.

Select this operation to delete objects from Active Directory, such as users, groups, or computers. The source table determines which objects are deleted from the Active Directory. Therefore, this operation does not possess its own wizard window.

## Groups Remove All Members

Select this operation to remove all members from groups located in the source table. There is not a wizard window associated with this operation. No configuration is required.

## Unlock Users

Select this operation to unlock the account of the specified users in the source table. There is not a wizard window associated with this operation. No configuration is required.

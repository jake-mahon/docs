# UsersGroups: Groups Category

The Groups Query category collects information for groups in different contexts.

![Users and Groups Browser wizard Results page for Groups category](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/usersgroups/category/groups.png)

In the Groups section, select from the following options:

- All groups
- All global groups
- All local groups
- All groups containing the following users – Click the ellipsis (__…__) to open the Find a User browser screen and select users. See the [Find a Group/User Browser](#find-a-groupuser-browser) topic for additional information.
- These groups – Click the ellipsis (__…__) to open the Find a Group browser window and select groups. See the [Find a Group/User Browser](#find-a-groupuser-browser) topic for additional information.

In the Additional Properties section, select the __What rights does this group have?__ checkbox to return rights for the selected groups.

__CAUTION:__ The number of offline Groups can significantly increase the time for a scan.

___RECOMMENDED:___ For large networks, configure the length of time for a scan when Groups are offline.

- Retry Attempts [number]
- Retry Interval [number] seconds

## Find a Group/User Browser

Clicking the ellipses for the __All groups containing the following users__ and the __These groups__ options opens the Find a Group or Find a User browser.

![Find a group window](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/usersgroups/category/findagroup.png)

The Find a Group and Find a User browsers display a list of groups or users, depending on which one is being used, that can be selected for the option. Select from a specific host using the Sample from host option, or leave the text field blank and click __Connect__ to retrieve all user groups or users that are selectable.

Select a group or user by selecting the checkbox next to it, and click __OK__ to confirm selection. Click __Cancel__ to leave the window without a selection.

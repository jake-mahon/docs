# Model Changes in the AIC

Follow the steps to model resource access changes for a single trustee or multiple trustees.

__Step 1 –__ Navigate to a desired file system resource and select the __Effective Access__ report in the Reports pane.

![Select trustee on Effective Access report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/changemodeling/effectiveaccessreport.png)

__Step 2 –__ Select a trustee from the top table in the report. The Permission Source table displays the Source Path, or methods of access, to the selected resource. In this example, the trustee has access through three sources on policies, shares, and folders.

![Select Group in Group Membership pane of Effective Access report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/changemodeling/effectiveaccessreportgroup.png)

__Step 3 –__ In the Group Membership pane, begin to enter the name of the group that grants the access to be changed. Select it from the list that shows in the drop-down menu. The group’s membership list opens.

![Group Membership pane](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/changemodeling/groupmembershippane.png)

__Step 4 –__ Click the __Change Group Membership__ button on the Group Membership pane. The Group Membership Changes window opens.

![Group Membership Changes window](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/changemodeling/groupmembershipchanges.png)

__Step 5 –__ If this is the first change being modeled, the table is empty. If other changes are being modeled, they are listed in the table. Click __Add__ to open the Add Membership Change wizard.

![Add Membership Change wizard Select Group page](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/changemodeling/addmembershipchangeselectgroup.png)

__Step 6 –__ On the Select Group page, the selected group is displayed. You can search to select a different group. Click __Next__.

![Add Membership Change wizard Change Type page](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/changemodeling/addmembershipchangetype.png)

__Step 7 –__ On the Change Type page, indicate the type of change to be modeled:

- Add a new member – Opens the Add Members page. If you select this option, proceed to Step 8.
- Remove an existing member – Opens the Remove Members page. If you select this option, skip to Step 10.

Click __Next__.

![Add Membership Change wizard Add Members page](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/changemodeling/addmembershipchangeaddmembers.png)

__Step 8 –__ Begin to enter the trustee name in the search box. Available groups and users auto-populate in the drop-down menu. Select the desired trustee and the new member is added in the user list. Repeat as desired to add multiple members.

![Add Members page User Name table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/changemodeling/addmembershipchangememberadded.png)

__Step 9 –__ The members to be added are shown in the User Name table. Click __Next__. The Add Membership Change wizard closes, and the new members are listed on the Group Membership Changes window. Skip to Step 12.

![Add Membership Change wizard Remove Members page](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/changemodeling/addmembershipchangeremovemembers.png)

__Step 10 –__ On the Remove Members page, the existing group members are listed. Select the desired members and click __Select__.

__NOTE:__ The number on the __View Removals__ button changes to reflect the number of users selected.

![Members selected for removal window](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/changemodeling/membersforremoval.png)

__Step 11 –__ (Optional) Click __View Removals__ to view the members selected for removal. To remove a member from this list, click __Remove__ and then click __OK__.

__Step 12 –__ The members selected for removal are shown in the User Name table. Click __Finish__. The Add Membership Change wizard closes, and the members to be removed are listed on the Group Membership Changes window.

![Group Membership Changes window with changes to be modeled](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/changemodeling/groupmembershipchangesstaged.png)

__Step 13 –__ Repeat Steps 5-9 to model adding more members. Repeat Steps 5-7 and 10-11 to model removing more members. When the changes to be modeled are set as desired, click __OK__. The Group Membership Changes window closes.

![Effective access changes illustration](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/changemodeling/modeledchanges.png)

When the modeled changes impact the effective access for a trustee, it is displayed in the top section of the Effective Access report selected in Step 1. An illustration shows exactly how the modeled changes would impact a trustee’s access to the selected resource. It may take removing the trustee from multiple groups or adding the trustee to another group before access is modified as desired. View the global impact these changes will have on the trustee’s access to all organizational resources in the Modeled Access Changes report at the __File System__ node level. See the [Modeled Access Changes Report](/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/changemodeling/modeledaccesschanges.md) topic for additional information.

# Commit Modeled Changes

Once all changes are decided upon, it is time to commit the modeled changes to Active Directory. This can be done manually by an organization’s IT team, or it can be automated by enabling the Access Information Center to commit changes in the targeted Active Directory environment.

The following user roles can commit changes:

- Administrators – This role can configure the Access Information Center to commit changes and can commit modeled changes. See the [Commit Active Directory Changes](/docs/accessinformationcenter/access/informationcenter/admin/additionalconfig/commitchanges.md) topic for additional information.
- Security Team Members – This role can commit modeled changes, if the Access Information Center has already been configured to do so

__NOTE:__ All users with access to the Resource Audit interface can model changes. The __Commit__ button in the Group Membership Changes window is not available to users with the Reader role or owners with no assigned role. A resource owner can use the __Change Access__ button in the Owner portal.

Return to the Group Membership Changes window to view the modeled changes by clicking the __Change Group Membership__ button on the Group Membership pane.

![Group Membership Changes window](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/changemodeling/clearcommit.png)

Additional changes can be modeled using the __Add__ and __Remove__ buttons.

Manually Commit Changes

You can export the list of modeled changes as either a CSV or Excel file, which can be sent to your organization’s IT team. Select between the __CSV Export__ and __Excel Export__ buttons above the table. See the [Data Grid Features](/docs/accessinformationcenter/access/general/datagrid.md) topic for additional information.

Access Information Center Automatically Commits Changes

If the Access Information Center has been configured to commit changes in Active Directory, then the __Commit__ button is available at the bottom of the window.

Click __Commit__. The Action Running window opens while the changes listed in the table are pushed to the targeted domain. When the __Action completed successfully__ message displays, click __Close__. The changes that were just committed are reflected immediately in the Resource Audit interface reports.

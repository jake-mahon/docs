# Grant Permissions to Security Roles

In GroupID, three security roles are defined by default in an identity store: Administrator, Helpdesk, and User. More security roles can be added as required.

NOTE: In a Microsoft Entra ID identity store, the Helpdesk role is not available by default.

You can grant permissions on the GroupID app to security roles that exist in an identity store associated with a Mobile service, so that role members can access the allowed features only.

What do you want to do?

- [Grant Permissions to Security Roles](#Grant-Permissions-to-Security-Roles)

## Grant Permissions to Security Roles

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Mobile Service__ tab, click the ellipsis button for a service and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under __Design Settings__. You can design a different app for each of these.
4. Click __Features__ in the left pane.  
   All security roles in the identity store are listed in the __Role__ column. You can grant permissions to a role on the following app features:

   - __Directory Search__: Enables role members to search the directory.
   - __Workflow__: Enables role members to view the workflow requests.
5. To grant permission to a role on a function, select the check box for it.  
   To deny permission, clear the respective check box.
6. Click __Save__.

__See Also__

- [Mobile Service](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/overview.md)
- [Design Settings](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/design/overview.md)

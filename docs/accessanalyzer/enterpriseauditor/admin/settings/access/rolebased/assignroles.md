# Assign User to Role Members

Role Based Access becomes enabled within Access Analyzer as soon as the first role has been assigned in the Access Role wizard. When saving the first role or set of roles added to the Role Membership list in the Roles view, the Administrator role must be included for a least one user or an error message displays.

__NOTE:__ You must have local administrator rights on the Access Analyzer Console server to assign roles and enable Role Based Access.

Follow the steps to assign roles in the Access Analyzer Console.

![Add Access option on the Access page](/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/access/rolebased/addaccess.png)

__Step 1 –__ On the Access page, click __Add Access__. The Access Type wizard opens.

![Access Type page of the Access Role wizard](/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/access/rolebased/accesstypeuser.png)

__Step 2 –__ Select the __A user or group accessing this console__ option. Click __Next__.

![Console Access page of the Access Role wizard](/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/access/rolebased/consoleaccess.png)

__Step 3 –__ On the Console Access page, specify a group or user in the __Name__ field. Use the ellipsis (__…__) to browse for accounts with the Select User or Group window.

- (Optional) To use previously configured MSA and gMSAs for authentication, select the gMSA option from the Object Types list. See the Microsoft [Group Managed Service Accounts](https://learn.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview) article for additional information.

  - Change the location to the desired domain and click __Object Types__, then select __Service Accounts__.
  - Add the gMSA name (```gMSAadmin$```), then click __OK__.
  - The Member Type will show as ```msDS-GroupManagedServiceAccount``` on the Access page.

![Console Access page with user added](/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/access/rolebased/consoleaccessfinish.png)

__Step 4 –__ Select a role for the group or user from the Role list. Click __Finish__. The group or user and role is added to the Role Membership list in the Roles view.

__Step 5 –__ Repeat Steps 1-4 to assign roles to other groups or users.

__Step 6 –__ Click __Save__ and then __OK__ to confirm the changes. All applied roles are lost if they are not saved.

Role Based Access is enabled when the first role has been assigned.

![Error message when Administrator role is not specified](/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/access/rolebased/noadminerror.png)

The first role or set of roles saved must include the Administrator role. Clicking __Save__ for the first role or set or roles without including the Administrator generates an error message in the Access Analyzer Console.

When Role Based Access is first enabled, restart the Access Analyzer application to ensure all roles are properly active. When saving roles for the first time, an NEAUsers local group is created on the Access Analyzer Console server with permissions to the Access Analyzer application directory. When users are assigned roles, they are added to this NEAUsers group to give them the necessary permissions. This allows roles to be leveraged without requiring local Administrator rights.

__NOTE:__ The Web Administrator and Report Viewer roles do not require access to the Access Analyzer console, so users assigned these roles are not added to the NEAUsers group.

![NEAUsers group](/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/access/rolebased/neausersgroup.png)

There are two separate sets of permissions:

- Applies to __This folder only__
- Applies to __Subfolders and files only__

## Edit Role Members' Responsibilities

Follow the steps to edit a Access Analyzer user’s role.

![Edit Member Role](/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/access/rolebased/editmemberrole.png)

__Step 1 –__ On the Access page, select the desired user and click __Edit Member Role__.

![Edit Console Access wizard page](/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/access/rolebased/consoleaccessedit.png)

__Step 2 –__ Select a new role for the user from the Roles list.

__Step 3 –__ Click __Finish__. The role is updated on the Access page.

__Step 4 –__ Repeat Steps 1-3 to edit other users’ roles.

__Step 5 –__ Click __Save__ and then __OK__ to confirm the changes. All applied roles are lost if they are not saved.

The changed roles take affect the next time the users logs into the Access Analyzer application. If a user is actively logged into Access Analyzer at the same time the role for that user is changed, then the user needs to exit and re-launch the application for the role to take effect.

## Delete Role Member

Follow the steps to delete a user from having access to the Access Analyzer Console.

![Delete Role Member](/img/product_docs/accessanalyzer/enterpriseauditor/admin/settings/access/rolebased/deleterolemember.png)

__Step 1 –__ On the Access page, select the desired user and click __Delete Role Member__. The selected user will be removed from the list.

__NOTE:__ No confirmation will be requested. However the changes will not be finalized until Step 3 is completed.

__Step 2 –__ Repeat Step 1 to remove other users as desired.

__Step 3 –__ Click __Save__ and then __OK__ to confirm the deletions. The users will not be deleted if the changes are not saved.

The deleted users will no longer be able to log into the Access Analyzer application. If a user is actively logged into Access Analyzer at the same time of the deletion, the user will need to exit the application for the deletion to take effect.

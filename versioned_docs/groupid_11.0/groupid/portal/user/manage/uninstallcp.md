# Uninstall GroupID Credential Provider

You can uninstall GroupID Credential Provider using one of the following:

- Windows Control Panel: If you have installed GroupID Credential Provider manually, you can uninstall it using Windows Control Panel.
- Group Policy Object: If you have installed the GroupID Credential Provider via Group Policy Object you can uninstall it using the following steps:

  1. Open Group Policy Management by typing _gpmc.msc_ in the __Run__ box and clicking __OK__.
  2. Right-click the required GPO under the domain or organizational unit that contains the GPO distributing GroupID Credential Provider and click __Edit__. The Group Policy Management Editor opens.
  3. Click __Computer Configurations__ > __Policies__ > __Software Settings__ > __Software Installation__.
  4. Right-click the GroupID Credential Provider package, point to __All Tasks__ and click __Remove__.
  5. In the __Remove Software__ dialog box, select __Immediately uninstall the software from users and computers__ and click __OK__.
  6. Click __Close__ to close the __Group Policy Object Editor__.
  7. When a client workstation restarts, the GPO, now without the Credential Provider object, is applied on it. This removes the installed GroupID Credential Provider from all client workstations. Once it is removed from the client workstation, the user must restart it again to remove the links from the Windows logon screen.

See Also

- [Install GroupID Credential Provider](/versioned_docs/groupid_11.0/groupid/portal/user/manage/installcp.md)
- [ GroupID Credential Provider](/versioned_docs/groupid_11.0/groupid/portal/user/manage/credentialprovider.md)

# Uninstall Credential Provider

You can uninstall Credential Provider using one of the following:

- Windows Control Panel – If you have installed Credential Provider manually, you can uninstall it using Windows Control Panel.
- Group Policy Object – If you have installed the Credential Provider via Group Policy Object, follow the steps to uninstall it.

  Step 1 – Open Group Policy Management by typing _gpmc.msc_ in the __Run__ box and clicking __OK__.

  Step 2 – Right-click the required GPO under the domain or organizational unit that contains the GPO distributing Credential Provider and click __Edit__. The Group Policy Management Editor opens.

  Step 3 – Click __Computer Configurations__ > __Policies__ > __Software Settings__ > __Software Installation__.

  Step 4 – Right-click the Credential Provider package, point to All Tasks and click __Remove__.

  Step 5 – In the Remove Software dialog box, select __Immediately uninstall the software from users and computers__ and click __OK__.

  Step 6 – Click __Close__ to close the Group Policy Object Editor.

  Step 7 – When a client workstation restarts, the GPO, now without the Credential Provider object, is applied on it. This removes the installed Credential Provider from all client workstations. Once it is removed from the client workstation, the user must restart it again to remove the links from the Windows logon screen.

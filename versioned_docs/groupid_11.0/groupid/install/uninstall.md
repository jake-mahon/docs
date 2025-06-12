# Uninstall GroupID

Before you uninstall GroupID , make sure that the logged-in user is a member of the local Administrators group on that machine.

To uninstall the current GroupID version to upgrade to a newer version, follow these steps:

1. Click __Start__.
2. Type __Control Panel__ and select it.
3. Select __Uninstall a program__.
4. From the __Name__ column, right-click __Imanami GroupID `<version>`__and select __Uninstall__.
5. On the __User Account Control__ window, click __Yes__.

This will uninstall GroupID from your machine.

## Complete Uninstall

To uninstall GroupID completely, remove the GroupID folders and registry keys from your machine. This done, you do not have the option to upgrade to a newer version of GroupID.

First, uninstall GroupID using the steps described above.

Next, to completely uninstall GroupID from your machine, remove:

- The GroupID installation directory
- Other relevant directories
- Registry keys
- GroupID Site
- GroupID application pools
- GroupID certificates

Remove the GroupID installation directory

1. Go to the location:  
   X:\Program Files\Imanami  
   (X represents the GroupID installation drive).
2. Delete the directory named GroupID 11.0.

Remove other relevant directories

1. On the Windows __Run__ dialog box, type the command:

    ```
       %ALLUSERSPROFILE%\Imanami
    ```

2. From the location referenced by the given command, delete the folder: GroupID 11.0.

Remove registry keys

1. Open the __Registry Editor__ by typing __regedit__ in the Windows __Run__ dialog box.
2. Delete the following registry keys:

    ```
       HKEY_LOCAL_MACHINE\SOFTWARE\Imanami\GroupID\Version 11.0
    ```

Remove the GroupID Site

Follow these steps to remove the GroupID site from IIS:

1. Open the Internet Information Service console by typing _inetmgr_ in the Windows __Run__ dialog box.
2. Expand the `<machine name>` node in the console tree and click __Sites__.
3. On the __Sites__ page, delete _GroupIDSite11_.

Remove the GroupID applications and services pools

Follow these steps to remove the GroupID Admin Center, app pool, services and portal from IIS:

1. Open the Internet Information Service console by typing _inetmgr_ in the Windows __Run__ dialog box.
2. Expand the `<machine name>` node in the console tree and click __Application Pools__.
3. On the __Application Pools__ page, delete all app pools for GroupID Admin Center, applications, portals and services.

Remove GroupID Certificates

Follow these steps to remove GroupID certificates from IIS:

1. Open the Internet Information Service console by typing _inetmgr_ in the Windows __Run__ dialog box.
2. Click the `<machine name>` node in the console tree. On the __Features View__ tab, select __Server Certificates__ in the IIS section.
3. Delete these certificates bound to GroupIDSite11 (the site deploying GroupID Data Service):

   - GroupIDSecurityService
   - Imanami GroupID Certificate

NOTE: Do not remove these certificates if another GroupID version is installed on the machine.

See Also

- [Back Up and Restore GroupID Data](/versioned_docs/groupid_11.0/groupid/install/backuprestore.md)

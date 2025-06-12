# Configure NFS File Share for Crawling

To enable processing Network File System (NFS) file shares it is necessary to enable specific Windows features. The steps to enable these features differ depending on operating system of the computer where Netwrix Data Classification is installed.

__NOTE:__ Prior to configuration, consider the following:

- NFS File shares are only supported from servers running Windows Server 2012 or later (or Windows 10)
- Writing classifications to NFS file shares is only supported from Netwrix Data Classification 5.4.8 onwards
- Changes made to files (including adding new files) will not be automatically detected until the source is re-indexed—Netwrix recommends setting the re-index period for NFS file shares to 1 day.

Add the Folder source as described in the File System section.

__NOTE:__ Do not specify username and password while adding data source.

[![Closed](/img/versioned_docs/transparent.gif)](javascript:void(0))[To configure Windows Server 2012 Onward](javascript:void(0))

1. On the Windows desktop, start Server Manager.
2. On the Manage menu, click Add Roles and Features.
3. Progress to the Features step.
4. Ensure that Client for NFS option enabled.
5. Complete the wizard.

[![Closed](/img/versioned_docs/transparent.gif)](javascript:void(0))[To configure Windows 10](javascript:void(0))

1. Navigate to Control Panel and select Programs.
2. Select Turn Windows features on or off.
3. Expand Services for NFS and enable the Client for NFS option.
4. Click OK.

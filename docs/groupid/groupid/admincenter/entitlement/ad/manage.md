# Manage File Servers

You can specify file servers in an Active Directory identity store to replicate their entitlement data to Elasticsearch for Directory Manager. You can then manage these entitlements using Directory Manager. Entitlement data includes the permissions granted on shared files and folders
residing on these file servers.

You can also manage certain settings for a server, such as change the service account for reading and managing entitlements and exclude a shared folder on a file server from replication.

What do you want to do?

- [Specify File Servers for Entitlement Management](#Specify-File-Servers-for-Entitlement-Management)
- [Specify File Servers Outside the Criteria](#Specify-File-Servers-Outside-the-Criteria)
- [Include Future Servers for Entitlement Management](#Include-Future-Servers-for-Entitlement-Management)
- [View the Shared Folders on a File Server](#View-the-Shared-Folders-on-a-File-Server)
- [Exclude a Folder on a Server from Replication](#Exclude-a-Folder-on-a-Server-from-Replication)
- [Connect to a File Server Using a Different Account](#Connect-to-a-File-Server-Using-a-Different-Account)
- [Replicate Permissions Manually](#Replicate-Permissions-Manually)
- [Exclude a Server From Entitlement Management](#Exclude-a-Server-From-Entitlement-Management)
- [Restore a Server for Entitlement Management](#Restore-a-Server-for-Entitlement-Management)

## Specify File Servers for Entitlement Management

To select file servers for entitlement management, you have to specify an OU or group as criterion. Directory Manager fetches server objects from the specified OU or group. Once you save it, you also get an option to add servers from outside the criterion, such
as from a different OU.

You can also change the criterion, such as specify a different OU or group for fetching file servers.

__To specify a criterion for fetching file server(s):__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Entitlement__ under __Settings__ in the left pane to launch the __Entitlement__ page.  
   When no file server is defined, you land on
   a blank page.
4. Click __Set up File Server(s)__.
5. In the __Search Criteria__ area, specify a _group or container_ to fetch the server objects from. These server objects are essentially joined to the domain the identity store
   is connected to.

   __Designate a container as criteria:__

   1. Select the __Container__ option button.
   2. By default, the entire directory is selected. To fetch server objects from a specific OU rather than the entire directory, click the arrow in the box and select an OU. Then click __Search__. Server objects residing in this OU and its nested OUs are displayed in the __Included File Servers__ area.

   __Designate a group as criteria:__

   1. Select the __Group__ option button.
   2. Enter a search string in the box to search for your required group in the directory. You can also click __Advanced__ to search the group by name, display name, and description. On selecting a group, all server
      objects that are members of this group will be displayed in the __Included File Servers__ area.
6. Click __Save__ on the __Entitlement__ page.

#### File Server Details

The following information is displayed for a file server in the __Included File Servers__ area:

- __Name:__ the file server name.
- __User Name:__ the user account used to connect to the file server to read and update permissions on shared files and folders residing on the server.

  - If the service account specified for the identity store is used, the column does not display anything.
  - If you have designated a different account for this purpose, the username of the account is displayed here. See the [Connect to a File Server Using a Different Account](#Connect-to-a-File-Server-Using-a-Different-Account) topic.
- __RC Status__: Displays the replication status for the server with respect to the replication performed by the GroupID Entitlement schedule. Different statuses are:

  - __Request ![rc_request](/img/product_docs/groupid/groupid/admincenter/entitlement/ad/rc_request.webp):__ permission data for the file server has never been replicated to Elasticsearch.
  - __Success ![rc_success](/img/product_docs/groupid/groupid/admincenter/entitlement/ad/rc_success.webp):__ permission data for the file server was successfully replicated when the GroupID Entitlement schedule last ran.
  - __Fail ![rc_fail](/img/product_docs/groupid/groupid/admincenter/entitlement/ad/rc_fail.webp):__ replication failed for the server due to an error.
  - __Running ![rc_running](/img/product_docs/groupid/groupid/admincenter/entitlement/ad/rc_running.webp):__ the GroupID Entitlement schedule is running and replication is in progress.
- __Last Replicated__: the date and time the GroupID Entitlement schedule last replicated entitlement data for the file server to Elasticsearch. _N/A_ is displayed when the
  file server has never been replicated.
- __Status__: Click __Get Status__ to check the status of the file server, represented by the following colors:

  - Red: The server is inactive, decommissioned, or cannot be accessed.
  - Green: The server is active and accessible.
- __Actions__: Click the ellipsis button in the __Actions__ column and do one of the following:

  - Click __Edit__ to view the shared folders residing on the server, include/exclude a folder for entitlement management, and change the service account used to connect to the server for reading and updating
    entitlements.
  - Click __Add to Exclude Server List__ to exclude the file server from entitlement management. Directory Manager does not read and display entitlement data for an excluded server.

#### Search File Servers

The _Search Filters_ area is available in both the __Included File Servers__ and __Excluded File Servers__ sections. Use it to search for a file server in the respective listing.

1. Click on the _Search Filters_ bar to expand the filter area.
2. Specify a filter expression to search a server by name.

   1. Select _Name_ in the __Attributes__ drop-down list. This is the only attribute available for performing a search.
   2. Select an option in the __Operators__ drop-down list.

      - _Is exactly:_ Displays the server with exactly the same name as you enter in the __Value__ box.
      - _Contains:_ Displays the servers whose names contain the text you enter in the __Value__ box.
      - _Starts with:_ Displays the servers whose names start with the text you enter in the __Value__ box.
      - _Ends with:_ Displays the servers whose names end with the text you enter in the __Value__ box.
   3. Enter a string in the __Value__ box.
3. Click __Apply__. The file servers listing displays the servers that match the criterion.

## Specify File Servers Outside the Criteria

Directory Manager allows you to specify a group or container as criterion to fetch file servers from there for entitlement management. But since only a single group or container can be specified as criterion, there may be a situation where you want to specify
a server from outside this criterion. To facilitate this, Directory Manager enables you to search and select file servers in the domain for entitlement management.

__To specify a file server outside of criteria:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Entitlement__ under __Settings__ in the left pane.
4. On the __Entitlement__ page, click __Include Servers other than Criteria__.
5. The __Find Servers__ dialog box, by default, displays file servers from the entire directory that reside outside the container or group specified as criteria. Click in the box and select an OU to narrow down the
   server listing.  
   Select the check boxes for the file server(s) to include them for entitlement management.
6. Click __Save__. The selected servers are displayed in the __Included File Servers__ area on the __Entitlement__ page.
7. Click __Save__.

## Include Future Servers for Entitlement Management

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Entitlement__ under __Settings__ in the left pane.
4. On the __Entitlement__ page, select the __Include all future servers__ check box to ensure that all server objects that are added to the group/container (specified in the
   __Search Criteria__ area) in the future are automatically displayed in the __Included File Servers__ area for entitlement data replication.
5. Click __Save__.

## View the Shared Folders on a File Server

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Entitlement__ under __Settings__ in the left pane.
4. In the __Included File Servers__ area on the __Entitlement__ page, click the ellipsis button for a server and select __Edit__. On the __Edit Server__ dialog box:

   - The __Server Shares__ area displays the shared folders on the server.
   - The name of the [GroupID Entitlement Schedule](/docs/groupid/groupid/admincenter/schedule/entitlement.md) that computes the permissions on shared files and folders residing on the server and replicates them to Elasticsearch, is displayed
     next to __Job__.

## Exclude a Folder on a Server from Replication

By default, Directory Manager computes and replicates permissions on all shared files/folders on the configured servers. You can exclude a folder on a server from this activity.

When a folder is excluded, its entitlement data replicated to-date is also cleared.

__To exclude a folder:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Entitlement__ under __Settings__ in the left pane.
4. In the __Included File Servers__ area on the __Entitlement__ page, click the ellipsis button for a server and select __Edit__.
5. On the __Edit Server__ dialog box, the __Server Shares__ area displays the shared folders on the server. Clear the check box for a folder to exclude it from replication
   and click __Apply Changes__.
6. Click __Save__ on the __Entitlement__ page.

## Connect to a File Server Using a Different Account

By default, the service account specified for the identity store is used to connect to a file server for reading and managing the effective permissions assigned to objects on the shared folders. You can designate a different account for this activity.

__To change the service account for a file server:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Entitlement__ under __Settings__ in the left pane.
4. In the __Included File Servers__ area on the __Entitlement__ page, click the ellipsis button for a server and select __Edit__.
5. On the __Edit Server__ dialog box, you can change the service account used to connect to the server for reading and updating permissions. The [GroupID Entitlement Schedule](/docs/groupid/groupid/admincenter/schedule/entitlement.md), [Entitlement Scope Schedule](/docs/groupid/groupid/admincenter/schedule/entitlementscope.md), and [Entitlement Temporary Permissions Schedule](/docs/groupid/groupid/admincenter/schedule/entitlementtemporarypermissions.md) run in the context of the account specified here.

   - The __Use Identity Store Service Account__ check box is selected by default, indicating that the service account specified for the identity store is used to connect to the server.
   - To change the account, clear the __Use Identity Store Service Account__ check box and specify the credentials of an account in the __User name__ and __Password__ boxes. This account must have elevated permissions to manage the effective NTFS permissions for the shared resources on the server.  
     On changing the credentials, use the __Reconnect__ button to test the connectivity and fetch the shared
     folders again with the given credentials.
6. Click __Apply Changes__.
7. Click __Save__ on the __Entitlement__ page.

## Replicate Permissions Manually

After adding a file server for entitlement management, it is essential to replicate object permissions from the file server to Elasticsearch.

The [GroupID Entitlement Schedule](/docs/groupid/groupid/admincenter/schedule/entitlement.md) runs on a set frequency to replicate the effective NTFS permission for the file servers. You can also run this schedule any time manually for a specific file
server or all file servers listed in the __Included File Servers__ section on the __Entitlement__ page.

__To replicate permissions manually:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Entitlement__ under __Settings__ in the left pane.
4. On the __Entitlement__ page, you can manually replicate permissions for one or all file servers.

   - __To replicate permissions for a server:__Select a file server in the __Included File Servers__ area and click __Replicate__.
   - __To replicate permissions for multiple servers:__In the __Included File Servers__ area, select the check boxes for the servers you want to replicate. To replicate all servers, select the check box in the header row. This displays the following icons:

     __![replicate_permissions](/img/product_docs/groupid/groupid/admincenter/entitlement/ad/replicate_permissions.webp)__

     Either click the __Replicate__ icon or the
     __Replicate__ button.

   This triggers the GroupID Entitlement schedule for the identity store, which computes and replicates the effective NTFS permissions granted to directory objects on shared resources on the server(s). This process may take some time.

   The __Last Replicated__ column displays the date and time the GroupID Entitlement schedule last ran.

## Exclude a Server From Entitlement Management

You can exclude a file server in the identity store from replication and entitlement management.

__To exclude a file server:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Entitlement__ under __Settings__ in the left pane.
4. On the __Entitlement__ page, you can exclude one or more servers.

   - __To exclude a server:__In the __Included File Servers__ area, click the ellipsis button for a server and select __Add to Exclude Server List__. The server is moved to the __Excluded File Servers__ area.
   - __To exclude multiple servers:__

     In the __Included File Servers__ area, select the check boxes for the servers you do not want to replicate. To exclude all servers, select the check box in the header row. This displays the following icons:

     ![replicate_permissions](/img/product_docs/groupid/groupid/admincenter/entitlement/ad/replicate_permissions.webp)

     Click __Remove__. The servers are moved to the __Excluded File Servers__ area.
5. Click __Save__.

## Restore a Server for Entitlement Management

You can restore an excluded server in the identity store for replication and entitlement management.

__To restore an excluded server:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Entitlement__ under __Settings__ in the left pane.
4. On the __Entitlement__ page, the __Excluded File Servers__ area displays the file servers excluded from replication. Click __Remove__ for a server to move it to the __Included File Servers__ area.
5. Click __Save__.

See Also

- [Entitlement](/docs/groupid/groupid/admincenter/entitlement/overview.md)
- [Manage SharePoint Sites](/docs/groupid/groupid/admincenter/entitlement/entraid/manage.md)

---
title: entitlements
sidebar_label: entitlements
description: Directory Manager 11.1 documentation for entitlements with configuration details, usage instructions, and implementation guidance.
---

# Manage File Servers

You can specify file servers in an Active Directory identity store to replicate their entitlement
data to Elasticsearch for Directory Manager. You can then manage these entitlements using Directory
Manager. Entitlement data includes the permissions granted on shared files and folders residing on
these file servers.

You can also manage certain settings for a server, such as change the service account for reading
and managing entitlements and exclude a shared folder on a file server from replication.

What do you want to do?

- Specify File Servers for Entitlement Management
- Specify File Servers Outside the Criteria
- Include Future Servers for Entitlement Management
- View the Shared Folders on a File Server
- Exclude a Folder on a Server from Replication
- Connect to a File Server Using a Different Account
- Replicate Permissions Manually
- Exclude a Server From Entitlement Management
- Restore a Server for Entitlement Management

## Specify File Servers for Entitlement Management

To select file servers for entitlement management, you have to specify an OU or group as criterion.
Directory Manager fetches server objects from the specified OU or group. Once you save it, you also
get an option to add servers from outside the criterion, such as from a different OU.

You can also change the criterion, such as specify a different OU or group for fetching file
servers.

**To specify a criterion for fetching file server(s):**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Entitlement** under **Settings** in the left pane to launch the **Entitlement** page.  
   When no file server is defined, you land on a blank page.
4. Click **Set up File Server(s)**.
5. In the **Search Criteria** area, specify a _group or container_ to fetch the server objects from.
   These server objects are essentially joined to the domain the identity store is connected to.

   **Designate a container as criteria:**

   1. Select the **Container** option button.
   2. By default, the entire directory is selected. To fetch server objects from a specific OU
      rather than the entire directory, click the arrow in the box and select an OU. Then click
      **Search**. Server objects residing in this OU and its nested OUs are displayed in the
      **Included File Servers** area.

   **Designate a group as criteria:**

   1. Select the **Group** option button.
   2. Enter a search string in the box to search for your required group in the directory. You can
      also click **Advanced** to search the group by name, display name, and description. On
      selecting a group, all server objects that are members of this group will be displayed in the
      **Included File Servers** area.

6. Click **Save** on the **Entitlement** page.

#### File Server Details

The following information is displayed for a file server in the **Included File Servers** area:

- **Name:** the file server name.
- **User Name:** the user account used to connect to the file server to read and update permissions
  on shared files and folders residing on the server.

  - If the service account specified for the identity store is used, the column does not display
    anything.
  - If you have designated a different account for this purpose, the username of the account is
    displayed here. See the Connect to a File Server Using a Different Account topic.

- **RC Status**: Displays the replication status for the server with respect to the replication
  performed by the GroupID Entitlement schedule. Different statuses are:

  - **Request
    ![rc_request](/img/product_docs/directorymanager/directorymanager/admincenter/entitlement/ad/rc_request.webp):**
    permission data for the file server has never been replicated to Elasticsearch.
  - **Success
    ![rc_success](/img/product_docs/directorymanager/directorymanager/admincenter/entitlement/ad/rc_success.webp):**
    permission data for the file server was successfully replicated when the GroupID Entitlement
    schedule last ran.
  - **Fail
    ![rc_fail](/img/product_docs/directorymanager/directorymanager/admincenter/entitlement/ad/rc_fail.webp):**
    replication failed for the server due to an error.
  - **Running
    ![rc_running](/img/product_docs/directorymanager/directorymanager/admincenter/entitlement/ad/rc_running.webp):**
    the GroupID Entitlement schedule is running and replication is in progress.

- **Last Replicated**: the date and time the GroupID Entitlement schedule last replicated
  entitlement data for the file server to Elasticsearch. _N/A_ is displayed when the file server has
  never been replicated.
- **Status**: Click **Get Status** to check the status of the file server, represented by the
  following colors:

  - Red: The server is inactive, decommissioned, or cannot be accessed.
  - Green: The server is active and accessible.

- **Actions**: Click the ellipsis button in the **Actions** column and do one of the following:

  - Click **Edit** to view the shared folders residing on the server, include/exclude a folder for
    entitlement management, and change the service account used to connect to the server for
    reading and updating entitlements.
  - Click **Add to Exclude Server List** to exclude the file server from entitlement management.
    Directory Manager does not read and display entitlement data for an excluded server.

#### Search File Servers

The _Search Filters_ area is available in both the **Included File Servers** and **Excluded File
Servers** sections. Use it to search for a file server in the respective listing.

1. Click on the _Search Filters_ bar to expand the filter area.
2. Specify a filter expression to search a server by name.

   1. Select _Name_ in the **Attributes** drop-down list. This is the only attribute available for
      performing a search.
   2. Select an option in the **Operators** drop-down list.

      - _Is exactly:_ Displays the server with exactly the same name as you enter in the **Value**
        box.
      - _Contains:_ Displays the servers whose names contain the text you enter in the **Value**
        box.
      - _Starts with:_ Displays the servers whose names start with the text you enter in the
        **Value** box.
      - _Ends with:_ Displays the servers whose names end with the text you enter in the **Value**
        box.

   3. Enter a string in the **Value** box.

3. Click **Apply**. The file servers listing displays the servers that match the criterion.

## Specify File Servers Outside the Criteria

Directory Manager allows you to specify a group or container as criterion to fetch file servers from
there for entitlement management. But since only a single group or container can be specified as
criterion, there may be a situation where you want to specify a server from outside this criterion.
To facilitate this, Directory Manager enables you to search and select file servers in the domain
for entitlement management.

**To specify a file server outside of criteria:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Entitlement** under **Settings** in the left pane.
4. On the **Entitlement** page, click **Include Servers other than Criteria**.
5. The **Find Servers** dialog box, by default, displays file servers from the entire directory that
   reside outside the container or group specified as criteria. Click in the box and select an OU to
   narrow down the server listing.  
   Select the check boxes for the file server(s) to include them for entitlement management.
6. Click **Save**. The selected servers are displayed in the **Included File Servers** area on the
   **Entitlement** page.
7. Click **Save**.

## Include Future Servers for Entitlement Management

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Entitlement** under **Settings** in the left pane.
4. On the **Entitlement** page, select the **Include all future servers** check box to ensure that
   all server objects that are added to the group/container (specified in the **Search Criteria**
   area) in the future are automatically displayed in the **Included File Servers** area for
   entitlement data replication.
5. Click **Save**.

## View the Shared Folders on a File Server

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Entitlement** under **Settings** in the left pane.
4. In the **Included File Servers** area on the **Entitlement** page, click the ellipsis button for
   a server and select **Edit**. On the **Edit Server** dialog box:

   - The **Server Shares** area displays the shared folders on the server.
   - The name of the [GroupID Entitlement Schedule](/docs/directorymanager/11.1/automation/overview.md) that computes
     the permissions on shared files and folders residing on the server and replicates them to
     Elasticsearch, is displayed next to **Job**.

## Exclude a Folder on a Server from Replication

By default, Directory Manager computes and replicates permissions on all shared files/folders on the
configured servers. You can exclude a folder on a server from this activity.

When a folder is excluded, its entitlement data replicated to-date is also cleared.

**To exclude a folder:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Entitlement** under **Settings** in the left pane.
4. In the **Included File Servers** area on the **Entitlement** page, click the ellipsis button for
   a server and select **Edit**.
5. On the **Edit Server** dialog box, the **Server Shares** area displays the shared folders on the
   server. Clear the check box for a folder to exclude it from replication and click **Apply
   Changes**.
6. Click **Save** on the **Entitlement** page.

## Connect to a File Server Using a Different Account

By default, the service account specified for the identity store is used to connect to a file server
for reading and managing the effective permissions assigned to objects on the shared folders. You
can designate a different account for this activity.

**To change the service account for a file server:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Entitlement** under **Settings** in the left pane.
4. In the **Included File Servers** area on the **Entitlement** page, click the ellipsis button for
   a server and select **Edit**.
5. On the **Edit Server** dialog box, you can change the service account used to connect to the
   server for reading and updating permissions. The
   [GroupID Entitlement Schedule](/docs/directorymanager/11.1/automation/overview.md),
   [Entitlement Scope Schedule](/docs/directorymanager/11.1/automation/overview.md), and
   [Entitlement Temporary Permissions Schedule](/docs/directorymanager/11.1/automation/overview.md)
   run in the context of the account specified here.

   - The **Use Identity Store Service Account** check box is selected by default, indicating that
     the service account specified for the identity store is used to connect to the server.
   - To change the account, clear the **Use Identity Store Service Account** check box and specify
     the credentials of an account in the **User name** and **Password** boxes. This account must
     have elevated permissions to manage the effective NTFS permissions for the shared resources on
     the server.  
     On changing the credentials, use the **Reconnect** button to test the connectivity and fetch
     the shared folders again with the given credentials.

6. Click **Apply Changes**.
7. Click **Save** on the **Entitlement** page.

## Replicate Permissions Manually

After adding a file server for entitlement management, it is essential to replicate object
permissions from the file server to Elasticsearch.

The [GroupID Entitlement Schedule](/docs/directorymanager/11.1/automation/overview.md) runs on a set frequency to
replicate the effective NTFS permission for the file servers. You can also run this schedule any
time manually for a specific file server or all file servers listed in the **Included File Servers**
section on the **Entitlement** page.

**To replicate permissions manually:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Entitlement** under **Settings** in the left pane.
4. On the **Entitlement** page, you can manually replicate permissions for one or all file servers.

   - **To replicate permissions for a server:**Select a file server in the **Included File
     Servers** area and click **Replicate**.
   - **To replicate permissions for multiple servers:**In the **Included File Servers** area,
     select the check boxes for the servers you want to replicate. To replicate all servers, select
     the check box in the header row. This displays the following icons:

     **![replicate_permissions](/img/product_docs/directorymanager/directorymanager/admincenter/entitlement/ad/replicate_permissions.webp)**

     Either click the **Replicate** icon or the **Replicate** button.

   This triggers the GroupID Entitlement schedule for the identity store, which computes and
   replicates the effective NTFS permissions granted to directory objects on shared resources on
   the server(s). This process may take some time.

   The **Last Replicated** column displays the date and time the GroupID Entitlement schedule last
   ran.

## Exclude a Server From Entitlement Management

You can exclude a file server in the identity store from replication and entitlement management.

**To exclude a file server:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Entitlement** under **Settings** in the left pane.
4. On the **Entitlement** page, you can exclude one or more servers.

   - **To exclude a server:**In the **Included File Servers** area, click the ellipsis button for a
     server and select **Add to Exclude Server List**. The server is moved to the **Excluded File
     Servers** area.
   - **To exclude multiple servers:**

     In the **Included File Servers** area, select the check boxes for the servers you do not
     want to replicate. To exclude all servers, select the check box in the header row. This
     displays the following icons:

     ![replicate_permissions](/img/product_docs/directorymanager/directorymanager/admincenter/entitlement/ad/replicate_permissions.webp)

     Click **Remove**. The servers are moved to the **Excluded File Servers** area.

5. Click **Save**.

## Restore a Server for Entitlement Management

You can restore an excluded server in the identity store for replication and entitlement management.

**To restore an excluded server:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Entitlement** under **Settings** in the left pane.
4. On the **Entitlement** page, the **Excluded File Servers** area displays the file servers
   excluded from replication. Click **Remove** for a server to move it to the **Included File
   Servers** area.
5. Click **Save**.

See Also

- [Entitlement](/docs/directorymanager/11.1/configuration/entitlements.md)
- [Manage SharePoint Sites](/docs/directorymanager/11.1/configuration/entitlements.md)

# Manage SharePoint Sites

An Entra ID user, who is:

- logged-in to the Admin Center

- a non-MFA user (i.e. multifactor authentication is not enabled for the user)

An Entra ID user can add and configure SharePoint sites in an Entra ID identity store to replicate
their entitlement data to Elasticsearch for Directory Manager. The user can then manage permissions
on the sites and the document libraries in those sites using Directory Manager.

The user can also manage certain settings for a site, such as change the service account for reading
and managing permissions and exclude a document library in a site from entitlement management.

What do you want to do?

- Specify SharePoint Sites for Entitlement Management
- Include Future Sites for Entitlement Management
- View the Document Libraries in a Site
- Exclude a Document Library from Replication
- Connect to a Site Using a Different Account
- Replicate Permissions Manually
- Exclude a Site from Entitlement Management
- Restore a Site for Entitlement Management

## Specify SharePoint Sites for Entitlement Management

Provide the SharePoint admin URL and credentials to connect to SharePoint. Directory Manager fetches
all the sites under it to replicate the permissions on document libraries there.

Follow the steps to provide the SharePoint Admin URL.

In Admin Center, click **Identity Stores** in the left pane.

Step 1 – On the Identify Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 2 – Click **Entitlement** under **Settings** in the left pane. The Entitlement page is
displayed. When no SharePoint site is defined, the page is blank.

Step 3 – Click **Set up SharePoint Site** and then click **Configure New Site**.

Step 4 – On the Configure New Site dialog box:

- In the Site URLox, enter the **SharePoint admin URL** to fetch the sites.

- In the User name and Password boxes, provide the credentials of a service account to connect to
  the site for managing entitlements.
- In the Application ID box, provide the application ID assigned to the Directory Manager
  application when you registered it in Microsoft Entra Admin Center.
- Click **Add Site**.  
  The URL of this site is displayed in the SharePoint Admin URL box on the Entitlement page. All
  sites under it are displayed in the Included SharePoint sites area.

Step 5 – Click **Save**.

#### SharePoint Site Details

The information displayed for a site in the Included SharePoint Sites area is the same as displayed
for a file server in an Active Directory identity store. Refer to the
[File Server Details ](/docs/directorymanager/11.1/configuration/entitlements.md#file-server-details) topic for more info. Though in this
case, the User namecolumn displays the username of the account used to connect to the site, and it
is not blank.

#### Search SharePoint Sites

Use the _Search Filters_ option in the Included SharePoint Sites area to search for a site in the
listing. The filters are the same as displayed for a file server in an Active Directory identity
store. Refer to the [Search File Servers ](/docs/directorymanager/11.1/configuration/entitlements.md#search-file-servers) topic for performing
a search.

## Include Future Sites for Entitlement Management

Follow the steps to include future sites for entitlement management.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – On the **Entitlement** page, select the **Include all Future Sites** check box to ensure
that any new site created under the SharePoint admin URL is automatically fetched and displayed in
the **Included SharePoint Sites** area for permission replication.

Step 5 – Click **Save**.

## View the Document Libraries in a Site

Follow the steps to view the document libraries in a site.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identify Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under Settings in the left pane.

Step 4 – In the Included SharePoint Sites area on the **Entitlement** page, click the ellipsis
button for a site and select **Edit**. On the **Edit Site** dialog box:

- The Site Libraries area displays the document libraries in the site.
- The name of the [GroupID Entitlement Schedule](/docs/directorymanager/11.1/automation/overview.md) that computes the
  permissions on document libraries in the site and replicates them to Elasticsearch, is displayed
  next to **Job**.

## Exclude a Document Library from Replication

By default, Directory Manager computes and replicates permissions on all document libraries in the
SharePoint sites that fall under the admin URL. You can exclude a document library in a site from
this activity.

When a document library is excluded, its entitlement data replicated to-date is also cleared.

Follow the steps to exclude a document library.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identify Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under Settings in the left pane.

Step 4 – In the Included SharePoint Sites area on the **Entitlement** page, click the ellipsis
button for a site and select **Edit**.

Step 5 – On the Edit Site dialog box, the **Site Libraries** area displays the document libraries in
the site. Clear the check box for a library to exclude it from replication and click **Apply
Changes**.

Step 6 – Click **Save** on the Entitlement page.

## Connect to a Site Using a Different Account

Directory Manager connects to a site using the service account specified while configuring the
SharePoint admin URL for reading and managing the effective permissions assigned to objects on the
document libraries. You can designate a different account for this activity.

Follow the steps to change the service account for a site.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – In the **Included SharePoint Sites** area on the **Entitlement** page, click the ellipsis
button for a site and select **Edit**.

Step 5 – On the **Edit Site** dialog box, you can change the service account used to connect to the
site for reading and updating permissions. The
[GroupID Entitlement Schedule](/docs/directorymanager/11.1/automation/overview.md),
[Entitlement Scope Schedule](/docs/directorymanager/11.1/automation/overview.md), and
[Entitlement Temporary Permissions Schedule](/docs/directorymanager/11.1/automation/overview.md) run
in the context of the account specified here.

- The User name and Password boxes display the credentials of the account used to connect to the
  site. You can connect using a different account by providing the credentials of that account.

  Or

- Select the **Use Identity Store Service Account** check box to use the service account specified
  for the identity store to connect to the site.

The account must have elevated permissions to the Microsoft web applications that host the site in
order to read and manage the effective permissions on the document libraries in the site.  
On changing the credentials, use the **Reconnect** button to test the connectivity and fetch the
document libraries again with the given credentials.

Step 1 – Click **Apply Changes**.

Step 2 – Click **Save** on the Entitlement page.

## Replicate Permissions Manually

After adding the SharePoint admin URL to manage entitlements for document libraries in the sites, it
is essential to replicate object permissions from the SharePoint server to Elasticsearch.

The [GroupID Entitlement Schedule](/docs/directorymanager/11.1/automation/overview.md) runs on a set frequency to
replicate the effective permissions on document libraries in the sites. You can also run this
schedule any time manually for a site listed in the Included SharePoint sites area on the
Entitlementpage.

Follow the steps to replicate permissions manually.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – On the Entitlement page, you can manually replicate permissions for one or all sites.

- To replicate permissions for a site – Select a site in the **Included SharePoint Sites** area and
  click **Replicate**.
- To replicate permissions for multiple sites – Select the check boxes for the sites you want to
  replicate. To replicate all sites, select the check box in the header row. This displays the
  following icons:

  ![replicate_permissions](/img/product_docs/directorymanager/directorymanager/admincenter/entitlement/ad/replicate_permissions.webp)

  Either click the **Replicate** icon or the **Replicate** button.

This triggers the GroupID Entitlement schedule for the identity store, which computes and replicates
the effective permissions granted to directory objects on document libraries in the site(s). This
process may take some time.  
The Last Replicated column displays the date and time the GroupID Entitlement schedule last ran.

## Exclude a Site from Entitlement Management

You can exclude a SharePoint site from replication and entitlement management.

Follow the steps to exclude a site or subsite. **To exclude a site or subsite:**

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under **Settings** in the left pane.

Step 4 – On the **Entitlement** page, you can exclude one or more sites.

- **To exclude a site:**

  Click the ellipsis button for a site and select **Add to Exclude Site List**. The site is moved
  to the **Excluded SharePoint Sites** area.

- **To exclude multiple sites:**

  Select the check boxes for the sites you do not want to replicate. To exclude all sites, select
  the check box in the header row. This displays the following icons:

  ![replicate_permissions](/img/product_docs/directorymanager/directorymanager/admincenter/entitlement/ad/replicate_permissions.webp)

  Click **Remove**. The sites are moved to the **Excluded SharePoint Sites** area.

Step 5 – Click **Save**.

## Restore a Site for Entitlement Management

You can restore an excluded SharePoint site for replication and entitlement management.

Follow the steps to restore an excluded site.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identify Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Entitlement** under Settings in the left pane.

Step 4 – On the Entitlement page, the **Excluded SharePoint Sites** area displays the sites excluded
from replication.  
Click **Remove** for a site to move it to the **Included SharePoint Sites** area.

Step 5 – Click **Save**.

See Also

- [Entitlement](/docs/directorymanager/11.1/configuration/entitlements.md)
- [Manage File Servers](/docs/directorymanager/11.1/configuration/entitlements.md)

# Entitlement

Directory Manager Entitlement enables you to stay informed on the permissions assigned to objects
residing on your Active Directory servers and SharePoint sites.

## Entitlement for Active Directory

With Entitlement, you can view and update the effective NTFS permissions assigned to a user or group
on shared files and folders, that reside on a file server in your environment. You can:

- Select an object, such as a user or group, to view and update the permissions assigned to it on
  shared files and folders residing on a server.
- Select a file or folder to view a list of objects that have been granted permissions to it. You
  can also add and remove objects from the permissions list of the file or folder as well as update
  the permissions.

Entitlement types include:

- Explicit permissions
- Inherited permissions from a folder

To facilitate entitlement management for an Active Directory identity store in Directory Manager, do
the following:

- Specify one or more file servers in identity store configurations.
- Compute the permissions assigned to directory objects on the shared files and folders on those
  file server(s), and replicate those permissions to Elasticsearch.
- View and manage entitlements in the Entitlement section of the Directory Manager portal.

See the [Manage File Servers](/docs/directorymanager/11.1/configuration/entitlements.md) topic for additional information.

## Entitlement for SharePoint

With Entitlement, you can view and manage the effective permissions for a user or group on document
libraries in a SharePoint site. You can:

- Select an object, such as a user or group, to view and update the levels and permissions assigned
  to it on document libraries in a site.
- Select a file or folder to view a list of objects that have been granted permissions to it. You
  can also add and remove objects from the permissions list of the file or folder as well as update
  the permissions.

Permission types include:

- Explicit permissions
- Inherited permissions from a document library

To facilitate entitlement management for a Microsoft Entra ID identity store in Directory Manager,
do the following:

- Specify the admin URL for SharePoint in identity store configurations to fetch the sites.
- Compute the permissions assigned to directory objects on the document libraries in those sites,
  and replicate those permissions to Elasticsearch.
- View and manage entitlements in the Entitlement section of the Directory Manager portal.

See the [Manage SharePoint Sites](/docs/directorymanager/11.1/configuration/entitlements.md) topic for additional information.

## Perpetual Entitlements vs Temporary Entitlements

Using Directory Manager, you can manage entitlements in the following ways:

- **Assign and revoke permissions on a perpetual basis** - When a permission is assigned
  perpetually, it continues to apply until you choose to revoke it. Similarly, when a permission is
  revoked perpetually, it stays so until you choose to reapply it.
- **Assign and revoke permissions on a temporary basis** - A temporary permission is one with a
  start and end date specified. In case of temporary assignment, Directory Manager auto assigns the
  permission on the start date and revokes it on the end date. Similarly, for temporary removal,
  Directory Manager revokes the permission on the start date and reassigns it on the end date.

## Entitlement Schedules

When you add the first server or site for entitlement management, the following three schedules are
automatically created in the identity store:

- [GroupID Entitlement Schedule](/docs/directorymanager/11.1/automation/overview.md) - replicates object permissions on file
  servers and SharePoint sites for an Active Directory and Microsoft Entra ID identity store
  respectively. It performs a complete replication.
- [Entitlement Scope Schedule](/docs/directorymanager/11.1/automation/overview.md) - replicates changes made to object
  permissions on file servers and SharePoint sites using Directory Manager.
- [Entitlement Temporary Permissions Schedule](/docs/directorymanager/11.1/automation/overview.md) -
  updates the temporary permissions for objects on file servers and SharePoint sites.

## What is Replication?

When a file server/SharePoint site is added for entitlement management, an essential task is to
replicate object permissions from the file server or SharePoint site to the Elasticsearch
repository. The GroupID Entitlement schedule for an identity store performs this replication, which
involves the following:

- Directory Manager first computes the effective NTFS permissions granted to directory objects on
  shared files and folders at granular level. For SharePoint sites, it computes the permissions
  granted to objects on document libraries.
- The Data service then replicates this data to Elasticsearch.

The GroupID Entitlement schedule auto runs at a set frequency, but you can also run it manually for
a file server or SharePoint site. Directory Manager time stamps the last time permissions were
replicated.

## Entitlement-related Permissions for Security Roles

You can grant permissions to security roles in an identity store on the Entitlement section in the
Directory Manager portal. Based on these permissions, role members can performs different actions,
such as navigate file servers and SharePoint sites, grant permissions to objects on shared
resources, revoke permissions, and more.

Entitlement-related permissions for a security role are discussed in the
[Entitlement](/docs/directorymanager/11.1/administration/permissions.md#entitlement) topic.

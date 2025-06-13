# Manage General Server Settings

You can manage general server settings for a portal, such as change it's display name, associate identity stores with it, and view it's various deployments.

What do you want to do?

- [Change a Portal's Display Name](#Change-a-Portals-Display-Name)
- [Associate Identity Stores with a Portal](#Associate-Identity-Stores-with-a-Portal)
- [View the Deployment(s) for a Portal](#View-the-Deployments-for-a-Portal)

## Change a Portal's Display Name

A portal is assigned an _application name_ during creation, which is used as it's display name in GroupID. On changing it, the portal is displayed with the
new name.

__To change a portal's display name:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info, including its name.
2. Click the ellipsis button for a portal and select __Settings__.
3. On the __General Settings__ page, enter a new name for the portal in the __Application Name__ box.
4. Click __Save__.

## Associate Identity Stores with a Portal

You must associate one or more identity stores with a portal. When signing into the portal, a user must select an identity store to connect to, for performing group and identity management operations for that identity store.

Users can connect a portal to an associated identity store only.

__To associate an identity store:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info, including the identity stores associated with it.
2. Click the ellipsis button for a portal and select __Settings__.
3. The __Identity Stores__ area on the __General Settings__ page lists the identity stores in GroupID. It displays the provider type the identity
   store is created for, and whether the identity store is enabled.

   - Select the check box for an identity store to associate it with the portal.
   - Clear the check box for an identity store to dissociate it.

   All instances of this portal serve the identity store(s) you select here.
4. Click __Save.__

NOTE: You may observe the following message on the __Server Settings – General__ page:

![linked_message](/img/versioned_docs/groupid_11.0/groupid/admincenter/portal/linked_message.png)

It relates to the scenario when identity stores in GroupID have been linked, as discussed in the [Linked Identity Stores and the GroupID Portal](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/link/overview.md#Linked-Identity-Stores-and-the-GroupID-Portal) topic. Hence, when two identity stores, IdentityStoreA and IdentityStoreB, are linked and you associate IdentityStoreA with the portal, this message is displayed. It alerts you to associate the second identity store in the linked pair (dentityStoreB) with
the portal too, in order to benefit from the linking.

## View the Deployment(s) for a Portal

A portal can have multiple deployments in the same or different web servers. You can update certain settings for each deployment instance of a portal.

__To view a portal’s deployment instances:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info, including all its deployment instances.
2. Click the ellipsis button for a portal and select __Settings__.
3. Click __Deployments__ under __Server Settings__.
4. The __Deployment Settings__ page has varying tabs, depending on the deployment instances of the portal.

   - The __IIS__ tab is available when one or more portal instances are deployed in native IIS. Select an instance to view the name of the instance directory in IIS, the IIS site that hosts the instance, the URL
     for the instance, the Data service and Security service associated with the instance, and logging levels. See the [Manage Settings for a Native IIS Deployment](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/nativeiis.md) topic for details.
   - The __Remote IIS__ tab is available when one or more portal instances are deployed in remote IIS. Select an instance to view the Microsoft IIS Administration API URL and access token that GroupID uses to
     communicate with the remote IIS server, the credentials used to communicate with the API, the site that hosts the instance, the Data service and Security service associated with the instance, and logging levels. See the [Manage Settings for a Remote IIS Deployment](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/remoteiis.md) topic for details.
   - The __Docker__ tab is available when one or more portal instances are deployed in Docker. Select an instance to view the port and Service URL used for deployment. See the [Manage Settings for a Docker Deployment](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/docker.md) topic for details.

__See Also__

- [Create a GroupID Portal](/versioned_docs/groupid_11.0/groupid/admincenter/portal/create.md)

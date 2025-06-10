# Manage General Server Settings

You can manage general server settings for a portal, such as change its display name, associate identity stores with it, and view its various deployments.

## Change a Portal's Display Name

A portal is assigned an _application name_ during creation, which is used as it's display name in Directory Manager. On changing it, the portal is displayed with the
new name.

__To change a portal's display name:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info, including its name. You can differentiate between a standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select __Settings__.
3. On the __General Settings__ page, enter a new name for the portal in the __Application Name__ box.
4. Click __Save__.

## Associate Identity Stores with a Portal

You must associate one or more identity stores with a portal. When signing into the portal, a user must select an identity store to connect to, for performing group and identity management operations for that identity store. Similarly, when signing into the Self-Service Password Reset portal (SSPR), a user must select an identity store to connect to, for performing password management functions.

__To associate an identity store:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info, including the identity stores associated with it. You can differentiate between a standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select __Settings__.
3. The __Identity Stores__ area on the __General Settings__ page lists the identity stores in Directory Manager. It displays the provider type the identity
   store is created for, and whether the identity store is enabled.

   - Select the check box for an identity store to associate it with the portal.
   - Clear the check box for an identity store to dissociate it.

   All instances of this portal serve the identity store(s) you select here.
4. Click __Save.__

NOTE: You may observe the following message on the __Server Settings – General__ page:

![linked_message](/img/product_docs/groupid/groupid/admincenter/portal/linked_message.webp)

It relates to the scenario when identity stores in Directory Manager have been linked, as discussed in the [Linked Identity Stores and the Directory Manager Portal](/docs/groupid/groupid/admincenter/identitystore/link/overview.md#linked-identity-stores-and-the-directory-manager-portal) topic. Hence, when two identity stores, IdentityStoreA and IdentityStoreB, are linked and you associate IdentityStoreA with the portal, this message is displayed. It alerts you to associate the second identity store in the linked pair (dentityStoreB) with
the portal too, in order to benefit from the linking.

## View the Deployment(s) for a Portal

A portal can have multiple deployments in the same or different web servers. You can update certain settings for each deployment instance of a portal.

__To view a portal’s deployment instances:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info, including all its deployment instances. You can differentiate between a standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select __Settings__.
3. Click __Deployments__ under __Server Settings__.
4. The __Deployment Settings__ page has varying tabs, depending on the deployment instances of the portal.

   - The __IIS__ tab is available when one or more portal instances are deployed in native IIS. Select an instance to view the name of the instance directory in IIS, the IIS site that hosts the instance, the URL
     for the instance, the Data service and Security service associated with the instance, and logging levels. See the [Manage Settings for a Native IIS Deployment](/docs/groupid/groupid/admincenter/portal/server/nativeiis.md) topic for details.
   - The __Remote IIS__ tab is available when one or more portal instances are deployed in remote IIS. Select an instance to view the Microsoft IIS Administration API URL and access token that Directory Manager uses to
     communicate with the remote IIS server, the credentials used to communicate with the API, the site that hosts the instance, the Data service and Security service associated with the instance, and logging levels. See the [Manage Settings for a Remote IIS Deployment](/docs/groupid/groupid/admincenter/portal/server/remoteiis.md) topic for details.
   - The __Docker__ tab is available when one or more portal instances are deployed in Docker. Select an instance to view the port and Service URL used for deployment. See the [Manage Settings for a Docker Deployment](/docs/groupid/groupid/admincenter/portal/server/docker.md) topic for details.

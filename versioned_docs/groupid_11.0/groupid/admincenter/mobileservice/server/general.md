# Manage General Server Settings

You can change the display name of a Mobile service and associate identity stores with it.

What do you want to do?

- [Change a Service’s Display Name](#Change-a-Services-Display-Name)
- [Associate Identity Stores with a Service](#Associate-Identity-Stores-with-a-Service)

## Change a Service’s Display Name

See
the [Change a Service’s Display Name](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#Change-a-Services-Display-Name) topic.

## Associate Identity Stores with a Service

You must associate one or more identity stores with a Mobile service. When users configure the app with a particular service, the identity stores associated with that service will be available in the app for logging in.

__To associate an identity store:__

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Mobile Service__ tab, click the ellipsis button for a service and select __Settings__.
3. The __Identity Stores__ area on the __General Settings__ page lists the identity stores defined in Admin Center. It displays the provider type an identity store is created
   for, and whether the identity store is enabled.

   - Select the check box for an identity store to associate it with the service.
   - Clear the check box for an identity store to dissociate it.

   All instances of this Mobile service serve the identity stores you select here.
4. Click __Save__.

__See Also__

- [Mobile Service](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/overview.md)
- [Server Settings](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/server/overview.md)

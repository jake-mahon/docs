# Manage an Identity Store

Once you create and configure an identity store, you can perform group and identity management operations in the identity provider using Directory Manager.

What do you want to do?

- View Identity Store Details
- Enable or Disable an Identity Store
- Update General Info for an Identity Store
- Exclude an Active Directory Domain from Replication
- Set DC Priority for an Active Directory Identity Store
- Delete an Identity Store

## View Identity Store Details

In Admin Center, click __Identity Stores__ in the left pane. The __Identity Stores__ page displays the identity stores created in Directory Manager.

The card for an identity store displays the following information:

| Info | Description |
| --- | --- |
| Basic info | The display name of the identity store and the identity provider it is built on, such as Active Directory. |
| Identity store status | The status is displayed on the top right corner of the card.  An identity store has one of the following statuses:   - __Healthy:__ Indicates that the identity store is fully functional. Hover the mouse over the status to view the factors used to determine health. - __Errors:__ Indicates that the identity store has run into one or both of the following errors:    - It cannot connect to the identity provider using the service account provided on the __Identity Store Details__ page.   - Data from the provider is not replicated to Elasticsearch within the required time interval. The last replication time and date is displayed at the bottom of the card. Hover the mouse over the status to view the reason for the _Errors_ status. |
| History | Indicates whether history tracking for the identity store is enabled or disabled.  See the [Configure History Tracking](/docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/historytracking.md) topic to enable or disable history tracking. |
| MFA | Indicates whether second factor authentication is enabled for security roles in the identity store. See the [Configure Second Factor Authentication](/docs/groupid/groupid/admincenter/setupauth/sfa.md) topic.  One of the following is displayed for MFA:   - __Available for x/x roles:__ Indicates the number of security roles that second factor authentication is enabled for, out of the total security roles in the identity store. For example, 1/3 indicates that there are 3 security roles defined   for the identity store and second factor authentication is enabled for one of those roles. - __Not Available:__ Indicates that second factor authentication is not enabled for any security role in the identity store. |
| Last replication date and time | The last run date and time of the Replication service. If the service does not run at the specified interval, the identity store status changes to __Errors__. |
| Ellipsis | Click it to launch a shortcut menu with the following options:   - __Edit:__ launches the identity store properties page, where you can manage identity store settings, workflows, security roles, replication attributes, and more. See the [Configure an Identity Store](/docs/groupid/groupid/admincenter/identitystore/configure.md)   topic. - __Disable:__ disables the identity store. - __Replicate Objects:__ runs the Replication service to replicate object data in the identity store. See the [Force Run the Replication Service (for Object Replication)](/docs/groupid/groupid/admincenter/identitystore/replication.md#force-run-the-replication-service-for-object-replication) topic. - __Replicate Deleted Objects:__ runs the Replication service to remove those objects from Elasticsearch that have been deleted from the identity provider. See the [Force Run the Replication Service (for Deleting Objects)](/docs/groupid/groupid/admincenter/identitystore/replication.md#force-run-the-replication-service-for-deleting-objects) topic. - __Delete:__ deletes the identity store from Directory Manager. |

## Enable or Disable an Identity Store

When you disable an identity store, all users logged into Directory Manager with that store are logged out, and the identity store is unavailable for operations.

You can disable an identity store in any of the following ways. However, a disabled identity store can be enabled using __Method 1__ only.

__Method 1: Enable or disable an identity store__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Enable__ or __Disable__.

__Method 2: Disable an identity store__

1. In Admin Center, click Identity Stores in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. On the __Identity Store Details__ page, use the toggle button in the top right to disable the identity store.
4. Click __Save__.

## Update General Info for an Identity Store

You can change the display name for an identity store, add a description for it, change the service account credentials to connect to the identity provider, and update any other information you provided while creating it.

__To update the info:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. On the __Identity Store Details__ page, update the required information on the __General__ tab.  
   This page differs by provider. Refer to the steps for creating the respective provider in the [Create an Identity Store](/docs/groupid/groupid/admincenter/identitystore/create.md) topic for more information.
4. Click __Save__.

## Exclude an Active Directory Domain from Replication

By default, Directory Manager replicates the domain specified for the identity store and its child domains. You can exclude a domain or a child domain from replication, in which case the Replication service will not replicate it. See the [Elasticsearch and Replication ](/docs/groupid/groupid/admincenter/replication/overview.md) topic.

You can still create and manage objects in an excluded domain using Directory Manager.

__To exclude a domain:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. On the __Identity Store Details__ page, click the __Connection__ tab.
4. In the __Excluded Domains__ areas, select the check boxes for the domains you want to exclude from replication.  
   To select all domains, select the check box in the header area.
5. Click __Save__.

## Set DC Priority for an Active Directory Identity Store

You can select a domain controller in an Active Directory domain to work with Directory Manager. Data service and Replication service will connect to this domain controller to perform their respective operations in the domain. In this way, you can ensure
that the selected domain controller is always available with minimum downtime.

To understand how the DC priority function works, let’s assume the following:

- gene.local is your parent domain with two child domains.
- You have four domain controllers in the parent domain: DC_N, DC_S, DC_E, and DC_W.
- You also have two domain controllers in each of the two child domains.

You can set a separate DC priority list for the parent domain and each of the child domains.

To create a DC priority list for a domain, list the domain controllers in the order of priority. Let’s say you set priority for the parent domain as:

Priority 1:     DC_E  
Priority 2:    DC_S  
DC_N and DC_W are not included in your priority list.

When the Data service restarts for reasons such as IIS restart, it does the following:

- The Data service attempts to connect to the first domain controller in the priority list, i.e., DC_E.
- If DC_E is not available, the Data service attempts to connect to the second domain controller in the priority list, i.e., DC_S.
- If DC_S is not available either, the Data service will resort to the normal lookup process.

Normal lookup process for Data service

Data service makes a connection with a domain controller through the System.DirectoryServices API. It sends a request to the API, which, in turn, connects to any domain controller in the domain. In this way, Data Service communicates
with the domain controller to perform the required function.

System.DirectoryServices does not evaluate the domain controller in the DC priority list for creating a connection. Hence, in the above example, the API will connect to DC_N or DC_W.

“Server Not Operational” error

When Data service connects to a domain controller (say DC_E), it caches the domain logon information and uses it to create all subsequent sessions with the domain controller. Hence it does not iterate on the DC priority list every time it has to
create a session.

In case DC_E is down, the ‘Server Not Operational” error will be displayed in Directory Manager. It indicates that Data service has lost connection with the domain and needs to re-establish a connection.

To resolve the error, restart IIS. In this way, Data service will make a connection again using the process discussed above. It will connect to a different domain controller and cache the domain logon information (and continue to make a session with
this domain controller unless Data service is restarted).

DC priority and Replication

Every time the Replication service is triggered, it consults the DC priority list to connect to a domain controller for replication. If it is unable to connect to any domain controller in the priority list, it reverts to the normal lookup process
to connect to a domain controller in the domain.

In a nutshell

- If DC priority is defined for a domain, Data service and Replication service will connect to a domain controller in the domain using the defined DC priority list. If no domain controller in the list is available, the services will rely on the normal lookup process to connect to a domain controller in the domain.
- If DC priority is not defined for a domain, Data service and Replication service will connect to it using the normal lookup process.

__To set DC priority for a domain:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. On the __Identity Store Details__ page, click the __Connection__ tab. The __DC Priority__ area displays two options:

   - __Set default priority:__ This tile is selected by default and indicates that no DC priority is set for the identity store domain. As a result, Data service and Replication service will connect to it using the normal lookup process.
   - __Choose my own priority:__ Select this tile to set a DC priority list for the identity store domain and its child domains, if any.
4. On selecting the __Choose my own priority__ tile, the following fields are displayed:

   1. __Select Domain:__ This drop-down list displays the identity store domain and its child domains, if any. Excluded domains are not listed. Select a domain to define a DC priority list for it.  
      Note that each domain in the list has either _Priority set_ or _Default Priority_ displayed next to it.

      - _Priority set:_ indicates that DC priority has been defined for the domain, even if it is set for one DC and not for all DCs in the domain.
      - _Default Priority:_ indicates that priority has not been set for any DC in the domain.
   2. The table displays the domain controllers in the selected domain. The __DC Name__ column displays the name of the DC while the __Priority__ column displays the priority assigned to it, with ‘1’ being the highest priority. When no priority is assigned to a DC, _Not set_ is displayed for it.   
      You can choose to assign priority to selected DCs in the domain. For example, if a domain has 4 DCs, you can set priority for two and leave the rest.

      - To assign priority to a domain controller, click __Set priority__ for it. The __Priority__ column displays the priority assigned to it. To revoke priority, click __Reset priority__.
      - To change the priority for a DC, click in the row, hold down the left mouse button, and drag to change its position in the list. By default, "1" is assigned as priority to the first DC in the list, followed by '2' to the second DC in the list, and so on.
      - To revoke priority for all DCs in the domain, click __Reset all to default__. With this, _Default Priority_ is displayed next to the domain in name in the __Select Domain__ drop-down list.
5. Click __Save__.

NOTE: When you change the DC priority for a domain or a child domain, it takes effect instantly. Data service reestablishes a connection with a DC based on new priority.

## Delete an Identity Store

You can delete an identity store with all its configurations. As a result, Directory Manager cannot be connected to that identity store, nor can it be used in a Synchronize job.

NOTE: You cannot delete an identity store that has been linked to another identity store. You must first delete the link(s) before deleting the identity store.

__To delete an identity store:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Delete__.

__See Also__

- [Identity Stores](/docs/groupid/groupid/admincenter/identitystore/overview.md)
- [Configure an Identity Store](/docs/groupid/groupid/admincenter/identitystore/configure.md)
- [Replication Service](/docs/groupid/groupid/admincenter/service/replicationservice.md)

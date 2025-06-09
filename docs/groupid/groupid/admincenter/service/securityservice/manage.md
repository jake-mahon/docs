# Manage Security Service Settings

Security services in Directory Manager are displayed on the __Security Service__ tab. A card for a service displays information such as its name and status.

You can manage several settings for a service, such as:

- Change the name of a service
- Start or stop a service
- Configure file logging for a service
- Delete a service

## View Service Details

Follow the steps to view the service details.

Step 1 – In Admin Center, click __Applications__ in the left pane.

Step 2 – On the __Applications__ page, click the __Security Service__ tab.  
The tab displays the default Security service created while configuring Directory Manager and any other Security service that you have created. When multiple Directory Manager instances have been deployed, you will find multiple default Security services on this tab page, as each instance has its own default Security service. See the [Elasticsearch Clusters, Nodes, and Directory Manager](/docs/groupid/groupid/admincenter/service/overview.md#Elasticsearch-Clusters-Nodes-and-Directory-Manager) topic for additional information.  
For details displayed on a service card, see the table in the [View Data Service Details](/docs/groupid/groupid/admincenter/service/dataservice/manage.md#View-Data-Service-Details) topic.

## Manage Security Service Settings

See
the [Manage Data Service Settings](/docs/groupid/groupid/admincenter/service/dataservice/manage.md) topic to manage settings for a Security service, such as deployment and log settings.

## Manage Advanced Settings

If you have created multiple Security services for load balancing and high availability, the Advanced Settings option enables the services to share session information.

Follow the steps to enable communication between multiple Security services.

Step 1 – In Admin Center, click __Applications__ in the left pane.

Step 2 – On the Applications page, click the __Security Service__ tab.  
The tab displays the default Security service created while configuring Directory Manager and any other Security service that you have created. When multiple Directory Manager instances have been deployed, you will find multiple default Security services on this tab page, as each instance has its own default Security service. See the [Elasticsearch Clusters, Nodes, and Directory Manager](/docs/groupid/groupid/admincenter/service/overview.md#Elasticsearch-Clusters-Nodes-and-Directory-Manager) topics for additional information.  
For details displayed on a service card, see the table in the [View Data Service Details](/docs/groupid/groupid/admincenter/service/dataservice/manage.md#View-Data-Service-Details) topic for additional information.

Step 3 – Click the __ellipsis button__ for a Security service and select __Settings__.

Step 4 – Select __Advanced Settings__ under Server Settings.

Step 5 – Enable the __Distributed Cache__ toggle button to enable communication among defined Security services.

Communication between Security services is now enabled.

## Delete a Security Service

Deleting a Security service removes the following:

- __For a native IIS deployment:__

  - The Security service directory under the following location on the Directory Manager server:  
    X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\  
    (X represents the Directory Manager installation drive)
  - The Security service directory from the website in IIS
- __For a remote IIS deployment:__

  - The service's directory in the remote IIS site
  - The service's physical directory under the folder mapped to the remote IIS site
- __For a Docker deployment:__

  The container created in Docker Engine for the Security service

Follow the steps to delete a Security service.

Step 1 – In Admin Center, click __Applications__ in the left pane.

Step 2 – On the __Applications__ page, click the __Security Service__ tab.

Step 3 – Click the ellipsis button for a Security service and select __Delete__.

NOTE: You cannot delete the default Security service. You cannot also delete a Security service that has been linked with a Directory Manager client, such as the Directory Manager portal.

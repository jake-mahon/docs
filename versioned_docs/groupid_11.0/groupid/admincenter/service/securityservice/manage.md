# Manage Security Service Settings

Security services in GroupID are displayed on the __Security Service__ tab. A card for a service displays information such as its name and status.

You can manage several settings for a service, such as:

- Change the name of a service
- Start or stop a service
- Configure file logging for a service
- Delete a service

What do you want to do?

- [View Service Details](#view-service-details)
- [Manage Security Service Settings](#manage-security-service-settings)
- [Delete a Security Service](#delete-a-security-service)

## View Service Details

1. In Admin Center, click __Applications__ in the left pane.
2. On the __Applications__ page, click the __Security Service__ tab.  
   The tab displays the default Security service created while configuring GroupID and any other Security service that you have created. When multiple GroupID instances have been deployed, you will find multiple default Security services on this tab page, as each instance has its own default Security service. See the [Elasticsearch Clusters, Nodes, and GroupID](/versioned_docs/groupid_11.0/groupid/admincenter/service/overview.md#elasticsearch-clusters-nodes-and-groupid) topic.  
   For details displayed on a service card, see the table in the [View Data Service Details](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#view-data-service-details) topic.

## Manage Security Service Settings

See
the [Manage Data Service Settings](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md) topic to manage settings for a Security service, such as deployment and log settings.

## Delete a Security Service

Deleting a Security service removes the following:

- __For a native IIS deployment:__

  - The Security service directory under the following location on the GroupID server:  
    X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\  
    (X represents the GroupID installation drive)
  - The Security service directory from the website in IIS
- __For a remote IIS deployment:__

  - The service's directory in the remote IIS site
  - The service's physical directory under the folder mapped to the remote IIS site
- __For a Docker deployment:__

  The container created in Docker Engine for the Security service

__To delete a Security service:__

1. In Admin Center, click __Applications__ in the left pane.
2. On the __Applications__ page, click the __Security Service__ tab.
3. Click the ellipsis button for a Security service and select __Delete__.

NOTE: You cannot delete the default Security service. You cannot also delete a Security service that has been linked with a GroupID client, such as the GroupID portal or a Mobile service.

See Also

- [GroupID Applications](/versioned_docs/groupid_11.0/groupid/admincenter/portal/applications.md)
- [Services](/versioned_docs/groupid_11.0/groupid/admincenter/service/overview.md)
- [Create a Security Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/securityservice/create.md)

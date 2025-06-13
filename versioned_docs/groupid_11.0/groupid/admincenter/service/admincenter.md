# Admin Center

Admin Center enables administrators to configure settings that are used by different functions of the application and manage GroupID clients.

When multiple instances of GroupID are deployed, a separate Admin Center application is created for each instance in native IIS.

What do you want to do?

- [View Admin Center Hosting Details](#View-Admin-Center-Hosting-Details)
- [Launch Admin Center](#Launch-Admin-Center)
- [Change the Application Display Name](#Change-the-Application-Display-Name)
- [View Deployment Settings](#View-Deployment-Settings)
- [Configure Event Logging](#Configure-Event-Logging)

## View Admin Center Hosting Details

1. In Admin Center, click __Applications__ in the left pane.
2. On the __Applications__ page, click the __Admin Center__ tab.  
   The tab displays Admin Center hosted in native IIS. When multiple GroupID instances have been deployed, you will find multiple Admin Center cards on this tab page, each card representing a separate instance. See the [Elasticsearch Clusters, Nodes, and GroupID](/versioned_docs/groupid_11.0/groupid/admincenter/service/overview.md#Elasticsearch-Clusters-Nodes-and-GroupID) topic.  
   For details displayed on an Admin Center card, see the table in the [View Data Service Details](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#View-Data-Service-Details) topic.

   You cannot create an Admin Center application or delete an existing one from Admin Center.

## Launch Admin Center

1. In Admin Center, click __Applications__ in the left pane.
2. On the __Admin Center__ tab, click __Launch Application__ on an Admin Center card.  
   Provide the Admin Center URL to admin and helpdesk users so they can access
   it. You can either copy the URL from the address bar or from Admin Center deployment settings. See the See
   the [View the Launch URL for a Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#View-the-Launch-URL-for-a-Service) topic.

## Change the Application Display Name

To change the display name of the Admin Center application, see the [Change a Service’s Display Name](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#Change-a-Services-Display-Name) topic. Replace references to the service with Admin Center.

## View Deployment Settings

You can view deployment settings for Admin Center, such as the IIS site that hosts it, the IIS Application name given to it, and the URL to launch it.

To view deployment settings:

1. In Admin Center, click __Applications__ in the left pane.
2. On the __Admin Center__ tab, click the ellipsis button on an Admin Center card and select __Settings__.
3. Click __Deployments__ under __Server Settings__. The __Deployment Settings__ page is displayed, where you can view Admin Center deployment details in native IIS.

## Configure Event Logging

To configure file logging and Windows logging for Admin Center, see the [Specify Log Settings for a Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#Specify-Log-Settings-for-a-Service) topic.

__See Also__

- [GroupID Applications](/versioned_docs/groupid_11.0/groupid/admincenter/portal/applications.md)
- [Services](/versioned_docs/groupid_11.0/groupid/admincenter/service/overview.md)

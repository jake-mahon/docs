# Admin Center

Admin Center enables administrators to configure settings that are used by different functions of the application and manage Directory Manager clients.

When multiple instances of Directory Manager are deployed, a separate Admin Center application is created for each instance in native IIS.

## View Admin Center Hosting Details

Follow the steps to view Admin Center Hosting details.

Step 1 – In Admin Center, click __Applications__ in the left pane.

Step 2 – On the Applications page, click the __Admin Center__ tab.  
The tab displays Admin Center hosted in native IIS. When multiple Directory Manager instances have been deployed, you will find multiple Admin Center cards on this tab page, each card representing a separate instance. See the [Elasticsearch Clusters, Nodes, and Directory Manager](/docs/groupid/groupid/admincenter/service/overview.md#Elasticsearch-Clusters-Nodes-and-Directory-Manager) topic.  
For details displayed on an Admin Center card, see the table in the [View Data Service Details](/docs/groupid/groupid/admincenter/service/dataservice/manage.md#View-Data-Service-Details) topic for additional information.

You cannot create an Admin Center application or delete an existing one from Admin Center tab.

## Launch Admin Center

Follow the steps to launch Admin Center.

Step 1 – In Admin Center, click __Applications__ in the left pane.

Step 2 – On the Admin Center tab, click __Launch Application__ on an Admin Center card.  
Provide the Admin Center URL to admin and helpdesk users so they can access
it. You can either copy the URL from the address bar or from Admin Center deployment settings. See the See
the [View the Launch URL for a Service](/docs/groupid/groupid/admincenter/service/dataservice/manage.md#View-the-Launch-URL-for-a-Service) topic.

## Change the Application Display Name

To change the display name of the Admin Center application, see the [Change a Service’s Display Name](/docs/groupid/groupid/admincenter/service/dataservice/manage.md#Change-a-Services-Display-Name) topic. Replace references to the service with Admin Center.

## View Deployment Settings

You can view deployment settings for Admin Center, such as the IIS site that hosts it, the IIS Application name given to it, and the URL to launch it.

Follow the steps to view deployment settings.

Step 1 – In Admin Center, click __Applications__ in the left pane.

Step 2 – On the Admin Center tab, click the ellipsis button on an Admin Center card and select __Settings__.

Step 3 – Click __Deployments__ under Server Settings. The Deployment Settings page is displayed, where you can view Admin Center deployment details in native IIS.

## Configure Event Logging

To configure file logging and Windows logging for Admin Center, see the [Specify Log Settings for a Service](/docs/groupid/groupid/admincenter/service/dataservice/manage.md#Specify-Log-Settings-for-a-Service) topic for additional information.

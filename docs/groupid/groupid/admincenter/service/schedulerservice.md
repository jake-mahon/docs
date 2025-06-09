# Scheduler Service

In Directory Manager, schedules perform different tasks in an identity store. They run at a specified frequency to auto execute their respective functions. The Scheduler service is responsible for triggering these schedules at their respective frequency.

## View Scheduler Service Details

Follow the steps to view details of Scheduler service.

Step 1 – In Admin Center, click __Applications__ in the left pane.

Step 2 – On the Applications page, click the __Scheduler Service__ tab.

The tab displays the default Scheduler service(s) hosted in native IIS. The number of services displayed on the tab depend on the number of nodes in all Elasticsearch clusters in your environment, as each cluster has its own Scheduler services. See the [Elasticsearch Clusters, Nodes, and Directory Manager](/docs/groupid/groupid/admincenter/service/overview.md#Elasticsearch-Clusters-Nodes-and-Directory-Manager) topic for additional information.  
For details displayed on a service card, see the table in the [View Data Service Details](/docs/groupid/groupid/admincenter/service/dataservice/manage.md#View-Data-Service-Details) topic.

You cannot create a new Scheduler service or delete the existing one.

## Manage Scheduler Service Settings

You can manage the following settings for a Scheduler service:

- [Change a Service’s Display Name](/docs/groupid/groupid/admincenter/service/dataservice/manage.md#Change-a-Services-Display-Name)
- [Start or Stop a Service](/docs/groupid/groupid/admincenter/service/dataservice/manage.md#Start-or-Stop-a-Service)
- [View the Deployment Settings for a Service](/docs/groupid/groupid/admincenter/service/dataservice/manage.md#View-the-Deployment-Settings-for-a-Service)
- [Specify Log Settings for a Service](/docs/groupid/groupid/admincenter/service/dataservice/manage.md#Specify-Log-Settings-for-a-Service)

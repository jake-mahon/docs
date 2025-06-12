# Scheduler Service

In GroupID, schedules perform different tasks in an identity store. They run at a specified frequency to auto execute their respective functions. The Scheduler service is responsible for triggering these schedules at their respective frequency.

What do you want to do?

- [View Scheduler Service Details](#View-Scheduler-Service-Details)
- [Manage Scheduler Service Settings](#Manage-Scheduler-Service-Settings)

## View Scheduler Service Details

1. In Admin Center, click __Applications__ in the left pane.
2. On the __Applications__ page, click the __Scheduler Service__ tab.

   The tab displays the default Scheduler service(s) hosted in native IIS. The number of services displayed on the tab depend on the number of Elasticsearch clusters in your environment, as each cluster has its own Scheduler service. See the [Elasticsearch Clusters, Nodes, and GroupID](/versioned_docs/groupid_11.0/groupid/admincenter/service/overview.md#Elasticsearch-Clusters-Nodes-and-GroupID) topic.  
   For details displayed on a service card, see the table in the [View Data Service Details](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#View-Data-Service-Details) topic.

   You cannot create a new Scheduler service or delete the existing one

## Manage Scheduler Service Settings

You can manage the following settings for the Scheduler service:

- [Change a Service’s Display Name](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#Change-a-Services-Display-Name)
- [Start or Stop a Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#Start-or-Stop-a-Service)
- [View the Deployment Settings for a Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#View-the-Deployment-Settings-for-a-Service)
- [Specify Log Settings for a Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#Specify-Log-Settings-for-a-Service)

__See Also__

- [GroupID Applications](/versioned_docs/groupid_11.0/groupid/admincenter/portal/applications.md)
- [Services](/versioned_docs/groupid_11.0/groupid/admincenter/service/overview.md)

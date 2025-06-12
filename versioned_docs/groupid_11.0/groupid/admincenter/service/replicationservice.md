# Replication Service

The Replication service replicates the attributes of the following objects from the provider (such as Active Directory) to the Elasticsearch repository.

- Group
- User
- Contact
- Computers
- Organizational Unit

For more on the Replication service, see the [Elasticsearch and Replication ](/versioned_docs/groupid_11.0/groupid/admincenter/replication/overview.md)topic.

The service is also responsible for syncing data between the Elasticsearch clusters in your environment.

What do you want to do?

- [View Replication Service Details](#View-Replication-Service-Details)
- [Manage Replication Service Settings](#Manage-Replication-Service-Settings)
- [Enable Elastic Cluster Syncing](#Enable-Elastic-Cluster-Syncing)

## View Replication Service Details

1. In Admin Center, click __Applications__ in the left pane.
2. On the __Applications__ page, click the __Service__ tab.  
   The tab displays the default Replication service hosted in native IIS. When multiple GroupID instances have been deployed, you will find multiple default Replication services on this tab page, as each instance has its own default Replication service. See the [Elasticsearch Clusters, Nodes, and GroupID](/versioned_docs/groupid_11.0/groupid/admincenter/service/overview.md#Elasticsearch-Clusters-Nodes-and-GroupID) topic.  
   For details displayed on a service card, see the table in the [View Data Service Details](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#View-Data-Service-Details) topic.

   You cannot create a Replication Service or delete an existing one from Admin Center.

## Manage Replication Service Settings

You can manage the following settings for a Replication service:

- [Change a Service’s Display Name](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#Change-a-Services-Display-Name)
- [Start or Stop a Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#Start-or-Stop-a-Service)
- [View the Deployment Settings for a Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#View-the-Deployment-Settings-for-a-Service)
- [Specify Log Settings for a Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#Specify-Log-Settings-for-a-Service)

## Enable Elastic Cluster Syncing

In an environment with multiple Elasticsearch clusters, you can choose to sync data between clusters. You can also specify an interval for syncing.

NOTE: In GroupID, a separate Replication service is created for each node in a cluster. To enable data syncing between clusters, simply enable the sync option for one Replications service within each cluster.

To sync data:

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Applications__ page, click the __Replication Service__ tab.
3. Click the ellipsis button for a service and select __Settings__.
4. Click __Configurations__ under __Server Settings__.
5. On the __Configurations__ page, enable the __Elastic Cluster Syncing__ toggle button to sync data from all other clusters to the cluster that uses this Replication service.  
   If this toggle button is disabled for a cluster (say, ClusterA), data from other clusters will not be synced to ClusterA.  
   Suppose syncing is disabled for ClusterA but enabled for ClusterB and ClusterC. This means that (a) data from ClusterB and ClusterC will not be synced to ClusterA (b) data from ClusterA will be synced to ClusterB and ClusterC.
6. You can specify an interval for syncing data. Click __Edit__ under __Elastic Cluster Syncing Interval__, specify an interval (in seconds) and click the check mark.  
   By default, the interval is set to 5 seconds. You can specify a maximum interval of 900 seconds.
7. Click __Save__.

__See Also__

- [GroupID Applications](/versioned_docs/groupid_11.0/groupid/admincenter/portal/applications.md)
- [Services](/versioned_docs/groupid_11.0/groupid/admincenter/service/overview.md)

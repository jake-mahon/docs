# Manage Data Service Settings

Data services in GroupID are displayed on the __Data Service__ tab. A card for a service displays information such as its name and status.

You can manage several settings for a service, such as:

- Change the display name of a service
- Start or stop a service
- Configure file logging for a service
- Delete a service

What do you want to do?

- [View Data Service Details](#View-Data-Service-Details)
- [Change a Service’s Display Name](#Change-a-Services-Display-Name)
- [Start or Stop a Service](#Start-or-Stop-a-Service)
- [View the Launch URL for a Service](#View-the-Launch-URL-for-a-Service)
- [View the Deployment Settings for a Service](#View-the-Deployment-Settings-for-a-Service)
- [Specify Log Settings for a Service](#Specify-Log-Settings-for-a-Service)
- [Delete a Data Service](#Delete-a-Data-Service)

## View Data Service Details

1. In Admin Center, click __Applications__ in the left pane.
2. On the __Applications__ page, click the __Data Service__ tab. The __Data Service__ tab page is displayed, that lists the default Data service created while configuring GroupID and any other Data service that you have created.  
   When multiple GroupID instances have been deployed, you will find multiple default Data services on this tab page, as each instance has its own default Data service. See the [Elasticsearch Clusters, Nodes, and GroupID](/versioned_docs/groupid_11.0/groupid/admincenter/service/overview.md#Elasticsearch-Clusters-Nodes-and-GroupID) topic.
3. The card for a Data service displays the following information:

   | Info | Description |
   | --- | --- |
   | Name | The name given to the service.  For a Mobile service, the identity stores associated with the service are also displayed. |
   | Deployment Instances | Displays the deployment name of the service and the web server where it is deployed.  For a Mobile service, this area may display multiple deployment instance(s) of a service. Each instance is represented by a tile that shows the deployment name of the instance and the target web server. |
   | Status | A service has one of the following statuses: - __Running:__ Indicates that the service is up and running. - __Stopped:__ Indicates that GroupID is unable to communicate with the service.  To troubleshoot, go to the web server where the service is deployed (IIS, remote IIS, or Docker) and make sure   the service is running. - __Error:__ Any issue other than _stopped_ is categorized as _error_. Contact your system administrator to resolve it. |
   | Launch Application | Click it to launch the service page.  - For a Data service, Replication service, Email service, and Scheduler service, a page is displayed that simply shows the status of the service as _running_, _stopped_, or _error_. - For a Security service, the __GroupID Applications__ page is displayed. Performing an action on this page will be carried out through the respective Security service. See the [Access your Applications](/versioned_docs/groupid_11.0/groupid/admincenter/general/accessapplications.md) topic. - For Admin Center, this link launches the Admin Center application. - For Mobile service, it launches the __GroupIDMobileService__ page that enables users to configure the GroupID mobile app on a phone. |
   | Ellipsis | Click it to launch a shortcut menu with the following options:  - __Settings:__ launches the service settings page, where you can manage deployment settings and log settings. - __Delete:__ deletes the service. This option is not available for the default services. For Mobile service, this shortcut menu also displays the following options:  - __Deploy Another Instance:__ enables you to deploy another instance of the service. - __Copy:__ enables you to create a new Mobile service by copying the settings of this service. |

## Change a Service’s Display Name

A service is assigned an application name during creation, which is used as it's display name in GroupID. On changing it, the service is displayed with the new name.

__To change the display name:__

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Applications__ page, click the tab for the desired service. For example, click the __Data Service__ tab.
3. Click the ellipsis button for a service and select __Settings__.
4. In the __Application Name__ box on the __General Settings__ page, enter a new name for the service.
5. Click __Save__.

## Start or Stop a Service

You can start and stop a service deployed in native IIS, remote IIS, and Docker. When you stop a service, the following happens:

- For a native IIS deployment, GroupID stops the service’s application pool.
- For a remote IIS deployment, GroupID stops the site that hosts the service.
- For a Docker deployment, GroupID stops the container where the service is deployed.

__To start or stop a service:__

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Applications__ page, click the tab for the desired service. For example, click the __Data Service__ tab.
3. Click the ellipsis button for a service and select __Settings__.
4. Click __Deployments__ under __Server Settings__.  
   The __Deployment Settings__ page displays the web server (IIS, remote
   IIS, or Docker) where the service is deployed.
5. The __Select Application Deployment__ drop-down list displays the deployment name of the service.

   - When the service is running, __Stop__ is displayed next to it. Click it to stop the service.
   - When the service is stopped, __Start__ is displayed next to it. Click it to start the service.

## View the Launch URL for a Service

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Applications__ page, click the tab for the desired service. For example, click the __Data Service__ tab.
3. Click the ellipsis button for a service and select __Settings__.
4. Click __Deployments__ under __Server Settings__.  
   The __Deployment Settings__ page displays the web server (IIS, remote
   IIS, or Docker) where the service is deployed. The __Select Application Deployment__ drop-down list displays the deployment name of the service.
5. The __Launch URL__ box on the __Deployment Configurations__ tab displays the URL. Copy and paste it in the browser to launch the service. See the table in the [View Data Service Details](#View-Data-Service-Details) topic to understand what is displayed with this URL.

## View the Deployment Settings for a Service

1. n Admin Center, select __Applications__ in the left pane.
2. On the __Applications__ page, click the tab for the desired service. For example, click the __Data Service__ tab.
3. Click the ellipsis button for a service and select __Settings__.
4. Click __Deployments__ under __Server Settings__.  
   The __Deployment Settings__ page displays the web server (IIS, remote
   IIS, or Docker) where the service is deployed. The __Select Application Deployment__ drop-down list displays the deployment name of the service.
5. On the __Deployment Configurations__ tab:

   - For a native IIS deployment, you can view the name of the service application in IIS, the site where it is hosted, the URL to launch the service page, and any other services that this service uses.
   - For a remote IIS deployment, you can view the Microsoft IIS Administration API URL, access token, and credentials. You can also view the name of the service application in remote IIS, the site where it is hosted, the URL to launch the service page, and any other services that this service uses.
   - For a Docker deployment, you can view the port and service URL used to communicate with Docker engine. You can also view the URL to launch the service page, and any other services that this service uses.

## Specify Log Settings for a Service

GroupID uses file logging and Windows logging to monitor events from a service. You can set the logging level for a service to track a specific set of information for it.

For details on file logging and Windows logging, see the [File Logging](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/log.md#File-Logging) and [Windows Logging](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/log.md#Windows-Logging) topics. Replace references to the portal with the respective service.

NOTE: Windows logging is not available for Data service and Security service.

### Change the File Logging Level for a Service

1. In Admin Center, click __Applications__ in the left pane.
2. On the __Applications__ page, click the tab for the desired service. For example, click the __Data Service__ tab.
3. Click the ellipsis button for a service and select __Settings__.
4. Click __Deployments__ under __Server Settings__.  
   The __Deployment Settings__ page displays the web server (IIS, remote
   IIS, or Docker) where the service is deployed. The __Select Application Deployment__ drop-down list displays the deployment name of the service.
5. Click the __Logging__ tab.
6. In the __File Logging__ area, select a logging level for the service in the __Log Events__ drop-down list.  
   File logging groups events into different levels, based on the type of information captured. See the table in the [Change the File Logging Level for a Portal Instance](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/log.md#Change-the-File-Logging-Level-for-a-Portal-Instance)topic for information on the logging levels. Replace references to the portal with the respective service.
7. Click __Save__.

### Turn off File Logging for a Service

1. In Admin Center, click __Applications__ in the left pane.
2. On the __Applications__ page, click the tab for the desired service. For example, click the __Data Service__ tab.
3. Click the ellipsis button for a service and select __Settings__.
4. Click __Deployments__ under __Server Settings__.  
   The __Deployment Settings__ page displays the web server (IIS, remote
   IIS, or Docker) where the service is deployed. The __Select Application Deployment__ drop-down list displays the deployment name of the service.
5. Click the __Logging__ tab.
6. In the __File Logging__ area, select _Off_ in the __Log Events__ drop-down list.
7. Click __Save__.

### Change the Windows Logging Level for a Service

1. In Admin Center, click __Applications__ in the left pane.
2. On the __Applications__ page, click the tab for the desired service. For example, click the __Replication Service__ tab.
3. Click the ellipsis button for a service and select __Settings__.
4. Click __Deployments__ under __Server Settings__.  
   The __Deployment Settings__ page displays the web server (IIS, remote
   IIS, or Docker) where the service is deployed. The __Select Application Deployment__ drop-down list displays the deployment name of the service.
5. Click the __Logging__ tab.
6. In the __Windows Logging__ area, select a logging level for the service in the __Log Events__ drop-down list.  
   Windows logging groups events into different levels, based on the type of information captured. See the table in the [Change the File Logging Level for a Portal Instance](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/log.md#Change-the-File-Logging-Level-for-a-Portal-Instance)topic for information on the logging levels. Replace references to the portal with the respective service.
7. Click __Save__.

### Turn Off Windows Logging for a Service

1. In Admin Center, click __Applications__ in the left pane.
2. On the __Applications__ page, click the tab for the desired service. For example, click the __Replication Service__ tab.
3. Click the ellipsis button for a service and select __Settings__.
4. Click __Deployments__ under __Server Settings__.  
   The __Deployment Settings__ page displays the web server (IIS, remote
   IIS, or Docker) where the service is deployed. The __Select Application Deployment__ drop-down list displays the deployment name of the service.
5. Click the __Logging__ tab.
6. In the __Windows Logging__ area, select _Off_ in the __Log Events__ drop-down list.
7. Click __Save__.

## Delete a Data Service

Deleting a Data service removes the following:

- __For a native IIS deployment:__

  - The Data service directory under the following location on the GroupID server:  
    X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\  
    (X represents the GroupID installation drive)
  - The Data service directory from the website in IIS
- __For a remote IIS deployment:__

  - The service's directory in the remote IIS site
  - The service's physical directory under the folder mapped to the remote IIS site
- __For a Docker deployment:__

  The container created in Docker Engine for the Data service

__To delete a Data service:__

1. In Admin Center, click __Applications__ in the left pane.
2. On the __Applications__ page, click the __Data Service__ tab.
3. On the __Data Service__ tab page, click the ellipsis button for a Data service and select __Delete__.

NOTE: You cannot delete the default Data service. You cannot also delete a Data service that has been linked with a GroupID client, such as the GroupID portal or a Mobile service.

__See Also__

- [GroupID Applications](/versioned_docs/groupid_11.0/groupid/admincenter/portal/applications.md)
- [Data Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/overview.md)
- [Create a Data Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/create.md)
- [Get Logs](/versioned_docs/groupid_11.0/groupid/admincenter/general/logs.md)

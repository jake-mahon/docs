# Create a Security Service

You can create a Security service in native IIS, remote IIS, and Docker.

What do you want to do?

- [Create a Security Service in Native IIS](#Create-a-Security-Service-in-Native-IIS)
- [Create a Security Service in Remote IIS](#Create-a-Security-Service-in-Remote-IIS)
- [Create a Security Service in Docker](#Create-a-Security-Service-in-Docker)
- [Launch a Security Service](#Launch-a-Security-Service)

## Create a Security Service in Native IIS

When you deploy a Security service in native IIS, Directory Manager does the following:

- It creates a directory with the Security service’s name at the following physical path on the Directory Manager server, and copies the service files from its template directory to the new service directory:  
  X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\  
  (X represents the Directory Manager installation drive)
- It also creates a virtual directory for the service in your desired IIS site.

The Security service runs within a virtual directory in IIS while the service files are physically located on disk.

__To create a Security service:__

1. In Admin Center, click __Applications__ in the left pane.
2. Click __Add Application__.
3. On the next page, select __Security Service__ and click __Next step__.
4. On the __Create GroupID Application__ page, make sure the __IIS__ tile is selected.
5. In the __Application Name__ box, enter a name for the service or use the default name. The Security service is displayed with this name in Directory Manager.
6. In the __Deployment Name__ box, enter a deployment name for the service. The application name and deployment name are displayed on the service card, as shown below:

   ![securityservicecard](/static/img/product_docs/groupid/groupid/admincenter/service/securityservice/securityservicecard.png)
7. In the __IIS Application Name__ box, enter an IIS deployment name for the service. This name is used to name the service’s directory in IIS and its physical directory under X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\ on the Directory Manager server.  
   (X represents the Directory Manager installation drive)  
   The IIS application name should be unique for each Security service deployed in IIS.
8. In the __IIS Site__ drop-down list, select a website to host the service files.  
   The list displays the websites defined on the local IIS server. GroupIDSite11 is the default
   selection.
9. In the __Data Service__ drop-down list, select a Data service to bind to this Security service.   
   A Security service needs a Data service
   to perform various tasks, such as authentication and multifactor authentication.
10. Click __Create Application__.  
    The Security service is created and displayed on the __Security Service__ tab.

## Create a Security Service in Remote IIS

You can deploy a Security service within a site in remote IIS. For this, you need to connect with the Microsoft IIS Administration API running on the remote IIS machine.

When you create a Data service in remote IIS, Directory Manager does the following:

- It creates a virtual directory for the service in a preconfigured site in remote IIS.
- It creates a physical directory for the service in the folder that is mapped to this preconfigured site.

The Security service runs within a virtual directory in remote IIS while the service files are physically located on disk.

To learn about the remote IIS settings and configurations before deploying a service there, see the
[Prerequisites for Deployments in Remote IIS](/docs/product_docs/groupid/groupid/admincenter/portal/remoteiisprerequisites.md) topic.

__To create a Security service:__

1. In Admin Center, click __Applications__ in the left pane.
2. Click __Add Application__.
3. On the next page select __Security Service__ and click __Next step__.
4. On the __Create GroupID Application__ page, select the __Remote IIS__ tile.
5. In the __Application Name__ box, enter a name for the service or use the default name. The Security service is displayed in Directory Manager with this name.
6. In the __Deployment Name__ box, enter a deployment name for the service. The application name and deployment name are displayed on the service card.
7. To enter information for __API URL__, __Access Token__, __Username__, __Password__, __IIS Application Name__, and __Website__, refer to steps 7-11 in the [Create a Portal in Remote IIS](/docs/product_docs/groupid/groupid/admincenter/portal/create.md#Create-a-Portal-in-Remote-IIS) topic. Replace any reference to the portal with the Security service.
8. In the __Data Service__ drop-down list, select a Data service to bind to this Security service.  
   A Security service needs a Data service
   to perform various tasks, such as authentication and multifactor authentication.
9. Click __Create Application__.  
   The Security service is displayed on the __Security Service__ tab.

## Create a Security Service in Docker

Directory Manager enables you to deploy a Security service in Docker. For this, you need to connect with the API running on a Docker deamon in your environment, so that Directory Manager can create a container for the service there and run the service from within that
container.

For an overview on application deployment in Docker, see
the [Prerequisites for Deployments in Docker](/docs/product_docs/groupid/groupid/admincenter/portal/dockerprerequisites.md) topic.

NOTE: To host the Security service, Docker daemon should be configured to run Windows containers.

__To create a Security service:__

1. In Admin Center, click __Applications__ in the left pane.
2. Click __Add Application__.
3. On the next page, select __Security Service__ and click __Next step__.
4. On the __Create GroupID Application__ page, select the __Docker__ tile.
5. In the __Application Name__ box, enter a name for the Security service or use the default name. The service is displayed in Directory Manager with this name.
6. In the __Deployment Name__ box, enter a deployment name for the service. The application name and deployment name are displayed on the service card.
7. To enter information for __Port__, __Service URL__, and __Container Name__, refer to steps 7-9 in the [Create a Portal in Docker](/docs/product_docs/groupid/groupid/admincenter/portal/create.md#Create-a-Portal-in-Docker) topic. Replace any reference to the portal with the Security service.
8. In the __Data Service__ drop-down list, select a Data service to bind to this Security service.  
   A Security service needs a Data service
   to perform various tasks, such as authentication and multifactor authentication.
9. Click __Create Application__.  
   The Security service is created and displayed on the __Security Service__ tab.

## Launch a Security Service

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Security Service__ tab, click __Launch Application__ for a service. The __GroupID Applications__ page is displayed. Options on this page are discussed in the [Access your Applications](/docs/product_docs/groupid/groupid/admincenter/general/accessapplications.md) topic. Any actions you perform will be carried out through the respective Security service.

__See Also__

- [Directory Manage Applications](/docs/product_docs/groupid/groupid/admincenter/portal/applications.md)
- [Services](/docs/product_docs/groupid/groupid/admincenter/service/overview.md)
- [Manage Security Service Settings](/docs/product_docs/groupid/groupid/admincenter/service/securityservice/manage.md)

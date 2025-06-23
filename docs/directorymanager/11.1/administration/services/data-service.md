---
title: data service
sidebar_label: data-service
description: Directory Manager 11.1 documentation for data service with configuration details, usage instructions, and implementation guidance.
---

# Create a Data Service

You can create a Data service in native IIS, remote IIS, and Docker.

## Create a Data Service in Native IIS

When you deploy a Data service in native IIS, Directory Manager does the following:

- It creates a directory with the Data service’s name at the following physical path on the
  Directory Manager server, and copies the service files from its template directory to the new
  service directory:

  `X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\`

  (X represents the Directory Manager installation drive)

- It also creates a virtual directory for the service in your desired IIS site.

The Data service runs within a virtual directory in IIS while the service files are physically
located on disk.

Follow the to create a Data service.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – Click **Add Application**.

Step 3 – On the next page, select **Data Service** and click **Next step**.

Step 4 – On the Create Directory Manager Application page, make sure the **IIS** tile is selected.

Step 5 – In the Application Name box, enter a unique name for the service or use the default name.
The service is displayed with this name in Directory Manager.

Step 6 – In the Deployment Name box, enter a deployment name for the service.  
The application name and deployment name are displayed on the service card. It is as:

![Data Service Card](/img/product_docs/directorymanager/directorymanager/admincenter/service/dataservice/dataservicecard.webp)

Step 7 – In the IIS Application Name box, enter an IIS deployment name for the service. The name
should be unique for each Data service deployed in IIS.  
The IIS application name is used to name the service’s directory in IIS and its physical directory
under `X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\` on the Directory Manager
server.  
(X represents the Directory Manager installation drive)

Step 8 – In the **IIS Site** drop-down list, select a website to host the service files.  
The list displays the websites defined on the local IIS server. GroupIDSite11 is the default
selection.

Step 9 – In the Service Endpoints area, bind an Elasticsearch service, Replication service, and
Scheduler service with the Data service.

1. In the Elasticsearch Service drop-down list, select an Elasticsearch service to bind to this Data
   service.  
   The list displays the Elasticsearch services running in the environment. Requests sent to the
   Data service for performing a search in the Elasticsearch repository will be carried out through
   the Elasticsearch service you select here.
2. On selecting an Elasticsearch service, the Replication Service drop-down list displays the
   Replication services running on the same machine as the Elasticsearch service. Select a
   Replication service to bind to this Data service.  
   When a user force runs the replication service (whether globally or for a specific identity
   store), a request is sent to the Data service, that is then passed on to the Replication service
   bound to that Data service.
3. In the Scheduler Service drop-down list, select a scheduler service to bind to this Data service.
   The number of services displayed in the list depends on the number of nodes in Directory Manager
   clusters, as each node has its own Scheduler service.  
   This Data service will send requests to the selected Scheduler service to trigger schedule runs.

Step 10 – Click **Create Application**.  
The Data service is created and displayed on the Data Service tab.

## Create a Data Service in Remote IIS

You can deploy a Data service within a site in remote IIS. For this, you need to connect with the
Microsoft IIS Administration API running on the remote IIS machine.

When you create a Data service in remote IIS, Directory Manager does the following:

- It creates a virtual directory for the service in a preconfigured site in remote IIS.
- It creates a physical directory for the service in the folder that is mapped to this preconfigured
  site.

The Data service runs within a virtual directory in remote IIS while the service files are
physically located on disk.

To learn about the remote IIS settings and configurations before deploying a service there, see the
[Prerequisites for Deployments in Remote IIS](/docs/directorymanager/11.1/installation/requirements.md) topic.

Follow the steps to create a Data service.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – Click **Add Application**.

Step 3 – On the next page, select **Data Service** and click **Next step**.

Step 4 – On the Create Directory Manager Application page, select the **Remote IIS** tile.

Step 5 – In the Application Name box, enter a unique name for the Data service or use the default
name. The Data service is displayed in Directory Manager with this name.

Step 6 – In the Deployment Name box, enter a deployment name for the service. The application name
and deployment name are displayed on the service card.

Step 7 – To enter information for API URL, Access Token, Username, Password, IIS Application Name,
and Website, refer to steps 7-11 in the
[Create a Portal in Remote IIS](/docs/directorymanager/11.1/configuration/portal-settings.md#create-a-portal-in-remote-iis) topic. Replace
any reference to the portal with the Data service.

Step 8 – For entering information in the Service Endpoints area, follow steps 9 in the Create a Data
Service in Native IIS topic.

Step 9 – Click **Create Application**.  
The new Data service is displayed on the Data Service tab.

## Create a Data Service in Docker

Directory Manager enables you to deploy a Data service in Docker. For this, you need to connect with
the API running on a Docker deamon in your environment, so that Directory Manager can create a
container for the service there and run the service from within that container.

For an overview on application deployment in Docker, see the
[Prerequisites for Deployments in Docker](/docs/directorymanager/11.1/installation/requirements.md) topic.

NOTE: To host the Data service, Docker daemon should be configured to run Windows containers.

Follow the steps to create a Data service.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – Click **Add Application**.

Step 3 – On the next page, select **Data Service** and click **Next step**.

Step 4 – On the Create Directory Manager Application page, select the **Docker** tile.

Step 5 – In the Application Name box, enter a unique name for the Data service or use the default
name. The Data service is displayed in Directory Manager with this name.

Step 6 – In the Deployment Name box, enter a deployment name for the service. The application name
and deployment name are displayed on the service card.

Step 7 – To enter information for Port, Service URL, and Container Name, refer to steps 7-9 in the
[Create a Portal in Docker](/docs/directorymanager/11.1/configuration/portal-settings.md#create-a-portal-in-docker) topic. Replace any
reference to the portal with the Data service.

Step 8 – For entering information in the Service Endpoints area, follow step 9 in the Create a Data
Service in Native IIS topic.

Step 9 – Click **Create Application**.  
The Data service is created and displayed on the Data Service tab.

# Manage Data Service Settings

Data services in Directory Manager are displayed on the **Data Service** tab. A card for a service
displays information such as its name and status.

You can manage several settings for a service, such as:

- Change the display name of a service
- Start or stop a service
- Configure file logging for a service
- Delete a service

## View Data Service Details

Follow the steps to vew Data Service details.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Applications page, click the **Data Service** tab. The Data Service tab page is
displayed, that lists the default Data service created while configuring Directory Manager and any
other Data service that you have created.

When multiple Directory Manager instances have been deployed, you will find multiple default Data
services on this tab page, as each instance has its own default Data service. See the
[Elasticsearch Clusters, Nodes, and Directory Manager](/docs/directorymanager/11.1/administration/services/overview.md#elasticsearch-clusters-nodes-and-directory-manager)
topic.

Step 3 – The card for a Data service displays the following information:

| Info                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                 | The name given to the service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Deployment Instances | Displays the deployment name of the service and the web server where it is deployed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Status               | A service has one of the following statuses: - Running – Indicates that the service is up and running. - Stopped – Indicates that Directory Manager is unable to communicate with the service. To troubleshoot, go to the web server where the service is deployed (IIS, remote IIS, or Docker) and make sure the service is running. - Error – Any issue other than _stopped_ is categorized as _error_. Contact your system administrator to resolve it.                                                                                                                         |
| Launch Application   | Click it to launch the service page. - For a Data service, Replication service, Email service, and Scheduler service, a page is displayed that simply shows the status of the service as _running_, _stopped_, or _error_. - For a Security service, the **GroupID Applications** page is displayed. Performing an action on this page will be carried out through the respective Security service. See the [Access your Applications](/docs/directorymanager/11.1/administration/general-settings.md) topic. - For Admin Center, this link launches the Admin Center application. |
| Ellipsis             | Click it to launch a shortcut menu with the following options: - Settings – launches the service settings page, where you can manage deployment settings and log settings. - Delete – deletes the service. This option is not available for the default services.                                                                                                                                                                                                                                                                                                                  |

## Change a Service’s Display Name

A service is assigned an application name during creation, which is used as it's display name in
Directory Manager. On changing it, the service is displayed with the new name.

Follow the steps to change the display name.

Step 1 – In Admin Center, select **Applications** in the left pane.

Step 2 – On the Applications page, click the tab for the desired service. For example, click the
**Data Service** tab.

Step 3 – Click the ellipsis button for a service and select **Settings**.

Step 4 – In the Application Name box on the General Settings page, enter a new name for the service.

Step 5 – Click **Save**.

## Start or Stop a Service

You can start and stop a service deployed in native IIS, remote IIS, and Docker. When you stop a
service, the following happens:

- For a native IIS deployment, Directory Manager stops the service’s application pool.
- For a remote IIS deployment, Directory Manager stops the site that hosts the service.
- For a Docker deployment, Directory Manager stops the container where the service is deployed.

Follow the steps to start or stop a service.

Step 1 – In Admin Center, select **Applications** in the left pane.

Step 2 – On the Applications page, click the tab for the desired service. For example, click the
**Data Service** tab.

Step 3 – Click the ellipsis button for a service and select **Settings**.

Step 4 – Click **Deployments** under Server Settings.  
The Deployment Settings page displays the web server (IIS, remote IIS, or Docker) where the service
is deployed.

Step 5 – The Select Application Deployment drop-down list displays the deployment name of the
service.

- When the service is running, Stop is displayed next to it. Click it to stop the service.
- When the service is stopped, Start is displayed next to it. Click it to start the service.

## View the Launch URL for a Service

Follow the steps to view the launch URL for a service.

Step 1 – In Admin Center, select **Applications** in the left pane.

Step 2 – On the Applications page, click the tab for the desired service. For example, click the
**Data Service** tab.

Step 3 – Click the ellipsis button for a service and select **Settings**.

Step 4 – Click **Deployments** under Server Settings.  
The Deployment Settings page displays the web server (IIS, remote IIS, or Docker) where the service
is deployed. The Select Application Deployment drop-down list displays the deployment name of the
service.

Step 5 – The Launch URL box on the Deployment Configurations tab displays the URL. Copy and paste it
in the browser to launch the service. See the table in the View Data Service Details topic to
understand what is displayed with this URL.

## View the Deployment Settings for a Service

Follow the steps to view the deployment settings for a service.

Step 1 – In Admin Center, select **Applications** in the left pane.

Step 2 – On the Applications page, click the tab for the desired service. For example, click the
**Data Service** tab.

Step 3 – Click the ellipsis button for a service and select **Settings**.

Step 4 – Click **Deployments** under Server Settings.  
The Deployment Settings page displays the web server (IIS, remote IIS, or Docker) where the service
is deployed. The Select Application Deployment drop-down list displays the deployment name of the
service.

Step 5 – On the Deployment Configurations tab:

- For a native IIS deployment, you can view the name of the service application in IIS, the site
  where it is hosted, the URL to launch the service page, and any other services that this service
  uses.
- For a remote IIS deployment, you can view the Microsoft IIS Administration API URL, access token,
  and credentials. You can also view the name of the service application in remote IIS, the site
  where it is hosted, the URL to launch the service page, and any other services that this service
  uses.
- For a Docker deployment, you can view the port and service URL used to communicate with Docker
  engine. You can also view the URL to launch the service page, and any other services that this
  service uses.

## Specify Log Settings for a Service

Directory Manager uses file logging and Windows logging to monitor events from a service. You can
set the logging level for a service to track a specific set of information for it.

For details on file logging and Windows logging, see the
[File Logging](/docs/directorymanager/11.1/configuration/portal-settings.md#file-logging) and
[Windows Logging](/docs/directorymanager/11.1/configuration/portal-settings.md#windows-logging) topics. Replace references to the
portal with the respective service.

NOTE: Windows logging is not available for Data service and Security service.

### Change the File Logging Level for a Service

Follow the steps to change the file logging level for a service.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Applications page, click the tab for the desired service. For example, click the
**Data Service** tab.

Step 3 – Click the ellipsis button for a service and select **Settings**.

Step 4 – Click **Deployments** under Server Settings.  
The Deployment Settings page displays the web server (IIS, remote IIS, or Docker) where the service
is deployed. The Select Application Deployment drop-down list displays the deployment name of the
service.

Step 5 – Click the **Logging** tab.

Step 6 – In the File Logging area, select a logging level for the service in the Log Events
drop-down list.  
File logging groups events into different levels, based on the type of information captured. See the
table in the
[Change the File Logging Level for a Portal Instance](/docs/directorymanager/11.1/configuration/portal-settings.md#change-the-file-logging-level-for-a-portal-instance)topic
for information on the logging levels. Replace references to the portal with the respective service.

Step 7 – Click **Save**.

### Turn off File Logging for a Service

Follow the steps to turn off file logging for a service.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Applications page, click the tab for the desired service. For example, click the
**Data Service** tab.

Step 3 – Click the ellipsis button for a service and select **Settings**.

Step 4 – Click **Deployments** under Server Settings.  
The Deployment Settings page displays the web server (IIS, remote IIS, or Docker) where the service
is deployed. The Select Application Deployment drop-down list displays the deployment name of the
service.

Step 5 – Click the **Logging** tab.

Step 6 – In the File Logging area, select _Off_ in the Log Events drop-down list.

Step 7 – Click **Save**.

### Change the Windows Logging Level for a Service

Follow the steps to change the Windows logging level for a service.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Applications page, click the tab for the desired service. For example, click the
**Replication Service** tab.

Step 3 – Click the ellipsis button for a service and select **Settings**.

Step 4 – Click **Deployments** under Server Settings.  
The Deployment Settings page displays the web server (IIS, remote IIS, or Docker) where the service
is deployed. The Select Application Deployment drop-down list displays the deployment name of the
service.

Step 5 – Click the **Logging** tab.

Step 6 – In the Windows Logging area, select a logging level for the service in the **Log Events**
drop-down list.  
Windows logging groups events into different levels, based on the type of information captured. See
the table in the
[Change the File Logging Level for a Portal Instance](/docs/directorymanager/11.1/configuration/portal-settings.md#change-the-file-logging-level-for-a-portal-instance)topic
for information on the logging levels. Replace references to the portal with the respective service.

Step 7 – Click **Save**.

### Turn Off Windows Logging for a Service

Follow the steps to turn off Windows logging for a service.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the Applications page, click the tab for the desired service. For example, click the
**Replication Service** tab.

Step 3 – Click the ellipsis button for a service and select **Settings**.

Step 4 – Click **Deployments** under Server Settings.  
The Deployment Settings page displays the web server (IIS, remote IIS, or Docker) where the service
is deployed. The Select Application Deployment drop-down list displays the deployment name of the
service.

Step 5 – Click the **Logging** tab.

Step 6 – In the Windows Logging area, select _Off_ in the Log Events drop-down list.

Step 7 – Click **Save**.

## Delete a Data Service

Deleting a Data service removes the following:

- For a native IIS deployment:

  - The Data service directory under the following location on the Directory Manager server:  
    X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\  
    (X represents the Directory Manager installation drive)
  - The Data service directory from the website in IIS

- For a remote IIS deployment:

  - The service's directory in the remote IIS site
  - The service's physical directory under the folder mapped to the remote IIS site

- For a Docker deployment:

  The container created in Docker Engine for the Data service

Follow the steps to delete a Data service.

Step 1 – In Admin Center, click **Applications** in the left pane.

Step 2 – On the **Applications** page, click the **Data Service** tab.

Step 3 – On the **Data Service** tab page, click the ellipsis button for a Data service and select
**Delete**.

NOTE: You cannot delete the default Data service. You cannot also delete a Data service that has
been linked with a Directory Manager client, such as the Directory Manager portal.

# Data Service

Admin Center lets you quickly create and deploy a Data service. This service is responsible for core
Directory Manager operations, such as communication with identity providers, communications with the
Directory Manager database, object creation and update, and more.

You can create multiple Data services; the default service is created while configuring Directory
Manager.

## The Default Data Service

While configuring Directory Manager using the Configuration Tool, the administrator can create a
Data service and a Security service in native IIS.

To deploy these services in native IIS, the Configuration Tool creates and configures a new website
named GroupIDSite11 in IIS. By default, it binds this site to any of the available ports; the
administrator can change it if required. The Data service and Security service directories are
created within GroupIDSite11.

Admin Center uses the default Data service and Security service; you cannot change this binding.

To view the default services, see the
[View Data Service Details](/docs/directorymanager/11.1/administration/services/data-service.md#view-data-service-details) topic.

## Why Create Multiple Data Services?

For load balancing and high availability, Directory Manager facilitates you to create and maintain
multiple Data services. While creating a Directory Manager portal, you can choose a Data service to
bind to it. In this way, different portals can use different Data services for improved response
times and load balancing.

Directory Manager enables you to create and deploy a Data service in any of these web servers:
native IIS, remote IIS, and Docker.

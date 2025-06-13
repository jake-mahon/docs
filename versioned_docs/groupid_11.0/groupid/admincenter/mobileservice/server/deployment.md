# Manage Deployment Settings

You can manage various deployment settings for a Mobile service in any of the web servers: native IIS, remote IIS, and Docker.

What do you want to do?

- [View the Deployment(s) for a Mobile Service](#view-the-deployments-for-a-mobile-service)
- [Start or Stop a Deployment Instance](#start-or-stop-a-deployment-instance)
- [View the Launch URL for an Instance](#view-the-launch-url-for-an-instance)
- [View the Data Service and Security Service Bound to an Instance](#view-the-data-service-and-security-service-bound-to-an-instance)
- [Manage Event Logging for an Instance](#manage-event-logging-for-an-instance)
- [Change the IIS Application Name for an Instance (Native IIS)](#change-the-iis-application-name-for-an-instance-native-iis)
- [Move an Instance under a Different Site (Native IIS)](#move-an-instance-under-a-different-site-native-iis)
- [View the Deployment Settings for an Instance (Remote IIS and Docker)](#view-the-deployment-settings-for-an-instance-remote-iis-and-docker)

## View the Deployment(s) for a Mobile Service

A Mobile service can have multiple deployments in the same or different web servers. You can update certain settings for each deployment instance of a service.

__To view a service’s deployment instances:__

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Mobile Service__ tab, click the ellipsis button for a service and select __Settings__.
3. Click __Deployments__ under __Server Settings__; the __Deployment Settings__ page is displayed:
4. The __Deployment Settings__ page has varying tabs, depending on the deployment instances of the service.

   - The __IIS__ tab is available when one or more service instances are deployed in native IIS. Select an instance to view the name of the instance directory in IIS, the IIS site that hosts the instance, the URL for the instance,
     the Data service and Security service associated with the instance, and logging levels.
   - The __Remote IIS__ tab is available when one or more service instances are deployed in remote IIS. Select an instance to view the Microsoft IIS Administration API URL and access token that GroupID uses to communicate with
     the remote IIS server, the credentials used to communicate with the API, the site that hosts the instance, the Data service and Security service associated with the instance, and logging levels.
   - The __Docker__ tab is available when one or more service instances are deployed in Docker. Select an instance to view the port and Service URL used for deployment.

## Start or Stop a Deployment Instance

See
the [Start or Stop a Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#start-or-stop-a-service) topic for details. Remember to use the __Select Application Deployment__ drop-down list to select the Mobile service instance you want to start or stop.

## View the Launch URL for an Instance

See
the [View the Launch URL for a Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#view-the-launch-url-for-a-service) topic for details. Remember to use the __Select Application Deployment__ drop-down list to select the Mobile service instance you want to view the launch URL for.

Use the launch URL for a Mobile service instance to launch the GroupIDMobileService page, which is shown in the [Launch a Mobile Service or a Service Instance](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/create.md#launch-a-mobile-service-or-a-service-instance) topic.

## View the Data Service and Security Service Bound to an Instance

See the [View the Data Service and Security Service Bound to an Instance](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/nativeiis.md#view-the-data-service-and-security-service-bound-to-an-instance) topic. Replace references to the portal with the Mobile service.

## Manage Event Logging for an Instance

To manage Windows logging and file logging for an instance of a Mobile service, see the
[Specify Log Settings for a Service](/versioned_docs/groupid_11.0/groupid/admincenter/service/dataservice/manage.md#specify-log-settings-for-a-service) topic. Remember to use the __Select Application Deployment__ drop-down list to select the Mobile service instance you want to manage event logging for.

## Change the IIS Application Name for an Instance (Native IIS)

An instance of a mobile service is assigned an IIS application name to represent its deployment in IIS. The name uniquely identifies the deployment in the IIS site and is used to name:

- The instance’s directory in IIS.
- It’s physical directory at the following path on the GroupID server:  
  X:\Program Files\Imanami\GroupID 11.0\GroupIDMobileService\Inetpub\  
  (X represents the GroupID installation drive).

This name is also appended to the web server address to construct the URL that users click to launch the GroupIDMobileService page. For example:  
`https://<web-server-name>:<port>/<IIS-application-name>`

When you change the IIS application name, it propagates to the instance’s IIS directory, physical directory, and launch URL.

__To change the IIS application name:__

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Applications__ page, click the tab for the desired service. For example, click the __Mobile Service__ tab.
3. Click the ellipsis button for a service on its respective card and select __Settings__.
4. Click __Deployments__ under __Server Settings__.The __Deployment Settings__ page is displayed.
5. On the __IIS__ tab, the __Select Application Deployment__ drop-down list displays all service instances deployed in native IIS. Select an instance to change its IIS application name.
6. In the __IIS Application Name__ box on the __Deployment Configurations__ tab, update the IIS deployment name for the instance.
7. Click __Save__.

## Move an Instance under a Different Site (Native IIS)

You can change the IIS site that hosts a deployment instance of a service. In doing so, the URL of the deployment instance also changes. The updated URL is displayed in the __Launch URL__ box on the __Deployment Settings__ page. You must provide the updated URL to your users to enable them to configure the GroupID app with this deployment instance of the Mobile service.

__To change the site:__

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Applications__ page, click the tab for the desired service. For example, click the __Mobile Service__ tab.
3. Click the ellipsis button for a service on its respective card and select __Settings__.
4. Click __Deployments__ under __Server Settings__; the __Deployment Settings__ page is displayed.
5. On the __IIS__ tab, the __Select Application Deployment__ drop-down list displays all service instances deployed in native IIS. Select an instance to move its directory under a different IIS site.
6. In the __IIS Site__ drop-down list on the __Deployment Configurations__ tab, select a site to move the instance’s directory under it. The list displays the websites defined
   in native IIS.
7. Click __Save__.

## View the Deployment Settings for an Instance (Remote IIS and Docker)

1. n Admin Center, select __Applications__ in the left pane.
2. On the __Mobile Service__ tab, click the ellipsis button for a service and select __Settings__.
3. Click __Deployments__ under __Server Settings__; the __Deployment Settings__ page is displayed. Click the __Remote IIS__ or __Docker__ tab.
4. The __Select Application Deployment__ drop-down list displays all service instances deployed in the respective web server. Select an instance to view its settings.
5. On the __Deployment Configurations__ tab:

   - For a remote IIS deployment, you can view the Microsoft IIS Administration API URL, access token, and credentials. You can also view the name of the service application in remote IIS, the site where it is hosted, the URL to launch the instance, and the Data service and Security service the instance uses.
   - For a Docker deployment, you can view the port and service URL used to communicate with Docker engine. You can also view the URL to launch the instance, and the Data service and Security service the instance uses.

__See Also__

- [Mobile Service](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/overview.md)
- [Server Settings](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/server/overview.md)

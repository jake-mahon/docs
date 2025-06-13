# Manage Settings for a Native IIS Deployment

You can manage various settings for a portal instance deployed in native IIS.

What do you want to do?

- [Start or Stop an Instance](#Start-or-Stop-an-Instance)
- [Change the IIS Application Name for an Instance](#Change-the-IIS-Application-Name-for-an-Instance)
- [Move an Instance under a Different IIS Site](#Move-an-Instance-under-a-Different-IIS-Site)
- [View the Launch URL for an Instance](#View-the-Launch-URL-for-an-Instance)
- [View the Data Service and Security Service Bound to an Instance](#View-the-Data-Service-and-Security-Service-Bound-to-an-Instance)
- [Set File Logging and Windows Logging for an Instance](#Set-File-Logging-and-Windows-Logging-for-an-Instance)
- [Delete an Instance](#Delete-an-Instance)

## Start or Stop an Instance

You can start and stop a portal instance deployed in native IIS, remote IIS, and Docker. When you stop an instance, the following happens:

- For a native IIS deployment, GroupID stops the instance’s application pool.
- For a remote IIS deployment, GroupID stops the site that hosts the instance.
- For a Docker deployment, GroupID stops the container where the instance is deployed.

__To start or stop an instance:__

1. In Admin Center, select __Applications__ in the left pane.  
    On the __GroupID Portal__ tab, a portal card displays its info, including all its instances.
2. Click the ellipsis button for a portal and select __Settings__.
3. Click __Deployments__ under __Server Settings__; the __Deployment Settings__ page is displayed.
4. On the __IIS__, __Remote IIS__, or __Docker__ tab, the __Select Application Deployment__ drop-down list
   displays the portal instances deployed in the respective web server.  
   Select an instance to start or stop it.

   - When an instance is running, __Stop__ is displayed next to it. Click it to stop the instance.
   - When an instance has stopped, __Start__ is displayed next to it. Click it to start the instance.

## Change the IIS Application Name for an Instance

Each deployment instance of a portal in IIS is assigned an IIS application name to represent that specific deployment. The name uniquely identifies the deployment in the IIS site and is used to name:

- The instance’s virtual directory in IIS.
- It’s physical directory under X:\Program Files\Imanami \GroupID 11.0\GroupIDPortal\Inetpub\ on the GroupIDserver  
  (X represents the GroupID installation drive)

This name is also appended to the web server address to construct the URL that users click to access the portal instance. For example:  
`https://<web-server-name>:<port>/<IIS-application-name>`

When you change the name, it propagates to the instance’s IIS directory, physical directory, and launch URL. You must provide the updated URL to users to enable them to access the portal. See the [Launch a Portal](/versioned_docs/groupid_11.0/groupid/admincenter/portal/create.md#Launch-a-Portal) topic.

__To change the IIS application name:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays the portal’s info, including all its instances.
2. Click the ellipsis button for a portal and select __Settings__.
3. Click __Deployments__ under __Server Settings__; the __Deployment Settings__ page is displayed.
4. On the __IIS__ tab, the __Select Application Deployment__ drop-down list displays all portal instances deployed in native IIS. Select an instance to change its IIS application name.
5. In the __IIS Application Name__ box on the __Deployment Configurations__ tab, update the IIS deployment name for the instance.
6. Click __Save__.

## Move an Instance under a Different IIS Site

You can change the IIS site that hosts a deployment instance of a portal. In doing so, the URL of the deployment instance also changes. You must provide the
updated URL to your users to enable them to access the instance. See the [Launch a Portal](/versioned_docs/groupid_11.0/groupid/admincenter/portal/create.md#Launch-a-Portal) topic.

__To change the site:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info, including all its instances.
2. Click the ellipsis button for a portal and select __Settings__.
3. Click __Deployments__ under __Server Settings__; the __Deployment Settings__ page is displayed.
4. On the __IIS__ tab, the __Select Application Deployment__ drop-down list displays all portal instances deployed in native IIS. Select an instance to move its directory under a different IIS site.
5. In the __IIS Site__ drop-down list on the __Deployment Configurations__ tab, select a site to move the instance’s directory under it. The list displays the websites defined
   in native IIS.
6. Click __Save__.

## View the Launch URL for an Instance

Use the URL for a portal's deployment instance to launch the respective instance.

__To view the URL:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info, including all its instances.
2. Click the ellipsis button for a portal and select __Settings__.
3. Click __Deployments__ under __Server Settings__; the __Deployment Settings__ page is displayed.
4. On the __IIS__, __Remote IIS__, or __Docker__ tab, the __Select Application Deployment__ drop-down list
   displays the portal instances deployed in the respective web server. Select an instance to view the launch URL for it.
5. The __Launch URL__ box on the __Deployment Configurations__ tab displays the URL. Copy and paste it in the browser to launch the deployment instance of the portal or share it with users to enable them to launch the instance.

## View the Data Service and Security Service Bound to an Instance

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info, including all its instances.
2. Click the ellipsis button for a portal and select __Settings__.
3. Click __Deployments__ under __Server Settings__; the __Deployment Settings__ page is displayed.
4. On the __IIS__, __Remote IIS__, or __Docker__ tab, the __Select Application Deployment__ drop-down list
   displays the portal instances deployed in the respective web server. Select an instance to view the launch URL for it.
5. The __Data Service__ and __Security Service__ boxes on the __Deployment Configurations__ tab display the Data service and Security service this portal instance uses.

## Set File Logging and Windows Logging for an Instance

To set file logging and Windows logging levels for a deployment instance, see the [Manage Log Settings](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/log.md) topic.

## Delete an Instance

To delete a portal’s deployment instance, see the [Delete a Deployment Instance for a Portal](/versioned_docs/groupid_11.0/groupid/admincenter/portal/delete.md#Delete-a-Deployment-Instance-for-a-Portal) topic.

__See Also__

- [Server Settings](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/overview.md)

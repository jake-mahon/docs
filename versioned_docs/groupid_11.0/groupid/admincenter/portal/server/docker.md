# Manage Settings for a Docker Deployment

You can manage various settings for a portal instance deployed in Docker.

What do you want to do?

- [Start or Stop an Instance](#start-or-stop-an-instance)
- [View the Deployment Settings for an Instance](#view-the-deployment-settings-for-an-instance)
- [Set File Logging and Windows Logging for an Instance](#set-file-logging-and-windows-logging-for-an-instance)
- [Delete an Instance](#delete-an-instance)

## Start or Stop an Instance

To start or stop a deployment instance, see the [Start or Stop an Instance](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/nativeiis.md#start-or-stop-an-instance) topic.

## View the Deployment Settings for an Instance

While deploying a portal instance in Docker, you have to specify:

- the port for the host machine to map the container to host ports  
  This is the port the application runs on.
- the service URL for communicating with Docker Engine

After instance creation, this info cannot be changed.

__To view the info:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info, including all its instances.
2. Click the ellipsis button for a portal and select __Settings__.
3. Click __Deployments__ under __Server Settings__.
4. On the __Deployment Settings__ page, click the __Docker__ tab.
5. On the __Docker__ tab, the __Select Application Deployment__ drop-down list displays all instances of the portal deployed in Docker.  
   On selecting an instance, it’s port, service URL, and the URL to launch the instance is displayed on the __Deployment Configurations__ tab.

## Set File Logging and Windows Logging for an Instance

To set file logging and Windows logging levels for a deployment instance, see the [Manage Log Settings](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/log.md) topic.

## Delete an Instance

To delete a portal’s deployment instance, see the [Delete a Deployment Instance for a Portal](/versioned_docs/groupid_11.0/groupid/admincenter/portal/delete.md#delete-a-deployment-instance-for-a-portal) topic.

__See Also__

- [Server Settings](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/overview.md)

# Manage Settings for a Docker Deployment

You can manage various settings for a portal instance deployed in Docker.

## Start or Stop an Instance

To start or stop a deployment instance, see the [Start or Stop an Instance](/docs/product_docs/groupid/groupid/admincenter/portal/server/nativeiis.md#Start-or-Stop-an-Instance) topic.

## View the Deployment Settings for an Instance

While deploying a portal instance in Docker, you have to specify:

- the port for the host machine to map the container to host ports  
  This is the port the application runs on.
- the service URL for communicating with Docker Engine

After instance creation, this info cannot be changed.

__To view the info:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info, including all its instances. You can differentiate between a standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select __Settings__.
3. Click __Deployments__ under __Server Settings__.
4. On the __Deployment Settings__ page, click the __Docker__ tab.
5. On the __Docker__ tab, the __Select Application Deployment__ drop-down list displays all instances of the portal deployed in Docker.  
   On selecting an instance, it’s port, service URL, and the URL to launch the instance is displayed on the __Deployment Configurations__ tab.

## Set File Logging and Windows Logging for an Instance

To set file logging and Windows logging levels for a deployment instance, see the [Manage Log Settings](/docs/product_docs/groupid/groupid/admincenter/portal/server/log.md) topic.

## Delete an Instance

To delete a portal’s deployment instance, see the [Delete a Deployment Instance for a Portal](/docs/product_docs/groupid/groupid/admincenter/portal/delete.md#Delete-a-Deployment-Instance-for-a-Portal) topic.

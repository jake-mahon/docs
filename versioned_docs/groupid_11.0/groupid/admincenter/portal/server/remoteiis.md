# Manage Settings for a Remote IIS Deployment

You can manage various settings for a portal instance deployed in remote IIS.

What do you want to do?

- [Start or Stop an Instance](#Start-or-Stop-an-Instance)
- [View the Deployment Settings for an Instance](#View-the-Deployment-Settings-for-an-Instance)
- [Set File Logging and Windows Logging for an Instance](#Set-File-Logging-and-Windows-Logging-for-an-Instance)
- [Delete an Instance](#Delete-an-Instance)

## Start or Stop an Instance

To start or stop a deployment instance, see the [Start or Stop an Instance](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/nativeiis.md#Start-or-Stop-an-Instance) topic.

## View the Deployment Settings for an Instance

When creating a portal’s deployment instance in remote IIS, you have to provide info related to the [Microsoft IIS Administration API](https://learn.microsoft.com/en-us/iis-administration/), such as:

- The API URL that GroupID uses for communicating with the remote IIS server
- The access token that GroupID uses to access the API
- The credentials used to connect to the API

You also have to provide an IIS application name, select a site to host the portal instance, and specify the Data service and Security service the instance should use.

Once the instance is created, you can view these settings but you cannot modify them.

To view deployment settings:

1. n Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal card displays its info, including all its instances.
2. Click the ellipsis button for a portal and select __Settings__.
3. Click __Deployments__ under __Server Settings__; the __Deployment Settings__ page is displayed. Click the __Remote IIS__ tab.
4. On the __Remote IIS__ tab, the __Select Application Deployment__ drop-down list displays all portal instances deployed in remote IIS. Select an instance to view its settings.
5. On the __Deployment Configurations__ tab, you can view the API URL, access token, and credentials. You can also view the name of the portal application in remote IIS, the site where it is hosted, the URL to launch the instance, and the Data service and Security service the instance uses. Refer to steps 7-12 in the [Create a Portal in Remote IIS](/versioned_docs/groupid_11.0/groupid/admincenter/portal/create.md#Create-a-Portal-in-Remote-IIS) topic for
   a description of these fields.

## Set File Logging and Windows Logging for an Instance

To set file logging and Windows logging levels for a deployment instance, see the [Manage Log Settings](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/log.md) topic.

## Delete an Instance

To delete a portal’s deployment instance, see the [Delete a Deployment Instance for a Portal](/versioned_docs/groupid_11.0/groupid/admincenter/portal/delete.md#Delete-a-Deployment-Instance-for-a-Portal) topic.

__See Also__

- [Server Settings](/versioned_docs/groupid_11.0/groupid/admincenter/portal/server/overview.md)

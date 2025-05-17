---
sidebar_position: 7853
title: Live Session Viewer Window
---

# Live Session Viewer Window

The Live Session Viewer window allows a user with the Administrator role to watch a live activity session. Activity sessions are monitored when the Record Proxy Sessions checkbox is selected in the connection profile assigned to the access policy. All SSH and RDP keystrokes and local commands are recorded using a granular metadata search that works across both live and recorded sessions.

Click the expand icon for an active session on the [Active Dashboard](../Active "Active Dashboard").

![Active Session expanded](../../../../../../../../static/images/PrivilegeSecure_4.2/Content/Resources/Images/PrivilegeSecure/Admin Guide/ActiveSessionExpand.png "Active Session expanded")

If the user has logged into the activity session more than once, multiple session recordings will display. Only the current session can be viewed live. See the [Replay Viewer Window](ReplayViewer "Replay Viewer Window") topic for additional information on recorded sessions.

There are two types of Live Session Viewer windows:

* RDP session
* Website host

Select the desired recording and the Live Session Viewer window opens.

## Live Session Viewer for RDP Sessions

The Live Session Viewer window for RDP sessions is applicable to all resources except the Websites.

![](../../../../../../../../static/images/PrivilegeSecure_4.2/Content/Resources/Images/PrivilegeSecure/Admin Guide/LiveSessionViewerRDP.png)

The Live Session Viewer for RDP Sessions window has the following features:

Action options

* Terminate Session icon – Click the icon to disconnect the user and end the session. A confirmation window will appear. See the [Terminate Proxy Session Window](TerminateProxySession "Terminate Proxy Session Window") topic for additional information.
* Lock icon – Opens the Lock Session window to prevent the user from interacting with the host but keeps the session active. See the [Lock Session](LockSession "Lock Session") topic for additional information.

Session Details

* User— Displays the account used to log onto the resource

  * logged on to — Displays the name of the resource
  * using — Displays the name of the resource the RDP session connects from
* Activity — Displays the name of the activity
* Proxy Session Started — Indicates when the activity started. This refers to when the activity’s actions were executed and not when the user was logged on to the resource.

Activity Details

* Time line — Displays activity as it occurs in real-time during the session in the pane to the left of the player. By default this time line will include keystroke activity.

  **NOTE:** If RDP Session Monitoring is enabled, then it will also include Windows metadata activity in the time line. This monitoring requires the Netwrix Privilege Secure Remote Desktop Monitor service to be installed on the target host. See the [Install Remote Desktop Monitor Service on Target RDP Hosts](../../../Install/RDPMonitor "Remote Desktop Monitor Service Install on Target RDP Hosts") topic for additional information.

## Live Session Viewer for SSH Sessions

The Live Session Viewer for SSH sessions is applicable to Linux and Cisco resources.

![](../../../../../../../../static/images/PrivilegeSecure_4.2/Content/Resources/Images/PrivilegeSecure/Admin Guide/LiveSessionViewerSSH.png)

The Live Session Viewer for SSH Sessions window has the following features:

Action options

* Terminate Session icon – Click the icon to disconnect the user and end the session. A confirmation window will appear. See the [Terminate Proxy Session Window](TerminateProxySession "Terminate Proxy Session Window") topic for additional information.
* Lock icon – Opens the Lock Session window to prevent the user from interacting with the host but keeps the session active. See the [Lock Session](LockSession "Lock Session") topic for additional information.

Session Details

* User— Displays the account used to log onto the resource

  * logged on to — Displays the name of the resource
  * using — Displays the name of the resource the RDP session connects from
* Activity — Displays the name of the activity
* Proxy Session Started — Indicates when the activity started. This refers to when the activity’s actions were executed and not when the user was logged on to the resource.

Activity Details

* Time line — Displays activity as it occurs in real-time during the session in the pane to the left of the player. By default this time line will include keystroke activity.

Other Details

* Keystrokes are captured via STD in/out SSH communication
* No agent is required
* All data is indexed and searchable

## Recording Session Viewer for Website Host Sessions

The Recording Session Viewer window for Website host sessions is applicable only to Website hosts and Microsoft Entra ID.

![](../../../../../../../../static/images/PrivilegeSecure_4.2/Content/Resources/Images/PrivilegeSecure/Admin Guide/RecordingSessionViewer.png)

The Live Session Viewer for Recording Sessions window has the following features:

Action options

* Terminate Session icon – Click the icon to disconnect the user and end the session. A confirmation window will appear. See the [Terminate Proxy Session Window](TerminateProxySession "Terminate Proxy Session Window") topic for additional information.
* Lock icon – Opens the Lock Session window to prevent the user from interacting with the host but keeps the session active. See the [Lock Session](LockSession "Lock Session") topic for additional information.

Recording Details

* User— Displays the account used to log onto the resource

  * logged on to — Displays the name of the resource
  * using — Displays the name of the resource the session connects from
* Activity — Displays the name of the activity
* Proxy Session Started — Indicates when the activity started. This refers to when the activity’s actions were executed and not when the user was logged on to the resource.
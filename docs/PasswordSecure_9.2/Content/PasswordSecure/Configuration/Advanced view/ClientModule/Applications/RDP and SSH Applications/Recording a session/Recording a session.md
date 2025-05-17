---
sidebar_position: 6430
title: Recording a session
---

# Recording a session

## What is session recording?

Session recording can be used to make a visual recording of RDP and SSH sessions. These recordings can then be subsequently viewed and evaluated. In this context, it is also possible to limit this functionality so that only the user themselves or an assigned person e.g. security officer can view and evaluate these recordings.

![notifications modul](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/notifications_1-en.png "notifications modul")

## Relevant rights

The following options are required to manage sessions for an application.

### User right

* Can manage recordings for an application

NOTE: Please note that session recording uses disk space in the database. Although the way the recordings are saved is efficient in terms of resources, the required amount of disk space varies greatly depending on the content. The more that is done during the recorded session, the higher the disk space usage.

Session recording firstly needs to be activated for the relevant RDP or SSH application before it can take place.

RDP

![activating session recording](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/recording_a_session_2-en.png "activating session recording")

SSH

![activating session recording](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/recording_a_session_3-en.png "activating session recording")

If the setting has been activated, the recording will start automatically the next time a connection is established.

NOTE: The recordings are already streamed to the server and saved into the database during the recording process. Therefore, no recordings are lost even if the connection is terminated. They are immediately saved until the connection is terminated or until the end of the session.

## Viewing the session recordings

If recordings exist for an application, these can be called up and viewed in the Applications module.

![viewing session recording](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/recording_a_session_4-en.png "viewing session recording")

It is possible to search the session recordings using the filter as usual. It is also possible here to limit the search results based on the date and user. In the section on the right, it is also possible to further filter the searched list based on all column contents.

![session records](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/recording_a_session_5-en.png "session records")

Once a session recording has been selected, a new tab will open in which you can view the recording. The function "Skip inactivity" can be activated via the ribbon so that a recording can be effectively and quickly viewed so as only to see the relevant actions.

![viewing a session recording](../../../../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/recording_a_session_6-en.png "viewing a session recording")

When are indicators set?

* Mouse click
* Keyboard command

## Automatic deletion of old recordings

If desired, recordings can be automatically cleaned up. This option can be configured on the **Server Manager**. Further information can be found in the section [Managing databases](../../../../../Server Manager/Managing databases/Managing databases "Managing databases")s.
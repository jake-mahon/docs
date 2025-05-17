---
sidebar_position: 6523
title: Setup and sync
---

# Setup and sync

## Setting up the offline database

It is important to ensure that the right requirements have been met before setting up the Offline Add-on. The following configurations need to be defined in both the Server Manager and also the user rights/user settings.

Requirements

To set up offline databases, this option must be activated in the Server Manager first. This process is carried out separately for each database in the database view in the Server Manager in the “General settings” (right click on the database). This is also possible to do when the database is initially created.

![Properties](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/Installation_with_parameters_265-en.png "Properties ")

You will find further information on this subject in the sections: [Creating databases](../../Server Manager/CreatingDatabase/Creating databases "Creating databases") and [Managing databases](../../Server Manager/Managing databases/Managing databases "Managing databases")

User rights

The user requires the “offline mode” right. In addition, how long offline mode can be used without a server connection can be defined in the user rights.

![User rights](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/Installation_with_parameters_266-en.png "User rights")

Creating an offline database

The synchronization with the offline database can generally be carried out automatically. However, **the first synchronization must be carried out manually**. The synchronization is started via the Main menu/Account.

![account-en](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/account-en.png "account-en")

NOTE: The offline databases are stored locally under the following path: %appdata%\MATESO\Password Safe and Repository Client\OfflineDB

An offline database must be created per user and client for each online database. This makes it possible to use several offline databases with an Offline Add-on.

#### Synchronization

In order to keep the data always consistent, the offline database must be synchronized regularly. Synchronization is automatically performed by the client in the background. The interval can be freely configured in the [User settings](../../Advanced view/MainMenu/User settings/User settings "User settings"). The synchronization is completed every 30 minutes by default. When creating and editing records, it is also possible to synchronize outside of the synchronization cycle so that the changes are directly available offline. In addition, the synchronization can also be started manually in Backstage via “Account”.

A running synchronization is displayed in the icon in the task bar as well as by a status bar in the client:

![progress icon](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/progress-icon-en_64x53.png "progress icon")

![](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/PasswordSecure_Documentation_without_existing_chapters/Installation with parameters_269.png)

As soon as the synchronization is completed, this is indicated by a hint.

![notification "offline sync completed"](../../../../Resources/Images/offline-sync-completed-en_383x75.png "notification /"offline sync completed/"")

#### Relevant settings

![](../../../../../../../static/images/PasswordSecure_9.2/Content/Resources/Images/PasswordSecure_Documentation_without_existing_chapters/Installation with parameters_271.png)

Offline mode can be configured and personalized using the four settings mentioned:

* **Offline synchronization after saving a record**: The synchronization of the offline database is completed directly after saving a record. It is important to note that this only applies to those records that are saved by the user who is logged in. Changes made by another user do not trigger any synchronization!
* **Offline synchronization after login:** If this option is active, the offline database is synchronized after each restart of the client.
* **Automatic synchronization after an interval**: This setting is used to define the interval at which a synchronization of the offline database will be periodically carried out. The default value is 30 minutes.
* **Path where the offline database should be saved**: If this field is left empty, the system default is used. Otherwise, the storage location for the offline database can be entered directly.
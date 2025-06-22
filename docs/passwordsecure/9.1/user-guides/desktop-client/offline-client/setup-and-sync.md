# Offline Add-on

## What is the Offline Add-on?

The Offline Add-on enables you to work without an active connection to the Netwrix Password Secure
server. If the corresponding setting has been configured
([Setup and sync](/docs/passwordsecure/9.1/user-guides/desktop-client/offline-client/setup-and-sync.md)),
the local copy of the server database will be automatically synchronized according to freely
definable cycles. This ensures that you can always use a (relatively) up-to-date version of the
database offline.

Facts

- “Microsoft SqlServer Compact 4.0.8876.1” is used for creating offline databases
- The database is encrypted using AES-128 or SHA-256. A so-called “platform default” is used for
  this purpose
- In addition, RSA encryption processes are used
- More on this subject…::https://technet.microsoft.com/en-us/library/gg592949(v=sql.110).aspx

#### Installation

The Offline Add-on is automatically installed together with the main client. No database profiles
need to be created – this task is performed by the client during the initial synchronization,
together with the creation of the offline database.

#### Operation

Operation of the Offline Add-on is generally based on the
[Operation and setup](/docs/passwordsecure/9.1/configuration/server-manager/basic-configuration.md).
Since the Offline Add-on only has a limited range of functions, the following must be taken into
account with regards to its operation:

- There is no dashboard
- Only the password module is available
- The filter is not available. Records are found using the
  [Search](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/filter-and-search.md)
- The automatic login data entry can be performed via the
  [Autofill Add-on](/docs/passwordsecure/9.1/browser-extensions/autofill-addon.md),
  independently of the Offline Add-on

![Offline Client](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/offlineclient/installation_with_parameters_264-en.webp)

#### What data is synchronised?

[Seals](/docs/passwordsecure/9.1/configuration/permissions/protective-mechanisms/seals.md)
enhance the security concept in Netwrix Password Secure to include a double-check principle that can
be defined in fine detail. This means that releases for protected information are linked to the
positive authentication of one or more users. Naturally, it is not possible to issue these releases
when the server is not connected. For this reason, sealed records are not synchronized and thus do
not form part of offline databases.

Otherwise, all records for which the user has the **export right** are synchronised.

Records with **password masking** are adopted into the offline database and can be used as normal.

# Setup and sync

## Setting up the offline database

It is important to ensure that the right requirements have been met before setting up the Offline
Add-on. The following configurations need to be defined in both the Server Manager and also the user
rights/user settings.

Requirements

To set up offline databases, this option must be activated in the Server Manager first. This process
is carried out separately for each database in the database view in the Server Manager in the
“General settings” (right click on the database). This is also possible to do when the database is
initially created.

![Properties](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/offlineclient/setup/installation_with_parameters_265-en.webp)

You will find further information on this subject in the
sections:[ Creating databases](/docs/passwordsecure/9.1/configuration/server-manager/creating-databases.md)
and
[Managing databases](/docs/passwordsecure/9.1/configuration/server-manager/managing-databases.md)

User rights

The user requires the “offline mode” right. In addition, how long offline mode can be used without a
server connection can be defined in the user rights.

![User rights](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/offlineclient/setup/installation_with_parameters_266-en.webp)

Creating an offline database

The synchronization with the offline database can generally be carried out automatically. However,
**the first synchronization must be carried out manually**. The synchronization is started via the
Main menu/Account.

![account-en](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/offlineclient/setup/account-en.webp)

NOTE: The offline databases are stored locally under the following path: %appdata%\MATESO\Password
Safe and Repository Client\OfflineDB

An offline database must be created per user and client for each online database. This makes it
possible to use several offline databases with an Offline Add-on.

#### Synchronization

In order to keep the data always consistent, the offline database must be synchronized regularly.
Synchronization is automatically performed by the client in the background. The interval can be
freely configured in the
[User settings](/docs/passwordsecure/9.1/user-guides/administration/user-settings.md).
The synchronization is completed every 30 minutes by default. When creating and editing records, it
is also possible to synchronize outside of the synchronization cycle so that the changes are
directly available offline. In addition, the synchronization can also be started manually in
Backstage via “Account”.

A running synchronization is displayed in the icon in the task bar as well as by a status bar in the
client:

![progress icon](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/offlineclient/setup/progress-icon-en_64x53.webp)

![installation_with_parameters_269](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/offlineclient/setup/installation_with_parameters_269.webp)

As soon as the synchronization is completed, this is indicated by a hint.

![notification "offline sync completed"](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/offlineclient/setup/offline-sync-completed-en_383x75.webp)

#### Relevant settings

![installation_with_parameters_271](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/offlineclient/setup/installation_with_parameters_271.webp)

Offline mode can be configured and personalized using the four settings mentioned:

- **Offline synchronization after saving a record**: The synchronization of the offline database is
  completed directly after saving a record. It is important to note that this only applies to those
  records that are saved by the user who is logged in. Changes made by another user do not trigger
  any synchronization!
- **Offline synchronization after login:** If this option is active, the offline database is
  synchronized after each restart of the client.
- **Automatic synchronization after an interval**: This setting is used to define the interval at
  which a synchronization of the offline database will be periodically carried out. The default
  value is 30 minutes.
- **Path where the offline database should be saved**: If this field is left empty, the system
  default is used. Otherwise, the storage location for the offline database can be entered directly.

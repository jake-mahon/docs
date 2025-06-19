# Mobile devices

## The new Netwrix Password Secure Mobile App – mobile and simple!

With version 8.10 we have created the perfect complement to the client: **The Netwrix Password
Secure Mobile App!**

With its **convenient** interface, the Netwrix Password Secure Mobile App offers the perfect
prerequisite for every user to find their way around **quickly** and **easily**.

For detailed documentation of the **Netwrix Password Secure Mobile App**

NOTE: Please note that as of version 8.10.0, the previous version 7 App is no longer compatible.

#### Security is our ambition

No matter whether you work with a smartphone or a tablet, you benefit from the highest possible
security on all iOS and Android devices. All passwords are not only available on the mobile device,
but can also be automatically transferred to websites. So you can use highly complex and therefore
secure passwords and don’t have to remember them anymore. The Netwrix Password Secure Mobile App
thus combines security and convenience. In addition, the use of a local database ensures that
passwords can be accessed even when no

#### Functions

The functionalities of **password management, SSO, synchronization** and **tab system** are even
more extensive and detailed in the specially created **documentation**.

### Password management

The new **Netwrix Password Secure mobile app** keeps all **passwords** safe. They can not only be
stored securely but also structured conveniently.

### SSO

The most important convenience feature of the Netwrix Password Secure Mobile app is the possibility
of entering passwords directly into log-in masks of other apps or browser pages. The configuration
and correct use can be found out in the corresponding chapters for **iOS** and **Android**.

### Synchronization

Since the data exchange between mobile database and server database is done automatically in the
background, there is no need to worry about the actuality of the data.

### Tab system

With the new and simplified tab system, the handling for the individual user has been made
uncomplicated and clear. The affiliation of the passwords is visible at a glance. The exact handling
of the tab system can be read in the chapter **Tabs**.

# Password Management

In principle, there are two types of passwords. **Global** and **personal** passwords.

#### Global passwords

Global passwords are passwords that are assigned to an organizational unit. These passwords are
usually used by more than one user.

![Mobile App - global passwords](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/passwords/global-passwords-ma-en.webp)

Prerequisites

The following prerequisites must be met in order to create new global passwords:

- User right **Can create new passwords**
- **Add right** to the corresponding organizational unit

#### Personal passwords

Personal passwords are passwords to which only the creating user is authorized.

![MobileApp - personal passwords](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/passwords/personal-passwords-ma-en.webp)

Requirement

The following user rights are required to create personal passwords:

- Can create new passwords
- Can create personal records

#### Create passwords

When creating a new record, it is necessary to know whether it is a personal or a global password.
Because according to this criterion you should select the appropriate tab and click on the + located
in the upper right corner.

![create new password](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/passwords/create-new-password-ma-en.webp)

After that, select the required **form**.

![select form](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/passwords/select-form-ma-en.webp)

Then, once you have filled in all the relevant information of the selected form, one click on
**Save** is enough to create the password.

![new entry MobileApp](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/passwords/new-entry-ma-en.webp)

#### Editing passwords

To edit a password, click on the corresponding password and select the pencil icon.

![editing password](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/passwords/new-entry-ma-2-en.webp)

As soon as you click on the pencil icon again in the new window, in the so-called read-only view,
you can edit all existing fields.

![edit passwordfield MobileApp](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/passwords/edit-passwordfield-ma-en.webp)

![edit passwordfield](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/passwords/edit-entry-ma-2-en.webp)

#### Delete

Passwords can currently only be deleted via the Full- or Web Application.

#### Tags

Tags can be added or removed both when creating and editing a password.

![MobileApp - Tags](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/passwords/edit-tag-ma-en.webp)

It is also possible to create a completely new tag.

This is possible by searching in the tag selection in the search field for a tag that does not
already exist.

You will then be offered the option of creating this previously non-existent tag.

![Mobileapp - select/create tag](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/passwords/select-tag-ma-en.webp)

# Security

#### Your security is our ambition

Security is a top priority for Netwrix Password Secure - right from the conception stage, it sets
the course for all further developments. Of course, security was also taken into account during the
development of the Netwrix Password Secure app and the latest technologies were used. The following
encryption techniques and algorithms are currently used:

Global

- AES 256 / RSA 4096 encrypted
- PBKDF2 with up to 100,000 iterations
- End to end encrypted (like all Netwrix Password Secure App Clients)
- No direct connection to Netwrix Password Secure Server required. Connection is via web server.
- MDM (Mobile Device Management) support
- Passwords can be used offline when server access is not available
- Fast incremental data synchronization
- Easy connection between Netwrix Password Secure Mobile Apps and the server via QR code
- Easy navigation between private and shared passwords
- Automatic reconciliation of data using real-time updates
- Two-factor authentication
- Synchronization with multiple databases possible
- Expiration date of databases to ensure automatic deletion
- Server and app side security settings. Who is allowed to use the app and to what extent?

iOS

- Full support of FaceID and TouchID for passwordless login to the Netwrix Password Secure Mobile
  app.
- Password AutoFill support. Passwords are automatically entered in other apps and Safari. (No
  copy/paste or typing)

# Settings

As soon as you are logged in to the **Netwrix Password Secure App**, you can access the **settings**
via the three dots at the very top left of the screen. These will be briefly explained here.

![MobileApp - settings](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/settings/settings-ma-en.webp)
![MobileApp - settings](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/settings/settings-2-ma-en.webp)

#### General

Hide personal tab

In some use cases personal passwords are not needed on the mobile device. If this is the case you
can hide the tab with the personal passwords.

Show all passwords in search tab

If this option is deactivated, a search will always refer to the opened tab only. This can be useful
if there are several records in the database which have the same name and can only be distinguished
by the affiliation to an organizational unit.

#### Security

Touch ID / Face ID

Here the login via Face ID or Touch ID can be activated and deactivated.

Automatic logout

Automatic logout from the app can be enabled and configured here.

#### Synchronization

Automatic synchronization

How to synchronize with the main database is configured here. The following options are available:

- **Any type of connection:** as long as there is a connection, synchronization will take place. No
  matter if it is a WLAN connection or a connection via the mobile network.
- **Only for WLAN connection:** Synchronization only takes place if there is a connection via WLAN.
- **Disabled:** It is not synchronized

NOTE: Costs may be incurred for synchronization via the mobile network!

Synchronize now

Starts the synchronization. This can also be started outside the settings at any time by simply
swiping down. More information can also be found in the chapter
[Synchronization](/docs/passwordsecure/9.2/user-interfaces/mobile-apps/mobile-synchronization.md).

Fix sync errors

This menu item first checks for errors caused by the synchronization. If there are such errors you
get the possibility to repair them or to overwrite them with the current state of the server
database.

#### Logging

Logging

Here you can activate or deactivate the logging.

Show log file

If logging is active, the log file can be displayed here.

Delete log file

Logs that are no longer needed can be deleted here.

# Tabs

Once you have successfully logged in, you will find yourself in the view where all the user's
passwords are located.

![all passwords in mobile app](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/tabs/all-passwords-ma-en.webp)

Here you have the following options:

Action menu

With a click on
![three-points-en](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/tabs/three-points-en.webp)
the action menu is opened.

![actions mobile app](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/tabs/actions-ma-en.webp)

The following actions are offered:

- **Open settings** (more information can be found in the Settings chapter).
- **Close tab** (the option is offered only if you are in one of the organizational units tabs. The
  default ones are excluded)
- **Logout** (you will be logged out from the database)
- **Cancel** (closes the action menu and returns to the tab view)

Tabs

Below the passwords there is a bar for managing tabs.

![manage tabs](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/tabs/all-passwords-ma-2-en.webp)

By clicking on the plus sign there is a possibility to add more tabs.

![add tabs](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/tabs/add-tabs-ma.webp)

These tabs are organizational units that the user can see. By default, the tabs **"All passwords"**
and **"Personal"** are stored.

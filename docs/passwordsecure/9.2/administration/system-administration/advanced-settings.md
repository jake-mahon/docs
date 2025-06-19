# Administration

## Sessions

Via the menu item **Sessions**, all users connected to the database can be displayed. This page is
purely informative in character and thus no configurations can be made here.

![installation_with_parameters_120](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/administration/installation_with_parameters_120.webp)

The session view starts in the currently active module in a separate tab.

#### Locked users

All currently locked users can also be retrieved. There are two scenarios here:

1. User name correct, password incorrect: The user name is displayed
2. User name incorrect: The client is displayed

In addition, the number of attempted logins and the length of time that the user was locked in each
case can be seen.

![installation_with_parameters_121](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/administration/installation_with_parameters_121.webp)

#### Default password rules

Password rules can be defined for both user passwords and also for WebViewer exports that then need
to be fulfilled. In the following example, a user password must correspond to the “default password”
rule in order to be valid

![Standard password rule](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/administration/installation_with_parameters_122-en_677x129.webp)

#### Relevant right

There is a separate option for defining the password rules for named passwords.

**User right**

- Can configure standard password rules

# General settings

## What are general settings?

Within the general settings, surface settings regarding the colour scheme as well as the language
used are configured. The password for logging in to the Server Manager can also be changed here.

![General settings](/img/product_docs/passwordsecure/passwordsecure/configuration/server_manager/database_properties/installation_with_parameters_254-en.webp)

## Determining the system hash

This function determines the system hash, and copies it to the clipboard. This hash is used for the
offline license.

# Advanced settings

## What are advanced settings?

Global standard default values are specified in the advanced settings.

![advanced settings](/img/product_docs/passwordsecure/passwordsecure/configuration/server_manager/main_menu/installation_with_parameters_263-en.webp)

#### Database server

The database server stored here is used as a default value when rebuilding databases. There are 2
modes:

Simple mode

In simple mode, the path to the database server including the user and the associated password can
be specified. You may use the service user for this purpose.

Extended mode

In extended mode, the connection string can be specified, which contains both the server, the user
and the password

SMTP server

By configuring the SMTP server you define all settings for emails, which the server should send, eg
via the notification system. At the final save, the connection is directly tested for functionality.
The “Save SMTP settings” button becomes active only after a change has been made.

Log forwarding configuration

Here you can define the settings which logs will be forwarded via mail

# General settings

## What are general settings?

The **general settings** relate to users. Thus, each user can customize the software to their own
needs. The following options can be configured:

Colour scheme

Various Windows colour schemes are available. The colour scheme Colorful provides e.g. different
colours which make it easier to distinguish between the modules in the software. If the colour
scheme is changed, the client must be restarted.

Language

The user can toggle between English and German. After changing the language, the client must be
restarted.

Starting the application minimised in the notification area

You can start the client minimized if you wish to run Netwrix Password Secure in the background. You
will be able to access it through the notification area.

Minimise the application on closing

If this option has been activated, the Netwrix Password Secure client will not end when the window
is closed but will merely be minimised. It will continue to run in the background. It is then only
possible to properly end Netwrix Password Secure via the main menu.

Starting with Windows

Of course, you can start the Netwrix Password Secure Client directly with Windows.

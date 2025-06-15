# HTML WebViewer export

## What is a HTML WebViewer export?

The __WebViewer__ is an option inNetwrix Password Secure for exporting passwords in an encrypted __HTML file__. The records are selected using the [Filter](../../../operation_and_setup/filter/filter.md) function. The passwords for which the user has the corresponding permissions are exported. They are displayed in a current browse that has __JavaScript activated__.

## Data security

- Naturally, the HTML WebViewer file is __encrypted__
- The export of the file is protected using a corresponding [User rights](../../user_rights/user_rights.md)
- The user requires the __export right__ for the passwords

## Required rights

The __export right for the WebViewer__ is configured via the __user rights__:

User right

- Can export HTML WebViewer

The __export right__ for the password is configured as normal via the ribbon:

![installation_with_parameters_65](../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_65.webp)

## Exporting a HTML file

The __HTML file__ is created on the user\*s client and started in the __Main menu__ under __Export WebViewer__.

![installation_with_parameters_66](../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_66.webp)

The __HTML WebViewer Wizard__ carries out the \* WebViewer export\*.

###### Create WebViewer

General information and notes about the export are displayed under __Create WebViewer__.

###### Settings

General information such as the __Name__ and __Export path__ for the __HTML file__ can be entered here.

__File name__: Freely selectable name

__Export path:__ Storage location for the file on the client

__Time until logout__: Time in seconds for which the window remains open without any activity

__Standard value:__ 60 seconds, user can define the time

Export __WebViewer__ with __user password__ or new freely __definable password__: You can decide here whether to issue a new password for the export.

![installation_with_parameters_67](../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_67.webp)

- WebViewer export with an Active Directory user

If an __Active Directory user__ is carrying out the __WebViewer__ export, a __password__ needs to be explicitly entered.

![installation_with_parameters_68](../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_68.webp)

###### Export filter

The export filter works in the same way as the filters for the modules.

![installation_with_parameters_69](../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_69.webp)

#### Finish

The information about the exported passwords is displayed in the __Finish__ ribbon. Clicking on the __Finish__

button will then create the __HTML__ __file__ in the export path and close the window.

![installation_with_parameters_70](../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_70.webp)

A subsequent note provides you with information about the export process.

![installation_with_parameters_71](../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_71.webp)

## Using the HTML WebViewer file

The __HTML file__ is created in the export path and can be copied to a mobile data medium (USB stick, external HDD, …). The __HTML file__ can be opened in a standard browser and displays the __Netwrix Password Secure – HTML WebViewer / Login__ when started. The __database__ and the __user name__ are predefined. The user \*password is used for the login.

__CAUTION:__ The login mask is blocked for a period of time if the password is incorrectly entered!

1. Database: Predefined
2. User: Predefined
3. Password: Entered by the user

![Login HTML WebViewer](../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_72-en.webp)

###### Overview

After logging in to Netwrix Password Secure, the overview page for the \*HTML- WebViewer \* with the passwords is displayed.

NOTE: Use the password search function in the event of more than 20 passwords!

1. Displayoftherecords(max.20)
2. Detailedinformationontheselectedrecord
3. Search,logout,timeout
4. Copytoclipboard
5. Reveal

![Entry in HTML WebViewer](../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/html_webviewer-export/installation_with_parameters_73-en.webp)

#### Closing the HTML WebViewer overview

You can log out by clicking on __Logout__. In the event of a longer period of inactivity, the user will be __automatically logged out after a set period of time has expired (time until logout).__

NOTE: You have been logged out due to inactivity.

The browser will then show the __Netwrix Password Secure– HTML WebViewer / Login__ again and also the reason for being logged out. It is possible to log in again.

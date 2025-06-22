# Installation of the App / Requirements

The Netwrix Password Secure app is installed as usual via the Apple Store or Google Playstore. The
apps can be found under the following links:

![App store](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/setup/installation_app/appstore-icon.webp)

![Google Play](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/setup/installation_app/android-icon.webp)

#### Requirements

The **Netwrix Password Secure Apps** can be installed on the following systems:

**iOS:** at least version 10.14

**Android:** at least version 8.0

**Web Application**: Since the app connects via the Web Application, it is mandatory to have it
installed. The documentation of the Web Application installation can be seen in the chapter
[Installation Web Application](/docs/passwordsecure/9.2/installation-setup/web-application-installation/web-application-overview.md)

**Port**: The connection is made via https port 443, which must be enabled on the server side.

[User rights](/docs/passwordsecure/9.2/administration/user-management/user-rights.md)**:** The users need the
right **Can synchronize with mobile devices.**

[Database properties](/docs/passwordsecure/9.2/administration/server-management/database-properties.md): It must
be ensured that the Enable mobile synchronization option is set.

# Linking the database

First, an existing database must be linked to the Netwrix Password Secure app in order to finally
synchronize the data. During linking, an encrypted database is created on the mobile device, which
provides the data even without a network connection.

There are two ways to create a link.

#### Manual linking

If the database is to be linked manually, the dialog for creating the link is first called up via
the + in the top right-hand corner. Here the address of the Web Application is entered and confirmed
with a click on Connect.

![Create link](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/setup/linking_database/create-link-ma-en.webp)

In the next step, all available databases are displayed. The desired one can be selected by clicking
on it.

![choose link](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/setup/linking_database/choose-created-link-en.webp)

Finally, the login with user name and password takes place. In addition, a meaningful name can be
assigned.

![log in with your data](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/setup/linking_database/integration-ma-en.webp)

#### Link via QR code

Fulluser

The quickest way to create a link is via a QR code. To do this, first log in to the client. You will
find the corresponding QR code in the Backstage under Account:

![QR-code](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/setup/linking_database/link-via-qr-code-en.webp)

Then click on the button for the QR code in the app. In the following dialog, the QR code is simply
photographed from the monitor. The mobile database is now created directly in the background and
linked to the database on the server. In the next step, you can give the database profile a
meaningful name and log in directly:

![log in with your data](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/setup/linking_database/integration-ma-en.webp)

LightUser

Using the Light view, the user must click on their user account and click on the **Account** option

![Account LightClient](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/setup/linking_database/account-lc-2-en.webp)

This will open a window where you can use the QR code to scan the database.

![QR code lightclient](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/setup/linking_database/account-lc-3-en.webp)

# Setup

## Requirements

Netwrix Password Secure Mobile Apps automatically synchronize with an existing Netwrix Password
Secure database. The [Web Application](/docs/passwordsecure/9.2/user-interfaces/web-application/web-application-overview.md) is used as the
interface for this. This must therefore be installed. In addition, the database must be enabled for
use with mobile devices on the [Server Manager](/docs/passwordsecure/9.2/administration/server-management/server-manager-overview.md).

#### Setup and configuration

The setup and initial configuration of the **Netwrix Password Secure App** is explained in the
following chapters:

- [Installation of the App / Requirements](/docs/passwordsecure/9.2/user-interfaces/mobile-apps/mobile-setup.md)
- [Linking the database](/docs/passwordsecure/9.2/user-interfaces/mobile-apps/mobile-setup.md)
- [Biometric login](/docs/passwordsecure/9.2/user-interfaces/mobile-apps/biometric-login.md)
- [Setting up autofill](/docs/passwordsecure/9.2/user-interfaces/mobile-apps/mobile-autofill.md)

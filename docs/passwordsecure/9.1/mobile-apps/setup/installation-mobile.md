# Installation of the App / Requirements

The Netwrix Password Secure app is installed as usual via the Apple Store or Google Playstore. The
apps can be found under the following links:

![App store](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/mobiledevices/setup/installation_app/appstore-icon.webp)

![Google Play](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/mobiledevices/setup/installation_app/android-icon.webp)

#### Requirements

The **Netwrix Password Secure Apps** can be installed on the following systems:

**iOS:** at least version 10.14

**Android:** at least version 8.0

**Web Application**: Since the app connects via the Web Application, it is mandatory to have it
installed. The documentation of the Web Application installation can be seen in the chapter
[Installation Web Application](/docs/passwordsecure/9.1/installation/web-application/installation-web-application.md)

**Port**: The connection is made via https port 443, which must be enabled on the server side.

[User rights](/docs/passwordsecure/9.1/user-guides/administration/user-rights.md)**:**
The users need the right **Can synchronize with mobile devices.**

[Database properties](/docs/passwordsecure/9.1/configuration/server-manager/database-properties.md):
It must be ensured that the Enable mobile synchronization option is set.

# Setup

## Requirements

Netwrix Password Secure Mobile Apps automatically synchronize with an existing Netwrix Password
Secure database. The
[Web Application](/docs/passwordsecure/9.1/web-application/web-app-overview.md)
is used as the interface for this. This must therefore be installed. In addition, the database must
be enabled for use with mobile devices on the
[Server Manager](/docs/passwordsecure/9.1/configuration/server-manager/basic-configuration.md).

#### Setup and configuration

The setup and initial configuration of the **Netwrix Password Secure App** is explained in the
following chapters:

- [Installation of the App / Requirements](/docs/passwordsecure/9.1/mobile-apps/setup/installation-mobile.md)
- [Linking the database](/docs/passwordsecure/9.1/mobile-apps/setup/linking-database.md)
- [Biometric login](/docs/passwordsecure/9.1/mobile-apps/setup/biometric-login.md)
- [Setting up autofill](/docs/passwordsecure/9.1/mobile-apps/setup/setup-autofill.md)

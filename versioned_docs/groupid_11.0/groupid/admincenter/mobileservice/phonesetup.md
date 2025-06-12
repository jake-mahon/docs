# Install and Configure the GroupID App

To use the GroupID app on a smartphone, users must do the following:

- Install the GroupID app on their smartphone
- Connect it to the GroupID server

## Install the App

The Android, Windows, and iOS versions of the GroupID mobile app have been published on Google Play, Windows Store, and App Store respectively.

1. Go to the relevant store on your smartphone and search for __Imanami GroupID__.
2. Install the app and launch it on your phone.

## Configure the App

The GroupID app uses the Mobile service to communicate with the GroupID server. Mobile service can be hosted on any of these three web servers: native IIS, remote IIS, and Docker.

To connect the app to the GroupID server, you must register the URL of the web server that hosts the Mobile service in the app. Choose any of the following methods to do so:

- Enter the web server URL manually in the app, or
- Scan a QR code with your phone.

NOTE: Since you can have multiple Mobile services as well as multiple instances of the same service, the administrator should provide the URL or QR code of the specific service or instance that they want users to configure the app with.

### Manually Provide the Web Server URL

The web server URL for a Mobile service or an instance of a service is displayed on the __GroupIDMobileService__ page (see
the [Launch a Mobile Service or a Service Instance](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/create.md#launch-a-mobile-service-or-a-service-instance) topic). Provide it to your users to enable them to configure the app.

__To get the URL of the page that displays the web server URL:__

1. Launch the required Mobile service or its instance. (See the [Launch a Mobile Service or a Service Instance](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/create.md#launch-a-mobile-service-or-a-service-instance) topic.)
2. Copy the URL of the __GroupIDMobileService__ page and provide it to your users, so they can open this page in a web browser.

__To enter the web server URL in the app:__

1. When you launch the GroupID app on your smartphone for the first time, the __Configure__ page is displayed. Tap __Configure Application Manually__.
2. Copy the web server URL displayed on the GroupIDMobileService page and enter it in the __GroupID Server URL__ box in the app.
3. Tap __Save and Proceed__.  
    The app validates the URL and on success, the __Login__ page is displayed. Sign into the app and start using it.

### Scan the QR Code

The QR code is an easy way to configure the GroupID app. Provide the QR code of a Mobile aervice or an instance of a service to users, so they can scan it to connect the app with the respective service.

__To get the URL of the page that displays the QR code:__

1. Launch the required Mobile service or its instance. (See the [Launch a Mobile Service or a Service Instance](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/create.md#launch-a-mobile-service-or-a-service-instance) topic.)
2. Copy the URL of the __GroupIDMobileService__ page and provide it to your users, so they can open this page in a web browser.

__To configure the app with QR code:__

1. Launch the __GroupIDMobileService__ page with the given URL.
2. Launch the GroupID app on your smartphone and tap __Configure Application using QR Code__ on the __Configure__ page.
3. Scan the QR code with your smartphone.  
    On successful configuration, the __Login__ page is displayed. Sign into the app and start using it.

__See Also__

- [Mobile Service](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/overview.md)

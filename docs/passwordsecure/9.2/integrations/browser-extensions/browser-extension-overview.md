# Applications

## What are applications?

Data can be entered on many websites without further configuration. The website is scanned in order
to find data entry fields in which the user name and password can then be entered. No further steps
are thus necessary. For websites where data cannot be entered directly, it is necessary to create an
application manually. These applications correspond to working guidelines that precisely define
which information should be entered into which target field. The full script that describes the
assignment is called an “**application**”.

![registration with and without application](/img/product_docs/passwordsecure/passwordsecure/configuration/browseradd-ons/applications/installation_with_parameters_142-en.webp)

The diagram starts with the user navigating to a website. The application server is then checked to
see whether a record has been saved for this website for which the currently registered user also
has the required permissions. If this is the case, the information required for the login is sent to
the Browser Extension in encrypted form. The password is only decrypted in the add- on shortly
before it is entered. There are two ways in which the information is entered: **Data entry without
application** and **Data entry with application**.

Data entry without application

The data entry without application process is sufficient for most websites because the fields can be
directly assigned (mapping). The system checks in the background whether a login mask has been found
for any websites visited. The URL is now used to check if there are any records in the linked
websites that would fit the page. It is only necessary for the hostname including the domain suffix,
such as .de or .com, to match. The data are then entered. In this case, the user name is transmitted
to the first user name field that can be found on the page. The password is also entered into the
first password field found on the page. If automatic login has been activated in the settings, this
is also carried out by clicking the login button.

#### Data entry with application

It is not possible to automatically recognise the fields that must be filled on some websites. An
application needs to be created in these cases. If more than two fields need to be transferred, it
is also necessary to create an application. In this context, “application” means instructions that
are used to enter information into the fields. It thus assigns fields in the record to the
associated fields on the website. This mapping process only needs to be configured once. The
applications is responsible for entering data in the fields on the website from then on. In the
following example, the data entry process is carried out from the client. Naturally, this is also
possible via [Browser Add-ons](/docs/passwordsecure/9.2/integrations/browser-extensions/browser-extension-overview.md). The procedure remains the same.

![installation_with_parameters_143](/img/product_docs/passwordsecure/passwordsecure/configuration/browseradd-ons/applications/installation_with_parameters_143.webp)

The URL is checked to see whether the record matches the web page. It is only necessary for the
hostname including the domain suffix (“.de” or “.com”) to match.

## Creating applications

**CAUTION:** The user right Can add new web applications is required in order to create applications

If the login mask on a website cannot be automatically completed, it is necessary to manually create
an application. To create an application, the desired website is first called up. The add-on is then
started via the relevant icon. The menu item “Create application\* can be found here

![create application](/img/product_docs/passwordsecure/passwordsecure/configuration/browseradd-ons/applications/installation_with_parameters_144-en.webp)

A modal window now opens. The actual application is now created here.

![modal application window](/img/product_docs/passwordsecure/passwordsecure/configuration/browseradd-ons/applications/installation_with_parameters_145-en.webp)

The following options are available:

- **Advanced options** allows you to define a delay separately for each field when entering the
  data. This is sensible when the process of entering the data would otherwise not run smoothly on
  sluggish websites.
- The **Move** setting can be used to change the position of the modal window if it covers the login
  window

To capture, click on the first field to be filled on the website. It will be directly added to the
list in the modal window. For better identification, fields that belong together are marked in
colour.

![choosed application field](/img/product_docs/passwordsecure/passwordsecure/configuration/browseradd-ons/applications/installation_with_parameters_146-en.webp)

The field type (e.g. INPUT) and the field label are displayed in the field itself. In addition, an
action is proposed which fits the field type, such as e.g. entering the user name. The action can
naturally be adjusted if required. Once all fields have been captured, the system checks whether the
actions are correct. Finally, the application can be saved.

![example for a application](/img/product_docs/passwordsecure/passwordsecure/configuration/browseradd-ons/applications/installation_with_parameters_147-en.webp)

The saved application is now available for the user and can be used via the add-on.

# Browser Add-ons

Passwords can also be used in the browser using the browser add-on. You can search for passwords in
the add-on, transfer them to the clipboard or enter them in the input mask of the website
automatically. The automatic login may require applications.

In order to provide the data, the add-on needs a connection to the database. This can be set up
directly in server mode.

Currently, add-ons are available for the following browsers:

- Microsoft Edge
- Google Chrome
- Mozilla Firefox
- Safari

![Add-on Browser](/img/product_docs/passwordsecure/passwordsecure/configuration/browseradd-ons/addon-connections-en.webp)

## Installation

Please find more information about the installation on: Installation Browser Add-ons

## Connection via server mode

If the installation of the browser extension has been carried out, the user can now open the desired
browser. A window appears in which the security of the connection is confirmed. Pairing is performed
with a simple click. A new icon will also be displayed in the desired browser from this point
onwards:

![Icon Add-on](/img/product_docs/passwordsecure/passwordsecure/configuration/browseradd-ons/addon-icon-en.webp)

If the icon is displayed as shown, it means that although the add-on has been installed.

## Database profiles

The server mode must know which database profile it is connected to. There are two ways of setting
up a database profile:

First, the database profile can be created manually. Therefore, he following information is
required: IP address, Web Application URL and database name. Please note that /api is appended to
the end of the IP address.

![database profil](/img/product_docs/passwordsecure/passwordsecure/configuration/browseradd-ons/manual-database-profile-en.webp)

It is also possible that the database profile is filled out automatically. For this, you need to log
on to a database via Web Application. By clicking on the add-on in the Web Application, its profile
can be taken over. Now all necessary information such as profile name, IP address, Web Application
and database name are transferred.

![Adopt WebClient profile](/img/product_docs/passwordsecure/passwordsecure/configuration/browseradd-ons/adopt-database-profile-en.webp)

## The server mode benefits

The server mode offers the following advantages:

- No terminal service is required in terminal server operation

**CAUTION:** Please note that SSO applications only work via Autofill Add-on. If you are in server
mode and the Autofill Add-on has not been started, SSO applications do not work!

After successful connection, the number of data records available for the current Internet page is
displayed on the icon.

![record found](/img/product_docs/passwordsecure/passwordsecure/configuration/browseradd-ons/record-found-en.webp)

## Settings

All settings that relate to the add-on are made centrally on the client. The user settings system
can be used to enter them globally per organisational unit or per user. The following options have a
direct impact on the add-ons and can be found in the SSO category:

- Browser add-ons: Automatically send login masks ensures that the login is automatically completed
  after the access data has been entered. It is thus not necessary to click the relevant button
  manually
- About browser add-ons: Automatically fill login masks ensures that access data is entered without
  the need for any confirmation when a website is recognised.

The default browser option also has an impact on the add-ons. This setting defines the browser in
which the websites are opened from the client.

NOTE: It is important to note that the login mask for records with password masking will be ”sent
automatically\*, even if the setting Browser add-ons: Automatically send login masks has been
deactivated.

## Working with add-ons

NOTE: A record can only be used for entering data if it has a form field of type "URL".

The subscript number mentioned in the previous section is only available with active logins and
therefore already says a lot about the “Number of possible entries”. For example, if the number “2”
is shown, you can directly select the account you want to log in with.

![Addon list](/img/product_docs/passwordsecure/passwordsecure/configuration/browseradd-ons/addon-records-list.webp)

Previously, the prerequisite was that you had to navigate manually to the precise website via the
browser that you actually wanted to use. This navigation can now also be handled by Netwrix Password
Secure – as described in the following section.

## Search and navigation

It is currently assumed that the user has to navigate manually to the website on which they want to
automatically enter login data. This way of working is possible but is not convenient enough. The
add-on can be used in a similar way to bookmarks. The search field can be used to search for the
record in the database. The prerequisite is again that the record contains a URL.

![Record usage](/img/product_docs/passwordsecure/passwordsecure/configuration/browseradd-ons/addon-records-usage-en.webp)

The screenshot shows that the URL and the name of the record (Wikipedia) are searched. The results
for the search are displayed and can be selected using the arrow buttons or the mouse. The selected
website will be opened in a separate tab.

## Several passwords for one website

If a user opens a page and multiple passwords with the autofill function are possible for this
website, no entries will be made unlike in older versions. Instead, the following message appears in
a pop-up:

![Multiple entries](/img/product_docs/passwordsecure/passwordsecure/configuration/browseradd-ons/addon-multiple-passwords-en.webp)

However, if the autofill function is only activated for one password but multiple passwords are
possible, the password with the autofill function is entered. If the user clicks on a record in the
pop-up, this record is entered as normal (as was the case previously).

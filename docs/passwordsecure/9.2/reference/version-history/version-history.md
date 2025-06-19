# Version 8.16.0.29823

## New

#### FullClient

- Removed accuracy setting from certain filters.
- Improved PuTTY security.

#### Web Application

- Removed accuracy setting from certain filters.

#### Server

- ECC migration added.
- 'User password changed' logbook event added.

#### Server Manager

- 'Non-migratable data' report added.

## Fixed

#### FullClient

- Fixed Dashboard Activity Widget time filter.

#### Web Application

- Creating a role when creating an organisational unit is not possible without the "Can create role"
  right anymore.
- Removed structure view in certain modules.

#### Server Manager

- Fixed handling MSP certificates.
- Hardware binding removed from the offline license activation.

#### MSP

- Fixed handling MSP certificates.

# Version 8.16.1.29875

## New

#### Server

- Added email notification for user password change.

## Fixed

#### FullClient

- Connecting applications to passwords in edit view works again.
- Fixed an error in the auto login.
- The column settings are now correctly saved in the password module.

#### Server

- Certificate export works again.
- Fixed an error when deleting an Active Directory user.
- The "User Stats" report is creating properly.

#### Server Manager

- The ConnectionString in the database settings is now saved correctly.
- An error is now displayed when saving an incorrect PKCS label and serial number.

# Version 8.16.3.29968

## New

#### FullClient

- Added token verification for MFA setup during login.
- Renamed Azure AD to Entra ID. Added "Entra ID client secret" to Entra ID, Conditional Access now
  works correctly.

#### Web Application

- Added token verification for MFA setup during login.
- Renamed Azure AD to Entra ID. Added "Entra ID client secret" to Entra ID, Conditional Access now
  works correctly.

#### SSO Client

- Added token verification for MFA setup during login.

#### Basic view

- Added token verification for MFA setup during login.

#### Basic view in the Web View

- Added token verification for MFA setup during login.

## Fixed

#### FullClient

- Performance improved when sealing passwords

#### Web Application

- Opening a link to the Web Application correctly redirects to the requested page (this also fixed
  problems with the browser extension when opening and editing existing passwords and the option to
  save new passwords).
- History changes are highlighted properly now.
- Web applications can now be created again.

#### Server

- Masterkey AD user login over kerberos timeout fixed.

#### Add-ons

- Entra ID user login fixed.

# Version 8.16.4.30125

## New

#### FullClient

- The object type filter option has been added to the role and user search dialog.

#### Web Application

- The object type filter option has been added to the role and user search dialog.

#### Server

- The Entra ID provisioning is now able to reimport roles.

## Fixed

#### FullClient

- The column editor shows all available columns again.

#### Web Application

- The CSV-Import in the Web Application now only refreshes once after the task has been cancelled or
  finished.
- "Assigned Roles" displays selected roles correctly again when creating a new user.

#### SSO Client

- The Autologin after a session timeout works again.

#### Basic view

- Tags are properly created when using a predefined right again.

# Version 8.16.5.30226

## New

#### FullClient

- The option "Change password at next login" is now activated by default.

#### Web Application

- The option "Change password at next login" is now activated by default.

#### Server

- Improved Entra ID role synchronization.

## Fixed

#### FullClient

- After restoring a user, the authorizations for roles are now correct again.
- Incorrect file extensions no longer cause the client to crash.
- An error when starting the client has been fixed.
- Changing the permissions of your own user is now possible again.

#### Web Application

- After restoring a user, the authorizations for roles are now correct again.
- The tag/image management window can be closed if no changes have been made.
- Adding a new organisational unit from within structure view works again.
- The website can be reloaded without any problems if you are logged in with an Entra ID user.

#### Server

- If a password cannot be shared, this now also applies to the password fields.
- In the emergency web viewer revealing passwords with umlauts now works correctly.

#### Server Manager

- The redirection rule for IIS web.config works again with LetsEncrypt certificates.

#### SSO Client

- The automatic input into the application with the mouse for left-handers works again.

#### LightClient in the Web View

- The website can be reloaded without any problems if you are logged in with an Entra ID user.
- A tag will be created when using predefined rights.

# Version 8.16.6.30233

## New

#### FullClient

- Relabled "Public" objects to "Shared" objects

#### Web Application

- Relabled "Public" objects to "Shared" objects

## Fixed

#### Server

- Passwords can now be created in an organizational unit again if the right "Can share passwords
  stored in the user's organisational unit" is deactivated for the user.

# Version 9.0.0.30423

## New

#### Cross-client change\*

- The encryption system has undergone significant enhancements to bolster its resistance against
  brute force attacks. Moreover, it now aligns with the latest OWASP recommendations.

#### Extended view (formerly FullClient)

- Windows clients have transitioned to exclusive compatibility with 64-bit systems, optimizing
  available RAM resources and enabling concurrent operation of more RDP sessions (also affects the
  SSO and OfflineClient). RDP libraries have also been upgraded to 64-bit.
- In the recycle bin of organizational units, it is now possible to permanently delete objects via
  multiple selections.
- The clarity of the user interface has been enhanced by defaulting to icons instead of logos,
  offering a more streamlined experience. This adjustment also applies to the Web Application.

\* This improvement affects all views (normal and advanced view) and Clients (Admin-, Web-, SSO- and
OfflineClient), the browser extension, API, and the server as well as MSP.

#### MSP

- Price details can now be customized on a per-customer basis, allowing for greater flexibility and
  tailored pricing options.

## Fixed

#### Extended view (formerly FullClient)

- The export now also works when using special separators.
- The export now also works, when text qualifier is empty.
- The "Add" permission for imported organizational units has been corrected.
- The report on "Inactive user accounts" now shows correct data.

#### Web Application

- The OTP field can now be reset.

#### Server

- The "User deleted" event is now correctly recorded in the logbook.

#### Browser extensions

- Even if no URL is stored, the username and password can now be copied from the browser extension
  again.

# Version 9.0.1.30479

## Fixed

#### Extended view

- After duplicating a password, the quality of the password is recalculated correctly.
- RDP connections now work again on Windows Server 2019.

#### Web Application

- The quick view can now be scrolled correctly even if another modal popup is open.

#### Browser Extension

- The search in the browser extension now works as expected again.

#### Server

- System tasks are no longer deactivated after each run if they were configured with the interval
  'Once' in the past.
- HSM accesses are limited to a minimum now.
- A self-defined password can be used for the WebViewer export again

# Version 9.0.2.30602

## New

#### Advanced view (formerly FullClient)

- The fields "user colour" and "initials" have been removed.
- For better readability, the option "Change Active Directory synchronization status" has been
  shortened to "Change AD sync state".
- The "Settings" tab doesn`t close anymore when another option is clicked on (This only affects the
  Web Application.).

#### Basic view (formerly LightClient)

- The "View details" option has been renamed to the more appropriate term "Quick view", which is
  already used in the extended view (This only affects the Web Application.).

## Fixed

#### Advanced view (formerly FullClient)

- Uploading a file now also works if no file name (e.g. '.env') is specified.

#### Web Application:

- Buttons to multiselect documents and applications have been added in the mobile view.
- The "New organisational unit" dropdown menu closes now when another tab has been opened.
- When multiple objects are selected, the button "Form field permissions" is greyed out now.
- Predefined rights templates for more than one organizational unit can now be edited
  simultaneously.

#### Browser Extension

- Passwords can now also be copied to the clipboard if no URL is stored.

# Version 9.0.3.30606

## Fixed

#### DesktopClient

- The PuTTY Client has been updated to version 0.81.

# Version 9.1.0.30996

## New

#### Browser Extension

- UserVoice Winner: Stored OTPs can now be retrieved directly via the browser extension.
- New improved autofill logic: The autofill function has been completely revised to enable a more
  convenient automatic login in the browser.
- Cross-platform authentication is now possible: The Windows app, browser extension and autofill
  add-on can now authenticate each other.
- UserVoice Winner: You can now also use htaccess forms for automatic login.
- The SSO agent connection for the browser extension has been deprecated. Here you can find
  instructions on how to switch to server mode as well as an FAQ to this topic (This also affects
  the autofill add-on.).
- Browser extension profiles can now be configured via policy.
- Opening Netwrix Password Secure from the browser extension now works correctly.

#### Basic view (formerly Light Client)\*

- SSO applications can now be connected with passwords.
- The button “Ignore application” has been renamed to “Hide application”.

\*As the basic view on Windows has been deprecated with version 9.1.0, the basic view from now on
always refers to the web app.

#### Server

- Missing data is now migrated to ECC.
- The web server configuration routine for IIS has been improved.
- If you change the deployment mode to "Members of groups only" during AD synchronization, the
  checkboxes for synchronization are now ignored.

## Improvements

#### Platform-client change\*

The following names have been changed:

| Obsolete                             | New (English)       | New (German)        |
| ------------------------------------ | ------------------- | ------------------- |
| WebClient                            | Web application     | Web Application     |
| LightUser / Basic view User          | (Basic) user\*      | (Standard) User\*   |
| Basic view (Ansicht)                 | Basic view          | Standardansicht     |
| FullUser / FullClient User           | Advanced user       | Advanced User       |
| FullClient (Ansicht)                 | Advanced view       | Erweiterte Ansicht  |
| Browser Add-on                       | Browser extension   | Browser-Erweiterung |
| App                                  | Mobile application  | Mobile Application  |
| Desktop Client                       | Windows application | Windows Application |
| Web Endpoint                         | Web server          | Web Server          |
| SSO Agent / SSO Add-on / SSO Service | Autofill add-on     | Autofill Add-on     |
| OfflineClient                        | Offline add-on      | Offline Add-on      |
| AdminClient                          | Server Manager      | Server Manager      |
| SAML Service                         | IdP service         | IdP Service         |

\* This improvement affects all views (basic and advanced view), apps and add-ons (Server Manager,
web and Windows app, autofill and offline add-on) the browser extension, API, and the server as well
as MSP.

#### Basic view (formerly LightClient)\*

- The basic view on Windows has been deprecated. Basic users can still login via web app.

#### Browser extension

- Login errors are now displayed correctly.

#### Server

- The quality of secrets stored in the database is now encrypted.

## Fixed

#### Advanced view (formerly FullClient)

- The footer is now displaying the latest four involved users again.
- Resetting to the default settings for actions in the clipboard is no longer saved when canceling.
- Drag & Drop while updating a document is now possible in the web app.

This only affects the Windows app:

- Rights from organizational units to passwords can now also be inherited recursively.
- Login security has improved: Credentials for one application can no longer be reused for a
  different one.
- Report details are now displayed correctly again.

#### Server

- Changing the form of passwords with multiline passwords now works.
- Sorting in the (emergency) web viewer now works correctly.

#### Server Manager

- The migration summary no longer shows an error message when all ECC migrations were started
  successfully.

#### API

- It is no longer possible to attach data to more than one organizational unit.
- Passwords that are changed via the JavaScript API/SDKbuD are encrypted correctly.

# Version 9.1.1.31138

## New

#### Advanced view (formerly FullClient)

- To facilitate the management of multiple directory service connections such as Active Directory or
  Entra ID, this is now done from a central location and requires only one user right (Can manage
  directory service connections).
- The tag filter can now contain more than 10 tags.
- The protection of sensitive data in the process memory has been improved.
- If a browser tab is already open with the web app, this is now used first when creating new access
  data via the browser extension (This also applies to the standard view.).

## Improvements

#### Server

- The logging of errors in the realtime connection is now deactivated by default.
- The migration from RSA to ECC has been improved by better performance and by eliminating the
  migration of organisational units.
- A new security setting has been added that fully logs access to encrypted passwords.

#### Server Manager

- To avoid typing errors when exporting certificates, the password must now be entered twice.
- A new security setting has been added that fully logs access to encrypted passwords.

## Fixed

#### Advanced view (formerly FullClient)

- Offline synchronization now also works for cross-platform login (This also applies to the offline
  add-on.).
- The setting “Restore last opened tabs” works again.
- Closing the Windows app works again without unexpected crashes.

#### Web app

- The setting “Permitted document extensions” can now be reset in the user settings.
- The “Clipboard gallery” option can now be changed in the user settings and global user settings.
- When uploading many documents, the list can now be scrolled.
- The list of documents to be uploaded can now be searched.

#### Server

- Documents with forbidden file extensions can no longer be uploaded.
- The speed of loading filters has been improved.
- An error when loading passwords after replacing the database certificate has been fixed.
- The “Add” right can now only be transferred to organisational units.

#### Browser extension

- The automatic entry in iframes now takes the correct address into account again.
- A bug has been fixed that prevented some websites from recognizing the data entered during
  automatic entry.
- The fields with the type integer, decimal number and checkbox can be used again for automatic
  entry.
- Profiles with long names are now displayed correctly again in the browser extension menu.
- New passwords are now recognized again if the user is logged in to more than one database.
- The cross-platform login in the browser extension now also works if the URL of the web app has
  changed.

#### API

- After logging out in the JavaScript API, the “isAuthenticated” information is now correct.

# Version 9.1.2.31276

## New

#### Server & Server Manager

- You can now assign an alias for each database for login purposes, eliminating the need to disclose
  the real database name.
- Individual databases can now be set to read-only mode.

#### Web App

- External links created via the web app now contain the database alias if one has been defined.

#### Browser extension

- The browser extension is now able to fill out OTP fields.

## Improvements

#### Web App

- It is now possible to define the URL in applications of type Web as a regular expression.

#### Browser extension

- The performance of the browser extension has been improved.

## Fixed

#### Advanced view

- The import of CSV files now handles organizational units correctly.
- The quick view and history of passwords can be opened again.
- Spontaneous errors when changing selected passwords have been fixed.
- Web applications with URLs defined as regex are recognized correctly.
- Logging in to the Windows app is possible again if you were last logged in in the standard view.

#### Web App

- Entra ID tokens can be regenerated in the profile list.

#### Server Manager

- The version of the nginx web server is no longer returned in the header in the standard
  configuration.

#### Browser extension

- Web applications with URLs defined as regex are now recognized correctly.

# Version 9.1.3.31365

## New

#### Browser extension

- Based on Manifest V3, a new browser extension for Chrome has been released.

#### Extended view (on Windows & web)

- A new filter group “Directory Service Type” has been added, which allows explicit filtering by
  users and roles from directory services.

#### Server

- The alias of a database is now displayed in the Authenticator app if one is configured, and a new
  token is generated.
- The session timeout for new databases is now set to 1 hour instead of the previous 6 hours.

## Fixed

#### Extended view

- An external package with a vulnerability classified as weak has been updated. The vulnerability
  could not be exploited via Netwrix Password Secure (This also affects the server & Server Manager
  as well as the autofill & offline add-on.).
- The obsolete property “Spaces” has been removed from the password policies (This also affects the
  offline add-on.).
- A possible XSS vulnerability in the WebViewer has been closed (This also affects the web app.).
- A problem has been fixed where the password was not saved on the server after a change when it was
  copied to the clipboard.
- The cross-client login for the browser extension is now also operational for synchronized Windows
  profiles.

#### Server Manager

- The configuration script for the web app under IIS now also works if there are spaces in the
  target path.

# Version 9.2.0.32454

## New

#### Web App (Advanced & Basic view)

- The web app is now available with a new design and can be deployed via Server Manager. For a
  limited time, the old web app remains available as an alternative.

#### Advanced view (on Windows)

- Additional time periods are now available for the "When revealing password" trigger: 6 hours, 12
  hours, and 1 day.
- API login is now possible with an API key that can be generated directly in the Windows and web
  app (This applies to the API and web app in new design.). This simplifies the login process and
  increases flexibility for integration.
- For more targeted synchronization, it is now optionally possible to limit the attributes of Active
  Directory and Entra ID users to be synchronized (This also applies to the web app and server.).

## Improvements

#### Web & Windows App

- Multiline password fields can only be changed when they are revealed.

#### Web App

- To provide a better overview of all password changes, the "Show password" button in the password
  history now also displays the encrypted fields of the historical versions.

#### Server Manager

- The alias of a database is now displayed in the database list, enabling quicker identification and
  management of databases with different names.

## Fixed

#### Advanced view (on Windows)

- Cross-client login now works for database profiles distributed via the registry (This also applies
  to the autofill add-on.).
- The values of list fields in passwords are now displayed as expected.
- The Windows app now always starts within the visible area when multiple monitors are used.
- After updating, translations are now loaded correctly on the first start of the Windows app.
- Copying multiple fields to the clipboard while editing a password no longer removes the field
  values.
- A bug has been fixed that prevented users from switching the Detail tab in the footer.
- An error in the tag management was resolved, which caused the buttons in the ribbon to disappear.

#### Web App

- An unloaded translation in the notifications has been fixed.
- Reloading the web app now correctly shows the "Locked" view again.
- Browser language detection for the web app is now reliable once more.
- Deleted users and roles can now be removed from permissions (This also applies to the Windows
  app.).

#### Browser Extension

- Excessive console output in the browser extension has been removed.

#### Server Manager

- Database login via the Server Manager is now also supported when using IPv6.

#### API

- The JavaScript API now again supports the creation of valid users.

# Version 9.2.1.32530

## New

#### Server & Server Manager

The default name of the configuration database now contains the host name of the server.

#### API

The version of the API can now be called up within it.

## Fixed

#### Windows App

Active Directory users in MasterKey mode can change their first factor required for login again.

The distribution of translation files has been optimized.

#### Web App

Password fields of type ‘Heading’ are displayed correctly again (This only applies to the new
design.).

When creating a new user, the field for assigning roles is readable again (This only applies to the
new design.).

The distribution of translation files has been optimized.

#### Browser extension

A problem with a vulnerable package in the dependencies has been fixed.

#### API

The ‘SaveRights’ call is now functional again in the JavaScript API.

#### Basic view in the web app

Mouse hover effects in the basic view have been fixed (This only applys to the new design .).

# Version History

The previously released versions and the corresponding changelogs can be found in the following
sections.

- [Version 9.2.1.32530](/docs/passwordsecure/9.2/reference/version-history/version-history.md)

- [Version 9.2.0.32454](/docs/passwordsecure/9.2/reference/version-history/version-history.md)

- [Version 9.1.3.31365](/docs/passwordsecure/9.2/reference/version-history/version-history.md)

- [Version 9.1.2.31276](/docs/passwordsecure/9.2/reference/version-history/version-history.md)

- [Version 9.1.1.31138](/docs/passwordsecure/9.2/reference/version-history/version-history.md)

- [Version 9.1.0.30996](/docs/passwordsecure/9.2/reference/version-history/version-history.md)

- [Version 9.0.3.30606](/docs/passwordsecure/9.2/reference/version-history/version-history.md)

- [Version 9.0.2.30602](/docs/passwordsecure/9.2/reference/version-history/version-history.md)

- [Version 9.0.1.30479](/docs/passwordsecure/9.2/reference/version-history/version-history.md)

- [Version 9.0.0.30423](/docs/passwordsecure/9.2/reference/version-history/version-history.md)

- [Version 8.16.6.30233](/docs/passwordsecure/9.2/reference/version-history/version-history.md)

- [Version 8.16.5.30226](/docs/passwordsecure/9.2/reference/version-history/version-history.md)
- [Version 8.16.4.30125](/docs/passwordsecure/9.2/reference/version-history/version-history.md)
- [Version 8.16.3.29968](/docs/passwordsecure/9.2/reference/version-history/version-history.md)
- [Version 8.16.3.29968](/docs/passwordsecure/9.2/reference/version-history/version-history.md)
- [Version 8.16.1.29875](/docs/passwordsecure/9.2/reference/version-history/version-history.md)
- [Version 8.16.0.29823](/docs/passwordsecure/9.2/reference/version-history/version-history.md)

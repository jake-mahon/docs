# What's New

## Netwrix Password Reset Server

- Random verification codes can be sent to users by e-mail and SMS. Users must enter the code to reset their password or unlock their account. Verification codes can be used for two-factor authentication, or to authenticate users that have not enrolled (automatic enrollment). See the [Verification Tab](/versioned_docs/passwordreset_3.23/password_reset/administration/configuring_password_reset.md#verification-tab) topic for more information.
- The database can be moved to SQL Server for better security, fault tolerance, and accessibility. See the [Moving to SQL Server](/versioned_docs/passwordreset_3.23/password_reset/administration/working_with_the_database.md#moving-to-sql-server) topic for more information.
- Users are automatically deleted from the database approximately one week after they are deleted from Active Directory. See the [Deleting Users](/versioned_docs/passwordreset_3.23/password_reset/administration/using_the_data_console.md#deleting-users) topic for more information.
- Can enforce the Active Directory password history and minimum age policies for password resets. See the [Reset Policies](/versioned_docs/passwordreset_3.23/password_reset/administration/configuring_password_reset.md#reset-policies) topic for more information.
- Improved handling of password changes across domains and forests.
- More secure enrollment record format. APR V2 records are upgraded to the new format when the system maintenance task runs at 1:00 AM.
- More secure communication protocol. The updated protocol uses 2048-bit RSA keys, has better error detection, and uses fewer CPU cycles.
- E-mail alerts are sent in the user's preferred language if possible. The preferred language is set after a successful enroll, reset, unlock, or change. See the [Triggers](/versioned_docs/passwordreset_3.23/password_reset/administration/configuring_password_reset.md#triggers) topic for more information.
- Can send all Password Policy Enforcer queries to a specific Password Policy Server. See the [Netwrix Password Policy Enforcer](/versioned_docs/passwordreset_3.23/password_reset/administration/configuring_password_reset.md#netwrix-password-policy-enforcer) topic for more information.
- Default database updated to SQL Server Compact 4.0 SP1. See the [Working with the Database](/versioned_docs/passwordreset_3.23/password_reset/administration/working_with_the_database.md) topic for more information.
- Improved multithreading performance when querying the database.
- Replaced the 32-bit Password Reset Server service with a 64-bit version.

## Web Interface

- REST API to remind (or require) users to enroll. See the [Persuading Users to Enroll](/versioned_docs/passwordreset_3.23/password_reset/administration/persuading_users_to_enroll.md) topic for more information.
- Page content and layout changes for small mobile phone screens. See the [Responsive Content](/versioned_docs/passwordreset_3.23/password_reset/administration/editing_the_html_templates.md#responsive-content) topic for more information.
- Icons are in Scalable Vector Graphics (SVG) format. These look sharper when resized, and make it easy to change the color scheme. See the [Change Icon Colors](/versioned_docs/passwordreset_3.23/password_reset/administration/editing_the_html_templates.md#change-icon-colors) topic for more information.
- Improved encryption of temporary data.
- Improved handling of e-mail addresses with unusual characters.
- Updated response headers to improve compatibility with some browsers, and to reduce the likelihood of user-submitted information being cached.
- Answer fields are masked during Reset and Unlock.
- Performance improvements to the page generator and request parser.

## Password Reset Client

- Displays HTML in Internet Explorer 11 mode for improved compatibility with the latest web standards.
- Improved compatibility with third-party credential providers.
- Updated window sizing algorithm to suit the APR V3 page templates.
- Client window closes with the JavaScript window.close() method.
- Displays messages after the page finishes loading to avoid display problems.

## Data Console

- Can run remotely after the database is moved to SQL Server. See the [Moving to SQL Server](/versioned_docs/passwordreset_3.23/password_reset/administration/working_with_the_database.md#moving-to-sql-server) topic for more information.
- .xlsx and .xml export file formats. See the [Exporting Data](/versioned_docs/passwordreset_3.23/password_reset/administration/using_the_data_console.md#exporting-data) topic for more information.
- Filter icons shown in column headers. See the [The Filter Row](/versioned_docs/passwordreset_3.23/password_reset/administration/using_the_data_console.md#the-filter-row) topic for more information.
- Improved performance when reading, sorting, and filtering data.

## Configuration Console

- Can create e-mail alerts in different languages. See the [Triggers](/versioned_docs/passwordreset_3.23/password_reset/administration/configuring_password_reset.md#triggers) topic for more information.
- Added Bcc address to e-mail template editor. See the [Triggers](/versioned_docs/passwordreset_3.23/password_reset/administration/configuring_password_reset.md#triggers) topic for more information.
- Increased Question List capacity. See the [Question List](/versioned_docs/passwordreset_3.23/password_reset/administration/configuring_password_reset.md#question-list) topic for more information.

## Installer

- Offers to silently install IIS before installing the Web Interface.
- Automatically installs required IIS Role Services for the Web Interface.
- Sets the Password Reset application pool to 64-bit.
- Installs SQL Server Compact 4.0 SP1.

---
title: helpdesk operations
sidebar_label: helpdesk-operations
description: Directory Manager 11.1 documentation for helpdesk operations with configuration details, usage instructions, and implementation guidance.
---

# History in Helpdesk

Directory Manager tracks the following actions performed by end-users and helpdesk users in an
identity store and displays them as history to helpdesk users:

- Unenroll account
- Sending of secure link for password reset by helpdesk
- Change Password
- Reset Password
- Unlock Account
- Link Account
- Unlink Account
- Enroll account
- Authenticate with password, authentication types, or any other medium

History can be used for audit and analysis, such as how many users changed their passwords in the
last x days, reset their passwords using secure link, and more. It can also be used to verify the
identity of a user through the last action he or she performed.

What do you want to do?

- View History in Helpdesk
  - Switch History Layouts
- Search History
- Export History to a File

## View History in Helpdesk

1. In Admin Center, click **Helpdesk** in the left pane.
2. On the **Helpdesk** page, click the **History** tab.  
   This tab displays the tracked history actions for all identity stores in Directory Manager. Use
   the pagination options at the bottom of the listing to navigate through records.

   To search for specific records, see the Search History topic.

### Switch History Layouts

You can view history in two layouts:

- **Basic view:** displays history in a friendly, descriptive manner.
- **Administrative view:** displays history in tabular form.

In both layouts, click **Details** for an item to view more details.

You can also export history to MS Excel, CSV, and XML formats.

To Switch Layouts:

- In the Basic view, click the **Switch to Administrative View** button to view history in
  Administrative layout.
- In the Administrative view, the button changes to **Switch to Basic View**. Click it to view
  history in Basic layout.

#### View History in Basic Layout

By default, the **History** tab of the **Helpdesk** page displays history in the Basic view, that
lists the tracked actions in meaningful sentences.

Click **Details** for a history item to launch the **History Details** dialog box that displays the
following:

- **Display name:** the user on whom the action was performed.
- **Identity store:** the identity store the action was performed in.
- **Action:** the action performed.
- **Authentication type:** the authentication type(s) used by the user to authenticate in order to
  perform the action. For some actions performed by helpdesk, such as sending a secure link for
  password reset, no authentication type is displayed. For other actions such as _unenroll_, the
  authentication type for which the end user is unenrolled will be displayed.
- **Status:** whether the action was performed successfully or not.
- **Date/Time:** the date and time the action was performed.
- **Performed by:** the user who performed the action.
- **Client name:** the name of the Directory Manager client the action was performed from.
- **Helpdesk action:** whether the action was performed through helpdesk or not.
- **Machine name:** the name of the machine the action was performed from.
- **IP:** the IP address of the machine the action was performed from.
- **Browser:** the name of the browser used to perform the action.
- **Device type:** the device type used to perform the action, such as PC/laptop or mobile.

Click **Close** to close the dialog box.

#### View History in Administrative Layout

The Administrative layout displays history in a table. On the **History** tab of the **Helpdesk**
page, click **Switch to Administrative View**.

The following information is displayed for a record:

- **Name:** The name of the user the action was performed on
- **Client Name:** the name of the Directory Manager client the action was performed from.
- **Identity Store:** The identity store the action was performed in
- **Action:** The action performed
- **Date:** The date and time the action was performed on

Click **Details** for a history item to view its details on the **History Details** dialog box. See
the View History in Helpdesk topic for a discussion of the dialog box.

Use the pagination options at the bottom of the listing to navigate through records.

Sort the Listing

History records on the **History** tab of the **Helpdesk** page are sorted in chronological order,
with the latest action at the top.

You can sort the listing in the Administrative view by any column name in the header row. Click a
column name to sort the listing by that attribute. An arrow appears next to the column name.

- The upward arrow head indicates that the list is sorted in ascending order.
- The downward arrow head indicates that the list is sorted in descending order.

Click the arrow to change the order from ascending to descending and vice versa.

## Search History

You can search for history records in all the identity stores or specific identity stores. Simply
enter the name of a user to view all actions performed for it, be it by that same user or another
user, such as helpdesk. You can also create a filter based on multiple attributes to search for
specific records.

To perform a search:

1. In Admin Center, click **Helpdesk** in the left pane.
2. On the **Helpdesk** page, click the **History** tab.
3. On the **History** tab, the following search options are available:

   - **Identity Store list** - To get the history records for one or specific identity stores,
     click in the **Identity Store** box and select the check boxes for the identity stores you
     want to view the history for.
   - **Search box to search for records specific to a user** - In the _Search_ box, enter a user’s
     full name or part of a name and press _Enter_. Directory Manager displays all history actions
     that are performed by or performed on the user.
   - **Search filter** - Click **Filter**. On the **Filter(s)** dialog box, you can search the
     history data using the available filters individually or in combination.

     - **Date Logged:** Specify a time period to view history data for. Click in the box and use
       the calendar for selecting a date range.
     - **Performed By:** Specify whether you want to view the actions performed by end users,
       helpdesk users, or both.
     - **Device Type:** Specify a device type (PC/laptop, mobile, or both) to view actions that
       have been performed using that device type.
     - **Status:** Specify whether you want to view successful actions, failed actions, or both
       successful and failed actions
     - **Action Type:** Select an action to view the history records for it. On selecting
       _Enrollment_ or _Authenticate_, another drop-down list is displayed that lists the
       authentication types. Select an option to view the enrollment or authentication actions
       performed using that specific type.

   Click **Apply**. History records matching the given criteria are displayed.

## Export History to a File

1. In Admin Center, click **Helpdesk** in the left pane.
2. On the **Helpdesk** page, click the **History** tab.
3. On the **History** tab, you can export all history records in all identity stores to a file or
   filter the listing to export specific records only. To narrow down records, see the Search
   History topic.
4. Click **Export History** and select a file format in the list to export history data to.  
   The file is saved to the download location specified in your browser settings.

**See Also**

- [Dashboard](/docs/directorymanager/11.1/getting-started/dashboard.md)
- [Search Users](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)
- [History in Directory Manager](/docs/directorymanager/11.1/administration/audit-history.md)

# Notify Users to Enroll

You can send email notifications to unenrolled users, directing them to enroll their identity store
accounts in Directory Manager. Notifications can be sent to:

- All users in all identity stores created in Directory Manager
- All users in an identity store
- Specific users

Users must have an email address to receive notifications.

What do you want to do?

- Send Enrollment Notifications

## Send Enrollment Notifications

1. In Admin Center, click **Helpdesk** in the left pane.  
   On the **Helpdesk** page, the **Helpdesk Operations** tab is displayed by default.
2. Do the following:

   - To send enrollment notifications to all users in all identity stores in Directory Manager,
     make sure _All_ is selected in the **Identity store** box. Then click **Notify All Users**.
   - To send the notification to specific recipients, search for the required users and click
     **Notify All Users**. See the [Search Users](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic to perform a search.

   Notifications are sent to all users listed on the **Helpdesk Operations** tab, including those
   on other pages (use the navigation options at the bottom of the listing to view the pages). To
   send it to specific users in the listing, select the check boxes for them and click **Notify All
   Users**.

3. On clicking **Notify All Users**, the **Compose email** dialog box is displayed.

   1. The **Recipients** box is read-only.
   2. The **Subject** box displays the default subject line. You can choose to use it or replace it
      with your own text.
   3. Specify the authentication type(s) you want the users to enroll their account with.  
      In the **Enrollment Types** drop-down list, click _All_ if you want users to enroll with all
      the available authentication types, or select the authentication types you want users to
      enroll with.
   4. The **Message** box displays the default message text. You can choose to use it or replace it
      with your own text.
   5. Click **Notify**.

**See Also**

- [Helpdesk](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)
- [Helpdesk Operations](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)

# Export Users' List to a File

You can export users' information to an Excel, XML, or CSV file.

What do you want to do?

- Export Users

## Export Users

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. You can export all users in all
   identity stores to a file or filter the listing to export specific users only. To filter the
   list, see the [Search Users](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic.
3. Select the check boxes for the users you want to export or click the check box in the header row
   to select all users. Then click **Export**.
4. Select a file format in the list. The file is saved to the download location specified in your
   browser settings.

**See Also**

- [Helpdesk](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)
- [Helpdesk Operations](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)

# Helpdesk Operations

Helpdesk users can perform the following actions in Admin Center:

- [Reset Passwords](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)
- [Unlock Accounts](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)
- [Notify Users to Enroll](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)
- [Unenroll a User](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)
- [Search Users](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)
- [Export Users' List to a File](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)

# Reset Passwords

Admin Center provides a variety of options to helpdesk users for resetting passwords and then
communicating them to users.

NOTE: You can reset passwords of unenrolled users if (a) the **Reset Any Password** permission has
been granted to your role and (b) the Helpdesk policy for your role is set to the unrestricted mode.

Helpdesk users may have to authenticate end users before resetting their passwords. See the
[Helpdesk Policy ](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md#helpdesk-policy) topic.

What do you want to do?

- Reset Passwords in Unrestricted Mode
- Reset Passwords in Restricted Mode

## Reset Passwords in Unrestricted Mode

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. Locate your required user. To
   search for a user, see the[Search Users](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic.
3. Click the ellipsis button for the user and select **Reset Password**. For enrolled users, the
   **Reset Password** dialog box has two pages: **Authenticate** and **Reset**. Under the
   unrestricted mode, you can skip the former and move to the **Reset** page. For unenrolled users,
   only the **Reset** page is available.  
   Use the **History** button to view user history, i.e., the actions performed on the user and by
   the user. This history is specific to helpdesk functions, as listed in the
   [History in Helpdesk](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic.
4. The **Reset** page displays the user name, the identity store where this user resides, the last
   time the user changed his or her password, and the lock status of the account. In case the user
   has linked his or her accounts that exist in different identity stores, this page displays all
   linked accounts that require a password reset.  
   Select an account to reset its password.
5. Depending on the password reset method enforced for your role, you can reset the password and
   communicate the new password to the user, or you can generate a secure link and send it to the
   user for resetting the password.

   - The **New Password** tab is displayed if you are authorized to generate a new password and
     send it to the user.
   - The **Secure Link** tab is displayed if you are authorized to send a secure link to the user.
   - Both tabs are displayed if you are authorized to choose any password reset method.

6. On the **New Password** tab:

   - Enter a password of your choice in the **Password** box or click **Generate Password** to
     generate a random password.
   - Select the user's mobile number and/or email address in the **Select Mobile** and **Select
     Email** boxes to send the new password to the user by SMS or email or both.

7. On the **Secure Link** tab:

   - Select the user's mobile number and/or email address in the **Select Mobile** and **Select
     Email** boxes to send the secure link to the user by SMS or email or both. The user must click
     this link to reset his or her password.

8. Click **Reset Password**.

## Reset Passwords in Restricted Mode

In the restricted mode, you will not be able to reset passwords for unenrolled users. Further, you
could be restricted to:

- Reset passwords of enrolled users residing in a specific OU.
- Authenticate enrolled users through the multifactor authentication policy applicable to the user
  before resetting their passwords. The Security Questions authentication type may be mandatory.

See the [Helpdesk Policy](/docs/directorymanager/11.1/administration/security-policies.md) topic.

**To reset a password in restricted mode:**

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. Locate your required user. To
   search for a user, see the[Search Users](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic.
3. Click the ellipsis button for the user and select **Reset Password**. The **Reset Password**
   dialog box has two pages: **Authenticate** and **Reset**.  
   Use the **History** button to view user history, i.e., the actions performed on the user and by
   the user. This history is specific to helpdesk functions, as listed in the
   [History in Helpdesk](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic.
4. The **Authenticate** page displays the authentication type(s) the user's account is enrolled
   with. You could be restricted to authenticate the user according to the authentication policy
   that applies to the user.  
   Click the plus sign for an authentication type to expand it.

   - **Security Question**

     1. Get the answers to the questions from the user and enter them in the answer boxes.
     2. Click **Verify** for each answer to verify it.

   - **Mobile**

     1. The mobile number with which the user’s account is enrolled is displayed in the box.
        Click **Send Code** to send an access code to the user’s mobile number.
     2. Get this access code from the user and enter it in the box.
     3. Click **Verify**.

   - **Email**

     1. The email address with which the user's account is enrolled is displayed in the box.
        Click **Send Code** to send an access code to the user’s email address.
     2. Get this access code from the user and enter it in the box.
     3. Click **Verify**.

   - **Authenticator**

     1. Get a valid access code from the user, as displayed to him or her in the Authenticator
        app and enter it in the box.
     2. Click **Verify**.

   NOTE: Helpdesk cannot authenticate users with the Link Account, YubiKey, and Windows Hello
   authentication types.

5. Click **Next**.
6. On the **Reset** page, you can reset the password. Follow step 4 and onwards in the Reset
   Passwords in Unrestricted Mode topic for details.

**See Also**

- [Helpdesk](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)
- [Helpdesk Operations](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)

# Search Users

Helpdesk users can search for users in specific identity store(s) or all identity stores defined in
Directory Manager. A search filter is also available to help you narrow down your search results.

What do you want to do?

- Perform a Search

## Perform a Search

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. It lists all users from all
   identity stores in Directory Manager (notice that _All_ is displayed in the **Identity store**
   box).
3. Use the following options to filter users:

   - **Identity store box** - To get users from one or specific identity stores, click in the
     **Identity store** box and select the check boxes for the identity stores you want to fetch
     users from.
   - **Search Users box** - Enter a search text and press _Enter_. Users with the first names, last
     names, or email addresses matching the text are filtered and displayed.
   - **Search filter** - You can also search users based on enrollment. Click **Filter(s)**. The
     **Filter(s)** dialog box is displayed with the following options:

     - **Enrolled with:** click in the box and select the authentication type(s) to restrict
       search to users enrolled with any of those authentication types.
     - **Not Enrolled with:** click in the box and select the authentication type(s) to restrict
       search to users not enrolled with any of those authentication types.
     - Click **Apply**. Users matching the given criteria get listed.

#### View Users' Information

For a user, the following information is displayed:

- **Name:** the display name of the user.
- **Store:** the name of the identity store and the domain the user resides in.
- **Is Locked:** displays whether the user account is locked or not.
- **Password Expires On:** the date when the user account password will expire. If the password is
  set to _Never Expire_, then _Never Expires_ is displayed here.
- **Last Password Set:** the time since the user last changed their password, for example, 'one year
  ago'. For users who never changed their passwords, _Never_ is displayed.
- **Enrolled With:** the authentication types used to enroll the account in the identity store. For
  users who have not enrolled their accounts, _Not Enrolled_ is displayed.

Use the pagination options at the bottom of the listing to navigate through records.

Click the ellipsis button for a user to perform any of these actions:

- Reset password
- Unlock account
- Send enrollment reminder
- Unenroll account

**See Also**

- [Helpdesk](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)
- [Helpdesk Operations](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)

# Unenroll a User

Users are enrolled in an identity store using one or more authentication types. You can unenroll a
user account for any of the authentication types the account is enrolled with.

For example, if a user's account is enrolled with the Security Questions, Email, and YubiKey
authentication types, you can unenroll the account for YubiKey. As a result, the account continues
to be enrolled with Security Questions and Email.

What do you want to do?

- Unenroll a User for an Authentication Type

## Unenroll a User for an Authentication Type

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. Locate your required user. To
   search for a user, see the[Search Users](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic.
3. Click the ellipsis button for the user and select **Unenroll Account**.  
   The **Unenroll Account** dialog box displays the authentication types the user account is
   enrolled with.
4. Select the check boxes for the authentication type(s) you want to unenroll the user account with.
5. Click **Unenroll** and then **Unenroll** on the confirmation dialog box.

**See Also**

- [Helpdesk](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)
- [Helpdesk Operations](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md)

# Unlock Accounts

Administrators can enforce an account lockout policy for a domain that locks a user account after a
certain number of failed login attempts. This secures a machine from unauthorized access. However,
legitimate users may also get locked out; typically because of a typo or they could not recall their
password correctly.

In such a situation as this, helpdesk users can unlock user accounts in an identity store.

Helpdesk may have to authenticate users before unlocking their accounts. See the
[Helpdesk Policy ](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md#helpdesk-policy) topic.

NOTE: You can unlock the account of unenrolled users if (a) the **Unlock Any Account** permission
has been granted to your role and (b) the Helpdesk policy for your role is set to the unrestricted
mode.

## Unlock User Accounts in Unrestricted Mode

Step 1 – In Admin Center, click **Helpdesk** in the left pane.

Step 2 – The Helpdesk page opens to the Helpdesk Operations tab. Locate your required user. To
search for a user, see the[Search Users](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic.

Step 3 – Click the ellipsis button for the user and select **Unlock Account**. For enrolled users,
the Unlock Account dialog box has two pages: Authenticate and Unlock. Under the unrestricted mode,
you can skip the former and move to the **Unlock** page. For unenrolled users, only the Unlock page
is available.  
Use the **History** button to view user history, i.e., the actions performed on the user and by the
user. This history is specific to helpdesk functions, as listed in the
[History in Helpdesk](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic.

Step 4 – The Unlock page displays the user name, the identity store where this user resides, the
last time the user changed his or her password, and the lock status of the account. In case the user
has linked his or her accounts that exist in different identity stores, this page displays all
linked accounts that are locked.  
To unlock an account, select the check box for it and click **Unlock**.

## Unlock User Accounts in Restricted Mode

Step 1 – In Admin Center, click **Helpdesk** in the left pane.

Step 2 – The Helpdesk page opens to the Helpdesk Operations tab. Locate your required user. To
search for a user, see the[Search Users](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic.

Step 3 – Click the ellipsis button for the user and select **Unlock Account**. The Unlock Account
dialog box has two pages: Authenticate and Unlock.  
Use the **History** button to view user history, i.e., the actions performed on the user and by the
user. This history is specific to helpdesk functions, as listed in the
[History in Helpdesk](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic.

Step 4 – The Authenticate page displays the authentication type(s) the user's account is enrolled
with. to authenticate the user, follow step 4 in the
[Reset Passwords in Restricted Mode](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md#reset-passwords-in-restricted-mode) topic.

Step 5 – After authenticating the user, click **Next**.

Step 6 – The Unlock page displays the user name, the identity store where this user resides, the
last time the user changed his or her password, and the lock status of the account. In case the user
has linked his or her accounts that exist in different identity stores, this page displays all
linked accounts that are locked.  
To unlock an account, select the check box for it and click **Unlock**.

# Helpdesk

The Admin Center Helpdesk section enables administrators and helpdesk users to perform
helpdesk-specific tasks, such as:

- Unlock user accounts and reset passwords on behalf of users in an identity store.
- Notify users to enroll their accounts.
- Unenroll user accounts from identity stores.
- View users' activities, such as enrollment, authentication, account unlock, and password-related
  functions. Toast notifications and history tracking are also enabled for these actions. See the
  [Helpdesk Operations](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic for additional information.

NOTE: The Admin Center for helpdesk role is available in Helpdesk mode only. By default, only the
Helpdesk node of Admin Center is visible to the Helpdesk role members. The administrator can also
restrict access of a security role by selecting the Helpdesk Role check box on the Security Role
page. See the [Create a Security Role](/docs/directorymanager/11.1/administration/security-roles.md) topic for additional information.

## Helpdesk Permissions

A security role must have the following permissions in an identity store to perform
helpdesk-specific functions:

- Reset Any Password
- Unlock Any Account
- Unenroll

See [Password Management](/docs/directorymanager/11.1/administration/permissions.md#password-management) in the
[Security Role – Permissions](/docs/directorymanager/11.1/administration/permissions.md) topic.

## Helpdesk Policy

The administrator can define a Helpdesk policy for a user role in an identity store. This policy
mainly defines whether helpdesk role members should operate under the restricted or unrestricted
mode to perform the account unlock and reset password functions.

NOTE: In unrestricted mode, helpdesk can unlock accounts and reset passwords of both enrolled and
unenrolled users. In restricted mode, helpdesk can perform these functions for enrolled users only.

See the [Helpdesk Policy](/docs/directorymanager/11.1/administration/security-policies.md) topic.

## Helpdesk Analytics

The dashboard in Admin Center offers insightful information to the administrator and helpdesk on
users' activities (such as enrollment, account unlock, and password reset) in an identity store.

The dashboard displays the following helpdesk-specific cards:

- [Enrollment Summary](/docs/directorymanager/11.1/getting-started/dashboard.md#enrollment-summary): displays the number of enrolled
  users in an identity store.
- [Auth Summary](/docs/directorymanager/11.1/getting-started/dashboard.md#auth-summary): displays information about failed and
  successful authentication attempts for each authentication type.
- [Activity Summary](/docs/directorymanager/11.1/getting-started/dashboard.md#activity-summary): displays a summary of users'
  activities related to password change, password reset, account unlock, and enrollment.

## Desktop Notifications

You can enable desktop notification for Directory Manager in browser settings. In this way, a user
signed into Admin Center on the respective machine will receive desktop notifications when an
end-user performs any of the following actions in the Directory Manager portal:

- Resets account password
- Changes account Password
- Unlocks Account
- Links Account
- Unlinks Account
- Enrolls account
- Authenticates with password, authentication types, or any other medium

These actions are also logged in helpdesk history. See the [History in Helpdesk](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic
for additional information.

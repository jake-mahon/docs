---
title: operations
sidebar_label: operations
description: Directory Manager 11.0 documentation for operations with configuration details, usage instructions, and implementation guidance.
---

# Notify Users to Enroll

You can send email notifications to unenrolled users, directing them to enroll their identity store
accounts in GroupID. Notifications can be sent to:

- All users in all identity stores created in GroupID
- All users in an identity store
- Specific users

Users must have an email address to receive notifications.

What do you want to do?

- [Send Enrollment Notifications](#send-enrollment-notifications)

## Send Enrollment Notifications

1. In Admin Center, click **Helpdesk** in the left pane.  
   On the **Helpdesk** page, the **Helpdesk Operations** tab is displayed by default.
2. Do the following:

   - To send enrollment notifications to all users in all identity stores in GroupID, make sure
     _All_ is selected in the **Identity store** box. Then click **Notify All Users**.
   - To send the notification to specific recipients, search for the required users and click
     **Notify All Users**. See the
     [Search Users](/docs/directorymanager/11.0/administration/help-desk/operations.md)
     topic to perform a search.

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

- [Helpdesk](/docs/directorymanager/11.0/administration/help-desk/index.md)
- [Helpdesk Operations](/docs/directorymanager/11.0/administration/help-desk/operations.md)

# Export Users' List to a File

You can export users' information to an Excel, XML, or CSV file.

What do you want to do?

- [Export Users](#export-users)

## Export Users

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. You can export all users in all
   identity stores to a file or filter the listing to export specific users only. To filter the
   list, see the
   [Search Users](/docs/directorymanager/11.0/administration/help-desk/operations.md)
   topic.
3. Select the check boxes for the users you want to export or click the check box in the header row
   to select all users. Then click **Export**.
4. Select a file format in the list. The file is saved to the download location specified in your
   browser settings.

**See Also**

- [Helpdesk](/docs/directorymanager/11.0/administration/help-desk/index.md)
- [Helpdesk Operations](/docs/directorymanager/11.0/administration/help-desk/operations.md)

# Helpdesk Operations

Helpdesk users can perform the following actions in Admin Center:

- [Reset Passwords](/docs/directorymanager/11.0/administration/help-desk/operations.md)
- [Unlock Accounts](/docs/directorymanager/11.0/administration/help-desk/operations.md)
- [Notify Users to Enroll](/docs/directorymanager/11.0/administration/help-desk/operations.md)
- [Unenroll a User](/docs/directorymanager/11.0/administration/help-desk/operations.md)
- [Search Users](/docs/directorymanager/11.0/administration/help-desk/operations.md)
- [Export Users' List to a File](/docs/directorymanager/11.0/administration/help-desk/operations.md)

# Reset Passwords

Admin Center provides a variety of options to helpdesk users for resetting passwords and then
communicating them to users.

NOTE: You can reset passwords of unenrolled users if (a) the **Reset Any Password** permission has
been granted to your role and (b) the Helpdesk policy for your role is set to the unrestricted mode.

Helpdesk users may have to authenticate end users before resetting their passwords. See the
[Helpdesk Policy ](/docs/directorymanager/11.0/administration/help-desk/index.md#helpdesk-policy)
topic.

What do you want to do?

- [Reset Passwords in Unrestricted Mode](#reset-passwords-in-unrestricted-mode)
- [Reset Passwords in Restricted Mode](#reset-passwords-in-restricted-mode)

## Reset Passwords in Unrestricted Mode

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. Locate your required user. To
   search for a user, see
   the[Search Users](/docs/directorymanager/11.0/administration/help-desk/operations.md)
   topic.
3. Click the ellipsis button for the user and select **Reset Password**. For enrolled users, the
   **Reset Password** dialog box has two pages: **Authenticate** and **Reset**. Under the
   unrestricted mode, you can skip the former and move to the **Reset** page. For unenrolled users,
   only the **Reset** page is available.  
   Use the **History** button to view user history, i.e., the actions performed on the user and by
   the user. This history is specific to helpdesk functions, as listed in the
   [History in Helpdesk](/docs/directorymanager/11.0/administration/help-desk/index.md)
   topic.
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

See the
[Helpdesk Policy](/docs/directorymanager/11.0/administration/admin-center/policies.md)
topic.

**To reset a password in restricted mode:**

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. Locate your required user. To
   search for a user, see
   the[Search Users](/docs/directorymanager/11.0/administration/help-desk/operations.md)
   topic.
3. Click the ellipsis button for the user and select **Reset Password**. The **Reset Password**
   dialog box has two pages: **Authenticate** and **Reset**.  
   Use the **History** button to view user history, i.e., the actions performed on the user and by
   the user. This history is specific to helpdesk functions, as listed in the
   [History in Helpdesk](/docs/directorymanager/11.0/administration/help-desk/index.md)
   topic.
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
6. On the **Reset** page, you can reset the password. Follow step 4 and onwards in the
   [Reset Passwords in Unrestricted Mode](#reset-passwords-in-unrestricted-mode) topic for details.

**See Also**

- [Helpdesk](/docs/directorymanager/11.0/administration/help-desk/index.md)
- [Helpdesk Operations](/docs/directorymanager/11.0/administration/help-desk/operations.md)

# Search Users

Helpdesk users can search for users in specific identity store(s) or all identity stores defined in
GroupID. A search filter is also available to help you narrow down your search results.

What do you want to do?

- [Perform a Search](#perform-a-search)

## Perform a Search

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. It lists all users from all
   identity stores in GroupID (notice that _All_ is displayed in the **Identity store** box).
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

- [Helpdesk](/docs/directorymanager/11.0/administration/help-desk/index.md)
- [Helpdesk Operations](/docs/directorymanager/11.0/administration/help-desk/operations.md)

# Unenroll a User

Users are enrolled in an identity store using one or more authentication types. You can unenroll a
user account for any of the authentication types the account is enrolled with.

For example, if a user's account is enrolled with the Security Questions, Email, and YubiKey
authentication types, you can unenroll the account for YubiKey. As a result, the account continues
to be enrolled with Security Questions and Email.

What do you want to do?

- [Unenroll a User for an Authentication Type](#unenroll-a-user-for-an-authentication-type)

## Unenroll a User for an Authentication Type

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. Locate your required user. To
   search for a user, see
   the[Search Users](/docs/directorymanager/11.0/administration/help-desk/operations.md)
   topic.
3. Click the ellipsis button for the user and select **Unenroll Account**.  
   The **Unenroll Account** dialog box displays the authentication types the user account is
   enrolled with.
4. Select the check boxes for the authentication type(s) you want to unenroll the user account with.
5. Click **Unenroll** and then **Unenroll** on the confirmation dialog box.

**See Also**

- [Helpdesk](/docs/directorymanager/11.0/administration/help-desk/index.md)
- [Helpdesk Operations](/docs/directorymanager/11.0/administration/help-desk/operations.md)

# Unlock Accounts

Administrators can enforce an account lockout policy for a domain that locks a user account after a
certain number of failed login attempts. This secures a machine from unauthorized access. However,
legitimate users may also get locked out; typically because of a typo or they could not recall their
password correctly.

In such a situation as this, helpdesk users can unlock user accounts in an identity store.

Helpdesk may have to authenticate users before unlocking their accounts. See the
[Helpdesk Policy ](/docs/directorymanager/11.0/administration/help-desk/index.md#helpdesk-policy)
topic.

NOTE: You can unlock the account of unenrolled users if (a) the **Unlock Any Account** permission
has been granted to your role and (b) the Helpdesk policy for your role is set to the unrestricted
mode.

NOTE: GroupID does not support account unlock in a Microsoft Entra ID identity store.

What do you want to do?

- [Unlock User Accounts in Unrestricted Mode](#unlock-user-accounts-in-unrestricted-mode)
- [Unlock User Accounts in Restricted Mode](#unlock-user-accounts-in-restricted-mode)

## Unlock User Accounts in Unrestricted Mode

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. Locate your required user. To
   search for a user, see
   the[Search Users](/docs/directorymanager/11.0/administration/help-desk/operations.md)
   topic.
3. Click the ellipsis button for the user and select **Unlock Account**. For enrolled users, the
   **Unlock Account** dialog box has two pages: **Authenticate** and **Unlock**. Under the
   unrestricted mode, you can skip the former and move to the **Unlock** page. For unenrolled users,
   only the **Unlock** page is available.  
   Use the **History** button to view user history, i.e., the actions performed on the user and by
   the user. This history is specific to helpdesk functions, as listed in the
   [History in Helpdesk](/docs/directorymanager/11.0/administration/help-desk/index.md)
   topic.
4. The **Unlock** page displays the user name, the identity store where this user resides, the last
   time the user changed his or her password, and the lock status of the account. In case the user
   has linked his or her accounts that exist in different identity stores, this page displays all
   linked accounts that are locked.  
   To unlock an account, select the check box for it and click **Unlock**.

## Unlock User Accounts in Restricted Mode

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. Locate your required user. To
   search for a user, see
   the[Search Users](/docs/directorymanager/11.0/administration/help-desk/operations.md)
   topic.
3. Click the ellipsis button for the user and select **Unlock Account**. The **Unlock Account**
   dialog box has two pages: **Authenticate** and **Unlock**.  
   Use the **History** button to view user history, i.e., the actions performed on the user and by
   the user. This history is specific to helpdesk functions, as listed in the
   [History in Helpdesk](/docs/directorymanager/11.0/administration/help-desk/index.md)
   topic.
4. The **Authenticate** page displays the authentication type(s) the user's account is enrolled
   with. to authenticate the user, follow step 4 in the
   [Reset Passwords in Restricted Mode](/docs/directorymanager/11.0/administration/help-desk/operations.md#reset-passwords-in-restricted-mode)
   topic.
5. After authenticating the user, click **Next**.
6. The **Unlock** page displays the user name, the identity store where this user resides, the last
   time the user changed his or her password, and the lock status of the account. In case the user
   has linked his or her accounts that exist in different identity stores, this page displays all
   linked accounts that are locked.  
   To unlock an account, select the check box for it and click **Unlock**.

**See Also**

- [Helpdesk](/docs/directorymanager/11.0/administration/help-desk/index.md)
- [Helpdesk Operations](/docs/directorymanager/11.0/administration/help-desk/operations.md)

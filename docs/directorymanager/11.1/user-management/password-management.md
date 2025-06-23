# Reset Passwords

The Directory Manager portal enables enrolled users in an identity store reset their account
passwords securely. They can reset their passwords if they have forgotten or lost their existing
passwords. Unenrolled users can reset their passwords if the administrator has enabled the Second
Way Authentication option for their role.

The Directory Manager portal provides an authentication mechanism, whereby users must authenticate
themselves with Multifactor Authentication type(s) they enrolled their accounts with.

If the administrator has enabled multifactor authentication for the identity store, users must
authenticate their accounts using the authentication type(s) they enrolled their account with. After
successful authentication, users can reset account password in accordance with the password policies
the Directory Manager administrator has defined for your role in the identity store.

## Reset identity store account password (enrolled users)

Follow the steps to reset identity store account password for enrolled users.

Step 1 – On the Welcome to Directory Manager page of the portal, click the **Forgot Password** card.

Step 2 – Select the identity store where your account exists from the identity store drop down list.

Step 3 – Type your identity store account name in the user name box.

Step 4 – Provide the displayed captcha code in the **Captcha** box.

Step 5 – Click **Reset Password**. You will be directed to a page that shows the authentication
type(s) you enrolled this account with.

Step 6 – Authenticate your account using the required type(s).

- Security Questions

  1. On the Multifactor Authentication window, select the **Security Questions** check box and
     click **Continue**.
  2. The page lists the security questions you enrolled your account with. Provide answers to
     these questions.
  3. Click **Verify and Continue**.

- Mobile Verification

  1. On the Multifactor Authentication window, select the **Mobile Verification** check box and
     click **Continue**.
  2. Type the last four digits of your mobile number and click **Send Code**.
  3. In the displayed box, type the 5 digit access code sent on your mobile phone.
  4. Click **Verify and Continue**.

  If you have not received a code, click **Send Again** and then enter the received code in the
  given box.

- Email Verification

  1. On the Multifactor Authentication window, select the **Email**check box and click
     **Continue**.
  2. Complete your email address and click **Send Code**.
  3. In the displayed box, type the 5 digits access code sent to the provided email address.
  4. Click **Verify and Continue**.

  If you have not received a code, click **Send Again** and then enter the received code in the
  given box.

- Authenticator

  1. On the **Multifactor Authentication** window, select the **Authenticator**check box and click
     **Continue**.
  2. Launch the authenticator app on your smartphone.
  3. The app displays a 6-digit code. Enter that code in the **Security Code** box on the
     Authenticator page.

     The app generates a new code every 30 seconds.

  4. Click **Verify and Continue**.

- Link Account

  1. On the Multifactor Authentication window, select the **Link Account** check box and click
     **Continue**.
  2. On the **Link Account** tab, select a link account you want to use for resetting the password
     of your account.

     This tab lists the link account(s) that have the **Allow Authentication** option enabled.

  3. Type the username and password of the selected linked account in the respective boxes.
  4. Click **Next**.

- YubiKey

  Insert the YubiKey device in the USB slot of your computer.

  1. On the Multifactor Authentication window, select the **YubiKey**check box and click
     **Continue**.
  2. Click your YubiKey device name. The portal directs you to tap on the device.  
     On tapping, you are authenticated.

- Windows Hello

  1. On the Multifactor Authentication window, click the **Windows Hello** check box and click
     **Continue**.
  2. Click **Authenticate and Continue**.

     Authenticate with the provided biometric information or with the PIN given in Windows Hello
     sign-in options.

Step 7 – On getting authenticated, the Reset My Password page is displayed.

Step 8 – All your linked accounts, if any, are listed in the Select the account to reset their
passwords section. Select the check boxes for the account(s) to reset their password(s).

Type your new password in the **New password** box. On typing the new password, the **Password
Acceptance** box appears. The new password must conform to the rules of the applied password policy
for the identity store.

To meet the password complexity requirements, the password must:

1. be at least as per the characters length defined in the password policy of the provider.
2. contain uppercase lowercase characters, digit or special character:

   - English uppercase characters (A through Z)
   - English lowercase characters (a through z)
   - Base 10 digits (0 through 9)
   - Special characters (for example, !, $, #, %)

Step 9 – Type the new password for the selected account(s) in the Confirm new password box.

Step 10 – Click **Reset Password**.

If you have reused an old password and it does not meet the **Enforce password history** policy of
the provider, a message inform you that the password must be different from the old one.

Step 11 – On reset, the Reset Password Results page displays the message ,"Password has been reset
successfully.". Click **OK**.

## Reset identity store account password (unenrolled users)

Follow the steps to reset identity store account password for unenrolled users.

Step 1 – On the Welcome to Directory Manager page, click the **Forgot Password** card.

Step 2 – Select the identity store from the Identity Store list your account resides in.

Step 3 – Type your user name in the Username box.

Step 4 – Provide the displayed captcha code in the **Captcha** box.

Step 5 – Click **Reset Password**. You will be directed to a page that shows the second way
authentication type(s) the Directory Manageradministrator has enabled for your role.

Step 6 – Authenticate your account using any second way authentication option from below.

- Security Question

  1. Select the **Security Questions** check box and click **Continue**.
  2. Provide answer to the question the administrator has set for you.
  3. Click **Verify and Continue**.

- Mobile Verification

  1. Select **Mobile Verification** check box and click **Continue**.
  2. Type the last four digits of your mobile number in the box and click **Send Code**.
  3. In the displayed box, type the 5 digit access code sent on your mobile phone.
  4. Click **Verify and Continue**.

  If you have not received a code, click **Send Again** and then enter the received code in the
  given box.

- Email Verification

  1. Select **Email Verification** check box and click **Continue**.
  2. Complete your email address and click **Send Code**.
  3. Type the 5 digit access code sent to the provided email address in the displayed box.
  4. Click **Verify and Continue**.

  If you have not received a code, click **Send Again** and then enter the received code in the
  given box.

Step 7 – Follow the steps 6 - 11 in the Reset identity store account password (enrolled users)
section to reset your password.

# Password page

Provide a password for the user account and set other password-specific options.

Step 1 – Type a password for the user account in the **Password** and **Confirm password** boxes.

Step 2 – Select the following check boxes to set the security options for the user account:

- User must change password at next logon – To force the user to change the password the next time
  they log into their workstations with the account.
- Password never expires – To prevent the account password from expiring.
- Account is disabled – To disable the account, so that the user cannot log-on with it.

Step 3 – Click **Next**.

# Password page

(of Microsoft Entra ID User and Mailbox wizards)

Provide a password for the user account and set other password-specific options.

Step 1 – Type a password for the user account in the **Password** and **Confirm password** boxes.

Step 2 – Select the check boxes to set the security options for the user account:

- User must change password at next logon – To force the user to change the password the next time
  they log into their workstations with the account.
- Account is enabled – This check box is selected by default, indicating that the user account is
  enabled.

  Clear it to disable the account, so that the user would not be able to log-on with it.

Step 3 – Click **Next**.

# Change your password

You can change the password of your identity store account. After changing it, use the new password
to sign into Directory Manager and any other application that uses your domain account.

To do this, provide the existing password and then a new password to replace it. The new password
must conform to the password policy the administrator has defined for the identity store.
Administrator can either enable
[Directory Manage Password Policy ](/docs/directorymanager/11.1/administration/security-policies.md) or Netwrix
Password Policy Enforcer policies for the identity store.

NOTE: MFA enabled Microsoft Entra ID users cannot change their passwords in Directory Manager. If
they try to do so, the following message is displayed:

![Change Password error message for Entra ID user](/img/product_docs/directorymanager/directorymanager/portal/user/manage/changepasswordentraiduser.webp)

If the user's account is a master account, password of its child accounts also cannot be changed in
Directory Manager.

Follow these steps to change your password.

Step 1 – In the portal, click your profile info in the top right corner and select **Change
password**.

Step 2 – The Select your account section lists your account and its linked accounts, if any. Your
logged in account is selected.

Notice the following in the blue bar:

- Password Policy: Minimum Length – Displays the minimum number of characters the new password must
  contain
- Password Complexity – Displays whether password complexity rules apply. Hover the mouse over
  _Enabled_ to view the rules.

Step 3 – In the Change Password section, do the following:

- Type the password of your selected account in the **Current Password** box.
- Type your new password in the **New Password** box. The new password must conform to the rules of
  the applied password policy for the identity store.
- Type the new password in the **Confirm New Password** box.

Step 4 – Click **Change Password**.

If you have reused an old password that does not meet the Enforce password history policy of the
provider, a message informs you that the password must be different from the old one.

Step 5 – On successful change password, the message,"Password has been reset successfully." is
displayed. Click **OK**.

# Password Management

Complex passwords keep network infrastructure secure but there is a real cost to that security.
Users forget their complex passwords. They can be given two options: either they call helpdesk to
reset their password at an exorbitant cost or have a self-service tool. Directory Manager can serve
both these functions. Using it:

- Helpdesk – Can reset passwords and unlock accounts for users after authentication. See the
  [Reset Passwords](/docs/directorymanager/11.1/helpdesk/helpdesk-operations.md) topic for detailed
  information.
- Users – Can reset their own passwords and their own accounts after passing multifactor
  authentication. They can perform these password related functions through various mediums, such
  as:

  - Directory Manager portal – Using it, they can:

    - reset their forgotten passwords. See the
      [Reset Passwords](/docs/directorymanager/11.1/user-management/password-management.md) topic for further information on how
      to reset forgotten passwords.
    - change their account passwords. See the [ Change your password](/docs/directorymanager/11.1/user-management/password-management.md) topic
      for further information on how to change their account passwords.
    - reset their own password or password of any other user. See the
      [Reset your password](/docs/directorymanager/11.1/user-management/password-management.md) topic for additional information.
    - unlock their identity store account. See the [Unlock your accounts](/docs/directorymanager/11.1/user-management/unlockaccount.md)
      topic for detailed information on how to unlock their identity store accounts.

  - Client Software and Web Access

    The client software to install on user workstations is called
    [ Credential Provider](/docs/directorymanager/11.1/user-management/credentialprovider.md) and available for distribution using various
    IT enabled distribution methods such as group policy and Microsoft System Center
    Configuration Manager (SCCM). See the [Install Credential Provider](/docs/directorymanager/11.1/user-management/installcp.md) topic for
    additional information.

    The distributed client enables the **Forgot Password?** and **Unlock Account** links on the
    Windows logon screen of users’ workstations. Users, who forget their passwords or are locked
    out, can easily access these functions from their machine. There is also an option for web
    access for users if they are on a remote computer.

# Reset your password

Directory Manager portal enables you to reset password for user accounts. You can reset your
identity store password, and even the account passwords of other users in the connected identity
store, provided you have the rights. The new password must conform to the password policy the
administrator has defined for the identity store. Administrator can either enable
[Directory Manage Password Policy ](/docs/directorymanager/11.1/administration/security-policies.md) or Netwrix
Password Policy Enforcer policies for the identity store.

Follow the steps to reset password.

Step 1 – On the My Dashboard page of Directory Manager portal, search for the user whose password
you need to reset. See the [Directory Search](/docs/directorymanager/11.1/misc/directorymanager/portal/search/search.md) topic for additional
information.

Step 2 – Select the account from the list whose password you want to reset.

Step 3 – Select the identity store where the account exists from the identity store drop down list.
Your logged in account is selected

Step 4 – Type identity store account name in the user name box.

Step 5 – Select **Reset Password** on the toolbar.

Step 6 – Enter the information for the given fields:

- Identity Store – Shows the name of the identity store the portal is connected to.
- User name – Shows your logged-on user name.

  If you have the rights to reset the passwords for other user accounts, then type the login name
  of a user.

- New password and Confirm New password – Type a new password for the specified user. The new
  password must conform to the rules of the applied password policy for the identity store.

Step 7 – Click **Save**.

# Reset Passwords

The Directory Manager portal enables enrolled users in an identity store reset their account passwords securely. They can reset their passwords if they have forgotten or lost their existing passwords. Unenrolled users can reset their passwords if the administrator
has enabled the Second Way Authentication option for their role.

The Directory Manager portal provides an authentication mechanism, whereby users must authenticate themselves with Multifactor Authentication type(s) they enrolled their accounts with.

If the administrator has enabled multifactor authentication for the identity store, users must authenticate their accounts using the authentication type(s) they enrolled their account with. After successful authentication, users can reset account
password in accordance with the password policies the Directory Manager administrator has defined for your role in the identity store.

## Reset identity store account password (enrolled users)

Follow the steps to reset identity store account password for enrolled users.

Step 1 – On the Welcome to Directory Manager page of the portal, click the __Forgot Password__ card.

Step 2 – Select the identity store where your account exists from the identity store drop down list.

Step 3 – Type your identity store account name in the user name box.

Step 4 – Provide the displayed captcha code in the __Captcha__ box.

Step 5 – Click __Reset Password__. You will be directed to a page that shows the authentication type(s) you enrolled this account with.

Step 6 – Authenticate your account using the required type(s).

- Security Questions

  1. On the Multifactor Authentication window, select the __Security
     Questions__ check box and click __Continue__.
  2. The page lists the security questions you enrolled your account with. Provide answers to these questions.
  3. Click __Verify
     and Continue__.
- Mobile Verification

  1. On the Multifactor
     Authentication window, select the __Mobile
     Verification__ check box and click __Continue__.
  2. Type the last four digits of your mobile number and click __Send
     Code__.
  3. In the displayed box, type the 5 digit access code sent on your mobile phone.
  4. Click __Verify
     and Continue__.

  If you have not received a code, click __Send
  Again__ and then enter the received code in the given box.
- Email Verification

  1. On the Multifactor
     Authentication window, select the __Email__check box and click __Continue__.
  2. Complete your email address and click
     __Send Code__.
  3. In the displayed box, type the 5 digits access code sent to the provided email address.
  4. Click __Verify
     and Continue__.

  If you have not received a code, click __Send
  Again__ and then enter the received code in the given box.
- Authenticator

  1. On the __Multifactor
     Authentication__ window, select the __Authenticator__check box and click __Continue__.
  2. Launch the authenticator app on your smartphone.
  3. The app displays a 6-digit code. Enter that code in the __Security
     Code__ box on the Authenticator page.

     The app generates a new code every 30 seconds.
  4. Click __Verify
     and Continue__.
- Link Account

  1. On the Multifactor
     Authentication window, select the __Link
     Account__ check box and click __Continue__.
  2. On the __Link
     Account__ tab, select a link account you want to use for resetting the password of your account.

     This tab lists the link account(s) that have the __Allow Authentication__ option enabled.
  3. Type the username and password of the selected linked account in the respective boxes.
  4. Click __Next__.
- YubiKey

  Insert the YubiKey device in the USB slot of your computer.

  1. On the Multifactor
     Authentication window, select the __YubiKey__check box and click __Continue__.
  2. Click your YubiKey device name. The portal directs you to tap on the device.  
      On tapping, you are authenticated.
- Windows Hello

  1. On the Multifactor
     Authentication window, click the __Windows
     Hello__ check box and click __Continue__.
  2. Click __Authenticate and Continue__.

     Authenticate with the provided biometric information or with the PIN given in Windows Hello sign-in options.

Step 7 – On getting authenticated, the Reset My Password page is displayed.

Step 8 – All your linked accounts, if any, are listed in the Select the account to reset their passwords section. Select the check boxes for the account(s) to reset their password(s).

Type your new password in the __New password__ box. On typing the new password, the __Password Acceptance__ box appears. The new password
must conform to the rules of the applied password policy for the identity store.

To meet the password complexity requirements, the password must:

1. be at least as per the characters length defined in the password policy of the provider.
2. contain uppercase lowercase characters, digit or special character:

   - English uppercase characters (A through Z)
   - English lowercase characters (a through z)
   - Base 10 digits (0 through 9)
   - Special characters (for example, !, $, #, %)

Step 9 – Type the new password for the selected account(s) in the Confirm new password box.

Step 10 – Click __Reset Password__.

If you have reused an old password and it does not meet the __Enforce password history__ policy of the provider, a message inform you that the password must be different from the old one.

Step 11 – On reset, the Reset Password Results page displays the message ,"Password has been reset successfully.". Click __OK__.

## Reset identity store account password (unenrolled users)

Follow the steps to reset identity store account password for unenrolled users.

Step 1 – On the Welcome to Directory Manager page, click the __Forgot Password__ card.

Step 2 – Select the identity store from the Identity Store list your account resides in.

Step 3 – Type your user name in the Username box.

Step 4 – Provide the displayed captcha code in the __Captcha__ box.

Step 5 – Click __Reset Password__. You will be directed to a page that shows the second way authentication type(s) the Directory Manageradministrator has enabled for your role.

Step 6 – Authenticate your account using any second way authentication option from below.

- Security Question

  1. Select the __Security
     Questions__ check box and click __Continue__.
  2. Provide answer to the question the administrator has set for you.
  3. Click __Verify and Continue__.
- Mobile Verification

  1. Select __Mobile
     Verification__ check box and click __Continue__.
  2. Type the last four digits of your mobile number in the box and click __Send
     Code__.
  3. In the displayed box, type the 5 digit access code sent on your mobile phone.
  4. Click __Verify
     and Continue__.

  If you have not received a code, click __Send
  Again__ and then enter the received code in the given box.
- Email Verification

  1. Select __Email
     Verification__ check box and click __Continue__.
  2. Complete your email address and click
     __Send Code__.
  3. Type the 5 digit access code sent to the provided email address in the displayed box.
  4. Click __Verify
     and Continue__.

  If you have not received a code, click __Send
  Again__ and then enter the received code in the given box.

Step 7 – Follow the steps 6 - 11 in the [Reset identity store account password (enrolled users)](#Reset-identity-store-account-password-enrolled-users) section to reset your password.

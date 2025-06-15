# Unlock your accounts

You can unlock your identity store account yourself, without having to contact the administrator or wait.

Your account can get locked due to:

- __Wrong password attempts while logging on to a Directory Manager client__
  - the consecutive number of times a user can provide the wrong password (Account lockout threshold), after which the user's identity store account gets locked.
  - the duration to lock the user account (_Account lockout duration_).
- __Invalid response to authentication type(s)__

  The Directory Manager administrator can specify Password Policy for the identity store, which includes:

  - the consecutive number of times a role member can provide a wrong value for any authentication type (Failed Authentication Attempts Threshold).
  - the duration to lock the user account (_Account Lockout duration_).

With authentication disabled, you cannot authenticate in Directory Manager; hence, you cannot unlock your identity store accounts or reset your passwords.

### Unlock identity store user accounts (after wrong password attempts) - enrolled users

While logging on Directory Manager, you provide wrong password on the Directory Manager Authenticate window for the specified number of times, the following message appears:

![GroupID Authenticate](../../../../../../static/img/product_docs/groupid/groupid/portal/user/manage/locked.webp)

Now you cannot login to portal unless you unlock your identity store account. Follow the instructions given below to unlock your account:

Step 1 – On the Welcome to Directory Manager page of the portal, click __Account Locked?__ card.

Step 2 – Select the identity store where your account exists from the identity store drop down list.

Step 3 – Type your identity store account name in the __Username__ box.

Step 4 – Enter captcha in the __Captcha__ box.

Step 5 – Click __Unlock Account__. You will be directed to a page where the authentication type(s) you enrolled your account with are listed.

To get authenticated through the required authentication type(s), click the relevant option below:

- Security Questions

  1. On the Multifactor Authentication window, select the __Security Questions__ check box and click __Continue__.
  2. The page lists the security questions you enrolled your account with. Provide answers to these questions.
  3. Click __Verify and Continue__.
- Mobile Verification

  1. On the Multifactor Authentication window, select the __Mobile Verification__ check box and click __Continue__.
  2. Type the last four digits of your mobile number and click __Send Code__.
  3. In the displayed box, type the 5 digit access code sent on your mobile phone.
  4. Click __Verify and Continue__.

  If you have not received a code, click __Send Again__ and then enter the received code in the given box.
- Email Verification

  1. On the Multifactor Authentication window, select the __Email__ check box and click __Continue__.
  2. Complete your email address and click __Send Code__.
  3. In the displayed box, type the 5 digits access code sent to the provided email address.
  4. Click __Verify and Continue__.

  If you have not received a code, click __Send Again__ and then enter the received code in the given box.
- Authenticator

  1. On the Multifactor Authentication window, select the __Authenticator__ check box and click __Continue__.
  2. Launch the authenticator app on your smart phone.
  3. The app displays a 6-digit code. Enter that code in the __Security Code__ box on the Authenticator page.

     The app generates a new code every 30 seconds.
  4. Click __Verify and Continue__.
- Link Account

  1. On the Multifactor Authentication window, select the __Link Account__ check box and click __Continue__.
  2. On the Link Account tab, select a link account you want to use for resetting the password of your account.

     This tab lists the link account(s) that have the Allow Authentication option enabled.
  3. Type the username and password of the selected linked account in the respective boxes.
  4. Click __Next__.
- YubiKey

  Insert the YubiKey device in the USB slot of your computer.

  1. On the Multifactor Authentication window, select the __YubiKey__ check box and click __Continue__.
  2. Click your YubiKey device name. The portal directs you to tap on the device.

     On tapping, you are authenticated.
- __Windows Hello__

  1. On the Multifactor Authentication window, click the __Windows Hello__ check box and click __Continue__.
  2. Click __Authenticate and Continue__.

     Authenticate with the provided biometric information or with the PIN given in Windows Hello sign-in options.

Step 6 – Click __Unlock Account__. A message that the account has been unlocked successfully is displayed.

You can now log in to Directory Manager portal with your account and perform the required function.

### Unlock identity store user accounts (after wrong password attempts) - unenrolled users

On entering the wrong password on the Directory Manager Authenticate window for the specified number of times, your account gets locked. You cannot login to Password Center user portal unless
you unlock your identity store account. Follow the instructions given below to unlock your account:

Step 1 – On the Welcome to Directory Manager page of the portal, click __Unlock my account__ card.

Step 2 – Select the identity store where your account exists from the identity store drop down list.

Step 3 – Type your identity store account name in the user name box.

Step 4 – Click __Unlock Account__.

You will be directed to a page where the Second Way Authentication type options are listed as the administrator has configured for your role.

To get authenticated through the defined authentication type(s) for your role, click the relevant option below:

- Security Question

  1. On the Second Way Authentication window, select the __Security Question__ check box and click __Continue__.
  2. Provide answer to the question the administrator has set for you.
  3. Click __Verify and Continue__

- Mobile Verification

  1. On the Second Way Authentication window, select the __Mobile Verification__ check box and click __Continue__.
  2. Type in the last four digit of your mobile number.
  3. Click __Send Code__.
  4. Type the 5 digits access code sent on your mobile phone.
  5. Click __Verify and Continue__.

     If you have not received a code, click __Send Again__ and then enter the received code in the given box.

- Email Verification

  1. On the Second Way Authentication window, select the __Email Verification__ check box and click __Continue__.
  2. Complete your email address and click __Send Code__.
  3. In the displayed box, type the 5 digits access code sent to the provided email address.
  4. Click __Verify and Continue__.

     If you have not received a code, click __Send Again__ and then enter the received code in the given box.

Step 5 – You will be asked to enroll your account as per the multifactor authentication policy defined for your role.

On successful enrollment, you are redirected to the Unlock My Account page. Your account is listed on this page with the check box selected for it.

Step 6 – Click __Unlock Account__.

A message that the account has been unlocked successfully is displayed.

Step 7 – You can now log in to portal with your account and perform the required function.

### Unlock identity store user accounts (after providing wrong response to authentication types) - enrolled and unenrolled users

While authenticating on the portal, if enrolled or unenrolled users provide a wrong answer for the specified number of times, their account gets locked and the following message is displayed:

![accountlockout](../../../../../../static/img/product_docs/groupid/groupid/portal/user/manage/accountlockout.jpg)

This type of account unlock can be resolved in one of the following two ways:

- While logging on to the portal, you provide the correct password for your account.

  OR
- You wait for the specified duration, after which the account will be unlocked automatically.

NOTE: Helpdesk cannot unlock accounts that get locked out on providing a wrong response to the authentication type(s).

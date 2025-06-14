# Authenticate Your Identity Store Account

With second factor authentication enabled, users must authenticate the identity store account they use for logging into the portal.

This means that a user must prove his or her identity using the Authentication Types they used to enroll his or her identity store account with.

## Authenticate your identity store account

1. On the login page of the portal, select an identity store and then provide your user name and password to connect the portal to it.
2. Click __Sign In__.
3. You are directed to the __Authenticate Account__ page.

   This page displays the authentication type(s) you enrolled this account with. You must authenticate using one authentication type.

   - __Authenticate using Security Questions__

     1. On the __Authenticate Account__ page, select __Security Questions__ and click __Continue__.
     2. Provide answers to the security questions you enrolled your account with.
     3. Click __Verify and Continue__.
   - Authenticate using SMS

     1. On the __Authenticate Account__ page, select __Security Questions__ and click __Continue__.
     2. Type the last four digits of your mobile number and click __Send Code__.
     3. In the _access code_ box, type the 5 digit access code sent on your mobile phone by SMS.
     4. __Verify and Continue__.

     If you do not receive a code, click __Send Again__ and then enter the received code in the box.
   - Authenticate using Email

     1. On the __Authenticate Account__ page, select __Email Verification__ and click __Continue__.
     2. Complete your email address and click __Send Code__.
     3. In the _access code_ box, type the 5 digit access code sent to the provided email address.
     4. Click __Verify and Continue__.

     If you do not receive a code, click __Send Again__ and then enter the received code in the box.
   - Authenticator using Authenticator

     1. On the __Authenticate Account__ page, select __Authenticator__ and click __Continue__.
     2. Launch the Google Authenticator or Microsoft Authenticator app on your smartphone. The app generates a verification code and displays it on your phone’s screen.
     3. Enter the code in the __Security code__ box and click __Verify and Continue__.

     Authenticator apps generate a new code every 30 seconds, with each code expiring after 30 seconds.
   - Authenticate using YubiKey

     1. Insert the YubiKey device in the USB slot of your computer.
     2. On the __Authenticate Account__ page, select __YubiKey Verification__ and click __Continue__.
     3. Click your YubiKey device name.

        The portal directs you to tap on the device.
     4. On tapping, you are authenticated on the portal.
   - Authenticate using Windows Hello

     1. On the __Authenticate Account__ page, select __Windows Hello__ and click __Continue__.
     2. Click __Authenticate and Continue__.
     3. Provide the biometric information you enrolled your account with.

__See Also__

- [Second Factor Authentication](/versioned_docs/groupid_11.0/groupid/portal/user/authentication/secondfactorauthentication.md)
- [Enroll Your Identity Store Account](/versioned_docs/groupid_11.0/groupid/portal/user/authentication/enrollaccount.md)

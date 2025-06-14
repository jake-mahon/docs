# Authenticate with Authentication Types

To authenticate your identity store account in GroupID for multifactor authentication or second factor authentication, you must use one or more authentication types that you enrolled your account with.

What do you want to do?

- [Authenticate using Security Questions](#authenticate-using-security-questions)
- [Authenticate using Mobile](#authenticate-using-mobile)
- [Authenticate using Email](#authenticate-using-email)
- [Authenticate using Authenticator](#authenticate-using-authenticator)
- [Authenticate using YubiKey](#authenticate-using-yubikey)
- [Authenticate using Windows Hello](#authenticate-using-windows-hello)

## Authenticate using Security Questions

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the __GroupID Authenticate__ page is displayed.
2. On signing in, enrolled users are redirected to the __Authenticate__ page. This page lists the authentication types the user enrolled his or her account with.
3. Select the __Security Questions__ check box and click __Continue__.
4. The next page lists the security questions you enrolled your account with. Provide answers to these questions.
5. Click __Verify and Continue__.

## Authenticate using Mobile

To authenticate using mobile, you have to enter the last 4 digits of the mobile number you provided during enrollment. GroupID sends a confirmation code to this number; you have to enter the code in GroupID for authentication.

__To authenticate using mobile:__

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the __GroupID Authenticate__ page is displayed.
2. On signing in, enrolled users are redirected to the __Authenticate__ page. This page lists the authentication types the user enrolled his or her account with.
3. Select the __Mobile Verification__ check box and click __Continue__.
4. On the next page, type the last four digits of your mobile number and click __Send Code__.
5. When the verification code is successfully sent to the provided mobile number, a box appears on the page. Enter the received code in it.
6. Click __Verify and Continue__.

RECOMMENDED: If you do not receive the code, recheck your mobile number and click __Send Again__.

## Authenticate using Email

To authenticate using Email, you have to complete the email address you provided during enrollment. GroupID then sends a confirmation code to this email address; you have to enter the code in GroupID for authentication.

__To authenticate using email:__

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the __GroupID Authenticate__ page is displayed.
2. On signing in, enrolled users are redirected to the __Authenticate__ page. This page lists the authentication types the user enrolled his or her account with.
3. Select the __Email Verification__ check box and click __Continue__.
4. On the next page, complete your email address and click __Send Code__.
5. When the verification code is successfully sent to the provided email address, a box appears on the page. Enter the received code in it.
6. Click __Verify and Continue__.

RECOMMENDED: If you do not receive the code, recheck your email address and click __Send Again__.

## Authenticate using Authenticator

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the __GroupID Authenticate__ page is displayed.
2. On signing in, enrolled users are redirected to the __Authenticate__ page. This page lists the authentication types the user enrolled his or her account with.
3. Select the __Authenticator__ check box and click __Continue__.
4. Launch the Authenticator app on your smartphone.
5. The app displays a 6-digit code. Enter it in the __Security Code__ box on the __Authenticator__ page.
6. Click __Verify and Continue__.

## Authenticate using YubiKey

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the __GroupID Authenticate__ page is displayed.
2. On signing in, enrolled users are redirected to the __Authenticate__ page. This page lists the authentication types the user enrolled his or her account with.
3. Insert the YubiKey device in the USB slot of your computer.
4. Select the __YubiKey__ check box and click __Continue__.
5. On the next page, click your YubiKey device name.  
   GroupID directs you to tap on the physical device.
6. On tapping, you are authenticated in GroupID.

## Authenticate using Windows Hello

1. When you launch Admin Center, the GroupID portal or the GroupID Mobile app, the __GroupID Authenticate__ page is displayed.
2. On signing in, enrolled users are redirected to the __Authenticate__ page. This page lists the authentication types the user enrolled his or her account with.
3. Select the __Windows Hello__ check box and click __Continue__.
4. On the next page, click __Authenticate and Continue__.
5. Authenticate with the provided biometric information or with the PIN given in the Windows Hello sign-in options.

__See Also__

- [Authentication Policy](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/authpolicy.md)
- [Enable Authentication Types](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/authtypes.md)
- [Authentication Policy for Security Roles](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/authentication.md)
- [Enroll with Authentication Types](/versioned_docs/groupid_11.0/groupid/admincenter/enroll.md)

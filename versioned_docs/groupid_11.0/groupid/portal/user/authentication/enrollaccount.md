# Enroll Your Identity Store Account

With second factor authentication enabled for a user role in an identity store, unenrolled users must enroll their identity store accounts before they can connect the portal to that identity store and log in.

Enrolling an identity store account means that a user must register this account in GroupID using an Authentication Type.

Once a user has enrolled his or her account, he or she must authenticate with the same authentication types whenever he or she has to log into the GroupID portal using that account.

What do you want to do?

- Enroll your identity store account

## Enroll your identity store account

1. On the login page of the portal, select an identity store and then provide your user name and password to connect the portal to it and click Sign In.

   OR

   Scan the QR code if the OR code is enabled in GroupID Admin Center.
2. Click the profile icon on the top right corner and select Enroll your account.
3. The authentication type(s) available for enrollment are listed as tabs on Your Enrollments page. Select an authentication type to enroll your account with.

   - Enroll your account using Security Questions

     1. On the __Your Enrollments__ page, click the __Security Questions__ tab.
     2. From a __Question X__ list, select a security question of your choice (X represents the question number).
     3. In the __Answer__ box, type an answer for the selected question.  
         If the answer meets the requirements, such as length-related checks, a tick mark is displayed for it.
     4. Repeat steps 2 and 3 to select another security question and provide an answer.
     5. Click __Enroll Account__.
   - Enroll your account using SMS

     1. On the __Your Enrollments__ page, click the __Mobile__ tab.
     2. Select your country and then type your mobile number in the box.
     3. Click __Send Code__.
     4. When the code is successfully sent to your provided mobile number, a box is displayed; enter the received code in it.
     5. Click __Enroll Account__.

     If you do not receive the code, recheck your mobile number and click __Send code again__.
   - Enroll your account using Email

     1. On the __Your Enrollments__ page, click the __Email__ tab.
     2. Type your email address in the box and click __Send Verification Code__.
     3. When the code is successfully sent to your provided email address, a box is displayed; enter the received code in it.
     4. Click __Enroll Account__.

     If you do not receive the code, recheck your email address and click __Send code again__.
   - Enroll your account using Authenticator

     1. On the __Your Enrollments__ page, click the __Authenticator__ tab.
     2. Scan the QR code with the authenticator app installed on your phone.

        The app generates a verification code and displays it on your phone's screen.
     3. Enter this code in the box and click __Enroll Account__.

     The authenticator app generates a new code every 30 seconds, with each code expiring after 30 seconds.
   - Enroll your account using YubiKey

     1. Insert the YubiKey device in the USB slot of your computer.
     2. On the __Your Enrollments__ page, click the __YubiKey__ tab.
     3. Enter a name for your YubiKey device and click __Enroll Account__.
     4. The portal directs you to tap on the device. This enrolls your account on the portal.
   - Enroll your account using Windows Hello

     1. On the __Your Enrollments__ page, click the __Windows Hello__ tab.
     2. Enter a name for your authentication device and click __Start Registration__.

__See Also__

- [Second Factor Authentication](/versioned_docs/groupid_11.0/groupid/portal/user/authentication/secondfactorauthentication.md)
- [Authenticate Your Identity Store Account](/versioned_docs/groupid_11.0/groupid/portal/user/authentication/authenticateaccount.md)

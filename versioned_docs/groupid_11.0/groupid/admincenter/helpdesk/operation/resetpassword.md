# Reset Passwords

Admin Center provides a variety of options to helpdesk users for resetting passwords and then communicating them to users.

NOTE: You can reset passwords of unenrolled users if (a) the __Reset Any Password__ permission has been granted to your role and (b) the Helpdesk policy for your role is set to the unrestricted mode.

Helpdesk users may have to authenticate end users before resetting their passwords. See the [Helpdesk Policy ](/versioned_docs/groupid_11.0/groupid/admincenter/helpdesk/overview.md#Helpdesk-Policy) topic.

What do you want to do?

- [Reset Passwords in Unrestricted Mode](#Reset-Passwords-in-Unrestricted-Mode)
- [Reset Passwords in Restricted Mode](#Reset-Passwords-in-Restricted-Mode)

## Reset Passwords in Unrestricted Mode

1. In Admin Center, click __Helpdesk__ in the left pane.
2. The __Helpdesk__ page opens to the __Helpdesk Operations__ tab. Locate your required user. To search for a user, see the[Search Users](/versioned_docs/groupid_11.0/groupid/admincenter/helpdesk/operation/search.md) topic.
3. Click the ellipsis button for the user and select __Reset Password__. For enrolled users, the __Reset Password__ dialog box has two pages: __Authenticate__ and __Reset__. Under the unrestricted mode, you can skip the former and move to the __Reset__ page. For unenrolled users, only the __Reset__ page is available.  
   Use the __History__ button to view user history, i.e., the actions performed on the user and by the user. This history is specific to helpdesk functions, as listed in the [History in Helpdesk](/versioned_docs/groupid_11.0/groupid/admincenter/helpdesk/history.md) topic.
4. The __Reset__ page displays the user name, the identity store
   where this user resides, the last time the user changed his or her password, and the lock status of the account. In case the user has linked his or her accounts that exist in different identity stores, this page displays all linked accounts that require a password reset.  
   Select an account to reset its password.
5. Depending on the password reset method enforced for your role, you can reset the password and communicate the new password to the user, or you can generate a secure link and send it to the user for resetting the password.

   - The __New Password__ tab is displayed if you are authorized to generate a new password and send it to the user.
   - The __Secure Link__ tab is displayed if you are authorized to send a secure link to the user.
   - Both tabs are displayed if you are authorized to choose any password reset method.
6. On the __New Password__ tab:

   - Enter a password of your choice in the __Password__ box or click __Generate Password__ to generate a random password.
   - Select the user's mobile number and/or email address in the __Select Mobile__ and __Select Email__ boxes to send
     the new password to the user by SMS or email or both.
7. On the __Secure Link__ tab:

   - Select the user's mobile number and/or email address in the __Select Mobile__ and
     __Select Email__ boxes to send the secure link to the user by SMS or email or both. The user must click this link to reset his or her password.
8. Click __Reset Password__.

## Reset Passwords in Restricted Mode

In the restricted mode, you will not be able to reset passwords for unenrolled users. Further, you could be restricted to:

- Reset passwords of enrolled users residing in a specific OU.
- Authenticate enrolled users through the multifactor authentication policy applicable to the user before resetting their passwords. The Security Questions authentication type may be mandatory.

See the [Helpdesk Policy](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/helpdesk.md) topic.

__To reset a password in restricted mode:__

1. In Admin Center, click __Helpdesk__ in the left pane.
2. The __Helpdesk__ page opens to the __Helpdesk Operations__ tab. Locate your required user. To search for a user, see the[Search Users](/versioned_docs/groupid_11.0/groupid/admincenter/helpdesk/operation/search.md) topic.
3. Click the ellipsis button for
   the user and select __Reset Password__. The __Reset Password__ dialog box has two pages: __Authenticate__ and __Reset__.   
   Use the __History__ button to view user history, i.e., the actions performed on the user and by the user. This history is specific to helpdesk functions, as listed in the [History in Helpdesk](/versioned_docs/groupid_11.0/groupid/admincenter/helpdesk/history.md) topic.
4. The __Authenticate__ page displays the authentication type(s) the user's account is enrolled with. You could be restricted to authenticate the user according to the authentication policy that applies to the user.  
   Click the plus sign for an authentication type to expand it.

   - __Security Question__

     1. Get the answers to the questions from the user and enter them in the answer boxes.
     2. Click __Verify__ for each answer to verify it.
   - __Mobile__

     1. The mobile number with which the user’s account is enrolled is displayed in the box. Click __Send Code__ to send an access code to the user’s mobile number.
     2. Get this access code from the user and enter it in the box.
     3. Click __Verify__.
   - __Email__

     1. The email address with which the user's account is enrolled is displayed in the box. Click __Send Code__ to send an access code to the user’s email address.
     2. Get this access code from the user and enter it in the box.
     3. Click __Verify__.
   - __Authenticator__

     1. Get a valid access code from the user, as displayed to him or her in the Authenticator app and enter it in the box.
     2. Click __Verify__.

   NOTE: Helpdesk cannot authenticate users with the Link Account, YubiKey, and Windows Hello authentication types.
5. Click __Next__.
6. On the __Reset__ page, you can reset the password. Follow step 4 and onwards in the [Reset Passwords in Unrestricted Mode](#Reset-Passwords-in-Unrestricted-Mode) topic for details.

__See Also__

- [Helpdesk](/versioned_docs/groupid_11.0/groupid/admincenter/helpdesk/overview.md)
- [Helpdesk Operations](/versioned_docs/groupid_11.0/groupid/admincenter/helpdesk/operation/overview.md)

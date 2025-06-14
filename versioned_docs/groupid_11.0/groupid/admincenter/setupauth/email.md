# Set up Authentication via Email

Users can enroll and authenticate their identity store accounts using Email. An email sent to a user’s email address contains a confirmation code that the user must enter in GroupID to enroll and authenticate their accounts.

GroupID provides a default notification template for enrollment/authentication via email in various languages. You can change the subject line and the body text in the template for any of these languages.

NOTE: Before configuring Email authentication, make sure that an SMTP server is configured for the identity store. See the [Configure an SMTP Server](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/smtpserver.md) topic.

What do you want to do?

- [Enable Email Authentication for an Identity Store](#enable-email-authentication-for-an-identity-store)
- [Modify the Email Template](#modify-the-email-template)
- [Enforce Email Authentication for a Role in an Identity Store
  ](#enforce-email-authentication-for-a-role-in-an-identity-store)

## Enable Email Authentication for an Identity Store

The email authentication type must be enabled for an identity store before users can use it for second factor authentication and multifactor authentication.

To enable it, see the [Enable Authentication Types](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/authtypes.md) topic.

## Modify the Email Template

You can modify the subject line and body text of the email sent to users. The email contains a confirmation code that users have to enter in GroupID to enroll/authenticate their accounts.

__To modify the subject line and body of the email:__

1. In Admin Center, click __Notification Editor__ at the bottom of the left navigation pane.  
   The __Notification Editor__ is displayed.
2. By default, notifications templates are displayed in US English. You can select a different language to customize notification templates for that language.

   1. To select a language, click __Filter__.
   2. On the __Filter(s)__ dialog box, use the __Locality__ drop-down list to select the ISO code for your required language.
   3. Click __Apply__.
3. Search for _AccessCodeEmail_ and click __Edit__ in the __Actions__ column to open it.

   ![access_code](/img/versioned_docs/groupid_11.0/groupid/admincenter/setupauth/access_code.png)
4. You can view the notification content in two distinct modes:

   - _Source Code (HTML)_ - This is the default mode, as shown in the figure above. You can make changes to the notification template in this mode.
   - _Interactive_ - This is the user-friendly, front-end view. Use it to view the email notification, as it will be sent to users.
5. Modify and format the text of the email, except the [USER] and [CODE] placeholders.  
   GroupID replaces [USER] with the name of the user and inserts a randomly generated verification code into the [Code] placeholder. The user must enter this code in GroupID to enroll and authenticate.
6. Click the __Title__ tile to change the subject line of the email notification.
7. After making the required changes, click __Save__.
8. Click __Go Back__ to return to the __Notification Editor__.

## Enforce Email Authentication for a Role in an Identity Store

To enforce an authentication type, see the [Enforce Authentication Types for Multifactor Authentication](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication) topic.

Role members must use an enforced authentication type for multifactor authentication. When an authentication type is enabled but not enforced, role members can choose to use it for enrollment and authentication.

__See Also__

- [Authentication Policy](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/authpolicy.md)
- [Customize Notifications](/versioned_docs/groupid_11.0/groupid/admincenter/notification/customize.md)

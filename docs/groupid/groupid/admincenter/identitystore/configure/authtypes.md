# Enable Authentication Types

You must enable authentication types for an identity store to allow users to use them for second factor authentication and multifactor authentication.

Moreover, you must also enable enrollment for an identity store, so users can enroll their accounts.

## Enable Authentication Types

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Authentication Types__.
4. On the __Authentication Types__ page, use the toggle button for an authentication type to enable or disable it.  
   Enabled authentications types are available to identity store users for enrollment and authentication. You must configure them before they can be used. Supported authentication types are:

   - Security Questions
   - SMS
   - Email
   - Authenticator
   - Linked Account
   - YubiKey
   - Windows Hello
5. Click __Save__.

## Enable Enrollment

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations under Settings__ in the left pane. Then click __Authentication Types__.
4. On the __Authentication Types__ page, select the __Enrollment Enabled__ check box to force unenrolled users to enroll their identity store accounts in Directory Manager.  
   Do not select this check box if you do not want to use multifactor authentication or second factor authentication in Directory Manager.
5. Click __Save__.

NOTE: For second factor authentication and multifactor authentication to work in Directory Manager, the __Enrollment Enabled__ check box must be selected. Else, users will not be able to enroll, which will prevent them from using
Directory Manager.

__See Also__

- [Authentication Policy](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/authpolicy.md)
- [Configure Second Factor Authentication](/docs/product_docs/groupid/groupid/admincenter/setupauth/sfa.md)
- [Configure Multifactor Authentication](/docs/product_docs/groupid/groupid/admincenter/setupauth/mfa.md)
- [Set Up Authentication Types](/docs/product_docs/groupid/groupid/admincenter/setupauth/overview.md)

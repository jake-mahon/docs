# SMS Authentication

To enable users to enroll and authenticate their identity store accounts using SMS, you must make sure that an SMS gateway account is linked with the identity store. Using this gateway account, Directory Manager sends confirmation codes to the users' mobile
phone numbers for verification.

See the [Manage SMS Gateway Accounts](/docs/product_docs/groupid/groupid/admincenter/smsgateway/manage.md) topic for creating and managing SMS gateway accounts.

What do you want to do?

- [Enable SMS Authentication for an Identity Store](#Enable-SMS-Authentication-for-an-Identity-Store)
- [Link an SMS Gateway Account to an Identity Store](#Link-an-SMS-Gateway-Account-to-an-Identity-Store)
- [Enforce SMS Authentication for a Security Role](#Enforce-SMS-Authentication-for-a-Security-Role)

## Enable SMS Authentication for an Identity Store

The SMS authentication type must be enabled for an identity store before users can use it for second factor authentication and multi-factor authentication.

To enable it, see the [Enable Authentication Types](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/authtypes.md) topic.

## Link an SMS Gateway Account to an Identity Store

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __SMS Authentication__.
4. In the __SMS gateway account__ drop-down list on the __SMS Authentication__ page, select an SMS gateway account to link it with the identity store. If a default SMS gateway account is defined before the identity store was created, it is auto selected in this list.
5. In the __Text message__ box, modify the displayed message, except the [Code] placeholder.  
   This box displays the text that is sent to the users’ mobile phone numbers along with the confirmation code. Directory Manager randomly generates a confirmation code and inserts it into the [Code] placeholder. Users have to enter this code in Directory Manager for enrollment and authentication.
6. Click __Save__.

## Enforce SMS Authentication for a Security Role

To enforce an authentication type, see the [Authentication Policy for Security Roles](/docs/product_docs/groupid/groupid/admincenter/securityrole/policy/authentication.md) topic.

Role members must use an enforced authentication type for multifactor authentication. When an authentication type is enabled but not enforced, role members can choose to use it for enrollment and authentication.

__See Also__

- [Authentication Policy](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/authpolicy.md)
- [Manage SMS Gateway Accounts](/docs/product_docs/groupid/groupid/admincenter/smsgateway/manage.md)

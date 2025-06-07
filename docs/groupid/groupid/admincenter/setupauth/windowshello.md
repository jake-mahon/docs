# Set up Authentication via Windows Hello

The Windows Hello authentication type can be used on Windows 10 devices only with specialized hardware installed, such as fingerprint reader and 3D camera.

NOTE: Windows Hello supports the Microsoft Edge browser only.

What do you want to do?

- [Enable Windows Hello on Windows 10](#Enable-Windows-Hello-on-Windows-10)
- [Enable Windows Hello Authentication for an Identity Store](#Enable-Windows-Hello-Authentication-for-an-Identity-Store)
- [Enforce Windows Hello Authentication for a Role in an Identity Store](#Enforce-Windows-Hello-Authentication-for-a-Role-in-an-Identity-Store)

## Enable Windows Hello on Windows 10

1. On the Windows Start menu, select __Settings__.
2. Go to __Accounts > Sign-in options__.
3. You are prompted to enter a PIN. Click/tap __Add__ under __PIN__ to set up a PIN code.  
   Having set a PIN, you can proceed to add biometric data.
4. In the __Windows Hello__ section, click __Set up__ under __Face__ or __Fingerprint__ to add recognition data.

## Enable Windows Hello Authentication for an Identity Store

The Windows Hello authentication type must be enabled for an identity store before it can be used for second factor authentication and multifactor authentication.

To enable it, see the [Enable Authentication Types](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/authtypes.md) topic.

## Enforce Windows Hello Authentication for a Role in an Identity Store

To enforce an authentication type, see the [Enforce Authentication Types for Multifactor Authentication](/docs/product_docs/groupid/groupid/admincenter/securityrole/policy/authentication.md#Enforce-Authentication-Types-for-Multifactor-Authentication) topic.

Role members must use an enforced authentication type for multifactor authentication. When an authentication type is enabled but not enforced, role members can choose to use it for enrollment and authentication.

See Also

- [Authentication Policy](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/authpolicy.md)

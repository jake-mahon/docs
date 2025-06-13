# Set up Authentication via Windows Hello

The Windows Hello authentication type can be used on Windows 10 devices only with specialized hardware installed, such as fingerprint reader and 3D camera.

NOTE: Windows Hello supports the Microsoft Edge browser only.

What do you want to do?

- [Enable Windows Hello on Windows 10](#enable-windows-hello-on-windows-10)
- [Enable Windows Hello Authentication for an Identity Store](#enable-windows-hello-authentication-for-an-identity-store)
- [Enforce Windows Hello Authentication for a Role in an Identity Store](#enforce-windows-hello-authentication-for-a-role-in-an-identity-store)

## Enable Windows Hello on Windows 10

1. On the Windows Start menu, select __Settings__.
2. Go to __Accounts > Sign-in options__.
3. You are prompted to enter a PIN. Click/tap __Add__ under __PIN__ to set up a PIN code.  
   Having set a PIN, you can proceed to add biometric data.
4. In the __Windows Hello__ section, click __Set up__ under __Face__ or __Fingerprint__ to add recognition data.

## Enable Windows Hello Authentication for an Identity Store

The Windows Hello authentication type must be enabled for an identity store before it can be used for second factor authentication and multifactor authentication.

To enable it, see the [Enable Authentication Types](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/authtypes.md) topic.

## Enforce Windows Hello Authentication for a Role in an Identity Store

To enforce an authentication type, see the [Enforce Authentication Types for Multifactor Authentication](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication) topic.

Role members must use an enforced authentication type for multifactor authentication. When an authentication type is enabled but not enforced, role members can choose to use it for enrollment and authentication.

See Also

- [Authentication Policy](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/authpolicy.md)

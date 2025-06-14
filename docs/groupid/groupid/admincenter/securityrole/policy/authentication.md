# Authentication Policy for Security Roles

Having enabled and configured authentication types for an identity store, you can:

- Enforce authentication type(s) for a user role for multifactor authentication (MFA). Role members must use each of the enforced authentication types for account enrollment and authentication.  
  When not enforced, role members can enroll using any authentication type that has been enabled for the identity store.
- Enable second factor authentication (SFA) for a security role in an identity store.

NOTE: For MFA and SFA to work for an identity store, make sure you enable enrollment for it. See the [Enable Enrollment](/docs/groupid/groupid/admincenter/identitystore/configure/authtypes.md#enable-enrollment) topic.

What do you want to do?

- Enforce Authentication Types for Multifactor Authentication
- Enable Second Factor Authentication

## Enforce Authentication Types for Multifactor Authentication

Before enforcing an authentication type for a security role, make sure it is enabled and configured for the identity store.

__To enforce authentication types:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Security Roles__ under __Settings__ in the left pane.
4. On the __Security Roles__ page, click __Edit__ for a security role.
5. On the __Edit Security Role__ page, click __Specify policies for the members__ in the __Policies__ area.
6. On the __Add Policies__ pane, click the __Authentication__ tab.
7. In the __Multifactor Authentication Policies__ area, select the __Enforced__ check box for an authentication type to enforce it for the role. The __Enforced__ box displays the number of authentication types you enforced for the role.  
   Role members must enroll and authenticate for multifactor authentication using each of the enforced authentication types.
8. In the __Chosen by End User__ box, specify a number. Role members must use this x number of authentication types, in addition to the enforced authentication types, for multifactor enrollment and authentication.  
   Let’s assume five authentication types have been enabled and configured for the identity store.

   - When you do not enforce any authentication type and specify 2 in the __Chosen by End User__ box, role members can use any two authentication types from the five enabled types for multifactor authentication.
   - However, when you enforce two authentication types and specify 1 in the __Chosen by End User__ box, role members must enroll and authenticate by the two enforced types, and then choose another one from the
     remaining three enabled authentication types, for multifactor authentication.
9. Click __OK__.
10. On the __Edit Security Role__ page, click __Update Security Role__.
11. On the __Security Roles__ page, click __Save__.

## Enable Second Factor Authentication

You can enable second factor authentication for a security role in an identity store.

For second factor authentication, role members can enroll using any of the authentication types enabled and configured for the identity store.

Users must pass second factor authentication when signing into Admin Center and the Directory Manager portal.

__To enable second factor authentication for a role:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Security Roles__ under __Settings__ in the left pane.
4. On the __Security Roles__ page, click __Edit__ for a security role.
5. On the __Edit Security Role__ page, click __Specify policies for the members__ in the __Policies__ area.
6. On the __Add Policies__ pane, click the __Authentication__ tab.
7. Use the toggle button for __Second Factor Authentication__ to enable or disable it for the security role.
8. Click __OK__.
9. On the __Edit Security Role__ page, click __Update Security Role__.
10. On the __Security Roles__ page, click __Save__.

__See Also__

- [Authentication Policy](/docs/groupid/groupid/admincenter/identitystore/configure/authpolicy.md)
- [Security Role Policies](/docs/groupid/groupid/admincenter/securityrole/policy/overview.md)

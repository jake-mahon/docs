# Authentication Policy

The GroupID authentication policy is based on:

- Second Factor Authentication
- Multifactor Authentication
- Second Way Authentication

## Authentication Policies - A Comparison

The following table shows a comparison between second factor authentication, multifactor
authentication, and second way authentication.

|                                                         | Second Factor Authentication                                                                            | Multifactor Authentication                                                                                                                                                                                                                                       | Second Way Authentication                                                                                                             |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration                                           | It is enabled and configured for an identity store, and then for a security role in the identity store. | It is enabled and configured for an identity store. Settings at the security role level are optional.                                                                                                                                                            | It is configured for an identity store.                                                                                               |
| Applies when                                            | Users sign into Admin Center Users sign into the GroupID portal Users sign into the GroupID Mobile app  | Users reset password or unlock account in the GroupID portal. Users reset password or unlock account in the GroupID mobile app. Helpdesk users need to verify the identity of users before resetting their password and unlocking their account in Admin Center. | Unenrolled users attempt to reset their identity store account password or unlock account using the GroupID portal or the mobile app. |
| Supported authentication types                          | - Security Questions - SMS - Email - Authenticator - YubiKey - Windows Hello                            | - Security Questions - SMS - Email - Authenticator - Linked Account - YubiKey - Windows Hello                                                                                                                                                                    | - Security Questions - SMS - Email                                                                                                    |
| Number of authentication types required to authenticate | Only one                                                                                                | Can be more than one, as set by the administrator                                                                                                                                                                                                                | Can be one or more, as set by the administrator                                                                                       |

NOTE: Account unlock is not supported in a Microsoft Entra ID identity store.

**See Also**

- [Enable Authentication Types](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/authtypes.md)
- [Set Up Authentication Types](/versioned_docs/groupid_11.0/groupid/admincenter/setupauth/overview.md)
- [Authentication Policy for Security Roles](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/authentication.md)
- [Configure Second Factor Authentication](/versioned_docs/groupid_11.0/groupid/admincenter/setupauth/sfa.md)
- [Configure Multifactor Authentication](/versioned_docs/groupid_11.0/groupid/admincenter/setupauth/mfa.md)
- [Second Way Authentication - SWA](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/security/secondwayauthentication.md)
- [Enroll with Authentication Types](/versioned_docs/groupid_11.0/groupid/admincenter/enroll.md)
- [Authenticate with Authentication Types](/versioned_docs/groupid_11.0/groupid/admincenter/authenticate.md)

# Register in Microsoft Entra ID

To use Microsoft Entra ID, formerly Azure Active Directory, identity provider, Directory Manager must first be registered in Microsoft Entra Admin Center portal. The registration grants Directory Manager access to a particular Microsoft Entra ID Directory and its data, such as Microsoft Entra ID groups and users.

Directory Manager requires:

- An application registered for Directory Manager in Microsoft Entra ID (with the Microsoft Graph API and Exchange API permissions).
- A Microsoft Entra ID Directory Role for the service account for the Microsoft Entra ID identity store.

  NOTE: See the [All Role](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#All-Role) section for [User Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#User-Administrator) and [Exchange Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#Exchange-Administrator) role permissions in [Microsoft Entra built-in roles](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#Microsoft-Entra-built-in-roles).

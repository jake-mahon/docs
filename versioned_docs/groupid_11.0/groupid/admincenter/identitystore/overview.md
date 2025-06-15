# Identity Stores

GroupID enables you to create an identity store on an identity provider and perform different
functions in that provider through the identity store. These functions include:

- Group management tasks, such as creating groups, scheduling group updates, and expiring groups.
- User management tasks, such as creating users and mailboxes, managing users’ profiles, and
  managing direct reports.
- Bulk user provisioning and deprovisioning in an identity provider, database or even a file, such
  as an Excel file.
- Entitlement related tasks, such as updating the effective NTFS permissions for shared resources on
  a file server.
- Reporting and analytics.

GroupID supports the following identity providers for creating an identity store, to perform
identity and access management tasks:

- Active Directory
- Microsoft Entra ID
- Generic LDAP
- Google Workspace

Identity stores created for these providers can also be used as source and destination in
Synchronize jobs for bulk user management tasks.

You can also link Active Directory and Microsoft Entra ID identity stores to sync identical objects
there.

NOTE: You can define a custom identity store for non-supported identity providers in GroupID.
Contact Netwrix Client Services for support.

**See Also**

- [Create an Identity Store](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/create.md)
- [Manage an Identity Store](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/manage.md)
- [Configure an Identity Store](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure.md)
- [Link Identity Stores](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/link/overview.md)

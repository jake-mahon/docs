# Security Role Policies

You can define policies for security roles. Along with role permissions, these policies also control what role members can do in GroupID.

You can define the following policies for a role:

- Group Owners Policy
- Group Name Prefixes Policy
- New Object Policy
- Search Policy
- Authentication Policy
- Password Policy
- Helpdesk Policy
- Synchronize Policy
- Query Designer Policy

In this way, you can create security roles with varying degrees of policy restrictions.

NOTE: For users with multiple roles, the policies specified for the highest priority role apply (see [Priority](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md#priority)). The _Search policy_,
_New Object policy_, and _Group Name Prefixes_ policy, however, apply with respect to all assigned roles. For example, if different search containers are specified for two different roles of a user, that
user can search and view objects in both containers.

__See Also__

- [Security Roles](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/overview.md)
- [Create a Security Role](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/create.md)
- [Manage Security Roles](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md)
- [Group Owners Policy](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/groupowners.md)
- [Set Group Name Prefixes](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/directoryservice/prefixes.md)
- [New Object Policy](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/newobject.md)
- [Search Policy](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/search.md)
- [Authentication Policy for Security Roles](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/authentication.md)
- [Set a Password Policy ](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/password.md)
- [Helpdesk Policy](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/helpdesk.md)
- [Synchronize Policy](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/synchronize.md)
- [ Query Designer Policy](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/querydesigner.md)

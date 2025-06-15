# Security Role Policies

You can define policies for security roles. Along with role permissions, these policies also control what role members can do in Directory Manager.

You can define the following policies for a role:

- [Group Owners Policy](groupowners.md)
- [Group Name Prefixes](../../identitystore/configure/directoryservice/prefixes.md)
- [New Object Policy](newobject.md)
- [Search Policy](search.md)
- [Authentication Policy for Security Roles](authentication.md)
- [Directory Manage Password Policy ](password.md)
- [Netwrix Password Policy Enforcer Policies](../../identitystore/configure/directoryservice/ppe/overview.md)
- [Helpdesk Policy](helpdesk.md)
- [Synchronize Policy](synchronize.md)
- [Membership Object Type Enforcement Policy](membershipobjecttypeenforcement.md)

NOTE: For users with multiple roles, the policies specified for the highest priority role apply (see [Priority](../manage.md)). The _[Search Policy](search.md)_,
_[New Object Policy](newobject.md)_, and _[Group Name Prefixes](../../identitystore/configure/directoryservice/prefixes.md)_ policy, however, apply with respect to all assigned roles. For example, if different search containers are specified for two different roles of a user, that
user can search and view objects in both containers. See the following topics for additional information on security roles:

- [Security Roles](../overview.md)
- [Create a Security Role](../create.md)
- [Manage Security Roles](../manage.md)

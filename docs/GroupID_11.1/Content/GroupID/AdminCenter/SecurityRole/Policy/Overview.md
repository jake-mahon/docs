---
sidebar_position: 7359
title: Security Role Policies
---

# Security Role Policies

You can define policies for security roles. Along with role permissions, these policies also control what role members can do in Directory Manager.

You can define the following policies for a role:

* [Group Owners Policy](GroupOwners "Group Owners Policy")
* [Group Name Prefixes](../../IdentityStore/Configure/DirectoryService/Prefixes "Group Name Prefixes")
* [New Object Policy](NewObject "New Object Policy")
* [Search Policy](Search "Search Policy")
* [Authentication Policy for Security Roles](Authentication "Authentication Policy for Security Roles")
* [Directory Manage Password Policy](Password "Directory Manage Password Policy")
* [Netwrix Password Policy Enforcer Policies](../../IdentityStore/Configure/DirectoryService/PPE/Overview "Netwrix Password Policy Enforcer Policies")
* [Helpdesk Policy](Helpdesk "Helpdesk Policy")
* [Synchronize Policy](Synchronize "Synchronize Policy")
* [Membership Object Type Enforcement Policy](MembershipObjectTypeEnforcement "Membership Object Type Enforcement Policy")

NOTE: For users with multiple roles, the policies specified for the highest priority role apply (see [Priority](../Manage#Priority "Priority")). The *[Search Policy](Search "Search Policy")*,
*[New Object Policy](NewObject "New Object Policy")*, and *[Group Name Prefixes](../../IdentityStore/Configure/DirectoryService/Prefixes "Group Name Prefixes")* policy, however, apply with respect to all assigned roles. For example, if different search containers are specified for two different roles of a user, that
user can search and view objects in both containers. See the following topics for additional information on security roles:

* [Security Roles](../Overview "Security Roles")
* [Create a Security Role](../Create "Create a Security Role")
* [Manage Security Roles](../Manage "Manage Security Roles")
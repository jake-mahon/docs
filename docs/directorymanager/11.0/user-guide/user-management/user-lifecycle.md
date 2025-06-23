---
title: user lifecycle
sidebar_label: user-lifecycle
description: Directory Manager 11.0 documentation for user lifecycle with configuration details, usage instructions, and implementation guidance.
---

# Extend-User

Use the **Extend-User** commandlet to extend the user lifecycle of an expired user for specified
period of days.

## Syntax

```
Extend-User
-Identity <string[]>
[-IdentityStoreId <Int32>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <PSCredential>]
[<CommonParameters>]

```

## Required Parameter

- Identity

Example:

The following cmdlet extends the profile validation period for the specified user. The period is
extended up to the specified days for the identity store.

```
Extend-User -Identity "CN=ImanamiUser100,OU=BulkUsers,DC=gid,DC=local"
```

See Also

- [All Commands](/docs/directorymanager/11.0/automation/management-shell/getting-started.md)
- [User Lifecycle Commands ](/docs/directorymanager/11.0/user-guide/user-management/user-lifecycle.md)
- [Parameters](/docs/directorymanager/11.0/automation/management-shell/getting-started.md)

# Get-Status

Use the **Get-Status** command to know the status of a specified user as per the profile validation
criteria defined for the identity store.

## Syntax

```
Get-Status
-Manager <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Manager

Example:

The following command provides information about the status of the specified user as per the
criteria defined for user lifecycle for the connected identity store. It also provides information
on the number of days left to validate the profile again.

```
Get-Status –Manager "Richard"
```

See Also

- [All Commands](/docs/directorymanager/11.0/automation/management-shell/getting-started.md)
- [User Lifecycle Commands ](/docs/directorymanager/11.0/user-guide/user-management/user-lifecycle.md)
- [Parameters](/docs/directorymanager/11.0/automation/management-shell/getting-started.md)

# User Lifecycle Commands

This section covers the cmdlets for performing user lifecycle tasks such as:

- [Extend-User](/docs/directorymanager/11.0/user-guide/user-management/user-lifecycle.md):
  activates a user account for a specific number of days
- [Get-Status](/docs/directorymanager/11.0/user-guide/user-management/user-lifecycle.md):
  provides the status of a user as per the profile validation criteria.
- [Reinstate-User](/docs/directorymanager/11.0/user-guide/user-management/user-lifecycle.md):
  activates or disables a user.
- [Terminate-DirectReports](/docs/directorymanager/11.0/user-guide/user-management/user-lifecycle.md):
  terminates direct reports of a user.
- [Transfer-DirectReports ](/docs/directorymanager/11.0/user-guide/user-management/user-lifecycle.md):
  transfers direct reports of a user.

See Also

- [GroupID Management Shell](/docs/directorymanager/11.0/automation/management-shell/index.md)
- [All Commands](/docs/directorymanager/11.0/automation/management-shell/getting-started.md)
- [Parameters](/docs/directorymanager/11.0/automation/management-shell/getting-started.md)

# Reinstate-User

Use the **Reinstate-User** command to activate or disable a user. Users can be disabled for any of
the following reasons:

- Users that have been disabled for not validating their profiles within the required period.
- Users that have been terminated or disabled by their respective managers.
- Users that are disabled in the directory.

An administrator or member of Helpdesk role can reinstate a disabled user.

## Syntax

```
Reinstate-User
-Identity <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command reinstates the specified disabled user of the connected identity store.

```
Reinstate-User -Identity "Farzana Jafar"
```

See Also

- [All Commands](/docs/directorymanager/11.0/automation/management-shell/getting-started.md)
- [User Lifecycle Commands ](/docs/directorymanager/11.0/user-guide/user-management/user-lifecycle.md)
- [Parameters](/docs/directorymanager/11.0/automation/management-shell/getting-started.md)

# Terminate-DirectReports

Use the **Terminate-DirectRreports** command to terminate user(s). Specify manager of the user you
want to terminate.

NOTE: You can perform this function in directory as per your role and permissions.

## Syntax

```
Terminate-DirectReports 
  -DirectReports <string[]> 
  -Manager <string> 
  [-IdentityStoreId <int>] 
  [-SecurityToken <CustomClaimsPrincipal>] 
  [-Credential <pscredential>] 
  [<CommonParameters>]

```

## Required Parameters

- DirectReports
- Manager

Example:

The following command terminates the specified users in the connected identity store. Their Manager
is also specified in the command who will receive notification as per the defined workflow.

```
Terminate-DirectReports -DirectReports "Irfan","Naeem" -Manager "Raja"
```

See Also

- [All Commands](/docs/directorymanager/11.0/automation/management-shell/getting-started.md)
- [User Lifecycle Commands ](/docs/directorymanager/11.0/user-guide/user-management/user-lifecycle.md)
- [Parameters](/docs/directorymanager/11.0/automation/management-shell/getting-started.md)

# Transfer-DirectReports

Use the **Transfer-DirectReports** commandlet to transfer direct report(s) in the connected identity
store. Specify manager who will approve this transfer.

NOTE: You can perform this function in directory as per your role and permissions.

## Syntax

```
Transfer-DirectReports
-DirectReports <string[]>
-Manager <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameters

- DirectReports
- Manager

Example

The following command transfers two direct reports to Manager Robin.

```
Transfer-DirectReports -DirectReports "F Jafar","azram" -Manager "Robin"
```

See Also

- [All Commands](/docs/directorymanager/11.0/automation/management-shell/getting-started.md)
- [User Lifecycle Commands ](/docs/directorymanager/11.0/user-guide/user-management/user-lifecycle.md)
- [Parameters](/docs/directorymanager/11.0/automation/management-shell/getting-started.md)

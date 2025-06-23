---
title: extenduser Cmdlet
sidebar_label: extenduser
description: PowerShell cmdlet reference for extenduser with parameter details, syntax examples, and usage instructions for Directory Manager.
---

# Extend-User

Use the Extend-User commandlet to extend the user lifecycle of an expired user for specified period
of days.

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

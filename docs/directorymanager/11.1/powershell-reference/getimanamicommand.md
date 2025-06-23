---
title: Get imanamicommand Cmdlet
sidebar_label: getimanamicommand
description: PowerShell cmdlet reference for getimanamicommand with parameter details, syntax examples, and usage instructions for Directory Manager.
---

# Get-ImanamiCommand

Use the Get-ImanamiCommand cmdlet to retrieve basic information about Directory Manager Management
Shell commandlets and command elements.

## Syntax

```
Get-ImanamiCommand
[-Name <string[]>]
[-Verb <string>]
[-Noun <string>]
[-AttributesToLoad <string[]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

The following command shows information about all commandlets.

```
Get-ImanamiCommand
```

Example 2:

The following command gets all commandlets and command elements with the word Set in their name.

```
Get-ImanamiCommand -Name Set*
```

Example 3:

The following command gets all commandlets and command elements with the letter Y anywhere in the
verb of their name.

```
Get-ImanamiCommand -Verb *Y*
```

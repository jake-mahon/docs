---
title: Get connectedstoreinformation Cmdlet
sidebar_label: getconnectedstoreinformation
description: PowerShell cmdlet reference for getconnectedstoreinformation with parameter details, syntax examples, and usage instructions for Directory Manager.
---

# Get-ConnectedStoreInformation

The Get-ConnectedStoreInformation commandlet retrieves information about the identity store
connected to the current instance of the Management Shell.

## Syntax

```
Get-ConnectedStoreInformation
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

The example displays name of the connected identity store, the last replication time to
Elasticsearch, and messaging servers configured in the connected identity store.

```
Get-ConnectedStoreInformation
```

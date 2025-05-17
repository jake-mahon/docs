---
sidebar_position: 298
title: Bulk Resource Reconciliation Access Control Rules
---

# Bulk Resource Reconciliation Access Control Rules

The following example assigns to the Administrator profile the rights to reconcile simultaneously several resources from the Directory\_User entity type.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```

```
The scaffolding generates the following scaffoldings:

* ReconciliateResourcesAccessControlRules: Generates the permissions to access the resource reconciliation pages for a given entity type and profile. See the [Reconciliate Resources Access Control Rules](../reconciliateresourcesaccesscontrolrules/index "ReconciliateResourcesAccessControlRules") topic for additional information.

## Properties

| Property | Type | Description |
| --- | --- | --- |
| EntityType required | String | Identifier of the entity type involved in the scaffolding. |
| Profile required | String | Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
```
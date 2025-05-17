---
sidebar_position: 338
title: Manual Provisioning Resource Type Mapping
---

# Manual Provisioning Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```

```
## Properties

| Property | Type | Description |
| --- | --- | --- |
| Connection required | String | Identifier of the corresponding connection. |
| TicketSynchroIsNotAvailable optional | Boolean | True to set synchronization as unavailable for this resource type. Once the ticket is closed and the resource is created, updated or deleted, then the assignment's status is directly set to Verified.  Only used with the package for tickets. See the [ServiceNow Ticket](../../../../../connectors/references-packages/servicenow-ticket/index "ServiceNow Ticket") topic for additional information. |
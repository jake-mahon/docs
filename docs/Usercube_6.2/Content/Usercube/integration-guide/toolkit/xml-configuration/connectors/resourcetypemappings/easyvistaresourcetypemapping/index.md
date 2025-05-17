---
sidebar_position: 986
title: Easy Vista Resource Type Mapping
---

# Easy Vista Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```

```
## Properties

| Property | Type | Description |
| --- | --- | --- |
| CatalogCode required | String | Code of the catalog. It is possible to define three catalog codes, one for each provisioning action (add, modify, delete) by separating them with ¤, for example 42¤25¤43. |
| Connection required | String | Identifier of the corresponding connection. |
| RecipientId required | String | Identifier of the ticket's recipient. |
| Description optional | String | File path of the template used for the generation of the ticket description. |
| ImpactId optional | String | [Impact](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#Impact) of the ticket. |
| SeverityId optional | String | [Severity level](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#Gravities) of the ticket. |
| TicketSynchroIsNotAvailable default value: false | Boolean | True to set synchronization as unavailable for this resource type. Once the ticket is closed and the resource is created, updated or deleted, then the assignment's status is directly set to Verified.  Only used with the package for tickets. See the [ServiceNow Ticket](../../../../../connectors/references-packages/servicenow-ticket/index "ServiceNow Ticket") topic for additional information. |
| Title optional | String | File path of the template used for the generation of the ticket title. |
| UrgencyId optional | String | [Urgency level](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Service%20Manager%20-%20All%20Menus/References%20Tables/#Urgency) of the ticket. |
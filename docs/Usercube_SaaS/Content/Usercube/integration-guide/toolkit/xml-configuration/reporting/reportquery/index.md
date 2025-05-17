---
sidebar_position: 326
title: Report Query
---

# Report Query

Allows the user to define queries to generate a report in a CSV file. When creating a new ReportQuery it is recommended to also create the linked [Menu Item](../../user-interface/menuitem/index "Menu Item").

## Examples

```
    

    

    

```
## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1 required | **Type**  String  **Description** Display name of the report query in language 1 (up to 16). |
| Identifier required | **Type**  String  **Description** Report query Identifier. |
| Query required | **Type**  String  **Description** The report query written following Identity Manager EBNF Grammar rules. |
| ReturnedEntityType required | **Type**  Int64  **Description** Returned Entity Type ID. The entity type can be seen as the FROM of a sql query. |